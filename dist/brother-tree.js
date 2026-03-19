var Gt = "http://www.w3.org/1999/xhtml";
const xe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Gt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Dt(e) {
  var n = e += "", t = n.indexOf(":");
  return t >= 0 && (n = e.slice(0, t)) !== "xmlns" && (e = e.slice(t + 1)), xe.hasOwnProperty(n) ? { space: xe[n], local: e } : e;
}
function yn(e) {
  return function() {
    var n = this.ownerDocument, t = this.namespaceURI;
    return t === Gt && n.documentElement.namespaceURI === Gt ? n.createElement(e) : n.createElementNS(t, e);
  };
}
function xn(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ye(e) {
  var n = Dt(e);
  return (n.local ? xn : yn)(n);
}
function _n() {
}
function se(e) {
  return e == null ? _n : function() {
    return this.querySelector(e);
  };
}
function wn(e) {
  typeof e != "function" && (e = se(e));
  for (var n = this._groups, t = n.length, r = new Array(t), i = 0; i < t; ++i)
    for (var o = n[i], s = o.length, a = r[i] = new Array(s), u, l, c = 0; c < s; ++c)
      (u = o[c]) && (l = e.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), a[c] = l);
  return new D(r, this._parents);
}
function vn(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Cn() {
  return [];
}
function He(e) {
  return e == null ? Cn : function() {
    return this.querySelectorAll(e);
  };
}
function bn(e) {
  return function() {
    return vn(e.apply(this, arguments));
  };
}
function $n(e) {
  typeof e == "function" ? e = bn(e) : e = He(e);
  for (var n = this._groups, t = n.length, r = [], i = [], o = 0; o < t; ++o)
    for (var s = n[o], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && (r.push(e.call(u, u.__data__, l, s)), i.push(u));
  return new D(r, i);
}
function Pe(e) {
  return function() {
    return this.matches(e);
  };
}
function Fe(e) {
  return function(n) {
    return n.matches(e);
  };
}
var En = Array.prototype.find;
function kn(e) {
  return function() {
    return En.call(this.children, e);
  };
}
function Sn() {
  return this.firstElementChild;
}
function Nn(e) {
  return this.select(e == null ? Sn : kn(typeof e == "function" ? e : Fe(e)));
}
var Mn = Array.prototype.filter;
function Bn() {
  return Array.from(this.children);
}
function zn(e) {
  return function() {
    return Mn.call(this.children, e);
  };
}
function Tn(e) {
  return this.selectAll(e == null ? Bn : zn(typeof e == "function" ? e : Fe(e)));
}
function An(e) {
  typeof e != "function" && (e = Pe(e));
  for (var n = this._groups, t = n.length, r = new Array(t), i = 0; i < t; ++i)
    for (var o = n[i], s = o.length, a = r[i] = [], u, l = 0; l < s; ++l)
      (u = o[l]) && e.call(u, u.__data__, l, o) && a.push(u);
  return new D(r, this._parents);
}
function Oe(e) {
  return new Array(e.length);
}
function Rn() {
  return new D(this._enter || this._groups.map(Oe), this._parents);
}
function Bt(e, n) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = n;
}
Bt.prototype = {
  constructor: Bt,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, n) {
    return this._parent.insertBefore(e, n);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Xn(e) {
  return function() {
    return e;
  };
}
function Ln(e, n, t, r, i, o) {
  for (var s = 0, a, u = n.length, l = o.length; s < l; ++s)
    (a = n[s]) ? (a.__data__ = o[s], r[s] = a) : t[s] = new Bt(e, o[s]);
  for (; s < u; ++s)
    (a = n[s]) && (i[s] = a);
}
function Dn(e, n, t, r, i, o, s) {
  var a, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, d = new Array(c), p;
  for (a = 0; a < c; ++a)
    (u = n[a]) && (d[a] = p = s.call(u, u.__data__, a, n) + "", l.has(p) ? i[a] = u : l.set(p, u));
  for (a = 0; a < f; ++a)
    p = s.call(e, o[a], a, o) + "", (u = l.get(p)) ? (r[a] = u, u.__data__ = o[a], l.delete(p)) : t[a] = new Bt(e, o[a]);
  for (a = 0; a < c; ++a)
    (u = n[a]) && l.get(d[a]) === u && (i[a] = u);
}
function In(e) {
  return e.__data__;
}
function Yn(e, n) {
  if (!arguments.length) return Array.from(this, In);
  var t = n ? Dn : Ln, r = this._parents, i = this._groups;
  typeof e != "function" && (e = Xn(e));
  for (var o = i.length, s = new Array(o), a = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], d = f.length, p = Hn(e.call(c, c && c.__data__, l, r)), x = p.length, y = a[l] = new Array(x), C = s[l] = new Array(x), _ = u[l] = new Array(d);
    t(c, f, y, C, _, p, n);
    for (var $ = 0, S = 0, k, B; $ < x; ++$)
      if (k = y[$]) {
        for ($ >= S && (S = $ + 1); !(B = C[S]) && ++S < x; ) ;
        k._next = B || null;
      }
  }
  return s = new D(s, r), s._enter = a, s._exit = u, s;
}
function Hn(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Pn() {
  return new D(this._exit || this._groups.map(Oe), this._parents);
}
function Fn(e, n, t) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), n != null && (i = n(i), i && (i = i.selection())), t == null ? o.remove() : t(o), r && i ? r.merge(i).order() : i;
}
function On(e) {
  for (var n = e.selection ? e.selection() : e, t = this._groups, r = n._groups, i = t.length, o = r.length, s = Math.min(i, o), a = new Array(i), u = 0; u < s; ++u)
    for (var l = t[u], c = r[u], f = l.length, d = a[u] = new Array(f), p, x = 0; x < f; ++x)
      (p = l[x] || c[x]) && (d[x] = p);
  for (; u < i; ++u)
    a[u] = t[u];
  return new D(a, this._parents);
}
function qn() {
  for (var e = this._groups, n = -1, t = e.length; ++n < t; )
    for (var r = e[n], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Wn(e) {
  e || (e = Un);
  function n(f, d) {
    return f && d ? e(f.__data__, d.__data__) : !f - !d;
  }
  for (var t = this._groups, r = t.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = t[o], a = s.length, u = i[o] = new Array(a), l, c = 0; c < a; ++c)
      (l = s[c]) && (u[c] = l);
    u.sort(n);
  }
  return new D(i, this._parents).order();
}
function Un(e, n) {
  return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function Vn() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Jn() {
  return Array.from(this);
}
function Gn() {
  for (var e = this._groups, n = 0, t = e.length; n < t; ++n)
    for (var r = e[n], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function Zn() {
  let e = 0;
  for (const n of this) ++e;
  return e;
}
function Kn() {
  return !this.node();
}
function Qn(e) {
  for (var n = this._groups, t = 0, r = n.length; t < r; ++t)
    for (var i = n[t], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && e.call(a, a.__data__, o, i);
  return this;
}
function jn(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function tr(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function er(e, n) {
  return function() {
    this.setAttribute(e, n);
  };
}
function nr(e, n) {
  return function() {
    this.setAttributeNS(e.space, e.local, n);
  };
}
function rr(e, n) {
  return function() {
    var t = n.apply(this, arguments);
    t == null ? this.removeAttribute(e) : this.setAttribute(e, t);
  };
}
function ir(e, n) {
  return function() {
    var t = n.apply(this, arguments);
    t == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, t);
  };
}
function or(e, n) {
  var t = Dt(e);
  if (arguments.length < 2) {
    var r = this.node();
    return t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t);
  }
  return this.each((n == null ? t.local ? tr : jn : typeof n == "function" ? t.local ? ir : rr : t.local ? nr : er)(t, n));
}
function qe(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ar(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sr(e, n, t) {
  return function() {
    this.style.setProperty(e, n, t);
  };
}
function lr(e, n, t) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, t);
  };
}
function cr(e, n, t) {
  return arguments.length > 1 ? this.each((n == null ? ar : typeof n == "function" ? lr : sr)(e, n, t ?? "")) : ot(this.node(), e);
}
function ot(e, n) {
  return e.style.getPropertyValue(n) || qe(e).getComputedStyle(e, null).getPropertyValue(n);
}
function ur(e) {
  return function() {
    delete this[e];
  };
}
function hr(e, n) {
  return function() {
    this[e] = n;
  };
}
function fr(e, n) {
  return function() {
    var t = n.apply(this, arguments);
    t == null ? delete this[e] : this[e] = t;
  };
}
function dr(e, n) {
  return arguments.length > 1 ? this.each((n == null ? ur : typeof n == "function" ? fr : hr)(e, n)) : this.node()[e];
}
function We(e) {
  return e.trim().split(/^|\s+/);
}
function le(e) {
  return e.classList || new Ue(e);
}
function Ue(e) {
  this._node = e, this._names = We(e.getAttribute("class") || "");
}
Ue.prototype = {
  add: function(e) {
    var n = this._names.indexOf(e);
    n < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var n = this._names.indexOf(e);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Ve(e, n) {
  for (var t = le(e), r = -1, i = n.length; ++r < i; ) t.add(n[r]);
}
function Je(e, n) {
  for (var t = le(e), r = -1, i = n.length; ++r < i; ) t.remove(n[r]);
}
function pr(e) {
  return function() {
    Ve(this, e);
  };
}
function gr(e) {
  return function() {
    Je(this, e);
  };
}
function mr(e, n) {
  return function() {
    (n.apply(this, arguments) ? Ve : Je)(this, e);
  };
}
function yr(e, n) {
  var t = We(e + "");
  if (arguments.length < 2) {
    for (var r = le(this.node()), i = -1, o = t.length; ++i < o; ) if (!r.contains(t[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? mr : n ? pr : gr)(t, n));
}
function xr() {
  this.textContent = "";
}
function _r(e) {
  return function() {
    this.textContent = e;
  };
}
function wr(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function vr(e) {
  return arguments.length ? this.each(e == null ? xr : (typeof e == "function" ? wr : _r)(e)) : this.node().textContent;
}
function Cr() {
  this.innerHTML = "";
}
function br(e) {
  return function() {
    this.innerHTML = e;
  };
}
function $r(e) {
  return function() {
    var n = e.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Er(e) {
  return arguments.length ? this.each(e == null ? Cr : (typeof e == "function" ? $r : br)(e)) : this.node().innerHTML;
}
function kr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Sr() {
  return this.each(kr);
}
function Nr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Mr() {
  return this.each(Nr);
}
function Br(e) {
  var n = typeof e == "function" ? e : Ye(e);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function zr() {
  return null;
}
function Tr(e, n) {
  var t = typeof e == "function" ? e : Ye(e), r = n == null ? zr : typeof n == "function" ? n : se(n);
  return this.select(function() {
    return this.insertBefore(t.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ar() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Rr() {
  return this.each(Ar);
}
function Xr() {
  var e = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function Lr() {
  var e = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(e, this.nextSibling) : e;
}
function Dr(e) {
  return this.select(e ? Lr : Xr);
}
function Ir(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yr(e) {
  return function(n) {
    e.call(this, n, this.__data__);
  };
}
function Hr(e) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var t = "", r = n.indexOf(".");
    return r >= 0 && (t = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: t };
  });
}
function Pr(e) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var t = 0, r = -1, i = n.length, o; t < i; ++t)
        o = n[t], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Fr(e, n, t) {
  return function() {
    var r = this.__on, i, o = Yr(n);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((i = r[s]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = t), i.value = n;
          return;
        }
    }
    this.addEventListener(e.type, o, t), i = { type: e.type, name: e.name, value: n, listener: o, options: t }, r ? r.push(i) : this.__on = [i];
  };
}
function Or(e, n, t) {
  var r = Hr(e + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, c; u < l; ++u)
        for (i = 0, c = a[u]; i < o; ++i)
          if ((s = r[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = n ? Fr : Pr, i = 0; i < o; ++i) this.each(a(r[i], n, t));
  return this;
}
function Ge(e, n, t) {
  var r = qe(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, t) : (i = r.document.createEvent("Event"), t ? (i.initEvent(n, t.bubbles, t.cancelable), i.detail = t.detail) : i.initEvent(n, !1, !1)), e.dispatchEvent(i);
}
function qr(e, n) {
  return function() {
    return Ge(this, e, n);
  };
}
function Wr(e, n) {
  return function() {
    return Ge(this, e, n.apply(this, arguments));
  };
}
function Ur(e, n) {
  return this.each((typeof n == "function" ? Wr : qr)(e, n));
}
function* Vr() {
  for (var e = this._groups, n = 0, t = e.length; n < t; ++n)
    for (var r = e[n], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var Ze = [null];
function D(e, n) {
  this._groups = e, this._parents = n;
}
function lt() {
  return new D([[document.documentElement]], Ze);
}
function Jr() {
  return this;
}
D.prototype = lt.prototype = {
  constructor: D,
  select: wn,
  selectAll: $n,
  selectChild: Nn,
  selectChildren: Tn,
  filter: An,
  data: Yn,
  enter: Rn,
  exit: Pn,
  join: Fn,
  merge: On,
  selection: Jr,
  order: qn,
  sort: Wn,
  call: Vn,
  nodes: Jn,
  node: Gn,
  size: Zn,
  empty: Kn,
  each: Qn,
  attr: or,
  style: cr,
  property: dr,
  classed: yr,
  text: vr,
  html: Er,
  raise: Sr,
  lower: Mr,
  append: Br,
  insert: Tr,
  remove: Rr,
  clone: Dr,
  datum: Ir,
  on: Or,
  dispatch: Ur,
  [Symbol.iterator]: Vr
};
function X(e) {
  return typeof e == "string" ? new D([[document.querySelector(e)]], [document.documentElement]) : new D([[e]], Ze);
}
function Gr(e) {
  let n;
  for (; n = e.sourceEvent; ) e = n;
  return e;
}
function j(e, n) {
  if (e = Gr(e), n === void 0 && (n = e.currentTarget), n) {
    var t = n.ownerSVGElement || n;
    if (t.createSVGPoint) {
      var r = t.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [e.clientX - i.left - n.clientLeft, e.clientY - i.top - n.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
function Zr(e, n) {
  var t = 0, r = 0;
  return Float64Array.from(e, n === void 0 ? (i) => t += +i || 0 : (i) => t += +n(i, r++, e) || 0);
}
function Kr(e, n) {
  let t;
  if (n === void 0)
    for (const r of e)
      r != null && (t < r || t === void 0 && r >= r) && (t = r);
  else {
    let r = -1;
    for (let i of e)
      (i = n(i, ++r, e)) != null && (t < i || t === void 0 && i >= i) && (t = i);
  }
  return t;
}
function Qr(e, n) {
  let t;
  if (n === void 0)
    for (const r of e)
      r != null && (t > r || t === void 0 && r >= r) && (t = r);
  else {
    let r = -1;
    for (let i of e)
      (i = n(i, ++r, e)) != null && (t > i || t === void 0 && i >= i) && (t = i);
  }
  return t;
}
function jr(e, n) {
  let t = 0;
  if (n === void 0)
    for (let r of e)
      (r = +r) && (t += r);
  else {
    let r = -1;
    for (let i of e)
      (i = +n(i, ++r, e)) && (t += i);
  }
  return t;
}
function ti(e) {
  var n = 0, t = e.children, r = t && t.length;
  if (!r) n = 1;
  else for (; --r >= 0; ) n += t[r].value;
  e.value = n;
}
function ei() {
  return this.eachAfter(ti);
}
function ni(e, n) {
  let t = -1;
  for (const r of this)
    e.call(n, r, ++t, this);
  return this;
}
function ri(e, n) {
  for (var t = this, r = [t], i, o, s = -1; t = r.pop(); )
    if (e.call(n, t, ++s, this), i = t.children)
      for (o = i.length - 1; o >= 0; --o)
        r.push(i[o]);
  return this;
}
function ii(e, n) {
  for (var t = this, r = [t], i = [], o, s, a, u = -1; t = r.pop(); )
    if (i.push(t), o = t.children)
      for (s = 0, a = o.length; s < a; ++s)
        r.push(o[s]);
  for (; t = i.pop(); )
    e.call(n, t, ++u, this);
  return this;
}
function oi(e, n) {
  let t = -1;
  for (const r of this)
    if (e.call(n, r, ++t, this))
      return r;
}
function ai(e) {
  return this.eachAfter(function(n) {
    for (var t = +e(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; ) t += r[i].value;
    n.value = t;
  });
}
function si(e) {
  return this.eachBefore(function(n) {
    n.children && n.children.sort(e);
  });
}
function li(e) {
  for (var n = this, t = ci(n, e), r = [n]; n !== t; )
    n = n.parent, r.push(n);
  for (var i = r.length; e !== t; )
    r.splice(i, 0, e), e = e.parent;
  return r;
}
function ci(e, n) {
  if (e === n) return e;
  var t = e.ancestors(), r = n.ancestors(), i = null;
  for (e = t.pop(), n = r.pop(); e === n; )
    i = e, e = t.pop(), n = r.pop();
  return i;
}
function ui() {
  for (var e = this, n = [e]; e = e.parent; )
    n.push(e);
  return n;
}
function hi() {
  return Array.from(this);
}
function fi() {
  var e = [];
  return this.eachBefore(function(n) {
    n.children || e.push(n);
  }), e;
}
function di() {
  var e = this, n = [];
  return e.each(function(t) {
    t !== e && n.push({ source: t.parent, target: t });
  }), n;
}
function* pi() {
  var e = this, n, t = [e], r, i, o;
  do
    for (n = t.reverse(), t = []; e = n.pop(); )
      if (yield e, r = e.children)
        for (i = 0, o = r.length; i < o; ++i)
          t.push(r[i]);
  while (t.length);
}
function Ke(e, n) {
  e instanceof Map ? (e = [void 0, e], n === void 0 && (n = yi)) : n === void 0 && (n = mi);
  for (var t = new at(e), r, i = [t], o, s, a, u; r = i.pop(); )
    if ((s = n(r.data)) && (u = (s = Array.from(s)).length))
      for (r.children = s, a = u - 1; a >= 0; --a)
        i.push(o = s[a] = new at(s[a])), o.parent = r, o.depth = r.depth + 1;
  return t.eachBefore(Qe);
}
function gi() {
  return Ke(this).eachBefore(xi);
}
function mi(e) {
  return e.children;
}
function yi(e) {
  return Array.isArray(e) ? e[1] : null;
}
function xi(e) {
  e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function Qe(e) {
  var n = 0;
  do
    e.height = n;
  while ((e = e.parent) && e.height < ++n);
}
function at(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
at.prototype = Ke.prototype = {
  constructor: at,
  count: ei,
  each: ni,
  eachAfter: ii,
  eachBefore: ri,
  find: oi,
  sum: ai,
  sort: si,
  path: li,
  ancestors: ui,
  descendants: hi,
  leaves: fi,
  links: di,
  copy: gi,
  [Symbol.iterator]: pi
};
function Ft(e) {
  return e == null ? null : _i(e);
}
function _i(e) {
  if (typeof e != "function") throw new Error();
  return e;
}
var wi = { depth: -1 }, _e = {}, Ot = {};
function vi(e) {
  return e.id;
}
function Ci(e) {
  return e.parentId;
}
function bi() {
  var e = vi, n = Ci, t;
  function r(i) {
    var o = Array.from(i), s = e, a = n, u, l, c, f, d, p, x, y, C = /* @__PURE__ */ new Map();
    if (t != null) {
      const _ = o.map((k, B) => $i(t(k, B, i))), $ = _.map(we), S = new Set(_).add("");
      for (const k of $)
        S.has(k) || (S.add(k), _.push(k), $.push(we(k)), o.push(Ot));
      s = (k, B) => _[B], a = (k, B) => $[B];
    }
    for (c = 0, u = o.length; c < u; ++c)
      l = o[c], p = o[c] = new at(l), (x = s(l, c, i)) != null && (x += "") && (y = p.id = x, C.set(y, C.has(y) ? _e : p)), (x = a(l, c, i)) != null && (x += "") && (p.parent = x);
    for (c = 0; c < u; ++c)
      if (p = o[c], x = p.parent) {
        if (d = C.get(x), !d) throw new Error("missing: " + x);
        if (d === _e) throw new Error("ambiguous: " + x);
        d.children ? d.children.push(p) : d.children = [p], p.parent = d;
      } else {
        if (f) throw new Error("multiple roots");
        f = p;
      }
    if (!f) throw new Error("no root");
    if (t != null) {
      for (; f.data === Ot && f.children.length === 1; )
        f = f.children[0], --u;
      for (let _ = o.length - 1; _ >= 0 && (p = o[_], p.data === Ot); --_)
        p.data = null;
    }
    if (f.parent = wi, f.eachBefore(function(_) {
      _.depth = _.parent.depth + 1, --u;
    }).eachBefore(Qe), f.parent = null, u > 0) throw new Error("cycle");
    return f;
  }
  return r.id = function(i) {
    return arguments.length ? (e = Ft(i), r) : e;
  }, r.parentId = function(i) {
    return arguments.length ? (n = Ft(i), r) : n;
  }, r.path = function(i) {
    return arguments.length ? (t = Ft(i), r) : t;
  }, r;
}
function $i(e) {
  e = `${e}`;
  let n = e.length;
  return Zt(e, n - 1) && !Zt(e, n - 2) && (e = e.slice(0, -1)), e[0] === "/" ? e : `/${e}`;
}
function we(e) {
  let n = e.length;
  if (n < 2) return "";
  for (; --n > 1 && !Zt(e, n); ) ;
  return e.slice(0, n);
}
function Zt(e, n) {
  if (e[n] === "/") {
    let t = 0;
    for (; n > 0 && e[--n] === "\\"; ) ++t;
    if ((t & 1) === 0) return !0;
  }
  return !1;
}
function Ei(e, n) {
  return e.parent === n.parent ? 1 : 2;
}
function qt(e) {
  var n = e.children;
  return n ? n[0] : e.t;
}
function Wt(e) {
  var n = e.children;
  return n ? n[n.length - 1] : e.t;
}
function ki(e, n, t) {
  var r = t / (n.i - e.i);
  n.c -= r, n.s += t, e.c += r, n.z += t, n.m += t;
}
function Si(e) {
  for (var n = 0, t = 0, r = e.children, i = r.length, o; --i >= 0; )
    o = r[i], o.z += n, o.m += n, n += o.s + (t += o.c);
}
function Ni(e, n, t) {
  return e.a.parent === n.parent ? e.a : t;
}
function Et(e, n) {
  this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
}
Et.prototype = Object.create(at.prototype);
function Mi(e) {
  for (var n = new Et(e, 0), t, r = [n], i, o, s, a; t = r.pop(); )
    if (o = t._.children)
      for (t.children = new Array(a = o.length), s = a - 1; s >= 0; --s)
        r.push(i = t.children[s] = new Et(o[s], s)), i.parent = t;
  return (n.parent = new Et(null, 0)).children = [n], n;
}
function Bi() {
  var e = Ei, n = 1, t = 1, r = null;
  function i(l) {
    var c = Mi(l);
    if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(s), r) l.eachBefore(u);
    else {
      var f = l, d = l, p = l;
      l.eachBefore(function($) {
        $.x < f.x && (f = $), $.x > d.x && (d = $), $.depth > p.depth && (p = $);
      });
      var x = f === d ? 1 : e(f, d) / 2, y = x - f.x, C = n / (d.x + x + y), _ = t / (p.depth || 1);
      l.eachBefore(function($) {
        $.x = ($.x + y) * C, $.y = $.depth * _;
      });
    }
    return l;
  }
  function o(l) {
    var c = l.children, f = l.parent.children, d = l.i ? f[l.i - 1] : null;
    if (c) {
      Si(l);
      var p = (c[0].z + c[c.length - 1].z) / 2;
      d ? (l.z = d.z + e(l._, d._), l.m = l.z - p) : l.z = p;
    } else d && (l.z = d.z + e(l._, d._));
    l.parent.A = a(l, d, l.parent.A || f[0]);
  }
  function s(l) {
    l._.x = l.z + l.parent.m, l.m += l.parent.m;
  }
  function a(l, c, f) {
    if (c) {
      for (var d = l, p = l, x = c, y = d.parent.children[0], C = d.m, _ = p.m, $ = x.m, S = y.m, k; x = Wt(x), d = qt(d), x && d; )
        y = qt(y), p = Wt(p), p.a = l, k = x.z + $ - d.z - C + e(x._, d._), k > 0 && (ki(Ni(x, l, f), l, k), C += k, _ += k), $ += x.m, C += d.m, S += y.m, _ += p.m;
      x && !Wt(p) && (p.t = x, p.m += $ - _), d && !qt(y) && (y.t = d, y.m += C - S, f = l);
    }
    return f;
  }
  function u(l) {
    l.x *= n, l.y = l.depth * t;
  }
  return i.separation = function(l) {
    return arguments.length ? (e = l, i) : e;
  }, i.size = function(l) {
    return arguments.length ? (r = !1, n = +l[0], t = +l[1], i) : r ? null : [n, t];
  }, i.nodeSize = function(l) {
    return arguments.length ? (r = !0, n = +l[0], t = +l[1], i) : r ? [n, t] : null;
  }, i;
}
var zi = { value: () => {
} };
function ce() {
  for (var e = 0, n = arguments.length, t = {}, r; e < n; ++e) {
    if (!(r = arguments[e] + "") || r in t || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    t[r] = [];
  }
  return new kt(t);
}
function kt(e) {
  this._ = e;
}
function Ti(e, n) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    if (i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name: r };
  });
}
kt.prototype = ce.prototype = {
  constructor: kt,
  on: function(e, n) {
    var t = this._, r = Ti(e + "", t), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (e = r[o]).type) && (i = Ai(t[i], e.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < s; )
      if (i = (e = r[o]).type) t[i] = ve(t[i], e.name, n);
      else if (n == null) for (i in t) t[i] = ve(t[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, n = this._;
    for (var t in n) e[t] = n[t].slice();
    return new kt(e);
  },
  call: function(e, n) {
    if ((i = arguments.length - 2) > 0) for (var t = new Array(i), r = 0, i, o; r < i; ++r) t[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, t);
  },
  apply: function(e, n, t) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, t);
  }
};
function Ai(e, n) {
  for (var t = 0, r = e.length, i; t < r; ++t)
    if ((i = e[t]).name === n)
      return i.value;
}
function ve(e, n, t) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === n) {
      e[r] = zi, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return t != null && e.push({ name: n, value: t }), e;
}
const Kt = { capture: !0, passive: !1 };
function Qt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ri(e) {
  var n = e.document.documentElement, t = X(e).on("dragstart.drag", Qt, Kt);
  "onselectstart" in n ? t.on("selectstart.drag", Qt, Kt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Xi(e, n) {
  var t = e.document.documentElement, r = X(e).on("dragstart.drag", null);
  n && (r.on("click.drag", Qt, Kt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in t ? r.on("selectstart.drag", null) : (t.style.MozUserSelect = t.__noselect, delete t.__noselect);
}
function ue(e, n, t) {
  e.prototype = n.prototype = t, t.constructor = e;
}
function je(e, n) {
  var t = Object.create(e.prototype);
  for (var r in n) t[r] = n[r];
  return t;
}
function _t() {
}
var gt = 0.7, zt = 1 / gt, it = "\\s*([+-]?\\d+)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", q = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Li = /^#([0-9a-f]{3,8})$/, Di = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), Ii = new RegExp(`^rgb\\(${q},${q},${q}\\)$`), Yi = new RegExp(`^rgba\\(${it},${it},${it},${mt}\\)$`), Hi = new RegExp(`^rgba\\(${q},${q},${q},${mt}\\)$`), Pi = new RegExp(`^hsl\\(${mt},${q},${q}\\)$`), Fi = new RegExp(`^hsla\\(${mt},${q},${q},${mt}\\)$`), Ce = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ue(_t, yt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: be,
  // Deprecated! Use color.formatHex.
  formatHex: be,
  formatHex8: Oi,
  formatHsl: qi,
  formatRgb: $e,
  toString: $e
});
function be() {
  return this.rgb().formatHex();
}
function Oi() {
  return this.rgb().formatHex8();
}
function qi() {
  return tn(this).formatHsl();
}
function $e() {
  return this.rgb().formatRgb();
}
function yt(e) {
  var n, t;
  return e = (e + "").trim().toLowerCase(), (n = Li.exec(e)) ? (t = n[1].length, n = parseInt(n[1], 16), t === 6 ? Ee(n) : t === 3 ? new L(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : t === 8 ? vt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : t === 4 ? vt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Di.exec(e)) ? new L(n[1], n[2], n[3], 1) : (n = Ii.exec(e)) ? new L(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Yi.exec(e)) ? vt(n[1], n[2], n[3], n[4]) : (n = Hi.exec(e)) ? vt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Pi.exec(e)) ? Ne(n[1], n[2] / 100, n[3] / 100, 1) : (n = Fi.exec(e)) ? Ne(n[1], n[2] / 100, n[3] / 100, n[4]) : Ce.hasOwnProperty(e) ? Ee(Ce[e]) : e === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function Ee(e) {
  return new L(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vt(e, n, t, r) {
  return r <= 0 && (e = n = t = NaN), new L(e, n, t, r);
}
function Wi(e) {
  return e instanceof _t || (e = yt(e)), e ? (e = e.rgb(), new L(e.r, e.g, e.b, e.opacity)) : new L();
}
function jt(e, n, t, r) {
  return arguments.length === 1 ? Wi(e) : new L(e, n, t, r ?? 1);
}
function L(e, n, t, r) {
  this.r = +e, this.g = +n, this.b = +t, this.opacity = +r;
}
ue(L, jt, je(_t, {
  brighter(e) {
    return e = e == null ? zt : Math.pow(zt, e), new L(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? gt : Math.pow(gt, e), new L(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new L(nt(this.r), nt(this.g), nt(this.b), Tt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ke,
  // Deprecated! Use color.formatHex.
  formatHex: ke,
  formatHex8: Ui,
  formatRgb: Se,
  toString: Se
}));
function ke() {
  return `#${et(this.r)}${et(this.g)}${et(this.b)}`;
}
function Ui() {
  return `#${et(this.r)}${et(this.g)}${et(this.b)}${et((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Se() {
  const e = Tt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Tt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function et(e) {
  return e = nt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ne(e, n, t, r) {
  return r <= 0 ? e = n = t = NaN : t <= 0 || t >= 1 ? e = n = NaN : n <= 0 && (e = NaN), new P(e, n, t, r);
}
function tn(e) {
  if (e instanceof P) return new P(e.h, e.s, e.l, e.opacity);
  if (e instanceof _t || (e = yt(e)), !e) return new P();
  if (e instanceof P) return e;
  e = e.rgb();
  var n = e.r / 255, t = e.g / 255, r = e.b / 255, i = Math.min(n, t, r), o = Math.max(n, t, r), s = NaN, a = o - i, u = (o + i) / 2;
  return a ? (n === o ? s = (t - r) / a + (t < r) * 6 : t === o ? s = (r - n) / a + 2 : s = (n - t) / a + 4, a /= u < 0.5 ? o + i : 2 - o - i, s *= 60) : a = u > 0 && u < 1 ? 0 : s, new P(s, a, u, e.opacity);
}
function Vi(e, n, t, r) {
  return arguments.length === 1 ? tn(e) : new P(e, n, t, r ?? 1);
}
function P(e, n, t, r) {
  this.h = +e, this.s = +n, this.l = +t, this.opacity = +r;
}
ue(P, Vi, je(_t, {
  brighter(e) {
    return e = e == null ? zt : Math.pow(zt, e), new P(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? gt : Math.pow(gt, e), new P(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, n = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, r = t + (t < 0.5 ? t : 1 - t) * n, i = 2 * t - r;
    return new L(
      Ut(e >= 240 ? e - 240 : e + 120, i, r),
      Ut(e, i, r),
      Ut(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new P(Me(this.h), Ct(this.s), Ct(this.l), Tt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Tt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Me(this.h)}, ${Ct(this.s) * 100}%, ${Ct(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Me(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ct(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ut(e, n, t) {
  return (e < 60 ? n + (t - n) * e / 60 : e < 180 ? t : e < 240 ? n + (t - n) * (240 - e) / 60 : n) * 255;
}
const en = (e) => () => e;
function Ji(e, n) {
  return function(t) {
    return e + t * n;
  };
}
function Gi(e, n, t) {
  return e = Math.pow(e, t), n = Math.pow(n, t) - e, t = 1 / t, function(r) {
    return Math.pow(e + r * n, t);
  };
}
function Zi(e) {
  return (e = +e) == 1 ? nn : function(n, t) {
    return t - n ? Gi(n, t, e) : en(isNaN(n) ? t : n);
  };
}
function nn(e, n) {
  var t = n - e;
  return t ? Ji(e, t) : en(isNaN(e) ? n : e);
}
const Be = (function e(n) {
  var t = Zi(n);
  function r(i, o) {
    var s = t((i = jt(i)).r, (o = jt(o)).r), a = t(i.g, o.g), u = t(i.b, o.b), l = nn(i.opacity, o.opacity);
    return function(c) {
      return i.r = s(c), i.g = a(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = e, r;
})(1);
function Q(e, n) {
  return e = +e, n = +n, function(t) {
    return e * (1 - t) + n * t;
  };
}
var te = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vt = new RegExp(te.source, "g");
function Ki(e) {
  return function() {
    return e;
  };
}
function Qi(e) {
  return function(n) {
    return e(n) + "";
  };
}
function ji(e, n) {
  var t = te.lastIndex = Vt.lastIndex = 0, r, i, o, s = -1, a = [], u = [];
  for (e = e + "", n = n + ""; (r = te.exec(e)) && (i = Vt.exec(n)); )
    (o = i.index) > t && (o = n.slice(t, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, u.push({ i: s, x: Q(r, i) })), t = Vt.lastIndex;
  return t < n.length && (o = n.slice(t), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? u[0] ? Qi(u[0].x) : Ki(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) a[(f = u[c]).i] = f.x(l);
    return a.join("");
  });
}
var ze = 180 / Math.PI, ee = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function rn(e, n, t, r, i, o) {
  var s, a, u;
  return (s = Math.sqrt(e * e + n * n)) && (e /= s, n /= s), (u = e * t + n * r) && (t -= e * u, r -= n * u), (a = Math.sqrt(t * t + r * r)) && (t /= a, r /= a, u /= a), e * r < n * t && (e = -e, n = -n, u = -u, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, e) * ze,
    skewX: Math.atan(u) * ze,
    scaleX: s,
    scaleY: a
  };
}
var bt;
function to(e) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return n.isIdentity ? ee : rn(n.a, n.b, n.c, n.d, n.e, n.f);
}
function eo(e) {
  return e == null || (bt || (bt = document.createElementNS("http://www.w3.org/2000/svg", "g")), bt.setAttribute("transform", e), !(e = bt.transform.baseVal.consolidate())) ? ee : (e = e.matrix, rn(e.a, e.b, e.c, e.d, e.e, e.f));
}
function on(e, n, t, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, d, p, x) {
    if (l !== f || c !== d) {
      var y = p.push("translate(", null, n, null, t);
      x.push({ i: y - 4, x: Q(l, f) }, { i: y - 2, x: Q(c, d) });
    } else (f || d) && p.push("translate(" + f + n + d + t);
  }
  function s(l, c, f, d) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), d.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: Q(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function a(l, c, f, d) {
    l !== c ? d.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: Q(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, d, p, x) {
    if (l !== f || c !== d) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      x.push({ i: y - 4, x: Q(l, f) }, { i: y - 2, x: Q(c, d) });
    } else (f !== 1 || d !== 1) && p.push(i(p) + "scale(" + f + "," + d + ")");
  }
  return function(l, c) {
    var f = [], d = [];
    return l = e(l), c = e(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, d), s(l.rotate, c.rotate, f, d), a(l.skewX, c.skewX, f, d), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, d), l = c = null, function(p) {
      for (var x = -1, y = d.length, C; ++x < y; ) f[(C = d[x]).i] = C.x(p);
      return f.join("");
    };
  };
}
var no = on(to, "px, ", "px)", "deg)"), ro = on(eo, ", ", ")", ")"), io = 1e-12;
function Te(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function oo(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ao(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const so = (function e(n, t, r) {
  function i(o, s) {
    var a = o[0], u = o[1], l = o[2], c = s[0], f = s[1], d = s[2], p = c - a, x = f - u, y = p * p + x * x, C, _;
    if (y < io)
      _ = Math.log(d / l) / n, C = function(R) {
        return [
          a + R * p,
          u + R * x,
          l * Math.exp(n * R * _)
        ];
      };
    else {
      var $ = Math.sqrt(y), S = (d * d - l * l + r * y) / (2 * l * t * $), k = (d * d - l * l - r * y) / (2 * d * t * $), B = Math.log(Math.sqrt(S * S + 1) - S), A = Math.log(Math.sqrt(k * k + 1) - k);
      _ = (A - B) / n, C = function(R) {
        var U = R * _, I = Te(B), ct = l / (t * $) * (I * ao(n * U + B) - oo(B));
        return [
          a + ct * p,
          u + ct * x,
          l * I / Te(n * U + B)
        ];
      };
    }
    return C.duration = _ * 1e3 * n / Math.SQRT2, C;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), a = s * s, u = a * a;
    return e(s, a, u);
  }, i;
})(Math.SQRT2, 2, 4);
var st = 0, dt = 0, ht = 0, an = 1e3, At, pt, Rt = 0, rt = 0, It = 0, xt = typeof performance == "object" && performance.now ? performance : Date, sn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function he() {
  return rt || (sn(lo), rt = xt.now() + It);
}
function lo() {
  rt = 0;
}
function Xt() {
  this._call = this._time = this._next = null;
}
Xt.prototype = ln.prototype = {
  constructor: Xt,
  restart: function(e, n, t) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    t = (t == null ? he() : +t) + (n == null ? 0 : +n), !this._next && pt !== this && (pt ? pt._next = this : At = this, pt = this), this._call = e, this._time = t, ne();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ne());
  }
};
function ln(e, n, t) {
  var r = new Xt();
  return r.restart(e, n, t), r;
}
function co() {
  he(), ++st;
  for (var e = At, n; e; )
    (n = rt - e._time) >= 0 && e._call.call(void 0, n), e = e._next;
  --st;
}
function Ae() {
  rt = (Rt = xt.now()) + It, st = dt = 0;
  try {
    co();
  } finally {
    st = 0, ho(), rt = 0;
  }
}
function uo() {
  var e = xt.now(), n = e - Rt;
  n > an && (It -= n, Rt = e);
}
function ho() {
  for (var e, n = At, t, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), e = n, n = n._next) : (t = n._next, n._next = null, n = e ? e._next = t : At = t);
  pt = e, ne(r);
}
function ne(e) {
  if (!st) {
    dt && (dt = clearTimeout(dt));
    var n = e - rt;
    n > 24 ? (e < 1 / 0 && (dt = setTimeout(Ae, e - xt.now() - It)), ht && (ht = clearInterval(ht))) : (ht || (Rt = xt.now(), ht = setInterval(uo, an)), st = 1, sn(Ae));
  }
}
function Re(e, n, t) {
  var r = new Xt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), e(i + n);
  }, n, t), r;
}
var fo = ce("start", "end", "cancel", "interrupt"), po = [], cn = 0, Xe = 1, re = 2, St = 3, Le = 4, ie = 5, Nt = 6;
function Yt(e, n, t, r, i, o) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (t in s) return;
  go(e, t, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: fo,
    tween: po,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: cn
  });
}
function fe(e, n) {
  var t = F(e, n);
  if (t.state > cn) throw new Error("too late; already scheduled");
  return t;
}
function W(e, n) {
  var t = F(e, n);
  if (t.state > St) throw new Error("too late; already running");
  return t;
}
function F(e, n) {
  var t = e.__transition;
  if (!t || !(t = t[n])) throw new Error("transition not found");
  return t;
}
function go(e, n, t) {
  var r = e.__transition, i;
  r[n] = t, t.timer = ln(o, 0, t.time);
  function o(l) {
    t.state = Xe, t.timer.restart(s, t.delay, t.time), t.delay <= l && s(l - t.delay);
  }
  function s(l) {
    var c, f, d, p;
    if (t.state !== Xe) return u();
    for (c in r)
      if (p = r[c], p.name === t.name) {
        if (p.state === St) return Re(s);
        p.state === Le ? (p.state = Nt, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = Nt, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[c]);
      }
    if (Re(function() {
      t.state === St && (t.state = Le, t.timer.restart(a, t.delay, t.time), a(l));
    }), t.state = re, t.on.call("start", e, e.__data__, t.index, t.group), t.state === re) {
      for (t.state = St, i = new Array(d = t.tween.length), c = 0, f = -1; c < d; ++c)
        (p = t.tween[c].value.call(e, e.__data__, t.index, t.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function a(l) {
    for (var c = l < t.duration ? t.ease.call(null, l / t.duration) : (t.timer.restart(u), t.state = ie, 1), f = -1, d = i.length; ++f < d; )
      i[f].call(e, c);
    t.state === ie && (t.on.call("end", e, e.__data__, t.index, t.group), u());
  }
  function u() {
    t.state = Nt, t.timer.stop(), delete r[n];
    for (var l in r) return;
    delete e.__transition;
  }
}
function Mt(e, n) {
  var t = e.__transition, r, i, o = !0, s;
  if (t) {
    n = n == null ? null : n + "";
    for (s in t) {
      if ((r = t[s]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > re && r.state < ie, r.state = Nt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete t[s];
    }
    o && delete e.__transition;
  }
}
function mo(e) {
  return this.each(function() {
    Mt(this, e);
  });
}
function yo(e, n) {
  var t, r;
  return function() {
    var i = W(this, e), o = i.tween;
    if (o !== t) {
      r = t = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === n) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function xo(e, n, t) {
  var r, i;
  if (typeof t != "function") throw new Error();
  return function() {
    var o = W(this, e), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: n, value: t }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = a;
          break;
        }
      u === l && i.push(a);
    }
    o.tween = i;
  };
}
function _o(e, n) {
  var t = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = F(this.node(), t).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === e)
        return s.value;
    return null;
  }
  return this.each((n == null ? yo : xo)(t, e, n));
}
function de(e, n, t) {
  var r = e._id;
  return e.each(function() {
    var i = W(this, r);
    (i.value || (i.value = {}))[n] = t.apply(this, arguments);
  }), function(i) {
    return F(i, r).value[n];
  };
}
function un(e, n) {
  var t;
  return (typeof n == "number" ? Q : n instanceof yt ? Be : (t = yt(n)) ? (n = t, Be) : ji)(e, n);
}
function wo(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function vo(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Co(e, n, t) {
  var r, i = t + "", o;
  return function() {
    var s = this.getAttribute(e);
    return s === i ? null : s === r ? o : o = n(r = s, t);
  };
}
function bo(e, n, t) {
  var r, i = t + "", o;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === i ? null : s === r ? o : o = n(r = s, t);
  };
}
function $o(e, n, t) {
  var r, i, o;
  return function() {
    var s, a = t(this), u;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = a + "", s === u ? null : s === r && u === i ? o : (i = u, o = n(r = s, a)));
  };
}
function Eo(e, n, t) {
  var r, i, o;
  return function() {
    var s, a = t(this), u;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = a + "", s === u ? null : s === r && u === i ? o : (i = u, o = n(r = s, a)));
  };
}
function ko(e, n) {
  var t = Dt(e), r = t === "transform" ? ro : un;
  return this.attrTween(e, typeof n == "function" ? (t.local ? Eo : $o)(t, r, de(this, "attr." + e, n)) : n == null ? (t.local ? vo : wo)(t) : (t.local ? bo : Co)(t, r, n));
}
function So(e, n) {
  return function(t) {
    this.setAttribute(e, n.call(this, t));
  };
}
function No(e, n) {
  return function(t) {
    this.setAttributeNS(e.space, e.local, n.call(this, t));
  };
}
function Mo(e, n) {
  var t, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (t = (r = o) && No(e, o)), t;
  }
  return i._value = n, i;
}
function Bo(e, n) {
  var t, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (t = (r = o) && So(e, o)), t;
  }
  return i._value = n, i;
}
function zo(e, n) {
  var t = "attr." + e;
  if (arguments.length < 2) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  var r = Dt(e);
  return this.tween(t, (r.local ? Mo : Bo)(r, n));
}
function To(e, n) {
  return function() {
    fe(this, e).delay = +n.apply(this, arguments);
  };
}
function Ao(e, n) {
  return n = +n, function() {
    fe(this, e).delay = n;
  };
}
function Ro(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? To : Ao)(n, e)) : F(this.node(), n).delay;
}
function Xo(e, n) {
  return function() {
    W(this, e).duration = +n.apply(this, arguments);
  };
}
function Lo(e, n) {
  return n = +n, function() {
    W(this, e).duration = n;
  };
}
function Do(e) {
  var n = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xo : Lo)(n, e)) : F(this.node(), n).duration;
}
function Io(e, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    W(this, e).ease = n;
  };
}
function Yo(e) {
  var n = this._id;
  return arguments.length ? this.each(Io(n, e)) : F(this.node(), n).ease;
}
function Ho(e, n) {
  return function() {
    var t = n.apply(this, arguments);
    if (typeof t != "function") throw new Error();
    W(this, e).ease = t;
  };
}
function Po(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Ho(this._id, e));
}
function Fo(e) {
  typeof e != "function" && (e = Pe(e));
  for (var n = this._groups, t = n.length, r = new Array(t), i = 0; i < t; ++i)
    for (var o = n[i], s = o.length, a = r[i] = [], u, l = 0; l < s; ++l)
      (u = o[l]) && e.call(u, u.__data__, l, o) && a.push(u);
  return new K(r, this._parents, this._name, this._id);
}
function Oo(e) {
  if (e._id !== this._id) throw new Error();
  for (var n = this._groups, t = e._groups, r = n.length, i = t.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var u = n[a], l = t[a], c = u.length, f = s[a] = new Array(c), d, p = 0; p < c; ++p)
      (d = u[p] || l[p]) && (f[p] = d);
  for (; a < r; ++a)
    s[a] = n[a];
  return new K(s, this._parents, this._name, this._id);
}
function qo(e) {
  return (e + "").trim().split(/^|\s+/).every(function(n) {
    var t = n.indexOf(".");
    return t >= 0 && (n = n.slice(0, t)), !n || n === "start";
  });
}
function Wo(e, n, t) {
  var r, i, o = qo(n) ? fe : W;
  return function() {
    var s = o(this, e), a = s.on;
    a !== r && (i = (r = a).copy()).on(n, t), s.on = i;
  };
}
function Uo(e, n) {
  var t = this._id;
  return arguments.length < 2 ? F(this.node(), t).on.on(e) : this.each(Wo(t, e, n));
}
function Vo(e) {
  return function() {
    var n = this.parentNode;
    for (var t in this.__transition) if (+t !== e) return;
    n && n.removeChild(this);
  };
}
function Jo() {
  return this.on("end.remove", Vo(this._id));
}
function Go(e) {
  var n = this._name, t = this._id;
  typeof e != "function" && (e = se(e));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], u = a.length, l = o[s] = new Array(u), c, f, d = 0; d < u; ++d)
      (c = a[d]) && (f = e.call(c, c.__data__, d, a)) && ("__data__" in c && (f.__data__ = c.__data__), l[d] = f, Yt(l[d], n, t, d, l, F(c, t)));
  return new K(o, this._parents, n, t);
}
function Zo(e) {
  var n = this._name, t = this._id;
  typeof e != "function" && (e = He(e));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var u = r[a], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var d = e.call(c, c.__data__, f, u), p, x = F(c, t), y = 0, C = d.length; y < C; ++y)
          (p = d[y]) && Yt(p, n, t, y, d, x);
        o.push(d), s.push(c);
      }
  return new K(o, s, n, t);
}
var Ko = lt.prototype.constructor;
function Qo() {
  return new Ko(this._groups, this._parents);
}
function jo(e, n) {
  var t, r, i;
  return function() {
    var o = ot(this, e), s = (this.style.removeProperty(e), ot(this, e));
    return o === s ? null : o === t && s === r ? i : i = n(t = o, r = s);
  };
}
function hn(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ta(e, n, t) {
  var r, i = t + "", o;
  return function() {
    var s = ot(this, e);
    return s === i ? null : s === r ? o : o = n(r = s, t);
  };
}
function ea(e, n, t) {
  var r, i, o;
  return function() {
    var s = ot(this, e), a = t(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(e), ot(this, e))), s === u ? null : s === r && u === i ? o : (i = u, o = n(r = s, a));
  };
}
function na(e, n) {
  var t, r, i, o = "style." + n, s = "end." + o, a;
  return function() {
    var u = W(this, e), l = u.on, c = u.value[o] == null ? a || (a = hn(n)) : void 0;
    (l !== t || i !== c) && (r = (t = l).copy()).on(s, i = c), u.on = r;
  };
}
function ra(e, n, t) {
  var r = (e += "") == "transform" ? no : un;
  return n == null ? this.styleTween(e, jo(e, r)).on("end.style." + e, hn(e)) : typeof n == "function" ? this.styleTween(e, ea(e, r, de(this, "style." + e, n))).each(na(this._id, e)) : this.styleTween(e, ta(e, r, n), t).on("end.style." + e, null);
}
function ia(e, n, t) {
  return function(r) {
    this.style.setProperty(e, n.call(this, r), t);
  };
}
function oa(e, n, t) {
  var r, i;
  function o() {
    var s = n.apply(this, arguments);
    return s !== i && (r = (i = s) && ia(e, s, t)), r;
  }
  return o._value = n, o;
}
function aa(e, n, t) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, oa(e, n, t ?? ""));
}
function sa(e) {
  return function() {
    this.textContent = e;
  };
}
function la(e) {
  return function() {
    var n = e(this);
    this.textContent = n ?? "";
  };
}
function ca(e) {
  return this.tween("text", typeof e == "function" ? la(de(this, "text", e)) : sa(e == null ? "" : e + ""));
}
function ua(e) {
  return function(n) {
    this.textContent = e.call(this, n);
  };
}
function ha(e) {
  var n, t;
  function r() {
    var i = e.apply(this, arguments);
    return i !== t && (n = (t = i) && ua(i)), n;
  }
  return r._value = e, r;
}
function fa(e) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  return this.tween(n, ha(e));
}
function da() {
  for (var e = this._name, n = this._id, t = fn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
      if (u = s[l]) {
        var c = F(u, n);
        Yt(u, e, t, l, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new K(r, this._parents, e, t);
}
function pa() {
  var e, n, t = this, r = t._id, i = t.size();
  return new Promise(function(o, s) {
    var a = { value: s }, u = { value: function() {
      --i === 0 && o();
    } };
    t.each(function() {
      var l = W(this, r), c = l.on;
      c !== e && (n = (e = c).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var ga = 0;
function K(e, n, t, r) {
  this._groups = e, this._parents = n, this._name = t, this._id = r;
}
function fn() {
  return ++ga;
}
var G = lt.prototype;
K.prototype = {
  constructor: K,
  select: Go,
  selectAll: Zo,
  selectChild: G.selectChild,
  selectChildren: G.selectChildren,
  filter: Fo,
  merge: Oo,
  selection: Qo,
  transition: da,
  call: G.call,
  nodes: G.nodes,
  node: G.node,
  size: G.size,
  empty: G.empty,
  each: G.each,
  on: Uo,
  attr: ko,
  attrTween: zo,
  style: ra,
  styleTween: aa,
  text: ca,
  textTween: fa,
  remove: Jo,
  tween: _o,
  delay: Ro,
  duration: Do,
  ease: Yo,
  easeVarying: Po,
  end: pa,
  [Symbol.iterator]: G[Symbol.iterator]
};
function ma(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ya = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ma
};
function xa(e, n) {
  for (var t; !(t = e.__transition) || !(t = t[n]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${n} not found`);
  return t;
}
function _a(e) {
  var n, t;
  e instanceof K ? (n = e._id, e = e._name) : (n = fn(), (t = ya).time = he(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && Yt(u, e, n, l, s, t || xa(u, n));
  return new K(r, this._parents, e, n);
}
lt.prototype.interrupt = mo;
lt.prototype.transition = _a;
const $t = (e) => () => e;
function wa(e, {
  sourceEvent: n,
  target: t,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    target: { value: t, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Z(e, n, t) {
  this.k = e, this.x = n, this.y = t;
}
Z.prototype = {
  constructor: Z,
  scale: function(e) {
    return e === 1 ? this : new Z(this.k * e, this.x, this.y);
  },
  translate: function(e, n) {
    return e === 0 & n === 0 ? this : new Z(this.k, this.x + this.k * e, this.y + this.k * n);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var pe = new Z(1, 0, 0);
Z.prototype;
function Jt(e) {
  e.stopImmediatePropagation();
}
function ft(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function va(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Ca() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function De() {
  return this.__zoom || pe;
}
function ba(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function $a() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ea(e, n, t) {
  var r = e.invertX(n[0][0]) - t[0][0], i = e.invertX(n[1][0]) - t[1][0], o = e.invertY(n[0][1]) - t[0][1], s = e.invertY(n[1][1]) - t[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function ka() {
  var e = va, n = Ca, t = Ea, r = ba, i = $a, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, u = so, l = ce("start", "zoom", "end"), c, f, d, p = 500, x = 150, y = 0, C = 10;
  function _(g) {
    g.property("__zoom", De).on("wheel.zoom", U, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", ct).filter(i).on("touchstart.zoom", wt).on("touchmove.zoom", ut).on("touchend.zoom touchcancel.zoom", Ht).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(g, h, m, w) {
    var v = g.selection ? g.selection() : g;
    v.property("__zoom", De), g !== v ? B(g, h, m, w) : v.interrupt().each(function() {
      A(this, arguments).event(w).start().zoom(null, typeof h == "function" ? h.apply(this, arguments) : h).end();
    });
  }, _.scaleBy = function(g, h, m, w) {
    _.scaleTo(g, function() {
      var v = this.__zoom.k, b = typeof h == "function" ? h.apply(this, arguments) : h;
      return v * b;
    }, m, w);
  }, _.scaleTo = function(g, h, m, w) {
    _.transform(g, function() {
      var v = n.apply(this, arguments), b = this.__zoom, E = m == null ? k(v) : typeof m == "function" ? m.apply(this, arguments) : m, N = b.invert(E), z = typeof h == "function" ? h.apply(this, arguments) : h;
      return t(S($(b, z), E, N), v, s);
    }, m, w);
  }, _.translateBy = function(g, h, m, w) {
    _.transform(g, function() {
      return t(this.__zoom.translate(
        typeof h == "function" ? h.apply(this, arguments) : h,
        typeof m == "function" ? m.apply(this, arguments) : m
      ), n.apply(this, arguments), s);
    }, null, w);
  }, _.translateTo = function(g, h, m, w, v) {
    _.transform(g, function() {
      var b = n.apply(this, arguments), E = this.__zoom, N = w == null ? k(b) : typeof w == "function" ? w.apply(this, arguments) : w;
      return t(pe.translate(N[0], N[1]).scale(E.k).translate(
        typeof h == "function" ? -h.apply(this, arguments) : -h,
        typeof m == "function" ? -m.apply(this, arguments) : -m
      ), b, s);
    }, w, v);
  };
  function $(g, h) {
    return h = Math.max(o[0], Math.min(o[1], h)), h === g.k ? g : new Z(h, g.x, g.y);
  }
  function S(g, h, m) {
    var w = h[0] - m[0] * g.k, v = h[1] - m[1] * g.k;
    return w === g.x && v === g.y ? g : new Z(g.k, w, v);
  }
  function k(g) {
    return [(+g[0][0] + +g[1][0]) / 2, (+g[0][1] + +g[1][1]) / 2];
  }
  function B(g, h, m, w) {
    g.on("start.zoom", function() {
      A(this, arguments).event(w).start();
    }).on("interrupt.zoom end.zoom", function() {
      A(this, arguments).event(w).end();
    }).tween("zoom", function() {
      var v = this, b = arguments, E = A(v, b).event(w), N = n.apply(v, b), z = m == null ? k(N) : typeof m == "function" ? m.apply(v, b) : m, O = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), T = v.__zoom, Y = typeof h == "function" ? h.apply(v, b) : h, V = u(T.invert(z).concat(O / T.k), Y.invert(z).concat(O / Y.k));
      return function(H) {
        if (H === 1) H = Y;
        else {
          var J = V(H), Pt = O / J[2];
          H = new Z(Pt, z[0] - J[0] * Pt, z[1] - J[1] * Pt);
        }
        E.zoom(null, H);
      };
    });
  }
  function A(g, h, m) {
    return !m && g.__zooming || new R(g, h);
  }
  function R(g, h) {
    this.that = g, this.args = h, this.active = 0, this.sourceEvent = null, this.extent = n.apply(g, h), this.taps = 0;
  }
  R.prototype = {
    event: function(g) {
      return g && (this.sourceEvent = g), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(g, h) {
      return this.mouse && g !== "mouse" && (this.mouse[1] = h.invert(this.mouse[0])), this.touch0 && g !== "touch" && (this.touch0[1] = h.invert(this.touch0[0])), this.touch1 && g !== "touch" && (this.touch1[1] = h.invert(this.touch1[0])), this.that.__zoom = h, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(g) {
      var h = X(this.that).datum();
      l.call(
        g,
        this.that,
        new wa(g, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: l
        }),
        h
      );
    }
  };
  function U(g, ...h) {
    if (!e.apply(this, arguments)) return;
    var m = A(this, h).event(g), w = this.__zoom, v = Math.max(o[0], Math.min(o[1], w.k * Math.pow(2, r.apply(this, arguments)))), b = j(g);
    if (m.wheel)
      (m.mouse[0][0] !== b[0] || m.mouse[0][1] !== b[1]) && (m.mouse[1] = w.invert(m.mouse[0] = b)), clearTimeout(m.wheel);
    else {
      if (w.k === v) return;
      m.mouse = [b, w.invert(b)], Mt(this), m.start();
    }
    ft(g), m.wheel = setTimeout(E, x), m.zoom("mouse", t(S($(w, v), m.mouse[0], m.mouse[1]), m.extent, s));
    function E() {
      m.wheel = null, m.end();
    }
  }
  function I(g, ...h) {
    if (d || !e.apply(this, arguments)) return;
    var m = g.currentTarget, w = A(this, h, !0).event(g), v = X(g.view).on("mousemove.zoom", z, !0).on("mouseup.zoom", O, !0), b = j(g, m), E = g.clientX, N = g.clientY;
    Ri(g.view), Jt(g), w.mouse = [b, this.__zoom.invert(b)], Mt(this), w.start();
    function z(T) {
      if (ft(T), !w.moved) {
        var Y = T.clientX - E, V = T.clientY - N;
        w.moved = Y * Y + V * V > y;
      }
      w.event(T).zoom("mouse", t(S(w.that.__zoom, w.mouse[0] = j(T, m), w.mouse[1]), w.extent, s));
    }
    function O(T) {
      v.on("mousemove.zoom mouseup.zoom", null), Xi(T.view, w.moved), ft(T), w.event(T).end();
    }
  }
  function ct(g, ...h) {
    if (e.apply(this, arguments)) {
      var m = this.__zoom, w = j(g.changedTouches ? g.changedTouches[0] : g, this), v = m.invert(w), b = m.k * (g.shiftKey ? 0.5 : 2), E = t(S($(m, b), w, v), n.apply(this, h), s);
      ft(g), a > 0 ? X(this).transition().duration(a).call(B, E, w, g) : X(this).call(_.transform, E, w, g);
    }
  }
  function wt(g, ...h) {
    if (e.apply(this, arguments)) {
      var m = g.touches, w = m.length, v = A(this, h, g.changedTouches.length === w).event(g), b, E, N, z;
      for (Jt(g), E = 0; E < w; ++E)
        N = m[E], z = j(N, this), z = [z, this.__zoom.invert(z), N.identifier], v.touch0 ? !v.touch1 && v.touch0[2] !== z[2] && (v.touch1 = z, v.taps = 0) : (v.touch0 = z, b = !0, v.taps = 1 + !!c);
      c && (c = clearTimeout(c)), b && (v.taps < 2 && (f = z[0], c = setTimeout(function() {
        c = null;
      }, p)), Mt(this), v.start());
    }
  }
  function ut(g, ...h) {
    if (this.__zooming) {
      var m = A(this, h).event(g), w = g.changedTouches, v = w.length, b, E, N, z;
      for (ft(g), b = 0; b < v; ++b)
        E = w[b], N = j(E, this), m.touch0 && m.touch0[2] === E.identifier ? m.touch0[0] = N : m.touch1 && m.touch1[2] === E.identifier && (m.touch1[0] = N);
      if (E = m.that.__zoom, m.touch1) {
        var O = m.touch0[0], T = m.touch0[1], Y = m.touch1[0], V = m.touch1[1], H = (H = Y[0] - O[0]) * H + (H = Y[1] - O[1]) * H, J = (J = V[0] - T[0]) * J + (J = V[1] - T[1]) * J;
        E = $(E, Math.sqrt(H / J)), N = [(O[0] + Y[0]) / 2, (O[1] + Y[1]) / 2], z = [(T[0] + V[0]) / 2, (T[1] + V[1]) / 2];
      } else if (m.touch0) N = m.touch0[0], z = m.touch0[1];
      else return;
      m.zoom("touch", t(S(E, N, z), m.extent, s));
    }
  }
  function Ht(g, ...h) {
    if (this.__zooming) {
      var m = A(this, h).event(g), w = g.changedTouches, v = w.length, b, E;
      for (Jt(g), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, p), b = 0; b < v; ++b)
        E = w[b], m.touch0 && m.touch0[2] === E.identifier ? delete m.touch0 : m.touch1 && m.touch1[2] === E.identifier && delete m.touch1;
      if (m.touch1 && !m.touch0 && (m.touch0 = m.touch1, delete m.touch1), m.touch0) m.touch0[1] = this.__zoom.invert(m.touch0[0]);
      else if (m.end(), m.taps === 2 && (E = j(E, this), Math.hypot(f[0] - E[0], f[1] - E[1]) < C)) {
        var N = X(this).on("dblclick.zoom");
        N && N.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : $t(+g), _) : r;
  }, _.filter = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : $t(!!g), _) : e;
  }, _.touchable = function(g) {
    return arguments.length ? (i = typeof g == "function" ? g : $t(!!g), _) : i;
  }, _.extent = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : $t([[+g[0][0], +g[0][1]], [+g[1][0], +g[1][1]]]), _) : n;
  }, _.scaleExtent = function(g) {
    return arguments.length ? (o[0] = +g[0], o[1] = +g[1], _) : [o[0], o[1]];
  }, _.translateExtent = function(g) {
    return arguments.length ? (s[0][0] = +g[0][0], s[1][0] = +g[1][0], s[0][1] = +g[0][1], s[1][1] = +g[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(g) {
    return arguments.length ? (t = g, _) : t;
  }, _.duration = function(g) {
    return arguments.length ? (a = +g, _) : a;
  }, _.interpolate = function(g) {
    return arguments.length ? (u = g, _) : u;
  }, _.on = function() {
    var g = l.on.apply(l, arguments);
    return g === l ? _ : g;
  }, _.clickDistance = function(g) {
    return arguments.length ? (y = (g = +g) * g, _) : Math.sqrt(y);
  }, _.tapDistance = function(g) {
    return arguments.length ? (C = +g, _) : C;
  }, _;
}
function Sa(e) {
  var n = 0, t = e.children, r = t && t.length;
  if (!r) n = 1;
  else for (; --r >= 0; ) n += t[r].value;
  e.value = n;
}
function Na() {
  return this.eachAfter(Sa);
}
function Ma(e) {
  var n = this, t, r = [n], i, o, s;
  do
    for (t = r.reverse(), r = []; n = t.pop(); )
      if (e(n), i = n.children, i) for (o = 0, s = i.length; o < s; ++o)
        r.push(i[o]);
  while (r.length);
  return this;
}
function Ba(e) {
  for (var n = this, t = [n], r, i; n = t.pop(); )
    if (e(n), r = n.children, r) for (i = r.length - 1; i >= 0; --i)
      t.push(r[i]);
  return this;
}
function za(e) {
  for (var n = this, t = [n], r = [], i, o, s; n = t.pop(); )
    if (r.push(n), i = n.children, i) for (o = 0, s = i.length; o < s; ++o)
      t.push(i[o]);
  for (; n = r.pop(); )
    e(n);
  return this;
}
function Ta(e) {
  return this.eachAfter(function(n) {
    for (var t = +e(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; ) t += r[i].value;
    n.value = t;
  });
}
function Aa(e) {
  return this.eachBefore(function(n) {
    n.children && n.children.sort(e);
  });
}
function Ra(e) {
  for (var n = this, t = Xa(n, e), r = [n]; n !== t; )
    n = n.parent, r.push(n);
  for (var i = r.length; e !== t; )
    r.splice(i, 0, e), e = e.parent;
  return r;
}
function Xa(e, n) {
  if (e === n) return e;
  var t = e.ancestors(), r = n.ancestors(), i = null;
  for (e = t.pop(), n = r.pop(); e === n; )
    i = e, e = t.pop(), n = r.pop();
  return i;
}
function La() {
  for (var e = this, n = [e]; e = e.parent; )
    n.push(e);
  return n;
}
function Da() {
  var e = [];
  return this.each(function(n) {
    e.push(n);
  }), e;
}
function Ia() {
  var e = [];
  return this.eachBefore(function(n) {
    n.children || e.push(n);
  }), e;
}
function Ya() {
  var e = this, n = [];
  return e.each(function(t) {
    t !== e && n.push({ source: t.parent, target: t });
  }), n;
}
function ge(e, n) {
  var t = new Lt(e), r = +e.value && (t.value = e.value), i, o = [t], s, a, u, l;
  for (n == null && (n = Pa); i = o.pop(); )
    if (r && (i.value = +i.data.value), (a = n(i.data)) && (l = a.length))
      for (i.children = new Array(l), u = l - 1; u >= 0; --u)
        o.push(s = i.children[u] = new Lt(a[u])), s.parent = i, s.depth = i.depth + 1;
  return t.eachBefore(Oa);
}
function Ha() {
  return ge(this).eachBefore(Fa);
}
function Pa(e) {
  return e.children;
}
function Fa(e) {
  e.data = e.data.data;
}
function Oa(e) {
  var n = 0;
  do
    e.height = n;
  while ((e = e.parent) && e.height < ++n);
}
function Lt(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
Lt.prototype = ge.prototype = {
  constructor: Lt,
  count: Na,
  each: Ma,
  eachAfter: za,
  eachBefore: Ba,
  sum: Ta,
  sort: Aa,
  path: Ra,
  ancestors: La,
  descendants: Da,
  leaves: Ia,
  links: Ya,
  copy: Ha
};
const qa = "2.1.2", Wa = {
  version: qa
}, { version: Ua } = Wa, Va = Object.freeze({
  children: (e) => e.children,
  nodeSize: (e) => e.data.size,
  spacing: 0
});
function me(e) {
  const n = Object.assign({}, Va, e);
  function t(a) {
    const u = n[a];
    return typeof u == "function" ? u : () => u;
  }
  function r(a) {
    const u = s(o(), a, (l) => l.children);
    return u.update(), u.data;
  }
  function i() {
    const a = t("nodeSize"), u = t("spacing");
    return class dn extends ge.prototype.constructor {
      constructor(c) {
        super(c);
      }
      copy() {
        const c = s(this.constructor, this, (f) => f.children);
        return c.each((f) => f.data = f.data.data), c;
      }
      get size() {
        return a(this);
      }
      spacing(c) {
        return u(this, c);
      }
      get nodes() {
        return this.descendants();
      }
      get xSize() {
        return this.size[0];
      }
      get ySize() {
        return this.size[1];
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.ySize;
      }
      get left() {
        return this.x - this.xSize / 2;
      }
      get right() {
        return this.x + this.xSize / 2;
      }
      get root() {
        const c = this.ancestors();
        return c[c.length - 1];
      }
      get numChildren() {
        return this.hasChildren ? this.children.length : 0;
      }
      get hasChildren() {
        return !this.noChildren;
      }
      get noChildren() {
        return this.children === null;
      }
      get firstChild() {
        return this.hasChildren ? this.children[0] : null;
      }
      get lastChild() {
        return this.hasChildren ? this.children[this.numChildren - 1] : null;
      }
      get extents() {
        return (this.children || []).reduce(
          (c, f) => dn.maxExtents(c, f.extents),
          this.nodeExtents
        );
      }
      get nodeExtents() {
        return {
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right
        };
      }
      static maxExtents(c, f) {
        return {
          top: Math.min(c.top, f.top),
          bottom: Math.max(c.bottom, f.bottom),
          left: Math.min(c.left, f.left),
          right: Math.max(c.right, f.right)
        };
      }
    };
  }
  function o() {
    const a = i(), u = t("nodeSize"), l = t("spacing");
    return class extends a {
      constructor(c) {
        super(c), Object.assign(this, {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: this,
          lExtRelX: 0,
          lThr: null,
          rExt: this,
          rExtRelX: 0,
          rThr: null
        });
      }
      get size() {
        return u(this.data);
      }
      spacing(c) {
        return l(this.data, c.data);
      }
      get x() {
        return this.data.x;
      }
      set x(c) {
        this.data.x = c;
      }
      get y() {
        return this.data.y;
      }
      set y(c) {
        this.data.y = c;
      }
      update() {
        return pn(this), gn(this), this;
      }
    };
  }
  function s(a, u, l) {
    const c = (f, d) => {
      const p = new a(f);
      Object.assign(p, {
        parent: d,
        depth: d === null ? 0 : d.depth + 1,
        height: 0,
        length: 1
      });
      const x = l(f) || [];
      return p.children = x.length === 0 ? null : x.map((y) => c(y, p)), p.children && Object.assign(p, p.children.reduce(
        (y, C) => ({
          height: Math.max(y.height, C.height + 1),
          length: y.length + C.length
        }),
        p
      )), p;
    };
    return c(u, null);
  }
  return Object.assign(r, {
    nodeSize(a) {
      return arguments.length ? (n.nodeSize = a, r) : n.nodeSize;
    },
    spacing(a) {
      return arguments.length ? (n.spacing = a, r) : n.spacing;
    },
    children(a) {
      return arguments.length ? (n.children = a, r) : n.children;
    },
    hierarchy(a, u) {
      const l = typeof u > "u" ? n.children : u;
      return s(i(), a, l);
    },
    dump(a) {
      const u = t("nodeSize"), l = (c) => (f) => {
        const d = c + "  ", p = c + "    ", { x, y } = f, C = u(f), _ = f.children || [], $ = _.length === 0 ? " " : `,${d}children: [${p}${_.map(l(p)).join(p)}${d}],${c}`;
        return `{ size: [${C.join(", ")}],${d}x: ${x}, y: ${y}${$}},`;
      };
      return l(`
`)(a);
    }
  }), r;
}
me.version = Ua;
const pn = (e, n = 0) => (e.y = n, (e.children || []).reduce((t, r) => {
  const [i, o] = t;
  pn(r, e.y + e.ySize);
  const s = (i === 0 ? r.lExt : r.rExt).bottom;
  i !== 0 && Ga(e, i, o);
  const a = rs(s, i, o);
  return [i + 1, a];
}, [0, null]), Ja(e), ns(e), e), gn = (e, n, t) => {
  typeof n > "u" && (n = -e.relX - e.prelim, t = 0);
  const r = n + e.relX;
  return e.relX = r + e.prelim - t, e.prelim = 0, e.x = t + e.relX, (e.children || []).forEach((i) => gn(i, r, e.x)), e;
}, Ja = (e) => {
  (e.children || []).reduce((n, t) => {
    const [r, i] = n, o = r + t.shift, s = i + o + t.change;
    return t.relX += s, [o, s];
  }, [0, 0]);
}, Ga = (e, n, t) => {
  const r = e.children[n - 1], i = e.children[n];
  let o = r, s = r.relX, a = i, u = i.relX, l = !0;
  for (; o && a; ) {
    o.bottom > t.lowY && (t = t.next);
    const c = s + o.prelim - (u + a.prelim) + o.xSize / 2 + a.xSize / 2 + o.spacing(a);
    (c > 0 || c < 0 && l) && (u += c, Za(i, c), Ka(e, n, t.index, c)), l = !1;
    const f = o.bottom, d = a.bottom;
    f <= d && (o = ja(o), o && (s += o.relX)), f >= d && (a = Qa(a), a && (u += a.relX));
  }
  !o && a ? ts(e, n, a, u) : o && !a && es(e, n, o, s);
}, Za = (e, n) => {
  e.relX += n, e.lExtRelX += n, e.rExtRelX += n;
}, Ka = (e, n, t, r) => {
  const i = e.children[n], o = n - t;
  if (o > 1) {
    const s = r / o;
    e.children[t + 1].shift += s, i.shift -= s, i.change -= r - s;
  }
}, Qa = (e) => e.hasChildren ? e.firstChild : e.lThr, ja = (e) => e.hasChildren ? e.lastChild : e.rThr, ts = (e, n, t, r) => {
  const i = e.firstChild, o = i.lExt, s = e.children[n];
  o.lThr = t;
  const a = r - t.relX - i.lExtRelX;
  o.relX += a, o.prelim -= a, i.lExt = s.lExt, i.lExtRelX = s.lExtRelX;
}, es = (e, n, t, r) => {
  const i = e.children[n], o = i.rExt, s = e.children[n - 1];
  o.rThr = t;
  const a = r - t.relX - i.rExtRelX;
  o.relX += a, o.prelim -= a, i.rExt = s.rExt, i.rExtRelX = s.rExtRelX;
}, ns = (e) => {
  if (e.hasChildren) {
    const n = e.firstChild, t = e.lastChild, r = (n.prelim + n.relX - n.xSize / 2 + t.relX + t.prelim + t.xSize / 2) / 2;
    Object.assign(e, {
      prelim: r,
      lExt: n.lExt,
      lExtRelX: n.lExtRelX,
      rExt: t.rExt,
      rExtRelX: t.rExtRelX
    });
  }
}, rs = (e, n, t) => {
  for (; t !== null && e >= t.lowY; )
    t = t.next;
  return {
    lowY: e,
    index: n,
    next: t
  };
};
function Ie(e) {
  return function() {
    return e;
  };
}
const oe = Math.PI, ae = 2 * oe, tt = 1e-6, is = ae - tt;
function mn(e) {
  this._ += e[0];
  for (let n = 1, t = e.length; n < t; ++n)
    this._ += arguments[n] + e[n];
}
function os(e) {
  let n = Math.floor(e);
  if (!(n >= 0)) throw new Error(`invalid digits: ${e}`);
  if (n > 15) return mn;
  const t = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * t) / t + r[i];
  };
}
class as {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? mn : os(n);
  }
  moveTo(n, t) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +t}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, t) {
    this._append`L${this._x1 = +n},${this._y1 = +t}`;
  }
  quadraticCurveTo(n, t, r, i) {
    this._append`Q${+n},${+t},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, t, r, i, o, s) {
    this._append`C${+n},${+t},${+r},${+i},${this._x1 = +o},${this._y1 = +s}`;
  }
  arcTo(n, t, r, i, o) {
    if (n = +n, t = +t, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let s = this._x1, a = this._y1, u = r - n, l = i - t, c = s - n, f = a - t, d = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = t}`;
    else if (d > tt) if (!(Math.abs(f * u - l * c) > tt) || !o)
      this._append`L${this._x1 = n},${this._y1 = t}`;
    else {
      let p = r - s, x = i - a, y = u * u + l * l, C = p * p + x * x, _ = Math.sqrt(y), $ = Math.sqrt(d), S = o * Math.tan((oe - Math.acos((y + d - C) / (2 * _ * $))) / 2), k = S / $, B = S / _;
      Math.abs(k - 1) > tt && this._append`L${n + k * c},${t + k * f}`, this._append`A${o},${o},0,0,${+(f * p > c * x)},${this._x1 = n + B * u},${this._y1 = t + B * l}`;
    }
  }
  arc(n, t, r, i, o, s) {
    if (n = +n, t = +t, r = +r, s = !!s, r < 0) throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(i), u = r * Math.sin(i), l = n + a, c = t + u, f = 1 ^ s, d = s ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > tt || Math.abs(this._y1 - c) > tt) && this._append`L${l},${c}`, r && (d < 0 && (d = d % ae + ae), d > is ? this._append`A${r},${r},0,1,${f},${n - a},${t - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : d > tt && this._append`A${r},${r},0,${+(d >= oe)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = t + r * Math.sin(o)}`);
  }
  rect(n, t, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +t}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function ss(e) {
  let n = 3;
  return e.digits = function(t) {
    if (!arguments.length) return n;
    if (t == null)
      n = null;
    else {
      const r = Math.floor(t);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${t}`);
      n = r;
    }
    return e;
  }, () => new as(n);
}
var ls = Array.prototype.slice;
function cs(e) {
  return e[0];
}
function us(e) {
  return e[1];
}
class hs {
  constructor(n, t) {
    this._context = n, this._x = t;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(n, t) {
    switch (n = +n, t = +t, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(n, t) : this._context.moveTo(n, t);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + n) / 2, this._y0, this._x0, t, n, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, n, this._y0, n, t);
        break;
      }
    }
    this._x0 = n, this._y0 = t;
  }
}
function fs(e) {
  return new hs(e, !0);
}
function ds(e) {
  return e.source;
}
function ps(e) {
  return e.target;
}
function gs(e) {
  let n = ds, t = ps, r = cs, i = us, o = null, s = null, a = ss(u);
  function u() {
    let l;
    const c = ls.call(arguments), f = n.apply(this, c), d = t.apply(this, c);
    if (o == null && (s = e(l = a())), s.lineStart(), c[0] = f, s.point(+r.apply(this, c), +i.apply(this, c)), c[0] = d, s.point(+r.apply(this, c), +i.apply(this, c)), s.lineEnd(), l) return s = null, l + "" || null;
  }
  return u.source = function(l) {
    return arguments.length ? (n = l, u) : n;
  }, u.target = function(l) {
    return arguments.length ? (t = l, u) : t;
  }, u.x = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Ie(+l), u) : r;
  }, u.y = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : Ie(+l), u) : i;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? o = s = null : s = e(o = l), u) : o;
  }, u;
}
function ms() {
  return gs(fs);
}
const M = {
  selection: lt,
  select: X,
  max: Kr,
  min: Qr,
  sum: jr,
  cumsum: Zr,
  tree: Bi,
  stratify: bi,
  zoom: ka,
  zoomIdentity: pe,
  linkHorizontal: ms,
  flextree: me
};
class ys {
  constructor() {
    const n = {
      /* NOT INTENDED FOR PUBLIC OVERRIDE */
      id: `ID${Math.floor(Math.random() * 1e6)}`,
      // Id for event handlings
      firstDraw: !0,
      // Whether chart is drawn for the first time
      ctx: document.createElement("canvas").getContext("2d"),
      initialExpandLevel: 1,
      nodeDefaultBackground: "none",
      lastTransform: { x: 0, y: 0, k: 1 },
      // Panning and zooming values
      allowedNodesCount: {},
      zoomBehavior: null,
      generateRoot: null,
      /*  INTENDED FOR PUBLIC OVERRIDE */
      svgWidth: 800,
      // Configure svg width
      svgHeight: window.innerHeight - 100,
      // Configure svg height
      container: "body",
      // Set parent container, either CSS style selector or DOM element
      data: null,
      // Set data, it must be an array of objects, where hierarchy is clearly defined via id and parent ID (property names are configurable)
      connections: [],
      // Sets connection data, array of objects, SAMPLE:  [{from:"145",to:"201",label:"Conflicts of interest"}]
      defaultFont: "Helvetica",
      // Set default font
      nodeId: (t) => t.nodeId || t.id,
      // Configure accessor for node id, default is either odeId or id
      parentNodeId: (t) => t.parentNodeId || t.parentId,
      // Configure accessor for parent node id, default is either parentNodeId or parentId
      rootMargin: 40,
      // Configure how much root node is offset from top
      nodeWidth: (t) => 250,
      // Configure each node width, use with caution, it is better to have the same value set for all nodes
      nodeHeight: (t) => 150,
      //  Configure each node height, use with caution, it is better to have the same value set for all nodes
      neighbourMargin: (t, r) => 80,
      // Configure margin between two nodes, use with caution, it is better to have the same value set for all nodes
      siblingsMargin: (t) => 20,
      // Configure margin between two siblings, use with caution, it is better to have the same value set for all nodes
      childrenMargin: (t) => 60,
      // Configure margin between parent and children, use with caution, it is better to have the same value set for all nodes
      compactMarginPair: (t) => 100,
      // Configure margin between two nodes in compact mode, use with caution, it is better to have the same value set for all nodes
      compactMarginBetween: ((t) => 20),
      // Configure margin between two nodes in compact mode, use with caution, it is better to have the same value set for all nodes
      nodeButtonWidth: (t) => 40,
      // Configure expand & collapse button width
      nodeButtonHeight: (t) => 40,
      // Configure expand & collapse button height
      nodeButtonX: (t) => -20,
      // Configure expand & collapse button x position
      nodeButtonY: (t) => -20,
      // Configure expand & collapse button y position
      linkYOffset: 30,
      // When correcting links which is not working for safari
      pagingStep: (t) => 5,
      // Configure how many nodes to show when making new nodes appear
      minPagingVisibleNodes: (t) => 2e3,
      // Configure minimum number of visible nodes , after which paging button appears
      scaleExtent: [1e-3, 20],
      // Configure zoom scale extent , if you don't want any kind of zooming, set it to [1,1]
      duration: 400,
      // Configure duration of transitions
      imageName: "Chart",
      // Configure exported PNG and SVG image name
      setActiveNodeCentered: !0,
      // Configure if active node should be centered when expanded and collapsed
      layout: "top",
      // Configure layout direction , possible values are "top", "left", "right", "bottom"
      compact: !0,
      // Configure if compact mode is enabled , when enabled, nodes are shown in compact positions, instead of horizontal spread
      createZoom: (t) => M.zoom(),
      onZoomStart: (t) => {
      },
      // Callback for zoom & panning start
      onZoom: (t) => {
      },
      // Callback for zoom & panning 
      onZoomEnd: (t) => {
      },
      // Callback for zoom & panning end
      onNodeClick: (t) => t,
      // Callback for node click
      onExpandOrCollapse: (t) => t,
      // Callback for node expand or collapse
      /*
                  * Node HTML content generation , remember that you can access some helper methods:
      
                  * node=> node.data - to access node's original data
                  * node=> node.leaves() - to access node's leaves
                  * node=> node.descendants() - to access node's descendants
                  * node=> node.children - to access node's children
                  * node=> node.parent - to access node's parent
                  * node=> node.depth - to access node's depth
                  * node=> node.hierarchyHeight - to access node's hierarchy height ( Height, which d3 assigns to hierarchy nodes)
                  * node=> node.height - to access node's height
                  * node=> node.width - to access node's width
                  * 
                  * You can also access additional properties to style your node:
                  * 
                  * d=>d.data._centeredWithDescendants - when node is centered with descendants
                  * d=>d.data._directSubordinatesPaging - subordinates count in paging mode
                  * d=>d.data._directSubordinates - subordinates count
                  * d=>d.data._totalSubordinates - total subordinates count
                  * d=>d._highlighted - when node is highlighted
                  * d=>d._upToTheRootHighlighted - when node is highlighted up to the root
                  * d=>d._expanded - when node is expanded
                  * d=>d.data._centered - when node is centered
                  */
      nodeContent: (t) => `<div style="padding:5px;font-size:10px;">Sample Node(id=${t.id}), override using <br/> 
            <code>chart.nodeContent({data}=>{ <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;return '' // Custom HTML <br/>
             })</code>
             <br/> 
             Or check different <a href="https://github.com/bumbeishvili/org-chart#jump-to-examples" target="_blank">layout examples</a>
             </div>`,
      /* Node expand & collapse button content and styling. You can access same helper methods as above */
      buttonContent: ({ node: t, state: r }) => `<div style="border:1px solid #E4E2E9;border-radius:3px;padding:3px;font-size:9px;margin:auto auto;background-color:white"> ${{
        left: (o) => o ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.283 3.50094L6.51 11.4749C6.37348 11.615 6.29707 11.8029 6.29707 11.9984C6.29707 12.194 6.37348 12.3819 6.51 12.5219L14.283 20.4989C14.3466 20.5643 14.4226 20.6162 14.5066 20.6516C14.5906 20.6871 14.6808 20.7053 14.772 20.7053C14.8632 20.7053 14.9534 20.6871 15.0374 20.6516C15.1214 20.6162 15.1974 20.5643 15.261 20.4989C15.3918 20.365 15.4651 20.1852 15.4651 19.9979C15.4651 19.8107 15.3918 19.6309 15.261 19.4969L7.9515 11.9984L15.261 4.50144C15.3914 4.36756 15.4643 4.18807 15.4643 4.00119C15.4643 3.81431 15.3914 3.63482 15.261 3.50094C15.1974 3.43563 15.1214 3.38371 15.0374 3.34827C14.9534 3.31282 14.8632 3.29456 14.772 3.29456C14.6808 3.29456 14.5906 3.31282 14.5066 3.34827C14.4226 3.38371 14.3466 3.43563 14.283 3.50094V3.50094Z" fill="#716E7B" stroke="#716E7B"/>
                      </svg></span><span style="color:#716E7B">${t.data._directSubordinatesPaging} </span></div>` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.989 3.49944C7.85817 3.63339 7.78492 3.8132 7.78492 4.00044C7.78492 4.18768 7.85817 4.36749 7.989 4.50144L15.2985 11.9999L7.989 19.4969C7.85817 19.6309 7.78492 19.8107 7.78492 19.9979C7.78492 20.1852 7.85817 20.365 7.989 20.4989C8.05259 20.5643 8.12863 20.6162 8.21261 20.6516C8.2966 20.6871 8.38684 20.7053 8.478 20.7053C8.56916 20.7053 8.6594 20.6871 8.74338 20.6516C8.82737 20.6162 8.90341 20.5643 8.967 20.4989L16.74 12.5234C16.8765 12.3834 16.9529 12.1955 16.9529 11.9999C16.9529 11.8044 16.8765 11.6165 16.74 11.4764L8.967 3.50094C8.90341 3.43563 8.82737 3.38371 8.74338 3.34827C8.6594 3.31282 8.56916 3.29456 8.478 3.29456C8.38684 3.29456 8.2966 3.31282 8.21261 3.34827C8.12863 3.38371 8.05259 3.43563 7.989 3.50094V3.49944Z" fill="#716E7B" stroke="#716E7B"/>
                          </svg></span><span style="color:#716E7B">${t.data._directSubordinatesPaging} </span></div>`,
        bottom: (o) => o ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M19.497 7.98903L12 15.297L4.503 7.98903C4.36905 7.85819 4.18924 7.78495 4.002 7.78495C3.81476 7.78495 3.63495 7.85819 3.501 7.98903C3.43614 8.05257 3.38462 8.12842 3.34944 8.21213C3.31427 8.29584 3.29615 8.38573 3.29615 8.47653C3.29615 8.56733 3.31427 8.65721 3.34944 8.74092C3.38462 8.82463 3.43614 8.90048 3.501 8.96403L11.4765 16.74C11.6166 16.8765 11.8044 16.953 12 16.953C12.1956 16.953 12.3834 16.8765 12.5235 16.74L20.499 8.96553C20.5643 8.90193 20.6162 8.8259 20.6517 8.74191C20.6871 8.65792 20.7054 8.56769 20.7054 8.47653C20.7054 8.38537 20.6871 8.29513 20.6517 8.21114C20.6162 8.12715 20.5643 8.05112 20.499 7.98753C20.3651 7.85669 20.1852 7.78345 19.998 7.78345C19.8108 7.78345 19.6309 7.85669 19.497 7.98753V7.98903Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="margin-left:1px;color:#716E7B" >${t.data._directSubordinatesPaging} </span></div>
                       ` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M11.457 8.07005L3.49199 16.4296C3.35903 16.569 3.28485 16.7543 3.28485 16.9471C3.28485 17.1398 3.35903 17.3251 3.49199 17.4646L3.50099 17.4736C3.56545 17.5414 3.64304 17.5954 3.72904 17.6324C3.81504 17.6693 3.90765 17.6883 4.00124 17.6883C4.09483 17.6883 4.18745 17.6693 4.27344 17.6324C4.35944 17.5954 4.43703 17.5414 4.50149 17.4736L12.0015 9.60155L19.4985 17.4736C19.563 17.5414 19.6405 17.5954 19.7265 17.6324C19.8125 17.6693 19.9052 17.6883 19.9987 17.6883C20.0923 17.6883 20.1849 17.6693 20.2709 17.6324C20.3569 17.5954 20.4345 17.5414 20.499 17.4736L20.508 17.4646C20.641 17.3251 20.7151 17.1398 20.7151 16.9471C20.7151 16.7543 20.641 16.569 20.508 16.4296L12.543 8.07005C12.4729 7.99653 12.3887 7.93801 12.2954 7.89801C12.202 7.85802 12.1015 7.8374 12 7.8374C11.8984 7.8374 11.798 7.85802 11.7046 7.89801C11.6113 7.93801 11.527 7.99653 11.457 8.07005Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="margin-left:1px;color:#716E7B" >${t.data._directSubordinatesPaging} </span></div>
                    `,
        right: (o) => o ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.989 3.49944C7.85817 3.63339 7.78492 3.8132 7.78492 4.00044C7.78492 4.18768 7.85817 4.36749 7.989 4.50144L15.2985 11.9999L7.989 19.4969C7.85817 19.6309 7.78492 19.8107 7.78492 19.9979C7.78492 20.1852 7.85817 20.365 7.989 20.4989C8.05259 20.5643 8.12863 20.6162 8.21261 20.6516C8.2966 20.6871 8.38684 20.7053 8.478 20.7053C8.56916 20.7053 8.6594 20.6871 8.74338 20.6516C8.82737 20.6162 8.90341 20.5643 8.967 20.4989L16.74 12.5234C16.8765 12.3834 16.9529 12.1955 16.9529 11.9999C16.9529 11.8044 16.8765 11.6165 16.74 11.4764L8.967 3.50094C8.90341 3.43563 8.82737 3.38371 8.74338 3.34827C8.6594 3.31282 8.56916 3.29456 8.478 3.29456C8.38684 3.29456 8.2966 3.31282 8.21261 3.34827C8.12863 3.38371 8.05259 3.43563 7.989 3.50094V3.49944Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="color:#716E7B">${t.data._directSubordinatesPaging} </span></div>` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M14.283 3.50094L6.51 11.4749C6.37348 11.615 6.29707 11.8029 6.29707 11.9984C6.29707 12.194 6.37348 12.3819 6.51 12.5219L14.283 20.4989C14.3466 20.5643 14.4226 20.6162 14.5066 20.6516C14.5906 20.6871 14.6808 20.7053 14.772 20.7053C14.8632 20.7053 14.9534 20.6871 15.0374 20.6516C15.1214 20.6162 15.1974 20.5643 15.261 20.4989C15.3918 20.365 15.4651 20.1852 15.4651 19.9979C15.4651 19.8107 15.3918 19.6309 15.261 19.4969L7.9515 11.9984L15.261 4.50144C15.3914 4.36756 15.4643 4.18807 15.4643 4.00119C15.4643 3.81431 15.3914 3.63482 15.261 3.50094C15.1974 3.43563 15.1214 3.38371 15.0374 3.34827C14.9534 3.31282 14.8632 3.29456 14.772 3.29456C14.6808 3.29456 14.5906 3.31282 14.5066 3.34827C14.4226 3.38371 14.3466 3.43563 14.283 3.50094V3.50094Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="color:#716E7B">${t.data._directSubordinatesPaging} </span></div>`,
        top: (o) => o ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.457 8.07005L3.49199 16.4296C3.35903 16.569 3.28485 16.7543 3.28485 16.9471C3.28485 17.1398 3.35903 17.3251 3.49199 17.4646L3.50099 17.4736C3.56545 17.5414 3.64304 17.5954 3.72904 17.6324C3.81504 17.6693 3.90765 17.6883 4.00124 17.6883C4.09483 17.6883 4.18745 17.6693 4.27344 17.6324C4.35944 17.5954 4.43703 17.5414 4.50149 17.4736L12.0015 9.60155L19.4985 17.4736C19.563 17.5414 19.6405 17.5954 19.7265 17.6324C19.8125 17.6693 19.9052 17.6883 19.9987 17.6883C20.0923 17.6883 20.1849 17.6693 20.2709 17.6324C20.3569 17.5954 20.4345 17.5414 20.499 17.4736L20.508 17.4646C20.641 17.3251 20.7151 17.1398 20.7151 16.9471C20.7151 16.7543 20.641 16.569 20.508 16.4296L12.543 8.07005C12.4729 7.99653 12.3887 7.93801 12.2954 7.89801C12.202 7.85802 12.1015 7.8374 12 7.8374C11.8984 7.8374 11.798 7.85802 11.7046 7.89801C11.6113 7.93801 11.527 7.99653 11.457 8.07005Z" fill="#716E7B" stroke="#716E7B"/>
                        </svg></span><span style="margin-left:1px;color:#716E7B">${t.data._directSubordinatesPaging} </span></div>
                        ` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.497 7.98903L12 15.297L4.503 7.98903C4.36905 7.85819 4.18924 7.78495 4.002 7.78495C3.81476 7.78495 3.63495 7.85819 3.501 7.98903C3.43614 8.05257 3.38462 8.12842 3.34944 8.21213C3.31427 8.29584 3.29615 8.38573 3.29615 8.47653C3.29615 8.56733 3.31427 8.65721 3.34944 8.74092C3.38462 8.82463 3.43614 8.90048 3.501 8.96403L11.4765 16.74C11.6166 16.8765 11.8044 16.953 12 16.953C12.1956 16.953 12.3834 16.8765 12.5235 16.74L20.499 8.96553C20.5643 8.90193 20.6162 8.8259 20.6517 8.74191C20.6871 8.65792 20.7054 8.56769 20.7054 8.47653C20.7054 8.38537 20.6871 8.29513 20.6517 8.21114C20.6162 8.12715 20.5643 8.05112 20.499 7.98753C20.3651 7.85669 20.1852 7.78345 19.998 7.78345C19.8108 7.78345 19.6309 7.85669 19.497 7.98753V7.98903Z" fill="#716E7B" stroke="#716E7B"/>
                        </svg></span><span style="margin-left:1px;color:#716E7B">${t.data._directSubordinatesPaging} </span></div>
                    `
      }[r.layout](t.children)}  </div>`,
      /* Node paging button content and styling. You can access same helper methods as above. */
      pagingButton: (t, r, i, o) => {
        const s = o.pagingStep(t.parent), a = t.parent.data._pagingStep, u = t.parent.data._directSubordinatesPaging - a;
        return `
                   <div style="margin-top:90px;">
                      <div style="display:flex;width:170px;border-radius:20px;padding:5px 15px; padding-bottom:4px;;background-color:#E5E9F2">
                      <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.59 7.41L10.18 12L5.59 16.59L7 18L13 12L7 6L5.59 7.41ZM16 6H18V18H16V6Z" fill="#716E7B" stroke="#716E7B"/>
                      </svg>
                      </div><div style="line-height:2"> Show next ${Math.min(u, s)}  nodes </div></div>
                   </div>
                `;
      },
      /* You can access and modify actual node DOM element in runtime using this method. */
      nodeUpdate: function(t, r, i) {
        M.select(this).select(".node-rect").attr("stroke", (o) => o.data._highlighted || o.data._upToTheRootHighlighted ? "#E27396" : "none").attr("stroke-width", t.data._highlighted || t.data._upToTheRootHighlighted ? 10 : 1);
      },
      nodeEnter: (t) => t,
      // Custom handling of node update
      nodeExit: (t) => t,
      // Custom handling of exit node
      /* You can access and modify actual link DOM element in runtime using this method. */
      linkUpdate: function(t, r, i) {
        M.select(this).attr("stroke", (o) => o.data._upToTheRootHighlighted ? "#E27396" : "#E4E2E9").attr("stroke-width", (o) => o.data._upToTheRootHighlighted ? 5 : 1), t.data._upToTheRootHighlighted && M.select(this).raise();
      },
      /* Horizontal diagonal generation algorithm - https://observablehq.com/@bumbeishvili/curved-edges-compact-horizontal */
      hdiagonal: function(t, r, i) {
        const o = t.x, s = t.y, a = r.x, u = r.y;
        let l = i && i.x != null ? i.x : o, c = i && i.y != null ? i.y : s, f = a - o < 0 ? -1 : 1, d = u - s < 0 ? -1 : 1, p = 35, x = Math.abs(a - o) / 2 < p ? Math.abs(a - o) / 2 : p;
        x = Math.abs(u - s) / 2 < x ? Math.abs(u - s) / 2 : x;
        let y = Math.abs(a - o) / 2 - x;
        return `
                          M ${l} ${c}
                          L ${l} ${s}
                          L ${o} ${s}
                          L ${o + y * f} ${s}
                          C ${o + y * f + x * f} ${s} 
                            ${o + y * f + x * f} ${s} 
                            ${o + y * f + x * f} ${s + x * d}
                          L ${o + y * f + x * f} ${u - x * d} 
                          C ${o + y * f + x * f}  ${u} 
                            ${o + y * f + x * f}  ${u} 
                            ${a - y * f}  ${u}
                          L ${a} ${u}
               `;
      },
      /* Vertical diagonal generation algorithm - https://observablehq.com/@bumbeishvili/curved-edges-compacty-vertical */
      diagonal: function(t, r, i, o = { sy: 0 }) {
        const s = t.x;
        let a = t.y;
        const u = r.x, l = r.y;
        let c = i && i.x != null ? i.x : s, f = i && i.y != null ? i.y : a, d = u - s < 0 ? -1 : 1, p = l - a < 0 ? -1 : 1;
        a += o.sy;
        let x = 35, y = Math.abs(u - s) / 2 < x ? Math.abs(u - s) / 2 : x;
        y = Math.abs(l - a) / 2 < y ? Math.abs(l - a) / 2 : y;
        let C = Math.abs(l - a) / 2 - y, _ = Math.abs(u - s) - y * 2;
        return `
                          M ${c} ${f}
                          L ${s} ${f}
                          L ${s} ${a}
                          L ${s} ${a + C * p}
                          C  ${s} ${a + C * p + y * p} ${s} ${a + C * p + y * p} ${s + y * d} ${a + C * p + y * p}
                          L ${s + _ * d + y * d} ${a + C * p + y * p}
                          C  ${u}  ${a + C * p + y * p} ${u}  ${a + C * p + y * p} ${u} ${l - C * p}
                          L ${u} ${l}
               `;
      },
      // Defining arrows with markers for connections
      defs: function(t, r) {
        return `<defs>
                    ${r.map((i) => {
          const o = this.getTextWidth(i.label, { ctx: t.ctx, fontSize: 2, defaultFont: t.defaultFont });
          return `
                       <marker id="${i.from + "_" + i.to}" refX="${i._source.x < i._target.x ? -7 : 7}" refY="5" markerWidth="500"  markerHeight="500"  orient="${i._source.x < i._target.x ? "auto" : "auto-start-reverse"}" >
                       <rect rx=0.5 width=${i.label ? o + 3 : 0} height=3 y=1  fill="#E27396"></rect>
                       <text font-size="2px" x=1 fill="white" y=3>${i.label || ""}</text>
                       </marker>

                       <marker id="arrow-${i.from + "_" + i.to}"  markerWidth="500"  markerHeight="500"  refY="2"  refX="1" orient="${i._source.x < i._target.x ? "auto" : "auto-start-reverse"}" >
                       <path transform="translate(0)" d='M0,0 V4 L2,2 Z' fill='#E27396' />
                       </marker>
                    `;
        }).join("")}
                    </defs>
                    `;
      },
      /* You can update connections with custom styling using this function */
      connectionsUpdate: function(t, r, i) {
        M.select(this).attr("stroke", (o) => "#E27396").attr("stroke-linecap", "round").attr("stroke-width", (o) => "5").attr("pointer-events", "none").attr("marker-start", (o) => `url(#${o.from + "_" + o.to})`).attr("marker-end", (o) => `url(#arrow-${o.from + "_" + o.to})`);
      },
      // Link generator for connections
      linkGroupArc: M.linkHorizontal().x((t) => t.x).y((t) => t.y),
      /*
      *   You can customize/offset positions for each node and link by overriding these functions
      *   For example, suppose you want to move link y position 30 px bellow in top layout. You can do it like this:
      *   ```javascript
      *   const layout = chart.layoutBindings();
      *   layout.top.linkY = node => node.y + 30;
      *   chart.layoutBindings(layout);
      *   ```
      */
      layoutBindings: {
        left: {
          nodeLeftX: (t) => 0,
          nodeRightX: (t) => t.width,
          nodeTopY: (t) => -t.height / 2,
          nodeBottomY: (t) => t.height / 2,
          nodeJoinX: (t) => t.x + t.width,
          nodeJoinY: (t) => t.y - t.height / 2,
          linkJoinX: (t) => t.x + t.width,
          linkJoinY: (t) => t.y,
          linkX: (t) => t.x,
          linkY: (t) => t.y,
          linkCompactXStart: (t) => t.x + t.width / 2,
          //node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          linkCompactYStart: (t) => t.y + (t.compactEven ? t.height / 2 : -t.height / 2),
          compactLinkMidX: (t, r) => t.firstCompactNode.x,
          // node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          compactLinkMidY: (t, r) => t.firstCompactNode.y + t.firstCompactNode.flexCompactDim[0] / 4 + r.compactMarginPair(t) / 4,
          linkParentX: (t) => t.parent.x + t.parent.width,
          linkParentY: (t) => t.parent.y,
          buttonX: (t) => t.width,
          buttonY: (t) => t.height / 2,
          centerTransform: ({ root: t, rootMargin: r, centerY: i, scale: o, centerX: s }) => `translate(${r},${i}) scale(${o})`,
          compactDimension: {
            sizeColumn: (t) => t.height,
            sizeRow: (t) => t.width,
            reverse: (t) => t.slice().reverse()
          },
          nodeFlexSize: ({ height: t, width: r, siblingsMargin: i, childrenMargin: o, state: s, node: a }) => s.compact && a.flexCompactDim ? [a.flexCompactDim[0], a.flexCompactDim[1]] : [t + i, r + o],
          zoomTransform: ({ centerY: t, scale: r }) => `translate(0,${t}) scale(${r})`,
          diagonal: this.hdiagonal.bind(this),
          swap: (t) => {
            const r = t.x;
            t.x = t.y, t.y = r;
          },
          nodeUpdateTransform: ({ x: t, y: r, width: i, height: o }) => `translate(${t},${r - o / 2})`
        },
        top: {
          nodeLeftX: (t) => -t.width / 2,
          nodeRightX: (t) => t.width / 2,
          nodeTopY: (t) => 0,
          nodeBottomY: (t) => t.height,
          nodeJoinX: (t) => t.x - t.width / 2,
          nodeJoinY: (t) => t.y + t.height,
          linkJoinX: (t) => t.x,
          linkJoinY: (t) => t.y + t.height,
          linkCompactXStart: (t) => t.x + (t.compactEven ? t.width / 2 : -t.width / 2),
          linkCompactYStart: (t) => t.y + t.height / 2,
          compactLinkMidX: (t, r) => t.firstCompactNode.x + t.firstCompactNode.flexCompactDim[0] / 4 + r.compactMarginPair(t) / 4,
          compactLinkMidY: (t) => t.firstCompactNode.y,
          compactDimension: {
            sizeColumn: (t) => t.width,
            sizeRow: (t) => t.height,
            reverse: (t) => t
          },
          linkX: (t) => t.x,
          linkY: (t) => t.y,
          linkParentX: (t) => t.parent.x,
          linkParentY: (t) => t.parent.y + t.parent.height,
          buttonX: (t) => t.width / 2,
          buttonY: (t) => t.height,
          centerTransform: ({ root: t, rootMargin: r, centerY: i, scale: o, centerX: s }) => `translate(${s},${r}) scale(${o})`,
          nodeFlexSize: ({ height: t, width: r, siblingsMargin: i, childrenMargin: o, state: s, node: a, compactViewIndex: u }) => s.compact && a.flexCompactDim ? [a.flexCompactDim[0], a.flexCompactDim[1]] : [r + i, t + o],
          zoomTransform: ({ centerX: t, scale: r }) => `translate(${t},0}) scale(${r})`,
          diagonal: this.diagonal.bind(this),
          swap: (t) => {
          },
          nodeUpdateTransform: ({ x: t, y: r, width: i, height: o }) => `translate(${t - i / 2},${r})`
        },
        bottom: {
          nodeLeftX: (t) => -t.width / 2,
          nodeRightX: (t) => t.width / 2,
          nodeTopY: (t) => -t.height,
          nodeBottomY: (t) => 0,
          nodeJoinX: (t) => t.x - t.width / 2,
          nodeJoinY: (t) => t.y - t.height - t.height,
          linkJoinX: (t) => t.x,
          linkJoinY: (t) => t.y - t.height,
          linkCompactXStart: (t) => t.x + (t.compactEven ? t.width / 2 : -t.width / 2),
          linkCompactYStart: (t) => t.y - t.height / 2,
          compactLinkMidX: (t, r) => t.firstCompactNode.x + t.firstCompactNode.flexCompactDim[0] / 4 + r.compactMarginPair(t) / 4,
          compactLinkMidY: (t) => t.firstCompactNode.y,
          linkX: (t) => t.x,
          linkY: (t) => t.y,
          compactDimension: {
            sizeColumn: (t) => t.width,
            sizeRow: (t) => t.height,
            reverse: (t) => t
          },
          linkParentX: (t) => t.parent.x,
          linkParentY: (t) => t.parent.y - t.parent.height,
          buttonX: (t) => t.width / 2,
          buttonY: (t) => 0,
          centerTransform: ({ root: t, rootMargin: r, centerY: i, scale: o, centerX: s, chartHeight: a }) => `translate(${s},${a - r}) scale(${o})`,
          nodeFlexSize: ({ height: t, width: r, siblingsMargin: i, childrenMargin: o, state: s, node: a }) => s.compact && a.flexCompactDim ? [a.flexCompactDim[0], a.flexCompactDim[1]] : [r + i, t + o],
          zoomTransform: ({ centerX: t, scale: r }) => `translate(${t},0}) scale(${r})`,
          diagonal: this.diagonal.bind(this),
          swap: (t) => {
            t.y = -t.y;
          },
          nodeUpdateTransform: ({ x: t, y: r, width: i, height: o }) => `translate(${t - i / 2},${r - o})`
        },
        right: {
          nodeLeftX: (t) => -t.width,
          nodeRightX: (t) => 0,
          nodeTopY: (t) => -t.height / 2,
          nodeBottomY: (t) => t.height / 2,
          nodeJoinX: (t) => t.x - t.width - t.width,
          nodeJoinY: (t) => t.y - t.height / 2,
          linkJoinX: (t) => t.x - t.width,
          linkJoinY: (t) => t.y,
          linkX: (t) => t.x,
          linkY: (t) => t.y,
          linkParentX: (t) => t.parent.x - t.parent.width,
          linkParentY: (t) => t.parent.y,
          buttonX: (t) => 0,
          buttonY: (t) => t.height / 2,
          linkCompactXStart: (t) => t.x - t.width / 2,
          //node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          linkCompactYStart: (t) => t.y + (t.compactEven ? t.height / 2 : -t.height / 2),
          compactLinkMidX: (t, r) => t.firstCompactNode.x,
          // node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          compactLinkMidY: (t, r) => t.firstCompactNode.y + t.firstCompactNode.flexCompactDim[0] / 4 + r.compactMarginPair(t) / 4,
          centerTransform: ({ root: t, rootMargin: r, centerY: i, scale: o, centerX: s, chartWidth: a }) => `translate(${a - r},${i}) scale(${o})`,
          nodeFlexSize: ({ height: t, width: r, siblingsMargin: i, childrenMargin: o, state: s, node: a }) => s.compact && a.flexCompactDim ? [a.flexCompactDim[0], a.flexCompactDim[1]] : [t + i, r + o],
          compactDimension: {
            sizeColumn: (t) => t.height,
            sizeRow: (t) => t.width,
            reverse: (t) => t.slice().reverse()
          },
          zoomTransform: ({ centerY: t, scale: r }) => `translate(0,${t}) scale(${r})`,
          diagonal: this.hdiagonal.bind(this),
          swap: (t) => {
            const r = t.x;
            t.x = -t.y, t.y = r;
          },
          nodeUpdateTransform: ({ x: t, y: r, width: i, height: o }) => `translate(${t - i},${r - o / 2})`
        }
      }
    };
    this.getChartState = () => n, Object.keys(n).forEach((t) => {
      this[t] = function(r) {
        if (arguments.length)
          n[t] = r;
        else
          return n[t];
        return this;
      };
    }), this.initializeEnterExitUpdatePattern();
  }
  initializeEnterExitUpdatePattern() {
    M.selection.prototype.patternify = function(n) {
      var t = this, r = n.selector, i = n.tag, o = n.data || [r], s = t.selectAll("." + r).data(o, (a, u) => typeof a == "object" && a.id ? a.id : u);
      return s.exit().remove(), s = s.enter().append(i).merge(s), s.attr("class", r), s;
    };
  }
  // This method retrieves passed node's children IDs (including node)
  getNodeChildren({ data: n, children: t, _children: r }, i) {
    return i.push(n), t && t.forEach((o) => {
      this.getNodeChildren(o, i);
    }), r && r.forEach((o) => {
      this.getNodeChildren(o, i);
    }), i;
  }
  // This method can be invoked via chart.setZoomFactor API, it zooms to particulat scale
  initialZoom(n) {
    const t = this.getChartState();
    return t.lastTransform.k = n, this;
  }
  render() {
    const n = this.getChartState();
    if (!n.data || n.data.length == 0)
      return console.log("ORG CHART - Data is empty"), n.container && (X(n.container).select(".nodes-wrapper").remove(), X(n.container).select(".links-wrapper").remove(), X(n.container).select(".connections-wrapper").remove()), this;
    const t = M.select(n.container), r = t.node().getBoundingClientRect();
    r.width > 0 && (n.svgWidth = r.width);
    const i = {
      id: `ID${Math.floor(Math.random() * 1e6)}`,
      // id for event handlings,
      chartWidth: n.svgWidth,
      chartHeight: n.svgHeight
    };
    if (n.calc = i, i.centerX = i.chartWidth / 2, i.centerY = i.chartHeight / 2, n.firstDraw) {
      const a = {
        zoom: null
      };
      a.zoom = n.createZoom().clickDistance(10).on("start", (u, l) => n.onZoomStart(u)).on("end", (u, l) => n.onZoomEnd(u)).on("zoom", (u, l) => {
        n.onZoom(u), this.zoomed(u, l);
      }).scaleExtent(n.scaleExtent), n.zoomBehavior = a.zoom;
    }
    n.flexTreeLayout = me({
      nodeSize: (a) => {
        const u = n.nodeWidth(a), l = n.nodeHeight(a), c = n.siblingsMargin(a), f = n.childrenMargin(a);
        return n.layoutBindings[n.layout].nodeFlexSize({
          state: n,
          node: a,
          width: u,
          height: l,
          siblingsMargin: c,
          childrenMargin: f
        });
      }
    }).spacing((a, u) => a.parent == u.parent ? 0 : n.neighbourMargin(a, u)), this.setLayouts({ expandNodesFirst: !1 });
    const o = t.patternify({
      tag: "svg",
      selector: "svg-chart-container"
    }).attr("width", n.svgWidth).attr("height", n.svgHeight).attr("font-family", n.defaultFont);
    n.firstDraw && o.call(n.zoomBehavior).on("dblclick.zoom", null).attr("cursor", "move"), n.svg = o;
    const s = o.patternify({
      tag: "g",
      selector: "chart"
    });
    return n.centerG = s.patternify({
      tag: "g",
      selector: "center-group"
    }), n.linksWrapper = n.centerG.patternify({
      tag: "g",
      selector: "links-wrapper"
    }), n.nodesWrapper = n.centerG.patternify({
      tag: "g",
      selector: "nodes-wrapper"
    }), n.connectionsWrapper = n.centerG.patternify({
      tag: "g",
      selector: "connections-wrapper"
    }), n.defsWrapper = o.patternify({
      tag: "g",
      selector: "defs-wrapper"
    }), n.firstDraw && n.centerG.attr("transform", () => n.layoutBindings[n.layout].centerTransform({
      centerX: i.centerX,
      centerY: i.centerY,
      scale: n.lastTransform.k,
      rootMargin: n.rootMargin,
      root: n.root,
      chartHeight: i.chartHeight,
      chartWidth: i.chartWidth
    })), n.chart = s, this.update(n.root), M.select(window).on(`resize.${n.id}`, () => {
      const a = M.select(n.container).node().getBoundingClientRect();
      n.svg.attr("width", a.width);
    }), n.firstDraw && (n.firstDraw = !1), this;
  }
  // This function can be invoked via chart.addNode API, and it adds node in tree at runtime
  addNode(n) {
    const t = this.getChartState();
    if (n && (t.parentNodeId(n) == null || t.parentNodeId(n) == t.nodeId(n)) && t.data.length == 0)
      return t.data.push(n), this.render(), this;
    const i = t.generateRoot(t.data).descendants(), o = i.filter(({ data: s }) => t.nodeId(s).toString() === t.nodeId(n).toString())[0];
    return i.filter(({ data: s }) => t.nodeId(s).toString() === t.parentNodeId(n).toString())[0], o ? (console.log(`ORG CHART - ADD - Node with id "${t.nodeId(n)}" already exists in tree`), this) : (n._centered && !n._expanded && (n._expanded = !0), t.data.push(n), this.updateNodesState(), this);
  }
  // This function can be invoked via chart.removeNode API, and it removes node from tree at runtime
  removeNode(n) {
    const t = this.getChartState(), o = t.generateRoot(t.data).descendants().filter(({ data: a }) => t.nodeId(a) == n)[0];
    return o ? (o.descendants().forEach((a) => a.data._filteredOut = !0), t.data = t.data.filter((a) => !a._filteredOut), t.data.length == 0 ? this.render() : this.updateNodesState.bind(this)(), this) : (console.log(`ORG CHART - REMOVE - Node with id "${n}" not found in the tree`), this);
  }
  groupBy(n, t, r) {
    const i = {};
    return n.forEach((o) => {
      const s = t(o);
      i[s] || (i[s] = []), i[s].push(o);
    }), Object.keys(i).forEach((o) => {
      i[o] = r(i[o]);
    }), Object.entries(i);
  }
  calculateCompactFlexDimensions(n) {
    const t = this.getChartState();
    n.eachBefore((r) => {
      r.firstCompact = null, r.compactEven = null, r.flexCompactDim = null, r.firstCompactNode = null;
    }), n.eachBefore((r) => {
      if (r.children && r.children.length > 1) {
        const i = r.children.filter((c) => !c.children);
        if (i.length < 2) return;
        i.forEach((c, f) => {
          f || (c.firstCompact = !0), f % 2 ? c.compactEven = !1 : c.compactEven = !0, c.row = Math.floor(f / 2);
        });
        const o = M.max(i.filter((c) => c.compactEven), t.layoutBindings[t.layout].compactDimension.sizeColumn), s = M.max(i.filter((c) => !c.compactEven), t.layoutBindings[t.layout].compactDimension.sizeColumn), a = Math.max(o, s) * 2, u = this.groupBy(i, (c) => c.row, (c) => M.max(c, (f) => t.layoutBindings[t.layout].compactDimension.sizeRow(f) + t.compactMarginBetween(f))), l = M.sum(u.map((c) => c[1]));
        i.forEach((c) => {
          c.firstCompactNode = i[0], c.firstCompact ? c.flexCompactDim = [
            a + t.compactMarginPair(c),
            l - t.compactMarginBetween(c)
          ] : c.flexCompactDim = [0, 0];
        }), r.flexCompactDim = null;
      }
    });
  }
  calculateCompactFlexPositions(n) {
    const t = this.getChartState();
    n.eachBefore((r) => {
      if (r.children) {
        const i = r.children.filter((c) => c.flexCompactDim), o = i[0];
        if (!o) return;
        i.forEach((c, f, d) => {
          f == 0 && (o.x -= o.flexCompactDim[0] / 2), f & f % 2 - 1 ? c.x = o.x + o.flexCompactDim[0] * 0.25 - t.compactMarginPair(c) / 4 : f && (c.x = o.x + o.flexCompactDim[0] * 0.75 + t.compactMarginPair(c) / 4);
        });
        const s = o.x + o.flexCompactDim[0] * 0.5;
        o.x = o.x + o.flexCompactDim[0] * 0.25 - t.compactMarginPair(o) / 4;
        const a = r.x - s;
        Math.abs(a) < 10 && i.forEach((c) => c.x += a);
        const u = this.groupBy(i, (c) => c.row, (c) => M.max(c, (f) => t.layoutBindings[t.layout].compactDimension.sizeRow(f))), l = M.cumsum(u.map((c) => c[1] + t.compactMarginBetween(c)));
        i.forEach((c, f) => {
          c.row ? c.y = o.y + l[c.row - 1] : c.y = o.y;
        });
      }
    });
  }
  // This function basically redraws visible graph, based on nodes state
  update({ x0: n, y0: t, x: r = 0, y: i = 0, width: o, height: s }) {
    const a = this.getChartState();
    a.calc, a.compact && this.calculateCompactFlexDimensions(a.root);
    const u = a.flexTreeLayout(a.root);
    a.compact && this.calculateCompactFlexPositions(a.root);
    const l = u.descendants(), c = u.descendants().slice(1);
    l.forEach(a.layoutBindings[a.layout].swap);
    const f = a.connections, d = {};
    a.allNodes.forEach((h) => d[a.nodeId(h.data)] = h);
    const p = {};
    l.forEach((h) => p[a.nodeId(h.data)] = h), f.forEach((h) => {
      const m = d[h.from], w = d[h.to];
      h._source = m, h._target = w;
    });
    const x = f.filter((h) => p[h.from] && p[h.to]), y = a.defs.bind(this)(a, x), C = a.defsWrapper.html();
    y !== C && a.defsWrapper.html(y);
    const _ = a.linksWrapper.selectAll("path.link").data(c, (h) => a.nodeId(h.data)), S = _.enter().insert("path", "g").attr("class", "link").attr("d", (h) => {
      const m = a.layoutBindings[a.layout].linkJoinX({ x: n, y: t, width: o, height: s }), w = a.layoutBindings[a.layout].linkJoinY({ x: n, y: t, width: o, height: s }), v = { x: m, y: w };
      return a.layoutBindings[a.layout].diagonal(v, v, v);
    }).merge(_);
    S.attr("fill", "none"), this.isEdge() ? S.style("display", (h) => h.data._pagingButton ? "none" : "auto") : S.attr("display", (h) => h.data._pagingButton ? "none" : "auto"), S.each(a.linkUpdate), S.transition().duration(a.duration).attr("d", (h) => {
      const m = a.compact && h.flexCompactDim ? {
        x: a.layoutBindings[a.layout].compactLinkMidX(h, a),
        y: a.layoutBindings[a.layout].compactLinkMidY(h, a)
      } : {
        x: a.layoutBindings[a.layout].linkX(h),
        y: a.layoutBindings[a.layout].linkY(h)
      }, w = {
        x: a.layoutBindings[a.layout].linkParentX(h),
        y: a.layoutBindings[a.layout].linkParentY(h)
      }, v = a.compact && h.flexCompactDim ? {
        x: a.layoutBindings[a.layout].linkCompactXStart(h),
        y: a.layoutBindings[a.layout].linkCompactYStart(h)
      } : m;
      return a.layoutBindings[a.layout].diagonal(m, w, v, { sy: a.linkYOffset });
    }), _.exit().transition().duration(a.duration).attr("d", (h) => {
      const m = a.layoutBindings[a.layout].linkJoinX({ x: r, y: i, width: o, height: s }), w = a.layoutBindings[a.layout].linkJoinY({ x: r, y: i, width: o, height: s }), v = { x: m, y: w };
      return a.layoutBindings[a.layout].diagonal(v, v, null, { sy: a.linkYOffset });
    }).remove();
    const k = a.connectionsWrapper.selectAll("path.connection").data(x), A = k.enter().insert("path", "g").attr("class", "connection").attr("d", (h) => {
      const m = a.layoutBindings[a.layout].linkJoinX({ x: n, y: t, width: o, height: s }), w = a.layoutBindings[a.layout].linkJoinY({ x: n, y: t, width: o, height: s }), v = { x: m, y: w };
      return a.layoutBindings[a.layout].diagonal(v, v, null, { sy: a.linkYOffset });
    }).merge(k);
    A.attr("fill", "none"), A.transition().duration(a.duration).attr("d", (h) => {
      const m = a.layoutBindings[a.layout].linkX({ x: h._source.x, y: h._source.y, width: h._source.width, height: h._source.height }), w = a.layoutBindings[a.layout].linkY({ x: h._source.x, y: h._source.y, width: h._source.width, height: h._source.height }), v = a.layoutBindings[a.layout].linkJoinX({ x: h._target.x, y: h._target.y, width: h._target.width, height: h._target.height }), b = a.layoutBindings[a.layout].linkJoinY({ x: h._target.x, y: h._target.y, width: h._target.width, height: h._target.height });
      return a.linkGroupArc({ source: { x: m, y: w }, target: { x: v, y: b } });
    }), A.each(a.connectionsUpdate), k.exit().transition().duration(a.duration).attr("opacity", 0).remove();
    const R = a.nodesWrapper.selectAll("g.node").data(l, ({ data: h }) => a.nodeId(h)), U = R.enter().append("g").attr("class", "node").attr("transform", (h) => {
      if (h == a.root) return `translate(${n},${t})`;
      const m = a.layoutBindings[a.layout].nodeJoinX({ x: n, y: t, width: o, height: s }), w = a.layoutBindings[a.layout].nodeJoinY({ x: n, y: t, width: o, height: s });
      return `translate(${m},${w})`;
    }).attr("cursor", "pointer").on("click.node", (h, m) => {
      const { data: w } = m;
      if (![...h.srcElement.classList].includes("node-button-foreign-object")) {
        if ([...h.srcElement.classList].includes("paging-button-wrapper")) {
          this.loadPagingNodes(m);
          return;
        }
        if (!w._pagingButton) {
          a.onNodeClick(m);
          return;
        }
        console.log("event fired, no handlers");
      }
    }).on("keydown.node", (h, m) => {
      const { data: w } = m;
      if (h.key === "Enter" || h.key === " " || h.key === "Spacebar") {
        if ([...h.srcElement.classList].includes("node-button-foreign-object"))
          return;
        if ([...h.srcElement.classList].includes("paging-button-wrapper")) {
          this.loadPagingNodes(m);
          return;
        }
        (h.key === "Enter" || h.key === " " || h.key === "Spacebar") && this.onButtonClick(h, m);
      }
    });
    U.each(a.nodeEnter), U.patternify({
      tag: "rect",
      selector: "node-rect",
      data: (h) => [h]
    });
    const I = U.merge(R).style("font", "12px sans-serif");
    I.patternify({
      tag: "foreignObject",
      selector: "node-foreign-object",
      data: (h) => [h]
    }).style("overflow", "visible").patternify({
      tag: "xhtml:div",
      selector: "node-foreign-object-div",
      data: (h) => [h]
    }), this.restyleForeignObjectElements();
    const wt = U.patternify({
      tag: "g",
      selector: "node-button-g",
      data: (h) => [h]
    }).on("click", (h, m) => this.onButtonClick(h, m)).on("keydown", (h, m) => {
      (h.key === "Enter" || h.key === " " || h.key === "Spacebar") && this.onButtonClick(h, m);
    });
    wt.patternify({
      tag: "rect",
      selector: "node-button-rect",
      data: (h) => [h]
    }).attr("opacity", 0).attr("pointer-events", "all").attr("width", (h) => a.nodeButtonWidth(h)).attr("height", (h) => a.nodeButtonHeight(h)).attr("x", (h) => a.nodeButtonX(h)).attr("y", (h) => a.nodeButtonY(h)), wt.patternify({
      tag: "foreignObject",
      selector: "node-button-foreign-object",
      data: (h) => [h]
    }).attr("width", (h) => a.nodeButtonWidth(h)).attr("height", (h) => a.nodeButtonHeight(h)).attr("x", (h) => a.nodeButtonX(h)).attr("y", (h) => a.nodeButtonY(h)).style("overflow", "visible").patternify({
      tag: "xhtml:div",
      selector: "node-button-div",
      data: (h) => [h]
    }).style("pointer-events", "none").style("display", "flex").style("width", "100%").style("height", "100%"), I.transition().attr("opacity", 0).duration(a.duration).attr("transform", ({ x: h, y: m, width: w, height: v }) => a.layoutBindings[a.layout].nodeUpdateTransform({ x: h, y: m, width: w, height: v })).attr("opacity", 1), I.select(".node-rect").attr("width", ({ width: h }) => h).attr("height", ({ height: h }) => h).attr("x", ({ width: h }) => 0).attr("y", ({ height: h }) => 0).attr("cursor", "pointer").attr("rx", 3).attr("fill", a.nodeDefaultBackground), I.select(".node-button-g").attr("transform", ({ data: h, width: m, height: w }) => {
      const v = a.layoutBindings[a.layout].buttonX({ width: m, height: w }), b = a.layoutBindings[a.layout].buttonY({ width: m, height: w });
      return `translate(${v},${b})`;
    }).attr("display", ({ data: h }) => h._directSubordinates > 0 ? null : "none").attr("opacity", ({ data: h, children: m, _children: w }) => h._pagingButton ? 0 : m || w ? 1 : 0), I.select(".node-button-foreign-object .node-button-div").html((h) => a.buttonContent({ node: h, state: a })), I.select(".node-button-text").attr("text-anchor", "middle").attr("alignment-baseline", "middle").attr("font-size", ({ children: h }) => h ? 40 : 26).text(({ children: h }) => h ? "-" : "+").attr("y", this.isEdge() ? 10 : 0), I.each(a.nodeUpdate);
    const ut = R.exit();
    ut.each(a.nodeExit);
    const Ht = ut.data().reduce((h, m) => h.depth < m.depth ? h : m, { depth: 1 / 0 });
    ut.attr("opacity", 1).transition().duration(a.duration).attr("transform", (h) => {
      let { x: m, y: w, width: v, height: b } = Ht.parent || {};
      const E = a.layoutBindings[a.layout].nodeJoinX({ x: m, y: w, width: v, height: b }), N = a.layoutBindings[a.layout].nodeJoinY({ x: m, y: w, width: v, height: b });
      return `translate(${E},${N})`;
    }).on("end", function() {
      M.select(this).remove();
    }).attr("opacity", 0), l.forEach((h) => {
      h.x0 = h.x, h.y0 = h.y;
    });
    const g = a.allNodes.filter((h) => h.data._centered)[0];
    if (g) {
      let h = [g];
      g.data._centeredWithDescendants && (a.compact ? h = g.descendants().filter((m, w) => w < 7) : h = g.descendants().filter((m, w, v) => {
        const b = Math.round(v.length / 2), E = 2;
        return v.length % 2 ? w > b - E && w < b + E - 1 : w > b - E && w < b + E;
      })), g.data._centeredWithDescendants = null, g.data._centered = null, this.fit({
        animate: !0,
        scale: !1,
        nodes: h
      });
    }
  }
  // This function detects whether current browser is edge
  isEdge() {
    return window.navigator.userAgent.includes("Edge");
  }
  // Generate horizontal diagonal - play with it here - https://observablehq.com/@bumbeishvili/curved-edges-horizontal-d3-v3-v4-v5-v6
  hdiagonal(n, t, r, i) {
    return this.getChartState().hdiagonal(n, t, r, i);
  }
  // Generate custom diagonal - play with it here - https://observablehq.com/@bumbeishvili/curved-edges
  diagonal(n, t, r, i) {
    return this.getChartState().diagonal(n, t, r, i);
  }
  restyleForeignObjectElements() {
    const n = this.getChartState();
    n.svg.selectAll(".node-foreign-object").attr("width", ({ width: t }) => t).attr("height", ({ height: t }) => t).attr("x", ({ width: t }) => 0).attr("y", ({ height: t }) => 0), n.svg.selectAll(".node-foreign-object-div").style("width", ({ width: t }) => `${t}px`).style("height", ({ height: t }) => `${t}px`).html(function(t, r, i) {
      return t.data._pagingButton ? `<div class="paging-button-wrapper"><div style="pointer-events:none">${n.pagingButton(t, r, i, n)}</div></div>` : n.nodeContent.bind(this)(t, r, i, n);
    });
  }
  // Toggle children on click.
  onButtonClick(n, t) {
    const r = this.getChartState();
    t.data._pagingButton || (r.setActiveNodeCentered && (t.data._centered = !0, t.data._centeredWithDescendants = !0), t.children ? (t._children = t.children, t.children = null, this.setExpansionFlagToChildren(t, !1)) : (t.children = t._children, t._children = null, t.children && t.children.forEach(({ data: i }) => i._expanded = !0)), this.update(t), n.stopPropagation(), r.onExpandOrCollapse(t));
  }
  // This function changes `expanded` property to descendants
  setExpansionFlagToChildren({ data: n, children: t, _children: r }, i) {
    n._expanded = i, t && t.forEach((o) => {
      this.setExpansionFlagToChildren(o, i);
    }), r && r.forEach((o) => {
      this.setExpansionFlagToChildren(o, i);
    });
  }
  // Method which only expands nodes, which have property set "expanded=true"
  expandSomeNodes(n) {
    if (n.data._expanded) {
      let t = n.parent;
      for (; t && t._children; )
        t.children = t._children, t._children = null, t = t.parent;
    }
    n._children && n._children.forEach((t) => this.expandSomeNodes(t)), n.children && n.children.forEach((t) => this.expandSomeNodes(t));
  }
  // This function updates nodes state and redraws graph, usually after data change
  updateNodesState() {
    const n = this.getChartState();
    this.setLayouts({ expandNodesFirst: !0 }), this.update(n.root);
  }
  setLayouts({ expandNodesFirst: n = !0 }) {
    const t = this.getChartState();
    t.generateRoot = M.stratify().id((o) => t.nodeId(o)).parentId((o) => t.parentNodeId(o)), t.root = t.generateRoot(t.data);
    const r = t.root.descendants();
    t.initialExpandLevel > 1 && r.length > 0 && (r.forEach((o) => {
      o.depth <= t.initialExpandLevel && (o.data._expanded = !0);
    }), t.initialExpandLevel = 1);
    const i = {};
    t.root.descendants().filter((o) => o.children).filter((o) => !o.data._pagingStep).forEach((o) => {
      o.data._pagingStep = t.minPagingVisibleNodes(o);
    }), t.root.eachBefore((o, s) => {
      o.data._directSubordinatesPaging = o.children ? o.children.length : 0, o.children && o.children.forEach((a, u) => {
        if (a.data._pagingButton = !1, u > o.data._pagingStep && (i[a.id] = !0), u === o.data._pagingStep && o.children.length - 1 > o.data._pagingStep && (a.data._pagingButton = !0), i[a.parent.id] && (i[a.id] = !0), a.data._expanded || a.data._centered || a.data._highlighted || a.data._upToTheRootHighlighted) {
          let l = a;
          for (; l && (i[l.id] || l.data._pagingButton); )
            i[l.id] = !1, l.data._pagingButton && (l.data._pagingButton = !1, l.parent.children.forEach((c) => {
              c.data._expanded = !0, i[c.id] = !1;
            })), l = l.parent;
        }
      });
    }), t.root = M.stratify().id((o) => t.nodeId(o)).parentId((o) => t.parentNodeId(o))(t.data.filter((o) => i[o.id] !== !0)), t.root.each((o, s, a) => {
      let u = o._hierarchyHeight || o.height, l = t.nodeWidth(o), c = t.nodeHeight(o);
      Object.assign(o, { width: l, height: c, _hierarchyHeight: u });
    }), t.root.x0 = 0, t.root.y0 = 0, t.allNodes = t.root.descendants(), t.allNodes.forEach((o) => {
      Object.assign(o.data, {
        _directSubordinates: o.children ? o.children.length : 0,
        _totalSubordinates: o.descendants().length - 1
      });
    }), t.root.children && (n && t.root.children.forEach(this.expand), t.root.children.forEach((o) => this.collapse(o)), t.initialExpandLevel == 0 && (t.root._children = t.root.children, t.root.children = null), [t.root].forEach((o) => this.expandSomeNodes(o)));
  }
  // Function which collapses passed node and it's descendants
  collapse(n) {
    n.children && (n._children = n.children, n._children.forEach((t) => this.collapse(t)), n.children = null);
  }
  // Function which expands passed node and it's descendants
  expand(n) {
    n._children && (n.children = n._children, n.children.forEach((t) => this.expand(t)), n._children = null);
  }
  // Zoom handler function
  zoomed(n, t) {
    const r = this.getChartState(), i = r.chart, o = n.transform;
    r.lastTransform = o, i.attr("transform", o), this.isEdge() && this.restyleForeignObjectElements();
  }
  zoomTreeBounds({ x0: n, x1: t, y0: r, y1: i, params: o = { animate: !0, scale: !0, onCompleted: () => {
  } } }) {
    const { centerG: s, svgWidth: a, svgHeight: u, svg: l, zoomBehavior: c, duration: f, lastTransform: d } = this.getChartState();
    let p = Math.min(8, 0.9 / Math.max((t - n) / a, (i - r) / u)), x = M.zoomIdentity.translate(a / 2, u / 2);
    x = x.scale(o.scale ? p : d.k), x = x.translate(-(n + t) / 2, -(r + i) / 2), l.transition().duration(o.animate ? f : 0).call(c.transform, x), s.transition().duration(o.animate ? f : 0).attr("transform", "translate(0,0)").on("end", function() {
      o.onCompleted && o.onCompleted();
    });
  }
  fit({ animate: n = !0, nodes: t, scale: r = !0, onCompleted: i = () => {
  } } = {}) {
    const o = this.getChartState(), { root: s } = o;
    let a = t || s.descendants();
    const u = M.min(a, (d) => d.x + o.layoutBindings[o.layout].nodeLeftX(d)), l = M.max(a, (d) => d.x + o.layoutBindings[o.layout].nodeRightX(d)), c = M.min(a, (d) => d.y + o.layoutBindings[o.layout].nodeTopY(d)), f = M.max(a, (d) => d.y + o.layoutBindings[o.layout].nodeBottomY(d));
    return this.zoomTreeBounds({
      params: { animate: n, scale: r, onCompleted: i },
      x0: u - 50,
      x1: l + 50,
      y0: c - 50,
      y1: f + 50
    }), this;
  }
  // Load Paging Nodes
  loadPagingNodes(n) {
    const t = this.getChartState();
    n.data._pagingButton = !1;
    const r = n.parent.data._pagingStep, i = t.pagingStep(n.parent), o = r + i;
    n.parent.data._pagingStep = o, this.updateNodesState();
  }
  // This function can be invoked via chart.setExpanded API, it expands or collapses particular node
  setExpanded(n, t = !0) {
    const r = this.getChartState(), i = r.allNodes.filter(({ data: o }) => r.nodeId(o) == n)[0];
    if (!i)
      return console.log(`ORG CHART - ${t ? "EXPAND" : "COLLAPSE"} - Node with id (${n})  not found in the tree`), this;
    if (i.data._expanded = t, t == !1) {
      const o = i.parent || { descendants: () => [] };
      o.descendants().filter((a) => a != o).forEach((a) => a.data._expanded = !1);
    }
    return this;
  }
  setCentered(n) {
    const t = this.getChartState(), o = t.generateRoot(t.data).descendants().filter(({ data: a }) => t.nodeId(a).toString() == n.toString())[0];
    return o ? (o.ancestors().forEach((a) => a.data._expanded = !0), o.data._centered = !0, o.data._expanded = !0, this) : (console.log(`ORG CHART - CENTER - Node with id (${n}) not found in the tree`), this);
  }
  setHighlighted(n) {
    const t = this.getChartState(), o = t.generateRoot(t.data).descendants().filter((a) => t.nodeId(a.data).toString() === n.toString())[0];
    return o ? (o.ancestors().forEach((a) => a.data._expanded = !0), o.data._highlighted = !0, o.data._expanded = !0, o.data._centered = !0, this) : (console.log(`ORG CHART - HIGHLIGHT - Node with id (${n})  not found in the tree`), this);
  }
  setUpToTheRootHighlighted(n) {
    const t = this.getChartState(), o = t.generateRoot(t.data).descendants().filter((a) => t.nodeId(a.data).toString() === n.toString())[0];
    return o ? (o.ancestors().forEach((a) => a.data._expanded = !0), o.data._upToTheRootHighlighted = !0, o.data._expanded = !0, o.ancestors().forEach((a) => a.data._upToTheRootHighlighted = !0), this) : (console.log(`ORG CHART - HIGHLIGHTROOT - Node with id (${n}) not found in the tree`), this);
  }
  clearHighlighting() {
    const n = this.getChartState();
    return n.allNodes.forEach((t) => {
      t.data._highlighted = !1, t.data._upToTheRootHighlighted = !1;
    }), this.update(n.root), this;
  }
  // It can take selector which would go fullscreen
  fullscreen(n) {
    const t = this.getChartState(), r = M.select(n || t.container).node();
    M.select(document).on("fullscreenchange." + t.id, function(i) {
      (document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement) == r ? setTimeout((s) => {
        t.svg.attr("height", window.innerHeight - 40);
      }, 500) : t.svg.attr("height", t.svgHeight);
    }), r.requestFullscreen ? r.requestFullscreen() : r.mozRequestFullScreen ? r.mozRequestFullScreen() : r.webkitRequestFullscreen ? r.webkitRequestFullscreen() : r.msRequestFullscreen && r.msRequestFullscreen();
  }
  // Zoom in exposed method
  zoomIn() {
    const { svg: n, zoomBehavior: t } = this.getChartState();
    n.transition().call(t.scaleBy, 1.3);
  }
  // Zoom out exposed method
  zoomOut() {
    const { svg: n, zoomBehavior: t } = this.getChartState();
    n.transition().call(t.scaleBy, 0.78);
  }
  toDataURL(n, t) {
    var r = new XMLHttpRequest();
    r.onload = function() {
      var i = new FileReader();
      i.onloadend = function() {
        t(i.result);
      }, i.readAsDataURL(r.response);
    }, r.open("GET", n), r.responseType = "blob", r.send();
  }
  exportImg({ full: n = !1, scale: t = 3, onLoad: r = (s) => s, save: i = !0, backgroundColor: o = "#FAFAFA" } = {}) {
    const s = this, a = this.getChartState(), { svg: u, root: l } = a;
    let c = 0;
    const f = u.selectAll("img");
    let d = f.size();
    const p = () => {
      JSON.parse(JSON.stringify(s.lastTransform()));
      const x = s.duration();
      n && s.fit();
      const { svg: y } = s.getChartState();
      setTimeout((C) => {
        s.downloadImage({
          node: y.node(),
          scale: t,
          isSvg: !1,
          backgroundColor: o,
          onAlreadySerialized: (_) => {
            s.update(l);
          },
          imageName: a.imageName,
          onLoad: r,
          save: i
        });
      }, n ? x + 10 : 0);
    };
    d > 0 ? f.each(function() {
      s.toDataURL(this.src, (x) => {
        this.src = x, ++c == d && p();
      });
    }) : p();
  }
  exportSvg() {
    const { svg: n, imageName: t } = this.getChartState();
    return this.downloadImage({ imageName: t, node: n.node(), scale: 3, isSvg: !0 }), this;
  }
  expandAll() {
    const { allNodes: n, root: t, data: r } = this.getChartState();
    return r.forEach((i) => i._expanded = !0), this.render(), this;
  }
  collapseAll() {
    const { allNodes: n, root: t } = this.getChartState();
    return n.forEach((r) => r.data._expanded = !1), this.initialExpandLevel(0), this.render(), this;
  }
  downloadImage({ node: n, scale: t = 2, imageName: r = "graph", isSvg: i = !1, save: o = !0, backgroundColor: s = "#FAFAFA", onAlreadySerialized: a = (l) => {
  }, onLoad: u = (l) => {
  } }) {
    const l = n;
    function c(y, C) {
      var _ = document.createElement("a");
      typeof _.download == "string" ? (document.body.appendChild(_), _.download = C, _.href = y, _.click(), document.body.removeChild(_)) : location.replace(y);
    }
    function f(y) {
      const C = "http://www.w3.org/2000/xmlns/", _ = "http://www.w3.org/1999/xlink", $ = "http://www.w3.org/2000/svg";
      y = y.cloneNode(!0);
      const S = window.location.href + "#", k = document.createTreeWalker(y, NodeFilter.SHOW_ELEMENT, null, !1);
      for (; k.nextNode(); )
        for (const R of k.currentNode.attributes)
          R.value.includes(S) && (R.value = R.value.replace(S, "#"));
      return y.setAttributeNS(C, "xmlns", $), y.setAttributeNS(C, "xmlns:xlink", _), new XMLSerializer().serializeToString(y);
    }
    if (i) {
      let y = f(l);
      y = `<?xml version="1.0" standalone="no"?>\r
` + y;
      var x = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(y);
      c(x, r + ".svg"), a();
      return;
    }
    const d = t, p = document.createElement("img");
    p.onload = function() {
      const y = document.createElement("canvas"), C = l.getBoundingClientRect();
      y.width = C.width * d, y.height = C.height * d;
      const _ = y.getContext("2d");
      _.fillStyle = s, _.fillRect(0, 0, C.width * d, C.height * d), _.drawImage(p, 0, 0, C.width * d, C.height * d);
      let $ = y.toDataURL("image/png");
      u && u($), o && c($, r + ".png");
    };
    var x = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(f(l));
    a(), p.src = x;
  }
  // Calculate what size text will take
  getTextWidth(n, {
    fontSize: t = 14,
    fontWeight: r = 400,
    defaultFont: i = "Helvetice",
    ctx: o
  } = {}) {
    return o.font = `${r || ""} ${t}px ${i} `, o.measureText(n).width;
  }
  // Clear after moving off from the page
  clear() {
    const n = this.getChartState();
    M.select(window).on(`resize.${n.id}`, null), n.svg && n.svg.selectAll("*").remove();
  }
}
class ye extends HTMLElement {
  static defaultApiUrl = "http://localhost:8000/api/brothers/";
  static observedAttributes = ["api-url"];
  brotherChart = new ys();
  container;
  constructor() {
    super(), this.innerHTML = `
            <div class="brother-tree-container">
                <div class="brother-tree-actions">
                    <button id="expand-all">Expand All</button>
                    <button id="collapse-all">Collapse All</button>
                    <button id="fit">Fit</button>
                </div>
                <div id="brother-tree-chart-container" class="brother-tree-chart-container"></div>
            </div>
            `, this.container = this.querySelector("#brother-tree-chart-container");
  }
  attributeChangedCallback(n, t) {
    document.readyState === "complete" && n !== t && this._update();
  }
  connectedCallback() {
    this.querySelector("#expand-all").addEventListener(
      "click",
      () => this.brotherChart.expandAll()
    ), this.querySelector("#collapse-all").addEventListener("click", () => {
      const n = this.brotherChart.getChartState().root.children[0]?.id;
      this.brotherChart.collapseAll().setExpanded(n, !0).render();
    }), this.querySelector("#fit").addEventListener(
      "click",
      () => this.brotherChart.fit()
    ), this._update();
  }
  async _update() {
    const t = await (await fetch(
      this.getAttribute("api-url") || ye.defaultApiUrl,
      { headers: { "ngrok-skip-browser-warning": "true" } }
    )).json();
    t.push({ id: -1, bigBrother: null }), this.renderTree(t);
  }
  renderTree(n) {
    console.log(n), this.brotherChart.data(n).container(this.container).parentNodeId((t) => t.bigBrother).nodeUpdate(function(t) {
      t.data.id === -1 && X(this).style("display", "none");
    }).linkUpdate(function(t) {
      t.data.bigBrother === -1 ? X(this).style("display", "none") : X(this).style(
        "stroke",
        "var(--brother-tree-border-color)"
      );
    }).nodeContent((t) => `<div class="brother-tree-node">
                            <img class="brother-image" src="${t.data.imageUrl ?? "default.svg"}"/>
                            <div class="brother-name">${t.data.fullName ?? "Henry Winklestein"}</div>
                            <div class="brother-info">${t.data.initiationTerm ? `Joined: ${t.data.initiationTerm}` : ""}</div>
                            <div class="brother-info">${t.data.major ? `Major: ${t.data.major}` : ""}</div>
                        </div>`).expandAll();
  }
}
customElements.define("brother-tree", ye);
export {
  ye as BrotherTree
};
