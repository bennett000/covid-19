!(function(t) {
  var n = {};
  function e(o) {
    if (n[o]) return n[o].exports;
    var a = (n[o] = { i: o, l: !1, exports: {} });
    return t[o].call(a.exports, a, a.exports, e), (a.l = !0), a.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function(t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: o });
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (e.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & n && 'string' != typeof t)
      )
        for (var a in t)
          e.d(
            o,
            a,
            function(n) {
              return t[n];
            }.bind(null, a)
          );
      return o;
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return e.d(n, 'a', n), n;
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ''),
    e((e.s = 1));
})([
  function(t) {
    t.exports = JSON.parse(
      '[{"country":"Afghanistan","population":"35530081"},{"country":"Albania","population":"2930187"},{"country":"Algeria","population":"41318142"},{"country":"American Samoa","population":"55641"},{"country":"Andorra","population":"76965"},{"country":"Angola","population":"29784193"},{"country":"Anguilla","population":"14909"},{"country":"Antarctica","population":null},{"country":"Antigua and Barbuda","population":"102012"},{"country":"Argentina","population":"44271041"},{"country":"Armenia","population":"2930450"},{"country":"Aruba","population":"105264"},{"country":"Australia","population":"24450561"},{"country":"Austria","population":"8735453"},{"country":"Azerbaijan","population":"9827589"},{"country":"Bahamas","population":"395361"},{"country":"Bahrain","population":"1492584"},{"country":"Bangladesh","population":"164669751"},{"country":"Barbados","population":"285719"},{"country":"Belarus","population":"9468338"},{"country":"Belgium","population":"11429336"},{"country":"Belize","population":"374681"},{"country":"Benin","population":"11175692"},{"country":"Bermuda","population":"61349"},{"country":"Bhutan","population":"807610"},{"country":"Bolivia","population":"11051600"},{"country":"Bosnia and Herzegovina","population":"3507017"},{"country":"Botswana","population":"2291661"},{"country":"Bouvet Island","population":null},{"country":"Brazil","population":"209288278"},{"country":"British Indian Ocean Territory","population":null},{"country":"Brunei","population":"428697"},{"country":"Bulgaria","population":"7084571"},{"country":"Burkina Faso","population":"19193382"},{"country":"Burundi","population":"10864245"},{"country":"Cambodia","population":"16005373"},{"country":"Cameroon","population":"24053727"},{"country":"Canada","population":"36624199"},{"country":"Cape Verde","population":"546388"},{"country":"Cayman Islands","population":"61559"},{"country":"Central African Republic","population":"4659080"},{"country":"Chad","population":"14899994"},{"country":"Chile","population":"18054726"},{"country":"China","population":"1409517397"},{"country":"Christmas Island","population":"2500"},{"country":"Cocos (Keeling) Islands","population":"600"},{"country":"Colombia","population":"49065615"},{"country":"Comoros","population":"813912"},{"country":"Congo","population":"5260750"},{"country":"Cook Islands","population":"17380"},{"country":"Costa Rica","population":"4905769"},{"country":"Croatia","population":"4189353"},{"country":"Cuba","population":"11484636"},{"country":"Cyprus","population":"1179551"},{"country":"Czech Republic","population":"10618303"},{"country":"Denmark","population":"5733551"},{"country":"Djibouti","population":"956985"},{"country":"Dominica","population":"73925"},{"country":"Dominican Republic","population":"10766998"},{"country":"East Timor","population":"1296311"},{"country":"Ecuador","population":"16624858"},{"country":"Egypt","population":"97553151"},{"country":"El Salvador","population":"6377853"},{"country":"England","population":null},{"country":"Equatorial Guinea","population":"1267689"},{"country":"Eritrea","population":"5068831"},{"country":"Estonia","population":"1309632"},{"country":"Ethiopia","population":"104957438"},{"country":"Falkland Islands","population":"2910"},{"country":"Faroe Islands","population":"49290"},{"country":"Fiji Islands","population":"905502"},{"country":"Finland","population":"5523231"},{"country":"France","population":"64979548"},{"country":"French Guiana","population":"282731"},{"country":"French Polynesia","population":"283007"},{"country":"French Southern territories","population":null},{"country":"Gabon","population":"2025137"},{"country":"Gambia","population":"2100568"},{"country":"Georgia","population":"3912061"},{"country":"Germany","population":"82114224"},{"country":"Ghana","population":"28833629"},{"country":"Gibraltar","population":"34571"},{"country":"Greece","population":"11159773"},{"country":"Greenland","population":"56480"},{"country":"Grenada","population":"107825"},{"country":"Guadeloupe","population":"449568"},{"country":"Guam","population":"164229"},{"country":"Guatemala","population":"16913503"},{"country":"Guinea","population":"12717176"},{"country":"Guinea-Bissau","population":"1861283"},{"country":"Guyana","population":"777859"},{"country":"Haiti","population":"10981229"},{"country":"Heard Island and McDonald Islands","population":null},{"country":"Holy See (Vatican City State)","population":"1000"},{"country":"Honduras","population":"9265067"},{"country":"Hong Kong","population":"7364883"},{"country":"Hungary","population":"9721559"},{"country":"Iceland","population":"335025"},{"country":"India","population":"1339180127"},{"country":"Indonesia","population":"263991379"},{"country":"Iran","population":"81162788"},{"country":"Iraq","population":"38274618"},{"country":"Ireland","population":"4761657"},{"country":"Israel","population":"8321570"},{"country":"Italy","population":"59359900"},{"country":"Ivory Coast","population":"24294750"},{"country":"Jamaica","population":"2890299"},{"country":"Japan","population":"127484450"},{"country":"Jordan","population":"9702353"},{"country":"Kazakhstan","population":"18204499"},{"country":"Kenya","population":"49699862"},{"country":"Kiribati","population":"116398"},{"country":"Kuwait","population":"4136528"},{"country":"Kyrgyzstan","population":"6045117"},{"country":"Laos","population":"6858160"},{"country":"Latvia","population":"1949670"},{"country":"Lebanon","population":"6082357"},{"country":"Lesotho","population":"2233339"},{"country":"Liberia","population":"4731906"},{"country":"Libyan Arab Jamahiriya","population":"5605000"},{"country":"Liechtenstein","population":"37922"},{"country":"Lithuania","population":"2890297"},{"country":"Luxembourg","population":"583455"},{"country":"Macao","population":"473000"},{"country":"North Macedonia","population":"2024000"},{"country":"Madagascar","population":"25570895"},{"country":"Malawi","population":"18622104"},{"country":"Malaysia","population":"31624264"},{"country":"Maldives","population":"436330"},{"country":"Mali","population":"18541980"},{"country":"Malta","population":"430835"},{"country":"Marshall Islands","population":"53127"},{"country":"Martinique","population":"384896"},{"country":"Mauritania","population":"4420184"},{"country":"Mauritius","population":"1265138"},{"country":"Mayotte","population":"253045"},{"country":"Mexico","population":"129163276"},{"country":"Micronesia, Federated States of","population":null},{"country":"Moldova","population":"4051212"},{"country":"Monaco","population":"38695"},{"country":"Mongolia","population":"3075647"},{"country":"Montserrat","population":"5177"},{"country":"Morocco","population":"35739580"},{"country":"Mozambique","population":"29668834"},{"country":"Myanmar","population":"53370609"},{"country":"Namibia","population":"2533794"},{"country":"Nauru","population":"11359"},{"country":"Nepal","population":"29304998"},{"country":"Netherlands","population":"17035938"},{"country":"Netherlands Antilles","population":"217000"},{"country":"New Caledonia","population":"276255"},{"country":"New Zealand","population":"4705818"},{"country":"Nicaragua","population":"6217581"},{"country":"Niger","population":"21477348"},{"country":"Nigeria","population":"190886311"},{"country":"Niue","population":"1618"},{"country":"Norfolk Island","population":"2000"},{"country":"North Korea","population":"25490965"},{"country":"Northern Ireland","population":null},{"country":"Northern Mariana Islands","population":"55144"},{"country":"Norway","population":"5305383"},{"country":"Oman","population":"4636262"},{"country":"Pakistan","population":"197015955"},{"country":"Palau","population":"21729"},{"country":"Palestine","population":"4920724"},{"country":"Panama","population":"4098587"},{"country":"Papua New Guinea","population":"8251162"},{"country":"Paraguay","population":"6811297"},{"country":"Peru","population":"32165485"},{"country":"Philippines","population":"104918090"},{"country":"Pitcairn","population":"50"},{"country":"Poland","population":"38170712"},{"country":"Portugal","population":"10329506"},{"country":"Puerto Rico","population":"3663131"},{"country":"Qatar","population":"2639211"},{"country":"Reunion","population":"699000"},{"country":"Romania","population":"19679306"},{"country":"Russian Federation","population":"143989754"},{"country":"Rwanda","population":"12208407"},{"country":"Saint Helena","population":"4049"},{"country":"Saint Kitts and Nevis","population":"55345"},{"country":"Saint Lucia","population":"178844"},{"country":"Saint Pierre and Miquelon","population":"6320"},{"country":"Saint Vincent and the Grenadines","population":"109897"},{"country":"Samoa","population":"196440"},{"country":"San Marino","population":"33400"},{"country":"Sao Tome and Principe","population":"204327"},{"country":"Saudi Arabia","population":"32938213"},{"country":"Scotland","population":null},{"country":"Senegal","population":"15850567"},{"country":"Seychelles","population":"94737"},{"country":"Sierra Leone","population":"7557212"},{"country":"Singapore","population":"5708844"},{"country":"Slovakia","population":"5447662"},{"country":"Slovenia","population":"2079976"},{"country":"Solomon Islands","population":"611343"},{"country":"Somalia","population":"14742523"},{"country":"South Africa","population":"56717156"},{"country":"South Georgia and the South Sandwich Islands","population":null},{"country":"South Korea","population":"50982212"},{"country":"South Sudan","population":"12575714"},{"country":"Spain","population":"46354321"},{"country":"SriLanka","population":"20876917"},{"country":"Sudan","population":"40533330"},{"country":"Suriname","population":"563402"},{"country":"Svalbard and Jan Mayen","population":"3200"},{"country":"Swaziland","population":"1008000"},{"country":"Sweden","population":"9910701"},{"country":"Switzerland","population":"8476005"},{"country":"Syria","population":"18269868"},{"country":"Tajikistan","population":"8921343"},{"country":"Tanzania","population":"57310019"},{"country":"Thailand","population":"69037513"},{"country":"The Democratic Republic of Congo","population":null},{"country":"Togo","population":"7797694"},{"country":"Tokelau","population":"1300"},{"country":"Tonga","population":"108020"},{"country":"Trinidad and Tobago","population":"1369125"},{"country":"Tunisia","population":"11532127"},{"country":"Turkey","population":"80745020"},{"country":"Turkmenistan","population":"5758075"},{"country":"Turks and Caicos Islands","population":"35446"},{"country":"Tuvalu","population":"11192"},{"country":"Uganda","population":"42862958"},{"country":"Ukraine","population":"44222947"},{"country":"United Arab Emirates","population":"9400145"},{"country":"United Kingdom","population":"66181585"},{"country":"United States","population":"324459463"},{"country":"United States Minor Outlying Islands","population":null},{"country":"Uruguay","population":"3456750"},{"country":"Uzbekistan","population":"31910641"},{"country":"Vanuatu","population":"276244"},{"country":"Venezuela","population":"31977065"},{"country":"Vietnam","population":"95540800"},{"country":"Virgin Islands, British","population":null},{"country":"Virgin Islands, U.S.","population":null},{"country":"Wales","population":null},{"country":"Wallis and Futuna","population":"11773"},{"country":"Western Sahara","population":"552628"},{"country":"Yemen","population":"28250420"},{"country":"Yugoslavia","population":"10640000"},{"country":"Zambia","population":"17094130"},{"country":"Zimbabwe","population":"16529904"}]'
    );
  },
  function(t, n, e) {
    'use strict';
    e.r(n);
    var o,
      a,
      i,
      r,
      u,
      l,
      s = {},
      p = [],
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function d(t, n) {
      for (var e in n) t[e] = n[e];
      return t;
    }
    function y(t) {
      var n = t.parentNode;
      n && n.removeChild(t);
    }
    function h(t, n, e) {
      var o,
        a = arguments,
        i = {};
      for (o in n) 'key' !== o && 'ref' !== o && (i[o] = n[o]);
      if (arguments.length > 3)
        for (e = [e], o = 3; o < arguments.length; o++) e.push(a[o]);
      if (
        (null != e && (i.children = e),
        'function' == typeof t && null != t.defaultProps)
      )
        for (o in t.defaultProps) void 0 === i[o] && (i[o] = t.defaultProps[o]);
      return f(t, i, n && n.key, n && n.ref);
    }
    function f(t, n, e, a) {
      var i = {
        type: t,
        props: n,
        key: e,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
      };
      return o.vnode && o.vnode(i), i;
    }
    function m(t) {
      return t.children;
    }
    function _(t, n) {
      (this.props = t), (this.context = n);
    }
    function g(t, n) {
      if (null == n) return t.__ ? g(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var e; n < t.__k.length; n++)
        if (null != (e = t.__k[n]) && null != e.__e) return e.__e;
      return 'function' == typeof t.type ? g(t) : null;
    }
    function b(t) {
      var n, e;
      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
          if (null != (e = t.__k[n]) && null != e.__e) {
            t.__e = t.__c.base = e.__e;
            break;
          }
        return b(t);
      }
    }
    function v(t) {
      ((!t.__d && (t.__d = !0) && a.push(t) && !i++) ||
        u !== o.debounceRendering) &&
        ((u = o.debounceRendering) || r)(S);
    }
    function S() {
      for (var t; (i = a.length); )
        (t = a.sort(function(t, n) {
          return t.__v.__b - n.__v.__b;
        })),
          (a = []),
          t.some(function(t) {
            var n, e, o, a, i, r;
            t.__d &&
              ((i = (a = (n = t).__v).__e),
              (r = n.__P) &&
                ((e = []),
                (o = O(
                  r,
                  a,
                  d({}, a),
                  n.__n,
                  void 0 !== r.ownerSVGElement,
                  null,
                  e,
                  null == i ? g(a) : i
                )),
                M(e, a),
                o != i && b(a)));
          });
    }
    function C(t, n, e, o, a, i, r, u, l) {
      var c,
        d,
        h,
        f,
        m,
        _,
        b,
        v = (e && e.__k) || p,
        S = v.length;
      if (
        (u == s && (u = null != i ? i[0] : S ? g(e, 0) : null),
        (c = 0),
        (n.__k = k(n.__k, function(e) {
          if (null != e) {
            if (
              ((e.__ = n),
              (e.__b = n.__b + 1),
              null === (h = v[c]) || (h && e.key == h.key && e.type === h.type))
            )
              v[c] = void 0;
            else
              for (d = 0; d < S; d++) {
                if ((h = v[d]) && e.key == h.key && e.type === h.type) {
                  v[d] = void 0;
                  break;
                }
                h = null;
              }
            if (
              ((f = O(t, e, (h = h || s), o, a, i, r, u, l)),
              (d = e.ref) &&
                h.ref != d &&
                (b || (b = []),
                h.ref && b.push(h.ref, null, e),
                b.push(d, e.__c || f, e)),
              null != f)
            ) {
              var p;
              if ((null == _ && (_ = f), void 0 !== e.__d))
                (p = e.__d), (e.__d = void 0);
              else if (i == h || f != u || null == f.parentNode) {
                t: if (null == u || u.parentNode !== t)
                  t.appendChild(f), (p = null);
                else {
                  for (m = u, d = 0; (m = m.nextSibling) && d < S; d += 2)
                    if (m == f) break t;
                  t.insertBefore(f, u), (p = u);
                }
                'option' == n.type && (t.value = '');
              }
              (u = void 0 !== p ? p : f.nextSibling),
                'function' == typeof n.type && (n.__d = u);
            } else u && h.__e == u && u.parentNode != t && (u = g(h));
          }
          return c++, e;
        })),
        (n.__e = _),
        null != i && 'function' != typeof n.type)
      )
        for (c = i.length; c--; ) null != i[c] && y(i[c]);
      for (c = S; c--; ) null != v[c] && D(v[c], v[c]);
      if (b) for (c = 0; c < b.length; c++) N(b[c], b[++c], b[++c]);
    }
    function k(t, n, e) {
      if ((null == e && (e = []), null == t || 'boolean' == typeof t))
        n && e.push(n(null));
      else if (Array.isArray(t))
        for (var o = 0; o < t.length; o++) k(t[o], n, e);
      else
        e.push(
          n
            ? n(
                'string' == typeof t || 'number' == typeof t
                  ? f(null, t, null, null)
                  : null != t.__e || null != t.__c
                  ? f(t.type, t.props, t.key, null)
                  : t
              )
            : t
        );
      return e;
    }
    function w(t, n, e) {
      '-' === n[0]
        ? t.setProperty(n, e)
        : (t[n] =
            'number' == typeof e && !1 === c.test(n)
              ? e + 'px'
              : null == e
              ? ''
              : e);
    }
    function x(t, n, e, o, a) {
      var i, r, u, l, s;
      if (
        (a
          ? 'className' === n && (n = 'class')
          : 'class' === n && (n = 'className'),
        'key' === n || 'children' === n)
      );
      else if ('style' === n)
        if (((i = t.style), 'string' == typeof e)) i.cssText = e;
        else {
          if (('string' == typeof o && ((i.cssText = ''), (o = null)), o))
            for (r in o) (e && r in e) || w(i, r, '');
          if (e) for (u in e) (o && e[u] === o[u]) || w(i, u, e[u]);
        }
      else
        'o' === n[0] && 'n' === n[1]
          ? ((l = n !== (n = n.replace(/Capture$/, ''))),
            (s = n.toLowerCase()),
            (n = (s in t ? s : n).slice(2)),
            e
              ? (o || t.addEventListener(n, I, l), ((t.l || (t.l = {}))[n] = e))
              : t.removeEventListener(n, I, l))
          : 'list' !== n &&
            'tagName' !== n &&
            'form' !== n &&
            'type' !== n &&
            'size' !== n &&
            !a &&
            n in t
          ? (t[n] = null == e ? '' : e)
          : 'function' != typeof e &&
            'dangerouslySetInnerHTML' !== n &&
            (n !== (n = n.replace(/^xlink:?/, ''))
              ? null == e || !1 === e
                ? t.removeAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    n.toLowerCase()
                  )
                : t.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    n.toLowerCase(),
                    e
                  )
              : null == e || (!1 === e && !/^ar/.test(n))
              ? t.removeAttribute(n)
              : t.setAttribute(n, e));
    }
    function I(t) {
      this.l[t.type](o.event ? o.event(t) : t);
    }
    function O(t, n, e, a, i, r, u, l, s) {
      var p,
        c,
        y,
        h,
        f,
        g,
        b,
        v,
        S,
        k,
        w = n.type;
      if (void 0 !== n.constructor) return null;
      (p = o.__b) && p(n);
      try {
        t: if ('function' == typeof w) {
          if (
            ((v = n.props),
            (S = (p = w.contextType) && a[p.__c]),
            (k = p ? (S ? S.props.value : p.__) : a),
            e.__c
              ? (b = (c = n.__c = e.__c).__ = c.__E)
              : ('prototype' in w && w.prototype.render
                  ? (n.__c = c = new w(v, k))
                  : ((n.__c = c = new _(v, k)),
                    (c.constructor = w),
                    (c.render = j)),
                S && S.sub(c),
                (c.props = v),
                c.state || (c.state = {}),
                (c.context = k),
                (c.__n = a),
                (y = c.__d = !0),
                (c.__h = [])),
            null == c.__s && (c.__s = c.state),
            null != w.getDerivedStateFromProps &&
              (c.__s == c.state && (c.__s = d({}, c.__s)),
              d(c.__s, w.getDerivedStateFromProps(v, c.__s))),
            (h = c.props),
            (f = c.state),
            y)
          )
            null == w.getDerivedStateFromProps &&
              null != c.componentWillMount &&
              c.componentWillMount(),
              null != c.componentDidMount && c.__h.push(c.componentDidMount);
          else {
            if (
              (null == w.getDerivedStateFromProps &&
                v !== h &&
                null != c.componentWillReceiveProps &&
                c.componentWillReceiveProps(v, k),
              !c.__e &&
                null != c.shouldComponentUpdate &&
                !1 === c.shouldComponentUpdate(v, c.__s, k))
            ) {
              for (
                c.props = v,
                  c.state = c.__s,
                  c.__d = !1,
                  c.__v = n,
                  n.__e = e.__e,
                  n.__k = e.__k,
                  c.__h.length && u.push(c),
                  p = 0;
                p < n.__k.length;
                p++
              )
                n.__k[p] && (n.__k[p].__ = n);
              break t;
            }
            null != c.componentWillUpdate && c.componentWillUpdate(v, c.__s, k),
              null != c.componentDidUpdate &&
                c.__h.push(function() {
                  c.componentDidUpdate(h, f, g);
                });
          }
          (c.context = k),
            (c.props = v),
            (c.state = c.__s),
            (p = o.__r) && p(n),
            (c.__d = !1),
            (c.__v = n),
            (c.__P = t),
            (p = c.render(c.props, c.state, c.context)),
            (n.__k =
              null != p && p.type == m && null == p.key
                ? p.props.children
                : Array.isArray(p)
                ? p
                : [p]),
            null != c.getChildContext && (a = d(d({}, a), c.getChildContext())),
            y ||
              null == c.getSnapshotBeforeUpdate ||
              (g = c.getSnapshotBeforeUpdate(h, f)),
            C(t, n, e, a, i, r, u, l, s),
            (c.base = n.__e),
            c.__h.length && u.push(c),
            b && (c.__E = c.__ = null),
            (c.__e = !1);
        } else n.__e = A(e.__e, n, e, a, i, r, u, s);
        (p = o.diffed) && p(n);
      } catch (t) {
        o.__e(t, n, e);
      }
      return n.__e;
    }
    function M(t, n) {
      o.__c && o.__c(n, t),
        t.some(function(n) {
          try {
            (t = n.__h),
              (n.__h = []),
              t.some(function(t) {
                t.call(n);
              });
          } catch (t) {
            o.__e(t, n.__v);
          }
        });
    }
    function A(t, n, e, o, a, i, r, u) {
      var l,
        c,
        d,
        y,
        h,
        f = e.props,
        m = n.props;
      if (((a = 'svg' === n.type || a), null != i))
        for (l = 0; l < i.length; l++)
          if (
            null != (c = i[l]) &&
            ((null === n.type ? 3 === c.nodeType : c.localName === n.type) ||
              t == c)
          ) {
            (t = c), (i[l] = null);
            break;
          }
      if (null == t) {
        if (null === n.type) return document.createTextNode(m);
        (t = a
          ? document.createElementNS('http://www.w3.org/2000/svg', n.type)
          : document.createElement(n.type, m.is && { is: m.is })),
          (i = null);
      }
      if (null === n.type) f !== m && t.data != m && (t.data = m);
      else if (n !== e) {
        if (
          (null != i && (i = p.slice.call(t.childNodes)),
          (d = (f = e.props || s).dangerouslySetInnerHTML),
          (y = m.dangerouslySetInnerHTML),
          !u)
        ) {
          if (f === s)
            for (f = {}, h = 0; h < t.attributes.length; h++)
              f[t.attributes[h].name] = t.attributes[h].value;
          (y || d) &&
            ((y && d && y.__html == d.__html) ||
              (t.innerHTML = (y && y.__html) || ''));
        }
        (function(t, n, e, o, a) {
          var i;
          for (i in e) i in n || x(t, i, null, e[i], o);
          for (i in n)
            (a && 'function' != typeof n[i]) ||
              'value' === i ||
              'checked' === i ||
              e[i] === n[i] ||
              x(t, i, n[i], e[i], o);
        })(t, m, f, a, u),
          (n.__k = n.props.children),
          y || C(t, n, e, o, 'foreignObject' !== n.type && a, i, r, s, u),
          u ||
            ('value' in m &&
              void 0 !== m.value &&
              m.value !== t.value &&
              (t.value = null == m.value ? '' : m.value),
            'checked' in m &&
              void 0 !== m.checked &&
              m.checked !== t.checked &&
              (t.checked = m.checked));
      }
      return t;
    }
    function N(t, n, e) {
      try {
        'function' == typeof t ? t(n) : (t.current = n);
      } catch (t) {
        o.__e(t, e);
      }
    }
    function D(t, n, e) {
      var a, i, r;
      if (
        (o.unmount && o.unmount(t),
        (a = t.ref) && ((a.current && a.current !== t.__e) || N(a, null, n)),
        e || 'function' == typeof t.type || (e = null != (i = t.__e)),
        (t.__e = t.__d = void 0),
        null != (a = t.__c))
      ) {
        if (a.componentWillUnmount)
          try {
            a.componentWillUnmount();
          } catch (t) {
            o.__e(t, n);
          }
        a.base = a.__P = null;
      }
      if ((a = t.__k)) for (r = 0; r < a.length; r++) a[r] && D(a[r], n, e);
      null != i && y(i);
    }
    function j(t, n, e) {
      return this.constructor(t, e);
    }
    function P(t, n, e) {
      var a, i, r;
      o.__ && o.__(t, n),
        (i = (a = e === l) ? null : (e && e.__k) || n.__k),
        (t = h(m, null, [t])),
        (r = []),
        O(
          n,
          ((a ? n : e || n).__k = t),
          i || s,
          s,
          void 0 !== n.ownerSVGElement,
          e && !a ? [e] : i ? null : p.slice.call(n.childNodes),
          r,
          e || s,
          a
        ),
        M(r, t);
    }
    (o = {
      __e: function(t, n) {
        for (var e, o; (n = n.__); )
          if ((e = n.__c) && !e.__)
            try {
              if (
                (e.constructor &&
                  null != e.constructor.getDerivedStateFromError &&
                  ((o = !0),
                  e.setState(e.constructor.getDerivedStateFromError(t))),
                null != e.componentDidCatch &&
                  ((o = !0), e.componentDidCatch(t)),
                o)
              )
                return v((e.__E = e));
            } catch (n) {
              t = n;
            }
        throw t;
      },
    }),
      (_.prototype.setState = function(t, n) {
        var e;
        (e =
          this.__s !== this.state ? this.__s : (this.__s = d({}, this.state))),
          'function' == typeof t && (t = t(e, this.props)),
          t && d(e, t),
          null != t && this.__v && (n && this.__h.push(n), v(this));
      }),
      (_.prototype.forceUpdate = function(t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), v(this));
      }),
      (_.prototype.render = m),
      (a = []),
      (i = 0),
      (r =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (l = s);
    var T = {};
    function U(t, n) {
      for (var e in n) t[e] = n[e];
      return t;
    }
    function E(t, n, e) {
      var o,
        a = /(?:\?([^#]*))?(#.*)?$/,
        i = t.match(a),
        r = {};
      if (i && i[1])
        for (var u = i[1].split('&'), l = 0; l < u.length; l++) {
          var s = u[l].split('=');
          r[decodeURIComponent(s[0])] = decodeURIComponent(
            s.slice(1).join('=')
          );
        }
      (t = B(t.replace(a, ''))), (n = B(n || ''));
      for (var p = Math.max(t.length, n.length), c = 0; c < p; c++)
        if (n[c] && ':' === n[c].charAt(0)) {
          var d = n[c].replace(/(^:|[+*?]+$)/g, ''),
            y = (n[c].match(/[+*?]+$/) || T)[0] || '',
            h = ~y.indexOf('+'),
            f = ~y.indexOf('*'),
            m = t[c] || '';
          if (!m && !f && (y.indexOf('?') < 0 || h)) {
            o = !1;
            break;
          }
          if (((r[d] = decodeURIComponent(m)), h || f)) {
            r[d] = t
              .slice(c)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (n[c] !== t[c]) {
          o = !1;
          break;
        }
      return (!0 === e.default || !1 !== o) && r;
    }
    function G(t, n) {
      return t.rank < n.rank ? 1 : t.rank > n.rank ? -1 : t.index - n.index;
    }
    function L(t, n) {
      return (
        (t.index = n),
        (t.rank = (function(t) {
          return t.props.default
            ? 0
            : ((n = t.props.path),
              B(n)
                .map(z)
                .join(''));
          var n;
        })(t)),
        t.props
      );
    }
    function B(t) {
      return t.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function z(t) {
      return ':' == t.charAt(0)
        ? 1 + '*+?'.indexOf(t.charAt(t.length - 1)) || 4
        : 5;
    }
    var R = null,
      F = [],
      K = [],
      W = {};
    function V() {
      var t;
      return (
        '' +
        ((t =
          R && R.location
            ? R.location
            : R && R.getCurrentLocation
            ? R.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : W).pathname || '') +
        (t.search || '')
      );
    }
    function H(t, n) {
      return (
        void 0 === n && (n = !1),
        'string' != typeof t && t.url && ((n = t.replace), (t = t.url)),
        (function(t) {
          for (var n = F.length; n--; ) if (F[n].canRoute(t)) return !0;
          return !1;
        })(t) &&
          (function(t, n) {
            void 0 === n && (n = 'push'),
              R && R[n]
                ? R[n](t)
                : 'undefined' != typeof history &&
                  history[n + 'State'] &&
                  history[n + 'State'](null, null, t);
          })(t, n ? 'replace' : 'push'),
        $(t)
      );
    }
    function $(t) {
      for (var n = !1, e = 0; e < F.length; e++)
        !0 === F[e].routeTo(t) && (n = !0);
      for (var o = K.length; o--; ) K[o](t);
      return n;
    }
    function J(t) {
      if (t && t.getAttribute) {
        var n = t.getAttribute('href'),
          e = t.getAttribute('target');
        if (n && n.match(/^\//g) && (!e || e.match(/^_?self$/i))) return H(n);
      }
    }
    function q(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button))
        return J(t.currentTarget || t.target || this), Q(t);
    }
    function Q(t) {
      return (
        t &&
          (t.stopImmediatePropagation && t.stopImmediatePropagation(),
          t.stopPropagation && t.stopPropagation(),
          t.preventDefault()),
        !1
      );
    }
    function Y(t) {
      if (
        !(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button)
      ) {
        var n = t.target;
        do {
          if (
            'A' === String(n.nodeName).toUpperCase() &&
            n.getAttribute('href')
          ) {
            if (n.hasAttribute('native')) return;
            if (J(n)) return Q(t);
          }
        } while ((n = n.parentNode));
      }
    }
    var Z = !1;
    var X = (function(t) {
      function n(n) {
        t.call(this, n),
          n.history && (R = n.history),
          (this.state = { url: n.url || V() }),
          Z ||
            ('function' == typeof addEventListener &&
              (R ||
                addEventListener('popstate', function() {
                  $(V());
                }),
              addEventListener('click', Y)),
            (Z = !0));
      }
      return (
        t && (n.__proto__ = t),
        (n.prototype = Object.create(t && t.prototype)),
        (n.prototype.constructor = n),
        (n.prototype.shouldComponentUpdate = function(t) {
          return (
            !0 !== t.static ||
            t.url !== this.props.url || t.onChange !== this.props.onChange
          );
        }),
        (n.prototype.canRoute = function(t) {
          var n = k(this.props.children);
          return this.getMatchingChildren(n, t, !1).length > 0;
        }),
        (n.prototype.routeTo = function(t) {
          this.setState({ url: t });
          var n = this.canRoute(t);
          return this.updating || this.forceUpdate(), n;
        }),
        (n.prototype.componentWillMount = function() {
          F.push(this), (this.updating = !0);
        }),
        (n.prototype.componentDidMount = function() {
          var t = this;
          R &&
            (this.unlisten = R.listen(function(n) {
              t.routeTo('' + (n.pathname || '') + (n.search || ''));
            })),
            (this.updating = !1);
        }),
        (n.prototype.componentWillUnmount = function() {
          'function' == typeof this.unlisten && this.unlisten(),
            F.splice(F.indexOf(this), 1);
        }),
        (n.prototype.componentWillUpdate = function() {
          this.updating = !0;
        }),
        (n.prototype.componentDidUpdate = function() {
          this.updating = !1;
        }),
        (n.prototype.getMatchingChildren = function(t, n, e) {
          return t
            .filter(L)
            .sort(G)
            .map(function(t) {
              var o = E(n, t.props.path, t.props);
              if (o) {
                if (!1 !== e) {
                  var a = { url: n, matches: o };
                  return (
                    U(a, o),
                    delete a.ref,
                    delete a.key,
                    (function(t, n) {
                      return (
                        (n = d(d({}, t.props), n)),
                        arguments.length > 2 &&
                          (n.children = p.slice.call(arguments, 2)),
                        f(t.type, n, n.key || t.key, n.ref || t.ref)
                      );
                    })(t, a)
                  );
                }
                return t;
              }
            })
            .filter(Boolean);
        }),
        (n.prototype.render = function(t, n) {
          var e = t.children,
            o = t.onChange,
            a = n.url,
            i = this.getMatchingChildren(k(e), a, !0),
            r = i[0] || null,
            u = this.previousUrl;
          return (
            a !== u &&
              ((this.previousUrl = a),
              'function' == typeof o &&
                o({
                  router: this,
                  url: a,
                  previous: u,
                  active: i,
                  current: r,
                })),
            r
          );
        }),
        n
      );
    })(_);
    (X.subscribers = K),
      (X.getCurrentUrl = V),
      (X.route = H),
      (X.Router = X),
      (X.Route = function(t) {
        return h(t.component, t);
      }),
      (X.Link = function(t) {
        return h('a', U({ onClick: q }, t));
      }),
      (X.exec = E);
    var tt = X;
    class nt extends _ {
      constructor() {
        super();
        const t = window.document.createElement('div');
        if (!t) throw new Error('could not add the chart to the DOM');
        this.state = { chartDiv: t };
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
        return h('div', { className: this.props.flexSize });
      }
    }
    const et = 'flex flex-col';
    function ot(t) {
      return 'number' == typeof t;
    }
    function at(t) {
      return 'string' == typeof t;
    }
    function it() {}
    function rt(t, n, e) {
      return Object.keys(t).reduce((e, o, a) => n(e, t[o], o, a, t), e);
    }
    function ut({ onChange: t, options: n, selected: e }) {
      return h(
        'select',
        { onChange: n => t(parseInt(n.target.value, 10)) },
        n.map((t, n) =>
          at(t)
            ? h(
                'option',
                e === n ? { value: n, selected: !0 } : { value: n },
                t
              )
            : h(
                'option',
                e === n ? { value: t.index, selected: !0 } : { value: t.index },
                t.name
              )
        )
      );
    }
    function lt({ onChange: t, onClick: n, options: e, selected: o }) {
      n = n || it;
      const a = t => n(parseInt(t.target.value, 10));
      return h(
        'select',
        {
          onChange: n =>
            t(
              (function(t) {
                let n = [];
                for (let e = 0; e < t.length; e += 1) {
                  const o = t[e];
                  o.selected && n.push(parseInt(o.value, 10));
                }
                return n;
              })(n.target.options)
            ),
          multiple: !0,
        },
        e.map((t, n) => {
          const e = n + (1e5 * Math.random()).toString(16);
          return at(t)
            ? o.indexOf(n) > -1
              ? h('option', { key: e, onClick: a, value: n, selected: !0 }, t)
              : h('option', { key: e, onClick: a, value: n }, t)
            : o.indexOf(t.index) > -1
            ? h(
                'option',
                { key: e, onClick: a, value: t.index, selected: !0 },
                t.name
              )
            : h('option', { key: e, onClick: a, value: t.index }, t.name);
        })
      );
    }
    function st({ onChange: t, ymdString: n }) {
      return h('input', {
        onChange: n => t(n.target.value),
        type: 'date',
        value: n,
      });
    }
    function pt({ classes: t, isDisabled: n, label: e, onClick: o }) {
      return h(
        'button',
        { className: t ? t.join(' ') : '', onClick: o, disabled: n },
        e
      );
    }
    function ct({
      classes: t,
      listenKeyUp: n,
      onChange: e,
      placeholder: o,
      value: a,
    }) {
      const i = t => e(t.target.value);
      return h('input', {
        className: t ? t.join(' ') : '',
        onChange: i,
        onKeyUp: n ? i : it,
        placeholder: o || '',
        type: 'text',
        value: a,
      });
    }
    function dt() {
      let t = !1;
      return (
        (function(n) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            n
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              n.substr(0, 4)
            )) &&
            (t = !0);
        })(navigator.userAgent || navigator.vendor || window.opera),
        t
      );
    }
    function yt(...t) {
      console.log('COVID-19', ...t);
    }
    class ht extends _ {
      constructor() {
        super(), (this.state = { filter: '', options: [] });
      }
      getOptions(t, n) {
        return n
          ? t.options.filter(t =>
              at(t)
                ? t.toLowerCase().indexOf(n.toLowerCase()) > -1
                : t.name.toLowerCase().indexOf(n.toLowerCase()) > -1
            )
          : this.props.options;
      }
      updateFilter(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            filter: t,
            options: this.getOptions(this.props, t),
          })
        );
      }
      clearFilter() {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            filter: '',
            options: this.props.options,
          })
        ),
          this.props.onClear();
      }
      componentDidMount() {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            options: this.getOptions(this.props, this.state.filter),
          })
        );
      }
      componentWillReceiveProps(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            options: this.getOptions(t, this.state.filter),
          })
        );
      }
      render() {
        const t = this.props.classes ? this.props.classes.join(' ') : '',
          n = t => {
            this.props.onChange(t);
          };
        return h(
          'div',
          { className: t.length ? `${t} ${et}` : et },
          h(
            'div',
            { className: 'flex' },
            dt()
              ? ''
              : h(ct, {
                  listenKeyUp: !0,
                  onChange: this.updateFilter.bind(this),
                  placeholder: 'filter',
                  value: this.state.filter,
                }),
            h(pt, { label: '✗', onClick: this.clearFilter.bind(this) })
          ),
          dt()
            ? h(lt, {
                onChange: n,
                options: this.state.options,
                selected: this.props.selected,
              })
            : h(lt, {
                onChange: n,
                onClick: t => {
                  this.props.onDeselect(t);
                },
                options: this.state.options,
                selected: this.props.selected,
              })
        );
      }
    }
    const ft = ['Active', 'Confirmed', 'Deaths', 'Recoveries'],
      mt = ['By date', 'By first confirmed', 'By first 100 confirmed'],
      _t = ['Linear', 'Logarithmic'],
      gt = ['Show States', 'Hide States'],
      bt = ['By Value', 'Percent'];
    function vt({ countries: t, onChange: n, reload: e, state: o }) {
      return h(
        'section',
        { className: 'flex flex-item-20' },
        h(
          'section',
          { className: et },
          h(ut, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { mode: t }));
            },
            options: mt,
            selected: o.mode,
          }),
          h(ut, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { scaleType: t }));
            },
            options: _t,
            selected: o.scaleType,
          }),
          h(st, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { startDate: t }));
            },
            ymdString: o.startDate,
          })
        ),
        h(lt, {
          onChange: function(t) {
            n(Object.assign(Object.assign({}, o), { dataSetIndexes: t }));
          },
          options: ft,
          selected: o.dataSetIndexes,
        }),
        h(ht, {
          classes: 0 === o.countryIndexes.length ? ['highlight'] : [],
          onChange: it,
          onClear: function() {
            n(Object.assign(Object.assign({}, o), { countryIndexes: [] }));
          },
          onDeselect: function(t) {
            if (-1 === o.countryIndexes.indexOf(t))
              return void n(
                Object.assign(Object.assign({}, o), {
                  countryIndexes: o.countryIndexes.concat([t]),
                })
              );
            const e = o.countryIndexes.filter(n => n !== t);
            n(Object.assign(Object.assign({}, o), { countryIndexes: e }));
          },
          options: t.filter(
            ((a = this.props.state.showStates),
            t =>
              !1 === a ||
              !(t.name.indexOf(',') > -1) || t.name.indexOf(', Total') > -1)
          ),
          selected: o.countryIndexes,
        }),
        h(
          'div',
          { className: et },
          h(ut, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { showStates: 0 !== t }));
            },
            options: gt,
            selected: o.showStates ? 1 : 0,
          }),
          h(ut, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { byMetric: t }));
            },
            options: bt,
            selected: o.byMetric,
          }),
          h(pt, { label: 'Reload', onClick: e })
        )
      );
      var a;
    }
    function St({
      classes: t,
      isDisabled: n,
      labelFalse: e,
      labelTrue: o,
      onClick: a,
      state: i,
    }) {
      return h(pt, {
        classes: t,
        isDisabled: n,
        label: i ? o : e,
        onClick: () => a(!i),
      });
    }
    class Ct extends _ {
      constructor() {
        super(), (this.state = { isConfigOpen: !1 });
      }
      useDays() {
        return 0 !== this.props.state.mode;
      }
      toggleConfig(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { isConfigOpen: t })
        );
      }
      render() {
        const t =
          !1 === this.state.isConfigOpen &&
          0 === this.props.state.countryIndexes.length
            ? ['green']
            : [];
        return h(
          'section',
          { className: `full-size ${et}` },
          h(nt, {
            flexSize: this.state.isConfigOpen ? 'flex-item-60' : 'flex-item-95',
            series: this.props.currentSeries,
            scaleType: this.props.state.scaleType,
            useDays: this.useDays(),
          }),
          h(St, {
            classes: t,
            labelTrue: '✗ Enlarge Chart',
            labelFalse: '⚙️ Configure Chart',
            onClick: this.toggleConfig.bind(this),
            state: this.state.isConfigOpen,
          }),
          this.state.isConfigOpen
            ? h(vt, {
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
    var kt = e(0);
    const wt = Object.freeze({
        AL: 'Alabama',
        AK: 'Alaska',
        AS: 'American Samoa',
        AZ: 'Arizona',
        AR: 'Arkansas',
        CA: 'California',
        CO: 'Colorado',
        CT: 'Connecticut',
        DE: 'Delaware',
        'D.C.': 'District Of Columbia',
        FM: 'Federated States Of Micronesia',
        FL: 'Florida',
        GA: 'Georgia',
        GU: 'Guam',
        HI: 'Hawaii',
        ID: 'Idaho',
        IL: 'Illinois',
        IN: 'Indiana',
        IA: 'Iowa',
        KS: 'Kansas',
        KY: 'Kentucky',
        LA: 'Louisiana',
        ME: 'Maine',
        MH: 'Marshall Islands',
        MD: 'Maryland',
        MA: 'Massachusetts',
        MI: 'Michigan',
        MN: 'Minnesota',
        MS: 'Mississippi',
        MO: 'Missouri',
        MT: 'Montana',
        NE: 'Nebraska',
        NV: 'Nevada',
        NH: 'New Hampshire',
        NJ: 'New Jersey',
        NM: 'New Mexico',
        NY: 'New York',
        NC: 'North Carolina',
        ND: 'North Dakota',
        MP: 'Northern Mariana Islands',
        OH: 'Ohio',
        OK: 'Oklahoma',
        OR: 'Oregon',
        PW: 'Palau',
        PA: 'Pennsylvania',
        PR: 'Puerto Rico',
        RI: 'Rhode Island',
        SC: 'South Carolina',
        SD: 'South Dakota',
        TN: 'Tennessee',
        TX: 'Texas',
        UT: 'Utah',
        VT: 'Vermont',
        VI: 'Virgin Islands',
        VA: 'Virginia',
        WA: 'Washington',
        WV: 'West Virginia',
        WI: 'Wisconsin',
        WY: 'Wyoming',
      }),
      xt = Object.freeze({
        'Congo (Kinshasa)': 'The Democratic Republic of Congo',
        "Cote d'Ivoire": 'Ivory Coast',
        Czechia: 'Czech Republic',
        Eswatini: 'Swaziland',
        'Holy See': 'Holy See (Vatican City State)',
        'Republic of the Congo': 'Congo',
        Russia: 'Russian Federation',
        'Sri Lanka': 'SriLanka',
        'The Bahamas': 'Bahamas',
        'The Gambia': 'Gambia',
        US: 'United States',
      }),
      It = Object.freeze({
        'Congo (Brazzaville)': 18e5,
        'Cruise Ship': 700,
        Guernsey: 67052,
        Jersey: 97857,
        Kosovo: 1831e3,
        Montenegro: 613219,
        Serbia: 7022e3,
        'Taiwan*': 2378e4,
      }),
      Ot = (kt || []).reduce(
        (t, n) => ((t[n.country] = parseInt(n.population, 10)), t),
        {}
      ),
      Mt = [
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
      ];
    function At() {
      return Promise.all(Mt.map(t => fetch(t)))
        .then(Dt)
        .then(Ut)
        .then(Gt)
        .then(Lt)
        .then(Bt)
        .then(zt)
        .then(Rt);
    }
    function Nt(t) {
      let n = Ot[t];
      return n || ((n = Ot[xt[t]]), n || ((n = It[t]), n || 1));
    }
    function Dt(t) {
      return Promise.all(t.map(t => t.text()));
    }
    function jt(t) {
      const n = t.split(''),
        e = { buffer: '', isEscape: !1, isInQuote: !1 },
        o = () => {
          e.isEscape ? (e.isEscape = !1) : (e.isEscape = !0);
        };
      return n.reduce(
        (t, n, a, i) =>
          '"' === n
            ? (e.isEscape
                ? ((e.buffer += n), o())
                : e.isInQuote
                ? (e.isInQuote = !1)
                : (e.isInQuote = !0),
              t)
            : '\\' === n
            ? (e.isEscape ? ((e.buffer += n), o()) : o(), t)
            : ',' === n
            ? (e.isInQuote
                ? (e.buffer += n)
                : (t.push(e.buffer), (e.buffer = '')),
              t)
            : ((e.buffer += n),
              a === i.length - 1 && (t.push(e.buffer), (e.buffer = '')),
              t),
        []
      );
    }
    function Pt(t) {
      const n = t[1],
        [e, o] = (function(t) {
          if (t.indexOf(',') > -1) {
            const n = t.split(',').filter(Boolean);
            return [n[0].trim(), n[1].trim()];
          }
          return ['', t];
        })(t[0]);
      return {
        country: n,
        locale: e,
        state: o,
        timeSeries: t.slice(4).map(t => parseInt(t, 10)),
      };
    }
    function Tt(t) {
      const n = t.split('\n');
      return [
        (function(t) {
          return t
            .split(',')
            .slice(4)
            .map(t => new Date(t));
        })(n[0]),
        n
          .slice(1)
          .map(jt)
          .map(Pt),
      ];
    }
    function Ut(t) {
      return t.map(Tt);
    }
    function Et(t) {
      const n = {};
      return (
        t.forEach(
          (function(t) {
            return n => {
              const e = e => {
                const o = t[e] || new Array(n.timeSeries.length).fill(0);
                n.timeSeries.forEach((t, n) => {
                  o[n] += t;
                }),
                  (t[e] = o);
              };
              if (
                (e('World'),
                n.state &&
                  !n.locale &&
                  ('US' === n.country
                    ? (e(`${n.country}.${n.state}`), e(n.country))
                    : e(n.country)),
                n.locale)
              )
                if ('US' === n.country) {
                  const t = wt[n.state];
                  t
                    ? (e(`${n.country}.${t}`), e(n.country))
                    : yt(
                        'US state ',
                        n.state,
                        `(${n.locale}) not found in map`
                      );
                } else yt('Non US locale', n.country, n.state, n.locale);
            };
          })(n)
        ),
        (function(t, n) {
          return rt(
            t,
            (t, n, e) => {
              const o = e.split('.').filter(Boolean);
              return (
                o.length < 1 ||
                  t.push({
                    country: o[0],
                    locale: '',
                    state: o[1] || 'Total',
                    timeSeries: n,
                  }),
                t
              );
            },
            []
          ).concat(
            n.filter(t => 'US' !== t.country || (!t.state && !t.locale))
          );
        })(n, t)
      );
    }
    function Gt(t) {
      return t.map(t => {
        const [n, e] = t;
        return [n, Et(e)];
      });
    }
    function Lt(t) {
      return t.map(([t, n]) => [
        t,
        n.sort((t, n) =>
          t.country < n.country
            ? -1
            : t.country > n.country
            ? 1
            : t.state < n.state
            ? -1
            : t.state > n.state
            ? 1
            : t.locale < n.locale
            ? -1
            : t.locale > n.locale
            ? 1
            : 0
        ),
      ]);
    }
    function Bt(t) {
      return [
        [
          t[0][0],
          t[0][1].map((n, e) => ({
            country: n.country,
            locale: n.locale,
            state: n.state,
            timeSeries: n.timeSeries.map(
              (n, o) => n - t[1][1][e].timeSeries[o] - t[2][1][e].timeSeries[o]
            ),
          })),
        ],
      ].concat(t);
    }
    function zt(t) {
      return {
        countries: t[0][1]
          .reduce((t, n, e) => {
            if (n.locale) return null;
            const o = n.state ? n.country + ', ' + n.state : n.country;
            return t.push({ index: e, name: o }), t;
          }, [])
          .filter(Boolean),
        dataSets: t,
      };
    }
    function Rt({ countries: t, dataSets: n }) {
      const e = n.map(([t, n], e) => {
        const o = (function(t) {
            switch (t) {
              case 0:
                return '😷';
              case 1:
                return '✔';
              case 2:
                return '☠';
              default:
                return '😊';
            }
          })(e),
          a = [],
          i = [];
        for (let e = 1; e < n.length; e += 1) {
          let r = [],
            u = [],
            l = n[e],
            s = o + ' ' + l.country + (l.state ? `, ${l.state}` : '');
          for (let n = 0; n < l.timeSeries.length; n += 1) {
            const e = Nt(l.country);
            r.push({ index: n, x: new Date(t[n]), y: l.timeSeries[n] }),
              (l.state && 'Total' !== l.state) ||
                u.push({
                  index: n,
                  x: new Date(t[n]),
                  y: (l.timeSeries[n] / e) * 100,
                });
          }
          a.push({ name: s, points: r }), i.push({ name: s, points: u });
        }
        return [a, i];
      });
      return { countries: t, dataSets: n, points: e };
    }
    function Ft(t) {
      const n = new Date(t.lineGraphState.startDate);
      return t.dataPromise.then(({ countries: e, dataSets: o, points: a }) => ({
        countries: e,
        series: t.lineGraphState.dataSetIndexes.reduce(
          (e, i) =>
            a[i][t.lineGraphState.byMetric].reduce((e, a, i) => {
              const r = (function(t, n, e, o, a) {
                switch (t.lineGraphState.mode) {
                  case 1:
                    return Kt(t, n, e, o, a, 1);
                  case 2:
                    return Kt(t, n, e, o, a, 100);
                  default:
                    return (function(t, n, e, o) {
                      if (t.lineGraphState.countryIndexes.indexOf(o) > -1)
                        return {
                          name: n.name,
                          points: n.points
                            .map(t => (t.x > e ? t : null))
                            .filter(Boolean),
                        };
                    })(t, n, a, e);
                }
              })(t, a, i + 1, o[0][1][i + 1], n);
              return r && e.push(r), e;
            }, e),
          []
        ),
      }));
    }
    function Kt(t, n, e, o, a, i) {
      if (t.lineGraphState.countryIndexes.indexOf(e) > -1) {
        let t = 0;
        return {
          name: n.name,
          points: n.points
            .map((n, e) => {
              if (n.x > a) {
                if (o.timeSeries[n.index] >= i) {
                  const e = t;
                  return (t += 1), { x: e, y: n.y };
                }
                return null;
              }
              return null;
            })
            .filter(Boolean),
        };
      }
    }
    const Wt = [];
    function Vt() {
      if (window.localStorage) {
        const t = window.localStorage.getItem('state');
        if (t)
          try {
            const n = JSON.parse(t);
            return n
              ? !1 ===
                (function(t) {
                  if (!t) return !1;
                  if (!1 === Array.isArray(t.countries)) return !1;
                  if (!1 === Array.isArray(t.currentSeries)) return !1;
                  return (function(t) {
                    if (!t) return !1;
                    if (!1 === ot(t.byMetric)) return !1;
                    if (!1 === Array.isArray(t.countryIndexes)) return !1;
                    if (!1 === Array.isArray(t.dataSetIndexes)) return !1;
                    if (!1 === ot(t.mode)) return !1;
                    if ('boolean' != typeof t.showStates) return !1;
                    if (!1 === at(t.startDate)) return !1;
                    return !0;
                  })(t.lineGraphState);
                })(n)
                ? (yt('Upgrade: Wiping old state'),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, n), { dataPromise: At() })
              : null;
          } catch (t) {
            return (
              yt('Failed to parse saved state, resetting localStorage'),
              window.localStorage.setItem('state', ''),
              null
            );
          }
      }
      return null;
    }
    class Ht extends _ {
      constructor() {
        super();
        let t = Vt();
        t ||
          (yt('No existing state'),
          (t = {
            countries: [],
            currentSeries: [],
            dataPromise: At(),
            lineGraphState: {
              dataSetIndexes: [0],
              byMetric: 0,
              countryIndexes: Wt,
              mode: 2,
              scaleType: 0,
              showStates: !1,
              startDate: '2019-12-26',
            },
          })),
          (this.state = t),
          this.selectAndUpdate();
      }
      updateSelectState({ countries: t, series: n }) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            countries: t,
            currentSeries: n,
          })
        );
      }
      selectAndUpdate() {
        this.state.dataPromise
          .then(() => Ft(this.state))
          .then(this.updateSelectState.bind(this))
          .then(() => {
            return (
              (t = this.state),
              void (
                window.localStorage &&
                window.localStorage.setItem(
                  'state',
                  JSON.stringify(
                    Object.assign(Object.assign({}, t), { dataPromise: void 0 })
                  )
                )
              )
            );
            var t;
          });
      }
      lineGraphState(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { lineGraphState: t })
        ),
          this.selectAndUpdate();
      }
      reload() {
        this.setState({
          dataPromise: At().then(t => (this.selectAndUpdate(), t)),
        });
      }
      render() {
        return h(
          tt,
          null,
          h(Ct, {
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
      const t = window.document.createElement('section');
      if (((t.className = `full-size ${et}`), !t))
        throw new Error('Could not bootstrap the application');
      window.document.body.appendChild(t), (n = t), P(h(Ht, null), n);
      var n;
    })();
  },
]);
