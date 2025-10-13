var i = { exports: {} },
  u = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x;
function v() {
  if (x) return u;
  x = 1;
  var e = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.fragment");
  function o(a, r, t) {
    var s = null;
    if (
      (t !== void 0 && (s = "" + t),
      r.key !== void 0 && (s = "" + r.key),
      "key" in r)
    ) {
      t = {};
      for (var n in r) n !== "key" && (t[n] = r[n]);
    } else t = r;
    return (
      (r = t.ref),
      { $$typeof: e, type: a, key: s, ref: r !== void 0 ? r : null, props: t }
    );
  }
  return ((u.Fragment = E), (u.jsx = o), (u.jsxs = o), u);
}
var R;
function d() {
  return (R || ((R = 1), (i.exports = v())), i.exports);
}
var p = d(),
  l = ((e) => ((e.MEMBER = "MEMBER"), (e.COACH = "COACH"), e))(l || {});
export { l as P, p as j };
