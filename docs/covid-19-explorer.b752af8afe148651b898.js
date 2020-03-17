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
      s,
      a,
      l,
      u = {},
      c = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function f(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function d(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function _(e, t, n) {
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
    function m(e) {
      return e.children;
    }
    function g(e, t) {
      (this.props = e), (this.context = t);
    }
    function y(e, t) {
      if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return 'function' == typeof e.type ? y(e) : null;
    }
    function v(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        return v(e);
      }
    }
    function b(e) {
      ((!e.__d && (e.__d = !0) && o.push(e) && !i++) ||
        a !== r.debounceRendering) &&
        ((a = r.debounceRendering) || s)(S);
    }
    function S() {
      for (var e; (i = o.length); )
        (e = o.sort(function(e, t) {
          return e.__v.__b - t.__v.__b;
        })),
          (o = []),
          e.some(function(e) {
            var t, n, r, o, i, s;
            e.__d &&
              ((i = (o = (t = e).__v).__e),
              (s = t.__P) &&
                ((n = []),
                (r = D(
                  s,
                  o,
                  f({}, o),
                  t.__n,
                  void 0 !== s.ownerSVGElement,
                  null,
                  n,
                  null == i ? y(o) : i
                )),
                A(n, o),
                r != i && v(o)));
          });
    }
    function x(e, t, n, r, o, i, s, a, l) {
      var p,
        f,
        _,
        h,
        m,
        g,
        v,
        b = (n && n.__k) || c,
        S = b.length;
      if (
        (a == u && (a = null != i ? i[0] : S ? y(n, 0) : null),
        (p = 0),
        (t.__k = C(t.__k, function(n) {
          if (null != n) {
            if (
              ((n.__ = t),
              (n.__b = t.__b + 1),
              null === (_ = b[p]) || (_ && n.key == _.key && n.type === _.type))
            )
              b[p] = void 0;
            else
              for (f = 0; f < S; f++) {
                if ((_ = b[f]) && n.key == _.key && n.type === _.type) {
                  b[f] = void 0;
                  break;
                }
                _ = null;
              }
            if (
              ((h = D(e, n, (_ = _ || u), r, o, i, s, a, l)),
              (f = n.ref) &&
                _.ref != f &&
                (v || (v = []),
                _.ref && v.push(_.ref, null, n),
                v.push(f, n.__c || h, n)),
              null != h)
            ) {
              var c;
              if ((null == g && (g = h), void 0 !== n.__d))
                (c = n.__d), (n.__d = void 0);
              else if (i == _ || h != a || null == h.parentNode) {
                e: if (null == a || a.parentNode !== e)
                  e.appendChild(h), (c = null);
                else {
                  for (m = a, f = 0; (m = m.nextSibling) && f < S; f += 2)
                    if (m == h) break e;
                  e.insertBefore(h, a), (c = a);
                }
                'option' == t.type && (e.value = '');
              }
              (a = void 0 !== c ? c : h.nextSibling),
                'function' == typeof t.type && (t.__d = a);
            } else a && _.__e == a && a.parentNode != e && (a = y(_));
          }
          return p++, n;
        })),
        (t.__e = g),
        null != i && 'function' != typeof t.type)
      )
        for (p = i.length; p--; ) null != i[p] && d(i[p]);
      for (p = S; p--; ) null != b[p] && I(b[p], b[p]);
      if (v) for (p = 0; p < v.length; p++) P(v[p], v[++p], v[++p]);
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
    function k(e, t, n) {
      '-' === t[0]
        ? e.setProperty(t, n)
        : (e[t] =
            'number' == typeof n && !1 === p.test(t)
              ? n + 'px'
              : null == n
              ? ''
              : n);
    }
    function w(e, t, n, r, o) {
      var i, s, a, l, u;
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
            for (s in r) (n && s in n) || k(i, s, '');
          if (n) for (a in n) (r && n[a] === r[a]) || k(i, a, n[a]);
        }
      else
        'o' === t[0] && 'n' === t[1]
          ? ((l = t !== (t = t.replace(/Capture$/, ''))),
            (u = t.toLowerCase()),
            (t = (u in e ? u : t).slice(2)),
            n
              ? (r || e.addEventListener(t, O, l), ((e.l || (e.l = {}))[t] = n))
              : e.removeEventListener(t, O, l))
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
    function O(e) {
      this.l[e.type](r.event ? r.event(e) : e);
    }
    function D(e, t, n, o, i, s, a, l, u) {
      var c,
        p,
        d,
        _,
        h,
        y,
        v,
        b,
        S,
        C,
        k = t.type;
      if (void 0 !== t.constructor) return null;
      (c = r.__b) && c(t);
      try {
        e: if ('function' == typeof k) {
          if (
            ((b = t.props),
            (S = (c = k.contextType) && o[c.__c]),
            (C = c ? (S ? S.props.value : c.__) : o),
            n.__c
              ? (v = (p = t.__c = n.__c).__ = p.__E)
              : ('prototype' in k && k.prototype.render
                  ? (t.__c = p = new k(b, C))
                  : ((t.__c = p = new g(b, C)),
                    (p.constructor = k),
                    (p.render = U)),
                S && S.sub(p),
                (p.props = b),
                p.state || (p.state = {}),
                (p.context = C),
                (p.__n = o),
                (d = p.__d = !0),
                (p.__h = [])),
            null == p.__s && (p.__s = p.state),
            null != k.getDerivedStateFromProps &&
              (p.__s == p.state && (p.__s = f({}, p.__s)),
              f(p.__s, k.getDerivedStateFromProps(b, p.__s))),
            (_ = p.props),
            (h = p.state),
            d)
          )
            null == k.getDerivedStateFromProps &&
              null != p.componentWillMount &&
              p.componentWillMount(),
              null != p.componentDidMount && p.__h.push(p.componentDidMount);
          else {
            if (
              (null == k.getDerivedStateFromProps &&
                b !== _ &&
                null != p.componentWillReceiveProps &&
                p.componentWillReceiveProps(b, C),
              !p.__e &&
                null != p.shouldComponentUpdate &&
                !1 === p.shouldComponentUpdate(b, p.__s, C))
            ) {
              for (
                p.props = b,
                  p.state = p.__s,
                  p.__d = !1,
                  p.__v = t,
                  t.__e = n.__e,
                  t.__k = n.__k,
                  p.__h.length && a.push(p),
                  c = 0;
                c < t.__k.length;
                c++
              )
                t.__k[c] && (t.__k[c].__ = t);
              break e;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(b, p.__s, C),
              null != p.componentDidUpdate &&
                p.__h.push(function() {
                  p.componentDidUpdate(_, h, y);
                });
          }
          (p.context = C),
            (p.props = b),
            (p.state = p.__s),
            (c = r.__r) && c(t),
            (p.__d = !1),
            (p.__v = t),
            (p.__P = e),
            (c = p.render(p.props, p.state, p.context)),
            (t.__k =
              null != c && c.type == m && null == c.key
                ? c.props.children
                : Array.isArray(c)
                ? c
                : [c]),
            null != p.getChildContext && (o = f(f({}, o), p.getChildContext())),
            d ||
              null == p.getSnapshotBeforeUpdate ||
              (y = p.getSnapshotBeforeUpdate(_, h)),
            x(e, t, n, o, i, s, a, l, u),
            (p.base = t.__e),
            p.__h.length && a.push(p),
            v && (p.__E = p.__ = null),
            (p.__e = !1);
        } else t.__e = j(n.__e, t, n, o, i, s, a, u);
        (c = r.diffed) && c(t);
      } catch (e) {
        r.__e(e, t, n);
      }
      return t.__e;
    }
    function A(e, t) {
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
    function j(e, t, n, r, o, i, s, a) {
      var l,
        p,
        f,
        d,
        _,
        h = n.props,
        m = t.props;
      if (((o = 'svg' === t.type || o), null != i))
        for (l = 0; l < i.length; l++)
          if (
            null != (p = i[l]) &&
            ((null === t.type ? 3 === p.nodeType : p.localName === t.type) ||
              e == p)
          ) {
            (e = p), (i[l] = null);
            break;
          }
      if (null == e) {
        if (null === t.type) return document.createTextNode(m);
        (e = o
          ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
          : document.createElement(t.type, m.is && { is: m.is })),
          (i = null);
      }
      if (null === t.type) h !== m && e.data != m && (e.data = m);
      else if (t !== n) {
        if (
          (null != i && (i = c.slice.call(e.childNodes)),
          (f = (h = n.props || u).dangerouslySetInnerHTML),
          (d = m.dangerouslySetInnerHTML),
          !a)
        ) {
          if (h === u)
            for (h = {}, _ = 0; _ < e.attributes.length; _++)
              h[e.attributes[_].name] = e.attributes[_].value;
          (d || f) &&
            ((d && f && d.__html == f.__html) ||
              (e.innerHTML = (d && d.__html) || ''));
        }
        (function(e, t, n, r, o) {
          var i;
          for (i in n) i in t || w(e, i, null, n[i], r);
          for (i in t)
            (o && 'function' != typeof t[i]) ||
              'value' === i ||
              'checked' === i ||
              n[i] === t[i] ||
              w(e, i, t[i], n[i], r);
        })(e, m, h, o, a),
          (t.__k = t.props.children),
          d || x(e, t, n, r, 'foreignObject' !== t.type && o, i, s, u, a),
          a ||
            ('value' in m &&
              void 0 !== m.value &&
              m.value !== e.value &&
              (e.value = null == m.value ? '' : m.value),
            'checked' in m &&
              void 0 !== m.checked &&
              m.checked !== e.checked &&
              (e.checked = m.checked));
      }
      return e;
    }
    function P(e, t, n) {
      try {
        'function' == typeof e ? e(t) : (e.current = t);
      } catch (e) {
        r.__e(e, n);
      }
    }
    function I(e, t, n) {
      var o, i, s;
      if (
        (r.unmount && r.unmount(e),
        (o = e.ref) && ((o.current && o.current !== e.__e) || P(o, null, t)),
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
      if ((o = e.__k)) for (s = 0; s < o.length; s++) o[s] && I(o[s], t, n);
      null != i && d(i);
    }
    function U(e, t, n) {
      return this.constructor(e, n);
    }
    function T(e, t, n) {
      var o, i, s;
      r.__ && r.__(e, t),
        (i = (o = n === l) ? null : (n && n.__k) || t.__k),
        (e = _(m, null, [e])),
        (s = []),
        D(
          t,
          ((o ? t : n || t).__k = e),
          i || u,
          u,
          void 0 !== t.ownerSVGElement,
          n && !o ? [n] : i ? null : c.slice.call(t.childNodes),
          s,
          n || u,
          o
        ),
        A(s, e);
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
      (g.prototype.setState = function(e, t) {
        var n;
        (n =
          this.__s !== this.state ? this.__s : (this.__s = f({}, this.state))),
          'function' == typeof e && (e = e(n, this.props)),
          e && f(n, e),
          null != e && this.__v && (t && this.__h.push(t), b(this));
      }),
      (g.prototype.forceUpdate = function(e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), b(this));
      }),
      (g.prototype.render = m),
      (o = []),
      (i = 0),
      (s =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (l = u);
    var N = {};
    function E(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function M(e, t, n) {
      var r,
        o = /(?:\?([^#]*))?(#.*)?$/,
        i = e.match(o),
        s = {};
      if (i && i[1])
        for (var a = i[1].split('&'), l = 0; l < a.length; l++) {
          var u = a[l].split('=');
          s[decodeURIComponent(u[0])] = decodeURIComponent(
            u.slice(1).join('=')
          );
        }
      (e = R(e.replace(o, ''))), (t = R(t || ''));
      for (var c = Math.max(e.length, t.length), p = 0; p < c; p++)
        if (t[p] && ':' === t[p].charAt(0)) {
          var f = t[p].replace(/(^:|[+*?]+$)/g, ''),
            d = (t[p].match(/[+*?]+$/) || N)[0] || '',
            _ = ~d.indexOf('+'),
            h = ~d.indexOf('*'),
            m = e[p] || '';
          if (!m && !h && (d.indexOf('?') < 0 || _)) {
            r = !1;
            break;
          }
          if (((s[f] = decodeURIComponent(m)), _ || h)) {
            s[f] = e
              .slice(p)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (t[p] !== e[p]) {
          r = !1;
          break;
        }
      return (!0 === n.default || !1 !== r) && s;
    }
    function L(e, t) {
      return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
    }
    function G(e, t) {
      return (
        (e.index = t),
        (e.rank = (function(e) {
          return e.props.default
            ? 0
            : ((t = e.props.path),
              R(t)
                .map(W)
                .join(''));
          var t;
        })(e)),
        e.props
      );
    }
    function R(e) {
      return e.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function W(e) {
      return ':' == e.charAt(0)
        ? 1 + '*+?'.indexOf(e.charAt(e.length - 1)) || 4
        : 5;
    }
    var B = null,
      F = [],
      K = [],
      z = {};
    function $() {
      var e;
      return (
        '' +
        ((e =
          B && B.location
            ? B.location
            : B && B.getCurrentLocation
            ? B.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : z).pathname || '') +
        (e.search || '')
      );
    }
    function V(e, t) {
      return (
        void 0 === t && (t = !1),
        'string' != typeof e && e.url && ((t = e.replace), (e = e.url)),
        (function(e) {
          for (var t = F.length; t--; ) if (F[t].canRoute(e)) return !0;
          return !1;
        })(e) &&
          (function(e, t) {
            void 0 === t && (t = 'push'),
              B && B[t]
                ? B[t](e)
                : 'undefined' != typeof history &&
                  history[t + 'State'] &&
                  history[t + 'State'](null, null, e);
          })(e, t ? 'replace' : 'push'),
        H(e)
      );
    }
    function H(e) {
      for (var t = !1, n = 0; n < F.length; n++)
        !0 === F[n].routeTo(e) && (t = !0);
      for (var r = K.length; r--; ) K[r](e);
      return t;
    }
    function J(e) {
      if (e && e.getAttribute) {
        var t = e.getAttribute('href'),
          n = e.getAttribute('target');
        if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) return V(t);
      }
    }
    function Z(e) {
      if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || 0 !== e.button))
        return J(e.currentTarget || e.target || this), q(e);
    }
    function q(e) {
      return (
        e &&
          (e.stopImmediatePropagation && e.stopImmediatePropagation(),
          e.stopPropagation && e.stopPropagation(),
          e.preventDefault()),
        !1
      );
    }
    function Q(e) {
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
            if (J(t)) return q(e);
          }
        } while ((t = t.parentNode));
      }
    }
    var X = !1;
    var Y = (function(e) {
      function t(t) {
        e.call(this, t),
          t.history && (B = t.history),
          (this.state = { url: t.url || $() }),
          X ||
            ('function' == typeof addEventListener &&
              (B ||
                addEventListener('popstate', function() {
                  H($());
                }),
              addEventListener('click', Q)),
            (X = !0));
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
          B &&
            (this.unlisten = B.listen(function(t) {
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
            .filter(G)
            .sort(L)
            .map(function(e) {
              var r = M(t, e.props.path, e.props);
              if (r) {
                if (!1 !== n) {
                  var o = { url: t, matches: r };
                  return (
                    E(o, r),
                    delete o.ref,
                    delete o.key,
                    (function(e, t) {
                      return (
                        (t = f(f({}, e.props), t)),
                        arguments.length > 2 &&
                          (t.children = c.slice.call(arguments, 2)),
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
            s = i[0] || null,
            a = this.previousUrl;
          return (
            o !== a &&
              ((this.previousUrl = o),
              'function' == typeof r &&
                r({
                  router: this,
                  url: o,
                  previous: a,
                  active: i,
                  current: s,
                })),
            s
          );
        }),
        t
      );
    })(g);
    (Y.subscribers = K),
      (Y.getCurrentUrl = $),
      (Y.route = V),
      (Y.Router = Y),
      (Y.Route = function(e) {
        return _(e.component, e);
      }),
      (Y.Link = function(e) {
        return _('a', E({ onClick: Z }, e));
      }),
      (Y.exec = M);
    var ee = Y;
    class te extends g {
      constructor() {
        super();
        const e = window.document.createElement('div');
        if (!e) throw new Error('could not add the chart to the DOM');
        this.state = { chartDiv: e };
      }
      componentDidMount() {
        this.base.id = 'chartDiv';
      }
      componentDidUpdate() {
        JSC.Chart('chartDiv', {
          xAxis_label_text: this.props.useDays ? 'Day' : void 0,
          xAxis: {
            scale: { type: this.props.useDays ? 'auto' : 'time' },
            customTicks: [
              { value: { month: '*' }, label_text: '%min' },
              { value: { week: '*' }, label_text: '%min' },
            ],
          },
          yAxis: {
            scale: {
              type: 0 === this.props.scaleType ? 'auto' : 'logarithmic',
            },
          },
          legend: { template: '%icon %name' },
          series: this.props.series,
        });
      }
      render() {
        return _('div', { className: this.props.flexSize });
      }
    }
    function ne(e) {
      return 'string' == typeof e;
    }
    function re({ onChange: e, options: t, selected: n }) {
      return _(
        'select',
        { onChange: t => e(parseInt(t.target.value, 10)) },
        t.map((e, t) =>
          ne(e)
            ? _(
                'option',
                n === t ? { value: t, selected: !0 } : { value: t },
                e
              )
            : _(
                'option',
                n === t ? { value: e.index, selected: !0 } : { value: e.index },
                e.name
              )
        )
      );
    }
    function oe({ onChange: e, options: t, selected: n }) {
      return _(
        'select',
        {
          onChange: t =>
            e(
              (function(e) {
                let t = [];
                for (let n = 0; n < e.length; n += 1) {
                  const r = e[n];
                  r.selected && t.push(parseInt(r.value, 10));
                }
                return t;
              })(t.target.options)
            ),
          multiple: !0,
        },
        t.map((e, t) =>
          ne(e)
            ? n.indexOf(t) > -1
              ? _('option', { value: t, selected: !0 }, e)
              : _('option', { value: t }, e)
            : n.indexOf(e.index) > -1
            ? _('option', { value: e.index, selected: !0 }, e.name)
            : _('option', { value: e.index }, e.name)
        )
      );
    }
    function ie({ onChange: e, ymdString: t }) {
      return _('input', {
        onChange: t => e(t.target.value),
        type: 'date',
        value: t,
      });
    }
    function se({ classes: e, isDisabled: t, label: n, onClick: r }) {
      return _(
        'button',
        { className: e ? e.join(' ') : '', onClick: r, disabled: t },
        n
      );
    }
    const ae = ['Active', 'Confirmed', 'Deaths', 'Recoveries'],
      le = ['By date', 'By first confirmed', 'By first 100 confirmed'],
      ue = ['Linear', 'Logarithmic'];
    function ce({
      countries: e,
      currentSeries: t,
      onChange: n,
      reload: r,
      state: o,
    }) {
      return _(
        'section',
        { className: 'flex flex-item-20' },
        _(
          'section',
          { className: 'flex flex-col' },
          _(re, {
            onChange: function(e) {
              this.props.onChange(
                Object.assign(Object.assign({}, this.props.state), { mode: e })
              );
            }.bind(this),
            options: le,
            selected: o.mode,
          }),
          _(re, {
            onChange: function(e) {
              this.props.onChange(
                Object.assign(Object.assign({}, this.props.state), {
                  scaleType: e,
                })
              );
            }.bind(this),
            options: ue,
            selected: o.scaleType,
          })
        ),
        _(ie, {
          onChange: function(e) {
            this.props.onChange(
              Object.assign(Object.assign({}, this.props.state), {
                startDate: e,
              })
            );
          }.bind(this),
          ymdString: o.startDate,
        }),
        _(oe, {
          onChange: function(e) {
            this.props.onChange(
              Object.assign(Object.assign({}, this.props.state), {
                dataSetIndexes: e,
              })
            );
          }.bind(this),
          options: ae,
          selected: o.dataSetIndexes,
        }),
        _(oe, {
          onChange: function(e) {
            this.props.onChange(
              Object.assign(Object.assign({}, this.props.state), {
                countryIndexes: e,
              })
            );
          }.bind(this),
          options: e,
          selected: o.countryIndexes,
        }),
        _(se, { classes: ['green'], label: 'Reload', onClick: r })
      );
    }
    function pe({
      isDisabled: e,
      labelFalse: t,
      labelTrue: n,
      onClick: r,
      state: o,
    }) {
      return _(se, { isDisabled: e, label: o ? n : t, onClick: () => r(!o) });
    }
    class fe extends g {
      constructor() {
        super(), (this.state = { isConfigOpen: !1 });
      }
      useDays() {
        return 0 !== this.props.state.mode;
      }
      toggleConfig(e) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { isConfigOpen: e })
        );
      }
      render() {
        return _(
          'section',
          { className: 'full-size flex flex-col' },
          _(te, {
            flexSize: this.state.isConfigOpen ? 'flex-item-60' : 'flex-item-95',
            series: this.props.currentSeries,
            scaleType: this.props.state.scaleType,
            useDays: this.useDays(),
          }),
          _(pe, {
            labelTrue: '✗',
            labelFalse: '⚙️',
            onClick: this.toggleConfig.bind(this),
            state: this.state.isConfigOpen,
          }),
          this.state.isConfigOpen
            ? _(ce, {
                countries: this.props.countries,
                currentSeries: this.props.currentSeries,
                onChange: this.props.onChange,
                reload: this.props.reload,
                state: this.props.state,
              })
            : ''
        );
      }
    }
    const de = [
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
    ];
    function _e() {
      return Promise.all(de.map(e => fetch(e)))
        .then(he)
        .then(me)
        .then(ye)
        .then(ge)
        .then(ye)
        .then(ve)
        .then(be)
        .then(Se);
    }
    function he(e) {
      return Promise.all(e.map(e => e.text()));
    }
    function me(e) {
      return e.map(e =>
        e.split('\n').map((e, t) =>
          (function e(t) {
            if (/"[A-Za-z0-9\s\.']+(,)/.test(t)) {
              if (',' === t.charAt(0)) {
                const e = t.indexOf(',', 1);
                return t.substr(0, e) + ';' + t.substr(e + 1);
              }
              return e(t.replace(',', ';'));
            }
            return t;
          })(e)
            .split(',')
            .map((e, n) =>
              0 === n || 1 === n
                ? e
                : 0 === t
                ? n > 3
                  ? new Date(e)
                  : e
                : n > 3
                ? parseInt(e, 10)
                : e
            )
        )
      );
    }
    function ge(e) {
      return e.map(e => {
        let t = ['Total', 'World', 0, 0],
          n = [],
          r = 0;
        const o = e => {
          (n = e.slice(0)), (n[0] = 'Total');
        };
        return e.concat(
          e
            .reduce(
              (e, i, s, a) =>
                0 === s
                  ? e
                  : ((e => {
                      for (let n = 4; n < e.length; n += 1)
                        void 0 === t[n] && t.push(0), (t[n] += e[n]);
                    })(i),
                    1 === s
                      ? (o(i), e)
                      : a[s - 1][1] === i[1]
                      ? ((r += 1),
                        (e => {
                          for (let t = 4; t < e.length; t += 1) n[t] += e[t];
                        })(i),
                        e)
                      : (r > 1 && e.push(n), (r = 0), o(i), e)),
              []
            )
            .concat([t])
        );
      });
    }
    function ye(e) {
      return e.map(e => {
        const t = e.shift();
        return (
          e.sort((e, t) =>
            e[1] < t[1]
              ? -1
              : e[1] > t[1]
              ? 1
              : e[0] < t[0]
              ? -1
              : e[0] > t[0]
              ? 1
              : 0
          ),
          [t].concat(e)
        );
      });
    }
    function ve(e) {
      return [
        e[0].map((t, n) =>
          t.map((t, r) =>
            0 === n || r < 4 ? t : e[0][n][r] - e[1][n][r] - e[2][n][r]
          )
        ),
      ].concat(e);
    }
    function be(e) {
      return {
        countries: e[0].reduce(
          (e, t, n) =>
            0 === n || t.length < 5
              ? e
              : 'Total' === t[0]
              ? (e.push({ index: n, name: t[1] }), e)
              : (t[0] || e.push({ index: n, name: t[1] }), e),
          []
        ),
        dataSets: e,
      };
    }
    function Se({ countries: e, dataSets: t }) {
      const n = t.map((e, t) => {
        const n = (function(e) {
            switch (e) {
              case 0:
                return '😷';
              case 1:
                return '✔';
              case 2:
                return '☠';
              default:
                return '😊';
            }
          })(t),
          r = [];
        for (let t = 1; t < e.length; t += 1) {
          let o = '',
            i = [],
            s = e[t];
          for (let t = 0; t < s.length; t += 1)
            if ((1 === t && (o = n + ' ' + s[1] + ', ' + s[0]), t > 3)) {
              if (!s[t] || s[t] != s[t]) continue;
              i.push({ index: t, x: new Date(e[0][t]), y: s[t] });
            }
          r.push({ name: o, points: i });
        }
        return r;
      });
      return { countries: e, dataSets: t, points: n };
    }
    function xe(e) {
      const t = new Date(e.lineGraphState.startDate);
      return e.dataPromise.then(({ countries: n, dataSets: r, points: o }) => ({
        countries: n,
        series: e.lineGraphState.dataSetIndexes.reduce(
          (n, i) =>
            o[i].reduce((n, o, i) => {
              const s = (function(e, t, n, r, o) {
                switch (e.lineGraphState.mode) {
                  case 1:
                    return Ce(e, t, n, r, o, 1);
                  case 2:
                    return Ce(e, t, n, r, o, 100);
                  default:
                    return (function(e, t, n, r) {
                      if (e.lineGraphState.countryIndexes.indexOf(r) > -1)
                        return {
                          name: t.name,
                          points: t.points
                            .map(e => (e.x > n ? e : null))
                            .filter(Boolean),
                        };
                    })(e, t, o, n);
                }
              })(e, o, i + 1, r[0][i + 1], t);
              return s && n.push(s), n;
            }, n),
          []
        ),
      }));
    }
    function Ce(e, t, n, r, o, i) {
      if (e.lineGraphState.countryIndexes.indexOf(n) > -1) {
        let e = 0;
        return {
          name: t.name,
          points: t.points
            .map((t, n) => {
              if (t.x > o) {
                if (r[t.index] >= i) {
                  const n = e;
                  return (e += 1), { x: n, y: t.y };
                }
                return null;
              }
              return null;
            })
            .filter(Boolean),
        };
      }
    }
    const ke = [1, 43, 119, 414, 426];
    function we() {
      if (window.localStorage) {
        const e = window.localStorage.getItem('state');
        if (e)
          try {
            const t = JSON.parse(e);
            return t
              ? !1 ===
                (function(e) {
                  if (!e) return !1;
                  if (!1 === Array.isArray(e.countries)) return !1;
                  if (!1 === Array.isArray(e.currentSeries)) return !1;
                  return (function(e) {
                    if (!e) return !1;
                    if (!1 === Array.isArray(e.dataSetIndexes)) return !1;
                    if (!1 === Array.isArray(e.countryIndexes)) return !1;
                    if (
                      !1 ===
                      (function(e) {
                        return 'number' == typeof e;
                      })(e.mode)
                    )
                      return !1;
                    if (!1 === ne(e.startDate)) return !1;
                    return !0;
                  })(e.lineGraphState);
                })(t)
                ? (console.log('reseting old state'),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, t), { dataPromise: _e() })
              : null;
          } catch (e) {
            return null;
          }
      }
      return null;
    }
    class Oe extends g {
      constructor() {
        super();
        let e = we();
        e ||
          (e = {
            countries: [],
            currentSeries: [],
            dataPromise: _e(),
            lineGraphState: {
              dataSetIndexes: [1],
              countryIndexes: ke,
              mode: 2,
              scaleType: 0,
              startDate: '2019-12-26',
            },
          }),
          (this.state = e),
          this.selectAndUpdate();
      }
      updateSelectState({ countries: e, series: t }) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            countries: e,
            currentSeries: t,
          })
        );
      }
      selectAndUpdate() {
        this.state.dataPromise
          .then(() => xe(this.state))
          .then(this.updateSelectState.bind(this))
          .then(() => {
            return (
              (e = this.state),
              void (
                window.localStorage &&
                window.localStorage.setItem(
                  'state',
                  JSON.stringify(
                    Object.assign(Object.assign({}, e), { dataPromise: void 0 })
                  )
                )
              )
            );
            var e;
          });
      }
      lineGraphState(e) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { lineGraphState: e })
        ),
          this.selectAndUpdate();
      }
      reload() {
        this.setState({
          dataPromise: _e().then(e => (this.selectAndUpdate(), e)),
        });
      }
      render() {
        return _(
          ee,
          null,
          _(fe, {
            path: '/',
            countries: this.state.countries,
            currentSeries: this.state.currentSeries,
            onChange: this.lineGraphState.bind(this),
            reload: this.reload.bind(this),
            state: this.state.lineGraphState,
          })
        );
      }
    }
    !(function() {
      const e = window.document.createElement('section');
      if (((e.className = 'full-size flex flex-col'), !e))
        throw new Error('Could not bootstrap the application');
      window.document.body.appendChild(e), (t = e), T(_(Oe, null), t);
      var t;
    })();
  },
]);
