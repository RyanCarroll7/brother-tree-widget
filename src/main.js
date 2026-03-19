import "./styles.css";
import { OrgChart } from "d3-org-chart";
import { select } from "d3-selection";

export class BrotherTree extends HTMLElement {
    static defaultApiUrl = "http://localhost:8000/api/brothers/";
    static observedAttributes = ["api-url"];

    brotherChart = new OrgChart();
    container;

    constructor() {
        super();
        this.innerHTML = `
            <div class="brother-tree-container">
                <div class="brother-tree-actions">
                    <button id="expand-all">Expand All</button>
                    <button id="collapse-all">Collapse All</button>
                    <button id="fit">Fit</button>
                </div>
                <div id="brother-tree-chart-container" class="brother-tree-chart-container"></div>
            </div>
            `;
        // use shadow DOM so styles are encapsulated
        // this.attachShadow({ mode: "open" }).innerHTML = ...;
        // const sheet = new CSSStyleSheet();
        // sheet.replaceSync(stylesText);
        // this.shadowRoot.adoptedStyleSheets = [sheet];
        this.container = this.querySelector("#brother-tree-chart-container");
    }

    attributeChangedCallback(oldVal, newVal) {
        if (document.readyState === "complete" && oldVal !== newVal) {
            this._update();
        }
    }

    connectedCallback() {
        // Wire up event listeners for the buttons
        this.querySelector("#expand-all").addEventListener("click", () =>
            this.brotherChart.expandAll(),
        );

        this.querySelector("#collapse-all").addEventListener("click", () => {
            // Capture the ID of the first child of the root before collapsing (deletes node)
            const firstChildId =
                this.brotherChart.getChartState().root.children[0]?.id;
            // Since the real root is an artificial node with id -1, we want to expand the first child
            // of the root after collapsing so that the top level of the tree is still visible
            this.brotherChart
                .collapseAll()
                .setExpanded(firstChildId, true)
                .render();
        });

        this.querySelector("#fit").addEventListener("click", () =>
            this.brotherChart.fit(),
        );

        this._update();
    }

    async _update() {
        // TODO: Handle errors (default data or display custom set message)
        // TODO: remove ngrok header when deployed
        const response = await fetch(
            this.getAttribute("api-url") || BrotherTree.defaultApiUrl,
            { headers: { "ngrok-skip-browser-warning": "true" } },
        );
        const brothers = await response.json();
        brothers.push({ id: -1, bigBrother: null });

        this.renderTree(brothers);
    }

    renderTree(brothers) {
        // TODO: Remove
        console.log(brothers);
        this.brotherChart
            .data(brothers)
            .container(this.container)
            .parentNodeId((d) => d.bigBrother)
            .nodeUpdate(function (node) {
                if (node.data.id === -1) {
                    select(this).style("display", "none");
                }
            })
            .linkUpdate(function (link) {
                if (link.data.bigBrother === -1) {
                    select(this).style("display", "none");
                } else {
                    select(this).style(
                        "stroke",
                        "var(--brother-tree-border-color)",
                    );
                }
            })
            .nodeContent((node) => {
                // TODO: Pictures?
                return `<div class="brother-tree-node">
                            <img class="brother-image" src="${node.data.imageUrl ?? "default.svg"}"/>
                            <div class="brother-name">${node.data.fullName ?? "Henry Winklestein"}</div>
                            <div class="brother-info">${node.data.initiationTerm ? `Joined: ${node.data.initiationTerm}` : ""}</div>
                            <div class="brother-info">${node.data.major ? `Major: ${node.data.major}` : ""}</div>
                        </div>`;
            })
            .expandAll();
    }
}

customElements.define("brother-tree", BrotherTree);
