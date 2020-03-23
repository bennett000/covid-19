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
    e((e.s = 2));
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
  function(t, n, e) {
    'use strict';
    e.r(n);
    var o,
      a,
      i,
      r,
      s,
      u,
      l = {},
      c = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function y(t, n) {
      for (var e in n) t[e] = n[e];
      return t;
    }
    function d(t) {
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
    function g(t, n) {
      (this.props = t), (this.context = n);
    }
    function b(t, n) {
      if (null == n) return t.__ ? b(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var e; n < t.__k.length; n++)
        if (null != (e = t.__k[n]) && null != e.__e) return e.__e;
      return 'function' == typeof t.type ? b(t) : null;
    }
    function S(t) {
      var n, e;
      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
          if (null != (e = t.__k[n]) && null != e.__e) {
            t.__e = t.__c.base = e.__e;
            break;
          }
        return S(t);
      }
    }
    function C(t) {
      ((!t.__d && (t.__d = !0) && a.push(t) && !i++) ||
        s !== o.debounceRendering) &&
        ((s = o.debounceRendering) || r)(_);
    }
    function _() {
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
                  y({}, a),
                  n.__n,
                  void 0 !== r.ownerSVGElement,
                  null,
                  e,
                  null == i ? b(a) : i
                )),
                w(e, a),
                o != i && S(a)));
          });
    }
    function v(t, n, e, o, a, i, r, s, u) {
      var p,
        y,
        h,
        f,
        m,
        g,
        S,
        C = (e && e.__k) || c,
        _ = C.length;
      if (
        (s == l && (s = null != i ? i[0] : _ ? b(e, 0) : null),
        (p = 0),
        (n.__k = I(n.__k, function(e) {
          if (null != e) {
            if (
              ((e.__ = n),
              (e.__b = n.__b + 1),
              null === (h = C[p]) || (h && e.key == h.key && e.type === h.type))
            )
              C[p] = void 0;
            else
              for (y = 0; y < _; y++) {
                if ((h = C[y]) && e.key == h.key && e.type === h.type) {
                  C[y] = void 0;
                  break;
                }
                h = null;
              }
            if (
              ((f = O(t, e, (h = h || l), o, a, i, r, s, u)),
              (y = e.ref) &&
                h.ref != y &&
                (S || (S = []),
                h.ref && S.push(h.ref, null, e),
                S.push(y, e.__c || f, e)),
              null != f)
            ) {
              var c;
              if ((null == g && (g = f), void 0 !== e.__d))
                (c = e.__d), (e.__d = void 0);
              else if (i == h || f != s || null == f.parentNode) {
                t: if (null == s || s.parentNode !== t)
                  t.appendChild(f), (c = null);
                else {
                  for (m = s, y = 0; (m = m.nextSibling) && y < _; y += 2)
                    if (m == f) break t;
                  t.insertBefore(f, s), (c = s);
                }
                'option' == n.type && (t.value = '');
              }
              (s = void 0 !== c ? c : f.nextSibling),
                'function' == typeof n.type && (n.__d = s);
            } else s && h.__e == s && s.parentNode != t && (s = b(h));
          }
          return p++, e;
        })),
        (n.__e = g),
        null != i && 'function' != typeof n.type)
      )
        for (p = i.length; p--; ) null != i[p] && d(i[p]);
      for (p = _; p--; ) null != C[p] && D(C[p], C[p]);
      if (S) for (p = 0; p < S.length; p++) P(S[p], S[++p], S[++p]);
    }
    function I(t, n, e) {
      if ((null == e && (e = []), null == t || 'boolean' == typeof t))
        n && e.push(n(null));
      else if (Array.isArray(t))
        for (var o = 0; o < t.length; o++) I(t[o], n, e);
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
    function A(t, n, e) {
      '-' === n[0]
        ? t.setProperty(n, e)
        : (t[n] =
            'number' == typeof e && !1 === p.test(n)
              ? e + 'px'
              : null == e
              ? ''
              : e);
    }
    function M(t, n, e, o, a) {
      var i, r, s, u, l;
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
            for (r in o) (e && r in e) || A(i, r, '');
          if (e) for (s in e) (o && e[s] === o[s]) || A(i, s, e[s]);
        }
      else
        'o' === n[0] && 'n' === n[1]
          ? ((u = n !== (n = n.replace(/Capture$/, ''))),
            (l = n.toLowerCase()),
            (n = (l in t ? l : n).slice(2)),
            e
              ? (o || t.addEventListener(n, k, u), ((t.l || (t.l = {}))[n] = e))
              : t.removeEventListener(n, k, u))
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
    function k(t) {
      this.l[t.type](o.event ? o.event(t) : t);
    }
    function O(t, n, e, a, i, r, s, u, l) {
      var c,
        p,
        d,
        h,
        f,
        b,
        S,
        C,
        _,
        I,
        A = n.type;
      if (void 0 !== n.constructor) return null;
      (c = o.__b) && c(n);
      try {
        t: if ('function' == typeof A) {
          if (
            ((C = n.props),
            (_ = (c = A.contextType) && a[c.__c]),
            (I = c ? (_ ? _.props.value : c.__) : a),
            e.__c
              ? (S = (p = n.__c = e.__c).__ = p.__E)
              : ('prototype' in A && A.prototype.render
                  ? (n.__c = p = new A(C, I))
                  : ((n.__c = p = new g(C, I)),
                    (p.constructor = A),
                    (p.render = x)),
                _ && _.sub(p),
                (p.props = C),
                p.state || (p.state = {}),
                (p.context = I),
                (p.__n = a),
                (d = p.__d = !0),
                (p.__h = [])),
            null == p.__s && (p.__s = p.state),
            null != A.getDerivedStateFromProps &&
              (p.__s == p.state && (p.__s = y({}, p.__s)),
              y(p.__s, A.getDerivedStateFromProps(C, p.__s))),
            (h = p.props),
            (f = p.state),
            d)
          )
            null == A.getDerivedStateFromProps &&
              null != p.componentWillMount &&
              p.componentWillMount(),
              null != p.componentDidMount && p.__h.push(p.componentDidMount);
          else {
            if (
              (null == A.getDerivedStateFromProps &&
                C !== h &&
                null != p.componentWillReceiveProps &&
                p.componentWillReceiveProps(C, I),
              !p.__e &&
                null != p.shouldComponentUpdate &&
                !1 === p.shouldComponentUpdate(C, p.__s, I))
            ) {
              for (
                p.props = C,
                  p.state = p.__s,
                  p.__d = !1,
                  p.__v = n,
                  n.__e = e.__e,
                  n.__k = e.__k,
                  p.__h.length && s.push(p),
                  c = 0;
                c < n.__k.length;
                c++
              )
                n.__k[c] && (n.__k[c].__ = n);
              break t;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(C, p.__s, I),
              null != p.componentDidUpdate &&
                p.__h.push(function() {
                  p.componentDidUpdate(h, f, b);
                });
          }
          (p.context = I),
            (p.props = C),
            (p.state = p.__s),
            (c = o.__r) && c(n),
            (p.__d = !1),
            (p.__v = n),
            (p.__P = t),
            (c = p.render(p.props, p.state, p.context)),
            (n.__k =
              null != c && c.type == m && null == c.key
                ? c.props.children
                : Array.isArray(c)
                ? c
                : [c]),
            null != p.getChildContext && (a = y(y({}, a), p.getChildContext())),
            d ||
              null == p.getSnapshotBeforeUpdate ||
              (b = p.getSnapshotBeforeUpdate(h, f)),
            v(t, n, e, a, i, r, s, u, l),
            (p.base = n.__e),
            p.__h.length && s.push(p),
            S && (p.__E = p.__ = null),
            (p.__e = !1);
        } else n.__e = N(e.__e, n, e, a, i, r, s, l);
        (c = o.diffed) && c(n);
      } catch (t) {
        o.__e(t, n, e);
      }
      return n.__e;
    }
    function w(t, n) {
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
    function N(t, n, e, o, a, i, r, s) {
      var u,
        p,
        y,
        d,
        h,
        f = e.props,
        m = n.props;
      if (((a = 'svg' === n.type || a), null != i))
        for (u = 0; u < i.length; u++)
          if (
            null != (p = i[u]) &&
            ((null === n.type ? 3 === p.nodeType : p.localName === n.type) ||
              t == p)
          ) {
            (t = p), (i[u] = null);
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
          (null != i && (i = c.slice.call(t.childNodes)),
          (y = (f = e.props || l).dangerouslySetInnerHTML),
          (d = m.dangerouslySetInnerHTML),
          !s)
        ) {
          if (f === l)
            for (f = {}, h = 0; h < t.attributes.length; h++)
              f[t.attributes[h].name] = t.attributes[h].value;
          (d || y) &&
            ((d && y && d.__html == y.__html) ||
              (t.innerHTML = (d && d.__html) || ''));
        }
        (function(t, n, e, o, a) {
          var i;
          for (i in e) i in n || M(t, i, null, e[i], o);
          for (i in n)
            (a && 'function' != typeof n[i]) ||
              'value' === i ||
              'checked' === i ||
              e[i] === n[i] ||
              M(t, i, n[i], e[i], o);
        })(t, m, f, a, s),
          (n.__k = n.props.children),
          d || v(t, n, e, o, 'foreignObject' !== n.type && a, i, r, l, s),
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
    function P(t, n, e) {
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
        (a = t.ref) && ((a.current && a.current !== t.__e) || P(a, null, n)),
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
      null != i && d(i);
    }
    function x(t, n, e) {
      return this.constructor(t, e);
    }
    function B(t, n, e) {
      var a, i, r;
      o.__ && o.__(t, n),
        (i = (a = e === u) ? null : (e && e.__k) || n.__k),
        (t = h(m, null, [t])),
        (r = []),
        O(
          n,
          ((a ? n : e || n).__k = t),
          i || l,
          l,
          void 0 !== n.ownerSVGElement,
          e && !a ? [e] : i ? null : c.slice.call(n.childNodes),
          r,
          e || l,
          a
        ),
        w(r, t);
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
                return C((e.__E = e));
            } catch (n) {
              t = n;
            }
        throw t;
      },
    }),
      (g.prototype.setState = function(t, n) {
        var e;
        (e =
          this.__s !== this.state ? this.__s : (this.__s = y({}, this.state))),
          'function' == typeof t && (t = t(e, this.props)),
          t && y(e, t),
          null != t && this.__v && (n && this.__h.push(n), C(this));
      }),
      (g.prototype.forceUpdate = function(t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), C(this));
      }),
      (g.prototype.render = m),
      (a = []),
      (i = 0),
      (r =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (u = l);
    var T = {};
    function G(t, n) {
      for (var e in n) t[e] = n[e];
      return t;
    }
    function j(t, n, e) {
      var o,
        a = /(?:\?([^#]*))?(#.*)?$/,
        i = t.match(a),
        r = {};
      if (i && i[1])
        for (var s = i[1].split('&'), u = 0; u < s.length; u++) {
          var l = s[u].split('=');
          r[decodeURIComponent(l[0])] = decodeURIComponent(
            l.slice(1).join('=')
          );
        }
      (t = E(t.replace(a, ''))), (n = E(n || ''));
      for (var c = Math.max(t.length, n.length), p = 0; p < c; p++)
        if (n[p] && ':' === n[p].charAt(0)) {
          var y = n[p].replace(/(^:|[+*?]+$)/g, ''),
            d = (n[p].match(/[+*?]+$/) || T)[0] || '',
            h = ~d.indexOf('+'),
            f = ~d.indexOf('*'),
            m = t[p] || '';
          if (!m && !f && (d.indexOf('?') < 0 || h)) {
            o = !1;
            break;
          }
          if (((r[y] = decodeURIComponent(m)), h || f)) {
            r[y] = t
              .slice(p)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (n[p] !== t[p]) {
          o = !1;
          break;
        }
      return (!0 === e.default || !1 !== o) && r;
    }
    function R(t, n) {
      return t.rank < n.rank ? 1 : t.rank > n.rank ? -1 : t.index - n.index;
    }
    function U(t, n) {
      return (
        (t.index = n),
        (t.rank = (function(t) {
          return t.props.default
            ? 0
            : ((n = t.props.path),
              E(n)
                .map(L)
                .join(''));
          var n;
        })(t)),
        t.props
      );
    }
    function E(t) {
      return t.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function L(t) {
      return ':' == t.charAt(0)
        ? 1 + '*+?'.indexOf(t.charAt(t.length - 1)) || 4
        : 5;
    }
    var z = null,
      F = [],
      K = [],
      V = {};
    function H() {
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
            : V).pathname || '') +
        (t.search || '')
      );
    }
    function W(t, n) {
      return (
        void 0 === n && (n = !1),
        'string' != typeof t && t.url && ((n = t.replace), (t = t.url)),
        (function(t) {
          for (var n = F.length; n--; ) if (F[n].canRoute(t)) return !0;
          return !1;
        })(t) &&
          (function(t, n) {
            void 0 === n && (n = 'push'),
              z && z[n]
                ? z[n](t)
                : 'undefined' != typeof history &&
                  history[n + 'State'] &&
                  history[n + 'State'](null, null, t);
          })(t, n ? 'replace' : 'push'),
        J(t)
      );
    }
    function J(t) {
      for (var n = !1, e = 0; e < F.length; e++)
        !0 === F[e].routeTo(t) && (n = !0);
      for (var o = K.length; o--; ) K[o](t);
      return n;
    }
    function Y(t) {
      if (t && t.getAttribute) {
        var n = t.getAttribute('href'),
          e = t.getAttribute('target');
        if (n && n.match(/^\//g) && (!e || e.match(/^_?self$/i))) return W(n);
      }
    }
    function Z(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button))
        return Y(t.currentTarget || t.target || this), $(t);
    }
    function $(t) {
      return (
        t &&
          (t.stopImmediatePropagation && t.stopImmediatePropagation(),
          t.stopPropagation && t.stopPropagation(),
          t.preventDefault()),
        !1
      );
    }
    function q(t) {
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
            if (Y(n)) return $(t);
          }
        } while ((n = n.parentNode));
      }
    }
    var Q = !1;
    var X = (function(t) {
      function n(n) {
        t.call(this, n),
          n.history && (z = n.history),
          (this.state = { url: n.url || H() }),
          Q ||
            ('function' == typeof addEventListener &&
              (z ||
                addEventListener('popstate', function() {
                  J(H());
                }),
              addEventListener('click', q)),
            (Q = !0));
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
          var n = I(this.props.children);
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
          z &&
            (this.unlisten = z.listen(function(n) {
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
            .filter(U)
            .sort(R)
            .map(function(t) {
              var o = j(n, t.props.path, t.props);
              if (o) {
                if (!1 !== e) {
                  var a = { url: n, matches: o };
                  return (
                    G(a, o),
                    delete a.ref,
                    delete a.key,
                    (function(t, n) {
                      return (
                        (n = y(y({}, t.props), n)),
                        arguments.length > 2 &&
                          (n.children = c.slice.call(arguments, 2)),
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
            i = this.getMatchingChildren(I(e), a, !0),
            r = i[0] || null,
            s = this.previousUrl;
          return (
            a !== s &&
              ((this.previousUrl = a),
              'function' == typeof o &&
                o({
                  router: this,
                  url: a,
                  previous: s,
                  active: i,
                  current: r,
                })),
            r
          );
        }),
        n
      );
    })(g);
    (X.subscribers = K),
      (X.getCurrentUrl = H),
      (X.route = W),
      (X.Router = X),
      (X.Route = function(t) {
        return h(t.component, t);
      }),
      (X.Link = function(t) {
        return h('a', G({ onClick: Z }, t));
      }),
      (X.exec = j);
    var tt = X;
    class nt extends g {
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
    const et = 'flex',
      ot = 'flex flex-col',
      at = Object.freeze({
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
      ];
    function st(t) {
      return 'boolean' == typeof t;
    }
    function ut(t) {
      return 'number' == typeof t;
    }
    function lt(t) {
      return 'string' == typeof t;
    }
    function ct() {}
    function pt(t, n, e) {
      return Object.keys(t).reduce((e, o, a) => n(e, t[o], o, a, t), e);
    }
    function yt({ onChange: t, options: n, selected: e }) {
      return h(
        'select',
        { onChange: n => t(parseInt(n.target.value, 10)) },
        n.map((t, n) =>
          lt(t)
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
    function dt({ onChange: t, onClick: n, options: e, selected: o }) {
      n = n || ct;
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
          return lt(t)
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
    function ht({ onChange: t, ymdString: n }) {
      return h('input', {
        onChange: n => t(n.target.value),
        type: 'date',
        value: n,
      });
    }
    function ft({ classes: t, isDisabled: n, label: e, onClick: o }) {
      return h(
        'button',
        { className: t ? t.join(' ') : '', onClick: o, disabled: n },
        e
      );
    }
    function mt({
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
        onKeyUp: n ? i : ct,
        placeholder: o || '',
        type: 'text',
        value: a,
      });
    }
    function gt() {
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
    function bt(...t) {
      console.log('COVID-19', ...t);
    }
    class St extends g {
      constructor() {
        super();
      }
      getOptions() {
        return this.props.filter
          ? this.props.options.filter(t =>
              lt(t)
                ? t.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1
                : t.name
                    .toLowerCase()
                    .indexOf(this.props.filter.toLowerCase()) > -1
            )
          : this.props.options;
      }
      render() {
        const t = this.props.classes ? this.props.classes.join(' ') : '',
          n = t => {
            this.props.onChange(t);
          };
        return h(
          'div',
          { className: t.length ? `${t} ${ot}` : ot },
          h(
            'div',
            { className: et },
            gt()
              ? ''
              : h(mt, {
                  listenKeyUp: !0,
                  onChange: this.props.onUpdateFilter.bind(this),
                  placeholder: 'filter',
                  value: this.props.filter,
                }),
            h(ft, { label: '✗', onClick: this.props.onClear })
          ),
          gt()
            ? h(dt, {
                onChange: n,
                options: this.getOptions(),
                selected: this.props.selected,
              })
            : h(dt, {
                onChange: n,
                onClick: t => {
                  this.props.onDeselect(t);
                },
                options: this.getOptions(),
                selected: this.props.selected,
              })
        );
      }
    }
    const Ct = [
        'Active',
        'Confirmed',
        'Deaths',
        'Recoveries',
        'Projection: By Reverse Death',
      ],
      _t = ['By date', 'By first confirmed', 'By first 100 confirmed'],
      vt = ['Linear', 'Logarithmic'],
      It = ['Show States', 'Hide States'],
      At = ['By Value', 'Percent'];
    function Mt({ countries: t, onChange: n, reload: e, state: o }) {
      return h(
        'section',
        { className: 'flex flex-item-20' },
        h(
          'section',
          { className: ot },
          h(yt, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { mode: t }));
            },
            options: _t,
            selected: o.mode,
          }),
          h(yt, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { scaleType: t }));
            },
            options: vt,
            selected: o.scaleType,
          }),
          h(ht, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { startDate: t }));
            },
            ymdString: o.startDate,
          })
        ),
        h(dt, {
          onChange: function(t) {
            n(Object.assign(Object.assign({}, o), { dataSetIndexes: t }));
          },
          options: Ct,
          selected: o.dataSetIndexes,
        }),
        h(St, {
          classes: 0 === this.props.countryIndexes.length ? ['highlight'] : [],
          filter: this.props.state.countryFilter,
          onUpdateFilter: this.props.onUpdateCountryFilter,
          onChange: ct,
          onClear: this.props.clearCountries,
          onDeselect: this.props.selectCountry,
          options: t.filter(
            ((a = this.props.state.showStates),
            t =>
              !1 === a ||
              !(t.name.indexOf(',') > -1) || t.name.indexOf(', Total') > -1)
          ),
          selected: this.props.countryIndexes,
        }),
        h(
          'div',
          { className: ot },
          h(yt, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { showStates: 0 !== t }));
            },
            options: It,
            selected: o.showStates ? 1 : 0,
          }),
          h(yt, {
            onChange: function(t) {
              n(Object.assign(Object.assign({}, o), { byMetric: t }));
            },
            options: At,
            selected: o.byMetric,
          }),
          h(ft, { label: 'Reload', onClick: e })
        )
      );
      var a;
    }
    function kt({
      classes: t,
      isDisabled: n,
      labelFalse: e,
      labelTrue: o,
      onClick: a,
      state: i,
    }) {
      return h(ft, {
        classes: t,
        isDisabled: n,
        label: i ? o : e,
        onClick: () => a(!i),
      });
    }
    function Ot({ config: { onClick: t, labels: n, selected: e } }) {
      return h(
        'nav',
        { className: et },
        n.map((n, o) =>
          h(ft, { isDisabled: o === e, label: n, onClick: () => t(o) })
        )
      );
    }
    class wt extends g {
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
          0 === this.props.countryIndexes.length
            ? ['green']
            : [];
        return h(
          'section',
          { className: `full-size ${ot}` },
          h(nt, {
            flexSize: this.props.state.isConfigOpen
              ? 'flex-item-60'
              : 'flex-item-95',
            series: this.props.currentSeries,
            scaleType: this.props.state.scaleType,
            useDays: this.useDays(),
          }),
          h(
            'section',
            { className: et },
            h(kt, {
              classes: t,
              labelTrue: '✗ Enlarge Chart',
              labelFalse: '⚙️ Configure Chart',
              onClick: this.toggleConfig.bind(this),
              state: this.props.state.isConfigOpen,
            }),
            h(Ot, { config: this.props.menu })
          ),
          this.props.state.isConfigOpen
            ? h(Mt, {
                onUpdateCountryFilter: this.setCountryFilter.bind(this),
                clearCountries: this.props.clearCountries,
                countryIndexes: this.props.countryIndexes,
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
    var Nt = e(0),
      Pt = e(1);
    const Dt = Object.freeze({
        AL: 'Alabama',
        AK: 'Alaska',
        AS: 'American Samoa',
        AZ: 'Arizona',
        AR: 'Arkansas',
        CA: 'California',
        CO: 'Colorado',
        CT: 'Connecticut',
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
      xt = Object.freeze(
        Object.keys(Dt).reduce((t, n) => ((t[Dt[n]] = n), t), {})
      ),
      Bt = Object.freeze({
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
      Tt = Object.freeze({
        'Bahamas, The': 395361,
        'Cabo Verde': 546388,
        'Congo (Brazzaville)': 18e5,
        'Congo (Kinshasa)': 8134e4,
        'Cruise Ship': 700,
        Fiji: 905502,
        'Gambia, The': 2101e3,
        Guernsey: 67052,
        Jersey: 97857,
        Kosovo: 1831e3,
        Montenegro: 613219,
        Serbia: 7022e3,
        'Taiwan*': 2378e4,
      }),
      Gt = Object.freeze({
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
      jt = Object.freeze({
        Afghanistan: 'AF',
        'Åland Islands': 'AX',
        Albania: 'AL',
        Algeria: 'DZ',
        'American Samoa': 'AS',
        Andorra: 'AD',
        Angola: 'AO',
        Anguilla: 'AI',
        Antarctica: 'AQ',
        Argentina: 'AR',
        Armenia: 'AM',
        Aruba: 'AW',
        Australia: 'AU',
        Austria: 'AT',
        Azerbaijan: 'AZ',
        'Bahamas, The': 'BS',
        Bangladesh: 'BD',
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
        'Congo, The Democratic Republic of the': 'CD',
        'Cook Islands': 'CK',
        'Costa Rica': 'CR',
        "Cote d'Ivoire": 'CI',
        Croatia: 'HR',
        Cuba: 'CU',
        Cyprus: 'CY',
        Czechia: 'CZ',
        Denmark: 'DK',
        Djibouti: 'DJ',
        'Dominican Republic': 'DO',
        Ecuador: 'EC',
        Egypt: 'EG',
        'El Salvador': 'SV',
        'Equatorial Guinea': 'GQ',
        Eritrea: 'ER',
        Estonia: 'EE',
        Ethiopia: 'ET',
        'Falkland Islands (Malvinas)': 'FK',
        'Faroe Islands': 'FO',
        Fiji: 'FJ',
        Finland: 'FI',
        France: 'FR',
        'French Guiana': 'GF',
        'French Polynesia': 'PF',
        'French Southern Territories': 'TF',
        Gabon: 'GA',
        'The, Gambia': 'GM',
        Georgia: 'GE',
        Germany: 'DE',
        Ghana: 'GH',
        Gibraltar: 'GI',
        Greece: 'GR',
        Greenland: 'GL',
        Guadeloupe: 'GP',
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
        Kiribati: 'KI',
        "Korea, Democratic People'S Republic of": 'KP',
        'Korea, South': 'KR',
        Kuwait: 'KW',
        Kyrgyzstan: 'KG',
        "Lao People'S Democratic Republic": 'LA',
        Latvia: 'LV',
        Lebanon: 'LB',
        Lesotho: 'LS',
        Liberia: 'LR',
        'Libyan Arab Jamahiriya': 'LY',
        Liechtenstein: 'LI',
        Lithuania: 'LT',
        Luxembourg: 'LU',
        Macao: 'MO',
        'Macedonia, The Former Yugoslav Republic of': 'MK',
        Madagascar: 'MG',
        Malawi: 'MW',
        Malaysia: 'MY',
        Mali: 'ML',
        'Marshall Islands': 'MH',
        Mauritania: 'MR',
        Mayotte: 'YT',
        Mexico: 'MX',
        'Micronesia, Federated States of': 'FM',
        Moldova: 'MD',
        Monaco: 'MC',
        Mongolia: 'MN',
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
        Reunion: 'RE',
        Romania: 'RO',
        Russia: 'RU',
        Rwanda: 'RW',
        'Saint Helena': 'SH',
        'Saint Kitts and Nevis': 'KN',
        'Saint Pierre and Miquelon': 'PM',
        Samoa: 'WS',
        'San Marino': 'SM',
        'Sao Tome and Principe': 'ST',
        'Saudi Arabia': 'SA',
        Senegal: 'SN',
        'Sierra Leone': 'SL',
        Slovakia: 'SK',
        Slovenia: 'SI',
        'Solomon Islands': 'SB',
        Somalia: 'SO',
        'South Africa': 'ZA',
        'South Georgia and the South Sandwich Islands': 'GS',
        Spain: 'ES',
        'Sri Lanka': 'LK',
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
      });
    class Rt {
      constructor(t) {
        this.data = t;
      }
      static create(t) {
        return new Rt(t);
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
      index() {
        return this.data.index;
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
      countryName() {
        return (
          this.data.country + (this.data.state ? ', ' + this.data.state : '')
        );
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
    }
    class Ut extends Array {
      static create() {
        return new Ut();
      }
      constructor() {
        super();
      }
      sortByProp(t, n = !0) {
        const e = n ? -1 : 1;
        this.sort((n, o) =>
          n[t]() < o[t]() ? e : n[t]() > o[t]() ? -1 * e : 0
        );
      }
      clone() {
        const t = Ut.create();
        return this.forEach(n => t.push(n)), t;
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
        this.sort((t, n) =>
          t.country() < n.country()
            ? -1
            : t.country() > n.country()
            ? 1
            : t.state() < n.state()
            ? -1
            : t.state() > n.state()
            ? 1
            : t.locale() < n.locale()
            ? -1
            : t.locale() > n.locale()
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
    const Et = (Nt || []).reduce(
        (t, n) => ((t[n.country] = parseInt(n.population, 10)), t),
        {}
      ),
      Lt = (Pt || []).reduce(
        (t, n) => (
          (t[n.country] = null === n.density ? null : parseInt(n.density, 10)),
          t
        ),
        {}
      ),
      zt = [
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
      ];
    function Ft() {
      return Promise.all(zt.map(t => fetch(t)))
        .then(Ht)
        .then(Zt)
        .then(qt)
        .then(Xt)
        .then(tn)
        .then(nn)
        .then(Qt)
        .then(en);
    }
    function Kt(t, n, e) {
      if (e) return 0;
      if (n)
        return (function(t, n, e) {
          if (e) return 0;
          if (Gt[t])
            if ('US' === t) {
              const e = xt[n];
              if (e) {
                const n = 'D.C.' === e ? 'DC' : e;
                if (Gt[t][n]) return Gt[t][n];
              }
            } else if (Gt[t][n]) return Gt[t][n];
          return 0;
        })(t, n, e);
      let o = Et[t];
      return o || ((o = Et[Bt[t]]), o || ((o = Tt[t]), o || 0));
    }
    function Vt(t, n, e) {
      if (n || e) return 0;
      let o = Lt[t];
      return o || ((o = Lt[Bt[t]]), o || 0);
    }
    function Ht(t) {
      return Promise.all(t.map(t => t.text()));
    }
    function Wt(t) {
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
    function Jt(t) {
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
        population: Kt(n, o, e),
        populationDensity: Vt(n, o, e),
        state: o,
        timeSeries: t.slice(4).map(t => parseInt(t, 10)),
      };
    }
    function Yt(t) {
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
          .map(Wt)
          .filter(t => t.length)
          .map(Jt),
      ];
    }
    function Zt(t) {
      return t.map(Yt);
    }
    function $t(t) {
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
                  const t = Dt[n.state];
                  t
                    ? (e(`${n.country}.${t}`), e(n.country))
                    : bt(
                        'US state ',
                        n.state,
                        `(${n.locale}) not found in map`
                      );
                } else bt('Non US locale', n.country, n.state, n.locale);
            };
          })(n)
        ),
        (function(t, n) {
          return pt(
            t,
            (t, n, e) => {
              const o = e.split('.').filter(Boolean);
              return (
                o.length < 1 ||
                  t.push({
                    country: o[0],
                    locale: '',
                    population: Kt(o[0], o[1]),
                    populationDensity: Vt(o[0], o[1]),
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
    function qt(t) {
      return t.map(t => {
        const [n, e] = t;
        return [n, $t(e)];
      });
    }
    function Qt(t) {
      return t.sortByCountry(), t;
    }
    function Xt(t) {
      return [
        [
          t[0][0],
          t[0][1].map((n, e) => ({
            country: n.country,
            locale: n.locale,
            population: 'World' === n.country ? ln() : n.population,
            populationDensity: n.populationDensity,
            state: n.state,
            timeSeries: n.timeSeries.map(
              (n, o) => n - t[1][1][e].timeSeries[o] - t[2][1][e].timeSeries[o]
            ),
          })),
        ],
      ].concat(t);
    }
    function tn(t) {
      const n = [
        [
          t[0][0],
          t[0][1].map((n, e) => ({
            country: n.country,
            locale: n.locale,
            population: 'World' === n.country ? ln() : n.population,
            populationDensity: n.populationDensity,
            state: n.state,
            timeSeries: n.timeSeries.map((n, o) => {
              if (t[2][1][e].timeSeries[o] < at.minDeaths) return 0;
              const a = t[2][1][e].timeSeries[o] / at.fatalityRate,
                i = at.daysFromInfectionToDeath / at.doublingTime;
              return a * Math.pow(2, i);
            }),
          })),
        ],
      ];
      return t.concat(n);
    }
    function nn(t) {
      const n = t[0][0],
        e = Ut.create();
      return (
        t[0][1].forEach((o, a) => {
          e.push(
            Rt.create({
              country: o.country,
              index: a,
              dates: n,
              locale: o.locale,
              population: o.population,
              populationDensity: o.populationDensity,
              state: o.state,
              counts: o.timeSeries.map((n, e) => ({
                active: t[0][1][a].timeSeries[e],
                confirmed: t[1][1][a].timeSeries[e],
                deaths: t[2][1][a].timeSeries[e],
                recoveries: t[3][1][a].timeSeries[e],
                projectionReverseDeath: t[4][1][a].timeSeries[e],
              })),
            })
          );
        }),
        e
      );
    }
    function en(t) {
      return {
        countries: t
          .reduce((t, n, e) => {
            if (n.locale()) return t;
            const o = n.countryName();
            return t.push({ index: n.index(), name: o }), t;
          }, [])
          .filter(Boolean),
        timeSeries: t,
      };
    }
    function on(t) {
      switch (t) {
        case 0:
          return '😷';
        case 1:
          return '✔';
        case 2:
          return '☠';
        case 3:
          return '😊';
        case 4:
          return '🤔';
        default:
          return '😊';
      }
    }
    function an(t, n) {
      return n.dataPromise.then(({ countries: e, timeSeries: o }) => {
        let a = 0;
        return {
          countries: e,
          series: o.reduce(
            (e, o) =>
              n.countryIndexes.indexOf(o.index()) > -1
                ? (function(t, n, e, o, a) {
                    switch (n.lineGraphState.mode) {
                      case 1:
                        return rn(t, n, e, o, a, 1);
                      case 2:
                        return rn(t, n, e, o, a, 100);
                      default:
                        return (function(t, n, e, o, a) {
                          const i = new Date(n.lineGraphState.startDate);
                          return (
                            n.lineGraphState.dataSetIndexes.forEach(t => {
                              const r =
                                  t > 3 ? rt[a % rt.length] : it[a % it.length],
                                s = sn(t),
                                u = {
                                  color: r,
                                  line: { color: r },
                                  name: on(t) + ' ' + o.countryName(),
                                  points: [],
                                };
                              (u.points = o.counts().reduce((t, e, a) => {
                                if (o.dates()[a] && o.dates()[a] > i) {
                                  const i = un(
                                    n.lineGraphState.byMetric,
                                    e[s],
                                    o.population()
                                  );
                                  i && t.push({ x: o.dates()[a], y: i });
                                }
                                return t;
                              }, [])),
                                e.push(u);
                            }),
                            e
                          );
                        })(0, n, e, o, a);
                    }
                  })(t, n, e, o, a++)
                : e,
            []
          ),
        };
      });
    }
    function rn(t, n, e, o, a, i) {
      const r = new Date(n.lineGraphState.startDate);
      return (
        n.lineGraphState.dataSetIndexes.forEach(t => {
          const s = sn(t),
            u = t > 3 ? rt[a % rt.length] : it[a % it.length],
            l = {
              color: u,
              line: { color: u },
              name: on(t) + ' ' + o.countryName(),
              points: [],
            };
          let c = 0;
          (l.points = o.counts().reduce((t, e, a) => {
            if (o.dates()[a] && o.dates()[a] > r && e.confirmed >= i) {
              const a = un(n.lineGraphState.byMetric, e[s], o.population());
              a && t.push({ x: c, y: a }), (c += 1);
            }
            return t;
          }, [])),
            e.push(l);
        }),
        e
      );
    }
    function sn(t) {
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
    function un(t, n, e) {
      return 0 === t ? n : e ? n / e : 0;
    }
    function ln() {
      return pt(Et, (t, n) => (n != n ? t : t + n), 0);
    }
    const cn = [];
    function pn() {
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
                  if (
                    !1 ===
                    (function(t) {
                      if (!t) return !1;
                      if (!1 === st(t.isConfigOpen)) return !1;
                      if (!1 === ut(t.byMetric)) return !1;
                      if (!1 === lt(t.countryFilter)) return !1;
                      if (!1 === Array.isArray(t.dataSetIndexes)) return !1;
                      if (!1 === ut(t.mode)) return !1;
                      if ('boolean' != typeof t.showStates) return !1;
                      if (!1 === lt(t.startDate)) return !1;
                      return !0;
                    })(t.lineGraphState)
                  )
                    return !1;
                  if (!1 === Array.isArray(t.countryIndexes)) return !1;
                  return (function(t) {
                    if (!t) return !1;
                    if (!1 === Array.isArray(t.columns)) return !1;
                    if (!1 === st(t.isConfigOpen)) return !1;
                    if (!1 === st(t.showAll)) return !1;
                    if (!1 === st(t.sortByActive)) return !1;
                    if (!1 === st(t.sortByActivePercent)) return !1;
                    if (!1 === st(t.sortByConfirmed)) return !1;
                    if (!1 === st(t.sortByConfirmedPercent)) return !1;
                    if (!1 === st(t.sortByDeaths)) return !1;
                    if (!1 === st(t.sortByDeathsPercent)) return !1;
                    if (!1 === st(t.sortByRecoveries)) return !1;
                    if (!1 === st(t.sortByRecoveriesPercent)) return !1;
                    if (!1 === st(t.sortByPopulation)) return !1;
                    if (!1 === st(t.sortByPopulationDensity)) return !1;
                    return !0;
                  })(t.tableState);
                })(n)
                ? (bt('Upgrade: Wiping old state'),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, n), {
                    dataPromise: Ft(),
                    data: Ut.create(),
                  })
              : null;
          } catch (t) {
            return (
              bt('Failed to parse saved state, resetting localStorage'),
              window.localStorage.setItem('state', ''),
              null
            );
          }
      }
      return null;
    }
    const yn = [
      { label: 'Region', sort: 'sortByCountry' },
      { label: 'Active', sort: 'sortByActive' },
      { label: 'Active %', sort: 'sortByActivePercent' },
      { label: 'Confirmed', sort: 'sortByConfirmed' },
      { label: 'Confirmed %', sort: 'sortByConfirmedPercent' },
      { label: 'Deaths', sort: 'sortByDeaths' },
      { label: 'Deaths %', sort: 'sortByDeathsPercent' },
      { label: 'Recoveries', sort: 'sortByRecoveries' },
      { label: 'Recoveries %', sort: 'sortByRecoveriesPercent' },
      { label: 'Mortality', sort: 'sortByMortality' },
      { label: 'Population', sort: 'sortByPopulation' },
      { label: 'Population Density', sort: 'sortByPopulationDensity' },
    ];
    class dn extends g {
      constructor() {
        super(), (this.state = {});
      }
      formatNumber(t) {
        return t.toLocaleString();
      }
      formatDecimal(t, n = 2) {
        return t.toFixed(n);
      }
      formatPercent(t, n = 2) {
        return this.formatDecimal(t, n) + '%';
      }
      clickHeader(t) {
        this.props.timeSeries[t.sort](this.state[t.sort]),
          this.props.onChange(
            Object.assign(Object.assign({}, this.props.state), {
              [t.sort]: !this.state[t.sort],
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
                columns: this.props.state.columns.filter(n => n !== t),
              })
            );
      }
      render() {
        const t =
            window.document.body.clientHeight *
            (this.props.state.isConfigOpen ? 0.6 : 0.82),
          n = `width: ${100 / (this.props.state.columns.length || 1)}%;`;
        return h(
          'section',
          { className: `full-size ${ot}` },
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
                  yn.map((t, e) =>
                    0 === e || this.props.state.columns.indexOf(e) > -1
                      ? h(
                          'th',
                          { style: n, onClick: () => this.clickHeader(t) },
                          t.label
                        )
                      : ''
                  )
                )
              ),
              h(
                'tbody',
                { style: `overflow: auto; max-height: ${t}px;` },
                this.props.timeSeries.map((t, e) => {
                  if (t.counts().length < 1) return '';
                  if (
                    !1 === this.props.state.showAll &&
                    -1 === this.props.countryIndexes.indexOf(t.index())
                  )
                    return '';
                  const o = t.country() + (t.state() ? ', ' + t.state() : ''),
                    a = e % 2 == 0 ? 'row-even' : 'row-odd';
                  return h(
                    'tr',
                    {
                      className:
                        this.props.countryIndexes.indexOf(t.index()) > -1
                          ? 'row-highlight ' + a
                          : a,
                      onClick: () => this.props.selectCountry(t.index()),
                    },
                    h('td', { style: n }, o),
                    this.props.state.columns.indexOf(1) > -1
                      ? h('td', { style: n }, this.formatNumber(t.lastActive()))
                      : '',
                    this.props.state.columns.indexOf(2) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastActivePercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(3) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatNumber(t.lastConfirmed())
                        )
                      : '',
                    this.props.state.columns.indexOf(4) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastConfirmedPercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(5) > -1
                      ? h('td', { style: n }, this.formatNumber(t.lastDeaths()))
                      : '',
                    this.props.state.columns.indexOf(6) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastDeathsPercent(), 4)
                        )
                      : '',
                    this.props.state.columns.indexOf(7) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatNumber(t.lastRecoveries())
                        )
                      : '',
                    this.props.state.columns.indexOf(8) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastRecoveriesPercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(9) > -1
                      ? h(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastMortality(), 2)
                        )
                      : '',
                    this.props.state.columns.indexOf(10) > -1
                      ? h('td', { style: n }, this.formatNumber(t.population()))
                      : '',
                    this.props.state.columns.indexOf(11) > -1
                      ? h(
                          'td',
                          { style: n },
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
              { className: et },
              h(kt, {
                labelTrue: '✗ Enlarge Table',
                labelFalse: '⚙️ Configure Table',
                onClick: this.toggleConfig.bind(this),
                state: this.props.state.isConfigOpen,
              }),
              h(Ot, { config: this.props.menu })
            ),
            this.props.state.isConfigOpen
              ? h(
                  'section',
                  { className: et },
                  h(dt, {
                    onChange: ct,
                    onClick: t => this.onChangeColumns(t + 1),
                    options: yn.map(t => t.label).slice(1),
                    selected: this.props.state.columns.map(t => t - 1),
                  }),
                  h(yt, {
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
    function hn() {
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
    class fn extends g {
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
            colors: this.props.colours,
            ranges: this.props.ranges,
          },
          series: this.props.series,
        });
      }
      render() {
        return h('div', { className: 'full-size' });
      }
    }
    class mn extends g {
      constructor() {
        super(),
          (this.state = {
            dataSet: 0,
            map: 'world',
            toolTip: '<b>%name<b/> <br/>Active Cases: %zValue',
          });
      }
      componentDidMount() {
        this.setState(Object.assign({}, this.state));
      }
      countryFromClick(t) {
        return (
          (t &&
            t.currentTarget &&
            t.currentTarget.currentOptions &&
            t.currentTarget.currentOptions.mapDataId &&
            t.currentTarget.currentOptions.mapDataId.split('.')[1]) ||
          null
        );
      }
      getSeries() {
        let t = 0;
        const n = [];
        return (
          this.props.timeSeries.forEach(e => {
            const o = jt[e.country()];
            if (!o) return null;
            if (e.state() && 'Total' !== e.state()) return null;
            if (e.locale()) return null;
            if (!e.population()) return null;
            const a = (function(t, n) {
              switch (t) {
                case 0:
                  return n.lastActive();
                case 1:
                  return n.lastConfirmed();
                case 2:
                  return n.lastDeaths();
                case 3:
                  return n.lastRecoveries();
                default:
                  return n.lastActive();
              }
            })(this.state.dataSet, e);
            if (a < 1) return null;
            a > t && (t = a), n.push({ map: 'WORLD.' + o.toLowerCase(), z: a });
          }),
          {
            colours: gn(8),
            ranges: { min: 0, max: t, interval: Math.floor(t / 8) },
            series: [
              {
                defaultPoint_events_click: t => {
                  switch (this.countryFromClick(t).toLowerCase()) {
                    case 'ca':
                      this.setState(
                        Object.assign(Object.assign({}, this.state), {
                          map: 'ca',
                        })
                      );
                      break;
                    case 'cn':
                      this.setState(
                        Object.assign(Object.assign({}, this.state), {
                          map: 'cn',
                        })
                      );
                      break;
                    case 'us':
                      this.setState(
                        Object.assign(Object.assign({}, this.state), {
                          map: 'us',
                        })
                      );
                  }
                },
                map: this.state.map,
                points: n,
              },
            ],
          }
        );
      }
      onChangeDataSet(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            dataSet: t,
            toolTip: bn(t),
          })
        );
      }
      zoomOut() {
        'world' !== this.state.map &&
          this.setState(
            Object.assign(Object.assign({}, this.state), { map: 'world' })
          );
      }
      render() {
        const { colours: t, ranges: n, series: e } = this.getSeries();
        return h(
          'section',
          { onClick: this.zoomOut.bind(this), className: `full-size ${ot}` },
          h(fn, {
            colours: t,
            ranges: n,
            series: e,
            toolTip: this.state.toolTip,
          }),
          h(
            'section',
            { className: et },
            h(yt, {
              onChange: this.onChangeDataSet.bind(this),
              options: [
                'Active Cases',
                'Confirmed Cases',
                'Deaths',
                'Recoveries',
              ],
              selected: this.state.dataSet,
            }),
            h(Ot, { config: this.props.menu })
          )
        );
      }
    }
    function gn(t) {
      t < 0 && (t *= -1);
      const n = Math.floor(255 / t),
        e = [];
      for (let o = 255; o >= t; o -= n)
        e.push('#' + (255).toString(16) + o.toString(16) + o.toString(16));
      return e;
    }
    function bn(t) {
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
    class Sn extends g {
      constructor() {
        super();
        let t = pn();
        t ||
          (bt('No existing state'),
          (t = {
            countries: [],
            currentSeries: [],
            data: Ut.create(),
            dataPromise: Ft(),
            countryIndexes: cn,
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
        const n = ['/', '/table', '/geography'];
        this.menu = {
          labels: ['Chart', 'Table', 'Geography'],
          onClick: t => {
            const e = n[t] || n[0];
            this.setState(
              Object.assign(Object.assign({}, this.state), { routePath: e })
            ),
              (this.menu.selected = t),
              W(e),
              this.selectAndUpdate();
          },
          selected: n.indexOf(this.state.routePath),
        };
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
          .then(
            ({ timeSeries: t }) => (
              this.setState(
                Object.assign(Object.assign({}, this.state), { data: t })
              ),
              an(this.props.cache, this.state)
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
              dataPromise: Ft().then(t => (this.selectAndUpdate(), t)),
            })
          );
      }
      clearCountries() {
        console.log('clear countries'),
          this.setState(
            Object.assign(Object.assign({}, this.state), { countryIndexes: [] })
          ),
          this.selectAndUpdate();
      }
      selectCountry(t) {
        this.state.countryIndexes.indexOf(t) > -1
          ? this.setState(
              Object.assign(Object.assign({}, this.state), {
                countryIndexes: this.state.countryIndexes.filter(n => n !== t),
              })
            )
          : this.setState(
              Object.assign(Object.assign({}, this.state), {
                countryIndexes: this.state.countryIndexes.concat([t]),
              })
            ),
          this.selectAndUpdate();
      }
      render() {
        return h(
          'div',
          { className: `full-size ${ot}` },
          h(hn, null),
          h(
            tt,
            null,
            h(wt, {
              path: '/',
              clearCountries: this.clearCountries.bind(this),
              countries: this.state.countries,
              countryIndexes: this.state.countryIndexes,
              currentSeries: this.state.currentSeries,
              menu: this.menu,
              onChange: this.lineGraphState.bind(this),
              key: '0',
              reload: this.reload.bind(this),
              selectCountry: this.selectCountry.bind(this),
              state: this.state.lineGraphState,
            }),
            h(dn, {
              countryIndexes: this.state.countryIndexes,
              key: '1',
              onChange: this.tableState.bind(this),
              menu: this.menu,
              path: '/table',
              state: this.state.tableState,
              selectCountry: this.selectCountry.bind(this),
              timeSeries: this.state.data,
            }),
            h(mn, {
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
          let n = {};
          B(h(Sn, { cache: n, reset: () => (n = {}) }), t);
        })(t);
    })();
  },
]);
