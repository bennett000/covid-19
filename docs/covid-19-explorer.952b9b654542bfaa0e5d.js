!(function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            i,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return i;
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
    n((n.s = 4));
})([
  function(t) {
    t.exports = JSON.parse(
      '{"app":{"log":{"noState":"No existing state"},"menu":[{"route":"/","name":"Time vs Counts"},{"route":"/confirmed-vs-recent","name":"Confirmed vs Recent"},{"route":"/table","name":"Table"},{"route":"/geography","name":"Geography"},{"route":"/about","name":"About"}]},"confirmedVsRecent":{"configure":"⚙️ Configure Chart","confirmedCases":"Total Confirmed Cases","enlarge":"✗ Enlarge Chart","recentCases":"Confirmed in Last Seven (7) Days"},"countries":{"total":"Total","world":"World"},"data":{"log":{"countryNotFound":"country not found","deathNoConfirmed":"Warning: data seems odd, there are deaths but no confirmed cases","populationNotFound":"population not found for","recoveryNoConfirmed":"Warning: data seems odd, there are recoveries but no confirmed cases","stateNotFound":"state not found","unexpectedLength":"Warning: unexpected length:"}},"descriptions":{"metrics":{"byPercet":"Uses the percentage of population* note population data is imperfect","byValue":"Uses the raw count"},"modes":{"byDate":"Plots series based on the date the count occured","byFirst":"Plots series starting from the day the first person was confirmed to have covid-19","byFirst100":"Plots series starting from the day the first one hundred (100) people were confirmed to have covid-19"},"scales":{"linear":"scales \\"normally\\" 0, 10, 20, 30, 40, 50...","logarithmic":"scales by a multiplier 0, 10, 100, 1000, 10000... this scale is useful for looking at series that are early in their curve and series that are late in their curve at the same time"},"series":{"activeCases":"Confirmed - Deaths - Recoveries*.  There is an * because this value depends on Recoveries*","confirmedCases":"The number of confirmed cases according to reported data","deaths":"The number of reported deaths, this is the most reliable data point","recoveries":"Roughly how many people have recovered.  There is some actual data but it is not maintained. Recoveries are estimated based on ${recoveryDays} days since the case was reported confirmed","estimatedActiveCases":{"part1":"This estimate is","link":"based on the spreadsheet created for \\"Coronavirus act today...\\".","part2":"","url":"https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca"},"projectionSeir":{"title":"SEIR Projection","part1":"This projection is","link":"based on Gabriel Goh\'s Epidemic Calculator","part2":"","url":"https://gabgoh.github.io/COVID/index.html"}},"titles":{"metrics":"Metrics","modes":"Modes","scales":"Scales","series":"Series"}},"errors":{"bootstrap":"Could not bootstrap the application","chart":{"domError":"could not add the chart to the DOM"}},"geography":{"stop":"Stop","play":"Play","mode0":"Active Cases*","mode1":"Confirmed Cases","mode2":"Deaths","mode3":"Recoveries*","modeDefault":"Active Cases*","toolTip0":"<b>%name<b/> <br/>Active Cases: %zValue","toolTip1":"<b>%name<b/> <br/>Confirmed Cases: %zValue","toolTip2":"<b>%name<b/> <br/>Deaths: %zValue","toolTip3":"<b>%name<b/> <br/>Recoveries: %zValue","toolTipDefault":"<b>%name<b/> <br/>Active Cases: %zValue"},"header":{"explorer":"Explorer","feedbackLink":"feedback","feedbackTitle":"Provide feedback, suggest features, file issues, etc","jhuGitHubTitle":"GitHub repository of source data maintained by Johns Hopkins University","jhuSourceDataLink":"Johns Hopkins University Source Data","sourceCodeLink":"source code","sourceCodeTitle":"Source code to this website","title":"COVID-19","usData":"US Data","usDataLink":"From NYT","usDataTitle":"New York Times US state and county data"},"i18n":{"part1":"Error loading language","part2":"reverting to English"},"learningTable":{"configure":"⚙️ Configure Table","enlarge":"✗ Enlarge Table","showAll":"Show All","showOnlySelected":"Only Selected","titles":{"active":"Active","activePercent":"Active %","confirmed":"Confirmed","confirmedPercent":"Confirmed %","deaths":"Deaths","deathsPercent":"Deaths %","mortality":"Mortality","population":"Population","populationDensity":"Population Density","recoveries":"Recoveries","recoveriesPercent":"Recoveries %","region":"Region"}},"metrics":{"byValue":"By Value","byPercent":"Percent"},"modes":{"byDate":"By date","byFirst":"By first confirmed","byFirst100":"By first 100 confirmed"},"scaleTypes":{"linear":"Linear","logarithmic":"Logarithmic"},"series":{"activeCases":"Active Cases*","confirmedCases":"Confirmed Cases","deaths":"Deaths","estimatedActiveCases":"Estimated Active Cases","projectionSeirActive":"SEIR Projection (Active)","projectionSeirDeaths":"SEIR Projection (Deaths)","projectionSeirRecoveries":"SEIR Projection (Recoveries)","recoveries":"Recoveries*"},"state":{"parseFail":"Failed to parse saved state, resetting localStorage","wipingOld":"Upgrade: Wiping old state"},"states":["Show States","Hide States"],"timeVsCounts":{"configure":"⚙️ Configure Chart","enlarge":"✗ Enlarge Chart","reload":"Reload"}}'
    );
  },
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
    var i = { './en.json': 0 };
    function o(t) {
      return Promise.resolve().then(function() {
        if (!n.o(i, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        var o = i[t];
        return n.t(o, 3);
      });
    }
    (o.keys = function() {
      return Object.keys(i);
    }),
      (o.id = 3),
      (t.exports = o);
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var i,
      o,
      r,
      a,
      s,
      u,
      c = {},
      l = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function d(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function h(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function y(t, e, n) {
      var i,
        o = arguments,
        r = {};
      for (i in e) 'key' !== i && 'ref' !== i && (r[i] = e[i]);
      if (arguments.length > 3)
        for (n = [n], i = 3; i < arguments.length; i++) n.push(o[i]);
      if (
        (null != n && (r.children = n),
        'function' == typeof t && null != t.defaultProps)
      )
        for (i in t.defaultProps) void 0 === r[i] && (r[i] = t.defaultProps[i]);
      return f(t, r, e && e.key, e && e.ref);
    }
    function f(t, e, n, o) {
      var r = {
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
      return i.vnode && i.vnode(r), r;
    }
    function g(t) {
      return t.children;
    }
    function m(t, e) {
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
      ((!t.__d && (t.__d = !0) && o.push(t) && !r++) ||
        s !== i.debounceRendering) &&
        ((s = i.debounceRendering) || a)(v);
    }
    function v() {
      for (var t; (r = o.length); )
        (t = o.sort(function(t, e) {
          return t.__v.__b - e.__v.__b;
        })),
          (o = []),
          t.some(function(t) {
            var e, n, i, o, r, a;
            t.__d &&
              ((r = (o = (e = t).__v).__e),
              (a = e.__P) &&
                ((n = []),
                (i = N(
                  a,
                  o,
                  d({}, o),
                  e.__n,
                  void 0 !== a.ownerSVGElement,
                  null,
                  n,
                  null == r ? b(o) : r
                )),
                T(n, o),
                i != r && S(o)));
          });
    }
    function _(t, e, n, i, o, r, a, s, u) {
      var p,
        d,
        y,
        f,
        g,
        m,
        S,
        C = (n && n.__k) || l,
        v = C.length;
      if (
        (s == c && (s = null != r ? r[0] : v ? b(n, 0) : null),
        (p = 0),
        (e.__k = A(e.__k, function(n) {
          if (null != n) {
            if (
              ((n.__ = e),
              (n.__b = e.__b + 1),
              null === (y = C[p]) || (y && n.key == y.key && n.type === y.type))
            )
              C[p] = void 0;
            else
              for (d = 0; d < v; d++) {
                if ((y = C[d]) && n.key == y.key && n.type === y.type) {
                  C[d] = void 0;
                  break;
                }
                y = null;
              }
            if (
              ((f = N(t, n, (y = y || c), i, o, r, a, s, u)),
              (d = n.ref) &&
                y.ref != d &&
                (S || (S = []),
                y.ref && S.push(y.ref, null, n),
                S.push(d, n.__c || f, n)),
              null != f)
            ) {
              var l;
              if ((null == m && (m = f), void 0 !== n.__d))
                (l = n.__d), (n.__d = void 0);
              else if (r == y || f != s || null == f.parentNode) {
                t: if (null == s || s.parentNode !== t)
                  t.appendChild(f), (l = null);
                else {
                  for (g = s, d = 0; (g = g.nextSibling) && d < v; d += 2)
                    if (g == f) break t;
                  t.insertBefore(f, s), (l = s);
                }
                'option' == e.type && (t.value = '');
              }
              (s = void 0 !== l ? l : f.nextSibling),
                'function' == typeof e.type && (e.__d = s);
            } else s && y.__e == s && s.parentNode != t && (s = b(y));
          }
          return p++, n;
        })),
        (e.__e = m),
        null != r && 'function' != typeof e.type)
      )
        for (p = r.length; p--; ) null != r[p] && h(r[p]);
      for (p = v; p--; ) null != C[p] && D(C[p], C[p]);
      if (S) for (p = 0; p < S.length; p++) P(S[p], S[++p], S[++p]);
    }
    function A(t, e, n) {
      if ((null == n && (n = []), null == t || 'boolean' == typeof t))
        e && n.push(e(null));
      else if (Array.isArray(t))
        for (var i = 0; i < t.length; i++) A(t[i], e, n);
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
    function O(t, e, n) {
      '-' === e[0]
        ? t.setProperty(e, n)
        : (t[e] =
            'number' == typeof n && !1 === p.test(e)
              ? n + 'px'
              : null == n
              ? ''
              : n);
    }
    function k(t, e, n, i, o) {
      var r, a, s, u, c;
      if (
        (o
          ? 'className' === e && (e = 'class')
          : 'class' === e && (e = 'className'),
        'key' === e || 'children' === e)
      );
      else if ('style' === e)
        if (((r = t.style), 'string' == typeof n)) r.cssText = n;
        else {
          if (('string' == typeof i && ((r.cssText = ''), (i = null)), i))
            for (a in i) (n && a in n) || O(r, a, '');
          if (n) for (s in n) (i && n[s] === i[s]) || O(r, s, n[s]);
        }
      else
        'o' === e[0] && 'n' === e[1]
          ? ((u = e !== (e = e.replace(/Capture$/, ''))),
            (c = e.toLowerCase()),
            (e = (c in t ? c : e).slice(2)),
            n
              ? (i || t.addEventListener(e, w, u), ((t.l || (t.l = {}))[e] = n))
              : t.removeEventListener(e, w, u))
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
    function w(t) {
      this.l[t.type](i.event ? i.event(t) : t);
    }
    function N(t, e, n, o, r, a, s, u, c) {
      var l,
        p,
        h,
        y,
        f,
        b,
        S,
        C,
        v,
        A,
        O = e.type;
      if (void 0 !== e.constructor) return null;
      (l = i.__b) && l(e);
      try {
        t: if ('function' == typeof O) {
          if (
            ((C = e.props),
            (v = (l = O.contextType) && o[l.__c]),
            (A = l ? (v ? v.props.value : l.__) : o),
            n.__c
              ? (S = (p = e.__c = n.__c).__ = p.__E)
              : ('prototype' in O && O.prototype.render
                  ? (e.__c = p = new O(C, A))
                  : ((e.__c = p = new m(C, A)),
                    (p.constructor = O),
                    (p.render = I)),
                v && v.sub(p),
                (p.props = C),
                p.state || (p.state = {}),
                (p.context = A),
                (p.__n = o),
                (h = p.__d = !0),
                (p.__h = [])),
            null == p.__s && (p.__s = p.state),
            null != O.getDerivedStateFromProps &&
              (p.__s == p.state && (p.__s = d({}, p.__s)),
              d(p.__s, O.getDerivedStateFromProps(C, p.__s))),
            (y = p.props),
            (f = p.state),
            h)
          )
            null == O.getDerivedStateFromProps &&
              null != p.componentWillMount &&
              p.componentWillMount(),
              null != p.componentDidMount && p.__h.push(p.componentDidMount);
          else {
            if (
              (null == O.getDerivedStateFromProps &&
                C !== y &&
                null != p.componentWillReceiveProps &&
                p.componentWillReceiveProps(C, A),
              !p.__e &&
                null != p.shouldComponentUpdate &&
                !1 === p.shouldComponentUpdate(C, p.__s, A))
            ) {
              for (
                p.props = C,
                  p.state = p.__s,
                  p.__d = !1,
                  p.__v = e,
                  e.__e = n.__e,
                  e.__k = n.__k,
                  p.__h.length && s.push(p),
                  l = 0;
                l < e.__k.length;
                l++
              )
                e.__k[l] && (e.__k[l].__ = e);
              break t;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(C, p.__s, A),
              null != p.componentDidUpdate &&
                p.__h.push(function() {
                  p.componentDidUpdate(y, f, b);
                });
          }
          (p.context = A),
            (p.props = C),
            (p.state = p.__s),
            (l = i.__r) && l(e),
            (p.__d = !1),
            (p.__v = e),
            (p.__P = t),
            (l = p.render(p.props, p.state, p.context)),
            (e.__k =
              null != l && l.type == g && null == l.key
                ? l.props.children
                : Array.isArray(l)
                ? l
                : [l]),
            null != p.getChildContext && (o = d(d({}, o), p.getChildContext())),
            h ||
              null == p.getSnapshotBeforeUpdate ||
              (b = p.getSnapshotBeforeUpdate(y, f)),
            _(t, e, n, o, r, a, s, u, c),
            (p.base = e.__e),
            p.__h.length && s.push(p),
            S && (p.__E = p.__ = null),
            (p.__e = !1);
        } else e.__e = M(n.__e, e, n, o, r, a, s, c);
        (l = i.diffed) && l(e);
      } catch (t) {
        i.__e(t, e, n);
      }
      return e.__e;
    }
    function T(t, e) {
      i.__c && i.__c(e, t),
        t.some(function(e) {
          try {
            (t = e.__h),
              (e.__h = []),
              t.some(function(t) {
                t.call(e);
              });
          } catch (t) {
            i.__e(t, e.__v);
          }
        });
    }
    function M(t, e, n, i, o, r, a, s) {
      var u,
        p,
        d,
        h,
        y,
        f = n.props,
        g = e.props;
      if (((o = 'svg' === e.type || o), null != r))
        for (u = 0; u < r.length; u++)
          if (
            null != (p = r[u]) &&
            ((null === e.type ? 3 === p.nodeType : p.localName === e.type) ||
              t == p)
          ) {
            (t = p), (r[u] = null);
            break;
          }
      if (null == t) {
        if (null === e.type) return document.createTextNode(g);
        (t = o
          ? document.createElementNS('http://www.w3.org/2000/svg', e.type)
          : document.createElement(e.type, g.is && { is: g.is })),
          (r = null);
      }
      if (null === e.type) f !== g && t.data != g && (t.data = g);
      else if (e !== n) {
        if (
          (null != r && (r = l.slice.call(t.childNodes)),
          (d = (f = n.props || c).dangerouslySetInnerHTML),
          (h = g.dangerouslySetInnerHTML),
          !s)
        ) {
          if (f === c)
            for (f = {}, y = 0; y < t.attributes.length; y++)
              f[t.attributes[y].name] = t.attributes[y].value;
          (h || d) &&
            ((h && d && h.__html == d.__html) ||
              (t.innerHTML = (h && h.__html) || ''));
        }
        (function(t, e, n, i, o) {
          var r;
          for (r in n) r in e || k(t, r, null, n[r], i);
          for (r in e)
            (o && 'function' != typeof e[r]) ||
              'value' === r ||
              'checked' === r ||
              n[r] === e[r] ||
              k(t, r, e[r], n[r], i);
        })(t, g, f, o, s),
          (e.__k = e.props.children),
          h || _(t, e, n, i, 'foreignObject' !== e.type && o, r, a, c, s),
          s ||
            ('value' in g &&
              void 0 !== g.value &&
              g.value !== t.value &&
              (t.value = null == g.value ? '' : g.value),
            'checked' in g &&
              void 0 !== g.checked &&
              g.checked !== t.checked &&
              (t.checked = g.checked));
      }
      return t;
    }
    function P(t, e, n) {
      try {
        'function' == typeof t ? t(e) : (t.current = e);
      } catch (t) {
        i.__e(t, n);
      }
    }
    function D(t, e, n) {
      var o, r, a;
      if (
        (i.unmount && i.unmount(t),
        (o = t.ref) && ((o.current && o.current !== t.__e) || P(o, null, e)),
        n || 'function' == typeof t.type || (n = null != (r = t.__e)),
        (t.__e = t.__d = void 0),
        null != (o = t.__c))
      ) {
        if (o.componentWillUnmount)
          try {
            o.componentWillUnmount();
          } catch (t) {
            i.__e(t, e);
          }
        o.base = o.__P = null;
      }
      if ((o = t.__k)) for (a = 0; a < o.length; a++) o[a] && D(o[a], e, n);
      null != r && h(r);
    }
    function I(t, e, n) {
      return this.constructor(t, n);
    }
    function j(t, e, n) {
      var o, r, a;
      i.__ && i.__(t, e),
        (r = (o = n === u) ? null : (n && n.__k) || e.__k),
        (t = y(g, null, [t])),
        (a = []),
        N(
          e,
          ((o ? e : n || e).__k = t),
          r || c,
          c,
          void 0 !== e.ownerSVGElement,
          n && !o ? [n] : r ? null : l.slice.call(e.childNodes),
          a,
          n || c,
          o
        ),
        T(a, t);
    }
    (i = {
      __e: function(t, e) {
        for (var n, i; (e = e.__); )
          if ((n = e.__c) && !n.__)
            try {
              if (
                (n.constructor &&
                  null != n.constructor.getDerivedStateFromError &&
                  ((i = !0),
                  n.setState(n.constructor.getDerivedStateFromError(t))),
                null != n.componentDidCatch &&
                  ((i = !0), n.componentDidCatch(t)),
                i)
              )
                return C((n.__E = n));
            } catch (e) {
              t = e;
            }
        throw t;
      },
    }),
      (m.prototype.setState = function(t, e) {
        var n;
        (n =
          this.__s !== this.state ? this.__s : (this.__s = d({}, this.state))),
          'function' == typeof t && (t = t(n, this.props)),
          t && d(n, t),
          null != t && this.__v && (e && this.__h.push(e), C(this));
      }),
      (m.prototype.forceUpdate = function(t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), C(this));
      }),
      (m.prototype.render = g),
      (o = []),
      (r = 0),
      (a =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (u = c);
    var B = {};
    function E(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function x(t, e, n) {
      var i,
        o = /(?:\?([^#]*))?(#.*)?$/,
        r = t.match(o),
        a = {};
      if (r && r[1])
        for (var s = r[1].split('&'), u = 0; u < s.length; u++) {
          var c = s[u].split('=');
          a[decodeURIComponent(c[0])] = decodeURIComponent(
            c.slice(1).join('=')
          );
        }
      (t = G(t.replace(o, ''))), (e = G(e || ''));
      for (var l = Math.max(t.length, e.length), p = 0; p < l; p++)
        if (e[p] && ':' === e[p].charAt(0)) {
          var d = e[p].replace(/(^:|[+*?]+$)/g, ''),
            h = (e[p].match(/[+*?]+$/) || B)[0] || '',
            y = ~h.indexOf('+'),
            f = ~h.indexOf('*'),
            g = t[p] || '';
          if (!g && !f && (h.indexOf('?') < 0 || y)) {
            i = !1;
            break;
          }
          if (((a[d] = decodeURIComponent(g)), y || f)) {
            a[d] = t
              .slice(p)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (e[p] !== t[p]) {
          i = !1;
          break;
        }
      return (!0 === n.default || !1 !== i) && a;
    }
    function R(t, e) {
      return t.rank < e.rank ? 1 : t.rank > e.rank ? -1 : t.index - e.index;
    }
    function F(t, e) {
      return (
        (t.index = e),
        (t.rank = (function(t) {
          return t.props.default
            ? 0
            : ((e = t.props.path),
              G(e)
                .map(U)
                .join(''));
          var e;
        })(t)),
        t.props
      );
    }
    function G(t) {
      return t.replace(/(^\/+|\/+$)/g, '').split('/');
    }
    function U(t) {
      return ':' == t.charAt(0)
        ? 1 + '*+?'.indexOf(t.charAt(t.length - 1)) || 4
        : 5;
    }
    var L = null,
      K = [],
      V = [],
      z = {};
    function H() {
      var t;
      return (
        '' +
        ((t =
          L && L.location
            ? L.location
            : L && L.getCurrentLocation
            ? L.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : z).pathname || '') +
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
              L && L[e]
                ? L[e](t)
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
      for (var i = V.length; i--; ) V[i](t);
      return e;
    }
    function Y(t) {
      if (t && t.getAttribute) {
        var e = t.getAttribute('href'),
          n = t.getAttribute('target');
        if (e && e.match(/^\//g) && (!n || n.match(/^_?self$/i))) return W(e);
      }
    }
    function Z(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button))
        return Y(t.currentTarget || t.target || this), q(t);
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
    function $(t) {
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
            if (Y(e)) return q(t);
          }
        } while ((e = e.parentNode));
      }
    }
    var Q = !1;
    var X = (function(t) {
      function e(e) {
        t.call(this, e),
          e.history && (L = e.history),
          (this.state = { url: e.url || H() }),
          Q ||
            ('function' == typeof addEventListener &&
              (L ||
                addEventListener('popstate', function() {
                  J(H());
                }),
              addEventListener('click', $)),
            (Q = !0));
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
          var e = A(this.props.children);
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
          L &&
            (this.unlisten = L.listen(function(e) {
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
            .sort(R)
            .map(function(t) {
              var i = x(e, t.props.path, t.props);
              if (i) {
                if (!1 !== n) {
                  var o = { url: e, matches: i };
                  return (
                    E(o, i),
                    delete o.ref,
                    delete o.key,
                    (function(t, e) {
                      return (
                        (e = d(d({}, t.props), e)),
                        arguments.length > 2 &&
                          (e.children = l.slice.call(arguments, 2)),
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
            i = t.onChange,
            o = e.url,
            r = this.getMatchingChildren(A(n), o, !0),
            a = r[0] || null,
            s = this.previousUrl;
          return (
            o !== s &&
              ((this.previousUrl = o),
              'function' == typeof i &&
                i({
                  router: this,
                  url: o,
                  previous: s,
                  active: r,
                  current: a,
                })),
            a
          );
        }),
        e
      );
    })(m);
    (X.subscribers = V),
      (X.getCurrentUrl = H),
      (X.route = W),
      (X.Router = X),
      (X.Route = function(t) {
        return y(t.component, t);
      }),
      (X.Link = function(t) {
        return y('a', E({ onClick: Z }, t));
      }),
      (X.exec = x);
    var tt = X;
    class et extends m {
      constructor() {
        super();
      }
      createChart(t = this.props) {
        !this.chart &&
          t.options.series.length &&
          (this.chart = JSC.Chart('chartDiv', t.options));
      }
      componentDidMount() {
        (this.base.id = 'chartDiv'), this.createChart();
      }
      componentWillReceiveProps(t) {
        this.chart ? this.chart.options(t.options) : this.createChart(t);
      }
      render() {
        return y('div', { className: this.props.flexSize });
      }
    }
    const nt = 'full-size',
      it = 'flex',
      ot = 'flex flex-col',
      rt = Object.freeze({
        daysFromInfectionToDeath: 17.3,
        doublingTime: 6.18,
        fatalityRate: 0.0087,
        minDeaths: 10,
      }),
      at = [
        '#e01010',
        '#067ff1',
        '#5adc13',
        '#14f8e5',
        '#e30ed6',
        '#ff6600',
        '#ece019',
        '#590596',
      ],
      st = [
        '#f09090',
        '#add0f1',
        '#b5dc9f',
        '#b7f8f3',
        '#e3c1e1',
        '#ffc6a0',
        '#ece79c',
        '#9e8dce',
      ],
      ut = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 100], color: '#fff5f5' },
        { value: [100, 1e3], color: '#ffdcdc' },
        { value: [1e3, 5e3], color: '#ffa0a0' },
        { value: [5e3, 15e3], color: '#ff7373' },
        { value: [15e3, 5e4], color: '#ff4b4b' },
        { value: [5e4, 15e4], color: '#ff1919' },
        { value: [15e4, 5e9], color: '#c60000' },
      ],
      ct = [
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
      pt = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [1, 500], color: '#f0fff0' },
        { value: [500, 5e3], color: '#dcffdc' },
        { value: [5e3, 5e4], color: '#beffbe' },
        { value: [5e4, 25e4], color: '#a0ffa0' },
        { value: [25e4, 1e6], color: '#78ff78' },
        { value: [1e6, 5e6], color: '#41ff41' },
        { value: [5e6, 5e9], color: '#009900' },
      ];
    function dt(t) {
      return 'boolean' == typeof t;
    }
    function ht(t) {
      return 'number' == typeof t;
    }
    function yt(t) {
      return 'string' == typeof t;
    }
    function ft() {}
    function gt(t, e) {
      Object.keys(t).forEach((n, i) => {
        e(t[n], n, i, t);
      });
    }
    function mt(t, e, n) {
      return Object.keys(t).reduce((n, i, o) => e(n, t[i], i, o, t), n);
    }
    function bt({ onChange: t, options: e, selected: n }) {
      return y(
        'select',
        { onChange: e => t(e.target.value) },
        e.map((t, e) =>
          yt(t)
            ? y(
                'option',
                n === e ? { value: e, selected: !0 } : { value: e },
                t
              )
            : y(
                'option',
                n === e ? { value: t.index, selected: !0 } : { value: t.index },
                t.name
              )
        )
      );
    }
    function St({ onChange: t, onClick: e, options: n, selected: i }) {
      e = e || ft;
      const o = t => e(t.target.value);
      return y(
        'select',
        {
          onChange: e =>
            t(
              (function(t) {
                let e = [];
                for (let n = 0; n < t.length; n += 1) {
                  const i = t[n];
                  i.selected && e.push(i.value);
                }
                return e;
              })(e.target.options)
            ),
          multiple: !0,
        },
        n.map((t, e) => {
          const n = 'option-' + t;
          return yt(t)
            ? i.indexOf(e) > -1
              ? y('option', { key: n, onClick: o, value: e, selected: !0 }, t)
              : y('option', { key: n, onClick: o, value: e }, t)
            : i.indexOf(t.index) > -1
            ? y(
                'option',
                { key: n, onClick: o, value: t.index, selected: !0 },
                t.name
              )
            : y('option', { key: n, onClick: o, value: t.index }, t.name);
        })
      );
    }
    function Ct({ onChange: t, ymdString: e }) {
      return y('input', {
        onChange: e => t(e.target.value),
        type: 'date',
        value: e,
      });
    }
    function vt({ classes: t, isDisabled: e, label: n, onClick: i }) {
      return y(
        'button',
        { className: t ? t.join(' ') : '', onClick: i, disabled: e },
        n
      );
    }
    function _t({
      classes: t,
      listenKeyUp: e,
      onChange: n,
      placeholder: i,
      value: o,
    }) {
      const r = t => n(t.target.value);
      return y('input', {
        className: t ? t.join(' ') : '',
        onChange: r,
        onKeyUp: e ? r : ft,
        placeholder: i || '',
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
    function Ot(...t) {
      console.log('COVID-19', ...t);
    }
    function kt(t, e) {
      return n =>
        !1 === t ||
        n.name.toLowerCase().indexOf('korea') > -1 ||
          !(n.name.indexOf(',') > -1) ||
            n.name.indexOf(`, ${e.countries.total}`) > -1;
    }
    function wt(t) {
      return t.filter
        ? t.options.filter(e =>
            yt(e)
              ? e.toLowerCase().indexOf(t.filter.toLowerCase()) > -1
              : e.name.toLowerCase().indexOf(t.filter.toLowerCase()) > -1
          )
        : t.options;
    }
    function Nt(t) {
      const e = t.classes ? t.classes.join(' ') : '';
      return y(
        'div',
        { className: e.length ? `${e} ${ot}` : ot },
        y(
          'div',
          { className: it },
          At()
            ? ''
            : y(_t, {
                listenKeyUp: !0,
                onChange: t.onUpdateFilter,
                placeholder: 'filter',
                value: t.filter,
              }),
          y(vt, { label: '✗', onClick: t.onClear })
        ),
        At()
          ? y(St, {
              onChange: e => {
                t.onChange(e);
              },
              options: wt(t),
              selected: t.selected,
            })
          : y(St, {
              onChange: ft,
              onClick: e => {
                t.onDeselect(e);
              },
              options: wt(t),
              selected: t.selected,
            })
      );
    }
    function Tt({
      clearCountries: t,
      countries: e,
      countryKeys: n,
      onChange: i,
      onUpdateCountryFilter: o,
      reload: r,
      selectCountry: a,
      selectCountries: s,
      state: u,
      strings: c,
    }) {
      const l = [
          c.series.activeCases,
          c.series.confirmedCases,
          c.series.deaths,
          c.series.recoveries,
          c.series.estimatedActiveCases,
          c.series.projectionSeirActive,
          c.series.projectionSeirDeaths,
          c.series.projectionSeirRecoveries,
        ],
        p = [c.modes.byDate, c.modes.byFirst, c.modes.byFirst100],
        d = [c.scaleTypes.linear, c.scaleTypes.logarithmic],
        h = c.states,
        f = [c.metrics.byValue, c.metrics.byPercent];
      return y(
        'section',
        { className: 'flex flex-item-20' },
        y(
          'section',
          { className: ot },
          y(bt, {
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  mode: parseInt(t + '', 10),
                })
              );
            },
            options: p,
            selected: u.mode,
          }),
          y(bt, {
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  scaleType: parseInt(t + '', 10),
                })
              );
            },
            options: d,
            selected: u.scaleType,
          }),
          y(Ct, {
            onChange: function(t) {
              i(Object.assign(Object.assign({}, u), { startDate: t }));
            },
            ymdString: u.startDate,
          })
        ),
        y(St, {
          onChange: function(t) {
            i(
              Object.assign(Object.assign({}, u), {
                dataSetIndexes: t.map(t => parseInt(t + '', 10)),
              })
            );
          },
          options: l,
          selected: u.dataSetIndexes,
        }),
        y(Nt, {
          classes: 0 === n.length ? ['highlight'] : [],
          filter: u.countryFilter,
          onUpdateFilter: o,
          onChange: s,
          onClear: t,
          onDeselect: a,
          options: e.filter(kt(u.showStates, c)),
          selected: n,
        }),
        y(
          'div',
          { className: ot },
          y(bt, {
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  showStates: 0 !== parseInt(t + '', 10),
                })
              );
            },
            options: h,
            selected: u.showStates ? 1 : 0,
          }),
          y(bt, {
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  byMetric: parseInt(t + '', 10),
                })
              );
            },
            options: f,
            selected: u.byMetric,
          }),
          y(vt, { label: c.timeVsCounts.reload, onClick: r })
        )
      );
    }
    function Mt({
      classes: t,
      isDisabled: e,
      labelFalse: n,
      labelTrue: i,
      onClick: o,
      state: r,
    }) {
      return y(vt, {
        classes: t,
        isDisabled: e,
        label: r ? i : n,
        onClick: () => o(!r),
      });
    }
    function Pt({
      config: { disable: t, labels: e, onClick: n, selected: i },
    }) {
      return y(
        'nav',
        { className: it },
        e.map((e, o) =>
          y(vt, { isDisabled: o === i || t, label: e, onClick: () => n(o) })
        )
      );
    }
    class Dt extends m {
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
              : [],
          e = {
            xAxis_label_text: this.useDays() ? 'Day' : void 0,
            xAxis: {
              scale: { type: this.useDays() ? 'auto' : 'time' },
              customTicks: [
                { value: { month: '*' }, label_text: '%min' },
                { value: { week: '*' }, label_text: '%min' },
              ],
            },
            yAxis: {
              scale: {
                type: 0 === this.props.state.scaleType ? 'auto' : 'logarithmic',
              },
            },
            legend: { template: '%icon %name' },
            series: this.props.currentSeries,
          };
        return y(
          'section',
          { className: `full-size ${ot}` },
          y(et, {
            flexSize: this.props.state.isConfigOpen
              ? 'flex-item-60'
              : 'flex-item-95',
            options: e,
            strings: this.props.strings,
          }),
          y(
            'section',
            { className: it },
            y(Mt, {
              classes: t,
              labelTrue: this.props.strings.timeVsCounts.enlarge,
              labelFalse: this.props.strings.timeVsCounts.configure,
              onClick: this.toggleConfig.bind(this),
              state: this.props.state.isConfigOpen,
            }),
            y(Pt, { config: this.props.menu })
          ),
          this.props.state.isConfigOpen
            ? y(Tt, {
                onUpdateCountryFilter: this.setCountryFilter.bind(this),
                clearCountries: this.props.clearCountries,
                countryKeys: this.props.countryKeys,
                countries: this.props.countries,
                currentSeries: this.props.currentSeries,
                onChange: this.props.onChange,
                reload: this.props.reload,
                selectCountry: this.props.selectCountry,
                selectCountries: this.props.selectCountries,
                state: this.props.state,
                strings: this.props.strings,
              })
            : ''
        );
      }
    }
    var It = n(1),
      jt = n(2);
    const Bt = Object.freeze({
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
      Et = Object.freeze({
        'Bahamas, The': 395361,
        Burma: 5337e4,
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
      xt = Object.freeze({
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
        Burma: 'MM',
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
      Ft = Object.freeze({
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
          'Hong Kong': 'HK',
          Hubei: 'HU',
          Hunan: 'HN',
          'Inner Mongolia': 'NM',
          Jiangsu: 'JS',
          Jiangxi: 'JX',
          Jilin: 'JL',
          Liaoning: 'LN',
          Macau: 'MO',
          Ningxia: 'NX',
          Qinghai: 'QH',
          Shaanxi: 'SA',
          Shandong: 'SD',
          Shanghai: 'SH',
          Shanxi: 'SX',
          Sichuan: 'SC',
          Tianjin: 'TJ',
          Tibet: 'AR',
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
      Gt = Object.freeze({
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
      Ut = Object.freeze(
        Object.keys(Ft.US).reduce((t, e) => ((t[Ft.US[e]] = e), t), {})
      ),
      Lt = {
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
      };
    class Kt {
      constructor(t) {
        this.data = t;
      }
      static create(t) {
        return new Kt(t);
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
        this.sort((e, i) =>
          e[t]() < i[t]() ? n : e[t]() > i[t]() ? -1 * n : 0
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
    const zt = Object.freeze({
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
    function Ht(t, e, n, i, o) {
      for (var r = [], a = 0; a < t.length; a++) {
        for (
          var s = n.slice(), u = a ? t[a - 1][0] * o : 0, c = 0;
          c < s.length;
          c++
        )
          for (var l = 1; l <= a; l++)
            s[c] = s[c] + o * t[a - 1][l] * r[a - 1][c];
        r[a] = e(i + u, s, u);
      }
      var p = n.slice();
      for (c = 0; c < s.length; c++)
        for (l = 0; l < r.length; l++) p[c] = p[c] + o * r[l][c] * t[a - 1][l];
      return p;
    }
    class Wt {
      constructor(t = 7e6, e = 1, n = 100) {
        (this.N = t),
          (this.I0 = e),
          (this.InterventionTime = n),
          (this.dt = 2),
          (this.R0 = 2.2),
          (this.D_incbation = 5.2),
          (this.D_infectious = 2.9),
          (this.D_recovery_mild = 11.1),
          (this.D_hospital_lag = 5),
          (this.D_recovery_severe = 28.6),
          (this.Time_to_death = 32),
          (this.D_death = this.Time_to_death - this.D_infectious),
          (this.P_SEVERE = 0.2),
          (this.CFR = 0.02),
          (this.OMInterventionAmt = 0.63),
          (this.InterventionAmt = 1 - this.OMInterventionAmt),
          (this.duration = 84e10);
      }
      static create(t = 7e6, e = 1, n = 100) {
        return new Wt(t, e, n);
      }
      getSolution() {
        let t = 4400;
        const e = this.dt / 40,
          n = zt.RK4,
          i = (t, e) => {
            if (
              t > this.InterventionTime &&
              t < this.InterventionTime + this.duration
            )
              var n = (this.InterventionAmt * this.R0) / this.D_infectious;
            else if (t > this.InterventionTime + this.duration)
              n = (0.5 * this.R0) / this.D_infectious;
            else n = this.R0 / this.D_infectious;
            const i = 1 / this.D_incbation,
              o = 1 / this.D_infectious,
              r = e[0],
              a = e[1],
              s = e[2],
              u = e[3],
              c = e[4],
              l = e[5],
              p = e[6],
              d = this.P_SEVERE,
              h = this.CFR;
            return [
              -n * s * r,
              n * s * r - i * a,
              i * a - o * s,
              (1 - this.P_SEVERE - this.CFR) * o * s -
                (1 / this.D_recovery_mild) * u,
              d * o * s - (1 / this.D_hospital_lag) * c,
              (1 / this.D_hospital_lag) * c - (1 / this.D_recovery_severe) * l,
              h * o * s - (1 / this.D_death) * p,
              (1 / this.D_recovery_mild) * u,
              (1 / this.D_recovery_severe) * l,
              (1 / this.D_death) * p,
            ];
          };
        let o = [
            1 - this.I0 / this.N,
            0,
            this.I0 / this.N,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ],
          r = 0;
        const a = [],
          s = [],
          u = [];
        for (; t--; )
          (t + 1) % 40 == 0 &&
            (a.push([
              this.N * o[9],
              this.N * (o[5] + o[6]),
              this.N * (o[7] + o[8]),
              this.N * o[2],
              this.N * o[1],
            ]),
            u.push(o),
            s.push(this.N * (1 - o[0]))),
            (o = Ht(n, i, o, r, e)),
            (r += e);
        return {
          P: a,
          deaths: this.N * o[6],
          total: 1 - o[0],
          total_infected: s,
          Iters: u,
          dIters: i,
        };
      }
    }
    const Jt = (It || []).reduce(
        (t, e) => ((t[e.country] = parseInt(e.population, 10)), t),
        {}
      ),
      Yt = (jt || []).reduce(
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
    function qt(t) {
      return Promise.all([
        Promise.all(Zt.map(t => fetch(t)))
          .then(ae)
          .then(le(t))
          .then(te(t))
          .then($t),
        fetch(
          'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv'
        )
          .then(re)
          .then(he),
      ])
        .then(Qt)
        .then(
          (function(t) {
            return e => (
              gt(e, e => {
                e.counts.forEach((e, n, i) => {
                  (e.recoveries = (function(t) {
                    return (e, n, i, o) => {
                      if (e.confirmed) {
                        if (!(e.recoveries < 1)) return e.recoveries;
                        if (i[n - o] && i[n - o - 1]) {
                          const t = i[n - o - 1].confirmed,
                            e = i[n - o].confirmed - t;
                          return i[n - 1] ? e + i[n - 1].recoveries : e;
                        }
                      } else
                        e.deaths && Ot(t.data.log.deathNoConfirmed),
                          e.recoveries && Ot(t.data.log.recoveryNoConfirmed);
                      return 0;
                    };
                  })(t)(e, n, i, 25)),
                    (e.active = e.confirmed - e.deaths - e.recoveries),
                    (e.projectionReverseDeath = (function(t) {
                      const e = t.deaths / rt.fatalityRate,
                        n = rt.daysFromInfectionToDeath / rt.doublingTime;
                      return e * Math.pow(2, n);
                    })(e));
                });
              }),
              e
            );
          })(t)
        )
        .then(
          (function(t) {
            return e => (
              gt(e, n => {
                if (n.state !== t.countries.total && n.state) {
                  if (n.locale) return;
                  if (e[n.countryCode]) return;
                  const i = n.countryCode + '.' + t.countries.total;
                  void 0 === e[i] &&
                    (e[i] = Object.assign(Object.assign({}, n), {
                      key: i,
                      locale: '',
                      population: ne(t)(n.country),
                      populationDensity: oe(n.country),
                      state: t.countries.total,
                      counts: [],
                    })),
                    n.counts.forEach((t, n) => {
                      e[i].counts[n]
                        ? (e[i].counts[n] = ee(e[i].counts[n], t))
                        : (e[i].counts[n] = t);
                    });
                }
              }),
              e
            );
          })(t)
        )
        .then(
          (function(t) {
            return e => {
              const n = {
                country: t.countries.world,
                countryCode: t.countries.world,
                dates: [],
                key: t.countries.world,
                locale: '',
                population: 0,
                populationDensity: 0,
                state: '',
                stateCode: '',
                counts: [],
              };
              return (
                gt(e, e => {
                  e.locale ||
                    (e.state && e.state !== t.countries.total) ||
                    ((n.population += e.population),
                    e.counts.forEach((t, e) => {
                      n.counts[e]
                        ? (n.counts[e] = ee(n.counts[e], t))
                        : (n.counts[e] = Object.assign({}, t));
                    }));
                }),
                (e[t.countries.world] = n),
                e
              );
            };
          })(t)
        )
        .then(Xt)
        .then(ye);
    }
    function $t(t) {
      return delete t.CA, t;
    }
    function Qt([t, e]) {
      return (
        gt(e, (e, n) => {
          void 0 === t[n] && (t[n] = e);
        }),
        t
      );
    }
    function Xt(t) {
      const e = {},
        n = mt(
          t,
          (t, n, i) => {
            if (n.locale) return t;
            const o = Kt.create(n);
            return t.push(o), (e[i] = o), t;
          },
          Vt.create()
        );
      return { dictionary: e, timeSeries: n };
    }
    function te(t) {
      return e => {
        const n = {},
          i = i => o => {
            const r = Rt[o.country];
            if (!r) return void Ot(t.data.log.countryNotFound, o.country);
            let a = r,
              s = '';
            if (o.state) {
              const e = Ft[o.country];
              if (!e) return;
              if (((s = e[o.state]), !s))
                return void Ot(
                  t.data.log.stateNotFound,
                  o.country + ',',
                  o.state
                );
              a = a + '.' + s;
            }
            o.locale && (a = a + '.' + o.locale),
              n[a]
                ? o.timeSeries.map((e, o) => {
                    void 0 === n[a].counts[o] &&
                      (Ot(t.data.log.unexpectedLength, i),
                      (n[a].counts[o] = {
                        active: 0,
                        confirmed: 0,
                        deaths: 0,
                        recoveries: 0,
                        projectionReverseDeath: 0,
                      })),
                      (n[a].counts[o][i] = e);
                  })
                : (n[a] = {
                    country: o.country,
                    countryCode: r,
                    counts: o.timeSeries.map(t => {
                      const e = {
                        active: 0,
                        confirmed: 0,
                        deaths: 0,
                        recoveries: 0,
                        projectionReverseDeath: 0,
                      };
                      return (e[i] = t), e;
                    }),
                    dates: e[0][0],
                    key: a,
                    locale: o.locale,
                    population: o.population,
                    populationDensity: o.populationDensity,
                    state: o.state,
                    stateCode: s,
                  });
          };
        return (
          e[0][1].forEach(i('confirmed')),
          e[1][1].forEach(i('deaths')),
          e[2][1].forEach(i('recoveries')),
          n
        );
      };
    }
    function ee(t, e) {
      return {
        active: t.active + e.active,
        confirmed: t.confirmed + e.confirmed,
        deaths: t.deaths + e.deaths,
        recoveries: t.recoveries + e.recoveries,
        projectionReverseDeath:
          t.projectionReverseDeath + e.projectionReverseDeath,
      };
    }
    function ne(t) {
      return (e, n, i) => {
        if (i) return 0;
        if (n) return ie(e, n, i);
        let o = Jt[e];
        return (
          o ||
          ((o = Jt[Bt[e]]),
          o ||
            ((o = Et[e]), o || (Ot(t.data.log.populationNotFound, e, n, i), 0)))
        );
      };
    }
    function ie(t, e, n) {
      if (n) return 0;
      if (xt[t])
        if ('US' === t) {
          const n = Ut[e];
          if (n) {
            const e = 'D.C.' === n ? 'DC' : n;
            if (xt[t][e]) return xt[t][e];
          }
        } else if (xt[t][e]) return xt[t][e];
      return 0;
    }
    function oe(t, e, n) {
      if (e || n) return 0;
      let i = Yt[t];
      return i || ((i = Yt[Bt[t]]), i || 0);
    }
    function re(t) {
      return t.text();
    }
    function ae(t) {
      return Promise.all(t.map(re));
    }
    function se(t) {
      const e = t.split(''),
        n = { buffer: '', isEscape: !1, isInQuote: !1 },
        i = () => {
          n.isEscape ? (n.isEscape = !1) : (n.isEscape = !0);
        };
      return e.reduce(
        (t, e, o, r) =>
          '"' === e
            ? (n.isEscape
                ? ((n.buffer += e), i())
                : n.isInQuote
                ? (n.isInQuote = !1)
                : (n.isInQuote = !0),
              t)
            : '\\' === e
            ? (n.isEscape ? ((n.buffer += e), i()) : i(), t)
            : ',' === e
            ? (n.isInQuote
                ? (n.buffer += e)
                : (t.push(n.buffer), (n.buffer = '')),
              t)
            : ((n.buffer += e),
              o === r.length - 1 && (t.push(n.buffer), (n.buffer = '')),
              t),
        []
      );
    }
    function ue(t) {
      return e => {
        const n = e[1],
          [i, o] = (function(t) {
            if (t.indexOf(',') > -1) {
              const e = t.split(',').filter(Boolean);
              return [e[0].trim(), e[1].trim()];
            }
            return ['', t];
          })(e[0]);
        return {
          country: n,
          locale: i,
          population: ne(t)(n, o, i),
          populationDensity: oe(n, o, i),
          state: o,
          timeSeries: e.slice(4).map(t => parseInt(t, 10)),
        };
      };
    }
    function ce(t) {
      return e => {
        const n = e.split('\n');
        return [
          (function(t) {
            return t
              .split(',')
              .slice(4)
              .map(t => new Date(t));
          })(n[0]),
          n
            .slice(1)
            .map(se)
            .filter(t => t.length)
            .map(ue(t)),
        ];
      };
    }
    function le(t) {
      return e => e.map(ce(t));
    }
    function pe(t) {
      return t < 10 ? '0' + t : t + '';
    }
    function de() {
      const t = new Date('2020-01-22').getTime(),
        e = Date.now() - 864e5,
        n = Math.floor((e - t) / 1e3 / 60 / 60 / 24),
        i = {};
      for (let e = 0; e < n; e += 1) {
        const n = new Date(t + 864e5 * e);
        i[
          `${n.getUTCFullYear()}-${pe(n.getUTCMonth() + 1)}-${pe(
            n.getUTCDate()
          )}`
        ] = e;
      }
      return i;
    }
    function he(t) {
      const e = (function(t) {
          const e = {};
          return (
            t.forEach(t => {
              if (!t[0] || !t[1]) return;
              const n = Ut[t[1]];
              if (!n) return;
              const i = Ae(n);
              void 0 === e[t[0]] && (e[t[0]] = {}),
                void 0 === e[t[0]][i] &&
                  (e[t[0]][i] = {
                    active: 0,
                    confirmed: 0,
                    deaths: 0,
                    recoveries: 0,
                    projectionReverseDeath: 0,
                  }),
                t[3] && (e[t[0]][i].confirmed = parseInt(t[3], 10)),
                t[4] && (e[t[0]][i].deaths = parseInt(t[4], 10));
            }),
            e
          );
        })(
          (function(t) {
            return (
              t.sort((t, e) => (t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : 0)), t
            );
          })(
            t
              .split('\n')
              .slice(1)
              .map(se)
          )
        ),
        [n, i] = (function(t) {
          const e = {},
            n = Object.keys(Ft.US).filter(t => 'D.C.' !== t),
            i = de(),
            o = [];
          return (
            gt(i, (i, r) => {
              o.push(new Date(r)),
                n.forEach(n => {
                  const o = Ae(n);
                  if ((void 0 === e[o] && (e[o] = []), t[r] && t[r][o]))
                    e[o][i] = t[r][o];
                  else {
                    const t = e[o][i - 1];
                    e[o][i] = t
                      ? Object.assign({}, t)
                      : {
                          active: 0,
                          confirmed: 0,
                          deaths: 0,
                          recoveries: 0,
                          projectionReverseDeath: 0,
                        };
                  }
                });
            }),
            [o, e]
          );
        })(e),
        o = {};
      return (
        gt(i, (t, e) => {
          const i = e.split('.')[1],
            r = Ft.US[i];
          o[e] = {
            country: 'US',
            countryCode: 'US',
            dates: n,
            key: e,
            locale: '',
            population: ie('US', r),
            populationDensity: oe('US', r),
            state: r,
            stateCode: i,
            counts: t,
          };
        }),
        o
      );
    }
    function ye({ dictionary: t, timeSeries: e }) {
      var n;
      return {
        countries: mt(
          t,
          (t, e, n) => {
            if (e.locale()) return t;
            const i = e.countryName();
            return t.push({ index: n, name: i }), t;
          },
          []
        ).sort(
          ((n = 'name'), (t, e) => (t[n] < e[n] ? -1 : t[n] > e[n] ? 1 : 0))
        ),
        dictionary: t,
        timeSeries: e,
      };
    }
    function fe(t) {
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
        case 5:
          return '😷 (SEIR Active)';
        case 6:
          return '✔ (SEIR Confirmed)';
        case 7:
          return '☠ (SEIR Deaths)';
        case 8:
          return '😊 (SEIR Recoveries)';
        default:
          return '😊 (Recovery)';
      }
    }
    function ge(t, e, n) {
      let i = 0;
      return n.reduce(
        (n, o) =>
          e.countryKeys.indexOf(o.key()) > -1
            ? (function(t, e, n, i, o) {
                switch (e.timeVsCountsState.mode) {
                  case 1:
                    return Ce(t, e, n, i, o, 1);
                  case 2:
                    return Ce(t, e, n, i, o, 100);
                  default:
                    return (function(t, e, n, i, o) {
                      const r = new Date(e.timeVsCountsState.startDate),
                        a = ve(i, -1, e.timeVsCountsState.byMetric);
                      return (
                        e.timeVsCountsState.dataSetIndexes.forEach(t => {
                          const { chart: s, field: u } = be(t, o, i);
                          Se(a, t, s) ||
                            (s.points = i.counts().reduce(
                              (function(t, e, n, i) {
                                return (o, r, a) => {
                                  if (t.dates()[a] && t.dates()[a] > i) {
                                    const i = _e(
                                      e.timeVsCountsState.byMetric,
                                      r[n],
                                      t.population()
                                    );
                                    i && o.push({ x: t.dates()[a], y: i });
                                  }
                                  return o;
                                };
                              })(i, e, u, r),
                              []
                            )),
                            n.push(s);
                        }),
                        n
                      );
                    })(0, e, n, i, o);
                }
              })(t, e, n, o, i++)
            : n,
        []
      );
    }
    function me(t, e, n) {
      let i = 0;
      return n.reduce(
        (t, n) =>
          e.countryKeys.indexOf(n.key()) > -1
            ? (function(t, e, n, i, o) {
                const r = at[o % at.length],
                  a = {
                    color: r,
                    line: { color: r },
                    name: i.countryName(),
                    points: [],
                  };
                for (let t = i.counts().length - 1; t > 7; t -= 1) {
                  const e = i.counts()[t],
                    n = i.counts()[t - 7] || {
                      active: 0,
                      confirmed: 0,
                      deaths: 0,
                      recoveries: 0,
                      projectionReverseDeath: 0,
                    },
                    o = e.confirmed - n.confirmed || 1;
                  e.confirmed < 100 || a.points.push({ x: e.confirmed, y: o });
                }
                return (a.points = a.points.reverse()), n.push(a), n;
              })(0, 0, t, n, i++)
            : t,
        []
      );
    }
    function be(t, e, n) {
      const i = (function(t) {
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
        })(t),
        o = t > 3 ? st[e % st.length] : at[e % at.length];
      return {
        chart: {
          color: o,
          line: { color: o },
          name: fe(t) + ' ' + n.countryName(),
          points: [],
        },
        field: i,
      };
    }
    function Se(t, e, n) {
      return 5 === e
        ? ((n.points = t.active), !0)
        : 6 === e
        ? ((n.points = t.deaths), !0)
        : 7 === e && ((n.points = t.recoveries), !0);
    }
    function Ce(t, e, n, i, o, r) {
      const a = new Date(e.timeVsCountsState.startDate),
        s = ve(
          i,
          i
            .counts()
            .reduce(
              (t, e, n, i) =>
                -1 !== t ? t : e.confirmed >= r ? i.length - n - 1 : t,
              -1
            ),
          e.timeVsCountsState.byMetric
        );
      return (
        e.timeVsCountsState.dataSetIndexes.forEach(t => {
          const { chart: u, field: c } = be(t, o, i);
          Se(s, t, u) ||
            (u.points = i.counts().reduce(
              (function(t, e, n, i, o) {
                let r = 0;
                return (a, s, u) => {
                  if (t.dates()[u] && t.dates()[u] > i && s.confirmed >= o) {
                    const i = _e(
                      e.timeVsCountsState.byMetric,
                      s[n],
                      t.population()
                    );
                    i && a.push({ x: r, y: i }), (r += 1);
                  }
                  return a;
                };
              })(i, e, c, a, r),
              []
            )),
            n.push(u);
        }),
        n
      );
    }
    function ve(t, e, n) {
      const i = (function(t) {
          switch (t) {
            case 'CN':
            case 'KR':
              return 0;
            default:
              return 10;
          }
        })(t.countryCode()),
        o = Wt.create(t.population(), t.lastConfirmed(), i),
        r = t.dates(),
        a = r[r.length - 1]
          ? r[r.length - 1].getTime()
          : new Date('2020-01-22').getTime(),
        s = o.getSolution(),
        u = s.P.length < 35 ? s.P.length : 35,
        c = [],
        l = [],
        p = [];
      for (let i = 1; i < u; i += 1) {
        const o = -1 === e ? new Date(a + 864e5 * (i - 1)) : e + i - 1;
        c.push({ x: o, y: 0 === n ? s.P[i][4] : s.P[i][4] / t.population() }),
          l.push({ x: o, y: 0 === n ? s.P[i][0] : s.P[i][0] / t.population() }),
          p.push({ x: o, y: 0 === n ? s.P[i][2] : s.P[i][2] / t.population() });
      }
      return { active: c, deaths: l, recoveries: p };
    }
    function _e(t, e, n) {
      return 0 === t ? e : n ? e / n : 0;
    }
    function Ae(t) {
      return 'US.' + t;
    }
    const Oe = [];
    function ke(t) {
      if (window.localStorage) {
        const e = window.localStorage.getItem('state');
        if (e)
          try {
            const n = JSON.parse(e);
            return n
              ? !1 ===
                (function(t) {
                  if (!t) return !1;
                  if (!1 === Array.isArray(t.countries)) return !1;
                  if (
                    !1 ===
                    (function(t) {
                      if (!t) return !1;
                      if (!1 === dt(t.isConfigOpen)) return !1;
                      if (!1 === ht(t.byMetric)) return !1;
                      if (!1 === yt(t.countryFilter)) return !1;
                      if (!1 === Array.isArray(t.dataSetIndexes)) return !1;
                      if (!1 === ht(t.mode)) return !1;
                      if ('boolean' != typeof t.showStates) return !1;
                      if (!1 === yt(t.startDate)) return !1;
                      return !0;
                    })(t.timeVsCountsState)
                  )
                    return !1;
                  if (!1 === Array.isArray(t.countryKeys)) return !1;
                  if (
                    !1 ===
                    (function(t) {
                      if (!t) return !1;
                      if (!1 === Array.isArray(t.columns)) return !1;
                      if (!1 === dt(t.isConfigOpen)) return !1;
                      if (!1 === dt(t.showAll)) return !1;
                      if (!1 === dt(t.sortByActive)) return !1;
                      if (!1 === dt(t.sortByActivePercent)) return !1;
                      if (!1 === dt(t.sortByConfirmed)) return !1;
                      if (!1 === dt(t.sortByConfirmedPercent)) return !1;
                      if (!1 === dt(t.sortByDeaths)) return !1;
                      if (!1 === dt(t.sortByDeathsPercent)) return !1;
                      if (!1 === dt(t.sortByRecoveries)) return !1;
                      if (!1 === dt(t.sortByRecoveriesPercent)) return !1;
                      if (!1 === dt(t.sortByPopulation)) return !1;
                      if (!1 === dt(t.sortByPopulationDensity)) return !1;
                      return !0;
                    })(t.tableState)
                  )
                    return !1;
                  return (function(t) {
                    if (!t) return !1;
                    if (!1 === yt(t.countryFilter)) return !1;
                    if (!1 === dt(t.isConfigOpen)) return !1;
                    if (!1 === dt(t.showStates)) return !1;
                    return !0;
                  })(t.confirmedVsRecentState);
                })(n)
                ? (Ot(t.state.wipingOld),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, n), {
                    currentSeries: [],
                    dataPromise: qt(t),
                    data: Vt.create(),
                  })
              : null;
          } catch (e) {
            return (
              Ot(t.state.parseFail),
              window.localStorage.setItem('state', ''),
              null
            );
          }
      }
      return null;
    }
    class we extends m {
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
        const t = [
            {
              label: this.props.strings.learningTable.titles.region,
              sort: 'sortByCountry',
            },
            {
              label: this.props.strings.learningTable.titles.active,
              sort: 'sortByActive',
            },
            {
              label: this.props.strings.learningTable.titles.activePercent,
              sort: 'sortByActivePercent',
            },
            {
              label: this.props.strings.learningTable.titles.confirmed,
              sort: 'sortByConfirmed',
            },
            {
              label: this.props.strings.learningTable.titles.confirmedPercent,
              sort: 'sortByConfirmedPercent',
            },
            {
              label: this.props.strings.learningTable.titles.deaths,
              sort: 'sortByDeaths',
            },
            {
              label: this.props.strings.learningTable.titles.deathsPercent,
              sort: 'sortByDeathsPercent',
            },
            {
              label: this.props.strings.learningTable.titles.recoveries,
              sort: 'sortByRecoveries',
            },
            {
              label: this.props.strings.learningTable.titles.recoveriesPercent,
              sort: 'sortByRecoveriesPercent',
            },
            {
              label: this.props.strings.learningTable.titles.mortality,
              sort: 'sortByMortality',
            },
            {
              label: this.props.strings.learningTable.titles.population,
              sort: 'sortByPopulation',
            },
            {
              label: this.props.strings.learningTable.titles.populationDensity,
              sort: 'sortByPopulationDensity',
            },
          ],
          e =
            window.document.body.clientHeight *
            (this.props.state.isConfigOpen ? 0.6 : 0.82),
          n = `width: ${100 / (this.props.state.columns.length || 1)}%;`;
        return y(
          'section',
          { className: `full-size ${ot}` },
          y(
            'section',
            {
              className: this.props.state.isConfigOpen
                ? 'flex-item-60'
                : 'flex-item-95',
            },
            y(
              'table',
              {
                style: `height: ${
                  this.props.state.isConfigOpen ? 83 : 90
                }%; width: 100%;`,
              },
              y(
                'thead',
                null,
                y(
                  'tr',
                  null,
                  t.map((t, e) =>
                    0 === e || this.props.state.columns.indexOf(e) > -1
                      ? y(
                          'th',
                          { style: n, onClick: () => this.clickHeader(t) },
                          t.label
                        )
                      : ''
                  )
                )
              ),
              y(
                'tbody',
                { style: `overflow: auto; max-height: ${e}px;` },
                this.props.timeSeries.map((t, e) => {
                  if (t.counts().length < 1) return '';
                  if (
                    !1 === this.props.state.showAll &&
                    -1 === this.props.countryKeys.indexOf(t.key())
                  )
                    return '';
                  const i = t.country() + (t.state() ? ', ' + t.state() : ''),
                    o = e % 2 == 0 ? 'row-even' : 'row-odd';
                  return y(
                    'tr',
                    {
                      className:
                        this.props.countryKeys.indexOf(t.key()) > -1
                          ? 'row-highlight ' + o
                          : o,
                      onClick: () => this.props.selectCountry(t.key()),
                    },
                    y('td', { style: n }, i),
                    this.props.state.columns.indexOf(1) > -1
                      ? y('td', { style: n }, this.formatNumber(t.lastActive()))
                      : '',
                    this.props.state.columns.indexOf(2) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastActivePercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(3) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatNumber(t.lastConfirmed())
                        )
                      : '',
                    this.props.state.columns.indexOf(4) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastConfirmedPercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(5) > -1
                      ? y('td', { style: n }, this.formatNumber(t.lastDeaths()))
                      : '',
                    this.props.state.columns.indexOf(6) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastDeathsPercent(), 4)
                        )
                      : '',
                    this.props.state.columns.indexOf(7) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatNumber(t.lastRecoveries())
                        )
                      : '',
                    this.props.state.columns.indexOf(8) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastRecoveriesPercent(), 3)
                        )
                      : '',
                    this.props.state.columns.indexOf(9) > -1
                      ? y(
                          'td',
                          { style: n },
                          this.formatDecimal(t.lastMortality(), 2)
                        )
                      : '',
                    this.props.state.columns.indexOf(10) > -1
                      ? y('td', { style: n }, this.formatNumber(t.population()))
                      : '',
                    this.props.state.columns.indexOf(11) > -1
                      ? y(
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
          y(
            'section',
            null,
            y(
              'section',
              { className: it },
              y(Mt, {
                labelTrue: this.props.strings.learningTable.enlarge,
                labelFalse: this.props.strings.learningTable.configure,
                onClick: this.toggleConfig.bind(this),
                state: this.props.state.isConfigOpen,
              }),
              y(Pt, { config: this.props.menu })
            ),
            this.props.state.isConfigOpen
              ? y(
                  'section',
                  { className: it },
                  y(St, {
                    onChange: ft,
                    onClick: t =>
                      this.onChangeColumns(parseInt(t + '', 10) + 1),
                    options: t.map(t => t.label).slice(1),
                    selected: this.props.state.columns.map(t => t - 1),
                  }),
                  y(bt, {
                    onChange: this.toggleShowAll.bind(this),
                    options: [
                      this.props.strings.learningTable.showAll,
                      this.props.strings.learningTable.showOnlySelected,
                    ],
                    selected: this.props.state.showAll ? 0 : 1,
                  })
                )
              : ''
          )
        );
      }
    }
    function Ne({ strings: t }) {
      return y(
        'header',
        { class: 'small-text' },
        t.header.title,
        ' ',
        y(
          'a',
          {
            href: 'https://github.com/CSSEGISandData/COVID-19',
            target: '_blank',
            title: t.header.jhuGitHubTitle,
          },
          t.header.jhuSourceDataLink
        ),
        ' ',
        t.header.explorer,
        ', ',
        t.header.usData,
        ' ',
        y(
          'a',
          {
            href: 'https://github.com/nytimes/covid-19-data',
            target: '_blank',
            title: t.header.usDataTitle,
          },
          t.header.usDataLink
        ),
        '  (',
        y(
          'a',
          {
            href: 'https://github.com/bennett000/covid-19',
            target: '_blank',
            title: t.header.sourceCodeTitle,
          },
          t.header.sourceCodeLink
        ),
        ' | ',
        y(
          'a',
          {
            href: 'https://github.com/bennett000/covid-19/issues',
            target: '_blank',
            title: t.header.feedbackTitle,
          },
          t.header.feedbackLink
        ),
        ')'
      );
    }
    class Te extends m {
      constructor() {
        super(), (this.state = {});
      }
      componentDidMount() {
        this.setState(Object.assign({}, this.state));
      }
      selectShowStates(t) {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            showStates: 0 !== parseInt(t + '', 10),
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
      toggleConfig(t) {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            isConfigOpen: t,
          })
        );
      }
      render() {
        const t =
          !1 === this.props.state.isConfigOpen &&
          0 === this.props.countryKeys.length
            ? ['green']
            : [];
        return y(
          'section',
          { className: `full-size ${ot}` },
          y(et, {
            flexSize: this.props.state.isConfigOpen
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
          y(
            'section',
            { className: it },
            y(Mt, {
              classes: t,
              labelTrue: this.props.strings.confirmedVsRecent.enlarge,
              labelFalse: this.props.strings.confirmedVsRecent.configure,
              onClick: this.toggleConfig.bind(this),
              state: this.props.state.isConfigOpen,
            }),
            y(Pt, { config: this.props.menu })
          ),
          this.props.state.isConfigOpen
            ? y(
                'section',
                { className: 'flex' },
                y(Nt, {
                  classes:
                    0 === this.props.countryKeys.length ? ['highlight'] : [],
                  filter: this.props.state.countryFilter,
                  onUpdateFilter: this.setCountryFilter.bind(this),
                  onChange: this.props.selectCountries,
                  onClear: this.props.clearCountries,
                  onDeselect: this.props.selectCountry,
                  options: this.props.countries.filter(
                    kt(this.props.state.showStates, this.props.strings)
                  ),
                  selected: this.props.countryKeys,
                }),
                y(bt, {
                  onChange: this.selectShowStates.bind(this),
                  options: this.props.strings.states,
                  selected: this.props.state.showStates ? 1 : 0,
                })
              )
            : ''
        );
      }
    }
    class Me extends m {
      constructor() {
        super();
      }
      componentDidMount() {
        (this.base.id = 'chartMapDiv'),
          this.chart ||
            (this.chart = JSC.Chart('chartMapDiv', this.getChartOptions()));
      }
      componentWillReceiveProps(t) {
        this.chart && this.chart.options(this.getChartOptions(t));
      }
      getChartOptions(t = this.props) {
        return {
          title_label_text: t.title || '',
          type: 'map',
          defaultPoint: { tooltip: t.toolTip, z: 0 },
          palette: { pointValue: t => t.options('z'), ranges: t.ranges },
          series: t.series,
        };
      }
      render() {
        return y('div', { className: nt });
      }
    }
    class Pe extends m {
      constructor() {
        super(),
          (this.state = {
            currentSeries: -1,
            dataSet: 0,
            isPlaying: !1,
            map: 'world',
            menuProp: { labels: [], onClick: ft, selected: -1 },
            timer: 0,
            title: '',
            toolTip: '<b>%name<b/> <br/>Active Cases: %zValue',
          }),
          (this.dates = mt(de(), (t, e, n) => ((t[e] = n), t), [])),
          (this.getSeries = this.getCountrySeries);
      }
      componentWillReceiveProps(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            menuProp: Object.assign(Object.assign({}, t.menu), {
              disabled: this.state.isPlaying,
            }),
          })
        );
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
      getMapTitle(t) {
        return void 0 === t
          ? new Date(this.dates[this.dates.length - 1]).toLocaleDateString()
          : this.getSeriesName() +
              ' ' +
              new Date(this.dates[t]).toLocaleDateString();
      }
      getSeriesName() {
        switch (this.state.dataSet) {
          case 0:
            return this.props.strings.geography.mode0;
          case 1:
            return this.props.strings.geography.mode1;
          case 2:
            return this.props.strings.geography.mode2;
          case 3:
            return this.props.strings.geography.mode3;
          default:
            return this.props.strings.geography.mode0;
        }
      }
      togglePlay() {
        const t = !this.state.isPlaying,
          e = new Date('2020-01-22').getTime(),
          n = Math.floor((Date.now() - 864e5 - e) / 1e3 / 60 / 60 / 24);
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            isPlaying: t,
            currentSeries: t ? 0 : -1,
            menuProp: Object.assign(Object.assign({}, this.state.menuProp), {
              disable: t,
            }),
            title: this.getMapTitle(),
            timer: t
              ? setInterval(() => {
                  this.state.currentSeries >= n
                    ? this.togglePlay()
                    : this.setState(
                        Object.assign(Object.assign({}, this.state), {
                          currentSeries: this.state.currentSeries + 1,
                          title: this.getMapTitle(this.state.currentSeries + 1),
                        })
                      );
                }, 500)
              : clearInterval(this.state.timer),
          })
        );
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
          case 'US'.toLowerCase():
            (this.getSeries = this.getStateSeries.bind(this, 'US', 'US')),
              this.setState(
                Object.assign(Object.assign({}, this.state), {
                  map: 'US'.toLowerCase(),
                })
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
      getCountrySeries(t = -1) {
        let e = 0;
        const n = [];
        return (
          this.props.timeSeries.forEach(i => {
            const o = i.countryCode();
            if (o === this.props.strings.countries.world) return null;
            if (Lt[o]) return null;
            if (i.state() && i.state() !== this.props.strings.countries.total)
              return null;
            if (i.locale()) return null;
            if (!i.population()) return null;
            const r = Ie(this.state.dataSet, i, t);
            if (r < 1) return null;
            r > e && (e = r), n.push({ map: 'WORLD.' + o.toLowerCase(), z: r });
          }),
          {
            ranges: je(this.state.dataSet),
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
      getContinentSeries(t, e = -1) {
        let n = 0;
        const i = [];
        return (
          this.props.timeSeries.forEach(o => {
            const r = Gt[o.country()];
            if (!r) return null;
            if (
              r !== t &&
              !(r.indexOf('America') > -1 && t.indexOf('America') > -1)
            )
              return null;
            if (o.state()) {
              if (o.state() !== this.props.strings.countries.total) return null;
              if (o.locale()) return null;
            }
            const a = o.countryCode();
            if (Lt[a]) return null;
            const s = Ie(this.state.dataSet, o, e);
            if (s < 1) return null;
            s > n && (n = s), i.push({ map: a.toLowerCase(), z: s });
          }),
          {
            ranges: je(this.state.dataSet),
            series: [
              {
                defaultPoint_events_click: this.onMapClick.bind(this),
                map: this.state.map,
                points: i,
              },
            ],
          }
        );
      }
      getStateSeries(t, e, n = -1) {
        let i = 0;
        const o = [];
        return (
          this.props.timeSeries.forEach(r => {
            if (r.country() !== t) return null;
            if (r.state() === this.props.strings.countries.total) return null;
            if (r.locale()) return null;
            let a = Ft[t];
            if (!a) {
              if ('US' !== e) return null;
              a = Ut;
            }
            const s = r.stateCode();
            if (!s) return null;
            if (Lt[r.countryCode() + '.' + s]) return null;
            const u = Ie(this.state.dataSet, r, n);
            if (u < 1) return null;
            u > i && (i = u), o.push({ map: e + '.' + s, z: u });
          }),
          {
            ranges: je(this.state.dataSet),
            series: [
              {
                defaultPoint_events_click: this.onMapClick.bind(this),
                map: this.state.map,
                points: o,
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
            toolTip: De(e, this.props.strings),
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
        const { ranges: t, series: e } = this.getSeries(
          this.state.currentSeries
        );
        return y(
          'section',
          { onClick: this.zoomOut.bind(this), className: `full-size ${ot}` },
          y(Me, {
            ranges: t,
            series: e,
            strings: this.props.strings,
            title: this.state.title,
            toolTip: this.state.toolTip,
          }),
          y(
            'section',
            { className: it },
            y(bt, {
              onChange: this.onChangeDataSet.bind(this),
              options: [
                this.props.strings.series.activeCases,
                this.props.strings.series.confirmedCases,
                this.props.strings.series.deaths,
                this.props.strings.series.recoveries,
              ],
              selected: this.state.dataSet,
            }),
            y(Mt, {
              labelFalse: this.props.strings.geography.play,
              labelTrue: this.props.strings.geography.stop,
              onClick: this.togglePlay.bind(this),
              state: this.state.isPlaying,
            }),
            y(Pt, { config: this.state.menuProp })
          )
        );
      }
    }
    function De(t, e) {
      switch (t) {
        case 0:
          return e.geography.toolTip0;
        case 1:
          return e.geography.toolTip1;
        case 2:
          return e.geography.toolTip2;
        case 3:
          return e.geography.toolTip3;
        default:
          return e.geography.toolTipDefault;
      }
    }
    function Ie(t, e, n = -1) {
      if (n < 0)
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
      else
        switch (t) {
          case 0:
            return e.counts()[n].active || 0;
          case 1:
            return e.counts()[n].confirmed || 0;
          case 2:
            return e.counts()[n].deaths || 0;
          case 3:
            return e.counts()[n].recoveries || 0;
          default:
            return e.counts()[n].active || 0;
        }
    }
    function je(t) {
      switch (t) {
        case 0:
          return ut;
        case 1:
          return ct;
        case 2:
          return lt;
        case 3:
          return pt;
        default:
          return ut;
      }
    }
    function Be({ title: t, list: e }) {
      return y(
        'section',
        null,
        y('h3', null, t),
        y(
          'ul',
          null,
          e.map(t =>
            y(
              'li',
              null,
              y('strong', null, t.name, ':'),
              ' ',
              'function' == typeof t.description
                ? t.description()
                : t.description
            )
          )
        )
      );
    }
    class Ee extends m {
      constructor() {
        super(), (this.state = {});
      }
      render() {
        const t = [
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
                y(
                  'span',
                  null,
                  this.props.strings.descriptions.series.estimatedActiveCases
                    .part1,
                  ' ',
                  y(
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
                y(
                  'span',
                  null,
                  this.props.strings.descriptions.series.projectionSeir.part1,
                  ' ',
                  y(
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
          e = [
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
          i = [
            {
              name: this.props.strings.scaleTypes.linear,
              description: this.props.strings.descriptions.scales.linear,
            },
            {
              name: this.props.strings.scaleTypes.logarithmic,
              description: this.props.strings.descriptions.scales.logarithmic,
            },
          ];
        return y(
          'section',
          { className: 'full-size' },
          y(Be, {
            title: this.props.strings.descriptions.titles.series,
            list: t,
          }),
          y(Be, {
            title: this.props.strings.descriptions.titles.modes,
            list: n,
          }),
          y(Be, {
            title: this.props.strings.descriptions.titles.scales,
            list: i,
          }),
          y(Be, {
            title: this.props.strings.descriptions.titles.metrics,
            list: e,
          }),
          y(Pt, { config: this.props.menu })
        );
      }
    }
    class xe extends m {
      constructor(t) {
        super();
        let e = ke(t.strings);
        var n;
        e ||
          (Ot(t.strings.app.log.noState),
          (n = t.strings),
          (e = {
            countries: [],
            currentSeries: [],
            data: Vt.create(),
            dataPromise: qt(n),
            countryKeys: Oe,
            routePath: '/',
            timeVsCountsState: {
              dataSetIndexes: [0],
              byMetric: 0,
              countryFilter: '',
              isConfigOpen: !1,
              mode: 2,
              scaleType: 0,
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
              sortByRecoveries: !1,
              sortByRecoveriesPercent: !1,
              sortByPopulation: !1,
              sortByPopulationDensity: !1,
            },
            confirmedVsRecentState: {
              countryFilter: '',
              isConfigOpen: !1,
              showStates: !1,
            },
          })),
          (this.state = e),
          this.selectAndUpdate(),
          (this.menu = {
            labels: t.strings.app.menu.map(t => t.name),
            onClick: t => {
              const e =
                this.props.strings.app.menu[t].route ||
                this.props.strings.app.menu[0].route;
              this.setState(
                Object.assign(Object.assign({}, this.state), {
                  currentSeries: [],
                  routePath: e,
                })
              ),
                (this.menu.selected = t),
                W(e),
                this.selectAndUpdate();
            },
            selected: t.strings.app.menu.reduce(
              (t, e, n) => (e.route === this.state.routePath ? n : t),
              0
            ),
          });
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
          .then(({ timeSeries: t }) => {
            return (
              this.setState(
                Object.assign(Object.assign({}, this.state), { data: t })
              ),
              (e = this.props.cache),
              (n = this.state).dataPromise.then(
                ({ countries: t, timeSeries: i }) => {
                  let o;
                  return (
                    (o = '/' === n.routePath ? ge(e, n, i) : me(0, n, i)),
                    { countries: t, series: o }
                  );
                }
              )
            );
            var e, n;
          })
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
                      currentSeries: void 0,
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
      timeVsCounts(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { timeVsCountsState: t })
        ),
          this.selectAndUpdate();
      }
      confirmedVsRecent(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), {
            confirmedVsRecentState: t,
          })
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
              dataPromise: qt(this.props.strings).then(
                t => (this.selectAndUpdate(), t)
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
      selectCountries(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { countryKeys: t })
        ),
          this.selectAndUpdate();
      }
      render() {
        return y(
          'div',
          { className: `full-size ${ot}` },
          y(Ne, { strings: this.props.strings }),
          y(
            tt,
            null,
            y(Dt, {
              path: this.props.strings.app.menu[0].route,
              clearCountries: this.clearCountries.bind(this),
              countries: this.state.countries,
              countryKeys: this.state.countryKeys,
              currentSeries: this.state.currentSeries,
              menu: this.menu,
              onChange: this.timeVsCounts.bind(this),
              key: '0',
              reload: this.reload.bind(this),
              selectCountry: this.selectCountry.bind(this),
              selectCountries: this.selectCountries.bind(this),
              state: this.state.timeVsCountsState,
              strings: this.props.strings,
            }),
            y(Te, {
              path: this.props.strings.app.menu[1].route,
              clearCountries: this.clearCountries.bind(this),
              countries: this.state.countries,
              countryKeys: this.state.countryKeys,
              currentSeries: this.state.currentSeries,
              key: '1',
              menu: this.menu,
              onChange: this.confirmedVsRecent.bind(this),
              selectCountry: this.selectCountry.bind(this),
              selectCountries: this.selectCountries.bind(this),
              state: this.state.confirmedVsRecentState,
              strings: this.props.strings,
            }),
            y(we, {
              path: this.props.strings.app.menu[2].route,
              countryKeys: this.state.countryKeys,
              key: '2',
              onChange: this.tableState.bind(this),
              menu: this.menu,
              state: this.state.tableState,
              selectCountry: this.selectCountry.bind(this),
              strings: this.props.strings,
              timeSeries: this.state.data,
            }),
            y(Pe, {
              path: this.props.strings.app.menu[3].route,
              key: '3',
              menu: this.menu,
              strings: this.props.strings,
              timeSeries: this.state.data,
            }),
            y(Ee, {
              path: this.props.strings.app.menu[4].route,
              key: '4',
              strings: this.props.strings,
              menu: this.menu,
            })
          )
        );
      }
    }
    const Re = Fe(n(0));
    function Fe(t) {
      return mt(
        t,
        (t, e, n) => (
          yt(e)
            ? Object.defineProperty(t, n, { get: () => e, set: ft })
            : (t[n] = Fe(e)),
          (t[n] = e),
          t
        ),
        {}
      );
    }
    (function t() {
      const e =
        (function() {
          if (window.localStorage)
            return window.localStorage.getItem('language') || '';
        })() || 'en';
      return (function(t) {
        return n(3)(`./${t}.json`).then(t => Fe(t));
      })(e)
        .then(t => {
          const e = window.document.createElement('section');
          if (((e.className = 'full-size'), !e))
            throw new Error(t.errors.bootstrap);
          window.document.body.appendChild(e),
            (function(t, e) {
              let n = {};
              j(y(xe, { cache: n, reset: () => (n = {}), strings: e }), t);
            })(e, t);
        })
        .catch(n => {
          var i;
          return (
            Ot(Re.i18n.part1, e, Re.i18n.part2, `(${n.message})`),
            (i = ''),
            window.localStorage && window.localStorage.setItem('language', i),
            new Promise((e, n) => {
              setTimeout(() => {
                t()
                  .then(e)
                  .catch(n);
              }, 100);
            })
          );
        });
    })().catch(t => Ot(t.message));
  },
]);
