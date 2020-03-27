!(function(t) {
  var e = {};
  function n(a) {
    if (e[a]) return e[a].exports;
    var o = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, a) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            a,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return a;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 2));
})([
  function(t) {
    t.exports = JSON.parse(
      '[{"country":"Afghanistan","population":"35530081"},{"country":"Albania","population":"2930187"},{"country":"Algeria","population":"41318142"},{"country":"American Samoa","population":"55641"},{"country":"Andorra","population":"76965"},{"country":"Angola","population":"29784193"},{"country":"Anguilla","population":"14909"},{"country":"Antarctica","population":null},{"country":"Antigua and Barbuda","population":"102012"},{"country":"Argentina","population":"44271041"},{"country":"Armenia","population":"2930450"},{"country":"Aruba","population":"105264"},{"country":"Australia","population":"24450561"},{"country":"Austria","population":"8735453"},{"country":"Azerbaijan","population":"9827589"},{"country":"Bahamas","population":"395361"},{"country":"Bahrain","population":"1492584"},{"country":"Bangladesh","population":"164669751"},{"country":"Barbados","population":"285719"},{"country":"Belarus","population":"9468338"},{"country":"Belgium","population":"11429336"},{"country":"Belize","population":"374681"},{"country":"Benin","population":"11175692"},{"country":"Bermuda","population":"61349"},{"country":"Bhutan","population":"807610"},{"country":"Bolivia","population":"11051600"},{"country":"Bosnia and Herzegovina","population":"3507017"},{"country":"Botswana","population":"2291661"},{"country":"Bouvet Island","population":null},{"country":"Brazil","population":"209288278"},{"country":"British Indian Ocean Territory","population":null},{"country":"Brunei","population":"428697"},{"country":"Bulgaria","population":"7084571"},{"country":"Burkina Faso","population":"19193382"},{"country":"Burundi","population":"10864245"},{"country":"Cambodia","population":"16005373"},{"country":"Cameroon","population":"24053727"},{"country":"Canada","population":"36624199"},{"country":"Cape Verde","population":"546388"},{"country":"Cayman Islands","population":"61559"},{"country":"Central African Republic","population":"4659080"},{"country":"Chad","population":"14899994"},{"country":"Chile","population":"18054726"},{"country":"China","population":"1409517397"},{"country":"Christmas Island","population":"2500"},{"country":"Cocos (Keeling) Islands","population":"600"},{"country":"Colombia","population":"49065615"},{"country":"Comoros","population":"813912"},{"country":"Congo","population":"5260750"},{"country":"Cook Islands","population":"17380"},{"country":"Costa Rica","population":"4905769"},{"country":"Croatia","population":"4189353"},{"country":"Cuba","population":"11484636"},{"country":"Cyprus","population":"1179551"},{"country":"Czech Republic","population":"10618303"},{"country":"Denmark","population":"5733551"},{"country":"Djibouti","population":"956985"},{"country":"Dominica","population":"73925"},{"country":"Dominican Republic","population":"10766998"},{"country":"East Timor","population":"1296311"},{"country":"Ecuador","population":"16624858"},{"country":"Egypt","population":"97553151"},{"country":"El Salvador","population":"6377853"},{"country":"England","population":null},{"country":"Equatorial Guinea","population":"1267689"},{"country":"Eritrea","population":"5068831"},{"country":"Estonia","population":"1309632"},{"country":"Ethiopia","population":"104957438"},{"country":"Falkland Islands","population":"2910"},{"country":"Faroe Islands","population":"49290"},{"country":"Fiji Islands","population":"905502"},{"country":"Finland","population":"5523231"},{"country":"France","population":"64979548"},{"country":"French Guiana","population":"282731"},{"country":"French Polynesia","population":"283007"},{"country":"French Southern territories","population":null},{"country":"Gabon","population":"2025137"},{"country":"Gambia","population":"2100568"},{"country":"Georgia","population":"3912061"},{"country":"Germany","population":"82114224"},{"country":"Ghana","population":"28833629"},{"country":"Gibraltar","population":"34571"},{"country":"Greece","population":"11159773"},{"country":"Greenland","population":"56480"},{"country":"Grenada","population":"107825"},{"country":"Guadeloupe","population":"449568"},{"country":"Guam","population":"164229"},{"country":"Guatemala","population":"16913503"},{"country":"Guinea","population":"12717176"},{"country":"Guinea-Bissau","population":"1861283"},{"country":"Guyana","population":"777859"},{"country":"Haiti","population":"10981229"},{"country":"Heard Island and McDonald Islands","population":null},{"country":"Holy See (Vatican City State)","population":"1000"},{"country":"Honduras","population":"9265067"},{"country":"Hong Kong","population":"7364883"},{"country":"Hungary","population":"9721559"},{"country":"Iceland","population":"335025"},{"country":"India","population":"1339180127"},{"country":"Indonesia","population":"263991379"},{"country":"Iran","population":"81162788"},{"country":"Iraq","population":"38274618"},{"country":"Ireland","population":"4761657"},{"country":"Israel","population":"8321570"},{"country":"Italy","population":"59359900"},{"country":"Ivory Coast","population":"24294750"},{"country":"Jamaica","population":"2890299"},{"country":"Japan","population":"127484450"},{"country":"Jordan","population":"9702353"},{"country":"Kazakhstan","population":"18204499"},{"country":"Kenya","population":"49699862"},{"country":"Kiribati","population":"116398"},{"country":"Kuwait","population":"4136528"},{"country":"Kyrgyzstan","population":"6045117"},{"country":"Laos","population":"6858160"},{"country":"Latvia","population":"1949670"},{"country":"Lebanon","population":"6082357"},{"country":"Lesotho","population":"2233339"},{"country":"Liberia","population":"4731906"},{"country":"Libyan Arab Jamahiriya","population":"5605000"},{"country":"Liechtenstein","population":"37922"},{"country":"Lithuania","population":"2890297"},{"country":"Luxembourg","population":"583455"},{"country":"Macao","population":"473000"},{"country":"North Macedonia","population":"2024000"},{"country":"Madagascar","population":"25570895"},{"country":"Malawi","population":"18622104"},{"country":"Malaysia","population":"31624264"},{"country":"Maldives","population":"436330"},{"country":"Mali","population":"18541980"},{"country":"Malta","population":"430835"},{"country":"Marshall Islands","population":"53127"},{"country":"Martinique","population":"384896"},{"country":"Mauritania","population":"4420184"},{"country":"Mauritius","population":"1265138"},{"country":"Mayotte","population":"253045"},{"country":"Mexico","population":"129163276"},{"country":"Micronesia, Federated States of","population":null},{"country":"Moldova","population":"4051212"},{"country":"Monaco","population":"38695"},{"country":"Mongolia","population":"3075647"},{"country":"Montserrat","population":"5177"},{"country":"Morocco","population":"35739580"},{"country":"Mozambique","population":"29668834"},{"country":"Myanmar","population":"53370609"},{"country":"Namibia","population":"2533794"},{"country":"Nauru","population":"11359"},{"country":"Nepal","population":"29304998"},{"country":"Netherlands","population":"17035938"},{"country":"Netherlands Antilles","population":"217000"},{"country":"New Caledonia","population":"276255"},{"country":"New Zealand","population":"4705818"},{"country":"Nicaragua","population":"6217581"},{"country":"Niger","population":"21477348"},{"country":"Nigeria","population":"190886311"},{"country":"Niue","population":"1618"},{"country":"Norfolk Island","population":"2000"},{"country":"North Korea","population":"25490965"},{"country":"Northern Ireland","population":null},{"country":"Northern Mariana Islands","population":"55144"},{"country":"Norway","population":"5305383"},{"country":"Oman","population":"4636262"},{"country":"Pakistan","population":"197015955"},{"country":"Palau","population":"21729"},{"country":"Palestine","population":"4920724"},{"country":"Panama","population":"4098587"},{"country":"Papua New Guinea","population":"8251162"},{"country":"Paraguay","population":"6811297"},{"country":"Peru","population":"32165485"},{"country":"Philippines","population":"104918090"},{"country":"Pitcairn","population":"50"},{"country":"Poland","population":"38170712"},{"country":"Portugal","population":"10329506"},{"country":"Puerto Rico","population":"3663131"},{"country":"Qatar","population":"2639211"},{"country":"Reunion","population":"699000"},{"country":"Romania","population":"19679306"},{"country":"Russian Federation","population":"143989754"},{"country":"Rwanda","population":"12208407"},{"country":"Saint Helena","population":"4049"},{"country":"Saint Kitts and Nevis","population":"55345"},{"country":"Saint Lucia","population":"178844"},{"country":"Saint Pierre and Miquelon","population":"6320"},{"country":"Saint Vincent and the Grenadines","population":"109897"},{"country":"Samoa","population":"196440"},{"country":"San Marino","population":"33400"},{"country":"Sao Tome and Principe","population":"204327"},{"country":"Saudi Arabia","population":"32938213"},{"country":"Scotland","population":null},{"country":"Senegal","population":"15850567"},{"country":"Seychelles","population":"94737"},{"country":"Sierra Leone","population":"7557212"},{"country":"Singapore","population":"5708844"},{"country":"Slovakia","population":"5447662"},{"country":"Slovenia","population":"2079976"},{"country":"Solomon Islands","population":"611343"},{"country":"Somalia","population":"14742523"},{"country":"South Africa","population":"56717156"},{"country":"South Georgia and the South Sandwich Islands","population":null},{"country":"South Korea","population":"50982212"},{"country":"South Sudan","population":"12575714"},{"country":"Spain","population":"46354321"},{"country":"SriLanka","population":"20876917"},{"country":"Sudan","population":"40533330"},{"country":"Suriname","population":"563402"},{"country":"Svalbard and Jan Mayen","population":"3200"},{"country":"Swaziland","population":"1008000"},{"country":"Sweden","population":"9910701"},{"country":"Switzerland","population":"8476005"},{"country":"Syria","population":"18269868"},{"country":"Tajikistan","population":"8921343"},{"country":"Tanzania","population":"57310019"},{"country":"Thailand","population":"69037513"},{"country":"The Democratic Republic of Congo","population":null},{"country":"Togo","population":"7797694"},{"country":"Tokelau","population":"1300"},{"country":"Tonga","population":"108020"},{"country":"Trinidad and Tobago","population":"1369125"},{"country":"Tunisia","population":"11532127"},{"country":"Turkey","population":"80745020"},{"country":"Turkmenistan","population":"5758075"},{"country":"Turks and Caicos Islands","population":"35446"},{"country":"Tuvalu","population":"11192"},{"country":"Uganda","population":"42862958"},{"country":"Ukraine","population":"44222947"},{"country":"United Arab Emirates","population":"9400145"},{"country":"United Kingdom","population":"66181585"},{"country":"United States","population":"324459463"},{"country":"United States Minor Outlying Islands","population":null},{"country":"Uruguay","population":"3456750"},{"country":"Uzbekistan","population":"31910641"},{"country":"Vanuatu","population":"276244"},{"country":"Venezuela","population":"31977065"},{"country":"Vietnam","population":"95540800"},{"country":"Virgin Islands, British","population":null},{"country":"Virgin Islands, U.S.","population":null},{"country":"Wales","population":null},{"country":"Wallis and Futuna","population":"11773"},{"country":"Western Sahara","population":"552628"},{"country":"Yemen","population":"28250420"},{"country":"Yugoslavia","population":"10640000"},{"country":"Zambia","population":"17094130"},{"country":"Zimbabwe","population":"16529904"}]'
    );
  },
  function(t) {
    t.exports = JSON.parse(
      '[{"country":"Afghanistan","density":"46.8"},{"country":"Albania","density":"101.23"},{"country":"Algeria","density":"16.46"},{"country":"American Samoa","density":"275.83"},{"country":"Andorra","density":"168.55"},{"country":"Angola","density":"17.22"},{"country":"Anguilla","density":null},{"country":"Antarctica","density":null},{"country":"Antigua and Barbuda","density":"204.51"},{"country":"Argentina","density":"15.14"},{"country":"Armenia","density":"104.55"},{"country":"Aruba","density":"571.73"},{"country":"Australia","density":"3.01"},{"country":"Austria","density":"102.83"},{"country":"Azerbaijan","density":"113.92"},{"country":"Bahamas","density":null},{"country":"Bahrain","density":"1"},{"country":"Bangladesh","density":"1"},{"country":"Barbados","density":"661.96"},{"country":"Belarus","density":"46.65"},{"country":"Belgium","density":"369.72"},{"country":"Belize","density":"14.55"},{"country":"Benin","density":"91.55"},{"country":"Bermuda","density":"1"},{"country":"Bhutan","density":"19.78"},{"country":"Bolivia","density":"9.85"},{"country":"Bosnia and Herzegovina","density":"75.08"},{"country":"Botswana","density":"3.57"},{"country":"Bouvet Island","density":null},{"country":"Brazil","density":"23.97"},{"country":"British Indian Ocean Territory","density":null},{"country":"Brunei","density":null},{"country":"Bulgaria","density":"66.92"},{"country":"Burkina Faso","density":"61.9"},{"country":"Burundi","density":"395.74"},{"country":"Cambodia","density":"85.74"},{"country":"Cameroon","density":"47.08"},{"country":"Canada","density":"3.87"},{"country":"Cape Verde","density":null},{"country":"Cayman Islands","density":"243.48"},{"country":"Central African Republic","density":"7.41"},{"country":"Chad","density":"10.19"},{"country":"Chile","density":"23.7"},{"country":"China","density":"144.58"},{"country":"Christmas Island","density":null},{"country":"Cocos (Keeling) Islands","density":null},{"country":"Colombia","density":"43.55"},{"country":"Comoros","density":"394.9"},{"country":"Congo","density":null},{"country":"Cook Islands","density":null},{"country":"Costa Rica","density":"95.42"},{"country":"Croatia","density":"76"},{"country":"Cuba","density":"105.84"},{"country":"Cyprus","density":"123.5"},{"country":"Czech Republic","density":"136.24"},{"country":"Denmark","density":"132.31"},{"country":"Djibouti","density":"37.66"},{"country":"Dominica","density":"96"},{"country":"Dominican Republic","density":"215.31"},{"country":"East Timor","density":null},{"country":"Ecuador","density":"63.37"},{"country":"Egypt","density":null},{"country":"El Salvador","density":"306.01"},{"country":"England","density":null},{"country":"Equatorial Guinea","density":"26.99"},{"country":"Eritrea","density":"62.7"},{"country":"Estonia","density":"31.25"},{"country":"Ethiopia","density":"94.1"},{"country":"Falkland Islands","density":null},{"country":"Faroe Islands","density":null},{"country":"Fiji Islands","density":null},{"country":"Finland","density":"17.9"},{"country":"France","density":"120.59"},{"country":"French Guiana","density":null},{"country":"French Polynesia","density":"75.64"},{"country":"French Southern territories","density":null},{"country":"Gabon","density":"6.49"},{"country":"Gambia","density":null},{"country":"Georgia","density":"78.32"},{"country":"Germany","density":"231.31"},{"country":"Ghana","density":"113.85"},{"country":"Gibraltar","density":null},{"country":"Greece","density":"85.59"},{"country":"Greenland","density":"0.14"},{"country":"Grenada","density":"311.46"},{"country":"Guadeloupe","density":null},{"country":"Guam","density":"305.79"},{"country":"Guatemala","density":"144.35"},{"country":"Guinea","density":"47.8"},{"country":"Guinea-Bissau","density":"60.61"},{"country":"Guyana","density":"4.06"},{"country":"Haiti","density":"374.36"},{"country":"Heard Island and McDonald Islands","density":null},{"country":"Holy See (Vatican City State)","density":null},{"country":"Honduras","density":"72.37"},{"country":"Hong Kong","density":null},{"country":"Hungary","density":"109.33"},{"country":"Iceland","density":"3.22"},{"country":"India","density":"421.14"},{"country":"Indonesia","density":"124"},{"country":"Iran","density":null},{"country":"Iraq","density":"76.94"},{"country":"Ireland","density":"66.7"},{"country":"Israel","density":"372.43"},{"country":"Italy","density":"203.41"},{"country":"Ivory Coast","density":"63.89"},{"country":"Jamaica","density":"250.69"},{"country":"Japan","density":"349.29"},{"country":"Jordan","density":"72.75"},{"country":"Kazakhstan","density":null},{"country":"Kenya","density":"77.93"},{"country":"Kiribati","density":"126.36"},{"country":"Kuwait","density":"189.03"},{"country":"Kyrgyzstan","density":null},{"country":"Laos","density":null},{"country":"Latvia","density":"32.38"},{"country":"Lebanon","density":"436.7"},{"country":"Lesotho","density":"68.33"},{"country":"Liberia","density":"44.58"},{"country":"Libyan Arab Jamahiriya","density":null},{"country":"Liechtenstein","density":"230.78"},{"country":"Lithuania","density":"47.17"},{"country":"Luxembourg","density":"209.73"},{"country":"Macao","density":null},{"country":"North Macedonia","density":null},{"country":"Madagascar","density":"39.4"},{"country":"Malawi","density":"173.55"},{"country":"Malaysia","density":"90.45"},{"country":"Maldives","density":"1"},{"country":"Mali","density":"12.54"},{"country":"Malta","density":"1"},{"country":"Marshall Islands","density":"292.41"},{"country":"Martinique","density":null},{"country":"Mauritania","density":"3.77"},{"country":"Mauritius","density":"638.57"},{"country":"Mayotte","density":null},{"country":"Mexico","density":"62.93"},{"country":"Micronesia, Federated States of","density":null},{"country":"Moldova","density":"124.02"},{"country":"Monaco","density":"18"},{"country":"Mongolia","density":"1.83"},{"country":"Montserrat","density":null},{"country":"Morocco","density":"73.96"},{"country":"Mozambique","density":"32.85"},{"country":"Myanmar","density":"81.52"},{"country":"Namibia","density":"2.8"},{"country":"Nauru","density":null},{"country":"Nepal","density":"193.91"},{"country":"Netherlands","density":"498.35"},{"country":"Netherlands Antilles","density":null},{"country":"New Caledonia","density":"14.33"},{"country":"New Zealand","density":"16.98"},{"country":"Nicaragua","density":"50.53"},{"country":"Niger","density":"14.08"},{"country":"Nigeria","density":"190.62"},{"country":"Niue","density":null},{"country":"Norfolk Island","density":null},{"country":"North Korea","density":null},{"country":"Northern Ireland","density":null},{"country":"Northern Mariana Islands","density":"117.08"},{"country":"Norway","density":"13.92"},{"country":"Oman","density":"11.74"},{"country":"Pakistan","density":"236.28"},{"country":"Palau","density":"45.47"},{"country":"Palestine","density":null},{"country":"Panama","density":"51.98"},{"country":"Papua New Guinea","density":"16.17"},{"country":"Paraguay","density":"17.12"},{"country":"Peru","density":"23.73"},{"country":"Philippines","density":"329.99"},{"country":"Pitcairn","density":null},{"country":"Poland","density":"125.83"},{"country":"Portugal","density":"114.2"},{"country":"Puerto Rico","density":"407.56"},{"country":"Qatar","density":"186.79"},{"country":"Reunion","density":null},{"country":"Romania","density":"86.79"},{"country":"Russian Federation","density":"8.76"},{"country":"Rwanda","density":"477.36"},{"country":"Saint Helena","density":null},{"country":"Saint Kitts and Nevis","density":null},{"country":"Saint Lucia","density":null},{"country":"Saint Pierre and Miquelon","density":null},{"country":"Saint Vincent and the Grenadines","density":null},{"country":"Samoa","density":"67.27"},{"country":"San Marino","density":"524.13"},{"country":"Sao Tome and Principe","density":"201.03"},{"country":"Saudi Arabia","density":"13.41"},{"country":"Scotland","density":null},{"country":"Senegal","density":"73.41"},{"country":"Seychelles","density":"193.85"},{"country":"Sierra Leone","density":"84.4"},{"country":"Singapore","density":"7"},{"country":"Slovakia","density":null},{"country":"Slovenia","density":"102.31"},{"country":"Solomon Islands","density":"20.05"},{"country":"Somalia","density":"16.73"},{"country":"South Africa","density":"43.68"},{"country":"South Georgia and the South Sandwich Islands","density":null},{"country":"South Korea","density":null},{"country":"South Sudan","density":"0"},{"country":"Spain","density":"93.52"},{"country":"SriLanka","density":null},{"country":"Sudan","density":"20.73"},{"country":"Suriname","density":"3.46"},{"country":"Svalbard and Jan Mayen","density":null},{"country":"Swaziland","density":"72.65"},{"country":"Sweden","density":"23.55"},{"country":"Switzerland","density":"204.51"},{"country":"Syria","density":null},{"country":"Tajikistan","density":"58.64"},{"country":"Tanzania","density":"55.6"},{"country":"Thailand","density":"131.16"},{"country":"The Democratic Republic of Congo","density":null},{"country":"Togo","density":"125.34"},{"country":"Tokelau","density":null},{"country":"Tonga","density":"146.28"},{"country":"Trinidad and Tobago","density":"261.43"},{"country":"Tunisia","density":"70.07"},{"country":"Turkey","density":"97.36"},{"country":"Turkmenistan","density":"11.15"},{"country":"Turks and Caicos Islands","density":"34.84"},{"country":"Tuvalu","density":"329.2"},{"country":"Uganda","density":"188.07"},{"country":"Ukraine","density":"78.52"},{"country":"United Arab Emirates","density":"111.8"},{"country":"United Kingdom","density":"264.94"},{"country":"United States","density":"34.56"},{"country":"United States Minor Outlying Islands","density":null},{"country":"Uruguay","density":"19.47"},{"country":"Uzbekistan","density":"71.09"},{"country":"Vanuatu","density":"20.74"},{"country":"Venezuela","density":null},{"country":"Vietnam","density":"289.32"},{"country":"Virgin Islands, British","density":null},{"country":"Virgin Islands, U.S.","density":null},{"country":"Wales","density":null},{"country":"Wallis and Futuna","density":null},{"country":"Western Sahara","density":null},{"country":"Yemen","density":null},{"country":"Yugoslavia","density":null},{"country":"Zambia","density":"19.56"},{"country":"Zimbabwe","density":"36.58"}]'
    );
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var a,
      o,
      i,
      r,
      s,
      u,
      l = {},
      c = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function d(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function y(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function h(t, e, n) {
      var a,
        o = arguments,
        i = {};
      for (a in e) 'key' !== a && 'ref' !== a && (i[a] = e[a]);
      if (arguments.length > 3)
        for (n = [n], a = 3; a < arguments.length; a++) n.push(o[a]);
      if (
        (null != n && (i.children = n),
        'function' == typeof t && null != t.defaultProps)
      )
        for (a in t.defaultProps) void 0 === i[a] && (i[a] = t.defaultProps[a]);
      return f(t, i, e && e.key, e && e.ref);
    }
    function f(t, e, n, o) {
      var i = {
        type: t,
        props: e,
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
      return a.vnode && a.vnode(i), i;
    }
    function m(t) {
      return t.children;
    }
    function g(t, e) {
      (this.props = t), (this.context = e);
    }
    function b(t, e) {
      if (null == e) return t.__ ? b(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var n; e < t.__k.length; e++)
        if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
      return 'function' == typeof t.type ? b(t) : null;
    }
    function S(t) {
      var e, n;
      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) {
            t.__e = t.__c.base = n.__e;
            break;
          }
        return S(t);
      }
    }
    function C(t) {
      ((!t.__d && (t.__d = !0) && o.push(t) && !i++) ||
        s !== a.debounceRendering) &&
        ((s = a.debounceRendering) || r)(v);
    }
    function v() {
      for (var t; (i = o.length); )
        (t = o.sort(function(t, e) {
          return t.__v.__b - e.__v.__b;
        })),
          (o = []),
          t.some(function(t) {
            var e, n, a, o, i, r;
            t.__d &&
              ((i = (o = (e = t).__v).__e),
              (r = e.__P) &&
                ((n = []),
                (a = O(
                  r,
                  o,
                  d({}, o),
                  e.__n,
                  void 0 !== r.ownerSVGElement,
                  null,
                  n,
                  null == i ? b(o) : i
                )),
                w(n, o),
                a != i && S(o)));
          });
    }
    function A(t, e, n, a, o, i, r, s, u) {
      var p,
        d,
        h,
        f,
        m,
        g,
        S,
        C = (n && n.__k) || c,
        v = C.length;
      if (
        (s == l && (s = null != i ? i[0] : v ? b(n, 0) : null),
        (p = 0),
        (e.__k = _(e.__k, function(n) {
          if (null != n) {
            if (
              ((n.__ = e),
              (n.__b = e.__b + 1),
              null === (h = C[p]) || (h && n.key == h.key && n.type === h.type))
            )
              C[p] = void 0;
            else
              for (d = 0; d < v; d++) {
                if ((h = C[d]) && n.key == h.key && n.type === h.type) {
                  C[d] = void 0;
                  break;
                }
                h = null;
              }
            if (
              ((f = O(t, n, (h = h || l), a, o, i, r, s, u)),
              (d = n.ref) &&
                h.ref != d &&
                (S || (S = []),
                h.ref && S.push(h.ref, null, n),
                S.push(d, n.__c || f, n)),
              null != f)
            ) {
              var c;
              if ((null == g && (g = f), void 0 !== n.__d))
                (c = n.__d), (n.__d = void 0);
              else if (i == h || f != s || null == f.parentNode) {
                t: if (null == s || s.parentNode !== t)
                  t.appendChild(f), (c = null);
                else {
                  for (m = s, d = 0; (m = m.nextSibling) && d < v; d += 2)
                    if (m == f) break t;
                  t.insertBefore(f, s), (c = s);
                }
                'option' == e.type && (t.value = '');
              }
              (s = void 0 !== c ? c : f.nextSibling),
                'function' == typeof e.type && (e.__d = s);
            } else s && h.__e == s && s.parentNode != t && (s = b(h));
          }
          return p++, n;
        })),
        (e.__e = g),
        null != i && 'function' != typeof e.type)
      )
        for (p = i.length; p--; ) null != i[p] && y(i[p]);
      for (p = v; p--; ) null != C[p] && T(C[p], C[p]);
      if (S) for (p = 0; p < S.length; p++) B(S[p], S[++p], S[++p]);
    }
    function _(t, e, n) {
      if ((null == n && (n = []), null == t || 'boolean' == typeof t))
        e && n.push(e(null));
      else if (Array.isArray(t))
        for (var a = 0; a < t.length; a++) _(t[a], e, n);
      else
        n.push(
          e
            ? e(
                'string' == typeof t || 'number' == typeof t
                  ? f(null, t, null, null)
                  : null != t.__e || null != t.__c
                  ? f(t.type, t.props, t.key, null)
                  : t
              )
            : t
        );
      return n;
    }
    function M(t, e, n) {
      '-' === e[0]
        ? t.setProperty(e, n)
        : (t[e] =
            'number' == typeof n && !1 === p.test(e)
              ? n + 'px'
              : null == n
              ? ''
              : n);
    }
    function k(t, e, n, a, o) {
      var i, r, s, u, l;
      if (
        (o
          ? 'className' === e && (e = 'class')
          : 'class' === e && (e = 'className'),
        'key' === e || 'children' === e)
      );
      else if ('style' === e)
        if (((i = t.style), 'string' == typeof n)) i.cssText = n;
        else {
          if (('string' == typeof a && ((i.cssText = ''), (a = null)), a))
            for (r in a) (n && r in n) || M(i, r, '');
          if (n) for (s in n) (a && n[s] === a[s]) || M(i, s, n[s]);
        }
      else
        'o' === e[0] && 'n' === e[1]
          ? ((u = e !== (e = e.replace(/Capture$/, ''))),
            (l = e.toLowerCase()),
            (e = (l in t ? l : e).slice(2)),
            n
              ? (a || t.addEventListener(e, N, u), ((t.l || (t.l = {}))[e] = n))
              : t.removeEventListener(e, N, u))
          : 'list' !== e &&
            'tagName' !== e &&
            'form' !== e &&
            'type' !== e &&
            'size' !== e &&
            !o &&
            e in t
          ? (t[e] = null == n ? '' : n)
          : 'function' != typeof n &&
            'dangerouslySetInnerHTML' !== e &&
            (e !== (e = e.replace(/^xlink:?/, ''))
              ? null == n || !1 === n
                ? t.removeAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    e.toLowerCase()
                  )
                : t.setAttributeNS(
                    'http://www.w3.org/1999/xlink',
                    e.toLowerCase(),
                    n
                  )
              : null == n || (!1 === n && !/^ar/.test(e))
              ? t.removeAttribute(e)
              : t.setAttribute(e, n));
    }
    function N(t) {
      this.l[t.type](a.event ? a.event(t) : t);
    }
    function O(t, e, n, o, i, r, s, u, l) {
      var c,
        p,
        y,
        h,
        f,
        b,
        S,
        C,
        v,
        _,
        M = e.type;
      if (void 0 !== e.constructor) return null;
      (c = a.__b) && c(e);
      try {
        t: if ('function' == typeof M) {
          if (
            ((C = e.props),
            (v = (c = M.contextType) && o[c.__c]),
            (_ = c ? (v ? v.props.value : c.__) : o),
            n.__c
              ? (S = (p = e.__c = n.__c).__ = p.__E)
              : ('prototype' in M && M.prototype.render
                  ? (e.__c = p = new M(C, _))
                  : ((e.__c = p = new g(C, _)),
                    (p.constructor = M),
                    (p.render = P)),
                v && v.sub(p),
                (p.props = C),
                p.state || (p.state = {}),
                (p.context = _),
                (p.__n = o),
                (y = p.__d = !0),
                (p.__h = [])),
            null == p.__s && (p.__s = p.state),
            null != M.getDerivedStateFromProps &&
              (p.__s == p.state && (p.__s = d({}, p.__s)),
              d(p.__s, M.getDerivedStateFromProps(C, p.__s))),
            (h = p.props),
            (f = p.state),
            y)
          )
            null == M.getDerivedStateFromProps &&
              null != p.componentWillMount &&
              p.componentWillMount(),
              null != p.componentDidMount && p.__h.push(p.componentDidMount);
          else {
            if (
              (null == M.getDerivedStateFromProps &&
                C !== h &&
                null != p.componentWillReceiveProps &&
                p.componentWillReceiveProps(C, _),
              !p.__e &&
                null != p.shouldComponentUpdate &&
                !1 === p.shouldComponentUpdate(C, p.__s, _))
            ) {
              for (
                p.props = C,
                  p.state = p.__s,
                  p.__d = !1,
                  p.__v = e,
                  e.__e = n.__e,
                  e.__k = n.__k,
                  p.__h.length && s.push(p),
                  c = 0;
                c < e.__k.length;
                c++
              )
                e.__k[c] && (e.__k[c].__ = e);
              break t;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(C, p.__s, _),
              null != p.componentDidUpdate &&
                p.__h.push(function() {
                  p.componentDidUpdate(h, f, b);
                });
          }
          (p.context = _),
            (p.props = C),
            (p.state = p.__s),
            (c = a.__r) && c(e),
            (p.__d = !1),
            (p.__v = e),
            (p.__P = t),
            (c = p.render(p.props, p.state, p.context)),
            (e.__k =
              null != c && c.type == m && null == c.key
                ? c.props.children
                : Array.isArray(c)
                ? c
                : [c]),
            null != p.getChildContext && (o = d(d({}, o), p.getChildContext())),
            y ||
              null == p.getSnapshotBeforeUpdate ||
              (b = p.getSnapshotBeforeUpdate(h, f)),
            A(t, e, n, o, i, r, s, u, l),
            (p.base = e.__e),
            p.__h.length && s.push(p),
            S && (p.__E = p.__ = null),
            (p.__e = !1);
        } else e.__e = I(n.__e, e, n, o, i, r, s, l);
        (c = a.diffed) && c(e);
      } catch (t) {
        a.__e(t, e, n);
      }
      return e.__e;
    }
    function w(t, e) {
      a.__c && a.__c(e, t),
        t.some(function(e) {
          try {
            (t = e.__h),
              (e.__h = []),
              t.some(function(t) {
                t.call(e);
              });
          } catch (t) {
            a.__e(t, e.__v);
          }
        });
    }
    function I(t, e, n, a, o, i, r, s) {
      var u,
        p,
        d,
        y,
        h,
        f = n.props,
        m = e.props;
      if (((o = 'svg' === e.type || o), null != i))
        for (u = 0; u < i.length; u++)
          if (
            null != (p = i[u]) &&
            ((null === e.type ? 3 === p.nodeType : p.localName === e.type) ||
              t == p)
          ) {
            (t = p), (i[u] = null);
            break;
          }
      if (null == t) {
        if (null === e.type) return document.createTextNode(m);
        (t = o
          ? document.createElementNS('http://www.w3.org/2000/svg', e.type)
          : document.createElement(e.type, m.is && { is: m.is })),
          (i = null);
      }
      if (null === e.type) f !== m && t.data != m && (t.data = m);
      else if (e !== n) {
        if (
          (null != i && (i = c.slice.call(t.childNodes)),
          (d = (f = n.props || l).dangerouslySetInnerHTML),
          (y = m.dangerouslySetInnerHTML),
          !s)
        ) {
          if (f === l)
            for (f = {}, h = 0; h < t.attributes.length; h++)
              f[t.attributes[h].name] = t.attributes[h].value;
          (y || d) &&
            ((y && d && y.__html == d.__html) ||
              (t.innerHTML = (y && y.__html) || ''));
        }
        (function(t, e, n, a, o) {
          var i;
          for (i in n) i in e || k(t, i, null, n[i], a);
          for (i in e)
            (o && 'function' != typeof e[i]) ||
              'value' === i ||
              'checked' === i ||
              n[i] === e[i] ||
              k(t, i, e[i], n[i], a);
        })(t, m, f, o, s),
          (e.__k = e.props.children),
          y || A(t, e, n, a, 'foreignObject' !== e.type && o, i, r, l, s),
          s ||
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
    function B(t, e, n) {
      try {
        'function' == typeof t ? t(e) : (t.current = e);
      } catch (t) {
        a.__e(t, n);
      }
    }
    function T(t, e, n) {
      var o, i, r;
      if (
        (a.unmount && a.unmount(t),
        (o = t.ref) && ((o.current && o.current !== t.__e) || B(o, null, e)),
        n || 'function' == typeof t.type || (n = null != (i = t.__e)),
        (t.__e = t.__d = void 0),
        null != (o = t.__c))
      ) {
        if (o.componentWillUnmount)
          try {
            o.componentWillUnmount();
          } catch (t) {
            a.__e(t, e);
          }
        o.base = o.__P = null;
      }
      if ((o = t.__k)) for (r = 0; r < o.length; r++) o[r] && T(o[r], e, n);
      null != i && y(i);
    }
    function P(t, e, n) {
      return this.constructor(t, n);
    }
    function D(t, e, n) {
      var o, i, r;
      a.__ && a.__(t, e),
        (i = (o = n === u) ? null : (n && n.__k) || e.__k),
        (t = h(m, null, [t])),
        (r = []),
        O(
          e,
          ((o ? e : n || e).__k = t),
          i || l,
          l,
          void 0 !== e.ownerSVGElement,
          n && !o ? [n] : i ? null : c.slice.call(e.childNodes),
          r,
          n || l,
          o
        ),
        w(r, t);
    }
    (a = {
      __e: function(t, e) {
        for (var n, a; (e = e.__); )
          if ((n = e.__c) && !n.__)
            try {
              if (
                (n.constructor &&
                  null != n.constructor.getDerivedStateFromError &&
                  ((a = !0),
                  n.setState(n.constructor.getDerivedStateFromError(t))),
                null != n.componentDidCatch &&
                  ((a = !0), n.componentDidCatch(t)),
                a)
              )
                return C((n.__E = n));
            } catch (e) {
              t = e;
            }
        throw t;
      },
    }),
      (g.prototype.setState = function(t, e) {
        var n;
        (n =
          this.__s !== this.state ? this.__s : (this.__s = d({}, this.state))),
          'function' == typeof t && (t = t(n, this.props)),
          t && d(n, t),
          null != t && this.__v && (e && this.__h.push(e), C(this));
      }),
      (g.prototype.forceUpdate = function(t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), C(this));
      }),
      (g.prototype.render = m),
      (o = []),
      (i = 0),
      (r =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (u = l);
    var G = {};
    function E(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function j(t, e, n) {
      var a,
        o = /(?:\?([^#]*))?(#.*)?$/,
        i = t.match(o),
        r = {};
      if (i && i[1])
        for (var s = i[1].split('&'), u = 0; u < s.length; u++) {
          var l = s[u].split('=');
          r[decodeURIComponent(l[0])] = decodeURIComponent(
            l.slice(1).join('=')
          );
        }
      (t = R(t.replace(o, ''))), (e = R(e || ''));
      for (var c = Math.max(t.length, e.length), p = 0; p < c; p++)
        if (e[p] && ':' === e[p].charAt(0)) {
          var d = e[p].replace(/(^:|[+*?]+$)/g, ''),
            y = (e[p].match(/[+*?]+$/) || G)[0] || '',
            h = ~y.indexOf('+'),
            f = ~y.indexOf('*'),
            m = t[p] || '';
          if (!m && !f && (y.indexOf('?') < 0 || h)) {
            a = !1;
            break;
          }
          if (((r[d] = decodeURIComponent(m)), h || f)) {
            r[d] = t
              .slice(p)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (e[p] !== t[p]) {
          a = !1;
          break;
        }
      return (!0 === n.default || !1 !== a) && r;
    }
    function x(t, e) {
      return t.rank < e.rank ? 1 : t.rank > e.rank ? -1 : t.index - e.index;
    }
    function F(t, e) {
      return (
        (t.index = e),
        (t.rank = (function(t) {
          return t.props.default
            ? 0
            : ((e = t.props.path),
              R(e)
                .map(L)
                .join(''));
          var e;
        })(t)),
        t.props
      );
    }
    function R(t) {
      return t.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function L(t) {
      return ':' == t.charAt(0)
        ? 1 + '*+?'.indexOf(t.charAt(t.length - 1)) || 4
        : 5;
    }
    var z = null,
      K = [],
      U = [],
      H = {};
    function V() {
      var t;
      return (
        '' +
        ((t =
          z && z.location
            ? z.location
            : z && z.getCurrentLocation
            ? z.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : H).pathname || '') +
        (t.search || '')
      );
    }
    function W(t, e) {
      return (
        void 0 === e && (e = !1),
        'string' != typeof t && t.url && ((e = t.replace), (t = t.url)),
        (function(t) {
          for (var e = K.length; e--; ) if (K[e].canRoute(t)) return !0;
          return !1;
        })(t) &&
          (function(t, e) {
            void 0 === e && (e = 'push'),
              z && z[e]
                ? z[e](t)
                : 'undefined' != typeof history &&
                  history[e + 'State'] &&
                  history[e + 'State'](null, null, t);
          })(t, e ? 'replace' : 'push'),
        J(t)
      );
    }
    function J(t) {
      for (var e = !1, n = 0; n < K.length; n++)
        !0 === K[n].routeTo(t) && (e = !0);
      for (var a = U.length; a--; ) U[a](t);
      return e;
    }
    function Z(t) {
      if (t && t.getAttribute) {
        var e = t.getAttribute('href'),
          n = t.getAttribute('target');
        if (e && e.match(/^\//g) && (!n || n.match(/^_?self$/i))) return W(e);
      }
    }
    function Y(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button))
        return Z(t.currentTarget || t.target || this), q(t);
    }
    function q(t) {
      return (
        t &&
          (t.stopImmediatePropagation && t.stopImmediatePropagation(),
          t.stopPropagation && t.stopPropagation(),
          t.preventDefault()),
        !1
      );
    }
    function Q(t) {
      if (
        !(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button)
      ) {
        var e = t.target;
        do {
          if (
            'A' === String(e.nodeName).toUpperCase() &&
            e.getAttribute('href')
          ) {
            if (e.hasAttribute('native')) return;
            if (Z(e)) return q(t);
          }
        } while ((e = e.parentNode));
      }
    }
    var $ = !1;
    var X = (function(t) {
      function e(e) {
        t.call(this, e),
          e.history && (z = e.history),
          (this.state = { url: e.url || V() }),
          $ ||
            ('function' == typeof addEventListener &&
              (z ||
                addEventListener('popstate', function() {
                  J(V());
                }),
              addEventListener('click', Q)),
            ($ = !0));
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.shouldComponentUpdate = function(t) {
          return (
            !0 !== t.static ||
            t.url !== this.props.url || t.onChange !== this.props.onChange
          );
        }),
        (e.prototype.canRoute = function(t) {
          var e = _(this.props.children);
          return this.getMatchingChildren(e, t, !1).length > 0;
        }),
        (e.prototype.routeTo = function(t) {
          this.setState({ url: t });
          var e = this.canRoute(t);
          return this.updating || this.forceUpdate(), e;
        }),
        (e.prototype.componentWillMount = function() {
          K.push(this), (this.updating = !0);
        }),
        (e.prototype.componentDidMount = function() {
          var t = this;
          z &&
            (this.unlisten = z.listen(function(e) {
              t.routeTo('' + (e.pathname || '') + (e.search || ''));
            })),
            (this.updating = !1);
        }),
        (e.prototype.componentWillUnmount = function() {
          'function' == typeof this.unlisten && this.unlisten(),
            K.splice(K.indexOf(this), 1);
        }),
        (e.prototype.componentWillUpdate = function() {
          this.updating = !0;
        }),
        (e.prototype.componentDidUpdate = function() {
          this.updating = !1;
        }),
        (e.prototype.getMatchingChildren = function(t, e, n) {
          return t
            .filter(F)
            .sort(x)
            .map(function(t) {
              var a = j(e, t.props.path, t.props);
              if (a) {
                if (!1 !== n) {
                  var o = { url: e, matches: a };
                  return (
                    E(o, a),
                    delete o.ref,
                    delete o.key,
                    (function(t, e) {
                      return (
                        (e = d(d({}, t.props), e)),
                        arguments.length > 2 &&
                          (e.children = c.slice.call(arguments, 2)),
                        f(t.type, e, e.key || t.key, e.ref || t.ref)
                      );
                    })(t, o)
                  );
                }
                return t;
              }
            })
            .filter(Boolean);
        }),
        (e.prototype.render = function(t, e) {
          var n = t.children,
            a = t.onChange,
            o = e.url,
            i = this.getMatchingChildren(_(n), o, !0),
            r = i[0] || null,
            s = this.previousUrl;
          return (
            o !== s &&
              ((this.previousUrl = o),
              'function' == typeof a &&
                a({
                  router: this,
                  url: o,
                  previous: s,
                  active: i,
                  current: r,
                })),
            r
          );
        }),
        e
      );
    })(g);
    (X.subscribers = U),
      (X.getCurrentUrl = V),
      (X.route = W),
      (X.Router = X),
      (X.Route = function(t) {
        return h(t.component, t);
      }),
      (X.Link = function(t) {
        return h('a', E({ onClick: Y }, t));
      }),
      (X.exec = j);
    var tt = X;
    class et extends g {
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
    const nt = 'flex',
      at = 'flex flex-col',
      ot = Object.freeze({
        daysFromInfectionToDeath: 17.3,
        doublingTime: 6.18,
        fatalityRate: 0.0087,
        minDeaths: 10,
      }),
      it = [
        '#e01010',
        '#067ff1',
        '#5adc13',
        '#14f8e5',
        '#e30ed6',
        '#ff6600',
        '#ece019',
        '#590596',
      ],
      rt = [
        '#f09090',
        '#add0f1',
        '#b5dc9f',
        '#b7f8f3',
        '#e3c1e1',
        '#ffc6a0',
        '#ece79c',
        '#9e8dce',
      ],
      st = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 100], color: '#fff5f5' },
        { value: [100, 1e3], color: '#ffdcdc' },
        { value: [1e3, 5e3], color: '#ffa0a0' },
        { value: [5e3, 15e3], color: '#ff7373' },
        { value: [15e3, 5e4], color: '#ff4b4b' },
        { value: [5e4, 15e4], color: '#ff1919' },
        { value: [15e4, 5e9], color: '#c60000' },
      ],
      ut = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 500], color: '#fff5f5' },
        { value: [500, 5e3], color: '#ffdcdc' },
        { value: [5e3, 15e3], color: '#ffa0a0' },
        { value: [15e3, 5e4], color: '#ff7373' },
        { value: [5e4, 15e4], color: '#ff4b4b' },
        { value: [15e4, 5e5], color: '#ff1919' },
        { value: [5e5, 5e9], color: '#c60000' },
      ],
      lt = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 50], color: '#fff5f5' },
        { value: [50, 150], color: '#ffdcdc' },
        { value: [150, 500], color: '#ffa0a0' },
        { value: [500, 1500], color: '#ff7373' },
        { value: [1500, 1e4], color: '#ff4b4b' },
        { value: [1e4, 5e4], color: '#ff1919' },
        { value: [5e4, 5e9], color: '#c60000' },
      ],
      ct = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [1, 500], color: '#f0fff0' },
        { value: [500, 5e3], color: '#dcffdc' },
        { value: [5e3, 5e4], color: '#beffbe' },
        { value: [5e4, 25e4], color: '#a0ffa0' },
        { value: [25e4, 1e6], color: '#78ff78' },
        { value: [1e6, 5e6], color: '#41ff41' },
        { value: [5e6, 5e9], color: '#009900' },
      ];
    function pt(t) {
      return 'boolean' == typeof t;
    }
    function dt(t) {
      return 'number' == typeof t;
    }
    function yt(t) {
      return 'string' == typeof t;
    }
    function ht() {}
    function ft(t, e) {
      Object.keys(t).forEach((n, a) => {
        e(t[n], n, a, t);
      });
    }
    function mt(t, e, n) {
      return Object.keys(t).reduce((n, a, o) => e(n, t[a], a, o, t), n);
    }
    function gt({ onChange: t, options: e, selected: n }) {
      return h(
        'select',
        { onChange: e => t(e.target.value) },
        e.map((t, e) =>
          yt(t)
            ? h(
                'option',
                n === e ? { value: e, selected: !0 } : { value: e },
                t
              )
            : h(
                'option',
                n === e ? { value: t.index, selected: !0 } : { value: t.index },
                t.name
              )
        )
      );
    }
    function bt({ onChange: t, onClick: e, options: n, selected: a }) {
      e = e || ht;
      const o = t => e(t.target.value);
      return h(
        'select',
        {
          onChange: e =>
            t(
              (function(t) {
                let e = [];
                for (let n = 0; n < t.length; n += 1) {
                  const a = t[n];
                  a.selected && e.push(a.value);
                }
                return e;
              })(e.target.options)
            ),
          multiple: !0,
        },
        n.map((t, e) => {
          const n = e + (1e5 * Math.random()).toString(16);
          return yt(t)
            ? a.indexOf(e) > -1
              ? h('option', { key: n, onClick: o, value: e, selected: !0 }, t)
              : h('option', { key: n, onClick: o, value: e }, t)
            : a.indexOf(t.index) > -1
            ? h(
                'option',
                { key: n, onClick: o, value: t.index, selected: !0 },
                t.name
              )
            : h('option', { key: n, onClick: o, value: t.index }, t.name);
        })
      );
    }
    function St({ onChange: t, ymdString: e }) {
      return h('input', {
        onChange: e => t(e.target.value),
        type: 'date',
        value: e,
      });
    }
    function Ct({ classes: t, isDisabled: e, label: n, onClick: a }) {
      return h(
        'button',
        { className: t ? t.join(' ') : '', onClick: a, disabled: e },
        n
      );
    }
    function vt({
      classes: t,
      listenKeyUp: e,
      onChange: n,
      placeholder: a,
      value: o,
    }) {
      const i = t => n(t.target.value);
      return h('input', {
        className: t ? t.join(' ') : '',
        onChange: i,
        onKeyUp: e ? i : ht,
        placeholder: a || '',
        type: 'text',
        value: o,
      });
    }
    function At() {
      let t = !1;
      return (
        (function(e) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            e
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              e.substr(0, 4)
            )) &&
            (t = !0);
        })(navigator.userAgent || navigator.vendor || window.opera),
        t
      );
    }
    function _t(...t) {
      console.log('COVID-19', ...t);
    }
    class Mt extends g {
      constructor() {
        super();
      }
      getOptions() {
        return this.props.filter
          ? this.props.options.filter(t =>
              yt(t)
                ? t.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1
                : t.name
                    .toLowerCase()
                    .indexOf(this.props.filter.toLowerCase()) > -1
            )
          : this.props.options;
      }
      render() {
        const t = this.props.classes ? this.props.classes.join(' ') : '',
          e = t => {
            this.props.onChange(t);
          };
        return h(
          'div',
          { className: t.length ? `${t} ${at}` : at },
          h(
            'div',
            { className: nt },
            At()
              ? ''
              : h(vt, {
                  listenKeyUp: !0,
                  onChange: this.props.onUpdateFilter.bind(this),
                  placeholder: 'filter',
                  value: this.props.filter,
                }),
            h(Ct, { label: '✗', onClick: this.props.onClear })
          ),
          At()
            ? h(bt, {
                onChange: e,
                options: this.getOptions(),
                selected: this.props.selected,
              })
            : h(bt, {
                onChange: e,
                onClick: t => {
                  this.props.onDeselect(t);
                },
                options: this.getOptions(),
                selected: this.props.selected,
              })
        );
      }
    }
    const kt = [
        'Active*',
        'Confirmed',
        'Deaths',
        'Recoveries*',
        'Estimated Active Cases',
      ],
      Nt = ['By date', 'By first confirmed', 'By first 100 confirmed'],
      Ot = ['Linear', 'Logarithmic'],
      wt = ['Show States', 'Hide States'],
      It = ['By Value', 'Percent'];
    function Bt({ countries: t, onChange: e, reload: n, state: a }) {
      return h(
        'section',
        { className: 'flex flex-item-20' },
        h(
          'section',
          { className: at },
          h(gt, {
            onChange: function(t) {
              e(
                Object.assign(Object.assign({}, a), {
                  mode: parseInt(t + '', 10),
                })
              );
            },
            options: Nt,
            selected: a.mode,
          }),
          h(gt, {
            onChange: function(t) {
              e(
                Object.assign(Object.assign({}, a), {
                  scaleType: parseInt(t + '', 10),
                })
              );
            },
            options: Ot,
            selected: a.scaleType,
          }),
          h(St, {
            onChange: function(t) {
              e(Object.assign(Object.assign({}, a), { startDate: t }));
            },
            ymdString: a.startDate,
          })
        ),
        h(bt, {
          onChange: function(t) {
            e(
              Object.assign(Object.assign({}, a), {
                dataSetIndexes: t.map(t => parseInt(t + '', 10)),
              })
            );
          },
          options: kt,
          selected: a.dataSetIndexes,
        }),
        h(Mt, {
          classes: 0 === this.props.countryKeys.length ? ['highlight'] : [],
          filter: this.props.state.countryFilter,
          onUpdateFilter: this.props.onUpdateCountryFilter,
          onChange: ht,
          onClear: this.props.clearCountries,
          onDeselect: this.props.selectCountry,
          options: t.filter(
            ((o = this.props.state.showStates),
            t =>
              !1 === o ||
              !(t.name.indexOf(',') > -1) || t.name.indexOf(', Total') > -1)
          ),
          selected: this.props.countryKeys,
        }),
        h(
          'div',
          { className: at },
          h(gt, {
            onChange: function(t) {
              e(
                Object.assign(Object.assign({}, a), {
                  showStates: 0 !== parseInt(t + '', 10),
                })
              );
            },
            options: wt,
            selected: a.showStates ? 1 : 0,
          }),
          h(gt, {
            onChange: function(t) {
              e(
                Object.assign(Object.assign({}, a), {
                  byMetric: parseInt(t + '', 10),
                })
              );
            },
            options: It,
            selected: a.byMetric,
          }),
          h(Ct, { label: 'Reload', onClick: n })
        )
      );
      var o;
    }
    function Tt({
      classes: t,
      isDisabled: e,
      labelFalse: n,
      labelTrue: a,
      onClick: o,
      state: i,
    }) {
      return h(Ct, {
        classes: t,
        isDisabled: e,
        label: i ? a : n,
        onClick: () => o(!i),
      });
    }
    function Pt({ config: { onClick: t, labels: e, selected: n } }) {
      return h(
        'nav',
        { className: nt },
        e.map((e, a) =>
          h(Ct, { isDisabled: a === n, label: e, onClick: () => t(a) })
        )
      );
    }
    class Dt extends g {
      constructor() {
        super(), (this.state = {});
      }
      componentDidMount() {
        this.setState(Object.assign({}, this.state));
      }
      useDays() {
        return 0 !== this.props.state.mode;
      }
      toggleConfig(t) {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            isConfigOpen: t,
          })
        );
      }
      setCountryFilter(t) {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            countryFilter: t,
          })
        );
      }
      render() {
        const t =
          !1 === this.props.state.isConfigOpen &&
          0 === this.props.countryKeys.length
            ? ['green']
            : [];
        return h(
          'section',
          { className: `full-size ${at}` },
          h(et, {
            flexSize: this.props.state.isConfigOpen
              ? 'flex-item-60'
              : 'flex-item-95',
            series: this.props.currentSeries,
            scaleType: this.props.state.scaleType,
            useDays: this.useDays(),
          }),
          h(
            'section',
            { className: nt },
            h(Tt, {
              classes: t,
              labelTrue: '✗ Enlarge Chart',
              labelFalse: '⚙️ Configure Chart',
              onClick: this.toggleConfig.bind(this),
              state: this.props.state.isConfigOpen,
            }),
            h(Pt, { config: this.props.menu })
          ),
          this.props.state.isConfigOpen
            ? h(Bt, {
                onUpdateCountryFilter: this.setCountryFilter.bind(this),
                clearCountries: this.props.clearCountries,
                countryKeys: this.props.countryKeys,
                countries: this.props.countries,
                currentSeries: this.props.currentSeries,
                onChange: this.props.onChange,
                reload: this.props.reload,
                selectCountry: this.props.selectCountry,
                state: this.props.state,
              })
            : ''
        );
      }
    }
    var Gt = n(0),
      Et = n(1);
    const jt = Object.freeze({
        'Congo (Kinshasa)': 'The Democratic Republic of Congo',
        "Cote d'Ivoire": 'Ivory Coast',
        Czechia: 'Czech Republic',
        Eswatini: 'Swaziland',
        'Holy See': 'Holy See (Vatican City State)',
        'Korea, South': 'South Korea',
        'Republic of the Congo': 'Congo',
        Russia: 'Russian Federation',
        'Sri Lanka': 'SriLanka',
        'The Bahamas': 'Bahamas',
        'The Gambia': 'Gambia',
        US: 'United States',
      }),
      xt = Object.freeze({
        'Bahamas, The': 395361,
        'Cabo Verde': 546388,
        'Congo (Brazzaville)': 18e5,
        'Congo (Kinshasa)': 8134e4,
        'Cruise Ship': 3711,
        'Diamond Princess': 3711,
        Fiji: 905502,
        'Gambia, The': 2101e3,
        Guernsey: 67052,
        Jersey: 97857,
        Kosovo: 1831e3,
        Libya: 6375e3,
        Montenegro: 613219,
        Serbia: 7022e3,
        'Taiwan*': 2378e4,
        'Timor-Leste': 1296e3,
        'West Bank and Gaza': 4685e3,
      }),
      Ft = Object.freeze({
        Australia: Object.freeze({
          'Australian Capital Territory': 426709,
          'New South Wales': 8089526,
          'Northern Territory': 245869,
          Queensland: 5095100,
          'South Australia': 1751693,
          Tasmania: 534281,
          Victoria: 6594804,
          'Western Australia': 2621680,
        }),
        Canada: Object.freeze({
          Alberta: 4345737,
          'British Columbia': 5020302,
          Ontario: 14446515,
          Manitoba: 1360396,
          'New Brunswick': 772094,
          'Newfoundland and Labrador': 523790,
          'Northwest Territories': 44598,
          'Nova Scotia': 965382,
          'Prince Edward Island': 154748,
          Quebec: 8433301,
          Saskatchewan: 1168423,
          Yukon: 40369,
          Nunavut: 38787,
        }),
        China: Object.freeze({
          Anhui: 59500510,
          Beijing: 19612368,
          Chongqing: 28846170,
          Fujian: 36894216,
          Gansu: 25575254,
          Guangdong: 104303132,
          Guangxi: 46026629,
          Guizhou: 35806468,
          Hainan: 9261518,
          Hebei: 71854202,
          Heilongjiang: 38312224,
          Henan: 94023567,
          'Hong Kong': 7061200,
          Hubei: 57237740,
          Hunan: 65683722,
          'Inner Mongolia': 24706321,
          Jiangsu: 78659903,
          Jiangxi: 44567475,
          Jilin: 27462297,
          Liaoning: 43746323,
          Macau: 552503,
          Ningxia: 6176900,
          Qinghai: 5626722,
          Shaanxi: 37327378,
          Shandong: 100063065,
          Shanghai: 23019148,
          Shanxi: 37022111,
          Sichuan: 80418200,
          Tianjin: 12938224,
          Tibet: 3002166,
          Xinjiang: 21813334,
          Yunnan: 45966239,
          Zhejiang: 54426891,
        }),
        Denmark: Object.freeze({
          Denmark: 5603e3,
          'Faroe Islands': 49290,
          Greenland: 56171,
        }),
        France: Object.freeze({
          France: 6699e4,
          'French Guiana': 290691,
          'French Polynesia': 283007,
          Guadeloupe: 395700,
          Mayotte: 270372,
          'New Caledonia': 280460,
          Reunion: 859959,
          'Saint Barthelemy': 9131,
          'St Martin': 32125,
        }),
        Netherlands: Object.freeze({
          Aruba: 105264,
          Curacao: 161014,
          Netherlands: 1718e4,
          'Sint Maarten': 41109,
        }),
        'United Kingdom': Object.freeze({
          'United Kingdom': 6644e4,
          Bermuda: 65441,
          'Cayman Islands': 61559,
          'Channel Islands': 3703,
          Gibraltar: 34571,
          'Isle of Man': 84287,
          Montserrat: 5900,
        }),
        US: Object.freeze({
          AL: 4833722,
          AK: 735132,
          AZ: 6626624,
          AR: 2959373,
          CA: 38332521,
          CO: 5268367,
          CT: 3596080,
          DE: 925749,
          DC: 646449,
          FL: 19552860,
          GA: 9992167,
          GU: 164229,
          HI: 1404054,
          ID: 1612136,
          IL: 12882135,
          IN: 6570902,
          IA: 3090416,
          KS: 2893957,
          KY: 4395295,
          LA: 4625470,
          ME: 1328302,
          MD: 5928814,
          MA: 6692824,
          MI: 9895622,
          MN: 5420380,
          MS: 2991207,
          MO: 6044171,
          MT: 1015165,
          NE: 1868516,
          NV: 2790136,
          NH: 1323459,
          NJ: 8899339,
          NM: 2085287,
          NY: 19651127,
          NC: 9848060,
          ND: 723393,
          OH: 11570808,
          OK: 3850568,
          OR: 3930065,
          PA: 12773801,
          RI: 1051511,
          SC: 4774839,
          SD: 844877,
          TN: 6495978,
          TX: 26448193,
          UT: 2900872,
          VT: 626630,
          VA: 8260405,
          VI: 107268,
          WA: 6971406,
          WV: 1854304,
          WI: 5742713,
          WY: 582658,
          PR: 3615086,
        }),
      }),
      Rt = Object.freeze({
        Afghanistan: 'AF',
        'Åland Islands': 'AX',
        Albania: 'AL',
        Algeria: 'DZ',
        'American Samoa': 'AS',
        Andorra: 'AD',
        Angola: 'AO',
        Anguilla: 'AI',
        Antarctica: 'AQ',
        'Antigua and Barbuda': 'AG',
        Argentina: 'AR',
        Armenia: 'AM',
        Aruba: 'AW',
        Australia: 'AU',
        Austria: 'AT',
        Azerbaijan: 'AZ',
        Bahamas: 'BS',
        'Bahamas, The': 'BS',
        Bangladesh: 'BD',
        Bahrain: 'BH',
        Barbados: 'BB',
        Belarus: 'BY',
        Belgium: 'BE',
        Belize: 'BZ',
        Benin: 'BJ',
        Bermuda: 'BM',
        Bhutan: 'BT',
        Bolivia: 'BO',
        'Bosnia and Herzegovina': 'BA',
        Botswana: 'BW',
        'Bouvet Island': 'BV',
        Brazil: 'BR',
        'British Indian Ocean Territory': 'IO',
        Brunei: 'BN',
        Bulgaria: 'BG',
        'Burkina Faso': 'BF',
        Burundi: 'BI',
        'Cabo Verde': 'CV',
        Cambodia: 'KH',
        Cameroon: 'CM',
        Canada: 'CA',
        'Cayman Islands': 'KY',
        'Central African Republic': 'CF',
        Chad: 'TD',
        Chile: 'CL',
        China: 'CN',
        'Christmas Island': 'CX',
        'Cocos (Keeling) Islands': 'CC',
        Colombia: 'CO',
        Comoros: 'KM',
        Congo: 'CG',
        'Congo (Brazzaville)': 'CG',
        'Congo, The Democratic Republic of the': 'CD',
        'Congo (Kinshasa)': 'CD',
        'Cook Islands': 'CK',
        'Costa Rica': 'CR',
        "Cote d'Ivoire": 'CI',
        Croatia: 'HR',
        Cuba: 'CU',
        Cyprus: 'CY',
        Czechia: 'CZ',
        Denmark: 'DK',
        Djibouti: 'DJ',
        Dominica: 'DM',
        'Dominican Republic': 'DO',
        Ecuador: 'EC',
        Egypt: 'EG',
        'El Salvador': 'SV',
        'Equatorial Guinea': 'GQ',
        Eritrea: 'ER',
        Estonia: 'EE',
        Eswatini: 'SZ',
        Ethiopia: 'ET',
        'Falkland Islands (Malvinas)': 'FK',
        'Faroe Islands': 'FO',
        Fiji: 'FJ',
        Finland: 'FI',
        France: 'FR',
        'French Guiana': 'GF',
        'French Polynesia': 'PF',
        'French Southern Territories': 'TF',
        Gambia: 'GM',
        Gabon: 'GA',
        'The, Gambia': 'GM',
        Georgia: 'GE',
        Germany: 'DE',
        Ghana: 'GH',
        Gibraltar: 'GI',
        Greece: 'GR',
        Greenland: 'GL',
        Grenada: 'GD',
        Guam: 'GU',
        Guatemala: 'GT',
        Guernsey: 'GG',
        Guinea: 'GN',
        'Guinea-Bissau': 'GW',
        Guyana: 'GY',
        Haiti: 'HT',
        'Heard Island and Mcdonald Islands': 'HM',
        'Holy See': 'VA',
        Honduras: 'HN',
        'Hong Kong': 'HK',
        Hungary: 'HU',
        Iceland: 'IS',
        India: 'IN',
        Indonesia: 'ID',
        Iran: 'IR',
        Iraq: 'IQ',
        Ireland: 'IE',
        'Isle of Man': 'IM',
        Israel: 'IL',
        Italy: 'IT',
        Jamaica: 'JM',
        Japan: 'JP',
        Jersey: 'JE',
        Jordan: 'JO',
        Kazakhstan: 'KZ',
        Kenya: 'KE',
        Kosovo: 'XK',
        Kiribati: 'KI',
        "Korea, Democratic People'S Republic of": 'KP',
        'Korea, South': 'KR',
        Kuwait: 'KW',
        Kyrgyzstan: 'KG',
        "Lao People'S Democratic Republic": 'LA',
        Laos: 'LA',
        Latvia: 'LV',
        Lebanon: 'LB',
        Lesotho: 'LS',
        Liberia: 'LR',
        'Libyan Arab Jamahiriya': 'LY',
        Liechtenstein: 'LI',
        Libya: 'LY',
        Lithuania: 'LT',
        Luxembourg: 'LU',
        Macao: 'MO',
        'Macedonia, The Former Yugoslav Republic of': 'MK',
        Madagascar: 'MG',
        Malawi: 'MW',
        Malaysia: 'MY',
        Maldives: 'MV',
        Mali: 'ML',
        Malta: 'MT',
        'Marshall Islands': 'MH',
        Mauritania: 'MR',
        Mauritius: 'MU',
        Mexico: 'MX',
        'Micronesia, Federated States of': 'FM',
        Moldova: 'MD',
        Monaco: 'MC',
        Mongolia: 'MN',
        Montenegro: 'ME',
        Montserrat: 'MS',
        Morocco: 'MA',
        Mozambique: 'MZ',
        Myanmar: 'MM',
        Namibia: 'NA',
        Nauru: 'NR',
        Nepal: 'NP',
        Netherlands: 'NL',
        'Netherlands Antilles': 'AN',
        'New Caledonia': 'NC',
        'New Zealand': 'NZ',
        Nicaragua: 'NI',
        Niger: 'NE',
        Nigeria: 'NG',
        Niue: 'NU',
        'Norfolk Island': 'NF',
        'Northern Mariana Islands': 'MP',
        'North Macedonia': 'MK',
        Norway: 'NO',
        Oman: 'OM',
        Pakistan: 'PK',
        Palau: 'PW',
        'Palestinian Territory, Occupied': 'PS',
        Panama: 'PA',
        'Papua New Guinea': 'PG',
        Paraguay: 'PY',
        Peru: 'PE',
        Philippines: 'PH',
        Pitcairn: 'PN',
        Poland: 'PL',
        Portugal: 'PT',
        'Puerto Rico': 'PR',
        Qatar: 'QA',
        Romania: 'RO',
        Russia: 'RU',
        Rwanda: 'RW',
        'Saint Helena': 'SH',
        'Saint Kitts and Nevis': 'KN',
        'Saint Lucia': 'LC',
        'Saint Pierre and Miquelon': 'PM',
        Samoa: 'WS',
        'San Marino': 'SM',
        'Sao Tome and Principe': 'ST',
        'Saudi Arabia': 'SA',
        Senegal: 'SN',
        Serbia: 'RS',
        Seychelles: 'SC',
        'Sierra Leone': 'SL',
        Singapore: 'SG',
        Slovakia: 'SK',
        Slovenia: 'SI',
        'Solomon Islands': 'SB',
        Somalia: 'SO',
        'South Africa': 'ZA',
        'South Georgia and the South Sandwich Islands': 'GS',
        Spain: 'ES',
        'Sri Lanka': 'LK',
        'Saint Vincent and the Grenadines': 'VC',
        Sudan: 'SD',
        Suriname: 'SR',
        'Svalbard and Jan Mayen': 'SJ',
        Swaziland: 'SZ',
        Sweden: 'SE',
        Switzerland: 'CH',
        Syria: 'SY',
        'Taiwan*': 'TW',
        Tajikistan: 'TJ',
        Tanzania: 'TZ',
        Thailand: 'TH',
        'Timor-Leste': 'TL',
        Togo: 'TG',
        Tokelau: 'TK',
        Tonga: 'TO',
        'Trinidad and Tobago': 'TT',
        Tunisia: 'TN',
        Turkey: 'TR',
        Turkmenistan: 'TM',
        'Turks and Caicos Islands': 'TC',
        Tuvalu: 'TV',
        Uganda: 'UG',
        Ukraine: 'UA',
        'United Arab Emirates': 'AE',
        'United Kingdom': 'GB',
        US: 'US',
        'United States Minor Outlying Islands': 'UM',
        Uruguay: 'UY',
        Uzbekistan: 'UZ',
        Vanuatu: 'VU',
        Venezuela: 'VE',
        Vietnam: 'VN',
        'Virgin Islands, British': 'VG',
        'Virgin Islands, U.S.': 'VI',
        'Wallis and Futuna': 'WF',
        'Western Sahara': 'EH',
        Yemen: 'YE',
        Zambia: 'ZM',
        Zimbabwe: 'ZW',
        'West Bank and Gaza': 'PO',
      }),
      Lt = Object.freeze({
        Australia: Object.freeze({
          'Australian Capital Territory': 'AC',
          'New South Wales': 'NS',
          'Northern Territory': 'NT',
          Queensland: 'QL',
          'South Australia': 'SA',
          Tasmania: 'TS',
          Victoria: 'VI',
          'Western Australia': 'WA',
        }),
        Canada: Object.freeze({
          Alberta: 'AB',
          'British Columbia': 'BC',
          Ontario: 'ON',
          Manitoba: 'MB',
          'New Brunswick': 'NB',
          'Newfoundland and Labrador': 'NF',
          'Northwest Territories': 'NT',
          'Nova Scotia': 'NS',
          'Prince Edward Island': 'PE',
          Quebec: 'QC',
          Saskatchewan: 'SK',
          Yukon: 'YT',
          Nunavut: 'NU',
        }),
        China: Object.freeze({
          Anhui: 'AH',
          Beijing: 'BJ',
          Chongqing: 'CQ',
          Fujian: 'FJ',
          Gansu: 'GS',
          Guangdong: 'GD',
          Guangxi: 'GX',
          Guizhou: 'GZ',
          Hainan: 'HA',
          Hebei: 'HB',
          Heilongjiang: 'HL',
          Henan: 'HE',
          Hubei: 'HU',
          Hunan: 'HN',
          'Inner Mongolia': 'NM',
          Jiangsu: 'JS',
          Jiangxi: 'JX',
          Jilin: 'JL',
          Liaoning: 'LN',
          Ningxia: 'NX',
          Qinghai: 'QH',
          Shaanxi: 'SA',
          Shandong: 'SD',
          Shanghai: 'SH',
          Shanxi: 'SX',
          Sichuan: 'SC',
          Tianjin: 'TJ',
          Xinjiang: 'XJ',
          Yunnan: 'YN',
          Zhejiang: 'ZJ',
        }),
        US: Object.freeze({
          AL: 'Alabama',
          AK: 'Alaska',
          AS: 'American Samoa',
          AZ: 'Arizona',
          AR: 'Arkansas',
          CA: 'California',
          CO: 'Colorado',
          CT: 'Connecticut',
          DC: 'District of Columbia',
          DE: 'Delaware',
          'D.C.': 'District of Columbia',
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
      }),
      zt = Object.freeze({
        Afghanistan: 'Asia',
        Albania: 'Europe',
        Algeria: 'Africa',
        Andorra: 'Europe',
        Angola: 'Africa',
        Argentina: 'South America',
        Armenia: 'Asia',
        Australia: 'Oceania',
        Austria: 'Europe',
        Azerbaijan: 'Asia',
        'Bahamas, The': 'North America',
        Bangladesh: 'Asia',
        Belarus: 'Europe',
        Belgium: 'Europe',
        Benin: 'Africa',
        Bhutan: 'Asia',
        Bolivia: 'South America',
        'Bosnia and Herzegovina': 'Europe',
        Brazil: 'South America',
        Brunei: 'Asia',
        Bulgaria: 'Europe',
        'Burkina Faso': 'Africa',
        Cambodia: 'Asia',
        Cameroon: 'Africa',
        Canada: 'North America',
        'Central African Republic': 'Africa',
        Chad: 'Africa',
        Chile: 'South America',
        China: 'Asia',
        Colombia: 'South America',
        'Costa Rica': 'North America',
        "Cote d'Ivoire": 'Africa',
        Croatia: 'Europe',
        Cuba: 'North America',
        Cyprus: 'Asia',
        Czechia: 'Europe',
        Denmark: 'Europe',
        Djibouti: 'Africa',
        'Dominican Republic': 'North America',
        Ecuador: 'South America',
        Egypt: 'Africa',
        'El Salvador': 'North America',
        'Equatorial Guinea': 'Africa',
        Eritrea: 'Africa',
        Estonia: 'Europe',
        Ethiopia: 'Africa',
        Fiji: 'Oceania',
        Finland: 'Europe',
        France: 'Europe',
        Gabon: 'Africa',
        Georgia: 'Asia',
        Germany: 'Europe',
        Ghana: 'Africa',
        Greece: 'Europe',
        Guatemala: 'North America',
        Guinea: 'Africa',
        Guyana: 'South America',
        Haiti: 'North America',
        Honduras: 'North America',
        Hungary: 'Europe',
        Iceland: 'Europe',
        India: 'Asia',
        Indonesia: 'Asia',
        Iran: 'Asia',
        Iraq: 'Asia',
        Ireland: 'Europe',
        Israel: 'Asia',
        Italy: 'Europe',
        Jamaica: 'North America',
        Japan: 'Asia',
        Jordan: 'Asia',
        Kazakhstan: 'Asia',
        Kenya: 'Africa',
        'Korea, South': 'Asia',
        Kuwait: 'Asia',
        Kyrgyzstan: 'Asia',
        Latvia: 'Europe',
        Lebanon: 'Asia',
        Liberia: 'Africa',
        Liechtenstein: 'Europe',
        Lithuania: 'Europe',
        Luxembourg: 'Europe',
        Madagascar: 'Africa',
        Malaysia: 'Asia',
        Mauritania: 'Africa',
        Mexico: 'North America',
        Moldova: 'Europe',
        Monaco: 'Europe',
        Mongolia: 'Asia',
        Morocco: 'Africa',
        Mozambique: 'Africa',
        Namibia: 'Africa',
        Nepal: 'Asia',
        Netherlands: 'Europe',
        'New Zealand': 'Oceania',
        Nicaragua: 'North America',
        Niger: 'Africa',
        Nigeria: 'Africa',
        Norway: 'Europe',
        Oman: 'Asia',
        Pakistan: 'Asia',
        Panama: 'North America',
        'Papua New Guinea': 'Oceania',
        Paraguay: 'South America',
        Peru: 'South America',
        Philippines: 'Asia',
        Poland: 'Europe',
        Portugal: 'Europe',
        Qatar: 'Asia',
        Romania: 'Europe',
        Russia: 'Asia',
        Rwanda: 'Africa',
        'San Marino': 'Europe',
        'Saudi Arabia': 'Asia',
        Senegal: 'Africa',
        Slovakia: 'Europe',
        Slovenia: 'Europe',
        Somalia: 'Africa',
        'South Africa': 'Africa',
        Spain: 'Europe',
        'Sri Lanka': 'Asia',
        Sudan: 'Africa',
        Suriname: 'South America',
        Sweden: 'Europe',
        Switzerland: 'Europe',
        Syria: 'Asia',
        'Taiwan*': 'Asia',
        Tanzania: 'Africa',
        Thailand: 'Asia',
        Togo: 'Africa',
        'Trinidad and Tobago': 'North America',
        Tunisia: 'Africa',
        Turkey: 'Asia',
        US: 'North America',
        Uganda: 'Africa',
        Ukraine: 'Europe',
        'United Arab Emirates': 'Asia',
        'United Kingdom': 'Europe',
        Uruguay: 'South America',
        Uzbekistan: 'Asia',
        Venezuela: 'South America',
        Vietnam: 'Asia',
        Zambia: 'Africa',
        Zimbabwe: 'Africa',
      }),
      Kt = Object.freeze(
        Object.keys(Lt.US).reduce((t, e) => ((t[Lt.US[e]] = e), t), {})
      ),
      Ut = {
        '': !0,
        AG: !0,
        BB: !0,
        BH: !0,
        CV: !0,
        DM: !0,
        GD: !0,
        KN: !0,
        LC: !0,
        MT: !0,
        MU: !0,
        MV: !0,
        TL: 'TP',
        SC: !0,
        SG: !0,
        VC: !0,
      };
    class Ht {
      constructor(t) {
        this.data = t;
      }
      static create(t) {
        return new Ht(t);
      }
      lastValue(t) {
        return this.data.counts.length < 1
          ? 0
          : this.data.counts[this.data.counts.length - 1][t];
      }
      lastPercent(t) {
        return this.data.counts.length < 1 || this.data.population < 1
          ? 0
          : (this.data.counts[this.data.counts.length - 1][t] /
              this.data.population) *
              100;
      }
      lastActive() {
        return this.lastValue('active');
      }
      lastActivePercent() {
        return this.lastPercent('active');
      }
      lastConfirmed() {
        return this.lastValue('confirmed');
      }
      lastConfirmedPercent() {
        return this.lastPercent('confirmed');
      }
      lastDeaths() {
        return this.lastValue('deaths');
      }
      lastDeathsPercent() {
        return this.lastPercent('deaths');
      }
      lastRecoveries() {
        return this.lastValue('recoveries');
      }
      lastRecoveriesPercent() {
        return this.lastPercent('recoveries');
      }
      lastMortality() {
        return this.lastValue('confirmed') < 1
          ? 0
          : (this.lastValue('deaths') / this.lastValue('confirmed')) * 100;
      }
      counts() {
        return this.data.counts;
      }
      dates() {
        return this.data.dates;
      }
      country() {
        return this.data.country;
      }
      countryCode() {
        return this.data.countryCode;
      }
      countryName() {
        return (
          this.data.country + (this.data.state ? ', ' + this.data.state : '')
        );
      }
      key() {
        return this.data.key;
      }
      locale() {
        return this.data.locale;
      }
      population() {
        return this.data.population;
      }
      populationDensity() {
        return this.data.populationDensity;
      }
      state() {
        return this.data.state;
      }
      stateCode() {
        return this.data.stateCode;
      }
    }
    class Vt extends Array {
      static create() {
        return new Vt();
      }
      constructor() {
        super();
      }
      sortByProp(t, e = !0) {
        const n = e ? -1 : 1;
        this.sort((e, a) =>
          e[t]() < a[t]() ? n : e[t]() > a[t]() ? -1 * n : 0
        );
      }
      clone() {
        const t = Vt.create();
        return this.forEach(e => t.push(e)), t;
      }
      sortByActive(t = !0) {
        this.sortByProp('lastActive', t);
      }
      sortByActivePercent(t = !0) {
        this.sortByProp('lastActivePercent', t);
      }
      sortByConfirmed(t = !0) {
        this.sortByProp('lastConfirmed', t);
      }
      sortByConfirmedPercent(t = !0) {
        this.sortByProp('lastConfirmedPercent', t);
      }
      sortByCountry(t = !0) {
        this.sort((t, e) =>
          t.country() < e.country()
            ? -1
            : t.country() > e.country()
            ? 1
            : t.state() < e.state()
            ? -1
            : t.state() > e.state()
            ? 1
            : t.locale() < e.locale()
            ? -1
            : t.locale() > e.locale()
            ? 1
            : 0
        );
      }
      sortByDeaths(t = !0) {
        this.sortByProp('lastDeaths', t);
      }
      sortByMortality(t = !0) {
        this.sortByProp('lastMortality', t);
      }
      sortByDeathsPercent(t = !0) {
        this.sortByProp('lastDeathsPercent', t);
      }
      sortByPopulation(t = !0) {
        this.sortByProp('population', t);
      }
      sortByPopulationDensity(t = !0) {
        this.sortByProp('populationDensity', t);
      }
      sortByRecoveries(t = !0) {
        this.sortByProp('lastRecoveries', t);
      }
      sortByRecoveriesPercent(t = !0) {
        this.sortByProp('lastRecoveriesPercent', t);
      }
    }
    const Wt = (Gt || []).reduce(
        (t, e) => ((t[e.country] = parseInt(e.population, 10)), t),
        {}
      ),
      Jt = (Et || []).reduce(
        (t, e) => (
          (t[e.country] = null === e.density ? null : parseInt(e.density, 10)),
          t
        ),
        {}
      ),
      Zt = [
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
      ];
    function Yt() {
      return Promise.all(Zt.map(t => fetch(t)))
        .then(ie)
        .then(le)
        .then($t)
        .then(qt)
        .then(Xt)
        .then(ne)
        .then(ee)
        .then(Qt)
        .then(ce);
    }
    function qt(t) {
      return delete t.CA, t;
    }
    function Qt(t) {
      const e = {},
        n = mt(
          t,
          (t, n, a) => {
            if (n.locale) return t;
            const o = Ht.create(n);
            return t.push(o), (e[a] = o), t;
          },
          Vt.create()
        );
      return { dictionary: e, timeSeries: n };
    }
    function $t(t) {
      const e = {},
        n = n => a => {
          const o = Rt[a.country];
          if (!o) return void _t('country not found', a.country);
          let i = o,
            r = '';
          if (a.state) {
            const t = Lt[a.country];
            if (!t) return;
            if (((r = t[a.state]), !r))
              return void _t('state not found', a.coutry + ',', a.state);
            i = i + '.' + r;
          }
          a.locale && (i = i + '.' + a.locale),
            e[i]
              ? a.timeSeries.map((t, a) => {
                  void 0 === e[i].counts[a] &&
                    (_t('Warning: unexpected length:', n),
                    (e[i].counts[a] = {
                      active: 0,
                      confirmed: 0,
                      deaths: 0,
                      recoveries: 0,
                      projectionReverseDeath: 0,
                    })),
                    (e[i].counts[a][n] = t);
                })
              : (e[i] = {
                  country: a.country,
                  countryCode: o,
                  counts: a.timeSeries.map(t => {
                    const e = {
                      active: 0,
                      confirmed: 0,
                      deaths: 0,
                      recoveries: 0,
                      projectionReverseDeath: 0,
                    };
                    return (e[n] = t), e;
                  }),
                  dates: t[0][0],
                  key: i,
                  locale: a.locale,
                  population: a.population,
                  populationDensity: a.populationDensity,
                  state: a.state,
                  stateCode: r,
                });
        };
      return (
        t[0][1].forEach(n('confirmed')),
        t[1][1].forEach(n('deaths')),
        t[2][1].forEach(n('recoveries')),
        e
      );
    }
    function Xt(t) {
      return (
        ft(t, t => {
          t.counts.forEach((t, e, n) => {
            (t.recoveries = (function(t, e, n, a) {
              if (t.confirmed) {
                if (!(t.recoveries < 1)) return t.recoveries;
                if (n[e - a] && n[e - a - 1]) {
                  const t = n[e - a - 1].confirmed,
                    o = n[e - a].confirmed - t;
                  return n[e - 1] ? o + n[e - 1].recoveries : o;
                }
              } else
                t.deaths &&
                  _t(
                    'Warning: data seems odd, there are deaths but no confirmed cases'
                  ),
                  t.recoveries &&
                    _t(
                      'Warning: data seems odd, there are recoveries but no confirmed cases'
                    );
              return 0;
            })(t, e, n, 25)),
              (t.active = t.confirmed - t.deaths - t.recoveries),
              (t.projectionReverseDeath = (function(t) {
                const e = t.deaths / ot.fatalityRate,
                  n = ot.daysFromInfectionToDeath / ot.doublingTime;
                return e * Math.pow(2, n);
              })(t));
          });
        }),
        t
      );
    }
    function te(t, e) {
      return {
        active: t.active + e.active,
        confirmed: t.confirmed + e.confirmed,
        deaths: t.deaths + e.deaths,
        recoveries: t.recoveries + e.recoveries,
        projectionReverseDeath:
          t.projectionReverseDeath + e.projectionReverseDeath,
      };
    }
    function ee(t) {
      const e = {
        country: 'World',
        countryCode: 'World',
        dates: [],
        key: 'World',
        locale: '',
        population: 0,
        populationDensity: 0,
        state: '',
        stateCode: '',
        counts: [],
      };
      return (
        ft(t, t => {
          t.locale ||
            (t.state && 'Total' !== t.state) ||
            ((e.population += t.population),
            t.counts.forEach((t, n) => {
              e.counts[n]
                ? (e.counts[n] = te(e.counts[n], t))
                : (e.counts[n] = Object.assign({}, t));
            }));
        }),
        (t.World = e),
        t
      );
    }
    function ne(t) {
      return (
        ft(t, e => {
          if ('Total' !== e.state && e.state) {
            if (e.locale) return;
            if (t[e.countryCode]) return;
            const n = e.countryCode + '.Total';
            void 0 === t[n] &&
              (t[n] = Object.assign(Object.assign({}, e), {
                key: n,
                locale: '',
                population: ae(e.country),
                populationDensity: oe(e.country),
                state: 'Total',
                counts: [],
              })),
              e.counts.forEach((e, a) => {
                t[n].counts[a]
                  ? (t[n].counts[a] = te(t[n].counts[a], e))
                  : (t[n].counts[a] = e);
              });
          }
        }),
        t
      );
    }
    function ae(t, e, n) {
      if (n) return 0;
      if (e)
        return (function(t, e, n) {
          if (n) return 0;
          if (Ft[t])
            if ('US' === t) {
              const n = Kt[e];
              if (n) {
                const e = 'D.C.' === n ? 'DC' : n;
                if (Ft[t][e]) return Ft[t][e];
              }
            } else if (Ft[t][e]) return Ft[t][e];
          return 0;
        })(t, e, n);
      let a = Wt[t];
      return (
        a ||
        ((a = Wt[jt[t]]),
        a || ((a = xt[t]), a || (_t('population not found for', t, e, n), 0)))
      );
    }
    function oe(t, e, n) {
      if (e || n) return 0;
      let a = Jt[t];
      return a || ((a = Jt[jt[t]]), a || 0);
    }
    function ie(t) {
      return Promise.all(t.map(t => t.text()));
    }
    function re(t) {
      const e = t.split(''),
        n = { buffer: '', isEscape: !1, isInQuote: !1 },
        a = () => {
          n.isEscape ? (n.isEscape = !1) : (n.isEscape = !0);
        };
      return e.reduce(
        (t, e, o, i) =>
          '"' === e
            ? (n.isEscape
                ? ((n.buffer += e), a())
                : n.isInQuote
                ? (n.isInQuote = !1)
                : (n.isInQuote = !0),
              t)
            : '\\' === e
            ? (n.isEscape ? ((n.buffer += e), a()) : a(), t)
            : ',' === e
            ? (n.isInQuote
                ? (n.buffer += e)
                : (t.push(n.buffer), (n.buffer = '')),
              t)
            : ((n.buffer += e),
              o === i.length - 1 && (t.push(n.buffer), (n.buffer = '')),
              t),
        []
      );
    }
    function se(t) {
      const e = t[1],
        [n, a] = (function(t) {
          if (t.indexOf(',') > -1) {
            const e = t.split(',').filter(Boolean);
            return [e[0].trim(), e[1].trim()];
          }
          return ['', t];
        })(t[0]);
      return {
        country: e,
        locale: n,
        population: ae(e, a, n),
        populationDensity: oe(e, a, n),
        state: a,
        timeSeries: t.slice(4).map(t => parseInt(t, 10)),
      };
    }
    function ue(t) {
      const e = t.split('\n');
      return [
        (function(t) {
          return t
            .split(',')
            .slice(4)
            .map(t => new Date(t));
        })(e[0]),
        e
          .slice(1)
          .map(re)
          .filter(t => t.length)
          .map(se),
      ];
    }
    function le(t) {
      return t.map(ue);
    }
    function ce({ dictionary: t, timeSeries: e }) {
      var n;
      return {
        countries: mt(
          t,
          (t, e, n) => {
            if (e.locale()) return t;
            const a = e.countryName();
            return t.push({ index: n, name: a }), t;
          },
          []
        ).sort(
          ((n = 'name'), (t, e) => (t[n] < e[n] ? -1 : t[n] > e[n] ? 1 : 0))
        ),
        dictionary: t,
        timeSeries: e,
      };
    }
    function pe(t) {
      switch (t) {
        case 0:
          return '😷 (Active)';
        case 1:
          return '✔ (Confirmed)';
        case 2:
          return '☠ (Deaths)';
        case 3:
          return '😊 (Recoveries)';
        case 4:
          return '🤔 (Estimate)';
        default:
          return '😊 (Recovery)';
      }
    }
    function de(t, e) {
      return e.dataPromise.then(({ countries: n, timeSeries: a }) => {
        let o = 0;
        return {
          countries: n,
          series: a.reduce(
            (n, a) =>
              e.countryKeys.indexOf(a.key()) > -1
                ? (function(t, e, n, a, o) {
                    switch (e.lineGraphState.mode) {
                      case 1:
                        return ye(t, e, n, a, o, 1);
                      case 2:
                        return ye(t, e, n, a, o, 100);
                      default:
                        return (function(t, e, n, a, o) {
                          const i = new Date(e.lineGraphState.startDate);
                          return (
                            e.lineGraphState.dataSetIndexes.forEach(t => {
                              const r =
                                  t > 3 ? rt[o % rt.length] : it[o % it.length],
                                s = he(t),
                                u = {
                                  color: r,
                                  line: { color: r },
                                  name: pe(t) + ' ' + a.countryName(),
                                  points: [],
                                };
                              (u.points = a.counts().reduce((t, n, o) => {
                                if (a.dates()[o] && a.dates()[o] > i) {
                                  const i = fe(
                                    e.lineGraphState.byMetric,
                                    n[s],
                                    a.population()
                                  );
                                  i && t.push({ x: a.dates()[o], y: i });
                                }
                                return t;
                              }, [])),
                                n.push(u);
                            }),
                            n
                          );
                        })(0, e, n, a, o);
                    }
                  })(t, e, n, a, o++)
                : n,
            []
          ),
        };
      });
    }
    function ye(t, e, n, a, o, i) {
      const r = new Date(e.lineGraphState.startDate);
      return (
        e.lineGraphState.dataSetIndexes.forEach(t => {
          const s = he(t),
            u = t > 3 ? rt[o % rt.length] : it[o % it.length],
            l = {
              color: u,
              line: { color: u },
              name: pe(t) + ' ' + a.countryName(),
              points: [],
            };
          let c = 0;
          (l.points = a.counts().reduce((t, n, o) => {
            if (a.dates()[o] && a.dates()[o] > r && n.confirmed >= i) {
              const o = fe(e.lineGraphState.byMetric, n[s], a.population());
              o && t.push({ x: c, y: o }), (c += 1);
            }
            return t;
          }, [])),
            n.push(l);
        }),
        n
      );
    }
    function he(t) {
      switch (t) {
        case 0:
          return 'active';
        case 1:
          return 'confirmed';
        case 2:
          return 'deaths';
        case 3:
          return 'recoveries';
        case 4:
          return 'projectionReverseDeath';
        default:
          return 'recoveries';
      }
    }
    function fe(t, e, n) {
      return 0 === t ? e : n ? e / n : 0;
    }
    const me = [];
    function ge() {
      if (window.localStorage) {
        const t = window.localStorage.getItem('state');
        if (t)
          try {
            const e = JSON.parse(t);
            return e
              ? !1 ===
                (function(t) {
                  if (!t) return !1;
                  if (!1 === Array.isArray(t.countries)) return !1;
                  if (!1 === Array.isArray(t.currentSeries)) return !1;
                  if (
                    !1 ===
                    (function(t) {
                      if (!t) return !1;
                      if (!1 === pt(t.isConfigOpen)) return !1;
                      if (!1 === dt(t.byMetric)) return !1;
                      if (!1 === yt(t.countryFilter)) return !1;
                      if (!1 === Array.isArray(t.dataSetIndexes)) return !1;
                      if (!1 === dt(t.mode)) return !1;
                      if ('boolean' != typeof t.showStates) return !1;
                      if (!1 === yt(t.startDate)) return !1;
                      return !0;
                    })(t.lineGraphState)
                  )
                    return !1;
                  if (!1 === Array.isArray(t.countryKeys)) return !1;
                  return (function(t) {
                    if (!t) return !1;
                    if (!1 === Array.isArray(t.columns)) return !1;
                    if (!1 === pt(t.isConfigOpen)) return !1;
                    if (!1 === pt(t.showAll)) return !1;
                    if (!1 === pt(t.sortByActive)) return !1;
                    if (!1 === pt(t.sortByActivePercent)) return !1;
                    if (!1 === pt(t.sortByConfirmed)) return !1;
                    if (!1 === pt(t.sortByConfirmedPercent)) return !1;
                    if (!1 === pt(t.sortByDeaths)) return !1;
                    if (!1 === pt(t.sortByDeathsPercent)) return !1;
                    if (!1 === pt(t.sortByRecoveries)) return !1;
                    if (!1 === pt(t.sortByRecoveriesPercent)) return !1;
                    if (!1 === pt(t.sortByPopulation)) return !1;
                    if (!1 === pt(t.sortByPopulationDensity)) return !1;
                    return !0;
                  })(t.tableState);
                })(e)
                ? (_t('Upgrade: Wiping old state'),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, e), {
                    dataPromise: Yt(),
                    data: Vt.create(),
                  })
              : null;
          } catch (t) {
            return (
              _t('Failed to parse saved state, resetting localStorage'),
              window.localStorage.setItem('state', ''),
              null
            );
          }
      }
      return null;
    }
    const be = [
      { label: 'Region', sort: 'sortByCountry' },
      { label: 'Active*', sort: 'sortByActive' },
      { label: 'Active* %', sort: 'sortByActivePercent' },
      { label: 'Confirmed', sort: 'sortByConfirmed' },
      { label: 'Confirmed %', sort: 'sortByConfirmedPercent' },
      { label: 'Deaths', sort: 'sortByDeaths' },
      { label: 'Deaths %', sort: 'sortByDeathsPercent' },
      { label: 'Recoveries*', sort: 'sortByRecoveries' },
      { label: 'Recoveries* %', sort: 'sortByRecoveriesPercent' },
      { label: 'Mortality', sort: 'sortByMortality' },
      { label: 'Population', sort: 'sortByPopulation' },
      { label: 'Population Density', sort: 'sortByPopulationDensity' },
    ];
    class Se extends g {
      constructor() {
        super(), (this.state = {});
      }
      formatNumber(t) {
        return t.toLocaleString();
      }
      formatDecimal(t, e = 2) {
        return t.toFixed(e);
      }
      formatPercent(t, e = 2) {
        return this.formatDecimal(t, e) + '%';
      }
      clickHeader(t) {
        this.props.timeSeries[t.sort](this.props.state[t.sort]),
          this.props.onChange(
            Object.assign(Object.assign({}, this.props.state), {
              [t.sort]: !this.props.state[t.sort],
            })
          );
      }
      toggleConfig(t) {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            isConfigOpen: t,
          })
        );
      }
      toggleShowAll() {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            showAll: !this.props.state.showAll,
          })
        );
      }
      onChangeColumns(t) {
        -1 === this.props.state.columns.indexOf(t)
          ? this.props.state.columns.length < 7
            ? this.props.onChange(
                Object.assign(Object.assign({}, this.props.state), {
                  columns: this.props.state.columns.concat([t]),
                })
              )
            : this.props.onChange(
                Object.assign(Object.assign({}, this.props.state), {
                  columns: this.props.state.columns.slice(0),
                })
              )
          : this.props.onChange(
              Object.assign(Object.assign({}, this.props.state), {
                columns: this.props.state.columns.filter(e => e !== t),
              })
            );
      }
      render() {
        const t =
            window.document.body.clientHeight *
            (this.props.state.isConfigOpen ? 0.6 : 0.82),
          e = `width: ${100 / (this.props.state.columns.length || 1)}%;`;
        return h(
          'section',
          { className: `full-size ${at}` },
          h(
            'section',
            {
              className: this.props.state.isConfigOpen
                ? 'flex-item-60'
                : 'flex-item-95',
            },
            h(
              'table',
              {
                style: `height: ${
                  this.props.state.isConfigOpen ? 83 : 90
                }%; width: 100%;`,
              },
              h(
                'thead',
                null,
                h(
                  'tr',
                  null,
                  be.map((t, n) =>
                    0 === n || this.props.state.columns.indexOf(n) > -1
                      ? h(
                          'th',
                          { style: e, onClick: () => this.clickHeader(t) },
                          t.label
                        )
                      : ''
                  )
                )
              ),
              h(
                'tbody',
                { style: `overflow: auto; max-height: ${t}px;` },
                this.props.timeSeries.map((t, n) => {
                  if (t.counts().length < 1) return '';
                  if (
                    !1 === this.props.state.showAll &&
                    -1 === this.props.countryKeys.indexOf(t.key())
                  )
                    return '';
                  const a = t.country() + (t.state() ? ', ' + t.state() : ''),
                    o = n % 2 == 0 ? 'row-even' : 'row-odd';
                  return h(
                    'tr',
                    {
                      className:
                        this.props.countryKeys.indexOf(t.key()) > -1
                          ? 'row-highlight ' + o
                          : o,
                      onClick: () => this.props.selectCountry(t.key()),
                    },
                    h('td', { style: e }, a),
                    this.props.state.columns.indexOf(1) > -1
                      ? h('td', { style: e }, this.formatNumber(t.lastActive()))
                      : '',
                    this.props.state.columns.indexOf(2) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatDecimal(t.lastActivePercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(3) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatNumber(t.lastConfirmed())
                        )
                      : '',
                    this.props.state.columns.indexOf(4) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatDecimal(t.lastConfirmedPercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(5) > -1
                      ? h('td', { style: e }, this.formatNumber(t.lastDeaths()))
                      : '',
                    this.props.state.columns.indexOf(6) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatDecimal(t.lastDeathsPercent(), 4)
                        )
                      : '',
                    this.props.state.columns.indexOf(7) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatNumber(t.lastRecoveries())
                        )
                      : '',
                    this.props.state.columns.indexOf(8) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatDecimal(t.lastRecoveriesPercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(9) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatDecimal(t.lastMortality(), 2)
                        )
                      : '',
                    this.props.state.columns.indexOf(10) > -1
                      ? h('td', { style: e }, this.formatNumber(t.population()))
                      : '',
                    this.props.state.columns.indexOf(11) > -1
                      ? h(
                          'td',
                          { style: e },
                          this.formatNumber(
                            null === t.populationDensity()
                              ? 0
                              : t.populationDensity()
                          ) + '/km2'
                        )
                      : ''
                  );
                })
              )
            )
          ),
          h(
            'section',
            null,
            h(
              'section',
              { className: nt },
              h(Tt, {
                labelTrue: '✗ Enlarge Table',
                labelFalse: '⚙️ Configure Table',
                onClick: this.toggleConfig.bind(this),
                state: this.props.state.isConfigOpen,
              }),
              h(Pt, { config: this.props.menu })
            ),
            this.props.state.isConfigOpen
              ? h(
                  'section',
                  { className: nt },
                  h(bt, {
                    onChange: ht,
                    onClick: t =>
                      this.onChangeColumns(parseInt(t + '', 10) + 1),
                    options: be.map(t => t.label).slice(1),
                    selected: this.props.state.columns.map(t => t - 1),
                  }),
                  h(gt, {
                    onChange: this.toggleShowAll.bind(this),
                    options: ['Show All', 'Only Selected'],
                    selected: this.props.state.showAll ? 0 : 1,
                  })
                )
              : ''
          )
        );
      }
    }
    function Ce() {
      return h(
        'header',
        { class: 'small-text' },
        'COVID-19',
        h(
          'a',
          {
            href: 'https://github.com/CSSEGISandData/COVID-19',
            target: '_blank',
            title:
              'GitHub repository of source data maintained by Johns Hopkins University',
          },
          'Johns Hopkins University Source Data'
        ),
        'Explorer (',
        h(
          'a',
          {
            href: 'https://github.com/bennett000/covid-19',
            target: '_blank',
            title: 'Source code to this website',
          },
          'source code'
        ),
        ' ',
        '|',
        h(
          'a',
          {
            href: 'https://github.com/bennett000/covid-19/issues',
            target: '_blank',
            title: 'Provide feedback, suggest features, file issues, etc',
          },
          'feedback'
        ),
        ')'
      );
    }
    class ve extends g {
      constructor() {
        super();
        const t = window.document.createElement('div');
        if (!t) throw new Error('could not add the chart to the DOM');
        this.state = { chartDiv: t };
      }
      componentDidMount() {
        this.base.id = 'chartMapDiv';
      }
      componentDidUpdate() {
        JSC.Chart('chartMapDiv', {
          type: 'map',
          defaultPoint: { tooltip: this.props.toolTip, z: 0 },
          palette: {
            pointValue: t => t.options('z'),
            ranges: this.props.ranges,
          },
          series: this.props.series,
        });
      }
      render() {
        return h('div', { className: 'full-size' });
      }
    }
    class Ae extends g {
      constructor() {
        super(),
          (this.state = {
            dataSet: 0,
            map: 'world',
            toolTip: '<b>%name<b/> <br/>Active Cases: %zValue',
          }),
          (this.getSeries = this.getCountrySeries);
      }
      componentDidMount() {
        this.setState(Object.assign({}, this.state));
      }
      countryFromClick(t) {
        return t &&
          t.currentTarget &&
          t.currentTarget.currentOptions &&
          t.currentTarget.currentOptions.map &&
          t.currentTarget.currentOptions.map.properties &&
          t.currentTarget.currentOptions.map.properties.mapcode
          ? t.currentTarget.currentOptions.map.properties.mapcode
          : null;
      }
      continentFromClick(t) {
        return t &&
          t.currentTarget &&
          t.currentTarget.currentOptions &&
          t.currentTarget.currentOptions.map &&
          t.currentTarget.currentOptions.map.properties &&
          t.currentTarget.currentOptions.map.properties.continent
          ? t.currentTarget.currentOptions.map.properties.continent
          : null;
      }
      onMapClick(t) {
        switch (this.countryFromClick(t).toLowerCase()) {
          case 'au':
            (this.getSeries = this.getStateSeries.bind(
              this,
              'Australia',
              'AU'
            )),
              this.setState(
                Object.assign(Object.assign({}, this.state), { map: 'au' })
              );
            break;
          case 'ca':
            (this.getSeries = this.getStateSeries.bind(this, 'Canada', 'CA')),
              this.setState(
                Object.assign(Object.assign({}, this.state), { map: 'ca' })
              );
            break;
          case 'cn':
            (this.getSeries = this.getStateSeries.bind(this, 'China', 'CN')),
              this.setState(
                Object.assign(Object.assign({}, this.state), { map: 'cn' })
              );
            break;
          default:
            this.tryContinent(t);
        }
      }
      tryContinent(t) {
        const e = this.continentFromClick(t);
        if (!e) return;
        let n = e;
        ('North America' !== e && 'South America' !== e) || (n = 'Americas'),
          (this.getSeries = this.getContinentSeries.bind(this, e)),
          this.setState(
            Object.assign(Object.assign({}, this.state), { map: n })
          );
      }
      getCountrySeries() {
        let t = 0;
        const e = [];
        return (
          this.props.timeSeries.forEach(n => {
            const a = n.countryCode();
            if (Ut[a]) return null;
            if (n.state() && 'Total' !== n.state()) return null;
            if (n.locale()) return null;
            if (!n.population()) return null;
            const o = Me(this.state.dataSet, n);
            if (o < 1) return null;
            o > t && (t = o), e.push({ map: 'WORLD.' + a.toLowerCase(), z: o });
          }),
          {
            ranges: ke(this.state.dataSet),
            series: [
              {
                defaultPoint_events_click: this.onMapClick.bind(this),
                map: this.state.map,
                points: e,
              },
            ],
          }
        );
      }
      getContinentSeries(t) {
        let e = 0;
        const n = [];
        return (
          this.props.timeSeries.forEach(a => {
            const o = zt[a.country()];
            if (!o) return null;
            if (
              o !== t &&
              !(o.indexOf('America') > -1 && t.indexOf('America') > -1)
            )
              return null;
            if (a.state()) {
              if ('Total' !== a.state()) return null;
              if (a.locale()) return null;
            }
            const i = a.countryCode();
            if (Ut[i]) return null;
            const r = Me(this.state.dataSet, a);
            if (r < 1) return null;
            r > e && (e = r), n.push({ map: i.toLowerCase(), z: r });
          }),
          {
            ranges: ke(this.state.dataSet),
            series: [
              {
                defaultPoint_events_click: this.onMapClick.bind(this),
                map: this.state.map,
                points: n,
              },
            ],
          }
        );
      }
      getStateSeries(t, e) {
        let n = 0;
        const a = [];
        return (
          this.props.timeSeries.forEach(o => {
            if (o.country() !== t) return null;
            if ('Total' === o.state()) return null;
            if (o.locale()) return null;
            let i = Lt[t];
            if (!i) {
              if ('US' !== e) return null;
              i = Kt;
            }
            const r = o.stateCode();
            if (Ut[o.countryCode() + '.' + r]) return null;
            const s = Me(this.state.dataSet, o);
            if (s < 1) return null;
            s > n && (n = s), a.push({ map: e + '.' + r, z: s });
          }),
          {
            ranges: ke(this.state.dataSet),
            series: [
              {
                defaultPoint_events_click: this.onMapClick.bind(this),
                map: this.state.map,
                points: a,
              },
            ],
          }
        );
      }
      onChangeDataSet(t) {
        const e = parseInt(t + '', 10);
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            dataSet: e,
            toolTip: _e(e),
          })
        );
      }
      zoomOut() {
        (this.getSeries = this.getCountrySeries),
          'world' !== this.state.map &&
            this.setState(
              Object.assign(Object.assign({}, this.state), { map: 'world' })
            );
      }
      render() {
        const { ranges: t, series: e } = this.getSeries();
        return h(
          'section',
          { onClick: this.zoomOut.bind(this), className: `full-size ${at}` },
          h(ve, { ranges: t, series: e, toolTip: this.state.toolTip }),
          h(
            'section',
            { className: nt },
            h(gt, {
              onChange: this.onChangeDataSet.bind(this),
              options: [
                'Active Cases*',
                'Confirmed Cases',
                'Deaths',
                'Recoveries*',
              ],
              selected: this.state.dataSet,
            }),
            h(Pt, { config: this.props.menu })
          )
        );
      }
    }
    function _e(t) {
      switch (t) {
        case 0:
          return '<b>%name<b/> <br/>Active Cases: %zValue';
        case 1:
          return '<b>%name<b/> <br/>Confirmed Cases: %zValue';
        case 2:
          return '<b>%name<b/> <br/>Deaths: %zValue';
        case 3:
          return '<b>%name<b/> <br/>Recoveries: %zValue';
        default:
          return '<b>%name<b/> <br/>Active Cases: %zValue';
      }
    }
    function Me(t, e) {
      switch (t) {
        case 0:
          return e.lastActive();
        case 1:
          return e.lastConfirmed();
        case 2:
          return e.lastDeaths();
        case 3:
          return e.lastRecoveries();
        default:
          return e.lastActive();
      }
    }
    function ke(t) {
      switch (t) {
        case 0:
          return st;
        case 1:
          return ut;
        case 2:
          return lt;
        case 3:
          return ct;
        default:
          return st;
      }
    }
    class Ne extends g {
      constructor() {
        super();
        let t = ge();
        t ||
          (_t('No existing state'),
          (t = {
            countries: [],
            currentSeries: [],
            data: Vt.create(),
            dataPromise: Yt(),
            countryKeys: me,
            routePath: '/',
            lineGraphState: {
              dataSetIndexes: [0],
              byMetric: 0,
              countryFilter: '',
              isConfigOpen: !1,
              mode: 2,
              scaleType: 0,
              showStates: !1,
              startDate: '2019-12-26',
            },
            tableState: {
              columns: [1, 3, 5, 7, 9],
              isConfigOpen: !1,
              showAll: !0,
              sortByActive: !1,
              sortByActivePercent: !1,
              sortByConfirmed: !1,
              sortByConfirmedPercent: !1,
              sortByDeaths: !1,
              sortByDeathsPercent: !1,
              sortByRecoveries: !1,
              sortByRecoveriesPercent: !1,
              sortByPopulation: !1,
              sortByPopulationDensity: !1,
            },
          })),
          (this.state = t),
          this.selectAndUpdate();
        const e = ['/', '/table', '/geography'];
        this.menu = {
          labels: ['Chart', 'Table', 'Geography'],
          onClick: t => {
            const n = e[t] || e[0];
            this.setState(
              Object.assign(Object.assign({}, this.state), { routePath: n })
            ),
              (this.menu.selected = t),
              W(n),
              this.selectAndUpdate();
          },
          selected: e.indexOf(this.state.routePath),
        };
      }
      updateSelectState({ countries: t, series: e }) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            countries: t,
            currentSeries: e,
          })
        );
      }
      selectAndUpdate() {
        this.state.dataPromise
          .then(
            ({ timeSeries: t }) => (
              this.setState(
                Object.assign(Object.assign({}, this.state), { data: t })
              ),
              de(this.props.cache, this.state)
            )
          )
          .then(this.updateSelectState.bind(this))
          .then(() => {
            return (
              (t = this.state),
              void (
                window.localStorage &&
                window.localStorage.setItem(
                  'state',
                  JSON.stringify(
                    Object.assign(Object.assign({}, t), {
                      data: void 0,
                      dataPromise: void 0,
                    })
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
      tableState(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { tableState: t })
        ),
          this.selectAndUpdate();
      }
      reload() {
        this.props.reset(),
          this.setState(
            Object.assign(Object.assign({}, this.state), {
              dataPromise: Yt().then(t => (this.selectAndUpdate(), t)),
            })
          );
      }
      clearCountries() {
        this.setState(
          Object.assign(Object.assign({}, this.state), { countryKeys: [] })
        ),
          this.selectAndUpdate();
      }
      selectCountry(t) {
        this.state.countryKeys.indexOf(t) > -1
          ? this.setState(
              Object.assign(Object.assign({}, this.state), {
                countryKeys: this.state.countryKeys.filter(e => e !== t),
              })
            )
          : this.setState(
              Object.assign(Object.assign({}, this.state), {
                countryKeys: this.state.countryKeys.concat([t]),
              })
            ),
          this.selectAndUpdate();
      }
      render() {
        return h(
          'div',
          { className: `full-size ${at}` },
          h(Ce, null),
          h(
            tt,
            null,
            h(Dt, {
              path: '/',
              clearCountries: this.clearCountries.bind(this),
              countries: this.state.countries,
              countryKeys: this.state.countryKeys,
              currentSeries: this.state.currentSeries,
              menu: this.menu,
              onChange: this.lineGraphState.bind(this),
              key: '0',
              reload: this.reload.bind(this),
              selectCountry: this.selectCountry.bind(this),
              state: this.state.lineGraphState,
            }),
            h(Se, {
              countryKeys: this.state.countryKeys,
              key: '1',
              onChange: this.tableState.bind(this),
              menu: this.menu,
              path: '/table',
              state: this.state.tableState,
              selectCountry: this.selectCountry.bind(this),
              timeSeries: this.state.data,
            }),
            h(Ae, {
              key: '2',
              path: '/geography',
              menu: this.menu,
              timeSeries: this.state.data,
            })
          )
        );
      }
    }
    !(function() {
      const t = window.document.createElement('section');
      if (((t.className = 'full-size'), !t))
        throw new Error('Could not bootstrap the application');
      window.document.body.appendChild(t),
        (function(t) {
          let e = {};
          D(h(Ne, { cache: e, reset: () => (e = {}) }), t);
        })(t);
    })();
  },
]);
