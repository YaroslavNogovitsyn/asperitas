(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    111: function (e, t, n) {
        e.exports = n(212)
    }, 112: function (e, t, n) {
    }, 212: function (e, t, n) {
        "use strict";
        n.r(t);
        n(112);
        var r = n(47), o = n.n(r);
        o.a.updateLocale("en", {
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "%ds",
                ss: "%ds",
                m: "1m",
                mm: "%dm",
                h: "1h",
                hh: "%dh",
                d: "1d",
                dd: "%dd",
                M: "1M",
                MM: "%dM",
                y: "1y",
                yy: "%dY"
            }
        });
        var a = n(0), i = n.n(a), c = n(45), u = n.n(c), s = n(7), l = n(5), p = n(101), d = n(216), m = n(4),
            f = n.n(m), h = n(9), b = n(6), g = "/api", E = {
                get: function () {
                    var e = Object(h.a)(f.a.mark(function e(t) {
                        var n, r, o, a, i = arguments;
                        return f.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = i.length > 1 && void 0 !== i[1] ? i[1] : null, r = {
                                        method: "GET",
                                        headers: Object(b.a)({}, n && {Authorization: "Bearer ".concat(n)})
                                    }, e.next = 4, fetch("".concat(g, "/").concat(t), r);
                                case 4:
                                    return o = e.sent, e.next = 7, o.json();
                                case 7:
                                    if (a = e.sent, o.ok) {
                                        e.next = 10;
                                        break
                                    }
                                    throw Error(a.message);
                                case 10:
                                    return e.abrupt("return", a);
                                case 11:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), post: function () {
                    var e = Object(h.a)(f.a.mark(function e(t, n) {
                        var r, o, a, i, c = arguments;
                        return f.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 2 && void 0 !== c[2] ? c[2] : null, o = {
                                        method: "POST",
                                        headers: Object(b.a)({"Content-Type": "application/json"}, r && {Authorization: "Bearer ".concat(r)}),
                                        body: JSON.stringify(n)
                                    }, e.next = 4, fetch("".concat(g, "/").concat(t), o);
                                case 4:
                                    return a = e.sent, e.next = 7, a.json();
                                case 7:
                                    if (i = e.sent, a.ok) {
                                        e.next = 11;
                                        break
                                    }
                                    throw 422 === a.status && i.errors.forEach(function (e) {
                                        throw Error("".concat(e.param, " ").concat(e.msg))
                                    }), Error(i.message);
                                case 11:
                                    return e.abrupt("return", i);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }(), delete: function () {
                    var e = Object(h.a)(f.a.mark(function e(t) {
                        var n, r, o, a, i = arguments;
                        return f.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = i.length > 1 && void 0 !== i[1] ? i[1] : null, r = {
                                        method: "DELETE",
                                        headers: Object(b.a)({"Content-Type": "application/json"}, n && {Authorization: "Bearer ".concat(n)})
                                    }, e.next = 4, fetch("".concat(g, "/").concat(t), r);
                                case 4:
                                    return o = e.sent, e.next = 7, o.json();
                                case 7:
                                    if (a = e.sent, o.ok) {
                                        e.next = 12;
                                        break
                                    }
                                    if (401 !== o.status) {
                                        e.next = 11;
                                        break
                                    }
                                    throw Error("unauthorized");
                                case 11:
                                    throw Error(a.message);
                                case 12:
                                    return e.abrupt("return", a);
                                case 13:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            };

        function x(e, t) {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = Object(h.a)(f.a.mark(function e(t, n) {
                var r;
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.post("login", {username: t, password: n});
                        case 2:
                            return r = e.sent, e.abrupt("return", r.token);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function y(e, t) {
            return O.apply(this, arguments)
        }

        function O() {
            return (O = Object(h.a)(f.a.mark(function e(t, n) {
                var r;
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.post("register", {username: t, password: n});
                        case 2:
                            return r = e.sent, e.abrupt("return", r.token);
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function w(e) {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = Object(h.a)(f.a.mark(function e(t) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.get("posts/".concat(t));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function _(e) {
            return j.apply(this, arguments)
        }

        function j() {
            return (j = Object(h.a)(f.a.mark(function e(t) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.get("user/".concat(t));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function S(e) {
            return k.apply(this, arguments)
        }

        function k() {
            return (k = Object(h.a)(f.a.mark(function e(t) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.get("post/".concat(t));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function T(e, t) {
            return R.apply(this, arguments)
        }

        function R() {
            return (R = Object(h.a)(f.a.mark(function e(t, n) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.post("posts", t, n);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function I(e, t) {
            return N.apply(this, arguments)
        }

        function N() {
            return (N = Object(h.a)(f.a.mark(function e(t, n) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.delete("post/".concat(t), n);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function P(e, t, n) {
            return U.apply(this, arguments)
        }

        function U() {
            return (U = Object(h.a)(f.a.mark(function e(t, n, r) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.post("post/".concat(t), n, r);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function D(e, t, n) {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = Object(h.a)(f.a.mark(function e(t, n, r) {
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, E.delete("post/".concat(t, "/").concat(n), r);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        function M(e, t, n) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = Object(h.a)(f.a.mark(function e(t, n, r) {
                var o;
                return f.a.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = {
                                1: "upvote",
                                0: "unvote",
                                "-1": "downvote"
                            }[n], e.next = 4, E.get("post/".concat(t, "/").concat(o), r);
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }, e, this)
            }))).apply(this, arguments)
        }

        var B, A, V = {type: "FETCH_POSTS_REQUEST"}, H = function (e) {
                return {type: "FETCH_POSTS_SUCCESS", posts: e}
            }, z = function (e) {
                return {type: "FETCH_POSTS_ERROR", error: e}
            }, G = {type: "FETCH_POST_REQUEST"}, W = function (e) {
                return {type: "FETCH_POST_SUCCESS", post: e}
            }, Q = {type: "CREATE_POST_REQUEST"}, q = function (e) {
                return {type: "CREATE_POST_SUCCESS", post: e}
            }, K = {type: "DELETE_POST_REQUEST"}, J = {type: "CREATE_COMMENT_REQUEST"}, Y = function (e) {
                return {type: "CREATE_COMMENT_SUCCESS", post: e}
            }, X = {type: "DELETE_COMMENT_REQUEST"}, Z = function (e) {
                return {type: "DELETE_COMMENT_SUCCESS", post: e}
            }, $ = {type: "VOTE_REQUEST"}, ee = function (e) {
                return {type: "VOTE_SUCCESS", post: e}
            }, te = d.a.plugin({
                comment: function (e, t) {
                    switch (t.type) {
                        case"CREATE_COMMENT_SUCCESS":
                            return;
                        default:
                            return e
                    }
                }
            }), ne = {type: "LOGIN_REQUEST"}, re = function (e) {
                return {type: "LOGIN_SUCCESS", token: e}
            }, oe = {type: "SIGNUP_REQUEST"}, ae = function (e) {
                return {type: "SIGNUP_SUCCESS", token: e}
            }, ie = function () {
                return function (e) {
                    e({type: "HIDE_ERROR"}), clearTimeout(B)
                }
            }, ce = n(82), ue = n.n(ce), se = localStorage.getItem("token"), le = se && ue()(se).user,
            pe = Object(b.a)({}, se && {token: se}, le && {user: le}), de = {isFetching: !1, items: []},
            me = {dark: "true" === localStorage.getItem("dark")},
            fe = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || l.d, he = Object(l.e)(Object(l.c)({
                form: te, error: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case"FETCH_POSTS_ERROR":
                        case"FETCH_POST_ERROR":
                        case"CREATE_POST_ERROR":
                        case"DELETE_POST_ERROR":
                        case"CREATE_COMMENT_ERROR":
                        case"VOTE_ERROR":
                        case"LOGIN_ERROR":
                        case"SIGNUP_ERROR":
                            return t.error;
                        case"HIDE_ERROR":
                            return null;
                        default:
                            return e
                    }
                }, auth: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case"SIGNUP_REQUEST":
                        case"LOGIN_REQUEST":
                            return Object(b.a)({}, e, {loading: !0});
                        case"SIGNUP_SUCCESS":
                        case"LOGIN_SUCCESS":
                            var n = ue()(t.token).user;
                            return Object(b.a)({}, e, {loading: !1, token: t.token, user: n});
                        case"SIGNUP_ERROR":
                        case"LOGIN_ERROR":
                            return Object(b.a)({}, e, {loading: !1});
                        case"LOGOUT":
                            return Object(b.a)({}, e, {token: null, user: null});
                        default:
                            return e
                    }
                }, posts: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case"FETCH_POSTS_REQUEST":
                            return Object(b.a)({}, e, {isFetching: !0, post: null, newPost: null});
                        case"FETCH_POSTS_SUCCESS":
                            return Object(b.a)({}, e, {isFetching: !1, items: t.posts});
                        case"FETCH_POSTS_ERROR":
                            return Object(b.a)({}, e, {isFetching: !1});
                        case"FETCH_POST_REQUEST":
                            return Object(b.a)({}, e, {isFetching: !0, newPost: null});
                        case"FETCH_POST_SUCCESS":
                            return Object(b.a)({}, e, {isFetching: !1, post: t.post});
                        case"FETCH_POST_ERROR":
                            return Object(b.a)({}, e, {isFetching: !1});
                        case"CREATE_POST_REQUEST":
                            return Object(b.a)({}, e, {isFetching: !0});
                        case"CREATE_POST_SUCCESS":
                            return Object(b.a)({}, e, {isFetching: !1, newPost: t.post});
                        case"CREATE_POST_ERROR":
                            return Object(b.a)({}, e, {isFetching: !1, error: t.error});
                        case"DELETE_POST_REQUEST":
                            return Object(b.a)({}, e, {isDeleting: !0});
                        case"DELETE_POST_SUCCESS":
                            return A = e.items.filter(function (e) {
                                return e.id !== t.post
                            }), Object(b.a)({}, e, {isDeleting: !1, items: A, post: null});
                        case"DELETE_POST_ERROR":
                            return Object(b.a)({}, e, {isDeleting: !1});
                        case"CREATE_COMMENT_REQUEST":
                            return Object(b.a)({}, e, {isCommenting: !0});
                        case"CREATE_COMMENT_SUCCESS":
                            return Object(b.a)({}, e, {isCommenting: !1, post: t.post});
                        case"CREATE_COMMENT_ERROR":
                            return Object(b.a)({}, e, {isCommenting: !1});
                        case"DELETE_COMMENT_REQUEST":
                            return Object(b.a)({}, e, {isDeleting: !0});
                        case"DELETE_COMMENT_SUCCESS":
                            return Object(b.a)({}, e, {isDeleting: !1, post: t.post});
                        case"DELETE_COMMENT_ERROR":
                            return Object(b.a)({}, e, {isDeleting: !1});
                        case"VOTE_REQUEST":
                            return Object(b.a)({}, e, {isVoting: !0});
                        case"VOTE_SUCCESS":
                            return A = function (e, t) {
                                return t.map(function (t) {
                                    return t.id === e.id ? e : t
                                })
                            }(t.post, e.items), Object(b.a)({}, e, {isVoting: !1, items: A, post: t.post});
                        case"VOTE_ERROR":
                            return Object(b.a)({}, e, {isVoting: !1});
                        default:
                            return e
                    }
                }, theme: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me;
                    switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                        case"TOGGLE_DARK_THEME":
                            return Object(b.a)({}, e, {dark: !e.dark});
                        default:
                            return e
                    }
                }
            }), fe(Object(l.a)(p.a, function () {
                return function (e) {
                    return function (t) {
                        "LOGIN_SUCCESS" === t.type || "SIGNUP_SUCCESS" === t.type ? localStorage.setItem("token", t.token) : "LOGOUT" === t.type && localStorage.removeItem("token"), e(t)
                    }
                }
            }, function (e) {
                return function (t) {
                    return function (n) {
                        switch (t(n), n.type) {
                            case"FETCH_POSTS_SUCCESS":
                            case"FETCH_POST_SUCCESS":
                            case"CREATE_POST_SUCCESS":
                            case"DELETE_POST_SUCCESS":
                            case"CREATE_COMMENT_SUCCESS":
                            case"DELETE_COMMENT_SUCCESS":
                            case"VOTE_SUCCESS":
                            case"LOGIN_SUCCESS":
                            case"SIGNUP_SUCCESS":
                            case"LOGOUT":
                                e.getState().error && e.dispatch(ie());
                                break;
                            case"FETCH_POSTS_ERROR":
                            case"FETCH_POST_ERROR":
                            case"CREATE_POST_ERROR":
                            case"DELETE_POST_ERROR":
                            case"CREATE_COMMENT_ERROR":
                            case"DELETE_COMMENT_ERROR":
                            case"VOTE_ERROR":
                            case"LOGIN_ERROR":
                            case"SIGNUP_ERROR":
                                e.dispatch((r = n.error, function (e) {
                                    e(function (e) {
                                        return {type: "SHOW_ERROR", error: e}
                                    }(r)), clearTimeout(B), B = setTimeout(function () {
                                        return e({type: "HIDE_ERROR"})
                                    }, 5e3)
                                }))
                        }
                        var r
                    }
                }
            }, function () {
                return function (e) {
                    return function (t) {
                        if ("TOGGLE_DARK_THEME" === t.type) {
                            var n = "true" === localStorage.getItem("dark");
                            localStorage.setItem("dark", (!n).toString())
                        }
                        e(t)
                    }
                }
            }))), be = n(1), ge = n(217), Ee = n(109), xe = n(218),
            ve = {error: "#f5222d", vote: "#b6b6b6", upvote: "#f9920b", downvote: "#2e70ff"}, ye = Object(b.a)({}, ve, {
                normalText: "#ffffff",
                mutedText: "#b0b8bf",
                border: "#333333",
                accent: "#33a0ff",
                pageBackground: "#1b1b1b",
                voteButtonHover: "#383838",
                foreground: "#262626",
                activeBackground: "#333333",
                inputBackground: "#212121",
                shadow: "rgba(0, 0, 0, 0.4)"
            }), Oe = Object(b.a)({}, ve, {
                normalText: "#454f5b",
                mutedText: "#818e99",
                border: "#ebedf0",
                accent: "#1890ff",
                pageBackground: "#f4f6f8",
                voteButtonHover: "#f2f2f2",
                foreground: "#ffffff",
                activeBackground: "#fafafa",
                inputBackground: "#fcfcfc",
                shadow: "rgba(0, 0, 0, 0.05)"
            }), we = function (e) {
                return e ? ye : Oe
            }, Ce = n(67), _e = Object(Ce.a)();
        _e.listen(function () {
            he.getState().error && he.dispatch(ie())
        });
        var je = _e, Se = n(22);

        function ke() {
            var e = Object(Se.a)(["\n  body {\n    background-color: ", ";\n  }\n"]);
            return ke = function () {
                return e
            }, e
        }

        var Te = Object(be.b)(ke(), function (e) {
            return e.theme.pageBackground
        });

        function Re(e) {
            return Object(s.b)(function (e) {
                return {token: e.auth.token, user: e.auth.user}
            })(e)
        }

        var Ie = n(85);

        function Ne() {
            var e = Object(Se.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);
            return Ne = function () {
                return e
            }, e
        }

        function Pe() {
            var e = Object(Se.a)(["\n  ", ";\n\n  text-underline-position: under;\n  text-decoration: none;\n  color: ", ";\n\n  :hover {\n    ", ";\n    color: ", ";\n  }\n"]);
            return Pe = function () {
                return e
            }, e
        }

        function Ue() {
            var e = Object(Se.a)(["\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  padding: 0 16px;\n\n  @media (max-width: 425px) {\n    padding: 0 8px;\n  }\n"]);
            return Ue = function () {
                return e
            }, e
        }

        function De() {
            var e = Object(Se.a)(["\n  animation: ", " 0.25s;\n"]);
            return De = function () {
                return e
            }, e
        }

        function Le() {
            var e = Object(Se.a)(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]);
            return Le = function () {
                return e
            }, e
        }

        function Me() {
            var e = Object(Se.a)(["\n  ", ";\n  font-weight: 700;\n  letter-spacing: 0.05em;\n"]);
            return Me = function () {
                return e
            }, e
        }

        function Fe() {
            var e = Object(Se.a)(["\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]);
            return Fe = function () {
                return e
            }, e
        }

        var Be = Object(be.c)(Fe()), Ae = Object(be.c)(Me(), Be), Ve = Object(be.e)(Le()), He = Object(be.c)(De(), Ve),
            ze = function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = "transition: ";
                return t.forEach(function (e, n) {
                    r = r.concat("".concat(e, " 0.1s ease").concat(n === t.length - 1 ? ";" : ", "))
                }), r
            }, Ge = Object(be.c)(Ue()), We = function (e) {
                return Object(be.c)(Pe(), ze("color"), function (e) {
                    return e.theme.normalText
                }, e.underline && "text-decoration: underline", function (e) {
                    return e.theme.accent
                })
            }, Qe = Object(be.c)(Ne()), qe = Object(be.d)(Ie.a).withConfig({
                displayName: "Logo",
                componentId: "g6m0uy-0"
            })(["", ";margin-right:auto;font-size:24px;font-weight:500;color:", ";text-decoration:none;@media (max-width:425px){padding:0 8px 0 16px;font-size:19px;}"], Ge, function (e) {
                return e.theme.normalText
            }), Ke = function () {
                return i.a.createElement(qe, {to: "/"}, "asperitas")
            }, Je = be.d.svg.withConfig({
                displayName: "Icon",
                componentId: "j1m9ia-0"
            })(["width:20px;height:20px;& path{", ";fill:", ";}@media (max-width:425px){width:18px;height:18px;}"], ze("fill"), function (e) {
                return e.theme.mutedText
            }), Ye = function () {
                return i.a.createElement(Je, {viewBox: "0 0 24 24"}, i.a.createElement("path", {
                    d: "M6.03569223,7.86020138e-11 C4.77338857,1.342144 4,3.14939605 4,5.13728269 C4,9.27941831 7.35786438,12.6372827 11.5,12.6372827 C13.4878866,12.6372827 15.2951387,11.8638941 16.6372827,10.6015905 C15.5809549,14.0943073 12.3374493,16.6372827 8.5,16.6372827 C3.80557963,16.6372827 0,12.8317031 0,8.13728269 C0,4.29983338 2.54297542,1.05632781 6.03569223,0 Z",
                    transform: "translate(4 4)"
                }))
            }, Xe = be.d.span.withConfig({
                displayName: "Component__DarkButton",
                componentId: "sc-1674348-0"
            })(["", ";padding:0 8px;cursor:pointer;@media (hover:hover){:hover path{fill:", ";}}"], Ge, function (e) {
                return e.theme.accent
            }), Ze = function (e) {
                return i.a.createElement(Xe, {onClick: e.toggleDarkTheme}, i.a.createElement(Ye, null))
            }, $e = {
                toggleDarkTheme: function () {
                    return {type: "TOGGLE_DARK_THEME"}
                }
            }, et = Object(s.b)(null, $e)(Ze), tt = n(213),
            nt = Object(be.d)(tt.a).attrs({activeClassName: "active"}).withConfig({
                displayName: "NavLink",
                componentId: "sc-1l5j9aj-0"
            })(["", ";position:relative;::after{", ";content:'';position:absolute;opacity:0;}&.", "{background-color:", ";::after{opacity:1;}}"], We, ze("opacity"), "active", function (e) {
                return e.theme.activeBackground
            }), rt = Object(be.d)(nt).withConfig({
                displayName: "NavLink__HeaderNavLink",
                componentId: "mr94ir-0"
            })(["", ";", ";", ";position:relative;cursor:pointer;color:", ";::after{", ";content:'';position:absolute;left:0;right:0;bottom:0;opacity:0;border-bottom:1px solid ", ";}:hover::after{opacity:1;}&.active::after{left:0;right:0;bottom:0;border-bottom:3px solid ", ";}"], Ge, Ae, We, function (e) {
                return e.theme.mutedText
            }, ze("opacity", "border-bottom-width"), function (e) {
                return e.theme.accent
            }, function (e) {
                return e.theme.accent
            }), ot = be.d.span.withConfig({
                displayName: "Text__HeaderUsernameText",
                componentId: "sc-2d19d0-0"
            })(["", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:", ";"], Ae, function (e) {
                return e.theme.mutedText
            }), at = Object(be.d)(rt).withConfig({
                displayName: "Username__Wrapper",
                componentId: "ajy1qj-0"
            })(["flex-shrink:1;border-left:1px solid ", ";border-right:1px solid ", ";min-width:0;"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.border
            }), it = function (e) {
                return i.a.createElement(at, {to: "/u/".concat(e.username)}, i.a.createElement(ot, null, e.username))
            }, ct = be.d.header.withConfig({
                displayName: "Component__Wrapper",
                componentId: "ytvlpp-0"
            })(["position:sticky;z-index:10;top:0;display:flex;align-items:stretch;margin-bottom:24px;box-shadow:0 4px 12px ", ";border-bottom:1px solid ", ";height:48px;padding:0 10vw;background-color:", ";user-select:none;@media (max-width:425px){margin-bottom:16px;height:40px;}@media (max-width:768px){padding:0;}"], function (e) {
                return e.theme.shadow
            }, function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.foreground
            }), ut = function (e) {
                var t = e.user, n = e.logout;
                return i.a.createElement(ct, null, i.a.createElement(Ke, null), i.a.createElement(et, null), t ? i.a.createElement(i.a.Fragment, null, i.a.createElement(it, {username: t.username}), i.a.createElement(rt, {
                    as: "span",
                    onClick: n
                }, "log out")) : i.a.createElement(i.a.Fragment, null, i.a.createElement(rt, {to: "/login"}, "log in"), i.a.createElement(rt, {to: "/signup"}, "sign up")))
            }, st = {
                logout: function () {
                    return {type: "LOGOUT"}
                }
            }, lt = Object(l.d)(Re, Object(s.b)(null, st))(ut), pt = n(10), dt = n(11), mt = n(13), ft = n(12), ht = n(14),
            bt = n(86), gt = be.d.div.withConfig({
                displayName: "Message__ErrorNotificationMessage",
                componentId: "oskmi1-0"
            })(["", ";position:relative;display:inline-block;padding:12px 32px;background-color:#ffffff;color:", ";border-radius:2px;border:1px solid ", ";box-shadow:0 4px 12px rgba(0,0,0,0.06);::after{content:'';position:absolute;top:0;left:0;right:0;border-top:2px solid ", ";border-radius:2px 2px 0 0;}"], Be, function (e) {
                return e.theme.error
            }, function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.error
            }), Et = be.d.div.withConfig({
                displayName: "Component__Wrapper",
                componentId: "sc-7aijx8-0"
            })(["", ";position:fixed;top:16px;left:0;right:0;z-index:100;text-align:center;pointer-events:none;&.", "-enter{opacity:0;transform:translateY(-25%);}&.", "-enter-active{opacity:1;transform:translateY(0);}&.", "-exit{opacity:1;}&.", "-exit-active{opacity:0;}"], ze("opacity", "transform"), "message", "message", "message", "message"),
            xt = function (e) {
                function t() {
                    return Object(pt.a)(this, t), Object(mt.a)(this, Object(ft.a)(t).apply(this, arguments))
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "render", value: function () {
                        return i.a.createElement(bt.TransitionGroup, {component: null}, this.props.error && i.a.createElement(bt.CSSTransition, {
                            classNames: "message",
                            timeout: 300
                        }, i.a.createElement(Et, null, i.a.createElement(gt, null, this.props.error.message))))
                    }
                }]), t
            }(i.a.Component), vt = Object(s.b)(function (e) {
                return {error: e.error}
            })(xt), yt = n(214), Ot = n(215), wt = n(37), Ct = be.d.div.withConfig({
                displayName: "Wrapper__FormWrapper",
                componentId: "wi46p-0"
            })(["position:relative;overflow:hidden;margin:0 auto;border:1px solid ", ";border-radius:2px;max-width:", ";padding:24px;background-color:", ";@media (max-width:768px){padding:16px;}@media (max-width:", "){border-radius:0;border-left:none;border-right:none;}"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.wide ? "600px" : "375px"
            }, function (e) {
                return e.theme.foreground
            }, function (e) {
                return e.wide ? "600px" : "375px"
            }),
            _t = Object(be.e)(["0%{transform:translate(-50%,-50%) rotate(0deg);}100%{transform:translate(-50%,-50%) rotate(360deg);}"]),
            jt = be.d.div.withConfig({
                displayName: "Spinner__LoadingIndicatorSpinner",
                componentId: "hrlbkx-0"
            })(["position:absolute;top:50%;left:50%;animation:", " 1s infinite linear;border:.3rem solid ", ";border-top-color:", ";border-radius:50%;width:48px;height:48px;"], _t, function (e) {
                return e.theme.accent + "4d"
            }, function (e) {
                return e.theme.accent
            }), St = be.d.form.withConfig({
                displayName: "Form__StyledForm",
                componentId: "sc-1liuo0d-0"
            })(["", ";display:flex;flex-direction:column;align-items:flex-start;", ";"], ze("filter"), function (e) {
                return e.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none"
            }), kt = function (e) {
                var t = e.className, n = e.wide, r = Object(wt.a)(e, ["className", "wide"]);
                return i.a.createElement(Ct, {
                    className: t,
                    wide: n
                }, i.a.createElement(St, r), r.loading && i.a.createElement(jt, null))
            }, Tt = be.d.div.withConfig({
                displayName: "InputWrapper",
                componentId: "sc-152tdic-0"
            })(["position:relative;margin-bottom:24px;width:100%;"]), Rt = be.d.label.withConfig({
                displayName: "Label",
                componentId: "sc-8sbnqw-0"
            })(["", ";display:block;margin-bottom:8px;color:", ";"], Be, function (e) {
                return e.theme.mutedText
            }), It = be.d.span.withConfig({
                displayName: "Error",
                componentId: "c0xyvr-0"
            })(["", ";", ";position:absolute;right:0;top:0;color:", ";"], He, Be, function (e) {
                return e.theme.error
            }), Nt = be.d.div.withConfig({
                displayName: "SelectWrapper",
                componentId: "czuo8d-0"
            })(["position:relative;", ";::after{content:'';position:absolute;top:50%;right:0;transform:translate(-150%,calc(-50% - 2px)) rotate(45deg);border-bottom:2px solid ", ";border-right:2px solid ", ";width:8px;height:8px;pointer-events:none;}"], function (e) {
                return e.flex && "flex: 1"
            }, function (e) {
                return e.theme.accent
            }, function (e) {
                return e.theme.accent
            }), Pt = be.d.input.withConfig({
                displayName: "Input",
                componentId: "sc-1h97tc5-0"
            })(["", ";--border:", ";--shadow:", ";display:block;", ";border-radius:3px;width:100%;padding:8px;background-color:", ";font-size:15px;color:", ";appearance:none;outline:none;resize:vertical;:hover,:focus{border:1px solid var(--border);}:focus{box-shadow:0 0 0 2px var(--shadow);}"], ze("border", "box-shadow"), function (e) {
                return e.error ? e.theme.error : e.theme.accent
            }, function (e) {
                return e.error ? e.theme.error + "4d" : e.theme.accent + "4d"
            }, function (e) {
                return e.error ? "\n    border: 1px solid var(--border)\n    " : "\n    border: 1px solid ".concat(e.theme.border, "\n  ")
            }, function (e) {
                return e.theme.inputBackground
            }, function (e) {
                return e.theme.normalText
            });

        function Ut() {
            var e = Object(Se.a)(["\n  ", ";\n  ", ";\n\n  display: block;\n  flex: 1 1 100%;\n  border: 1px solid ", ";\n  width: 100%;\n  padding: 8px;\n  background: ", ";\n  cursor: pointer;\n  text-align: center;\n  color: ", ";\n  outline: 0;\n\n  @media (hover: hover) {\n    :hover {\n      background: ", ";\n      color: #ffffff;\n    }\n  }\n\n  :first-of-type {\n    border-radius: 3px 0 0 3px;\n  }\n\n  :last-of-type {\n    border-radius: 0 3px 3px 0;\n  }\n\n  :not(:first-of-type) {\n    border-left: 0;\n  }\n"]);
            return Ut = function () {
                return e
            }, e
        }

        var Dt = be.d.label(Ut(), ze("color", "background-color"), Ae, function (e) {
            return e.theme.accent
        }, function (e) {
            return e.active ? e.theme.accent : "transparent"
        }, function (e) {
            return e.active ? "#ffffff" : e.theme.accent
        }, function (e) {
            return e.theme.accent
        }), Lt = function (e) {
            return i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
                type: "radio",
                name: "radiogroup",
                id: e.value,
                onChange: e.onClick
            }), i.a.createElement(Dt, {htmlFor: e.value, active: e.active}, e.label))
        };

        function Mt() {
            var e = Object(Se.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  \n  input[type=radio] {\n    display: none;\n  }\n"]);
            return Mt = function () {
                return e
            }, e
        }

        var Ft = be.d.div(Mt());
        var Bt, At = function (e) {
                var t = e.field;
                return i.a.createElement(Ft, null, function (e) {
                    return e.options.map(function (t, n) {
                        return i.a.createElement(Lt, Object.assign({}, t, {
                            active: e.input.value === t.value,
                            onClick: function (n) {
                                return function (e, t, n) {
                                    e.preventDefault(), n(t)
                                }(n, t.value, e.input.onChange)
                            },
                            key: n
                        }))
                    })
                }(t))
            }, Vt = function (e) {
                switch (e.type) {
                    case"select":
                        return i.a.createElement(Tt, null, i.a.createElement(Rt, null, e.label), e.meta.touched && e.meta.error && i.a.createElement(It, null, e.meta.error), i.a.createElement(Nt, null, i.a.createElement(Pt, Object.assign({}, e.input, {
                            as: "select",
                            type: "select"
                        }), e.children)));
                    case"radiogroup":
                        return i.a.createElement(Tt, null, i.a.createElement(At, {field: e}));
                    case"textarea":
                        return i.a.createElement(Tt, null, i.a.createElement(Rt, null, e.label), e.meta.touched && e.meta.error && i.a.createElement(It, null, e.meta.error), i.a.createElement(Pt, Object.assign({}, e.input, {
                            as: "textarea",
                            rows: "6",
                            error: e.meta.touched && !!e.meta.error,
                            placeholder: e.label
                        })));
                    default:
                        return i.a.createElement(Tt, null, i.a.createElement(Rt, null, e.label), e.meta.touched && e.meta.error && i.a.createElement(It, null, e.meta.error), i.a.createElement(Pt, Object.assign({}, e.input, {
                            error: e.meta.touched && !!e.meta.error,
                            type: e.type,
                            placeholder: e.label,
                            autoComplete: "off"
                        })))
                }
            }, Ht = function (e) {
                return i.a.createElement(Vt, e)
            }, zt = function (e, t) {
                return e && e.length <= t ? void 0 : "must be less than ".concat(t, " characters")
            }, Gt = function (e, t) {
                return e && e.length >= t ? void 0 : "must be more than ".concat(t, " characters")
            }, Wt = function (e) {
                return function (t) {
                    return zt(t, e)
                }
            }, Qt = function (e) {
                return e ? void 0 : "required"
            }, qt = [Qt, Wt(32), function (e) {
                return function (e) {
                    return /^[a-zA-Z0-9_-]+$/.test(e) ? void 0 : "contains invalid characters"
                }(e)
            }, function (e) {
                return function (e) {
                    return e.trim() === e ? void 0 : "cannot start or end with whitespace"
                }(e)
            }], Kt = [Qt, (Bt = 8, function (e) {
                return Gt(e, Bt)
            }), Wt(72)], Jt = function (e) {
                return Qt(e) || function (e) {
                    try {
                        return void new URL(e)
                    } catch (t) {
                        return "must be a valid url"
                    }
                }(e)
            }, Yt = be.d.button.withConfig({
                displayName: "Button",
                componentId: "sc-1mhyaz8-0"
            })(["", ";", ";border:none;border-radius:3px;padding:8px 24px;background-color:", ";cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ", ";}"], ze("filter", "box-shadow"), Ae, function (e) {
                return e.theme.accent
            }, function (e) {
                return e.theme.accent + "4d"
            }), Xt = Yt, Zt = Object(be.d)(Xt).withConfig({
                displayName: "SubmitButton",
                componentId: "sc-12hj7x8-0"
            })(["align-self:flex-end;"]), $t = Zt, en = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).onSubmit = function (e) {
                        var t = e.username, r = e.password;
                        n.props.attemptLogin(t, r)
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.redirectIfLoggedIn()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t, n) {
                        this.redirectIfLoggedIn()
                    }
                }, {
                    key: "redirectIfLoggedIn", value: function () {
                        this.props.token && this.props.history.push("/")
                    }
                }, {
                    key: "render", value: function () {
                        return i.a.createElement(kt, {
                            loading: this.props.loading,
                            onSubmit: this.props.handleSubmit(this.onSubmit)
                        }, i.a.createElement(Ot.a, {
                            name: "username",
                            label: "username",
                            type: "text",
                            component: Ht,
                            validate: qt
                        }), i.a.createElement(Ot.a, {
                            name: "password",
                            label: "password",
                            type: "password",
                            component: Ht,
                            validate: Kt
                        }), i.a.createElement($t, {type: "submit"}, "log in"))
                    }
                }]), t
            }(i.a.Component), tn = en, nn = {
                attemptLogin: function (e, t) {
                    return function () {
                        var n = Object(h.a)(f.a.mark(function n(r) {
                            var o;
                            return f.a.wrap(function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return r(ne), n.prev = 1, n.next = 4, x(e, t);
                                    case 4:
                                        o = n.sent, r(re(o)), n.next = 11;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(1), r({type: "LOGIN_ERROR", error: n.t0});
                                    case 11:
                                    case"end":
                                        return n.stop()
                                }
                            }, n, this, [[1, 8]])
                        }));
                        return function (e) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
            }, rn = Object(l.d)(Object(yt.a)({form: "login"}), Re, Object(s.b)(function (e) {
                return {loading: e.auth.loading}
            }, nn)), on = rn(tn), an = on, cn = function (e) {
                if (e.password !== e.password2) return {password2: "passwords must match"}
            }, un = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).onSubmit = function (e) {
                        var t = e.username, r = e.password;
                        n.props.attemptSignup(t, r)
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.redirectIfLoggedIn()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t, n) {
                        this.redirectIfLoggedIn()
                    }
                }, {
                    key: "redirectIfLoggedIn", value: function () {
                        this.props.token && this.props.history.push("/")
                    }
                }, {
                    key: "render", value: function () {
                        return i.a.createElement(kt, {
                            loading: this.props.loading,
                            onSubmit: this.props.handleSubmit(this.onSubmit)
                        }, i.a.createElement(Ot.a, {
                            name: "username",
                            label: "username",
                            type: "text",
                            component: Ht,
                            validate: qt
                        }), i.a.createElement(Ot.a, {
                            name: "password",
                            label: "password",
                            type: "password",
                            component: Ht,
                            validate: Kt
                        }), i.a.createElement(Ot.a, {
                            name: "password2",
                            label: "confirm password",
                            type: "password",
                            component: Ht
                        }), i.a.createElement($t, {type: "submit"}, "sign up"))
                    }
                }]), t
            }(i.a.Component), sn = un, ln = {
                attemptSignup: function (e, t) {
                    return function () {
                        var n = Object(h.a)(f.a.mark(function n(r) {
                            var o;
                            return f.a.wrap(function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return r(oe), n.prev = 1, n.next = 4, y(e, t);
                                    case 4:
                                        o = n.sent, r(ae(o)), n.next = 11;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(1), r({type: "SIGNUP_ERROR", error: n.t0});
                                    case 11:
                                    case"end":
                                        return n.stop()
                                }
                            }, n, this, [[1, 8]])
                        }));
                        return function (e) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
            }, pn = Object(l.d)(Object(yt.a)({form: "signup", validate: cn}), Re, Object(s.b)(function (e) {
                return {loading: e.auth.loading}
            }, ln)), dn = pn(sn), mn = dn, fn = ["music", "funny", "videos", "programming", "news", "fashion"],
            hn = [{label: "link", value: "link"}, {label: "text", value: "text"}], bn = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).onSubmit = function (e) {
                        return n.props.attemptCreatePost(e)
                    }, n.mapCategories = function () {
                        return fn.map(function (e, t) {
                            return i.a.createElement("option", {key: t, value: e}, e)
                        })
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "componentDidUpdate", value: function (e, t, n) {
                        var r = this.props, o = r.token, a = r.post, i = r.history;
                        o || i.push("/"), a && i.push("/a/".concat(a.category, "/").concat(a.id))
                    }
                }, {
                    key: "render", value: function () {
                        return i.a.createElement(kt, {
                            loading: this.props.isFetching,
                            onSubmit: this.props.handleSubmit(this.onSubmit),
                            wide: !0
                        }, i.a.createElement(Ot.a, {
                            name: "type",
                            label: "type",
                            type: "radiogroup",
                            component: Ht,
                            options: hn
                        }), i.a.createElement(Ot.a, {
                            name: "category",
                            label: "category",
                            type: "select",
                            component: Ht
                        }, this.mapCategories()), i.a.createElement(Ot.a, {
                            name: "title",
                            label: "title",
                            type: "text",
                            component: Ht
                        }), "link" === this.props.form.values.type && i.a.createElement(Ot.a, {
                            name: "url",
                            label: "url",
                            type: "url",
                            component: Ht
                        }), "text" === this.props.form.values.type && i.a.createElement(Ot.a, {
                            name: "text",
                            label: "text",
                            type: "textarea",
                            component: Ht
                        }), i.a.createElement($t, {type: "submit"}, "create post"))
                    }
                }]), t
            }(i.a.Component), gn = {
                attemptCreatePost: function (e) {
                    return function () {
                        var t = Object(h.a)(f.a.mark(function t(n, r) {
                            var o, a;
                            return f.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return n(Q), t.prev = 1, o = r().auth.token, t.next = 5, T(e, o);
                                    case 5:
                                        a = t.sent, n(q(a)), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(1), n({type: "CREATE_POST_ERROR", error: t.t0});
                                    case 12:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 9]])
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }, En = Object(l.d)(Object(yt.a)({
                form: "createPost",
                initialValues: {category: fn[0], type: "link"},
                validate: function (e) {
                    var t, n = {}, r = e.title ? e.title : "", o = e.url ? e.url : "", a = e.type ? e.type : "",
                        i = e.text ? e.text : "";
                    return n.title = Qt(t = r) || zt(t, 100), "link" === a && (n.url = Jt(o)), "text" === a && (n.text = function (e) {
                        return Qt(e) || Gt(e, 4)
                    }(i)), n.type = function (e) {
                        return Qt(e) || function (e) {
                            return "link" === e || "text" === e ? void 0 : "must be link or text post"
                        }(e)
                    }(a), n
                }
            }), Re, Object(s.b)(function (e) {
                return {isFetching: e.posts.isFetching, post: e.posts.newPost, form: e.form.createPost}
            }, gn))(bn), xn = be.d.main.withConfig({
                displayName: "MainSection__HomeMainSection",
                componentId: "sc-17umc71-0"
            })(["flex:1;min-width:0;"]), vn = n(68), yn = be.d.select.withConfig({
                displayName: "Dropdown",
                componentId: "ieua5w-0"
            })(["border:none;border-radius:0;width:100%;padding:8px 16px;background-color:", ";font-size:15px;color:", ";appearance:none;"], function (e) {
                return e.theme.foreground
            }, function (e) {
                return e.theme.normalText
            }), On = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).mapCategories = function () {
                        return ["all"].concat(Object(vn.a)(fn)).map(function (e, t) {
                            return i.a.createElement("option", {key: t, value: e}, e)
                        })
                    }, n.handleOnChange = function (e) {
                        var t = e.target.value;
                        if (t !== n.props.category) {
                            var r = "all" === t ? "/" : "/a/".concat(t);
                            n.props.history.push(r)
                        }
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "render", value: function () {
                        return i.a.createElement(Nt, {flex: !0}, i.a.createElement(yn, {
                            value: this.props.category,
                            onChange: this.handleOnChange
                        }, this.mapCategories()))
                    }
                }]), t
            }(i.a.Component), wn = Object(be.d)(Xt).withConfig({
                displayName: "CreatePostButton",
                componentId: "sc-6yt4bh-0"
            })(["display:flex;align-items:center;border-radius:0;padding:0 16px;text-decoration:none;"]), Cn = function () {
                return i.a.createElement(wn, {as: Ie.a, to: "/createpost"}, "create post")
            }, _n = be.d.nav.withConfig({
                displayName: "Component__Menu",
                componentId: "sc-2hj3zt-0"
            })(["display:none;border:1px solid ", ";border-left:none;border-right:none;@media (max-width:768px){display:flex;}"], function (e) {
                return e.theme.border
            }), jn = Re(function (e) {
                return i.a.createElement(_n, null, i.a.createElement(Ee.a, {
                    path: "/a/:category", children: function (e) {
                        var t = e.match, n = e.history;
                        return i.a.createElement(On, {category: t ? t.params.category : "all", history: n})
                    }
                }), e.token && i.a.createElement(Cn, null))
            }), Sn = be.d.button.withConfig({
                displayName: "Button__PostVoteButton",
                componentId: "q6tdvm-0"
            })(["", ";border:0;border-radius:3px;height:22px;width:22px;background-color:transparent;cursor:pointer;:focus{outline:0;}:hover{background-color:", ";}::after{", ";content:'';position:relative;left:6px;display:block;transform:rotate(-45deg);width:8px;height:8px;}", ""], ze("background-color"), function (e) {
                return e.theme.voteButtonHover
            }, ze("border"), function (e) {
                return !e.canVote && "\n    cursor: default;\n    pointer-events: none;\n  "
            }), kn = Object(be.d)(Sn).withConfig({
                displayName: "Upvote__PostVoteUpvote",
                componentId: "sc-1h5wp0v-0"
            })(["--iconColor:", ";::after{border-top:2px solid var(--iconColor);border-right:2px solid var(--iconColor);top:3px;}"], function (e) {
                return e.didVote ? e.theme.upvote : e.theme.vote
            }), Tn = Object(be.d)(Sn).withConfig({
                displayName: "Downvote__PostVoteDownvote",
                componentId: "sc-11izef3-0"
            })(["--iconColor:", ";::after{border-bottom:2px solid var(--iconColor);border-left:2px solid var(--iconColor);top:-2px;}"], function (e) {
                return e.didVote ? e.theme.downvote : e.theme.vote
            }), Rn = be.d.div.withConfig({
                displayName: "Component__Wrapper",
                componentId: "sc-1hoq7bq-0"
            })(["display:flex;flex-direction:column;align-items:center;width:30px;padding:4px;font-size:12px;line-height:25px;font-weight:500;text-align:center;color:", ";"], function (e) {
                return e.theme.normalText
            }), In = function (e) {
                function t(e) {
                    var n;
                    Object(pt.a)(this, t), (n = Object(mt.a)(this, Object(ft.a)(t).call(this, e))).upvote = function () {
                        return n.castVote(n.state.didUpvote ? 0 : 1)
                    }, n.downvote = function () {
                        return n.castVote(n.state.didDownvote ? 0 : -1)
                    };
                    var r = t.existingVote(e);
                    return n.state = {score: e.score, didVote: r, didUpvote: 1 === r, didDownvote: -1 === r}, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "componentWillUpdate", value: function (e, n, r) {
                        if (this.props.score !== e.score) {
                            var o = t.existingVote(e);
                            this.setState({score: e.score, didVote: o, didUpvote: 1 === o, didDownvote: -1 === o})
                        } else this.props.token === e.token || e.token || this.setState({
                            didVote: !1,
                            didUpvote: !1,
                            didDownvote: !1
                        })
                    }
                }, {
                    key: "castVote", value: function (e) {
                        var t = this.props, n = t.attemptVote, r = t.id;
                        t.token && (n(r, e), this.setState({
                            score: this.state.score + e - this.state.didVote,
                            didVote: e,
                            didUpvote: 1 === e,
                            didDownvote: -1 === e
                        }))
                    }
                }, {
                    key: "render", value: function () {
                        return i.a.createElement(Rn, null, i.a.createElement(kn, {
                            canVote: !!this.props.token,
                            didVote: this.state.didUpvote,
                            onClick: this.upvote
                        }), i.a.createElement("span", null, this.state.score), i.a.createElement(Tn, {
                            canVote: !!this.props.token,
                            didVote: this.state.didDownvote,
                            onClick: this.downvote
                        }))
                    }
                }], [{
                    key: "existingVote", value: function (e) {
                        var t = e.user, n = e.votes, r = t && n && n.find(function (e) {
                            return e.user === t.id
                        });
                        return r ? r.vote : 0
                    }
                }]), t
            }(i.a.Component), Nn = {
                attemptVote: function (e, t) {
                    return function () {
                        var n = Object(h.a)(f.a.mark(function n(r, o) {
                            var a, i;
                            return f.a.wrap(function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return r($), n.prev = 1, a = o().auth.token, n.next = 5, M(e, t, a);
                                    case 5:
                                        i = n.sent, r(ee(i)), n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(1), r({type: "VOTE_ERROR", error: n.t0});
                                    case 12:
                                    case"end":
                                        return n.stop()
                                }
                            }, n, this, [[1, 9]])
                        }));
                        return function (e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
            }, Pn = Object(l.d)(Re, Object(s.b)(null, Nn))(In), Un = be.d.div.withConfig({
                displayName: "Title__Wrapper",
                componentId: "re5b9c-0"
            })(["display:flex;*{", ";display:block;font-size:15px;line-height:21px;font-weight:500;text-decoration:none;color:", ";", ";}a{", ";}"], Qe, function (e) {
                return e.theme.normalText
            }, function (e) {
                return e.full && "white-space: unset"
            }, We({underline: !0})), Dn = function (e) {
                return i.a.createElement(Un, {full: e.full}, function (e) {
                    switch (e.type) {
                        case"link":
                            return i.a.createElement("a", {href: e.url}, e.title);
                        case"text":
                            return e.full ? i.a.createElement("span", null, e.title) : i.a.createElement(Ie.a, {to: "/a/".concat(e.category, "/").concat(e.id)}, e.title)
                    }
                }(e))
            }, Ln = be.d.div.withConfig({
                displayName: "Preview__PostContentPreview",
                componentId: "sc-7bh33r-0"
            })(["", ";max-width:800px;padding-bottom:1px;font-size:13px;line-height:19px;color:", ";"], Qe, function (e) {
                return e.theme.mutedText
            }), Mn = n(107), Fn = n.n(Mn), Bn = n(108), An = n.n(Bn),
            Vn = {h1: 1.75, h2: 1.5, h3: 1.25, h4: 1.1, h5: .9, h6: .75}, Hn = be.d.span.withConfig({
                displayName: "heading__Heading",
                componentId: "wu9sp4-0"
            })(["", ";& + h1,& + h2,& + h3,& + h4,& + h5,& + h6{margin-top:0;}"], function (e) {
                return t = e.as, Object(be.c)(["margin-top:1em;margin-bottom:0.75em;line-height:1;font-size:", "em;font-weight:500;"], Vn[t]);
                var t
            }), zn = function (e) {
                var t = "h".concat(e.level);
                return i.a.createElement(Hn, {as: t}, e.children)
            }, Gn = be.d.a.withConfig({
                displayName: "link__Link",
                componentId: "ffc3jt-0"
            })(["", ";text-decoration:underline;color:", ";:hover{filter:brightness(110%);}"], ze("color"), function (e) {
                return e.theme.accent
            }), Wn = function (e) {
                return i.a.createElement(Gn, e)
            }, Qn = be.d.pre.withConfig({
                displayName: "code__Pre",
                componentId: "chef5x-0"
            })(["border-radius:2px;padding:12px 16px;background-color:", ";overflow-x:scroll;"], function (e) {
                return e.theme.pageBackground
            }), qn = function (e) {
                return i.a.createElement(Qn, null, i.a.createElement("code", null, e.value))
            }, Kn = be.d.code.withConfig({
                displayName: "inlineCode__InlineCode",
                componentId: "sc-1eercuh-0"
            })(["border-radius:2px;padding:0.2em 0.4em;background-color:", ";"], function (e) {
                return e.theme.pageBackground
            }), Jn = function (e) {
                return i.a.createElement(Kn, e)
            }, Yn = be.d.table.withConfig({
                displayName: "table__Table",
                componentId: "ykhc6i-0"
            })(["border-collapse:collapse;"]), Xn = function (e) {
                return i.a.createElement(Yn, e)
            }, Zn = Object(be.c)(["text-align:center;font-weight:600;"]), $n = be.d.td.withConfig({
                displayName: "tableCell__TableCell",
                componentId: "ie3jgj-0"
            })(["", ";line-height:2;"], function (e) {
                return t = "th" === e.as, Object(be.c)(["", ";border:1px solid ", ";padding:0 0.75em;"], t && Zn, function (e) {
                    return e.theme.border
                });
                var t
            }), er = function (e) {
                return e.isHeader ? i.a.createElement($n, {as: "th"}, e.children) : i.a.createElement($n, null, e.children)
            }, tr = be.d.hr.withConfig({
                displayName: "thematicBreak__ThematicBreak",
                componentId: "sc-1xfcep4-0"
            })(["margin:1em 0;border:none;border-bottom:1px solid ", ";"], function (e) {
                return e.theme.border
            }), nr = function () {
                return i.a.createElement(tr, null)
            }, rr = be.d.ul.withConfig({
                displayName: "list__List",
                componentId: "sc-16ppj4z-0"
            })(["margin-block-start:0.5em;margin-block-end:0.5em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:1em;padding-left:2em;line-height:1.75;"]),
            or = {
                heading: zn,
                link: Wn,
                code: qn,
                inlineCode: Jn,
                table: Xn,
                tableCell: er,
                thematicBreak: nr,
                list: function (e) {
                    return e.ordered ? i.a.createElement(rr, {as: "ol"}, e.children) : i.a.createElement(rr, null, e.children)
                },
                html: function (e) {
                    return i.a.createElement("p", null, e.value)
                }
            }, ar = Object(be.d)(Fn.a).withConfig({
                displayName: "Markdown__StyledReactMarkdown",
                componentId: "sc-7j2dm4-0"
            })(["color:", ";font-size:15px;line-height:1.5;p,ol,ul,pre,table{margin-bottom:0.5em;}code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:14px;line-height:1.25;}>:last-child{margin-bottom:0;}>:first-child{margin-top:0;}"], function (e) {
                return e.theme.normalText
            }),
            ir = ["text", "paragraph", "emphasis", "strong", "delete", "heading", "link", "code", "table", "tableHead", "tableBody", "tableRow", "tableCell", "html", "thematicBreak", "list", "listItem", "inlineCode"],
            cr = function (e) {
                return i.a.createElement(ar, {
                    source: e.children,
                    plugins: [An.a],
                    allowedTypes: ir,
                    renderers: or,
                    unwrapDisallowed: !0
                })
            }, ur = be.d.div.withConfig({
                displayName: "FullText__Wrapper",
                componentId: "sc-1no3x36-0"
            })(["margin:8px -8px;border:1px solid ", ";border-left:none;border-right:none;padding:8px;background-color:", ";"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.inputBackground
            }), sr = function (e) {
                return i.a.createElement(ur, null, i.a.createElement(cr, null, e.children))
            }, lr = Object(be.d)(Ie.a).withConfig({
                displayName: "Author__StyledLink",
                componentId: "sc-16muyzi-0"
            })(["", ";font-weight:500;color:", ";"], We, function (e) {
                return e.theme.normalText
            }), pr = function (e) {
                var t = e.username;
                return i.a.createElement(lr, {to: "/u/".concat(t)}, t)
            }, dr = be.d.div.withConfig({
                displayName: "Detail__Wrapper",
                componentId: "sc-1kin95g-0"
            })(["font-size:13px;margin-top:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;& > *{margin-right:4px;}& > a{", ";}& > span{color:", ";}"], We, function (e) {
                return e.theme.mutedText
            }), mr = function (e) {
                return i.a.createElement(dr, null, i.a.createElement(Ie.a, {to: "/a/".concat(e.category, "/").concat(e.id)}, e.commentCount, " comment", 1 !== e.commentCount ? "s" : null), i.a.createElement(Ie.a, {to: "/a/".concat(e.category)}, "/a/", e.category), i.a.createElement("span", null, "by"), i.a.createElement(pr, {username: e.author && e.author.username}), i.a.createElement("span", null, o()(e.created).fromNow()))
            }, fr = be.d.div.withConfig({
                displayName: "Content__Wrapper",
                componentId: "sc-6cw1cd-0"
            })(["display:flex;flex:1;flex-direction:column;border-left:1px solid ", ";padding:8px;min-width:0;"], function (e) {
                return e.theme.border
            }), hr = function (e) {
                var t = e.url, n = e.title, r = e.type, o = e.text, a = e.commentCount, c = e.showFullPost,
                    u = Object(wt.a)(e, ["url", "title", "type", "text", "commentCount", "showFullPost"]);
                return i.a.createElement(fr, null, i.a.createElement(Dn, Object.assign({
                    url: t,
                    title: n,
                    type: r,
                    full: c
                }, u)), function (e) {
                    switch (e.type) {
                        case"link":
                            return i.a.createElement(Ln, null, e.url);
                        case"text":
                            return e.showFullPost ? i.a.createElement(sr, null, e.text) : i.a.createElement(Ln, null, e.text)
                    }
                }({type: r, url: t, text: o, showFullPost: c}), i.a.createElement(mr, Object.assign({commentCount: a}, u)))
            }, br = be.d.div.withConfig({
                displayName: "Post__Wrapper",
                componentId: "m6c2td-0"
            })(["display:flex;height:auto;background-color:", ";"], function (e) {
                return e.theme.foreground
            }), gr = function (e) {
                var t = e.id, n = e.votes, r = e.score, o = e.comments, a = e.full,
                    c = Object(wt.a)(e, ["id", "votes", "score", "comments", "full"]);
                return i.a.createElement(br, null, i.a.createElement(Pn, {
                    id: t,
                    votes: n,
                    score: r
                }), i.a.createElement(hr, Object.assign({showFullPost: a, id: t, commentCount: o ? o.length : 0}, c)))
            }, Er = be.d.li.withConfig({
                displayName: "Item",
                componentId: "sc-1bll465-0"
            })([":not(:first-child){border-top:1px solid ", ";}"], function (e) {
                return e.theme.border
            }), xr = function (e) {
                return i.a.createElement(Er, null, i.a.createElement(gr, e))
            }, vr = be.d.div.withConfig({
                displayName: "Box",
                componentId: "ajvs7e-0"
            })(["position:relative;margin:48px auto 0;border:1px solid ", ";border-radius:2px;width:72px;height:72px;background-color:", ";"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.foreground
            }), yr = function () {
                return i.a.createElement(vr, null, i.a.createElement(jt, null))
            }, Or = be.d.div.withConfig({
                displayName: "Empty__Wrapper",
                componentId: "som8xn-0"
            })(["", ";", ";border:1px solid ", ";border-radius:2px;padding:48px 0;background-color:", ";text-align:center;color:", ";@media (max-width:768px){", ";border-left:none;border-right:none;border-radius:0;}"], Be, function (e) {
                return e.comments && "margin-top: 16px"
            }, function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.foreground
            }, function (e) {
                return e.theme.mutedText
            }, function (e) {
                return !e.comments && "margin-top: -1px"
            }), wr = function (e) {
                var t = e.comments, n = t ? "no comments" : "there's nothing here...";
                return i.a.createElement(Or, {comments: t}, n)
            }, Cr = be.d.ul.withConfig({
                displayName: "Component__List",
                componentId: "qu9h78-0"
            })(["list-style:none;border:1px solid ", ";border-radius:2px;@media (max-width:768px){border-top:none;border-left:none;border-right:none;border-radius:0;}"], function (e) {
                return e.theme.border
            }), _r = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).loadPosts = function () {
                        var e = n.props, t = e.username, r = e.category;
                        return t ? n.props.fetchProfile(t) : n.props.fetchPosts(r)
                    }, n.mapPosts = function () {
                        return n.props.posts.map(function (e, t) {
                            return i.a.createElement(xr, Object.assign({key: t}, e))
                        })
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.loadPosts()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t, n) {
                        this.props.category === e.category && this.props.username === e.username || this.loadPosts()
                    }
                }, {
                    key: "render", value: function () {
                        return this.props.isFetching ? i.a.createElement(yr, null) : this.props.posts && 0 !== this.props.posts.length ? i.a.createElement(Cr, null, this.mapPosts()) : i.a.createElement(wr, null)
                    }
                }]), t
            }(i.a.Component), jr = {
                fetchPosts: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return function () {
                        var t = Object(h.a)(f.a.mark(function t(n) {
                            var r;
                            return f.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return n(V), t.prev = 1, t.next = 4, w(e);
                                    case 4:
                                        r = t.sent, n(H(r)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(1), n(z(t.t0));
                                    case 11:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 8]])
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, fetchProfile: function (e) {
                    return function () {
                        var t = Object(h.a)(f.a.mark(function t(n) {
                            var r;
                            return f.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return n(V), t.prev = 1, t.next = 4, _(e);
                                    case 4:
                                        r = t.sent, n(H(r)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(1), n(z(t.t0));
                                    case 11:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 8]])
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }, Sr = Object(s.b)(function (e) {
                return {posts: e.posts.items, isFetching: e.posts.isFetching}
            }, jr)(_r), kr = be.d.div.withConfig({
                displayName: "Post__Wrapper",
                componentId: "sc-1hrzkwq-0"
            })(["overflow:hidden;border:1px solid ", ";border-radius:2px 2px 0 0;@media (max-width:768px){margin-bottom:0;border-top:none;border-left:none;border-right:none;border-radius:0;}"], function (e) {
                return e.theme.border
            }), Tr = function (e) {
                return i.a.createElement(kr, null, i.a.createElement(gr, Object.assign({}, e, {full: !0})))
            }, Rr = be.d.button.withConfig({
                displayName: "DeleteButton__Button",
                componentId: "sc-1go7qjp-0"
            })(["", ";border:none;outline:none;background-color:transparent;cursor:pointer;font-size:13px;color:", ";margin-left:auto;"], We, function (e) {
                return e.theme.normalText
            }), Ir = function (e) {
                return i.a.createElement(Rr, {onClick: e.onClick}, "delete")
            }, Nr = be.d.div.withConfig({
                displayName: "Component__Wrapper",
                componentId: "sc-7db6qr-0"
            })(["display:flex;margin-top:-1px;border:1px solid ", ";", ";padding:8px;background-color:", ";font-size:13px;color:", ";@media (max-width:768px){border-left:none;border-right:none;}"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.round && "border-radius: 0 0 2px 2px"
            }, function (e) {
                return e.theme.foreground
            }, function (e) {
                return e.theme.mutedText
            }), Pr = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).deletePost = function () {
                        return n.props.attemptDeletePost()
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "render", value: function () {
                        return i.a.createElement(Nr, {round: !this.props.token}, i.a.createElement("span", null, this.props.views, " views"), i.a.createElement("span", null, "\xa0|\xa0"), i.a.createElement("span", null, this.props.upvotePercentage, "% upvoted"), this.props.token && (this.props.user.id === this.props.author.id || this.props.user.admin) && i.a.createElement(Ir, {onClick: this.deletePost}))
                    }
                }]), t
            }(i.a.Component), Ur = {
                attemptDeletePost: function () {
                    return function () {
                        var e = Object(h.a)(f.a.mark(function e(t, n) {
                            var r, o;
                            return f.a.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return t(K), e.prev = 1, r = n().posts.post.id, o = n().auth.token, e.next = 6, I(r, o);
                                    case 6:
                                        t({type: "DELETE_POST_SUCCESS", post: r}), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), t({type: "DELETE_POST_ERROR", error: e.t0});
                                    case 12:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this, [[1, 9]])
                        }));
                        return function (t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
            }, Dr = Object(l.d)(Re, Object(s.b)(null, Ur))(Pr), Lr = Object(be.d)(Pt).withConfig({
                displayName: "TextArea",
                componentId: "sc-1ctz1hc-0"
            })(["margin:0;border:none;border-bottom:1px solid ", ";border-radius:0;resize:none;:hover,:focus{border:none;border-bottom:1px solid ", ";box-shadow:none;}"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.border
            }), Mr = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).onKeyDown = function (e) {
                        13 === e.keyCode && (e.preventDefault(), n.props.onSubmit())
                    }, n.renderField = function (e) {
                        return i.a.createElement(Lr, Object.assign({as: "textarea"}, e.input, {
                            placeholder: "enter your comment",
                            rows: "2",
                            onKeyDown: n.onKeyDown
                        }))
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "render", value: function () {
                        return i.a.createElement(Ot.a, {name: this.props.name, component: this.renderField})
                    }
                }]), t
            }(i.a.Component), Fr = Object(be.d)($t).withConfig({
                displayName: "SubmitButton__StyledSubmitButton",
                componentId: "a5ew2b-0"
            })(["margin:4px;padding:4px 12px;"]), Br = function () {
                return i.a.createElement(Fr, {type: "submit"}, "submit")
            }, Ar = Object(be.d)(kt).withConfig({
                displayName: "Component__StyledForm",
                componentId: "sc-1w0izie-0"
            })(["", ";margin-top:-1px;border:1px solid ", ";border-radius:0 0 2px 2px;max-width:none;padding:0;@media (hover:hover){:hover{border:1px solid ", ";}}:focus-within{border:1px solid ", ";box-shadow:0 0 0 2px ", ";}@media (max-width:768px){margin-top:-1px;border-radius:0;border-left:none;border-right:none;:hover,:focus-within{border-left:none;border-right:none;}}"], ze("border", "box-shadow"), function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.accent
            }, function (e) {
                return e.theme.accent
            }, function (e) {
                return e.theme.accent + "4d"
            }), Vr = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).createComment = function (e) {
                        return n.props.attemptCreateComment(e)
                    }, n.onSubmit = function () {
                        return n.props.handleSubmit(n.createComment)
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "render", value: function () {
                        return i.a.createElement(Ar, {onSubmit: this.onSubmit()}, i.a.createElement(Mr, {
                            name: "comment",
                            onSubmit: this.onSubmit()
                        }), i.a.createElement(Br, null))
                    }
                }]), t
            }(i.a.Component), Hr = {
                attemptCreateComment: function (e) {
                    return function () {
                        var t = Object(h.a)(f.a.mark(function t(n, r) {
                            var o, a, i;
                            return f.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return n(J), t.prev = 1, o = r().posts.post.id, a = r().auth.token, t.next = 6, P(o, e, a);
                                    case 6:
                                        i = t.sent, n(Y(i)), t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(1), n({type: "CREATE_COMMENT_ERROR", error: t.t0});
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 10]])
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }, zr = Object(l.d)(Object(yt.a)({form: "comment"}), Object(s.b)(null, Hr))(Vr), Gr = be.d.span.withConfig({
                displayName: "Timestamp",
                componentId: "be3naf-0"
            })(["margin-left:4px;color:", ";"], function (e) {
                return e.theme.mutedText
            }), Wr = function (e) {
                return i.a.createElement(Gr, null, o()(e.created).fromNow())
            }, Qr = be.d.div.withConfig({
                displayName: "Component__Wrapper",
                componentId: "sc-4hpx09-0"
            })(["display:flex;border-bottom:1px solid ", ";padding:8px;font-size:13px;"], function (e) {
                return e.theme.border
            }), qr = function (e) {
                function t() {
                    var e, n;
                    Object(pt.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n = Object(mt.a)(this, (e = Object(ft.a)(t)).call.apply(e, [this].concat(o)))).deleteComment = function () {
                        return n.props.attemptDeleteComment(n.props.id)
                    }, n
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "render", value: function () {
                        return i.a.createElement(Qr, null, i.a.createElement(pr, {username: this.props.author && this.props.author.username}), i.a.createElement(Wr, {created: this.props.created}), this.props.token && (this.props.user.id === this.props.author.id || this.props.user.admin) && i.a.createElement(Ir, {onClick: this.deleteComment}))
                    }
                }]), t
            }(i.a.Component), Kr = {
                attemptDeleteComment: function (e) {
                    return function () {
                        var t = Object(h.a)(f.a.mark(function t(n, r) {
                            var o, a, i;
                            return f.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return n(X), t.prev = 1, o = r().posts.post.id, a = r().auth.token, t.next = 6, D(o, e, a);
                                    case 6:
                                        i = t.sent, n(Z(i)), t.next = 13;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t.catch(1), n({type: "DELETE_COMMENT_ERROR", error: t.t0});
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 10]])
                        }));
                        return function (e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }, Jr = Object(l.d)(Re, Object(s.b)(null, Kr))(qr),
            Yr = be.d.div.withConfig({displayName: "Content", componentId: "f4e3gy-0"})(["padding:12px;"]),
            Xr = function (e) {
                return i.a.createElement(Yr, null, i.a.createElement(cr, null, e.children))
            }, Zr = be.d.div.withConfig({
                displayName: "Comment__Wrapper",
                componentId: "sc-1s0rq2v-0"
            })(["border:1px solid ", ";border-radius:2px;background-color:", ";@media (max-width:768px){border-left:none;border-right:none;border-radius:0;}"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.foreground
            }), $r = function (e) {
                var t = e.body, n = Object(wt.a)(e, ["body"]);
                return i.a.createElement(Zr, null, i.a.createElement(Jr, n), i.a.createElement(Xr, null, t))
            }, eo = be.d.li.withConfig({displayName: "Item", componentId: "sc-1j0svi8-0"})(["margin-bottom:8px;"]),
            to = function (e) {
                return i.a.createElement(eo, null, i.a.createElement($r, e))
            }, no = be.d.ul.withConfig({
                displayName: "CommentList__List",
                componentId: "g47g01-0"
            })(["margin-top:16px;list-style:none;"]), ro = function (e) {
                var t = e.comments;
                return t && i.a.createElement(no, null, function (e) {
                    return e.map(function (e, t) {
                        return i.a.createElement(to, Object.assign({key: t}, e))
                    })
                }(function (e) {
                    return e.sort(function (e, t) {
                        return new Date(t.created) - new Date(e.created)
                    })
                }(t)))
            }, oo = function (e) {
                var t = e.comments;
                return i.a.createElement(i.a.Fragment, null, t && 0 !== t.length ? i.a.createElement(ro, {comments: t}) : i.a.createElement(wr, {comments: !0}))
            }, ao = function (e) {
                function t() {
                    return Object(pt.a)(this, t), Object(mt.a)(this, Object(ft.a)(t).apply(this, arguments))
                }

                return Object(ht.a)(t, e), Object(dt.a)(t, [{
                    key: "componentDidMount", value: function () {
                        this.props.fetchPost(this.props.id)
                    }
                }, {
                    key: "componentDidUpdate", value: function (e, t, n) {
                        this.props.post !== e.post && null === this.props.post && this.props.history.goBack()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.post;
                        return this.props.isFetching ? i.a.createElement(yr, null) : e ? i.a.createElement(i.a.Fragment, null, i.a.createElement(Tr, e), i.a.createElement(Dr, {
                            id: e.id,
                            views: e.views,
                            upvotePercentage: e.upvotePercentage,
                            author: e.author
                        }), this.props.token && i.a.createElement(zr, {id: e.id}), i.a.createElement(oo, {comments: e.comments})) : i.a.createElement(wr, null)
                    }
                }]), t
            }(i.a.Component), io = {
                fetchPost: function (e) {
                    return function () {
                        var t = Object(h.a)(f.a.mark(function t(n) {
                            var r;
                            return f.a.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return n(G), t.prev = 1, t.next = 4, S(e);
                                    case 4:
                                        r = t.sent, n(W(r)), t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(1), n({type: "FETCH_POST_ERROR", error: t.t0});
                                    case 11:
                                    case"end":
                                        return t.stop()
                                }
                            }, t, this, [[1, 8]])
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }, co = Object(l.d)(Re, Object(s.b)(function (e) {
                return {isFetching: e.posts.isFetching, post: e.posts.post}
            }, io))(ao), uo = Object(be.d)(Xt).withConfig({
                displayName: "CreatePostButton",
                componentId: "sc-1oii123-0"
            })(["border-radius:2px 2px 0 0;padding:16px;text-decoration:none;text-align:center;"]), so = function () {
                return i.a.createElement(uo, {as: Ie.a, to: "/createpost"}, "create post")
            }, lo = Object(be.d)(nt).withConfig({
                displayName: "Item",
                componentId: "a8qgw9-0"
            })(["padding:12px;font-size:15px;text-decoration:none;color:", ";::after{left:-1px;top:0;bottom:0;border-left:3px solid ", ";}"], function (e) {
                return e.theme.normalText
            }, function (e) {
                return e.theme.accent
            }), po = function (e) {
                var t = e.category, n = "all" === t;
                return i.a.createElement(lo, {exact: n, to: n ? "/" : "/a/".concat(t)}, t)
            }, mo = be.d.span.withConfig({
                displayName: "Header",
                componentId: "sc-1q68elf-0"
            })(["", ";display:block;padding:12px;text-align:center;color:", ";"], Ae, function (e) {
                return e.theme.mutedText
            }), fo = function () {
                return i.a.createElement(mo, null, "categories")
            }, ho = be.d.nav.withConfig({
                displayName: "CategoryList",
                componentId: "sc-6s4asm-0"
            })(["display:flex;flex-direction:column;"]), bo = function () {
                return i.a.createElement(ho, null, i.a.createElement(fo, null), ["all"].concat(Object(vn.a)(fn)).map(function (e, t) {
                    return i.a.createElement(po, {key: t, category: e})
                }))
            }, go = be.d.aside.withConfig({
                displayName: "Component__Wrapper",
                componentId: "zf0vs4-0"
            })(["display:flex;flex-direction:column;flex-basis:240px;margin-left:24px;border:1px solid ", ";border-radius:2px;background-color:", ";@media (max-width:768px){display:none;}"], function (e) {
                return e.theme.border
            }, function (e) {
                return e.theme.foreground
            }), Eo = Re(function (e) {
                var t = e.token;
                return i.a.createElement(go, null, t && i.a.createElement(so, null), i.a.createElement(bo, null))
            }), xo = be.d.div.withConfig({
                displayName: "Home__Wrapper",
                componentId: "sc-1i9fh6h-0"
            })(["display:flex;align-items:flex-start;margin:0 10vw;@media (max-width:1024px){margin:0 5vw;}@media (max-width:768px){display:block;margin:0;}"]),
            vo = function () {
                return i.a.createElement(xo, null, i.a.createElement(xn, null, i.a.createElement(Ee.a, {component: jn}), i.a.createElement(Ee.a, {
                    exact: !0,
                    path: "/",
                    component: Sr
                }), i.a.createElement(Ee.a, {
                    exact: !0, path: "/a/:category", render: function (e) {
                        var t = e.match;
                        return i.a.createElement(Sr, {category: t.params.category})
                    }
                }), i.a.createElement(Ee.a, {
                    exact: !0, path: "/u/:username", render: function (e) {
                        var t = e.match;
                        return i.a.createElement(Sr, {username: t.params.username})
                    }
                }), i.a.createElement(Ee.a, {
                    exact: !0, path: "/a/:category/:post", render: function (e) {
                        var t = e.match, n = e.history;
                        return i.a.createElement(co, {id: t.params.post, history: n})
                    }
                })), i.a.createElement(Ee.a, {component: Eo}))
            }, yo = function (e) {
                return i.a.createElement(be.a, {theme: we(e.dark)}, i.a.createElement(ge.a, {history: je}, i.a.createElement(i.a.Fragment, null, i.a.createElement(Te, null), i.a.createElement(Ee.a, {component: lt}), i.a.createElement(Ee.a, {component: vt}), i.a.createElement(xe.a, null, i.a.createElement(Ee.a, {
                    path: "/login",
                    component: an
                }), i.a.createElement(Ee.a, {path: "/signup", component: mn}), i.a.createElement(Ee.a, {
                    path: "/createpost",
                    component: En
                }), i.a.createElement(Ee.a, {path: "/", component: vo})))))
            }, Oo = Object(s.b)(function (e) {
                return {dark: e.theme.dark}
            })(yo);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        u.a.render(i.a.createElement(s.a, {store: he}, i.a.createElement(Oo, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
        })
    }
}, [[111, 1, 2]]]);
//# sourceMappingURL=main.32ebaf54.chunk.js.map