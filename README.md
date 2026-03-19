# Brother Tree Widget

This tiny project renders a hierarchical, fraternity brother tree using [`d3-org-chart`](https://github.com/bumbeishvili/org-chart).

## Usage as a Web Component

Load the web component onto your website from this repository with the following HTML snippet:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/RyanCarroll7/brother-tree-widget@{{version}}/dist/brother-tree.min.js"></script>
<link rel="module" src="https://cdn.jsdelivr.net/gh/RyanCarroll7/brother-tree-widget@{{version}}/dist/brother-tree.min.css">

<brother-tree api-url="{{your-api-url}}/brothers/"></brother-tree>
```

- `api-url` - optional attribute specifying the endpoint to fetch brother data from. Defaults to `http://localhost:8000/api/brothers/`.

## Development

```bash
npm install
npm run dev    # start development server (Vite)
npm run build  # produce production bundle
```

## Contributing

Feel free to open issues or pull requests if you need additional features or bug fixes.
