!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function(e, t, n) {
    'use strict';
    n.r(t);
    var r,
      o,
      i,
      l,
      u,
      c,
      _ = {},
      p = [],
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function s(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function f(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function d(e, t, n) {
      var r,
        o = arguments,
        i = {};
      for (r in t) 'key' !== r && 'ref' !== r && (i[r] = t[r]);
      if (arguments.length > 3)
        for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
      if (
        (null != n && (i.children = n),
        'function' == typeof e && null != e.defaultProps)
      )
        for (r in e.defaultProps) void 0 === i[r] && (i[r] = e.defaultProps[r]);
      return h(e, i, t && t.key, t && t.ref);
    }
    function h(e, t, n, o) {
      var i = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
      };
      return r.vnode && r.vnode(i), i;
    }
    function y(e) {
      return e.children;
    }
    function v(e, t) {
      (this.props = e), (this.context = t);
    }
    function m(e, t) {
      if (null == t) return e.__ ? m(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return 'function' == typeof e.type ? m(e) : null;
    }
    function g(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        return g(e);
      }
    }
    function b(e) {
      ((!e.__d && (e.__d = !0) && o.push(e) && !i++) ||
        u !== r.debounceRendering) &&
        ((u = r.debounceRendering) || l)(k);
    }
    function k() {
      for (var e; (i = o.length); )
        (e = o.sort(function(e, t) {
          return e.__v.__b - t.__v.__b;
        })),
          (o = []),
          e.some(function(e) {
            var t, n, r, o, i, l;
            e.__d &&
              ((i = (o = (t = e).__v).__e),
              (l = t.__P) &&
                ((n = []),
                (r = U(
                  l,
                  o,
                  s({}, o),
                  t.__n,
                  void 0 !== l.ownerSVGElement,
                  null,
                  n,
                  null == i ? m(o) : i
                )),
                M(n, o),
                r != i && g(o)));
          });
    }
    function x(e, t, n, r, o, i, l, u, c) {
      var a,
        s,
        d,
        h,
        y,
        v,
        g,
        b = (n && n.__k) || p,
        k = b.length;
      if (
        (u == _ && (u = null != i ? i[0] : k ? m(n, 0) : null),
        (a = 0),
        (t.__k = C(t.__k, function(n) {
          if (null != n) {
            if (
              ((n.__ = t),
              (n.__b = t.__b + 1),
              null === (d = b[a]) || (d && n.key == d.key && n.type === d.type))
            )
              b[a] = void 0;
            else
              for (s = 0; s < k; s++) {
                if ((d = b[s]) && n.key == d.key && n.type === d.type) {
                  b[s] = void 0;
                  break;
                }
                d = null;
              }
            if (
              ((h = U(e, n, (d = d || _), r, o, i, l, u, c)),
              (s = n.ref) &&
                d.ref != s &&
                (g || (g = []),
                d.ref && g.push(d.ref, null, n),
                g.push(s, n.__c || h, n)),
              null != h)
            ) {
              var p;
              if ((null == v && (v = h), void 0 !== n.__d))
                (p = n.__d), (n.__d = void 0);
              else if (i == d || h != u || null == h.parentNode) {
                e: if (null == u || u.parentNode !== e)
                  e.appendChild(h), (p = null);
                else {
                  for (y = u, s = 0; (y = y.nextSibling) && s < k; s += 2)
                    if (y == h) break e;
                  e.insertBefore(h, u), (p = u);
                }
                'option' == t.type && (e.value = '');
              }
              (u = void 0 !== p ? p : h.nextSibling),
                'function' == typeof t.type && (t.__d = u);
            } else u && d.__e == u && u.parentNode != e && (u = m(d));
          }
          return a++, n;
        })),
        (t.__e = v),
        null != i && 'function' != typeof t.type)
      )
        for (a = i.length; a--; ) null != i[a] && f(i[a]);
      for (a = k; a--; ) null != b[a] && N(b[a], b[a]);
      if (g) for (a = 0; a < g.length; a++) E(g[a], g[++a], g[++a]);
    }
    function C(e, t, n) {
      if ((null == n && (n = []), null == e || 'boolean' == typeof e))
        t && n.push(t(null));
      else if (Array.isArray(e))
        for (var r = 0; r < e.length; r++) C(e[r], t, n);
      else
        n.push(
          t
            ? t(
                'string' == typeof e || 'number' == typeof e
                  ? h(null, e, null, null)
                  : null != e.__e || null != e.__c
                  ? h(e.type, e.props, e.key, null)
                  : e
              )
            : e
        );
      return n;
    }
    function w(e, t, n) {
      '-' === t[0]
        ? e.setProperty(t, n)
        : (e[t] =
            'number' == typeof n && !1 === a.test(t)
              ? n + 'px'
              : null == n
              ? ''
              : n);
    }
    function S(e, t, n, r, o) {
      var i, l, u, c, _;
      if (
        (o
          ? 'className' === t && (t = 'class')
          : 'class' === t && (t = 'className'),
        'key' === t || 'children' === t)
      );
      else if ('style' === t)
        if (((i = e.style), 'string' == typeof n)) i.cssText = n;
        else {
          if (('string' == typeof r && ((i.cssText = ''), (r = null)), r))
            for (l in r) (n && l in n) || w(i, l, '');
          if (n) for (u in n) (r && n[u] === r[u]) || w(i, u, n[u]);
        }
      else
        'o' === t[0] && 'n' === t[1]
          ? ((c = t !== (t = t.replace(/Capture$/, ''))),
            (_ = t.toLowerCase()),
            (t = (_ in e ? _ : t).slice(2)),
            n
              ? (r || e.addEventListener(t, P, c), ((e.l || (e.l = {}))[t] = n))
              : e.removeEventListener(t, P, c))
          : 'list' !== t &&
            'tagName' !== t &&
            'form' !== t &&
            'type' !== t &&
            'size' !== t &&
            !o &&
            t in e
          ? (e[t] = null == n ? '' : n)
          : 'function' != typeof n &&
            'dangerouslySetInnerHTML' !== t &&
            (t !== (t = t.replace(/^xlink:?/, ''))
              ? null == n || !1 === n
                ? e.removeAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    t.toLowerCase()
                  )
                : e.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    t.toLowerCase(),
                    n
                  )
              : null == n || (!1 === n && !/^ar/.test(t))
              ? e.removeAttribute(t)
              : e.setAttribute(t, n));
    }
    function P(e) {
      this.l[e.type](r.event ? r.event(e) : e);
    }
    function U(e, t, n, o, i, l, u, c, _) {
      var p,
        a,
        f,
        d,
        h,
        m,
        g,
        b,
        k,
        C,
        w = t.type;
      if (void 0 !== t.constructor) return null;
      (p = r.__b) && p(t);
      try {
        e: if ('function' == typeof w) {
          if (
            ((b = t.props),
            (k = (p = w.contextType) && o[p.__c]),
            (C = p ? (k ? k.props.value : p.__) : o),
            n.__c
              ? (g = (a = t.__c = n.__c).__ = a.__E)
              : ('prototype' in w && w.prototype.render
                  ? (t.__c = a = new w(b, C))
                  : ((t.__c = a = new v(b, C)),
                    (a.constructor = w),
                    (a.render = T)),
                k && k.sub(a),
                (a.props = b),
                a.state || (a.state = {}),
                (a.context = C),
                (a.__n = o),
                (f = a.__d = !0),
                (a.__h = [])),
            null == a.__s && (a.__s = a.state),
            null != w.getDerivedStateFromProps &&
              (a.__s == a.state && (a.__s = s({}, a.__s)),
              s(a.__s, w.getDerivedStateFromProps(b, a.__s))),
            (d = a.props),
            (h = a.state),
            f)
          )
            null == w.getDerivedStateFromProps &&
              null != a.componentWillMount &&
              a.componentWillMount(),
              null != a.componentDidMount && a.__h.push(a.componentDidMount);
          else {
            if (
              (null == w.getDerivedStateFromProps &&
                b !== d &&
                null != a.componentWillReceiveProps &&
                a.componentWillReceiveProps(b, C),
              !a.__e &&
                null != a.shouldComponentUpdate &&
                !1 === a.shouldComponentUpdate(b, a.__s, C))
            ) {
              for (
                a.props = b,
                  a.state = a.__s,
                  a.__d = !1,
                  a.__v = t,
                  t.__e = n.__e,
                  t.__k = n.__k,
                  a.__h.length && u.push(a),
                  p = 0;
                p < t.__k.length;
                p++
              )
                t.__k[p] && (t.__k[p].__ = t);
              break e;
            }
            null != a.componentWillUpdate && a.componentWillUpdate(b, a.__s, C),
              null != a.componentDidUpdate &&
                a.__h.push(function() {
                  a.componentDidUpdate(d, h, m);
                });
          }
          (a.context = C),
            (a.props = b),
            (a.state = a.__s),
            (p = r.__r) && p(t),
            (a.__d = !1),
            (a.__v = t),
            (a.__P = e),
            (p = a.render(a.props, a.state, a.context)),
            (t.__k =
              null != p && p.type == y && null == p.key
                ? p.props.children
                : Array.isArray(p)
                ? p
                : [p]),
            null != a.getChildContext && (o = s(s({}, o), a.getChildContext())),
            f ||
              null == a.getSnapshotBeforeUpdate ||
              (m = a.getSnapshotBeforeUpdate(d, h)),
            x(e, t, n, o, i, l, u, c, _),
            (a.base = t.__e),
            a.__h.length && u.push(a),
            g && (a.__E = a.__ = null),
            (a.__e = !1);
        } else t.__e = A(n.__e, t, n, o, i, l, u, _);
        (p = r.diffed) && p(t);
      } catch (e) {
        r.__e(e, t, n);
      }
      return t.__e;
    }
    function M(e, t) {
      r.__c && r.__c(t, e),
        e.some(function(t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function(e) {
                e.call(t);
              });
          } catch (e) {
            r.__e(e, t.__v);
          }
        });
    }
    function A(e, t, n, r, o, i, l, u) {
      var c,
        a,
        s,
        f,
        d,
        h = n.props,
        y = t.props;
      if (((o = 'svg' === t.type || o), null != i))
        for (c = 0; c < i.length; c++)
          if (
            null != (a = i[c]) &&
            ((null === t.type ? 3 === a.nodeType : a.localName === t.type) ||
              e == a)
          ) {
            (e = a), (i[c] = null);
            break;
          }
      if (null == e) {
        if (null === t.type) return document.createTextNode(y);
        (e = o
          ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
          : document.createElement(t.type, y.is && { is: y.is })),
          (i = null);
      }
      if (null === t.type) h !== y && e.data != y && (e.data = y);
      else if (t !== n) {
        if (
          (null != i && (i = p.slice.call(e.childNodes)),
          (s = (h = n.props || _).dangerouslySetInnerHTML),
          (f = y.dangerouslySetInnerHTML),
          !u)
        ) {
          if (h === _)
            for (h = {}, d = 0; d < e.attributes.length; d++)
              h[e.attributes[d].name] = e.attributes[d].value;
          (f || s) &&
            ((f && s && f.__html == s.__html) ||
              (e.innerHTML = (f && f.__html) || ''));
        }
        (function(e, t, n, r, o) {
          var i;
          for (i in n) i in t || S(e, i, null, n[i], r);
          for (i in t)
            (o && 'function' != typeof t[i]) ||
              'value' === i ||
              'checked' === i ||
              n[i] === t[i] ||
              S(e, i, t[i], n[i], r);
        })(e, y, h, o, u),
          (t.__k = t.props.children),
          f || x(e, t, n, r, 'foreignObject' !== t.type && o, i, l, _, u),
          u ||
            ('value' in y &&
              void 0 !== y.value &&
              y.value !== e.value &&
              (e.value = null == y.value ? '' : y.value),
            'checked' in y &&
              void 0 !== y.checked &&
              y.checked !== e.checked &&
              (e.checked = y.checked));
      }
      return e;
    }
    function E(e, t, n) {
      try {
        'function' == typeof e ? e(t) : (e.current = t);
      } catch (e) {
        r.__e(e, n);
      }
    }
    function N(e, t, n) {
      var o, i, l;
      if (
        (r.unmount && r.unmount(e),
        (o = e.ref) && ((o.current && o.current !== e.__e) || E(o, null, t)),
        n || 'function' == typeof e.type || (n = null != (i = e.__e)),
        (e.__e = e.__d = void 0),
        null != (o = e.__c))
      ) {
        if (o.componentWillUnmount)
          try {
            o.componentWillUnmount();
          } catch (e) {
            r.__e(e, t);
          }
        o.base = o.__P = null;
      }
      if ((o = e.__k)) for (l = 0; l < o.length; l++) o[l] && N(o[l], t, n);
      null != i && f(i);
    }
    function T(e, t, n) {
      return this.constructor(e, n);
    }
    function D(e, t, n) {
      var o, i, l;
      r.__ && r.__(e, t),
        (i = (o = n === c) ? null : (n && n.__k) || t.__k),
        (e = d(y, null, [e])),
        (l = []),
        U(
          t,
          ((o ? t : n || t).__k = e),
          i || _,
          _,
          void 0 !== t.ownerSVGElement,
          n && !o ? [n] : i ? null : p.slice.call(t.childNodes),
          l,
          n || _,
          o
        ),
        M(l, e);
    }
    (r = {
      __e: function(e, t) {
        for (var n, r; (t = t.__); )
          if ((n = t.__c) && !n.__)
            try {
              if (
                (n.constructor &&
                  null != n.constructor.getDerivedStateFromError &&
                  ((r = !0),
                  n.setState(n.constructor.getDerivedStateFromError(e))),
                null != n.componentDidCatch &&
                  ((r = !0), n.componentDidCatch(e)),
                r)
              )
                return b((n.__E = n));
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
      (v.prototype.setState = function(e, t) {
        var n;
        (n =
          this.__s !== this.state ? this.__s : (this.__s = s({}, this.state))),
          'function' == typeof e && (e = e(n, this.props)),
          e && s(n, e),
          null != e && this.__v && (t && this.__h.push(t), b(this));
      }),
      (v.prototype.forceUpdate = function(e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), b(this));
      }),
      (v.prototype.render = y),
      (o = []),
      (i = 0),
      (l =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (c = _);
    var L = {};
    function O(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function R(e, t, n) {
      var r,
        o = /(?:\?([^#]*))?(#.*)?$/,
        i = e.match(o),
        l = {};
      if (i && i[1])
        for (var u = i[1].split('&'), c = 0; c < u.length; c++) {
          var _ = u[c].split('=');
          l[decodeURIComponent(_[0])] = decodeURIComponent(
            _.slice(1).join('=')
          );
        }
      (e = I(e.replace(o, ''))), (t = I(t || ''));
      for (var p = Math.max(e.length, t.length), a = 0; a < p; a++)
        if (t[a] && ':' === t[a].charAt(0)) {
          var s = t[a].replace(/(^:|[+*?]+$)/g, ''),
            f = (t[a].match(/[+*?]+$/) || L)[0] || '',
            d = ~f.indexOf('+'),
            h = ~f.indexOf('*'),
            y = e[a] || '';
          if (!y && !h && (f.indexOf('?') < 0 || d)) {
            r = !1;
            break;
          }
          if (((l[s] = decodeURIComponent(y)), d || h)) {
            l[s] = e
              .slice(a)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (t[a] !== e[a]) {
          r = !1;
          break;
        }
      return (!0 === n.default || !1 !== r) && l;
    }
    function j(e, t) {
      return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
    }
    function W(e, t) {
      return (
        (e.index = t),
        (e.rank = (function(e) {
          return e.props.default
            ? 0
            : ((t = e.props.path),
              I(t)
                .map(K)
                .join(''));
          var t;
        })(e)),
        e.props
      );
    }
    function I(e) {
      return e.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function K(e) {
      return ':' == e.charAt(0)
        ? 1 + '*+?'.indexOf(e.charAt(e.length - 1)) || 4
        : 5;
    }
    var $ = null,
      F = [],
      H = [],
      B = {};
    function z() {
      var e;
      return (
        '' +
        ((e =
          $ && $.location
            ? $.location
            : $ && $.getCurrentLocation
            ? $.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : B).pathname || '') +
        (e.search || '')
      );
    }
    function G(e, t) {
      return (
        void 0 === t && (t = !1),
        'string' != typeof e && e.url && ((t = e.replace), (e = e.url)),
        (function(e) {
          for (var t = F.length; t--; ) if (F[t].canRoute(e)) return !0;
          return !1;
        })(e) &&
          (function(e, t) {
            void 0 === t && (t = 'push'),
              $ && $[t]
                ? $[t](e)
                : 'undefined' != typeof history &&
                  history[t + 'State'] &&
                  history[t + 'State'](null, null, e);
          })(e, t ? 'replace' : 'push'),
        V(e)
      );
    }
    function V(e) {
      for (var t = !1, n = 0; n < F.length; n++)
        !0 === F[n].routeTo(e) && (t = !0);
      for (var r = H.length; r--; ) H[r](e);
      return t;
    }
    function q(e) {
      if (e && e.getAttribute) {
        var t = e.getAttribute('href'),
          n = e.getAttribute('target');
        if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) return G(t);
      }
    }
    function J(e) {
      if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || 0 !== e.button))
        return q(e.currentTarget || e.target || this), Q(e);
    }
    function Q(e) {
      return (
        e &&
          (e.stopImmediatePropagation && e.stopImmediatePropagation(),
          e.stopPropagation && e.stopPropagation(),
          e.preventDefault()),
        !1
      );
    }
    function X(e) {
      if (
        !(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || 0 !== e.button)
      ) {
        var t = e.target;
        do {
          if (
            'A' === String(t.nodeName).toUpperCase() &&
            t.getAttribute('href')
          ) {
            if (t.hasAttribute('native')) return;
            if (q(t)) return Q(e);
          }
        } while ((t = t.parentNode));
      }
    }
    var Y = !1;
    var Z = (function(e) {
      function t(t) {
        e.call(this, t),
          t.history && ($ = t.history),
          (this.state = { url: t.url || z() }),
          Y ||
            ('function' == typeof addEventListener &&
              ($ ||
                addEventListener('popstate', function() {
                  V(z());
                }),
              addEventListener('click', X)),
            (Y = !0));
      }
      return (
        e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.shouldComponentUpdate = function(e) {
          return (
            !0 !== e.static ||
            e.url !== this.props.url || e.onChange !== this.props.onChange
          );
        }),
        (t.prototype.canRoute = function(e) {
          var t = C(this.props.children);
          return this.getMatchingChildren(t, e, !1).length > 0;
        }),
        (t.prototype.routeTo = function(e) {
          this.setState({ url: e });
          var t = this.canRoute(e);
          return this.updating || this.forceUpdate(), t;
        }),
        (t.prototype.componentWillMount = function() {
          F.push(this), (this.updating = !0);
        }),
        (t.prototype.componentDidMount = function() {
          var e = this;
          $ &&
            (this.unlisten = $.listen(function(t) {
              e.routeTo('' + (t.pathname || '') + (t.search || ''));
            })),
            (this.updating = !1);
        }),
        (t.prototype.componentWillUnmount = function() {
          'function' == typeof this.unlisten && this.unlisten(),
            F.splice(F.indexOf(this), 1);
        }),
        (t.prototype.componentWillUpdate = function() {
          this.updating = !0;
        }),
        (t.prototype.componentDidUpdate = function() {
          this.updating = !1;
        }),
        (t.prototype.getMatchingChildren = function(e, t, n) {
          return e
            .filter(W)
            .sort(j)
            .map(function(e) {
              var r = R(t, e.props.path, e.props);
              if (r) {
                if (!1 !== n) {
                  var o = { url: t, matches: r };
                  return (
                    O(o, r),
                    delete o.ref,
                    delete o.key,
                    (function(e, t) {
                      return (
                        (t = s(s({}, e.props), t)),
                        arguments.length > 2 &&
                          (t.children = p.slice.call(arguments, 2)),
                        h(e.type, t, t.key || e.key, t.ref || e.ref)
                      );
                    })(e, o)
                  );
                }
                return e;
              }
            })
            .filter(Boolean);
        }),
        (t.prototype.render = function(e, t) {
          var n = e.children,
            r = e.onChange,
            o = t.url,
            i = this.getMatchingChildren(C(n), o, !0),
            l = i[0] || null,
            u = this.previousUrl;
          return (
            o !== u &&
              ((this.previousUrl = o),
              'function' == typeof r &&
                r({
                  router: this,
                  url: o,
                  previous: u,
                  active: i,
                  current: l,
                })),
            l
          );
        }),
        t
      );
    })(v);
    (Z.subscribers = H),
      (Z.getCurrentUrl = z),
      (Z.route = G),
      (Z.Router = Z),
      (Z.Route = function(e) {
        return d(e.component, e);
      }),
      (Z.Link = function(e) {
        return d('a', O({ onClick: J }, e));
      }),
      (Z.exec = R);
    var ee = Z;
    class te extends v {
      render() {
        return d('section', null, 'Hello World');
      }
    }
    class ne extends v {
      constructor() {
        super();
      }
      render() {
        return d(ee, null, d(te, { path: '/' }));
      }
    }
    !(function() {
      const e = window.document.createElement('section');
      if (!e) throw new Error('Could not bootstrap the application');
      window.document.body.appendChild(e), (t = e), D(d(ne, null), t);
      var t;
    })();
  },
]);
