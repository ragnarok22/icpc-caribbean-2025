import { P as k, j as m } from "./definitions.B8rTUS0B.js";
import { r as c } from "./index.Cd_vQiNd.js";
const J = new Date("2025-11-08T14:00:00");
(k.MEMBER, k.MEMBER);
const w = (r, t, e) => {
    const i = document.createElement(r),
      [s, a] = Array.isArray(t) ? [void 0, t] : [t, e];
    return (s && Object.assign(i, s), a?.forEach((n) => i.appendChild(n)), i);
  },
  G = (r, t) => {
    var e;
    return t === "left"
      ? r.offsetLeft
      : (((e = r.offsetParent instanceof HTMLElement ? r.offsetParent : null) ==
        null
          ? void 0
          : e.offsetWidth) ?? 0) -
          r.offsetWidth -
          r.offsetLeft;
  },
  Y = (r) => r.offsetWidth > 0 && r.offsetHeight > 0,
  Z = (r, t) => {
    !customElements.get(r) && customElements.define(r, t);
  };
function q(r, t, { reverse: e = !1 } = {}) {
  const i = r.length;
  for (let s = e ? i - 1 : 0; e ? s >= 0 : s < i; e ? s-- : s++) t(r[s], s);
}
function Q(r, t, e, i) {
  const s = t.formatToParts(r);
  (e && s.unshift({ type: "prefix", value: e }),
    i && s.push({ type: "suffix", value: i }));
  const a = [],
    n = [],
    o = [],
    l = [],
    d = {},
    u = (p) => `${p}:${(d[p] = (d[p] ?? -1) + 1)}`;
  let f = "",
    g = !1,
    v = !1;
  for (const p of s) {
    f += p.value;
    const h = p.type === "minusSign" || p.type === "plusSign" ? "sign" : p.type;
    h === "integer"
      ? ((g = !0),
        n.push(
          ...p.value.split("").map((A) => ({ type: h, value: parseInt(A) })),
        ))
      : h === "group"
        ? n.push({ type: h, value: p.value })
        : h === "decimal"
          ? ((v = !0), o.push({ type: h, value: p.value, key: u(h) }))
          : h === "fraction"
            ? o.push(
                ...p.value.split("").map((A) => ({
                  type: h,
                  value: parseInt(A),
                  key: u(h),
                  pos: -1 - d[h],
                })),
              )
            : (g || v ? l : a).push({ type: h, value: p.value, key: u(h) });
  }
  const T = [];
  for (let p = n.length - 1; p >= 0; p--) {
    const h = n[p];
    T.unshift(
      h.type === "integer"
        ? { ...h, key: u(h.type), pos: d[h.type] }
        : { ...h, key: u(h.type) },
    );
  }
  return {
    pre: a,
    integer: T,
    fraction: o,
    post: l,
    valueAsString: f,
    value: typeof r == "string" ? parseFloat(r) : r,
  };
}
const K = String.raw,
  tt = (() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  })(),
  et =
    typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"),
  P =
    typeof matchMedia < "u"
      ? matchMedia("(prefers-reduced-motion: reduce)")
      : null,
  E = "--_number-flow-d-opacity",
  $ = "--_number-flow-d-width",
  R = "--_number-flow-dx",
  U = "--_number-flow-d",
  it = (() => {
    try {
      return (
        CSS.registerProperty({
          name: E,
          syntax: "<number>",
          inherits: !1,
          initialValue: "0",
        }),
        CSS.registerProperty({
          name: R,
          syntax: "<length>",
          inherits: !0,
          initialValue: "0px",
        }),
        CSS.registerProperty({
          name: $,
          syntax: "<number>",
          inherits: !1,
          initialValue: "0",
        }),
        CSS.registerProperty({
          name: U,
          syntax: "<number>",
          inherits: !0,
          initialValue: "0",
        }),
        !0
      );
    } catch {
      return !1;
    }
  })(),
  st = "var(--number-flow-char-height, 1em)",
  y = "var(--number-flow-mask-height, 0.25em)",
  F = `calc(${y} / 2)`,
  C = "var(--number-flow-mask-width, 0.5em)",
  _ = `calc(${C} / var(--scale-x))`,
  b = "#000 0, transparent 71%",
  L = K`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${st} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${$}) / var(--width));transform:translateX(var(${R})) scaleX(var(--scale-x));margin:0 calc(-1 * ${C});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${_},#000 calc(100% - ${_}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${y},#000 calc(100% - ${y}),transparent 100% ),radial-gradient(at bottom right,${b}),radial-gradient(at bottom left,${b}),radial-gradient(at top left,${b}),radial-gradient(at top right,${b});-webkit-mask-size:100% calc(100% - ${y} * 2),calc(100% - ${_} * 2) 100%,${_} ${y},${_} ${y},${_} ${y},${_} ${y};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${F} ${C};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${R})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${U})}.digit__num,.number .section::after{padding:${F} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${E}))}`,
  nt = HTMLElement,
  at = et && tt && it;
let x;
class O extends nt {
  constructor() {
    (super(), (this.created = !1), (this.batched = !1));
    const { animated: t, ...e } = this.constructor.defaultProps;
    ((this._animated = this.computedAnimated = t), Object.assign(this, e));
  }
  get animated() {
    return this._animated;
  }
  set animated(t) {
    var e;
    this.animated !== t &&
      ((this._animated = t),
      (e = this.shadowRoot) == null ||
        e.getAnimations().forEach((i) => i.finish()));
  }
  set data(t) {
    var e;
    if (t == null) return;
    const { pre: i, integer: s, fraction: a, post: n, value: o } = t;
    if (this.created) {
      const l = this._data;
      ((this._data = t),
        (this.computedTrend =
          typeof this.trend == "function"
            ? this.trend(l.value, o)
            : this.trend),
        (this.computedAnimated =
          at &&
          this._animated &&
          (!this.respectMotionPreference || !(P != null && P.matches)) &&
          Y(this)),
        (e = this.plugins) == null ||
          e.forEach((d) => {
            var u;
            return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this);
          }),
        this.batched || this.willUpdate(),
        this._pre.update(i),
        this._num.update({ integer: s, fraction: a }),
        this._post.update(n),
        this.batched || this.didUpdate());
    } else {
      ((this._data = t), this.attachShadow({ mode: "open" }));
      try {
        (this._internals ?? (this._internals = this.attachInternals()),
          (this._internals.role = "img"));
      } catch {}
      if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
        (x || ((x = new CSSStyleSheet()), x.replaceSync(L)),
          (this.shadowRoot.adoptedStyleSheets = [x]));
      else {
        const l = document.createElement("style");
        ((l.textContent = L), this.shadowRoot.appendChild(l));
      }
      ((this._pre = new V(this, i, { justify: "right", part: "left" })),
        this.shadowRoot.appendChild(this._pre.el),
        (this._num = new rt(this, s, a)),
        this.shadowRoot.appendChild(this._num.el),
        (this._post = new V(this, n, { justify: "left", part: "right" })),
        this.shadowRoot.appendChild(this._post.el),
        (this.created = !0));
    }
    try {
      this._internals.ariaLabel = t.valueAsString;
    } catch {}
  }
  willUpdate() {
    (this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate());
  }
  didUpdate() {
    if (!this.computedAnimated) return;
    (this._abortAnimationsFinish
      ? this._abortAnimationsFinish.abort()
      : this.dispatchEvent(new Event("animationsstart")),
      this._pre.didUpdate(),
      this._num.didUpdate(),
      this._post.didUpdate());
    const t = new AbortController();
    (Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(
      () => {
        t.signal.aborted ||
          (this.dispatchEvent(new Event("animationsfinish")),
          (this._abortAnimationsFinish = void 0));
      },
    ),
      (this._abortAnimationsFinish = t));
  }
}
O.defaultProps = {
  transformTiming: {
    duration: 900,
    easing:
      "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)",
  },
  spinTiming: void 0,
  opacityTiming: { duration: 450, easing: "ease-out" },
  animated: !0,
  trend: (r, t) => Math.sign(t - r),
  respectMotionPreference: !0,
  plugins: void 0,
  digits: void 0,
};
class rt {
  constructor(t, e, i, { className: s, ...a } = {}) {
    ((this.flow = t),
      (this._integer = new D(t, e, { justify: "right", part: "integer" })),
      (this._fraction = new D(t, i, { justify: "left", part: "fraction" })),
      (this._inner = w("span", { className: "number__inner" }, [
        this._integer.el,
        this._fraction.el,
      ])),
      (this.el = w(
        "span",
        { ...a, part: "number", className: `number ${s ?? ""}` },
        [this._inner],
      )));
  }
  willUpdate() {
    ((this._prevWidth = this.el.offsetWidth),
      (this._prevLeft = this.el.getBoundingClientRect().left),
      this._integer.willUpdate(),
      this._fraction.willUpdate());
  }
  update({ integer: t, fraction: e }) {
    (this._integer.update(t), this._fraction.update(e));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    (this._integer.didUpdate(), this._fraction.didUpdate());
    const e = this._prevLeft - t.left,
      i = this.el.offsetWidth,
      s = this._prevWidth - i;
    (this.el.style.setProperty("--width", String(i)),
      this.el.animate(
        { [R]: [`${e}px`, "0px"], [$]: [s, 0] },
        { ...this.flow.transformTiming, composite: "accumulate" },
      ));
  }
}
class W {
  constructor(t, e, { justify: i, className: s, ...a }, n) {
    ((this.flow = t),
      (this.children = new Map()),
      (this.onCharRemove = (l) => () => {
        this.children.delete(l);
      }),
      (this.justify = i));
    const o = e.map((l) => this.addChar(l).el);
    this.el = w(
      "span",
      { ...a, className: `section section--justify-${i} ${s ?? ""}` },
      n ? n(o) : o,
    );
  }
  addChar(t, { startDigitsAtZero: e = !1, ...i } = {}) {
    const s =
      t.type === "integer" || t.type === "fraction"
        ? new H(this, t.type, e ? 0 : t.value, t.pos, {
            ...i,
            onRemove: this.onCharRemove(t.key),
          })
        : new ot(this, t.type, t.value, {
            ...i,
            onRemove: this.onCharRemove(t.key),
          });
    return (this.children.set(t.key, s), s);
  }
  unpop(t) {
    (t.el.removeAttribute("inert"),
      (t.el.style.top = ""),
      (t.el.style[this.justify] = ""));
  }
  pop(t) {
    (t.forEach((e) => {
      ((e.el.style.top = `${e.el.offsetTop}px`),
        (e.el.style[this.justify] = `${G(e.el, this.justify)}px`));
    }),
      t.forEach((e) => {
        (e.el.setAttribute("inert", ""), (e.present = !1));
      }));
  }
  addNewAndUpdateExisting(t) {
    const e = new Map(),
      i = new Map(),
      s = this.justify === "left",
      a = s ? "prepend" : "append";
    if (
      (q(
        t,
        (n) => {
          let o;
          (this.children.has(n.key)
            ? ((o = this.children.get(n.key)),
              i.set(n, o),
              this.unpop(o),
              (o.present = !0))
            : ((o = this.addChar(n, { startDigitsAtZero: !0, animateIn: !0 })),
              e.set(n, o)),
            this.el[a](o.el));
        },
        { reverse: s },
      ),
      this.flow.computedAnimated)
    ) {
      const n = this.el.getBoundingClientRect();
      e.forEach((o) => {
        o.willUpdate(n);
      });
    }
    (e.forEach((n, o) => {
      n.update(o.value);
    }),
      i.forEach((n, o) => {
        n.update(o.value);
      }));
  }
  willUpdate() {
    const t = this.el.getBoundingClientRect();
    ((this._prevOffset = t[this.justify]),
      this.children.forEach((e) => e.willUpdate(t)));
  }
  didUpdate() {
    const t = this.el.getBoundingClientRect();
    this.children.forEach((s) => s.didUpdate(t));
    const e = t[this.justify],
      i = this._prevOffset - e;
    i &&
      this.children.size &&
      this.el.animate(
        { transform: [`translateX(${i}px)`, "none"] },
        { ...this.flow.transformTiming, composite: "accumulate" },
      );
  }
}
class D extends W {
  update(t) {
    const e = new Map();
    (this.children.forEach((i, s) => {
      (t.find((a) => a.key === s) || e.set(s, i), this.unpop(i));
    }),
      this.addNewAndUpdateExisting(t),
      e.forEach((i) => {
        i instanceof H && i.update(0);
      }),
      this.pop(e));
  }
}
class V extends W {
  update(t) {
    const e = new Map();
    (this.children.forEach((i, s) => {
      t.find((a) => a.key === s) || e.set(s, i);
    }),
      this.pop(e),
      this.addNewAndUpdateExisting(t));
  }
}
class j {
  constructor(t, e, { onRemove: i, animateIn: s = !1 } = {}) {
    ((this.flow = t),
      (this.el = e),
      (this._present = !0),
      (this._remove = () => {
        var a;
        (this.el.remove(), (a = this._onRemove) == null || a.call(this));
      }),
      this.el.classList.add("animate-presence"),
      this.flow.computedAnimated &&
        s &&
        this.el.animate(
          { [E]: [-0.9999, 0] },
          { ...this.flow.opacityTiming, composite: "accumulate" },
        ),
      (this._onRemove = i));
  }
  get present() {
    return this._present;
  }
  set present(t) {
    if (this._present !== t) {
      if (
        ((this._present = t),
        t
          ? this.el.removeAttribute("inert")
          : this.el.setAttribute("inert", ""),
        !this.flow.computedAnimated)
      ) {
        t || this._remove();
        return;
      }
      (this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"),
        this.el.animate(
          { [E]: t ? [-0.9999, 0] : [0.999, 0] },
          { ...this.flow.opacityTiming, composite: "accumulate" },
        ),
        t
          ? this.flow.removeEventListener("animationsfinish", this._remove)
          : this.flow.addEventListener("animationsfinish", this._remove, {
              once: !0,
            }));
    }
  }
}
class X extends j {
  constructor(t, e, i, s) {
    (super(t.flow, i, s), (this.section = t), (this.value = e), (this.el = i));
  }
}
class H extends X {
  constructor(t, e, i, s, a) {
    var n, o;
    const l =
        (((o = (n = t.flow.digits) == null ? void 0 : n[s]) == null
          ? void 0
          : o.max) ?? 9) + 1,
      d = Array.from({ length: l }).map((f, g) => {
        const v = w("span", { className: "digit__num" }, [
          document.createTextNode(String(g)),
        ]);
        return (
          g !== i && v.setAttribute("inert", ""),
          v.style.setProperty("--n", String(g)),
          v
        );
      }),
      u = w("span", { part: `digit ${e}-digit`, className: "digit" }, d);
    (u.style.setProperty("--current", String(i)),
      u.style.setProperty("--length", String(l)),
      super(t, i, u, a),
      (this.pos = s),
      (this._onAnimationsFinish = () => {
        this.el.classList.remove("is-spinning");
      }),
      (this._numbers = d),
      (this.length = l));
  }
  willUpdate(t) {
    const e = this.el.getBoundingClientRect();
    this._prevValue = this.value;
    const i = e[this.section.justify] - t[this.section.justify],
      s = e.width / 2;
    this._prevCenter = this.section.justify === "left" ? i + s : i - s;
  }
  update(t) {
    (this.el.style.setProperty("--current", String(t)),
      this._numbers.forEach((e, i) =>
        i === t ? e.removeAttribute("inert") : e.setAttribute("inert", ""),
      ),
      (this.value = t));
  }
  didUpdate(t) {
    const e = this.el.getBoundingClientRect(),
      i = e[this.section.justify] - t[this.section.justify],
      s = e.width / 2,
      a = this.section.justify === "left" ? i + s : i - s,
      n = this._prevCenter - a;
    n &&
      this.el.animate(
        { transform: [`translateX(${n}px)`, "none"] },
        { ...this.flow.transformTiming, composite: "accumulate" },
      );
    const o = this.getDelta();
    o &&
      (this.el.classList.add("is-spinning"),
      this.el.animate(
        { [U]: [-o, 0] },
        {
          ...(this.flow.spinTiming ?? this.flow.transformTiming),
          composite: "accumulate",
        },
      ),
      this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, {
        once: !0,
      }));
  }
  getDelta() {
    var t;
    if (this.flow.plugins)
      for (const s of this.flow.plugins) {
        const a =
          (t = s.getDelta) == null
            ? void 0
            : t.call(s, this.value, this._prevValue, this);
        if (a != null) return a;
      }
    const e = this.value - this._prevValue,
      i = this.flow.computedTrend || Math.sign(e);
    return i < 0 && this.value > this._prevValue
      ? this.value - this.length - this._prevValue
      : i > 0 && this.value < this._prevValue
        ? this.length - this._prevValue + this.value
        : e;
  }
}
class ot extends X {
  constructor(t, e, i, s) {
    const a = w("span", { className: "symbol__value", textContent: i });
    (super(
      t,
      i,
      w("span", { part: `symbol ${e}`, className: "symbol" }, [a]),
      s,
    ),
      (this.type = e),
      (this._children = new Map()),
      (this._onChildRemove = (n) => () => {
        this._children.delete(n);
      }),
      this._children.set(
        i,
        new j(this.flow, a, { onRemove: this._onChildRemove(i) }),
      ));
  }
  willUpdate(t) {
    if (this.type === "decimal") return;
    const e = this.el.getBoundingClientRect();
    this._prevOffset = e[this.section.justify] - t[this.section.justify];
  }
  update(t) {
    if (this.value !== t) {
      const e = this._children.get(this.value);
      e && (e.present = !1);
      const i = this._children.get(t);
      if (i) i.present = !0;
      else {
        const s = w("span", { className: "symbol__value", textContent: t });
        (this.el.appendChild(s),
          this._children.set(
            t,
            new j(this.flow, s, {
              animateIn: !0,
              onRemove: this._onChildRemove(t),
            }),
          ));
      }
    }
    this.value = t;
  }
  didUpdate(t) {
    if (this.type === "decimal") return;
    const e =
        this.el.getBoundingClientRect()[this.section.justify] -
        t[this.section.justify],
      i = this._prevOffset - e;
    i &&
      this.el.animate(
        { transform: [`translateX(${i}px)`, "none"] },
        { ...this.flow.transformTiming, composite: "accumulate" },
      );
  }
}
const lt = parseInt(c.version.match(/^(\d+)\./)?.[1]),
  N = lt >= 19,
  ht = ["data", "digits"];
class M extends O {
  attributeChangedCallback(t, e, i) {
    this[t] = JSON.parse(i);
  }
}
M.observedAttributes = N ? [] : ht;
Z("number-flow-react", M);
const ct = {},
  B = N ? (r) => r : JSON.stringify;
function I(r) {
  const {
    transformTiming: t,
    spinTiming: e,
    opacityTiming: i,
    animated: s,
    respectMotionPreference: a,
    trend: n,
    plugins: o,
    ...l
  } = r;
  return [
    {
      transformTiming: t,
      spinTiming: e,
      opacityTiming: i,
      animated: s,
      respectMotionPreference: a,
      trend: n,
      plugins: o,
    },
    l,
  ];
}
class dt extends c.Component {
  updateProperties(t) {
    if (!this.el) return;
    this.el.batched = !this.props.isolate;
    const [e] = I(this.props);
    (Object.entries(e).forEach(([i, s]) => {
      this.el[i] = s ?? M.defaultProps[i];
    }),
      t?.onAnimationsStart &&
        this.el.removeEventListener("animationsstart", t.onAnimationsStart),
      this.props.onAnimationsStart &&
        this.el.addEventListener(
          "animationsstart",
          this.props.onAnimationsStart,
        ),
      t?.onAnimationsFinish &&
        this.el.removeEventListener("animationsfinish", t.onAnimationsFinish),
      this.props.onAnimationsFinish &&
        this.el.addEventListener(
          "animationsfinish",
          this.props.onAnimationsFinish,
        ));
  }
  componentDidMount() {
    (this.updateProperties(),
      N &&
        this.el &&
        ((this.el.digits = this.props.digits),
        (this.el.data = this.props.data)));
  }
  getSnapshotBeforeUpdate(t) {
    if ((this.updateProperties(t), t.data !== this.props.data)) {
      if (this.props.group)
        return (
          this.props.group.willUpdate(),
          () => this.props.group?.didUpdate()
        );
      if (!this.props.isolate)
        return (this.el?.willUpdate(), () => this.el?.didUpdate());
    }
    return null;
  }
  componentDidUpdate(t, e, i) {
    i?.();
  }
  handleRef(t) {
    (this.props.innerRef && (this.props.innerRef.current = t), (this.el = t));
  }
  render() {
    const [
      t,
      {
        innerRef: e,
        className: i,
        data: s,
        willChange: a,
        isolate: n,
        group: o,
        digits: l,
        onAnimationsStart: d,
        onAnimationsFinish: u,
        ...f
      },
    ] = I(this.props);
    return c.createElement("number-flow-react", {
      ref: this.handleRef,
      "data-will-change": a ? "" : void 0,
      class: i,
      ...f,
      dangerouslySetInnerHTML: { __html: "" },
      suppressHydrationWarning: !0,
      digits: B(l),
      data: B(s),
    });
  }
  constructor(t) {
    (super(t), (this.handleRef = this.handleRef.bind(this)));
  }
}
const pt = c.forwardRef(function (
    { value: t, locales: e, format: i, prefix: s, suffix: a, ...n },
    o,
  ) {
    c.useImperativeHandle(o, () => l.current, []);
    const l = c.useRef(),
      d = c.useContext(z);
    d?.useRegister(l);
    const u = c.useMemo(() => (e ? JSON.stringify(e) : ""), [e]),
      f = c.useMemo(() => (i ? JSON.stringify(i) : ""), [i]),
      g = c.useMemo(() => {
        const v = (ct[`${u}:${f}`] ??= new Intl.NumberFormat(e, i));
        return Q(t, v, s, a);
      }, [t, u, f, s, a]);
    return c.createElement(dt, { ...n, group: d, data: g, innerRef: l });
  }),
  z = c.createContext(void 0);
function ut({ children: r }) {
  const t = c.useRef(new Set()),
    e = c.useRef(!1),
    i = c.useRef(new WeakMap()),
    s = c.useMemo(
      () => ({
        useRegister(a) {
          c.useEffect(
            () => (
              t.current.add(a),
              () => {
                t.current.delete(a);
              }
            ),
            [],
          );
        },
        willUpdate() {
          e.current ||
            ((e.current = !0),
            t.current.forEach((a) => {
              const n = a.current;
              !n || !n.created || (n.willUpdate(), i.current.set(n, !0));
            }));
        },
        didUpdate() {
          (t.current.forEach((a) => {
            const n = a.current;
            !n || !i.current.get(n) || (n.didUpdate(), i.current.delete(n));
          }),
            (e.current = !1));
        },
      }),
      [],
    );
  return c.createElement(z.Provider, { value: s }, r);
}
const gt = () => {
    const r = () => {
        const o = Date.now(),
          l = J.getTime() - o;
        return Math.max(0, Math.floor(l / 1e3));
      },
      [t, e] = c.useState(r);
    c.useEffect(() => {
      if (t <= 0) return;
      const o = setInterval(() => {
        e((l) => {
          const d = l - 1;
          return d < 0 ? 0 : d;
        });
      }, 1e3);
      return () => clearInterval(o);
    }, [t]);
    const i = Math.floor(t / 86400),
      s = Math.floor((t % 86400) / 3600),
      a = Math.floor((t % 3600) / 60),
      n = Math.floor(t % 60);
    return t === 0
      ? m.jsx("div", {
          className: "text-center text-4xl font-bold md:text-6xl",
          children: m.jsx("p", {
            className:
              "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
            children: "Event Started!",
          }),
        })
      : m.jsx(ut, {
          children: m.jsxs("div", {
            className: "flex flex-wrap justify-center gap-4 md:gap-6",
            children: [
              m.jsx(S, { value: i, label: "Days" }),
              m.jsx(S, { value: s, label: "Hours" }),
              m.jsx(S, { value: a, label: "Minutes" }),
              m.jsx(S, { value: n, label: "Seconds" }),
            ],
          }),
        });
  },
  S = ({ value: r, label: t }) =>
    m.jsxs("div", {
      className: "flex flex-col items-center",
      children: [
        m.jsx("div", {
          style: {
            fontVariantNumeric: "tabular-nums",
            "--number-flow-char-height": "0.85em",
          },
          className: "font-mono text-5xl font-bold md:text-7xl",
          children: m.jsx(pt, {
            trend: -1,
            value: r,
            format: { minimumIntegerDigits: 2 },
          }),
        }),
        m.jsx("span", {
          className:
            "mt-2 text-sm font-medium tracking-wide text-gray-600 uppercase md:text-base dark:text-gray-400",
          children: t,
        }),
      ],
    });
export { gt as CountDown };
