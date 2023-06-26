(() => {
    var __webpack_modules__ = {
        4102: module => {
            /*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
 * @date: 20-08-2020 14:0:14, 
 * @version: 5.6.2,
 * @link: https://simpleparallax.com/
 */
            !function(t, e) {
                true ? module.exports = e() : 0;
            }(window, (function() {
                return function(t) {
                    var e = {};
                    function n(i) {
                        if (e[i]) return e[i].exports;
                        var r = e[i] = {
                            i,
                            l: !1,
                            exports: {}
                        };
                        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, i) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: i
                        });
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var i = Object.create(null);
                        if (n.r(i), Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t) for (var r in t) n.d(i, r, function(e) {
                            return t[e];
                        }.bind(null, r));
                        return i;
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default;
                        } : function() {
                            return t;
                        };
                        return n.d(e, "a", e), e;
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e);
                    }, n.p = "", n(n.s = 0);
                }([ function(t, e, n) {
                    "use strict";
                    n.r(e), n.d(e, "default", (function() {
                        return x;
                    }));
                    var i = function() {
                        return Element.prototype.closest && "IntersectionObserver" in window;
                    };
                    function r(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                            Object.defineProperty(t, i.key, i);
                        }
                    }
                    var s = new (function() {
                        function t() {
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t), this.positions = {
                                top: 0,
                                bottom: 0,
                                height: 0
                            };
                        }
                        var e, n, i;
                        return e = t, (n = [ {
                            key: "setViewportTop",
                            value: function(t) {
                                return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions;
                            }
                        }, {
                            key: "setViewportBottom",
                            value: function() {
                                return this.positions.bottom = this.positions.top + this.positions.height, this.positions;
                            }
                        }, {
                            key: "setViewportAll",
                            value: function(t) {
                                return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, 
                                this.positions.bottom = this.positions.top + this.positions.height, this.positions;
                            }
                        } ]) && r(e.prototype, n), i && r(e, i), t;
                    }()), o = function(t) {
                        return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [ t ];
                    }, a = function() {
                        for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t; ) t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0, 
                        n += 1;
                        return t;
                    }(), l = function(t) {
                        return "img" !== t.tagName.toLowerCase() && "picture" !== t.tagName.toLowerCase() || !!t && !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth);
                    };
                    function u(t) {
                        return function(t) {
                            if (Array.isArray(t)) return c(t);
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                        }(t) || function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function c(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                        return i;
                    }
                    function h(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                            Object.defineProperty(t, i.key, i);
                        }
                    }
                    var f = function() {
                        function t(e, n) {
                            var i = this;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t), this.element = e, this.elementContainer = e, this.settings = n, this.isVisible = !0, 
                            this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), 
                            this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null, 
                            l(e) ? this.init() : this.element.addEventListener("load", (function() {
                                setTimeout((function() {
                                    i.init(!0);
                                }), 50);
                            }));
                        }
                        var e, n, i;
                        return e = t, (n = [ {
                            key: "init",
                            value: function(t) {
                                var e = this;
                                this.isInit || (t && (this.rangeMax = null), this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), 
                                this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), 
                                this.animate(), this.settings.delay > 0 ? setTimeout((function() {
                                    e.setTransitionCSS(), e.elementContainer.classList.add("simple-parallax-initialized");
                                }), 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = !0));
                            }
                        }, {
                            key: "wrapElement",
                            value: function() {
                                var t = this.element.closest("picture") || this.element, e = this.customWrapper || document.createElement("div");
                                e.classList.add("simpleParallax"), e.style.overflow = "hidden", this.customWrapper || (t.parentNode.insertBefore(e, t), 
                                e.appendChild(t)), this.elementContainer = e;
                            }
                        }, {
                            key: "unWrapElement",
                            value: function() {
                                var t = this.elementContainer;
                                this.customWrapper ? (t.classList.remove("simpleParallax"), t.style.overflow = "") : t.replaceWith.apply(t, u(t.childNodes));
                            }
                        }, {
                            key: "setTransformCSS",
                            value: function() {
                                !1 === this.settings.overflow && (this.element.style[a] = "scale(".concat(this.settings.scale, ")")), 
                                this.element.style.willChange = "transform";
                            }
                        }, {
                            key: "setTransitionCSS",
                            value: function() {
                                this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
                            }
                        }, {
                            key: "unSetStyle",
                            value: function() {
                                this.element.style.willChange = "", this.element.style[a] = "", this.element.style.transition = "";
                            }
                        }, {
                            key: "getElementOffset",
                            value: function() {
                                var t = this.elementContainer.getBoundingClientRect();
                                if (this.elementHeight = t.height, this.elementTop = t.top + s.positions.top, this.settings.customContainer) {
                                    var e = this.settings.customContainer.getBoundingClientRect();
                                    this.elementTop = t.top - e.top + s.positions.top;
                                }
                                this.elementBottom = this.elementHeight + this.elementTop;
                            }
                        }, {
                            key: "buildThresholdList",
                            value: function() {
                                for (var t = [], e = 1; e <= this.elementHeight; e++) {
                                    var n = e / this.elementHeight;
                                    t.push(n);
                                }
                                return t;
                            }
                        }, {
                            key: "intersectionObserver",
                            value: function() {
                                var t = {
                                    root: null,
                                    threshold: this.buildThresholdList()
                                };
                                this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), 
                                this.observer.observe(this.element);
                            }
                        }, {
                            key: "intersectionObserverCallback",
                            value: function(t) {
                                var e = this;
                                t.forEach((function(t) {
                                    t.isIntersecting ? e.isVisible = !0 : e.isVisible = !1;
                                }));
                            }
                        }, {
                            key: "checkIfVisible",
                            value: function() {
                                return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom;
                            }
                        }, {
                            key: "getRangeMax",
                            value: function() {
                                var t = this.element.clientHeight;
                                this.rangeMax = t * this.settings.scale - t;
                            }
                        }, {
                            key: "getTranslateValue",
                            value: function() {
                                var t = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1);
                                return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), 
                                this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), 
                                this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, 
                                !0));
                            }
                        }, {
                            key: "animate",
                            value: function() {
                                var t, e = 0, n = 0;
                                (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), 
                                (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), 
                                t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"), 
                                this.element.style[a] = t;
                            }
                        } ]) && h(e.prototype, n), i && h(e, i), t;
                    }();
                    function m(t) {
                        return function(t) {
                            if (Array.isArray(t)) return y(t);
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                        }(t) || d(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function p(t, e) {
                        return function(t) {
                            if (Array.isArray(t)) return t;
                        }(t) || function(t, e) {
                            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                            var n = [], i = !0, r = !1, s = void 0;
                            try {
                                for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), 
                                !e || n.length !== e); i = !0) ;
                            } catch (t) {
                                r = !0, s = t;
                            } finally {
                                try {
                                    i || null == a.return || a.return();
                                } finally {
                                    if (r) throw s;
                                }
                            }
                            return n;
                        }(t, e) || d(t, e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function d(t, e) {
                        if (t) {
                            if ("string" == typeof t) return y(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
                        }
                    }
                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                        return i;
                    }
                    function v(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                            Object.defineProperty(t, i.key, i);
                        }
                    }
                    var g, b, w = !1, T = [], x = function() {
                        function t(e, n) {
                            if (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t), e && i()) {
                                if (this.elements = o(e), this.defaults = {
                                    delay: 0,
                                    orientation: "up",
                                    scale: 1.3,
                                    overflow: !1,
                                    transition: "cubic-bezier(0,0,0,1)",
                                    customContainer: "",
                                    customWrapper: "",
                                    maxTransition: 0
                                }, this.settings = Object.assign(this.defaults, n), this.settings.customContainer) {
                                    var r = p(o(this.settings.customContainer), 1);
                                    this.customContainer = r[0];
                                }
                                this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), 
                                this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), 
                                this.init();
                            }
                        }
                        var e, n, r;
                        return e = t, (n = [ {
                            key: "init",
                            value: function() {
                                var t = this;
                                s.setViewportAll(this.customContainer), T = [].concat(m(this.elements.map((function(e) {
                                    return new f(e, t.settings);
                                }))), m(T)), w || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), 
                                w = !0);
                            }
                        }, {
                            key: "resizeIsDone",
                            value: function() {
                                clearTimeout(b), b = setTimeout(this.refresh, 200);
                            }
                        }, {
                            key: "proceedRequestAnimationFrame",
                            value: function() {
                                var t = this;
                                s.setViewportTop(this.customContainer), this.lastPosition !== s.positions.top ? (s.setViewportBottom(), 
                                T.forEach((function(e) {
                                    t.proceedElement(e);
                                })), g = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s.positions.top) : g = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                            }
                        }, {
                            key: "proceedElement",
                            value: function(t) {
                                (this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate();
                            }
                        }, {
                            key: "refresh",
                            value: function() {
                                s.setViewportAll(this.customContainer), T.forEach((function(t) {
                                    t.getElementOffset(), t.getRangeMax();
                                })), this.lastPosition = -1;
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                var t = this, e = [];
                                T = T.filter((function(n) {
                                    return t.elements.includes(n.element) ? (e.push(n), !1) : n;
                                })), e.forEach((function(e) {
                                    e.unSetStyle(), !1 === t.settings.overflow && e.unWrapElement();
                                })), T.length || (window.cancelAnimationFrame(g), window.removeEventListener("resize", this.refresh), 
                                w = !1);
                            }
                        } ]) && v(e.prototype, n), r && v(e, r), t;
                    }();
                } ]).default;
            }));
        },
        1607: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(5892);
            __webpack_require__(9547);
            var path = __webpack_require__(4522);
            module.exports = path.Array.from;
        },
        580: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(4959);
            __webpack_require__(3982);
            __webpack_require__(4509);
            __webpack_require__(5892);
            var path = __webpack_require__(4522);
            module.exports = path.Map;
        },
        8581: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(662);
            var path = __webpack_require__(4522);
            module.exports = path.Object.assign;
        },
        5356: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(4959);
            __webpack_require__(4509);
            __webpack_require__(6616);
            __webpack_require__(5892);
            var path = __webpack_require__(4522);
            module.exports = path.Set;
        },
        8921: (module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(4959);
            __webpack_require__(4509);
            __webpack_require__(1986);
            var path = __webpack_require__(4522);
            module.exports = path.WeakMap;
        },
        4833: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            var tryToString = __webpack_require__(8336);
            var $TypeError = TypeError;
            module.exports = function(argument) {
                if (isCallable(argument)) return argument;
                throw $TypeError(tryToString(argument) + " is not a function");
            };
        },
        7527: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            var $String = String;
            var $TypeError = TypeError;
            module.exports = function(argument) {
                if (typeof argument == "object" || isCallable(argument)) return argument;
                throw $TypeError("Can't set " + $String(argument) + " as a prototype");
            };
        },
        963: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var create = __webpack_require__(4508);
            var defineProperty = __webpack_require__(2498).f;
            var UNSCOPABLES = wellKnownSymbol("unscopables");
            var ArrayPrototype = Array.prototype;
            if (ArrayPrototype[UNSCOPABLES] == void 0) defineProperty(ArrayPrototype, UNSCOPABLES, {
                configurable: true,
                value: create(null)
            });
            module.exports = function(key) {
                ArrayPrototype[UNSCOPABLES][key] = true;
            };
        },
        5491: (module, __unused_webpack_exports, __webpack_require__) => {
            var isPrototypeOf = __webpack_require__(6678);
            var $TypeError = TypeError;
            module.exports = function(it, Prototype) {
                if (isPrototypeOf(Prototype, it)) return it;
                throw $TypeError("Incorrect invocation");
            };
        },
        6154: (module, __unused_webpack_exports, __webpack_require__) => {
            var isObject = __webpack_require__(3021);
            var $String = String;
            var $TypeError = TypeError;
            module.exports = function(argument) {
                if (isObject(argument)) return argument;
                throw $TypeError($String(argument) + " is not an object");
            };
        },
        809: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = fails((function() {
                if (typeof ArrayBuffer == "function") {
                    var buffer = new ArrayBuffer(8);
                    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", {
                        value: 8
                    });
                }
            }));
        },
        8970: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var bind = __webpack_require__(7801);
            var call = __webpack_require__(4923);
            var toObject = __webpack_require__(1851);
            var callWithSafeIterationClosing = __webpack_require__(8280);
            var isArrayIteratorMethod = __webpack_require__(7212);
            var isConstructor = __webpack_require__(2100);
            var lengthOfArrayLike = __webpack_require__(3773);
            var createProperty = __webpack_require__(946);
            var getIterator = __webpack_require__(4120);
            var getIteratorMethod = __webpack_require__(8991);
            var $Array = Array;
            module.exports = function from(arrayLike) {
                var O = toObject(arrayLike);
                var IS_CONSTRUCTOR = isConstructor(this);
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                var mapping = mapfn !== void 0;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
                var iteratorMethod = getIteratorMethod(O);
                var index = 0;
                var length, result, step, iterator, next, value;
                if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = getIterator(O, iteratorMethod);
                    next = iterator.next;
                    result = IS_CONSTRUCTOR ? new this : [];
                    for (;!(step = call(next, iterator)).done; index++) {
                        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [ step.value, index ], true) : step.value;
                        createProperty(result, index, value);
                    }
                } else {
                    length = lengthOfArrayLike(O);
                    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
                    for (;length > index; index++) {
                        value = mapping ? mapfn(O[index], index) : O[index];
                        createProperty(result, index, value);
                    }
                }
                result.length = index;
                return result;
            };
        },
        4097: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIndexedObject = __webpack_require__(8839);
            var toAbsoluteIndex = __webpack_require__(3566);
            var lengthOfArrayLike = __webpack_require__(3773);
            var createMethod = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = lengthOfArrayLike(O);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                    } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                    return !IS_INCLUDES && -1;
                };
            };
            module.exports = {
                includes: createMethod(true),
                indexOf: createMethod(false)
            };
        },
        3259: (module, __unused_webpack_exports, __webpack_require__) => {
            var bind = __webpack_require__(7801);
            var uncurryThis = __webpack_require__(8043);
            var IndexedObject = __webpack_require__(5832);
            var toObject = __webpack_require__(1851);
            var lengthOfArrayLike = __webpack_require__(3773);
            var arraySpeciesCreate = __webpack_require__(4793);
            var push = uncurryThis([].push);
            var createMethod = function(TYPE) {
                var IS_MAP = TYPE == 1;
                var IS_FILTER = TYPE == 2;
                var IS_SOME = TYPE == 3;
                var IS_EVERY = TYPE == 4;
                var IS_FIND_INDEX = TYPE == 6;
                var IS_FILTER_REJECT = TYPE == 7;
                var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                return function($this, callbackfn, that, specificCreate) {
                    var O = toObject($this);
                    var self = IndexedObject(O);
                    var boundFunction = bind(callbackfn, that);
                    var length = lengthOfArrayLike(self);
                    var index = 0;
                    var create = specificCreate || arraySpeciesCreate;
                    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
                    var value, result;
                    for (;length > index; index++) if (NO_HOLES || index in self) {
                        value = self[index];
                        result = boundFunction(value, index, O);
                        if (TYPE) if (IS_MAP) target[index] = result; else if (result) switch (TYPE) {
                          case 3:
                            return true;

                          case 5:
                            return value;

                          case 6:
                            return index;

                          case 2:
                            push(target, value);
                        } else switch (TYPE) {
                          case 4:
                            return false;

                          case 7:
                            push(target, value);
                        }
                    }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
                };
            };
            module.exports = {
                forEach: createMethod(0),
                map: createMethod(1),
                filter: createMethod(2),
                some: createMethod(3),
                every: createMethod(4),
                find: createMethod(5),
                findIndex: createMethod(6),
                filterReject: createMethod(7)
            };
        },
        8339: (module, __unused_webpack_exports, __webpack_require__) => {
            var toAbsoluteIndex = __webpack_require__(3566);
            var lengthOfArrayLike = __webpack_require__(3773);
            var createProperty = __webpack_require__(946);
            var $Array = Array;
            var max = Math.max;
            module.exports = function(O, start, end) {
                var length = lengthOfArrayLike(O);
                var k = toAbsoluteIndex(start, length);
                var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
                var result = $Array(max(fin - k, 0));
                for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
                result.length = n;
                return result;
            };
        },
        7188: (module, __unused_webpack_exports, __webpack_require__) => {
            var isArray = __webpack_require__(3040);
            var isConstructor = __webpack_require__(2100);
            var isObject = __webpack_require__(3021);
            var wellKnownSymbol = __webpack_require__(551);
            var SPECIES = wellKnownSymbol("species");
            var $Array = Array;
            module.exports = function(originalArray) {
                var C;
                if (isArray(originalArray)) {
                    C = originalArray.constructor;
                    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = void 0; else if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = void 0;
                    }
                }
                return C === void 0 ? $Array : C;
            };
        },
        4793: (module, __unused_webpack_exports, __webpack_require__) => {
            var arraySpeciesConstructor = __webpack_require__(7188);
            module.exports = function(originalArray, length) {
                return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
            };
        },
        8280: (module, __unused_webpack_exports, __webpack_require__) => {
            var anObject = __webpack_require__(6154);
            var iteratorClose = __webpack_require__(932);
            module.exports = function(iterator, fn, value, ENTRIES) {
                try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (error) {
                    iteratorClose(iterator, "throw", error);
                }
            };
        },
        6416: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var ITERATOR = wellKnownSymbol("iterator");
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    return: function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                Array.from(iteratorWithReturn, (function() {
                    throw 2;
                }));
            } catch (error) {}
            module.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {};
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {}
                return ITERATION_SUPPORT;
            };
        },
        539: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var toString = uncurryThis({}.toString);
            var stringSlice = uncurryThis("".slice);
            module.exports = function(it) {
                return stringSlice(toString(it), 8, -1);
            };
        },
        456: (module, __unused_webpack_exports, __webpack_require__) => {
            var TO_STRING_TAG_SUPPORT = __webpack_require__(1554);
            var isCallable = __webpack_require__(8885);
            var classofRaw = __webpack_require__(539);
            var wellKnownSymbol = __webpack_require__(551);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var $Object = Object;
            var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
            }()) == "Arguments";
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {}
            };
            module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
                var O, tag, result;
                return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
            };
        },
        1589: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var create = __webpack_require__(4508);
            var defineBuiltInAccessor = __webpack_require__(2630);
            var defineBuiltIns = __webpack_require__(1799);
            var bind = __webpack_require__(7801);
            var anInstance = __webpack_require__(5491);
            var isNullOrUndefined = __webpack_require__(1198);
            var iterate = __webpack_require__(6014);
            var defineIterator = __webpack_require__(5772);
            var createIterResultObject = __webpack_require__(7891);
            var setSpecies = __webpack_require__(473);
            var DESCRIPTORS = __webpack_require__(3035);
            var fastKey = __webpack_require__(9377).fastKey;
            var InternalStateModule = __webpack_require__(3244);
            var setInternalState = InternalStateModule.set;
            var internalStateGetterFor = InternalStateModule.getterFor;
            module.exports = {
                getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                    var Constructor = wrapper((function(that, iterable) {
                        anInstance(that, Prototype);
                        setInternalState(that, {
                            type: CONSTRUCTOR_NAME,
                            index: create(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        });
                        if (!DESCRIPTORS) that.size = 0;
                        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                            that,
                            AS_ENTRIES: IS_MAP
                        });
                    }));
                    var Prototype = Constructor.prototype;
                    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var define = function(that, key, value) {
                        var state = getInternalState(that);
                        var entry = getEntry(that, key);
                        var previous, index;
                        if (entry) entry.value = value; else {
                            state.last = entry = {
                                index: index = fastKey(key, true),
                                key,
                                value,
                                previous: previous = state.last,
                                next: void 0,
                                removed: false
                            };
                            if (!state.first) state.first = entry;
                            if (previous) previous.next = entry;
                            if (DESCRIPTORS) state.size++; else that.size++;
                            if (index !== "F") state.index[index] = entry;
                        }
                        return that;
                    };
                    var getEntry = function(that, key) {
                        var state = getInternalState(that);
                        var index = fastKey(key);
                        var entry;
                        if (index !== "F") return state.index[index];
                        for (entry = state.first; entry; entry = entry.next) if (entry.key == key) return entry;
                    };
                    defineBuiltIns(Prototype, {
                        clear: function clear() {
                            var that = this;
                            var state = getInternalState(that);
                            var data = state.index;
                            var entry = state.first;
                            while (entry) {
                                entry.removed = true;
                                if (entry.previous) entry.previous = entry.previous.next = void 0;
                                delete data[entry.index];
                                entry = entry.next;
                            }
                            state.first = state.last = void 0;
                            if (DESCRIPTORS) state.size = 0; else that.size = 0;
                        },
                        delete: function(key) {
                            var that = this;
                            var state = getInternalState(that);
                            var entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.next;
                                var prev = entry.previous;
                                delete state.index[entry.index];
                                entry.removed = true;
                                if (prev) prev.next = next;
                                if (next) next.previous = prev;
                                if (state.first == entry) state.first = next;
                                if (state.last == entry) state.last = prev;
                                if (DESCRIPTORS) state.size--; else that.size--;
                            }
                            return !!entry;
                        },
                        forEach: function forEach(callbackfn) {
                            var state = getInternalState(this);
                            var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                            var entry;
                            while (entry = entry ? entry.next : state.first) {
                                boundFunction(entry.value, entry.key, this);
                                while (entry && entry.removed) entry = entry.previous;
                            }
                        },
                        has: function has(key) {
                            return !!getEntry(this, key);
                        }
                    });
                    defineBuiltIns(Prototype, IS_MAP ? {
                        get: function get(key) {
                            var entry = getEntry(this, key);
                            return entry && entry.value;
                        },
                        set: function set(key, value) {
                            return define(this, key === 0 ? 0 : key, value);
                        }
                    } : {
                        add: function add(value) {
                            return define(this, value = value === 0 ? 0 : value, value);
                        }
                    });
                    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, "size", {
                        configurable: true,
                        get: function() {
                            return getInternalState(this).size;
                        }
                    });
                    return Constructor;
                },
                setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
                    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
                    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
                    defineIterator(Constructor, CONSTRUCTOR_NAME, (function(iterated, kind) {
                        setInternalState(this, {
                            type: ITERATOR_NAME,
                            target: iterated,
                            state: getInternalCollectionState(iterated),
                            kind,
                            last: void 0
                        });
                    }), (function() {
                        var state = getInternalIteratorState(this);
                        var kind = state.kind;
                        var entry = state.last;
                        while (entry && entry.removed) entry = entry.previous;
                        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                            state.target = void 0;
                            return createIterResultObject(void 0, true);
                        }
                        if (kind == "keys") return createIterResultObject(entry.key, false);
                        if (kind == "values") return createIterResultObject(entry.value, false);
                        return createIterResultObject([ entry.key, entry.value ], false);
                    }), IS_MAP ? "entries" : "values", !IS_MAP, true);
                    setSpecies(CONSTRUCTOR_NAME);
                }
            };
        },
        1052: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var uncurryThis = __webpack_require__(8043);
            var defineBuiltIns = __webpack_require__(1799);
            var getWeakData = __webpack_require__(9377).getWeakData;
            var anInstance = __webpack_require__(5491);
            var anObject = __webpack_require__(6154);
            var isNullOrUndefined = __webpack_require__(1198);
            var isObject = __webpack_require__(3021);
            var iterate = __webpack_require__(6014);
            var ArrayIterationModule = __webpack_require__(3259);
            var hasOwn = __webpack_require__(7235);
            var InternalStateModule = __webpack_require__(3244);
            var setInternalState = InternalStateModule.set;
            var internalStateGetterFor = InternalStateModule.getterFor;
            var find = ArrayIterationModule.find;
            var findIndex = ArrayIterationModule.findIndex;
            var splice = uncurryThis([].splice);
            var id = 0;
            var uncaughtFrozenStore = function(state) {
                return state.frozen || (state.frozen = new UncaughtFrozenStore);
            };
            var UncaughtFrozenStore = function() {
                this.entries = [];
            };
            var findUncaughtFrozen = function(store, key) {
                return find(store.entries, (function(it) {
                    return it[0] === key;
                }));
            };
            UncaughtFrozenStore.prototype = {
                get: function(key) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) return entry[1];
                },
                has: function(key) {
                    return !!findUncaughtFrozen(this, key);
                },
                set: function(key, value) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) entry[1] = value; else this.entries.push([ key, value ]);
                },
                delete: function(key) {
                    var index = findIndex(this.entries, (function(it) {
                        return it[0] === key;
                    }));
                    if (~index) splice(this.entries, index, 1);
                    return !!~index;
                }
            };
            module.exports = {
                getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
                    var Constructor = wrapper((function(that, iterable) {
                        anInstance(that, Prototype);
                        setInternalState(that, {
                            type: CONSTRUCTOR_NAME,
                            id: id++,
                            frozen: void 0
                        });
                        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                            that,
                            AS_ENTRIES: IS_MAP
                        });
                    }));
                    var Prototype = Constructor.prototype;
                    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
                    var define = function(that, key, value) {
                        var state = getInternalState(that);
                        var data = getWeakData(anObject(key), true);
                        if (data === true) uncaughtFrozenStore(state).set(key, value); else data[state.id] = value;
                        return that;
                    };
                    defineBuiltIns(Prototype, {
                        delete: function(key) {
                            var state = getInternalState(this);
                            if (!isObject(key)) return false;
                            var data = getWeakData(key);
                            if (data === true) return uncaughtFrozenStore(state)["delete"](key);
                            return data && hasOwn(data, state.id) && delete data[state.id];
                        },
                        has: function has(key) {
                            var state = getInternalState(this);
                            if (!isObject(key)) return false;
                            var data = getWeakData(key);
                            if (data === true) return uncaughtFrozenStore(state).has(key);
                            return data && hasOwn(data, state.id);
                        }
                    });
                    defineBuiltIns(Prototype, IS_MAP ? {
                        get: function get(key) {
                            var state = getInternalState(this);
                            if (isObject(key)) {
                                var data = getWeakData(key);
                                if (data === true) return uncaughtFrozenStore(state).get(key);
                                return data ? data[state.id] : void 0;
                            }
                        },
                        set: function set(key, value) {
                            return define(this, key, value);
                        }
                    } : {
                        add: function add(value) {
                            return define(this, value, true);
                        }
                    });
                    return Constructor;
                }
            };
        },
        7855: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(1669);
            var global = __webpack_require__(8159);
            var uncurryThis = __webpack_require__(8043);
            var isForced = __webpack_require__(1e3);
            var defineBuiltIn = __webpack_require__(7169);
            var InternalMetadataModule = __webpack_require__(9377);
            var iterate = __webpack_require__(6014);
            var anInstance = __webpack_require__(5491);
            var isCallable = __webpack_require__(8885);
            var isNullOrUndefined = __webpack_require__(1198);
            var isObject = __webpack_require__(3021);
            var fails = __webpack_require__(6686);
            var checkCorrectnessOfIteration = __webpack_require__(6416);
            var setToStringTag = __webpack_require__(4299);
            var inheritIfRequired = __webpack_require__(3854);
            module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
                var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
                var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
                var ADDER = IS_MAP ? "set" : "add";
                var NativeConstructor = global[CONSTRUCTOR_NAME];
                var NativePrototype = NativeConstructor && NativeConstructor.prototype;
                var Constructor = NativeConstructor;
                var exported = {};
                var fixMethod = function(KEY) {
                    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
                    defineBuiltIn(NativePrototype, KEY, KEY == "add" ? function add(value) {
                        uncurriedNativeMethod(this, value === 0 ? 0 : value);
                        return this;
                    } : KEY == "delete" ? function(key) {
                        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
                    } : KEY == "get" ? function get(key) {
                        return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
                    } : KEY == "has" ? function has(key) {
                        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
                    } : function set(key, value) {
                        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
                        return this;
                    });
                };
                var REPLACE = isForced(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails((function() {
                    (new NativeConstructor).entries().next();
                }))));
                if (REPLACE) {
                    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
                    InternalMetadataModule.enable();
                } else if (isForced(CONSTRUCTOR_NAME, true)) {
                    var instance = new Constructor;
                    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                    var THROWS_ON_PRIMITIVES = fails((function() {
                        instance.has(1);
                    }));
                    var ACCEPT_ITERABLES = checkCorrectnessOfIteration((function(iterable) {
                        new NativeConstructor(iterable);
                    }));
                    var BUGGY_ZERO = !IS_WEAK && fails((function() {
                        var $instance = new NativeConstructor;
                        var index = 5;
                        while (index--) $instance[ADDER](index, index);
                        return !$instance.has(-0);
                    }));
                    if (!ACCEPT_ITERABLES) {
                        Constructor = wrapper((function(dummy, iterable) {
                            anInstance(dummy, NativePrototype);
                            var that = inheritIfRequired(new NativeConstructor, dummy, Constructor);
                            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], {
                                that,
                                AS_ENTRIES: IS_MAP
                            });
                            return that;
                        }));
                        Constructor.prototype = NativePrototype;
                        NativePrototype.constructor = Constructor;
                    }
                    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                        fixMethod("delete");
                        fixMethod("has");
                        IS_MAP && fixMethod("get");
                    }
                    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
                }
                exported[CONSTRUCTOR_NAME] = Constructor;
                $({
                    global: true,
                    constructor: true,
                    forced: Constructor != NativeConstructor
                }, exported);
                setToStringTag(Constructor, CONSTRUCTOR_NAME);
                if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
                return Constructor;
            };
        },
        3814: (module, __unused_webpack_exports, __webpack_require__) => {
            var hasOwn = __webpack_require__(7235);
            var ownKeys = __webpack_require__(8824);
            var getOwnPropertyDescriptorModule = __webpack_require__(4186);
            var definePropertyModule = __webpack_require__(2498);
            module.exports = function(target, source, exceptions) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        },
        71: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                function F() {}
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F) !== F.prototype;
            }));
        },
        7891: module => {
            module.exports = function(value, done) {
                return {
                    value,
                    done
                };
            };
        },
        2201: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var definePropertyModule = __webpack_require__(2498);
            var createPropertyDescriptor = __webpack_require__(8232);
            module.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        },
        8232: module => {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value
                };
            };
        },
        946: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toPropertyKey = __webpack_require__(3163);
            var definePropertyModule = __webpack_require__(2498);
            var createPropertyDescriptor = __webpack_require__(8232);
            module.exports = function(object, key, value) {
                var propertyKey = toPropertyKey(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value)); else object[propertyKey] = value;
            };
        },
        2630: (module, __unused_webpack_exports, __webpack_require__) => {
            var makeBuiltIn = __webpack_require__(9423);
            var defineProperty = __webpack_require__(2498);
            module.exports = function(target, name, descriptor) {
                if (descriptor.get) makeBuiltIn(descriptor.get, name, {
                    getter: true
                });
                if (descriptor.set) makeBuiltIn(descriptor.set, name, {
                    setter: true
                });
                return defineProperty.f(target, name, descriptor);
            };
        },
        7169: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            var definePropertyModule = __webpack_require__(2498);
            var makeBuiltIn = __webpack_require__(9423);
            var defineGlobalProperty = __webpack_require__(7229);
            module.exports = function(O, key, value, options) {
                if (!options) options = {};
                var simple = options.enumerable;
                var name = options.name !== void 0 ? options.name : key;
                if (isCallable(value)) makeBuiltIn(value, name, options);
                if (options.global) if (simple) O[key] = value; else defineGlobalProperty(key, value); else {
                    try {
                        if (!options.unsafe) delete O[key]; else if (O[key]) simple = true;
                    } catch (error) {}
                    if (simple) O[key] = value; else definePropertyModule.f(O, key, {
                        value,
                        enumerable: false,
                        configurable: !options.nonConfigurable,
                        writable: !options.nonWritable
                    });
                }
                return O;
            };
        },
        1799: (module, __unused_webpack_exports, __webpack_require__) => {
            var defineBuiltIn = __webpack_require__(7169);
            module.exports = function(target, src, options) {
                for (var key in src) defineBuiltIn(target, key, src[key], options);
                return target;
            };
        },
        7229: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var defineProperty = Object.defineProperty;
            module.exports = function(key, value) {
                try {
                    defineProperty(global, key, {
                        value,
                        configurable: true,
                        writable: true
                    });
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        },
        3035: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                return Object.defineProperty({}, 1, {
                    get: function() {
                        return 7;
                    }
                })[1] != 7;
            }));
        },
        1586: module => {
            var documentAll = typeof document == "object" && document.all;
            var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
            module.exports = {
                all: documentAll,
                IS_HTMLDDA
            };
        },
        2135: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isObject = __webpack_require__(3021);
            var document = global.document;
            var EXISTS = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return EXISTS ? document.createElement(it) : {};
            };
        },
        7245: module => {
            module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
        },
        6984: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var userAgent = __webpack_require__(7245);
            var process = global.process;
            var Deno = global.Deno;
            var versions = process && process.versions || Deno && Deno.version;
            var v8 = versions && versions.v8;
            var match, version;
            if (v8) {
                match = v8.split(".");
                version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
            }
            if (!version && userAgent) {
                match = userAgent.match(/Edge\/(\d+)/);
                if (!match || match[1] >= 74) {
                    match = userAgent.match(/Chrome\/(\d+)/);
                    if (match) version = +match[1];
                }
            }
            module.exports = version;
        },
        370: module => {
            module.exports = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
        },
        1669: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var getOwnPropertyDescriptor = __webpack_require__(4186).f;
            var createNonEnumerableProperty = __webpack_require__(2201);
            var defineBuiltIn = __webpack_require__(7169);
            var defineGlobalProperty = __webpack_require__(7229);
            var copyConstructorProperties = __webpack_require__(3814);
            var isForced = __webpack_require__(1e3);
            module.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global; else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {}); else target = (global[TARGET] || {}).prototype;
                if (target) for (key in source) {
                    sourceProperty = source[key];
                    if (options.dontCallGetSet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    if (!FORCED && targetProperty !== void 0) {
                        if (typeof sourceProperty == typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
                    defineBuiltIn(target, key, sourceProperty, options);
                }
            };
        },
        6686: module => {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        },
        6741: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                return Object.isExtensible(Object.preventExtensions({}));
            }));
        },
        7801: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(4240);
            var aCallable = __webpack_require__(4833);
            var NATIVE_BIND = __webpack_require__(6497);
            var bind = uncurryThis(uncurryThis.bind);
            module.exports = function(fn, that) {
                aCallable(fn);
                return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
                    return fn.apply(that, arguments);
                };
            };
        },
        6497: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            module.exports = !fails((function() {
                var test = function() {}.bind();
                return typeof test != "function" || test.hasOwnProperty("prototype");
            }));
        },
        4923: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(6497);
            var call = Function.prototype.call;
            module.exports = NATIVE_BIND ? call.bind(call) : function() {
                return call.apply(call, arguments);
            };
        },
        6714: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var hasOwn = __webpack_require__(7235);
            var FunctionPrototype = Function.prototype;
            var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
            var EXISTS = hasOwn(FunctionPrototype, "name");
            var PROPER = EXISTS && function something() {}.name === "something";
            var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
            module.exports = {
                EXISTS,
                PROPER,
                CONFIGURABLE
            };
        },
        8301: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var aCallable = __webpack_require__(4833);
            module.exports = function(object, key, method) {
                try {
                    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
                } catch (error) {}
            };
        },
        4240: (module, __unused_webpack_exports, __webpack_require__) => {
            var classofRaw = __webpack_require__(539);
            var uncurryThis = __webpack_require__(8043);
            module.exports = function(fn) {
                if (classofRaw(fn) === "Function") return uncurryThis(fn);
            };
        },
        8043: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_BIND = __webpack_require__(6497);
            var FunctionPrototype = Function.prototype;
            var call = FunctionPrototype.call;
            var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
            module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
                return function() {
                    return call.apply(fn, arguments);
                };
            };
        },
        3256: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var aFunction = function(argument) {
                return isCallable(argument) ? argument : void 0;
            };
            module.exports = function(namespace, method) {
                return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
            };
        },
        8991: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(456);
            var getMethod = __webpack_require__(7355);
            var isNullOrUndefined = __webpack_require__(1198);
            var Iterators = __webpack_require__(7324);
            var wellKnownSymbol = __webpack_require__(551);
            var ITERATOR = wellKnownSymbol("iterator");
            module.exports = function(it) {
                if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
            };
        },
        4120: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4923);
            var aCallable = __webpack_require__(4833);
            var anObject = __webpack_require__(6154);
            var tryToString = __webpack_require__(8336);
            var getIteratorMethod = __webpack_require__(8991);
            var $TypeError = TypeError;
            module.exports = function(argument, usingIterator) {
                var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
                if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
                throw $TypeError(tryToString(argument) + " is not iterable");
            };
        },
        7355: (module, __unused_webpack_exports, __webpack_require__) => {
            var aCallable = __webpack_require__(4833);
            var isNullOrUndefined = __webpack_require__(1198);
            module.exports = function(V, P) {
                var func = V[P];
                return isNullOrUndefined(func) ? void 0 : aCallable(func);
            };
        },
        8159: function(module, __unused_webpack_exports, __webpack_require__) {
            var check = function(it) {
                return it && it.Math == Math && it;
            };
            module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__.g == "object" && __webpack_require__.g) || function() {
                return this;
            }() || this || Function("return this")();
        },
        7235: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var toObject = __webpack_require__(1851);
            var hasOwnProperty = uncurryThis({}.hasOwnProperty);
            module.exports = Object.hasOwn || function hasOwn(it, key) {
                return hasOwnProperty(toObject(it), key);
            };
        },
        8898: module => {
            module.exports = {};
        },
        2635: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(3256);
            module.exports = getBuiltIn("document", "documentElement");
        },
        9335: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var fails = __webpack_require__(6686);
            var createElement = __webpack_require__(2135);
            module.exports = !DESCRIPTORS && !fails((function() {
                return Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            }));
        },
        5832: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var fails = __webpack_require__(6686);
            var classof = __webpack_require__(539);
            var $Object = Object;
            var split = uncurryThis("".split);
            module.exports = fails((function() {
                return !$Object("z").propertyIsEnumerable(0);
            })) ? function(it) {
                return classof(it) == "String" ? split(it, "") : $Object(it);
            } : $Object;
        },
        3854: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            var isObject = __webpack_require__(3021);
            var setPrototypeOf = __webpack_require__(7618);
            module.exports = function($this, dummy, Wrapper) {
                var NewTarget, NewTargetPrototype;
                if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
                return $this;
            };
        },
        4739: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var isCallable = __webpack_require__(8885);
            var store = __webpack_require__(5481);
            var functionToString = uncurryThis(Function.toString);
            if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
                return functionToString(it);
            };
            module.exports = store.inspectSource;
        },
        9377: (module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(1669);
            var uncurryThis = __webpack_require__(8043);
            var hiddenKeys = __webpack_require__(8898);
            var isObject = __webpack_require__(3021);
            var hasOwn = __webpack_require__(7235);
            var defineProperty = __webpack_require__(2498).f;
            var getOwnPropertyNamesModule = __webpack_require__(1047);
            var getOwnPropertyNamesExternalModule = __webpack_require__(4043);
            var isExtensible = __webpack_require__(7187);
            var uid = __webpack_require__(4519);
            var FREEZING = __webpack_require__(6741);
            var REQUIRED = false;
            var METADATA = uid("meta");
            var id = 0;
            var setMetadata = function(it) {
                defineProperty(it, METADATA, {
                    value: {
                        objectID: "O" + id++,
                        weakData: {}
                    }
                });
            };
            var fastKey = function(it, create) {
                if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
                if (!hasOwn(it, METADATA)) {
                    if (!isExtensible(it)) return "F";
                    if (!create) return "E";
                    setMetadata(it);
                }
                return it[METADATA].objectID;
            };
            var getWeakData = function(it, create) {
                if (!hasOwn(it, METADATA)) {
                    if (!isExtensible(it)) return true;
                    if (!create) return false;
                    setMetadata(it);
                }
                return it[METADATA].weakData;
            };
            var onFreeze = function(it) {
                if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
                return it;
            };
            var enable = function() {
                meta.enable = function() {};
                REQUIRED = true;
                var getOwnPropertyNames = getOwnPropertyNamesModule.f;
                var splice = uncurryThis([].splice);
                var test = {};
                test[METADATA] = 1;
                if (getOwnPropertyNames(test).length) {
                    getOwnPropertyNamesModule.f = function(it) {
                        var result = getOwnPropertyNames(it);
                        for (var i = 0, length = result.length; i < length; i++) if (result[i] === METADATA) {
                            splice(result, i, 1);
                            break;
                        }
                        return result;
                    };
                    $({
                        target: "Object",
                        stat: true,
                        forced: true
                    }, {
                        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
                    });
                }
            };
            var meta = module.exports = {
                enable,
                fastKey,
                getWeakData,
                onFreeze
            };
            hiddenKeys[METADATA] = true;
        },
        3244: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_WEAK_MAP = __webpack_require__(6950);
            var global = __webpack_require__(8159);
            var isObject = __webpack_require__(3021);
            var createNonEnumerableProperty = __webpack_require__(2201);
            var hasOwn = __webpack_require__(7235);
            var shared = __webpack_require__(5481);
            var sharedKey = __webpack_require__(1577);
            var hiddenKeys = __webpack_require__(8898);
            var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
            var TypeError = global.TypeError;
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP || shared.state) {
                var store = shared.state || (shared.state = new WeakMap);
                store.get = store.get;
                store.has = store.has;
                store.set = store.set;
                set = function(it, metadata) {
                    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
                    metadata.facade = it;
                    store.set(it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return store.get(it) || {};
                };
                has = function(it) {
                    return store.has(it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
                    metadata.facade = it;
                    createNonEnumerableProperty(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return hasOwn(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                    return hasOwn(it, STATE);
                };
            }
            module.exports = {
                set,
                get,
                has,
                enforce,
                getterFor
            };
        },
        7212: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var Iterators = __webpack_require__(7324);
            var ITERATOR = wellKnownSymbol("iterator");
            var ArrayPrototype = Array.prototype;
            module.exports = function(it) {
                return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        },
        3040: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(539);
            module.exports = Array.isArray || function isArray(argument) {
                return classof(argument) == "Array";
            };
        },
        8885: (module, __unused_webpack_exports, __webpack_require__) => {
            var $documentAll = __webpack_require__(1586);
            var documentAll = $documentAll.all;
            module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
                return typeof argument == "function" || argument === documentAll;
            } : function(argument) {
                return typeof argument == "function";
            };
        },
        2100: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var classof = __webpack_require__(456);
            var getBuiltIn = __webpack_require__(3256);
            var inspectSource = __webpack_require__(4739);
            var noop = function() {};
            var empty = [];
            var construct = getBuiltIn("Reflect", "construct");
            var constructorRegExp = /^\s*(?:class|function)\b/;
            var exec = uncurryThis(constructorRegExp.exec);
            var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
            var isConstructorModern = function isConstructor(argument) {
                if (!isCallable(argument)) return false;
                try {
                    construct(noop, empty, argument);
                    return true;
                } catch (error) {
                    return false;
                }
            };
            var isConstructorLegacy = function isConstructor(argument) {
                if (!isCallable(argument)) return false;
                switch (classof(argument)) {
                  case "AsyncFunction":
                  case "GeneratorFunction":
                  case "AsyncGeneratorFunction":
                    return false;
                }
                try {
                    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
                } catch (error) {
                    return true;
                }
            };
            isConstructorLegacy.sham = true;
            module.exports = !construct || fails((function() {
                var called;
                return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern((function() {
                    called = true;
                })) || called;
            })) ? isConstructorLegacy : isConstructorModern;
        },
        1e3: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module.exports = isForced;
        },
        1198: module => {
            module.exports = function(it) {
                return it === null || it === void 0;
            };
        },
        3021: (module, __unused_webpack_exports, __webpack_require__) => {
            var isCallable = __webpack_require__(8885);
            var $documentAll = __webpack_require__(1586);
            var documentAll = $documentAll.all;
            module.exports = $documentAll.IS_HTMLDDA ? function(it) {
                return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
            } : function(it) {
                return typeof it == "object" ? it !== null : isCallable(it);
            };
        },
        4156: module => {
            module.exports = false;
        },
        3674: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(3256);
            var isCallable = __webpack_require__(8885);
            var isPrototypeOf = __webpack_require__(6678);
            var USE_SYMBOL_AS_UID = __webpack_require__(9735);
            var $Object = Object;
            module.exports = USE_SYMBOL_AS_UID ? function(it) {
                return typeof it == "symbol";
            } : function(it) {
                var $Symbol = getBuiltIn("Symbol");
                return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
            };
        },
        6014: (module, __unused_webpack_exports, __webpack_require__) => {
            var bind = __webpack_require__(7801);
            var call = __webpack_require__(4923);
            var anObject = __webpack_require__(6154);
            var tryToString = __webpack_require__(8336);
            var isArrayIteratorMethod = __webpack_require__(7212);
            var lengthOfArrayLike = __webpack_require__(3773);
            var isPrototypeOf = __webpack_require__(6678);
            var getIterator = __webpack_require__(4120);
            var getIteratorMethod = __webpack_require__(8991);
            var iteratorClose = __webpack_require__(932);
            var $TypeError = TypeError;
            var Result = function(stopped, result) {
                this.stopped = stopped;
                this.result = result;
            };
            var ResultPrototype = Result.prototype;
            module.exports = function(iterable, unboundFunction, options) {
                var that = options && options.that;
                var AS_ENTRIES = !!(options && options.AS_ENTRIES);
                var IS_RECORD = !!(options && options.IS_RECORD);
                var IS_ITERATOR = !!(options && options.IS_ITERATOR);
                var INTERRUPTED = !!(options && options.INTERRUPTED);
                var fn = bind(unboundFunction, that);
                var iterator, iterFn, index, length, result, next, step;
                var stop = function(condition) {
                    if (iterator) iteratorClose(iterator, "normal", condition);
                    return new Result(true, condition);
                };
                var callFn = function(value) {
                    if (AS_ENTRIES) {
                        anObject(value);
                        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
                    }
                    return INTERRUPTED ? fn(value, stop) : fn(value);
                };
                if (IS_RECORD) iterator = iterable.iterator; else if (IS_ITERATOR) iterator = iterable; else {
                    iterFn = getIteratorMethod(iterable);
                    if (!iterFn) throw $TypeError(tryToString(iterable) + " is not iterable");
                    if (isArrayIteratorMethod(iterFn)) {
                        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
                            result = callFn(iterable[index]);
                            if (result && isPrototypeOf(ResultPrototype, result)) return result;
                        }
                        return new Result(false);
                    }
                    iterator = getIterator(iterable, iterFn);
                }
                next = IS_RECORD ? iterable.next : iterator.next;
                while (!(step = call(next, iterator)).done) {
                    try {
                        result = callFn(step.value);
                    } catch (error) {
                        iteratorClose(iterator, "throw", error);
                    }
                    if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
                }
                return new Result(false);
            };
        },
        932: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4923);
            var anObject = __webpack_require__(6154);
            var getMethod = __webpack_require__(7355);
            module.exports = function(iterator, kind, value) {
                var innerResult, innerError;
                anObject(iterator);
                try {
                    innerResult = getMethod(iterator, "return");
                    if (!innerResult) {
                        if (kind === "throw") throw value;
                        return value;
                    }
                    innerResult = call(innerResult, iterator);
                } catch (error) {
                    innerError = true;
                    innerResult = error;
                }
                if (kind === "throw") throw value;
                if (innerError) throw innerResult;
                anObject(innerResult);
                return value;
            };
        },
        9253: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var IteratorPrototype = __webpack_require__(592).IteratorPrototype;
            var create = __webpack_require__(4508);
            var createPropertyDescriptor = __webpack_require__(8232);
            var setToStringTag = __webpack_require__(4299);
            var Iterators = __webpack_require__(7324);
            var returnThis = function() {
                return this;
            };
            module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        },
        5772: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $ = __webpack_require__(1669);
            var call = __webpack_require__(4923);
            var IS_PURE = __webpack_require__(4156);
            var FunctionName = __webpack_require__(6714);
            var isCallable = __webpack_require__(8885);
            var createIteratorConstructor = __webpack_require__(9253);
            var getPrototypeOf = __webpack_require__(6035);
            var setPrototypeOf = __webpack_require__(7618);
            var setToStringTag = __webpack_require__(4299);
            var createNonEnumerableProperty = __webpack_require__(2201);
            var defineBuiltIn = __webpack_require__(7169);
            var wellKnownSymbol = __webpack_require__(551);
            var Iterators = __webpack_require__(7324);
            var IteratorsCore = __webpack_require__(592);
            var PROPER_FUNCTION_NAME = FunctionName.PROPER;
            var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol("iterator");
            var KEYS = "keys";
            var VALUES = "values";
            var ENTRIES = "entries";
            var returnThis = function() {
                return this;
            };
            module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch (KIND) {
                      case KEYS:
                        return function keys() {
                            return new IteratorConstructor(this, KIND);
                        };

                      case VALUES:
                        return function values() {
                            return new IteratorConstructor(this, KIND);
                        };

                      case ENTRIES:
                        return function entries() {
                            return new IteratorConstructor(this, KIND);
                        };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable));
                    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype); else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) createNonEnumerableProperty(IterablePrototype, "name", VALUES); else {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return call(nativeIterator, this);
                    };
                }
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for (KEY in methods) if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
                    name: DEFAULT
                });
                Iterators[NAME] = defaultIterator;
                return methods;
            };
        },
        592: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var isObject = __webpack_require__(3021);
            var create = __webpack_require__(4508);
            var getPrototypeOf = __webpack_require__(6035);
            var defineBuiltIn = __webpack_require__(7169);
            var wellKnownSymbol = __webpack_require__(551);
            var IS_PURE = __webpack_require__(4156);
            var ITERATOR = wellKnownSymbol("iterator");
            var BUGGY_SAFARI_ITERATORS = false;
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true; else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails((function() {
                var test = {};
                return IteratorPrototype[ITERATOR].call(test) !== test;
            }));
            if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
            if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, (function() {
                return this;
            }));
            module.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
            };
        },
        7324: module => {
            module.exports = {};
        },
        3773: (module, __unused_webpack_exports, __webpack_require__) => {
            var toLength = __webpack_require__(2909);
            module.exports = function(obj) {
                return toLength(obj.length);
            };
        },
        9423: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var fails = __webpack_require__(6686);
            var isCallable = __webpack_require__(8885);
            var hasOwn = __webpack_require__(7235);
            var DESCRIPTORS = __webpack_require__(3035);
            var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(6714).CONFIGURABLE;
            var inspectSource = __webpack_require__(4739);
            var InternalStateModule = __webpack_require__(3244);
            var enforceInternalState = InternalStateModule.enforce;
            var getInternalState = InternalStateModule.get;
            var $String = String;
            var defineProperty = Object.defineProperty;
            var stringSlice = uncurryThis("".slice);
            var replace = uncurryThis("".replace);
            var join = uncurryThis([].join);
            var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails((function() {
                return defineProperty((function() {}), "length", {
                    value: 8
                }).length !== 8;
            }));
            var TEMPLATE = String(String).split("String");
            var makeBuiltIn = module.exports = function(value, name, options) {
                if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
                if (options && options.getter) name = "get " + name;
                if (options && options.setter) name = "set " + name;
                if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) if (DESCRIPTORS) defineProperty(value, "name", {
                    value: name,
                    configurable: true
                }); else value.name = name;
                if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
                    value: options.arity
                });
                try {
                    if (options && hasOwn(options, "constructor") && options.constructor) {
                        if (DESCRIPTORS) defineProperty(value, "prototype", {
                            writable: false
                        });
                    } else if (value.prototype) value.prototype = void 0;
                } catch (error) {}
                var state = enforceInternalState(value);
                if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
                return value;
            };
            Function.prototype.toString = makeBuiltIn((function toString() {
                return isCallable(this) && getInternalState(this).source || inspectSource(this);
            }), "toString");
        },
        5221: module => {
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = Math.trunc || function trunc(x) {
                var n = +x;
                return (n > 0 ? floor : ceil)(n);
            };
        },
        6776: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var DESCRIPTORS = __webpack_require__(3035);
            var uncurryThis = __webpack_require__(8043);
            var call = __webpack_require__(4923);
            var fails = __webpack_require__(6686);
            var objectKeys = __webpack_require__(9658);
            var getOwnPropertySymbolsModule = __webpack_require__(4022);
            var propertyIsEnumerableModule = __webpack_require__(6349);
            var toObject = __webpack_require__(1851);
            var IndexedObject = __webpack_require__(5832);
            var $assign = Object.assign;
            var defineProperty = Object.defineProperty;
            var concat = uncurryThis([].concat);
            module.exports = !$assign || fails((function() {
                if (DESCRIPTORS && $assign({
                    b: 1
                }, $assign(defineProperty({}, "a", {
                    enumerable: true,
                    get: function() {
                        defineProperty(this, "b", {
                            value: 3,
                            enumerable: false
                        });
                    }
                }), {
                    b: 2
                })).b !== 1) return true;
                var A = {};
                var B = {};
                var symbol = Symbol();
                var alphabet = "abcdefghijklmnopqrst";
                A[symbol] = 7;
                alphabet.split("").forEach((function(chr) {
                    B[chr] = chr;
                }));
                return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
            })) ? function assign(target, source) {
                var T = toObject(target);
                var argumentsLength = arguments.length;
                var index = 1;
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                var propertyIsEnumerable = propertyIsEnumerableModule.f;
                while (argumentsLength > index) {
                    var S = IndexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while (length > j) {
                        key = keys[j++];
                        if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
                    }
                }
                return T;
            } : $assign;
        },
        4508: (module, __unused_webpack_exports, __webpack_require__) => {
            var anObject = __webpack_require__(6154);
            var definePropertiesModule = __webpack_require__(7649);
            var enumBugKeys = __webpack_require__(370);
            var hiddenKeys = __webpack_require__(8898);
            var html = __webpack_require__(2635);
            var documentCreateElement = __webpack_require__(2135);
            var sharedKey = __webpack_require__(1577);
            var GT = ">";
            var LT = "<";
            var PROTOTYPE = "prototype";
            var SCRIPT = "script";
            var IE_PROTO = sharedKey("IE_PROTO");
            var EmptyConstructor = function() {};
            var scriptTag = function(content) {
                return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
            };
            var NullProtoObjectViaActiveX = function(activeXDocument) {
                activeXDocument.write(scriptTag(""));
                activeXDocument.close();
                var temp = activeXDocument.parentWindow.Object;
                activeXDocument = null;
                return temp;
            };
            var NullProtoObjectViaIFrame = function() {
                var iframe = documentCreateElement("iframe");
                var JS = "java" + SCRIPT + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html.appendChild(iframe);
                iframe.src = String(JS);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(scriptTag("document.F=Object"));
                iframeDocument.close();
                return iframeDocument.F;
            };
            var activeXDocument;
            var NullProtoObject = function() {
                try {
                    activeXDocument = new ActiveXObject("htmlfile");
                } catch (error) {}
                NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
                var length = enumBugKeys.length;
                while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
                return NullProtoObject();
            };
            hiddenKeys[IE_PROTO] = true;
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    EmptyConstructor[PROTOTYPE] = anObject(O);
                    result = new EmptyConstructor;
                    EmptyConstructor[PROTOTYPE] = null;
                    result[IE_PROTO] = O;
                } else result = NullProtoObject();
                return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
            };
        },
        7649: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(4579);
            var definePropertyModule = __webpack_require__(2498);
            var anObject = __webpack_require__(6154);
            var toIndexedObject = __webpack_require__(8839);
            var objectKeys = __webpack_require__(9658);
            exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var props = toIndexedObject(Properties);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var index = 0;
                var key;
                while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
                return O;
            };
        },
        2498: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var IE8_DOM_DEFINE = __webpack_require__(9335);
            var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(4579);
            var anObject = __webpack_require__(6154);
            var toPropertyKey = __webpack_require__(3163);
            var $TypeError = TypeError;
            var $defineProperty = Object.defineProperty;
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var ENUMERABLE = "enumerable";
            var CONFIGURABLE = "configurable";
            var WRITABLE = "writable";
            exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                    var current = $getOwnPropertyDescriptor(O, P);
                    if (current && current[WRITABLE]) {
                        O[P] = Attributes.value;
                        Attributes = {
                            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                            writable: false
                        };
                    }
                }
                return $defineProperty(O, P, Attributes);
            } : $defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return $defineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
        },
        4186: (__unused_webpack_module, exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var call = __webpack_require__(4923);
            var propertyIsEnumerableModule = __webpack_require__(6349);
            var createPropertyDescriptor = __webpack_require__(8232);
            var toIndexedObject = __webpack_require__(8839);
            var toPropertyKey = __webpack_require__(3163);
            var hasOwn = __webpack_require__(7235);
            var IE8_DOM_DEFINE = __webpack_require__(9335);
            var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPropertyKey(P);
                if (IE8_DOM_DEFINE) try {
                    return $getOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
            };
        },
        4043: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(539);
            var toIndexedObject = __webpack_require__(8839);
            var $getOwnPropertyNames = __webpack_require__(1047).f;
            var arraySlice = __webpack_require__(8339);
            var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            var getWindowNames = function(it) {
                try {
                    return $getOwnPropertyNames(it);
                } catch (error) {
                    return arraySlice(windowNames);
                }
            };
            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && classof(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
            };
        },
        1047: (__unused_webpack_module, exports, __webpack_require__) => {
            var internalObjectKeys = __webpack_require__(3671);
            var enumBugKeys = __webpack_require__(370);
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        },
        4022: (__unused_webpack_module, exports) => {
            exports.f = Object.getOwnPropertySymbols;
        },
        6035: (module, __unused_webpack_exports, __webpack_require__) => {
            var hasOwn = __webpack_require__(7235);
            var isCallable = __webpack_require__(8885);
            var toObject = __webpack_require__(1851);
            var sharedKey = __webpack_require__(1577);
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(71);
            var IE_PROTO = sharedKey("IE_PROTO");
            var $Object = Object;
            var ObjectPrototype = $Object.prototype;
            module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
                var object = toObject(O);
                if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
                var constructor = object.constructor;
                if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
                return object instanceof $Object ? ObjectPrototype : null;
            };
        },
        7187: (module, __unused_webpack_exports, __webpack_require__) => {
            var fails = __webpack_require__(6686);
            var isObject = __webpack_require__(3021);
            var classof = __webpack_require__(539);
            var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(809);
            var $isExtensible = Object.isExtensible;
            var FAILS_ON_PRIMITIVES = fails((function() {
                $isExtensible(1);
            }));
            module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
                if (!isObject(it)) return false;
                if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == "ArrayBuffer") return false;
                return $isExtensible ? $isExtensible(it) : true;
            } : $isExtensible;
        },
        6678: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            module.exports = uncurryThis({}.isPrototypeOf);
        },
        3671: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var hasOwn = __webpack_require__(7235);
            var toIndexedObject = __webpack_require__(8839);
            var indexOf = __webpack_require__(4097).indexOf;
            var hiddenKeys = __webpack_require__(8898);
            var push = uncurryThis([].push);
            module.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
                while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
                return result;
            };
        },
        9658: (module, __unused_webpack_exports, __webpack_require__) => {
            var internalObjectKeys = __webpack_require__(3671);
            var enumBugKeys = __webpack_require__(370);
            module.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        },
        6349: (__unused_webpack_module, exports) => {
            "use strict";
            var $propertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : $propertyIsEnumerable;
        },
        7618: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThisAccessor = __webpack_require__(8301);
            var anObject = __webpack_require__(6154);
            var aPossiblePrototype = __webpack_require__(7527);
            module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
                    setter(test, []);
                    CORRECT_SETTER = test instanceof Array;
                } catch (error) {}
                return function setPrototypeOf(O, proto) {
                    anObject(O);
                    aPossiblePrototype(proto);
                    if (CORRECT_SETTER) setter(O, proto); else O.__proto__ = proto;
                    return O;
                };
            }() : void 0);
        },
        251: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var TO_STRING_TAG_SUPPORT = __webpack_require__(1554);
            var classof = __webpack_require__(456);
            module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
                return "[object " + classof(this) + "]";
            };
        },
        6618: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4923);
            var isCallable = __webpack_require__(8885);
            var isObject = __webpack_require__(3021);
            var $TypeError = TypeError;
            module.exports = function(input, pref) {
                var fn, val;
                if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
                if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
                throw $TypeError("Can't convert object to primitive value");
            };
        },
        8824: (module, __unused_webpack_exports, __webpack_require__) => {
            var getBuiltIn = __webpack_require__(3256);
            var uncurryThis = __webpack_require__(8043);
            var getOwnPropertyNamesModule = __webpack_require__(1047);
            var getOwnPropertySymbolsModule = __webpack_require__(4022);
            var anObject = __webpack_require__(6154);
            var concat = uncurryThis([].concat);
            module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
            };
        },
        4522: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            module.exports = global;
        },
        1095: (module, __unused_webpack_exports, __webpack_require__) => {
            var isNullOrUndefined = __webpack_require__(1198);
            var $TypeError = TypeError;
            module.exports = function(it) {
                if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
                return it;
            };
        },
        473: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var getBuiltIn = __webpack_require__(3256);
            var defineBuiltInAccessor = __webpack_require__(2630);
            var wellKnownSymbol = __webpack_require__(551);
            var DESCRIPTORS = __webpack_require__(3035);
            var SPECIES = wellKnownSymbol("species");
            module.exports = function(CONSTRUCTOR_NAME) {
                var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
                if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) defineBuiltInAccessor(Constructor, SPECIES, {
                    configurable: true,
                    get: function() {
                        return this;
                    }
                });
            };
        },
        4299: (module, __unused_webpack_exports, __webpack_require__) => {
            var defineProperty = __webpack_require__(2498).f;
            var hasOwn = __webpack_require__(7235);
            var wellKnownSymbol = __webpack_require__(551);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            module.exports = function(target, TAG, STATIC) {
                if (target && !STATIC) target = target.prototype;
                if (target && !hasOwn(target, TO_STRING_TAG)) defineProperty(target, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        },
        1577: (module, __unused_webpack_exports, __webpack_require__) => {
            var shared = __webpack_require__(5616);
            var uid = __webpack_require__(4519);
            var keys = shared("keys");
            module.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        },
        5481: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var defineGlobalProperty = __webpack_require__(7229);
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || defineGlobalProperty(SHARED, {});
            module.exports = store;
        },
        5616: (module, __unused_webpack_exports, __webpack_require__) => {
            var IS_PURE = __webpack_require__(4156);
            var store = __webpack_require__(5481);
            (module.exports = function(key, value) {
                return store[key] || (store[key] = value !== void 0 ? value : {});
            })("versions", []).push({
                version: "3.31.0",
                mode: IS_PURE ? "pure" : "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            });
        },
        8492: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var toIntegerOrInfinity = __webpack_require__(3193);
            var toString = __webpack_require__(5117);
            var requireObjectCoercible = __webpack_require__(1095);
            var charAt = uncurryThis("".charAt);
            var charCodeAt = uncurryThis("".charCodeAt);
            var stringSlice = uncurryThis("".slice);
            var createMethod = function(CONVERT_TO_STRING) {
                return function($this, pos) {
                    var S = toString(requireObjectCoercible($this));
                    var position = toIntegerOrInfinity(pos);
                    var size = S.length;
                    var first, second;
                    if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
                    first = charCodeAt(S, position);
                    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
                };
            };
            module.exports = {
                codeAt: createMethod(false),
                charAt: createMethod(true)
            };
        },
        7345: (module, __unused_webpack_exports, __webpack_require__) => {
            var V8_VERSION = __webpack_require__(6984);
            var fails = __webpack_require__(6686);
            var global = __webpack_require__(8159);
            var $String = global.String;
            module.exports = !!Object.getOwnPropertySymbols && !fails((function() {
                var symbol = Symbol();
                return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
            }));
        },
        3566: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIntegerOrInfinity = __webpack_require__(3193);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                var integer = toIntegerOrInfinity(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        },
        8839: (module, __unused_webpack_exports, __webpack_require__) => {
            var IndexedObject = __webpack_require__(5832);
            var requireObjectCoercible = __webpack_require__(1095);
            module.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        },
        3193: (module, __unused_webpack_exports, __webpack_require__) => {
            var trunc = __webpack_require__(5221);
            module.exports = function(argument) {
                var number = +argument;
                return number !== number || number === 0 ? 0 : trunc(number);
            };
        },
        2909: (module, __unused_webpack_exports, __webpack_require__) => {
            var toIntegerOrInfinity = __webpack_require__(3193);
            var min = Math.min;
            module.exports = function(argument) {
                return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
            };
        },
        1851: (module, __unused_webpack_exports, __webpack_require__) => {
            var requireObjectCoercible = __webpack_require__(1095);
            var $Object = Object;
            module.exports = function(argument) {
                return $Object(requireObjectCoercible(argument));
            };
        },
        665: (module, __unused_webpack_exports, __webpack_require__) => {
            var call = __webpack_require__(4923);
            var isObject = __webpack_require__(3021);
            var isSymbol = __webpack_require__(3674);
            var getMethod = __webpack_require__(7355);
            var ordinaryToPrimitive = __webpack_require__(6618);
            var wellKnownSymbol = __webpack_require__(551);
            var $TypeError = TypeError;
            var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
            module.exports = function(input, pref) {
                if (!isObject(input) || isSymbol(input)) return input;
                var exoticToPrim = getMethod(input, TO_PRIMITIVE);
                var result;
                if (exoticToPrim) {
                    if (pref === void 0) pref = "default";
                    result = call(exoticToPrim, input, pref);
                    if (!isObject(result) || isSymbol(result)) return result;
                    throw $TypeError("Can't convert object to primitive value");
                }
                if (pref === void 0) pref = "number";
                return ordinaryToPrimitive(input, pref);
            };
        },
        3163: (module, __unused_webpack_exports, __webpack_require__) => {
            var toPrimitive = __webpack_require__(665);
            var isSymbol = __webpack_require__(3674);
            module.exports = function(argument) {
                var key = toPrimitive(argument, "string");
                return isSymbol(key) ? key : key + "";
            };
        },
        1554: (module, __unused_webpack_exports, __webpack_require__) => {
            var wellKnownSymbol = __webpack_require__(551);
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            var test = {};
            test[TO_STRING_TAG] = "z";
            module.exports = String(test) === "[object z]";
        },
        5117: (module, __unused_webpack_exports, __webpack_require__) => {
            var classof = __webpack_require__(456);
            var $String = String;
            module.exports = function(argument) {
                if (classof(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
                return $String(argument);
            };
        },
        8336: module => {
            var $String = String;
            module.exports = function(argument) {
                try {
                    return $String(argument);
                } catch (error) {
                    return "Object";
                }
            };
        },
        4519: (module, __unused_webpack_exports, __webpack_require__) => {
            var uncurryThis = __webpack_require__(8043);
            var id = 0;
            var postfix = Math.random();
            var toString = uncurryThis(1..toString);
            module.exports = function(key) {
                return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
            };
        },
        9735: (module, __unused_webpack_exports, __webpack_require__) => {
            var NATIVE_SYMBOL = __webpack_require__(7345);
            module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
        },
        4579: (module, __unused_webpack_exports, __webpack_require__) => {
            var DESCRIPTORS = __webpack_require__(3035);
            var fails = __webpack_require__(6686);
            module.exports = DESCRIPTORS && fails((function() {
                return Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: false
                }).prototype != 42;
            }));
        },
        6950: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var isCallable = __webpack_require__(8885);
            var WeakMap = global.WeakMap;
            module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
        },
        551: (module, __unused_webpack_exports, __webpack_require__) => {
            var global = __webpack_require__(8159);
            var shared = __webpack_require__(5616);
            var hasOwn = __webpack_require__(7235);
            var uid = __webpack_require__(4519);
            var NATIVE_SYMBOL = __webpack_require__(7345);
            var USE_SYMBOL_AS_UID = __webpack_require__(9735);
            var Symbol = global.Symbol;
            var WellKnownSymbolsStore = shared("wks");
            var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
            module.exports = function(name) {
                if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
                return WellKnownSymbolsStore[name];
            };
        },
        9547: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(1669);
            var from = __webpack_require__(8970);
            var checkCorrectnessOfIteration = __webpack_require__(6416);
            var INCORRECT_ITERATION = !checkCorrectnessOfIteration((function(iterable) {
                Array.from(iterable);
            }));
            $({
                target: "Array",
                stat: true,
                forced: INCORRECT_ITERATION
            }, {
                from
            });
        },
        4959: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toIndexedObject = __webpack_require__(8839);
            var addToUnscopables = __webpack_require__(963);
            var Iterators = __webpack_require__(7324);
            var InternalStateModule = __webpack_require__(3244);
            var defineProperty = __webpack_require__(2498).f;
            var defineIterator = __webpack_require__(5772);
            var createIterResultObject = __webpack_require__(7891);
            var IS_PURE = __webpack_require__(4156);
            var DESCRIPTORS = __webpack_require__(3035);
            var ARRAY_ITERATOR = "Array Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
            module.exports = defineIterator(Array, "Array", (function(iterated, kind) {
                setInternalState(this, {
                    type: ARRAY_ITERATOR,
                    target: toIndexedObject(iterated),
                    index: 0,
                    kind
                });
            }), (function() {
                var state = getInternalState(this);
                var target = state.target;
                var kind = state.kind;
                var index = state.index++;
                if (!target || index >= target.length) {
                    state.target = void 0;
                    return createIterResultObject(void 0, true);
                }
                if (kind == "keys") return createIterResultObject(index, false);
                if (kind == "values") return createIterResultObject(target[index], false);
                return createIterResultObject([ index, target[index] ], false);
            }), "values");
            var values = Iterators.Arguments = Iterators.Array;
            addToUnscopables("keys");
            addToUnscopables("values");
            addToUnscopables("entries");
            if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
                defineProperty(values, "name", {
                    value: "values"
                });
            } catch (error) {}
        },
        9612: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var collection = __webpack_require__(7855);
            var collectionStrong = __webpack_require__(1589);
            collection("Map", (function(init) {
                return function Map() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            }), collectionStrong);
        },
        3982: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(9612);
        },
        662: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var $ = __webpack_require__(1669);
            var assign = __webpack_require__(6776);
            $({
                target: "Object",
                stat: true,
                arity: 2,
                forced: Object.assign !== assign
            }, {
                assign
            });
        },
        4509: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            var TO_STRING_TAG_SUPPORT = __webpack_require__(1554);
            var defineBuiltIn = __webpack_require__(7169);
            var toString = __webpack_require__(251);
            if (!TO_STRING_TAG_SUPPORT) defineBuiltIn(Object.prototype, "toString", toString, {
                unsafe: true
            });
        },
        5722: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var collection = __webpack_require__(7855);
            var collectionStrong = __webpack_require__(1589);
            collection("Set", (function(init) {
                return function Set() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            }), collectionStrong);
        },
        6616: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(5722);
        },
        5892: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var charAt = __webpack_require__(8492).charAt;
            var toString = __webpack_require__(5117);
            var InternalStateModule = __webpack_require__(3244);
            var defineIterator = __webpack_require__(5772);
            var createIterResultObject = __webpack_require__(7891);
            var STRING_ITERATOR = "String Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            defineIterator(String, "String", (function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: toString(iterated),
                    index: 0
                });
            }), (function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return createIterResultObject(void 0, true);
                point = charAt(string, index);
                state.index += point.length;
                return createIterResultObject(point, false);
            }));
        },
        6444: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var FREEZING = __webpack_require__(6741);
            var global = __webpack_require__(8159);
            var uncurryThis = __webpack_require__(8043);
            var defineBuiltIns = __webpack_require__(1799);
            var InternalMetadataModule = __webpack_require__(9377);
            var collection = __webpack_require__(7855);
            var collectionWeak = __webpack_require__(1052);
            var isObject = __webpack_require__(3021);
            var enforceInternalState = __webpack_require__(3244).enforce;
            var fails = __webpack_require__(6686);
            var NATIVE_WEAK_MAP = __webpack_require__(6950);
            var $Object = Object;
            var isArray = Array.isArray;
            var isExtensible = $Object.isExtensible;
            var isFrozen = $Object.isFrozen;
            var isSealed = $Object.isSealed;
            var freeze = $Object.freeze;
            var seal = $Object.seal;
            var FROZEN = {};
            var SEALED = {};
            var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
            var InternalWeakMap;
            var wrapper = function(init) {
                return function WeakMap() {
                    return init(this, arguments.length ? arguments[0] : void 0);
                };
            };
            var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
            var WeakMapPrototype = $WeakMap.prototype;
            var nativeSet = uncurryThis(WeakMapPrototype.set);
            var hasMSEdgeFreezingBug = function() {
                return FREEZING && fails((function() {
                    var frozenArray = freeze([]);
                    nativeSet(new $WeakMap, frozenArray, 1);
                    return !isFrozen(frozenArray);
                }));
            };
            if (NATIVE_WEAK_MAP) if (IS_IE11) {
                InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
                InternalMetadataModule.enable();
                var nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
                var nativeHas = uncurryThis(WeakMapPrototype.has);
                var nativeGet = uncurryThis(WeakMapPrototype.get);
                defineBuiltIns(WeakMapPrototype, {
                    delete: function(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeDelete(this, key) || state.frozen["delete"](key);
                        }
                        return nativeDelete(this, key);
                    },
                    has: function has(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeHas(this, key) || state.frozen.has(key);
                        }
                        return nativeHas(this, key);
                    },
                    get: function get(key) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
                        }
                        return nativeGet(this, key);
                    },
                    set: function set(key, value) {
                        if (isObject(key) && !isExtensible(key)) {
                            var state = enforceInternalState(this);
                            if (!state.frozen) state.frozen = new InternalWeakMap;
                            nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
                        } else nativeSet(this, key, value);
                        return this;
                    }
                });
            } else if (hasMSEdgeFreezingBug()) defineBuiltIns(WeakMapPrototype, {
                set: function set(key, value) {
                    var arrayIntegrityLevel;
                    if (isArray(key)) if (isFrozen(key)) arrayIntegrityLevel = FROZEN; else if (isSealed(key)) arrayIntegrityLevel = SEALED;
                    nativeSet(this, key, value);
                    if (arrayIntegrityLevel == FROZEN) freeze(key);
                    if (arrayIntegrityLevel == SEALED) seal(key);
                    return this;
                }
            });
        },
        1986: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
            __webpack_require__(6444);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        "use strict";
        var smooth_scrollbar_events_namespaceObject = {};
        __webpack_require__.r(smooth_scrollbar_events_namespaceObject);
        __webpack_require__.d(smooth_scrollbar_events_namespaceObject, {
            keyboardHandler: () => keyboardHandler,
            mouseHandler: () => mouseHandler,
            resizeHandler: () => resizeHandler,
            selectHandler: () => selectHandler,
            touchHandler: () => touchHandler,
            wheelHandler: () => wheelHandler
        });
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector = "") {
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes = []) {
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix({slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = {}) {
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.shadowEl) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el : wrapperEl,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.shadowRoot.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    const newSlideIndex = swiper.getSlideIndexByData(index);
                    const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                    if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) swiper.loopFix({
                        direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                        activeSlideIndex: newSlideIndex,
                        slideTo: false
                    });
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.shadowRoot.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(params.clickableClass);
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) subEl.removeEventListener("click", onBulletClick);
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                let {el} = swiper.pagination;
                if (!Array.isArray(el)) el = [ el ].filter((element => !!element));
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Autoplay({swiper, extendParams, on, emit, params}) {
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime;
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    autoplayStartTime = (new Date).getTime();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function initSliders() {
            if (document.querySelector(".main-slider")) new core(".main-slider", {
                modules: [ Pagination, Autoplay ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                speed: 800,
                autoplay: {
                    delay: 4e3
                },
                pagination: {
                    el: ".main-slider__pagination",
                    clickable: true
                }
            });
            if (document.querySelector(".brand-list__swiper")) new core(".brand-list__swiper", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                autoHeight: true,
                speed: 800,
                navigation: {
                    prevEl: ".brand-list-prev",
                    nextEl: ".brand-list-next"
                }
            });
            if (document.querySelector(".main-menu__slider")) new core(".main-menu__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 15,
                speed: 800,
                navigation: {
                    prevEl: ".main-menu-prev",
                    nextEl: ".main-menu-next"
                }
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
            return extendStatics(d, b);
        };
        function __extends(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
        }
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __decorate(decorators, target, key, desc) {
            var d, c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        __webpack_require__(580);
        __webpack_require__(5356);
        __webpack_require__(8921);
        __webpack_require__(1607);
        __webpack_require__(8581);
        var eventListenerOptions;
        var eventMap = new WeakMap;
        function getOptions() {
            if (eventListenerOptions !== void 0) return eventListenerOptions;
            var supportPassiveEvent = false;
            try {
                var noop = function() {};
                var options = Object.defineProperty({}, "passive", {
                    enumerable: true,
                    get: function() {
                        supportPassiveEvent = true;
                        return true;
                    }
                });
                window.addEventListener("testPassive", noop, options);
                window.removeEventListener("testPassive", noop, options);
            } catch (e) {}
            eventListenerOptions = supportPassiveEvent ? {
                passive: false
            } : false;
            return eventListenerOptions;
        }
        function eventScope(scrollbar) {
            var configs = eventMap.get(scrollbar) || [];
            eventMap.set(scrollbar, configs);
            return function addEvent(elem, events, fn) {
                function handler(event) {
                    if (event.defaultPrevented) return;
                    fn(event);
                }
                events.split(/\s+/g).forEach((function(eventName) {
                    configs.push({
                        elem,
                        eventName,
                        handler
                    });
                    elem.addEventListener(eventName, handler, getOptions());
                }));
            };
        }
        function clearEventsOn(scrollbar) {
            var configs = eventMap.get(scrollbar);
            if (!configs) return;
            configs.forEach((function(_a) {
                var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
                elem.removeEventListener(eventName, handler, getOptions());
            }));
            eventMap.delete(scrollbar);
        }
        function getPointerData(evt) {
            return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
        }
        function getPosition(evt) {
            var data = getPointerData(evt);
            return {
                x: data.clientX,
                y: data.clientY
            };
        }
        function isOneOf(a, b) {
            if (b === void 0) b = [];
            return b.some((function(v) {
                return a === v;
            }));
        }
        var VENDOR_PREFIX = [ "webkit", "moz", "ms", "o" ];
        var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join("|") + ")-)");
        function autoPrefix(styles) {
            var res = {};
            Object.keys(styles).forEach((function(prop) {
                if (!RE.test(prop)) {
                    res[prop] = styles[prop];
                    return;
                }
                var val = styles[prop];
                prop = prop.replace(/^-/, "");
                res[prop] = val;
                VENDOR_PREFIX.forEach((function(prefix) {
                    res["-" + prefix + "-" + prop] = val;
                }));
            }));
            return res;
        }
        function setStyle(elem, styles) {
            styles = autoPrefix(styles);
            Object.keys(styles).forEach((function(prop) {
                var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, (function(_, $1) {
                    return $1.toUpperCase();
                }));
                elem.style[cssProp] = styles[prop];
            }));
        }
        var Tracker = function() {
            function Tracker(touch) {
                this.velocityMultiplier = window.devicePixelRatio;
                this.updateTime = Date.now();
                this.delta = {
                    x: 0,
                    y: 0
                };
                this.velocity = {
                    x: 0,
                    y: 0
                };
                this.lastPosition = {
                    x: 0,
                    y: 0
                };
                this.lastPosition = getPosition(touch);
            }
            Tracker.prototype.update = function(touch) {
                var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
                var now = Date.now();
                var position = getPosition(touch);
                var delta = {
                    x: -(position.x - lastPosition.x),
                    y: -(position.y - lastPosition.y)
                };
                var duration = now - updateTime || 16.7;
                var vx = delta.x / duration * 16.7;
                var vy = delta.y / duration * 16.7;
                velocity.x = vx * this.velocityMultiplier;
                velocity.y = vy * this.velocityMultiplier;
                this.delta = delta;
                this.updateTime = now;
                this.lastPosition = position;
            };
            return Tracker;
        }();
        var TouchRecord = function() {
            function TouchRecord() {
                this._touchList = {};
            }
            Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
                get: function() {
                    return {
                        x: 0,
                        y: 0
                    };
                },
                enumerable: true,
                configurable: true
            });
            TouchRecord.prototype.isActive = function() {
                return this._activeTouchID !== void 0;
            };
            TouchRecord.prototype.getDelta = function() {
                var tracker = this._getActiveTracker();
                if (!tracker) return this._primitiveValue;
                return __assign({}, tracker.delta);
            };
            TouchRecord.prototype.getVelocity = function() {
                var tracker = this._getActiveTracker();
                if (!tracker) return this._primitiveValue;
                return __assign({}, tracker.velocity);
            };
            TouchRecord.prototype.getEasingDistance = function(damping) {
                var deAcceleration = 1 - damping;
                var distance = {
                    x: 0,
                    y: 0
                };
                var vel = this.getVelocity();
                Object.keys(vel).forEach((function(dir) {
                    var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
                    while (v !== 0) {
                        distance[dir] += v;
                        v = v * deAcceleration | 0;
                    }
                }));
                return distance;
            };
            TouchRecord.prototype.track = function(evt) {
                var _this = this;
                var targetTouches = evt.targetTouches;
                Array.from(targetTouches).forEach((function(touch) {
                    _this._add(touch);
                }));
                return this._touchList;
            };
            TouchRecord.prototype.update = function(evt) {
                var _this = this;
                var touches = evt.touches, changedTouches = evt.changedTouches;
                Array.from(touches).forEach((function(touch) {
                    _this._renew(touch);
                }));
                this._setActiveID(changedTouches);
                return this._touchList;
            };
            TouchRecord.prototype.release = function(evt) {
                var _this = this;
                delete this._activeTouchID;
                Array.from(evt.changedTouches).forEach((function(touch) {
                    _this._delete(touch);
                }));
            };
            TouchRecord.prototype._add = function(touch) {
                if (this._has(touch)) this._delete(touch);
                var tracker = new Tracker(touch);
                this._touchList[touch.identifier] = tracker;
            };
            TouchRecord.prototype._renew = function(touch) {
                if (!this._has(touch)) return;
                var tracker = this._touchList[touch.identifier];
                tracker.update(touch);
            };
            TouchRecord.prototype._delete = function(touch) {
                delete this._touchList[touch.identifier];
            };
            TouchRecord.prototype._has = function(touch) {
                return this._touchList.hasOwnProperty(touch.identifier);
            };
            TouchRecord.prototype._setActiveID = function(touches) {
                this._activeTouchID = touches[touches.length - 1].identifier;
            };
            TouchRecord.prototype._getActiveTracker = function() {
                var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
                return _touchList[_activeTouchID];
            };
            return TouchRecord;
        }();
        function clamp(value, lower, upper) {
            return Math.max(lower, Math.min(upper, value));
        }
        function debounce(fn, wait, leading) {
            if (wait === void 0) wait = 0;
            var timer;
            var lastCalledAt = -1 / 0;
            return function debouncedFn() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (leading) {
                    var now = Date.now();
                    var elapsed = now - lastCalledAt;
                    lastCalledAt = now;
                    if (elapsed >= wait) fn.apply(this, args);
                }
                clearTimeout(timer);
                timer = setTimeout((function() {
                    fn.apply(_this, args);
                }), wait);
            };
        }
        function range(min, max) {
            if (min === void 0) min = -1 / 0;
            if (max === void 0) max = 1 / 0;
            return function(proto, key) {
                var alias = "_" + key;
                Object.defineProperty(proto, key, {
                    get: function() {
                        return this[alias];
                    },
                    set: function(val) {
                        Object.defineProperty(this, alias, {
                            value: clamp(val, min, max),
                            enumerable: false,
                            writable: true,
                            configurable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            };
        }
        function boolean_boolean(proto, key) {
            var alias = "_" + key;
            Object.defineProperty(proto, key, {
                get: function() {
                    return this[alias];
                },
                set: function(val) {
                    Object.defineProperty(this, alias, {
                        value: !!val,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
        function debounce_debounce() {
            var options = [];
            for (var _i = 0; _i < arguments.length; _i++) options[_i] = arguments[_i];
            return function(_proto, key, descriptor) {
                var fn = descriptor.value;
                return {
                    get: function() {
                        if (!this.hasOwnProperty(key)) Object.defineProperty(this, key, {
                            value: debounce.apply(void 0, __spreadArrays([ fn ], options))
                        });
                        return this[key];
                    }
                };
            };
        }
        var Options = function() {
            function Options(config) {
                var _this = this;
                if (config === void 0) config = {};
                this.damping = .1;
                this.thumbMinSize = 20;
                this.renderByPixels = true;
                this.alwaysShowTracks = false;
                this.continuousScrolling = true;
                this.delegateTo = null;
                this.plugins = {};
                Object.keys(config).forEach((function(prop) {
                    _this[prop] = config[prop];
                }));
            }
            Object.defineProperty(Options.prototype, "wheelEventTarget", {
                get: function() {
                    return this.delegateTo;
                },
                set: function(el) {
                    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
                    this.delegateTo = el;
                },
                enumerable: true,
                configurable: true
            });
            __decorate([ range(0, 1) ], Options.prototype, "damping", void 0);
            __decorate([ range(0, 1 / 0) ], Options.prototype, "thumbMinSize", void 0);
            __decorate([ boolean_boolean ], Options.prototype, "renderByPixels", void 0);
            __decorate([ boolean_boolean ], Options.prototype, "alwaysShowTracks", void 0);
            __decorate([ boolean_boolean ], Options.prototype, "continuousScrolling", void 0);
            return Options;
        }();
        var TrackDirection;
        (function(TrackDirection) {
            TrackDirection["X"] = "x";
            TrackDirection["Y"] = "y";
        })(TrackDirection || (TrackDirection = {}));
        var ScrollbarThumb = function() {
            function ScrollbarThumb(_direction, _minSize) {
                if (_minSize === void 0) _minSize = 0;
                this._direction = _direction;
                this._minSize = _minSize;
                this.element = document.createElement("div");
                this.displaySize = 0;
                this.realSize = 0;
                this.offset = 0;
                this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
            }
            ScrollbarThumb.prototype.attachTo = function(trackEl) {
                trackEl.appendChild(this.element);
            };
            ScrollbarThumb.prototype.update = function(scrollOffset, containerSize, pageSize) {
                this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
                this.displaySize = Math.max(this.realSize, this._minSize);
                this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
                setStyle(this.element, this._getStyle());
            };
            ScrollbarThumb.prototype._getStyle = function() {
                switch (this._direction) {
                  case TrackDirection.X:
                    return {
                        width: this.displaySize + "px",
                        "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                    };

                  case TrackDirection.Y:
                    return {
                        height: this.displaySize + "px",
                        "-transform": "translate3d(0, " + this.offset + "px, 0)"
                    };

                  default:
                    return null;
                }
            };
            return ScrollbarThumb;
        }();
        var ScrollbarTrack = function() {
            function ScrollbarTrack(direction, thumbMinSize) {
                if (thumbMinSize === void 0) thumbMinSize = 0;
                this.element = document.createElement("div");
                this._isShown = false;
                this.element.className = "scrollbar-track scrollbar-track-" + direction;
                this.thumb = new ScrollbarThumb(direction, thumbMinSize);
                this.thumb.attachTo(this.element);
            }
            ScrollbarTrack.prototype.attachTo = function(scrollbarContainer) {
                scrollbarContainer.appendChild(this.element);
            };
            ScrollbarTrack.prototype.show = function() {
                if (this._isShown) return;
                this._isShown = true;
                this.element.classList.add("show");
            };
            ScrollbarTrack.prototype.hide = function() {
                if (!this._isShown) return;
                this._isShown = false;
                this.element.classList.remove("show");
            };
            ScrollbarTrack.prototype.update = function(scrollOffset, containerSize, pageSize) {
                setStyle(this.element, {
                    display: pageSize <= containerSize ? "none" : "block"
                });
                this.thumb.update(scrollOffset, containerSize, pageSize);
            };
            return ScrollbarTrack;
        }();
        var TrackController = function() {
            function TrackController(_scrollbar) {
                this._scrollbar = _scrollbar;
                var thumbMinSize = _scrollbar.options.thumbMinSize;
                this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
                this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
                this.xAxis.attachTo(_scrollbar.containerEl);
                this.yAxis.attachTo(_scrollbar.containerEl);
                if (_scrollbar.options.alwaysShowTracks) {
                    this.xAxis.show();
                    this.yAxis.show();
                }
            }
            TrackController.prototype.update = function() {
                var _a = this._scrollbar, size = _a.size, offset = _a.offset;
                this.xAxis.update(offset.x, size.container.width, size.content.width);
                this.yAxis.update(offset.y, size.container.height, size.content.height);
            };
            TrackController.prototype.autoHideOnIdle = function() {
                if (this._scrollbar.options.alwaysShowTracks) return;
                this.xAxis.hide();
                this.yAxis.hide();
            };
            __decorate([ debounce_debounce(300) ], TrackController.prototype, "autoHideOnIdle", null);
            return TrackController;
        }();
        function getSize(scrollbar) {
            var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
            var containerStyles = getComputedStyle(containerEl);
            var paddings = [ "paddingTop", "paddingBottom", "paddingLeft", "paddingRight" ].map((function(prop) {
                return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
            }));
            var verticalPadding = paddings[0] + paddings[1];
            var horizontalPadding = paddings[2] + paddings[3];
            return {
                container: {
                    width: containerEl.clientWidth,
                    height: containerEl.clientHeight
                },
                content: {
                    width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
                    height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
                }
            };
        }
        function update_update(scrollbar) {
            var newSize = scrollbar.getSize();
            var limit = {
                x: Math.max(newSize.content.width - newSize.container.width, 0),
                y: Math.max(newSize.content.height - newSize.container.height, 0)
            };
            var containerBounding = scrollbar.containerEl.getBoundingClientRect();
            var bounding = {
                top: Math.max(containerBounding.top, 0),
                right: Math.min(containerBounding.right, window.innerWidth),
                bottom: Math.min(containerBounding.bottom, window.innerHeight),
                left: Math.max(containerBounding.left, 0)
            };
            scrollbar.size = newSize;
            scrollbar.limit = limit;
            scrollbar.bounding = bounding;
            scrollbar.track.update();
            scrollbar.setPosition();
        }
        function isVisible(scrollbar, elem) {
            var bounding = scrollbar.bounding;
            var targetBounding = elem.getBoundingClientRect();
            var top = Math.max(bounding.top, targetBounding.top);
            var left = Math.max(bounding.left, targetBounding.left);
            var right = Math.min(bounding.right, targetBounding.right);
            var bottom = Math.min(bounding.bottom, targetBounding.bottom);
            return top < bottom && left < right;
        }
        function setPosition(scrollbar, x, y) {
            var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
            if (options.renderByPixels) {
                x = Math.round(x);
                y = Math.round(y);
            }
            x = clamp(x, 0, limit.x);
            y = clamp(y, 0, limit.y);
            if (x !== offset.x) track.xAxis.show();
            if (y !== offset.y) track.yAxis.show();
            if (!options.alwaysShowTracks) track.autoHideOnIdle();
            if (x === offset.x && y === offset.y) return null;
            offset.x = x;
            offset.y = y;
            setStyle(contentEl, {
                "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
            });
            track.update();
            return {
                offset: __assign({}, offset),
                limit: __assign({}, limit)
            };
        }
        var animationIDStorage = new WeakMap;
        function scrollTo(scrollbar, x, y, duration, _a) {
            if (duration === void 0) duration = 0;
            var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
            var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
            if (options.renderByPixels) {
                x = Math.round(x);
                y = Math.round(y);
            }
            var startX = offset.x;
            var startY = offset.y;
            var disX = clamp(x, 0, limit.x) - startX;
            var disY = clamp(y, 0, limit.y) - startY;
            var start = Date.now();
            function scroll() {
                var elapse = Date.now() - start;
                var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
                scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
                if (elapse >= duration) {
                    if (typeof callback === "function") callback.call(scrollbar);
                } else {
                    var animationID = requestAnimationFrame(scroll);
                    animationIDStorage.set(scrollbar, animationID);
                }
            }
            cancelAnimationFrame(animationIDStorage.get(scrollbar));
            scroll();
        }
        function defaultEasing(t) {
            return Math.pow(t - 1, 3) + 1;
        }
        function scrollIntoView(scrollbar, elem, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
            var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
            if (!elem || !containerEl.contains(elem)) return;
            var targetBounding = elem.getBoundingClientRect();
            if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
            var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
            scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, clamp(delta, -offset.y, limit.y - offset.y));
        }
        var ScrollbarPlugin = function() {
            function ScrollbarPlugin(scrollbar, options) {
                var _newTarget = this.constructor;
                this.scrollbar = scrollbar;
                this.name = _newTarget.pluginName;
                this.options = __assign(__assign({}, _newTarget.defaultOptions), options);
            }
            ScrollbarPlugin.prototype.onInit = function() {};
            ScrollbarPlugin.prototype.onDestroy = function() {};
            ScrollbarPlugin.prototype.onUpdate = function() {};
            ScrollbarPlugin.prototype.onRender = function(_remainMomentum) {};
            ScrollbarPlugin.prototype.transformDelta = function(delta, _evt) {
                return __assign({}, delta);
            };
            ScrollbarPlugin.pluginName = "";
            ScrollbarPlugin.defaultOptions = {};
            return ScrollbarPlugin;
        }();
        var globalPlugins = {
            order: new Set,
            constructors: {}
        };
        function addPlugins() {
            var Plugins = [];
            for (var _i = 0; _i < arguments.length; _i++) Plugins[_i] = arguments[_i];
            Plugins.forEach((function(P) {
                var pluginName = P.pluginName;
                if (!pluginName) throw new TypeError("plugin name is required");
                globalPlugins.order.add(pluginName);
                globalPlugins.constructors[pluginName] = P;
            }));
        }
        function initPlugins(scrollbar, options) {
            return Array.from(globalPlugins.order).filter((function(pluginName) {
                return options[pluginName] !== false;
            })).map((function(pluginName) {
                var Plugin = globalPlugins.constructors[pluginName];
                var instance = new Plugin(scrollbar, options[pluginName]);
                options[pluginName] = instance.options;
                return instance;
            }));
        }
        var KEY_CODE;
        (function(KEY_CODE) {
            KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
            KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
            KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
            KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
            KEY_CODE[KEY_CODE["END"] = 35] = "END";
            KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
            KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
            KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
            KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
            KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
        })(KEY_CODE || (KEY_CODE = {}));
        function keyboardHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var container = scrollbar.containerEl;
            addEvent(container, "keydown", (function(evt) {
                var activeElement = document.activeElement;
                if (activeElement !== container && !container.contains(activeElement)) return;
                if (isEditable(activeElement)) return;
                var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
                if (!delta) return;
                var x = delta[0], y = delta[1];
                scrollbar.addTransformableMomentum(x, y, evt, (function(willScroll) {
                    if (willScroll) evt.preventDefault(); else {
                        scrollbar.containerEl.blur();
                        if (scrollbar.parent) scrollbar.parent.containerEl.focus();
                    }
                }));
            }));
        }
        function getKeyDelta(scrollbar, keyCode) {
            var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
            switch (keyCode) {
              case KEY_CODE.TAB:
                return handleTabKey(scrollbar);

              case KEY_CODE.SPACE:
                return [ 0, 200 ];

              case KEY_CODE.PAGE_UP:
                return [ 0, -size.container.height + 40 ];

              case KEY_CODE.PAGE_DOWN:
                return [ 0, size.container.height - 40 ];

              case KEY_CODE.END:
                return [ 0, limit.y - offset.y ];

              case KEY_CODE.HOME:
                return [ 0, -offset.y ];

              case KEY_CODE.LEFT:
                return [ -40, 0 ];

              case KEY_CODE.UP:
                return [ 0, -40 ];

              case KEY_CODE.RIGHT:
                return [ 40, 0 ];

              case KEY_CODE.DOWN:
                return [ 0, 40 ];

              default:
                return null;
            }
        }
        function handleTabKey(scrollbar) {
            requestAnimationFrame((function() {
                scrollbar.scrollIntoView(document.activeElement, {
                    offsetTop: scrollbar.size.container.height / 2,
                    offsetLeft: scrollbar.size.container.width / 2,
                    onlyScrollIfNeeded: true
                });
            }));
        }
        function isEditable(elem) {
            if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) return !elem.disabled;
            return false;
        }
        var Direction;
        (function(Direction) {
            Direction[Direction["X"] = 0] = "X";
            Direction[Direction["Y"] = 1] = "Y";
        })(Direction || (Direction = {}));
        function mouseHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var container = scrollbar.containerEl;
            var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
            function calcMomentum(direction, clickPosition) {
                var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
                if (direction === Direction.X) {
                    var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
                    return clamp(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
                }
                if (direction === Direction.Y) {
                    var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
                    return clamp(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
                }
                return 0;
            }
            function getTrackDirection(elem) {
                if (isOneOf(elem, [ xAxis.element, xAxis.thumb.element ])) return Direction.X;
                if (isOneOf(elem, [ yAxis.element, yAxis.thumb.element ])) return Direction.Y;
                return;
            }
            var isMouseDown;
            var isMouseMoving;
            var startOffsetToThumb;
            var trackDirection;
            var containerRect;
            addEvent(container, "click", (function(evt) {
                if (isMouseMoving || !isOneOf(evt.target, [ xAxis.element, yAxis.element ])) return;
                var track = evt.target;
                var direction = getTrackDirection(track);
                var rect = track.getBoundingClientRect();
                var clickPos = getPosition(evt);
                if (direction === Direction.X) {
                    var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
                    scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
                }
                if (direction === Direction.Y) {
                    offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
                    scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
                }
            }));
            addEvent(container, "mousedown", (function(evt) {
                if (!isOneOf(evt.target, [ xAxis.thumb.element, yAxis.thumb.element ])) return;
                isMouseDown = true;
                var thumb = evt.target;
                var cursorPos = getPosition(evt);
                var thumbRect = thumb.getBoundingClientRect();
                trackDirection = getTrackDirection(thumb);
                startOffsetToThumb = {
                    x: cursorPos.x - thumbRect.left,
                    y: cursorPos.y - thumbRect.top
                };
                containerRect = container.getBoundingClientRect();
                setStyle(scrollbar.containerEl, {
                    "-user-select": "none"
                });
            }));
            addEvent(window, "mousemove", (function(evt) {
                if (!isMouseDown) return;
                isMouseMoving = true;
                var cursorPos = getPosition(evt);
                if (trackDirection === Direction.X) {
                    var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
                    scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
                }
                if (trackDirection === Direction.Y) {
                    offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
                    scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
                }
            }));
            addEvent(window, "mouseup blur", (function() {
                isMouseDown = isMouseMoving = false;
                setStyle(scrollbar.containerEl, {
                    "-user-select": ""
                });
            }));
        }
        function resizeHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            addEvent(window, "resize", debounce(scrollbar.update.bind(scrollbar), 300));
        }
        function selectHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
            var isSelected = false;
            var isContextMenuOpened = false;
            var animationID;
            function scroll(_a) {
                var x = _a.x, y = _a.y;
                if (!x && !y) return;
                var offset = scrollbar.offset, limit = scrollbar.limit;
                scrollbar.setMomentum(clamp(offset.x + x, 0, limit.x) - offset.x, clamp(offset.y + y, 0, limit.y) - offset.y);
                animationID = requestAnimationFrame((function() {
                    scroll({
                        x,
                        y
                    });
                }));
            }
            addEvent(window, "mousemove", (function(evt) {
                if (!isSelected) return;
                cancelAnimationFrame(animationID);
                var dir = calcMomentum(scrollbar, evt);
                scroll(dir);
            }));
            addEvent(contentEl, "contextmenu", (function() {
                isContextMenuOpened = true;
                cancelAnimationFrame(animationID);
                isSelected = false;
            }));
            addEvent(contentEl, "mousedown", (function() {
                isContextMenuOpened = false;
            }));
            addEvent(contentEl, "selectstart", (function() {
                if (isContextMenuOpened) return;
                cancelAnimationFrame(animationID);
                isSelected = true;
            }));
            addEvent(window, "mouseup blur", (function() {
                cancelAnimationFrame(animationID);
                isSelected = false;
                isContextMenuOpened = false;
            }));
            addEvent(containerEl, "scroll", (function(evt) {
                evt.preventDefault();
                containerEl.scrollTop = containerEl.scrollLeft = 0;
            }));
        }
        function calcMomentum(scrollbar, evt) {
            var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
            var _b = getPosition(evt), x = _b.x, y = _b.y;
            var res = {
                x: 0,
                y: 0
            };
            var padding = 20;
            if (x === 0 && y === 0) return res;
            if (x > right - padding) res.x = x - right + padding; else if (x < left + padding) res.x = x - left - padding;
            if (y > bottom - padding) res.y = y - bottom + padding; else if (y < top + padding) res.y = y - top - padding;
            res.x *= 2;
            res.y *= 2;
            return res;
        }
        var activeScrollbar;
        function touchHandler(scrollbar) {
            var target = scrollbar.options.delegateTo || scrollbar.containerEl;
            var touchRecord = new TouchRecord;
            var addEvent = eventScope(scrollbar);
            var damping;
            var pointerCount = 0;
            addEvent(target, "touchstart", (function(evt) {
                touchRecord.track(evt);
                scrollbar.setMomentum(0, 0);
                if (pointerCount === 0) {
                    damping = scrollbar.options.damping;
                    scrollbar.options.damping = Math.max(damping, .5);
                }
                pointerCount++;
            }));
            addEvent(target, "touchmove", (function(evt) {
                if (activeScrollbar && activeScrollbar !== scrollbar) return;
                touchRecord.update(evt);
                var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
                scrollbar.addTransformableMomentum(x, y, evt, (function(willScroll) {
                    if (willScroll && evt.cancelable) {
                        evt.preventDefault();
                        activeScrollbar = scrollbar;
                    }
                }));
            }));
            addEvent(target, "touchcancel touchend", (function(evt) {
                var delta = touchRecord.getEasingDistance(damping);
                scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
                pointerCount--;
                if (pointerCount === 0) scrollbar.options.damping = damping;
                touchRecord.release(evt);
                activeScrollbar = null;
            }));
        }
        function wheelHandler(scrollbar) {
            var addEvent = eventScope(scrollbar);
            var target = scrollbar.options.delegateTo || scrollbar.containerEl;
            var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
            addEvent(target, eventName, (function(evt) {
                var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
                scrollbar.addTransformableMomentum(x, y, evt, (function(willScroll) {
                    if (willScroll) evt.preventDefault();
                }));
            }));
        }
        var DELTA_SCALE = {
            STANDARD: 1,
            OTHERS: -3
        };
        var DELTA_MODE = [ 1, 28, 500 ];
        var getDeltaMode = function(mode) {
            return DELTA_MODE[mode] || DELTA_MODE[0];
        };
        function normalizeDelta(evt) {
            if ("deltaX" in evt) {
                var mode = getDeltaMode(evt.deltaMode);
                return {
                    x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
                    y: evt.deltaY / DELTA_SCALE.STANDARD * mode
                };
            }
            if ("wheelDeltaX" in evt) return {
                x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
                y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
            };
            return {
                x: 0,
                y: evt.wheelDelta / DELTA_SCALE.OTHERS
            };
        }
        var scrollbarMap = new Map;
        var scrollbar_Scrollbar = function() {
            function Scrollbar(containerEl, options) {
                var _this = this;
                this.offset = {
                    x: 0,
                    y: 0
                };
                this.limit = {
                    x: 1 / 0,
                    y: 1 / 0
                };
                this.bounding = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                this._plugins = [];
                this._momentum = {
                    x: 0,
                    y: 0
                };
                this._listeners = new Set;
                this.containerEl = containerEl;
                var contentEl = this.contentEl = document.createElement("div");
                this.options = new Options(options);
                containerEl.setAttribute("data-scrollbar", "true");
                containerEl.setAttribute("tabindex", "-1");
                setStyle(containerEl, {
                    overflow: "hidden",
                    outline: "none"
                });
                if (window.navigator.msPointerEnabled) containerEl.style.msTouchAction = "none";
                contentEl.className = "scroll-content";
                Array.from(containerEl.childNodes).forEach((function(node) {
                    contentEl.appendChild(node);
                }));
                containerEl.appendChild(contentEl);
                this.track = new TrackController(this);
                this.size = this.getSize();
                this._plugins = initPlugins(this, this.options.plugins);
                var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
                containerEl.scrollLeft = containerEl.scrollTop = 0;
                this.setPosition(scrollLeft, scrollTop, {
                    withoutCallbacks: true
                });
                var ResizeObserver = window.ResizeObserver;
                if (typeof ResizeObserver === "function") {
                    this._observer = new ResizeObserver((function() {
                        _this.update();
                    }));
                    this._observer.observe(contentEl);
                }
                scrollbarMap.set(containerEl, this);
                requestAnimationFrame((function() {
                    _this._init();
                }));
            }
            Object.defineProperty(Scrollbar.prototype, "parent", {
                get: function() {
                    var elem = this.containerEl.parentElement;
                    while (elem) {
                        var parentScrollbar = scrollbarMap.get(elem);
                        if (parentScrollbar) return parentScrollbar;
                        elem = elem.parentElement;
                    }
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scrollbar.prototype, "scrollTop", {
                get: function() {
                    return this.offset.y;
                },
                set: function(y) {
                    this.setPosition(this.scrollLeft, y);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
                get: function() {
                    return this.offset.x;
                },
                set: function(x) {
                    this.setPosition(x, this.scrollTop);
                },
                enumerable: true,
                configurable: true
            });
            Scrollbar.prototype.getSize = function() {
                return getSize(this);
            };
            Scrollbar.prototype.update = function() {
                update_update(this);
                this._plugins.forEach((function(plugin) {
                    plugin.onUpdate();
                }));
            };
            Scrollbar.prototype.isVisible = function(elem) {
                return isVisible(this, elem);
            };
            Scrollbar.prototype.setPosition = function(x, y, options) {
                var _this = this;
                if (x === void 0) x = this.offset.x;
                if (y === void 0) y = this.offset.y;
                if (options === void 0) options = {};
                var status = setPosition(this, x, y);
                if (!status || options.withoutCallbacks) return;
                this._listeners.forEach((function(fn) {
                    fn.call(_this, status);
                }));
            };
            Scrollbar.prototype.scrollTo = function(x, y, duration, options) {
                if (x === void 0) x = this.offset.x;
                if (y === void 0) y = this.offset.y;
                if (duration === void 0) duration = 0;
                if (options === void 0) options = {};
                scrollTo(this, x, y, duration, options);
            };
            Scrollbar.prototype.scrollIntoView = function(elem, options) {
                if (options === void 0) options = {};
                scrollIntoView(this, elem, options);
            };
            Scrollbar.prototype.addListener = function(fn) {
                if (typeof fn !== "function") throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                this._listeners.add(fn);
            };
            Scrollbar.prototype.removeListener = function(fn) {
                this._listeners.delete(fn);
            };
            Scrollbar.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
                this._updateDebounced();
                var finalDelta = this._plugins.reduce((function(delta, plugin) {
                    return plugin.transformDelta(delta, fromEvent) || delta;
                }), {
                    x,
                    y
                });
                var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
                if (willScroll) this.addMomentum(finalDelta.x, finalDelta.y);
                if (callback) callback.call(this, willScroll);
            };
            Scrollbar.prototype.addMomentum = function(x, y) {
                this.setMomentum(this._momentum.x + x, this._momentum.y + y);
            };
            Scrollbar.prototype.setMomentum = function(x, y) {
                if (this.limit.x === 0) x = 0;
                if (this.limit.y === 0) y = 0;
                if (this.options.renderByPixels) {
                    x = Math.round(x);
                    y = Math.round(y);
                }
                this._momentum.x = x;
                this._momentum.y = y;
            };
            Scrollbar.prototype.updatePluginOptions = function(pluginName, options) {
                this._plugins.forEach((function(plugin) {
                    if (plugin.name === pluginName) Object.assign(plugin.options, options);
                }));
            };
            Scrollbar.prototype.destroy = function() {
                var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
                clearEventsOn(this);
                this._listeners.clear();
                this.setMomentum(0, 0);
                cancelAnimationFrame(this._renderID);
                if (this._observer) this._observer.disconnect();
                scrollbarMap.delete(this.containerEl);
                var childNodes = Array.from(contentEl.childNodes);
                while (containerEl.firstChild) containerEl.removeChild(containerEl.firstChild);
                childNodes.forEach((function(el) {
                    containerEl.appendChild(el);
                }));
                setStyle(containerEl, {
                    overflow: ""
                });
                containerEl.scrollTop = this.scrollTop;
                containerEl.scrollLeft = this.scrollLeft;
                this._plugins.forEach((function(plugin) {
                    plugin.onDestroy();
                }));
                this._plugins.length = 0;
            };
            Scrollbar.prototype._init = function() {
                var _this = this;
                this.update();
                Object.keys(smooth_scrollbar_events_namespaceObject).forEach((function(prop) {
                    smooth_scrollbar_events_namespaceObject[prop](_this);
                }));
                this._plugins.forEach((function(plugin) {
                    plugin.onInit();
                }));
                this._render();
            };
            Scrollbar.prototype._updateDebounced = function() {
                this.update();
            };
            Scrollbar.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
                if (deltaX === void 0) deltaX = 0;
                if (deltaY === void 0) deltaY = 0;
                var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
                if (!options.continuousScrolling) return false;
                if (limit.x === 0 && limit.y === 0) this._updateDebounced();
                var destX = clamp(deltaX + offset.x, 0, limit.x);
                var destY = clamp(deltaY + offset.y, 0, limit.y);
                var res = true;
                res = res && destX === offset.x;
                res = res && destY === offset.y;
                res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
                return res;
            };
            Scrollbar.prototype._render = function() {
                var _momentum = this._momentum;
                if (_momentum.x || _momentum.y) {
                    var nextX = this._nextTick("x");
                    var nextY = this._nextTick("y");
                    _momentum.x = nextX.momentum;
                    _momentum.y = nextY.momentum;
                    this.setPosition(nextX.position, nextY.position);
                }
                var remain = __assign({}, this._momentum);
                this._plugins.forEach((function(plugin) {
                    plugin.onRender(remain);
                }));
                this._renderID = requestAnimationFrame(this._render.bind(this));
            };
            Scrollbar.prototype._nextTick = function(direction) {
                var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
                var current = offset[direction];
                var remain = _momentum[direction];
                if (Math.abs(remain) <= .1) return {
                    momentum: 0,
                    position: current + remain
                };
                var nextMomentum = remain * (1 - options.damping);
                if (options.renderByPixels) nextMomentum |= 0;
                return {
                    momentum: nextMomentum,
                    position: current + remain - nextMomentum
                };
            };
            __decorate([ debounce_debounce(100, true) ], Scrollbar.prototype, "_updateDebounced", null);
            return Scrollbar;
        }();
        var TRACK_BG = "rgba(222, 222, 222, .75)";
        var THUMB_BG = "rgba(0, 0, 0, .5)";
        var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
        var STYLE_ID = "smooth-scrollbar-style";
        var isStyleAttached = false;
        function attachStyle() {
            if (isStyleAttached || typeof window === "undefined") return;
            var styleEl = document.createElement("style");
            styleEl.id = STYLE_ID;
            styleEl.textContent = SCROLLBAR_STYLE;
            if (document.head) document.head.appendChild(styleEl);
            isStyleAttached = true;
        }
        function detachStyle() {
            if (!isStyleAttached || typeof window === "undefined") return;
            var styleEl = document.getElementById(STYLE_ID);
            if (!styleEl || !styleEl.parentNode) return;
            styleEl.parentNode.removeChild(styleEl);
            isStyleAttached = false;
        }
        var SmoothScrollbar = function(_super) {
            __extends(SmoothScrollbar, _super);
            function SmoothScrollbar() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SmoothScrollbar.init = function(elem, options) {
                if (!elem || elem.nodeType !== 1) throw new TypeError("expect element to be DOM Element, but got " + elem);
                attachStyle();
                if (scrollbarMap.has(elem)) return scrollbarMap.get(elem);
                return new scrollbar_Scrollbar(elem, options);
            };
            SmoothScrollbar.initAll = function(options) {
                return Array.from(document.querySelectorAll("[data-scrollbar]"), (function(elem) {
                    return SmoothScrollbar.init(elem, options);
                }));
            };
            SmoothScrollbar.has = function(elem) {
                return scrollbarMap.has(elem);
            };
            SmoothScrollbar.get = function(elem) {
                return scrollbarMap.get(elem);
            };
            SmoothScrollbar.getAll = function() {
                return Array.from(scrollbarMap.values());
            };
            SmoothScrollbar.destroy = function(elem) {
                var scrollbar = scrollbarMap.get(elem);
                if (scrollbar) scrollbar.destroy();
            };
            SmoothScrollbar.destroyAll = function() {
                scrollbarMap.forEach((function(scrollbar) {
                    scrollbar.destroy();
                }));
            };
            SmoothScrollbar.use = function() {
                var Plugins = [];
                for (var _i = 0; _i < arguments.length; _i++) Plugins[_i] = arguments[_i];
                return addPlugins.apply(void 0, Plugins);
            };
            SmoothScrollbar.attachStyle = function() {
                return attachStyle();
            };
            SmoothScrollbar.detachStyle = function() {
                return detachStyle();
            };
            SmoothScrollbar.version = "8.8.4";
            SmoothScrollbar.ScrollbarPlugin = ScrollbarPlugin;
            return SmoothScrollbar;
        }(scrollbar_Scrollbar);
        const smooth_scrollbar = SmoothScrollbar;
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var simpleParallax_min = __webpack_require__(4102);
        let script_images = document.querySelectorAll(".parallax");
        new simpleParallax_min(script_images);
        window["FLS"] = true;
        isWebp();
        menuInit();
        const app_isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const options = {
            damping: app_isMobile ? .05 : .1,
            thumbMinSize: 20,
            renderByPixels: !("ontouchstart" in document),
            alwaysShowTracks: false,
            continuousScrolling: true
        };
        smooth_scrollbar.init(document.querySelector("#smooth-scrollbar"), options);
        headerScroll();
    })();
})();