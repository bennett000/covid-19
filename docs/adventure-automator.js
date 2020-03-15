!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
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
        for (var a in e)
          n.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
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
  function(e, t) {
    const n = [1, 43, 119, 414, 426],
      r = ['By date', 'By first confirmed', 'By first 100 confirmed'],
      a = [
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv',
      ];
    function o(e) {
      window.localStorage &&
        window.localStorage.setItem(
          'state',
          JSON.stringify(
            Object.assign(Object.assign({}, e), {
              dataPromise: void 0,
              html: void 0,
            })
          )
        );
    }
    function i(e) {
      (e.startDate = new Date(e.startDate)),
        e.dataPromise
          .then(({ dataSets: t, points: n }) => {
            !(function(e, t, n) {
              JSC.Chart('chartDiv', {
                xAxis_label_text: n ? 'Day' : void 0,
                xAxis: {
                  scaleType: 'time',
                  customTicks: [
                    { value: { month: '*' }, label_text: '%min' },
                    { value: { week: '*' }, label_text: '%min' },
                  ],
                },
                legend: { template: '%icon %name' },
                series: e,
              });
            })(
              e.dataSetIndexes.reduce(
                (r, a) =>
                  n[a].reduce((n, r, a) => {
                    const o = (function(e, t, n, r) {
                      switch (e.mode) {
                        case 1:
                          return c(e, t, n, r, 1);
                        case 2:
                          return c(e, t, n, r, 100);
                        default:
                          return (function(e, t, n) {
                            if (e.countryIndexes.indexOf(n) > -1)
                              return {
                                name: t.name,
                                points: t.points
                                  .map(t => (t.x > e.startDate ? t : null))
                                  .filter(Boolean),
                              };
                          })(e, t, n);
                      }
                    })(e, r, a + 1, t[0][a + 1]);
                    return o && n.push(o), n;
                  }, r),
                []
              ),
              e.html,
              0 !== e.mode
            );
          })
          .catch(console.log.bind(console));
    }
    function c(e, t, n, r, a) {
      if (e.countryIndexes.indexOf(n) > -1) {
        let n = 0;
        return {
          name: t.name,
          points: t.points
            .map((t, o) => {
              if (t.x > e.startDate) {
                if (r[t.index] >= a) {
                  const e = n;
                  return (n += 1), { x: e, y: t.y };
                }
                return null;
              }
              return null;
            })
            .filter(Boolean),
        };
      }
    }
    function s() {
      return Promise.all(a.map(e => JSC.fetch(e)))
        .then(f)
        .then(p)
        .then(h)
        .then(m)
        .then(h)
        .then(v)
        .then(w);
    }
    function u(e) {
      return t => {
        const { countries: r } = t;
        e.selectCountry.innerHTML = '';
        d(r, n).forEach(t => {
          e.selectCountry.appendChild(t);
        });
        return t;
      };
    }
    function d(e, t) {
      return e.map((e, n) => {
        const r = window.document.createElement('option');
        return (
          'object' == typeof e
            ? ((r.value = e.index),
              (r.innerHTML = e.name),
              Array.isArray(t)
                ? t.indexOf(e.index) > -1 && (r.selected = !0)
                : e.index === t && (r.selected = !0))
            : ((r.value = n),
              (r.innerHTML = e),
              Array.isArray(t)
                ? t.indexOf(n) > -1 && (r.selected = !0)
                : n === t && (r.selected = !0)),
          r
        );
      });
    }
    function l(e) {
      let t = [];
      for (let n = 0; n < e.length; n += 1) {
        const r = e[n];
        r.selected && t.push(parseInt(r.value, 10));
      }
      return t;
    }
    function m(e) {
      return e.map(e => {
        let t = [],
          n = 0;
        const r = e => {
          (t = e.slice(0)), (t[0] = 'Total');
        };
        return e.concat(
          e.reduce(
            (e, a, o, i) =>
              0 === o
                ? e
                : 1 === o
                ? (r(a), e)
                : i[o - 1][1] === a[1]
                ? ((n += 1),
                  (e => {
                    for (let n = 4; n < e.length; n += 1) t[n] += e[n];
                  })(a),
                  e)
                : (n > 1 && e.push(t), (n = 0), r(a), e),
            []
          )
        );
      });
    }
    function f(e) {
      return Promise.all(e.map(e => e.text()));
    }
    function p(e) {
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
    function h(e) {
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
    function v(e) {
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
    function w({ countries: e, dataSets: t }) {
      const n = t.map((e, t) => {
        const n = (function(e) {
            switch (e) {
              case 0:
                return '😷';
              case 1:
                return '☠';
              default:
                return '😊';
            }
          })(t),
          r = [];
        for (let t = 1; t < e.length; t += 1) {
          let a = '',
            o = [],
            i = e[t];
          for (let t = 0; t < i.length; t += 1)
            if ((1 === t && (a = n + ' ' + i[1] + ', ' + i[0]), t > 3)) {
              if (!i[t] || i[t] != i[t]) continue;
              o.push({ index: t, x: new Date(e[0][t]), y: i[t] });
            }
          r.push({ name: a, points: o });
        }
        return r;
      });
      return { countries: e, dataSets: t, points: n };
    }
    !(function() {
      const e = (function() {
        const e = window.document.createElement('div'),
          t = window.document.createElement('section');
        (t.className = 'controls'), e.appendChild(t);
        const n = (function(e) {
            const t = window.document.createElement('select');
            return (
              d(r, 2).forEach(e => {
                t.appendChild(e);
              }),
              e.appendChild(t),
              t
            );
          })(t),
          a = window.document.createElement('input');
        (a.type = 'date'), (a.value = '2019-12-26'), t.appendChild(a);
        const o = (function(e) {
            const t = window.document.createElement('select');
            return (
              (t.multiple = !0),
              (t.className = 'select-data'),
              d(['Confirmed Cases', 'Deaths', 'Recoveries'], 0).forEach(e => {
                t.appendChild(e);
              }),
              e.appendChild(t),
              t
            );
          })(t),
          i = window.document.createElement('select');
        (i.multiple = !0), (i.className = 'select-country'), t.appendChild(i);
        const c = window.document.createElement('button');
        (c.innerHTML = 'Reload Data'),
          (c.className = 'green'),
          t.appendChild(c);
        const s = (function(e, t) {
          const n = window.document.createElement('div');
          return (n.id = 'chartDiv'), e.insertBefore(n, t), n;
        })(e, t);
        return (
          window.document.body.appendChild(e),
          {
            chart: s,
            container: e,
            controls: t,
            inputStart: a,
            selectCountry: i,
            selectData: o,
            selectMode: n,
            reloadData: c,
          }
        );
      })();
      let t = (function(e) {
        if (window.localStorage) {
          const t = window.localStorage.getItem('state');
          if (t)
            try {
              return Object.assign(Object.assign({}, JSON.parse(t)), {
                dataPromise: s().then(u(e)),
                html: e,
              });
            } catch (e) {}
        }
        return null;
      })(e);
      t ||
        (t = (function(e) {
          return {
            dataPromise: s().then(u(e)),
            dataSetIndexes: [0],
            countryIndexes: n,
            html: e,
            mode: 2,
            startDate: '2019-12-26',
          };
        })(e));
      (function(e) {
        e.html.reloadData.addEventListener('click', () => {
          (e.dataPromise = s().then(u(e.html))), i(e), o(e);
        });
        e.html.inputStart.addEventListener('change', t => {
          (e.startDate = t.target.value), i(e), o(e);
        }),
          e.html.selectCountry.addEventListener('change', t => {
            (e.countryIndexes = l(t.target.options)), i(e), o(e);
          }),
          e.html.selectData.addEventListener('change', t => {
            (e.dataSetIndexes = l(t.target.options)), i(e), o(e);
          }),
          e.html.selectMode.addEventListener('change', t => {
            (e.mode = parseInt(t.target.value, 10)), i(e), o(e);
          });
      })(t),
        i(t);
    })();
  },
]);
