!function (e) {
    var r = {};

    function n(t) {
        if (r[t]) return r[t].exports;
        var u = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(u.exports, u, u.exports, n), u.l = !0, u.exports
    }

    n.m = e, n.c = r, n.d = function (e, r, t) {
        n.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: t})
    }, n.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, n.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(r, "a", r), r
    }, n.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, n.p = "", n(n.s = 0)
}([function (e, r, n) {
    "use strict";
    n.r(r);
    var t = (e = 0, r = 0) => e - r, u = (e = 0, r = 0) => e + r, o = (e = 0, r = 0) => e * r;
    n.d(r, "reduce", function () {
        return t
    }), n.d(r, "add", function () {
        return u
    }), n.d(r, "multiple", function () {
        return o
    })
}]);