module.exports = function (e) {
    var r = {};

    function t(n) {
        if (r[n]) return r[n].exports;
        var u = r[n] = {i: n, l: !1, exports: {}};
        return e[n].call(u.exports, u, u.exports, t), u.l = !0, u.exports
    }

    return t.m = e, t.c = r, t.d = function (e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: n})
    }, t.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.p = "", t(t.s = 0)
}([function (e, r, t) {
    "use strict";
    t.r(r);
    var n = (e = 0, r = 0) => e - r, u = (e = 0, r = 0) => e + r, o = (e = 0, r = 0) => e * r;
    t.d(r, "reduce", function () {
        return n
    }), t.d(r, "add", function () {
        return u
    }), t.d(r, "multiple", function () {
        return o
    })
}]);