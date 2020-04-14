!(function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
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
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
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
    n((n.s = 26));
})([
  function(e) {
    e.exports = JSON.parse(
      '{"Australia":{"Australian Capital Territory":426709,"New South Wales":8089526,"Northern Territory":245869,"Queensland":5095100,"South Australia":1751693,"Tasmania":534281,"Victoria":6594804,"Western Australia":2621680},"Canada":{"Alberta":4345737,"British Columbia":5020302,"Ontario":14446515,"Manitoba":1360396,"New Brunswick":772094,"Newfoundland and Labrador":523790,"Northwest Territories":44598,"Nova Scotia":965382,"Prince Edward Island":154748,"Quebec":8433301,"Saskatchewan":1168423,"Yukon":40369,"Nunavut":38787},"China":{"Anhui":59500510,"Beijing":19612368,"Chongqing":28846170,"Fujian":36894216,"Gansu":25575254,"Guangdong":104303132,"Guangxi":46026629,"Guizhou":35806468,"Hainan":9261518,"Hebei":71854202,"Heilongjiang":38312224,"Henan":94023567,"Hong Kong":7061200,"Hubei":57237740,"Hunan":65683722,"Inner Mongolia":24706321,"Jiangsu":78659903,"Jiangxi":44567475,"Jilin":27462297,"Liaoning":43746323,"Macau":552503,"Ningxia":6176900,"Qinghai":5626722,"Shaanxi":37327378,"Shandong":100063065,"Shanghai":23019148,"Shanxi":37022111,"Sichuan":80418200,"Tianjin":12938224,"Tibet":3002166,"Xinjiang":21813334,"Yunnan":45966239,"Zhejiang":54426891},"Denmark":{"Denmark":5603000,"Faroe Islands":49290,"Greenland":56171},"France":{"France":66990000,"French Guiana":290691,"French Polynesia":283007,"Guadeloupe":395700,"Mayotte":270372,"New Caledonia":280460,"Reunion":859959,"Saint Barthelemy":9131,"St Martin":32125},"Netherlands":{"Aruba":105264,"Curacao":161014,"Netherlands":17180000,"Sint Maarten":41109},"United Kingdom":{"United Kingdom":66440000,"Bermuda":65441,"Cayman Islands":61559,"Channel Islands":3703,"Gibraltar":34571,"Isle of Man":84287,"Montserrat":5900},"US":{"Alabama":4833722,"Alaska":735132,"Arizona":6626624,"Arkansas":2959373,"California":38332521,"Colorado":5268367,"Connecticut":3596080,"Delaware":925749,"Florida":19552860,"Georgia":9992167,"Guam":164229,"Hawaii":1404054,"Idaho":1612136,"Illinois":12882135,"Indiana":6570902,"Iowa":3090416,"Kansas":2893957,"Kentucky":4395295,"Louisiana":4625470,"Maine":1328302,"Maryland":5928814,"Massachusetts":6692824,"Michigan":9895622,"Minnesota":5420380,"Mississippi":2991207,"Missouri":6044171,"Montana":1015165,"Nebraska":1868516,"Nevada":2790136,"New Hampshire":1323459,"New Jersey":8899339,"New Mexico":2085287,"New York":19651127,"North Carolina":9848060,"North Dakota":723393,"Ohio":11570808,"Oklahoma":3850568,"Oregon":3930065,"Pennsylvania":12773801,"Rhode Island":1051511,"South Carolina":4774839,"South Dakota":844877,"Tennessee":6495978,"Texas":26448193,"Utah":2900872,"Vermont":626630,"Virginia":8260405,"Virgin Islands":107268,"Washington":6971406,"West Virginia":1854304,"Wisconsin":5742713,"Wyoming":582658,"Puerto Rico":3615086}}'
    );
  },
  function(e, t, n) {
    'use strict';
    e.exports = n(18);
  },
  function(e) {
    e.exports = JSON.parse(
      '{"app":{"log":{"noState":"No existing state"},"menu":[{"route":"/","name":"Time vs Counts"},{"route":"/confirmed-vs-recent","name":"Confirmed vs Recent"},{"route":"/table","name":"Table"},{"route":"/geography","name":"Geography"},{"route":"/about","name":"About"}]},"confirmedVsRecent":{"configure":"⚙️ Configure Chart","confirmedCases":"Total Confirmed Cases","enlarge":"✗ Enlarge Chart","recentCases":"Confirmed in Last Seven (7) Days"},"countries":{"total":"Total","world":"World"},"data":{"log":{"countryNotFound":"country not found","deathNoConfirmed":"Warning: data seems odd, there are deaths but no confirmed cases","populationNotFound":"population not found for","recoveryNoConfirmed":"Warning: data seems odd, there are recoveries but no confirmed cases","stateNotFound":"state not found","unexpectedLength":"Warning: unexpected length:"}},"descriptions":{"metrics":{"byPercet":"Uses the percentage of population* note population data is imperfect","byValue":"Uses the raw count"},"modes":{"byDate":"Plots series based on the date the count occured","byFirst":"Plots series starting from the day the first person was confirmed to have covid-19","byFirst100":"Plots series starting from the day the first one hundred (100) people were confirmed to have covid-19"},"scales":{"linear":"scales \\"normally\\" 0, 10, 20, 30, 40, 50...","logarithmic":"scales by a multiplier 0, 10, 100, 1000, 10000... this scale is useful for looking at series that are early in their curve and series that are late in their curve at the same time"},"series":{"activeCases":"Confirmed - Deaths - Recoveries*.  There is an * because this value depends on Recoveries*","confirmedCases":"The number of confirmed cases according to reported data","deaths":"The number of reported deaths, this is the most reliable data point","recoveries":"Roughly how many people have recovered.  There is some actual data but it is not maintained. Recoveries are estimated based on ${recoveryDays} days since the case was reported confirmed","estimatedActiveCases":{"part1":"This estimate is","link":"based on the spreadsheet created for \\"Coronavirus act today...\\".","part2":"","url":"https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca"},"projectionSeir":{"title":"SEIR Projection","part1":"This projection is","link":"based on Gabriel Goh\'s Epidemic Calculator","part2":"","url":"https://gabgoh.github.io/COVID/index.html"}},"titles":{"metrics":"Metrics","modes":"Modes","scales":"Scales","series":"Series"}},"errors":{"bootstrap":"Could not bootstrap the application","chart":{"domError":"could not add the chart to the DOM"}},"geography":{"stop":"Stop","play":"Play","mode0":"Active Cases*","mode1":"Confirmed Cases","mode2":"Deaths","mode3":"Recoveries*","modeDefault":"Active Cases*","toolTip0":"<b>%name<b/> <br/>Active Cases: %zValue","toolTip1":"<b>%name<b/> <br/>Confirmed Cases: %zValue","toolTip2":"<b>%name<b/> <br/>Deaths: %zValue","toolTip3":"<b>%name<b/> <br/>Recoveries: %zValue","toolTipDefault":"<b>%name<b/> <br/>Active Cases: %zValue"},"header":{"explorer":"Explorer","feedbackLink":"feedback","feedbackTitle":"Provide feedback, suggest features, file issues, etc","jhuGitHubTitle":"GitHub repository of source data maintained by Johns Hopkins University","jhuSourceDataLink":"Johns Hopkins University Source Data","sourceCodeLink":"source code","sourceCodeTitle":"Source code to this website","title":"COVID-19","usData":"US Data","usDataLink":"From NYT","usDataTitle":"New York Times US state and county data"},"i18n":{"part1":"Error loading language","part2":"reverting to English"},"learningTable":{"configure":"⚙️ Configure Table","enlarge":"✗ Enlarge Table","showAll":"Show All","showOnlySelected":"Only Selected","titles":{"active":"Active","activePercent":"Active %","confirmed":"Confirmed","confirmedPercent":"Confirmed %","deaths":"Deaths","deathsPercent":"Deaths %","mortality":"Mortality","newConfirmed":"New Confirmed","newDeaths":"New Deaths","peakActive":"Peak Active","peakActivePercent":"Peak Active %","peakMortality":"Peak Mortality","peakNewConfirmed":"Peak New Confirmed","peakNewDeaths":"Peak New Deaths","population":"Population","populationDensity":"Population Density","recoveries":"Recoveries","recoveriesPercent":"Recoveries %","region":"Region"}},"metrics":{"byValue":"By Value","byPercent":"Percent"},"modes":{"byDate":"By date","byFirst":"By first confirmed","byFirst100":"By first 100 confirmed"},"scaleTypes":{"linear":"Linear","logarithmic":"Logarithmic"},"seirInput":{"daysToProject":"Days to Project","durationOfInfection":"Duration of Infection","fatalityRate":"Fatality Rate","incubationPeriod":"Incubation Period","hospitalizationRate":"Hospitalization Rate","lengthOfSevereHospitalStay":"Length of Severe Hospital Stay","recoveryTimeForMildCases":"Recovery Time for Mild Cases","timeFromIncubationToDeath":"Time From Incubation to Death","timeFromIncubationToHospital":"Time From Incubation to Hospital","r0":"R0","unitDays":"days"},"series":{"activeCases":"Active Cases*","confirmedCases":"Confirmed Cases","deaths":"Deaths","estimatedActiveCases":"Estimated Active Cases","newConfirmed":"New Cases","newDeaths":"New Deaths","projectionSeirActive":"SEIR Projection (Active)","projectionSeirDeaths":"SEIR Projection (Deaths)","projectionSeirRecoveries":"SEIR Projection (Recoveries)","recoveries":"Recoveries*"},"state":{"parseFail":"Failed to parse saved state, resetting localStorage","wipingOld":"Upgrade: Wiping old state"},"states":["Show States","Hide States"],"timeVsCounts":{"configureChart":"Chart Settings","configureSeir":"Configure SEIR","configure":"⚙️ Configure Chart","enlarge":"✗ Enlarge Chart","people":"Number of People","percent":"Percentage of Population","reload":"Reload","resetSeir":"Reset SEIR"}}'
    );
  },
  function(e, t, n) {
    'use strict';
    var o = n(1),
      r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      s = {};
    function u(e) {
      return o.isMemo(e) ? a : s[e.$$typeof] || r;
    }
    (s[o.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (s[o.Memo] = a);
    var c = Object.defineProperty,
      l = Object.getOwnPropertyNames,
      p = Object.getOwnPropertySymbols,
      d = Object.getOwnPropertyDescriptor,
      h = Object.getPrototypeOf,
      y = Object.prototype;
    e.exports = function e(t, n, o) {
      if ('string' != typeof n) {
        if (y) {
          var r = h(n);
          r && r !== y && e(t, r, o);
        }
        var a = l(n);
        p && (a = a.concat(p(n)));
        for (var s = u(t), f = u(n), m = 0; m < a.length; ++m) {
          var g = a[m];
          if (!(i[g] || (o && o[g]) || (f && f[g]) || (s && s[g]))) {
            var b = d(n, g);
            try {
              c(t, g, b);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  },
  function(e, t, n) {
    'use strict';
    (function(e, o) {
      var r,
        i = n(5);
      r =
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : void 0 !== e
          ? e
          : o;
      var a = Object(i.a)(r);
      t.a = a;
    }.call(this, n(19), n(20)(e)));
  },
  function(e, t, n) {
    'use strict';
    function o(e) {
      var t,
        n = e.Symbol;
      return (
        'function' == typeof n
          ? n.observable
            ? (t = n.observable)
            : ((t = n('observable')), (n.observable = t))
          : (t = '@@observable'),
        t
      );
    }
    n.d(t, 'a', function() {
      return o;
    });
  },
  function(e) {
    e.exports = JSON.parse(
      '[{"country":"Afghanistan","population":"35530081"},{"country":"Albania","population":"2930187"},{"country":"Algeria","population":"41318142"},{"country":"American Samoa","population":"55641"},{"country":"Andorra","population":"76965"},{"country":"Angola","population":"29784193"},{"country":"Anguilla","population":"14909"},{"country":"Antarctica","population":null},{"country":"Antigua and Barbuda","population":"102012"},{"country":"Argentina","population":"44271041"},{"country":"Armenia","population":"2930450"},{"country":"Aruba","population":"105264"},{"country":"Australia","population":"24450561"},{"country":"Austria","population":"8735453"},{"country":"Azerbaijan","population":"9827589"},{"country":"Bahamas","population":"395361"},{"country":"Bahrain","population":"1492584"},{"country":"Bangladesh","population":"164669751"},{"country":"Barbados","population":"285719"},{"country":"Belarus","population":"9468338"},{"country":"Belgium","population":"11429336"},{"country":"Belize","population":"374681"},{"country":"Benin","population":"11175692"},{"country":"Bermuda","population":"61349"},{"country":"Bhutan","population":"807610"},{"country":"Bolivia","population":"11051600"},{"country":"Bosnia and Herzegovina","population":"3507017"},{"country":"Botswana","population":"2291661"},{"country":"Bouvet Island","population":null},{"country":"Brazil","population":"209288278"},{"country":"British Indian Ocean Territory","population":null},{"country":"Brunei","population":"428697"},{"country":"Bulgaria","population":"7084571"},{"country":"Burkina Faso","population":"19193382"},{"country":"Burundi","population":"10864245"},{"country":"Cambodia","population":"16005373"},{"country":"Cameroon","population":"24053727"},{"country":"Canada","population":"36624199"},{"country":"Cape Verde","population":"546388"},{"country":"Cayman Islands","population":"61559"},{"country":"Central African Republic","population":"4659080"},{"country":"Chad","population":"14899994"},{"country":"Chile","population":"18054726"},{"country":"China","population":"1409517397"},{"country":"Christmas Island","population":"2500"},{"country":"Cocos (Keeling) Islands","population":"600"},{"country":"Colombia","population":"49065615"},{"country":"Comoros","population":"813912"},{"country":"Congo","population":"5260750"},{"country":"Cook Islands","population":"17380"},{"country":"Costa Rica","population":"4905769"},{"country":"Croatia","population":"4189353"},{"country":"Cuba","population":"11484636"},{"country":"Cyprus","population":"1179551"},{"country":"Czech Republic","population":"10618303"},{"country":"Denmark","population":"5733551"},{"country":"Djibouti","population":"956985"},{"country":"Dominica","population":"73925"},{"country":"Dominican Republic","population":"10766998"},{"country":"East Timor","population":"1296311"},{"country":"Ecuador","population":"16624858"},{"country":"Egypt","population":"97553151"},{"country":"El Salvador","population":"6377853"},{"country":"England","population":null},{"country":"Equatorial Guinea","population":"1267689"},{"country":"Eritrea","population":"5068831"},{"country":"Estonia","population":"1309632"},{"country":"Ethiopia","population":"104957438"},{"country":"Falkland Islands","population":"2910"},{"country":"Faroe Islands","population":"49290"},{"country":"Fiji Islands","population":"905502"},{"country":"Finland","population":"5523231"},{"country":"France","population":"64979548"},{"country":"French Guiana","population":"282731"},{"country":"French Polynesia","population":"283007"},{"country":"French Southern territories","population":null},{"country":"Gabon","population":"2025137"},{"country":"Gambia","population":"2100568"},{"country":"Georgia","population":"3912061"},{"country":"Germany","population":"82114224"},{"country":"Ghana","population":"28833629"},{"country":"Gibraltar","population":"34571"},{"country":"Greece","population":"11159773"},{"country":"Greenland","population":"56480"},{"country":"Grenada","population":"107825"},{"country":"Guadeloupe","population":"449568"},{"country":"Guam","population":"164229"},{"country":"Guatemala","population":"16913503"},{"country":"Guinea","population":"12717176"},{"country":"Guinea-Bissau","population":"1861283"},{"country":"Guyana","population":"777859"},{"country":"Haiti","population":"10981229"},{"country":"Heard Island and McDonald Islands","population":null},{"country":"Holy See (Vatican City State)","population":"1000"},{"country":"Honduras","population":"9265067"},{"country":"Hong Kong","population":"7364883"},{"country":"Hungary","population":"9721559"},{"country":"Iceland","population":"335025"},{"country":"India","population":"1339180127"},{"country":"Indonesia","population":"263991379"},{"country":"Iran","population":"81162788"},{"country":"Iraq","population":"38274618"},{"country":"Ireland","population":"4761657"},{"country":"Israel","population":"8321570"},{"country":"Italy","population":"59359900"},{"country":"Ivory Coast","population":"24294750"},{"country":"Jamaica","population":"2890299"},{"country":"Japan","population":"127484450"},{"country":"Jordan","population":"9702353"},{"country":"Kazakhstan","population":"18204499"},{"country":"Kenya","population":"49699862"},{"country":"Kiribati","population":"116398"},{"country":"Kuwait","population":"4136528"},{"country":"Kyrgyzstan","population":"6045117"},{"country":"Laos","population":"6858160"},{"country":"Latvia","population":"1949670"},{"country":"Lebanon","population":"6082357"},{"country":"Lesotho","population":"2233339"},{"country":"Liberia","population":"4731906"},{"country":"Libyan Arab Jamahiriya","population":"5605000"},{"country":"Liechtenstein","population":"37922"},{"country":"Lithuania","population":"2890297"},{"country":"Luxembourg","population":"583455"},{"country":"Macao","population":"473000"},{"country":"North Macedonia","population":"2024000"},{"country":"Madagascar","population":"25570895"},{"country":"Malawi","population":"18622104"},{"country":"Malaysia","population":"31624264"},{"country":"Maldives","population":"436330"},{"country":"Mali","population":"18541980"},{"country":"Malta","population":"430835"},{"country":"Marshall Islands","population":"53127"},{"country":"Martinique","population":"384896"},{"country":"Mauritania","population":"4420184"},{"country":"Mauritius","population":"1265138"},{"country":"Mayotte","population":"253045"},{"country":"Mexico","population":"129163276"},{"country":"Micronesia, Federated States of","population":null},{"country":"Moldova","population":"4051212"},{"country":"Monaco","population":"38695"},{"country":"Mongolia","population":"3075647"},{"country":"Montserrat","population":"5177"},{"country":"Morocco","population":"35739580"},{"country":"Mozambique","population":"29668834"},{"country":"Myanmar","population":"53370609"},{"country":"Namibia","population":"2533794"},{"country":"Nauru","population":"11359"},{"country":"Nepal","population":"29304998"},{"country":"Netherlands","population":"17035938"},{"country":"Netherlands Antilles","population":"217000"},{"country":"New Caledonia","population":"276255"},{"country":"New Zealand","population":"4705818"},{"country":"Nicaragua","population":"6217581"},{"country":"Niger","population":"21477348"},{"country":"Nigeria","population":"190886311"},{"country":"Niue","population":"1618"},{"country":"Norfolk Island","population":"2000"},{"country":"North Korea","population":"25490965"},{"country":"Northern Ireland","population":null},{"country":"Northern Mariana Islands","population":"55144"},{"country":"Norway","population":"5305383"},{"country":"Oman","population":"4636262"},{"country":"Pakistan","population":"197015955"},{"country":"Palau","population":"21729"},{"country":"Palestine","population":"4920724"},{"country":"Panama","population":"4098587"},{"country":"Papua New Guinea","population":"8251162"},{"country":"Paraguay","population":"6811297"},{"country":"Peru","population":"32165485"},{"country":"Philippines","population":"104918090"},{"country":"Pitcairn","population":"50"},{"country":"Poland","population":"38170712"},{"country":"Portugal","population":"10329506"},{"country":"Puerto Rico","population":"3663131"},{"country":"Qatar","population":"2639211"},{"country":"Reunion","population":"699000"},{"country":"Romania","population":"19679306"},{"country":"Russian Federation","population":"143989754"},{"country":"Rwanda","population":"12208407"},{"country":"Saint Helena","population":"4049"},{"country":"Saint Kitts and Nevis","population":"55345"},{"country":"Saint Lucia","population":"178844"},{"country":"Saint Pierre and Miquelon","population":"6320"},{"country":"Saint Vincent and the Grenadines","population":"109897"},{"country":"Samoa","population":"196440"},{"country":"San Marino","population":"33400"},{"country":"Sao Tome and Principe","population":"204327"},{"country":"Saudi Arabia","population":"32938213"},{"country":"Scotland","population":null},{"country":"Senegal","population":"15850567"},{"country":"Seychelles","population":"94737"},{"country":"Sierra Leone","population":"7557212"},{"country":"Singapore","population":"5708844"},{"country":"Slovakia","population":"5447662"},{"country":"Slovenia","population":"2079976"},{"country":"Solomon Islands","population":"611343"},{"country":"Somalia","population":"14742523"},{"country":"South Africa","population":"56717156"},{"country":"South Georgia and the South Sandwich Islands","population":null},{"country":"South Korea","population":"50982212"},{"country":"South Sudan","population":"12575714"},{"country":"Spain","population":"46354321"},{"country":"SriLanka","population":"20876917"},{"country":"Sudan","population":"40533330"},{"country":"Suriname","population":"563402"},{"country":"Svalbard and Jan Mayen","population":"3200"},{"country":"Swaziland","population":"1008000"},{"country":"Sweden","population":"9910701"},{"country":"Switzerland","population":"8476005"},{"country":"Syria","population":"18269868"},{"country":"Tajikistan","population":"8921343"},{"country":"Tanzania","population":"57310019"},{"country":"Thailand","population":"69037513"},{"country":"The Democratic Republic of Congo","population":null},{"country":"Togo","population":"7797694"},{"country":"Tokelau","population":"1300"},{"country":"Tonga","population":"108020"},{"country":"Trinidad and Tobago","population":"1369125"},{"country":"Tunisia","population":"11532127"},{"country":"Turkey","population":"80745020"},{"country":"Turkmenistan","population":"5758075"},{"country":"Turks and Caicos Islands","population":"35446"},{"country":"Tuvalu","population":"11192"},{"country":"Uganda","population":"42862958"},{"country":"Ukraine","population":"44222947"},{"country":"United Arab Emirates","population":"9400145"},{"country":"United Kingdom","population":"66181585"},{"country":"United States","population":"324459463"},{"country":"United States Minor Outlying Islands","population":null},{"country":"Uruguay","population":"3456750"},{"country":"Uzbekistan","population":"31910641"},{"country":"Vanuatu","population":"276244"},{"country":"Venezuela","population":"31977065"},{"country":"Vietnam","population":"95540800"},{"country":"Virgin Islands, British","population":null},{"country":"Virgin Islands, U.S.","population":null},{"country":"Wales","population":null},{"country":"Wallis and Futuna","population":"11773"},{"country":"Western Sahara","population":"552628"},{"country":"Yemen","population":"28250420"},{"country":"Yugoslavia","population":"10640000"},{"country":"Zambia","population":"17094130"},{"country":"Zimbabwe","population":"16529904"}]'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '[{"country":"Afghanistan","density":"46.8"},{"country":"Albania","density":"101.23"},{"country":"Algeria","density":"16.46"},{"country":"American Samoa","density":"275.83"},{"country":"Andorra","density":"168.55"},{"country":"Angola","density":"17.22"},{"country":"Anguilla","density":null},{"country":"Antarctica","density":null},{"country":"Antigua and Barbuda","density":"204.51"},{"country":"Argentina","density":"15.14"},{"country":"Armenia","density":"104.55"},{"country":"Aruba","density":"571.73"},{"country":"Australia","density":"3.01"},{"country":"Austria","density":"102.83"},{"country":"Azerbaijan","density":"113.92"},{"country":"Bahamas","density":null},{"country":"Bahrain","density":"1"},{"country":"Bangladesh","density":"1"},{"country":"Barbados","density":"661.96"},{"country":"Belarus","density":"46.65"},{"country":"Belgium","density":"369.72"},{"country":"Belize","density":"14.55"},{"country":"Benin","density":"91.55"},{"country":"Bermuda","density":"1"},{"country":"Bhutan","density":"19.78"},{"country":"Bolivia","density":"9.85"},{"country":"Bosnia and Herzegovina","density":"75.08"},{"country":"Botswana","density":"3.57"},{"country":"Bouvet Island","density":null},{"country":"Brazil","density":"23.97"},{"country":"British Indian Ocean Territory","density":null},{"country":"Brunei","density":null},{"country":"Bulgaria","density":"66.92"},{"country":"Burkina Faso","density":"61.9"},{"country":"Burundi","density":"395.74"},{"country":"Cambodia","density":"85.74"},{"country":"Cameroon","density":"47.08"},{"country":"Canada","density":"3.87"},{"country":"Cape Verde","density":null},{"country":"Cayman Islands","density":"243.48"},{"country":"Central African Republic","density":"7.41"},{"country":"Chad","density":"10.19"},{"country":"Chile","density":"23.7"},{"country":"China","density":"144.58"},{"country":"Christmas Island","density":null},{"country":"Cocos (Keeling) Islands","density":null},{"country":"Colombia","density":"43.55"},{"country":"Comoros","density":"394.9"},{"country":"Congo","density":null},{"country":"Cook Islands","density":null},{"country":"Costa Rica","density":"95.42"},{"country":"Croatia","density":"76"},{"country":"Cuba","density":"105.84"},{"country":"Cyprus","density":"123.5"},{"country":"Czech Republic","density":"136.24"},{"country":"Denmark","density":"132.31"},{"country":"Djibouti","density":"37.66"},{"country":"Dominica","density":"96"},{"country":"Dominican Republic","density":"215.31"},{"country":"East Timor","density":null},{"country":"Ecuador","density":"63.37"},{"country":"Egypt","density":null},{"country":"El Salvador","density":"306.01"},{"country":"England","density":null},{"country":"Equatorial Guinea","density":"26.99"},{"country":"Eritrea","density":"62.7"},{"country":"Estonia","density":"31.25"},{"country":"Ethiopia","density":"94.1"},{"country":"Falkland Islands","density":null},{"country":"Faroe Islands","density":null},{"country":"Fiji Islands","density":null},{"country":"Finland","density":"17.9"},{"country":"France","density":"120.59"},{"country":"French Guiana","density":null},{"country":"French Polynesia","density":"75.64"},{"country":"French Southern territories","density":null},{"country":"Gabon","density":"6.49"},{"country":"Gambia","density":null},{"country":"Georgia","density":"78.32"},{"country":"Germany","density":"231.31"},{"country":"Ghana","density":"113.85"},{"country":"Gibraltar","density":null},{"country":"Greece","density":"85.59"},{"country":"Greenland","density":"0.14"},{"country":"Grenada","density":"311.46"},{"country":"Guadeloupe","density":null},{"country":"Guam","density":"305.79"},{"country":"Guatemala","density":"144.35"},{"country":"Guinea","density":"47.8"},{"country":"Guinea-Bissau","density":"60.61"},{"country":"Guyana","density":"4.06"},{"country":"Haiti","density":"374.36"},{"country":"Heard Island and McDonald Islands","density":null},{"country":"Holy See (Vatican City State)","density":null},{"country":"Honduras","density":"72.37"},{"country":"Hong Kong","density":null},{"country":"Hungary","density":"109.33"},{"country":"Iceland","density":"3.22"},{"country":"India","density":"421.14"},{"country":"Indonesia","density":"124"},{"country":"Iran","density":null},{"country":"Iraq","density":"76.94"},{"country":"Ireland","density":"66.7"},{"country":"Israel","density":"372.43"},{"country":"Italy","density":"203.41"},{"country":"Ivory Coast","density":"63.89"},{"country":"Jamaica","density":"250.69"},{"country":"Japan","density":"349.29"},{"country":"Jordan","density":"72.75"},{"country":"Kazakhstan","density":null},{"country":"Kenya","density":"77.93"},{"country":"Kiribati","density":"126.36"},{"country":"Kuwait","density":"189.03"},{"country":"Kyrgyzstan","density":null},{"country":"Laos","density":null},{"country":"Latvia","density":"32.38"},{"country":"Lebanon","density":"436.7"},{"country":"Lesotho","density":"68.33"},{"country":"Liberia","density":"44.58"},{"country":"Libyan Arab Jamahiriya","density":null},{"country":"Liechtenstein","density":"230.78"},{"country":"Lithuania","density":"47.17"},{"country":"Luxembourg","density":"209.73"},{"country":"Macao","density":null},{"country":"North Macedonia","density":null},{"country":"Madagascar","density":"39.4"},{"country":"Malawi","density":"173.55"},{"country":"Malaysia","density":"90.45"},{"country":"Maldives","density":"1"},{"country":"Mali","density":"12.54"},{"country":"Malta","density":"1"},{"country":"Marshall Islands","density":"292.41"},{"country":"Martinique","density":null},{"country":"Mauritania","density":"3.77"},{"country":"Mauritius","density":"638.57"},{"country":"Mayotte","density":null},{"country":"Mexico","density":"62.93"},{"country":"Micronesia, Federated States of","density":null},{"country":"Moldova","density":"124.02"},{"country":"Monaco","density":"18"},{"country":"Mongolia","density":"1.83"},{"country":"Montserrat","density":null},{"country":"Morocco","density":"73.96"},{"country":"Mozambique","density":"32.85"},{"country":"Myanmar","density":"81.52"},{"country":"Namibia","density":"2.8"},{"country":"Nauru","density":null},{"country":"Nepal","density":"193.91"},{"country":"Netherlands","density":"498.35"},{"country":"Netherlands Antilles","density":null},{"country":"New Caledonia","density":"14.33"},{"country":"New Zealand","density":"16.98"},{"country":"Nicaragua","density":"50.53"},{"country":"Niger","density":"14.08"},{"country":"Nigeria","density":"190.62"},{"country":"Niue","density":null},{"country":"Norfolk Island","density":null},{"country":"North Korea","density":null},{"country":"Northern Ireland","density":null},{"country":"Northern Mariana Islands","density":"117.08"},{"country":"Norway","density":"13.92"},{"country":"Oman","density":"11.74"},{"country":"Pakistan","density":"236.28"},{"country":"Palau","density":"45.47"},{"country":"Palestine","density":null},{"country":"Panama","density":"51.98"},{"country":"Papua New Guinea","density":"16.17"},{"country":"Paraguay","density":"17.12"},{"country":"Peru","density":"23.73"},{"country":"Philippines","density":"329.99"},{"country":"Pitcairn","density":null},{"country":"Poland","density":"125.83"},{"country":"Portugal","density":"114.2"},{"country":"Puerto Rico","density":"407.56"},{"country":"Qatar","density":"186.79"},{"country":"Reunion","density":null},{"country":"Romania","density":"86.79"},{"country":"Russian Federation","density":"8.76"},{"country":"Rwanda","density":"477.36"},{"country":"Saint Helena","density":null},{"country":"Saint Kitts and Nevis","density":null},{"country":"Saint Lucia","density":null},{"country":"Saint Pierre and Miquelon","density":null},{"country":"Saint Vincent and the Grenadines","density":null},{"country":"Samoa","density":"67.27"},{"country":"San Marino","density":"524.13"},{"country":"Sao Tome and Principe","density":"201.03"},{"country":"Saudi Arabia","density":"13.41"},{"country":"Scotland","density":null},{"country":"Senegal","density":"73.41"},{"country":"Seychelles","density":"193.85"},{"country":"Sierra Leone","density":"84.4"},{"country":"Singapore","density":"7"},{"country":"Slovakia","density":null},{"country":"Slovenia","density":"102.31"},{"country":"Solomon Islands","density":"20.05"},{"country":"Somalia","density":"16.73"},{"country":"South Africa","density":"43.68"},{"country":"South Georgia and the South Sandwich Islands","density":null},{"country":"South Korea","density":null},{"country":"South Sudan","density":"0"},{"country":"Spain","density":"93.52"},{"country":"SriLanka","density":null},{"country":"Sudan","density":"20.73"},{"country":"Suriname","density":"3.46"},{"country":"Svalbard and Jan Mayen","density":null},{"country":"Swaziland","density":"72.65"},{"country":"Sweden","density":"23.55"},{"country":"Switzerland","density":"204.51"},{"country":"Syria","density":null},{"country":"Tajikistan","density":"58.64"},{"country":"Tanzania","density":"55.6"},{"country":"Thailand","density":"131.16"},{"country":"The Democratic Republic of Congo","density":null},{"country":"Togo","density":"125.34"},{"country":"Tokelau","density":null},{"country":"Tonga","density":"146.28"},{"country":"Trinidad and Tobago","density":"261.43"},{"country":"Tunisia","density":"70.07"},{"country":"Turkey","density":"97.36"},{"country":"Turkmenistan","density":"11.15"},{"country":"Turks and Caicos Islands","density":"34.84"},{"country":"Tuvalu","density":"329.2"},{"country":"Uganda","density":"188.07"},{"country":"Ukraine","density":"78.52"},{"country":"United Arab Emirates","density":"111.8"},{"country":"United Kingdom","density":"264.94"},{"country":"United States","density":"34.56"},{"country":"United States Minor Outlying Islands","density":null},{"country":"Uruguay","density":"19.47"},{"country":"Uzbekistan","density":"71.09"},{"country":"Vanuatu","density":"20.74"},{"country":"Venezuela","density":null},{"country":"Vietnam","density":"289.32"},{"country":"Virgin Islands, British","density":null},{"country":"Virgin Islands, U.S.","density":null},{"country":"Wales","density":null},{"country":"Wallis and Futuna","density":null},{"country":"Western Sahara","density":null},{"country":"Yemen","density":null},{"country":"Yugoslavia","density":null},{"country":"Zambia","density":"19.56"},{"country":"Zimbabwe","density":"36.58"}]'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"Australia":{"AC":"Australian Capital Territory","NS":"New South Wales","NT":"Northern Territory","QL":"Queensland","SA":"South Australia","TS":"Tasmania","VI":"Victoria","WA":"Western Australia"},"Canada":{"AB":"Alberta","BC":"British Columbia","ON":"Ontario","MB":"Manitoba","NB":"New Brunswick","NF":"Newfoundland and Labrador","NT":"Northwest Territories","NS":"Nova Scotia","PE":"Prince Edward Island","QC":"Quebec","SK":"Saskatchewan","YT":"Yukon","NU":"Nunavut"},"China":{"AH":"Anhui","BJ":"Beijing","CQ":"Chongqing","FJ":"Fujian","GS":"Gansu","GD":"Guangdong","GX":"Guangxi","GZ":"Guizhou","HA":"Hainan","HB":"Hebei","HL":"Heilongjiang","HE":"Henan","HK":"Hong Kong","HU":"Hubei","HN":"Hunan","NM":"Inner Mongolia","JS":"Jiangsu","JX":"Jiangxi","JL":"Jilin","LN":"Liaoning","MO":"Macau","NX":"Ningxia","QH":"Qinghai","SA":"Shaanxi","SD":"Shandong","SH":"Shanghai","SX":"Shanxi","SC":"Sichuan","TJ":"Tianjin","AR":"Tibet","XJ":"Xinjiang","YN":"Yunnan","ZJ":"Zhejiang"},"US":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","D.C.":"District of Columbia","DE":"Delaware","FM":"Federated States Of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}}'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"Afghanistan":"AF","Åland Islands":"AX","Albania":"AL","Algeria":"DZ","American Samoa":"AS","Andorra":"AD","Angola":"AO","Anguilla":"AI","Antarctica":"AQ","Antigua and Barbuda":"AG","Argentina":"AR","Armenia":"AM","Aruba":"AW","Australia":"AU","Austria":"AT","Azerbaijan":"AZ","Bahamas":"BS","Bahamas, The":"BS","Bangladesh":"BD","Bahrain":"BH","Barbados":"BB","Belarus":"BY","Belgium":"BE","Belize":"BZ","Benin":"BJ","Bermuda":"BM","Bhutan":"BT","Bolivia":"BO","Bosnia and Herzegovina":"BA","Botswana":"BW","Bouvet Island":"BV","Brazil":"BR","British Indian Ocean Territory":"IO","Brunei":"BN","Bulgaria":"BG","Burkina Faso":"BF","Burma":"MM","Burundi":"BI","Cabo Verde":"CV","Cambodia":"KH","Cameroon":"CM","Canada":"CA","Cayman Islands":"KY","Central African Republic":"CF","Chad":"TD","Chile":"CL","China":"CN","Christmas Island":"CX","Cocos (Keeling) Islands":"CC","Colombia":"CO","Comoros":"KM","Congo":"CG","Congo (Brazzaville)":"CG","Congo, The Democratic Republic of the":"CD","Congo (Kinshasa)":"CD","Cook Islands":"CK","Costa Rica":"CR","Cote d\'Ivoire":"CI","Croatia":"HR","Cuba":"CU","Cyprus":"CY","Czechia":"CZ","Denmark":"DK","Djibouti":"DJ","Dominica":"DM","Dominican Republic":"DO","Ecuador":"EC","Egypt":"EG","El Salvador":"SV","Equatorial Guinea":"GQ","Eritrea":"ER","Estonia":"EE","Eswatini":"SZ","Ethiopia":"ET","Falkland Islands (Malvinas)":"FK","Faroe Islands":"FO","Fiji":"FJ","Finland":"FI","France":"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF","Gambia":"GM","Gabon":"GA","The, Gambia":"GM","Georgia":"GE","Germany":"DE","Ghana":"GH","Gibraltar":"GI","Greece":"GR","Greenland":"GL","Grenada":"GD","Guam":"GU","Guatemala":"GT","Guernsey":"GG","Guinea":"GN","Guinea-Bissau":"GW","Guyana":"GY","Haiti":"HT","Heard Island and Mcdonald Islands":"HM","Holy See":"VA","Honduras":"HN","Hong Kong":"HK","Hungary":"HU","Iceland":"IS","India":"IN","Indonesia":"ID","Iran":"IR","Iraq":"IQ","Ireland":"IE","Isle of Man":"IM","Israel":"IL","Italy":"IT","Jamaica":"JM","Japan":"JP","Jersey":"JE","Jordan":"JO","Kazakhstan":"KZ","Kenya":"KE","Kosovo":"XK","Kiribati":"KI","Korea, Democratic People\'S Republic of":"KP","Korea, South":"KR","Kuwait":"KW","Kyrgyzstan":"KG","Lao People\'S Democratic Republic":"LA","Laos":"LA","Latvia":"LV","Lebanon":"LB","Lesotho":"LS","Liberia":"LR","Libyan Arab Jamahiriya":"LY","Liechtenstein":"LI","Libya":"LY","Lithuania":"LT","Luxembourg":"LU","Macao":"MO","Macedonia, The Former Yugoslav Republic of":"MK","Madagascar":"MG","Malawi":"MW","Malaysia":"MY","Maldives":"MV","Mali":"ML","Malta":"MT","Marshall Islands":"MH","Mauritania":"MR","Mauritius":"MU","Mexico":"MX","Micronesia, Federated States of":"FM","Moldova":"MD","Monaco":"MC","Mongolia":"MN","Montenegro":"ME","Montserrat":"MS","Morocco":"MA","Mozambique":"MZ","Myanmar":"MM","Namibia":"NA","Nauru":"NR","Nepal":"NP","Netherlands":"NL","Netherlands Antilles":"AN","New Caledonia":"NC","New Zealand":"NZ","Nicaragua":"NI","Niger":"NE","Nigeria":"NG","Niue":"NU","Norfolk Island":"NF","Northern Mariana Islands":"MP","North Macedonia":"MK","Norway":"NO","Oman":"OM","Pakistan":"PK","Palau":"PW","Palestinian Territory, Occupied":"PS","Panama":"PA","Papua New Guinea":"PG","Paraguay":"PY","Peru":"PE","Philippines":"PH","Pitcairn":"PN","Poland":"PL","Portugal":"PT","Puerto Rico":"PR","Qatar":"QA","Romania":"RO","Russia":"RU","Rwanda":"RW","Saint Helena":"SH","Saint Kitts and Nevis":"KN","Saint Lucia":"LC","Saint Pierre and Miquelon":"PM","Samoa":"WS","San Marino":"SM","Sao Tome and Principe":"ST","Saudi Arabia":"SA","Senegal":"SN","Serbia":"RS","Seychelles":"SC","Sierra Leone":"SL","Singapore":"SG","Slovakia":"SK","Slovenia":"SI","Solomon Islands":"SB","Somalia":"SO","South Africa":"ZA","South Georgia and the South Sandwich Islands":"GS","Spain":"ES","Sri Lanka":"LK","Saint Vincent and the Grenadines":"VC","Sudan":"SD","Suriname":"SR","Svalbard and Jan Mayen":"SJ","Swaziland":"SZ","Sweden":"SE","Switzerland":"CH","Syria":"SY","Taiwan*":"TW","Tajikistan":"TJ","Tanzania":"TZ","Thailand":"TH","Timor-Leste":"TL","Togo":"TG","Tokelau":"TK","Tonga":"TO","Trinidad and Tobago":"TT","Tunisia":"TN","Turkey":"TR","Turkmenistan":"TM","Turks and Caicos Islands":"TC","Tuvalu":"TV","Uganda":"UG","Ukraine":"UA","United Arab Emirates":"AE","United Kingdom":"GB","US":"US","United States Minor Outlying Islands":"UM","Uruguay":"UY","Uzbekistan":"UZ","Vanuatu":"VU","Venezuela":"VE","Vietnam":"VN","Virgin Islands, British":"VG","Virgin Islands, U.S.":"VI","Wallis and Futuna":"WF","Western Sahara":"EH","Yemen":"YE","Zambia":"ZM","Zimbabwe":"ZW","West Bank and Gaza":"PO"}'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"Afghanistan":"Asia","Albania":"Europe","Algeria":"Africa","Andorra":"Europe","Angola":"Africa","Argentina":"South America","Armenia":"Asia","Australia":"Oceania","Austria":"Europe","Azerbaijan":"Asia","Bahamas, The":"North America","Bangladesh":"Asia","Belarus":"Europe","Belgium":"Europe","Benin":"Africa","Bhutan":"Asia","Bolivia":"South America","Bosnia and Herzegovina":"Europe","Brazil":"South America","Brunei":"Asia","Bulgaria":"Europe","Burkina Faso":"Africa","Cambodia":"Asia","Cameroon":"Africa","Canada":"North America","Central African Republic":"Africa","Chad":"Africa","Chile":"South America","China":"Asia","Colombia":"South America","Costa Rica":"North America","Cote d\'Ivoire":"Africa","Croatia":"Europe","Cuba":"North America","Cyprus":"Asia","Czechia":"Europe","Denmark":"Europe","Djibouti":"Africa","Dominican Republic":"North America","Ecuador":"South America","Egypt":"Africa","El Salvador":"North America","Equatorial Guinea":"Africa","Eritrea":"Africa","Estonia":"Europe","Ethiopia":"Africa","Fiji":"Oceania","Finland":"Europe","France":"Europe","Gabon":"Africa","Georgia":"Asia","Germany":"Europe","Ghana":"Africa","Greece":"Europe","Guatemala":"North America","Guinea":"Africa","Guyana":"South America","Haiti":"North America","Honduras":"North America","Hungary":"Europe","Iceland":"Europe","India":"Asia","Indonesia":"Asia","Iran":"Asia","Iraq":"Asia","Ireland":"Europe","Israel":"Asia","Italy":"Europe","Jamaica":"North America","Japan":"Asia","Jordan":"Asia","Kazakhstan":"Asia","Kenya":"Africa","Korea, South":"Asia","Kuwait":"Asia","Kyrgyzstan":"Asia","Latvia":"Europe","Lebanon":"Asia","Liberia":"Africa","Liechtenstein":"Europe","Lithuania":"Europe","Luxembourg":"Europe","Madagascar":"Africa","Malaysia":"Asia","Mauritania":"Africa","Mexico":"North America","Moldova":"Europe","Monaco":"Europe","Mongolia":"Asia","Morocco":"Africa","Mozambique":"Africa","Namibia":"Africa","Nepal":"Asia","Netherlands":"Europe","New Zealand":"Oceania","Nicaragua":"North America","Niger":"Africa","Nigeria":"Africa","Norway":"Europe","Oman":"Asia","Pakistan":"Asia","Panama":"North America","Papua New Guinea":"Oceania","Paraguay":"South America","Peru":"South America","Philippines":"Asia","Poland":"Europe","Portugal":"Europe","Qatar":"Asia","Romania":"Europe","Russia":"Asia","Rwanda":"Africa","San Marino":"Europe","Saudi Arabia":"Asia","Senegal":"Africa","Slovakia":"Europe","Slovenia":"Europe","Somalia":"Africa","South Africa":"Africa","Spain":"Europe","Sri Lanka":"Asia","Sudan":"Africa","Suriname":"South America","Sweden":"Europe","Switzerland":"Europe","Syria":"Asia","Taiwan*":"Asia","Tanzania":"Africa","Thailand":"Asia","Togo":"Africa","Trinidad and Tobago":"North America","Tunisia":"Africa","Turkey":"Asia","US":"North America","Uganda":"Africa","Ukraine":"Europe","United Arab Emirates":"Asia","United Kingdom":"Europe","Uruguay":"South America","Uzbekistan":"Asia","Venezuela":"South America","Vietnam":"Asia","Zambia":"Africa","Zimbabwe":"Africa"}'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"CA":{"2020-03-21":{"colour":"#000000","size":25,"description":"nonEssentialLockdown","npi":[],"state":["ON","QC"],"urls":["https://nationalpost.com/news/covid-19-ontario-and-quebec-order-non-essential-businesses-closed-after-spike-in-coronavirus-totals"]}},"CN":{"2020-01-19":{"description":"lockdown","npi":[],"state":"HU","urls":["https://www.bbc.com/news/world-asia-china-51217455","https://nationalpost.com/news/coronavirus-wuhan-virus-china-sars-canada-snakes"]}},"ES":{"2020-03-14":{"description":"lockdown","npi":[],"urls":["https://www.ctvnews.ca/health/coronavirus/spain-announces-national-lockdown-of-46-million-citizens-1.4853141"]}},"IT":{"2020-03-09":{"description":"lockdown","npi":[],"urls":["https://www.theverge.com/2020/3/9/21172390/italy-lockdown-coronavirus-expansion-lombardy","https://www.aljazeera.com/news/2020/03/italy-coronavirus-lockdown-restrictions-200310050125680.html"]}}}'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"Congo (Kinshasa)":"The Democratic Republic of Congo","Cote d\'Ivoire":"Ivory Coast","Czechia":"Czech Republic","Eswatini":"Swaziland","Holy See":"Holy See (Vatican City State)","Korea, South":"South Korea","Republic of the Congo":"Congo","Russia":"Russian Federation","Sri Lanka":"SriLanka","The Bahamas":"Bahamas","The Gambia":"Gambia","US":"United States"}'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"Bahamas, The":395361,"Burma":53370000,"Cabo Verde":546388,"Congo (Brazzaville)":1800000,"Congo (Kinshasa)":81340000,"Cruise Ship":3711,"Diamond Princess":3711,"Fiji":905502,"Gambia, The":2101000,"Guernsey":67052,"Jersey":97857,"Kosovo":1831000,"Libya":6375000,"Montenegro":613219,"Serbia":7022000,"Taiwan*":23780000,"Timor-Leste":1296000,"West Bank and Gaza":4685000}'
    );
  },
  function(e) {
    e.exports = JSON.parse(
      '{"Australia":{"Australian Capital Territory":"AC","New South Wales":"NS","Northern Territory":"NT","Queensland":"QL","South Australia":"SA","Tasmania":"TS","Victoria":"VI","Western Australia":"WA"},"Canada":{"Alberta":"AB","British Columbia":"BC","Ontario":"ON","Manitoba":"MB","New Brunswick":"NB","Newfoundland and Labrador":"NF","Northwest Territories":"NT","Nova Scotia":"NS","Prince Edward Island":"PE","Quebec":"QC","Saskatchewan":"SK","Yukon":"YT","Nunavut":"NU"},"China":{"Anhui":"AH","Beijing":"BJ","Chongqing":"CQ","Fujian":"FJ","Gansu":"GS","Guangdong":"GD","Guangxi":"GX","Guizhou":"GZ","Hainan":"HA","Hebei":"HB","Heilongjiang":"HL","Henan":"HE","Hong Kong":"HK","Hubei":"HU","Hunan":"HN","Inner Mongolia":"NM","Jiangsu":"JS","Jiangxi":"JX","Jilin":"JL","Liaoning":"LN","Macau":"MO","Ningxia":"NX","Qinghai":"QH","Shaanxi":"SA","Shandong":"SD","Shanghai":"SH","Shanxi":"SX","Sichuan":"SC","Tianjin":"TJ","Tibet":"AR","Xinjiang":"XJ","Yunnan":"YN","Zhejiang":"ZJ"},"US":{"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","District of Columbia":"D.C.","Delaware":"DE","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"}}'
    );
  },
  function(e, t, n) {
    e.exports = n(16)();
  },
  function(e, t, n) {
    'use strict';
    var o = n(17);
    function r() {}
    function i() {}
    (i.resetWarningCache = r),
      (e.exports = function() {
        function e(e, t, n, r, i, a) {
          if (a !== o) {
            var s = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((s.name = 'Invariant Violation'), s);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: r,
        };
        return (n.PropTypes = n), n;
      });
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t, n) {
    'use strict';
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var o = 'function' == typeof Symbol && Symbol.for,
      r = o ? Symbol.for('react.element') : 60103,
      i = o ? Symbol.for('react.portal') : 60106,
      a = o ? Symbol.for('react.fragment') : 60107,
      s = o ? Symbol.for('react.strict_mode') : 60108,
      u = o ? Symbol.for('react.profiler') : 60114,
      c = o ? Symbol.for('react.provider') : 60109,
      l = o ? Symbol.for('react.context') : 60110,
      p = o ? Symbol.for('react.async_mode') : 60111,
      d = o ? Symbol.for('react.concurrent_mode') : 60111,
      h = o ? Symbol.for('react.forward_ref') : 60112,
      y = o ? Symbol.for('react.suspense') : 60113,
      f = o ? Symbol.for('react.suspense_list') : 60120,
      m = o ? Symbol.for('react.memo') : 60115,
      g = o ? Symbol.for('react.lazy') : 60116,
      b = o ? Symbol.for('react.block') : 60121,
      v = o ? Symbol.for('react.fundamental') : 60117,
      S = o ? Symbol.for('react.responder') : 60118,
      C = o ? Symbol.for('react.scope') : 60119;
    function _(e) {
      if ('object' == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case r:
            switch ((e = e.type)) {
              case p:
              case d:
              case a:
              case u:
              case s:
              case y:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case l:
                  case h:
                  case g:
                  case m:
                  case c:
                    return e;
                  default:
                    return t;
                }
            }
          case i:
            return t;
        }
      }
    }
    function w(e) {
      return _(e) === d;
    }
    (t.AsyncMode = p),
      (t.ConcurrentMode = d),
      (t.ContextConsumer = l),
      (t.ContextProvider = c),
      (t.Element = r),
      (t.ForwardRef = h),
      (t.Fragment = a),
      (t.Lazy = g),
      (t.Memo = m),
      (t.Portal = i),
      (t.Profiler = u),
      (t.StrictMode = s),
      (t.Suspense = y),
      (t.isAsyncMode = function(e) {
        return w(e) || _(e) === p;
      }),
      (t.isConcurrentMode = w),
      (t.isContextConsumer = function(e) {
        return _(e) === l;
      }),
      (t.isContextProvider = function(e) {
        return _(e) === c;
      }),
      (t.isElement = function(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r;
      }),
      (t.isForwardRef = function(e) {
        return _(e) === h;
      }),
      (t.isFragment = function(e) {
        return _(e) === a;
      }),
      (t.isLazy = function(e) {
        return _(e) === g;
      }),
      (t.isMemo = function(e) {
        return _(e) === m;
      }),
      (t.isPortal = function(e) {
        return _(e) === i;
      }),
      (t.isProfiler = function(e) {
        return _(e) === u;
      }),
      (t.isStrictMode = function(e) {
        return _(e) === s;
      }),
      (t.isSuspense = function(e) {
        return _(e) === y;
      }),
      (t.isValidElementType = function(e) {
        return (
          'string' == typeof e ||
          'function' == typeof e ||
          e === a ||
          e === d ||
          e === u ||
          e === s ||
          e === y ||
          e === f ||
          ('object' == typeof e &&
            null !== e &&
            (e.$$typeof === g ||
              e.$$typeof === m ||
              e.$$typeof === c ||
              e.$$typeof === l ||
              e.$$typeof === h ||
              e.$$typeof === v ||
              e.$$typeof === S ||
              e.$$typeof === C ||
              e.$$typeof === b))
        );
      }),
      (t.typeOf = _);
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t) {
    e.exports = function(e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function() {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function() {
              return t.i;
            },
          }),
          Object.defineProperty(t, 'exports', { enumerable: !0 }),
          (t.webpackPolyfill = 1);
      }
      return t;
    };
  },
  function(e, t, n) {
    var o = n(22),
      r = n(23);
    'string' == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, '']]);
    var i = { insert: 'head', singleton: !1 },
      a = (o(r, i), r.locals ? r.locals : {});
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var o,
      r = function() {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      i = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function s(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var n = {}, o = [], r = 0; r < e.length; r++) {
        var i = e[r],
          u = t.base ? i[0] + t.base : i[0],
          c = n[u] || 0,
          l = ''.concat(u, ' ').concat(c);
        n[u] = c + 1;
        var p = s(l),
          d = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== p
          ? (a[p].references++, a[p].updater(d))
          : a.push({ identifier: l, updater: m(d, t), references: 1 }),
          o.push(l);
      }
      return o;
    }
    function c(e) {
      var t = document.createElement('style'),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var r = n.nc;
        r && (o.nonce = r);
      }
      if (
        (Object.keys(o).forEach(function(e) {
          t.setAttribute(e, o[e]);
        }),
        'function' == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || 'head');
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var l,
      p =
        ((l = []),
        function(e, t) {
          return (l[e] = t), l.filter(Boolean).join('\n');
        });
    function d(e, t, n, o) {
      var r = n
        ? ''
        : o.media
        ? '@media '.concat(o.media, ' {').concat(o.css, '}')
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = p(t, r);
      else {
        var i = document.createTextNode(r),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function h(e, t, n) {
      var o = n.css,
        r = n.media,
        i = n.sourceMap;
      if (
        (r ? e.setAttribute('media', r) : e.removeAttribute('media'),
        i &&
          btoa &&
          (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var y = null,
      f = 0;
    function m(e, t) {
      var n, o, r;
      if (t.singleton) {
        var i = f++;
        (n = y || (y = c(t))),
          (o = d.bind(null, n, i, !1)),
          (r = d.bind(null, n, i, !0));
      } else
        (n = c(t)),
          (o = h.bind(null, n, t)),
          (r = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else r();
        }
      );
    }
    e.exports = function(e, t) {
      (t = t || {}).singleton ||
        'boolean' == typeof t.singleton ||
        (t.singleton = r());
      var n = u((e = e || []), t);
      return function(e) {
        if (
          ((e = e || []),
          '[object Array]' === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var r = s(n[o]);
            a[r].references--;
          }
          for (var i = u(e, t), c = 0; c < n.length; c++) {
            var l = s(n[c]);
            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
          }
          n = i;
        }
      };
    };
  },
  function(e, t, n) {
    (t = n(24)(!1)).push([
      e.i,
      '.border-curved {\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  border-radius: 0.5em;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.w-2-em {\n  width: 2em;\n}\n.flex-item-95 {\n  flex: 0 0 88%;\n}\n.flex-item-60 {\n  flex: 0 0 60%;\n}\n.flex-item-20 {\n  flex: 0 0 20%;\n}\n.flex-item-5 {\n  flex: 0 0 5%;\n}\n.full-size {\n  width: 100%;\n  height: 100%;\n}\n.green {\n  background-color: #22cc77;\n}\n.highlight {\n  border-radius: 7px;\n  border-width: 3px;\n  border-color: #22cc77;\n  border-style: solid;\n}\n.padding {\n  padding: 0.6em 1.4em 0.5em 0.8em;\n}\n.row-even {\n  background-color: #cceeff;\n}\n.row-odd {\n  background-color: #ffeeff;\n}\n.row-highlight {\n  background-color: #ffffbb;\n}\n.ui-text {\n  margin: 2px;\n  font-size: 1.3em;\n}\n.small-text {\n  font-size: 0.85em;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.display-block {\n  display: block;\n}\n.text-align-left {\n  text-align: left;\n}\n',
      '',
    ]),
      (e.exports = t);
  },
  function(e, t, n) {
    'use strict';
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || '',
                o = e[3];
              if (!o) return n;
              if (t && 'function' == typeof btoa) {
                var r =
                    ((a = o),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                      s
                    )),
                    '/*# '.concat(u, ' */')),
                  i = o.sources.map(function(e) {
                    return '/*# sourceURL='
                      .concat(o.sourceRoot || '')
                      .concat(e, ' */');
                  });
                return [n]
                  .concat(i)
                  .concat([r])
                  .join('\n');
              }
              var a, s, u;
              return [n].join('\n');
            })(t, e);
            return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
          }).join('');
        }),
        (t.i = function(e, n, o) {
          'string' == typeof e && (e = [[null, e, '']]);
          var r = {};
          if (o)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (r[a] = !0);
            }
          for (var s = 0; s < e.length; s++) {
            var u = [].concat(e[s]);
            (o && r[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = ''.concat(n, ' and ').concat(u[2]))
                  : (u[2] = n)),
              t.push(u));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    var o = { './en.json': 2 };
    function r(e) {
      return Promise.resolve().then(function() {
        if (!n.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        var r = o[e];
        return n.t(r, 3);
      });
    }
    (r.keys = function() {
      return Object.keys(o);
    }),
      (r.id = 25),
      (e.exports = r);
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    var o,
      r,
      i,
      a,
      s,
      u,
      c,
      l = {},
      p = [],
      d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function h(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function y(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function f(e, t, n) {
      var o,
        r = arguments,
        i = {};
      for (o in t) 'key' !== o && 'ref' !== o && (i[o] = t[o]);
      if (arguments.length > 3)
        for (n = [n], o = 3; o < arguments.length; o++) n.push(r[o]);
      if (
        (null != n && (i.children = n),
        'function' == typeof e && null != e.defaultProps)
      )
        for (o in e.defaultProps) void 0 === i[o] && (i[o] = e.defaultProps[o]);
      return m(e, i, t && t.key, t && t.ref);
    }
    function m(e, t, n, r) {
      var i = {
        type: e,
        props: t,
        key: n,
        ref: r,
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
    function g(e) {
      return e.children;
    }
    function b(e, t) {
      (this.props = e), (this.context = t);
    }
    function v(e, t) {
      if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return 'function' == typeof e.type ? v(e) : null;
    }
    function S(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        return S(e);
      }
    }
    function C(e) {
      ((!e.__d && (e.__d = !0) && r.push(e) && !i++) ||
        s !== o.debounceRendering) &&
        ((s = o.debounceRendering) || a)(_);
    }
    function _() {
      for (var e; (i = r.length); )
        (e = r.sort(function(e, t) {
          return e.__v.__b - t.__v.__b;
        })),
          (r = []),
          e.some(function(e) {
            var t, n, o, r, i, a;
            e.__d &&
              ((i = (r = (t = e).__v).__e),
              (a = t.__P) &&
                ((n = []),
                (o = N(
                  a,
                  r,
                  h({}, r),
                  t.__n,
                  void 0 !== a.ownerSVGElement,
                  null,
                  n,
                  null == i ? v(r) : i
                )),
                O(n, r),
                o != i && S(r)));
          });
    }
    function w(e, t, n, o, r, i, a, s, u) {
      var c,
        d,
        h,
        f,
        m,
        g,
        b,
        S = (n && n.__k) || p,
        C = S.length;
      if (
        (s == l && (s = null != i ? i[0] : C ? v(n, 0) : null),
        (c = 0),
        (t.__k = P(t.__k, function(n) {
          if (null != n) {
            if (
              ((n.__ = t),
              (n.__b = t.__b + 1),
              null === (h = S[c]) || (h && n.key == h.key && n.type === h.type))
            )
              S[c] = void 0;
            else
              for (d = 0; d < C; d++) {
                if ((h = S[d]) && n.key == h.key && n.type === h.type) {
                  S[d] = void 0;
                  break;
                }
                h = null;
              }
            if (
              ((f = N(e, n, (h = h || l), o, r, i, a, s, u)),
              (d = n.ref) &&
                h.ref != d &&
                (b || (b = []),
                h.ref && b.push(h.ref, null, n),
                b.push(d, n.__c || f, n)),
              null != f)
            ) {
              var p;
              if ((null == g && (g = f), void 0 !== n.__d))
                (p = n.__d), (n.__d = void 0);
              else if (i == h || f != s || null == f.parentNode) {
                e: if (null == s || s.parentNode !== e)
                  e.appendChild(f), (p = null);
                else {
                  for (m = s, d = 0; (m = m.nextSibling) && d < C; d += 2)
                    if (m == f) break e;
                  e.insertBefore(f, s), (p = s);
                }
                'option' == t.type && (e.value = '');
              }
              (s = void 0 !== p ? p : f.nextSibling),
                'function' == typeof t.type && (t.__d = s);
            } else s && h.__e == s && s.parentNode != e && (s = v(h));
          }
          return c++, n;
        })),
        (t.__e = g),
        null != i && 'function' != typeof t.type)
      )
        for (c = i.length; c--; ) null != i[c] && y(i[c]);
      for (c = C; c--; ) null != S[c] && M(S[c], S[c]);
      if (b) for (c = 0; c < b.length; c++) D(b[c], b[++c], b[++c]);
    }
    function P(e, t, n) {
      if ((null == n && (n = []), null == e || 'boolean' == typeof e))
        t && n.push(t(null));
      else if (Array.isArray(e))
        for (var o = 0; o < e.length; o++) P(e[o], t, n);
      else
        n.push(
          t
            ? t(
                'string' == typeof e || 'number' == typeof e
                  ? m(null, e, null, null)
                  : null != e.__e || null != e.__c
                  ? m(e.type, e.props, e.key, null)
                  : e
              )
            : e
        );
      return n;
    }
    function A(e, t, n) {
      '-' === t[0]
        ? e.setProperty(t, n)
        : (e[t] =
            'number' == typeof n && !1 === d.test(t)
              ? n + 'px'
              : null == n
              ? ''
              : n);
    }
    function k(e, t, n, o, r) {
      var i, a, s, u, c;
      if (
        (r
          ? 'className' === t && (t = 'class')
          : 'class' === t && (t = 'className'),
        'key' === t || 'children' === t)
      );
      else if ('style' === t)
        if (((i = e.style), 'string' == typeof n)) i.cssText = n;
        else {
          if (('string' == typeof o && ((i.cssText = ''), (o = null)), o))
            for (a in o) (n && a in n) || A(i, a, '');
          if (n) for (s in n) (o && n[s] === o[s]) || A(i, s, n[s]);
        }
      else
        'o' === t[0] && 'n' === t[1]
          ? ((u = t !== (t = t.replace(/Capture$/, ''))),
            (c = t.toLowerCase()),
            (t = (c in e ? c : t).slice(2)),
            n
              ? (o || e.addEventListener(t, T, u), ((e.l || (e.l = {}))[t] = n))
              : e.removeEventListener(t, T, u))
          : 'list' !== t &&
            'tagName' !== t &&
            'form' !== t &&
            'type' !== t &&
            'size' !== t &&
            !r &&
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
    function T(e) {
      this.l[e.type](o.event ? o.event(e) : e);
    }
    function N(e, t, n, r, i, a, s, u, c) {
      var d,
        y,
        f,
        m,
        v,
        S,
        C,
        _,
        P,
        A,
        T = t.type;
      if (void 0 !== t.constructor) return null;
      (d = o.__b) && d(t);
      try {
        e: if ('function' == typeof T) {
          if (
            ((_ = t.props),
            (P = (d = T.contextType) && r[d.__c]),
            (A = d ? (P ? P.props.value : d.__) : r),
            n.__c
              ? (C = (y = t.__c = n.__c).__ = y.__E)
              : ('prototype' in T && T.prototype.render
                  ? (t.__c = y = new T(_, A))
                  : ((t.__c = y = new b(_, A)),
                    (y.constructor = T),
                    (y.render = I)),
                P && P.sub(y),
                (y.props = _),
                y.state || (y.state = {}),
                (y.context = A),
                (y.__n = r),
                (f = y.__d = !0),
                (y.__h = [])),
            null == y.__s && (y.__s = y.state),
            null != T.getDerivedStateFromProps &&
              (y.__s == y.state && (y.__s = h({}, y.__s)),
              h(y.__s, T.getDerivedStateFromProps(_, y.__s))),
            (m = y.props),
            (v = y.state),
            f)
          )
            null == T.getDerivedStateFromProps &&
              null != y.componentWillMount &&
              y.componentWillMount(),
              null != y.componentDidMount && y.__h.push(y.componentDidMount);
          else {
            if (
              (null == T.getDerivedStateFromProps &&
                _ !== m &&
                null != y.componentWillReceiveProps &&
                y.componentWillReceiveProps(_, A),
              !y.__e &&
                null != y.shouldComponentUpdate &&
                !1 === y.shouldComponentUpdate(_, y.__s, A))
            ) {
              for (
                y.props = _,
                  y.state = y.__s,
                  y.__d = !1,
                  y.__v = t,
                  t.__e = n.__e,
                  t.__k = n.__k,
                  y.__h.length && s.push(y),
                  d = 0;
                d < t.__k.length;
                d++
              )
                t.__k[d] && (t.__k[d].__ = t);
              break e;
            }
            null != y.componentWillUpdate && y.componentWillUpdate(_, y.__s, A),
              null != y.componentDidUpdate &&
                y.__h.push(function() {
                  y.componentDidUpdate(m, v, S);
                });
          }
          (y.context = A),
            (y.props = _),
            (y.state = y.__s),
            (d = o.__r) && d(t),
            (y.__d = !1),
            (y.__v = t),
            (y.__P = e),
            (d = y.render(y.props, y.state, y.context)),
            (t.__k =
              null != d && d.type == g && null == d.key
                ? d.props.children
                : Array.isArray(d)
                ? d
                : [d]),
            null != y.getChildContext && (r = h(h({}, r), y.getChildContext())),
            f ||
              null == y.getSnapshotBeforeUpdate ||
              (S = y.getSnapshotBeforeUpdate(m, v)),
            w(e, t, n, r, i, a, s, u, c),
            (y.base = t.__e),
            y.__h.length && s.push(y),
            C && (y.__E = y.__ = null),
            (y.__e = !1);
        } else
          t.__e = (function(e, t, n, o, r, i, a, s) {
            var u,
              c,
              d,
              h,
              y,
              f = n.props,
              m = t.props;
            if (((r = 'svg' === t.type || r), null != i))
              for (u = 0; u < i.length; u++)
                if (
                  null != (c = i[u]) &&
                  ((null === t.type
                    ? 3 === c.nodeType
                    : c.localName === t.type) ||
                    e == c)
                ) {
                  (e = c), (i[u] = null);
                  break;
                }
            if (null == e) {
              if (null === t.type) return document.createTextNode(m);
              (e = r
                ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
                : document.createElement(t.type, m.is && { is: m.is })),
                (i = null);
            }
            if (null === t.type) f !== m && e.data != m && (e.data = m);
            else if (t !== n) {
              if (
                (null != i && (i = p.slice.call(e.childNodes)),
                (d = (f = n.props || l).dangerouslySetInnerHTML),
                (h = m.dangerouslySetInnerHTML),
                !s)
              ) {
                if (f === l)
                  for (f = {}, y = 0; y < e.attributes.length; y++)
                    f[e.attributes[y].name] = e.attributes[y].value;
                (h || d) &&
                  ((h && d && h.__html == d.__html) ||
                    (e.innerHTML = (h && h.__html) || ''));
              }
              (function(e, t, n, o, r) {
                var i;
                for (i in n) i in t || k(e, i, null, n[i], o);
                for (i in t)
                  (r && 'function' != typeof t[i]) ||
                    'value' === i ||
                    'checked' === i ||
                    n[i] === t[i] ||
                    k(e, i, t[i], n[i], o);
              })(e, m, f, r, s),
                (t.__k = t.props.children),
                h || w(e, t, n, o, 'foreignObject' !== t.type && r, i, a, l, s),
                s ||
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
          })(n.__e, t, n, r, i, a, s, c);
        (d = o.diffed) && d(t);
      } catch (e) {
        o.__e(e, t, n);
      }
      return t.__e;
    }
    function O(e, t) {
      o.__c && o.__c(t, e),
        e.some(function(t) {
          try {
            (e = t.__h),
              (t.__h = []),
              e.some(function(e) {
                e.call(t);
              });
          } catch (e) {
            o.__e(e, t.__v);
          }
        });
    }
    function D(e, t, n) {
      try {
        'function' == typeof e ? e(t) : (e.current = t);
      } catch (e) {
        o.__e(e, n);
      }
    }
    function M(e, t, n) {
      var r, i, a;
      if (
        (o.unmount && o.unmount(e),
        (r = e.ref) && ((r.current && r.current !== e.__e) || D(r, null, t)),
        n || 'function' == typeof e.type || (n = null != (i = e.__e)),
        (e.__e = e.__d = void 0),
        null != (r = e.__c))
      ) {
        if (r.componentWillUnmount)
          try {
            r.componentWillUnmount();
          } catch (e) {
            o.__e(e, t);
          }
        r.base = r.__P = null;
      }
      if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && M(r[a], t, n);
      null != i && y(i);
    }
    function I(e, t, n) {
      return this.constructor(e, n);
    }
    function x(e, t, n) {
      var r, i, a;
      o.__ && o.__(e, t),
        (i = (r = n === u) ? null : (n && n.__k) || t.__k),
        (e = f(g, null, [e])),
        (a = []),
        N(
          t,
          ((r ? t : n || t).__k = e),
          i || l,
          l,
          void 0 !== t.ownerSVGElement,
          n && !r ? [n] : i ? null : p.slice.call(t.childNodes),
          a,
          n || l,
          r
        ),
        O(a, e);
    }
    function R(e, t) {
      x(e, t, u);
    }
    function E(e, t) {
      return (
        (t = h(h({}, e.props), t)),
        arguments.length > 2 && (t.children = p.slice.call(arguments, 2)),
        m(e.type, t, t.key || e.key, t.ref || e.ref)
      );
    }
    (o = {
      __e: function(e, t) {
        for (var n, o; (t = t.__); )
          if ((n = t.__c) && !n.__)
            try {
              if (
                (n.constructor &&
                  null != n.constructor.getDerivedStateFromError &&
                  ((o = !0),
                  n.setState(n.constructor.getDerivedStateFromError(e))),
                null != n.componentDidCatch &&
                  ((o = !0), n.componentDidCatch(e)),
                o)
              )
                return C((n.__E = n));
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
      (b.prototype.setState = function(e, t) {
        var n;
        (n =
          this.__s !== this.state ? this.__s : (this.__s = h({}, this.state))),
          'function' == typeof e && (e = e(n, this.props)),
          e && h(n, e),
          null != e && this.__v && (t && this.__h.push(t), C(this));
      }),
      (b.prototype.forceUpdate = function(e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), C(this));
      }),
      (b.prototype.render = g),
      (r = []),
      (i = 0),
      (a =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (u = l),
      (c = 0);
    var B = {};
    function F(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function j(e, t, n) {
      var o,
        r = /(?:\?([^#]*))?(#.*)?$/,
        i = e.match(r),
        a = {};
      if (i && i[1])
        for (var s = i[1].split('&'), u = 0; u < s.length; u++) {
          var c = s[u].split('=');
          a[decodeURIComponent(c[0])] = decodeURIComponent(
            c.slice(1).join('=')
          );
        }
      (e = H(e.replace(r, ''))), (t = H(t || ''));
      for (var l = Math.max(e.length, t.length), p = 0; p < l; p++)
        if (t[p] && ':' === t[p].charAt(0)) {
          var d = t[p].replace(/(^:|[+*?]+$)/g, ''),
            h = (t[p].match(/[+*?]+$/) || B)[0] || '',
            y = ~h.indexOf('+'),
            f = ~h.indexOf('*'),
            m = e[p] || '';
          if (!m && !f && (h.indexOf('?') < 0 || y)) {
            o = !1;
            break;
          }
          if (((a[d] = decodeURIComponent(m)), y || f)) {
            a[d] = e
              .slice(p)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (t[p] !== e[p]) {
          o = !1;
          break;
        }
      return (!0 === n.default || !1 !== o) && a;
    }
    function L(e, t) {
      return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
    }
    function U(e, t) {
      return (
        (e.index = t),
        (e.rank = (function(e) {
          return e.props.default
            ? 0
            : ((t = e.props.path),
              H(t)
                .map(V)
                .join(''));
          var t;
        })(e)),
        e.props
      );
    }
    function H(e) {
      return e.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function V(e) {
      return ':' == e.charAt(0)
        ? 1 + '*+?'.indexOf(e.charAt(e.length - 1)) || 4
        : 5;
    }
    var G = null,
      K = [],
      z = [],
      W = {};
    function $() {
      var e;
      return (
        '' +
        ((e =
          G && G.location
            ? G.location
            : G && G.getCurrentLocation
            ? G.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : W).pathname || '') +
        (e.search || '')
      );
    }
    function J(e, t) {
      return (
        void 0 === t && (t = !1),
        'string' != typeof e && e.url && ((t = e.replace), (e = e.url)),
        (function(e) {
          for (var t = K.length; t--; ) if (K[t].canRoute(e)) return !0;
          return !1;
        })(e) &&
          (function(e, t) {
            void 0 === t && (t = 'push'),
              G && G[t]
                ? G[t](e)
                : 'undefined' != typeof history &&
                  history[t + 'State'] &&
                  history[t + 'State'](null, null, e);
          })(e, t ? 'replace' : 'push'),
        q(e)
      );
    }
    function q(e) {
      for (var t = !1, n = 0; n < K.length; n++)
        !0 === K[n].routeTo(e) && (t = !0);
      for (var o = z.length; o--; ) z[o](e);
      return t;
    }
    function Y(e) {
      if (e && e.getAttribute) {
        var t = e.getAttribute('href'),
          n = e.getAttribute('target');
        if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) return J(t);
      }
    }
    function Z(e) {
      if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || 0 !== e.button))
        return Y(e.currentTarget || e.target || this), Q(e);
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
            if (Y(t)) return Q(e);
          }
        } while ((t = t.parentNode));
      }
    }
    var ee = !1;
    var te = (function(e) {
      function t(t) {
        e.call(this, t),
          t.history && (G = t.history),
          (this.state = { url: t.url || $() }),
          ee ||
            ('function' == typeof addEventListener &&
              (G ||
                addEventListener('popstate', function() {
                  q($());
                }),
              addEventListener('click', X)),
            (ee = !0));
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
          var t = P(this.props.children);
          return this.getMatchingChildren(t, e, !1).length > 0;
        }),
        (t.prototype.routeTo = function(e) {
          this.setState({ url: e });
          var t = this.canRoute(e);
          return this.updating || this.forceUpdate(), t;
        }),
        (t.prototype.componentWillMount = function() {
          K.push(this), (this.updating = !0);
        }),
        (t.prototype.componentDidMount = function() {
          var e = this;
          G &&
            (this.unlisten = G.listen(function(t) {
              e.routeTo('' + (t.pathname || '') + (t.search || ''));
            })),
            (this.updating = !1);
        }),
        (t.prototype.componentWillUnmount = function() {
          'function' == typeof this.unlisten && this.unlisten(),
            K.splice(K.indexOf(this), 1);
        }),
        (t.prototype.componentWillUpdate = function() {
          this.updating = !0;
        }),
        (t.prototype.componentDidUpdate = function() {
          this.updating = !1;
        }),
        (t.prototype.getMatchingChildren = function(e, t, n) {
          return e
            .filter(U)
            .sort(L)
            .map(function(e) {
              var o = j(t, e.props.path, e.props);
              if (o) {
                if (!1 !== n) {
                  var r = { url: t, matches: o };
                  return F(r, o), delete r.ref, delete r.key, E(e, r);
                }
                return e;
              }
            })
            .filter(Boolean);
        }),
        (t.prototype.render = function(e, t) {
          var n = e.children,
            o = e.onChange,
            r = t.url,
            i = this.getMatchingChildren(P(n), r, !0),
            a = i[0] || null,
            s = this.previousUrl;
          return (
            r !== s &&
              ((this.previousUrl = r),
              'function' == typeof o &&
                o({
                  router: this,
                  url: r,
                  previous: s,
                  active: i,
                  current: a,
                })),
            a
          );
        }),
        t
      );
    })(b);
    (te.subscribers = z),
      (te.getCurrentUrl = $),
      (te.route = J),
      (te.Router = te),
      (te.Route = function(e) {
        return f(e.component, e);
      }),
      (te.Link = function(e) {
        return f('a', F({ onClick: Z }, e));
      }),
      (te.exec = j);
    var ne,
      oe,
      re,
      ie = te,
      ae = [],
      se = o.__r,
      ue = o.diffed,
      ce = o.__c,
      le = o.unmount;
    function pe(e) {
      o.__h && o.__h(oe);
      var t = oe.__H || (oe.__H = { __: [], __h: [] });
      return e >= t.__.length && t.__.push({}), t.__[e];
    }
    function de(e) {
      return he(we, e);
    }
    function he(e, t, n) {
      var o = pe(ne++);
      return (
        o.__c ||
          ((o.__c = oe),
          (o.__ = [
            n ? n(t) : we(void 0, t),
            function(t) {
              var n = e(o.__[0], t);
              o.__[0] !== n && ((o.__[0] = n), o.__c.setState({}));
            },
          ])),
        o.__
      );
    }
    function ye(e, t) {
      var n = pe(ne++);
      _e(n.__H, t) && ((n.__ = e), (n.__H = t), oe.__H.__h.push(n));
    }
    function fe(e, t) {
      var n = pe(ne++);
      _e(n.__H, t) && ((n.__ = e), (n.__H = t), oe.__h.push(n));
    }
    function me(e) {
      return ge(function() {
        return { current: e };
      }, []);
    }
    function ge(e, t) {
      var n = pe(ne++);
      return _e(n.__H, t) ? ((n.__H = t), (n.__h = e), (n.__ = e())) : n.__;
    }
    function be(e) {
      var t = oe.context[e.__c];
      if (!t) return e.__;
      var n = pe(ne++);
      return null == n.__ && ((n.__ = !0), t.sub(oe)), t.props.value;
    }
    function ve() {
      ae.some(function(e) {
        if (e.__P)
          try {
            e.__H.__h.forEach(Se), e.__H.__h.forEach(Ce), (e.__H.__h = []);
          } catch (t) {
            return o.__e(t, e.__v), !0;
          }
      }),
        (ae = []);
    }
    function Se(e) {
      e.t && e.t();
    }
    function Ce(e) {
      var t = e.__();
      'function' == typeof t && (e.t = t);
    }
    function _e(e, t) {
      return (
        !e ||
        t.some(function(t, n) {
          return t !== e[n];
        })
      );
    }
    function we(e, t) {
      return 'function' == typeof t ? t(e) : t;
    }
    function Pe(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function Ae(e, t) {
      for (var n in e) if ('__source' !== n && !(n in t)) return !0;
      for (var o in t) if ('__source' !== o && e[o] !== t[o]) return !0;
      return !1;
    }
    (o.__r = function(e) {
      se && se(e),
        (ne = 0),
        (oe = e.__c).__H &&
          (oe.__H.__h.forEach(Se), oe.__H.__h.forEach(Ce), (oe.__H.__h = []));
    }),
      (o.diffed = function(e) {
        ue && ue(e);
        var t = e.__c;
        if (t) {
          var n = t.__H;
          n &&
            n.__h.length &&
            ((1 !== ae.push(t) && re === o.requestAnimationFrame) ||
              (
                (re = o.requestAnimationFrame) ||
                function(e) {
                  var t,
                    n = function() {
                      clearTimeout(o), cancelAnimationFrame(t), setTimeout(e);
                    },
                    o = setTimeout(n, 100);
                  'undefined' != typeof window &&
                    (t = requestAnimationFrame(n));
                }
              )(ve));
        }
      }),
      (o.__c = function(e, t) {
        t.some(function(e) {
          try {
            e.__h.forEach(Se),
              (e.__h = e.__h.filter(function(e) {
                return !e.__ || Ce(e);
              }));
          } catch (n) {
            t.some(function(e) {
              e.__h && (e.__h = []);
            }),
              (t = []),
              o.__e(n, e.__v);
          }
        }),
          ce && ce(e, t);
      }),
      (o.unmount = function(e) {
        le && le(e);
        var t = e.__c;
        if (t) {
          var n = t.__H;
          if (n)
            try {
              n.__.forEach(function(e) {
                return e.t && e.t();
              });
            } catch (e) {
              o.__e(e, t.__v);
            }
        }
      });
    var ke = (function(e) {
      var t, n;
      function o(t) {
        var n;
        return ((n = e.call(this, t) || this).isPureReactComponent = !0), n;
      }
      return (
        (n = e),
        ((t = o).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = n),
        (o.prototype.shouldComponentUpdate = function(e, t) {
          return Ae(this.props, e) || Ae(this.state, t);
        }),
        o
      );
    })(b);
    var Te = o.__b;
    o.__b = function(e) {
      e.type && e.type.t && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
        Te && Te(e);
    };
    var Ne = function(e, t) {
        return e
          ? P(e).reduce(function(e, n, o) {
              return e.concat(t(n, o));
            }, [])
          : null;
      },
      Oe = {
        map: Ne,
        forEach: Ne,
        count: function(e) {
          return e ? P(e).length : 0;
        },
        only: function(e) {
          if (1 !== (e = P(e)).length)
            throw new Error('Children.only() expects only one child.');
          return e[0];
        },
        toArray: P,
      },
      De = o.__e;
    function Me(e) {
      return (
        e && (((e = Pe({}, e)).__c = null), (e.__k = e.__k && e.__k.map(Me))), e
      );
    }
    function Ie(e) {
      (this.__u = 0), (this.o = null), (this.__b = null);
    }
    function xe(e) {
      var t = e.__.__c;
      return t && t.u && t.u(e);
    }
    function Re() {
      (this.i = null), (this.l = null);
    }
    (o.__e = function(e, t, n) {
      if (e.then)
        for (var o, r = t; (r = r.__); )
          if ((o = r.__c) && o.__c) return o.__c(e, t.__c);
      De(e, t, n);
    }),
      ((Ie.prototype = new b()).__c = function(e, t) {
        var n = this;
        null == n.o && (n.o = []), n.o.push(t);
        var o = xe(n.__v),
          r = !1,
          i = function() {
            r || ((r = !0), o ? o(a) : a());
          };
        (t.__c = t.componentWillUnmount),
          (t.componentWillUnmount = function() {
            i(), t.__c && t.__c();
          });
        var a = function() {
          var e;
          if (!--n.__u)
            for (
              n.__v.__k[0] = n.state.u, n.setState({ u: (n.__b = null) });
              (e = n.o.pop());

            )
              e.forceUpdate();
        };
        n.__u++ || n.setState({ u: (n.__b = n.__v.__k[0]) }), e.then(i, i);
      }),
      (Ie.prototype.render = function(e, t) {
        return (
          this.__b && ((this.__v.__k[0] = Me(this.__b)), (this.__b = null)),
          [f(b, null, t.u ? null : e.children), t.u && e.fallback]
        );
      });
    var Ee = function(e, t, n) {
      if (
        (++n[1] === n[0] && e.l.delete(t),
        e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.l.size))
      )
        for (n = e.i; n; ) {
          for (; n.length > 3; ) n.pop()();
          if (n[1] < n[0]) break;
          e.i = n = n[2];
        }
    };
    ((Re.prototype = new b()).u = function(e) {
      var t = this,
        n = xe(t.__v),
        o = t.l.get(e);
      return (
        o[0]++,
        function(r) {
          var i = function() {
            t.props.revealOrder ? (o.push(r), Ee(t, e, o)) : r();
          };
          n ? n(i) : i();
        }
      );
    }),
      (Re.prototype.render = function(e) {
        (this.i = null), (this.l = new Map());
        var t = P(e.children);
        e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--; )
          this.l.set(t[n], (this.i = [1, 0, this.i]));
        return e.children;
      }),
      (Re.prototype.componentDidUpdate = Re.prototype.componentDidMount = function() {
        var e = this;
        e.l.forEach(function(t, n) {
          Ee(e, n, t);
        });
      });
    var Be = (function() {
      function e() {}
      var t = e.prototype;
      return (
        (t.getChildContext = function() {
          return this.props.context;
        }),
        (t.render = function(e) {
          return e.children;
        }),
        e
      );
    })();
    function Fe(e) {
      var t = this,
        n = e.container,
        o = f(Be, { context: t.context }, e.vnode);
      return (
        t.s &&
          t.s !== n &&
          (t.v.parentNode && t.s.removeChild(t.v), M(t.h), (t.p = !1)),
        e.vnode
          ? t.p
            ? ((n.__k = t.__k), x(o, n), (t.__k = n.__k))
            : ((t.v = document.createTextNode('')),
              R('', n),
              n.appendChild(t.v),
              (t.p = !0),
              (t.s = n),
              x(o, n, t.v),
              (t.__k = t.v.__k))
          : t.p && (t.v.parentNode && t.s.removeChild(t.v), M(t.h)),
        (t.h = o),
        (t.componentWillUnmount = function() {
          t.v.parentNode && t.s.removeChild(t.v), M(t.h);
        }),
        null
      );
    }
    var je = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    b.prototype.isReactComponent = {};
    var Le =
      ('undefined' != typeof Symbol &&
        Symbol.for &&
        Symbol.for('react.element')) ||
      60103;
    function Ue(e, t, n) {
      if (null == t.__k) for (; t.firstChild; ) t.removeChild(t.firstChild);
      return x(e, t), 'function' == typeof n && n(), e ? e.__c : null;
    }
    var He = o.event;
    function Ve(e, t) {
      e['UNSAFE_' + t] &&
        !e[t] &&
        Object.defineProperty(e, t, {
          configurable: !1,
          get: function() {
            return this['UNSAFE_' + t];
          },
          set: function(e) {
            this['UNSAFE_' + t] = e;
          },
        });
    }
    o.event = function(e) {
      He && (e = He(e)), (e.persist = function() {});
      var t = !1,
        n = !1,
        o = e.stopPropagation;
      e.stopPropagation = function() {
        o.call(e), (t = !0);
      };
      var r = e.preventDefault;
      return (
        (e.preventDefault = function() {
          r.call(e), (n = !0);
        }),
        (e.isPropagationStopped = function() {
          return t;
        }),
        (e.isDefaultPrevented = function() {
          return n;
        }),
        (e.nativeEvent = e)
      );
    };
    var Ge = {
        configurable: !0,
        get: function() {
          return this.class;
        },
      },
      Ke = o.vnode;
    o.vnode = function(e) {
      e.$$typeof = Le;
      var t = e.type,
        n = e.props;
      if (
        (n.class != n.className &&
          ((Ge.enumerable = 'className' in n),
          null != n.className && (n.class = n.className),
          Object.defineProperty(n, 'className', Ge)),
        'function' != typeof t)
      ) {
        var o, r, i;
        for (i in (n.defaultValue &&
          void 0 !== n.value &&
          (n.value || 0 === n.value || (n.value = n.defaultValue),
          delete n.defaultValue),
        Array.isArray(n.value) &&
          n.multiple &&
          'select' === t &&
          (P(n.children).forEach(function(e) {
            -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0);
          }),
          delete n.value),
        n))
          if ((o = je.test(i))) break;
        if (o)
          for (i in ((r = e.props = {}), n))
            r[je.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] =
              n[i];
      }
      !(function(t) {
        var n = e.type,
          o = e.props;
        if (o && 'string' == typeof n) {
          var r = {};
          for (var i in o)
            /^on(Ani|Tra|Tou)/.test(i) &&
              ((o[i.toLowerCase()] = o[i]), delete o[i]),
              (r[i.toLowerCase()] = i);
          if (
            (r.ondoubleclick &&
              ((o.ondblclick = o[r.ondoubleclick]), delete o[r.ondoubleclick]),
            r.onbeforeinput &&
              ((o.onbeforeinput = o[r.onbeforeinput]),
              delete o[r.onbeforeinput]),
            r.onchange &&
              ('textarea' === n ||
                ('input' === n.toLowerCase() && !/^fil|che|ra/i.test(o.type))))
          ) {
            var a = r.oninput || 'oninput';
            o[a] || ((o[a] = o[r.onchange]), delete o[r.onchange]);
          }
        }
      })(),
        'function' == typeof t &&
          !t.m &&
          t.prototype &&
          (Ve(t.prototype, 'componentWillMount'),
          Ve(t.prototype, 'componentWillReceiveProps'),
          Ve(t.prototype, 'componentWillUpdate'),
          (t.m = !0)),
        Ke && Ke(e);
    };
    function ze(e) {
      return !!e && e.$$typeof === Le;
    }
    var We = function(e, t) {
        return e(t);
      },
      $e = {
        useState: de,
        useReducer: he,
        useEffect: ye,
        useLayoutEffect: fe,
        useRef: me,
        useImperativeHandle: function(e, t, n) {
          fe(
            function() {
              'function' == typeof e ? e(t()) : e && (e.current = t());
            },
            null == n ? n : n.concat(e)
          );
        },
        useMemo: ge,
        useCallback: function(e, t) {
          return ge(function() {
            return e;
          }, t);
        },
        useContext: be,
        useDebugValue: function(e, t) {
          o.useDebugValue && o.useDebugValue(t ? t(e) : e);
        },
        version: '16.8.0',
        Children: Oe,
        render: Ue,
        hydrate: Ue,
        unmountComponentAtNode: function(e) {
          return !!e.__k && (x(null, e), !0);
        },
        createPortal: function(e, t) {
          return f(Fe, { vnode: e, container: t });
        },
        createElement: f,
        createContext: function(e) {
          var t = {},
            n = {
              __c: '__cC' + c++,
              __: e,
              Consumer: function(e, t) {
                return e.children(t);
              },
              Provider: function(e) {
                var o,
                  r = this;
                return (
                  this.getChildContext ||
                    ((o = []),
                    (this.getChildContext = function() {
                      return (t[n.__c] = r), t;
                    }),
                    (this.shouldComponentUpdate = function(t) {
                      e.value !== t.value &&
                        o.some(function(e) {
                          (e.context = t.value), C(e);
                        });
                    }),
                    (this.sub = function(e) {
                      o.push(e);
                      var t = e.componentWillUnmount;
                      e.componentWillUnmount = function() {
                        o.splice(o.indexOf(e), 1), t && t.call(e);
                      };
                    })),
                  e.children
                );
              },
            };
          return (n.Consumer.contextType = n), n;
        },
        createFactory: function(e) {
          return f.bind(null, e);
        },
        cloneElement: function(e) {
          return ze(e) ? E.apply(null, arguments) : e;
        },
        createRef: function() {
          return {};
        },
        Fragment: g,
        isValidElement: ze,
        findDOMNode: function(e) {
          return (e && (e.base || (1 === e.nodeType && e))) || null;
        },
        Component: b,
        PureComponent: ke,
        memo: function(e, t) {
          function n(e) {
            var n = this.props.ref,
              o = n == e.ref;
            return (
              !o && n && (n.call ? n(null) : (n.current = null)),
              t ? !t(this.props, e) || !o : Ae(this.props, e)
            );
          }
          function o(t) {
            return (this.shouldComponentUpdate = n), f(e, Pe({}, t));
          }
          return (
            (o.prototype.isReactComponent = !0),
            (o.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
            (o.t = !0),
            o
          );
        },
        forwardRef: function(e) {
          function t(t) {
            var n = Pe({}, t);
            return delete n.ref, e(n, t.ref);
          }
          return (
            (t.prototype.isReactComponent = t.t = !0),
            (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
            t
          );
        },
        unstable_batchedUpdates: We,
        Suspense: Ie,
        SuspenseList: Re,
        lazy: function(e) {
          var t, n, o;
          function r(r) {
            if (
              (t ||
                (t = e()).then(
                  function(e) {
                    n = e.default || e;
                  },
                  function(e) {
                    o = e;
                  }
                ),
              o)
            )
              throw o;
            if (!n) throw t;
            return f(n, r);
          }
          return (r.displayName = 'Lazy'), (r.t = !0), r;
        },
      },
      Je = (n(15), $e.createContext(null));
    var qe = function(e) {
        e();
      },
      Ye = { notify: function() {} };
    function Ze() {
      var e = qe,
        t = null,
        n = null;
      return {
        clear: function() {
          (t = null), (n = null);
        },
        notify: function() {
          e(function() {
            for (var e = t; e; ) e.callback(), (e = e.next);
          });
        },
        get: function() {
          for (var e = [], n = t; n; ) e.push(n), (n = n.next);
          return e;
        },
        subscribe: function(e) {
          var o = !0,
            r = (n = { callback: e, next: null, prev: n });
          return (
            r.prev ? (r.prev.next = r) : (t = r),
            function() {
              o &&
                null !== t &&
                ((o = !1),
                r.next ? (r.next.prev = r.prev) : (n = r.prev),
                r.prev ? (r.prev.next = r.next) : (t = r.next));
            }
          );
        },
      };
    }
    var Qe = (function() {
      function e(e, t) {
        (this.store = e),
          (this.parentSub = t),
          (this.unsubscribe = null),
          (this.listeners = Ye),
          (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
      }
      var t = e.prototype;
      return (
        (t.addNestedSub = function(e) {
          return this.trySubscribe(), this.listeners.subscribe(e);
        }),
        (t.notifyNestedSubs = function() {
          this.listeners.notify();
        }),
        (t.handleChangeWrapper = function() {
          this.onStateChange && this.onStateChange();
        }),
        (t.isSubscribed = function() {
          return Boolean(this.unsubscribe);
        }),
        (t.trySubscribe = function() {
          this.unsubscribe ||
            ((this.unsubscribe = this.parentSub
              ? this.parentSub.addNestedSub(this.handleChangeWrapper)
              : this.store.subscribe(this.handleChangeWrapper)),
            (this.listeners = Ze()));
        }),
        (t.tryUnsubscribe = function() {
          this.unsubscribe &&
            (this.unsubscribe(),
            (this.unsubscribe = null),
            this.listeners.clear(),
            (this.listeners = Ye));
        }),
        e
      );
    })();
    var Xe = function(e) {
      var t = e.store,
        n = e.context,
        o = e.children,
        r = ge(
          function() {
            var e = new Qe(t);
            return (
              (e.onStateChange = e.notifyNestedSubs),
              { store: t, subscription: e }
            );
          },
          [t]
        ),
        i = ge(
          function() {
            return t.getState();
          },
          [t]
        );
      ye(
        function() {
          var e = r.subscription;
          return (
            e.trySubscribe(),
            i !== t.getState() && e.notifyNestedSubs(),
            function() {
              e.tryUnsubscribe(), (e.onStateChange = null);
            }
          );
        },
        [r, i]
      );
      var a = n || Je;
      return $e.createElement(a.Provider, { value: r }, o);
    };
    function et() {
      return (et =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    function tt(e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        i = Object.keys(e);
      for (o = 0; o < i.length; o++)
        (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    }
    var nt = n(3),
      ot = n.n(nt),
      rt = n(1),
      it =
        'undefined' != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? fe
          : ye,
      at = [],
      st = [null, null];
    function ut(e, t) {
      var n = e[1];
      return [t.payload, n + 1];
    }
    function ct(e, t, n) {
      it(function() {
        return e.apply(void 0, t);
      }, n);
    }
    function lt(e, t, n, o, r, i, a) {
      (e.current = o),
        (t.current = r),
        (n.current = !1),
        i.current && ((i.current = null), a());
    }
    function pt(e, t, n, o, r, i, a, s, u, c) {
      if (e) {
        var l = !1,
          p = null,
          d = function() {
            if (!l) {
              var e,
                n,
                d = t.getState();
              try {
                e = o(d, r.current);
              } catch (e) {
                (n = e), (p = e);
              }
              n || (p = null),
                e === i.current
                  ? a.current || u()
                  : ((i.current = e),
                    (s.current = e),
                    (a.current = !0),
                    c({ type: 'STORE_UPDATED', payload: { error: n } }));
            }
          };
        (n.onStateChange = d), n.trySubscribe(), d();
        return function() {
          if (((l = !0), n.tryUnsubscribe(), (n.onStateChange = null), p))
            throw p;
        };
      }
    }
    var dt = function() {
      return [null, 0];
    };
    function ht(e, t) {
      void 0 === t && (t = {});
      var n = t,
        o = n.getDisplayName,
        r =
          void 0 === o
            ? function(e) {
                return 'ConnectAdvanced(' + e + ')';
              }
            : o,
        i = n.methodName,
        a = void 0 === i ? 'connectAdvanced' : i,
        s = n.renderCountProp,
        u = void 0 === s ? void 0 : s,
        c = n.shouldHandleStateChanges,
        l = void 0 === c || c,
        p = n.storeKey,
        d = void 0 === p ? 'store' : p,
        h = (n.withRef, n.forwardRef),
        y = void 0 !== h && h,
        f = n.context,
        m = void 0 === f ? Je : f,
        g = tt(n, [
          'getDisplayName',
          'methodName',
          'renderCountProp',
          'shouldHandleStateChanges',
          'storeKey',
          'withRef',
          'forwardRef',
          'context',
        ]),
        b = m;
      return function(t) {
        var n = t.displayName || t.name || 'Component',
          o = r(n),
          i = et({}, g, {
            getDisplayName: r,
            methodName: a,
            renderCountProp: u,
            shouldHandleStateChanges: l,
            storeKey: d,
            displayName: o,
            wrappedComponentName: n,
            WrappedComponent: t,
          }),
          s = g.pure;
        var c = s
          ? ge
          : function(e) {
              return e();
            };
        function p(n) {
          var o = ge(
              function() {
                var e = n.forwardedRef,
                  t = tt(n, ['forwardedRef']);
                return [n.context, e, t];
              },
              [n]
            ),
            r = o[0],
            a = o[1],
            s = o[2],
            u = ge(
              function() {
                return r &&
                  r.Consumer &&
                  Object(rt.isContextConsumer)(
                    $e.createElement(r.Consumer, null)
                  )
                  ? r
                  : b;
              },
              [r, b]
            ),
            p = be(u),
            d =
              Boolean(n.store) &&
              Boolean(n.store.getState) &&
              Boolean(n.store.dispatch);
          Boolean(p) && Boolean(p.store);
          var h = d ? n.store : p.store,
            y = ge(
              function() {
                return (function(t) {
                  return e(t.dispatch, i);
                })(h);
              },
              [h]
            ),
            f = ge(
              function() {
                if (!l) return st;
                var e = new Qe(h, d ? null : p.subscription),
                  t = e.notifyNestedSubs.bind(e);
                return [e, t];
              },
              [h, d, p]
            ),
            m = f[0],
            g = f[1],
            v = ge(
              function() {
                return d ? p : et({}, p, { subscription: m });
              },
              [d, p, m]
            ),
            S = he(ut, at, dt),
            C = S[0][0],
            _ = S[1];
          if (C && C.error) throw C.error;
          var w = me(),
            P = me(s),
            A = me(),
            k = me(!1),
            T = c(
              function() {
                return A.current && s === P.current
                  ? A.current
                  : y(h.getState(), s);
              },
              [h, C, s]
            );
          ct(lt, [P, w, k, s, T, A, g]),
            ct(pt, [l, h, m, y, P, w, k, A, g, _], [h, m, y]);
          var N = ge(
            function() {
              return $e.createElement(t, et({}, T, { ref: a }));
            },
            [a, t, T]
          );
          return ge(
            function() {
              return l ? $e.createElement(u.Provider, { value: v }, N) : N;
            },
            [u, N, v]
          );
        }
        var h = s ? $e.memo(p) : p;
        if (((h.WrappedComponent = t), (h.displayName = o), y)) {
          var f = $e.forwardRef(function(e, t) {
            return $e.createElement(h, et({}, e, { forwardedRef: t }));
          });
          return (f.displayName = o), (f.WrappedComponent = t), ot()(f, t);
        }
        return ot()(h, t);
      };
    }
    function yt(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    function ft(e, t) {
      if (yt(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        o = Object.keys(t);
      if (n.length !== o.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (
          !Object.prototype.hasOwnProperty.call(t, n[r]) ||
          !yt(e[n[r]], t[n[r]])
        )
          return !1;
      return !0;
    }
    var mt = n(4),
      gt = function() {
        return Math.random()
          .toString(36)
          .substring(7)
          .split('')
          .join('.');
      },
      bt = {
        INIT: '@@redux/INIT' + gt(),
        REPLACE: '@@redux/REPLACE' + gt(),
        PROBE_UNKNOWN_ACTION: function() {
          return '@@redux/PROBE_UNKNOWN_ACTION' + gt();
        },
      };
    function vt(e) {
      if ('object' != typeof e || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t); )
        t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    function St(e, t, n) {
      var o;
      if (
        ('function' == typeof t && 'function' == typeof n) ||
        ('function' == typeof n && 'function' == typeof arguments[3])
      )
        throw new Error(
          'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
        );
      if (
        ('function' == typeof t && void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n)
      ) {
        if ('function' != typeof n)
          throw new Error('Expected the enhancer to be a function.');
        return n(St)(e, t);
      }
      if ('function' != typeof e)
        throw new Error('Expected the reducer to be a function.');
      var r = e,
        i = t,
        a = [],
        s = a,
        u = !1;
      function c() {
        s === a && (s = a.slice());
      }
      function l() {
        if (u)
          throw new Error(
            'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
          );
        return i;
      }
      function p(e) {
        if ('function' != typeof e)
          throw new Error('Expected the listener to be a function.');
        if (u)
          throw new Error(
            'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
          );
        var t = !0;
        return (
          c(),
          s.push(e),
          function() {
            if (t) {
              if (u)
                throw new Error(
                  'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                );
              (t = !1), c();
              var n = s.indexOf(e);
              s.splice(n, 1), (a = null);
            }
          }
        );
      }
      function d(e) {
        if (!vt(e))
          throw new Error(
            'Actions must be plain objects. Use custom middleware for async actions.'
          );
        if (void 0 === e.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error('Reducers may not dispatch actions.');
        try {
          (u = !0), (i = r(i, e));
        } finally {
          u = !1;
        }
        for (var t = (a = s), n = 0; n < t.length; n++) {
          (0, t[n])();
        }
        return e;
      }
      function h(e) {
        if ('function' != typeof e)
          throw new Error('Expected the nextReducer to be a function.');
        (r = e), d({ type: bt.REPLACE });
      }
      function y() {
        var e,
          t = p;
        return (
          ((e = {
            subscribe: function(e) {
              if ('object' != typeof e || null === e)
                throw new TypeError('Expected the observer to be an object.');
              function n() {
                e.next && e.next(l());
              }
              return n(), { unsubscribe: t(n) };
            },
          })[mt.a] = function() {
            return this;
          }),
          e
        );
      }
      return (
        d({ type: bt.INIT }),
        ((o = { dispatch: d, subscribe: p, getState: l, replaceReducer: h })[
          mt.a
        ] = y),
        o
      );
    }
    function Ct(e, t) {
      var n = t && t.type;
      return (
        'Given ' +
        ((n && 'action "' + String(n) + '"') || 'an action') +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
      );
    }
    function _t(e) {
      for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
        var r = t[o];
        0, 'function' == typeof e[r] && (n[r] = e[r]);
      }
      var i,
        a = Object.keys(n);
      try {
        !(function(e) {
          Object.keys(e).forEach(function(t) {
            var n = e[t];
            if (void 0 === n(void 0, { type: bt.INIT }))
              throw new Error(
                'Reducer "' +
                  t +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
              );
            if (void 0 === n(void 0, { type: bt.PROBE_UNKNOWN_ACTION() }))
              throw new Error(
                'Reducer "' +
                  t +
                  '" returned undefined when probed with a random type. Don\'t try to handle ' +
                  bt.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
              );
          });
        })(n);
      } catch (e) {
        i = e;
      }
      return function(e, t) {
        if ((void 0 === e && (e = {}), i)) throw i;
        for (var o = !1, r = {}, s = 0; s < a.length; s++) {
          var u = a[s],
            c = n[u],
            l = e[u],
            p = c(l, t);
          if (void 0 === p) {
            var d = Ct(u, t);
            throw new Error(d);
          }
          (r[u] = p), (o = o || p !== l);
        }
        return (o = o || a.length !== Object.keys(e).length) ? r : e;
      };
    }
    function wt(e, t) {
      return function() {
        return t(e.apply(this, arguments));
      };
    }
    function Pt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function At(e, t) {
      var n = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          n.push.apply(n, Object.getOwnPropertySymbols(e)),
        t &&
          (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        n
      );
    }
    function kt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? At(n, !0).forEach(function(t) {
              Pt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : At(n).forEach(function(t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Tt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return 0 === t.length
        ? function(e) {
            return e;
          }
        : 1 === t.length
        ? t[0]
        : t.reduce(function(e, t) {
            return function() {
              return e(t.apply(void 0, arguments));
            };
          });
    }
    function Nt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function(e) {
        return function() {
          var n = e.apply(void 0, arguments),
            o = function() {
              throw new Error(
                'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
              );
            },
            r = {
              getState: n.getState,
              dispatch: function() {
                return o.apply(void 0, arguments);
              },
            },
            i = t.map(function(e) {
              return e(r);
            });
          return kt({}, n, { dispatch: (o = Tt.apply(void 0, i)(n.dispatch)) });
        };
      };
    }
    function Ot(e) {
      return function(t, n) {
        var o = e(t, n);
        function r() {
          return o;
        }
        return (r.dependsOnOwnProps = !1), r;
      };
    }
    function Dt(e) {
      return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
        ? Boolean(e.dependsOnOwnProps)
        : 1 !== e.length;
    }
    function Mt(e, t) {
      return function(t, n) {
        n.displayName;
        var o = function(e, t) {
          return o.dependsOnOwnProps ? o.mapToProps(e, t) : o.mapToProps(e);
        };
        return (
          (o.dependsOnOwnProps = !0),
          (o.mapToProps = function(t, n) {
            (o.mapToProps = e), (o.dependsOnOwnProps = Dt(e));
            var r = o(t, n);
            return (
              'function' == typeof r &&
                ((o.mapToProps = r),
                (o.dependsOnOwnProps = Dt(r)),
                (r = o(t, n))),
              r
            );
          }),
          o
        );
      };
    }
    var It = [
      function(e) {
        return 'function' == typeof e ? Mt(e) : void 0;
      },
      function(e) {
        return e
          ? void 0
          : Ot(function(e) {
              return { dispatch: e };
            });
      },
      function(e) {
        return e && 'object' == typeof e
          ? Ot(function(t) {
              return (function(e, t) {
                if ('function' == typeof e) return wt(e, t);
                if ('object' != typeof e || null === e)
                  throw new Error(
                    'bindActionCreators expected an object or a function, instead received ' +
                      (null === e ? 'null' : typeof e) +
                      '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                  );
                var n = {};
                for (var o in e) {
                  var r = e[o];
                  'function' == typeof r && (n[o] = wt(r, t));
                }
                return n;
              })(e, t);
            })
          : void 0;
      },
    ];
    var xt = [
      function(e) {
        return 'function' == typeof e ? Mt(e) : void 0;
      },
      function(e) {
        return e
          ? void 0
          : Ot(function() {
              return {};
            });
      },
    ];
    function Rt(e, t, n) {
      return et({}, n, {}, e, {}, t);
    }
    var Et = [
      function(e) {
        return 'function' == typeof e
          ? (function(e) {
              return function(t, n) {
                n.displayName;
                var o,
                  r = n.pure,
                  i = n.areMergedPropsEqual,
                  a = !1;
                return function(t, n, s) {
                  var u = e(t, n, s);
                  return a ? (r && i(u, o)) || (o = u) : ((a = !0), (o = u)), o;
                };
              };
            })(e)
          : void 0;
      },
      function(e) {
        return e
          ? void 0
          : function() {
              return Rt;
            };
      },
    ];
    function Bt(e, t, n, o) {
      return function(r, i) {
        return n(e(r, i), t(o, i), i);
      };
    }
    function Ft(e, t, n, o, r) {
      var i,
        a,
        s,
        u,
        c,
        l = r.areStatesEqual,
        p = r.areOwnPropsEqual,
        d = r.areStatePropsEqual,
        h = !1;
      function y(r, h) {
        var y,
          f,
          m = !p(h, a),
          g = !l(r, i);
        return (
          (i = r),
          (a = h),
          m && g
            ? ((s = e(i, a)),
              t.dependsOnOwnProps && (u = t(o, a)),
              (c = n(s, u, a)))
            : m
            ? (e.dependsOnOwnProps && (s = e(i, a)),
              t.dependsOnOwnProps && (u = t(o, a)),
              (c = n(s, u, a)))
            : g
            ? ((y = e(i, a)), (f = !d(y, s)), (s = y), f && (c = n(s, u, a)), c)
            : c
        );
      }
      return function(r, l) {
        return h
          ? y(r, l)
          : ((s = e((i = r), (a = l))),
            (u = t(o, a)),
            (c = n(s, u, a)),
            (h = !0),
            c);
      };
    }
    function jt(e, t) {
      var n = t.initMapStateToProps,
        o = t.initMapDispatchToProps,
        r = t.initMergeProps,
        i = tt(t, [
          'initMapStateToProps',
          'initMapDispatchToProps',
          'initMergeProps',
        ]),
        a = n(e, i),
        s = o(e, i),
        u = r(e, i);
      return (i.pure ? Ft : Bt)(a, s, u, e, i);
    }
    function Lt(e, t, n) {
      for (var o = t.length - 1; o >= 0; o--) {
        var r = t[o](e);
        if (r) return r;
      }
      return function(t, o) {
        throw new Error(
          'Invalid value of type ' +
            typeof e +
            ' for ' +
            n +
            ' argument when connecting component ' +
            o.wrappedComponentName +
            '.'
        );
      };
    }
    function Ut(e, t) {
      return e === t;
    }
    function Ht(e) {
      var t = void 0 === e ? {} : e,
        n = t.connectHOC,
        o = void 0 === n ? ht : n,
        r = t.mapStateToPropsFactories,
        i = void 0 === r ? xt : r,
        a = t.mapDispatchToPropsFactories,
        s = void 0 === a ? It : a,
        u = t.mergePropsFactories,
        c = void 0 === u ? Et : u,
        l = t.selectorFactory,
        p = void 0 === l ? jt : l;
      return function(e, t, n, r) {
        void 0 === r && (r = {});
        var a = r,
          u = a.pure,
          l = void 0 === u || u,
          d = a.areStatesEqual,
          h = void 0 === d ? Ut : d,
          y = a.areOwnPropsEqual,
          f = void 0 === y ? ft : y,
          m = a.areStatePropsEqual,
          g = void 0 === m ? ft : m,
          b = a.areMergedPropsEqual,
          v = void 0 === b ? ft : b,
          S = tt(a, [
            'pure',
            'areStatesEqual',
            'areOwnPropsEqual',
            'areStatePropsEqual',
            'areMergedPropsEqual',
          ]),
          C = Lt(e, i, 'mapStateToProps'),
          _ = Lt(t, s, 'mapDispatchToProps'),
          w = Lt(n, c, 'mergeProps');
        return o(
          p,
          et(
            {
              methodName: 'connect',
              getDisplayName: function(e) {
                return 'Connect(' + e + ')';
              },
              shouldHandleStateChanges: Boolean(e),
              initMapStateToProps: C,
              initMapDispatchToProps: _,
              initMergeProps: w,
              pure: l,
              areStatesEqual: h,
              areOwnPropsEqual: f,
              areStatePropsEqual: g,
              areMergedPropsEqual: v,
            },
            S
          )
        );
      };
    }
    var Vt = Ht();
    qe = We;
    const Gt = Object.freeze({
        daysFromInfectionToDeath: 17.3,
        doublingTime: 6.18,
        fatalityRate: 0.0087,
        minDeaths: 10,
      }),
      Kt = [
        '#e01010',
        '#067ff1',
        '#5adc13',
        '#14f8e5',
        '#e30ed6',
        '#ff6600',
        '#ece019',
        '#590596',
      ],
      zt = [
        '#f09090',
        '#add0f1',
        '#b5dc9f',
        '#b7f8f3',
        '#e3c1e1',
        '#ffc6a0',
        '#ece79c',
        '#9e8dce',
      ],
      Wt = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 100], color: '#fff5f5' },
        { value: [100, 1e3], color: '#ffdcdc' },
        { value: [1e3, 5e3], color: '#ffa0a0' },
        { value: [5e3, 15e3], color: '#ff7373' },
        { value: [15e3, 5e4], color: '#ff4b4b' },
        { value: [5e4, 15e4], color: '#ff1919' },
        { value: [15e4, 5e9], color: '#c60000' },
      ],
      $t = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 500], color: '#fff5f5' },
        { value: [500, 5e3], color: '#ffdcdc' },
        { value: [5e3, 15e3], color: '#ffa0a0' },
        { value: [15e3, 5e4], color: '#ff7373' },
        { value: [5e4, 15e4], color: '#ff4b4b' },
        { value: [15e4, 5e5], color: '#ff1919' },
        { value: [5e5, 5e9], color: '#c60000' },
      ],
      Jt = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 50], color: '#fff5f5' },
        { value: [50, 150], color: '#ffdcdc' },
        { value: [150, 500], color: '#ffa0a0' },
        { value: [500, 1500], color: '#ff7373' },
        { value: [1500, 1e4], color: '#ff4b4b' },
        { value: [1e4, 5e4], color: '#ff1919' },
        { value: [5e4, 5e9], color: '#c60000' },
      ],
      qt = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [1, 500], color: '#f0fff0' },
        { value: [500, 5e3], color: '#dcffdc' },
        { value: [5e3, 5e4], color: '#beffbe' },
        { value: [5e4, 25e4], color: '#a0ffa0' },
        { value: [25e4, 1e6], color: '#78ff78' },
        { value: [1e6, 5e6], color: '#41ff41' },
        { value: [5e6, 5e9], color: '#009900' },
      ],
      Yt = [];
    function Zt() {
      let e = !1;
      return (
        (function(t) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) &&
            (e = !0);
        })(navigator.userAgent || navigator.vendor || window.opera),
        e
      );
    }
    function Qt(...e) {
      console.log('COVID-19', ...e);
    }
    function Xt(e) {
      return new Date(e);
    }
    function en() {
      const e = Xt('2020-01-22').getTime(),
        t = Date.now() - 864e5,
        n = Math.floor((t - e) / 1e3 / 60 / 60 / 24),
        o = {};
      for (let t = 0; t < n; t += 1) {
        o[nn(Xt(e + 864e5 * t))] = t;
      }
      return o;
    }
    function tn(e) {
      return e < 10 ? '0' + e : e + '';
    }
    function nn(e) {
      return `${e.getUTCFullYear()}-${tn(e.getUTCMonth() + 1)}-${tn(
        e.getUTCDate()
      )}`;
    }
    function on(e) {
      return Object.assign({}, e);
    }
    function rn(e, t = 50) {
      let n = 0,
        o = [];
      const r = () => {
        try {
          e(...o);
        } catch (e) {
          Qt('Warning debounced function failed: ' + e.message);
        } finally {
          (n = 0), (o = []);
        }
      };
      return (...e) => {
        (o = e),
          n
            ? (clearTimeout(n), (n = setTimeout(r, t)))
            : (n = setTimeout(r, t));
      };
    }
    function an(e, t) {
      const n = e.split('');
      return n[0] && (n[0] = t(n[0])), n.join('');
    }
    class sn extends b {
      constructor() {
        super(),
          (this.componentWillReceiveProps = rn(e => {
            (this.chart = null), this.createChart(e);
          }));
      }
      createChart(e = this.props) {
        !this.chart &&
          e.options.series.length &&
          (this.chart = JSC.Chart('chartDiv', e.options));
      }
      componentDidMount() {
        (this.base.id = 'chartDiv'), this.createChart();
      }
      render() {
        return f('div', { className: this.props.flexSize });
      }
    }
    const un = 'border-curved',
      cn = 'display-block',
      ln = 'full-size',
      pn = 'flex',
      dn = 'flex flex-col',
      hn = 'padding',
      yn = 'text-align-left',
      fn = Object.freeze({
        button: [un, hn, 'ui-text'],
        input: [un, hn, 'ui-text'],
        selectBox: [un, hn, 'ui-text'],
      });
    function mn(e) {
      if (Array.isArray(e)) return Object.freeze(e.map(mn));
      if (vn(e))
        for (let t in e)
          vn(e[t]) && (Object.isFrozen(e[t]) || (e[t] = mn(e[t])));
      return Object.freeze(e);
    }
    function gn(e) {
      return 'boolean' == typeof e;
    }
    function bn(e) {
      return 'number' == typeof e;
    }
    function vn(e) {
      return !!e && 'object' == typeof e;
    }
    function Sn(e) {
      return 'string' == typeof e;
    }
    function Cn() {}
    function _n(e, t) {
      Object.keys(e).forEach((n, o) => {
        t(e[n], n, o, e);
      });
    }
    function wn(e, t, n) {
      return Object.keys(e).reduce((n, o, r) => t(n, e[o], o, r, e), n);
    }
    function Pn({ classes: e, onChange: t, options: n, selected: o }) {
      return f(
        'select',
        { className: e ? e.join(' ') : '', onChange: e => t(e.target.value) },
        n.map((e, t) =>
          Sn(e)
            ? f(
                'option',
                o === t ? { value: t, selected: !0 } : { value: t },
                e
              )
            : f(
                'option',
                o === t ? { value: e.index, selected: !0 } : { value: e.index },
                e.name
              )
        )
      );
    }
    function An({
      classes: e,
      onChange: t,
      onClick: n,
      options: o,
      selected: r,
    }) {
      const i = e ? e.join(' ') : '';
      n = n || Cn;
      const a = e => n(e.target.value);
      return f(
        'select',
        {
          className: i,
          onChange: e =>
            t(
              (function(e) {
                let t = [];
                for (let n = 0; n < e.length; n += 1) {
                  const o = e[n];
                  o.selected && t.push(o.value);
                }
                return t;
              })(e.target.options)
            ),
          multiple: !0,
        },
        o.map((e, t) => {
          const n = 'option-' + e;
          return Sn(e)
            ? r.indexOf(t) > -1
              ? f(
                  'option',
                  { key: n + '-selected', onClick: a, value: t, selected: !0 },
                  e
                )
              : f('option', { key: n, onClick: a, value: t }, e)
            : r.indexOf(e.index) > -1
            ? f(
                'option',
                {
                  key: n + '-selected',
                  onClick: a,
                  value: e.index,
                  selected: !0,
                },
                e.name
              )
            : f('option', { key: n, onClick: a, value: e.index }, e.name);
        })
      );
    }
    function kn({ classes: e, onChange: t, ymdString: n }) {
      return f('input', {
        className: e ? e.join(' ') : ' ',
        onChange: e => t(e.target.value),
        type: 'date',
        value: n,
      });
    }
    function Tn({ classes: e, isDisabled: t, label: n, onClick: o }) {
      return f(
        'button',
        { className: e ? e.join(' ') : '', onClick: o, disabled: t },
        n
      );
    }
    function Nn({
      classes: e,
      listenKeyUp: t,
      onChange: n,
      placeholder: o,
      value: r,
    }) {
      const i = e => n(e.target.value);
      return f('input', {
        className: e ? e.join(' ') : '',
        onChange: i,
        onKeyUp: t ? i : Cn,
        placeholder: o || '',
        type: 'text',
        value: r,
      });
    }
    function On(e) {
      return e.filter
        ? e.options.filter(t =>
            Sn(t)
              ? t.toLowerCase().indexOf(e.filter.toLowerCase()) > -1
              : t.name.toLowerCase().indexOf(e.filter.toLowerCase()) > -1
          )
        : e.options;
    }
    function Dn(e) {
      const t = e.classes ? e.classes.join(' ') : '';
      return f(
        'div',
        { className: t.length ? `${t} ${dn}` : dn },
        f(
          'div',
          { className: pn },
          Zt()
            ? ''
            : f(Nn, {
                classes: e.inputStringClasses,
                listenKeyUp: !0,
                onChange: e.onUpdateFilter,
                placeholder: 'filter',
                value: e.filter,
              }),
          f(Tn, {
            classes: e.inputButtonClasses,
            label: '✗',
            onClick: e.onClear,
          })
        ),
        Zt()
          ? f(An, {
              classes: e.inputSelectClasses,
              onChange: t => {
                e.onChange(t);
              },
              options: On(e),
              selected: e.selected,
            })
          : f(An, {
              classes: e.inputSelectClasses,
              onChange: Cn,
              onClick: t => {
                e.onDeselect(t);
              },
              options: On(e),
              selected: e.selected,
            })
      );
    }
    function Mn({
      clearCountries: e,
      countries: t,
      countryFilter: n,
      countryKeys: o,
      dataSetIndexes: r,
      mode: i,
      reload: a,
      scaleType: s,
      selectedCountry: u,
      selectedDataSets: c,
      selectedDate: l,
      selectedMode: p,
      selectedScaleType: d,
      showStates: h,
      strings: y,
      toggledPerCapita: m,
      toggledShowSeirState: g,
      toggledShowStates: b,
      updatedCountryFilter: v,
      usePerCapita: S,
      ymdStartDate: C,
    }) {
      const _ = [
          y.series.activeCases,
          y.series.confirmedCases,
          y.series.deaths,
          y.series.recoveries,
          y.series.newConfirmed,
          y.series.newDeaths,
          y.series.estimatedActiveCases,
          y.series.projectionSeirActive,
          y.series.projectionSeirDeaths,
          y.series.projectionSeirRecoveries,
        ],
        w = [y.modes.byDate, y.modes.byFirst, y.modes.byFirst100],
        P = [y.scaleTypes.linear, y.scaleTypes.logarithmic],
        A = y.states,
        k = [y.metrics.byValue, y.metrics.byPercent];
      return f(
        'section',
        { className: `${pn} flex-item-20` },
        f(
          'section',
          { className: dn },
          f(Pn, {
            classes: fn.selectBox,
            onChange: p,
            options: w,
            selected: i,
          }),
          f(Pn, {
            classes: fn.selectBox,
            onChange: d,
            options: P,
            selected: s,
          }),
          f(kn, { classes: fn.input, onChange: l, ymdString: C }),
          f(Tn, {
            classes: fn.button,
            label: y.timeVsCounts.configureSeir,
            onClick: g,
          })
        ),
        f(An, { classes: fn.selectBox, onChange: c, options: _, selected: r }),
        f(Dn, {
          classes: 0 === o.length ? ['highlight'] : [],
          inputButtonClasses: fn.button,
          inputSelectClasses: fn.selectBox,
          inputStringClasses: fn.input,
          filter: n,
          onUpdateFilter: v,
          onChange: u,
          onClear: e,
          onDeselect: u,
          options: t,
          selected: o,
        }),
        f(
          'div',
          { className: dn },
          f(Pn, {
            classes: fn.selectBox,
            onChange: b,
            options: A,
            selected: h ? 1 : 0,
          }),
          f(Pn, {
            classes: fn.selectBox,
            onChange: m,
            options: k,
            selected: S ? 1 : 0,
          }),
          f(Tn, {
            classes: fn.button,
            label: y.timeVsCounts.reload,
            onClick: a,
          })
        )
      );
    }
    function In({
      classes: e,
      isDisabled: t,
      labelFalse: n,
      labelTrue: o,
      onClick: r,
      state: i,
    }) {
      return f(Tn, {
        classes: e,
        isDisabled: t,
        label: i ? o : n,
        onClick: () => r(!i),
      });
    }
    function xn({
      config: { disable: e, labels: t, onClick: n, selected: o },
    }) {
      return f(
        'nav',
        { className: pn },
        t.map((t, r) =>
          f(Tn, {
            classes: fn.button,
            isDisabled: r === o || e,
            label: t,
            onClick: () => n(r),
          })
        )
      );
    }
    function Rn(e, t, n) {
      const o = n
        ? wn(
            t,
            (e, t, o) => (
              1 ===
              (function(e) {
                return e.length;
              })(t)
                ? (e[o] = t(n))
                : (e[o] = t),
              e
            ),
            {}
          )
        : t;
      return (t = e, n) => {
        const r = o[n.type];
        return r ? r(t, n) : t;
      };
    }
    function En(e, t) {
      return (n = e, { payload: o }) =>
        Array.isArray(o)
          ? (function(e, t, n) {
              if (t.length !== e[n].length)
                return Object.assign(Object.assign({}, e), { [n]: t });
              if (t.reduce((t, o, r) => (!1 === t ? t : e[n][r] === o), !0))
                return e;
              return Object.assign(Object.assign({}, e), { [n]: t });
            })(n, o, t)
          : n[t] === o
          ? n
          : Object.assign(Object.assign({}, n), { [t]: o });
    }
    function Bn(e, t) {
      return (n = e, o) => Object.assign(Object.assign({}, n), { [t]: !n[t] });
    }
    function Fn(e, t) {
      return e === t;
    }
    function jn(e, t, n) {
      if (null === t || null === n || t.length !== n.length) return !1;
      for (var o = t.length, r = 0; r < o; r++) if (!e(t[r], n[r])) return !1;
      return !0;
    }
    function Ln(e) {
      var t = Array.isArray(e[0]) ? e[0] : e;
      if (
        !t.every(function(e) {
          return 'function' == typeof e;
        })
      ) {
        var n = t
          .map(function(e) {
            return typeof e;
          })
          .join(', ');
        throw new Error(
          'Selector creators expect all input-selectors to be functions, instead received the following types: [' +
            n +
            ']'
        );
      }
      return t;
    }
    var Un = (function(e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return function() {
        for (var t = arguments.length, o = Array(t), r = 0; r < t; r++)
          o[r] = arguments[r];
        var i = 0,
          a = o.pop(),
          s = Ln(o),
          u = e.apply(
            void 0,
            [
              function() {
                return i++, a.apply(null, arguments);
              },
            ].concat(n)
          ),
          c = e(function() {
            for (var e = [], t = s.length, n = 0; n < t; n++)
              e.push(s[n].apply(null, arguments));
            return u.apply(null, e);
          });
        return (
          (c.resultFunc = a),
          (c.dependencies = s),
          (c.recomputations = function() {
            return i;
          }),
          (c.resetRecomputations = function() {
            return (i = 0);
          }),
          c
        );
      };
    })(function(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fn,
        n = null,
        o = null;
      return function() {
        return (
          jn(t, n, arguments) || (o = e.apply(null, arguments)),
          (n = arguments),
          o
        );
      };
    });
    const Hn = mn({ filter: '', selected: [], showStates: !0 }),
      Vn = e => e.timeSeriesCollection.countries(),
      Gn = e => e.countries.filter,
      Kn = e => !e.countries.showStates,
      zn = e => e.strings.countries.total,
      Wn = {
        countries: Vn,
        filter: Gn,
        selected: e => e.countries.selected,
        showStates: Kn,
        stringTotal: zn,
        list: Un(Kn, zn, Vn, Gn, (e, t, n, o) => {
          const r = n.filter(
            (function(e, t) {
              return n =>
                !1 === e ||
                n.name.toLowerCase().indexOf('korea') > -1 ||
                  !(n.name.indexOf(',') > -1) || n.name.indexOf(`, ${t}`) > -1;
            })(e, t)
          );
          return o ? r.filter(e => e.name.indexOf(o) > -1) : r;
        }),
      },
      $n = mn({
        clickedClear: 'countries/clicked_clear',
        selected: 'countries/selected',
        toggledShowStates: 'countries/toggled_show_states',
        updatedFilter: 'countries/updated_filter',
      }),
      Jn = {
        clickedClear: () => ({ type: $n.clickedClear }),
        selected: e => ({ type: $n.selected, payload: e }),
        toggledShowStates: () => ({ type: $n.toggledShowStates }),
        updatedFilter: e => ({ type: $n.updatedFilter, payload: e }),
      },
      qn = {
        [$n.clickedClear]: (e = Hn, t) =>
          Object.assign(Object.assign({}, e), { selected: [] }),
        [$n.selected]: (e = Hn, t) => {
          if (Sn(t.payload)) {
            const n = e.selected.indexOf(t.payload);
            return -1 === n
              ? Object.assign(Object.assign({}, e), {
                  selected: [...e.selected, t.payload],
                })
              : Object.assign(Object.assign({}, e), {
                  selected: [
                    ...e.selected.slice(0, n),
                    ...e.selected.slice(n + 1),
                  ],
                });
          }
          return En(Hn, 'selected')(e, t);
        },
        [$n.toggledShowStates]: Bn(Hn, 'showStates'),
        [$n.updatedFilter]: En(Hn, 'filter'),
      },
      Yn = e => Rn(Hn, qn, e);
    class Zn {
      constructor(e, t) {
        (this.hasHeader = e),
          (this.string = t),
          (this.headerStrings = []),
          (this.newLine = '\n'),
          (this.parsedData = []);
      }
      static rowStringToArray(e) {
        const t = e.split(''),
          n = { buffer: '', isEscape: !1, isInQuote: !1 },
          o = () => {
            n.isEscape ? (n.isEscape = !1) : (n.isEscape = !0);
          };
        return t.reduce(
          (e, t, r, i) =>
            '"' === t
              ? (n.isEscape
                  ? ((n.buffer += t), o())
                  : n.isInQuote
                  ? (n.isInQuote = !1)
                  : (n.isInQuote = !0),
                e)
              : '\\' === t
              ? (n.isEscape ? ((n.buffer += t), o()) : o(), e)
              : ',' === t
              ? (n.isInQuote
                  ? (n.buffer += t)
                  : (e.push(n.buffer), (n.buffer = '')),
                e)
              : ((n.buffer += t),
                r === i.length - 1 && (e.push(n.buffer), (n.buffer = '')),
                e),
          []
        );
      }
      parse() {
        const e = this.string.split(this.newLine);
        return (
          (this.headerStrings = this.hasHeader
            ? Zn.rowStringToArray(e[0])
            : this.headerStrings),
          (this.parsedData = (this.hasHeader ? e.slice(1) : e)
            .map(Zn.rowStringToArray)
            .filter(e => e.length)),
          this.parsedData
        );
      }
      parsed() {
        return 0 === this.parsedData.length && this.parse(), this.parsedData;
      }
      toString() {
        return this.string;
      }
    }
    class Qn extends Zn {
      static is(e) {
        return e instanceof Qn;
      }
      static create(e) {
        return new Qn(e);
      }
      constructor(e) {
        super(!0, e);
      }
    }
    var Xn = n(6),
      eo = n(7),
      to = n(8),
      no = n(9),
      oo = n(10),
      ro = n(11),
      io = n(12),
      ao = n(13),
      so = n(0),
      uo = n(14);
    const co = to,
      lo = no,
      po = oo,
      ho = ro,
      yo = io,
      fo = uo,
      mo = (Xn || []).reduce(
        (e, t) => ((e[t.country] = parseInt(t.population, 10)), e),
        {}
      ),
      go = (eo || []).reduce(
        (e, t) => (
          (e[t.country] = null === t.density ? null : parseInt(t.density, 10)),
          e
        ),
        {}
      );
    function bo(e, t) {
      if (t) return vo(e, t);
      let n = mo[e];
      return n || ((n = mo[yo[e]]), n || ((n = ao[e]), n || 0));
    }
    function vo(e, t) {
      return so[e] && so[e][t] ? so[e][t] : 0;
    }
    function So(e, t) {
      if (t) return 0;
      let n = go[e];
      return n || ((n = go[yo[e]]), n || 0);
    }
    class Co {
      freeze() {
        return mn(this);
      }
    }
    function _o(e = 0, t = 0, n = 0) {
      return {
        active: 0,
        confirmed: e,
        deaths: t,
        newConfirmed: 0,
        newDeaths: 0,
        recoveries: n,
        projectionReverseDeath: 0,
      };
    }
    class wo extends Co {
      constructor(e) {
        super(),
          (this.lsData = e),
          (this.lastActive = this.lastValue.bind(this, 'active')),
          (this.lastActivePercent = this.lastPercent.bind(this, 'active')),
          (this.lastConfirmed = this.lastValue.bind(this, 'confirmed')),
          (this.lastConfirmedPercent = this.lastPercent.bind(
            this,
            'confirmed'
          )),
          (this.lastDeaths = this.lastValue.bind(this, 'deaths')),
          (this.lastDeathsPercent = this.lastPercent.bind(this, 'deaths')),
          (this.lastRecoveries = this.lastValue.bind(this, 'recoveries')),
          (this.lastRecoveriesPercent = this.lastPercent.bind(
            this,
            'recoveries'
          )),
          (this.lastNewConfirmed = this.lastValue.bind(this, 'newConfirmed')),
          (this.lastNewDeaths = this.lastValue.bind(this, 'newDeaths')),
          (this.peakActive = this.peakValue.bind(this, 'active')),
          (this.peakActivePercent = this.peakPercent.bind(this, 'active')),
          (this.peakConfirmed = this.peakValue.bind(this, 'confirmed')),
          (this.peakConfirmedPercent = this.peakPercent.bind(
            this,
            'confirmed'
          )),
          (this.peakDeaths = this.peakValue.bind(this, 'deaths')),
          (this.peakDeathsPercent = this.peakPercent.bind(this, 'deaths')),
          (this.peakRecoveries = this.peakValue.bind(this, 'recoveries')),
          (this.peakRecoveriesPercent = this.peakPercent.bind(
            this,
            'recoveries'
          )),
          (this.peakNewConfirmed = this.peakValue.bind(this, 'newConfirmed')),
          (this.peakNewDeaths = this.peakValue.bind(this, 'newDeaths')),
          (this.counts = this.getProp.bind(this, 'counts')),
          (this.dates = this.getProp.bind(this, 'dates')),
          (this.country = this.getProp.bind(this, 'country')),
          (this.countryCode = this.getProp.bind(this, 'countryCode')),
          (this.key = this.getProp.bind(this, 'key')),
          (this.population = this.getProp.bind(this, 'population')),
          (this.populationDensity = this.getProp.bind(
            this,
            'populationDensity'
          )),
          (this.state = this.getProp.bind(this, 'state')),
          (this.stateCode = this.getProp.bind(this, 'stateCode'));
      }
      static create(e) {
        return new wo(e);
      }
      lastValue(e) {
        return this.lsData.counts.length < 1
          ? 0
          : this.lsData.counts[this.lsData.counts.length - 1][e];
      }
      lastPercent(e) {
        return this.lsData.counts.length < 1 || this.lsData.population < 1
          ? 0
          : (this.lsData.counts[this.lsData.counts.length - 1][e] /
              this.lsData.population) *
              100;
      }
      peakValue(e) {
        return this.lsData.counts.length < 1
          ? 0
          : this.lsData.counts.reduce(
              (t, n) => (n[e] && n[e] > t ? n[e] : t),
              0
            );
      }
      peakPercent(e) {
        return this.lsData.counts.length < 1 || this.lsData.population < 1
          ? 0
          : this.lsData.counts.reduce((t, n) => {
              if (n[e]) {
                const o = (n[e] / this.lsData.population) * 100;
                if (o > t) return o;
              }
              return t;
            }, 0);
      }
      getProp(e) {
        return this.lsData[e];
      }
      clone() {
        return wo.create(
          Object.assign(Object.assign({}, this.lsData), {
            counts: this.lsData.counts.map(on),
            dates: this.lsData.dates.slice(0),
          })
        );
      }
      cloneAndAppend(e, t) {
        return wo.create(
          Object.assign(Object.assign({}, this.lsData), {
            counts: this.lsData.counts.map(on).concat(e),
            dates: this.lsData.dates.concat(t),
          })
        );
      }
      lastMortality() {
        return this.lastConfirmed() < 1
          ? 0
          : (this.lastDeaths() / this.lastConfirmed()) * 100;
      }
      peakMortality() {
        return this.peakConfirmed() < 1
          ? 0
          : (this.peakDeaths() / this.peakConfirmed()) * 100;
      }
      formatName() {
        return this.country() + (this.state() ? ', ' + this.state() : '');
      }
      forEachDay(e) {
        this.counts().forEach((t, n) => {
          e(t, this.dates()[n], n);
        });
      }
      forEachDayWhere(e, t) {
        this.forEachDay((n, o, r) => {
          e(n, o, r) && t(n, o, r);
        });
      }
    }
    class Po extends Zn {
      constructor(e) {
        super(!0, e), (this.datesData = []), (this.countsData = []);
      }
      static is(e) {
        return e instanceof Po;
      }
      static create(e) {
        return new Po(e);
      }
      counts() {
        return (
          this.countsData.length < 1 &&
            (this.countsData = this.parsed().map(e =>
              e.slice(4).map(e => parseInt(e, 10))
            )),
          this.countsData
        );
      }
      dates() {
        return (
          this.datesData.length < 1 &&
            (this.parsed(),
            (this.datesData = this.headerStrings.slice(4).map(Xt))),
          this.datesData
        );
      }
      onEachRow(e) {
        this.parsed().forEach((t, n) => {
          e(
            {
              country: () => t[1],
              counts: () => this.counts()[n].slice(0),
              state: () => t[0],
            },
            n
          );
        });
      }
    }
    class Ao extends Co {
      constructor(e = {}) {
        super(),
          (this.dictionary = e),
          (this.hasInterpolated = !1),
          (this.hasSummedRegions = !1),
          (this.hasSummedWorld = !1);
      }
      static create(e = {}) {
        return new Ao(e);
      }
      static from(e) {
        if (Qn.is(e)) {
          const t = (function(e) {
            const t = (function(e) {
                const t = {};
                return (
                  e.forEach(e => {
                    if (!e[0] || !e[1]) return;
                    const n = fo.US[e[1]];
                    if (!n) return;
                    const o = ko(n);
                    void 0 === t[e[0]] && (t[e[0]] = {}),
                      void 0 === t[e[0]][o] && (t[e[0]][o] = _o()),
                      e[3] && (t[e[0]][o].confirmed = parseInt(e[3], 10)),
                      e[4] && (t[e[0]][o].deaths = parseInt(e[4], 10));
                  }),
                  t
                );
              })(
                (function(e) {
                  return (
                    e.sort((e, t) => (e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0)),
                    e
                  );
                })(e.parsed())
              ),
              [n, o] = (function(e) {
                const t = {},
                  n = Object.keys(co.US).filter(e => 'D.C.' !== e),
                  o = en(),
                  r = [];
                return (
                  _n(o, (o, i) => {
                    r.push(new Date(i)),
                      n.forEach(n => {
                        const r = ko(n);
                        if ((void 0 === t[r] && (t[r] = []), e[i] && e[i][r]))
                          t[r][o] = e[i][r];
                        else {
                          const e = t[r][o - 1];
                          t[r][o] = e ? Object.assign({}, e) : _o();
                        }
                      });
                  }),
                  [r, t]
                );
              })(t),
              r = {};
            return (
              _n(o, (e, t) => {
                const o = t.split('.')[1],
                  i = co.US[o];
                r[t] = {
                  country: 'US',
                  countryCode: 'US',
                  dates: n,
                  key: t,
                  population: vo('US', i),
                  populationDensity: So('US', i),
                  state: i,
                  stateCode: o,
                  counts: e,
                };
              }),
              r
            );
          })(e);
          return Ao.create(To(t));
        }
        if (
          Array.isArray(e) &&
          e.reduce((e, t) => (!1 === e ? e : Po.is(t)), !0)
        ) {
          const t = (function(e) {
            return delete e.CA, e;
          })(
            (function(e) {
              const t = {},
                n = n => o => {
                  const r = lo[o.country()];
                  if (!r) return;
                  let i = r,
                    a = '';
                  if (o.state()) {
                    const e = fo[o.country()];
                    if (!e) return;
                    if (((a = e[o.state()]), !a)) return;
                    i = i + '.' + a;
                  }
                  t[i]
                    ? o.counts().map((e, o) => {
                        void 0 === t[i].counts[o] && (t[i].counts[o] = _o()),
                          (t[i].counts[o][n] = e);
                      })
                    : (t[i] = {
                        country: o.country(),
                        countryCode: r,
                        counts: o.counts().map(e => {
                          const t = _o();
                          return (t[n] = e), t;
                        }),
                        dates: e[0].dates(),
                        key: i,
                        population: bo(o.country(), o.state()),
                        populationDensity: So(o.country(), o.state()),
                        state: o.state(),
                        stateCode: a,
                      });
                };
              e[0] && e[0].onEachRow(n('confirmed'));
              e[1] && e[1].onEachRow(n('deaths'));
              e[2] && e[2].onEachRow(n('recoveries'));
              return t;
            })(e)
          );
          return Ao.create(To(t));
        }
        throw new TypeError(
          'TimeSeries: from: data is unexpected type: ' + typeof e
        );
      }
      static merge(e) {
        const t = {};
        return (
          e.forEach(e => {
            e.forEach(e => {
              t[e.key()] = e.clone();
            });
          }),
          Ao.create(t)
        );
      }
      sumAllWorld() {
        const e = {
          country: Ao.worldString,
          countryCode: Ao.worldString,
          dates: Object.keys(en()).map(e => new Date(e)),
          key: Ao.worldString,
          population: 0,
          populationDensity: 0,
          state: '',
          stateCode: '',
          counts: [],
        };
        _n(this.dictionary, t => {
          (t.state() && t.state() !== Ao.totalsString) ||
            ((e.population += t.population()),
            t.forEachDay((t, n, o) => {
              e.counts[o]
                ? (e.counts[o] = No(e.counts[o], t))
                : (e.counts[o] = Object.assign({}, t));
            }));
        }),
          (this.dictionary[Ao.worldString] = wo.create(e));
      }
      sumAllRegions() {
        _n(this.dictionary, e => {
          if (e.state() !== Ao.totalsString && e.state()) {
            if (this.dictionary[e.countryCode()]) return;
            const t = e.countryCode() + '.' + Ao.totalsString;
            void 0 === this.dictionary[t] &&
              (this.dictionary[t] = wo.create({
                country: e.country(),
                countryCode: e.countryCode(),
                dates: e.dates().slice(0),
                key: t,
                population: bo(e.country()),
                populationDensity: So(e.country()),
                state: Ao.totalsString,
                stateCode: '',
                counts: [],
              })),
              e.forEachDay((e, n, o) => {
                this.dictionary[t].counts()[o]
                  ? (this.dictionary[t].counts()[o] = No(
                      this.dictionary[t].counts()[o],
                      e
                    ))
                  : (this.dictionary[t].counts()[o] = e);
              });
          }
        });
      }
      interpolate() {
        _n(this.dictionary, e => {
          e.forEachDay((t, n, o) => {
            const r = e.counts();
            (t.recoveries = (function(e, t, n, o) {
              if (e.confirmed) {
                if (!(e.recoveries < 1)) return e.recoveries;
                if (n[t - o] && n[t - o - 1]) {
                  const e = n[t - o - 1].confirmed,
                    r = n[t - o].confirmed - e;
                  return n[t - 1] ? r + n[t - 1].recoveries : r;
                }
              }
              return 0;
            })(t, o, r, 25)),
              (t.active = t.confirmed - t.deaths - t.recoveries),
              (t.projectionReverseDeath = (function(e) {
                const t = e.deaths / Gt.fatalityRate,
                  n = Gt.daysFromInfectionToDeath / Gt.doublingTime;
                return t * Math.pow(2, n);
              })(t)),
              (t.newConfirmed =
                t.confirmed - ((r[o - 1] && r[o - 1].confirmed) || 0)),
              (t.newDeaths = t.deaths - ((r[o - 1] && r[o - 1].deaths) || 0));
          });
        });
      }
      countries() {
        return wn(
          this.dictionary,
          (e, t) => {
            const n = t.formatName();
            return e.push({ index: t.key(), name: n }), e;
          },
          []
        ).sort(
          ((e = 'name'), (t, n) => (t[e] < n[e] ? -1 : t[e] > n[e] ? 1 : 0))
        );
        var e;
      }
      select(e) {
        return Sn(e)
          ? this.dictionary[e]
          : Array.isArray(e)
          ? e.map(e => this.dictionary[e])
          : void 0;
      }
      interpolateRecoveriesActiveCasesAndNewProps() {
        return (
          this.hasInterpolated ||
            (this.interpolate(), (this.hasInterpolated = !0)),
          this
        );
      }
      sumRegions() {
        return (
          this.hasSummedRegions ||
            (this.sumAllRegions(), (this.hasSummedRegions = !0)),
          this
        );
      }
      sumWorld() {
        return (
          this.hasSummedWorld ||
            (this.sumAllWorld(), (this.hasSummedWorld = !0)),
          this
        );
      }
      forEach(e) {
        _n(this.dictionary, (t, n, o) => {
          e(t, o);
        });
      }
      reduce(e, t) {
        return wn(this.dictionary, (t, n, o, r) => e(t, n, r), t);
      }
    }
    function ko(e) {
      return 'US.' + e;
    }
    function To(e) {
      return wn(e, (e, t, n) => ((e[n] = wo.create(t)), e), {});
    }
    function No(e, t) {
      return {
        active: e.active + t.active,
        confirmed: e.confirmed + t.confirmed,
        deaths: e.deaths + t.deaths,
        newConfirmed: e.newConfirmed + t.newConfirmed,
        newDeaths: e.newDeaths + t.newDeaths,
        recoveries: e.recoveries + t.recoveries,
        projectionReverseDeath:
          e.projectionReverseDeath + t.projectionReverseDeath,
      };
    }
    (Ao.totalsString = 'Total'), (Ao.worldString = 'World');
    class Oo extends Array {
      constructor() {
        super(),
          (this.sortByActive = this.sortByProp.bind(this, 'lastActive')),
          (this.sortByActivePercent = this.sortByProp.bind(
            this,
            'lastActivePercent'
          )),
          (this.sortByConfirmed = this.sortByProp.bind(this, 'lastConfirmed')),
          (this.sortByNewConfirmed = this.sortByProp.bind(
            this,
            'lastNewConfirmed'
          )),
          (this.sortByPeakNewConfirmed = this.sortByProp.bind(
            this,
            'peakNewConfirmed'
          )),
          (this.sortByConfirmedPercent = this.sortByProp.bind(
            this,
            'lastConfirmedPercent'
          )),
          (this.sortByPeakActive = this.sortByProp.bind(this, 'peakActive')),
          (this.sortByPeakActivePercent = this.sortByProp.bind(
            this,
            'peakActivePercent'
          )),
          (this.sortByPeakConfirmed = this.sortByProp.bind(
            this,
            'peakConfirmed'
          )),
          (this.sortByPeakConfirmedPercent = this.sortByProp.bind(
            this,
            'peakConfirmedPercent'
          )),
          (this.sortByDeaths = this.sortByProp.bind(this, 'lastDeaths')),
          (this.sortByNewDeaths = this.sortByProp.bind(this, 'lastNewDeaths')),
          (this.sortByPeakNewDeaths = this.sortByProp.bind(
            this,
            'peakNewDeaths'
          )),
          (this.sortByMortality = this.sortByProp.bind(this, 'lastMortality')),
          (this.sortByDeathsPercent = this.sortByProp.bind(
            this,
            'lastDeathsPercent'
          )),
          (this.sortByPopulation = this.sortByProp.bind(this, 'population')),
          (this.sortByPopulationDensity = this.sortByProp.bind(
            this,
            'populationDensity'
          )),
          (this.sortByRecoveries = this.sortByProp.bind(
            this,
            'lastRecoveries'
          )),
          (this.sortByRecoveriesPercent = this.sortByProp.bind(
            this,
            'lastRecoveriesPercent'
          )),
          (this.sortByPeakDeaths = this.sortByProp.bind(this, 'peakDeaths')),
          (this.sortByPeakMortality = this.sortByProp.bind(
            this,
            'peakMortality'
          )),
          (this.sortByPeakDeathsPercent = this.sortByProp.bind(
            this,
            'peakDeathsPercent'
          )),
          (this.sortByPeakPopulation = this.sortByProp.bind(
            this,
            'population'
          )),
          (this.sortByPeakRecoveries = this.sortByProp.bind(
            this,
            'peakRecoveries'
          )),
          (this.sortByPeakRecoveriesPercent = this.sortByProp.bind(
            this,
            'peakRecoveriesPercent'
          ));
      }
      static create() {
        return new Oo();
      }
      static fromCollection(e) {
        const t = Oo.create();
        return e.forEach(e => t.push(e)), t;
      }
      sortByProp(e, t = !0) {
        const n = t ? -1 : 1;
        this.sort((t, o) =>
          t[e]() < o[e]() ? n : t[e]() > o[e]() ? -1 * n : 0
        );
      }
      sortByCountry(e = !0) {
        this.sort((e, t) =>
          e.country() < t.country()
            ? -1
            : e.country() > t.country()
            ? 1
            : e.state() < t.state()
            ? -1
            : e.state() > t.state()
            ? 1
            : 0
        );
      }
    }
    function Do(e, t) {
      const n = ho[e.countryCode().toUpperCase()];
      if (void 0 === n) return;
      const o = n[nn(e.dates()[t])];
      return void 0 !== o ? o : void 0;
    }
    function Mo(e, t) {
      const n = Do(e, t);
      return void 0 === n
        ? n
        : { color: n.colour, marker: n.size ? { size: n.size } : void 0 };
    }
    function Io(e) {
      const t = (function(e) {
          return { name: e, points: [] };
        })(e),
        n = {
          addPoint: (e, o, r = {}) => (
            t.points.push(Object.assign({ x: e, y: o }, r)), n
          ),
          colour(e) {
            return this.setProp('color', e), n;
          },
          lineColour(e) {
            return this.setProp('line', { color: e }), n;
          },
          setProp: (e, o) => ((t[e] = o), n),
          type: e => ((t.type = e), n),
          collect: () => t,
        };
      return n;
    }
    function xo(e, t, n, o = -1, r = !1) {
      const i = e => (e < 0.01 ? e.toFixed(6) : e.toFixed(2)).toLocaleString(),
        a =
          (r ? '<b><i>*** PROJECTION ***</i><br/>' : '') +
          (o < 0
            ? `<b>${e.formatName()}</b> ` +
              e.dates()[n].toLocaleDateString() +
              `(${e.dates()[n].getUTCDay()})`
            : `<b>${e.formatName()} Day ` +
              o +
              '</b> (' +
              e.dates()[n].toLocaleDateString() +
              ')') +
          `(${e.dates()[n].getUTCDay()})` +
          '<br/> Population ' +
          e.population().toLocaleString() +
          (e.populationDensity() ? ` (${e.populationDensity()}/km2)` : ''),
        s = (function(e, t) {
          const n = Do(e, t);
          if (void 0 === n) return '';
          return `<br/><br/>Event: ${n.description}`;
        })(e, n);
      return (
        a +
        '<br/><br/>' +
        [
          {
            index: 0,
            label: `Active ${e.counts()[n].active.toLocaleString()} (${i(
              (e.counts()[n].active / e.population()) * 100
            )} %)`,
          },
          {
            index: 1,
            label: `Confirmed ${e.counts()[n].confirmed.toLocaleString()} (${i(
              (e.counts()[n].confirmed / e.population()) * 100
            )} %)`,
          },
          {
            index: 2,
            label: `Deaths ${e.counts()[n].deaths.toLocaleString()} (${i(
              (e.counts()[n].deaths / e.population()) * 100
            )} %)`,
          },
          {
            index: 3,
            label: `Recoveries ${e
              .counts()
              [n].recoveries.toLocaleString()} (${i(
              (e.counts()[n].recoveries / e.population()) * 100
            )} %)`,
          },
        ]
          .sort((e, n) =>
            e.index === t
              ? -1
              : n.index === t
              ? 1
              : e.label < n.label
              ? -1
              : e.label > n.label
              ? 1
              : 0
          )
          .map(({ label: e }, t) => (0 === t ? `<b>${e}</b>` : e))
          .join('<br/>') +
        '<br/><br/>' +
        [
          `New Cases: <b>${e.counts()[n].newConfirmed.toLocaleString()}</b>`,
          `New Deaths: <b>${e.counts()[n].newDeaths.toLocaleString()}</b>`,
        ].join('<br/>') +
        s
      );
    }
    const Ro = Object.freeze({
      Euler: [[1]],
      Midpoint: [
        [0.5, 0.5],
        [0, 1],
      ],
      Heun: [
        [1, 1],
        [0.5, 0.5],
      ],
      Ralston: [
        [2 / 3, 2 / 3],
        [0.25, 0.75],
      ],
      K3: [
        [0.5, 0.5],
        [1, -1, 2],
        [1 / 6, 2 / 3, 1 / 6],
      ],
      SSP33: [
        [1, 1],
        [0.5, 0.25, 0.25],
        [1 / 6, 1 / 6, 2 / 3],
      ],
      SSP43: [
        [0.5, 0.5],
        [1, 0.5, 0.5],
        [0.5, 1 / 6, 1 / 6, 1 / 6],
        [1 / 6, 1 / 6, 1 / 6, 0.5],
      ],
      RK4: [
        [0.5, 0.5],
        [0.5, 0, 0.5],
        [1, 0, 0, 1],
        [1 / 6, 1 / 3, 1 / 3, 1 / 6],
      ],
      RK38: [
        [1 / 3, 1 / 3],
        [2 / 3, -1 / 3, 1],
        [1, 1, -1, 1],
        [1 / 8, 3 / 8, 3 / 8, 1 / 8],
      ],
    });
    function Eo(e, t, n, o, r) {
      let i = [...n],
        a = 0;
      const s = [];
      let u = 0;
      for (u = 0; u < e.length; u += 1) {
        (i = [...n]), (a = u ? e[u - 1][0] * r : 0);
        for (let t = 0; t < i.length; t += 1)
          for (let n = 1; n <= u; n += 1)
            i[t] = i[t] + r * e[u - 1][n] * s[u - 1][t];
        s[u] = t(o + a, i);
      }
      let c = [...n];
      for (let t = 0; t < i.length; t += 1)
        for (let n = 0; n < s.length; n += 1)
          c[t] = c[t] + r * s[n][t] * e[u - 1][n];
      return c;
    }
    class Bo {
      constructor(e = 7e6, t = 1, n = 0) {
        (this.N = e),
          (this.I0 = t),
          (this.initialDeaths = n),
          (this.dt = 2),
          (this.R0 = Bo.r0),
          (this.incubationPeriod = Bo.incubationPeriod),
          (this.durationOfInfection = Bo.durationOfInfection),
          (this.recoveryTimeForMildCases = Bo.recoveryTimeForMildCases),
          (this.timeFromIncubationToHospital = Bo.timeFromIncubationToDeath),
          (this.lengthOfSevereHospitalStay = Bo.lengthOfSevereHospitalStay),
          (this.timeFromIncubationToDeath = Bo.timeFromIncubationToDeath),
          (this.hospitalizationRate = Bo.hospitalizationRate),
          (this.fatalityRate = Bo.fatalityRate);
      }
      static create(e = 7e6, t = 1, n = 0) {
        return new Bo(e, t, n);
      }
      get D_death() {
        return this.timeFromIncubationToDeath - this.durationOfInfection;
      }
      f(e, t) {
        const n = this.R0 / this.durationOfInfection,
          o = 1 / this.incubationPeriod,
          r = 1 / this.durationOfInfection,
          i = t[0],
          a = t[1],
          s = t[2],
          u = t[3],
          c = t[4],
          l = t[5],
          p = t[6];
        return [
          -n * s * i,
          n * s * i - o * a,
          o * a - r * s,
          (1 - this.hospitalizationRate - this.fatalityRate) * r * s -
            (1 / this.recoveryTimeForMildCases) * u,
          this.hospitalizationRate * r * s -
            (1 / this.timeFromIncubationToHospital) * c,
          (1 / this.timeFromIncubationToHospital) * c -
            (1 / this.lengthOfSevereHospitalStay) * l,
          this.fatalityRate * r * s - (1 / this.D_death) * p,
          (1 / this.recoveryTimeForMildCases) * u,
          (1 / this.lengthOfSevereHospitalStay) * l,
          (1 / this.D_death) * p,
        ];
      }
      getSolution(e = 10, t = Cn) {
        let n = 40 * e;
        const o = this.dt / 40,
          r = Ro.RK4;
        let i = [
            1 - this.I0 / this.N,
            0,
            this.I0 / this.N,
            0,
            0,
            0,
            0,
            0,
            0,
            this.initialDeaths / this.N,
          ],
          a = 0,
          s = 0;
        const u = [],
          c = [],
          l = [];
        for (; n--; ) {
          if ((n + 1) % 40 == 0) {
            const e = [
              this.N * i[9],
              this.N * (i[5] + i[6]),
              this.N * (i[7] + i[8]),
              this.N * i[2],
              this.N * i[1],
            ];
            u.push(e), l.push(i), c.push(this.N * (1 - i[0])), t(this, e, s++);
          }
          (i = Eo(r, this.f.bind(this), i, a, o)), (a += o);
        }
        return {
          P: u,
          deaths: this.N * i[6],
          total: 1 - i[0],
          total_infected: c,
          Iters: l,
          dIters: this.f.bind(this),
        };
      }
    }
    function Fo(e, t, n, o) {
      const r = Bo.create(t.population(), t.lastActive(), t.lastDeaths());
      (r.R0 = e.r0),
        (r.incubationPeriod = e.incubationPeriod),
        (r.durationOfInfection = e.durationOfInfection),
        (r.fatalityRate = e.fatalityRate),
        (r.timeFromIncubationToDeath = e.timeFromIncubationToDeath),
        (r.lengthOfSevereHospitalStay = e.lengthOfSevereHospitalStay),
        (r.recoveryTimeForMildCases = e.recoveryTimeForMildCases),
        (r.hospitalizationRate = e.hospitalizationRate),
        (r.timeFromIncubationToHospital = e.timeFromIncubationToHospital);
      const i = t.dates(),
        a = i[i.length - 1]
          ? i[i.length - 1].getTime()
          : new Date('2020-01-22').getTime(),
        s = r.getSolution(e.daysToProject, (e, n, o) => {
          if (o > 0 && o < 2) {
            const n = (function e(t, n = 3) {
              if (t.counts().length < 2 + n) return Bo.r0;
              const o = t.counts()[t.counts().length - 1 - n],
                r = t.counts()[t.counts().length - 2 - n],
                i = Bo.create(t.population(), r.active, r.deaths);
              i.R0 = 3.5;
              for (; Math.abs(1 / 0) > 50; ) {
                const [e, t, n, r, a] = i.getSolution(3).P[2];
                if (a > o.active + 50) i.R0 -= 0.1;
                else {
                  if (a < o.active - 50) break;
                  if (a < o.active) break;
                  i.R0 -= 0.1;
                }
              }
              if (n <= 1) return i.R0;
              return (i.R0 + e(t, n - 1)) / 2;
            })(t);
            e.R0 = n > 1.6 ? n - 0.01 : n - 0.55;
          }
          o > 1 && e.R0 > 0.5 && (e.R0 > 1.6 ? (e.R0 -= 0.3) : (e.R0 -= 0.01));
        }),
        u = s.P.length < 35 ? s.P.length : 35,
        c = [],
        l = [],
        p = [],
        d = [],
        h = [];
      for (let e = 1; e < u; e += 1) {
        const r = d[d.length - 1] || t.counts()[t.counts().length - 1] || _o(),
          u = _o();
        (u.active = s.P[e][4]),
          (u.newConfirmed = u.active - r.active),
          (u.confirmed = r.confirmed + u.active - r.active),
          (u.deaths = s.P[e][0]),
          (u.newDeaths = u.deaths - r.deaths),
          (u.recoveries = s.P[e][2]),
          d.push(u);
        const y = h[h.length - 1] || i[i.length - 1] || new Date();
        h.push(new Date(y.getTime() + (e > 1 ? 864e5 : 0)));
        const f = t.cloneAndAppend(d, h),
          m = -1 === n ? new Date(a + 864e5 * (e - 1)) : n + e - 1;
        c.push({
          tooltip: xo(
            f,
            0,
            f.counts().length - 1,
            -1 === n ? -1 : n + e - 1,
            !0
          ),
          x: m,
          y: !1 === o ? u.active : (u.active / t.population()) * 100,
        }),
          l.push({
            tooltip: xo(f, 2, f.counts().length - 1, n, !0),
            x: m,
            y: !1 === o ? u.deaths : (u.deaths / t.population()) * 100,
          }),
          p.push({
            tooltip: xo(f, 3, f.counts().length - 1, n, !0),
            x: m,
            y: !1 === o ? u.recoveries : (u.recoveries / t.population()) * 100,
          });
      }
      return { active: c, deaths: l, recoveries: p };
    }
    (Bo.r0 = 2.2),
      (Bo.incubationPeriod = 5.2),
      (Bo.durationOfInfection = 2.9),
      (Bo.fatalityRate = 0.02),
      (Bo.timeFromIncubationToDeath = 32),
      (Bo.lengthOfSevereHospitalStay = 31.5 - Bo.durationOfInfection),
      (Bo.recoveryTimeForMildCases = 14 - Bo.durationOfInfection),
      (Bo.hospitalizationRate = 0.2),
      (Bo.timeFromIncubationToHospital = 5);
    class jo {
      constructor(e) {
        this.tsc = e;
      }
      static create(e) {
        return new jo(e);
      }
      selectConfirmedVsRecent(e) {
        return this.tsc.select(e).map(Lo);
      }
      createSeirPoints(e, t) {
        const n = e => (t, n, o, r) =>
          -1 !== t ? t : n.confirmed >= e ? r.length - o - 1 : t;
        let o =
          0 === e.timeVsCounts.mode
            ? -1
            : 1 === e.timeVsCounts.mode
            ? t.counts().reduce(n(1), -1)
            : t.counts().reduce(n(100), -1);
        return Fo(e.seir, t, o, e.timeVsCounts.usePerCapita);
      }
      createSelectTimeVsCountsChart(e, t, n) {
        const o = (function(e) {
            switch (e) {
              case 0:
                return 'active';
              case 1:
                return 'confirmed';
              case 2:
                return 'deaths';
              case 3:
                return 'recoveries';
              case 4:
                return 'newConfirmed';
              case 5:
                return 'newDeaths';
              case 6:
                return 'projectionReverseDeath';
              default:
                return 'recoveries';
            }
          })(t),
          r = t > 5 ? zt[n % zt.length] : Kt[n % Kt.length],
          i = 4 === t || 5 === t ? 'column' : void 0;
        return {
          chartBuilder: Io(
            (function(e) {
              switch (e) {
                case 0:
                  return '😷 (Active)';
                case 1:
                  return '✔ (Confirmed)';
                case 2:
                  return '☠ (Deaths)';
                case 3:
                  return '😊 (Recoveries)';
                case 4:
                  return '😷 (New Active)';
                case 5:
                  return '☠ (New Deaths)';
                case 6:
                  return '🤔 (Estimate)';
                case 7:
                  return '😷 (SEIR Active)';
                case 8:
                  return '☠ (SEIR Deaths)';
                case 9:
                  return '😊 (SEIR Recoveries)';
                default:
                  return '😊 (Recovery)';
              }
            })(t) +
              ' ' +
              e.formatName()
          )
            .colour(r)
            .lineColour(r)
            .type(i),
          field: o,
        };
      }
      createSelectTimeVsCountsCountryMapper(e) {
        let t = 0;
        const n =
          0 === e.timeVsCounts.mode ? -1 : 1 === e.timeVsCounts.mode ? 1 : 100;
        return o => {
          const r = this.createSeirPoints(e, o);
          return e.timeVsCounts.dataSetIndexes.map(i => {
            const a = (function(e, t) {
                return 7 === t
                  ? e.active
                  : 8 === t
                  ? e.deaths
                  : 9 === t
                  ? e.recoveries
                  : void 0;
              })(r, i),
              {
                chartBuilder: s,
                field: u,
              } = this.createSelectTimeVsCountsChart(o, i, t++);
            if (a) {
              const e = s.collect();
              return (e.points = a), e;
            }
            if (n < 0)
              o.forEachDay((t, n) => {
                s.addPoint(
                  n,
                  Ho(e.timeVsCounts.usePerCapita, t[u], o.population())
                );
              });
            else {
              let t = 0;
              o.forEachDayWhere(
                e => e.confirmed > n,
                n => {
                  s.addPoint(
                    t++,
                    Ho(e.timeVsCounts.usePerCapita, n[u], o.population())
                  );
                }
              );
            }
            return s.collect();
          });
        };
      }
      selectTimeVsCounts(e) {
        return this.tsc
          .select(e.countries.selected)
          .map(this.createSelectTimeVsCountsCountryMapper(e))
          .reduce(Uo, []);
      }
      select(e) {
        return '/' === e.router.path
          ? this.selectTimeVsCounts(e)
          : this.selectConfirmedVsRecent(e.countries.selected);
      }
    }
    function Lo(e, t) {
      const n = Io(e.formatName()).colour(Kt[t % Kt.length]);
      for (let t = e.counts().length - 1; t > 7; t -= 1) {
        const o = e.counts()[t],
          r = e.counts()[t - 7] || _o(),
          i = o.confirmed - r.confirmed || 1;
        o.confirmed < 100 || n.addPoint(o.confirmed, i, Mo(e, t));
      }
      return n.collect();
    }
    function Uo(e, t) {
      return [...e, ...t];
    }
    function Ho(e, t, n) {
      return !1 === e ? t : n ? (t / n) * 100 : 0;
    }
    const Vo = [
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
    ];
    function Go(e) {
      return Promise.all([
        Promise.all(Vo.map(e => fetch(e)))
          .then(Wo)
          .then(Ko)
          .then(Ao.from),
        fetch(
          'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv'
        )
          .then(zo)
          .then(Qn.create)
          .then(Ao.from),
      ])
        .then(Ao.merge)
        .then(e => e.interpolateRecoveriesActiveCasesAndNewProps())
        .then(e => e.sumRegions())
        .then(e => e.sumWorld())
        .then(e => e.freeze())
        .then($o);
    }
    function Ko(e) {
      return e.map(e => Po.create(e));
    }
    function zo(e) {
      return e.text();
    }
    function Wo(e) {
      return Promise.all(e.map(zo));
    }
    function $o(e) {
      const t = e.countries(),
        n = Oo.create();
      return (
        e.forEach(e => n.push(e)),
        { countries: t, dictionary: e, timeSeries: n }
      );
    }
    const Jo = mn({
        dataSetIndexes: [],
        isConfigOpen: !1,
        mode: 2,
        scaleType: 0,
        showSeirState: !1,
        startDate: '2020-01-22',
        usePerCapita: !1,
      }),
      qo = {
        currentSeries: function(e) {
          return jo.create(e.timeSeriesCollection).select(e);
        },
        dataSetIndexes: e => e.timeVsCounts.dataSetIndexes,
        isConfigOpen: e => e.timeVsCounts.isConfigOpen,
        mode: e => e.timeVsCounts.mode,
        scaleType: e => e.timeVsCounts.scaleType,
        showSeirState: e => e.timeVsCounts.showSeirState,
        startDate: e => e.timeVsCounts.startDate,
        usePerCapita: e => e.timeVsCounts.usePerCapita,
      },
      Yo = mn({
        toggledConfig: 'time_vs_counts/toggled_config',
        toggledPerCapita: 'time_vs_counts/toggled_per_capita',
        toggledSeirControls: 'time_vs_counts/toggled_seir_controls',
        updatedDataSetIndexes: 'time_vs_counts/updated_data_set_indexes',
        updatedMode: 'time_vs_counts/updated_mode',
        updatedScaleType: 'time_vs_counts/updated_scale_type',
        updatedStartDate: 'time_vs_counts/updated_start_date',
      }),
      Zo = {
        selectedDataSets: e => ({
          type: Yo.updatedDataSetIndexes,
          payload: e.map(e => parseInt(e + '', 10)),
        }),
        selectedStartDate: e => ({ type: Yo.updatedStartDate, payload: e }),
        selectedMode: e => ({
          type: Yo.updatedMode,
          payload: parseInt(e + '', 10),
        }),
        selectedScaleType: e => ({
          type: Yo.updatedScaleType,
          payload: parseInt(e + '', 10),
        }),
        toggledConfig: () => ({ type: Yo.toggledConfig }),
        toggledPerCapita: () => ({ type: Yo.toggledPerCapita }),
        toggledSeirControls: () => ({ type: Yo.toggledSeirControls }),
      },
      Qo = {
        [Yo.toggledConfig]: Bn(Jo, 'isConfigOpen'),
        [Yo.toggledPerCapita]: Bn(Jo, 'usePerCapita'),
        [Yo.toggledSeirControls]: Bn(Jo, 'showSeirState'),
        [Yo.updatedDataSetIndexes]: En(Jo, 'dataSetIndexes'),
        [Yo.updatedMode]: En(Jo, 'mode'),
        [Yo.updatedScaleType]: En(Jo, 'scaleType'),
        [Yo.updatedStartDate]: En(Jo, 'startDate'),
      },
      Xo = e => Rn(Jo, Qo, e),
      er = (e, t = 1) => {
        const n = parseInt(e + '', 10);
        return n > 0 ? n : t;
      },
      tr = (e, t = 0.1) => {
        const n = parseFloat(e + '');
        return n > 0 ? n : t;
      },
      nr = mn({
        daysToProject: { defaultValue: 18, filter: er },
        r0: { defaultValue: Bo.r0, filter: tr },
        incubationPeriod: { defaultValue: Bo.incubationPeriod, filter: er },
        durationOfInfection: {
          defaultValue: Bo.durationOfInfection,
          filter: er,
        },
        recoveryTimeForMildCases: {
          defaultValue: Bo.recoveryTimeForMildCases,
          filter: er,
        },
        timeFromIncubationToHospital: {
          defaultValue: Bo.timeFromIncubationToDeath,
          filter: er,
        },
        lengthOfSevereHospitalStay: {
          defaultValue: Bo.lengthOfSevereHospitalStay,
          filter: er,
        },
        timeFromIncubationToDeath: {
          defaultValue: Bo.timeFromIncubationToDeath,
          filter: er,
        },
        hospitalizationRate: {
          defaultValue: Bo.hospitalizationRate,
          filter: tr,
        },
        fatalityRate: { defaultValue: Bo.fatalityRate, filter: tr },
      }),
      or = e => 'updated' + an(e, e => e.toUpperCase()),
      rr = mn(wn(nr, (e, t, n) => ((e[n] = t), e), {})),
      ir = wn(rr, (e, t, n) => ((e[n] = e => e[n]), e), {}),
      ar = Object.assign({}, ir),
      sr = wn(
        rr,
        (e, t, n) => {
          var o;
          return (
            (e[or(n)] = `seir/updated_${((o = n),
            o
              .replace(/(?:^|\.?)([A-Z])/g, (e, t) => '_' + t.toLowerCase())
              .replace(/^_/, ''))}`),
            e
          );
        },
        {}
      ),
      ur = mn(Object.assign(Object.assign({}, sr), { reset: 'seir/reset' })),
      cr = wn(
        nr,
        (e, t, n) => {
          const o = or(n);
          return (
            (e[o] = (e, t) => ({ type: ur[o], payload: nr[n].filter(e, t) })), e
          );
        },
        {}
      ),
      lr = Object.assign(Object.assign({}, cr), {
        reset: () => ({ type: ur.reset }),
      }),
      pr = wn(rr, (e, t, n) => ((e[ur[or(n)]] = En(rr, n)), e), {}),
      dr = Object.assign(Object.assign({}, pr), {
        [ur.reset]: (e = rr, t) => rr,
      }),
      hr = e => Rn(rr, dr, e);
    function yr({
      classes: e,
      listenKeyUp: t,
      onChange: n,
      placeholder: o,
      useDecimals: r,
      value: i,
    }) {
      const a = r ? e => parseFloat(e + '') : e => parseInt(e + '', 10);
      r || (i = parseInt(i + '', 10));
      const s = e => n(a(e.target.value));
      return f('input', {
        className: e ? e.join(' ') : '',
        onChange: s,
        onKeyUp: t ? s : Cn,
        pattern: r ? '[0-9]*(.[0-9]*)' : '[0-9]*',
        placeholder: o || '',
        type: 'text',
        value: i,
      });
    }
    function fr(e) {
      const { seirInput: t } = e.strings,
        n = e => (e < 0 ? 0 : e),
        o = e => (e < 0 ? 0 : e > 1 ? 1 : e);
      return f(
        'table',
        null,
        [
          [
            {
              prop: 'r0',
              filter: e => (e >= 0 && e < 30 ? e : 2.2),
              unit: '',
              decimals: !0,
            },
            {
              prop: 'incubationPeriod',
              filter: n,
              unit: t.unitDays,
              decimals: !1,
            },
            { prop: 'fatalityRate', filter: o, unit: '%', decimals: !0 },
            {
              prop: 'lengthOfSevereHospitalStay',
              filter: n,
              unit: t.unitDays,
              decimals: !1,
            },
            { prop: 'hospitalizationRate', filter: o, unit: '%', decimals: !0 },
          ],
          [
            { prop: 'daysToProject', filter: n, unit: '', decimals: !1 },
            {
              prop: 'durationOfInfection',
              filter: n,
              unit: t.unitDays,
              decimals: !1,
            },
            {
              prop: 'timeFromIncubationToDeath',
              filter: n,
              unit: t.unitDays,
              decimals: !1,
            },
            {
              prop: 'recoveryTimeForMildCases',
              filter: n,
              unit: t.unitDays,
              decimals: !1,
            },
            {
              prop: 'timeFromIncubationToHospital',
              filter: n,
              unit: t.unitDays,
              decimals: !1,
            },
          ],
        ].map(n =>
          f(
            'tbody',
            null,
            [void 0, void 0].map((o, r) =>
              f(
                'tr',
                null,
                n.map(n =>
                  '' === n.prop
                    ? f('td', null)
                    : 0 === r
                    ? f('th', null, t[n.prop])
                    : f(
                        'td',
                        { style: 'text-align: center' },
                        f(yr, {
                          classes: fn.input.concat(['w-2-em']),
                          value: e[n.prop],
                          onChange: t => e[or(n.prop)](n.filter(t)),
                          placeholder: t[n.prop],
                          useDecimals: n.decimals,
                        }),
                        ' ',
                        n.unit
                      )
                )
              )
            )
          )
        )
      );
    }
    const mr = Vt(e => wn(ar, (t, n, o) => ((t[o] = n(e)), t), lr))(
      class extends b {
        render() {
          return f(fr, Object.assign({}, this.props));
        }
      }
    );
    const gr = Vt(
      e => ({
        countries: Wn.countries(e),
        countryFilter: Wn.filter(e),
        countryKeys: Wn.selected(e),
        currentSeries: qo.currentSeries(e),
        dataSetIndexes: qo.dataSetIndexes(e),
        isConfigOpen: qo.isConfigOpen(e),
        mode: qo.mode(e),
        scaleType: qo.scaleType(e),
        showStates: Wn.showStates(e),
        showSeirState: qo.showSeirState(e),
        usePerCapita: qo.usePerCapita(e),
        ymdStartDate: qo.startDate(e),
        strings: e.strings,
      }),
      {
        clearCountries: Jn.clickedClear,
        selectedCountry: Jn.selected,
        selectedDataSets: Zo.selectedDataSets,
        selectedStartDate: Zo.selectedStartDate,
        selectedMode: Zo.selectedMode,
        selectedScaleType: Zo.selectedScaleType,
        toggledConfig: Zo.toggledConfig,
        toggledPerCapita: Zo.toggledPerCapita,
        toggledShowSeirState: Zo.toggledSeirControls,
        toggledShowStates: Jn.toggledShowStates,
        updatedCountryFilter: Jn.updatedFilter,
      }
    )(
      class extends b {
        constructor() {
          super(), (this.state = {});
        }
        useDays() {
          return 0 !== this.props.mode;
        }
        render() {
          const e =
              !1 === this.props.isConfigOpen &&
              0 === this.props.countryKeys.length
                ? ['green']
                : [],
            t = {
              xAxis_label_text: this.useDays() ? 'Day' : void 0,
              xAxis: {
                scale: { type: this.useDays() ? 'auto' : 'time' },
                customTicks: [
                  { value: { month: '*' }, label_text: '%min' },
                  { value: { week: '*' }, label_text: '%min' },
                ],
              },
              yAxis_label_text: this.props.usePerCapita
                ? this.props.strings.timeVsCounts.percent
                : this.props.strings.timeVsCounts.people,
              yAxis: {
                scale: {
                  type: 0 === this.props.scaleType ? 'auto' : 'logarithmic',
                },
              },
              legend: { template: '%icon %name' },
              series: this.props.currentSeries,
            };
          return f(
            'section',
            { className: `${ln} ${dn}` },
            f(sn, {
              flexSize: this.props.isConfigOpen
                ? 'flex-item-60'
                : 'flex-item-95',
              options: t,
              strings: this.props.strings,
            }),
            f(
              'section',
              { className: pn },
              f(In, {
                classes: fn.button.concat(e),
                labelTrue: this.props.strings.timeVsCounts.enlarge,
                labelFalse: this.props.strings.timeVsCounts.configure,
                onClick: this.props.toggledConfig,
                state: this.props.isConfigOpen,
              }),
              f(xn, { config: this.props.menu })
            ),
            this.props.isConfigOpen
              ? this.props.showSeirState
                ? f(
                    'div',
                    { className: pn },
                    f(
                      'div',
                      { className: dn },
                      f(Tn, {
                        classes:
                          0 === this.props.countryKeys.length
                            ? fn.button.concat(['green'])
                            : fn.button,
                        label: this.props.strings.timeVsCounts.configureChart,
                        onClick: this.props.toggledShowSeirState,
                      }),
                      f(Tn, {
                        classes: fn.button,
                        label: this.props.strings.timeVsCounts.resetSeir,
                        onClick: lr.reset,
                      })
                    ),
                    f(mr, null)
                  )
                : f(Mn, {
                    clearCountries: this.props.clearCountries,
                    countries: this.props.countries,
                    countryFilter: this.props.countryFilter,
                    countryKeys: this.props.countryKeys,
                    currentSeries: this.props.currentSeries,
                    dataSetIndexes: this.props.dataSetIndexes,
                    mode: this.props.mode,
                    reload: this.props.reload,
                    scaleType: this.props.scaleType,
                    selectedCountry: this.props.selectedCountry,
                    selectedDataSets: this.props.selectedDataSets,
                    selectedDate: this.props.selectedStartDate,
                    selectedMode: this.props.selectedMode,
                    selectedScaleType: this.props.selectedScaleType,
                    showStates: this.props.showStates,
                    strings: this.props.strings,
                    toggledPerCapita: this.props.toggledPerCapita,
                    toggledShowSeirState: this.props.toggledShowSeirState,
                    toggledShowStates: this.props.toggledShowStates,
                    updatedCountryFilter: this.props.updatedCountryFilter,
                    usePerCapita: this.props.usePerCapita,
                    ymdStartDate: this.props.ymdStartDate,
                  })
              : ''
          );
        }
      }
    );
    function br(e) {
      if (window.localStorage) {
        const t = window.localStorage.getItem('state');
        if (t)
          try {
            const n = JSON.parse(t);
            return n
              ? !1 === wr(vr, n)
                ? (Qt(e.state.wipingOld),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, n), {
                    currentSeries: [],
                    dataPromise: Go(),
                    data: Oo.create(),
                  })
              : null;
          } catch (t) {
            return (
              Qt(e.state.parseFail),
              window.localStorage.setItem('state', ''),
              null
            );
          }
      }
      return null;
    }
    const vr = [
        { prop: 'countries', is: Array.isArray },
        {
          prop: 'timeVsCountsState',
          is: function(e) {
            return wr(Sr, e);
          },
        },
        { prop: 'countryKeys', is: Array.isArray },
        {
          prop: 'tableState',
          is: function(e) {
            return wr(Cr, e);
          },
        },
        {
          prop: 'confirmedVsRecentState',
          is: function(e) {
            if (!e) return !1;
            if (!1 === Sn(e.countryFilter)) return !1;
            if (!1 === gn(e.isConfigOpen)) return !1;
            if (!1 === gn(e.showStates)) return !1;
            return !0;
          },
        },
        {
          prop: 'seirState',
          is: function(e) {
            return wr(_r, e);
          },
        },
      ],
      Sr = [
        { prop: 'isConfigOpen', is: gn },
        { prop: 'byMetric', is: bn },
        { prop: 'countryFilter', is: Sn },
        { prop: 'dataSetIndexes', is: Array.isArray },
        { prop: 'mode', is: bn },
        { prop: 'showStates', is: gn },
        { prop: 'showSeirState', is: gn },
        { prop: 'startDate', is: Sn },
      ],
      Cr = [
        { prop: 'columns', is: Array.isArray },
        { prop: 'isConfigOpen', is: gn },
        { prop: 'showAll', is: gn },
        { prop: 'sortByActive', is: gn },
        { prop: 'sortByActivePercent', is: gn },
        { prop: 'sortByConfirmed', is: gn },
        { prop: 'sortByConfirmedPercent', is: gn },
        { prop: 'sortByDeaths', is: gn },
        { prop: 'sortByDeathsPercent', is: gn },
        { prop: 'sortByRecoveries', is: gn },
        { prop: 'sortByRecoveriesPercent', is: gn },
        { prop: 'sortByPeakActive', is: gn },
        { prop: 'sortByPeakActivePercent', is: gn },
        { prop: 'sortByPopulation', is: gn },
        { prop: 'sortByPopulationDensity', is: gn },
      ],
      _r = [
        { prop: 'daysToProject', is: bn },
        { prop: 'r0', is: bn },
        { prop: 'incubationPeriod', is: bn },
        { prop: 'durationOfInfection', is: bn },
        { prop: 'fatalityRate', is: bn },
        { prop: 'timeFromIncubationToDeath', is: bn },
        { prop: 'lengthOfSevereHospitalStay', is: bn },
        { prop: 'recoveryTimeForMildCases', is: bn },
        { prop: 'hospitalizationRate', is: bn },
        { prop: 'timeFromIncubationToHospital', is: bn },
      ];
    function wr(e, t) {
      return !!t && e.reduce((e, n) => (!1 === e ? e : n.is(t[n.prop])), !0);
    }
    const Pr = mn({
        columns: [1, 3, 5, 7, 9],
        isConfigOpen: !1,
        showAll: !0,
        sortField: { prop: 'sortByCountry', asc: !0 },
      }),
      Ar = e => e.dataTable.sortField,
      kr = e => e.timeSeriesCollection,
      Tr = {
        columns: e => e.dataTable.columns,
        isConfigOpen: e => e.dataTable.isConfigOpen,
        list: Un(Ar, kr, (e, t) => {
          const n = Oo.fromCollection(t);
          return n[e.prop](e.asc), n;
        }),
        showAll: e => e.dataTable.showAll,
        sortField: Ar,
        timeSeriesCollection: kr,
      },
      Nr = mn({
        clickedSortField: 'data_table/clicked_sort_field',
        toggledConfig: 'data_table/toggled_config',
        toggledShowAll: 'data_table/toggled_show_all',
        selectedColumn: 'data_table/selected_column',
      }),
      Or = {
        clickedSortField: e => ({ type: Nr.clickedSortField, payload: e }),
        toggledConfig: () => ({ type: Nr.toggledConfig }),
        toggledShowAll: () => ({ type: Nr.toggledShowAll }),
        selectedColumn: e => ({ type: Nr.selectedColumn, payload: e }),
      },
      Dr = {
        [Nr.clickedSortField]: (e = Pr, t) =>
          e.sortField.prop === t.payload
            ? Object.assign(Object.assign({}, e), {
                sortField: { prop: e.sortField.prop, asc: !e.sortField.asc },
              })
            : Object.assign(Object.assign({}, e), {
                sortField: { prop: t.payload, asc: !0 },
              }),
        [Nr.toggledConfig]: Bn(Pr, 'isConfigOpen'),
        [Nr.toggledShowAll]: Bn(Pr, 'showAll'),
        [Nr.selectedColumn]: (e = Pr, t) => {
          if (bn(t.payload)) {
            const n = e.columns.indexOf(t.payload);
            return -1 === n
              ? Object.assign(Object.assign({}, e), {
                  columns: [...e.columns, t.payload],
                })
              : Object.assign(Object.assign({}, e), {
                  columns: [
                    ...e.columns.slice(0, n),
                    ...e.columns.slice(n + 1),
                  ],
                });
          }
          return En(e, 'columns')(e, t);
        },
      },
      Mr = [un, hn, cn, yn].join(' '),
      Ir = [hn, cn, yn].join(' ');
    const xr = Vt(
      e => ({
        columns: Tr.columns(e),
        isConfigOpen: Tr.isConfigOpen(e),
        list: Tr.list(e),
        selectedCountries: Wn.selected(e),
        showAll: Tr.showAll(e),
        strings: e.strings,
      }),
      {
        clickedSortField: Or.clickedSortField,
        selectedColumn: Or.selectedColumn,
        selectedCountry: Jn.selected,
        toggledConfig: Or.toggledConfig,
        toggledShowAll: Or.toggledShowAll,
      }
    )(
      class extends b {
        constructor() {
          super(), (this.state = {});
        }
        formatNumber(e) {
          return e.toLocaleString();
        }
        formatDecimal(e, t = 2) {
          return e.toFixed(t);
        }
        formatPercent(e, t = 2) {
          return this.formatDecimal(e, t) + '%';
        }
        render() {
          const e = [
              {
                label: this.props.strings.learningTable.titles.region,
                sort: 'sortByCountry',
                value: e => e.formatName(),
              },
            ].concat(
              [
                {
                  label: this.props.strings.learningTable.titles.active,
                  sort: 'sortByActive',
                  value: e => e.lastActive().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles.activePercent,
                  sort: 'sortByActivePercent',
                  value: e =>
                    e
                      .lastActivePercent()
                      .toFixed(3)
                      .toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles.confirmed,
                  sort: 'sortByConfirmed',
                  value: e => e.lastConfirmed().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles
                    .confirmedPercent,
                  sort: 'sortByConfirmedPercent',
                  value: e =>
                    e
                      .lastConfirmedPercent()
                      .toFixed(3)
                      .toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles.deaths,
                  sort: 'sortByDeaths',
                  value: e => e.lastDeaths().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles.deathsPercent,
                  sort: 'sortByDeathsPercent',
                  value: e =>
                    e
                      .lastDeathsPercent()
                      .toFixed(6)
                      .toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles.recoveries,
                  sort: 'sortByRecoveries',
                  value: e => e.lastRecoveries().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles
                    .recoveriesPercent,
                  sort: 'sortByRecoveriesPercent',
                  value: e =>
                    e
                      .lastRecoveriesPercent()
                      .toFixed(3)
                      .toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles.mortality,
                  sort: 'sortByMortality',
                  value: e => e.lastMortality().toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles.newConfirmed,
                  sort: 'sortByNewConfirmed',
                  value: e => e.lastNewConfirmed().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles.newDeaths,
                  sort: 'sortByNewDeaths',
                  value: e => e.lastNewDeaths().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles.peakActive,
                  sort: 'sortByPeakActive',
                  value: e => e.peakActive().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles
                    .peakActivePercent,
                  sort: 'sortByPeakActivePercent',
                  value: e =>
                    e
                      .peakActivePercent()
                      .toFixed(3)
                      .toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles.peakMortality,
                  sort: 'sortByPeakMortality',
                  value: e => e.peakMortality().toLocaleString() + '%',
                },
                {
                  label: this.props.strings.learningTable.titles
                    .peakNewConfirmed,
                  sort: 'sortByPeakNewConfirmed',
                  value: e => e.peakNewConfirmed().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles.peakNewDeaths,
                  sort: 'sortByPeakNewDeaths',
                  value: e => e.peakNewDeaths().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles.population,
                  sort: 'sortByPopulation',
                  value: e => e.population().toLocaleString(),
                },
                {
                  label: this.props.strings.learningTable.titles
                    .populationDensity,
                  sort: 'sortByPopulationDensity',
                  value: e => e.populationDensity().toLocaleString(),
                },
              ].sort((e, t) =>
                e.label < t.label ? -1 : e.label > t.label ? 1 : 0
              )
            ),
            t =
              window.document.body.clientHeight *
              (this.props.isConfigOpen ? 0.6 : 0.82),
            n = `width: ${100 / (this.props.columns.length || 1)}%;`;
          return f(
            'section',
            { className: `${ln} ${dn}` },
            f(
              'section',
              {
                className: this.props.isConfigOpen
                  ? 'flex-item-60'
                  : 'flex-item-95',
              },
              f(
                'table',
                {
                  style: `height: ${
                    this.props.isConfigOpen ? 83 : 90
                  }%; width: 100%;`,
                  className: 'border-collapse',
                },
                f(
                  'thead',
                  { className: cn },
                  f(
                    'tr',
                    { className: pn },
                    e.map((e, t) =>
                      0 === t || this.props.columns.indexOf(t) > -1
                        ? f(
                            'th',
                            {
                              className: Mr,
                              style: n,
                              onClick: () =>
                                this.props.clickedSortField(e.sort),
                            },
                            e.label
                          )
                        : ''
                    )
                  )
                ),
                f(
                  'tbody',
                  {
                    className: cn,
                    style: `overflow: auto; max-height: ${t}px;`,
                  },
                  this.props.list.map((t, o) => {
                    if (t.counts().length < 1) return '';
                    const r = o % 2 == 0 ? 'row-even' : 'row-odd';
                    return f(
                      'tr',
                      {
                        className: [
                          this.props.selectedCountries.indexOf(t.key()) > -1
                            ? 'row-highlight ' + r
                            : r,
                          pn,
                        ].join(' '),
                        onClick: () => this.props.selectedCountry(t.key()),
                      },
                      e.map((e, o) =>
                        0 === o || this.props.columns.indexOf(o) > -1
                          ? f('td', { className: Ir, style: n }, e.value(t))
                          : ''
                      )
                    );
                  })
                )
              )
            ),
            f(
              'section',
              null,
              f(
                'section',
                { className: pn },
                f(In, {
                  classes: fn.button,
                  labelTrue: this.props.strings.learningTable.enlarge,
                  labelFalse: this.props.strings.learningTable.configure,
                  onClick: this.props.toggledConfig,
                  state: this.props.isConfigOpen,
                }),
                f(xn, { config: this.props.menu })
              ),
              this.props.isConfigOpen
                ? f(
                    'section',
                    { className: pn },
                    f(An, {
                      classes: fn.selectBox,
                      onChange: Cn,
                      onClick: e =>
                        this.props.selectedColumn(parseInt(e + '', 10) + 1),
                      options: e.map(e => e.label).slice(1),
                      selected: this.props.columns.map(e => e - 1),
                    }),
                    f(Pn, {
                      classes: fn.selectBox,
                      onChange: this.props.toggledShowAll,
                      options: [
                        this.props.strings.learningTable.showAll,
                        this.props.strings.learningTable.showOnlySelected,
                      ],
                      selected: this.props.showAll ? 0 : 1,
                    })
                  )
                : ''
            )
          );
        }
      }
    );
    function Rr({ strings: e }) {
      return f(
        'header',
        { class: 'small-text' },
        e.header.title,
        ' ',
        f(
          'a',
          {
            href: 'https://github.com/CSSEGISandData/COVID-19',
            target: '_blank',
            title: e.header.jhuGitHubTitle,
          },
          e.header.jhuSourceDataLink
        ),
        ' ',
        e.header.explorer,
        ', ',
        e.header.usData,
        ' ',
        f(
          'a',
          {
            href: 'https://github.com/nytimes/covid-19-data',
            target: '_blank',
            title: e.header.usDataTitle,
          },
          e.header.usDataLink
        ),
        '  (',
        f(
          'a',
          {
            href: 'https://github.com/bennett000/covid-19',
            target: '_blank',
            title: e.header.sourceCodeTitle,
          },
          e.header.sourceCodeLink
        ),
        ' | ',
        f(
          'a',
          {
            href: 'https://github.com/bennett000/covid-19/issues',
            target: '_blank',
            title: e.header.feedbackTitle,
          },
          e.header.feedbackLink
        ),
        ')'
      );
    }
    const Er = mn({ isConfigOpen: !1 }),
      Br = e => jo.create(e.timeSeriesCollection).select(e),
      Fr = e => e.confirmedVsRecent.isConfigOpen,
      jr = mn({ toggledConfig: 'confirmed_vs_recent/toggled_config' }),
      Lr = { toggledConfig: () => ({ type: jr.toggledConfig }) },
      Ur = { [jr.toggledConfig]: Bn(Er, 'isConfigOpen') },
      Hr = e => Rn(Er, Ur, e);
    const Vr = Vt(
      e => ({
        countries: Wn.list(e),
        countryFilter: Wn.filter(e),
        countryKeys: Wn.selected(e),
        currentSeries: Br(e),
        isConfigOpen: Fr(e),
        showStates: Wn.showStates(e),
        strings: e.strings,
      }),
      {
        clearCountries: Jn.clickedClear,
        selectedCountry: Jn.selected,
        toggledConfig: Lr.toggledConfig,
        toggledShowStates: Jn.toggledShowStates,
        updatedFilter: Jn.updatedFilter,
      }
    )(
      class extends b {
        constructor() {
          super(), (this.state = {});
        }
        render() {
          const e =
            !1 === this.props.isConfigOpen &&
            0 === this.props.countryKeys.length
              ? ['green']
              : [];
          return f(
            'section',
            { className: `${ln} ${dn}` },
            f(sn, {
              flexSize: this.props.isConfigOpen
                ? 'flex-item-60'
                : 'flex-item-95',
              options: {
                xAxis: { scale: { type: 'logarithmic' } },
                xAxis_label_text: this.props.strings.confirmedVsRecent
                  .confirmedCases,
                yAxis: { scale: { type: 'logarithmic' } },
                yAxis_label_text: this.props.strings.confirmedVsRecent
                  .recentCases,
                series: this.props.currentSeries,
                legend: { template: '%icon %name' },
              },
              strings: this.props.strings,
            }),
            f(
              'section',
              { className: pn },
              f(In, {
                classes: fn.button.concat(e),
                labelTrue: this.props.strings.confirmedVsRecent.enlarge,
                labelFalse: this.props.strings.confirmedVsRecent.configure,
                onClick: this.props.toggledConfig,
                state: this.props.isConfigOpen,
              }),
              f(xn, { config: this.props.menu })
            ),
            this.props.isConfigOpen
              ? f(
                  'section',
                  { className: `${pn}` },
                  f(Dn, {
                    classes:
                      0 === this.props.countryKeys.length ? ['highlight'] : [],
                    inputButtonClasses: fn.button,
                    inputSelectClasses: fn.selectBox,
                    inputStringClasses: fn.input,
                    filter: this.props.countryFilter,
                    onUpdateFilter: rn(this.props.updatedFilter, 100),
                    onChange: this.props.selectedCountry,
                    onClear: this.props.clearCountries,
                    onDeselect: this.props.selectedCountry,
                    options: this.props.countries,
                    selected: this.props.countryKeys,
                  }),
                  f(Pn, {
                    classes: fn.selectBox,
                    onChange: this.props.toggledShowStates,
                    options: this.props.strings.states,
                    selected: this.props.showStates ? 1 : 0,
                  })
                )
              : ''
          );
        }
      }
    );
    class Gr extends b {
      constructor() {
        super();
      }
      componentDidMount() {
        (this.base.id = 'chartMapDiv'),
          this.chart ||
            (this.chart = JSC.Chart('chartMapDiv', this.getChartOptions()));
      }
      componentWillReceiveProps(e) {
        this.chart && this.chart.options(this.getChartOptions(e));
      }
      getChartOptions(e = this.props) {
        return {
          title_label_text: e.title || '',
          type: 'map',
          defaultPoint: {
            attributes: { toolTip: '<b>%name</b>' },
            tooltip: '%toolTip',
            z: 0,
          },
          palette: { pointValue: e => e.options('z'), ranges: e.ranges },
          series: e.series,
        };
      }
      render() {
        return f('div', { className: ln });
      }
    }
    const Kr = new Date('2020-01-22').getTime(),
      zr = Math.floor((Date.now() - 864e5 - Kr) / 1e3 / 60 / 60 / 24),
      Wr = wn(en(), (e, t, n) => ((e[t] = n), e), []),
      $r = mn({
        '': !0,
        AG: !0,
        BB: !0,
        BH: !0,
        'CN.HK': 'HK',
        'CN.MO': 'MO',
        CV: !0,
        DM: !0,
        GD: !0,
        KN: !0,
        LC: !0,
        MT: !0,
        MU: !0,
        MV: !0,
        PO: !0,
        TL: 'TP',
        SC: !0,
        SG: !0,
        'US.GU': !0,
        'US.PR': !0,
        'US.VI': !0,
        VC: !0,
      }),
      Jr = ['AU', 'CA', 'CN', 'US'],
      qr = mn({ dataSetIndex: 0, playRecord: -1, map: 'world', title: '' }),
      Yr = e => e.geography.dataSetIndex,
      Zr = e => e.geography.map,
      Qr = e => e.geography.playRecord,
      Xr = Un(
        e => e.strings,
        e => e.timeSeriesCollection,
        Yr,
        Qr,
        Zr,
        function(e, t, n, o, r) {
          if ('world' !== r) return { ranges: [], series: [] };
          let i = 0;
          const a = [];
          return (
            t.forEach(t => {
              const r = t.countryCode();
              if (r === e.countries.world) return null;
              if ($r[r]) return null;
              if (t.state() && t.state() !== e.countries.total) return null;
              if (!t.population()) return null;
              const s = ui(n, t, o);
              if (s < 1) return null;
              s > i && (i = s),
                a.push({
                  attributes: { toolTip: xo(t, n, t.counts().length - 1) },
                  map: 'WORLD.' + r.toLowerCase(),
                  z: s,
                });
            }),
            {
              ranges: si(n),
              series: [{ defaultPoint_events_click: null, map: r, points: a }],
            }
          );
        }
      ),
      ei = Un(
        e => e.strings,
        e => e.timeSeriesCollection,
        Yr,
        Qr,
        Zr,
        function(e, t, n, o, r) {
          if ('world' === r || -1 === Jr.indexOf(r.toUpperCase()))
            return { ranges: [], series: [] };
          let i = 0;
          const a = [];
          return (
            t.forEach(t => {
              if (t.countryCode().toLowerCase() !== r.toLowerCase())
                return null;
              if (t.state() === e.countries.total) return null;
              if (!fo[t.country()]) return null;
              const s = t.stateCode();
              if (!s) return null;
              if ($r[t.countryCode() + '.' + s]) return null;
              const u = ui(n, t, o);
              if (u < 1) return null;
              u > i && (i = u),
                a.push({
                  attributes: { toolTip: xo(t, n, t.counts().length - 1) },
                  map: r + '.' + s,
                  z: u,
                });
            }),
            {
              ranges: si(n),
              series: [{ defaultPoint_events_click: null, map: r, points: a }],
            }
          );
        }
      ),
      ti = Un(
        e => e.strings,
        e => e.timeSeriesCollection,
        Yr,
        Qr,
        Zr,
        function(e, t, n, o, r) {
          if ('world' === r || Jr.indexOf(r.toUpperCase()) > -1)
            return { ranges: [], series: [] };
          let i = 0;
          const a = [];
          return (
            t.forEach(t => {
              const s = po[t.country()];
              if (!s) return null;
              if (
                s !== r &&
                !(s.indexOf('America') > -1 && r.indexOf('America') > -1)
              )
                return null;
              if (t.state() && t.state() !== e.countries.total) return null;
              const u = t.countryCode();
              if ($r[u]) return null;
              const c = ui(n, t, o);
              if (c < 1) return null;
              c > i && (i = c),
                a.push({
                  attributes: { toolTip: xo(t, n, t.counts().length - 1) },
                  map: u.toLowerCase(),
                  z: c,
                });
            }),
            {
              ranges: si(n),
              series: [{ defaultPoint_events_click: null, map: r, points: a }],
            }
          );
        }
      ),
      ni = {
        dataSetIndex: Yr,
        map: Zr,
        playRecord: Qr,
        series: Un(Zr, Xr, ei, ti, (e, t, n, o) =>
          'world' === e ? t : Jr.indexOf(e.toUpperCase()) > -1 ? n : o
        ),
        stateSeries: ei,
        title: e => e.geography.title,
        isPlaying: Un(Qr, e => e > -1),
      },
      oi = mn({
        incrementedRecord: 'geography/incremented_record',
        updatedDataSet: 'geography/updated_data_set',
        resetRecord: 'geography/reset_record',
        selectedMap: 'geography/selected_map',
      }),
      ri = {
        incrementedRecord: () => ({ type: oi.incrementedRecord }),
        updatedDataSet: e => ({
          type: oi.updatedDataSet,
          payload: parseInt(e + '', 10),
        }),
        resetRecord: () => ({ type: oi.resetRecord }),
        selectedMap: e => ({ type: oi.selectedMap, payload: e }),
        selectedWorldMap: () => ri.selectedMap('world'),
      },
      ii = {
        [oi.selectedMap]: En(qr, 'map'),
        [oi.updatedDataSet]: En(qr, 'dataSetIndex'),
        [oi.resetRecord]: e => (t = qr, n) =>
          -1 === t.playRecord && '' === t.title
            ? t
            : Object.assign(Object.assign({}, t), {
                playRecord: -1,
                title: ci(e.strings, t.dataSetIndex),
              }),
        [oi.incrementedRecord]: e => (t = qr, n) => {
          const o = t.playRecord + 1;
          return o >= zr
            ? Object.assign(Object.assign({}, t), {
                playRecord: -1,
                title: ci(e.strings, t.dataSetIndex),
              })
            : Object.assign(Object.assign({}, t), {
                playRecord: o,
                title: ci(e.strings, t.dataSetIndex, o),
              });
        },
      },
      ai = e => Rn(qr, ii, e);
    function si(e) {
      switch (e) {
        case 0:
          return Wt;
        case 1:
          return $t;
        case 2:
          return Jt;
        case 3:
          return qt;
        default:
          return Wt;
      }
    }
    function ui(e, t, n = -1) {
      if (n < 0)
        switch (e) {
          case 0:
            return t.lastActive();
          case 1:
            return t.lastConfirmed();
          case 2:
            return t.lastDeaths();
          case 3:
            return t.lastRecoveries();
          default:
            return t.lastActive();
        }
      else
        switch (e) {
          case 0:
            return t.counts()[n].active || 0;
          case 1:
            return t.counts()[n].confirmed || 0;
          case 2:
            return t.counts()[n].deaths || 0;
          case 3:
            return t.counts()[n].recoveries || 0;
          default:
            return t.counts()[n].active || 0;
        }
    }
    function ci(e, t, n) {
      return void 0 === n
        ? new Date(Wr[Wr.length - 1]).toLocaleDateString()
        : (function(e, t) {
            switch (t) {
              case 0:
                return e.geography.mode0;
              case 1:
                return e.geography.mode1;
              case 2:
                return e.geography.mode2;
              case 3:
                return e.geography.mode3;
              default:
                return e.geography.mode0;
            }
          })(e, t) +
            ' ' +
            new Date(Wr[n]).toLocaleDateString();
    }
    const li = Vt(
      e => ({
        dataSetIndex: ni.dataSetIndex(e),
        isPlaying: ni.isPlaying(e),
        series: ni.series(e),
        strings: e.strings,
        title: ni.title(e),
      }),
      {
        incrementedPlayRecord: ri.incrementedRecord,
        resetPlayRecord: ri.resetRecord,
        selectedMap: ri.selectedMap,
        selectedWorldMap: ri.selectedWorldMap,
        updatedDataSet: ri.updatedDataSet,
      }
    )(
      class extends b {
        constructor() {
          super(), (this.timer = 0);
        }
        countryFromClick(e) {
          return e &&
            e.currentTarget &&
            e.currentTarget.currentOptions &&
            e.currentTarget.currentOptions.map &&
            e.currentTarget.currentOptions.map.properties &&
            e.currentTarget.currentOptions.map.properties.mapcode
            ? e.currentTarget.currentOptions.map.properties.mapcode
            : null;
        }
        continentFromClick(e) {
          return e &&
            e.currentTarget &&
            e.currentTarget.currentOptions &&
            e.currentTarget.currentOptions.map &&
            e.currentTarget.currentOptions.map.properties &&
            e.currentTarget.currentOptions.map.properties.continent
            ? e.currentTarget.currentOptions.map.properties.continent
            : null;
        }
        endTimer() {
          clearInterval(this.timer), (this.timer = 0);
        }
        endPlay() {
          this.endTimer(), this.props.resetPlayRecord();
        }
        togglePlay() {
          if (this.props.isPlaying) return this.endPlay();
          this.timer && this.endTimer(),
            this.props.incrementedPlayRecord(),
            (this.timer = setInterval(
              this.props.incrementedPlayRecord.bind(this),
              500
            ));
        }
        onMapClick(e) {
          const t = this.countryFromClick(e);
          Jr.indexOf(t.toUpperCase()) > -1
            ? this.props.selectedMap(t)
            : this.tryContinent(e);
        }
        tryContinent(e) {
          const t = this.continentFromClick(e);
          if (!t) return;
          let n = t;
          ('North America' !== t && 'South America' !== t) || (n = 'Americas'),
            this.props.selectedMap(n);
        }
        zoomOut() {
          this.props.selectedWorldMap();
        }
        render() {
          !1 === this.props.isPlaying && this.timer && this.endTimer();
          const { ranges: e, series: t } = this.props.series;
          return (
            t.forEach(
              e => (e.defaultPoint_events_click = this.onMapClick.bind(this))
            ),
            f(
              'section',
              { onClick: this.zoomOut.bind(this), className: `${ln} ${dn}` },
              f(Gr, {
                ranges: e,
                series: t,
                strings: this.props.strings,
                title: this.props.title,
              }),
              f(
                'section',
                { className: pn },
                f(Pn, {
                  classes: fn.selectBox,
                  onChange: this.props.updatedDataSet,
                  options: [
                    this.props.strings.series.activeCases,
                    this.props.strings.series.confirmedCases,
                    this.props.strings.series.deaths,
                    this.props.strings.series.recoveries,
                  ],
                  selected: this.props.dataSetIndex,
                }),
                f(In, {
                  classes: fn.button,
                  labelFalse: this.props.strings.geography.play,
                  labelTrue: this.props.strings.geography.stop,
                  onClick: this.togglePlay.bind(this),
                  state: this.props.isPlaying,
                }),
                f(xn, { config: this.props.menu })
              )
            )
          );
        }
      }
    );
    function pi({ title: e, list: t }) {
      return f(
        'section',
        null,
        f('h3', null, e),
        f(
          'ul',
          null,
          t.map(e =>
            f(
              'li',
              null,
              f('strong', null, e.name, ':'),
              ' ',
              'function' == typeof e.description
                ? e.description()
                : e.description
            )
          )
        )
      );
    }
    class di extends b {
      constructor() {
        super(), (this.state = {});
      }
      render() {
        const e = [
            {
              name: this.props.strings.series.activeCases,
              description: this.props.strings.descriptions.series.activeCases,
            },
            {
              name: this.props.strings.series.confirmedCases,
              description: this.props.strings.descriptions.series
                .confirmedCases,
            },
            {
              name: this.props.strings.series.deaths,
              description: this.props.strings.descriptions.series.deaths,
            },
            {
              name: this.props.strings.series.recoveries,
              description: this.props.strings.descriptions.series.recoveries,
            },
            {
              name: this.props.strings.series.estimatedActiveCases,
              description: () =>
                f(
                  'span',
                  null,
                  this.props.strings.descriptions.series.estimatedActiveCases
                    .part1,
                  ' ',
                  f(
                    'a',
                    {
                      href: this.props.strings.descriptions.series
                        .estimatedActiveCases.url,
                      target: '_blank',
                    },
                    this.props.strings.descriptions.series.estimatedActiveCases
                      .link
                  ),
                  ' ',
                  this.props.strings.descriptions.series.estimatedActiveCases
                    .part2
                ),
            },
            {
              name: this.props.strings.descriptions.series.projectionSeir.title,
              description: () =>
                f(
                  'span',
                  null,
                  this.props.strings.descriptions.series.projectionSeir.part1,
                  ' ',
                  f(
                    'a',
                    {
                      href: this.props.strings.descriptions.series
                        .projectionSeir.url,
                      target: '_blank',
                    },
                    this.props.strings.descriptions.series.projectionSeir.link
                  ),
                  ' ',
                  this.props.strings.descriptions.series.projectionSeir.part2
                ),
            },
          ],
          t = [
            {
              name: this.props.strings.metrics.byValue,
              description: this.props.strings.descriptions.metrics.byValue,
            },
            {
              name: this.props.strings.metrics.byPercent,
              description: this.props.strings.descriptions.metrics.byPercet,
            },
          ],
          n = [
            {
              name: this.props.strings.modes.byDate,
              description: this.props.strings.descriptions.modes.byDate,
            },
            {
              name: this.props.strings.modes.byFirst,
              description: this.props.strings.descriptions.modes.byFirst,
            },
            {
              name: this.props.strings.modes.byFirst100,
              description: this.props.strings.descriptions.modes.byFirst100,
            },
          ],
          o = [
            {
              name: this.props.strings.scaleTypes.linear,
              description: this.props.strings.descriptions.scales.linear,
            },
            {
              name: this.props.strings.scaleTypes.logarithmic,
              description: this.props.strings.descriptions.scales.logarithmic,
            },
          ];
        return f(
          'section',
          { className: `${ln}` },
          f(pi, {
            title: this.props.strings.descriptions.titles.series,
            list: e,
          }),
          f(pi, {
            title: this.props.strings.descriptions.titles.modes,
            list: n,
          }),
          f(pi, {
            title: this.props.strings.descriptions.titles.scales,
            list: o,
          }),
          f(pi, {
            title: this.props.strings.descriptions.titles.metrics,
            list: t,
          }),
          f(xn, { config: this.props.menu })
        );
      }
    }
    n(21);
    const hi = mn({ path: '/' }),
      yi = mn({ updatedPath: 'router/updated_path' }),
      fi = { [yi.updatedPath]: En(hi, 'path') };
    function mi() {
      return e => t => {
        const n = e(t);
        return t.type === yi.updatedPath && J(t.payload), n;
      };
    }
    if (!gi) var gi = !1;
    const bi = gi
      ? Tt
      : ('undefined' != typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        Tt;
    function vi(e) {
      let { getState: t } = e;
      return (
        !1 == ('function' == typeof t) && (t = () => ({})),
        Si(t()),
        e => n => {
          Si(t());
          try {
            return e(n);
          } finally {
            Si(t());
          }
        }
      );
    }
    function Si(e) {
      _n(e, (t, n) => {
        e[n] = mn(t);
      });
    }
    class Ci extends b {
      constructor(e) {
        super();
        let t = br(e.strings);
        t ||
          (Qt(e.strings.app.log.noState),
          e.strings,
          (t = {
            countries: [],
            currentSeries: [],
            data: Oo.create(),
            dataPromise: Go(),
            countryKeys: Yt,
            routePath: '/',
            seirState: {
              daysToProject: 18,
              r0: Bo.r0,
              incubationPeriod: Bo.incubationPeriod,
              durationOfInfection: Bo.durationOfInfection,
              recoveryTimeForMildCases: Bo.recoveryTimeForMildCases,
              timeFromIncubationToHospital: Bo.timeFromIncubationToDeath,
              lengthOfSevereHospitalStay: Bo.lengthOfSevereHospitalStay,
              timeFromIncubationToDeath: Bo.timeFromIncubationToDeath,
              hospitalizationRate: Bo.hospitalizationRate,
              fatalityRate: Bo.fatalityRate,
            },
            timeVsCountsState: {
              dataSetIndexes: [0],
              byMetric: 0,
              countryFilter: '',
              isConfigOpen: !1,
              mode: 2,
              scaleType: 0,
              showSeirState: !1,
              showStates: !1,
              startDate: '2020-01-22',
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
              sortByNewConfirmed: !1,
              sortByNewDeaths: !1,
              sortByRecoveries: !1,
              sortByRecoveriesPercent: !1,
              sortByPeakActive: !1,
              sortByPeakActivePercent: !1,
              sortByPeakNewConfirmed: !1,
              sortByPeakNewDeaths: !1,
              sortByPopulation: !1,
              sortByPopulationDensity: !1,
            },
            confirmedVsRecentState: {
              countryFilter: '',
              isConfigOpen: !1,
              showStates: !1,
            },
          })),
          (this.state = t),
          this.selectAndUpdate(),
          (this.menu = {
            labels: e.strings.app.menu.map(e => e.name),
            onClick: e => {
              const t =
                this.props.strings.app.menu[e].route ||
                this.props.strings.app.menu[0].route;
              this.setState(
                Object.assign(Object.assign({}, this.state), {
                  currentSeries: [],
                  routePath: t,
                })
              ),
                (this.menu.selected = e),
                J(t),
                this.selectAndUpdate();
            },
            selected: e.strings.app.menu.reduce(
              (e, t, n) => (t.route === this.state.routePath ? n : e),
              0
            ),
          });
      }
      selectAndUpdate() {
        this.state.dataPromise
          .then(({ timeSeries: e }) => {
            this.setState(
              Object.assign(Object.assign({}, this.state), { data: e })
            );
          })
          .then(() => {
            return (
              (e = this.state),
              void (
                window.localStorage &&
                window.localStorage.setItem(
                  'state',
                  JSON.stringify(
                    Object.assign(Object.assign({}, e), {
                      currentSeries: void 0,
                      data: void 0,
                      dataPromise: void 0,
                    })
                  )
                )
              )
            );
            var e;
          });
      }
      timeVsCounts(e) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { timeVsCountsState: e })
        ),
          this.selectAndUpdate();
      }
      confirmedVsRecent(e) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            confirmedVsRecentState: e,
          })
        ),
          this.selectAndUpdate();
      }
      tableState(e) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { tableState: e })
        ),
          this.selectAndUpdate();
      }
      reload() {
        this.props.reset(),
          this.setState(
            Object.assign(Object.assign({}, this.state), {
              dataPromise: Go(this.props.strings).then(
                e => (this.selectAndUpdate(), e)
              ),
            })
          );
      }
      clearCountries() {
        this.setState(
          Object.assign(Object.assign({}, this.state), { countryKeys: [] })
        ),
          this.selectAndUpdate();
      }
      selectCountry(e) {
        this.state.countryKeys.indexOf(e) > -1
          ? this.setState(
              Object.assign(Object.assign({}, this.state), {
                countryKeys: this.state.countryKeys.filter(t => t !== e),
              })
            )
          : this.setState(
              Object.assign(Object.assign({}, this.state), {
                countryKeys: this.state.countryKeys.concat([e]),
              })
            ),
          this.selectAndUpdate();
      }
      selectCountries(e) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { countryKeys: e })
        ),
          this.selectAndUpdate();
      }
      render() {
        return f(
          'div',
          { className: `${ln} ${dn}` },
          f(Rr, { strings: this.props.strings }),
          f(
            ie,
            null,
            f(gr, {
              path: this.props.strings.app.menu[0].route,
              menu: this.menu,
              key: '0',
              reload: this.reload.bind(this),
            }),
            f(Vr, {
              path: this.props.strings.app.menu[1].route,
              key: '1',
              menu: this.menu,
            }),
            f(xr, {
              path: this.props.strings.app.menu[2].route,
              key: '2',
              menu: this.menu,
            }),
            f(li, {
              path: this.props.strings.app.menu[3].route,
              key: '3',
              menu: this.menu,
            }),
            f(di, {
              path: this.props.strings.app.menu[4].route,
              key: '4',
              strings: this.props.strings,
              menu: this.menu,
            })
          )
        );
      }
    }
    function _i(e, t, n) {
      const o = St(
        _t({
          confirmedVsRecent: Hr((r = { strings: n, timeSeriesCollection: t })),
          countries: Yn(r),
          dataTable: ((i = r), Rn(Pr, Dr, i)),
          geography: ai(r),
          router: Rn(hi, fi),
          seir: hr(r),
          strings: () => r.strings,
          timeSeriesCollection: () => r.timeSeriesCollection,
          timeVsCounts: Xo(r),
        }),
        void 0,
        bi(gi ? Nt(mi) : Nt(vi, mi))
      );
      var r, i;
      x(f(Xe, { store: o }, f(Ci, { reset: () => {}, strings: n })), e);
    }
    Pi(n(2));
    function wi(e) {
      return n(25)(`./${e}.json`).then(e => Pi(e));
    }
    function Pi(e) {
      return wn(
        e,
        (e, t, n) => (
          Sn(t)
            ? Object.defineProperty(e, n, { get: () => t, set: Cn })
            : (e[n] = Pi(t)),
          (e[n] = t),
          e
        ),
        {}
      );
    }
    function Ai(e) {
      const t = window.document.createElement('section'),
        n = window.document.createElement('h2'),
        o = window.document.createElement('p');
      t.appendChild(n),
        t.appendChild(o),
        (o.innerHTML = `Critical Error fetching data: ${e.message}`),
        console.error(e),
        window.document.body.appendChild(t);
    }
    !(function() {
      const e =
        (function() {
          if (window.localStorage)
            return window.localStorage.getItem('language') || '';
        })() || 'en';
      Promise.all([Go(), wi(e)])
        .then(([{ dictionary: e }, t]) => {
          const n = window.document.createElement('section');
          if (!n) throw new Error('could not create element');
          return (
            (n.className = ln),
            (function() {
              const e = window.document.getElementById('spinner1'),
                t = window.document.getElementById('spinner2');
              window.document.body.removeChild(e),
                window.document.body.removeChild(t);
            })(),
            window.document.body.appendChild(n),
            _i(n, e, t)
          );
        })
        .catch(Ai);
    })();
  },
]);
