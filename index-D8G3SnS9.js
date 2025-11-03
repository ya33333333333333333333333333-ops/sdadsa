
var hu = e => {
    throw TypeError(e)
}
;
var si = (e, t, n) => t.has(e) || hu("Cannot " + n);
var N = (e, t, n) => (si(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , q = (e, t, n) => t.has(e) ? hu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , $ = (e, t, n, o) => (si(e, t, "write to private field"),
o ? o.call(e, n) : t.set(e, n),
n)
  , ke = (e, t, n) => (si(e, t, "access private method"),
n);
var pa = (e, t, n, o) => ({
    set _(r) {
        $(e, t, r, n)
    },
    get _() {
        return N(e, t, o)
    }
});
function S0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const o = t[n];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const r in o)
                if (r !== "default" && !(r in e)) {
                    const a = Object.getOwnPropertyDescriptor(o, r);
                    a && Object.defineProperty(e, r, a.get ? a : {
                        enumerable: !0,
                        get: () => o[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        o(r);
    new MutationObserver(r => {
        for (const a of r)
            if (a.type === "childList")
                for (const s of a.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity),
        r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function o(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const a = n(r);
        fetch(r.href, a)
    }
}
)();
function vp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var gp = {
    exports: {}
}
  , Ps = {}
  , yp = {
    exports: {}
}
  , Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta = Symbol.for("react.element")
  , C0 = Symbol.for("react.portal")
  , E0 = Symbol.for("react.fragment")
  , b0 = Symbol.for("react.strict_mode")
  , k0 = Symbol.for("react.profiler")
  , N0 = Symbol.for("react.provider")
  , P0 = Symbol.for("react.context")
  , A0 = Symbol.for("react.forward_ref")
  , T0 = Symbol.for("react.suspense")
  , R0 = Symbol.for("react.memo")
  , D0 = Symbol.for("react.lazy")
  , vu = Symbol.iterator;
function L0(e) {
    return e === null || typeof e != "object" ? null : (e = vu && e[vu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var xp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , wp = Object.assign
  , Sp = {};
function er(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Sp,
    this.updater = n || xp
}
er.prototype.isReactComponent = {};
er.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
er.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Cp() {}
Cp.prototype = er.prototype;
function Yl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Sp,
    this.updater = n || xp
}
var Gl = Yl.prototype = new Cp;
Gl.constructor = Yl;
wp(Gl, er.prototype);
Gl.isPureReactComponent = !0;
var gu = Array.isArray
  , Ep = Object.prototype.hasOwnProperty
  , Xl = {
    current: null
}
  , bp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function kp(e, t, n) {
    var o, r = {}, a = null, s = null;
    if (t != null)
        for (o in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            Ep.call(t, o) && !bp.hasOwnProperty(o) && (r[o] = t[o]);
    var i = arguments.length - 2;
    if (i === 1)
        r.children = n;
    else if (1 < i) {
        for (var l = Array(i), c = 0; c < i; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    if (e && e.defaultProps)
        for (o in i = e.defaultProps,
        i)
            r[o] === void 0 && (r[o] = i[o]);
    return {
        $$typeof: ta,
        type: e,
        key: a,
        ref: s,
        props: r,
        _owner: Xl.current
    }
}
function F0(e, t) {
    return {
        $$typeof: ta,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ql(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ta
}
function _0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var yu = /\/+/g;
function ii(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _0("" + e.key) : t.toString(36)
}
function Ba(e, t, n, o, r) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (a) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ta:
            case C0:
                s = !0
            }
        }
    if (s)
        return s = e,
        r = r(s),
        e = o === "" ? "." + ii(s, 0) : o,
        gu(r) ? (n = "",
        e != null && (n = e.replace(yu, "$&/") + "/"),
        Ba(r, t, n, "", function(c) {
            return c
        })) : r != null && (ql(r) && (r = F0(r, n + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(yu, "$&/") + "/") + e)),
        t.push(r)),
        1;
    if (s = 0,
    o = o === "" ? "." : o + ":",
    gu(e))
        for (var i = 0; i < e.length; i++) {
            a = e[i];
            var l = o + ii(a, i);
            s += Ba(a, t, n, l, r)
        }
    else if (l = L0(e),
    typeof l == "function")
        for (e = l.call(e),
        i = 0; !(a = e.next()).done; )
            a = a.value,
            l = o + ii(a, i++),
            s += Ba(a, t, n, l, r);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function fa(e, t, n) {
    if (e == null)
        return e;
    var o = []
      , r = 0;
    return Ba(e, o, "", "", function(a) {
        return t.call(n, a, r++)
    }),
    o
}
function B0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Be = {
    current: null
}
  , ja = {
    transition: null
}
  , j0 = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: ja,
    ReactCurrentOwner: Xl
};
function Np() {
    throw Error("act(...) is not supported in production builds of React.")
}
Z.Children = {
    map: fa,
    forEach: function(e, t, n) {
        fa(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return fa(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return fa(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ql(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Z.Component = er;
Z.Fragment = E0;
Z.Profiler = k0;
Z.PureComponent = Yl;
Z.StrictMode = b0;
Z.Suspense = T0;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j0;
Z.act = Np;
Z.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var o = wp({}, e.props)
      , r = e.key
      , a = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        s = Xl.current),
        t.key !== void 0 && (r = "" + t.key),
        e.type && e.type.defaultProps)
            var i = e.type.defaultProps;
        for (l in t)
            Ep.call(t, l) && !bp.hasOwnProperty(l) && (o[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        i = Array(l);
        for (var c = 0; c < l; c++)
            i[c] = arguments[c + 2];
        o.children = i
    }
    return {
        $$typeof: ta,
        type: e.type,
        key: r,
        ref: a,
        props: o,
        _owner: s
    }
}
;
Z.createContext = function(e) {
    return e = {
        $$typeof: P0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: N0,
        _context: e
    },
    e.Consumer = e
}
;
Z.createElement = kp;
Z.createFactory = function(e) {
    var t = kp.bind(null, e);
    return t.type = e,
    t
}
;
Z.createRef = function() {
    return {
        current: null
    }
}
;
Z.forwardRef = function(e) {
    return {
        $$typeof: A0,
        render: e
    }
}
;
Z.isValidElement = ql;
Z.lazy = function(e) {
    return {
        $$typeof: D0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: B0
    }
}
;
Z.memo = function(e, t) {
    return {
        $$typeof: R0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Z.startTransition = function(e) {
    var t = ja.transition;
    ja.transition = {};
    try {
        e()
    } finally {
        ja.transition = t
    }
}
;
Z.unstable_act = Np;
Z.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
}
;
Z.useContext = function(e) {
    return Be.current.useContext(e)
}
;
Z.useDebugValue = function() {}
;
Z.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
}
;
Z.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
}
;
Z.useId = function() {
    return Be.current.useId()
}
;
Z.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n)
}
;
Z.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
}
;
Z.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
}
;
Z.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
}
;
Z.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n)
}
;
Z.useRef = function(e) {
    return Be.current.useRef(e)
}
;
Z.useState = function(e) {
    return Be.current.useState(e)
}
;
Z.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n)
}
;
Z.useTransition = function() {
    return Be.current.useTransition()
}
;
Z.version = "18.3.1";
yp.exports = Z;
var w = yp.exports;
const D = vp(w)
  , Pp = S0({
    __proto__: null,
    default: D
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O0 = w
  , M0 = Symbol.for("react.element")
  , I0 = Symbol.for("react.fragment")
  , z0 = Object.prototype.hasOwnProperty
  , H0 = O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , $0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ap(e, t, n) {
    var o, r = {}, a = null, s = null;
    n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (o in t)
        z0.call(t, o) && !$0.hasOwnProperty(o) && (r[o] = t[o]);
    if (e && e.defaultProps)
        for (o in t = e.defaultProps,
        t)
            r[o] === void 0 && (r[o] = t[o]);
    return {
        $$typeof: M0,
        type: e,
        key: a,
        ref: s,
        props: r,
        _owner: H0.current
    }
}
Ps.Fragment = I0;
Ps.jsx = Ap;
Ps.jsxs = Ap;
gp.exports = Ps;
var x = gp.exports
  , Tp = {
    exports: {}
}
  , Xe = {}
  , Rp = {
    exports: {}
}
  , Dp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, A) {
        var B = P.length;
        P.push(A);
        e: for (; 0 < B; ) {
            var U = B - 1 >>> 1
              , M = P[U];
            if (0 < r(M, A))
                P[U] = A,
                P[B] = M,
                B = U;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function o(P) {
        if (P.length === 0)
            return null;
        var A = P[0]
          , B = P.pop();
        if (B !== A) {
            P[0] = B;
            e: for (var U = 0, M = P.length, K = M >>> 1; U < K; ) {
                var G = 2 * (U + 1) - 1
                  , me = P[G]
                  , be = G + 1
                  , J = P[be];
                if (0 > r(me, B))
                    be < M && 0 > r(J, me) ? (P[U] = J,
                    P[be] = B,
                    U = be) : (P[U] = me,
                    P[G] = B,
                    U = G);
                else if (be < M && 0 > r(J, B))
                    P[U] = J,
                    P[be] = B,
                    U = be;
                else
                    break e
            }
        }
        return A
    }
    function r(P, A) {
        var B = P.sortIndex - A.sortIndex;
        return B !== 0 ? B : P.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var s = Date
          , i = s.now();
        e.unstable_now = function() {
            return s.now() - i
        }
    }
    var l = []
      , c = []
      , u = 1
      , p = null
      , m = 3
      , d = !1
      , S = !1
      , g = !1
      , y = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var A = n(c); A !== null; ) {
            if (A.callback === null)
                o(c);
            else if (A.startTime <= P)
                o(c),
                A.sortIndex = A.expirationTime,
                t(l, A);
            else
                break;
            A = n(c)
        }
    }
    function C(P) {
        if (g = !1,
        v(P),
        !S)
            if (n(l) !== null)
                S = !0,
                z(E);
            else {
                var A = n(c);
                A !== null && Q(C, A.startTime - P)
            }
    }
    function E(P, A) {
        S = !1,
        g && (g = !1,
        h(T),
        T = -1),
        d = !0;
        var B = m;
        try {
            for (v(A),
            p = n(l); p !== null && (!(p.expirationTime > A) || P && !I()); ) {
                var U = p.callback;
                if (typeof U == "function") {
                    p.callback = null,
                    m = p.priorityLevel;
                    var M = U(p.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof M == "function" ? p.callback = M : p === n(l) && o(l),
                    v(A)
                } else
                    o(l);
                p = n(l)
            }
            if (p !== null)
                var K = !0;
            else {
                var G = n(c);
                G !== null && Q(C, G.startTime - A),
                K = !1
            }
            return K
        } finally {
            p = null,
            m = B,
            d = !1
        }
    }
    var b = !1
      , k = null
      , T = -1
      , F = 5
      , L = -1;
    function I() {
        return !(e.unstable_now() - L < F)
    }
    function O() {
        if (k !== null) {
            var P = e.unstable_now();
            L = P;
            var A = !0;
            try {
                A = k(!0, P)
            } finally {
                A ? W() : (b = !1,
                k = null)
            }
        } else
            b = !1
    }
    var W;
    if (typeof f == "function")
        W = function() {
            f(O)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel
          , Y = _.port2;
        _.port1.onmessage = O,
        W = function() {
            Y.postMessage(null)
        }
    } else
        W = function() {
            y(O, 0)
        }
        ;
    function z(P) {
        k = P,
        b || (b = !0,
        W())
    }
    function Q(P, A) {
        T = y(function() {
            P(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || d || (S = !0,
        z(E))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = m
        }
        var B = m;
        m = A;
        try {
            return P()
        } finally {
            m = B
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, A) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var B = m;
        m = P;
        try {
            return A()
        } finally {
            m = B
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, A, B) {
        var U = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay,
        B = typeof B == "number" && 0 < B ? U + B : U) : B = U,
        P) {
        case 1:
            var M = -1;
            break;
        case 2:
            M = 250;
            break;
        case 5:
            M = 1073741823;
            break;
        case 4:
            M = 1e4;
            break;
        default:
            M = 5e3
        }
        return M = B + M,
        P = {
            id: u++,
            callback: A,
            priorityLevel: P,
            startTime: B,
            expirationTime: M,
            sortIndex: -1
        },
        B > U ? (P.sortIndex = B,
        t(c, P),
        n(l) === null && P === n(c) && (g ? (h(T),
        T = -1) : g = !0,
        Q(C, B - U))) : (P.sortIndex = M,
        t(l, P),
        S || d || (S = !0,
        z(E))),
        P
    }
    ,
    e.unstable_shouldYield = I,
    e.unstable_wrapCallback = function(P) {
        var A = m;
        return function() {
            var B = m;
            m = A;
            try {
                return P.apply(this, arguments)
            } finally {
                m = B
            }
        }
    }
}
)(Dp);
Rp.exports = Dp;
var Q0 = Rp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U0 = w
  , Ge = Q0;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lp = new Set
  , Lr = {};
function ao(e, t) {
    Vo(e, t),
    Vo(e + "Capture", t)
}
function Vo(e, t) {
    for (Lr[e] = t,
    e = 0; e < t.length; e++)
        Lp.add(t[e])
}
var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , zi = Object.prototype.hasOwnProperty
  , V0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , xu = {}
  , wu = {};
function W0(e) {
    return zi.call(wu, e) ? !0 : zi.call(xu, e) ? !1 : V0.test(e) ? wu[e] = !0 : (xu[e] = !0,
    !1)
}
function K0(e, t, n, o) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Z0(e, t, n, o) {
    if (t === null || typeof t > "u" || K0(e, t, n, o))
        return !0;
    if (o)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function je(e, t, n, o, r, a, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = o,
    this.attributeNamespace = r,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = s
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ee[e] = new je(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ee[t] = new je(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ee[e] = new je(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ee[e] = new je(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ee[e] = new je(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ee[e] = new je(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ee[e] = new je(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ee[e] = new je(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ee[e] = new je(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Jl = /[\-:]([a-z])/g;
function ec(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Jl, ec);
    Ee[t] = new je(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Jl, ec);
    Ee[t] = new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Jl, ec);
    Ee[t] = new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ee[e] = new je(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ee.xlinkHref = new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ee[e] = new je(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function tc(e, t, n, o) {
    var r = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (r !== null ? r.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Z0(t, n, r, o) && (n = null),
    o || r === null ? W0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (t = r.attributeName,
    o = r.attributeNamespace,
    n === null ? e.removeAttribute(t) : (r = r.type,
    n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
    o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
}
var Gt = U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ma = Symbol.for("react.element")
  , vo = Symbol.for("react.portal")
  , go = Symbol.for("react.fragment")
  , nc = Symbol.for("react.strict_mode")
  , Hi = Symbol.for("react.profiler")
  , Fp = Symbol.for("react.provider")
  , _p = Symbol.for("react.context")
  , oc = Symbol.for("react.forward_ref")
  , $i = Symbol.for("react.suspense")
  , Qi = Symbol.for("react.suspense_list")
  , rc = Symbol.for("react.memo")
  , ln = Symbol.for("react.lazy")
  , Bp = Symbol.for("react.offscreen")
  , Su = Symbol.iterator;
function lr(e) {
    return e === null || typeof e != "object" ? null : (e = Su && e[Su] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ue = Object.assign, li;
function yr(e) {
    if (li === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            li = t && t[1] || ""
        }
    return `
` + li + e
}
var ci = !1;
function ui(e, t) {
    if (!e || ci)
        return "";
    ci = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var o = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    o = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                o = c
            }
            e()
        }
    } catch (c) {
        if (c && o && typeof c.stack == "string") {
            for (var r = c.stack.split(`
`), a = o.stack.split(`
`), s = r.length - 1, i = a.length - 1; 1 <= s && 0 <= i && r[s] !== a[i]; )
                i--;
            for (; 1 <= s && 0 <= i; s--,
            i--)
                if (r[s] !== a[i]) {
                    if (s !== 1 || i !== 1)
                        do
                            if (s--,
                            i--,
                            0 > i || r[s] !== a[i]) {
                                var l = `
` + r[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= i);
                    break
                }
        }
    } finally {
        ci = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? yr(e) : ""
}
function Y0(e) {
    switch (e.tag) {
    case 5:
        return yr(e.type);
    case 16:
        return yr("Lazy");
    case 13:
        return yr("Suspense");
    case 19:
        return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ui(e.type, !1),
        e;
    case 11:
        return e = ui(e.type.render, !1),
        e;
    case 1:
        return e = ui(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ui(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case go:
        return "Fragment";
    case vo:
        return "Portal";
    case Hi:
        return "Profiler";
    case nc:
        return "StrictMode";
    case $i:
        return "Suspense";
    case Qi:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case _p:
            return (e.displayName || "Context") + ".Consumer";
        case Fp:
            return (e._context.displayName || "Context") + ".Provider";
        case oc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case rc:
            return t = e.displayName || null,
            t !== null ? t : Ui(e.type) || "Memo";
        case ln:
            t = e._payload,
            e = e._init;
            try {
                return Ui(e(t))
            } catch {}
        }
    return null
}
function G0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ui(t);
    case 8:
        return t === nc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function An(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function jp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function X0(e) {
    var t = jp(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get
          , a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(s) {
                o = "" + s,
                a.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return o
            },
            setValue: function(s) {
                o = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ha(e) {
    e._valueTracker || (e._valueTracker = X0(e))
}
function Op(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , o = "";
    return e && (o = jp(e) ? e.checked ? "true" : "false" : e.value),
    e = o,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ga(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Vi(e, t) {
    var n = t.checked;
    return ue({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Cu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , o = t.checked != null ? t.checked : t.defaultChecked;
    n = An(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: o,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Mp(e, t) {
    t = t.checked,
    t != null && tc(e, "checked", t, !1)
}
function Wi(e, t) {
    Mp(e, t);
    var n = An(t.value)
      , o = t.type;
    if (n != null)
        o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ki(e, t.type, An(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Eu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type;
        if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ki(e, t, n) {
    (t !== "number" || Ga(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var xr = Array.isArray;
function Ao(e, t, n, o) {
    if (e = e.options,
    t) {
        t = {};
        for (var r = 0; r < n.length; r++)
            t["$" + n[r]] = !0;
        for (n = 0; n < e.length; n++)
            r = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== r && (e[n].selected = r),
            r && o && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + An(n),
        t = null,
        r = 0; r < e.length; r++) {
            if (e[r].value === n) {
                e[r].selected = !0,
                o && (e[r].defaultSelected = !0);
                return
            }
            t !== null || e[r].disabled || (t = e[r])
        }
        t !== null && (t.selected = !0)
    }
}
function Zi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return ue({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function bu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (xr(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: An(n)
    }
}
function Ip(e, t) {
    var n = An(t.value)
      , o = An(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    o != null && (e.defaultValue = "" + o)
}
function ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function zp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Yi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? zp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var va, Hp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, o, r)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (va = va || document.createElement("div"),
        va.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = va.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Fr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , q0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function(e) {
    q0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Cr[t] = Cr[e]
    })
});
function $p(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cr.hasOwnProperty(e) && Cr[e] ? ("" + t).trim() : t + "px"
}
function Qp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var o = n.indexOf("--") === 0
              , r = $p(n, t[n], o);
            n === "float" && (n = "cssFloat"),
            o ? e.setProperty(n, r) : e[n] = r
        }
}
var J0 = ue({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Gi(e, t) {
    if (t) {
        if (J0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function Xi(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var qi = null;
function ac(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ji = null
  , To = null
  , Ro = null;
function Nu(e) {
    if (e = ra(e)) {
        if (typeof Ji != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = Ls(t),
        Ji(e.stateNode, e.type, t))
    }
}
function Up(e) {
    To ? Ro ? Ro.push(e) : Ro = [e] : To = e
}
function Vp() {
    if (To) {
        var e = To
          , t = Ro;
        if (Ro = To = null,
        Nu(e),
        t)
            for (e = 0; e < t.length; e++)
                Nu(t[e])
    }
}
function Wp(e, t) {
    return e(t)
}
function Kp() {}
var di = !1;
function Zp(e, t, n) {
    if (di)
        return e(t, n);
    di = !0;
    try {
        return Wp(e, t, n)
    } finally {
        di = !1,
        (To !== null || Ro !== null) && (Kp(),
        Vp())
    }
}
function _r(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var o = Ls(n);
    if (o === null)
        return null;
    n = o[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (o = !o.disabled) || (e = e.type,
        o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !o;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var el = !1;
if (Ut)
    try {
        var cr = {};
        Object.defineProperty(cr, "passive", {
            get: function() {
                el = !0
            }
        }),
        window.addEventListener("test", cr, cr),
        window.removeEventListener("test", cr, cr)
    } catch {
        el = !1
    }
function e2(e, t, n, o, r, a, s, i, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var Er = !1
  , Xa = null
  , qa = !1
  , tl = null
  , t2 = {
    onError: function(e) {
        Er = !0,
        Xa = e
    }
};
function n2(e, t, n, o, r, a, s, i, l) {
    Er = !1,
    Xa = null,
    e2.apply(t2, arguments)
}
function o2(e, t, n, o, r, a, s, i, l) {
    if (n2.apply(this, arguments),
    Er) {
        if (Er) {
            var c = Xa;
            Er = !1,
            Xa = null
        } else
            throw Error(R(198));
        qa || (qa = !0,
        tl = c)
    }
}
function so(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Yp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Pu(e) {
    if (so(e) !== e)
        throw Error(R(188))
}
function r2(e) {
    var t = e.alternate;
    if (!t) {
        if (t = so(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, o = t; ; ) {
        var r = n.return;
        if (r === null)
            break;
        var a = r.alternate;
        if (a === null) {
            if (o = r.return,
            o !== null) {
                n = o;
                continue
            }
            break
        }
        if (r.child === a.child) {
            for (a = r.child; a; ) {
                if (a === n)
                    return Pu(r),
                    e;
                if (a === o)
                    return Pu(r),
                    t;
                a = a.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== o.return)
            n = r,
            o = a;
        else {
            for (var s = !1, i = r.child; i; ) {
                if (i === n) {
                    s = !0,
                    n = r,
                    o = a;
                    break
                }
                if (i === o) {
                    s = !0,
                    o = r,
                    n = a;
                    break
                }
                i = i.sibling
            }
            if (!s) {
                for (i = a.child; i; ) {
                    if (i === n) {
                        s = !0,
                        n = a,
                        o = r;
                        break
                    }
                    if (i === o) {
                        s = !0,
                        o = a,
                        n = r;
                        break
                    }
                    i = i.sibling
                }
                if (!s)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== o)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function Gp(e) {
    return e = r2(e),
    e !== null ? Xp(e) : null
}
function Xp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Xp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var qp = Ge.unstable_scheduleCallback
  , Au = Ge.unstable_cancelCallback
  , a2 = Ge.unstable_shouldYield
  , s2 = Ge.unstable_requestPaint
  , fe = Ge.unstable_now
  , i2 = Ge.unstable_getCurrentPriorityLevel
  , sc = Ge.unstable_ImmediatePriority
  , Jp = Ge.unstable_UserBlockingPriority
  , Ja = Ge.unstable_NormalPriority
  , l2 = Ge.unstable_LowPriority
  , ef = Ge.unstable_IdlePriority
  , As = null
  , Dt = null;
function c2(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
            Dt.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var yt = Math.clz32 ? Math.clz32 : p2
  , u2 = Math.log
  , d2 = Math.LN2;
function p2(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (u2(e) / d2 | 0) | 0
}
var ga = 64
  , ya = 4194304;
function wr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function es(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var o = 0
      , r = e.suspendedLanes
      , a = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var i = s & ~r;
        i !== 0 ? o = wr(i) : (a &= s,
        a !== 0 && (o = wr(a)))
    } else
        s = n & ~r,
        s !== 0 ? o = wr(s) : a !== 0 && (o = wr(a));
    if (o === 0)
        return 0;
    if (t !== 0 && t !== o && !(t & r) && (r = o & -o,
    a = t & -t,
    r >= a || r === 16 && (a & 4194240) !== 0))
        return t;
    if (o & 4 && (o |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= o; 0 < t; )
            n = 31 - yt(t),
            r = 1 << n,
            o |= e[n],
            t &= ~r;
    return o
}
function f2(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function m2(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, r = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var s = 31 - yt(a)
          , i = 1 << s
          , l = r[s];
        l === -1 ? (!(i & n) || i & o) && (r[s] = f2(i, t)) : l <= t && (e.expiredLanes |= i),
        a &= ~i
    }
}
function nl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function tf() {
    var e = ga;
    return ga <<= 1,
    !(ga & 4194240) && (ga = 64),
    e
}
function pi(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function na(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - yt(t),
    e[t] = n
}
function h2(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var r = 31 - yt(n)
          , a = 1 << r;
        t[r] = 0,
        o[r] = -1,
        e[r] = -1,
        n &= ~a
    }
}
function ic(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var o = 31 - yt(n)
          , r = 1 << o;
        r & t | e[o] & t && (e[o] |= t),
        n &= ~r
    }
}
var ee = 0;
function nf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var of, lc, rf, af, sf, ol = !1, xa = [], wn = null, Sn = null, Cn = null, Br = new Map, jr = new Map, un = [], v2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        wn = null;
        break;
    case "dragenter":
    case "dragleave":
        Sn = null;
        break;
    case "mouseover":
    case "mouseout":
        Cn = null;
        break;
    case "pointerover":
    case "pointerout":
        Br.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        jr.delete(t.pointerId)
    }
}
function ur(e, t, n, o, r, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: o,
        nativeEvent: a,
        targetContainers: [r]
    },
    t !== null && (t = ra(t),
    t !== null && lc(t)),
    e) : (e.eventSystemFlags |= o,
    t = e.targetContainers,
    r !== null && t.indexOf(r) === -1 && t.push(r),
    e)
}
function g2(e, t, n, o, r) {
    switch (t) {
    case "focusin":
        return wn = ur(wn, e, t, n, o, r),
        !0;
    case "dragenter":
        return Sn = ur(Sn, e, t, n, o, r),
        !0;
    case "mouseover":
        return Cn = ur(Cn, e, t, n, o, r),
        !0;
    case "pointerover":
        var a = r.pointerId;
        return Br.set(a, ur(Br.get(a) || null, e, t, n, o, r)),
        !0;
    case "gotpointercapture":
        return a = r.pointerId,
        jr.set(a, ur(jr.get(a) || null, e, t, n, o, r)),
        !0
    }
    return !1
}
function lf(e) {
    var t = $n(e.target);
    if (t !== null) {
        var n = so(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Yp(n),
                t !== null) {
                    e.blockedOn = t,
                    sf(e.priority, function() {
                        rf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Oa(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var o = new n.constructor(n.type,n);
            qi = o,
            n.target.dispatchEvent(o),
            qi = null
        } else
            return t = ra(n),
            t !== null && lc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ru(e, t, n) {
    Oa(e) && n.delete(t)
}
function y2() {
    ol = !1,
    wn !== null && Oa(wn) && (wn = null),
    Sn !== null && Oa(Sn) && (Sn = null),
    Cn !== null && Oa(Cn) && (Cn = null),
    Br.forEach(Ru),
    jr.forEach(Ru)
}
function dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ol || (ol = !0,
    Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, y2)))
}
function Or(e) {
    function t(r) {
        return dr(r, e)
    }
    if (0 < xa.length) {
        dr(xa[0], e);
        for (var n = 1; n < xa.length; n++) {
            var o = xa[n];
            o.blockedOn === e && (o.blockedOn = null)
        }
    }
    for (wn !== null && dr(wn, e),
    Sn !== null && dr(Sn, e),
    Cn !== null && dr(Cn, e),
    Br.forEach(t),
    jr.forEach(t),
    n = 0; n < un.length; n++)
        o = un[n],
        o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < un.length && (n = un[0],
    n.blockedOn === null); )
        lf(n),
        n.blockedOn === null && un.shift()
}
var Do = Gt.ReactCurrentBatchConfig
  , ts = !0;
function x2(e, t, n, o) {
    var r = ee
      , a = Do.transition;
    Do.transition = null;
    try {
        ee = 1,
        cc(e, t, n, o)
    } finally {
        ee = r,
        Do.transition = a
    }
}
function w2(e, t, n, o) {
    var r = ee
      , a = Do.transition;
    Do.transition = null;
    try {
        ee = 4,
        cc(e, t, n, o)
    } finally {
        ee = r,
        Do.transition = a
    }
}
function cc(e, t, n, o) {
    if (ts) {
        var r = rl(e, t, n, o);
        if (r === null)
            Ci(e, t, o, ns, n),
            Tu(e, o);
        else if (g2(r, e, t, n, o))
            o.stopPropagation();
        else if (Tu(e, o),
        t & 4 && -1 < v2.indexOf(e)) {
            for (; r !== null; ) {
                var a = ra(r);
                if (a !== null && of(a),
                a = rl(e, t, n, o),
                a === null && Ci(e, t, o, ns, n),
                a === r)
                    break;
                r = a
            }
            r !== null && o.stopPropagation()
        } else
            Ci(e, t, o, null, n)
    }
}
var ns = null;
function rl(e, t, n, o) {
    if (ns = null,
    e = ac(o),
    e = $n(e),
    e !== null)
        if (t = so(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Yp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ns = e,
    null
}
function cf(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (i2()) {
        case sc:
            return 1;
        case Jp:
            return 4;
        case Ja:
        case l2:
            return 16;
        case ef:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var gn = null
  , uc = null
  , Ma = null;
function uf() {
    if (Ma)
        return Ma;
    var e, t = uc, n = t.length, o, r = "value"in gn ? gn.value : gn.textContent, a = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++)
        ;
    var s = n - e;
    for (o = 1; o <= s && t[n - o] === r[a - o]; o++)
        ;
    return Ma = r.slice(e, 1 < o ? 1 - o : void 0)
}
function Ia(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function wa() {
    return !0
}
function Du() {
    return !1
}
function qe(e) {
    function t(n, o, r, a, s) {
        this._reactName = n,
        this._targetInst = r,
        this.type = o,
        this.nativeEvent = a,
        this.target = s,
        this.currentTarget = null;
        for (var i in e)
            e.hasOwnProperty(i) && (n = e[i],
            this[i] = n ? n(a) : a[i]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? wa : Du,
        this.isPropagationStopped = Du,
        this
    }
    return ue(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = wa)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = wa)
        },
        persist: function() {},
        isPersistent: wa
    }),
    t
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, dc = qe(tr), oa = ue({}, tr, {
    view: 0,
    detail: 0
}), S2 = qe(oa), fi, mi, pr, Ts = ue({}, oa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (fi = e.screenX - pr.screenX,
        mi = e.screenY - pr.screenY) : mi = fi = 0,
        pr = e),
        fi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : mi
    }
}), Lu = qe(Ts), C2 = ue({}, Ts, {
    dataTransfer: 0
}), E2 = qe(C2), b2 = ue({}, oa, {
    relatedTarget: 0
}), hi = qe(b2), k2 = ue({}, tr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), N2 = qe(k2), P2 = ue({}, tr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), A2 = qe(P2), T2 = ue({}, tr, {
    data: 0
}), Fu = qe(T2), R2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, D2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, L2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function F2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = L2[e]) ? !!t[e] : !1
}
function pc() {
    return F2
}
var _2 = ue({}, oa, {
    key: function(e) {
        if (e.key) {
            var t = R2[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ia(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? D2[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pc,
    charCode: function(e) {
        return e.type === "keypress" ? Ia(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ia(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , B2 = qe(_2)
  , j2 = ue({}, Ts, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , _u = qe(j2)
  , O2 = ue({}, oa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pc
})
  , M2 = qe(O2)
  , I2 = ue({}, tr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , z2 = qe(I2)
  , H2 = ue({}, Ts, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , $2 = qe(H2)
  , Q2 = [9, 13, 27, 32]
  , fc = Ut && "CompositionEvent"in window
  , br = null;
Ut && "documentMode"in document && (br = document.documentMode);
var U2 = Ut && "TextEvent"in window && !br
  , df = Ut && (!fc || br && 8 < br && 11 >= br)
  , Bu = " "
  , ju = !1;
function pf(e, t) {
    switch (e) {
    case "keyup":
        return Q2.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ff(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var yo = !1;
function V2(e, t) {
    switch (e) {
    case "compositionend":
        return ff(t);
    case "keypress":
        return t.which !== 32 ? null : (ju = !0,
        Bu);
    case "textInput":
        return e = t.data,
        e === Bu && ju ? null : e;
    default:
        return null
    }
}
function W2(e, t) {
    if (yo)
        return e === "compositionend" || !fc && pf(e, t) ? (e = uf(),
        Ma = uc = gn = null,
        yo = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return df && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var K2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!K2[e.type] : t === "textarea"
}
function mf(e, t, n, o) {
    Up(o),
    t = os(t, "onChange"),
    0 < t.length && (n = new dc("onChange","change",null,n,o),
    e.push({
        event: n,
        listeners: t
    }))
}
var kr = null
  , Mr = null;
function Z2(e) {
    kf(e, 0)
}
function Rs(e) {
    var t = So(e);
    if (Op(t))
        return e
}
function Y2(e, t) {
    if (e === "change")
        return t
}
var hf = !1;
if (Ut) {
    var vi;
    if (Ut) {
        var gi = "oninput"in document;
        if (!gi) {
            var Mu = document.createElement("div");
            Mu.setAttribute("oninput", "return;"),
            gi = typeof Mu.oninput == "function"
        }
        vi = gi
    } else
        vi = !1;
    hf = vi && (!document.documentMode || 9 < document.documentMode)
}
function Iu() {
    kr && (kr.detachEvent("onpropertychange", vf),
    Mr = kr = null)
}
function vf(e) {
    if (e.propertyName === "value" && Rs(Mr)) {
        var t = [];
        mf(t, Mr, e, ac(e)),
        Zp(Z2, t)
    }
}
function G2(e, t, n) {
    e === "focusin" ? (Iu(),
    kr = t,
    Mr = n,
    kr.attachEvent("onpropertychange", vf)) : e === "focusout" && Iu()
}
function X2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Rs(Mr)
}
function q2(e, t) {
    if (e === "click")
        return Rs(t)
}
function J2(e, t) {
    if (e === "input" || e === "change")
        return Rs(t)
}
function ev(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var wt = typeof Object.is == "function" ? Object.is : ev;
function Ir(e, t) {
    if (wt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , o = Object.keys(t);
    if (n.length !== o.length)
        return !1;
    for (o = 0; o < n.length; o++) {
        var r = n[o];
        if (!zi.call(t, r) || !wt(e[r], t[r]))
            return !1
    }
    return !0
}
function zu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Hu(e, t) {
    var n = zu(e);
    e = 0;
    for (var o; n; ) {
        if (n.nodeType === 3) {
            if (o = e + n.textContent.length,
            e <= t && o >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = o
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = zu(n)
    }
}
function gf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function yf() {
    for (var e = window, t = Ga(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ga(e.document)
    }
    return t
}
function mc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function tv(e) {
    var t = yf()
      , n = e.focusedElem
      , o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && gf(n.ownerDocument.documentElement, n)) {
        if (o !== null && mc(n)) {
            if (t = o.start,
            e = o.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var r = n.textContent.length
                  , a = Math.min(o.start, r);
                o = o.end === void 0 ? a : Math.min(o.end, r),
                !e.extend && a > o && (r = o,
                o = a,
                a = r),
                r = Hu(n, a);
                var s = Hu(n, o);
                r && s && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(r.node, r.offset),
                e.removeAllRanges(),
                a > o ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var nv = Ut && "documentMode"in document && 11 >= document.documentMode
  , xo = null
  , al = null
  , Nr = null
  , sl = !1;
function $u(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sl || xo == null || xo !== Ga(o) || (o = xo,
    "selectionStart"in o && mc(o) ? o = {
        start: o.selectionStart,
        end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
    o = {
        anchorNode: o.anchorNode,
        anchorOffset: o.anchorOffset,
        focusNode: o.focusNode,
        focusOffset: o.focusOffset
    }),
    Nr && Ir(Nr, o) || (Nr = o,
    o = os(al, "onSelect"),
    0 < o.length && (t = new dc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: o
    }),
    t.target = xo)))
}
function Sa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var wo = {
    animationend: Sa("Animation", "AnimationEnd"),
    animationiteration: Sa("Animation", "AnimationIteration"),
    animationstart: Sa("Animation", "AnimationStart"),
    transitionend: Sa("Transition", "TransitionEnd")
}
  , yi = {}
  , xf = {};
Ut && (xf = document.createElement("div").style,
"AnimationEvent"in window || (delete wo.animationend.animation,
delete wo.animationiteration.animation,
delete wo.animationstart.animation),
"TransitionEvent"in window || delete wo.transitionend.transition);
function Ds(e) {
    if (yi[e])
        return yi[e];
    if (!wo[e])
        return e;
    var t = wo[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in xf)
            return yi[e] = t[n];
    return e
}
var wf = Ds("animationend")
  , Sf = Ds("animationiteration")
  , Cf = Ds("animationstart")
  , Ef = Ds("transitionend")
  , bf = new Map
  , Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, t) {
    bf.set(e, t),
    ao(t, [e])
}
for (var xi = 0; xi < Qu.length; xi++) {
    var wi = Qu[xi]
      , ov = wi.toLowerCase()
      , rv = wi[0].toUpperCase() + wi.slice(1);
    _n(ov, "on" + rv)
}
_n(wf, "onAnimationEnd");
_n(Sf, "onAnimationIteration");
_n(Cf, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(Ef, "onTransitionEnd");
Vo("onMouseEnter", ["mouseout", "mouseover"]);
Vo("onMouseLeave", ["mouseout", "mouseover"]);
Vo("onPointerEnter", ["pointerout", "pointerover"]);
Vo("onPointerLeave", ["pointerout", "pointerover"]);
ao("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ao("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ao("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ao("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ao("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ao("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , av = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function Uu(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n,
    o2(o, t, void 0, e),
    e.currentTarget = null
}
function kf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var o = e[n]
          , r = o.event;
        o = o.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var s = o.length - 1; 0 <= s; s--) {
                    var i = o[s]
                      , l = i.instance
                      , c = i.currentTarget;
                    if (i = i.listener,
                    l !== a && r.isPropagationStopped())
                        break e;
                    Uu(r, i, c),
                    a = l
                }
            else
                for (s = 0; s < o.length; s++) {
                    if (i = o[s],
                    l = i.instance,
                    c = i.currentTarget,
                    i = i.listener,
                    l !== a && r.isPropagationStopped())
                        break e;
                    Uu(r, i, c),
                    a = l
                }
        }
    }
    if (qa)
        throw e = tl,
        qa = !1,
        tl = null,
        e
}
function re(e, t) {
    var n = t[dl];
    n === void 0 && (n = t[dl] = new Set);
    var o = e + "__bubble";
    n.has(o) || (Nf(t, e, 2, !1),
    n.add(o))
}
function Si(e, t, n) {
    var o = 0;
    t && (o |= 4),
    Nf(n, e, o, t)
}
var Ca = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
    if (!e[Ca]) {
        e[Ca] = !0,
        Lp.forEach(function(n) {
            n !== "selectionchange" && (av.has(n) || Si(n, !1, e),
            Si(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ca] || (t[Ca] = !0,
        Si("selectionchange", !1, t))
    }
}
function Nf(e, t, n, o) {
    switch (cf(t)) {
    case 1:
        var r = x2;
        break;
    case 4:
        r = w2;
        break;
    default:
        r = cc
    }
    n = r.bind(null, t, n, e),
    r = void 0,
    !el || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
    o ? r !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: r
    }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, {
        passive: r
    }) : e.addEventListener(t, n, !1)
}
function Ci(e, t, n, o, r) {
    var a = o;
    if (!(t & 1) && !(t & 2) && o !== null)
        e: for (; ; ) {
            if (o === null)
                return;
            var s = o.tag;
            if (s === 3 || s === 4) {
                var i = o.stateNode.containerInfo;
                if (i === r || i.nodeType === 8 && i.parentNode === r)
                    break;
                if (s === 4)
                    for (s = o.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === r || l.nodeType === 8 && l.parentNode === r))
                            return;
                        s = s.return
                    }
                for (; i !== null; ) {
                    if (s = $n(i),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        o = a = s;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            o = o.return
        }
    Zp(function() {
        var c = a
          , u = ac(n)
          , p = [];
        e: {
            var m = bf.get(e);
            if (m !== void 0) {
                var d = dc
                  , S = e;
                switch (e) {
                case "keypress":
                    if (Ia(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    d = B2;
                    break;
                case "focusin":
                    S = "focus",
                    d = hi;
                    break;
                case "focusout":
                    S = "blur",
                    d = hi;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = hi;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = Lu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = E2;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = M2;
                    break;
                case wf:
                case Sf:
                case Cf:
                    d = N2;
                    break;
                case Ef:
                    d = z2;
                    break;
                case "scroll":
                    d = S2;
                    break;
                case "wheel":
                    d = $2;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = A2;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = _u
                }
                var g = (t & 4) !== 0
                  , y = !g && e === "scroll"
                  , h = g ? m !== null ? m + "Capture" : null : m;
                g = [];
                for (var f = c, v; f !== null; ) {
                    v = f;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C,
                    h !== null && (C = _r(f, h),
                    C != null && g.push(Hr(f, C, v)))),
                    y)
                        break;
                    f = f.return
                }
                0 < g.length && (m = new d(m,S,null,n,u),
                p.push({
                    event: m,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                d = e === "mouseout" || e === "pointerout",
                m && n !== qi && (S = n.relatedTarget || n.fromElement) && ($n(S) || S[Vt]))
                    break e;
                if ((d || m) && (m = u.window === u ? u : (m = u.ownerDocument) ? m.defaultView || m.parentWindow : window,
                d ? (S = n.relatedTarget || n.toElement,
                d = c,
                S = S ? $n(S) : null,
                S !== null && (y = so(S),
                S !== y || S.tag !== 5 && S.tag !== 6) && (S = null)) : (d = null,
                S = c),
                d !== S)) {
                    if (g = Lu,
                    C = "onMouseLeave",
                    h = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = _u,
                    C = "onPointerLeave",
                    h = "onPointerEnter",
                    f = "pointer"),
                    y = d == null ? m : So(d),
                    v = S == null ? m : So(S),
                    m = new g(C,f + "leave",d,n,u),
                    m.target = y,
                    m.relatedTarget = v,
                    C = null,
                    $n(u) === c && (g = new g(h,f + "enter",S,n,u),
                    g.target = v,
                    g.relatedTarget = y,
                    C = g),
                    y = C,
                    d && S)
                        t: {
                            for (g = d,
                            h = S,
                            f = 0,
                            v = g; v; v = ho(v))
                                f++;
                            for (v = 0,
                            C = h; C; C = ho(C))
                                v++;
                            for (; 0 < f - v; )
                                g = ho(g),
                                f--;
                            for (; 0 < v - f; )
                                h = ho(h),
                                v--;
                            for (; f--; ) {
                                if (g === h || h !== null && g === h.alternate)
                                    break t;
                                g = ho(g),
                                h = ho(h)
                            }
                            g = null
                        }
                    else
                        g = null;
                    d !== null && Vu(p, m, d, g, !1),
                    S !== null && y !== null && Vu(p, y, S, g, !0)
                }
            }
            e: {
                if (m = c ? So(c) : window,
                d = m.nodeName && m.nodeName.toLowerCase(),
                d === "select" || d === "input" && m.type === "file")
                    var E = Y2;
                else if (Ou(m))
                    if (hf)
                        E = J2;
                    else {
                        E = X2;
                        var b = G2
                    }
                else
                    (d = m.nodeName) && d.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = q2);
                if (E && (E = E(e, c))) {
                    mf(p, E, n, u);
                    break e
                }
                b && b(e, m, c),
                e === "focusout" && (b = m._wrapperState) && b.controlled && m.type === "number" && Ki(m, "number", m.value)
            }
            switch (b = c ? So(c) : window,
            e) {
            case "focusin":
                (Ou(b) || b.contentEditable === "true") && (xo = b,
                al = c,
                Nr = null);
                break;
            case "focusout":
                Nr = al = xo = null;
                break;
            case "mousedown":
                sl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                sl = !1,
                $u(p, n, u);
                break;
            case "selectionchange":
                if (nv)
                    break;
            case "keydown":
            case "keyup":
                $u(p, n, u)
            }
            var k;
            if (fc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                yo ? pf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (df && n.locale !== "ko" && (yo || T !== "onCompositionStart" ? T === "onCompositionEnd" && yo && (k = uf()) : (gn = u,
            uc = "value"in gn ? gn.value : gn.textContent,
            yo = !0)),
            b = os(c, T),
            0 < b.length && (T = new Fu(T,e,null,n,u),
            p.push({
                event: T,
                listeners: b
            }),
            k ? T.data = k : (k = ff(n),
            k !== null && (T.data = k)))),
            (k = U2 ? V2(e, n) : W2(e, n)) && (c = os(c, "onBeforeInput"),
            0 < c.length && (u = new Fu("onBeforeInput","beforeinput",null,n,u),
            p.push({
                event: u,
                listeners: c
            }),
            u.data = k))
        }
        kf(p, t)
    })
}
function Hr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function os(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
        var r = e
          , a = r.stateNode;
        r.tag === 5 && a !== null && (r = a,
        a = _r(e, n),
        a != null && o.unshift(Hr(e, a, r)),
        a = _r(e, t),
        a != null && o.push(Hr(e, a, r))),
        e = e.return
    }
    return o
}
function ho(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Vu(e, t, n, o, r) {
    for (var a = t._reactName, s = []; n !== null && n !== o; ) {
        var i = n
          , l = i.alternate
          , c = i.stateNode;
        if (l !== null && l === o)
            break;
        i.tag === 5 && c !== null && (i = c,
        r ? (l = _r(n, a),
        l != null && s.unshift(Hr(n, l, i))) : r || (l = _r(n, a),
        l != null && s.push(Hr(n, l, i)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var sv = /\r\n?/g
  , iv = /\u0000|\uFFFD/g;
function Wu(e) {
    return (typeof e == "string" ? e : "" + e).replace(sv, `
`).replace(iv, "")
}
function Ea(e, t, n) {
    if (t = Wu(t),
    Wu(e) !== t && n)
        throw Error(R(425))
}
function rs() {}
var il = null
  , ll = null;
function cl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ul = typeof setTimeout == "function" ? setTimeout : void 0
  , lv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Ku = typeof Promise == "function" ? Promise : void 0
  , cv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ku < "u" ? function(e) {
    return Ku.resolve(null).then(e).catch(uv)
}
: ul;
function uv(e) {
    setTimeout(function() {
        throw e
    })
}
function Ei(e, t) {
    var n = t
      , o = 0;
    do {
        var r = n.nextSibling;
        if (e.removeChild(n),
        r && r.nodeType === 8)
            if (n = r.data,
            n === "/$") {
                if (o === 0) {
                    e.removeChild(r),
                    Or(t);
                    return
                }
                o--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || o++;
        n = r
    } while (n);
    Or(t)
}
function En(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Zu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var nr = Math.random().toString(36).slice(2)
  , Tt = "__reactFiber$" + nr
  , $r = "__reactProps$" + nr
  , Vt = "__reactContainer$" + nr
  , dl = "__reactEvents$" + nr
  , dv = "__reactListeners$" + nr
  , pv = "__reactHandles$" + nr;
function $n(e) {
    var t = e[Tt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Vt] || n[Tt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Zu(e); e !== null; ) {
                    if (n = e[Tt])
                        return n;
                    e = Zu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ra(e) {
    return e = e[Tt] || e[Vt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function So(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function Ls(e) {
    return e[$r] || null
}
var pl = []
  , Co = -1;
function Bn(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > Co || (e.current = pl[Co],
    pl[Co] = null,
    Co--)
}
function ne(e, t) {
    Co++,
    pl[Co] = e.current,
    e.current = t
}
var Tn = {}
  , Re = Bn(Tn)
  , ze = Bn(!1)
  , Jn = Tn;
function Wo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Tn;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
        return o.__reactInternalMemoizedMaskedChildContext;
    var r = {}, a;
    for (a in n)
        r[a] = t[a];
    return o && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function He(e) {
    return e = e.childContextTypes,
    e != null
}
function as() {
    ae(ze),
    ae(Re)
}
function Yu(e, t, n) {
    if (Re.current !== Tn)
        throw Error(R(168));
    ne(Re, t),
    ne(ze, n)
}
function Pf(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes,
    typeof o.getChildContext != "function")
        return n;
    o = o.getChildContext();
    for (var r in o)
        if (!(r in t))
            throw Error(R(108, G0(e) || "Unknown", r));
    return ue({}, n, o)
}
function ss(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn,
    Jn = Re.current,
    ne(Re, e),
    ne(ze, ze.current),
    !0
}
function Gu(e, t, n) {
    var o = e.stateNode;
    if (!o)
        throw Error(R(169));
    n ? (e = Pf(e, t, Jn),
    o.__reactInternalMemoizedMergedChildContext = e,
    ae(ze),
    ae(Re),
    ne(Re, e)) : ae(ze),
    ne(ze, n)
}
var It = null
  , Fs = !1
  , bi = !1;
function Af(e) {
    It === null ? It = [e] : It.push(e)
}
function fv(e) {
    Fs = !0,
    Af(e)
}
function jn() {
    if (!bi && It !== null) {
        bi = !0;
        var e = 0
          , t = ee;
        try {
            var n = It;
            for (ee = 1; e < n.length; e++) {
                var o = n[e];
                do
                    o = o(!0);
                while (o !== null)
            }
            It = null,
            Fs = !1
        } catch (r) {
            throw It !== null && (It = It.slice(e + 1)),
            qp(sc, jn),
            r
        } finally {
            ee = t,
            bi = !1
        }
    }
    return null
}
var Eo = []
  , bo = 0
  , is = null
  , ls = 0
  , tt = []
  , nt = 0
  , eo = null
  , Ht = 1
  , $t = "";
function zn(e, t) {
    Eo[bo++] = ls,
    Eo[bo++] = is,
    is = e,
    ls = t
}
function Tf(e, t, n) {
    tt[nt++] = Ht,
    tt[nt++] = $t,
    tt[nt++] = eo,
    eo = e;
    var o = Ht;
    e = $t;
    var r = 32 - yt(o) - 1;
    o &= ~(1 << r),
    n += 1;
    var a = 32 - yt(t) + r;
    if (30 < a) {
        var s = r - r % 5;
        a = (o & (1 << s) - 1).toString(32),
        o >>= s,
        r -= s,
        Ht = 1 << 32 - yt(t) + r | n << r | o,
        $t = a + e
    } else
        Ht = 1 << a | n << r | o,
        $t = e
}
function hc(e) {
    e.return !== null && (zn(e, 1),
    Tf(e, 1, 0))
}
function vc(e) {
    for (; e === is; )
        is = Eo[--bo],
        Eo[bo] = null,
        ls = Eo[--bo],
        Eo[bo] = null;
    for (; e === eo; )
        eo = tt[--nt],
        tt[nt] = null,
        $t = tt[--nt],
        tt[nt] = null,
        Ht = tt[--nt],
        tt[nt] = null
}
var Ze = null
  , Ke = null
  , ie = !1
  , gt = null;
function Rf(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Xu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ze = e,
        Ke = En(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ze = e,
        Ke = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = eo !== null ? {
            id: Ht,
            overflow: $t
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ze = e,
        Ke = null,
        !0) : !1;
    default:
        return !1
    }
}
function fl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ml(e) {
    if (ie) {
        var t = Ke;
        if (t) {
            var n = t;
            if (!Xu(e, t)) {
                if (fl(e))
                    throw Error(R(418));
                t = En(n.nextSibling);
                var o = Ze;
                t && Xu(e, t) ? Rf(o, n) : (e.flags = e.flags & -4097 | 2,
                ie = !1,
                Ze = e)
            }
        } else {
            if (fl(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            ie = !1,
            Ze = e
        }
    }
}
function qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ze = e
}
function ba(e) {
    if (e !== Ze)
        return !1;
    if (!ie)
        return qu(e),
        ie = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !cl(e.type, e.memoizedProps)),
    t && (t = Ke)) {
        if (fl(e))
            throw Df(),
            Error(R(418));
        for (; t; )
            Rf(e, t),
            t = En(t.nextSibling)
    }
    if (qu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ke = En(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ke = null
        }
    } else
        Ke = Ze ? En(e.stateNode.nextSibling) : null;
    return !0
}
function Df() {
    for (var e = Ke; e; )
        e = En(e.nextSibling)
}
function Ko() {
    Ke = Ze = null,
    ie = !1
}
function gc(e) {
    gt === null ? gt = [e] : gt.push(e)
}
var mv = Gt.ReactCurrentBatchConfig;
function fr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var o = n.stateNode
            }
            if (!o)
                throw Error(R(147, e));
            var r = o
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(s) {
                var i = r.refs;
                s === null ? delete i[a] : i[a] = s
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function ka(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ju(e) {
    var t = e._init;
    return t(e._payload)
}
function Lf(e) {
    function t(h, f) {
        if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [f],
            h.flags |= 16) : v.push(f)
        }
    }
    function n(h, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(h, f),
            f = f.sibling;
        return null
    }
    function o(h, f) {
        for (h = new Map; f !== null; )
            f.key !== null ? h.set(f.key, f) : h.set(f.index, f),
            f = f.sibling;
        return h
    }
    function r(h, f) {
        return h = Pn(h, f),
        h.index = 0,
        h.sibling = null,
        h
    }
    function a(h, f, v) {
        return h.index = v,
        e ? (v = h.alternate,
        v !== null ? (v = v.index,
        v < f ? (h.flags |= 2,
        f) : v) : (h.flags |= 2,
        f)) : (h.flags |= 1048576,
        f)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function i(h, f, v, C) {
        return f === null || f.tag !== 6 ? (f = Di(v, h.mode, C),
        f.return = h,
        f) : (f = r(f, v),
        f.return = h,
        f)
    }
    function l(h, f, v, C) {
        var E = v.type;
        return E === go ? u(h, f, v.props.children, C, v.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === ln && Ju(E) === f.type) ? (C = r(f, v.props),
        C.ref = fr(h, f, v),
        C.return = h,
        C) : (C = Wa(v.type, v.key, v.props, null, h.mode, C),
        C.ref = fr(h, f, v),
        C.return = h,
        C)
    }
    function c(h, f, v, C) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = Li(v, h.mode, C),
        f.return = h,
        f) : (f = r(f, v.children || []),
        f.return = h,
        f)
    }
    function u(h, f, v, C, E) {
        return f === null || f.tag !== 7 ? (f = qn(v, h.mode, C, E),
        f.return = h,
        f) : (f = r(f, v),
        f.return = h,
        f)
    }
    function p(h, f, v) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Di("" + f, h.mode, v),
            f.return = h,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case ma:
                return v = Wa(f.type, f.key, f.props, null, h.mode, v),
                v.ref = fr(h, null, f),
                v.return = h,
                v;
            case vo:
                return f = Li(f, h.mode, v),
                f.return = h,
                f;
            case ln:
                var C = f._init;
                return p(h, C(f._payload), v)
            }
            if (xr(f) || lr(f))
                return f = qn(f, h.mode, v, null),
                f.return = h,
                f;
            ka(h, f)
        }
        return null
    }
    function m(h, f, v, C) {
        var E = f !== null ? f.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return E !== null ? null : i(h, f, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case ma:
                return v.key === E ? l(h, f, v, C) : null;
            case vo:
                return v.key === E ? c(h, f, v, C) : null;
            case ln:
                return E = v._init,
                m(h, f, E(v._payload), C)
            }
            if (xr(v) || lr(v))
                return E !== null ? null : u(h, f, v, C, null);
            ka(h, v)
        }
        return null
    }
    function d(h, f, v, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return h = h.get(v) || null,
            i(f, h, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case ma:
                return h = h.get(C.key === null ? v : C.key) || null,
                l(f, h, C, E);
            case vo:
                return h = h.get(C.key === null ? v : C.key) || null,
                c(f, h, C, E);
            case ln:
                var b = C._init;
                return d(h, f, v, b(C._payload), E)
            }
            if (xr(C) || lr(C))
                return h = h.get(v) || null,
                u(f, h, C, E, null);
            ka(f, C)
        }
        return null
    }
    function S(h, f, v, C) {
        for (var E = null, b = null, k = f, T = f = 0, F = null; k !== null && T < v.length; T++) {
            k.index > T ? (F = k,
            k = null) : F = k.sibling;
            var L = m(h, k, v[T], C);
            if (L === null) {
                k === null && (k = F);
                break
            }
            e && k && L.alternate === null && t(h, k),
            f = a(L, f, T),
            b === null ? E = L : b.sibling = L,
            b = L,
            k = F
        }
        if (T === v.length)
            return n(h, k),
            ie && zn(h, T),
            E;
        if (k === null) {
            for (; T < v.length; T++)
                k = p(h, v[T], C),
                k !== null && (f = a(k, f, T),
                b === null ? E = k : b.sibling = k,
                b = k);
            return ie && zn(h, T),
            E
        }
        for (k = o(h, k); T < v.length; T++)
            F = d(k, h, T, v[T], C),
            F !== null && (e && F.alternate !== null && k.delete(F.key === null ? T : F.key),
            f = a(F, f, T),
            b === null ? E = F : b.sibling = F,
            b = F);
        return e && k.forEach(function(I) {
            return t(h, I)
        }),
        ie && zn(h, T),
        E
    }
    function g(h, f, v, C) {
        var E = lr(v);
        if (typeof E != "function")
            throw Error(R(150));
        if (v = E.call(v),
        v == null)
            throw Error(R(151));
        for (var b = E = null, k = f, T = f = 0, F = null, L = v.next(); k !== null && !L.done; T++,
        L = v.next()) {
            k.index > T ? (F = k,
            k = null) : F = k.sibling;
            var I = m(h, k, L.value, C);
            if (I === null) {
                k === null && (k = F);
                break
            }
            e && k && I.alternate === null && t(h, k),
            f = a(I, f, T),
            b === null ? E = I : b.sibling = I,
            b = I,
            k = F
        }
        if (L.done)
            return n(h, k),
            ie && zn(h, T),
            E;
        if (k === null) {
            for (; !L.done; T++,
            L = v.next())
                L = p(h, L.value, C),
                L !== null && (f = a(L, f, T),
                b === null ? E = L : b.sibling = L,
                b = L);
            return ie && zn(h, T),
            E
        }
        for (k = o(h, k); !L.done; T++,
        L = v.next())
            L = d(k, h, T, L.value, C),
            L !== null && (e && L.alternate !== null && k.delete(L.key === null ? T : L.key),
            f = a(L, f, T),
            b === null ? E = L : b.sibling = L,
            b = L);
        return e && k.forEach(function(O) {
            return t(h, O)
        }),
        ie && zn(h, T),
        E
    }
    function y(h, f, v, C) {
        if (typeof v == "object" && v !== null && v.type === go && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case ma:
                e: {
                    for (var E = v.key, b = f; b !== null; ) {
                        if (b.key === E) {
                            if (E = v.type,
                            E === go) {
                                if (b.tag === 7) {
                                    n(h, b.sibling),
                                    f = r(b, v.props.children),
                                    f.return = h,
                                    h = f;
                                    break e
                                }
                            } else if (b.elementType === E || typeof E == "object" && E !== null && E.$$typeof === ln && Ju(E) === b.type) {
                                n(h, b.sibling),
                                f = r(b, v.props),
                                f.ref = fr(h, b, v),
                                f.return = h,
                                h = f;
                                break e
                            }
                            n(h, b);
                            break
                        } else
                            t(h, b);
                        b = b.sibling
                    }
                    v.type === go ? (f = qn(v.props.children, h.mode, C, v.key),
                    f.return = h,
                    h = f) : (C = Wa(v.type, v.key, v.props, null, h.mode, C),
                    C.ref = fr(h, f, v),
                    C.return = h,
                    h = C)
                }
                return s(h);
            case vo:
                e: {
                    for (b = v.key; f !== null; ) {
                        if (f.key === b)
                            if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                                n(h, f.sibling),
                                f = r(f, v.children || []),
                                f.return = h,
                                h = f;
                                break e
                            } else {
                                n(h, f);
                                break
                            }
                        else
                            t(h, f);
                        f = f.sibling
                    }
                    f = Li(v, h.mode, C),
                    f.return = h,
                    h = f
                }
                return s(h);
            case ln:
                return b = v._init,
                y(h, f, b(v._payload), C)
            }
            if (xr(v))
                return S(h, f, v, C);
            if (lr(v))
                return g(h, f, v, C);
            ka(h, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        f !== null && f.tag === 6 ? (n(h, f.sibling),
        f = r(f, v),
        f.return = h,
        h = f) : (n(h, f),
        f = Di(v, h.mode, C),
        f.return = h,
        h = f),
        s(h)) : n(h, f)
    }
    return y
}
var Zo = Lf(!0)
  , Ff = Lf(!1)
  , cs = Bn(null)
  , us = null
  , ko = null
  , yc = null;
function xc() {
    yc = ko = us = null
}
function wc(e) {
    var t = cs.current;
    ae(cs),
    e._currentValue = t
}
function hl(e, t, n) {
    for (; e !== null; ) {
        var o = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Lo(e, t) {
    us = e,
    yc = ko = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0),
    e.firstContext = null)
}
function at(e) {
    var t = e._currentValue;
    if (yc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ko === null) {
            if (us === null)
                throw Error(R(308));
            ko = e,
            us.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ko = ko.next = e;
    return t
}
var Qn = null;
function Sc(e) {
    Qn === null ? Qn = [e] : Qn.push(e)
}
function _f(e, t, n, o) {
    var r = t.interleaved;
    return r === null ? (n.next = n,
    Sc(t)) : (n.next = r.next,
    r.next = n),
    t.interleaved = n,
    Wt(e, o)
}
function Wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var cn = !1;
function Cc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Bf(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Qt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function bn(e, t, n) {
    var o = e.updateQueue;
    if (o === null)
        return null;
    if (o = o.shared,
    X & 2) {
        var r = o.pending;
        return r === null ? t.next = t : (t.next = r.next,
        r.next = t),
        o.pending = t,
        Wt(e, n)
    }
    return r = o.interleaved,
    r === null ? (t.next = t,
    Sc(o)) : (t.next = r.next,
    r.next = t),
    o.interleaved = t,
    Wt(e, n)
}
function za(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var o = t.lanes;
        o &= e.pendingLanes,
        n |= o,
        t.lanes = n,
        ic(e, n)
    }
}
function ed(e, t) {
    var n = e.updateQueue
      , o = e.alternate;
    if (o !== null && (o = o.updateQueue,
    n === o)) {
        var r = null
          , a = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? r = a = s : a = a.next = s,
                n = n.next
            } while (n !== null);
            a === null ? r = a = t : a = a.next = t
        } else
            r = a = t;
        n = {
            baseState: o.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: a,
            shared: o.shared,
            effects: o.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ds(e, t, n, o) {
    var r = e.updateQueue;
    cn = !1;
    var a = r.firstBaseUpdate
      , s = r.lastBaseUpdate
      , i = r.shared.pending;
    if (i !== null) {
        r.shared.pending = null;
        var l = i
          , c = l.next;
        l.next = null,
        s === null ? a = c : s.next = c,
        s = l;
        var u = e.alternate;
        u !== null && (u = u.updateQueue,
        i = u.lastBaseUpdate,
        i !== s && (i === null ? u.firstBaseUpdate = c : i.next = c,
        u.lastBaseUpdate = l))
    }
    if (a !== null) {
        var p = r.baseState;
        s = 0,
        u = c = l = null,
        i = a;
        do {
            var m = i.lane
              , d = i.eventTime;
            if ((o & m) === m) {
                u !== null && (u = u.next = {
                    eventTime: d,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var S = e
                      , g = i;
                    switch (m = t,
                    d = n,
                    g.tag) {
                    case 1:
                        if (S = g.payload,
                        typeof S == "function") {
                            p = S.call(d, p, m);
                            break e
                        }
                        p = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = g.payload,
                        m = typeof S == "function" ? S.call(d, p, m) : S,
                        m == null)
                            break e;
                        p = ue({}, p, m);
                        break e;
                    case 2:
                        cn = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64,
                m = r.effects,
                m === null ? r.effects = [i] : m.push(i))
            } else
                d = {
                    eventTime: d,
                    lane: m,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                },
                u === null ? (c = u = d,
                l = p) : u = u.next = d,
                s |= m;
            if (i = i.next,
            i === null) {
                if (i = r.shared.pending,
                i === null)
                    break;
                m = i,
                i = m.next,
                m.next = null,
                r.lastBaseUpdate = m,
                r.shared.pending = null
            }
        } while (!0);
        if (u === null && (l = p),
        r.baseState = l,
        r.firstBaseUpdate = c,
        r.lastBaseUpdate = u,
        t = r.shared.interleaved,
        t !== null) {
            r = t;
            do
                s |= r.lane,
                r = r.next;
            while (r !== t)
        } else
            a === null && (r.shared.lanes = 0);
        no |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function td(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var o = e[t]
              , r = o.callback;
            if (r !== null) {
                if (o.callback = null,
                o = n,
                typeof r != "function")
                    throw Error(R(191, r));
                r.call(o)
            }
        }
}
var aa = {}
  , Lt = Bn(aa)
  , Qr = Bn(aa)
  , Ur = Bn(aa);
function Un(e) {
    if (e === aa)
        throw Error(R(174));
    return e
}
function Ec(e, t) {
    switch (ne(Ur, t),
    ne(Qr, e),
    ne(Lt, aa),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yi(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Yi(t, e)
    }
    ae(Lt),
    ne(Lt, t)
}
function Yo() {
    ae(Lt),
    ae(Qr),
    ae(Ur)
}
function jf(e) {
    Un(Ur.current);
    var t = Un(Lt.current)
      , n = Yi(t, e.type);
    t !== n && (ne(Qr, e),
    ne(Lt, n))
}
function bc(e) {
    Qr.current === e && (ae(Lt),
    ae(Qr))
}
var le = Bn(0);
function ps(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ki = [];
function kc() {
    for (var e = 0; e < ki.length; e++)
        ki[e]._workInProgressVersionPrimary = null;
    ki.length = 0
}
var Ha = Gt.ReactCurrentDispatcher
  , Ni = Gt.ReactCurrentBatchConfig
  , to = 0
  , ce = null
  , ve = null
  , xe = null
  , fs = !1
  , Pr = !1
  , Vr = 0
  , hv = 0;
function Ne() {
    throw Error(R(321))
}
function Nc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!wt(e[n], t[n]))
            return !1;
    return !0
}
function Pc(e, t, n, o, r, a) {
    if (to = a,
    ce = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ha.current = e === null || e.memoizedState === null ? xv : wv,
    e = n(o, r),
    Pr) {
        a = 0;
        do {
            if (Pr = !1,
            Vr = 0,
            25 <= a)
                throw Error(R(301));
            a += 1,
            xe = ve = null,
            t.updateQueue = null,
            Ha.current = Sv,
            e = n(o, r)
        } while (Pr)
    }
    if (Ha.current = ms,
    t = ve !== null && ve.next !== null,
    to = 0,
    xe = ve = ce = null,
    fs = !1,
    t)
        throw Error(R(300));
    return e
}
function Ac() {
    var e = Vr !== 0;
    return Vr = 0,
    e
}
function kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? ce.memoizedState = xe = e : xe = xe.next = e,
    xe
}
function st() {
    if (ve === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ve.next;
    var t = xe === null ? ce.memoizedState : xe.next;
    if (t !== null)
        xe = t,
        ve = e;
    else {
        if (e === null)
            throw Error(R(310));
        ve = e,
        e = {
            memoizedState: ve.memoizedState,
            baseState: ve.baseState,
            baseQueue: ve.baseQueue,
            queue: ve.queue,
            next: null
        },
        xe === null ? ce.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}
function Wr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Pi(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var o = ve
      , r = o.baseQueue
      , a = n.pending;
    if (a !== null) {
        if (r !== null) {
            var s = r.next;
            r.next = a.next,
            a.next = s
        }
        o.baseQueue = r = a,
        n.pending = null
    }
    if (r !== null) {
        a = r.next,
        o = o.baseState;
        var i = s = null
          , l = null
          , c = a;
        do {
            var u = c.lane;
            if ((to & u) === u)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                o = c.hasEagerState ? c.eagerState : e(o, c.action);
            else {
                var p = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (i = l = p,
                s = o) : l = l.next = p,
                ce.lanes |= u,
                no |= u
            }
            c = c.next
        } while (c !== null && c !== a);
        l === null ? s = o : l.next = i,
        wt(o, t.memoizedState) || (Ie = !0),
        t.memoizedState = o,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = o
    }
    if (e = n.interleaved,
    e !== null) {
        r = e;
        do
            a = r.lane,
            ce.lanes |= a,
            no |= a,
            r = r.next;
        while (r !== e)
    } else
        r === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ai(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch
      , r = n.pending
      , a = t.memoizedState;
    if (r !== null) {
        n.pending = null;
        var s = r = r.next;
        do
            a = e(a, s.action),
            s = s.next;
        while (s !== r);
        wt(a, t.memoizedState) || (Ie = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        n.lastRenderedState = a
    }
    return [a, o]
}
function Of() {}
function Mf(e, t) {
    var n = ce
      , o = st()
      , r = t()
      , a = !wt(o.memoizedState, r);
    if (a && (o.memoizedState = r,
    Ie = !0),
    o = o.queue,
    Tc(Hf.bind(null, n, o, e), [e]),
    o.getSnapshot !== t || a || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Kr(9, zf.bind(null, n, o, r, t), void 0, null),
        we === null)
            throw Error(R(349));
        to & 30 || If(n, t, r)
    }
    return r
}
function If(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function zf(e, t, n, o) {
    t.value = n,
    t.getSnapshot = o,
    $f(t) && Qf(e)
}
function Hf(e, t, n) {
    return n(function() {
        $f(t) && Qf(e)
    })
}
function $f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !wt(e, n)
    } catch {
        return !0
    }
}
function Qf(e) {
    var t = Wt(e, 1);
    t !== null && xt(t, e, 1, -1)
}
function nd(e) {
    var t = kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = yv.bind(null, ce, e),
    [t.memoizedState, e]
}
function Kr(e, t, n, o) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: o,
        next: null
    },
    t = ce.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ce.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (o = n.next,
    n.next = e,
    e.next = o,
    t.lastEffect = e)),
    e
}
function Uf() {
    return st().memoizedState
}
function $a(e, t, n, o) {
    var r = kt();
    ce.flags |= e,
    r.memoizedState = Kr(1 | t, n, void 0, o === void 0 ? null : o)
}
function _s(e, t, n, o) {
    var r = st();
    o = o === void 0 ? null : o;
    var a = void 0;
    if (ve !== null) {
        var s = ve.memoizedState;
        if (a = s.destroy,
        o !== null && Nc(o, s.deps)) {
            r.memoizedState = Kr(t, n, a, o);
            return
        }
    }
    ce.flags |= e,
    r.memoizedState = Kr(1 | t, n, a, o)
}
function od(e, t) {
    return $a(8390656, 8, e, t)
}
function Tc(e, t) {
    return _s(2048, 8, e, t)
}
function Vf(e, t) {
    return _s(4, 2, e, t)
}
function Wf(e, t) {
    return _s(4, 4, e, t)
}
function Kf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Zf(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    _s(4, 4, Kf.bind(null, t, e), n)
}
function Rc() {}
function Yf(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Nc(t, o[1]) ? o[0] : (n.memoizedState = [e, t],
    e)
}
function Gf(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Nc(t, o[1]) ? o[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Xf(e, t, n) {
    return to & 21 ? (wt(n, t) || (n = tf(),
    ce.lanes |= n,
    no |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ie = !0),
    e.memoizedState = n)
}
function vv(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var o = Ni.transition;
    Ni.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        Ni.transition = o
    }
}
function qf() {
    return st().memoizedState
}
function gv(e, t, n) {
    var o = Nn(e);
    if (n = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Jf(e))
        em(t, n);
    else if (n = _f(e, t, n, o),
    n !== null) {
        var r = _e();
        xt(n, e, o, r),
        tm(n, t, o)
    }
}
function yv(e, t, n) {
    var o = Nn(e)
      , r = {
        lane: o,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Jf(e))
        em(t, r);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var s = t.lastRenderedState
                  , i = a(s, n);
                if (r.hasEagerState = !0,
                r.eagerState = i,
                wt(i, s)) {
                    var l = t.interleaved;
                    l === null ? (r.next = r,
                    Sc(t)) : (r.next = l.next,
                    l.next = r),
                    t.interleaved = r;
                    return
                }
            } catch {} finally {}
        n = _f(e, t, r, o),
        n !== null && (r = _e(),
        xt(n, e, o, r),
        tm(n, t, o))
    }
}
function Jf(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}
function em(e, t) {
    Pr = fs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function tm(e, t, n) {
    if (n & 4194240) {
        var o = t.lanes;
        o &= e.pendingLanes,
        n |= o,
        t.lanes = n,
        ic(e, n)
    }
}
var ms = {
    readContext: at,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1
}
  , xv = {
    readContext: at,
    useCallback: function(e, t) {
        return kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: at,
    useEffect: od,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        $a(4194308, 4, Kf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return $a(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return $a(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var o = kt();
        return t = n !== void 0 ? n(t) : t,
        o.memoizedState = o.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        o.queue = e,
        e = e.dispatch = gv.bind(null, ce, e),
        [o.memoizedState, e]
    },
    useRef: function(e) {
        var t = kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: nd,
    useDebugValue: Rc,
    useDeferredValue: function(e) {
        return kt().memoizedState = e
    },
    useTransition: function() {
        var e = nd(!1)
          , t = e[0];
        return e = vv.bind(null, e[1]),
        kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var o = ce
          , r = kt();
        if (ie) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            we === null)
                throw Error(R(349));
            to & 30 || If(o, t, n)
        }
        r.memoizedState = n;
        var a = {
            value: n,
            getSnapshot: t
        };
        return r.queue = a,
        od(Hf.bind(null, o, a, e), [e]),
        o.flags |= 2048,
        Kr(9, zf.bind(null, o, a, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = kt()
          , t = we.identifierPrefix;
        if (ie) {
            var n = $t
              , o = Ht;
            n = (o & ~(1 << 32 - yt(o) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Vr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = hv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , wv = {
    readContext: at,
    useCallback: Yf,
    useContext: at,
    useEffect: Tc,
    useImperativeHandle: Zf,
    useInsertionEffect: Vf,
    useLayoutEffect: Wf,
    useMemo: Gf,
    useReducer: Pi,
    useRef: Uf,
    useState: function() {
        return Pi(Wr)
    },
    useDebugValue: Rc,
    useDeferredValue: function(e) {
        var t = st();
        return Xf(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Pi(Wr)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: Of,
    useSyncExternalStore: Mf,
    useId: qf,
    unstable_isNewReconciler: !1
}
  , Sv = {
    readContext: at,
    useCallback: Yf,
    useContext: at,
    useEffect: Tc,
    useImperativeHandle: Zf,
    useInsertionEffect: Vf,
    useLayoutEffect: Wf,
    useMemo: Gf,
    useReducer: Ai,
    useRef: Uf,
    useState: function() {
        return Ai(Wr)
    },
    useDebugValue: Rc,
    useDeferredValue: function(e) {
        var t = st();
        return ve === null ? t.memoizedState = e : Xf(t, ve.memoizedState, e)
    },
    useTransition: function() {
        var e = Ai(Wr)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: Of,
    useSyncExternalStore: Mf,
    useId: qf,
    unstable_isNewReconciler: !1
};
function pt(e, t) {
    if (e && e.defaultProps) {
        t = ue({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function vl(e, t, n, o) {
    t = e.memoizedState,
    n = n(o, t),
    n = n == null ? t : ue({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Bs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? so(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var o = _e()
          , r = Nn(e)
          , a = Qt(o, r);
        a.payload = t,
        n != null && (a.callback = n),
        t = bn(e, a, r),
        t !== null && (xt(t, e, r, o),
        za(t, e, r))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var o = _e()
          , r = Nn(e)
          , a = Qt(o, r);
        a.tag = 1,
        a.payload = t,
        n != null && (a.callback = n),
        t = bn(e, a, r),
        t !== null && (xt(t, e, r, o),
        za(t, e, r))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = _e()
          , o = Nn(e)
          , r = Qt(n, o);
        r.tag = 2,
        t != null && (r.callback = t),
        t = bn(e, r, o),
        t !== null && (xt(t, e, o, n),
        za(t, e, o))
    }
};
function rd(e, t, n, o, r, a, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, a, s) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, o) || !Ir(r, a) : !0
}
function nm(e, t, n) {
    var o = !1
      , r = Tn
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = at(a) : (r = He(t) ? Jn : Re.current,
    o = t.contextTypes,
    a = (o = o != null) ? Wo(e, r) : Tn),
    t = new t(n,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Bs,
    e.stateNode = t,
    t._reactInternals = e,
    o && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = r,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function ad(e, t, n, o) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o),
    t.state !== e && Bs.enqueueReplaceState(t, t.state, null)
}
function gl(e, t, n, o) {
    var r = e.stateNode;
    r.props = n,
    r.state = e.memoizedState,
    r.refs = {},
    Cc(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? r.context = at(a) : (a = He(t) ? Jn : Re.current,
    r.context = Wo(e, a)),
    r.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (vl(e, t, a, n),
    r.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    t !== r.state && Bs.enqueueReplaceState(r, r.state, null),
    ds(e, n, r, o),
    r.state = e.memoizedState),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}
function Go(e, t) {
    try {
        var n = ""
          , o = t;
        do
            n += Y0(o),
            o = o.return;
        while (o);
        var r = n
    } catch (a) {
        r = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: r,
        digest: null
    }
}
function Ti(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function yl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Cv = typeof WeakMap == "function" ? WeakMap : Map;
function om(e, t, n) {
    n = Qt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var o = t.value;
    return n.callback = function() {
        vs || (vs = !0,
        Al = o),
        yl(e, t)
    }
    ,
    n
}
function rm(e, t, n) {
    n = Qt(-1, n),
    n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
        var r = t.value;
        n.payload = function() {
            return o(r)
        }
        ,
        n.callback = function() {
            yl(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        yl(e, t),
        typeof o != "function" && (kn === null ? kn = new Set([this]) : kn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function sd(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
        o = e.pingCache = new Cv;
        var r = new Set;
        o.set(t, r)
    } else
        r = o.get(t),
        r === void 0 && (r = new Set,
        o.set(t, r));
    r.has(n) || (r.add(n),
    e = jv.bind(null, e, t, n),
    t.then(e, e))
}
function id(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ld(e, t, n, o, r) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = r,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1),
    t.tag = 2,
    bn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Ev = Gt.ReactCurrentOwner
  , Ie = !1;
function Le(e, t, n, o) {
    t.child = e === null ? Ff(t, null, n, o) : Zo(t, e.child, n, o)
}
function cd(e, t, n, o, r) {
    n = n.render;
    var a = t.ref;
    return Lo(t, r),
    o = Pc(e, t, n, o, a, r),
    n = Ac(),
    e !== null && !Ie ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    Kt(e, t, r)) : (ie && n && hc(t),
    t.flags |= 1,
    Le(e, t, o, r),
    t.child)
}
function ud(e, t, n, o, r) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !Mc(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        am(e, t, a, o, r)) : (e = Wa(n.type, null, o, t, t.mode, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & r)) {
        var s = a.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ir,
        n(s, o) && e.ref === t.ref)
            return Kt(e, t, r)
    }
    return t.flags |= 1,
    e = Pn(a, o),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function am(e, t, n, o, r) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (Ir(a, o) && e.ref === t.ref)
            if (Ie = !1,
            t.pendingProps = o = a,
            (e.lanes & r) !== 0)
                e.flags & 131072 && (Ie = !0);
            else
                return t.lanes = e.lanes,
                Kt(e, t, r)
    }
    return xl(e, t, n, o, r)
}
function sm(e, t, n) {
    var o = t.pendingProps
      , r = o.children
      , a = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Po, Ve),
            Ve |= n;
        else {
            if (!(n & 1073741824))
                return e = a !== null ? a.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Po, Ve),
                Ve |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            o = a !== null ? a.baseLanes : n,
            ne(Po, Ve),
            Ve |= o
        }
    else
        a !== null ? (o = a.baseLanes | n,
        t.memoizedState = null) : o = n,
        ne(Po, Ve),
        Ve |= o;
    return Le(e, t, r, n),
    t.child
}
function im(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function xl(e, t, n, o, r) {
    var a = He(n) ? Jn : Re.current;
    return a = Wo(t, a),
    Lo(t, r),
    n = Pc(e, t, n, o, a, r),
    o = Ac(),
    e !== null && !Ie ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    Kt(e, t, r)) : (ie && o && hc(t),
    t.flags |= 1,
    Le(e, t, n, r),
    t.child)
}
function dd(e, t, n, o, r) {
    if (He(n)) {
        var a = !0;
        ss(t)
    } else
        a = !1;
    if (Lo(t, r),
    t.stateNode === null)
        Qa(e, t),
        nm(t, n, o),
        gl(t, n, o, r),
        o = !0;
    else if (e === null) {
        var s = t.stateNode
          , i = t.memoizedProps;
        s.props = i;
        var l = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = at(c) : (c = He(n) ? Jn : Re.current,
        c = Wo(t, c));
        var u = n.getDerivedStateFromProps
          , p = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== o || l !== c) && ad(t, s, o, c),
        cn = !1;
        var m = t.memoizedState;
        s.state = m,
        ds(t, o, s, r),
        l = t.memoizedState,
        i !== o || m !== l || ze.current || cn ? (typeof u == "function" && (vl(t, n, u, o),
        l = t.memoizedState),
        (i = cn || rd(t, n, i, o, m, l, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = o,
        t.memoizedState = l),
        s.props = o,
        s.state = l,
        s.context = c,
        o = i) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        o = !1)
    } else {
        s = t.stateNode,
        Bf(e, t),
        i = t.memoizedProps,
        c = t.type === t.elementType ? i : pt(t.type, i),
        s.props = c,
        p = t.pendingProps,
        m = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = at(l) : (l = He(n) ? Jn : Re.current,
        l = Wo(t, l));
        var d = n.getDerivedStateFromProps;
        (u = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (i !== p || m !== l) && ad(t, s, o, l),
        cn = !1,
        m = t.memoizedState,
        s.state = m,
        ds(t, o, s, r);
        var S = t.memoizedState;
        i !== p || m !== S || ze.current || cn ? (typeof d == "function" && (vl(t, n, d, o),
        S = t.memoizedState),
        (c = cn || rd(t, n, c, o, m, S, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(o, S, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(o, S, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = o,
        t.memoizedState = S),
        s.props = o,
        s.state = S,
        s.context = l,
        o = c) : (typeof s.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        o = !1)
    }
    return wl(e, t, n, o, a, r)
}
function wl(e, t, n, o, r, a) {
    im(e, t);
    var s = (t.flags & 128) !== 0;
    if (!o && !s)
        return r && Gu(t, n, !1),
        Kt(e, t, a);
    o = t.stateNode,
    Ev.current = t;
    var i = s && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Zo(t, e.child, null, a),
    t.child = Zo(t, null, i, a)) : Le(e, t, i, a),
    t.memoizedState = o.state,
    r && Gu(t, n, !0),
    t.child
}
function lm(e) {
    var t = e.stateNode;
    t.pendingContext ? Yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yu(e, t.context, !1),
    Ec(e, t.containerInfo)
}
function pd(e, t, n, o, r) {
    return Ko(),
    gc(r),
    t.flags |= 256,
    Le(e, t, n, o),
    t.child
}
var Sl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Cl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function cm(e, t, n) {
    var o = t.pendingProps, r = le.current, a = !1, s = (t.flags & 128) !== 0, i;
    if ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    i ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1),
    ne(le, r & 1),
    e === null)
        return ml(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = o.children,
        e = o.fallback,
        a ? (o = t.mode,
        a = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(o & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = s) : a = Ms(s, o, 0, null),
        e = qn(e, o, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = Cl(n),
        t.memoizedState = Sl,
        e) : Dc(t, s));
    if (r = e.memoizedState,
    r !== null && (i = r.dehydrated,
    i !== null))
        return bv(e, t, s, o, i, r, n);
    if (a) {
        a = o.fallback,
        s = t.mode,
        r = e.child,
        i = r.sibling;
        var l = {
            mode: "hidden",
            children: o.children
        };
        return !(s & 1) && t.child !== r ? (o = t.child,
        o.childLanes = 0,
        o.pendingProps = l,
        t.deletions = null) : (o = Pn(r, l),
        o.subtreeFlags = r.subtreeFlags & 14680064),
        i !== null ? a = Pn(i, a) : (a = qn(a, s, n, null),
        a.flags |= 2),
        a.return = t,
        o.return = t,
        o.sibling = a,
        t.child = o,
        o = a,
        a = t.child,
        s = e.child.memoizedState,
        s = s === null ? Cl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        a.memoizedState = s,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = Sl,
        o
    }
    return a = e.child,
    e = a.sibling,
    o = Pn(a, {
        mode: "visible",
        children: o.children
    }),
    !(t.mode & 1) && (o.lanes = n),
    o.return = t,
    o.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = o,
    t.memoizedState = null,
    o
}
function Dc(e, t) {
    return t = Ms({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Na(e, t, n, o) {
    return o !== null && gc(o),
    Zo(t, e.child, null, n),
    e = Dc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function bv(e, t, n, o, r, a, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        o = Ti(Error(R(422))),
        Na(e, t, s, o)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = o.fallback,
        r = t.mode,
        o = Ms({
            mode: "visible",
            children: o.children
        }, r, 0, null),
        a = qn(a, r, s, null),
        a.flags |= 2,
        o.return = t,
        a.return = t,
        o.sibling = a,
        t.child = o,
        t.mode & 1 && Zo(t, e.child, null, s),
        t.child.memoizedState = Cl(s),
        t.memoizedState = Sl,
        a);
    if (!(t.mode & 1))
        return Na(e, t, s, null);
    if (r.data === "$!") {
        if (o = r.nextSibling && r.nextSibling.dataset,
        o)
            var i = o.dgst;
        return o = i,
        a = Error(R(419)),
        o = Ti(a, o, void 0),
        Na(e, t, s, o)
    }
    if (i = (s & e.childLanes) !== 0,
    Ie || i) {
        if (o = we,
        o !== null) {
            switch (s & -s) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (o.suspendedLanes | s) ? 0 : r,
            r !== 0 && r !== a.retryLane && (a.retryLane = r,
            Wt(e, r),
            xt(o, e, r, -1))
        }
        return Oc(),
        o = Ti(Error(R(421))),
        Na(e, t, s, o)
    }
    return r.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Ov.bind(null, e),
    r._reactRetry = t,
    null) : (e = a.treeContext,
    Ke = En(r.nextSibling),
    Ze = t,
    ie = !0,
    gt = null,
    e !== null && (tt[nt++] = Ht,
    tt[nt++] = $t,
    tt[nt++] = eo,
    Ht = e.id,
    $t = e.overflow,
    eo = t),
    t = Dc(t, o.children),
    t.flags |= 4096,
    t)
}
function fd(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t),
    hl(e.return, t, n)
}
function Ri(e, t, n, o, r) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: n,
        tailMode: r
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = o,
    a.tail = n,
    a.tailMode = r)
}
function um(e, t, n) {
    var o = t.pendingProps
      , r = o.revealOrder
      , a = o.tail;
    if (Le(e, t, o.children, n),
    o = le.current,
    o & 2)
        o = o & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && fd(e, n, t);
                else if (e.tag === 19)
                    fd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        o &= 1
    }
    if (ne(le, o),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (n = t.child,
            r = null; n !== null; )
                e = n.alternate,
                e !== null && ps(e) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = t.child,
            t.child = null) : (r = n.sibling,
            n.sibling = null),
            Ri(t, !1, r, n, a);
            break;
        case "backwards":
            for (n = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && ps(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = n,
                n = r,
                r = e
            }
            Ri(t, !0, n, null, a);
            break;
        case "together":
            Ri(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Qa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    no |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Pn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Pn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function kv(e, t, n) {
    switch (t.tag) {
    case 3:
        lm(t),
        Ko();
        break;
    case 5:
        jf(t);
        break;
    case 1:
        He(t.type) && ss(t);
        break;
    case 4:
        Ec(t, t.stateNode.containerInfo);
        break;
    case 10:
        var o = t.type._context
          , r = t.memoizedProps.value;
        ne(cs, o._currentValue),
        o._currentValue = r;
        break;
    case 13:
        if (o = t.memoizedState,
        o !== null)
            return o.dehydrated !== null ? (ne(le, le.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? cm(e, t, n) : (ne(le, le.current & 1),
            e = Kt(e, t, n),
            e !== null ? e.sibling : null);
        ne(le, le.current & 1);
        break;
    case 19:
        if (o = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (o)
                return um(e, t, n);
            t.flags |= 128
        }
        if (r = t.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        ne(le, le.current),
        o)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        sm(e, t, n)
    }
    return Kt(e, t, n)
}
var dm, El, pm, fm;
dm = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
El = function() {}
;
pm = function(e, t, n, o) {
    var r = e.memoizedProps;
    if (r !== o) {
        e = t.stateNode,
        Un(Lt.current);
        var a = null;
        switch (n) {
        case "input":
            r = Vi(e, r),
            o = Vi(e, o),
            a = [];
            break;
        case "select":
            r = ue({}, r, {
                value: void 0
            }),
            o = ue({}, o, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            r = Zi(e, r),
            o = Zi(e, o),
            a = [];
            break;
        default:
            typeof r.onClick != "function" && typeof o.onClick == "function" && (e.onclick = rs)
        }
        Gi(n, o);
        var s;
        n = null;
        for (c in r)
            if (!o.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
                if (c === "style") {
                    var i = r[c];
                    for (s in i)
                        i.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Lr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
        for (c in o) {
            var l = o[c];
            if (i = r != null ? r[c] : void 0,
            o.hasOwnProperty(c) && l !== i && (l != null || i != null))
                if (c === "style")
                    if (i) {
                        for (s in i)
                            !i.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && i[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (a || (a = []),
                        a.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    i = i ? i.__html : void 0,
                    l != null && i !== l && (a = a || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Lr.hasOwnProperty(c) ? (l != null && c === "onScroll" && re("scroll", e),
                    a || i === l || (a = [])) : (a = a || []).push(c, l))
        }
        n && (a = a || []).push("style", n);
        var c = a;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
fm = function(e, t, n, o) {
    n !== o && (t.flags |= 4)
}
;
function mr(e, t) {
    if (!ie)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var o = null; n !== null; )
                n.alternate !== null && (o = n),
                n = n.sibling;
            o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
        }
}
function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , o = 0;
    if (t)
        for (var r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            o |= r.subtreeFlags & 14680064,
            o |= r.flags & 14680064,
            r.return = e,
            r = r.sibling;
    else
        for (r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            o |= r.subtreeFlags,
            o |= r.flags,
            r.return = e,
            r = r.sibling;
    return e.subtreeFlags |= o,
    e.childLanes = n,
    t
}
function Nv(e, t, n) {
    var o = t.pendingProps;
    switch (vc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Pe(t),
        null;
    case 1:
        return He(t.type) && as(),
        Pe(t),
        null;
    case 3:
        return o = t.stateNode,
        Yo(),
        ae(ze),
        ae(Re),
        kc(),
        o.pendingContext && (o.context = o.pendingContext,
        o.pendingContext = null),
        (e === null || e.child === null) && (ba(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        gt !== null && (Dl(gt),
        gt = null))),
        El(e, t),
        Pe(t),
        null;
    case 5:
        bc(t);
        var r = Un(Ur.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            pm(e, t, n, o, r),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!o) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return Pe(t),
                null
            }
            if (e = Un(Lt.current),
            ba(t)) {
                o = t.stateNode,
                n = t.type;
                var a = t.memoizedProps;
                switch (o[Tt] = t,
                o[$r] = a,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    re("cancel", o),
                    re("close", o);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    re("load", o);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < Sr.length; r++)
                        re(Sr[r], o);
                    break;
                case "source":
                    re("error", o);
                    break;
                case "img":
                case "image":
                case "link":
                    re("error", o),
                    re("load", o);
                    break;
                case "details":
                    re("toggle", o);
                    break;
                case "input":
                    Cu(o, a),
                    re("invalid", o);
                    break;
                case "select":
                    o._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    re("invalid", o);
                    break;
                case "textarea":
                    bu(o, a),
                    re("invalid", o)
                }
                Gi(n, a),
                r = null;
                for (var s in a)
                    if (a.hasOwnProperty(s)) {
                        var i = a[s];
                        s === "children" ? typeof i == "string" ? o.textContent !== i && (a.suppressHydrationWarning !== !0 && Ea(o.textContent, i, e),
                        r = ["children", i]) : typeof i == "number" && o.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && Ea(o.textContent, i, e),
                        r = ["children", "" + i]) : Lr.hasOwnProperty(s) && i != null && s === "onScroll" && re("scroll", o)
                    }
                switch (n) {
                case "input":
                    ha(o),
                    Eu(o, a, !0);
                    break;
                case "textarea":
                    ha(o),
                    ku(o);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (o.onclick = rs)
                }
                o = r,
                t.updateQueue = o,
                o !== null && (t.flags |= 4)
            } else {
                s = r.nodeType === 9 ? r : r.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = zp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = s.createElement(n, {
                    is: o.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                o.multiple ? s.multiple = !0 : o.size && (s.size = o.size))) : e = s.createElementNS(e, n),
                e[Tt] = t,
                e[$r] = o,
                dm(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Xi(n, o),
                    n) {
                    case "dialog":
                        re("cancel", e),
                        re("close", e),
                        r = o;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        re("load", e),
                        r = o;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < Sr.length; r++)
                            re(Sr[r], e);
                        r = o;
                        break;
                    case "source":
                        re("error", e),
                        r = o;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        re("error", e),
                        re("load", e),
                        r = o;
                        break;
                    case "details":
                        re("toggle", e),
                        r = o;
                        break;
                    case "input":
                        Cu(e, o),
                        r = Vi(e, o),
                        re("invalid", e);
                        break;
                    case "option":
                        r = o;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!o.multiple
                        },
                        r = ue({}, o, {
                            value: void 0
                        }),
                        re("invalid", e);
                        break;
                    case "textarea":
                        bu(e, o),
                        r = Zi(e, o),
                        re("invalid", e);
                        break;
                    default:
                        r = o
                    }
                    Gi(n, r),
                    i = r;
                    for (a in i)
                        if (i.hasOwnProperty(a)) {
                            var l = i[a];
                            a === "style" ? Qp(e, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Hp(e, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Fr(e, l) : typeof l == "number" && Fr(e, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Lr.hasOwnProperty(a) ? l != null && a === "onScroll" && re("scroll", e) : l != null && tc(e, a, l, s))
                        }
                    switch (n) {
                    case "input":
                        ha(e),
                        Eu(e, o, !1);
                        break;
                    case "textarea":
                        ha(e),
                        ku(e);
                        break;
                    case "option":
                        o.value != null && e.setAttribute("value", "" + An(o.value));
                        break;
                    case "select":
                        e.multiple = !!o.multiple,
                        a = o.value,
                        a != null ? Ao(e, !!o.multiple, a, !1) : o.defaultValue != null && Ao(e, !!o.multiple, o.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (e.onclick = rs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        o = !!o.autoFocus;
                        break e;
                    case "img":
                        o = !0;
                        break e;
                    default:
                        o = !1
                    }
                }
                o && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Pe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            fm(e, t, e.memoizedProps, o);
        else {
            if (typeof o != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = Un(Ur.current),
            Un(Lt.current),
            ba(t)) {
                if (o = t.stateNode,
                n = t.memoizedProps,
                o[Tt] = t,
                (a = o.nodeValue !== n) && (e = Ze,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ea(o.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ea(o.nodeValue, n, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o),
                o[Tt] = t,
                t.stateNode = o
        }
        return Pe(t),
        null;
    case 13:
        if (ae(le),
        o = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ie && Ke !== null && t.mode & 1 && !(t.flags & 128))
                Df(),
                Ko(),
                t.flags |= 98560,
                a = !1;
            else if (a = ba(t),
            o !== null && o.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(R(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(R(317));
                    a[Tt] = t
                } else
                    Ko(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Pe(t),
                a = !1
            } else
                gt !== null && (Dl(gt),
                gt = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (o = o !== null,
        o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || le.current & 1 ? ye === 0 && (ye = 3) : Oc())),
        t.updateQueue !== null && (t.flags |= 4),
        Pe(t),
        null);
    case 4:
        return Yo(),
        El(e, t),
        e === null && zr(t.stateNode.containerInfo),
        Pe(t),
        null;
    case 10:
        return wc(t.type._context),
        Pe(t),
        null;
    case 17:
        return He(t.type) && as(),
        Pe(t),
        null;
    case 19:
        if (ae(le),
        a = t.memoizedState,
        a === null)
            return Pe(t),
            null;
        if (o = (t.flags & 128) !== 0,
        s = a.rendering,
        s === null)
            if (o)
                mr(a, !1);
            else {
                if (ye !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = ps(e),
                        s !== null) {
                            for (t.flags |= 128,
                            mr(a, !1),
                            o = s.updateQueue,
                            o !== null && (t.updateQueue = o,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            o = n,
                            n = t.child; n !== null; )
                                a = n,
                                e = o,
                                a.flags &= 14680066,
                                s = a.alternate,
                                s === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = s.childLanes,
                                a.lanes = s.lanes,
                                a.child = s.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = s.memoizedProps,
                                a.memoizedState = s.memoizedState,
                                a.updateQueue = s.updateQueue,
                                a.type = s.type,
                                e = s.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(le, le.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && fe() > Xo && (t.flags |= 128,
                o = !0,
                mr(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!o)
                if (e = ps(s),
                e !== null) {
                    if (t.flags |= 128,
                    o = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    mr(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !s.alternate && !ie)
                        return Pe(t),
                        null
                } else
                    2 * fe() - a.renderingStartTime > Xo && n !== 1073741824 && (t.flags |= 128,
                    o = !0,
                    mr(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = a.last,
            n !== null ? n.sibling = s : t.child = s,
            a.last = s)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = fe(),
        t.sibling = null,
        n = le.current,
        ne(le, o ? n & 1 | 2 : n & 1),
        t) : (Pe(t),
        null);
    case 22:
    case 23:
        return jc(),
        o = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
        o && t.mode & 1 ? Ve & 1073741824 && (Pe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function Pv(e, t) {
    switch (vc(t),
    t.tag) {
    case 1:
        return He(t.type) && as(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Yo(),
        ae(ze),
        ae(Re),
        kc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return bc(t),
        null;
    case 13:
        if (ae(le),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Ko()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(le),
        null;
    case 4:
        return Yo(),
        null;
    case 10:
        return wc(t.type._context),
        null;
    case 22:
    case 23:
        return jc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Pa = !1
  , Te = !1
  , Av = typeof WeakSet == "function" ? WeakSet : Set
  , j = null;
function No(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (o) {
                pe(e, t, o)
            }
        else
            n.current = null
}
function bl(e, t, n) {
    try {
        n()
    } catch (o) {
        pe(e, t, o)
    }
}
var md = !1;
function Tv(e, t) {
    if (il = ts,
    e = yf(),
    mc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var o = n.getSelection && n.getSelection();
                if (o && o.rangeCount !== 0) {
                    n = o.anchorNode;
                    var r = o.anchorOffset
                      , a = o.focusNode;
                    o = o.focusOffset;
                    try {
                        n.nodeType,
                        a.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , i = -1
                      , l = -1
                      , c = 0
                      , u = 0
                      , p = e
                      , m = null;
                    t: for (; ; ) {
                        for (var d; p !== n || r !== 0 && p.nodeType !== 3 || (i = s + r),
                        p !== a || o !== 0 && p.nodeType !== 3 || (l = s + o),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (d = p.firstChild) !== null; )
                            m = p,
                            p = d;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (m === n && ++c === r && (i = s),
                            m === a && ++u === o && (l = s),
                            (d = p.nextSibling) !== null)
                                break;
                            p = m,
                            m = p.parentNode
                        }
                        p = d
                    }
                    n = i === -1 || l === -1 ? null : {
                        start: i,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ll = {
        focusedElem: e,
        selectionRange: n
    },
    ts = !1,
    j = t; j !== null; )
        if (t = j,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            j = e;
        else
            for (; j !== null; ) {
                t = j;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var g = S.memoizedProps
                                  , y = S.memoizedState
                                  , h = t.stateNode
                                  , f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : pt(t.type, g), y);
                                h.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (C) {
                    pe(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    j = e;
                    break
                }
                j = t.return
            }
    return S = md,
    md = !1,
    S
}
function Ar(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null,
    o !== null) {
        var r = o = o.next;
        do {
            if ((r.tag & e) === e) {
                var a = r.destroy;
                r.destroy = void 0,
                a !== void 0 && bl(t, n, a)
            }
            r = r.next
        } while (r !== o)
    }
}
function js(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var o = n.create;
                n.destroy = o()
            }
            n = n.next
        } while (n !== t)
    }
}
function kl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function mm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    mm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Tt],
    delete t[$r],
    delete t[dl],
    delete t[dv],
    delete t[pv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function hm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function hd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || hm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Nl(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = rs));
    else if (o !== 4 && (e = e.child,
    e !== null))
        for (Nl(e, t, n),
        e = e.sibling; e !== null; )
            Nl(e, t, n),
            e = e.sibling
}
function Pl(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child,
    e !== null))
        for (Pl(e, t, n),
        e = e.sibling; e !== null; )
            Pl(e, t, n),
            e = e.sibling
}
var Se = null
  , vt = !1;
function on(e, t, n) {
    for (n = n.child; n !== null; )
        vm(e, t, n),
        n = n.sibling
}
function vm(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
        try {
            Dt.onCommitFiberUnmount(As, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Te || No(n, t);
    case 6:
        var o = Se
          , r = vt;
        Se = null,
        on(e, t, n),
        Se = o,
        vt = r,
        Se !== null && (vt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (vt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? Ei(e.parentNode, n) : e.nodeType === 1 && Ei(e, n),
        Or(e)) : Ei(Se, n.stateNode));
        break;
    case 4:
        o = Se,
        r = vt,
        Se = n.stateNode.containerInfo,
        vt = !0,
        on(e, t, n),
        Se = o,
        vt = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Te && (o = n.updateQueue,
        o !== null && (o = o.lastEffect,
        o !== null))) {
            r = o = o.next;
            do {
                var a = r
                  , s = a.destroy;
                a = a.tag,
                s !== void 0 && (a & 2 || a & 4) && bl(n, t, s),
                r = r.next
            } while (r !== o)
        }
        on(e, t, n);
        break;
    case 1:
        if (!Te && (No(n, t),
        o = n.stateNode,
        typeof o.componentWillUnmount == "function"))
            try {
                o.props = n.memoizedProps,
                o.state = n.memoizedState,
                o.componentWillUnmount()
            } catch (i) {
                pe(n, t, i)
            }
        on(e, t, n);
        break;
    case 21:
        on(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Te = (o = Te) || n.memoizedState !== null,
        on(e, t, n),
        Te = o) : on(e, t, n);
        break;
    default:
        on(e, t, n)
    }
}
function vd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Av),
        t.forEach(function(o) {
            var r = Mv.bind(null, e, o);
            n.has(o) || (n.add(o),
            o.then(r, r))
        })
    }
}
function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var o = 0; o < n.length; o++) {
            var r = n[o];
            try {
                var a = e
                  , s = t
                  , i = s;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                    case 5:
                        Se = i.stateNode,
                        vt = !1;
                        break e;
                    case 3:
                        Se = i.stateNode.containerInfo,
                        vt = !0;
                        break e;
                    case 4:
                        Se = i.stateNode.containerInfo,
                        vt = !0;
                        break e
                    }
                    i = i.return
                }
                if (Se === null)
                    throw Error(R(160));
                vm(a, s, r),
                Se = null,
                vt = !1;
                var l = r.alternate;
                l !== null && (l.return = null),
                r.return = null
            } catch (c) {
                pe(r, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            gm(t, e),
            t = t.sibling
}
function gm(e, t) {
    var n = e.alternate
      , o = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ut(t, e),
        bt(e),
        o & 4) {
            try {
                Ar(3, e, e.return),
                js(3, e)
            } catch (g) {
                pe(e, e.return, g)
            }
            try {
                Ar(5, e, e.return)
            } catch (g) {
                pe(e, e.return, g)
            }
        }
        break;
    case 1:
        ut(t, e),
        bt(e),
        o & 512 && n !== null && No(n, n.return);
        break;
    case 5:
        if (ut(t, e),
        bt(e),
        o & 512 && n !== null && No(n, n.return),
        e.flags & 32) {
            var r = e.stateNode;
            try {
                Fr(r, "")
            } catch (g) {
                pe(e, e.return, g)
            }
        }
        if (o & 4 && (r = e.stateNode,
        r != null)) {
            var a = e.memoizedProps
              , s = n !== null ? n.memoizedProps : a
              , i = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    i === "input" && a.type === "radio" && a.name != null && Mp(r, a),
                    Xi(i, s);
                    var c = Xi(i, a);
                    for (s = 0; s < l.length; s += 2) {
                        var u = l[s]
                          , p = l[s + 1];
                        u === "style" ? Qp(r, p) : u === "dangerouslySetInnerHTML" ? Hp(r, p) : u === "children" ? Fr(r, p) : tc(r, u, p, c)
                    }
                    switch (i) {
                    case "input":
                        Wi(r, a);
                        break;
                    case "textarea":
                        Ip(r, a);
                        break;
                    case "select":
                        var m = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!a.multiple;
                        var d = a.value;
                        d != null ? Ao(r, !!a.multiple, d, !1) : m !== !!a.multiple && (a.defaultValue != null ? Ao(r, !!a.multiple, a.defaultValue, !0) : Ao(r, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    r[$r] = a
                } catch (g) {
                    pe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (ut(t, e),
        bt(e),
        o & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            r = e.stateNode,
            a = e.memoizedProps;
            try {
                r.nodeValue = a
            } catch (g) {
                pe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (ut(t, e),
        bt(e),
        o & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Or(t.containerInfo)
            } catch (g) {
                pe(e, e.return, g)
            }
        break;
    case 4:
        ut(t, e),
        bt(e);
        break;
    case 13:
        ut(t, e),
        bt(e),
        r = e.child,
        r.flags & 8192 && (a = r.memoizedState !== null,
        r.stateNode.isHidden = a,
        !a || r.alternate !== null && r.alternate.memoizedState !== null || (_c = fe())),
        o & 4 && vd(e);
        break;
    case 22:
        if (u = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Te = (c = Te) || u,
        ut(t, e),
        Te = c) : ut(t, e),
        bt(e),
        o & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !u && e.mode & 1)
                for (j = e,
                u = e.child; u !== null; ) {
                    for (p = j = u; j !== null; ) {
                        switch (m = j,
                        d = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ar(4, m, m.return);
                            break;
                        case 1:
                            No(m, m.return);
                            var S = m.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                o = m,
                                n = m.return;
                                try {
                                    t = o,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (g) {
                                    pe(o, n, g)
                                }
                            }
                            break;
                        case 5:
                            No(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                yd(p);
                                continue
                            }
                        }
                        d !== null ? (d.return = m,
                        j = d) : yd(p)
                    }
                    u = u.sibling
                }
            e: for (u = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (u === null) {
                        u = p;
                        try {
                            r = p.stateNode,
                            c ? (a = r.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = p.stateNode,
                            l = p.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            i.style.display = $p("display", s))
                        } catch (g) {
                            pe(e, e.return, g)
                        }
                    }
                } else if (p.tag === 6) {
                    if (u === null)
                        try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (g) {
                            pe(e, e.return, g)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    u === p && (u = null),
                    p = p.return
                }
                u === p && (u = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        ut(t, e),
        bt(e),
        o & 4 && vd(e);
        break;
    case 21:
        break;
    default:
        ut(t, e),
        bt(e)
    }
}
function bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (hm(n)) {
                        var o = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (o.tag) {
            case 5:
                var r = o.stateNode;
                o.flags & 32 && (Fr(r, ""),
                o.flags &= -33);
                var a = hd(e);
                Pl(e, a, r);
                break;
            case 3:
            case 4:
                var s = o.stateNode.containerInfo
                  , i = hd(e);
                Nl(e, i, s);
                break;
            default:
                throw Error(R(161))
            }
        } catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Rv(e, t, n) {
    j = e,
    ym(e)
}
function ym(e, t, n) {
    for (var o = (e.mode & 1) !== 0; j !== null; ) {
        var r = j
          , a = r.child;
        if (r.tag === 22 && o) {
            var s = r.memoizedState !== null || Pa;
            if (!s) {
                var i = r.alternate
                  , l = i !== null && i.memoizedState !== null || Te;
                i = Pa;
                var c = Te;
                if (Pa = s,
                (Te = l) && !c)
                    for (j = r; j !== null; )
                        s = j,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? xd(r) : l !== null ? (l.return = s,
                        j = l) : xd(r);
                for (; a !== null; )
                    j = a,
                    ym(a),
                    a = a.sibling;
                j = r,
                Pa = i,
                Te = c
            }
            gd(e)
        } else
            r.subtreeFlags & 8772 && a !== null ? (a.return = r,
            j = a) : gd(e)
    }
}
function gd(e) {
    for (; j !== null; ) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Te || js(5, t);
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (t.flags & 4 && !Te)
                            if (n === null)
                                o.componentDidMount();
                            else {
                                var r = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                                o.componentDidUpdate(r, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && td(t, a, o);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            td(t, s, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var p = u.dehydrated;
                                    p !== null && Or(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                Te || t.flags & 512 && kl(t)
            } catch (m) {
                pe(t, t.return, m)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            j = n;
            break
        }
        j = t.return
    }
}
function yd(e) {
    for (; j !== null; ) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            j = n;
            break
        }
        j = t.return
    }
}
function xd(e) {
    for (; j !== null; ) {
        var t = j;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    js(4, t)
                } catch (l) {
                    pe(t, n, l)
                }
                break;
            case 1:
                var o = t.stateNode;
                if (typeof o.componentDidMount == "function") {
                    var r = t.return;
                    try {
                        o.componentDidMount()
                    } catch (l) {
                        pe(t, r, l)
                    }
                }
                var a = t.return;
                try {
                    kl(t)
                } catch (l) {
                    pe(t, a, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    kl(t)
                } catch (l) {
                    pe(t, s, l)
                }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            j = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            j = i;
            break
        }
        j = t.return
    }
}
var Dv = Math.ceil
  , hs = Gt.ReactCurrentDispatcher
  , Lc = Gt.ReactCurrentOwner
  , rt = Gt.ReactCurrentBatchConfig
  , X = 0
  , we = null
  , he = null
  , Ce = 0
  , Ve = 0
  , Po = Bn(0)
  , ye = 0
  , Zr = null
  , no = 0
  , Os = 0
  , Fc = 0
  , Tr = null
  , Me = null
  , _c = 0
  , Xo = 1 / 0
  , Mt = null
  , vs = !1
  , Al = null
  , kn = null
  , Aa = !1
  , yn = null
  , gs = 0
  , Rr = 0
  , Tl = null
  , Ua = -1
  , Va = 0;
function _e() {
    return X & 6 ? fe() : Ua !== -1 ? Ua : Ua = fe()
}
function Nn(e) {
    return e.mode & 1 ? X & 2 && Ce !== 0 ? Ce & -Ce : mv.transition !== null ? (Va === 0 && (Va = tf()),
    Va) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : cf(e.type)),
    e) : 1
}
function xt(e, t, n, o) {
    if (50 < Rr)
        throw Rr = 0,
        Tl = null,
        Error(R(185));
    na(e, n, o),
    (!(X & 2) || e !== we) && (e === we && (!(X & 2) && (Os |= n),
    ye === 4 && dn(e, Ce)),
    $e(e, o),
    n === 1 && X === 0 && !(t.mode & 1) && (Xo = fe() + 500,
    Fs && jn()))
}
function $e(e, t) {
    var n = e.callbackNode;
    m2(e, t);
    var o = es(e, e === we ? Ce : 0);
    if (o === 0)
        n !== null && Au(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = o & -o,
    e.callbackPriority !== t) {
        if (n != null && Au(n),
        t === 1)
            e.tag === 0 ? fv(wd.bind(null, e)) : Af(wd.bind(null, e)),
            cv(function() {
                !(X & 6) && jn()
            }),
            n = null;
        else {
            switch (nf(o)) {
            case 1:
                n = sc;
                break;
            case 4:
                n = Jp;
                break;
            case 16:
                n = Ja;
                break;
            case 536870912:
                n = ef;
                break;
            default:
                n = Ja
            }
            n = Nm(n, xm.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function xm(e, t) {
    if (Ua = -1,
    Va = 0,
    X & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (Fo() && e.callbackNode !== n)
        return null;
    var o = es(e, e === we ? Ce : 0);
    if (o === 0)
        return null;
    if (o & 30 || o & e.expiredLanes || t)
        t = ys(e, o);
    else {
        t = o;
        var r = X;
        X |= 2;
        var a = Sm();
        (we !== e || Ce !== t) && (Mt = null,
        Xo = fe() + 500,
        Xn(e, t));
        do
            try {
                _v();
                break
            } catch (i) {
                wm(e, i)
            }
        while (!0);
        xc(),
        hs.current = a,
        X = r,
        he !== null ? t = 0 : (we = null,
        Ce = 0,
        t = ye)
    }
    if (t !== 0) {
        if (t === 2 && (r = nl(e),
        r !== 0 && (o = r,
        t = Rl(e, r))),
        t === 1)
            throw n = Zr,
            Xn(e, 0),
            dn(e, o),
            $e(e, fe()),
            n;
        if (t === 6)
            dn(e, o);
        else {
            if (r = e.current.alternate,
            !(o & 30) && !Lv(r) && (t = ys(e, o),
            t === 2 && (a = nl(e),
            a !== 0 && (o = a,
            t = Rl(e, a))),
            t === 1))
                throw n = Zr,
                Xn(e, 0),
                dn(e, o),
                $e(e, fe()),
                n;
            switch (e.finishedWork = r,
            e.finishedLanes = o,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                Hn(e, Me, Mt);
                break;
            case 3:
                if (dn(e, o),
                (o & 130023424) === o && (t = _c + 500 - fe(),
                10 < t)) {
                    if (es(e, 0) !== 0)
                        break;
                    if (r = e.suspendedLanes,
                    (r & o) !== o) {
                        _e(),
                        e.pingedLanes |= e.suspendedLanes & r;
                        break
                    }
                    e.timeoutHandle = ul(Hn.bind(null, e, Me, Mt), t);
                    break
                }
                Hn(e, Me, Mt);
                break;
            case 4:
                if (dn(e, o),
                (o & 4194240) === o)
                    break;
                for (t = e.eventTimes,
                r = -1; 0 < o; ) {
                    var s = 31 - yt(o);
                    a = 1 << s,
                    s = t[s],
                    s > r && (r = s),
                    o &= ~a
                }
                if (o = r,
                o = fe() - o,
                o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Dv(o / 1960)) - o,
                10 < o) {
                    e.timeoutHandle = ul(Hn.bind(null, e, Me, Mt), o);
                    break
                }
                Hn(e, Me, Mt);
                break;
            case 5:
                Hn(e, Me, Mt);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return $e(e, fe()),
    e.callbackNode === n ? xm.bind(null, e) : null
}
function Rl(e, t) {
    var n = Tr;
    return e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
    e = ys(e, t),
    e !== 2 && (t = Me,
    Me = n,
    t !== null && Dl(t)),
    e
}
function Dl(e) {
    Me === null ? Me = e : Me.push.apply(Me, e)
}
function Lv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var o = 0; o < n.length; o++) {
                    var r = n[o]
                      , a = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!wt(a(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function dn(e, t) {
    for (t &= ~Fc,
    t &= ~Os,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - yt(t)
          , o = 1 << n;
        e[n] = -1,
        t &= ~o
    }
}
function wd(e) {
    if (X & 6)
        throw Error(R(327));
    Fo();
    var t = es(e, 0);
    if (!(t & 1))
        return $e(e, fe()),
        null;
    var n = ys(e, t);
    if (e.tag !== 0 && n === 2) {
        var o = nl(e);
        o !== 0 && (t = o,
        n = Rl(e, o))
    }
    if (n === 1)
        throw n = Zr,
        Xn(e, 0),
        dn(e, t),
        $e(e, fe()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Hn(e, Me, Mt),
    $e(e, fe()),
    null
}
function Bc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (Xo = fe() + 500,
        Fs && jn())
    }
}
function oo(e) {
    yn !== null && yn.tag === 0 && !(X & 6) && Fo();
    var t = X;
    X |= 1;
    var n = rt.transition
      , o = ee;
    try {
        if (rt.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = o,
        rt.transition = n,
        X = t,
        !(X & 6) && jn()
    }
}
function jc() {
    Ve = Po.current,
    ae(Po)
}
function Xn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    lv(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var o = n;
            switch (vc(o),
            o.tag) {
            case 1:
                o = o.type.childContextTypes,
                o != null && as();
                break;
            case 3:
                Yo(),
                ae(ze),
                ae(Re),
                kc();
                break;
            case 5:
                bc(o);
                break;
            case 4:
                Yo();
                break;
            case 13:
                ae(le);
                break;
            case 19:
                ae(le);
                break;
            case 10:
                wc(o.type._context);
                break;
            case 22:
            case 23:
                jc()
            }
            n = n.return
        }
    if (we = e,
    he = e = Pn(e.current, null),
    Ce = Ve = t,
    ye = 0,
    Zr = null,
    Fc = Os = no = 0,
    Me = Tr = null,
    Qn !== null) {
        for (t = 0; t < Qn.length; t++)
            if (n = Qn[t],
            o = n.interleaved,
            o !== null) {
                n.interleaved = null;
                var r = o.next
                  , a = n.pending;
                if (a !== null) {
                    var s = a.next;
                    a.next = r,
                    o.next = s
                }
                n.pending = o
            }
        Qn = null
    }
    return e
}
function wm(e, t) {
    do {
        var n = he;
        try {
            if (xc(),
            Ha.current = ms,
            fs) {
                for (var o = ce.memoizedState; o !== null; ) {
                    var r = o.queue;
                    r !== null && (r.pending = null),
                    o = o.next
                }
                fs = !1
            }
            if (to = 0,
            xe = ve = ce = null,
            Pr = !1,
            Vr = 0,
            Lc.current = null,
            n === null || n.return === null) {
                ye = 1,
                Zr = t,
                he = null;
                break
            }
            e: {
                var a = e
                  , s = n.return
                  , i = n
                  , l = t;
                if (t = Ce,
                i.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , u = i
                      , p = u.tag;
                    if (!(u.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var m = u.alternate;
                        m ? (u.updateQueue = m.updateQueue,
                        u.memoizedState = m.memoizedState,
                        u.lanes = m.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var d = id(s);
                    if (d !== null) {
                        d.flags &= -257,
                        ld(d, s, i, a, t),
                        d.mode & 1 && sd(a, c, t),
                        t = d,
                        l = c;
                        var S = t.updateQueue;
                        if (S === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            sd(a, c, t),
                            Oc();
                            break e
                        }
                        l = Error(R(426))
                    }
                } else if (ie && i.mode & 1) {
                    var y = id(s);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256),
                        ld(y, s, i, a, t),
                        gc(Go(l, i));
                        break e
                    }
                }
                a = l = Go(l, i),
                ye !== 4 && (ye = 2),
                Tr === null ? Tr = [a] : Tr.push(a),
                a = s;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var h = om(a, l, t);
                        ed(a, h);
                        break e;
                    case 1:
                        i = l;
                        var f = a.type
                          , v = a.stateNode;
                        if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (kn === null || !kn.has(v)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var C = rm(a, i, t);
                            ed(a, C);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            Em(n)
        } catch (E) {
            t = E,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Sm() {
    var e = hs.current;
    return hs.current = ms,
    e === null ? ms : e
}
function Oc() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    we === null || !(no & 268435455) && !(Os & 268435455) || dn(we, Ce)
}
function ys(e, t) {
    var n = X;
    X |= 2;
    var o = Sm();
    (we !== e || Ce !== t) && (Mt = null,
    Xn(e, t));
    do
        try {
            Fv();
            break
        } catch (r) {
            wm(e, r)
        }
    while (!0);
    if (xc(),
    X = n,
    hs.current = o,
    he !== null)
        throw Error(R(261));
    return we = null,
    Ce = 0,
    ye
}
function Fv() {
    for (; he !== null; )
        Cm(he)
}
function _v() {
    for (; he !== null && !a2(); )
        Cm(he)
}
function Cm(e) {
    var t = km(e.alternate, e, Ve);
    e.memoizedProps = e.pendingProps,
    t === null ? Em(e) : he = t,
    Lc.current = null
}
function Em(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Pv(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ye = 6,
                he = null;
                return
            }
        } else if (n = Nv(n, t, Ve),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ye === 0 && (ye = 5)
}
function Hn(e, t, n) {
    var o = ee
      , r = rt.transition;
    try {
        rt.transition = null,
        ee = 1,
        Bv(e, t, n, o)
    } finally {
        rt.transition = r,
        ee = o
    }
    return null
}
function Bv(e, t, n, o) {
    do
        Fo();
    while (yn !== null);
    if (X & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var r = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (h2(e, a),
    e === we && (he = we = null,
    Ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Aa || (Aa = !0,
    Nm(Ja, function() {
        return Fo(),
        null
    })),
    a = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || a) {
        a = rt.transition,
        rt.transition = null;
        var s = ee;
        ee = 1;
        var i = X;
        X |= 4,
        Lc.current = null,
        Tv(e, n),
        gm(n, e),
        tv(ll),
        ts = !!il,
        ll = il = null,
        e.current = n,
        Rv(n),
        s2(),
        X = i,
        ee = s,
        rt.transition = a
    } else
        e.current = n;
    if (Aa && (Aa = !1,
    yn = e,
    gs = r),
    a = e.pendingLanes,
    a === 0 && (kn = null),
    c2(n.stateNode),
    $e(e, fe()),
    t !== null)
        for (o = e.onRecoverableError,
        n = 0; n < t.length; n++)
            r = t[n],
            o(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (vs)
        throw vs = !1,
        e = Al,
        Al = null,
        e;
    return gs & 1 && e.tag !== 0 && Fo(),
    a = e.pendingLanes,
    a & 1 ? e === Tl ? Rr++ : (Rr = 0,
    Tl = e) : Rr = 0,
    jn(),
    null
}
function Fo() {
    if (yn !== null) {
        var e = nf(gs)
          , t = rt.transition
          , n = ee;
        try {
            if (rt.transition = null,
            ee = 16 > e ? 16 : e,
            yn === null)
                var o = !1;
            else {
                if (e = yn,
                yn = null,
                gs = 0,
                X & 6)
                    throw Error(R(331));
                var r = X;
                for (X |= 4,
                j = e.current; j !== null; ) {
                    var a = j
                      , s = a.child;
                    if (j.flags & 16) {
                        var i = a.deletions;
                        if (i !== null) {
                            for (var l = 0; l < i.length; l++) {
                                var c = i[l];
                                for (j = c; j !== null; ) {
                                    var u = j;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ar(8, u, a)
                                    }
                                    var p = u.child;
                                    if (p !== null)
                                        p.return = u,
                                        j = p;
                                    else
                                        for (; j !== null; ) {
                                            u = j;
                                            var m = u.sibling
                                              , d = u.return;
                                            if (mm(u),
                                            u === c) {
                                                j = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = d,
                                                j = m;
                                                break
                                            }
                                            j = d
                                        }
                                }
                            }
                            var S = a.alternate;
                            if (S !== null) {
                                var g = S.child;
                                if (g !== null) {
                                    S.child = null;
                                    do {
                                        var y = g.sibling;
                                        g.sibling = null,
                                        g = y
                                    } while (g !== null)
                                }
                            }
                            j = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && s !== null)
                        s.return = a,
                        j = s;
                    else
                        e: for (; j !== null; ) {
                            if (a = j,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ar(9, a, a.return)
                                }
                            var h = a.sibling;
                            if (h !== null) {
                                h.return = a.return,
                                j = h;
                                break e
                            }
                            j = a.return
                        }
                }
                var f = e.current;
                for (j = f; j !== null; ) {
                    s = j;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        j = v;
                    else
                        e: for (s = f; j !== null; ) {
                            if (i = j,
                            i.flags & 2048)
                                try {
                                    switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        js(9, i)
                                    }
                                } catch (E) {
                                    pe(i, i.return, E)
                                }
                            if (i === s) {
                                j = null;
                                break e
                            }
                            var C = i.sibling;
                            if (C !== null) {
                                C.return = i.return,
                                j = C;
                                break e
                            }
                            j = i.return
                        }
                }
                if (X = r,
                jn(),
                Dt && typeof Dt.onPostCommitFiberRoot == "function")
                    try {
                        Dt.onPostCommitFiberRoot(As, e)
                    } catch {}
                o = !0
            }
            return o
        } finally {
            ee = n,
            rt.transition = t
        }
    }
    return !1
}
function Sd(e, t, n) {
    t = Go(n, t),
    t = om(e, t, 1),
    e = bn(e, t, 1),
    t = _e(),
    e !== null && (na(e, 1, t),
    $e(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        Sd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Sd(t, e, n);
                break
            } else if (t.tag === 1) {
                var o = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (kn === null || !kn.has(o))) {
                    e = Go(n, e),
                    e = rm(t, e, 1),
                    t = bn(t, e, 1),
                    e = _e(),
                    t !== null && (na(t, 1, e),
                    $e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function jv(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t),
    t = _e(),
    e.pingedLanes |= e.suspendedLanes & n,
    we === e && (Ce & n) === n && (ye === 4 || ye === 3 && (Ce & 130023424) === Ce && 500 > fe() - _c ? Xn(e, 0) : Fc |= n),
    $e(e, t)
}
function bm(e, t) {
    t === 0 && (e.mode & 1 ? (t = ya,
    ya <<= 1,
    !(ya & 130023424) && (ya = 4194304)) : t = 1);
    var n = _e();
    e = Wt(e, t),
    e !== null && (na(e, t, n),
    $e(e, n))
}
function Ov(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    bm(e, n)
}
function Mv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var o = e.stateNode
          , r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
    case 19:
        o = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    o !== null && o.delete(t),
    bm(e, n)
}
var km;
km = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ze.current)
            Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ie = !1,
                kv(e, t, n);
            Ie = !!(e.flags & 131072)
        }
    else
        Ie = !1,
        ie && t.flags & 1048576 && Tf(t, ls, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var o = t.type;
        Qa(e, t),
        e = t.pendingProps;
        var r = Wo(t, Re.current);
        Lo(t, n),
        r = Pc(null, t, o, e, r, n);
        var a = Ac();
        return t.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        He(o) ? (a = !0,
        ss(t)) : a = !1,
        t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        Cc(t),
        r.updater = Bs,
        t.stateNode = r,
        r._reactInternals = t,
        gl(t, o, e, n),
        t = wl(null, t, o, !0, a, n)) : (t.tag = 0,
        ie && a && hc(t),
        Le(null, t, r, n),
        t = t.child),
        t;
    case 16:
        o = t.elementType;
        e: {
            switch (Qa(e, t),
            e = t.pendingProps,
            r = o._init,
            o = r(o._payload),
            t.type = o,
            r = t.tag = zv(o),
            e = pt(o, e),
            r) {
            case 0:
                t = xl(null, t, o, e, n);
                break e;
            case 1:
                t = dd(null, t, o, e, n);
                break e;
            case 11:
                t = cd(null, t, o, e, n);
                break e;
            case 14:
                t = ud(null, t, o, pt(o.type, e), n);
                break e
            }
            throw Error(R(306, o, ""))
        }
        return t;
    case 0:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : pt(o, r),
        xl(e, t, o, r, n);
    case 1:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : pt(o, r),
        dd(e, t, o, r, n);
    case 3:
        e: {
            if (lm(t),
            e === null)
                throw Error(R(387));
            o = t.pendingProps,
            a = t.memoizedState,
            r = a.element,
            Bf(e, t),
            ds(t, o, null, n);
            var s = t.memoizedState;
            if (o = s.element,
            a.isDehydrated)
                if (a = {
                    element: o,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    r = Go(Error(R(423)), t),
                    t = pd(e, t, o, n, r);
                    break e
                } else if (o !== r) {
                    r = Go(Error(R(424)), t),
                    t = pd(e, t, o, n, r);
                    break e
                } else
                    for (Ke = En(t.stateNode.containerInfo.firstChild),
                    Ze = t,
                    ie = !0,
                    gt = null,
                    n = Ff(t, null, o, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ko(),
                o === r) {
                    t = Kt(e, t, n);
                    break e
                }
                Le(e, t, o, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return jf(t),
        e === null && ml(t),
        o = t.type,
        r = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        s = r.children,
        cl(o, r) ? s = null : a !== null && cl(o, a) && (t.flags |= 32),
        im(e, t),
        Le(e, t, s, n),
        t.child;
    case 6:
        return e === null && ml(t),
        null;
    case 13:
        return cm(e, t, n);
    case 4:
        return Ec(t, t.stateNode.containerInfo),
        o = t.pendingProps,
        e === null ? t.child = Zo(t, null, o, n) : Le(e, t, o, n),
        t.child;
    case 11:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : pt(o, r),
        cd(e, t, o, r, n);
    case 7:
        return Le(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Le(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Le(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (o = t.type._context,
            r = t.pendingProps,
            a = t.memoizedProps,
            s = r.value,
            ne(cs, o._currentValue),
            o._currentValue = s,
            a !== null)
                if (wt(a.value, s)) {
                    if (a.children === r.children && !ze.current) {
                        t = Kt(e, t, n);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var i = a.dependencies;
                        if (i !== null) {
                            s = a.child;
                            for (var l = i.firstContext; l !== null; ) {
                                if (l.context === o) {
                                    if (a.tag === 1) {
                                        l = Qt(-1, n & -n),
                                        l.tag = 2;
                                        var c = a.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var u = c.pending;
                                            u === null ? l.next = l : (l.next = u.next,
                                            u.next = l),
                                            c.pending = l
                                        }
                                    }
                                    a.lanes |= n,
                                    l = a.alternate,
                                    l !== null && (l.lanes |= n),
                                    hl(a.return, n, t),
                                    i.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (a.tag === 10)
                            s = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (s = a.return,
                            s === null)
                                throw Error(R(341));
                            s.lanes |= n,
                            i = s.alternate,
                            i !== null && (i.lanes |= n),
                            hl(s, n, t),
                            s = a.sibling
                        } else
                            s = a.child;
                        if (s !== null)
                            s.return = a;
                        else
                            for (s = a; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (a = s.sibling,
                                a !== null) {
                                    a.return = s.return,
                                    s = a;
                                    break
                                }
                                s = s.return
                            }
                        a = s
                    }
            Le(e, t, r.children, n),
            t = t.child
        }
        return t;
    case 9:
        return r = t.type,
        o = t.pendingProps.children,
        Lo(t, n),
        r = at(r),
        o = o(r),
        t.flags |= 1,
        Le(e, t, o, n),
        t.child;
    case 14:
        return o = t.type,
        r = pt(o, t.pendingProps),
        r = pt(o.type, r),
        ud(e, t, o, r, n);
    case 15:
        return am(e, t, t.type, t.pendingProps, n);
    case 17:
        return o = t.type,
        r = t.pendingProps,
        r = t.elementType === o ? r : pt(o, r),
        Qa(e, t),
        t.tag = 1,
        He(o) ? (e = !0,
        ss(t)) : e = !1,
        Lo(t, n),
        nm(t, o, r),
        gl(t, o, r, n),
        wl(null, t, o, !0, e, n);
    case 19:
        return um(e, t, n);
    case 22:
        return sm(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function Nm(e, t) {
    return qp(e, t)
}
function Iv(e, t, n, o) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = o,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, o) {
    return new Iv(e,t,n,o)
}
function Mc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function zv(e) {
    if (typeof e == "function")
        return Mc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === oc)
            return 11;
        if (e === rc)
            return 14
    }
    return 2
}
function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Wa(e, t, n, o, r, a) {
    var s = 2;
    if (o = e,
    typeof e == "function")
        Mc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case go:
            return qn(n.children, r, a, t);
        case nc:
            s = 8,
            r |= 8;
            break;
        case Hi:
            return e = ot(12, n, t, r | 2),
            e.elementType = Hi,
            e.lanes = a,
            e;
        case $i:
            return e = ot(13, n, t, r),
            e.elementType = $i,
            e.lanes = a,
            e;
        case Qi:
            return e = ot(19, n, t, r),
            e.elementType = Qi,
            e.lanes = a,
            e;
        case Bp:
            return Ms(n, r, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Fp:
                    s = 10;
                    break e;
                case _p:
                    s = 9;
                    break e;
                case oc:
                    s = 11;
                    break e;
                case rc:
                    s = 14;
                    break e;
                case ln:
                    s = 16,
                    o = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = ot(s, n, t, r),
    t.elementType = e,
    t.type = o,
    t.lanes = a,
    t
}
function qn(e, t, n, o) {
    return e = ot(7, e, o, t),
    e.lanes = n,
    e
}
function Ms(e, t, n, o) {
    return e = ot(22, e, o, t),
    e.elementType = Bp,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Di(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function Li(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Hv(e, t, n, o, r) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = pi(0),
    this.expirationTimes = pi(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = pi(0),
    this.identifierPrefix = o,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function Ic(e, t, n, o, r, a, s, i, l) {
    return e = new Hv(e,t,n,i,l),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = ot(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: o,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Cc(a),
    e
}
function $v(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: vo,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Pm(e) {
    if (!e)
        return Tn;
    e = e._reactInternals;
    e: {
        if (so(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (He(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n))
            return Pf(e, n, t)
    }
    return t
}
function Am(e, t, n, o, r, a, s, i, l) {
    return e = Ic(n, o, !0, e, r, a, s, i, l),
    e.context = Pm(null),
    n = e.current,
    o = _e(),
    r = Nn(n),
    a = Qt(o, r),
    a.callback = t ?? null,
    bn(n, a, r),
    e.current.lanes = r,
    na(e, r, o),
    $e(e, o),
    e
}
function Is(e, t, n, o) {
    var r = t.current
      , a = _e()
      , s = Nn(r);
    return n = Pm(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Qt(a, s),
    t.payload = {
        element: e
    },
    o = o === void 0 ? null : o,
    o !== null && (t.callback = o),
    e = bn(r, t, s),
    e !== null && (xt(e, r, s, a),
    za(e, r, s)),
    s
}
function xs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Cd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function zc(e, t) {
    Cd(e, t),
    (e = e.alternate) && Cd(e, t)
}
function Qv() {
    return null
}
var Tm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Hc(e) {
    this._internalRoot = e
}
zs.prototype.render = Hc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    Is(e, t, null, null)
}
;
zs.prototype.unmount = Hc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        oo(function() {
            Is(null, e, null, null)
        }),
        t[Vt] = null
    }
}
;
function zs(e) {
    this._internalRoot = e
}
zs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = af();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++)
            ;
        un.splice(n, 0, e),
        n === 0 && lf(e)
    }
}
;
function $c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Hs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ed() {}
function Uv(e, t, n, o, r) {
    if (r) {
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var c = xs(s);
                a.call(c)
            }
        }
        var s = Am(t, o, e, 0, null, !1, !1, "", Ed);
        return e._reactRootContainer = s,
        e[Vt] = s.current,
        zr(e.nodeType === 8 ? e.parentNode : e),
        oo(),
        s
    }
    for (; r = e.lastChild; )
        e.removeChild(r);
    if (typeof o == "function") {
        var i = o;
        o = function() {
            var c = xs(l);
            i.call(c)
        }
    }
    var l = Ic(e, 0, !1, null, null, !1, !1, "", Ed);
    return e._reactRootContainer = l,
    e[Vt] = l.current,
    zr(e.nodeType === 8 ? e.parentNode : e),
    oo(function() {
        Is(t, l, n, o)
    }),
    l
}
function $s(e, t, n, o, r) {
    var a = n._reactRootContainer;
    if (a) {
        var s = a;
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var l = xs(s);
                i.call(l)
            }
        }
        Is(t, s, e, r)
    } else
        s = Uv(n, t, e, r, o);
    return xs(s)
}
of = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = wr(t.pendingLanes);
            n !== 0 && (ic(t, n | 1),
            $e(t, fe()),
            !(X & 6) && (Xo = fe() + 500,
            jn()))
        }
        break;
    case 13:
        oo(function() {
            var o = Wt(e, 1);
            if (o !== null) {
                var r = _e();
                xt(o, e, 1, r)
            }
        }),
        zc(e, 1)
    }
}
;
lc = function(e) {
    if (e.tag === 13) {
        var t = Wt(e, 134217728);
        if (t !== null) {
            var n = _e();
            xt(t, e, 134217728, n)
        }
        zc(e, 134217728)
    }
}
;
rf = function(e) {
    if (e.tag === 13) {
        var t = Nn(e)
          , n = Wt(e, t);
        if (n !== null) {
            var o = _e();
            xt(n, e, t, o)
        }
        zc(e, t)
    }
}
;
af = function() {
    return ee
}
;
sf = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
Ji = function(e, t, n) {
    switch (t) {
    case "input":
        if (Wi(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var o = n[t];
                if (o !== e && o.form === e.form) {
                    var r = Ls(o);
                    if (!r)
                        throw Error(R(90));
                    Op(o),
                    Wi(o, r)
                }
            }
        }
        break;
    case "textarea":
        Ip(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ao(e, !!n.multiple, t, !1)
    }
}
;
Wp = Bc;
Kp = oo;
var Vv = {
    usingClientEntryPoint: !1,
    Events: [ra, So, Ls, Up, Vp, Bc]
}
  , hr = {
    findFiberByHostInstance: $n,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Wv = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Gp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || Qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ta.isDisabled && Ta.supportsFiber)
        try {
            As = Ta.inject(Wv),
            Dt = Ta
        } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vv;
Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$c(t))
        throw Error(R(200));
    return $v(e, t, null, n)
}
;
Xe.createRoot = function(e, t) {
    if (!$c(e))
        throw Error(R(299));
    var n = !1
      , o = ""
      , r = Tm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    t = Ic(e, 1, !1, null, null, n, !1, o, r),
    e[Vt] = t.current,
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Hc(t)
}
;
Xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = Gp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Xe.flushSync = function(e) {
    return oo(e)
}
;
Xe.hydrate = function(e, t, n) {
    if (!Hs(t))
        throw Error(R(200));
    return $s(null, e, t, !0, n)
}
;
Xe.hydrateRoot = function(e, t, n) {
    if (!$c(e))
        throw Error(R(405));
    var o = n != null && n.hydratedSources || null
      , r = !1
      , a = ""
      , s = Tm;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Am(t, null, e, 1, n ?? null, r, !1, a, s),
    e[Vt] = t.current,
    zr(e),
    o)
        for (e = 0; e < o.length; e++)
            n = o[e],
            r = n._getVersion,
            r = r(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(n, r);
    return new zs(t)
}
;
Xe.render = function(e, t, n) {
    if (!Hs(t))
        throw Error(R(200));
    return $s(null, e, t, !1, n)
}
;
Xe.unmountComponentAtNode = function(e) {
    if (!Hs(e))
        throw Error(R(40));
    return e._reactRootContainer ? (oo(function() {
        $s(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Vt] = null
        })
    }),
    !0) : !1
}
;
Xe.unstable_batchedUpdates = Bc;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!Hs(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return $s(e, t, n, !1, o)
}
;
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Rm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rm)
        } catch (e) {
            console.error(e)
        }
}
Rm(),
Tp.exports = Xe;
var sa = Tp.exports;
const Dm = vp(sa);
var Lm, bd = sa;
Lm = bd.createRoot,
bd.hydrateRoot;
const Kv = 1
  , Zv = 1e6;
let Fi = 0;
function Yv() {
    return Fi = (Fi + 1) % Number.MAX_SAFE_INTEGER,
    Fi.toString()
}
const _i = new Map
  , kd = e => {
    if (_i.has(e))
        return;
    const t = setTimeout( () => {
        _i.delete(e),
        Dr({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Zv);
    _i.set(e, t)
}
  , Gv = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Kv)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? kd(n) : e.toasts.forEach(o => {
                kd(o.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(o => o.id === n || n === void 0 ? {
                    ...o,
                    open: !1
                } : o)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ka = [];
let Za = {
    toasts: []
};
function Dr(e) {
    Za = Gv(Za, e),
    Ka.forEach(t => {
        t(Za)
    }
    )
}
function Xv({...e}) {
    const t = Yv()
      , n = r => Dr({
        type: "UPDATE_TOAST",
        toast: {
            ...r,
            id: t
        }
    })
      , o = () => Dr({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Dr({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: r => {
                r || o()
            }
        }
    }),
    {
        id: t,
        dismiss: o,
        update: n
    }
}
function Fm() {
    const [e,t] = w.useState(Za);
    return w.useEffect( () => (Ka.push(t),
    () => {
        const n = Ka.indexOf(t);
        n > -1 && Ka.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Xv,
        dismiss: n => Dr({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ge(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(r) {
        if (e == null || e(r),
        n === !1 || !r.defaultPrevented)
            return t == null ? void 0 : t(r)
    }
}
function Nd(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function _m(...e) {
    return t => {
        let n = !1;
        const o = e.map(r => {
            const a = Nd(r, t);
            return !n && typeof a == "function" && (n = !0),
            a
        }
        );
        if (n)
            return () => {
                for (let r = 0; r < o.length; r++) {
                    const a = o[r];
                    typeof a == "function" ? a() : Nd(e[r], null)
                }
            }
    }
}
function St(...e) {
    return w.useCallback(_m(...e), e)
}
function Qs(e, t=[]) {
    let n = [];
    function o(a, s) {
        const i = w.createContext(s)
          , l = n.length;
        n = [...n, s];
        const c = p => {
            var h;
            const {scope: m, children: d, ...S} = p
              , g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[l]) || i
              , y = w.useMemo( () => S, Object.values(S));
            return x.jsx(g.Provider, {
                value: y,
                children: d
            })
        }
        ;
        c.displayName = a + "Provider";
        function u(p, m) {
            var g;
            const d = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[l]) || i
              , S = w.useContext(d);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return [c, u]
    }
    const r = () => {
        const a = n.map(s => w.createContext(s));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || a;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return r.scopeName = e,
    [o, qv(r, ...t)]
}
function qv(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const s = o.reduce( (i, {useScope: l, scopeName: c}) => {
                const p = l(a)[`__scope${c}`];
                return {
                    ...i,
                    ...p
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Ll(e) {
    const t = Jv(e)
      , n = w.forwardRef( (o, r) => {
        const {children: a, ...s} = o
          , i = w.Children.toArray(a)
          , l = i.find(tg);
        if (l) {
            const c = l.props.children
              , u = i.map(p => p === l ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : p);
            return x.jsx(t, {
                ...s,
                ref: r,
                children: w.isValidElement(c) ? w.cloneElement(c, void 0, u) : null
            })
        }
        return x.jsx(t, {
            ...s,
            ref: r,
            children: a
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function Jv(e) {
    const t = w.forwardRef( (n, o) => {
        const {children: r, ...a} = n;
        if (w.isValidElement(r)) {
            const s = og(r)
              , i = ng(a, r.props);
            return r.type !== w.Fragment && (i.ref = o ? _m(o, s) : s),
            w.cloneElement(r, i)
        }
        return w.Children.count(r) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Bm = Symbol("radix.slottable");
function eg(e) {
    const t = ({children: n}) => x.jsx(x.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Bm,
    t
}
function tg(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Bm
}
function ng(e, t) {
    const n = {
        ...t
    };
    for (const o in t) {
        const r = e[o]
          , a = t[o];
        /^on[A-Z]/.test(o) ? r && a ? n[o] = (...i) => {
            const l = a(...i);
            return r(...i),
            l
        }
        : r && (n[o] = r) : o === "style" ? n[o] = {
            ...r,
            ...a
        } : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function og(e) {
    var o, r;
    let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function rg(e) {
    const t = e + "CollectionProvider"
      , [n,o] = Qs(t)
      , [r,a] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = g => {
        const {scope: y, children: h} = g
          , f = D.useRef(null)
          , v = D.useRef(new Map).current;
        return x.jsx(r, {
            scope: y,
            itemMap: v,
            collectionRef: f,
            children: h
        })
    }
    ;
    s.displayName = t;
    const i = e + "CollectionSlot"
      , l = Ll(i)
      , c = D.forwardRef( (g, y) => {
        const {scope: h, children: f} = g
          , v = a(i, h)
          , C = St(y, v.collectionRef);
        return x.jsx(l, {
            ref: C,
            children: f
        })
    }
    );
    c.displayName = i;
    const u = e + "CollectionItemSlot"
      , p = "data-radix-collection-item"
      , m = Ll(u)
      , d = D.forwardRef( (g, y) => {
        const {scope: h, children: f, ...v} = g
          , C = D.useRef(null)
          , E = St(y, C)
          , b = a(u, h);
        return D.useEffect( () => (b.itemMap.set(C, {
            ref: C,
            ...v
        }),
        () => void b.itemMap.delete(C))),
        x.jsx(m, {
            [p]: "",
            ref: E,
            children: f
        })
    }
    );
    d.displayName = u;
    function S(g) {
        const y = a(e + "CollectionConsumer", g);
        return D.useCallback( () => {
            const f = y.collectionRef.current;
            if (!f)
                return [];
            const v = Array.from(f.querySelectorAll(`[${p}]`));
            return Array.from(y.itemMap.values()).sort( (b, k) => v.indexOf(b.ref.current) - v.indexOf(k.ref.current))
        }
        , [y.collectionRef, y.itemMap])
    }
    return [{
        Provider: s,
        Slot: c,
        ItemSlot: d
    }, S, o]
}
var ag = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Ue = ag.reduce( (e, t) => {
    const n = Ll(`Primitive.${t}`)
      , o = w.forwardRef( (r, a) => {
        const {asChild: s, ...i} = r
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(l, {
            ...i,
            ref: a
        })
    }
    );
    return o.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: o
    }
}
, {});
function jm(e, t) {
    e && sa.flushSync( () => e.dispatchEvent(t))
}
function Rn(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var o;
        return (o = t.current) == null ? void 0 : o.call(t, ...n)
    }
    , [])
}
function sg(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e);
    w.useEffect( () => {
        const o = r => {
            r.key === "Escape" && n(r)
        }
        ;
        return t.addEventListener("keydown", o, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }
    , [n, t])
}
var ig = "DismissableLayer", Fl = "dismissableLayer.update", lg = "dismissableLayer.pointerDownOutside", cg = "dismissableLayer.focusOutside", Pd, Om = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Qc = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: o, onPointerDownOutside: r, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...l} = e
      , c = w.useContext(Om)
      , [u,p] = w.useState(null)
      , m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,d] = w.useState({})
      , S = St(t, k => p(k))
      , g = Array.from(c.layers)
      , [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , h = g.indexOf(y)
      , f = u ? g.indexOf(u) : -1
      , v = c.layersWithOutsidePointerEventsDisabled.size > 0
      , C = f >= h
      , E = dg(k => {
        const T = k.target
          , F = [...c.branches].some(L => L.contains(T));
        !C || F || (r == null || r(k),
        s == null || s(k),
        k.defaultPrevented || i == null || i())
    }
    , m)
      , b = pg(k => {
        const T = k.target;
        [...c.branches].some(L => L.contains(T)) || (a == null || a(k),
        s == null || s(k),
        k.defaultPrevented || i == null || i())
    }
    , m);
    return sg(k => {
        f === c.layers.size - 1 && (o == null || o(k),
        !k.defaultPrevented && i && (k.preventDefault(),
        i()))
    }
    , m),
    w.useEffect( () => {
        if (u)
            return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Pd = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            Ad(),
            () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Pd)
            }
    }
    , [u, m, n, c]),
    w.useEffect( () => () => {
        u && (c.layers.delete(u),
        c.layersWithOutsidePointerEventsDisabled.delete(u),
        Ad())
    }
    , [u, c]),
    w.useEffect( () => {
        const k = () => d({});
        return document.addEventListener(Fl, k),
        () => document.removeEventListener(Fl, k)
    }
    , []),
    x.jsx(Ue.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: v ? C ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ge(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: ge(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
Qc.displayName = ig;
var ug = "DismissableLayerBranch"
  , Mm = w.forwardRef( (e, t) => {
    const n = w.useContext(Om)
      , o = w.useRef(null)
      , r = St(t, o);
    return w.useEffect( () => {
        const a = o.current;
        if (a)
            return n.branches.add(a),
            () => {
                n.branches.delete(a)
            }
    }
    , [n.branches]),
    x.jsx(Ue.div, {
        ...e,
        ref: r
    })
}
);
Mm.displayName = ug;
function dg(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e)
      , o = w.useRef(!1)
      , r = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const a = i => {
            if (i.target && !o.current) {
                let l = function() {
                    Im(lg, n, c, {
                        discrete: !0
                    })
                };
                const c = {
                    originalEvent: i
                };
                i.pointerType === "touch" ? (t.removeEventListener("click", r.current),
                r.current = l,
                t.addEventListener("click", r.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", r.current);
            o.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", a)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", a),
            t.removeEventListener("click", r.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => o.current = !0
    }
}
function pg(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Rn(e)
      , o = w.useRef(!1);
    return w.useEffect( () => {
        const r = a => {
            a.target && !o.current && Im(cg, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
    }
    , [t, n]),
    {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}
function Ad() {
    const e = new CustomEvent(Fl);
    document.dispatchEvent(e)
}
function Im(e, t, n, {discrete: o}) {
    const r = n.originalEvent.target
      , a = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    o ? jm(r, a) : r.dispatchEvent(a)
}
var fg = Qc
  , mg = Mm
  , Dn = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , hg = "Portal"
  , zm = w.forwardRef( (e, t) => {
    var i;
    const {container: n, ...o} = e
      , [r,a] = w.useState(!1);
    Dn( () => a(!0), []);
    const s = n || r && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
    return s ? Dm.createPortal(x.jsx(Ue.div, {
        ...o,
        ref: t
    }), s) : null
}
);
zm.displayName = hg;
function vg(e, t) {
    return w.useReducer( (n, o) => t[n][o] ?? n, e)
}
var Uc = e => {
    const {present: t, children: n} = e
      , o = gg(t)
      , r = typeof n == "function" ? n({
        present: o.isPresent
    }) : w.Children.only(n)
      , a = St(o.ref, yg(r));
    return typeof n == "function" || o.isPresent ? w.cloneElement(r, {
        ref: a
    }) : null
}
;
Uc.displayName = "Presence";
function gg(e) {
    const [t,n] = w.useState()
      , o = w.useRef(null)
      , r = w.useRef(e)
      , a = w.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [i,l] = vg(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const c = Ra(o.current);
        a.current = i === "mounted" ? c : "none"
    }
    , [i]),
    Dn( () => {
        const c = o.current
          , u = r.current;
        if (u !== e) {
            const m = a.current
              , d = Ra(c);
            e ? l("MOUNT") : d === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && m !== d ? "ANIMATION_OUT" : "UNMOUNT"),
            r.current = e
        }
    }
    , [e, l]),
    Dn( () => {
        if (t) {
            let c;
            const u = t.ownerDocument.defaultView ?? window
              , p = d => {
                const g = Ra(o.current).includes(d.animationName);
                if (d.target === t && g && (l("ANIMATION_END"),
                !r.current)) {
                    const y = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    c = u.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y)
                    }
                    )
                }
            }
              , m = d => {
                d.target === t && (a.current = Ra(o.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", p),
            t.addEventListener("animationend", p),
            () => {
                u.clearTimeout(c),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", p),
                t.removeEventListener("animationend", p)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: w.useCallback(c => {
            o.current = c ? getComputedStyle(c) : null,
            n(c)
        }
        , [])
    }
}
function Ra(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function yg(e) {
    var o, r;
    let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var xg = Pp[" useInsertionEffect ".trim().toString()] || Dn;
function wg({prop: e, defaultProp: t, onChange: n= () => {}
, caller: o}) {
    const [r,a,s] = Sg({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , l = i ? e : r;
    {
        const u = w.useRef(e !== void 0);
        w.useEffect( () => {
            const p = u.current;
            p !== i && console.warn(`${o} is changing from ${p ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            u.current = i
        }
        , [i, o])
    }
    const c = w.useCallback(u => {
        var p;
        if (i) {
            const m = Cg(u) ? u(e) : u;
            m !== e && ((p = s.current) == null || p.call(s, m))
        } else
            a(u)
    }
    , [i, e, a, s]);
    return [l, c]
}
function Sg({defaultProp: e, onChange: t}) {
    const [n,o] = w.useState(e)
      , r = w.useRef(n)
      , a = w.useRef(t);
    return xg( () => {
        a.current = t
    }
    , [t]),
    w.useEffect( () => {
        var s;
        r.current !== n && ((s = a.current) == null || s.call(a, n),
        r.current = n)
    }
    , [n, r]),
    [n, o, a]
}
function Cg(e) {
    return typeof e == "function"
}
var Eg = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , bg = "VisuallyHidden"
  , Us = w.forwardRef( (e, t) => x.jsx(Ue.span, {
    ...e,
    ref: t,
    style: {
        ...Eg,
        ...e.style
    }
}));
Us.displayName = bg;
var kg = Us
  , Vc = "ToastProvider"
  , [Wc,Ng,Pg] = rg("Toast")
  , [Hm,SS] = Qs("Toast", [Pg])
  , [Ag,Vs] = Hm(Vc)
  , $m = e => {
    const {__scopeToast: t, label: n="Notification", duration: o=5e3, swipeDirection: r="right", swipeThreshold: a=50, children: s} = e
      , [i,l] = w.useState(null)
      , [c,u] = w.useState(0)
      , p = w.useRef(!1)
      , m = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Vc}\`. Expected non-empty \`string\`.`),
    x.jsx(Wc.Provider, {
        scope: t,
        children: x.jsx(Ag, {
            scope: t,
            label: n,
            duration: o,
            swipeDirection: r,
            swipeThreshold: a,
            toastCount: c,
            viewport: i,
            onViewportChange: l,
            onToastAdd: w.useCallback( () => u(d => d + 1), []),
            onToastRemove: w.useCallback( () => u(d => d - 1), []),
            isFocusedToastEscapeKeyDownRef: p,
            isClosePausedRef: m,
            children: s
        })
    })
}
;
$m.displayName = Vc;
var Qm = "ToastViewport"
  , Tg = ["F8"]
  , _l = "toast.viewportPause"
  , Bl = "toast.viewportResume"
  , Um = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: o=Tg, label: r="Notifications ({hotkey})", ...a} = e
      , s = Vs(Qm, n)
      , i = Ng(n)
      , l = w.useRef(null)
      , c = w.useRef(null)
      , u = w.useRef(null)
      , p = w.useRef(null)
      , m = St(t, p, s.onViewportChange)
      , d = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    w.useEffect( () => {
        const y = h => {
            var v;
            o.length !== 0 && o.every(C => h[C] || h.code === C) && ((v = p.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", y),
        () => document.removeEventListener("keydown", y)
    }
    , [o]),
    w.useEffect( () => {
        const y = l.current
          , h = p.current;
        if (S && y && h) {
            const f = () => {
                if (!s.isClosePausedRef.current) {
                    const b = new CustomEvent(_l);
                    h.dispatchEvent(b),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const b = new CustomEvent(Bl);
                    h.dispatchEvent(b),
                    s.isClosePausedRef.current = !1
                }
            }
              , C = b => {
                !y.contains(b.relatedTarget) && v()
            }
              , E = () => {
                y.contains(document.activeElement) || v()
            }
            ;
            return y.addEventListener("focusin", f),
            y.addEventListener("focusout", C),
            y.addEventListener("pointermove", f),
            y.addEventListener("pointerleave", E),
            window.addEventListener("blur", f),
            window.addEventListener("focus", v),
            () => {
                y.removeEventListener("focusin", f),
                y.removeEventListener("focusout", C),
                y.removeEventListener("pointermove", f),
                y.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const g = w.useCallback( ({tabbingDirection: y}) => {
        const f = i().map(v => {
            const C = v.ref.current
              , E = [C, ...$g(C)];
            return y === "forwards" ? E : E.reverse()
        }
        );
        return (y === "forwards" ? f.reverse() : f).flat()
    }
    , [i]);
    return w.useEffect( () => {
        const y = p.current;
        if (y) {
            const h = f => {
                var E, b, k;
                const v = f.altKey || f.ctrlKey || f.metaKey;
                if (f.key === "Tab" && !v) {
                    const T = document.activeElement
                      , F = f.shiftKey;
                    if (f.target === y && F) {
                        (E = c.current) == null || E.focus();
                        return
                    }
                    const O = g({
                        tabbingDirection: F ? "backwards" : "forwards"
                    })
                      , W = O.findIndex(_ => _ === T);
                    Bi(O.slice(W + 1)) ? f.preventDefault() : F ? (b = c.current) == null || b.focus() : (k = u.current) == null || k.focus()
                }
            }
            ;
            return y.addEventListener("keydown", h),
            () => y.removeEventListener("keydown", h)
        }
    }
    , [i, g]),
    x.jsxs(mg, {
        ref: l,
        role: "region",
        "aria-label": r.replace("{hotkey}", d),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && x.jsx(jl, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const y = g({
                    tabbingDirection: "forwards"
                });
                Bi(y)
            }
        }), x.jsx(Wc.Slot, {
            scope: n,
            children: x.jsx(Ue.ol, {
                tabIndex: -1,
                ...a,
                ref: m
            })
        }), S && x.jsx(jl, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const y = g({
                    tabbingDirection: "backwards"
                });
                Bi(y)
            }
        })]
    })
}
);
Um.displayName = Qm;
var Vm = "ToastFocusProxy"
  , jl = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: o, ...r} = e
      , a = Vs(Vm, n);
    return x.jsx(Us, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...r,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var c;
            const i = s.relatedTarget;
            !((c = a.viewport) != null && c.contains(i)) && o()
        }
    })
}
);
jl.displayName = Vm;
var ia = "Toast"
  , Rg = "toast.swipeStart"
  , Dg = "toast.swipeMove"
  , Lg = "toast.swipeCancel"
  , Fg = "toast.swipeEnd"
  , Wm = w.forwardRef( (e, t) => {
    const {forceMount: n, open: o, defaultOpen: r, onOpenChange: a, ...s} = e
      , [i,l] = wg({
        prop: o,
        defaultProp: r ?? !0,
        onChange: a,
        caller: ia
    });
    return x.jsx(Uc, {
        present: n || i,
        children: x.jsx(jg, {
            open: i,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: Rn(e.onPause),
            onResume: Rn(e.onResume),
            onSwipeStart: ge(e.onSwipeStart, c => {
                c.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ge(e.onSwipeMove, c => {
                const {x: u, y: p} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "move"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
            }
            ),
            onSwipeCancel: ge(e.onSwipeCancel, c => {
                c.currentTarget.setAttribute("data-swipe", "cancel"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ge(e.onSwipeEnd, c => {
                const {x: u, y: p} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "end"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`),
                l(!1)
            }
            )
        })
    })
}
);
Wm.displayName = ia;
var [_g,Bg] = Hm(ia, {
    onClose() {}
})
  , jg = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: o="foreground", duration: r, open: a, onClose: s, onEscapeKeyDown: i, onPause: l, onResume: c, onSwipeStart: u, onSwipeMove: p, onSwipeCancel: m, onSwipeEnd: d, ...S} = e
      , g = Vs(ia, n)
      , [y,h] = w.useState(null)
      , f = St(t, _ => h(_))
      , v = w.useRef(null)
      , C = w.useRef(null)
      , E = r || g.duration
      , b = w.useRef(0)
      , k = w.useRef(E)
      , T = w.useRef(0)
      , {onToastAdd: F, onToastRemove: L} = g
      , I = Rn( () => {
        var Y;
        (y == null ? void 0 : y.contains(document.activeElement)) && ((Y = g.viewport) == null || Y.focus()),
        s()
    }
    )
      , O = w.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(T.current),
        b.current = new Date().getTime(),
        T.current = window.setTimeout(I, _))
    }
    , [I]);
    w.useEffect( () => {
        const _ = g.viewport;
        if (_) {
            const Y = () => {
                O(k.current),
                c == null || c()
            }
              , z = () => {
                const Q = new Date().getTime() - b.current;
                k.current = k.current - Q,
                window.clearTimeout(T.current),
                l == null || l()
            }
            ;
            return _.addEventListener(_l, z),
            _.addEventListener(Bl, Y),
            () => {
                _.removeEventListener(_l, z),
                _.removeEventListener(Bl, Y)
            }
        }
    }
    , [g.viewport, E, l, c, O]),
    w.useEffect( () => {
        a && !g.isClosePausedRef.current && O(E)
    }
    , [a, E, g.isClosePausedRef, O]),
    w.useEffect( () => (F(),
    () => L()), [F, L]);
    const W = w.useMemo( () => y ? Jm(y) : null, [y]);
    return g.viewport ? x.jsxs(x.Fragment, {
        children: [W && x.jsx(Og, {
            __scopeToast: n,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), x.jsx(_g, {
            scope: n,
            onClose: I,
            children: sa.createPortal(x.jsx(Wc.ItemSlot, {
                scope: n,
                children: x.jsx(fg, {
                    asChild: !0,
                    onEscapeKeyDown: ge(i, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || I(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: x.jsx(Ue.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...S,
                        ref: f,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ge(e.onKeyDown, _ => {
                            _.key === "Escape" && (i == null || i(_.nativeEvent),
                            _.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            I()))
                        }
                        ),
                        onPointerDown: ge(e.onPointerDown, _ => {
                            _.button === 0 && (v.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }
                        ),
                        onPointerMove: ge(e.onPointerMove, _ => {
                            if (!v.current)
                                return;
                            const Y = _.clientX - v.current.x
                              , z = _.clientY - v.current.y
                              , Q = !!C.current
                              , P = ["left", "right"].includes(g.swipeDirection)
                              , A = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , B = P ? A(0, Y) : 0
                              , U = P ? 0 : A(0, z)
                              , M = _.pointerType === "touch" ? 10 : 2
                              , K = {
                                x: B,
                                y: U
                            }
                              , G = {
                                originalEvent: _,
                                delta: K
                            };
                            Q ? (C.current = K,
                            Da(Dg, p, G, {
                                discrete: !1
                            })) : Td(K, g.swipeDirection, M) ? (C.current = K,
                            Da(Rg, u, G, {
                                discrete: !1
                            }),
                            _.target.setPointerCapture(_.pointerId)) : (Math.abs(Y) > M || Math.abs(z) > M) && (v.current = null)
                        }
                        ),
                        onPointerUp: ge(e.onPointerUp, _ => {
                            const Y = C.current
                              , z = _.target;
                            if (z.hasPointerCapture(_.pointerId) && z.releasePointerCapture(_.pointerId),
                            C.current = null,
                            v.current = null,
                            Y) {
                                const Q = _.currentTarget
                                  , P = {
                                    originalEvent: _,
                                    delta: Y
                                };
                                Td(Y, g.swipeDirection, g.swipeThreshold) ? Da(Fg, d, P, {
                                    discrete: !0
                                }) : Da(Lg, m, P, {
                                    discrete: !0
                                }),
                                Q.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , Og = e => {
    const {__scopeToast: t, children: n, ...o} = e
      , r = Vs(ia, t)
      , [a,s] = w.useState(!1)
      , [i,l] = w.useState(!1);
    return zg( () => s(!0)),
    w.useEffect( () => {
        const c = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(c)
    }
    , []),
    i ? null : x.jsx(zm, {
        asChild: !0,
        children: x.jsx(Us, {
            ...o,
            children: a && x.jsxs(x.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}
  , Mg = "ToastTitle"
  , Km = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...o} = e;
    return x.jsx(Ue.div, {
        ...o,
        ref: t
    })
}
);
Km.displayName = Mg;
var Ig = "ToastDescription"
  , Zm = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...o} = e;
    return x.jsx(Ue.div, {
        ...o,
        ref: t
    })
}
);
Zm.displayName = Ig;
var Ym = "ToastAction"
  , Gm = w.forwardRef( (e, t) => {
    const {altText: n, ...o} = e;
    return n.trim() ? x.jsx(qm, {
        altText: n,
        asChild: !0,
        children: x.jsx(Kc, {
            ...o,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ym}\`. Expected non-empty \`string\`.`),
    null)
}
);
Gm.displayName = Ym;
var Xm = "ToastClose"
  , Kc = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...o} = e
      , r = Bg(Xm, n);
    return x.jsx(qm, {
        asChild: !0,
        children: x.jsx(Ue.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: ge(e.onClick, r.onClose)
        })
    })
}
);
Kc.displayName = Xm;
var qm = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: o, ...r} = e;
    return x.jsx(Ue.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...r,
        ref: t
    })
}
);
function Jm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent),
        Hg(o)) {
            const r = o.ariaHidden || o.hidden || o.style.display === "none"
              , a = o.dataset.radixToastAnnounceExclude === "";
            if (!r)
                if (a) {
                    const s = o.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Jm(o))
        }
    }
    ),
    t
}
function Da(e, t, n, {discrete: o}) {
    const r = n.originalEvent.currentTarget
      , a = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    o ? jm(r, a) : r.dispatchEvent(a)
}
var Td = (e, t, n=0) => {
    const o = Math.abs(e.x)
      , r = Math.abs(e.y)
      , a = o > r;
    return t === "left" || t === "right" ? a && o > n : !a && r > n
}
;
function zg(e= () => {}
) {
    const t = Rn(e);
    Dn( () => {
        let n = 0
          , o = 0;
        return n = window.requestAnimationFrame( () => o = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(o)
        }
    }
    , [t])
}
function Hg(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function $g(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: o => {
            const r = o.tagName === "INPUT" && o.type === "hidden";
            return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Bi(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Qg = $m
  , eh = Um
  , th = Wm
  , nh = Km
  , oh = Zm
  , rh = Gm
  , ah = Kc;
function sh(e) {
    var t, n, o = "";
    if (typeof e == "string" || typeof e == "number")
        o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var r = e.length;
            for (t = 0; t < r; t++)
                e[t] && (n = sh(e[t])) && (o && (o += " "),
                o += n)
        } else
            for (n in e)
                e[n] && (o && (o += " "),
                o += n);
    return o
}
function ih() {
    for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
        (e = arguments[n]) && (t = sh(e)) && (o && (o += " "),
        o += t);
    return o
}
const Rd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Dd = ih
  , Ug = (e, t) => n => {
    var o;
    if ((t == null ? void 0 : t.variants) == null)
        return Dd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: r, defaultVariants: a} = t
      , s = Object.keys(r).map(c => {
        const u = n == null ? void 0 : n[c]
          , p = a == null ? void 0 : a[c];
        if (u === null)
            return null;
        const m = Rd(u) || Rd(p);
        return r[c][m]
    }
    )
      , i = n && Object.entries(n).reduce( (c, u) => {
        let[p,m] = u;
        return m === void 0 || (c[p] = m),
        c
    }
    , {})
      , l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (c, u) => {
        let {class: p, className: m, ...d} = u;
        return Object.entries(d).every(S => {
            let[g,y] = S;
            return Array.isArray(y) ? y.includes({
                ...a,
                ...i
            }[g]) : {
                ...a,
                ...i
            }[g] === y
        }
        ) ? [...c, p, m] : c
    }
    , []);
    return Dd(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , lh = (...e) => e.filter( (t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: o, className: r="", children: a, iconNode: s, ...i}, l) => w.createElement("svg", {
    ref: l,
    ...Wg,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: o ? Number(n) * 24 / Number(t) : n,
    className: lh("lucide", r),
    ...i
}, [...s.map( ([c,u]) => w.createElement(c, u)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = (e, t) => {
    const n = w.forwardRef( ({className: o, ...r}, a) => w.createElement(Kg, {
        ref: a,
        iconNode: t,
        className: lh(`lucide-${Vg(e)}`, o),
        ...r
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = Zc("BadgeCheck", [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = Zc("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = Zc("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Gc = "-"
  , Yg = e => {
    const t = Xg(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: o} = e;
    return {
        getClassGroupId: s => {
            const i = s.split(Gc);
            return i[0] === "" && i.length !== 1 && i.shift(),
            uh(i, t) || Gg(s)
        }
        ,
        getConflictingClassGroupIds: (s, i) => {
            const l = n[s] || [];
            return i && o[s] ? [...l, ...o[s]] : l
        }
    }
}
  , uh = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , o = t.nextPart.get(n)
      , r = o ? uh(e.slice(1), o) : void 0;
    if (r)
        return r;
    if (t.validators.length === 0)
        return;
    const a = e.join(Gc);
    return (s = t.validators.find( ({validator: i}) => i(a))) == null ? void 0 : s.classGroupId
}
  , Ld = /^\[(.+)\]$/
  , Gg = e => {
    if (Ld.test(e)) {
        const t = Ld.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Xg = e => {
    const {theme: t, prefix: n} = e
      , o = {
        nextPart: new Map,
        validators: []
    };
    return Jg(Object.entries(e.classGroups), n).forEach( ([a,s]) => {
        Ol(s, o, a, t)
    }
    ),
    o
}
  , Ol = (e, t, n, o) => {
    e.forEach(r => {
        if (typeof r == "string") {
            const a = r === "" ? t : Fd(t, r);
            a.classGroupId = n;
            return
        }
        if (typeof r == "function") {
            if (qg(r)) {
                Ol(r(o), t, n, o);
                return
            }
            t.validators.push({
                validator: r,
                classGroupId: n
            });
            return
        }
        Object.entries(r).forEach( ([a,s]) => {
            Ol(s, Fd(t, a), n, o)
        }
        )
    }
    )
}
  , Fd = (e, t) => {
    let n = e;
    return t.split(Gc).forEach(o => {
        n.nextPart.has(o) || n.nextPart.set(o, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(o)
    }
    ),
    n
}
  , qg = e => e.isThemeGetter
  , Jg = (e, t) => t ? e.map( ([n,o]) => {
    const r = o.map(a => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map( ([s,i]) => [t + s, i])) : a);
    return [n, r]
}
) : e
  , ey = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , o = new Map;
    const r = (a, s) => {
        n.set(a, s),
        t++,
        t > e && (t = 0,
        o = n,
        n = new Map)
    }
    ;
    return {
        get(a) {
            let s = n.get(a);
            if (s !== void 0)
                return s;
            if ((s = o.get(a)) !== void 0)
                return r(a, s),
                s
        },
        set(a, s) {
            n.has(a) ? n.set(a, s) : r(a, s)
        }
    }
}
  , dh = "!"
  , ty = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , o = t.length === 1
      , r = t[0]
      , a = t.length
      , s = i => {
        const l = [];
        let c = 0, u = 0, p;
        for (let y = 0; y < i.length; y++) {
            let h = i[y];
            if (c === 0) {
                if (h === r && (o || i.slice(y, y + a) === t)) {
                    l.push(i.slice(u, y)),
                    u = y + a;
                    continue
                }
                if (h === "/") {
                    p = y;
                    continue
                }
            }
            h === "[" ? c++ : h === "]" && c--
        }
        const m = l.length === 0 ? i : i.substring(u)
          , d = m.startsWith(dh)
          , S = d ? m.substring(1) : m
          , g = p && p > u ? p - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: d,
            baseClassName: S,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? i => n({
        className: i,
        parseClassName: s
    }) : s
}
  , ny = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(o => {
        o[0] === "[" ? (t.push(...n.sort(), o),
        n = []) : n.push(o)
    }
    ),
    t.push(...n.sort()),
    t
}
  , oy = e => ({
    cache: ey(e.cacheSize),
    parseClassName: ty(e),
    ...Yg(e)
})
  , ry = /\s+/
  , ay = (e, t) => {
    const {parseClassName: n, getClassGroupId: o, getConflictingClassGroupIds: r} = t
      , a = []
      , s = e.trim().split(ry);
    let i = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const c = s[l]
          , {modifiers: u, hasImportantModifier: p, baseClassName: m, maybePostfixModifierPosition: d} = n(c);
        let S = !!d
          , g = o(S ? m.substring(0, d) : m);
        if (!g) {
            if (!S) {
                i = c + (i.length > 0 ? " " + i : i);
                continue
            }
            if (g = o(m),
            !g) {
                i = c + (i.length > 0 ? " " + i : i);
                continue
            }
            S = !1
        }
        const y = ny(u).join(":")
          , h = p ? y + dh : y
          , f = h + g;
        if (a.includes(f))
            continue;
        a.push(f);
        const v = r(g, S);
        for (let C = 0; C < v.length; ++C) {
            const E = v[C];
            a.push(h + E)
        }
        i = c + (i.length > 0 ? " " + i : i)
    }
    return i
}
;
function sy() {
    let e = 0, t, n, o = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = ph(t)) && (o && (o += " "),
        o += n);
    return o
}
const ph = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let o = 0; o < e.length; o++)
        e[o] && (t = ph(e[o])) && (n && (n += " "),
        n += t);
    return n
}
;
function iy(e, ...t) {
    let n, o, r, a = s;
    function s(l) {
        const c = t.reduce( (u, p) => p(u), e());
        return n = oy(c),
        o = n.cache.get,
        r = n.cache.set,
        a = i,
        i(l)
    }
    function i(l) {
        const c = o(l);
        if (c)
            return c;
        const u = ay(l, n);
        return r(l, u),
        u
    }
    return function() {
        return a(sy.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , fh = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , ly = /^\d+\/\d+$/
  , cy = new Set(["px", "full", "screen"])
  , uy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , dy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , py = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , fy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , my = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , jt = e => _o(e) || cy.has(e) || ly.test(e)
  , rn = e => or(e, "length", Cy)
  , _o = e => !!e && !Number.isNaN(Number(e))
  , ji = e => or(e, "number", _o)
  , vr = e => !!e && Number.isInteger(Number(e))
  , hy = e => e.endsWith("%") && _o(e.slice(0, -1))
  , V = e => fh.test(e)
  , an = e => uy.test(e)
  , vy = new Set(["length", "size", "percentage"])
  , gy = e => or(e, vy, mh)
  , yy = e => or(e, "position", mh)
  , xy = new Set(["image", "url"])
  , wy = e => or(e, xy, by)
  , Sy = e => or(e, "", Ey)
  , gr = () => !0
  , or = (e, t, n) => {
    const o = fh.exec(e);
    return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1
}
  , Cy = e => dy.test(e) && !py.test(e)
  , mh = () => !1
  , Ey = e => fy.test(e)
  , by = e => my.test(e)
  , ky = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , o = oe("brightness")
      , r = oe("borderColor")
      , a = oe("borderRadius")
      , s = oe("borderSpacing")
      , i = oe("borderWidth")
      , l = oe("contrast")
      , c = oe("grayscale")
      , u = oe("hueRotate")
      , p = oe("invert")
      , m = oe("gap")
      , d = oe("gradientColorStops")
      , S = oe("gradientColorStopPositions")
      , g = oe("inset")
      , y = oe("margin")
      , h = oe("opacity")
      , f = oe("padding")
      , v = oe("saturate")
      , C = oe("scale")
      , E = oe("sepia")
      , b = oe("skew")
      , k = oe("space")
      , T = oe("translate")
      , F = () => ["auto", "contain", "none"]
      , L = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , I = () => ["auto", V, t]
      , O = () => [V, t]
      , W = () => ["", jt, rn]
      , _ = () => ["auto", _o, V]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , z = () => ["solid", "dashed", "dotted", "double", "none"]
      , Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", V]
      , B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [_o, V];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [gr],
            spacing: [jt, rn],
            blur: ["none", "", an, V],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", an, V],
            borderSpacing: O(),
            borderWidth: W(),
            contrast: U(),
            grayscale: A(),
            hueRotate: U(),
            invert: A(),
            gap: O(),
            gradientColorStops: [e],
            gradientColorStopPositions: [hy, rn],
            inset: I(),
            margin: I(),
            opacity: U(),
            padding: O(),
            saturate: U(),
            scale: U(),
            sepia: A(),
            skew: U(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", V]
            }],
            container: ["container"],
            columns: [{
                columns: [an]
            }],
            "break-after": [{
                "break-after": B()
            }],
            "break-before": [{
                "break-before": B()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), V]
            }],
            overflow: [{
                overflow: L()
            }],
            "overflow-x": [{
                "overflow-x": L()
            }],
            "overflow-y": [{
                "overflow-y": L()
            }],
            overscroll: [{
                overscroll: F()
            }],
            "overscroll-x": [{
                "overscroll-x": F()
            }],
            "overscroll-y": [{
                "overscroll-y": F()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", vr, V]
            }],
            basis: [{
                basis: I()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", V]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", vr, V]
            }],
            "grid-cols": [{
                "grid-cols": [gr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", vr, V]
                }, V]
            }],
            "col-start": [{
                "col-start": _()
            }],
            "col-end": [{
                "col-end": _()
            }],
            "grid-rows": [{
                "grid-rows": [gr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [vr, V]
                }, V]
            }],
            "row-start": [{
                "row-start": _()
            }],
            "row-end": [{
                "row-end": _()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", V]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", V]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [f]
            }],
            px: [{
                px: [f]
            }],
            py: [{
                py: [f]
            }],
            ps: [{
                ps: [f]
            }],
            pe: [{
                pe: [f]
            }],
            pt: [{
                pt: [f]
            }],
            pr: [{
                pr: [f]
            }],
            pb: [{
                pb: [f]
            }],
            pl: [{
                pl: [f]
            }],
            m: [{
                m: [y]
            }],
            mx: [{
                mx: [y]
            }],
            my: [{
                my: [y]
            }],
            ms: [{
                ms: [y]
            }],
            me: [{
                me: [y]
            }],
            mt: [{
                mt: [y]
            }],
            mr: [{
                mr: [y]
            }],
            mb: [{
                mb: [y]
            }],
            ml: [{
                ml: [y]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
            }],
            "min-w": [{
                "min-w": [V, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [an]
                }, an]
            }],
            h: [{
                h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [V, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", an, rn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ji]
            }],
            "font-family": [{
                font: [gr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
            }],
            "line-clamp": [{
                "line-clamp": ["none", _o, ji]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", jt, V]
            }],
            "list-image": [{
                "list-image": ["none", V]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", V]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [h]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [h]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...z(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", jt, rn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", jt, V]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", V]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [h]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), yy]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", gy]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, wy]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [d]
            }],
            "gradient-via": [{
                via: [d]
            }],
            "gradient-to": [{
                to: [d]
            }],
            rounded: [{
                rounded: [a]
            }],
            "rounded-s": [{
                "rounded-s": [a]
            }],
            "rounded-e": [{
                "rounded-e": [a]
            }],
            "rounded-t": [{
                "rounded-t": [a]
            }],
            "rounded-r": [{
                "rounded-r": [a]
            }],
            "rounded-b": [{
                "rounded-b": [a]
            }],
            "rounded-l": [{
                "rounded-l": [a]
            }],
            "rounded-ss": [{
                "rounded-ss": [a]
            }],
            "rounded-se": [{
                "rounded-se": [a]
            }],
            "rounded-ee": [{
                "rounded-ee": [a]
            }],
            "rounded-es": [{
                "rounded-es": [a]
            }],
            "rounded-tl": [{
                "rounded-tl": [a]
            }],
            "rounded-tr": [{
                "rounded-tr": [a]
            }],
            "rounded-br": [{
                "rounded-br": [a]
            }],
            "rounded-bl": [{
                "rounded-bl": [a]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-s": [{
                "border-s": [i]
            }],
            "border-w-e": [{
                "border-e": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [h]
            }],
            "border-style": [{
                border: [...z(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [h]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [r]
            }],
            "border-color-x": [{
                "border-x": [r]
            }],
            "border-color-y": [{
                "border-y": [r]
            }],
            "border-color-s": [{
                "border-s": [r]
            }],
            "border-color-e": [{
                "border-e": [r]
            }],
            "border-color-t": [{
                "border-t": [r]
            }],
            "border-color-r": [{
                "border-r": [r]
            }],
            "border-color-b": [{
                "border-b": [r]
            }],
            "border-color-l": [{
                "border-l": [r]
            }],
            "divide-color": [{
                divide: [r]
            }],
            "outline-style": [{
                outline: ["", ...z()]
            }],
            "outline-offset": [{
                "outline-offset": [jt, V]
            }],
            "outline-w": [{
                outline: [jt, rn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [h]
            }],
            "ring-offset-w": [{
                "ring-offset": [jt, rn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", an, Sy]
            }],
            "shadow-color": [{
                shadow: [gr]
            }],
            opacity: [{
                opacity: [h]
            }],
            "mix-blend": [{
                "mix-blend": [...Q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [o]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", an, V]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [u]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [o]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [u]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [h]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", V]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", V]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [C]
            }],
            "scale-x": [{
                "scale-x": [C]
            }],
            "scale-y": [{
                "scale-y": [C]
            }],
            rotate: [{
                rotate: [vr, V]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [b]
            }],
            "skew-y": [{
                "skew-y": [b]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", V]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [jt, rn, ji]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Ny = iy(ky);
function io(...e) {
    return Ny(ih(e))
}
const Py = Qg
  , hh = w.forwardRef( ({className: e, ...t}, n) => x.jsx(eh, {
    "data-lov-id": "src/components/ui/toast.tsx:14:2",
    "data-lov-name": "ToastPrimitives.Viewport",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "14",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Viewport",
    "data-component-content": "%7B%7D",
    ref: n,
    className: io("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
hh.displayName = eh.displayName;
const Ay = Ug("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , vh = w.forwardRef( ({className: e, variant: t, ...n}, o) => x.jsx(th, {
    "data-lov-id": "src/components/ui/toast.tsx:44:9",
    "data-lov-name": "ToastPrimitives.Root",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "44",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Root",
    "data-component-content": "%7B%7D",
    ref: o,
    className: io(Ay({
        variant: t
    }), e),
    ...n
}));
vh.displayName = th.displayName;
const Ty = w.forwardRef( ({className: e, ...t}, n) => x.jsx(rh, {
    "data-lov-id": "src/components/ui/toast.tsx:52:2",
    "data-lov-name": "ToastPrimitives.Action",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "52",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Action",
    "data-component-content": "%7B%7D",
    ref: n,
    className: io("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Ty.displayName = rh.displayName;
const gh = w.forwardRef( ({className: e, ...t}, n) => x.jsx(ah, {
    "data-lov-id": "src/components/ui/toast.tsx:67:2",
    "data-lov-name": "ToastPrimitives.Close",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "67",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Close",
    "data-component-content": "%7B%7D",
    ref: n,
    className: io("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: x.jsx(Zg, {
        "data-lov-id": "src/components/ui/toast.tsx:76:4",
        "data-lov-name": "X",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "76",
        "data-component-file": "toast.tsx",
        "data-component-name": "X",
        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
        className: "h-4 w-4"
    })
}));
gh.displayName = ah.displayName;
const yh = w.forwardRef( ({className: e, ...t}, n) => x.jsx(nh, {
    "data-lov-id": "src/components/ui/toast.tsx:85:2",
    "data-lov-name": "ToastPrimitives.Title",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "85",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Title",
    "data-component-content": "%7B%7D",
    ref: n,
    className: io("text-sm font-semibold", e),
    ...t
}));
yh.displayName = nh.displayName;
const xh = w.forwardRef( ({className: e, ...t}, n) => x.jsx(oh, {
    "data-lov-id": "src/components/ui/toast.tsx:93:2",
    "data-lov-name": "ToastPrimitives.Description",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "93",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Description",
    "data-component-content": "%7B%7D",
    ref: n,
    className: io("text-sm opacity-90", e),
    ...t
}));
xh.displayName = oh.displayName;
function Ry() {
    const {toasts: e} = Fm();
    return x.jsxs(Py, {
        "data-lov-id": "src/components/ui/toaster.tsx:8:4",
        "data-lov-name": "ToastProvider",
        "data-component-path": "src/components/ui/toaster.tsx",
        "data-component-line": "8",
        "data-component-file": "toaster.tsx",
        "data-component-name": "ToastProvider",
        "data-component-content": "%7B%7D",
        children: [e.map(function({id: t, title: n, description: o, action: r, ...a}) {
            return x.jsxs(vh, {
                "data-lov-id": "src/components/ui/toaster.tsx:11:10",
                "data-lov-name": "Toast",
                "data-component-path": "src/components/ui/toaster.tsx",
                "data-component-line": "11",
                "data-component-file": "toaster.tsx",
                "data-component-name": "Toast",
                "data-component-content": "%7B%7D",
                ...a,
                children: [x.jsxs("div", {
                    "data-lov-id": "src/components/ui/toaster.tsx:12:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ui/toaster.tsx",
                    "data-component-line": "12",
                    "data-component-file": "toaster.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20gap-1%22%7D",
                    className: "grid gap-1",
                    children: [n && x.jsx(yh, {
                        "data-lov-id": "src/components/ui/toaster.tsx:13:24",
                        "data-lov-name": "ToastTitle",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "13",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "ToastTitle",
                        "data-component-content": "%7B%7D",
                        children: n
                    }), o && x.jsx(xh, {
                        "data-lov-id": "src/components/ui/toaster.tsx:14:30",
                        "data-lov-name": "ToastDescription",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "14",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "ToastDescription",
                        "data-component-content": "%7B%7D",
                        children: o
                    })]
                }), r, x.jsx(gh, {
                    "data-lov-id": "src/components/ui/toaster.tsx:17:12",
                    "data-lov-name": "ToastClose",
                    "data-component-path": "src/components/ui/toaster.tsx",
                    "data-component-line": "17",
                    "data-component-file": "toaster.tsx",
                    "data-component-name": "ToastClose",
                    "data-component-content": "%7B%7D"
                })]
            }, t)
        }), x.jsx(hh, {
            "data-lov-id": "src/components/ui/toaster.tsx:21:6",
            "data-lov-name": "ToastViewport",
            "data-component-path": "src/components/ui/toaster.tsx",
            "data-component-line": "21",
            "data-component-file": "toaster.tsx",
            "data-component-name": "ToastViewport",
            "data-component-content": "%7B%7D"
        })]
    })
}
var _d = ["light", "dark"]
  , Dy = "(prefers-color-scheme: dark)"
  , Ly = w.createContext(void 0)
  , Fy = {
    setTheme: e => {}
    ,
    themes: []
}
  , _y = () => {
    var e;
    return (e = w.useContext(Ly)) != null ? e : Fy
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: o, enableColorScheme: r, defaultTheme: a, value: s, attrs: i, nonce: l}) => {
    let c = a === "system"
      , u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , p = r ? _d.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , m = (S, g=!1, y=!0) => {
        let h = s ? s[S] : S
          , f = g ? S + "|| ''" : `'${h}'`
          , v = "";
        return r && y && !g && _d.includes(S) && (v += `d.style.colorScheme = '${S}';`),
        n === "class" ? g || h ? v += `c.add(${f})` : v += "null" : h && (v += `d[s](n,${f})`),
        v
    }
      , d = e ? `!function(){${u}${m(e)}}()` : o ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${Dy}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + m(a, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${m(s ? "x[e]" : "e", !0)}}else{${m(a, !1, !1)};}${p}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: d
        }
    })
}
);
var By = e => {
    switch (e) {
    case "success":
        return My;
    case "info":
        return zy;
    case "warning":
        return Iy;
    case "error":
        return Hy;
    default:
        return null
    }
}
  , jy = Array(12).fill(0)
  , Oy = ({visible: e, className: t}) => D.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, D.createElement("div", {
    className: "sonner-spinner"
}, jy.map( (n, o) => D.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${o}`
}))))
  , My = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Iy = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , zy = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Hy = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , $y = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, D.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), D.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , Qy = () => {
    let[e,t] = D.useState(document.hidden);
    return D.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Ml = 1
  , Uy = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...o} = e
              , r = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ml++
              , a = this.toasts.find(i => i.id === r)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            a ? this.toasts = this.toasts.map(i => i.id === r ? (this.publish({
                ...i,
                ...e,
                id: r,
                title: n
            }),
            {
                ...i,
                ...e,
                id: r,
                dismissible: s,
                title: n
            }) : i) : this.addToast({
                title: n,
                ...o,
                dismissible: s,
                id: r
            }),
            r
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let o = e instanceof Promise ? e : e(), r = n !== void 0, a, s = o.then(async l => {
                if (a = ["resolve", l],
                D.isValidElement(l))
                    r = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (Wy(l) && !l.ok) {
                    r = !1;
                    let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , u = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: c,
                        description: u
                    })
                } else if (t.success !== void 0) {
                    r = !1;
                    let c = typeof t.success == "function" ? await t.success(l) : t.success
                      , u = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: c,
                        description: u
                    })
                }
            }
            ).catch(async l => {
                if (a = ["reject", l],
                t.error !== void 0) {
                    r = !1;
                    let c = typeof t.error == "function" ? await t.error(l) : t.error
                      , u = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: c,
                        description: u
                    })
                }
            }
            ).finally( () => {
                var l;
                r && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), i = () => new Promise( (l, c) => s.then( () => a[0] === "reject" ? c(a[1]) : l(a[1])).catch(c));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: i
            } : Object.assign(n, {
                unwrap: i
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Ml++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Oe = new Uy
  , Vy = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ml++;
    return Oe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Wy = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , Ky = Vy
  , Zy = () => Oe.toasts
  , Yy = () => Oe.getActiveToasts();
Object.assign(Ky, {
    success: Oe.success,
    info: Oe.info,
    warning: Oe.warning,
    error: Oe.error,
    custom: Oe.custom,
    message: Oe.message,
    promise: Oe.promise,
    dismiss: Oe.dismiss,
    loading: Oe.loading
}, {
    getHistory: Zy,
    getToasts: Yy
});
function Gy(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , o = document.createElement("style");
    o.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o),
    o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
}
Gy(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function La(e) {
    return e.label !== void 0
}
var Xy = 3
  , qy = "32px"
  , Jy = "16px"
  , Bd = 4e3
  , ex = 356
  , tx = 14
  , nx = 20
  , ox = 200;
function dt(...e) {
    return e.filter(Boolean).join(" ")
}
function rx(e) {
    let[t,n] = e.split("-")
      , o = [];
    return t && o.push(t),
    n && o.push(n),
    o
}
var ax = e => {
    var t, n, o, r, a, s, i, l, c, u, p;
    let {invert: m, toast: d, unstyled: S, interacting: g, setHeights: y, visibleToasts: h, heights: f, index: v, toasts: C, expanded: E, removeToast: b, defaultRichColors: k, closeButton: T, style: F, cancelButtonStyle: L, actionButtonStyle: I, className: O="", descriptionClassName: W="", duration: _, position: Y, gap: z, loadingIcon: Q, expandByDefault: P, classNames: A, icons: B, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: M} = e
      , [K,G] = D.useState(null)
      , [me,be] = D.useState(null)
      , [J,lo] = D.useState(!1)
      , [Xt,On] = D.useState(!1)
      , [qt,co] = D.useState(!1)
      , [Jt,ca] = D.useState(!1)
      , [ni,ua] = D.useState(!1)
      , [oi,sr] = D.useState(0)
      , [uo,cu] = D.useState(0)
      , ir = D.useRef(d.duration || _ || Bd)
      , uu = D.useRef(null)
      , Mn = D.useRef(null)
      , p0 = v === 0
      , f0 = v + 1 <= h
      , Je = d.type
      , po = d.dismissible !== !1
      , m0 = d.className || ""
      , h0 = d.descriptionClassName || ""
      , da = D.useMemo( () => f.findIndex(H => H.toastId === d.id) || 0, [f, d.id])
      , v0 = D.useMemo( () => {
        var H;
        return (H = d.closeButton) != null ? H : T
    }
    , [d.closeButton, T])
      , du = D.useMemo( () => d.duration || _ || Bd, [d.duration, _])
      , ri = D.useRef(0)
      , fo = D.useRef(0)
      , pu = D.useRef(0)
      , mo = D.useRef(null)
      , [g0,y0] = Y.split("-")
      , fu = D.useMemo( () => f.reduce( (H, te, se) => se >= da ? H : H + te.height, 0), [f, da])
      , mu = Qy()
      , x0 = d.invert || m
      , ai = Je === "loading";
    fo.current = D.useMemo( () => da * z + fu, [da, fu]),
    D.useEffect( () => {
        ir.current = du
    }
    , [du]),
    D.useEffect( () => {
        lo(!0)
    }
    , []),
    D.useEffect( () => {
        let H = Mn.current;
        if (H) {
            let te = H.getBoundingClientRect().height;
            return cu(te),
            y(se => [{
                toastId: d.id,
                height: te,
                position: d.position
            }, ...se]),
            () => y(se => se.filter(it => it.toastId !== d.id))
        }
    }
    , [y, d.id]),
    D.useLayoutEffect( () => {
        if (!J)
            return;
        let H = Mn.current
          , te = H.style.height;
        H.style.height = "auto";
        let se = H.getBoundingClientRect().height;
        H.style.height = te,
        cu(se),
        y(it => it.find(lt => lt.toastId === d.id) ? it.map(lt => lt.toastId === d.id ? {
            ...lt,
            height: se
        } : lt) : [{
            toastId: d.id,
            height: se,
            position: d.position
        }, ...it])
    }
    , [J, d.title, d.description, y, d.id]);
    let en = D.useCallback( () => {
        On(!0),
        sr(fo.current),
        y(H => H.filter(te => te.toastId !== d.id)),
        setTimeout( () => {
            b(d)
        }
        , ox)
    }
    , [d, b, y, fo]);
    D.useEffect( () => {
        if (d.promise && Je === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let H;
        return E || g || M && mu ? ( () => {
            if (pu.current < ri.current) {
                let te = new Date().getTime() - ri.current;
                ir.current = ir.current - te
            }
            pu.current = new Date().getTime()
        }
        )() : ir.current !== 1 / 0 && (ri.current = new Date().getTime(),
        H = setTimeout( () => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d),
            en()
        }
        , ir.current)),
        () => clearTimeout(H)
    }
    , [E, g, d, Je, M, mu, en]),
    D.useEffect( () => {
        d.delete && en()
    }
    , [en, d.delete]);
    function w0() {
        var H, te, se;
        return B != null && B.loading ? D.createElement("div", {
            className: dt(A == null ? void 0 : A.loader, (H = d == null ? void 0 : d.classNames) == null ? void 0 : H.loader, "sonner-loader"),
            "data-visible": Je === "loading"
        }, B.loading) : Q ? D.createElement("div", {
            className: dt(A == null ? void 0 : A.loader, (te = d == null ? void 0 : d.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": Je === "loading"
        }, Q) : D.createElement(Oy, {
            className: dt(A == null ? void 0 : A.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader),
            visible: Je === "loading"
        })
    }
    return D.createElement("li", {
        tabIndex: 0,
        ref: Mn,
        className: dt(O, m0, A == null ? void 0 : A.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[Je], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Je]),
        "data-sonner-toast": "",
        "data-rich-colors": (o = d.richColors) != null ? o : k,
        "data-styled": !(d.jsx || d.unstyled || S),
        "data-mounted": J,
        "data-promise": !!d.promise,
        "data-swiped": ni,
        "data-removed": Xt,
        "data-visible": f0,
        "data-y-position": g0,
        "data-x-position": y0,
        "data-index": v,
        "data-front": p0,
        "data-swiping": qt,
        "data-dismissible": po,
        "data-type": Je,
        "data-invert": x0,
        "data-swipe-out": Jt,
        "data-swipe-direction": me,
        "data-expanded": !!(E || P && J),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": C.length - v,
            "--offset": `${Xt ? oi : fo.current}px`,
            "--initial-height": P ? "auto" : `${uo}px`,
            ...F,
            ...d.style
        },
        onDragEnd: () => {
            co(!1),
            G(null),
            mo.current = null
        }
        ,
        onPointerDown: H => {
            ai || !po || (uu.current = new Date,
            sr(fo.current),
            H.target.setPointerCapture(H.pointerId),
            H.target.tagName !== "BUTTON" && (co(!0),
            mo.current = {
                x: H.clientX,
                y: H.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var H, te, se, it;
            if (Jt || !po)
                return;
            mo.current = null;
            let lt = Number(((H = Mn.current) == null ? void 0 : H.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , tn = Number(((te = Mn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , In = new Date().getTime() - ((se = uu.current) == null ? void 0 : se.getTime())
              , ct = K === "x" ? lt : tn
              , nn = Math.abs(ct) / In;
            if (Math.abs(ct) >= nx || nn > .11) {
                sr(fo.current),
                (it = d.onDismiss) == null || it.call(d, d),
                be(K === "x" ? lt > 0 ? "right" : "left" : tn > 0 ? "down" : "up"),
                en(),
                ca(!0),
                ua(!1);
                return
            }
            co(!1),
            G(null)
        }
        ,
        onPointerMove: H => {
            var te, se, it, lt;
            if (!mo.current || !po || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let tn = H.clientY - mo.current.y
              , In = H.clientX - mo.current.x
              , ct = (se = e.swipeDirections) != null ? se : rx(Y);
            !K && (Math.abs(In) > 1 || Math.abs(tn) > 1) && G(Math.abs(In) > Math.abs(tn) ? "x" : "y");
            let nn = {
                x: 0,
                y: 0
            };
            K === "y" ? (ct.includes("top") || ct.includes("bottom")) && (ct.includes("top") && tn < 0 || ct.includes("bottom") && tn > 0) && (nn.y = tn) : K === "x" && (ct.includes("left") || ct.includes("right")) && (ct.includes("left") && In < 0 || ct.includes("right") && In > 0) && (nn.x = In),
            (Math.abs(nn.x) > 0 || Math.abs(nn.y) > 0) && ua(!0),
            (it = Mn.current) == null || it.style.setProperty("--swipe-amount-x", `${nn.x}px`),
            (lt = Mn.current) == null || lt.style.setProperty("--swipe-amount-y", `${nn.y}px`)
        }
    }, v0 && !d.jsx ? D.createElement("button", {
        "aria-label": U,
        "data-disabled": ai,
        "data-close-button": !0,
        onClick: ai || !po ? () => {}
        : () => {
            var H;
            en(),
            (H = d.onDismiss) == null || H.call(d, d)
        }
        ,
        className: dt(A == null ? void 0 : A.closeButton, (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.closeButton)
    }, (a = B == null ? void 0 : B.close) != null ? a : $y) : null, d.jsx || w.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : D.createElement(D.Fragment, null, Je || d.icon || d.promise ? D.createElement("div", {
        "data-icon": "",
        className: dt(A == null ? void 0 : A.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || w0() : null, d.type !== "loading" ? d.icon || (B == null ? void 0 : B[Je]) || By(Je) : null) : null, D.createElement("div", {
        "data-content": "",
        className: dt(A == null ? void 0 : A.content, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.content)
    }, D.createElement("div", {
        "data-title": "",
        className: dt(A == null ? void 0 : A.title, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? D.createElement("div", {
        "data-description": "",
        className: dt(W, h0, A == null ? void 0 : A.description, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), w.isValidElement(d.cancel) ? d.cancel : d.cancel && La(d.cancel) ? D.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || L,
        onClick: H => {
            var te, se;
            La(d.cancel) && po && ((se = (te = d.cancel).onClick) == null || se.call(te, H),
            en())
        }
        ,
        className: dt(A == null ? void 0 : A.cancelButton, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.cancelButton)
    }, d.cancel.label) : null, w.isValidElement(d.action) ? d.action : d.action && La(d.action) ? D.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || I,
        onClick: H => {
            var te, se;
            La(d.action) && ((se = (te = d.action).onClick) == null || se.call(te, H),
            !H.defaultPrevented && en())
        }
        ,
        className: dt(A == null ? void 0 : A.actionButton, (p = d == null ? void 0 : d.classNames) == null ? void 0 : p.actionButton)
    }, d.action.label) : null))
}
;
function jd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function sx(e, t) {
    let n = {};
    return [e, t].forEach( (o, r) => {
        let a = r === 1
          , s = a ? "--mobile-offset" : "--offset"
          , i = a ? Jy : qy;
        function l(c) {
            ["top", "right", "bottom", "left"].forEach(u => {
                n[`${s}-${u}`] = typeof c == "number" ? `${c}px` : c
            }
            )
        }
        typeof o == "number" || typeof o == "string" ? l(o) : typeof o == "object" ? ["top", "right", "bottom", "left"].forEach(c => {
            o[c] === void 0 ? n[`${s}-${c}`] = i : n[`${s}-${c}`] = typeof o[c] == "number" ? `${o[c]}px` : o[c]
        }
        ) : l(i)
    }
    ),
    n
}
var ix = w.forwardRef(function(e, t) {
    let {invert: n, position: o="bottom-right", hotkey: r=["altKey", "KeyT"], expand: a, closeButton: s, className: i, offset: l, mobileOffset: c, theme: u="light", richColors: p, duration: m, style: d, visibleToasts: S=Xy, toastOptions: g, dir: y=jd(), gap: h=tx, loadingIcon: f, icons: v, containerAriaLabel: C="Notifications", pauseWhenPageIsHidden: E} = e
      , [b,k] = D.useState([])
      , T = D.useMemo( () => Array.from(new Set([o].concat(b.filter(M => M.position).map(M => M.position)))), [b, o])
      , [F,L] = D.useState([])
      , [I,O] = D.useState(!1)
      , [W,_] = D.useState(!1)
      , [Y,z] = D.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , Q = D.useRef(null)
      , P = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , A = D.useRef(null)
      , B = D.useRef(!1)
      , U = D.useCallback(M => {
        k(K => {
            var G;
            return (G = K.find(me => me.id === M.id)) != null && G.delete || Oe.dismiss(M.id),
            K.filter( ({id: me}) => me !== M.id)
        }
        )
    }
    , []);
    return D.useEffect( () => Oe.subscribe(M => {
        if (M.dismiss) {
            k(K => K.map(G => G.id === M.id ? {
                ...G,
                delete: !0
            } : G));
            return
        }
        setTimeout( () => {
            Dm.flushSync( () => {
                k(K => {
                    let G = K.findIndex(me => me.id === M.id);
                    return G !== -1 ? [...K.slice(0, G), {
                        ...K[G],
                        ...M
                    }, ...K.slice(G + 1)] : [M, ...K]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    D.useEffect( () => {
        if (u !== "system") {
            z(u);
            return
        }
        if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")),
        typeof window > "u")
            return;
        let M = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            M.addEventListener("change", ({matches: K}) => {
                z(K ? "dark" : "light")
            }
            )
        } catch {
            M.addListener( ({matches: G}) => {
                try {
                    z(G ? "dark" : "light")
                } catch (me) {
                    console.error(me)
                }
            }
            )
        }
    }
    , [u]),
    D.useEffect( () => {
        b.length <= 1 && O(!1)
    }
    , [b]),
    D.useEffect( () => {
        let M = K => {
            var G, me;
            r.every(be => K[be] || K.code === be) && (O(!0),
            (G = Q.current) == null || G.focus()),
            K.code === "Escape" && (document.activeElement === Q.current || (me = Q.current) != null && me.contains(document.activeElement)) && O(!1)
        }
        ;
        return document.addEventListener("keydown", M),
        () => document.removeEventListener("keydown", M)
    }
    , [r]),
    D.useEffect( () => {
        if (Q.current)
            return () => {
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null,
                B.current = !1)
            }
    }
    , [Q.current]),
    D.createElement("section", {
        ref: t,
        "aria-label": `${C} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, T.map( (M, K) => {
        var G;
        let[me,be] = M.split("-");
        return b.length ? D.createElement("ol", {
            key: M,
            dir: y === "auto" ? jd() : y,
            tabIndex: -1,
            ref: Q,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": me,
            "data-lifted": I && b.length > 1 && !a,
            "data-x-position": be,
            style: {
                "--front-toast-height": `${((G = F[0]) == null ? void 0 : G.height) || 0}px`,
                "--width": `${ex}px`,
                "--gap": `${h}px`,
                ...d,
                ...sx(l, c)
            },
            onBlur: J => {
                B.current && !J.currentTarget.contains(J.relatedTarget) && (B.current = !1,
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || B.current || (B.current = !0,
                A.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => O(!0),
            onMouseMove: () => O(!0),
            onMouseLeave: () => {
                W || O(!1)
            }
            ,
            onDragEnd: () => O(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || _(!0)
            }
            ,
            onPointerUp: () => _(!1)
        }, b.filter(J => !J.position && K === 0 || J.position === M).map( (J, lo) => {
            var Xt, On;
            return D.createElement(ax, {
                key: J.id,
                icons: v,
                index: lo,
                toast: J,
                defaultRichColors: p,
                duration: (Xt = g == null ? void 0 : g.duration) != null ? Xt : m,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (On = g == null ? void 0 : g.closeButton) != null ? On : s,
                interacting: W,
                position: M,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: U,
                toasts: b.filter(qt => qt.position == J.position),
                heights: F.filter(qt => qt.position == J.position),
                setHeights: L,
                expandByDefault: a,
                gap: h,
                loadingIcon: f,
                expanded: I,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const lx = ({...e}) => {
    const {theme: t="system"} = _y();
    return x.jsx(ix, {
        "data-lov-id": "src/components/ui/sonner.tsx:10:4",
        "data-lov-name": "Sonner",
        "data-component-path": "src/components/ui/sonner.tsx",
        "data-component-line": "10",
        "data-component-file": "sonner.tsx",
        "data-component-name": "Sonner",
        "data-component-content": "%7B%22className%22%3A%22toaster%20group%22%7D",
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , cx = ["top", "right", "bottom", "left"]
  , Ln = Math.min
  , We = Math.max
  , ws = Math.round
  , Fa = Math.floor
  , Ft = e => ({
    x: e,
    y: e
})
  , ux = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , dx = {
    start: "end",
    end: "start"
};
function Il(e, t, n) {
    return We(e, Ln(t, n))
}
function Zt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Yt(e) {
    return e.split("-")[0]
}
function rr(e) {
    return e.split("-")[1]
}
function Xc(e) {
    return e === "x" ? "y" : "x"
}
function qc(e) {
    return e === "y" ? "height" : "width"
}
const px = new Set(["top", "bottom"]);
function Rt(e) {
    return px.has(Yt(e)) ? "y" : "x"
}
function Jc(e) {
    return Xc(Rt(e))
}
function fx(e, t, n) {
    n === void 0 && (n = !1);
    const o = rr(e)
      , r = Jc(e)
      , a = qc(r);
    let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (s = Ss(s)),
    [s, Ss(s)]
}
function mx(e) {
    const t = Ss(e);
    return [zl(e), t, zl(t)]
}
function zl(e) {
    return e.replace(/start|end/g, t => dx[t])
}
const Od = ["left", "right"]
  , Md = ["right", "left"]
  , hx = ["top", "bottom"]
  , vx = ["bottom", "top"];
function gx(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Md : Od : t ? Od : Md;
    case "left":
    case "right":
        return t ? hx : vx;
    default:
        return []
    }
}
function yx(e, t, n, o) {
    const r = rr(e);
    let a = gx(Yt(e), n === "start", o);
    return r && (a = a.map(s => s + "-" + r),
    t && (a = a.concat(a.map(zl)))),
    a
}
function Ss(e) {
    return e.replace(/left|right|bottom|top/g, t => ux[t])
}
function xx(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function wh(e) {
    return typeof e != "number" ? xx(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Cs(e) {
    const {x: t, y: n, width: o, height: r} = e;
    return {
        width: o,
        height: r,
        top: n,
        left: t,
        right: t + o,
        bottom: n + r,
        x: t,
        y: n
    }
}
function Id(e, t, n) {
    let {reference: o, floating: r} = e;
    const a = Rt(t)
      , s = Jc(t)
      , i = qc(s)
      , l = Yt(t)
      , c = a === "y"
      , u = o.x + o.width / 2 - r.width / 2
      , p = o.y + o.height / 2 - r.height / 2
      , m = o[i] / 2 - r[i] / 2;
    let d;
    switch (l) {
    case "top":
        d = {
            x: u,
            y: o.y - r.height
        };
        break;
    case "bottom":
        d = {
            x: u,
            y: o.y + o.height
        };
        break;
    case "right":
        d = {
            x: o.x + o.width,
            y: p
        };
        break;
    case "left":
        d = {
            x: o.x - r.width,
            y: p
        };
        break;
    default:
        d = {
            x: o.x,
            y: o.y
        }
    }
    switch (rr(t)) {
    case "start":
        d[s] -= m * (n && c ? -1 : 1);
        break;
    case "end":
        d[s] += m * (n && c ? -1 : 1);
        break
    }
    return d
}
const wx = async (e, t, n) => {
    const {placement: o="bottom", strategy: r="absolute", middleware: a=[], platform: s} = n
      , i = a.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: r
    })
      , {x: u, y: p} = Id(c, o, l)
      , m = o
      , d = {}
      , S = 0;
    for (let g = 0; g < i.length; g++) {
        const {name: y, fn: h} = i[g]
          , {x: f, y: v, data: C, reset: E} = await h({
            x: u,
            y: p,
            initialPlacement: o,
            placement: m,
            strategy: r,
            middlewareData: d,
            rects: c,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = f ?? u,
        p = v ?? p,
        d = {
            ...d,
            [y]: {
                ...d[y],
                ...C
            }
        },
        E && S <= 50 && (S++,
        typeof E == "object" && (E.placement && (m = E.placement),
        E.rects && (c = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: r
        }) : E.rects),
        {x: u, y: p} = Id(c, m, l)),
        g = -1)
    }
    return {
        x: u,
        y: p,
        placement: m,
        strategy: r,
        middlewareData: d
    }
}
;
async function Yr(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: o, y: r, platform: a, rects: s, elements: i, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: p="floating", altBoundary: m=!1, padding: d=0} = Zt(t, e)
      , S = wh(d)
      , y = i[m ? p === "floating" ? "reference" : "floating" : p]
      , h = Cs(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: l
    }))
      , f = p === "floating" ? {
        x: o,
        y: r,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating))
      , C = await (a.isElement == null ? void 0 : a.isElement(v)) ? await (a.getScale == null ? void 0 : a.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Cs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: f,
        offsetParent: v,
        strategy: l
    }) : f);
    return {
        top: (h.top - E.top + S.top) / C.y,
        bottom: (E.bottom - h.bottom + S.bottom) / C.y,
        left: (h.left - E.left + S.left) / C.x,
        right: (E.right - h.right + S.right) / C.x
    }
}
const Sx = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: o, placement: r, rects: a, platform: s, elements: i, middlewareData: l} = t
          , {element: c, padding: u=0} = Zt(e, t) || {};
        if (c == null)
            return {};
        const p = wh(u)
          , m = {
            x: n,
            y: o
        }
          , d = Jc(r)
          , S = qc(d)
          , g = await s.getDimensions(c)
          , y = d === "y"
          , h = y ? "top" : "left"
          , f = y ? "bottom" : "right"
          , v = y ? "clientHeight" : "clientWidth"
          , C = a.reference[S] + a.reference[d] - m[d] - a.floating[S]
          , E = m[d] - a.reference[d]
          , b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
        let k = b ? b[v] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(b))) && (k = i.floating[v] || a.floating[S]);
        const T = C / 2 - E / 2
          , F = k / 2 - g[S] / 2 - 1
          , L = Ln(p[h], F)
          , I = Ln(p[f], F)
          , O = L
          , W = k - g[S] - I
          , _ = k / 2 - g[S] / 2 + T
          , Y = Il(O, _, W)
          , z = !l.arrow && rr(r) != null && _ !== Y && a.reference[S] / 2 - (_ < O ? L : I) - g[S] / 2 < 0
          , Q = z ? _ < O ? _ - O : _ - W : 0;
        return {
            [d]: m[d] + Q,
            data: {
                [d]: Y,
                centerOffset: _ - Y - Q,
                ...z && {
                    alignmentOffset: Q
                }
            },
            reset: z
        }
    }
})
  , Cx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, o;
            const {placement: r, middlewareData: a, rects: s, initialPlacement: i, platform: l, elements: c} = t
              , {mainAxis: u=!0, crossAxis: p=!0, fallbackPlacements: m, fallbackStrategy: d="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: g=!0, ...y} = Zt(e, t);
            if ((n = a.arrow) != null && n.alignmentOffset)
                return {};
            const h = Yt(r)
              , f = Rt(i)
              , v = Yt(i) === i
              , C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , E = m || (v || !g ? [Ss(i)] : mx(i))
              , b = S !== "none";
            !m && b && E.push(...yx(i, g, S, C));
            const k = [i, ...E]
              , T = await Yr(t, y)
              , F = [];
            let L = ((o = a.flip) == null ? void 0 : o.overflows) || [];
            if (u && F.push(T[h]),
            p) {
                const _ = fx(r, s, C);
                F.push(T[_[0]], T[_[1]])
            }
            if (L = [...L, {
                placement: r,
                overflows: F
            }],
            !F.every(_ => _ <= 0)) {
                var I, O;
                const _ = (((I = a.flip) == null ? void 0 : I.index) || 0) + 1
                  , Y = k[_];
                if (Y && (!(p === "alignment" ? f !== Rt(Y) : !1) || L.every(P => P.overflows[0] > 0 && Rt(P.placement) === f)))
                    return {
                        data: {
                            index: _,
                            overflows: L
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let z = (O = L.filter(Q => Q.overflows[0] <= 0).sort( (Q, P) => Q.overflows[1] - P.overflows[1])[0]) == null ? void 0 : O.placement;
                if (!z)
                    switch (d) {
                    case "bestFit":
                        {
                            var W;
                            const Q = (W = L.filter(P => {
                                if (b) {
                                    const A = Rt(P.placement);
                                    return A === f || A === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(A => A > 0).reduce( (A, B) => A + B, 0)]).sort( (P, A) => P[1] - A[1])[0]) == null ? void 0 : W[0];
                            Q && (z = Q);
                            break
                        }
                    case "initialPlacement":
                        z = i;
                        break
                    }
                if (r !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function zd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Hd(e) {
    return cx.some(t => e[t] >= 0)
}
const Ex = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: o="referenceHidden", ...r} = Zt(e, t);
            switch (o) {
            case "referenceHidden":
                {
                    const a = await Yr(t, {
                        ...r,
                        elementContext: "reference"
                    })
                      , s = zd(a, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Hd(s)
                        }
                    }
                }
            case "escaped":
                {
                    const a = await Yr(t, {
                        ...r,
                        altBoundary: !0
                    })
                      , s = zd(a, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Hd(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Sh = new Set(["left", "top"]);
async function bx(e, t) {
    const {placement: n, platform: o, elements: r} = e
      , a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating))
      , s = Yt(n)
      , i = rr(n)
      , l = Rt(n) === "y"
      , c = Sh.has(s) ? -1 : 1
      , u = a && l ? -1 : 1
      , p = Zt(t, e);
    let {mainAxis: m, crossAxis: d, alignmentAxis: S} = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return i && typeof S == "number" && (d = i === "end" ? S * -1 : S),
    l ? {
        x: d * u,
        y: m * c
    } : {
        x: m * c,
        y: d * u
    }
}
const kx = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, o;
            const {x: r, y: a, placement: s, middlewareData: i} = t
              , l = await bx(t, e);
            return s === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
                x: r + l.x,
                y: a + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , Nx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: o, placement: r} = t
              , {mainAxis: a=!0, crossAxis: s=!1, limiter: i={
                fn: y => {
                    let {x: h, y: f} = y;
                    return {
                        x: h,
                        y: f
                    }
                }
            }, ...l} = Zt(e, t)
              , c = {
                x: n,
                y: o
            }
              , u = await Yr(t, l)
              , p = Rt(Yt(r))
              , m = Xc(p);
            let d = c[m]
              , S = c[p];
            if (a) {
                const y = m === "y" ? "top" : "left"
                  , h = m === "y" ? "bottom" : "right"
                  , f = d + u[y]
                  , v = d - u[h];
                d = Il(f, d, v)
            }
            if (s) {
                const y = p === "y" ? "top" : "left"
                  , h = p === "y" ? "bottom" : "right"
                  , f = S + u[y]
                  , v = S - u[h];
                S = Il(f, S, v)
            }
            const g = i.fn({
                ...t,
                [m]: d,
                [p]: S
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - o,
                    enabled: {
                        [m]: a,
                        [p]: s
                    }
                }
            }
        }
    }
}
  , Px = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: o, placement: r, rects: a, middlewareData: s} = t
              , {offset: i=0, mainAxis: l=!0, crossAxis: c=!0} = Zt(e, t)
              , u = {
                x: n,
                y: o
            }
              , p = Rt(r)
              , m = Xc(p);
            let d = u[m]
              , S = u[p];
            const g = Zt(i, t)
              , y = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const v = m === "y" ? "height" : "width"
                  , C = a.reference[m] - a.floating[v] + y.mainAxis
                  , E = a.reference[m] + a.reference[v] - y.mainAxis;
                d < C ? d = C : d > E && (d = E)
            }
            if (c) {
                var h, f;
                const v = m === "y" ? "width" : "height"
                  , C = Sh.has(Yt(r))
                  , E = a.reference[p] - a.floating[v] + (C && ((h = s.offset) == null ? void 0 : h[p]) || 0) + (C ? 0 : y.crossAxis)
                  , b = a.reference[p] + a.reference[v] + (C ? 0 : ((f = s.offset) == null ? void 0 : f[p]) || 0) - (C ? y.crossAxis : 0);
                S < E ? S = E : S > b && (S = b)
            }
            return {
                [m]: d,
                [p]: S
            }
        }
    }
}
  , Ax = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, o;
            const {placement: r, rects: a, platform: s, elements: i} = t
              , {apply: l= () => {}
            , ...c} = Zt(e, t)
              , u = await Yr(t, c)
              , p = Yt(r)
              , m = rr(r)
              , d = Rt(r) === "y"
              , {width: S, height: g} = a.floating;
            let y, h;
            p === "top" || p === "bottom" ? (y = p,
            h = m === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = p,
            y = m === "end" ? "top" : "bottom");
            const f = g - u.top - u.bottom
              , v = S - u.left - u.right
              , C = Ln(g - u[y], f)
              , E = Ln(S - u[h], v)
              , b = !t.middlewareData.shift;
            let k = C
              , T = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = v),
            (o = t.middlewareData.shift) != null && o.enabled.y && (k = f),
            b && !m) {
                const L = We(u.left, 0)
                  , I = We(u.right, 0)
                  , O = We(u.top, 0)
                  , W = We(u.bottom, 0);
                d ? T = S - 2 * (L !== 0 || I !== 0 ? L + I : We(u.left, u.right)) : k = g - 2 * (O !== 0 || W !== 0 ? O + W : We(u.top, u.bottom))
            }
            await l({
                ...t,
                availableWidth: T,
                availableHeight: k
            });
            const F = await s.getDimensions(i.floating);
            return S !== F.width || g !== F.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Ws() {
    return typeof window < "u"
}
function ar(e) {
    return Ch(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ye(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Bt(e) {
    var t;
    return (t = (Ch(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Ch(e) {
    return Ws() ? e instanceof Node || e instanceof Ye(e).Node : !1
}
function Ct(e) {
    return Ws() ? e instanceof Element || e instanceof Ye(e).Element : !1
}
function _t(e) {
    return Ws() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1
}
function $d(e) {
    return !Ws() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot
}
const Tx = new Set(["inline", "contents"]);
function la(e) {
    const {overflow: t, overflowX: n, overflowY: o, display: r} = Et(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Tx.has(r)
}
const Rx = new Set(["table", "td", "th"]);
function Dx(e) {
    return Rx.has(ar(e))
}
const Lx = [":popover-open", ":modal"];
function Ks(e) {
    return Lx.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const Fx = ["transform", "translate", "scale", "rotate", "perspective"]
  , _x = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Bx = ["paint", "layout", "strict", "content"];
function eu(e) {
    const t = tu()
      , n = Ct(e) ? Et(e) : e;
    return Fx.some(o => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || _x.some(o => (n.willChange || "").includes(o)) || Bx.some(o => (n.contain || "").includes(o))
}
function jx(e) {
    let t = Fn(e);
    for (; _t(t) && !qo(t); ) {
        if (eu(t))
            return t;
        if (Ks(t))
            return null;
        t = Fn(t)
    }
    return null
}
function tu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Ox = new Set(["html", "body", "#document"]);
function qo(e) {
    return Ox.has(ar(e))
}
function Et(e) {
    return Ye(e).getComputedStyle(e)
}
function Zs(e) {
    return Ct(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Fn(e) {
    if (ar(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || $d(e) && e.host || Bt(e);
    return $d(t) ? t.host : t
}
function Eh(e) {
    const t = Fn(e);
    return qo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _t(t) && la(t) ? t : Eh(t)
}
function Gr(e, t, n) {
    var o;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const r = Eh(e)
      , a = r === ((o = e.ownerDocument) == null ? void 0 : o.body)
      , s = Ye(r);
    if (a) {
        const i = Hl(s);
        return t.concat(s, s.visualViewport || [], la(r) ? r : [], i && n ? Gr(i) : [])
    }
    return t.concat(r, Gr(r, [], n))
}
function Hl(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function bh(e) {
    const t = Et(e);
    let n = parseFloat(t.width) || 0
      , o = parseFloat(t.height) || 0;
    const r = _t(e)
      , a = r ? e.offsetWidth : n
      , s = r ? e.offsetHeight : o
      , i = ws(n) !== a || ws(o) !== s;
    return i && (n = a,
    o = s),
    {
        width: n,
        height: o,
        $: i
    }
}
function nu(e) {
    return Ct(e) ? e : e.contextElement
}
function Bo(e) {
    const t = nu(e);
    if (!_t(t))
        return Ft(1);
    const n = t.getBoundingClientRect()
      , {width: o, height: r, $: a} = bh(t);
    let s = (a ? ws(n.width) : n.width) / o
      , i = (a ? ws(n.height) : n.height) / r;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    {
        x: s,
        y: i
    }
}
const Mx = Ft(0);
function kh(e) {
    const t = Ye(e);
    return !tu() || !t.visualViewport ? Mx : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Ix(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ye(e) ? !1 : t
}
function ro(e, t, n, o) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , a = nu(e);
    let s = Ft(1);
    t && (o ? Ct(o) && (s = Bo(o)) : s = Bo(e));
    const i = Ix(a, n, o) ? kh(a) : Ft(0);
    let l = (r.left + i.x) / s.x
      , c = (r.top + i.y) / s.y
      , u = r.width / s.x
      , p = r.height / s.y;
    if (a) {
        const m = Ye(a)
          , d = o && Ct(o) ? Ye(o) : o;
        let S = m
          , g = Hl(S);
        for (; g && o && d !== S; ) {
            const y = Bo(g)
              , h = g.getBoundingClientRect()
              , f = Et(g)
              , v = h.left + (g.clientLeft + parseFloat(f.paddingLeft)) * y.x
              , C = h.top + (g.clientTop + parseFloat(f.paddingTop)) * y.y;
            l *= y.x,
            c *= y.y,
            u *= y.x,
            p *= y.y,
            l += v,
            c += C,
            S = Ye(g),
            g = Hl(S)
        }
    }
    return Cs({
        width: u,
        height: p,
        x: l,
        y: c
    })
}
function ou(e, t) {
    const n = Zs(e).scrollLeft;
    return t ? t.left + n : ro(Bt(e)).left + n
}
function Nh(e, t, n) {
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , r = o.left + t.scrollLeft - (n ? 0 : ou(e, o))
      , a = o.top + t.scrollTop;
    return {
        x: r,
        y: a
    }
}
function zx(e) {
    let {elements: t, rect: n, offsetParent: o, strategy: r} = e;
    const a = r === "fixed"
      , s = Bt(o)
      , i = t ? Ks(t.floating) : !1;
    if (o === s || i && a)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = Ft(1);
    const u = Ft(0)
      , p = _t(o);
    if ((p || !p && !a) && ((ar(o) !== "body" || la(s)) && (l = Zs(o)),
    _t(o))) {
        const d = ro(o);
        c = Bo(o),
        u.x = d.x + o.clientLeft,
        u.y = d.y + o.clientTop
    }
    const m = s && !p && !a ? Nh(s, l, !0) : Ft(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + u.x + m.x,
        y: n.y * c.y - l.scrollTop * c.y + u.y + m.y
    }
}
function Hx(e) {
    return Array.from(e.getClientRects())
}
function $x(e) {
    const t = Bt(e)
      , n = Zs(e)
      , o = e.ownerDocument.body
      , r = We(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth)
      , a = We(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
    let s = -n.scrollLeft + ou(e);
    const i = -n.scrollTop;
    return Et(o).direction === "rtl" && (s += We(t.clientWidth, o.clientWidth) - r),
    {
        width: r,
        height: a,
        x: s,
        y: i
    }
}
function Qx(e, t) {
    const n = Ye(e)
      , o = Bt(e)
      , r = n.visualViewport;
    let a = o.clientWidth
      , s = o.clientHeight
      , i = 0
      , l = 0;
    if (r) {
        a = r.width,
        s = r.height;
        const c = tu();
        (!c || c && t === "fixed") && (i = r.offsetLeft,
        l = r.offsetTop)
    }
    return {
        width: a,
        height: s,
        x: i,
        y: l
    }
}
const Ux = new Set(["absolute", "fixed"]);
function Vx(e, t) {
    const n = ro(e, !0, t === "fixed")
      , o = n.top + e.clientTop
      , r = n.left + e.clientLeft
      , a = _t(e) ? Bo(e) : Ft(1)
      , s = e.clientWidth * a.x
      , i = e.clientHeight * a.y
      , l = r * a.x
      , c = o * a.y;
    return {
        width: s,
        height: i,
        x: l,
        y: c
    }
}
function Qd(e, t, n) {
    let o;
    if (t === "viewport")
        o = Qx(e, n);
    else if (t === "document")
        o = $x(Bt(e));
    else if (Ct(t))
        o = Vx(t, n);
    else {
        const r = kh(e);
        o = {
            x: t.x - r.x,
            y: t.y - r.y,
            width: t.width,
            height: t.height
        }
    }
    return Cs(o)
}
function Ph(e, t) {
    const n = Fn(e);
    return n === t || !Ct(n) || qo(n) ? !1 : Et(n).position === "fixed" || Ph(n, t)
}
function Wx(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let o = Gr(e, [], !1).filter(i => Ct(i) && ar(i) !== "body")
      , r = null;
    const a = Et(e).position === "fixed";
    let s = a ? Fn(e) : e;
    for (; Ct(s) && !qo(s); ) {
        const i = Et(s)
          , l = eu(s);
        !l && i.position === "fixed" && (r = null),
        (a ? !l && !r : !l && i.position === "static" && !!r && Ux.has(r.position) || la(s) && !l && Ph(e, s)) ? o = o.filter(u => u !== s) : r = i,
        s = Fn(s)
    }
    return t.set(e, o),
    o
}
function Kx(e) {
    let {element: t, boundary: n, rootBoundary: o, strategy: r} = e;
    const s = [...n === "clippingAncestors" ? Ks(t) ? [] : Wx(t, this._c) : [].concat(n), o]
      , i = s[0]
      , l = s.reduce( (c, u) => {
        const p = Qd(t, u, r);
        return c.top = We(p.top, c.top),
        c.right = Ln(p.right, c.right),
        c.bottom = Ln(p.bottom, c.bottom),
        c.left = We(p.left, c.left),
        c
    }
    , Qd(t, i, r));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function Zx(e) {
    const {width: t, height: n} = bh(e);
    return {
        width: t,
        height: n
    }
}
function Yx(e, t, n) {
    const o = _t(t)
      , r = Bt(t)
      , a = n === "fixed"
      , s = ro(e, !0, a, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Ft(0);
    function c() {
        l.x = ou(r)
    }
    if (o || !o && !a)
        if ((ar(t) !== "body" || la(r)) && (i = Zs(t)),
        o) {
            const d = ro(t, !0, a, t);
            l.x = d.x + t.clientLeft,
            l.y = d.y + t.clientTop
        } else
            r && c();
    a && !o && r && c();
    const u = r && !o && !a ? Nh(r, i) : Ft(0)
      , p = s.left + i.scrollLeft - l.x - u.x
      , m = s.top + i.scrollTop - l.y - u.y;
    return {
        x: p,
        y: m,
        width: s.width,
        height: s.height
    }
}
function Oi(e) {
    return Et(e).position === "static"
}
function Ud(e, t) {
    if (!_t(e) || Et(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Bt(e) === n && (n = n.ownerDocument.body),
    n
}
function Ah(e, t) {
    const n = Ye(e);
    if (Ks(e))
        return n;
    if (!_t(e)) {
        let r = Fn(e);
        for (; r && !qo(r); ) {
            if (Ct(r) && !Oi(r))
                return r;
            r = Fn(r)
        }
        return n
    }
    let o = Ud(e, t);
    for (; o && Dx(o) && Oi(o); )
        o = Ud(o, t);
    return o && qo(o) && Oi(o) && !eu(o) ? n : o || jx(e) || n
}
const Gx = async function(e) {
    const t = this.getOffsetParent || Ah
      , n = this.getDimensions
      , o = await n(e.floating);
    return {
        reference: Yx(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};
function Xx(e) {
    return Et(e).direction === "rtl"
}
const qx = {
    convertOffsetParentRelativeRectToViewportRelativeRect: zx,
    getDocumentElement: Bt,
    getClippingRect: Kx,
    getOffsetParent: Ah,
    getElementRects: Gx,
    getClientRects: Hx,
    getDimensions: Zx,
    getScale: Bo,
    isElement: Ct,
    isRTL: Xx
};
function Th(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function Jx(e, t) {
    let n = null, o;
    const r = Bt(e);
    function a() {
        var i;
        clearTimeout(o),
        (i = n) == null || i.disconnect(),
        n = null
    }
    function s(i, l) {
        i === void 0 && (i = !1),
        l === void 0 && (l = 1),
        a();
        const c = e.getBoundingClientRect()
          , {left: u, top: p, width: m, height: d} = c;
        if (i || t(),
        !m || !d)
            return;
        const S = Fa(p)
          , g = Fa(r.clientWidth - (u + m))
          , y = Fa(r.clientHeight - (p + d))
          , h = Fa(u)
          , v = {
            rootMargin: -S + "px " + -g + "px " + -y + "px " + -h + "px",
            threshold: We(0, Ln(1, l)) || 1
        };
        let C = !0;
        function E(b) {
            const k = b[0].intersectionRatio;
            if (k !== l) {
                if (!C)
                    return s();
                k ? s(!1, k) : o = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !Th(c, e.getBoundingClientRect()) && s(),
            C = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...v,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,v)
        }
        n.observe(e)
    }
    return s(!0),
    a
}
function e1(e, t, n, o) {
    o === void 0 && (o = {});
    const {ancestorScroll: r=!0, ancestorResize: a=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: i=typeof IntersectionObserver == "function", animationFrame: l=!1} = o
      , c = nu(e)
      , u = r || a ? [...c ? Gr(c) : [], ...Gr(t)] : [];
    u.forEach(h => {
        r && h.addEventListener("scroll", n, {
            passive: !0
        }),
        a && h.addEventListener("resize", n)
    }
    );
    const p = c && i ? Jx(c, n) : null;
    let m = -1
      , d = null;
    s && (d = new ResizeObserver(h => {
        let[f] = h;
        f && f.target === c && d && (d.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var v;
            (v = d) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    c && !l && d.observe(c),
    d.observe(t));
    let S, g = l ? ro(e) : null;
    l && y();
    function y() {
        const h = ro(e);
        g && !Th(g, h) && n(),
        g = h,
        S = requestAnimationFrame(y)
    }
    return n(),
    () => {
        var h;
        u.forEach(f => {
            r && f.removeEventListener("scroll", n),
            a && f.removeEventListener("resize", n)
        }
        ),
        p == null || p(),
        (h = d) == null || h.disconnect(),
        d = null,
        l && cancelAnimationFrame(S)
    }
}
const t1 = kx
  , n1 = Nx
  , o1 = Cx
  , r1 = Ax
  , a1 = Ex
  , Vd = Sx
  , s1 = Px
  , i1 = (e, t, n) => {
    const o = new Map
      , r = {
        platform: qx,
        ...n
    }
      , a = {
        ...r.platform,
        _c: o
    };
    return wx(e, t, {
        ...r,
        platform: a
    })
}
;
var l1 = typeof document < "u"
  , c1 = function() {}
  , Ya = l1 ? w.useLayoutEffect : c1;
function Es(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, o, r;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (o = n; o-- !== 0; )
                if (!Es(e[o], t[o]))
                    return !1;
            return !0
        }
        if (r = Object.keys(e),
        n = r.length,
        n !== Object.keys(t).length)
            return !1;
        for (o = n; o-- !== 0; )
            if (!{}.hasOwnProperty.call(t, r[o]))
                return !1;
        for (o = n; o-- !== 0; ) {
            const a = r[o];
            if (!(a === "_owner" && e.$$typeof) && !Es(e[a], t[a]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Rh(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Wd(e, t) {
    const n = Rh(e);
    return Math.round(t * n) / n
}
function Mi(e) {
    const t = w.useRef(e);
    return Ya( () => {
        t.current = e
    }
    ),
    t
}
function u1(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: o=[], platform: r, elements: {reference: a, floating: s}={}, transform: i=!0, whileElementsMounted: l, open: c} = e
      , [u,p] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,d] = w.useState(o);
    Es(m, o) || d(o);
    const [S,g] = w.useState(null)
      , [y,h] = w.useState(null)
      , f = w.useCallback(P => {
        P !== b.current && (b.current = P,
        g(P))
    }
    , [])
      , v = w.useCallback(P => {
        P !== k.current && (k.current = P,
        h(P))
    }
    , [])
      , C = a || S
      , E = s || y
      , b = w.useRef(null)
      , k = w.useRef(null)
      , T = w.useRef(u)
      , F = l != null
      , L = Mi(l)
      , I = Mi(r)
      , O = Mi(c)
      , W = w.useCallback( () => {
        if (!b.current || !k.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: m
        };
        I.current && (P.platform = I.current),
        i1(b.current, k.current, P).then(A => {
            const B = {
                ...A,
                isPositioned: O.current !== !1
            };
            _.current && !Es(T.current, B) && (T.current = B,
            sa.flushSync( () => {
                p(B)
            }
            ))
        }
        )
    }
    , [m, t, n, I, O]);
    Ya( () => {
        c === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        p(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [c]);
    const _ = w.useRef(!1);
    Ya( () => (_.current = !0,
    () => {
        _.current = !1
    }
    ), []),
    Ya( () => {
        if (C && (b.current = C),
        E && (k.current = E),
        C && E) {
            if (L.current)
                return L.current(C, E, W);
            W()
        }
    }
    , [C, E, W, L, F]);
    const Y = w.useMemo( () => ({
        reference: b,
        floating: k,
        setReference: f,
        setFloating: v
    }), [f, v])
      , z = w.useMemo( () => ({
        reference: C,
        floating: E
    }), [C, E])
      , Q = w.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return P;
        const A = Wd(z.floating, u.x)
          , B = Wd(z.floating, u.y);
        return i ? {
            ...P,
            transform: "translate(" + A + "px, " + B + "px)",
            ...Rh(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: B
        }
    }
    , [n, i, z.floating, u.x, u.y]);
    return w.useMemo( () => ({
        ...u,
        update: W,
        refs: Y,
        elements: z,
        floatingStyles: Q
    }), [u, W, Y, z, Q])
}
const d1 = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: o, padding: r} = typeof e == "function" ? e(n) : e;
            return o && t(o) ? o.current != null ? Vd({
                element: o.current,
                padding: r
            }).fn(n) : {} : o ? Vd({
                element: o,
                padding: r
            }).fn(n) : {}
        }
    }
}
  , p1 = (e, t) => ({
    ...t1(e),
    options: [e, t]
})
  , f1 = (e, t) => ({
    ...n1(e),
    options: [e, t]
})
  , m1 = (e, t) => ({
    ...s1(e),
    options: [e, t]
})
  , h1 = (e, t) => ({
    ...o1(e),
    options: [e, t]
})
  , v1 = (e, t) => ({
    ...r1(e),
    options: [e, t]
})
  , g1 = (e, t) => ({
    ...a1(e),
    options: [e, t]
})
  , y1 = (e, t) => ({
    ...d1(e),
    options: [e, t]
});
var x1 = "Arrow"
  , Dh = w.forwardRef( (e, t) => {
    const {children: n, width: o=10, height: r=5, ...a} = e;
    return x.jsx(Ue.svg, {
        ...a,
        ref: t,
        width: o,
        height: r,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : x.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Dh.displayName = x1;
var w1 = Dh;
function S1(e) {
    const [t,n] = w.useState(void 0);
    return Dn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length)
                    return;
                const a = r[0];
                let s, i;
                if ("borderBoxSize"in a) {
                    const l = a.borderBoxSize
                      , c = Array.isArray(l) ? l[0] : l;
                    s = c.inlineSize,
                    i = c.blockSize
                } else
                    s = e.offsetWidth,
                    i = e.offsetHeight;
                n({
                    width: s,
                    height: i
                })
            }
            );
            return o.observe(e, {
                box: "border-box"
            }),
            () => o.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Lh = "Popper"
  , [Fh,_h] = Qs(Lh)
  , [CS,Bh] = Fh(Lh)
  , jh = "PopperAnchor"
  , Oh = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: o, ...r} = e
      , a = Bh(jh, n)
      , s = w.useRef(null)
      , i = St(t, s);
    return w.useEffect( () => {
        a.onAnchorChange((o == null ? void 0 : o.current) || s.current)
    }
    ),
    o ? null : x.jsx(Ue.div, {
        ...r,
        ref: i
    })
}
);
Oh.displayName = jh;
var ru = "PopperContent"
  , [C1,E1] = Fh(ru)
  , Mh = w.forwardRef( (e, t) => {
    var J, lo, Xt, On, qt, co;
    const {__scopePopper: n, side: o="bottom", sideOffset: r=0, align: a="center", alignOffset: s=0, arrowPadding: i=0, avoidCollisions: l=!0, collisionBoundary: c=[], collisionPadding: u=0, sticky: p="partial", hideWhenDetached: m=!1, updatePositionStrategy: d="optimized", onPlaced: S, ...g} = e
      , y = Bh(ru, n)
      , [h,f] = w.useState(null)
      , v = St(t, Jt => f(Jt))
      , [C,E] = w.useState(null)
      , b = S1(C)
      , k = (b == null ? void 0 : b.width) ?? 0
      , T = (b == null ? void 0 : b.height) ?? 0
      , F = o + (a !== "center" ? "-" + a : "")
      , L = typeof u == "number" ? u : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...u
    }
      , I = Array.isArray(c) ? c : [c]
      , O = I.length > 0
      , W = {
        padding: L,
        boundary: I.filter(k1),
        altBoundary: O
    }
      , {refs: _, floatingStyles: Y, placement: z, isPositioned: Q, middlewareData: P} = u1({
        strategy: "fixed",
        placement: F,
        whileElementsMounted: (...Jt) => e1(...Jt, {
            animationFrame: d === "always"
        }),
        elements: {
            reference: y.anchor
        },
        middleware: [p1({
            mainAxis: r + T,
            alignmentAxis: s
        }), l && f1({
            mainAxis: !0,
            crossAxis: !1,
            limiter: p === "partial" ? m1() : void 0,
            ...W
        }), l && h1({
            ...W
        }), v1({
            ...W,
            apply: ({elements: Jt, rects: ca, availableWidth: ni, availableHeight: ua}) => {
                const {width: oi, height: sr} = ca.reference
                  , uo = Jt.floating.style;
                uo.setProperty("--radix-popper-available-width", `${ni}px`),
                uo.setProperty("--radix-popper-available-height", `${ua}px`),
                uo.setProperty("--radix-popper-anchor-width", `${oi}px`),
                uo.setProperty("--radix-popper-anchor-height", `${sr}px`)
            }
        }), C && y1({
            element: C,
            padding: i
        }), N1({
            arrowWidth: k,
            arrowHeight: T
        }), m && g1({
            strategy: "referenceHidden",
            ...W
        })]
    })
      , [A,B] = Hh(z)
      , U = Rn(S);
    Dn( () => {
        Q && (U == null || U())
    }
    , [Q, U]);
    const M = (J = P.arrow) == null ? void 0 : J.x
      , K = (lo = P.arrow) == null ? void 0 : lo.y
      , G = ((Xt = P.arrow) == null ? void 0 : Xt.centerOffset) !== 0
      , [me,be] = w.useState();
    return Dn( () => {
        h && be(window.getComputedStyle(h).zIndex)
    }
    , [h]),
    x.jsx("div", {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: Q ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: me,
            "--radix-popper-transform-origin": [(On = P.transformOrigin) == null ? void 0 : On.x, (qt = P.transformOrigin) == null ? void 0 : qt.y].join(" "),
            ...((co = P.hide) == null ? void 0 : co.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: x.jsx(C1, {
            scope: n,
            placedSide: A,
            onArrowChange: E,
            arrowX: M,
            arrowY: K,
            shouldHideArrow: G,
            children: x.jsx(Ue.div, {
                "data-side": A,
                "data-align": B,
                ...g,
                ref: v,
                style: {
                    ...g.style,
                    animation: Q ? void 0 : "none"
                }
            })
        })
    })
}
);
Mh.displayName = ru;
var Ih = "PopperArrow"
  , b1 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , zh = w.forwardRef(function(t, n) {
    const {__scopePopper: o, ...r} = t
      , a = E1(Ih, o)
      , s = b1[a.placedSide];
    return x.jsx("span", {
        ref: a.onArrowChange,
        style: {
            position: "absolute",
            left: a.arrowX,
            top: a.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[a.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[a.placedSide],
            visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: x.jsx(w1, {
            ...r,
            ref: n,
            style: {
                ...r.style,
                display: "block"
            }
        })
    })
});
zh.displayName = Ih;
function k1(e) {
    return e !== null
}
var N1 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var y, h, f;
        const {placement: n, rects: o, middlewareData: r} = t
          , s = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0
          , i = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [c,u] = Hh(n)
          , p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u]
          , m = (((h = r.arrow) == null ? void 0 : h.x) ?? 0) + i / 2
          , d = (((f = r.arrow) == null ? void 0 : f.y) ?? 0) + l / 2;
        let S = ""
          , g = "";
        return c === "bottom" ? (S = s ? p : `${m}px`,
        g = `${-l}px`) : c === "top" ? (S = s ? p : `${m}px`,
        g = `${o.floating.height + l}px`) : c === "right" ? (S = `${-l}px`,
        g = s ? p : `${d}px`) : c === "left" && (S = `${o.floating.width + l}px`,
        g = s ? p : `${d}px`),
        {
            data: {
                x: S,
                y: g
            }
        }
    }
});
function Hh(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var P1 = Oh
  , A1 = Mh
  , T1 = zh
  , [Ys,ES] = Qs("Tooltip", [_h])
  , au = _h()
  , $h = "TooltipProvider"
  , R1 = 700
  , Kd = "tooltip.open"
  , [D1,Qh] = Ys($h)
  , Uh = e => {
    const {__scopeTooltip: t, delayDuration: n=R1, skipDelayDuration: o=300, disableHoverableContent: r=!1, children: a} = e
      , s = w.useRef(!0)
      , i = w.useRef(!1)
      , l = w.useRef(0);
    return w.useEffect( () => {
        const c = l.current;
        return () => window.clearTimeout(c)
    }
    , []),
    x.jsx(D1, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(l.current),
            s.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => s.current = !0, o)
        }
        , [o]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: w.useCallback(c => {
            i.current = c
        }
        , []),
        disableHoverableContent: r,
        children: a
    })
}
;
Uh.displayName = $h;
var Vh = "Tooltip"
  , [bS,Gs] = Ys(Vh)
  , $l = "TooltipTrigger"
  , L1 = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...o} = e
      , r = Gs($l, n)
      , a = Qh($l, n)
      , s = au(n)
      , i = w.useRef(null)
      , l = St(t, i, r.onTriggerChange)
      , c = w.useRef(!1)
      , u = w.useRef(!1)
      , p = w.useCallback( () => c.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", p), [p]),
    x.jsx(P1, {
        asChild: !0,
        ...s,
        children: x.jsx(Ue.button, {
            "aria-describedby": r.open ? r.contentId : void 0,
            "data-state": r.stateAttribute,
            ...o,
            ref: l,
            onPointerMove: ge(e.onPointerMove, m => {
                m.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (r.onTriggerEnter(),
                u.current = !0)
            }
            ),
            onPointerLeave: ge(e.onPointerLeave, () => {
                r.onTriggerLeave(),
                u.current = !1
            }
            ),
            onPointerDown: ge(e.onPointerDown, () => {
                r.open && r.onClose(),
                c.current = !0,
                document.addEventListener("pointerup", p, {
                    once: !0
                })
            }
            ),
            onFocus: ge(e.onFocus, () => {
                c.current || r.onOpen()
            }
            ),
            onBlur: ge(e.onBlur, r.onClose),
            onClick: ge(e.onClick, r.onClose)
        })
    })
}
);
L1.displayName = $l;
var F1 = "TooltipPortal"
  , [kS,_1] = Ys(F1, {
    forceMount: void 0
})
  , Jo = "TooltipContent"
  , Wh = w.forwardRef( (e, t) => {
    const n = _1(Jo, e.__scopeTooltip)
      , {forceMount: o=n.forceMount, side: r="top", ...a} = e
      , s = Gs(Jo, e.__scopeTooltip);
    return x.jsx(Uc, {
        present: o || s.open,
        children: s.disableHoverableContent ? x.jsx(Kh, {
            side: r,
            ...a,
            ref: t
        }) : x.jsx(B1, {
            side: r,
            ...a,
            ref: t
        })
    })
}
)
  , B1 = w.forwardRef( (e, t) => {
    const n = Gs(Jo, e.__scopeTooltip)
      , o = Qh(Jo, e.__scopeTooltip)
      , r = w.useRef(null)
      , a = St(t, r)
      , [s,i] = w.useState(null)
      , {trigger: l, onClose: c} = n
      , u = r.current
      , {onPointerInTransitChange: p} = o
      , m = w.useCallback( () => {
        i(null),
        p(!1)
    }
    , [p])
      , d = w.useCallback( (S, g) => {
        const y = S.currentTarget
          , h = {
            x: S.clientX,
            y: S.clientY
        }
          , f = z1(h, y.getBoundingClientRect())
          , v = H1(h, f)
          , C = $1(g.getBoundingClientRect())
          , E = U1([...v, ...C]);
        i(E),
        p(!0)
    }
    , [p]);
    return w.useEffect( () => () => m(), [m]),
    w.useEffect( () => {
        if (l && u) {
            const S = y => d(y, u)
              , g = y => d(y, l);
            return l.addEventListener("pointerleave", S),
            u.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", S),
                u.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, u, d, m]),
    w.useEffect( () => {
        if (s) {
            const S = g => {
                const y = g.target
                  , h = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , f = (l == null ? void 0 : l.contains(y)) || (u == null ? void 0 : u.contains(y))
                  , v = !Q1(h, s);
                f ? m() : v && (m(),
                c())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, u, s, c, m]),
    x.jsx(Kh, {
        ...e,
        ref: a
    })
}
)
  , [j1,O1] = Ys(Vh, {
    isInside: !1
})
  , M1 = eg("TooltipContent")
  , Kh = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: o, "aria-label": r, onEscapeKeyDown: a, onPointerDownOutside: s, ...i} = e
      , l = Gs(Jo, n)
      , c = au(n)
      , {onClose: u} = l;
    return w.useEffect( () => (document.addEventListener(Kd, u),
    () => document.removeEventListener(Kd, u)), [u]),
    w.useEffect( () => {
        if (l.trigger) {
            const p = m => {
                const d = m.target;
                d != null && d.contains(l.trigger) && u()
            }
            ;
            return window.addEventListener("scroll", p, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", p, {
                capture: !0
            })
        }
    }
    , [l.trigger, u]),
    x.jsx(Qc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: u,
        children: x.jsxs(A1, {
            "data-state": l.stateAttribute,
            ...c,
            ...i,
            ref: t,
            style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [x.jsx(M1, {
                children: o
            }), x.jsx(j1, {
                scope: n,
                isInside: !0,
                children: x.jsx(kg, {
                    id: l.contentId,
                    role: "tooltip",
                    children: r || o
                })
            })]
        })
    })
}
);
Wh.displayName = Jo;
var Zh = "TooltipArrow"
  , I1 = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...o} = e
      , r = au(n);
    return O1(Zh, n).isInside ? null : x.jsx(T1, {
        ...r,
        ...o,
        ref: t
    })
}
);
I1.displayName = Zh;
function z1(e, t) {
    const n = Math.abs(t.top - e.y)
      , o = Math.abs(t.bottom - e.y)
      , r = Math.abs(t.right - e.x)
      , a = Math.abs(t.left - e.x);
    switch (Math.min(n, o, r, a)) {
    case a:
        return "left";
    case r:
        return "right";
    case n:
        return "top";
    case o:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function H1(e, t, n=5) {
    const o = [];
    switch (t) {
    case "top":
        o.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        o.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        o.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        o.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return o
}
function $1(e) {
    const {top: t, right: n, bottom: o, left: r} = e;
    return [{
        x: r,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: o
    }, {
        x: r,
        y: o
    }]
}
function Q1(e, t) {
    const {x: n, y: o} = e;
    let r = !1;
    for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
        const i = t[a]
          , l = t[s]
          , c = i.x
          , u = i.y
          , p = l.x
          , m = l.y;
        u > o != m > o && n < (p - c) * (o - u) / (m - u) + c && (r = !r)
    }
    return r
}
function U1(e) {
    const t = e.slice();
    return t.sort( (n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0),
    V1(t)
}
function V1(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let o = 0; o < e.length; o++) {
        const r = e[o];
        for (; t.length >= 2; ) {
            const a = t[t.length - 1]
              , s = t[t.length - 2];
            if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x))
                t.pop();
            else
                break
        }
        t.push(r)
    }
    t.pop();
    const n = [];
    for (let o = e.length - 1; o >= 0; o--) {
        const r = e[o];
        for (; n.length >= 2; ) {
            const a = n[n.length - 1]
              , s = n[n.length - 2];
            if ((a.x - s.x) * (r.y - s.y) >= (a.y - s.y) * (r.x - s.x))
                n.pop();
            else
                break
        }
        n.push(r)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var W1 = Uh
  , Yh = Wh;
const K1 = W1
  , Z1 = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, o) => x.jsx(Yh, {
    "data-lov-id": "src/components/ui/tooltip.tsx:16:2",
    "data-lov-name": "TooltipPrimitive.Content",
    "data-component-path": "src/components/ui/tooltip.tsx",
    "data-component-line": "16",
    "data-component-file": "tooltip.tsx",
    "data-component-name": "TooltipPrimitive.Content",
    "data-component-content": "%7B%7D",
    ref: o,
    sideOffset: t,
    className: io("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Z1.displayName = Yh.displayName;
var Xs = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , qs = typeof window > "u" || "Deno"in globalThis;
function ft() {}
function Y1(e, t) {
    return typeof e == "function" ? e(t) : e
}
function G1(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function X1(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ql(e, t) {
    return typeof e == "function" ? e(t) : e
}
function q1(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Zd(e, t) {
    const {type: n="all", exact: o, fetchStatus: r, predicate: a, queryKey: s, stale: i} = e;
    if (s) {
        if (o) {
            if (t.queryHash !== su(s, t.options))
                return !1
        } else if (!qr(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof i == "boolean" && t.isStale() !== i || r && r !== t.state.fetchStatus || a && !a(t))
}
function Yd(e, t) {
    const {exact: n, status: o, predicate: r, mutationKey: a} = e;
    if (a) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Xr(t.options.mutationKey) !== Xr(a))
                return !1
        } else if (!qr(t.options.mutationKey, a))
            return !1
    }
    return !(o && t.state.status !== o || r && !r(t))
}
function su(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Xr)(e)
}
function Xr(e) {
    return JSON.stringify(e, (t, n) => Ul(n) ? Object.keys(n).sort().reduce( (o, r) => (o[r] = n[r],
    o), {}) : n)
}
function qr(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => qr(e[n], t[n])) : !1
}
function Gh(e, t) {
    if (e === t)
        return e;
    const n = Gd(e) && Gd(t);
    if (n || Ul(e) && Ul(t)) {
        const o = n ? e : Object.keys(e)
          , r = o.length
          , a = n ? t : Object.keys(t)
          , s = a.length
          , i = n ? [] : {}
          , l = new Set(o);
        let c = 0;
        for (let u = 0; u < s; u++) {
            const p = n ? u : a[u];
            (!n && l.has(p) || n) && e[p] === void 0 && t[p] === void 0 ? (i[p] = void 0,
            c++) : (i[p] = Gh(e[p], t[p]),
            i[p] === e[p] && e[p] !== void 0 && c++)
        }
        return r === s && c === r ? e : i
    }
    return t
}
function Gd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ul(e) {
    if (!Xd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Xd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Xd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function J1(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function ew(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Gh(e, t) : t
}
function tw(e, t, n=0) {
    const o = [...e, t];
    return n && o.length > n ? o.slice(1) : o
}
function nw(e, t, n=0) {
    const o = [t, ...e];
    return n && o.length > n ? o.slice(0, -1) : o
}
var iu = Symbol();
function Xh(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === iu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Vn, pn, Oo, lp, ow = (lp = class extends Xs {
    constructor() {
        super();
        q(this, Vn);
        q(this, pn);
        q(this, Oo);
        $(this, Oo, t => {
            if (!qs && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, pn) || this.setEventListener(N(this, Oo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, pn)) == null || t.call(this),
        $(this, pn, void 0))
    }
    setEventListener(t) {
        var n;
        $(this, Oo, t),
        (n = N(this, pn)) == null || n.call(this),
        $(this, pn, t(o => {
            typeof o == "boolean" ? this.setFocused(o) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Vn) !== t && ($(this, Vn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Vn) == "boolean" ? N(this, Vn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Vn = new WeakMap,
pn = new WeakMap,
Oo = new WeakMap,
lp), qh = new ow, Mo, fn, Io, cp, rw = (cp = class extends Xs {
    constructor() {
        super();
        q(this, Mo, !0);
        q(this, fn);
        q(this, Io);
        $(this, Io, t => {
            if (!qs && window.addEventListener) {
                const n = () => t(!0)
                  , o = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", o, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", o)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, fn) || this.setEventListener(N(this, Io))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, fn)) == null || t.call(this),
        $(this, fn, void 0))
    }
    setEventListener(t) {
        var n;
        $(this, Io, t),
        (n = N(this, fn)) == null || n.call(this),
        $(this, fn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Mo) !== t && ($(this, Mo, t),
        this.listeners.forEach(o => {
            o(t)
        }
        ))
    }
    isOnline() {
        return N(this, Mo)
    }
}
,
Mo = new WeakMap,
fn = new WeakMap,
Io = new WeakMap,
cp), bs = new rw;
function aw() {
    let e, t;
    const n = new Promise( (r, a) => {
        e = r,
        t = a
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function o(r) {
        Object.assign(n, r),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = r => {
        o({
            status: "fulfilled",
            value: r
        }),
        e(r)
    }
    ,
    n.reject = r => {
        o({
            status: "rejected",
            reason: r
        }),
        t(r)
    }
    ,
    n
}
function sw(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Jh(e) {
    return (e ?? "online") === "online" ? bs.isOnline() : !0
}
var e0 = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ii(e) {
    return e instanceof e0
}
function t0(e) {
    let t = !1, n = 0, o = !1, r;
    const a = aw()
      , s = g => {
        var y;
        o || (m(new e0(g)),
        (y = e.abort) == null || y.call(e))
    }
      , i = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , c = () => qh.isFocused() && (e.networkMode === "always" || bs.isOnline()) && e.canRun()
      , u = () => Jh(e.networkMode) && e.canRun()
      , p = g => {
        var y;
        o || (o = !0,
        (y = e.onSuccess) == null || y.call(e, g),
        r == null || r(),
        a.resolve(g))
    }
      , m = g => {
        var y;
        o || (o = !0,
        (y = e.onError) == null || y.call(e, g),
        r == null || r(),
        a.reject(g))
    }
      , d = () => new Promise(g => {
        var y;
        r = h => {
            (o || c()) && g(h)
        }
        ,
        (y = e.onPause) == null || y.call(e)
    }
    ).then( () => {
        var g;
        r = void 0,
        o || (g = e.onContinue) == null || g.call(e)
    }
    )
      , S = () => {
        if (o)
            return;
        let g;
        const y = n === 0 ? e.initialPromise : void 0;
        try {
            g = y ?? e.fn()
        } catch (h) {
            g = Promise.reject(h)
        }
        Promise.resolve(g).then(p).catch(h => {
            var b;
            if (o)
                return;
            const f = e.retry ?? (qs ? 0 : 3)
              , v = e.retryDelay ?? sw
              , C = typeof v == "function" ? v(n, h) : v
              , E = f === !0 || typeof f == "number" && n < f || typeof f == "function" && f(n, h);
            if (t || !E) {
                m(h);
                return
            }
            n++,
            (b = e.onFail) == null || b.call(e, n, h),
            J1(C).then( () => c() ? void 0 : d()).then( () => {
                t ? m(h) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: a,
        cancel: s,
        continue: () => (r == null || r(),
        a),
        cancelRetry: i,
        continueRetry: l,
        canStart: u,
        start: () => (u() ? S() : d().then(S),
        a)
    }
}
var iw = e => setTimeout(e, 0);
function lw() {
    let e = []
      , t = 0
      , n = i => {
        i()
    }
      , o = i => {
        i()
    }
      , r = iw;
    const a = i => {
        t ? e.push(i) : r( () => {
            n(i)
        }
        )
    }
      , s = () => {
        const i = e;
        e = [],
        i.length && r( () => {
            o( () => {
                i.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: i => {
            let l;
            t++;
            try {
                l = i()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: i => (...l) => {
            a( () => {
                i(...l)
            }
            )
        }
        ,
        schedule: a,
        setNotifyFunction: i => {
            n = i
        }
        ,
        setBatchNotifyFunction: i => {
            o = i
        }
        ,
        setScheduler: i => {
            r = i
        }
    }
}
var Fe = lw(), Wn, up, n0 = (up = class {
    constructor() {
        q(this, Wn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        G1(this.gcTime) && $(this, Wn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (qs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Wn) && (clearTimeout(N(this, Wn)),
        $(this, Wn, void 0))
    }
}
,
Wn = new WeakMap,
up), zo, Kn, et, Zn, Ae, Jr, Yn, mt, Ot, dp, cw = (dp = class extends n0 {
    constructor(t) {
        super();
        q(this, mt);
        q(this, zo);
        q(this, Kn);
        q(this, et);
        q(this, Zn);
        q(this, Ae);
        q(this, Jr);
        q(this, Yn);
        $(this, Yn, !1),
        $(this, Jr, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        $(this, Zn, t.client),
        $(this, et, N(this, Zn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        $(this, zo, dw(this.options)),
        this.state = t.state ?? N(this, zo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, Ae)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, Jr),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, et).remove(this)
    }
    setData(t, n) {
        const o = ew(this.state.data, t, this.options);
        return ke(this, mt, Ot).call(this, {
            data: o,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        o
    }
    setState(t, n) {
        ke(this, mt, Ot).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var o, r;
        const n = (o = N(this, Ae)) == null ? void 0 : o.promise;
        return (r = N(this, Ae)) == null || r.cancel(t),
        n ? n.then(ft).catch(ft) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, zo))
    }
    isActive() {
        return this.observers.some(t => q1(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === iu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ql(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !X1(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(o => o.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Ae)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(o => o.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Ae)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, et).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, Ae) && (N(this, Yn) ? N(this, Ae).cancel({
            revert: !0
        }) : N(this, Ae).cancelRetry()),
        this.scheduleGc()),
        N(this, et).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || ke(this, mt, Ot).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var c, u, p;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, Ae))
                return N(this, Ae).continueRetry(),
                N(this, Ae).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(d => d.options.queryFn);
            m && this.setOptions(m.options)
        }
        const o = new AbortController
          , r = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => ($(this, Yn, !0),
                o.signal)
            })
        }
          , a = () => {
            const m = Xh(this.options, n)
              , S = ( () => {
                const g = {
                    client: N(this, Zn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(g),
                g
            }
            )();
            return $(this, Yn, !1),
            this.options.persister ? this.options.persister(m, S, this) : m(S)
        }
          , i = ( () => {
            const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, Zn),
                state: this.state,
                fetchFn: a
            };
            return r(m),
            m
        }
        )();
        (c = this.options.behavior) == null || c.onFetch(i, this),
        $(this, Kn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && ke(this, mt, Ot).call(this, {
            type: "fetch",
            meta: (p = i.fetchOptions) == null ? void 0 : p.meta
        });
        const l = m => {
            var d, S, g, y;
            Ii(m) && m.silent || ke(this, mt, Ot).call(this, {
                type: "error",
                error: m
            }),
            Ii(m) || ((S = (d = N(this, et).config).onError) == null || S.call(d, m, this),
            (y = (g = N(this, et).config).onSettled) == null || y.call(g, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return $(this, Ae, t0({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: o.abort.bind(o),
            onSuccess: m => {
                var d, S, g, y;
                if (m === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (h) {
                    l(h);
                    return
                }
                (S = (d = N(this, et).config).onSuccess) == null || S.call(d, m, this),
                (y = (g = N(this, et).config).onSettled) == null || y.call(g, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (m, d) => {
                ke(this, mt, Ot).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: d
                })
            }
            ,
            onPause: () => {
                ke(this, mt, Ot).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ke(this, mt, Ot).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        N(this, Ae).start()
    }
}
,
zo = new WeakMap,
Kn = new WeakMap,
et = new WeakMap,
Zn = new WeakMap,
Ae = new WeakMap,
Jr = new WeakMap,
Yn = new WeakMap,
mt = new WeakSet,
Ot = function(t) {
    const n = o => {
        switch (t.type) {
        case "failed":
            return {
                ...o,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...o,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...o,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...o,
                ...uw(o.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return $(this, Kn, void 0),
            {
                ...o,
                data: t.data,
                dataUpdateCount: o.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const r = t.error;
            return Ii(r) && r.revert && N(this, Kn) ? {
                ...N(this, Kn),
                fetchStatus: "idle"
            } : {
                ...o,
                error: r,
                errorUpdateCount: o.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: o.fetchFailureCount + 1,
                fetchFailureReason: r,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...o,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...o,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Fe.batch( () => {
        this.observers.forEach(o => {
            o.onQueryUpdate()
        }
        ),
        N(this, et).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
dp);
function uw(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Jh(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function dw(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , o = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? o ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, pp, pw = (pp = class extends Xs {
    constructor(t={}) {
        super();
        q(this, Nt);
        this.config = t,
        $(this, Nt, new Map)
    }
    build(t, n, o) {
        const r = n.queryKey
          , a = n.queryHash ?? su(r, n);
        let s = this.get(a);
        return s || (s = new cw({
            client: t,
            queryKey: r,
            queryHash: a,
            options: t.defaultQueryOptions(n),
            state: o,
            defaultOptions: t.getQueryDefaults(r)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Nt).has(t.queryHash) || (N(this, Nt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Nt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Nt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Fe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Nt).get(t)
    }
    getAll() {
        return [...N(this, Nt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(o => Zd(n, o))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(o => Zd(t, o)) : n
    }
    notify(t) {
        Fe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Fe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Fe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Nt = new WeakMap,
pp), Pt, De, Gn, At, sn, fp, fw = (fp = class extends n0 {
    constructor(t) {
        super();
        q(this, At);
        q(this, Pt);
        q(this, De);
        q(this, Gn);
        this.mutationId = t.mutationId,
        $(this, De, t.mutationCache),
        $(this, Pt, []),
        this.state = t.state || mw(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, Pt).includes(t) || (N(this, Pt).push(t),
        this.clearGcTimeout(),
        N(this, De).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        $(this, Pt, N(this, Pt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, De).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, Pt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, De).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, Gn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var a, s, i, l, c, u, p, m, d, S, g, y, h, f, v, C, E, b, k, T;
        const n = () => {
            ke(this, At, sn).call(this, {
                type: "continue"
            })
        }
        ;
        $(this, Gn, t0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (F, L) => {
                ke(this, At, sn).call(this, {
                    type: "failed",
                    failureCount: F,
                    error: L
                })
            }
            ,
            onPause: () => {
                ke(this, At, sn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, De).canRun(this)
        }));
        const o = this.state.status === "pending"
          , r = !N(this, Gn).canStart();
        try {
            if (o)
                n();
            else {
                ke(this, At, sn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((s = (a = N(this, De).config).onMutate) == null ? void 0 : s.call(a, t, this));
                const L = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                L !== this.state.context && ke(this, At, sn).call(this, {
                    type: "pending",
                    context: L,
                    variables: t,
                    isPaused: r
                })
            }
            const F = await N(this, Gn).start();
            return await ((u = (c = N(this, De).config).onSuccess) == null ? void 0 : u.call(c, F, t, this.state.context, this)),
            await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, F, t, this.state.context)),
            await ((S = (d = N(this, De).config).onSettled) == null ? void 0 : S.call(d, F, null, this.state.variables, this.state.context, this)),
            await ((y = (g = this.options).onSettled) == null ? void 0 : y.call(g, F, null, t, this.state.context)),
            ke(this, At, sn).call(this, {
                type: "success",
                data: F
            }),
            F
        } catch (F) {
            try {
                throw await ((f = (h = N(this, De).config).onError) == null ? void 0 : f.call(h, F, t, this.state.context, this)),
                await ((C = (v = this.options).onError) == null ? void 0 : C.call(v, F, t, this.state.context)),
                await ((b = (E = N(this, De).config).onSettled) == null ? void 0 : b.call(E, void 0, F, this.state.variables, this.state.context, this)),
                await ((T = (k = this.options).onSettled) == null ? void 0 : T.call(k, void 0, F, t, this.state.context)),
                F
            } finally {
                ke(this, At, sn).call(this, {
                    type: "error",
                    error: F
                })
            }
        } finally {
            N(this, De).runNext(this)
        }
    }
}
,
Pt = new WeakMap,
De = new WeakMap,
Gn = new WeakMap,
At = new WeakSet,
sn = function(t) {
    const n = o => {
        switch (t.type) {
        case "failed":
            return {
                ...o,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...o,
                isPaused: !0
            };
        case "continue":
            return {
                ...o,
                isPaused: !1
            };
        case "pending":
            return {
                ...o,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...o,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...o,
                data: void 0,
                error: t.error,
                failureCount: o.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Fe.batch( () => {
        N(this, Pt).forEach(o => {
            o.onMutationUpdate(t)
        }
        ),
        N(this, De).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
fp);
function mw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var zt, ht, ea, mp, hw = (mp = class extends Xs {
    constructor(t={}) {
        super();
        q(this, zt);
        q(this, ht);
        q(this, ea);
        this.config = t,
        $(this, zt, new Set),
        $(this, ht, new Map),
        $(this, ea, 0)
    }
    build(t, n, o) {
        const r = new fw({
            mutationCache: this,
            mutationId: ++pa(this, ea)._,
            options: t.defaultMutationOptions(n),
            state: o
        });
        return this.add(r),
        r
    }
    add(t) {
        N(this, zt).add(t);
        const n = _a(t);
        if (typeof n == "string") {
            const o = N(this, ht).get(n);
            o ? o.push(t) : N(this, ht).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, zt).delete(t)) {
            const n = _a(t);
            if (typeof n == "string") {
                const o = N(this, ht).get(n);
                if (o)
                    if (o.length > 1) {
                        const r = o.indexOf(t);
                        r !== -1 && o.splice(r, 1)
                    } else
                        o[0] === t && N(this, ht).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = _a(t);
        if (typeof n == "string") {
            const o = N(this, ht).get(n)
              , r = o == null ? void 0 : o.find(a => a.state.status === "pending");
            return !r || r === t
        } else
            return !0
    }
    runNext(t) {
        var o;
        const n = _a(t);
        if (typeof n == "string") {
            const r = (o = N(this, ht).get(n)) == null ? void 0 : o.find(a => a !== t && a.state.isPaused);
            return (r == null ? void 0 : r.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Fe.batch( () => {
            N(this, zt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, zt).clear(),
            N(this, ht).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, zt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(o => Yd(n, o))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Yd(t, n))
    }
    notify(t) {
        Fe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Fe.batch( () => Promise.all(t.map(n => n.continue().catch(ft))))
    }
}
,
zt = new WeakMap,
ht = new WeakMap,
ea = new WeakMap,
mp);
function _a(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function qd(e) {
    return {
        onFetch: (t, n) => {
            var u, p, m, d, S;
            const o = t.options
              , r = (m = (p = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : m.direction
              , a = ((d = t.state.data) == null ? void 0 : d.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let i = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const c = async () => {
                let g = !1;
                const y = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , h = Xh(t.options, t.fetchOptions)
                  , f = async (v, C, E) => {
                    if (g)
                        return Promise.reject();
                    if (C == null && v.pages.length)
                        return Promise.resolve(v);
                    const k = ( () => {
                        const I = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: C,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return y(I),
                        I
                    }
                    )()
                      , T = await h(k)
                      , {maxPages: F} = t.options
                      , L = E ? nw : tw;
                    return {
                        pages: L(v.pages, T, F),
                        pageParams: L(v.pageParams, C, F)
                    }
                }
                ;
                if (r && a.length) {
                    const v = r === "backward"
                      , C = v ? vw : Jd
                      , E = {
                        pages: a,
                        pageParams: s
                    }
                      , b = C(o, E);
                    i = await f(E, b, v)
                } else {
                    const v = e ?? a.length;
                    do {
                        const C = l === 0 ? s[0] ?? o.initialPageParam : Jd(o, i);
                        if (l > 0 && C == null)
                            break;
                        i = await f(i, C),
                        l++
                    } while (l < v)
                }
                return i
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, y;
                return (y = (g = t.options).persister) == null ? void 0 : y.call(g, c, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = c
        }
    }
}
function Jd(e, {pages: t, pageParams: n}) {
    const o = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[o], t, n[o], n) : void 0
}
function vw(e, {pages: t, pageParams: n}) {
    var o;
    return t.length > 0 ? (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, t[0], t, n[0], n) : void 0
}
var de, mn, hn, Ho, $o, vn, Qo, Uo, hp, gw = (hp = class {
    constructor(e={}) {
        q(this, de);
        q(this, mn);
        q(this, hn);
        q(this, Ho);
        q(this, $o);
        q(this, vn);
        q(this, Qo);
        q(this, Uo);
        $(this, de, e.queryCache || new pw),
        $(this, mn, e.mutationCache || new hw),
        $(this, hn, e.defaultOptions || {}),
        $(this, Ho, new Map),
        $(this, $o, new Map),
        $(this, vn, 0)
    }
    mount() {
        pa(this, vn)._++,
        N(this, vn) === 1 && ($(this, Qo, qh.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, de).onFocus())
        }
        )),
        $(this, Uo, bs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        pa(this, vn)._--,
        N(this, vn) === 0 && ((e = N(this, Qo)) == null || e.call(this),
        $(this, Qo, void 0),
        (t = N(this, Uo)) == null || t.call(this),
        $(this, Uo, void 0))
    }
    isFetching(e) {
        return N(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, mn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, de).build(this, t)
          , o = n.state.data;
        return o === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ql(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(o))
    }
    getQueriesData(e) {
        return N(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const o = n.data;
            return [t, o]
        }
        )
    }
    setQueryData(e, t, n) {
        const o = this.defaultQueryOptions({
            queryKey: e
        })
          , r = N(this, de).get(o.queryHash)
          , a = r == null ? void 0 : r.state.data
          , s = Y1(t, a);
        if (s !== void 0)
            return N(this, de).build(this, o).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Fe.batch( () => N(this, de).findAll(e).map( ({queryKey: o}) => [o, this.setQueryData(o, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, de);
        Fe.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, de);
        return Fe.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , o = Fe.batch( () => N(this, de).findAll(e).map(r => r.cancel(n)));
        return Promise.all(o).then(ft).catch(ft)
    }
    invalidateQueries(e, t={}) {
        return Fe.batch( () => (N(this, de).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , o = Fe.batch( () => N(this, de).findAll(e).filter(r => !r.isDisabled() && !r.isStatic()).map(r => {
            let a = r.fetch(void 0, n);
            return n.throwOnError || (a = a.catch(ft)),
            r.state.fetchStatus === "paused" ? Promise.resolve() : a
        }
        ));
        return Promise.all(o).then(ft)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, de).build(this, t);
        return n.isStaleByTime(Ql(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(ft).catch(ft)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = qd(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ft).catch(ft)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = qd(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return bs.isOnline() ? N(this, mn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, de)
    }
    getMutationCache() {
        return N(this, mn)
    }
    getDefaultOptions() {
        return N(this, hn)
    }
    setDefaultOptions(e) {
        $(this, hn, e)
    }
    setQueryDefaults(e, t) {
        N(this, Ho).set(Xr(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, Ho).values()]
          , n = {};
        return t.forEach(o => {
            qr(e, o.queryKey) && Object.assign(n, o.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, $o).set(Xr(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, $o).values()]
          , n = {};
        return t.forEach(o => {
            qr(e, o.mutationKey) && Object.assign(n, o.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, hn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = su(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === iu && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, hn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, de).clear(),
        N(this, mn).clear()
    }
}
,
de = new WeakMap,
mn = new WeakMap,
hn = new WeakMap,
Ho = new WeakMap,
$o = new WeakMap,
vn = new WeakMap,
Qo = new WeakMap,
Uo = new WeakMap,
hp), yw = w.createContext(void 0), xw = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
x.jsx(yw.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ks() {
    return ks = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
    ,
    ks.apply(this, arguments)
}
var xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xn || (xn = {}));
const ep = "popstate";
function ww(e) {
    e === void 0 && (e = {});
    function t(o, r) {
        let {pathname: a, search: s, hash: i} = o.location;
        return Vl("", {
            pathname: a,
            search: s,
            hash: i
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }
    function n(o, r) {
        return typeof r == "string" ? r : r0(r)
    }
    return Cw(t, n, null, e)
}
function Qe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function o0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Sw() {
    return Math.random().toString(36).substr(2, 8)
}
function tp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Vl(e, t, n, o) {
    return n === void 0 && (n = null),
    ks({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Js(t) : t, {
        state: n,
        key: t && t.key || o || Sw()
    })
}
function r0(e) {
    let {pathname: t="/", search: n="", hash: o=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
    t
}
function Js(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let o = e.indexOf("?");
        o >= 0 && (t.search = e.substr(o),
        e = e.substr(0, o)),
        e && (t.pathname = e)
    }
    return t
}
function Cw(e, t, n, o) {
    o === void 0 && (o = {});
    let {window: r=document.defaultView, v5Compat: a=!1} = o
      , s = r.history
      , i = xn.Pop
      , l = null
      , c = u();
    c == null && (c = 0,
    s.replaceState(ks({}, s.state, {
        idx: c
    }), ""));
    function u() {
        return (s.state || {
            idx: null
        }).idx
    }
    function p() {
        i = xn.Pop;
        let y = u()
          , h = y == null ? null : y - c;
        c = y,
        l && l({
            action: i,
            location: g.location,
            delta: h
        })
    }
    function m(y, h) {
        i = xn.Push;
        let f = Vl(g.location, y, h);
        c = u() + 1;
        let v = tp(f, c)
          , C = g.createHref(f);
        try {
            s.pushState(v, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            r.location.assign(C)
        }
        a && l && l({
            action: i,
            location: g.location,
            delta: 1
        })
    }
    function d(y, h) {
        i = xn.Replace;
        let f = Vl(g.location, y, h);
        c = u();
        let v = tp(f, c)
          , C = g.createHref(f);
        s.replaceState(v, "", C),
        a && l && l({
            action: i,
            location: g.location,
            delta: 0
        })
    }
    function S(y) {
        let h = r.location.origin !== "null" ? r.location.origin : r.location.href
          , f = typeof y == "string" ? y : r0(y);
        return f = f.replace(/ $/, "%20"),
        Qe(h, "No window.location.(origin|href) available to create URL for href: " + f),
        new URL(f,h)
    }
    let g = {
        get action() {
            return i
        },
        get location() {
            return e(r, s)
        },
        listen(y) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return r.addEventListener(ep, p),
            l = y,
            () => {
                r.removeEventListener(ep, p),
                l = null
            }
        },
        createHref(y) {
            return t(r, y)
        },
        createURL: S,
        encodeLocation(y) {
            let h = S(y);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: m,
        replace: d,
        go(y) {
            return s.go(y)
        }
    };
    return g
}
var np;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(np || (np = {}));
function Ew(e, t, n) {
    return n === void 0 && (n = "/"),
    bw(e, t, n, !1)
}
function bw(e, t, n, o) {
    let r = typeof t == "string" ? Js(t) : t
      , a = i0(r.pathname || "/", n);
    if (a == null)
        return null;
    let s = a0(e);
    kw(s);
    let i = null;
    for (let l = 0; i == null && l < s.length; ++l) {
        let c = jw(a);
        i = _w(s[l], c, o)
    }
    return i
}
function a0(e, t, n, o) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    o === void 0 && (o = "");
    let r = (a, s, i) => {
        let l = {
            relativePath: i === void 0 ? a.path || "" : i,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: s,
            route: a
        };
        l.relativePath.startsWith("/") && (Qe(l.relativePath.startsWith(o), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(o.length));
        let c = jo([o, l.relativePath])
          , u = n.concat(l);
        a.children && a.children.length > 0 && (Qe(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        a0(a.children, t, u, c)),
        !(a.path == null && !a.index) && t.push({
            path: c,
            score: Lw(c, a.index),
            routesMeta: u
        })
    }
    ;
    return e.forEach( (a, s) => {
        var i;
        if (a.path === "" || !((i = a.path) != null && i.includes("?")))
            r(a, s);
        else
            for (let l of s0(a.path))
                r(a, s, l)
    }
    ),
    t
}
function s0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...o] = t
      , r = n.endsWith("?")
      , a = n.replace(/\?$/, "");
    if (o.length === 0)
        return r ? [a, ""] : [a];
    let s = s0(o.join("/"))
      , i = [];
    return i.push(...s.map(l => l === "" ? a : [a, l].join("/"))),
    r && i.push(...s),
    i.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function kw(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Fw(t.routesMeta.map(o => o.childrenIndex), n.routesMeta.map(o => o.childrenIndex)))
}
const Nw = /^:[\w-]+$/
  , Pw = 3
  , Aw = 2
  , Tw = 1
  , Rw = 10
  , Dw = -2
  , op = e => e === "*";
function Lw(e, t) {
    let n = e.split("/")
      , o = n.length;
    return n.some(op) && (o += Dw),
    t && (o += Aw),
    n.filter(r => !op(r)).reduce( (r, a) => r + (Nw.test(a) ? Pw : a === "" ? Tw : Rw), o)
}
function Fw(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (o, r) => o === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function _w(e, t, n) {
    let {routesMeta: o} = e
      , r = {}
      , a = "/"
      , s = [];
    for (let i = 0; i < o.length; ++i) {
        let l = o[i]
          , c = i === o.length - 1
          , u = a === "/" ? t : t.slice(a.length) || "/"
          , p = rp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, u)
          , m = l.route;
        if (!p && c && n && !o[o.length - 1].route.index && (p = rp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, u)),
        !p)
            return null;
        Object.assign(r, p.params),
        s.push({
            params: r,
            pathname: jo([a, p.pathname]),
            pathnameBase: Ow(jo([a, p.pathnameBase])),
            route: m
        }),
        p.pathnameBase !== "/" && (a = jo([a, p.pathnameBase]))
    }
    return s
}
function rp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,o] = Bw(e.path, e.caseSensitive, e.end)
      , r = t.match(n);
    if (!r)
        return null;
    let a = r[0]
      , s = a.replace(/(.)\/+$/, "$1")
      , i = r.slice(1);
    return {
        params: o.reduce( (c, u, p) => {
            let {paramName: m, isOptional: d} = u;
            if (m === "*") {
                let g = i[p] || "";
                s = a.slice(0, a.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const S = i[p];
            return d && !S ? c[m] = void 0 : c[m] = (S || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: a,
        pathnameBase: s,
        pattern: e
    }
}
function Bw(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    o0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let o = []
      , r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, i, l) => (o.push({
        paramName: i,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r,t ? void 0 : "i"), o]
}
function jw(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return o0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function i0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , o = e.charAt(n);
    return o && o !== "/" ? null : e.slice(n) || "/"
}
const jo = e => e.join("/").replace(/\/\/+/g, "/")
  , Ow = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Mw(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const l0 = ["post", "put", "patch", "delete"];
new Set(l0);
const Iw = ["get", ...l0];
new Set(Iw);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ns() {
    return Ns = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
    ,
    Ns.apply(this, arguments)
}
const zw = w.createContext(null)
  , Hw = w.createContext(null)
  , c0 = w.createContext(null)
  , ei = w.createContext(null)
  , ti = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , u0 = w.createContext(null);
function lu() {
    return w.useContext(ei) != null
}
function d0() {
    return lu() || Qe(!1),
    w.useContext(ei).location
}
function $w(e, t) {
    return Qw(e, t)
}
function Qw(e, t, n, o) {
    lu() || Qe(!1);
    let {navigator: r} = w.useContext(c0)
      , {matches: a} = w.useContext(ti)
      , s = a[a.length - 1]
      , i = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let c = d0(), u;
    if (t) {
        var p;
        let y = typeof t == "string" ? Js(t) : t;
        l === "/" || (p = y.pathname) != null && p.startsWith(l) || Qe(!1),
        u = y
    } else
        u = c;
    let m = u.pathname || "/"
      , d = m;
    if (l !== "/") {
        let y = l.replace(/^\//, "").split("/");
        d = "/" + m.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let S = Ew(e, {
        pathname: d
    })
      , g = Zw(S && S.map(y => Object.assign({}, y, {
        params: Object.assign({}, i, y.params),
        pathname: jo([l, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? l : jo([l, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), a, n, o);
    return t && g ? w.createElement(ei.Provider, {
        value: {
            location: Ns({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: xn.Pop
        }
    }, g) : g
}
function Uw() {
    let e = qw()
      , t = Mw(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: r
    }, n) : null, null)
}
const Vw = w.createElement(Uw, null);
class Ww extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(ti.Provider, {
            value: this.props.routeContext
        }, w.createElement(u0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Kw(e) {
    let {routeContext: t, match: n, children: o} = e
      , r = w.useContext(zw);
    return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(ti.Provider, {
        value: t
    }, o)
}
function Zw(e, t, n, o) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    o === void 0 && (o = null),
    e == null) {
        var a;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((a = o) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , i = (r = n) == null ? void 0 : r.errors;
    if (i != null) {
        let u = s.findIndex(p => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0);
        u >= 0 || Qe(!1),
        s = s.slice(0, Math.min(s.length, u + 1))
    }
    let l = !1
      , c = -1;
    if (n && o && o.v7_partialHydration)
        for (let u = 0; u < s.length; u++) {
            let p = s[u];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = u),
            p.route.id) {
                let {loaderData: m, errors: d} = n
                  , S = p.route.loader && m[p.route.id] === void 0 && (!d || d[p.route.id] === void 0);
                if (p.route.lazy || S) {
                    l = !0,
                    c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (u, p, m) => {
        let d, S = !1, g = null, y = null;
        n && (d = i && p.route.id ? i[p.route.id] : void 0,
        g = p.route.errorElement || Vw,
        l && (c < 0 && m === 0 ? (S = !0,
        y = null) : c === m && (S = !0,
        y = p.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, m + 1))
          , f = () => {
            let v;
            return d ? v = g : S ? v = y : p.route.Component ? v = w.createElement(p.route.Component, null) : p.route.element ? v = p.route.element : v = u,
            w.createElement(Kw, {
                match: p,
                routeContext: {
                    outlet: u,
                    matches: h,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? w.createElement(Ww, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: d,
            children: f(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : f()
    }
    , null)
}
var Wl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Wl || {});
function Yw(e) {
    let t = w.useContext(Hw);
    return t || Qe(!1),
    t
}
function Gw(e) {
    let t = w.useContext(ti);
    return t || Qe(!1),
    t
}
function Xw(e) {
    let t = Gw()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Qe(!1),
    n.route.id
}
function qw() {
    var e;
    let t = w.useContext(u0)
      , n = Yw(Wl.UseRouteError)
      , o = Xw(Wl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[o]
}
function Jw(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Kl(e) {
    Qe(!1)
}
function eS(e) {
    let {basename: t="/", children: n=null, location: o, navigationType: r=xn.Pop, navigator: a, static: s=!1, future: i} = e;
    lu() && Qe(!1);
    let l = t.replace(/^\/*/, "/")
      , c = w.useMemo( () => ({
        basename: l,
        navigator: a,
        static: s,
        future: Ns({
            v7_relativeSplatPath: !1
        }, i)
    }), [l, i, a, s]);
    typeof o == "string" && (o = Js(o));
    let {pathname: u="/", search: p="", hash: m="", state: d=null, key: S="default"} = o
      , g = w.useMemo( () => {
        let y = i0(u, l);
        return y == null ? null : {
            location: {
                pathname: y,
                search: p,
                hash: m,
                state: d,
                key: S
            },
            navigationType: r
        }
    }
    , [l, u, p, m, d, S, r]);
    return g == null ? null : w.createElement(c0.Provider, {
        value: c
    }, w.createElement(ei.Provider, {
        children: n,
        value: g
    }))
}
function tS(e) {
    let {children: t, location: n} = e;
    return $w(Zl(t), n)
}
new Promise( () => {}
);
function Zl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (o, r) => {
        if (!w.isValidElement(o))
            return;
        let a = [...t, r];
        if (o.type === w.Fragment) {
            n.push.apply(n, Zl(o.props.children, a));
            return
        }
        o.type !== Kl && Qe(!1),
        !o.props.index || !o.props.children || Qe(!1);
        let s = {
            id: o.props.id || a.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (s.children = Zl(o.props.children, a)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const nS = "6";
try {
    window.__reactRouterVersion = nS
} catch {}
const oS = "startTransition"
  , ap = Pp[oS];
function rS(e) {
    let {basename: t, children: n, future: o, window: r} = e
      , a = w.useRef();
    a.current == null && (a.current = ww({
        window: r,
        v5Compat: !0
    }));
    let s = a.current
      , [i,l] = w.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: c} = o || {}
      , u = w.useCallback(p => {
        c && ap ? ap( () => l(p)) : l(p)
    }
    , [l, c]);
    return w.useLayoutEffect( () => s.listen(u), [s, u]),
    w.useEffect( () => Jw(o), [o]),
    w.createElement(eS, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: s,
        future: o
    })
}
var sp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(sp || (sp = {}));
var ip;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(ip || (ip = {}));
const aS = "/assets/fourmeme_logo-C5Qrwl_I.svg"
  , sS = "/assets/larp_profile-BvdwtCH0.png"
  , iS = () => x.jsx("header", {
    "data-lov-id": "src/components/Header.tsx:7:4",
    "data-lov-name": "header",
    "data-component-path": "src/components/Header.tsx",
    "data-component-line": "7",
    "data-component-file": "Header.tsx",
    "data-component-name": "header",
    "data-component-content": "%7B%22className%22%3A%22fixed%20top-0%20left-0%20right-0%20z-50%20px-4%20py-4%22%7D",
    className: "fixed top-0 left-0 right-0 z-50 px-4 py-4",
    children: x.jsxs("div", {
        "data-lov-id": "src/components/Header.tsx:8:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/Header.tsx",
        "data-component-line": "8",
        "data-component-file": "Header.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22max-w-7xl%20mx-auto%20flex%20items-center%20justify-end%20gap-6%22%7D",
        className: "max-w-7xl mx-auto flex items-center justify-end gap-6",
        children: [x.jsxs("a", {
            "data-lov-id": "src/components/Header.tsx:10:8",
            "data-lov-name": "a",
            "data-component-path": "src/components/Header.tsx",
            "data-component-line": "10",
            "data-component-file": "Header.tsx",
            "data-component-name": "a",
            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20glass-card%20px-4%20py-2%20rounded-xl%20hover%3Aborder-primary%2F40%20transition-all%20border%20border-primary%2F20%22%7D",
            href: "https://four.meme",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 glass-card px-4 py-2 rounded-xl hover:border-primary/40 transition-all border border-primary/20",
            children: [x.jsx("span", {
                "data-lov-id": "src/components/Header.tsx:16:10",
                "data-lov-name": "span",
                "data-component-path": "src/components/Header.tsx",
                "data-component-line": "16",
                "data-component-file": "Header.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22text%22%3A%22powered%20by%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                className: "text-sm text-muted-foreground",
                children: "powered by"
            }), x.jsx("img", {
                "data-lov-id": "src/components/Header.tsx:17:10",
                "data-lov-name": "img",
                "data-component-path": "src/components/Header.tsx",
                "data-component-line": "17",
                "data-component-file": "Header.tsx",
                "data-component-name": "img",
                "data-component-content": "%7B%22className%22%3A%22h-5%22%7D",
                src: aS,
                alt: "four.meme",
                className: "h-5"
            })]
        }), x.jsxs("a", {
            "data-lov-id": "src/components/Header.tsx:21:8",
            "data-lov-name": "a",
            "data-component-path": "src/components/Header.tsx",
            "data-component-line": "21",
            "data-component-file": "Header.tsx",
            "data-component-name": "a",
            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20glass-card%20px-4%20py-2%20rounded-xl%20hover%3Aborder-primary%2F40%20transition-all%20border%20border-primary%2F20%20group%22%7D",
            href: "https://x.com/Larpbnb",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-3 glass-card px-4 py-2 rounded-xl hover:border-primary/40 transition-all border border-primary/20 group",
            children: [x.jsx("img", {
                "data-lov-id": "src/components/Header.tsx:27:10",
                "data-lov-name": "img",
                "data-component-path": "src/components/Header.tsx",
                "data-component-line": "27",
                "data-component-file": "Header.tsx",
                "data-component-name": "img",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20ring-2%20ring-primary%2F30%20group-hover%3Aring-primary%2F50%20transition-all%22%7D",
                src: sS,
                alt: "Larp Profile",
                className: "w-10 h-10 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all"
            }), x.jsxs("div", {
                "data-lov-id": "src/components/Header.tsx:32:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/Header.tsx",
                "data-component-line": "32",
                "data-component-file": "Header.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%22%7D",
                className: "flex flex-col",
                children: [x.jsxs("div", {
                    "data-lov-id": "src/components/Header.tsx:33:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Header.tsx",
                    "data-component-line": "33",
                    "data-component-file": "Header.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-1.5%22%7D",
                    className: "flex items-center gap-1.5",
                    children: [x.jsx("span", {
                        "data-lov-id": "src/components/Header.tsx:34:14",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/Header.tsx",
                        "data-component-line": "34",
                        "data-component-file": "Header.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22Larp%22%2C%22className%22%3A%22text-sm%20font-bold%20text-foreground%22%7D",
                        className: "text-sm font-bold text-foreground",
                        children: "Larp"
                    }), x.jsx(Yc, {
                        "data-lov-id": "src/components/Header.tsx:35:14",
                        "data-lov-name": "BadgeCheck",
                        "data-component-path": "src/components/Header.tsx",
                        "data-component-line": "35",
                        "data-component-file": "Header.tsx",
                        "data-component-name": "BadgeCheck",
                        "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%20text-primary%20fill-primary%20flex-shrink-0%22%7D",
                        className: "w-4 h-4 text-primary fill-primary flex-shrink-0"
                    })]
                }), x.jsx("span", {
                    "data-lov-id": "src/components/Header.tsx:37:12",
                    "data-lov-name": "span",
                    "data-component-path": "src/components/Header.tsx",
                    "data-component-line": "37",
                    "data-component-file": "Header.tsx",
                    "data-component-name": "span",
                    "data-component-content": "%7B%22text%22%3A%22%40Larpbnb%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                    className: "text-xs text-muted-foreground",
                    children: "@Larpbnb"
                })]
            })]
        })]
    })
})
  , lS = () => {
    const [e,t] = w.useState(!1)
      , {toast: n} = Fm()
      , o = async () => {
        try {
          // Fetch the latest contract/text from your Worker
          const res = await fetch('https://bold-wave-c915.sasal123zxc.workers.dev/address', {
            cache: "no-store"
          });
          const data = await res.json();
          const text = data.address || 'No address set';
      
          // Copy to clipboard
          await navigator.clipboard.writeText(text);
      
          // Notify the user
          t(!0);
          n({
            title: "Copied!",
            description: "Contract address copied to clipboard",
          });
      
          setTimeout(() => t(!1), 2000);
        } catch (err) {
          console.error('Error copying contract address:', err);
          n({
            title: "Error",
            description: "Failed to copy contract address",
          });
        }
      };
      
    ;
    return x.jsxs("section", {
        "data-lov-id": "src/components/Hero.tsx:19:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/Hero.tsx",
        "data-component-line": "19",
        "data-component-file": "Hero.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22min-h-screen%20flex%20flex-col%20items-center%20justify-center%20px-4%20py-20%20relative%20overflow-hidden%22%7D",
        className: "min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden",
        children: [x.jsx("div", {
            "data-lov-id": "src/components/Hero.tsx:21:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/Hero.tsx",
            "data-component-line": "21",
            "data-component-file": "Hero.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20top-1%2F4%20-left-32%20w-96%20h-96%20bg-primary%2F8%20rounded-full%20blur-%5B120px%5D%20animate-pulse-glow%22%7D",
            className: "absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse-glow"
        }), x.jsx("div", {
            "data-lov-id": "src/components/Hero.tsx:22:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/Hero.tsx",
            "data-component-line": "22",
            "data-component-file": "Hero.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-1%2F4%20-right-32%20w-96%20h-96%20bg-primary%2F5%20rounded-full%20blur-%5B120px%5D%20animate-pulse-glow%22%7D",
            className: "absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow",
            style: {
                animationDelay: "1s"
            }
        }), x.jsxs("div", {
            "data-lov-id": "src/components/Hero.tsx:24:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/Hero.tsx",
            "data-component-line": "24",
            "data-component-file": "Hero.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22relative%20z-10%20text-center%20space-y-12%20animate-fadeIn%20max-w-5xl%20mx-auto%22%7D",
            className: "relative z-10 text-center space-y-12 animate-fadeIn max-w-5xl mx-auto",
            children: [x.jsx("div", {
                "data-lov-id": "src/components/Hero.tsx:26:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/Hero.tsx",
                "data-component-line": "26",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                className: "relative",
                children: x.jsx("h1", {
                    "data-lov-id": "src/components/Hero.tsx:27:10",
                    "data-lov-name": "h1",
                    "data-component-path": "src/components/Hero.tsx",
                    "data-component-line": "27",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "h1",
                    "data-component-content": "%7B%22className%22%3A%22text-9xl%20md%3Atext-%5B12rem%5D%20font-black%20tracking-tighter%20relative%22%7D",
                    className: "text-9xl md:text-[12rem] font-black tracking-tighter relative",
                    children: x.jsx("span", {
                        "data-lov-id": "src/components/Hero.tsx:28:12",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/Hero.tsx",
                        "data-component-line": "28",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22LARP%22%2C%22className%22%3A%22animate-gradient-wave%20bg-gradient-to-r%20from-yellow-dim%20via-primary%20via-yellow-bright%20via-yellow-glow%20to-yellow-dim%20bg-clip-text%20text-transparent%22%7D",
                        className: "animate-gradient-wave bg-gradient-to-r from-yellow-dim via-primary via-yellow-bright via-yellow-glow to-yellow-dim bg-clip-text text-transparent",
                        style: {
                            backgroundSize: "300% auto"
                        },
                        children: "LARP"
                    })
                })
            }), x.jsx("div", {
                "data-lov-id": "src/components/Hero.tsx:33:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/Hero.tsx",
                "data-component-line": "33",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22animate-slideUp%22%7D",
                className: "animate-slideUp",
                style: {
                    animationDelay: "0.2s"
                },
                children: x.jsx("div", {
                    "data-lov-id": "src/components/Hero.tsx:34:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Hero.tsx",
                    "data-component-line": "34",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22glass-card%20rounded-2xl%20p-6%20md%3Ap-8%20inline-block%22%7D",
                    className: "glass-card rounded-2xl p-6 md:p-8 inline-block",
                    children: x.jsxs("p", {
                        "data-lov-id": "src/components/Hero.tsx:35:12",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/Hero.tsx",
                        "data-component-line": "35",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Live%20Action%20Role%20Play%20meets%22%2C%22className%22%3A%22text-2xl%20md%3Atext-4xl%20font-semibold%20text-foreground%20leading-relaxed%22%7D",
                        className: "text-2xl md:text-4xl font-semibold text-foreground leading-relaxed",
                        children: ["Live Action Role Play meets", " ", x.jsx("span", {
                            "data-lov-id": "src/components/Hero.tsx:37:14",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/Hero.tsx",
                            "data-component-line": "37",
                            "data-component-file": "Hero.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Crypto%20Culture%22%2C%22className%22%3A%22text-gradient%20font-bold%22%7D",
                            className: "text-gradient font-bold",
                            children: "Crypto Culture"
                        })]
                    })
                })
            }), x.jsx("div", {
                "data-lov-id": "src/components/Hero.tsx:43:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/Hero.tsx",
                "data-component-line": "43",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22animate-fadeInScale%22%7D",
                className: "animate-fadeInScale",
                style: {
                    animationDelay: "0.3s"
                },
                children: x.jsx("p", {
                    "data-lov-id": "src/components/Hero.tsx:44:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/Hero.tsx",
                    "data-component-line": "44",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22Imagine%20becoming%20rich%20buying%20a%20larp%22%2C%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-medium%20text-muted-foreground%20italic%22%7D",
                    className: "text-xl md:text-2xl font-medium text-muted-foreground italic",
                    children: "Imagine becoming rich buying a larp"
                })
            }), x.jsxs("div", {
                "data-lov-id": "src/components/Hero.tsx:50:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/Hero.tsx",
                "data-component-line": "50",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-4%20justify-center%20pt-8%20animate-fadeInScale%22%7D",
                className: "flex flex-wrap gap-4 justify-center pt-8 animate-fadeInScale",
                style: {
                    animationDelay: "0.4s"
                },
                children: [x.jsx("a", {
                    "data-lov-id": "src/components/Hero.tsx:51:10",
                    "data-lov-name": "a",
                    "data-component-path": "src/components/Hero.tsx",
                    "data-component-line": "51",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "a",
                    "data-component-content": "%7B%22className%22%3A%22group%20relative%20px-8%20py-4%20rounded-xl%20font-semibold%20text-base%20overflow-hidden%20transition-all%20hover%3Ascale-105%20bg-card%20border-2%20border-primary%2F30%20hover%3Aborder-primary%2F60%20hover%3Ashadow-%5B0_0_30px_rgba(250%2C204%2C21%2C0.2)%5D%22%7D",
                    href: "https://x.com/larpbnb",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all hover:scale-105 bg-card border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]",
                    children: x.jsxs("span", {
                        "data-lov-id": "src/components/Hero.tsx:57:12",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/Hero.tsx",
                        "data-component-line": "57",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22Twitter%22%2C%22className%22%3A%22relative%20flex%20items-center%20gap-2.5%20text-foreground%20group-hover%3Atext-primary%20transition-colors%22%7D",
                        className: "relative flex items-center gap-2.5 text-foreground group-hover:text-primary transition-colors",
                        children: [x.jsx("svg", {
                            "data-lov-id": "src/components/Hero.tsx:58:14",
                            "data-lov-name": "svg",
                            "data-component-path": "src/components/Hero.tsx",
                            "data-component-line": "58",
                            "data-component-file": "Hero.tsx",
                            "data-component-name": "svg",
                            "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: x.jsx("path", {
                                "data-lov-id": "src/components/Hero.tsx:59:16",
                                "data-lov-name": "path",
                                "data-component-path": "src/components/Hero.tsx",
                                "data-component-line": "59",
                                "data-component-file": "Hero.tsx",
                                "data-component-name": "path",
                                "data-component-content": "%7B%7D",
                                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            })
                        }), ""]
                    })
                }),
                x.jsx("button", {
                    "data-lov-id": "src/components/Hero.tsx:79:10",
                    "data-lov-name": "button",
                    "data-component-path": "src/components/Hero.tsx",
                    "data-component-line": "79",
                    "data-component-file": "Hero.tsx",
                    "data-component-name": "button",
                    "data-component-content": "%7B%22className%22%3A%22group%20relative%20px-8%20py-4%20rounded-xl%20font-semibold%20text-base%20overflow-hidden%20transition-all%20hover%3Ascale-105%20bg-primary%20hover%3Abg-primary%2F90%20border-2%20border-primary%20hover%3Aborder-primary%20hover%3Ashadow-%5B0_0_30px_rgba(250%2C204%2C21%2C0.3)%5D%22%7D",
                    onClick: o,
                    className: "group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all hover:scale-105 bg-primary hover:bg-primary/90 border-2 border-primary hover:border-primary hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]",
                    children: x.jsx("span", {
                        "data-lov-id": "src/components/Hero.tsx:83:12",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/Hero.tsx",
                        "data-component-line": "83",
                        "data-component-file": "Hero.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22className%22%3A%22relative%20flex%20items-center%20gap-2.5%20text-primary-foreground%22%7D",
                        className: "relative flex items-center gap-2.5 text-primary-foreground",
                        children: e ? x.jsxs(x.Fragment, {
                            children: [x.jsx("svg", {
                                "data-lov-id": "src/components/Hero.tsx:86:18",
                                "data-lov-name": "svg",
                                "data-component-path": "src/components/Hero.tsx",
                                "data-component-line": "86",
                                "data-component-file": "Hero.tsx",
                                "data-component-name": "svg",
                                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: x.jsx("path", {
                                    "data-lov-id": "src/components/Hero.tsx:87:20",
                                    "data-lov-name": "path",
                                    "data-component-path": "src/components/Hero.tsx",
                                    "data-component-line": "87",
                                    "data-component-file": "Hero.tsx",
                                    "data-component-name": "path",
                                    "data-component-content": "%7B%7D",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 13l4 4L19 7"
                                })
                            }), "Copied!"]
                        }) : x.jsxs(x.Fragment, {
                            children: [x.jsx("svg", {
                                "data-lov-id": "src/components/Hero.tsx:93:18",
                                "data-lov-name": "svg",
                                "data-component-path": "src/components/Hero.tsx",
                                "data-component-line": "93",
                                "data-component-file": "Hero.tsx",
                                "data-component-name": "svg",
                                "data-component-content": "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: x.jsx("path", {
                                    "data-lov-id": "src/components/Hero.tsx:94:20",
                                    "data-lov-name": "path",
                                    "data-component-path": "src/components/Hero.tsx",
                                    "data-component-line": "94",
                                    "data-component-file": "Hero.tsx",
                                    "data-component-name": "path",
                                    "data-component-content": "%7B%7D",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                })
                            }), "Copy CA"]
                        })
                    })
                })]
            }), x.jsx("div", {
                "data-lov-id": "src/components/Hero.tsx:104:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/Hero.tsx",
                "data-component-line": "104",
                "data-component-file": "Hero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20-bottom-32%20left-1%2F2%20-translate-x-1%2F2%20w-full%20h-px%20bg-gradient-to-r%20from-transparent%20via-primary%20to-transparent%20opacity-50%22%7D",
                className: "absolute -bottom-32 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
            })]
        })]
    })
}
  , cS = "/assets/cz_profile-BQxGQ-5e.png"
  , uS = () => x.jsxs("section", {
    "data-lov-id": "src/components/CZQuote.tsx:6:4",
    "data-lov-name": "section",
    "data-component-path": "src/components/CZQuote.tsx",
    "data-component-line": "6",
    "data-component-file": "CZQuote.tsx",
    "data-component-name": "section",
    "data-component-content": "%7B%22className%22%3A%22py-32%20px-4%20relative%22%7D",
    className: "py-32 px-4 relative",
    children: [x.jsx("div", {
        "data-lov-id": "src/components/CZQuote.tsx:8:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/CZQuote.tsx",
        "data-component-line": "8",
        "data-component-file": "CZQuote.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22absolute%20top-0%20left-1%2F2%20-translate-x-1%2F2%20w-full%20h-px%20bg-gradient-to-r%20from-transparent%20via-primary%2F50%20to-transparent%22%7D",
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
    }), x.jsx("div", {
        "data-lov-id": "src/components/CZQuote.tsx:10:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/CZQuote.tsx",
        "data-component-line": "10",
        "data-component-file": "CZQuote.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
        className: "max-w-4xl mx-auto",
        children: x.jsxs("div", {
            "data-lov-id": "src/components/CZQuote.tsx:11:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/CZQuote.tsx",
            "data-component-line": "11",
            "data-component-file": "CZQuote.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22group%20relative%20animate-fadeIn%22%7D",
            className: "group relative animate-fadeIn",
            children: [x.jsx("div", {
                "data-lov-id": "src/components/CZQuote.tsx:13:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/CZQuote.tsx",
                "data-component-line": "13",
                "data-component-file": "CZQuote.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20-inset-2%20bg-gradient-to-r%20from-primary%2F20%20via-primary%2F30%20to-primary%2F20%20rounded-3xl%20blur-2xl%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%22%7D",
                className: "absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            }), x.jsxs("div", {
                "data-lov-id": "src/components/CZQuote.tsx:16:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/CZQuote.tsx",
                "data-component-line": "16",
                "data-component-file": "CZQuote.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%20glass-card%20rounded-3xl%20p-8%20md%3Ap-12%20border-2%20border-primary%2F20%20transition-all%20duration-500%20group-hover%3Aborder-primary%2F40%20group-hover%3Ashadow-%5Bvar(--shadow-card-hover)%5D%20group-hover%3A-translate-y-2%22%7D",
                className: "relative glass-card rounded-3xl p-8 md:p-12 border-2 border-primary/20 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[var(--shadow-card-hover)] group-hover:-translate-y-2",
                children: [x.jsx("div", {
                    "data-lov-id": "src/components/CZQuote.tsx:18:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/CZQuote.tsx",
                    "data-component-line": "18",
                    "data-component-file": "CZQuote.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20rounded-3xl%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%20pointer-events-none%20overflow-hidden%22%7D",
                    className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden",
                    children: x.jsx("div", {
                        "data-lov-id": "src/components/CZQuote.tsx:19:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CZQuote.tsx",
                        "data-component-line": "19",
                        "data-component-file": "CZQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-%5B-2px%5D%20animate-border%20rounded-3xl%22%7D",
                        className: "absolute inset-[-2px] animate-border rounded-3xl",
                        style: {
                            padding: "2px",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude"
                        }
                    })
                }), x.jsxs("div", {
                    "data-lov-id": "src/components/CZQuote.tsx:27:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/CZQuote.tsx",
                    "data-component-line": "27",
                    "data-component-file": "CZQuote.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-6%20mb-8%22%7D",
                    className: "flex items-start gap-6 mb-8",
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/CZQuote.tsx:28:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CZQuote.tsx",
                        "data-component-line": "28",
                        "data-component-file": "CZQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22relative%20flex-shrink-0%22%7D",
                        className: "relative flex-shrink-0",
                        children: x.jsx("img", {
                            "data-lov-id": "src/components/CZQuote.tsx:29:16",
                            "data-lov-name": "img",
                            "data-component-path": "src/components/CZQuote.tsx",
                            "data-component-line": "29",
                            "data-component-file": "CZQuote.tsx",
                            "data-component-name": "img",
                            "data-component-content": "%7B%22className%22%3A%22relative%20w-20%20h-20%20rounded-full%20ring-2%20ring-primary%2F30%20transition-all%20duration-300%20group-hover%3Aring-primary%2F50%22%7D",
                            src: cS,
                            alt: "CZ Profile",
                            className: "relative w-20 h-20 rounded-full ring-2 ring-primary/30 transition-all duration-300 group-hover:ring-primary/50"
                        })
                    }), x.jsxs("div", {
                        "data-lov-id": "src/components/CZQuote.tsx:36:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CZQuote.tsx",
                        "data-component-line": "36",
                        "data-component-file": "CZQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex-1%22%7D",
                        className: "flex-1",
                        children: [x.jsxs("div", {
                            "data-lov-id": "src/components/CZQuote.tsx:37:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/CZQuote.tsx",
                            "data-component-line": "37",
                            "data-component-file": "CZQuote.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-2%22%7D",
                            className: "flex items-center gap-3 mb-2",
                            children: [x.jsx("h3", {
                                "data-lov-id": "src/components/CZQuote.tsx:38:18",
                                "data-lov-name": "h3",
                                "data-component-path": "src/components/CZQuote.tsx",
                                "data-component-line": "38",
                                "data-component-file": "CZQuote.tsx",
                                "data-component-name": "h3",
                                "data-component-content": "%7B%22text%22%3A%22CZ%20BNB%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-foreground%20group-hover%3Atext-gradient%20transition-all%22%7D",
                                className: "text-2xl font-bold text-foreground group-hover:text-gradient transition-all",
                                children: "CZ BNB"
                            }), x.jsx(Yc, {
                                "data-lov-id": "src/components/CZQuote.tsx:41:18",
                                "data-lov-name": "BadgeCheck",
                                "data-component-path": "src/components/CZQuote.tsx",
                                "data-component-line": "41",
                                "data-component-file": "CZQuote.tsx",
                                "data-component-name": "BadgeCheck",
                                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-%5B%231DA1F2%5D%20fill-%5B%231DA1F2%5D%20flex-shrink-0%22%7D",
                                className: "w-6 h-6 text-[#1DA1F2] fill-[#1DA1F2] flex-shrink-0"
                            })]
                        }), x.jsx("p", {
                            "data-lov-id": "src/components/CZQuote.tsx:43:16",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/CZQuote.tsx",
                            "data-component-line": "43",
                            "data-component-file": "CZQuote.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22%40cz_binance%22%2C%22className%22%3A%22text-muted-foreground%20text-lg%22%7D",
                            className: "text-muted-foreground text-lg",
                            children: "@cz_binance"
                        })]
                    })]
                }), x.jsx("blockquote", {
                    "data-lov-id": "src/components/CZQuote.tsx:47:12",
                    "data-lov-name": "blockquote",
                    "data-component-path": "src/components/CZQuote.tsx",
                    "data-component-line": "47",
                    "data-component-file": "CZQuote.tsx",
                    "data-component-name": "blockquote",
                    "data-component-content": "%7B%22className%22%3A%22relative%20mb-8%22%7D",
                    className: "relative mb-8",
                    children: x.jsx("p", {
                        "data-lov-id": "src/components/CZQuote.tsx:48:14",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/CZQuote.tsx",
                        "data-component-line": "48",
                        "data-component-file": "CZQuote.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22If%20you%20believe%20in%20fake%20news%2C%20you%20will%20be%20poor.%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20text-foreground%20leading-relaxed%22%7D",
                        className: "text-2xl md:text-3xl text-foreground leading-relaxed",
                        children: "If you believe in fake news, you will be poor."
                    })
                }), x.jsxs("div", {
                    "data-lov-id": "src/components/CZQuote.tsx:54:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/CZQuote.tsx",
                    "data-component-line": "54",
                    "data-component-file": "CZQuote.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22mt-8%20pt-6%20border-t%20border-border%2F50%20flex%20items-center%20justify-between%20gap-4%20flex-wrap%22%7D",
                    className: "mt-8 pt-6 border-t border-border/50 flex items-center justify-between gap-4 flex-wrap",
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/CZQuote.tsx:55:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/CZQuote.tsx",
                        "data-component-line": "55",
                        "data-component-file": "CZQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%20text-muted-foreground%20text-sm%22%7D",
                        className: "flex items-center gap-4 text-muted-foreground text-sm",
                        children: x.jsx("span", {
                            "data-lov-id": "src/components/CZQuote.tsx:56:16",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/CZQuote.tsx",
                            "data-component-line": "56",
                            "data-component-file": "CZQuote.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22December%2017%2C%202021%22%7D",
                            children: "December 17, 2021"
                        })
                    }), x.jsxs("a", {
                        "data-lov-id": "src/components/CZQuote.tsx:58:14",
                        "data-lov-name": "a",
                        "data-component-path": "src/components/CZQuote.tsx",
                        "data-component-line": "58",
                        "data-component-file": "CZQuote.tsx",
                        "data-component-name": "a",
                        "data-component-content": "%7B%22text%22%3A%22View%20on%20Twitter%22%2C%22className%22%3A%22inline-flex%20items-center%20gap-2%20px-4%20py-2%20rounded-lg%20bg-%5B%231DA1F2%5D%20hover%3Abg-%5B%231a8cd8%5D%20text-white%20font-medium%20transition-colors%22%7D",
                        href: "https://x.com/cz_binance/status/1471911087503290375",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white font-medium transition-colors",
                        children: ["View on Twitter", x.jsx(ch, {
                            "data-lov-id": "src/components/CZQuote.tsx:65:16",
                            "data-lov-name": "ExternalLink",
                            "data-component-path": "src/components/CZQuote.tsx",
                            "data-component-line": "65",
                            "data-component-file": "CZQuote.tsx",
                            "data-component-name": "ExternalLink",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4"
                        })]
                    })]
                })]
            })]
        })
    })]
})
  , dS = "/assets/larp_dice-B3N5ofSe.png"
  , pS = "/assets/sbf_profile-BluKgs-M.png"
  , fS = () => x.jsxs("section", {
    "data-lov-id": "src/components/SBFQuote.tsx:7:4",
    "data-lov-name": "section",
    "data-component-path": "src/components/SBFQuote.tsx",
    "data-component-line": "7",
    "data-component-file": "SBFQuote.tsx",
    "data-component-name": "section",
    "data-component-content": "%7B%22className%22%3A%22py-20%20px-4%20relative%22%7D",
    className: "py-20 px-4 relative",
    children: [x.jsx("div", {
        "data-lov-id": "src/components/SBFQuote.tsx:9:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/SBFQuote.tsx",
        "data-component-line": "9",
        "data-component-file": "SBFQuote.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22absolute%20top-0%20left-1%2F2%20-translate-x-1%2F2%20w-full%20h-px%20bg-gradient-to-r%20from-transparent%20via-primary%2F50%20to-transparent%22%7D",
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
    }), x.jsx("div", {
        "data-lov-id": "src/components/SBFQuote.tsx:11:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/SBFQuote.tsx",
        "data-component-line": "11",
        "data-component-file": "SBFQuote.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
        className: "max-w-4xl mx-auto",
        children: x.jsxs("div", {
            "data-lov-id": "src/components/SBFQuote.tsx:12:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/SBFQuote.tsx",
            "data-component-line": "12",
            "data-component-file": "SBFQuote.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22group%20relative%20animate-fadeIn%22%7D",
            className: "group relative animate-fadeIn",
            children: [x.jsx("div", {
                "data-lov-id": "src/components/SBFQuote.tsx:14:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/SBFQuote.tsx",
                "data-component-line": "14",
                "data-component-file": "SBFQuote.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20-inset-2%20bg-gradient-to-r%20from-primary%2F20%20via-primary%2F30%20to-primary%2F20%20rounded-3xl%20blur-2xl%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%22%7D",
                className: "absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            }), x.jsxs("div", {
                "data-lov-id": "src/components/SBFQuote.tsx:17:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/SBFQuote.tsx",
                "data-component-line": "17",
                "data-component-file": "SBFQuote.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%20glass-card%20rounded-3xl%20p-6%20md%3Ap-8%20border-2%20border-primary%2F20%20transition-all%20duration-500%20group-hover%3Aborder-primary%2F40%20group-hover%3Ashadow-%5Bvar(--shadow-card-hover)%5D%20group-hover%3A-translate-y-2%22%7D",
                className: "relative glass-card rounded-3xl p-6 md:p-8 border-2 border-primary/20 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[var(--shadow-card-hover)] group-hover:-translate-y-2",
                children: [x.jsx("div", {
                    "data-lov-id": "src/components/SBFQuote.tsx:19:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/SBFQuote.tsx",
                    "data-component-line": "19",
                    "data-component-file": "SBFQuote.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20rounded-3xl%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%20pointer-events-none%20overflow-hidden%22%7D",
                    className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden",
                    children: x.jsx("div", {
                        "data-lov-id": "src/components/SBFQuote.tsx:20:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "20",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-%5B-2px%5D%20animate-border%20rounded-3xl%22%7D",
                        className: "absolute inset-[-2px] animate-border rounded-3xl",
                        style: {
                            padding: "2px",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude"
                        }
                    })
                }), x.jsxs("div", {
                    "data-lov-id": "src/components/SBFQuote.tsx:28:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/SBFQuote.tsx",
                    "data-component-line": "28",
                    "data-component-file": "SBFQuote.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-6%20mb-6%22%7D",
                    className: "flex items-start gap-6 mb-6",
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/SBFQuote.tsx:29:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "29",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22relative%20flex-shrink-0%22%7D",
                        className: "relative flex-shrink-0",
                        children: x.jsx("img", {
                            "data-lov-id": "src/components/SBFQuote.tsx:30:16",
                            "data-lov-name": "img",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "30",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "img",
                            "data-component-content": "%7B%22className%22%3A%22relative%20w-16%20h-16%20rounded-full%20ring-2%20ring-primary%2F30%20transition-all%20duration-300%20group-hover%3Aring-primary%2F50%22%7D",
                            src: pS,
                            alt: "SBF Profile",
                            className: "relative w-16 h-16 rounded-full ring-2 ring-primary/30 transition-all duration-300 group-hover:ring-primary/50"
                        })
                    }), x.jsxs("div", {
                        "data-lov-id": "src/components/SBFQuote.tsx:37:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "37",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex-1%22%7D",
                        className: "flex-1",
                        children: [x.jsxs("div", {
                            "data-lov-id": "src/components/SBFQuote.tsx:38:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "38",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-2%22%7D",
                            className: "flex items-center gap-3 mb-2",
                            children: [x.jsx("h3", {
                                "data-lov-id": "src/components/SBFQuote.tsx:39:18",
                                "data-lov-name": "h3",
                                "data-component-path": "src/components/SBFQuote.tsx",
                                "data-component-line": "39",
                                "data-component-file": "SBFQuote.tsx",
                                "data-component-name": "h3",
                                "data-component-content": "%7B%22text%22%3A%22SBF%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-foreground%20group-hover%3Atext-gradient%20transition-all%22%7D",
                                className: "text-2xl font-bold text-foreground group-hover:text-gradient transition-all",
                                children: "SBF"
                            }), x.jsx(Yc, {
                                "data-lov-id": "src/components/SBFQuote.tsx:42:18",
                                "data-lov-name": "BadgeCheck",
                                "data-component-path": "src/components/SBFQuote.tsx",
                                "data-component-line": "42",
                                "data-component-file": "SBFQuote.tsx",
                                "data-component-name": "BadgeCheck",
                                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-%5B%231DA1F2%5D%20fill-%5B%231DA1F2%5D%20flex-shrink-0%22%7D",
                                className: "w-6 h-6 text-[#1DA1F2] fill-[#1DA1F2] flex-shrink-0"
                            })]
                        }), x.jsx("p", {
                            "data-lov-id": "src/components/SBFQuote.tsx:44:16",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "44",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22%40SBF_FTX%22%2C%22className%22%3A%22text-muted-foreground%20text-lg%22%7D",
                            className: "text-muted-foreground text-lg",
                            children: "@SBF_FTX"
                        })]
                    })]
                }), x.jsx("blockquote", {
                    "data-lov-id": "src/components/SBFQuote.tsx:48:12",
                    "data-lov-name": "blockquote",
                    "data-component-path": "src/components/SBFQuote.tsx",
                    "data-component-line": "48",
                    "data-component-file": "SBFQuote.tsx",
                    "data-component-name": "blockquote",
                    "data-component-content": "%7B%22className%22%3A%22relative%20mb-6%22%7D",
                    className: "relative mb-6",
                    children: x.jsx("p", {
                        "data-lov-id": "src/components/SBFQuote.tsx:49:14",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "49",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Ok%2C%20imma%20be%20honest%3A%20I%20have%20no%20idea%20what%20'larp'%20means%20in%20the%20context%20of%20crypto%20twitter.%20Where%20I'm%20from%2C%20it%20means%20this%3A%22%2C%22className%22%3A%22text-xl%20md%3Atext-2xl%20text-foreground%20leading-relaxed%22%7D",
                        className: "text-xl md:text-2xl text-foreground leading-relaxed",
                        children: "Ok, imma be honest: I have no idea what 'larp' means in the context of crypto twitter. Where I'm from, it means this:"
                    })
                }), x.jsxs("a", {
                    "data-lov-id": "src/components/SBFQuote.tsx:55:12",
                    "data-lov-name": "a",
                    "data-component-path": "src/components/SBFQuote.tsx",
                    "data-component-line": "55",
                    "data-component-file": "SBFQuote.tsx",
                    "data-component-name": "a",
                    "data-component-content": "%7B%22className%22%3A%22block%20border%20border-border%2F50%20rounded-2xl%20overflow-hidden%20hover%3Aborder-primary%2F50%20transition-all%20duration-300%20group%2Flink%22%7D",
                    href: "https://en.wikipedia.org/wiki/Live_action_role-playing_game",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "block border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group/link",
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/SBFQuote.tsx:61:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "61",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22aspect-%5B3%2F1%5D%20bg-gradient-to-br%20from-muted%20to-muted%2F50%20flex%20items-center%20justify-center%20overflow-hidden%22%7D",
                        className: "aspect-[3/1] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden",
                        children: x.jsx("img", {
                            "data-lov-id": "src/components/SBFQuote.tsx:62:16",
                            "data-lov-name": "img",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "62",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "img",
                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20opacity-90%20group-hover%2Flink%3Aopacity-100%20transition-opacity%22%7D",
                            src: dS,
                            alt: "LARP Dice",
                            className: "w-full h-full object-cover opacity-90 group-hover/link:opacity-100 transition-opacity"
                        })
                    }), x.jsxs("div", {
                        "data-lov-id": "src/components/SBFQuote.tsx:68:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "68",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22p-3%20bg-card%2F50%22%7D",
                        className: "p-3 bg-card/50",
                        children: [x.jsx("p", {
                            "data-lov-id": "src/components/SBFQuote.tsx:69:16",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "69",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22en.wikipedia.org%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%20mb-1%22%7D",
                            className: "text-xs text-muted-foreground mb-1",
                            children: "en.wikipedia.org"
                        }), x.jsx("h4", {
                            "data-lov-id": "src/components/SBFQuote.tsx:70:16",
                            "data-lov-name": "h4",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "70",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "h4",
                            "data-component-content": "%7B%22text%22%3A%22Live%20action%20role-playing%20game%22%2C%22className%22%3A%22text-base%20font-bold%20text-foreground%20group-hover%2Flink%3Atext-primary%20transition-colors%22%7D",
                            className: "text-base font-bold text-foreground group-hover/link:text-primary transition-colors",
                            children: "Live action role-playing game"
                        }), x.jsx("p", {
                            "data-lov-id": "src/components/SBFQuote.tsx:73:16",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "73",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22A%20live%20action%20role-playing%20game%20(LARP)%20is%20a%20form%20of%20role-playing%20game%20where%20the%20participants%20physically%20portray%20their%20characters.%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%20mt-1%20line-clamp-2%22%7D",
                            className: "text-xs text-muted-foreground mt-1 line-clamp-2",
                            children: "A live action role-playing game (LARP) is a form of role-playing game where the participants physically portray their characters."
                        })]
                    })]
                }), x.jsxs("div", {
                    "data-lov-id": "src/components/SBFQuote.tsx:80:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/SBFQuote.tsx",
                    "data-component-line": "80",
                    "data-component-file": "SBFQuote.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22mt-6%20pt-4%20border-t%20border-border%2F50%20flex%20items-center%20justify-between%20gap-4%20flex-wrap%22%7D",
                    className: "mt-6 pt-4 border-t border-border/50 flex items-center justify-between gap-4 flex-wrap",
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/SBFQuote.tsx:81:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "81",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%20text-muted-foreground%20text-sm%22%7D",
                        className: "flex items-center gap-4 text-muted-foreground text-sm",
                        children: x.jsx("span", {
                            "data-lov-id": "src/components/SBFQuote.tsx:82:16",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "82",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22August%204%2C%202019%22%7D",
                            children: "August 4, 2019"
                        })
                    }), x.jsxs("a", {
                        "data-lov-id": "src/components/SBFQuote.tsx:84:14",
                        "data-lov-name": "a",
                        "data-component-path": "src/components/SBFQuote.tsx",
                        "data-component-line": "84",
                        "data-component-file": "SBFQuote.tsx",
                        "data-component-name": "a",
                        "data-component-content": "%7B%22text%22%3A%22View%20on%20Twitter%22%2C%22className%22%3A%22inline-flex%20items-center%20gap-2%20px-4%20py-2%20rounded-lg%20bg-%5B%231DA1F2%5D%20hover%3Abg-%5B%231a8cd8%5D%20text-white%20font-medium%20transition-colors%22%7D",
                        href: "https://x.com/sbf_ftx/status/1157846585683791873",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white font-medium transition-colors",
                        children: ["View on Twitter", x.jsx(ch, {
                            "data-lov-id": "src/components/SBFQuote.tsx:91:16",
                            "data-lov-name": "ExternalLink",
                            "data-component-path": "src/components/SBFQuote.tsx",
                            "data-component-line": "91",
                            "data-component-file": "SBFQuote.tsx",
                            "data-component-name": "ExternalLink",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4"
                        })]
                    })]
                })]
            })]
        })
    })]
})
  , mS = () => {
    const e = [{
        title: "The Origin",
        content: "Originally, LARP meant live action role play, where people would dress up and act out the personas of fantasy or fictional characters. In the context of crypto twitter, it means pretending to be someone you're not or saying you did something when you actually didn't.",
        delay: "0s"
    }, {
        title: "Crypto Bros LARPing",
        content: "The most common is probably during bull runs where twitter is suddenly infested with crypto bros larping, claiming they made millions on one trade, or have secret alpha. In reality, they probably still live in a studio with 3 other guys and are afraid to talk to girls when they go out.",
        delay: "0.1s"
    }, {
        title: "Is Crypto Just a Big LARP?",
        content: "You can stay anonymous but become a hugely influential character in the space. You can create a whole new crypto persona and exist only as it and thrive. We're all playing a character in this game.",
        delay: "0.2s"
    }, {
        title: "Crypto Communities as LARP",
        content: "Take the Ethereum core foundation for example, they've created this chain Ethereum, and periodically come together to decide which proposals to pass and implement onto the chain. Isn't this just like gamers in a LARP who decide the rules of the game to facilitate play?",
        delay: "0.3s"
    }, {
        title: "Vision-LARPing",
        content: "Vision-LARPing is role playing as a visionary when you don't have a coherent vision. Most metaverse projects are only moderately visionary with claims that they want to 'build a city you can virtually live in'. But what does that even mean?",
        delay: "0.4s"
    }];
    return x.jsxs("section", {
        "data-lov-id": "src/components/LarpExplainer.tsx:31:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/LarpExplainer.tsx",
        "data-component-line": "31",
        "data-component-file": "LarpExplainer.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-32%20px-4%20relative%20overflow-hidden%22%7D",
        className: "py-32 px-4 relative overflow-hidden",
        children: [x.jsx("div", {
            "data-lov-id": "src/components/LarpExplainer.tsx:33:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/LarpExplainer.tsx",
            "data-component-line": "33",
            "data-component-file": "LarpExplainer.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-b%20from-transparent%20via-background%2F40%20to-background%22%7D",
            className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"
        }), x.jsx("div", {
            "data-lov-id": "src/components/LarpExplainer.tsx:34:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/LarpExplainer.tsx",
            "data-component-line": "34",
            "data-component-file": "LarpExplainer.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20top-1%2F2%20left-1%2F4%20w-96%20h-96%20bg-primary%2F10%20rounded-full%20blur-%5B150px%5D%22%7D",
            className: "absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        }), x.jsx("div", {
            "data-lov-id": "src/components/LarpExplainer.tsx:35:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/LarpExplainer.tsx",
            "data-component-line": "35",
            "data-component-file": "LarpExplainer.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-1%2F4%20right-1%2F4%20w-96%20h-96%20bg-primary%2F10%20rounded-full%20blur-%5B150px%5D%22%7D",
            className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        }), x.jsxs("div", {
            "data-lov-id": "src/components/LarpExplainer.tsx:37:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/LarpExplainer.tsx",
            "data-component-line": "37",
            "data-component-file": "LarpExplainer.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22relative%20max-w-7xl%20mx-auto%20space-y-20%22%7D",
            className: "relative max-w-7xl mx-auto space-y-20",
            children: [x.jsxs("div", {
                "data-lov-id": "src/components/LarpExplainer.tsx:39:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/LarpExplainer.tsx",
                "data-component-line": "39",
                "data-component-file": "LarpExplainer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22text-center%20mb-24%20animate-fadeIn%22%7D",
                className: "text-center mb-24 animate-fadeIn",
                children: [x.jsx("div", {
                    "data-lov-id": "src/components/LarpExplainer.tsx:40:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/LarpExplainer.tsx",
                    "data-component-line": "40",
                    "data-component-file": "LarpExplainer.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22inline-block%20mb-6%22%7D",
                    className: "inline-block mb-6",
                    children: x.jsx("div", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:41:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "41",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22glass-card%20px-6%20py-3%20rounded-full%20border%20border-primary%2F30%22%7D",
                        className: "glass-card px-6 py-3 rounded-full border border-primary/30",
                        children: x.jsx("span", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:42:14",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "42",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Deep%20Dive%22%2C%22className%22%3A%22text-primary%20font-semibold%20text-sm%20tracking-wider%20uppercase%22%7D",
                            className: "text-primary font-semibold text-sm tracking-wider uppercase",
                            children: "Deep Dive"
                        })
                    })
                }), x.jsxs("h2", {
                    "data-lov-id": "src/components/LarpExplainer.tsx:45:10",
                    "data-lov-name": "h2",
                    "data-component-path": "src/components/LarpExplainer.tsx",
                    "data-component-line": "45",
                    "data-component-file": "LarpExplainer.tsx",
                    "data-component-name": "h2",
                    "data-component-content": "%7B%22className%22%3A%22text-5xl%20md%3Atext-7xl%20font-black%20mb-6%22%7D",
                    className: "text-5xl md:text-7xl font-black mb-6",
                    children: [x.jsx("span", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:46:12",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "46",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22What%20is%20LARP%22%2C%22className%22%3A%22text-gradient%22%7D",
                        className: "text-gradient",
                        children: "What is LARP"
                    }), x.jsx("br", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:47:12",
                        "data-lov-name": "br",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "47",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "br",
                        "data-component-content": "%7B%7D"
                    }), x.jsx("span", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:48:12",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "48",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22in%20Crypto%3F%22%2C%22className%22%3A%22text-foreground%22%7D",
                        className: "text-foreground",
                        children: "in Crypto?"
                    })]
                }), x.jsx("p", {
                    "data-lov-id": "src/components/LarpExplainer.tsx:50:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/LarpExplainer.tsx",
                    "data-component-line": "50",
                    "data-component-file": "LarpExplainer.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22Understanding%20the%20culture%20of%20crypto%20role-playing%22%2C%22className%22%3A%22text-xl%20md%3Atext-2xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                    className: "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto",
                    children: "Understanding the culture of crypto role-playing"
                })]
            }), x.jsx("div", {
                "data-lov-id": "src/components/LarpExplainer.tsx:56:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/LarpExplainer.tsx",
                "data-component-line": "56",
                "data-component-file": "LarpExplainer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                className: "grid md:grid-cols-2 gap-8",
                children: e.map( (t, n) => x.jsxs("div", {
                    "data-lov-id": "src/components/LarpExplainer.tsx:58:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/LarpExplainer.tsx",
                    "data-component-line": "58",
                    "data-component-file": "LarpExplainer.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22group%20relative%20animate-slideUp%22%7D",
                    className: "group relative animate-slideUp",
                    style: {
                        animationDelay: t.delay
                    },
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:64:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "64",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20-inset-1%20bg-gradient-to-r%20from-primary%2F20%20to-primary%2F10%20rounded-3xl%20blur-xl%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%22%7D",
                        className: "absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), x.jsxs("div", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:67:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "67",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22relative%20glass-card%20rounded-3xl%20p-8%20md%3Ap-10%20border-2%20border-primary%2F10%20transition-all%20duration-500%20group-hover%3Aborder-primary%2F30%20group-hover%3A-translate-y-2%20h-full%22%7D",
                        className: "relative glass-card rounded-3xl p-8 md:p-10 border-2 border-primary/10 transition-all duration-500 group-hover:border-primary/30 group-hover:-translate-y-2 h-full",
                        children: [x.jsx("h3", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:69:16",
                            "data-lov-name": "h3",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "69",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "h3",
                            "data-component-content": "%7B%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20mb-6%20group-hover%3Atext-gradient%20transition-all%22%7D",
                            className: "text-2xl md:text-3xl font-bold mb-6 group-hover:text-gradient transition-all",
                            children: t.title
                        }), x.jsx("p", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:74:16",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "74",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22className%22%3A%22text-foreground%2F90%20leading-relaxed%20text-lg%22%7D",
                            className: "text-foreground/90 leading-relaxed text-lg",
                            children: t.content
                        }), x.jsx("div", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:79:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "79",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-0%20left-0%20right-0%20h-1%20bg-gradient-to-r%20from-transparent%20via-primary%20to-transparent%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D",
                            className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        })]
                    })]
                }, n))
            }), x.jsx("div", {
                "data-lov-id": "src/components/LarpExplainer.tsx:86:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/LarpExplainer.tsx",
                "data-component-line": "86",
                "data-component-file": "LarpExplainer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22animate-fadeInScale%22%7D",
                className: "animate-fadeInScale",
                style: {
                    animationDelay: "0.5s"
                },
                children: x.jsxs("div", {
                    "data-lov-id": "src/components/LarpExplainer.tsx:87:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/LarpExplainer.tsx",
                    "data-component-line": "87",
                    "data-component-file": "LarpExplainer.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22group%20relative%22%7D",
                    className: "group relative",
                    children: [x.jsx("div", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:89:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "89",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20-inset-2%20bg-gradient-to-r%20from-primary%2F30%20via-primary%2F40%20to-primary%2F30%20rounded-3xl%20blur-2xl%20group-hover%3Ablur-3xl%20transition-all%20duration-500%22%7D",
                        className: "absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"
                    }), x.jsxs("div", {
                        "data-lov-id": "src/components/LarpExplainer.tsx:91:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/LarpExplainer.tsx",
                        "data-component-line": "91",
                        "data-component-file": "LarpExplainer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22relative%20glass-card%20rounded-3xl%20p-12%20md%3Ap-16%20border-2%20border-primary%2F40%20group-hover%3Aborder-primary%2F60%20transition-all%20duration-500%20text-center%22%7D",
                        className: "relative glass-card rounded-3xl p-12 md:p-16 border-2 border-primary/40 group-hover:border-primary/60 transition-all duration-500 text-center",
                        children: [x.jsx("h3", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:92:14",
                            "data-lov-name": "h3",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "92",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "h3",
                            "data-component-content": "%7B%22text%22%3A%22The%20Conclusion%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-8%20text-gradient%22%7D",
                            className: "text-3xl md:text-4xl font-bold mb-8 text-gradient",
                            children: "The Conclusion"
                        }), x.jsx("p", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:95:14",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "95",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22LARP%20is%20like%20a%20network%20that%20is%20here%20this%20moment%20for%20a%20community%20or%20shared%20experience%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20and%20gone%20the%20next.%20Crypto%20will%20continue%20to%20grow%20and%20evolve%20through%20coordinated%20games%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20and%20community%20play.%22%2C%22className%22%3A%22text-xl%20md%3Atext-2xl%20text-foreground%20leading-relaxed%20max-w-4xl%20mx-auto%20font-medium%22%7D",
                            className: "text-xl md:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto font-medium",
                            children: "LARP is like a network that is here this moment for a community or shared experience, and gone the next. Crypto will continue to grow and evolve through coordinated games and community play."
                        }), x.jsx("p", {
                            "data-lov-id": "src/components/LarpExplainer.tsx:100:14",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/LarpExplainer.tsx",
                            "data-component-line": "100",
                            "data-component-file": "LarpExplainer.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Let's%20keep%20LARPing%20on%2C%20people!%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20text-primary%20mt-8%20animate-glow%22%7D",
                            className: "text-2xl md:text-3xl font-bold text-primary mt-8 animate-glow",
                            children: "Let's keep LARPing on, people!"
                        })]
                    })]
                })
            })]
        })]
    })
}
  , hS = () => {
    const [e,t] = w.useState([]);
    return w.useEffect( () => {
        const n = setInterval( () => {
            const o = {
                id: Date.now() + Math.random(),
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                tx: (Math.random() - .5) * 300,
                ty: (Math.random() - .5) * 300,
                size: Math.random() * 1.5 + .8,
                opacity: Math.random() * .4 + .6,
                rotation: Math.random() * 20,
                blur: Math.random() * 2
            };
            t(r => [...r, o]),
            setTimeout( () => {
                t(r => r.filter(a => a.id !== o.id))
            }
            , 5e3)
        }
        , 300);
        return () => clearInterval(n)
    }
    , []),
    x.jsx("div", {
        "data-lov-id": "src/components/LarpParticle.tsx:43:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/LarpParticle.tsx",
        "data-component-line": "43",
        "data-component-file": "LarpParticle.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20pointer-events-none%20z-50%20overflow-hidden%22%7D",
        className: "fixed inset-0 pointer-events-none z-50 overflow-hidden",
        children: e.map(n => x.jsx("div", {
            "data-lov-id": "src/components/LarpParticle.tsx:45:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/LarpParticle.tsx",
            "data-component-line": "45",
            "data-component-file": "LarpParticle.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22text%22%3A%22larp%22%2C%22className%22%3A%22absolute%20font-bold%20animate-particle%22%7D",
            className: "absolute font-bold animate-particle",
            style: {
                left: n.x,
                top: n.y,
                fontSize: `${n.size}rem`,
                opacity: n.opacity,
                "--tx": `${n.tx}px`,
                "--ty": `${n.ty}px`,
                color: `hsl(45, 93%, ${50 + Math.random() * 15}%)`,
                textShadow: `0 0 ${10 + Math.random() * 20}px hsl(45 93% 50% / 0.8)`,
                filter: `blur(${n.blur}px)`,
                transform: `rotate(${n.rotation}deg)`
            },
            children: "larp"
        }, n.id))
    })
}
  , vS = () => x.jsxs("div", {
    "data-lov-id": "src/pages/Index.tsx:10:4",
    "data-lov-name": "div",
    "data-component-path": "src/pages/Index.tsx",
    "data-component-line": "10",
    "data-component-file": "Index.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%20relative%22%7D",
    className: "min-h-screen bg-background relative",
    children: [x.jsx("div", {
        "data-lov-id": "src/pages/Index.tsx:12:6",
        "data-lov-name": "div",
        "data-component-path": "src/pages/Index.tsx",
        "data-component-line": "12",
        "data-component-file": "Index.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20opacity-30%20pointer-events-none%20z-%5B1%5D%22%7D",
        className: "fixed inset-0 opacity-30 pointer-events-none z-[1]",
        style: {
            minHeight: "100vh"
        },
        children: x.jsx("div", {
            "data-lov-id": "src/pages/Index.tsx:13:8",
            "data-lov-name": "div",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "13",
            "data-component-file": "Index.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20h-full%22%7D",
            className: "absolute inset-0 h-full",
            style: {
                backgroundImage: `linear-gradient(hsl(45 93% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(45 93% 50% / 0.3) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                animation: "grid-flow 25s linear infinite",
                minHeight: "200vh"
            }
        })
    }), x.jsx("div", {
        "data-lov-id": "src/pages/Index.tsx:23:6",
        "data-lov-name": "div",
        "data-component-path": "src/pages/Index.tsx",
        "data-component-line": "23",
        "data-component-file": "Index.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20pointer-events-none%20z-%5B2%5D%20animate-gradient-shift%22%7D",
        className: "fixed inset-0 pointer-events-none z-[2] animate-gradient-shift",
        style: {
            background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(45 93% 50% / 0.05) 25%, hsl(var(--background)) 50%, hsl(45 93% 50% / 0.08) 75%, hsl(var(--background)) 100%)",
            backgroundSize: "400% 400%"
        }
    }), x.jsx(iS, {
        "data-lov-id": "src/pages/Index.tsx:28:6",
        "data-lov-name": "Header",
        "data-component-path": "src/pages/Index.tsx",
        "data-component-line": "28",
        "data-component-file": "Index.tsx",
        "data-component-name": "Header",
        "data-component-content": "%7B%7D"
    }), x.jsxs("div", {
        "data-lov-id": "src/pages/Index.tsx:29:6",
        "data-lov-name": "div",
        "data-component-path": "src/pages/Index.tsx",
        "data-component-line": "29",
        "data-component-file": "Index.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22relative%20z-10%22%7D",
        className: "relative z-10",
        children: [x.jsx(hS, {
            "data-lov-id": "src/pages/Index.tsx:30:8",
            "data-lov-name": "LarpParticles",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "30",
            "data-component-file": "Index.tsx",
            "data-component-name": "LarpParticles",
            "data-component-content": "%7B%7D"
        }), x.jsx(lS, {
            "data-lov-id": "src/pages/Index.tsx:31:8",
            "data-lov-name": "Hero",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "31",
            "data-component-file": "Index.tsx",
            "data-component-name": "Hero",
            "data-component-content": "%7B%7D"
        }), x.jsx(uS, {
            "data-lov-id": "src/pages/Index.tsx:32:8",
            "data-lov-name": "CZQuote",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "32",
            "data-component-file": "Index.tsx",
            "data-component-name": "CZQuote",
            "data-component-content": "%7B%7D"
        }), x.jsx(fS, {
            "data-lov-id": "src/pages/Index.tsx:33:8",
            "data-lov-name": "SBFQuote",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "33",
            "data-component-file": "Index.tsx",
            "data-component-name": "SBFQuote",
            "data-component-content": "%7B%7D"
        }), x.jsx(mS, {
            "data-lov-id": "src/pages/Index.tsx:34:8",
            "data-lov-name": "LarpExplainer",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "34",
            "data-component-file": "Index.tsx",
            "data-component-name": "LarpExplainer",
            "data-component-content": "%7B%7D"
        })]
    })]
})
  , gS = () => {
    const e = d0();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    x.jsx("div", {
        "data-lov-id": "src/pages/NotFound.tsx:12:4",
        "data-lov-name": "div",
        "data-component-path": "src/pages/NotFound.tsx",
        "data-component-line": "12",
        "data-component-file": "NotFound.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22flex%20min-h-screen%20items-center%20justify-center%20bg-gray-100%22%7D",
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: x.jsxs("div", {
            "data-lov-id": "src/pages/NotFound.tsx:13:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/NotFound.tsx",
            "data-component-line": "13",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [x.jsx("h1", {
                "data-lov-id": "src/pages/NotFound.tsx:14:8",
                "data-lov-name": "h1",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "14",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "h1",
                "data-component-content": "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22mb-4%20text-4xl%20font-bold%22%7D",
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), x.jsx("p", {
                "data-lov-id": "src/pages/NotFound.tsx:15:8",
                "data-lov-name": "p",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "15",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "p",
                "data-component-content": "%7B%22text%22%3A%22Oops!%20Page%20not%20found%22%2C%22className%22%3A%22mb-4%20text-xl%20text-gray-600%22%7D",
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), x.jsx("a", {
                "data-lov-id": "src/pages/NotFound.tsx:16:8",
                "data-lov-name": "a",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "16",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "a",
                "data-component-content": "%7B%22text%22%3A%22Return%20to%20Home%22%2C%22className%22%3A%22text-blue-500%20underline%20hover%3Atext-blue-700%22%7D",
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , yS = new gw
  , xS = () => x.jsx(xw, {
    "data-lov-id": "src/App.tsx:12:2",
    "data-lov-name": "QueryClientProvider",
    "data-component-path": "src/App.tsx",
    "data-component-line": "12",
    "data-component-file": "App.tsx",
    "data-component-name": "QueryClientProvider",
    "data-component-content": "%7B%7D",
    client: yS,
    children: x.jsxs(K1, {
        "data-lov-id": "src/App.tsx:13:4",
        "data-lov-name": "TooltipProvider",
        "data-component-path": "src/App.tsx",
        "data-component-line": "13",
        "data-component-file": "App.tsx",
        "data-component-name": "TooltipProvider",
        "data-component-content": "%7B%7D",
        children: [x.jsx(Ry, {
            "data-lov-id": "src/App.tsx:14:6",
            "data-lov-name": "Toaster",
            "data-component-path": "src/App.tsx",
            "data-component-line": "14",
            "data-component-file": "App.tsx",
            "data-component-name": "Toaster",
            "data-component-content": "%7B%7D"
        }), x.jsx(lx, {
            "data-lov-id": "src/App.tsx:15:6",
            "data-lov-name": "Sonner",
            "data-component-path": "src/App.tsx",
            "data-component-line": "15",
            "data-component-file": "App.tsx",
            "data-component-name": "Sonner",
            "data-component-content": "%7B%7D"
        }), x.jsx(rS, {
            "data-lov-id": "src/App.tsx:16:6",
            "data-lov-name": "BrowserRouter",
            "data-component-path": "src/App.tsx",
            "data-component-line": "16",
            "data-component-file": "App.tsx",
            "data-component-name": "BrowserRouter",
            "data-component-content": "%7B%7D",
            children: x.jsxs(tS, {
                "data-lov-id": "src/App.tsx:17:8",
                "data-lov-name": "Routes",
                "data-component-path": "src/App.tsx",
                "data-component-line": "17",
                "data-component-file": "App.tsx",
                "data-component-name": "Routes",
                "data-component-content": "%7B%7D",
                children: [x.jsx(Kl, {
                    "data-lov-id": "src/App.tsx:18:10",
                    "data-lov-name": "Route",
                    "data-component-path": "src/App.tsx",
                    "data-component-line": "18",
                    "data-component-file": "App.tsx",
                    "data-component-name": "Route",
                    "data-component-content": "%7B%7D",
                    path: "/",
                    element: x.jsx(vS, {
                        "data-lov-id": "src/App.tsx:18:35",
                        "data-lov-name": "Index",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "18",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Index",
                        "data-component-content": "%7B%7D"
                    })
                }), x.jsx(Kl, {
                    "data-lov-id": "src/App.tsx:20:10",
                    "data-lov-name": "Route",
                    "data-component-path": "src/App.tsx",
                    "data-component-line": "20",
                    "data-component-file": "App.tsx",
                    "data-component-name": "Route",
                    "data-component-content": "%7B%7D",
                    path: "*",
                    element: x.jsx(gS, {
                        "data-lov-id": "src/App.tsx:20:35",
                        "data-lov-name": "NotFound",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "20",
                        "data-component-file": "App.tsx",
                        "data-component-name": "NotFound",
                        "data-component-content": "%7B%7D"
                    })
                })]
            })
        })]
    })
});
Lm(document.getElementById("root")).render(x.jsx(xS, {
    "data-lov-id": "src/main.tsx:5:52",
    "data-lov-name": "App",
    "data-component-path": "src/main.tsx",
    "data-component-line": "5",
    "data-component-file": "main.tsx",
    "data-component-name": "App",
    "data-component-content": "%7B%7D"
}));
