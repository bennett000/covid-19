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
    n((n.s = 8));
})([
  function(t) {
    t.exports = JSON.parse(
      '{"app":{"log":{"noState":"No existing state"},"menu":[{"route":"/","name":"Time vs Counts"},{"route":"/confirmed-vs-recent","name":"Confirmed vs Recent"},{"route":"/table","name":"Table"},{"route":"/geography","name":"Geography"},{"route":"/about","name":"About"}]},"confirmedVsRecent":{"configure":"⚙️ Configure Chart","confirmedCases":"Total Confirmed Cases","enlarge":"✗ Enlarge Chart","recentCases":"Confirmed in Last Seven (7) Days"},"countries":{"total":"Total","world":"World"},"data":{"log":{"countryNotFound":"country not found","deathNoConfirmed":"Warning: data seems odd, there are deaths but no confirmed cases","populationNotFound":"population not found for","recoveryNoConfirmed":"Warning: data seems odd, there are recoveries but no confirmed cases","stateNotFound":"state not found","unexpectedLength":"Warning: unexpected length:"}},"descriptions":{"metrics":{"byPercet":"Uses the percentage of population* note population data is imperfect","byValue":"Uses the raw count"},"modes":{"byDate":"Plots series based on the date the count occured","byFirst":"Plots series starting from the day the first person was confirmed to have covid-19","byFirst100":"Plots series starting from the day the first one hundred (100) people were confirmed to have covid-19"},"scales":{"linear":"scales \\"normally\\" 0, 10, 20, 30, 40, 50...","logarithmic":"scales by a multiplier 0, 10, 100, 1000, 10000... this scale is useful for looking at series that are early in their curve and series that are late in their curve at the same time"},"series":{"activeCases":"Confirmed - Deaths - Recoveries*.  There is an * because this value depends on Recoveries*","confirmedCases":"The number of confirmed cases according to reported data","deaths":"The number of reported deaths, this is the most reliable data point","recoveries":"Roughly how many people have recovered.  There is some actual data but it is not maintained. Recoveries are estimated based on ${recoveryDays} days since the case was reported confirmed","estimatedActiveCases":{"part1":"This estimate is","link":"based on the spreadsheet created for \\"Coronavirus act today...\\".","part2":"","url":"https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca"},"projectionSeir":{"title":"SEIR Projection","part1":"This projection is","link":"based on Gabriel Goh\'s Epidemic Calculator","part2":"","url":"https://gabgoh.github.io/COVID/index.html"}},"titles":{"metrics":"Metrics","modes":"Modes","scales":"Scales","series":"Series"}},"errors":{"bootstrap":"Could not bootstrap the application","chart":{"domError":"could not add the chart to the DOM"}},"geography":{"stop":"Stop","play":"Play","mode0":"Active Cases*","mode1":"Confirmed Cases","mode2":"Deaths","mode3":"Recoveries*","modeDefault":"Active Cases*","toolTip0":"<b>%name<b/> <br/>Active Cases: %zValue","toolTip1":"<b>%name<b/> <br/>Confirmed Cases: %zValue","toolTip2":"<b>%name<b/> <br/>Deaths: %zValue","toolTip3":"<b>%name<b/> <br/>Recoveries: %zValue","toolTipDefault":"<b>%name<b/> <br/>Active Cases: %zValue"},"header":{"explorer":"Explorer","feedbackLink":"feedback","feedbackTitle":"Provide feedback, suggest features, file issues, etc","jhuGitHubTitle":"GitHub repository of source data maintained by Johns Hopkins University","jhuSourceDataLink":"Johns Hopkins University Source Data","sourceCodeLink":"source code","sourceCodeTitle":"Source code to this website","title":"COVID-19","usData":"US Data","usDataLink":"From NYT","usDataTitle":"New York Times US state and county data"},"i18n":{"part1":"Error loading language","part2":"reverting to English"},"learningTable":{"configure":"⚙️ Configure Table","enlarge":"✗ Enlarge Table","showAll":"Show All","showOnlySelected":"Only Selected","titles":{"active":"Active","activePercent":"Active %","confirmed":"Confirmed","confirmedPercent":"Confirmed %","deaths":"Deaths","deathsPercent":"Deaths %","mortality":"Mortality","newConfirmed":"New Confirmed","newDeaths":"New Deaths","peakActive":"Peak Active","peakActivePercent":"Peak Active %","peakMortality":"Peak Mortality","peakNewConfirmed":"Peak New Confirmed","peakNewDeaths":"Peak New Deaths","population":"Population","populationDensity":"Population Density","recoveries":"Recoveries","recoveriesPercent":"Recoveries %","region":"Region"}},"metrics":{"byValue":"By Value","byPercent":"Percent"},"modes":{"byDate":"By date","byFirst":"By first confirmed","byFirst100":"By first 100 confirmed"},"scaleTypes":{"linear":"Linear","logarithmic":"Logarithmic"},"seirInput":{"daysToProject":"Days to Project","durationOfInfection":"Duration of Infection","fatalityRate":"Fatality Rate","incubationPeriod":"Incubation Period","hospitalizationRate":"Hospitalization Rate","lengthOfSevereHospitalStay":"Length of Severe Hospital Stay","recoveryTimeForMildCases":"Recovery Time for Mild Cases","timeFromIncubationToDeath":"Time From Incubation to Death","timeFromIncubationToHospital":"Time From Incubation to Hospital","r0":"R0","unitDays":"days"},"series":{"activeCases":"Active Cases*","confirmedCases":"Confirmed Cases","deaths":"Deaths","estimatedActiveCases":"Estimated Active Cases","newConfirmed":"New Cases","newDeaths":"New Deaths","projectionSeirActive":"SEIR Projection (Active)","projectionSeirDeaths":"SEIR Projection (Deaths)","projectionSeirRecoveries":"SEIR Projection (Recoveries)","recoveries":"Recoveries*"},"state":{"parseFail":"Failed to parse saved state, resetting localStorage","wipingOld":"Upgrade: Wiping old state"},"states":["Show States","Hide States"],"timeVsCounts":{"configureChart":"Chart Settings","configureSeir":"Configure SEIR","configure":"⚙️ Configure Chart","enlarge":"✗ Enlarge Chart","people":"Number of People","percent":"Percentage of Population","reload":"Reload","resetSeir":"Reset SEIR"}}'
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
    var i = n(4),
      o = n(5);
    'string' == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, '']]);
    var a = { insert: 'head', singleton: !1 },
      r = (i(o, a), o.locals ? o.locals : {});
    t.exports = r;
  },
  function(t, e, n) {
    'use strict';
    var i,
      o = function() {
        return (
          void 0 === i &&
            (i = Boolean(window && document && document.all && !window.atob)),
          i
        );
      },
      a = (function() {
        var t = {};
        return function(e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      r = [];
    function s(t) {
      for (var e = -1, n = 0; n < r.length; n++)
        if (r[n].identifier === t) {
          e = n;
          break;
        }
      return e;
    }
    function c(t, e) {
      for (var n = {}, i = [], o = 0; o < t.length; o++) {
        var a = t[o],
          c = e.base ? a[0] + e.base : a[0],
          u = n[c] || 0,
          l = ''.concat(c, ' ').concat(u);
        n[c] = u + 1;
        var p = s(l),
          d = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== p
          ? (r[p].references++, r[p].updater(d))
          : r.push({ identifier: l, updater: m(d, e), references: 1 }),
          i.push(l);
      }
      return i;
    }
    function u(t) {
      var e = document.createElement('style'),
        i = t.attributes || {};
      if (void 0 === i.nonce) {
        var o = n.nc;
        o && (i.nonce = o);
      }
      if (
        (Object.keys(i).forEach(function(t) {
          e.setAttribute(t, i[t]);
        }),
        'function' == typeof t.insert)
      )
        t.insert(e);
      else {
        var r = a(t.insert || 'head');
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(e);
      }
      return e;
    }
    var l,
      p =
        ((l = []),
        function(t, e) {
          return (l[t] = e), l.filter(Boolean).join('\n');
        });
    function d(t, e, n, i) {
      var o = n
        ? ''
        : i.media
        ? '@media '.concat(i.media, ' {').concat(i.css, '}')
        : i.css;
      if (t.styleSheet) t.styleSheet.cssText = p(e, o);
      else {
        var a = document.createTextNode(o),
          r = t.childNodes;
        r[e] && t.removeChild(r[e]),
          r.length ? t.insertBefore(a, r[e]) : t.appendChild(a);
      }
    }
    function h(t, e, n) {
      var i = n.css,
        o = n.media,
        a = n.sourceMap;
      if (
        (o ? t.setAttribute('media', o) : t.removeAttribute('media'),
        a &&
          btoa &&
          (i += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */'
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = i;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
    var y = null,
      f = 0;
    function m(t, e) {
      var n, i, o;
      if (e.singleton) {
        var a = f++;
        (n = y || (y = u(e))),
          (i = d.bind(null, n, a, !1)),
          (o = d.bind(null, n, a, !0));
      } else
        (n = u(e)),
          (i = h.bind(null, n, e)),
          (o = function() {
            !(function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(n);
          });
      return (
        i(t),
        function(e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            i((t = e));
          } else o();
        }
      );
    }
    t.exports = function(t, e) {
      (e = e || {}).singleton ||
        'boolean' == typeof e.singleton ||
        (e.singleton = o());
      var n = c((t = t || []), e);
      return function(t) {
        if (
          ((t = t || []),
          '[object Array]' === Object.prototype.toString.call(t))
        ) {
          for (var i = 0; i < n.length; i++) {
            var o = s(n[i]);
            r[o].references--;
          }
          for (var a = c(t, e), u = 0; u < n.length; u++) {
            var l = s(n[u]);
            0 === r[l].references && (r[l].updater(), r.splice(l, 1));
          }
          n = a;
        }
      };
    };
  },
  function(t, e, n) {
    (e = n(6)(!1)).push([
      t.i,
      '.border-curved {\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  border-radius: 0.5em;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.w-2-em {\n  width: 2em;\n}\n.flex-item-95 {\n  flex: 0 0 88%;\n}\n.flex-item-60 {\n  flex: 0 0 60%;\n}\n.flex-item-20 {\n  flex: 0 0 20%;\n}\n.flex-item-5 {\n  flex: 0 0 5%;\n}\n.full-size {\n  width: 100%;\n  height: 100%;\n}\n.green {\n  background-color: #22cc77;\n}\n.highlight {\n  border-radius: 7px;\n  border-width: 3px;\n  border-color: #22cc77;\n  border-style: solid;\n}\n.padding {\n  padding: 0.6em 1.4em 0.5em 0.8em;\n}\n.row-even {\n  background-color: #cceeff;\n}\n.row-odd {\n  background-color: #ffeeff;\n}\n.row-highlight {\n  background-color: #ffffbb;\n}\n.ui-text {\n  margin: 2px;\n  font-size: 1.3em;\n}\n.small-text {\n  font-size: 0.85em;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.display-block {\n  display: block;\n}\n.text-align-left {\n  text-align: left;\n}\n',
      '',
    ]),
      (t.exports = e);
  },
  function(t, e, n) {
    'use strict';
    t.exports = function(t) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var n = (function(t, e) {
              var n = t[1] || '',
                i = t[3];
              if (!i) return n;
              if (e && 'function' == typeof btoa) {
                var o =
                    ((r = i),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(r))))),
                    (c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                      s
                    )),
                    '/*# '.concat(c, ' */')),
                  a = i.sources.map(function(t) {
                    return '/*# sourceURL='
                      .concat(i.sourceRoot || '')
                      .concat(t, ' */');
                  });
                return [n]
                  .concat(a)
                  .concat([o])
                  .join('\n');
              }
              var r, s, c;
              return [n].join('\n');
            })(e, t);
            return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n;
          }).join('');
        }),
        (e.i = function(t, n, i) {
          'string' == typeof t && (t = [[null, t, '']]);
          var o = {};
          if (i)
            for (var a = 0; a < this.length; a++) {
              var r = this[a][0];
              null != r && (o[r] = !0);
            }
          for (var s = 0; s < t.length; s++) {
            var c = [].concat(t[s]);
            (i && o[c[0]]) ||
              (n &&
                (c[2]
                  ? (c[2] = ''.concat(n, ' and ').concat(c[2]))
                  : (c[2] = n)),
              e.push(c));
          }
        }),
        e
      );
    };
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
      (o.id = 7),
      (t.exports = o);
  },
  function(t, e, n) {
    'use strict';
    n.r(e);
    var i,
      o,
      a,
      r,
      s,
      c,
      u = {},
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
        a = {};
      for (i in e) 'key' !== i && 'ref' !== i && (a[i] = e[i]);
      if (arguments.length > 3)
        for (n = [n], i = 3; i < arguments.length; i++) n.push(o[i]);
      if (
        (null != n && (a.children = n),
        'function' == typeof t && null != t.defaultProps)
      )
        for (i in t.defaultProps) void 0 === a[i] && (a[i] = t.defaultProps[i]);
      return f(t, a, e && e.key, e && e.ref);
    }
    function f(t, e, n, o) {
      var a = {
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
      return i.vnode && i.vnode(a), a;
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
    function v(t) {
      ((!t.__d && (t.__d = !0) && o.push(t) && !a++) ||
        s !== i.debounceRendering) &&
        ((s = i.debounceRendering) || r)(C);
    }
    function C() {
      for (var t; (a = o.length); )
        (t = o.sort(function(t, e) {
          return t.__v.__b - e.__v.__b;
        })),
          (o = []),
          t.some(function(t) {
            var e, n, i, o, a, r;
            t.__d &&
              ((a = (o = (e = t).__v).__e),
              (r = e.__P) &&
                ((n = []),
                (i = N(
                  r,
                  o,
                  d({}, o),
                  e.__n,
                  void 0 !== r.ownerSVGElement,
                  null,
                  n,
                  null == a ? b(o) : a
                )),
                T(n, o),
                i != a && S(o)));
          });
    }
    function A(t, e, n, i, o, a, r, s, c) {
      var p,
        d,
        y,
        f,
        m,
        g,
        S,
        v = (n && n.__k) || l,
        C = v.length;
      if (
        (s == u && (s = null != a ? a[0] : C ? b(n, 0) : null),
        (p = 0),
        (e.__k = w(e.__k, function(n) {
          if (null != n) {
            if (
              ((n.__ = e),
              (n.__b = e.__b + 1),
              null === (y = v[p]) || (y && n.key == y.key && n.type === y.type))
            )
              v[p] = void 0;
            else
              for (d = 0; d < C; d++) {
                if ((y = v[d]) && n.key == y.key && n.type === y.type) {
                  v[d] = void 0;
                  break;
                }
                y = null;
              }
            if (
              ((f = N(t, n, (y = y || u), i, o, a, r, s, c)),
              (d = n.ref) &&
                y.ref != d &&
                (S || (S = []),
                y.ref && S.push(y.ref, null, n),
                S.push(d, n.__c || f, n)),
              null != f)
            ) {
              var l;
              if ((null == g && (g = f), void 0 !== n.__d))
                (l = n.__d), (n.__d = void 0);
              else if (a == y || f != s || null == f.parentNode) {
                t: if (null == s || s.parentNode !== t)
                  t.appendChild(f), (l = null);
                else {
                  for (m = s, d = 0; (m = m.nextSibling) && d < C; d += 2)
                    if (m == f) break t;
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
        (e.__e = g),
        null != a && 'function' != typeof e.type)
      )
        for (p = a.length; p--; ) null != a[p] && h(a[p]);
      for (p = C; p--; ) null != v[p] && D(v[p], v[p]);
      if (S) for (p = 0; p < S.length; p++) O(S[p], S[++p], S[++p]);
    }
    function w(t, e, n) {
      if ((null == n && (n = []), null == t || 'boolean' == typeof t))
        e && n.push(e(null));
      else if (Array.isArray(t))
        for (var i = 0; i < t.length; i++) w(t[i], e, n);
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
    function k(t, e, n) {
      '-' === e[0]
        ? t.setProperty(e, n)
        : (t[e] =
            'number' == typeof n && !1 === p.test(e)
              ? n + 'px'
              : null == n
              ? ''
              : n);
    }
    function _(t, e, n, i, o) {
      var a, r, s, c, u;
      if (
        (o
          ? 'className' === e && (e = 'class')
          : 'class' === e && (e = 'className'),
        'key' === e || 'children' === e)
      );
      else if ('style' === e)
        if (((a = t.style), 'string' == typeof n)) a.cssText = n;
        else {
          if (('string' == typeof i && ((a.cssText = ''), (i = null)), i))
            for (r in i) (n && r in n) || k(a, r, '');
          if (n) for (s in n) (i && n[s] === i[s]) || k(a, s, n[s]);
        }
      else
        'o' === e[0] && 'n' === e[1]
          ? ((c = e !== (e = e.replace(/Capture$/, ''))),
            (u = e.toLowerCase()),
            (e = (u in t ? u : e).slice(2)),
            n
              ? (i || t.addEventListener(e, P, c), ((t.l || (t.l = {}))[e] = n))
              : t.removeEventListener(e, P, c))
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
    function P(t) {
      this.l[t.type](i.event ? i.event(t) : t);
    }
    function N(t, e, n, o, a, r, s, c, p) {
      var h,
        y,
        f,
        b,
        S,
        v,
        C,
        w,
        k,
        P,
        N = e.type;
      if (void 0 !== e.constructor) return null;
      (h = i.__b) && h(e);
      try {
        t: if ('function' == typeof N) {
          if (
            ((w = e.props),
            (k = (h = N.contextType) && o[h.__c]),
            (P = h ? (k ? k.props.value : h.__) : o),
            n.__c
              ? (C = (y = e.__c = n.__c).__ = y.__E)
              : ('prototype' in N && N.prototype.render
                  ? (e.__c = y = new N(w, P))
                  : ((e.__c = y = new g(w, P)),
                    (y.constructor = N),
                    (y.render = I)),
                k && k.sub(y),
                (y.props = w),
                y.state || (y.state = {}),
                (y.context = P),
                (y.__n = o),
                (f = y.__d = !0),
                (y.__h = [])),
            null == y.__s && (y.__s = y.state),
            null != N.getDerivedStateFromProps &&
              (y.__s == y.state && (y.__s = d({}, y.__s)),
              d(y.__s, N.getDerivedStateFromProps(w, y.__s))),
            (b = y.props),
            (S = y.state),
            f)
          )
            null == N.getDerivedStateFromProps &&
              null != y.componentWillMount &&
              y.componentWillMount(),
              null != y.componentDidMount && y.__h.push(y.componentDidMount);
          else {
            if (
              (null == N.getDerivedStateFromProps &&
                w !== b &&
                null != y.componentWillReceiveProps &&
                y.componentWillReceiveProps(w, P),
              !y.__e &&
                null != y.shouldComponentUpdate &&
                !1 === y.shouldComponentUpdate(w, y.__s, P))
            ) {
              for (
                y.props = w,
                  y.state = y.__s,
                  y.__d = !1,
                  y.__v = e,
                  e.__e = n.__e,
                  e.__k = n.__k,
                  y.__h.length && s.push(y),
                  h = 0;
                h < e.__k.length;
                h++
              )
                e.__k[h] && (e.__k[h].__ = e);
              break t;
            }
            null != y.componentWillUpdate && y.componentWillUpdate(w, y.__s, P),
              null != y.componentDidUpdate &&
                y.__h.push(function() {
                  y.componentDidUpdate(b, S, v);
                });
          }
          (y.context = P),
            (y.props = w),
            (y.state = y.__s),
            (h = i.__r) && h(e),
            (y.__d = !1),
            (y.__v = e),
            (y.__P = t),
            (h = y.render(y.props, y.state, y.context)),
            (e.__k =
              null != h && h.type == m && null == h.key
                ? h.props.children
                : Array.isArray(h)
                ? h
                : [h]),
            null != y.getChildContext && (o = d(d({}, o), y.getChildContext())),
            f ||
              null == y.getSnapshotBeforeUpdate ||
              (v = y.getSnapshotBeforeUpdate(b, S)),
            A(t, e, n, o, a, r, s, c, p),
            (y.base = e.__e),
            y.__h.length && s.push(y),
            C && (y.__E = y.__ = null),
            (y.__e = !1);
        } else
          e.__e = (function(t, e, n, i, o, a, r, s) {
            var c,
              p,
              d,
              h,
              y,
              f = n.props,
              m = e.props;
            if (((o = 'svg' === e.type || o), null != a))
              for (c = 0; c < a.length; c++)
                if (
                  null != (p = a[c]) &&
                  ((null === e.type
                    ? 3 === p.nodeType
                    : p.localName === e.type) ||
                    t == p)
                ) {
                  (t = p), (a[c] = null);
                  break;
                }
            if (null == t) {
              if (null === e.type) return document.createTextNode(m);
              (t = o
                ? document.createElementNS('http://www.w3.org/2000/svg', e.type)
                : document.createElement(e.type, m.is && { is: m.is })),
                (a = null);
            }
            if (null === e.type) f !== m && t.data != m && (t.data = m);
            else if (e !== n) {
              if (
                (null != a && (a = l.slice.call(t.childNodes)),
                (d = (f = n.props || u).dangerouslySetInnerHTML),
                (h = m.dangerouslySetInnerHTML),
                !s)
              ) {
                if (f === u)
                  for (f = {}, y = 0; y < t.attributes.length; y++)
                    f[t.attributes[y].name] = t.attributes[y].value;
                (h || d) &&
                  ((h && d && h.__html == d.__html) ||
                    (t.innerHTML = (h && h.__html) || ''));
              }
              (function(t, e, n, i, o) {
                var a;
                for (a in n) a in e || _(t, a, null, n[a], i);
                for (a in e)
                  (o && 'function' != typeof e[a]) ||
                    'value' === a ||
                    'checked' === a ||
                    n[a] === e[a] ||
                    _(t, a, e[a], n[a], i);
              })(t, m, f, o, s),
                (e.__k = e.props.children),
                h || A(t, e, n, i, 'foreignObject' !== e.type && o, a, r, u, s),
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
          })(n.__e, e, n, o, a, r, s, p);
        (h = i.diffed) && h(e);
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
    function O(t, e, n) {
      try {
        'function' == typeof t ? t(e) : (t.current = e);
      } catch (t) {
        i.__e(t, n);
      }
    }
    function D(t, e, n) {
      var o, a, r;
      if (
        (i.unmount && i.unmount(t),
        (o = t.ref) && ((o.current && o.current !== t.__e) || O(o, null, e)),
        n || 'function' == typeof t.type || (n = null != (a = t.__e)),
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
      if ((o = t.__k)) for (r = 0; r < o.length; r++) o[r] && D(o[r], e, n);
      null != a && h(a);
    }
    function I(t, e, n) {
      return this.constructor(t, n);
    }
    function M(t, e, n) {
      var o, a, r;
      i.__ && i.__(t, e),
        (a = (o = n === c) ? null : (n && n.__k) || e.__k),
        (t = y(m, null, [t])),
        (r = []),
        N(
          e,
          ((o ? e : n || e).__k = t),
          a || u,
          u,
          void 0 !== e.ownerSVGElement,
          n && !o ? [n] : a ? null : l.slice.call(e.childNodes),
          r,
          n || u,
          o
        ),
        T(r, t);
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
                return v((n.__E = n));
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
          null != t && this.__v && (e && this.__h.push(e), v(this));
      }),
      (g.prototype.forceUpdate = function(t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), v(this));
      }),
      (g.prototype.render = m),
      (o = []),
      (a = 0),
      (r =
        'function' == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (c = u);
    var B = {};
    function j(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function x(t, e, n) {
      var i,
        o = /(?:\?([^#]*))?(#.*)?$/,
        a = t.match(o),
        r = {};
      if (a && a[1])
        for (var s = a[1].split('&'), c = 0; c < s.length; c++) {
          var u = s[c].split('=');
          r[decodeURIComponent(u[0])] = decodeURIComponent(
            u.slice(1).join('=')
          );
        }
      (t = E(t.replace(o, ''))), (e = E(e || ''));
      for (var l = Math.max(t.length, e.length), p = 0; p < l; p++)
        if (e[p] && ':' === e[p].charAt(0)) {
          var d = e[p].replace(/(^:|[+*?]+$)/g, ''),
            h = (e[p].match(/[+*?]+$/) || B)[0] || '',
            y = ~h.indexOf('+'),
            f = ~h.indexOf('*'),
            m = t[p] || '';
          if (!m && !f && (h.indexOf('?') < 0 || y)) {
            i = !1;
            break;
          }
          if (((r[d] = decodeURIComponent(m)), y || f)) {
            r[d] = t
              .slice(p)
              .map(decodeURIComponent)
              .join('/');
            break;
          }
        } else if (e[p] !== t[p]) {
          i = !1;
          break;
        }
      return (!0 === n.default || !1 !== i) && r;
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
              E(e)
                .map(L)
                .join(''));
          var e;
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
    var G = null,
      U = [],
      V = [],
      z = {};
    function K() {
      var t;
      return (
        '' +
        ((t =
          G && G.location
            ? G.location
            : G && G.getCurrentLocation
            ? G.getCurrentLocation()
            : 'undefined' != typeof location
            ? location
            : z).pathname || '') +
        (t.search || '')
      );
    }
    function H(t, e) {
      return (
        void 0 === e && (e = !1),
        'string' != typeof t && t.url && ((e = t.replace), (t = t.url)),
        (function(t) {
          for (var e = U.length; e--; ) if (U[e].canRoute(t)) return !0;
          return !1;
        })(t) &&
          (function(t, e) {
            void 0 === e && (e = 'push'),
              G && G[e]
                ? G[e](t)
                : 'undefined' != typeof history &&
                  history[e + 'State'] &&
                  history[e + 'State'](null, null, t);
          })(t, e ? 'replace' : 'push'),
        W(t)
      );
    }
    function W(t) {
      for (var e = !1, n = 0; n < U.length; n++)
        !0 === U[n].routeTo(t) && (e = !0);
      for (var i = V.length; i--; ) V[i](t);
      return e;
    }
    function J(t) {
      if (t && t.getAttribute) {
        var e = t.getAttribute('href'),
          n = t.getAttribute('target');
        if (e && e.match(/^\//g) && (!n || n.match(/^_?self$/i))) return H(e);
      }
    }
    function $(t) {
      if (!(t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || 0 !== t.button))
        return J(t.currentTarget || t.target || this), Y(t);
    }
    function Y(t) {
      return (
        t &&
          (t.stopImmediatePropagation && t.stopImmediatePropagation(),
          t.stopPropagation && t.stopPropagation(),
          t.preventDefault()),
        !1
      );
    }
    function Z(t) {
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
            if (J(e)) return Y(t);
          }
        } while ((e = e.parentNode));
      }
    }
    var q = !1;
    var Q = (function(t) {
      function e(e) {
        t.call(this, e),
          e.history && (G = e.history),
          (this.state = { url: e.url || K() }),
          q ||
            ('function' == typeof addEventListener &&
              (G ||
                addEventListener('popstate', function() {
                  W(K());
                }),
              addEventListener('click', Z)),
            (q = !0));
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
          var e = w(this.props.children);
          return this.getMatchingChildren(e, t, !1).length > 0;
        }),
        (e.prototype.routeTo = function(t) {
          this.setState({ url: t });
          var e = this.canRoute(t);
          return this.updating || this.forceUpdate(), e;
        }),
        (e.prototype.componentWillMount = function() {
          U.push(this), (this.updating = !0);
        }),
        (e.prototype.componentDidMount = function() {
          var t = this;
          G &&
            (this.unlisten = G.listen(function(e) {
              t.routeTo('' + (e.pathname || '') + (e.search || ''));
            })),
            (this.updating = !1);
        }),
        (e.prototype.componentWillUnmount = function() {
          'function' == typeof this.unlisten && this.unlisten(),
            U.splice(U.indexOf(this), 1);
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
                    j(o, i),
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
            a = this.getMatchingChildren(w(n), o, !0),
            r = a[0] || null,
            s = this.previousUrl;
          return (
            o !== s &&
              ((this.previousUrl = o),
              'function' == typeof i &&
                i({
                  router: this,
                  url: o,
                  previous: s,
                  active: a,
                  current: r,
                })),
            r
          );
        }),
        e
      );
    })(g);
    (Q.subscribers = V),
      (Q.getCurrentUrl = K),
      (Q.route = H),
      (Q.Router = Q),
      (Q.Route = function(t) {
        return y(t.component, t);
      }),
      (Q.Link = function(t) {
        return y('a', j({ onClick: $ }, t));
      }),
      (Q.exec = x);
    var X = Q;
    const tt = Object.freeze({
        daysFromInfectionToDeath: 17.3,
        doublingTime: 6.18,
        fatalityRate: 0.0087,
        minDeaths: 10,
      }),
      et = [
        '#e01010',
        '#067ff1',
        '#5adc13',
        '#14f8e5',
        '#e30ed6',
        '#ff6600',
        '#ece019',
        '#590596',
      ],
      nt = [
        '#f09090',
        '#add0f1',
        '#b5dc9f',
        '#b7f8f3',
        '#e3c1e1',
        '#ffc6a0',
        '#ece79c',
        '#9e8dce',
      ],
      it = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 100], color: '#fff5f5' },
        { value: [100, 1e3], color: '#ffdcdc' },
        { value: [1e3, 5e3], color: '#ffa0a0' },
        { value: [5e3, 15e3], color: '#ff7373' },
        { value: [15e3, 5e4], color: '#ff4b4b' },
        { value: [5e4, 15e4], color: '#ff1919' },
        { value: [15e4, 5e9], color: '#c60000' },
      ],
      ot = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 500], color: '#fff5f5' },
        { value: [500, 5e3], color: '#ffdcdc' },
        { value: [5e3, 15e3], color: '#ffa0a0' },
        { value: [15e3, 5e4], color: '#ff7373' },
        { value: [5e4, 15e4], color: '#ff4b4b' },
        { value: [15e4, 5e5], color: '#ff1919' },
        { value: [5e5, 5e9], color: '#c60000' },
      ],
      at = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [0, 50], color: '#fff5f5' },
        { value: [50, 150], color: '#ffdcdc' },
        { value: [150, 500], color: '#ffa0a0' },
        { value: [500, 1500], color: '#ff7373' },
        { value: [1500, 1e4], color: '#ff4b4b' },
        { value: [1e4, 5e4], color: '#ff1919' },
        { value: [5e4, 5e9], color: '#c60000' },
      ],
      rt = [
        { value: [0, 1], color: '#FFFFFF' },
        { value: [1, 500], color: '#f0fff0' },
        { value: [500, 5e3], color: '#dcffdc' },
        { value: [5e3, 5e4], color: '#beffbe' },
        { value: [5e4, 25e4], color: '#a0ffa0' },
        { value: [25e4, 1e6], color: '#78ff78' },
        { value: [1e6, 5e6], color: '#41ff41' },
        { value: [5e6, 5e9], color: '#009900' },
      ],
      st = [];
    function ct() {
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
    function ut(...t) {
      console.log('COVID-19', ...t);
    }
    function lt(t, e) {
      return n =>
        !1 === t ||
        n.name.toLowerCase().indexOf('korea') > -1 ||
          !(n.name.indexOf(',') > -1) ||
            n.name.indexOf(`, ${e.countries.total}`) > -1;
    }
    class pt extends g {
      constructor() {
        super(),
          (this.componentWillReceiveProps = (function(t, e = 50) {
            let n = 0,
              i = [];
            const o = () => {
              try {
                t(...i);
              } catch (t) {
                ut('Warning debounced function failed: ' + t.message);
              } finally {
                (n = 0), (i = []);
              }
            };
            return (...t) => {
              (i = t),
                n
                  ? (clearTimeout(n), (n = setTimeout(o, e)))
                  : (n = setTimeout(o, e));
            };
          })(t => {
            (this.chart = null), this.createChart(t);
          }));
      }
      createChart(t = this.props) {
        !this.chart &&
          t.options.series.length &&
          (this.chart = JSC.Chart('chartDiv', t.options));
      }
      componentDidMount() {
        (this.base.id = 'chartDiv'), this.createChart();
      }
      render() {
        return y('div', { className: this.props.flexSize });
      }
    }
    const dt = 'border-curved',
      ht = 'display-block',
      yt = 'full-size',
      ft = 'flex',
      mt = 'flex flex-col',
      gt = 'padding',
      bt = 'text-align-left',
      St = Object.freeze({
        button: [dt, gt, 'ui-text'],
        input: [dt, gt, 'ui-text'],
        selectBox: [dt, gt, 'ui-text'],
      });
    function vt(t) {
      return 'boolean' == typeof t;
    }
    function Ct(t) {
      return 'number' == typeof t;
    }
    function At(t) {
      return 'string' == typeof t;
    }
    function wt() {}
    function kt(t, e) {
      Object.keys(t).forEach((n, i) => {
        e(t[n], n, i, t);
      });
    }
    function _t(t, e, n) {
      return Object.keys(t).reduce((n, i, o) => e(n, t[i], i, o, t), n);
    }
    function Pt({ classes: t, onChange: e, options: n, selected: i }) {
      return y(
        'select',
        { className: t ? t.join(' ') : '', onChange: t => e(t.target.value) },
        n.map((t, e) =>
          At(t)
            ? y(
                'option',
                i === e ? { value: e, selected: !0 } : { value: e },
                t
              )
            : y(
                'option',
                i === e ? { value: t.index, selected: !0 } : { value: t.index },
                t.name
              )
        )
      );
    }
    function Nt({
      classes: t,
      onChange: e,
      onClick: n,
      options: i,
      selected: o,
    }) {
      const a = t ? t.join(' ') : '';
      n = n || wt;
      const r = t => n(t.target.value);
      return y(
        'select',
        {
          className: a,
          onChange: t =>
            e(
              (function(t) {
                let e = [];
                for (let n = 0; n < t.length; n += 1) {
                  const i = t[n];
                  i.selected && e.push(i.value);
                }
                return e;
              })(t.target.options)
            ),
          multiple: !0,
        },
        i.map((t, e) => {
          const n = 'option-' + t;
          return At(t)
            ? o.indexOf(e) > -1
              ? y('option', { key: n, onClick: r, value: e, selected: !0 }, t)
              : y('option', { key: n, onClick: r, value: e }, t)
            : o.indexOf(t.index) > -1
            ? y(
                'option',
                { key: n, onClick: r, value: t.index, selected: !0 },
                t.name
              )
            : y('option', { key: n, onClick: r, value: t.index }, t.name);
        })
      );
    }
    function Tt({ classes: t, onChange: e, ymdString: n }) {
      return y('input', {
        className: t ? t.join(' ') : ' ',
        onChange: t => e(t.target.value),
        type: 'date',
        value: n,
      });
    }
    function Ot({ classes: t, isDisabled: e, label: n, onClick: i }) {
      return y(
        'button',
        { className: t ? t.join(' ') : '', onClick: i, disabled: e },
        n
      );
    }
    function Dt({
      classes: t,
      listenKeyUp: e,
      onChange: n,
      placeholder: i,
      value: o,
    }) {
      const a = t => n(t.target.value);
      return y('input', {
        className: t ? t.join(' ') : '',
        onChange: a,
        onKeyUp: e ? a : wt,
        placeholder: i || '',
        type: 'text',
        value: o,
      });
    }
    function It(t) {
      return t.filter
        ? t.options.filter(e =>
            At(e)
              ? e.toLowerCase().indexOf(t.filter.toLowerCase()) > -1
              : e.name.toLowerCase().indexOf(t.filter.toLowerCase()) > -1
          )
        : t.options;
    }
    function Mt(t) {
      const e = t.classes ? t.classes.join(' ') : '';
      return y(
        'div',
        { className: e.length ? `${e} ${mt}` : mt },
        y(
          'div',
          { className: ft },
          ct()
            ? ''
            : y(Dt, {
                classes: t.inputStringClasses,
                listenKeyUp: !0,
                onChange: t.onUpdateFilter,
                placeholder: 'filter',
                value: t.filter,
              }),
          y(Ot, {
            classes: t.inputButtonClasses,
            label: '✗',
            onClick: t.onClear,
          })
        ),
        ct()
          ? y(Nt, {
              classes: t.inputSelectClasses,
              onChange: e => {
                t.onChange(e);
              },
              options: It(t),
              selected: t.selected,
            })
          : y(Nt, {
              classes: t.inputSelectClasses,
              onChange: wt,
              onClick: e => {
                t.onDeselect(e);
              },
              options: It(t),
              selected: t.selected,
            })
      );
    }
    function Bt({
      clearCountries: t,
      countries: e,
      countryKeys: n,
      onChange: i,
      onConfigureSeir: o,
      onUpdateCountryFilter: a,
      reload: r,
      selectCountry: s,
      selectCountries: c,
      state: u,
      strings: l,
    }) {
      const p = [
          l.series.activeCases,
          l.series.confirmedCases,
          l.series.deaths,
          l.series.recoveries,
          l.series.newConfirmed,
          l.series.newDeaths,
          l.series.estimatedActiveCases,
          l.series.projectionSeirActive,
          l.series.projectionSeirDeaths,
          l.series.projectionSeirRecoveries,
        ],
        d = [l.modes.byDate, l.modes.byFirst, l.modes.byFirst100],
        h = [l.scaleTypes.linear, l.scaleTypes.logarithmic],
        f = l.states,
        m = [l.metrics.byValue, l.metrics.byPercent];
      return y(
        'section',
        { className: `${ft} flex-item-20` },
        y(
          'section',
          { className: mt },
          y(Pt, {
            classes: St.selectBox,
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  mode: parseInt(t + '', 10),
                })
              );
            },
            options: d,
            selected: u.mode,
          }),
          y(Pt, {
            classes: St.selectBox,
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  scaleType: parseInt(t + '', 10),
                })
              );
            },
            options: h,
            selected: u.scaleType,
          }),
          y(Tt, {
            classes: St.input,
            onChange: function(t) {
              i(Object.assign(Object.assign({}, u), { startDate: t }));
            },
            ymdString: u.startDate,
          }),
          y(Ot, {
            classes: St.button,
            label: l.timeVsCounts.configureSeir,
            onClick: o,
          })
        ),
        y(Nt, {
          classes: St.selectBox,
          onChange: function(t) {
            i(
              Object.assign(Object.assign({}, u), {
                dataSetIndexes: t.map(t => parseInt(t + '', 10)),
              })
            );
          },
          options: p,
          selected: u.dataSetIndexes,
        }),
        y(Mt, {
          classes: 0 === n.length ? ['highlight'] : [],
          inputButtonClasses: St.button,
          inputSelectClasses: St.selectBox,
          inputStringClasses: St.input,
          filter: u.countryFilter,
          onUpdateFilter: a,
          onChange: c,
          onClear: t,
          onDeselect: s,
          options: e.filter(lt(u.showStates, l)),
          selected: n,
        }),
        y(
          'div',
          { className: mt },
          y(Pt, {
            classes: St.selectBox,
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  showStates: 0 !== parseInt(t + '', 10),
                })
              );
            },
            options: f,
            selected: u.showStates ? 1 : 0,
          }),
          y(Pt, {
            classes: St.selectBox,
            onChange: function(t) {
              i(
                Object.assign(Object.assign({}, u), {
                  byMetric: parseInt(t + '', 10),
                })
              );
            },
            options: m,
            selected: u.byMetric,
          }),
          y(Ot, {
            classes: St.button,
            label: l.timeVsCounts.reload,
            onClick: r,
          })
        )
      );
    }
    function jt({
      classes: t,
      isDisabled: e,
      labelFalse: n,
      labelTrue: i,
      onClick: o,
      state: a,
    }) {
      return y(Ot, {
        classes: t,
        isDisabled: e,
        label: a ? i : n,
        onClick: () => o(!a),
      });
    }
    function xt({
      config: { disable: t, labels: e, onClick: n, selected: i },
    }) {
      return y(
        'nav',
        { className: ft },
        e.map((e, o) =>
          y(Ot, {
            classes: St.button,
            isDisabled: o === i || t,
            label: e,
            onClick: () => n(o),
          })
        )
      );
    }
    function Rt({
      classes: t,
      listenKeyUp: e,
      onChange: n,
      placeholder: i,
      useDecimals: o,
      value: a,
    }) {
      const r = o ? t => parseFloat(t + '') : t => parseInt(t + '', 10);
      o || (a = parseInt(a + '', 10));
      const s = t => n(r(t.target.value));
      return y('input', {
        className: t ? t.join(' ') : '',
        onChange: s,
        onKeyUp: e ? s : wt,
        pattern: o ? '[0-9]*(.[0-9]*)' : '[0-9]*',
        placeholder: i || '',
        type: 'text',
        value: a,
      });
    }
    function Ft({ onChange: t, state: e, strings: n }) {
      const { seirInput: i } = n,
        o = t => (t < 0 ? 0 : t),
        a = t => (t < 0 ? 0 : t > 1 ? 1 : t);
      return y(
        'table',
        null,
        [
          [
            {
              prop: 'r0',
              filter: t => (t >= 0 && t < 30 ? t : 2.2),
              unit: '',
              decimals: !0,
            },
            {
              prop: 'incubationPeriod',
              filter: o,
              unit: i.unitDays,
              decimals: !1,
            },
            { prop: 'fatalityRate', filter: a, unit: '%', decimals: !0 },
            {
              prop: 'lengthOfSevereHospitalStay',
              filter: o,
              unit: i.unitDays,
              decimals: !1,
            },
            { prop: 'hospitalizationRate', filter: a, unit: '%', decimals: !0 },
          ],
          [
            { prop: 'daysToProject', filter: o, unit: '', decimals: !1 },
            {
              prop: 'durationOfInfection',
              filter: o,
              unit: i.unitDays,
              decimals: !1,
            },
            {
              prop: 'timeFromIncubationToDeath',
              filter: o,
              unit: i.unitDays,
              decimals: !1,
            },
            {
              prop: 'recoveryTimeForMildCases',
              filter: o,
              unit: i.unitDays,
              decimals: !1,
            },
            {
              prop: 'timeFromIncubationToHospital',
              filter: o,
              unit: i.unitDays,
              decimals: !1,
            },
          ],
        ].map(n =>
          y(
            'tbody',
            null,
            [void 0, void 0].map((o, a) =>
              y(
                'tr',
                null,
                n.map(n =>
                  '' === n.prop
                    ? y('td', null)
                    : 0 === a
                    ? y('th', null, i[n.prop])
                    : y(
                        'td',
                        { style: 'text-align: center' },
                        y(Rt, {
                          classes: St.input.concat(['w-2-em']),
                          value: e[n.prop],
                          onChange: i => {
                            t(
                              Object.assign(Object.assign({}, e), {
                                [n.prop]: n.filter(i),
                              })
                            );
                          },
                          placeholder: i[n.prop],
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
    const Et = Object.freeze({
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
    function Lt(t, e, n, i, o) {
      let a = [...n],
        r = 0;
      const s = [];
      let c = 0;
      for (c = 0; c < t.length; c += 1) {
        (a = [...n]), (r = c ? t[c - 1][0] * o : 0);
        for (let e = 0; e < a.length; e += 1)
          for (let n = 1; n <= c; n += 1)
            a[e] = a[e] + o * t[c - 1][n] * s[c - 1][e];
        s[c] = e(i + r, a);
      }
      let u = [...n];
      for (let e = 0; e < a.length; e += 1)
        for (let n = 0; n < s.length; n += 1)
          u[e] = u[e] + o * s[n][e] * t[c - 1][n];
      return u;
    }
    class Gt {
      constructor(t = 7e6, e = 1, n = 0) {
        (this.N = t),
          (this.I0 = e),
          (this.initialDeaths = n),
          (this.dt = 2),
          (this.R0 = Gt.r0),
          (this.incubationPeriod = Gt.incubationPeriod),
          (this.durationOfInfection = Gt.durationOfInfection),
          (this.recoveryTimeForMildCases = Gt.recoveryTimeForMildCases),
          (this.timeFromIncubationToHospital = Gt.timeFromIncubationToDeath),
          (this.lengthOfSevereHospitalStay = Gt.lengthOfSevereHospitalStay),
          (this.timeFromIncubationToDeath = Gt.timeFromIncubationToDeath),
          (this.hospitalizationRate = Gt.hospitalizationRate),
          (this.fatalityRate = Gt.fatalityRate);
      }
      static create(t = 7e6, e = 1, n = 0) {
        return new Gt(t, e, n);
      }
      get D_death() {
        return this.timeFromIncubationToDeath - this.durationOfInfection;
      }
      f(t, e) {
        const n = this.R0 / this.durationOfInfection,
          i = 1 / this.incubationPeriod,
          o = 1 / this.durationOfInfection,
          a = e[0],
          r = e[1],
          s = e[2],
          c = e[3],
          u = e[4],
          l = e[5],
          p = e[6];
        return [
          -n * s * a,
          n * s * a - i * r,
          i * r - o * s,
          (1 - this.hospitalizationRate - this.fatalityRate) * o * s -
            (1 / this.recoveryTimeForMildCases) * c,
          this.hospitalizationRate * o * s -
            (1 / this.timeFromIncubationToHospital) * u,
          (1 / this.timeFromIncubationToHospital) * u -
            (1 / this.lengthOfSevereHospitalStay) * l,
          this.fatalityRate * o * s - (1 / this.D_death) * p,
          (1 / this.recoveryTimeForMildCases) * c,
          (1 / this.lengthOfSevereHospitalStay) * l,
          (1 / this.D_death) * p,
        ];
      }
      getSolution(t = 10, e = wt) {
        let n = 40 * t;
        const i = this.dt / 40,
          o = Et.RK4;
        let a = [
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
          r = 0,
          s = 0;
        const c = [],
          u = [],
          l = [];
        for (; n--; ) {
          if ((n + 1) % 40 == 0) {
            const t = [
              this.N * a[9],
              this.N * (a[5] + a[6]),
              this.N * (a[7] + a[8]),
              this.N * a[2],
              this.N * a[1],
            ];
            c.push(t), l.push(a), u.push(this.N * (1 - a[0])), e(this, t, s++);
          }
          (a = Lt(o, this.f.bind(this), a, r, i)), (r += i);
        }
        return {
          P: c,
          deaths: this.N * a[6],
          total: 1 - a[0],
          total_infected: u,
          Iters: l,
          dIters: this.f.bind(this),
        };
      }
    }
    (Gt.r0 = 2.2),
      (Gt.incubationPeriod = 5.2),
      (Gt.durationOfInfection = 2.9),
      (Gt.fatalityRate = 0.02),
      (Gt.timeFromIncubationToDeath = 32),
      (Gt.lengthOfSevereHospitalStay = 31.5 - Gt.durationOfInfection),
      (Gt.recoveryTimeForMildCases = 14 - Gt.durationOfInfection),
      (Gt.hospitalizationRate = 0.2),
      (Gt.timeFromIncubationToHospital = 5);
    class Ut extends g {
      constructor() {
        super(), (this.state = {});
      }
      onConfigureSeir() {
        this.props.onChange(
          Object.assign(Object.assign({}, this.props.state), {
            showSeirState: !this.props.state.showSeirState,
          })
        );
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
      onChangeSeir(t) {
        this.props.onSeirStateChange(t);
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
            yAxis_label_text:
              0 === this.props.state.byMetric
                ? this.props.strings.timeVsCounts.people
                : this.props.strings.timeVsCounts.percent,
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
          { className: `full-size ${mt}` },
          y(pt, {
            flexSize: this.props.state.isConfigOpen
              ? 'flex-item-60'
              : 'flex-item-95',
            options: e,
            strings: this.props.strings,
          }),
          y(
            'section',
            { className: ft },
            y(jt, {
              classes: St.button.concat(t),
              labelTrue: this.props.strings.timeVsCounts.enlarge,
              labelFalse: this.props.strings.timeVsCounts.configure,
              onClick: this.toggleConfig.bind(this),
              state: this.props.state.isConfigOpen,
            }),
            y(xt, { config: this.props.menu })
          ),
          this.props.state.isConfigOpen
            ? this.props.state.showSeirState
              ? y(
                  'div',
                  { className: ft },
                  y(
                    'div',
                    { className: mt },
                    y(Ot, {
                      classes:
                        0 === this.props.countryKeys.length
                          ? St.button.concat(['green'])
                          : St.button,
                      label: this.props.strings.timeVsCounts.configureChart,
                      onClick: this.onConfigureSeir.bind(this),
                    }),
                    y(Ot, {
                      classes: St.button,
                      label: this.props.strings.timeVsCounts.resetSeir,
                      onClick: () =>
                        this.onChangeSeir(
                          Object.assign(Object.assign({}, Gt), {
                            daysToProject: 18,
                          })
                        ),
                    })
                  ),
                  y(Ft, {
                    onChange: this.onChangeSeir.bind(this),
                    state: this.props.seirState,
                    strings: this.props.strings,
                  })
                )
              : y(Bt, {
                  onConfigureSeir: this.onConfigureSeir.bind(this),
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
    var Vt = n(1),
      zt = n(2);
    const Kt = Object.freeze({
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
      Ht = Object.freeze({
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
      Wt = Object.freeze({
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
      Jt = Object.freeze({
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
      $t = Object.freeze({
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
      Yt = Object.freeze({
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
      Zt = Object.freeze(
        Object.keys($t.US).reduce((t, e) => ((t[$t.US[e]] = e), t), {})
      ),
      qt = {
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
    class Qt {
      constructor(t) {
        this.data = t;
      }
      static create(t) {
        return new Qt(t);
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
      peakValue(t) {
        return this.data.counts.length < 1
          ? 0
          : this.data.counts.reduce((e, n) => (n[t] && n[t] > e ? n[t] : e), 0);
      }
      peakPercent(t) {
        return this.data.counts.length < 1 || this.data.population < 1
          ? 0
          : this.data.counts.reduce((e, n) => {
              if (n[t]) {
                const i = (n[t] / this.data.population) * 100;
                if (i > e) return i;
              }
              return e;
            }, 0);
      }
      cloneAndAdd(t = [], e = []) {
        return Qt.create(
          Object.assign(Object.assign({}, this.data), {
            counts: this.data.counts.map(t => Object.assign({}, t)).concat(t),
            dates: this.data.dates.concat(e),
          })
        );
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
      lastNewConfirmed() {
        return this.lastValue('newConfirmed');
      }
      lastNewDeaths() {
        return this.lastValue('newDeaths');
      }
      peakActive() {
        return this.peakValue('active');
      }
      peakActivePercent() {
        return this.peakPercent('active');
      }
      peakConfirmed() {
        return this.peakValue('confirmed');
      }
      peakConfirmedPercent() {
        return this.peakPercent('confirmed');
      }
      peakDeaths() {
        return this.peakValue('deaths');
      }
      peakDeathsPercent() {
        return this.peakPercent('deaths');
      }
      peakRecoveries() {
        return this.peakValue('recoveries');
      }
      peakRecoveriesPercent() {
        return this.peakPercent('recoveries');
      }
      peakMortality() {
        return this.peakValue('confirmed') < 1
          ? 0
          : (this.peakValue('deaths') / this.peakValue('confirmed')) * 100;
      }
      peakNewConfirmed() {
        return this.peakValue('newConfirmed');
      }
      peakNewDeaths() {
        return this.peakValue('newDeaths');
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
      formatName() {
        return this.country() + (this.state() ? ', ' + this.state() : '');
      }
    }
    class Xt extends Array {
      static create() {
        return new Xt();
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
        const t = Xt.create();
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
      sortByNewConfirmed(t = !0) {
        this.sortByProp('lastNewConfirmed', t);
      }
      sortByPeakNewConfirmed(t = !0) {
        this.sortByProp('peakNewConfirmed', t);
      }
      sortByConfirmedPercent(t = !0) {
        this.sortByProp('lastConfirmedPercent', t);
      }
      sortByPeakActive(t = !0) {
        this.sortByProp('peakActive', t);
      }
      sortByPeakActivePercent(t = !0) {
        this.sortByProp('peakActivePercent', t);
      }
      sortByPeakConfirmed(t = !0) {
        this.sortByProp('peakConfirmed', t);
      }
      sortByPeakConfirmedPercent(t = !0) {
        this.sortByProp('peakConfirmedPercent', t);
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
      sortByNewDeaths(t = !0) {
        this.sortByProp('lastNewDeaths', t);
      }
      sortByPeakNewDeaths(t = !0) {
        this.sortByProp('peakNewDeaths', t);
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
      sortByPeakDeaths(t = !0) {
        this.sortByProp('peakDeaths', t);
      }
      sortByPeakMortality(t = !0) {
        this.sortByProp('peakMortality', t);
      }
      sortByPeakDeathsPercent(t = !0) {
        this.sortByProp('peakDeathsPercent', t);
      }
      sortByPeakPopulation(t = !0) {
        this.sortByProp('population', t);
      }
      sortByPeakRecoveries(t = !0) {
        this.sortByProp('peakRecoveries', t);
      }
      sortByPeakRecoveriesPercent(t = !0) {
        this.sortByProp('peakRecoveriesPercent', t);
      }
    }
    const te = (Vt || []).reduce(
        (t, e) => ((t[e.country] = parseInt(e.population, 10)), t),
        {}
      ),
      ee = (zt || []).reduce(
        (t, e) => (
          (t[e.country] = null === e.density ? null : parseInt(e.density, 10)),
          t
        ),
        {}
      ),
      ne = [
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv',
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',
      ];
    function ie(t) {
      return Promise.all([
        Promise.all(ne.map(t => fetch(t)))
          .then(he)
          .then(ge(t))
          .then(se(t))
          .then(oe),
        fetch(
          'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv'
        )
          .then(de)
          .then(ve),
      ])
        .then(ae)
        .then(
          (function(t) {
            return e => (
              kt(e, e => {
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
                        e.deaths && ut(t.data.log.deathNoConfirmed),
                          e.recoveries && ut(t.data.log.recoveryNoConfirmed);
                      return 0;
                    };
                  })(t)(e, n, i, 25)),
                    (e.active = e.confirmed - e.deaths - e.recoveries),
                    (e.projectionReverseDeath = (function(t) {
                      const e = t.deaths / tt.fatalityRate,
                        n = tt.daysFromInfectionToDeath / tt.doublingTime;
                      return e * Math.pow(2, n);
                    })(e)),
                    (e.newConfirmed =
                      e.confirmed - ((i[n - 1] && i[n - 1].confirmed) || 0)),
                    (e.newDeaths =
                      e.deaths - ((i[n - 1] && i[n - 1].deaths) || 0));
                });
              }),
              e
            );
          })(t)
        )
        .then(
          (function(t) {
            return e => (
              kt(e, n => {
                if (n.state !== t.countries.total && n.state) {
                  if (n.locale) return;
                  if (e[n.countryCode]) return;
                  const i = n.countryCode + '.' + t.countries.total;
                  void 0 === e[i] &&
                    (e[i] = Object.assign(Object.assign({}, n), {
                      key: i,
                      locale: '',
                      population: ue(t)(n.country),
                      populationDensity: pe(n.country),
                      state: t.countries.total,
                      counts: [],
                    })),
                    n.counts.forEach((t, n) => {
                      e[i].counts[n]
                        ? (e[i].counts[n] = ce(e[i].counts[n], t))
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
                dates: Object.keys(Se()).map(t => new Date(t)),
                key: t.countries.world,
                locale: '',
                population: 0,
                populationDensity: 0,
                state: '',
                stateCode: '',
                counts: [],
              };
              return (
                kt(e, e => {
                  e.locale ||
                    (e.state && e.state !== t.countries.total) ||
                    ((n.population += e.population),
                    e.counts.forEach((t, e) => {
                      n.counts[e]
                        ? (n.counts[e] = ce(n.counts[e], t))
                        : (n.counts[e] = Object.assign({}, t));
                    }));
                }),
                (e[t.countries.world] = n),
                e
              );
            };
          })(t)
        )
        .then(re)
        .then(Ce);
    }
    function oe(t) {
      return delete t.CA, t;
    }
    function ae([t, e]) {
      return (
        kt(e, (e, n) => {
          void 0 === t[n] && (t[n] = e);
        }),
        t
      );
    }
    function re(t) {
      const e = {},
        n = _t(
          t,
          (t, n, i) => {
            if (n.locale) return t;
            const o = Qt.create(n);
            return t.push(o), (e[i] = o), t;
          },
          Xt.create()
        );
      return { dictionary: e, timeSeries: n };
    }
    function se(t) {
      return e => {
        const n = {},
          i = i => o => {
            const a = Jt[o.country];
            if (!a) return void ut(t.data.log.countryNotFound, o.country);
            let r = a,
              s = '';
            if (o.state) {
              const e = $t[o.country];
              if (!e) return;
              if (((s = e[o.state]), !s))
                return void ut(
                  t.data.log.stateNotFound,
                  o.country + ',',
                  o.state
                );
              r = r + '.' + s;
            }
            o.locale && (r = r + '.' + o.locale),
              n[r]
                ? o.timeSeries.map((e, o) => {
                    void 0 === n[r].counts[o] &&
                      (ut(t.data.log.unexpectedLength, i),
                      (n[r].counts[o] = {
                        active: 0,
                        confirmed: 0,
                        deaths: 0,
                        newConfirmed: 0,
                        newDeaths: 0,
                        recoveries: 0,
                        projectionReverseDeath: 0,
                      })),
                      (n[r].counts[o][i] = e);
                  })
                : (n[r] = {
                    country: o.country,
                    countryCode: a,
                    counts: o.timeSeries.map(t => {
                      const e = {
                        active: 0,
                        confirmed: 0,
                        deaths: 0,
                        newConfirmed: 0,
                        newDeaths: 0,
                        recoveries: 0,
                        projectionReverseDeath: 0,
                      };
                      return (e[i] = t), e;
                    }),
                    dates: e[0][0],
                    key: r,
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
    function ce(t, e) {
      return {
        active: t.active + e.active,
        confirmed: t.confirmed + e.confirmed,
        deaths: t.deaths + e.deaths,
        newConfirmed: t.newConfirmed + e.newConfirmed,
        newDeaths: t.newDeaths + e.newDeaths,
        recoveries: t.recoveries + e.recoveries,
        projectionReverseDeath:
          t.projectionReverseDeath + e.projectionReverseDeath,
      };
    }
    function ue(t) {
      return (e, n, i) => {
        if (i) return 0;
        if (n) return le(e, n, i);
        let o = te[e];
        return (
          o ||
          ((o = te[Kt[e]]),
          o ||
            ((o = Ht[e]), o || (ut(t.data.log.populationNotFound, e, n, i), 0)))
        );
      };
    }
    function le(t, e, n) {
      if (n) return 0;
      if (Wt[t])
        if ('US' === t) {
          const n = Zt[e];
          if (n) {
            const e = 'D.C.' === n ? 'DC' : n;
            if (Wt[t][e]) return Wt[t][e];
          }
        } else if (Wt[t][e]) return Wt[t][e];
      return 0;
    }
    function pe(t, e, n) {
      if (e || n) return 0;
      let i = ee[t];
      return i || ((i = ee[Kt[t]]), i || 0);
    }
    function de(t) {
      return t.text();
    }
    function he(t) {
      return Promise.all(t.map(de));
    }
    function ye(t) {
      const e = t.split(''),
        n = { buffer: '', isEscape: !1, isInQuote: !1 },
        i = () => {
          n.isEscape ? (n.isEscape = !1) : (n.isEscape = !0);
        };
      return e.reduce(
        (t, e, o, a) =>
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
              o === a.length - 1 && (t.push(n.buffer), (n.buffer = '')),
              t),
        []
      );
    }
    function fe(t) {
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
          population: ue(t)(n, o, i),
          populationDensity: pe(n, o, i),
          state: o,
          timeSeries: e.slice(4).map(t => parseInt(t, 10)),
        };
      };
    }
    function me(t) {
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
            .map(ye)
            .filter(t => t.length)
            .map(fe(t)),
        ];
      };
    }
    function ge(t) {
      return e => e.map(me(t));
    }
    function be(t) {
      return t < 10 ? '0' + t : t + '';
    }
    function Se() {
      const t = new Date('2020-01-22').getTime(),
        e = Date.now() - 864e5,
        n = Math.floor((e - t) / 1e3 / 60 / 60 / 24),
        i = {};
      for (let e = 0; e < n; e += 1) {
        const n = new Date(t + 864e5 * e);
        i[
          `${n.getUTCFullYear()}-${be(n.getUTCMonth() + 1)}-${be(
            n.getUTCDate()
          )}`
        ] = e;
      }
      return i;
    }
    function ve(t) {
      const e = (function(t) {
          const e = {};
          return (
            t.forEach(t => {
              if (!t[0] || !t[1]) return;
              const n = Zt[t[1]];
              if (!n) return;
              const i = Ie(n);
              void 0 === e[t[0]] && (e[t[0]] = {}),
                void 0 === e[t[0]][i] &&
                  (e[t[0]][i] = {
                    active: 0,
                    confirmed: 0,
                    deaths: 0,
                    newConfirmed: 0,
                    newDeaths: 0,
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
              .map(ye)
          )
        ),
        [n, i] = (function(t) {
          const e = {},
            n = Object.keys($t.US).filter(t => 'D.C.' !== t),
            i = Se(),
            o = [];
          return (
            kt(i, (i, a) => {
              o.push(new Date(a)),
                n.forEach(n => {
                  const o = Ie(n);
                  if ((void 0 === e[o] && (e[o] = []), t[a] && t[a][o]))
                    e[o][i] = t[a][o];
                  else {
                    const t = e[o][i - 1];
                    e[o][i] = t
                      ? Object.assign({}, t)
                      : {
                          active: 0,
                          confirmed: 0,
                          deaths: 0,
                          newConfirmed: 0,
                          newDeaths: 0,
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
        kt(i, (t, e) => {
          const i = e.split('.')[1],
            a = $t.US[i];
          o[e] = {
            country: 'US',
            countryCode: 'US',
            dates: n,
            key: e,
            locale: '',
            population: le('US', a),
            populationDensity: pe('US', a),
            state: a,
            stateCode: i,
            counts: t,
          };
        }),
        o
      );
    }
    function Ce({ dictionary: t, timeSeries: e }) {
      var n;
      return {
        countries: _t(
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
    function Ae(t) {
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
    }
    function we(t, e, n) {
      let i = 0;
      return n.reduce(
        (n, o) =>
          e.countryKeys.indexOf(o.key()) > -1
            ? (function(t, e, n, i, o) {
                switch (e.timeVsCountsState.mode) {
                  case 1:
                    return Te(t, e, n, i, o, 1);
                  case 2:
                    return Te(t, e, n, i, o, 100);
                  default:
                    return (function(t, e, n, i, o) {
                      const a = new Date(e.timeVsCountsState.startDate),
                        r = Oe(
                          e.seirState,
                          i,
                          -1,
                          e.timeVsCountsState.byMetric
                        );
                      return (
                        e.timeVsCountsState.dataSetIndexes.forEach(t => {
                          const { chart: s, field: c } = _e(t, o, i);
                          Ne(r, t, s) ||
                            (s.points = i.counts().reduce(
                              (function(t, e, n, i, o) {
                                return (a, r, s) => {
                                  if (t.dates()[s] && t.dates()[s] > i) {
                                    const i = De(
                                      e.timeVsCountsState.byMetric,
                                      r[n],
                                      t.population()
                                    );
                                    i &&
                                      a.push({
                                        tooltip: Pe(t, o, s),
                                        x: t.dates()[s],
                                        y: i,
                                      });
                                  }
                                  return a;
                                };
                              })(i, e, c, a, t),
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
    function ke(t, e, n) {
      let i = 0;
      return n.reduce(
        (t, n) =>
          e.countryKeys.indexOf(n.key()) > -1
            ? (function(t, e, n, i, o) {
                const a = et[o % et.length],
                  r = {
                    color: a,
                    line: { color: a },
                    name: i.countryName(),
                    points: [],
                  };
                for (let t = i.counts().length - 1; t > 7; t -= 1) {
                  const e = i.counts()[t],
                    n = i.counts()[t - 7] || {
                      active: 0,
                      confirmed: 0,
                      deaths: 0,
                      newConfirmed: 0,
                      newDeaths: 0,
                      recoveries: 0,
                      projectionReverseDeath: 0,
                    },
                    o = e.confirmed - n.confirmed || 1;
                  e.confirmed < 100 || r.points.push({ x: e.confirmed, y: o });
                }
                return (r.points = r.points.reverse()), n.push(r), n;
              })(0, 0, t, n, i++)
            : t,
        []
      );
    }
    function _e(t, e, n) {
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
              return 'newConfirmed';
            case 5:
              return 'newDeaths';
            case 6:
              return 'projectionReverseDeath';
            default:
              return 'recoveries';
          }
        })(t),
        o = t > 5 ? nt[e % nt.length] : et[e % et.length],
        a = 4 === t || 5 === t ? 'column' : void 0;
      return {
        chart: {
          color: o,
          line: { color: o },
          name: Ae(t) + ' ' + n.countryName(),
          points: [],
          type: a,
        },
        field: i,
      };
    }
    function Pe(t, e, n, i = -1, o = !1) {
      const a = t => (t < 0.01 ? t.toFixed(6) : t.toFixed(2)).toLocaleString();
      return (
        (o ? '<b><i>*** PROJECTION ***</i><br/>' : '') +
        (i < 0
          ? `<b>${t.formatName()}</b> ` + t.dates()[n].toLocaleDateString()
          : `<b>${t.formatName()} Day ` +
            i +
            '</b> (' +
            t.dates()[n].toLocaleDateString() +
            ')') +
        '<br/> Population ' +
        t.population().toLocaleString() +
        (t.populationDensity() ? ` (${t.populationDensity()}/km2)` : '') +
        '<br/><br/>' +
        [
          {
            index: 0,
            label: `Active ${t.counts()[n].active.toLocaleString()} (${a(
              (t.counts()[n].active / t.population()) * 100
            )} %)`,
          },
          {
            index: 1,
            label: `Confirmed ${t.counts()[n].confirmed.toLocaleString()} (${a(
              (t.counts()[n].confirmed / t.population()) * 100
            )} %)`,
          },
          {
            index: 2,
            label: `Deaths ${t.counts()[n].deaths.toLocaleString()} (${a(
              (t.counts()[n].deaths / t.population()) * 100
            )} %)`,
          },
          {
            index: 3,
            label: `Recoveries ${t
              .counts()
              [n].recoveries.toLocaleString()} (${a(
              (t.counts()[n].recoveries / t.population()) * 100
            )} %)`,
          },
        ]
          .sort((t, n) =>
            t.index === e
              ? -1
              : n.index === e
              ? 1
              : t.label < n.label
              ? -1
              : t.label > n.label
              ? 1
              : 0
          )
          .map(({ label: t }, e) => (0 === e ? `<b>${t}</b>` : t))
          .join('<br/>') +
        '<br/><br/>' +
        [
          `New Cases: <b>${t.counts()[n].newConfirmed.toLocaleString()}</b>`,
          `New Deaths: <b>${t.counts()[n].newDeaths.toLocaleString()}</b>`,
        ].join('<br/>')
      );
    }
    function Ne(t, e, n) {
      return 7 === e
        ? ((n.points = t.active), !0)
        : 8 === e
        ? ((n.points = t.deaths), !0)
        : 9 === e && ((n.points = t.recoveries), !0);
    }
    function Te(t, e, n, i, o, a) {
      const r = new Date(e.timeVsCountsState.startDate),
        s = Oe(
          e.seirState,
          i,
          i
            .counts()
            .reduce(
              (t, e, n, i) =>
                -1 !== t ? t : e.confirmed >= a ? i.length - n - 1 : t,
              -1
            ),
          e.timeVsCountsState.byMetric
        );
      return (
        e.timeVsCountsState.dataSetIndexes.forEach(t => {
          const { chart: c, field: u } = _e(t, o, i);
          Ne(s, t, c) ||
            (c.points = i.counts().reduce(
              (function(t, e, n, i, o, a) {
                let r = 0;
                return (s, c, u) => {
                  if (t.dates()[u] && t.dates()[u] > i && c.confirmed >= o) {
                    const i = De(
                      e.timeVsCountsState.byMetric,
                      c[n],
                      t.population()
                    );
                    i && s.push({ tooltip: Pe(t, a, u, r), x: r, y: i }),
                      (r += 1);
                  }
                  return s;
                };
              })(i, e, u, r, a, t),
              []
            )),
            n.push(c);
        }),
        n
      );
    }
    function Oe(t, e, n, i) {
      const o = Gt.create(e.population(), e.lastActive(), e.lastDeaths());
      (o.R0 = t.r0),
        (o.incubationPeriod = t.incubationPeriod),
        (o.durationOfInfection = t.durationOfInfection),
        (o.fatalityRate = t.fatalityRate),
        (o.timeFromIncubationToDeath = t.timeFromIncubationToDeath),
        (o.lengthOfSevereHospitalStay = t.lengthOfSevereHospitalStay),
        (o.recoveryTimeForMildCases = t.recoveryTimeForMildCases),
        (o.hospitalizationRate = t.hospitalizationRate),
        (o.timeFromIncubationToHospital = t.timeFromIncubationToHospital);
      const a = e.dates(),
        r = a[a.length - 1]
          ? a[a.length - 1].getTime()
          : new Date('2020-01-22').getTime(),
        s = o.getSolution(t.daysToProject, (t, n, i) => {
          if (i > 0 && i < 2) {
            const n = (function t(e, n = 3) {
              if (e.counts().length < 2 + n) return Gt.r0;
              const i = e.counts()[e.counts().length - 1 - n],
                o = e.counts()[e.counts().length - 2 - n],
                a = Gt.create(e.population(), o.active, o.deaths);
              for (a.R0 = 3.5; Math.abs(1 / 0) > 50; ) {
                const [t, e, n, o, r] = a.getSolution(3).P[2];
                if (r > i.active + 50) a.R0 -= 0.1;
                else {
                  if (r < i.active - 50) break;
                  if (r < i.active) break;
                  a.R0 -= 0.1;
                }
              }
              return n <= 1 ? a.R0 : (a.R0 + t(e, n - 1)) / 2;
            })(e);
            t.R0 = n > 1.6 ? n - 0.01 : n - 0.55;
          }
          i > 1 && t.R0 > 0.5 && (t.R0 > 1.6 ? (t.R0 -= 0.3) : (t.R0 -= 0.01));
        }),
        c = s.P.length < 35 ? s.P.length : 35,
        u = [],
        l = [],
        p = [],
        d = [],
        h = [];
      for (let t = 1; t < c; t += 1) {
        const o = d[d.length - 1] ||
            e.counts()[e.counts().length - 1] || {
              active: 0,
              confirmed: 0,
              deaths: 0,
              newConfirmed: 0,
              newDeaths: 0,
              recoveries: 0,
              projectionReverseDeath: 0,
            },
          c = {
            active: 0,
            confirmed: 0,
            deaths: 0,
            newConfirmed: 0,
            newDeaths: 0,
            recoveries: 0,
            projectionReverseDeath: 0,
          };
        (c.active = s.P[t][4]),
          (c.newConfirmed = c.active - o.active),
          (c.confirmed = o.confirmed + c.active - o.active),
          (c.deaths = s.P[t][0]),
          (c.newDeaths = c.deaths - o.deaths),
          (c.recoveries = s.P[t][2]),
          d.push(c);
        const y = h[h.length - 1] || a[a.length - 1] || new Date();
        h.push(new Date(y.getTime() + (t > 1 ? 864e5 : 0)));
        const f = e.cloneAndAdd(d, h),
          m = -1 === n ? new Date(r + 864e5 * (t - 1)) : n + t - 1;
        u.push({
          tooltip: Pe(
            f,
            0,
            f.counts().length - 1,
            -1 === n ? -1 : n + t - 1,
            !0
          ),
          x: m,
          y: 0 === i ? c.active : (c.active / e.population()) * 100,
        }),
          l.push({
            tooltip: Pe(f, 2, f.counts().length - 1, n, !0),
            x: m,
            y: 0 === i ? c.deaths : (c.deaths / e.population()) * 100,
          }),
          p.push({
            tooltip: Pe(f, 3, f.counts().length - 1, n, !0),
            x: m,
            y: 0 === i ? c.recoveries : (c.recoveries / e.population()) * 100,
          });
      }
      return { active: u, deaths: l, recoveries: p };
    }
    function De(t, e, n) {
      return 0 === t ? e : n ? (e / n) * 100 : 0;
    }
    function Ie(t) {
      return 'US.' + t;
    }
    function Me(t) {
      if (window.localStorage) {
        const e = window.localStorage.getItem('state');
        if (e)
          try {
            const n = JSON.parse(e);
            return n
              ? !1 === Fe(Be, n)
                ? (ut(t.state.wipingOld),
                  window.localStorage.setItem('state', ''),
                  null)
                : Object.assign(Object.assign({}, n), {
                    currentSeries: [],
                    dataPromise: ie(t),
                    data: Xt.create(),
                  })
              : null;
          } catch (e) {
            return (
              ut(t.state.parseFail),
              window.localStorage.setItem('state', ''),
              null
            );
          }
      }
      return null;
    }
    const Be = [
        { prop: 'countries', is: Array.isArray },
        {
          prop: 'timeVsCountsState',
          is: function(t) {
            return Fe(je, t);
          },
        },
        { prop: 'countryKeys', is: Array.isArray },
        {
          prop: 'tableState',
          is: function(t) {
            return Fe(xe, t);
          },
        },
        {
          prop: 'confirmedVsRecentState',
          is: function(t) {
            if (!t) return !1;
            if (!1 === At(t.countryFilter)) return !1;
            if (!1 === vt(t.isConfigOpen)) return !1;
            if (!1 === vt(t.showStates)) return !1;
            return !0;
          },
        },
        {
          prop: 'seirState',
          is: function(t) {
            return Fe(Re, t);
          },
        },
      ],
      je = [
        { prop: 'isConfigOpen', is: vt },
        { prop: 'byMetric', is: Ct },
        { prop: 'countryFilter', is: At },
        { prop: 'dataSetIndexes', is: Array.isArray },
        { prop: 'mode', is: Ct },
        { prop: 'showStates', is: vt },
        { prop: 'showSeirState', is: vt },
        { prop: 'startDate', is: At },
      ],
      xe = [
        { prop: 'columns', is: Array.isArray },
        { prop: 'isConfigOpen', is: vt },
        { prop: 'showAll', is: vt },
        { prop: 'sortByActive', is: vt },
        { prop: 'sortByActivePercent', is: vt },
        { prop: 'sortByConfirmed', is: vt },
        { prop: 'sortByConfirmedPercent', is: vt },
        { prop: 'sortByDeaths', is: vt },
        { prop: 'sortByDeathsPercent', is: vt },
        { prop: 'sortByRecoveries', is: vt },
        { prop: 'sortByRecoveriesPercent', is: vt },
        { prop: 'sortByPeakActive', is: vt },
        { prop: 'sortByPeakActivePercent', is: vt },
        { prop: 'sortByPopulation', is: vt },
        { prop: 'sortByPopulationDensity', is: vt },
      ],
      Re = [
        { prop: 'daysToProject', is: Ct },
        { prop: 'r0', is: Ct },
        { prop: 'incubationPeriod', is: Ct },
        { prop: 'durationOfInfection', is: Ct },
        { prop: 'fatalityRate', is: Ct },
        { prop: 'timeFromIncubationToDeath', is: Ct },
        { prop: 'lengthOfSevereHospitalStay', is: Ct },
        { prop: 'recoveryTimeForMildCases', is: Ct },
        { prop: 'hospitalizationRate', is: Ct },
        { prop: 'timeFromIncubationToHospital', is: Ct },
      ];
    function Fe(t, e) {
      return !!e && t.reduce((t, n) => (!1 === t ? t : n.is(e[n.prop])), !0);
    }
    const Ee = [dt, gt, ht, bt].join(' '),
      Le = [gt, ht, bt].join(' ');
    class Ge extends g {
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
          ? this.props.state.columns.length < 6
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
              value: t => t.formatName(),
            },
          ].concat(
            [
              {
                label: this.props.strings.learningTable.titles.active,
                sort: 'sortByActive',
                value: t => t.lastActive().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.activePercent,
                sort: 'sortByActivePercent',
                value: t =>
                  t
                    .lastActivePercent()
                    .toFixed(3)
                    .toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.confirmed,
                sort: 'sortByConfirmed',
                value: t => t.lastConfirmed().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.confirmedPercent,
                sort: 'sortByConfirmedPercent',
                value: t =>
                  t
                    .lastConfirmedPercent()
                    .toFixed(3)
                    .toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.deaths,
                sort: 'sortByDeaths',
                value: t => t.lastDeaths().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.deathsPercent,
                sort: 'sortByDeathsPercent',
                value: t =>
                  t
                    .lastDeathsPercent()
                    .toFixed(6)
                    .toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.recoveries,
                sort: 'sortByRecoveries',
                value: t => t.lastRecoveries().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles
                  .recoveriesPercent,
                sort: 'sortByRecoveriesPercent',
                value: t =>
                  t
                    .lastRecoveriesPercent()
                    .toFixed(3)
                    .toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.mortality,
                sort: 'sortByMortality',
                value: t => t.lastMortality().toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.newConfirmed,
                sort: 'sortByNewConfirmed',
                value: t => t.lastNewConfirmed().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.newDeaths,
                sort: 'sortByNewDeaths',
                value: t => t.lastNewDeaths().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.peakActive,
                sort: 'sortByPeakActive',
                value: t => t.peakActive().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles
                  .peakActivePercent,
                sort: 'sortByPeakActivePercent',
                value: t =>
                  t
                    .peakActivePercent()
                    .toFixed(3)
                    .toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.peakMortality,
                sort: 'sortByPeakMortality',
                value: t => t.peakMortality().toLocaleString() + '%',
              },
              {
                label: this.props.strings.learningTable.titles.peakNewConfirmed,
                sort: 'sortByPeakNewConfirmed',
                value: t => t.peakNewConfirmed().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.peakNewDeaths,
                sort: 'sortByPeakNewDeaths',
                value: t => t.peakNewDeaths().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles.population,
                sort: 'sortByPopulation',
                value: t => t.population().toLocaleString(),
              },
              {
                label: this.props.strings.learningTable.titles
                  .populationDensity,
                sort: 'sortByPopulationDensity',
                value: t => t.populationDensity().toLocaleString(),
              },
            ].sort((t, e) =>
              t.label < e.label ? -1 : t.label > e.label ? 1 : 0
            )
          ),
          e =
            window.document.body.clientHeight *
            (this.props.state.isConfigOpen ? 0.6 : 0.82),
          n = `width: ${100 / (this.props.state.columns.length || 1)}%;`;
        return y(
          'section',
          { className: `full-size ${mt}` },
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
                className: 'border-collapse',
              },
              y(
                'thead',
                { className: ht },
                y(
                  'tr',
                  { className: ft },
                  t.map((t, e) =>
                    0 === e || this.props.state.columns.indexOf(e) > -1
                      ? y(
                          'th',
                          {
                            className: Ee,
                            style: n,
                            onClick: () => this.clickHeader(t),
                          },
                          t.label
                        )
                      : ''
                  )
                )
              ),
              y(
                'tbody',
                { className: ht, style: `overflow: auto; max-height: ${e}px;` },
                this.props.timeSeries.map((e, i) => {
                  if (e.counts().length < 1) return '';
                  if (
                    !1 === this.props.state.showAll &&
                    -1 === this.props.countryKeys.indexOf(e.key())
                  )
                    return '';
                  const o = i % 2 == 0 ? 'row-even' : 'row-odd';
                  return y(
                    'tr',
                    {
                      className: [
                        this.props.countryKeys.indexOf(e.key()) > -1
                          ? 'row-highlight ' + o
                          : o,
                        ft,
                      ].join(' '),
                      onClick: () => this.props.selectCountry(e.key()),
                    },
                    t.map((t, i) =>
                      0 === i || this.props.state.columns.indexOf(i) > -1
                        ? y('td', { className: Le, style: n }, t.value(e))
                        : ''
                    )
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
              { className: ft },
              y(jt, {
                classes: St.button,
                labelTrue: this.props.strings.learningTable.enlarge,
                labelFalse: this.props.strings.learningTable.configure,
                onClick: this.toggleConfig.bind(this),
                state: this.props.state.isConfigOpen,
              }),
              y(xt, { config: this.props.menu })
            ),
            this.props.state.isConfigOpen
              ? y(
                  'section',
                  { className: ft },
                  y(Nt, {
                    classes: St.selectBox,
                    onChange: wt,
                    onClick: t =>
                      this.onChangeColumns(parseInt(t + '', 10) + 1),
                    options: t.map(t => t.label).slice(1),
                    selected: this.props.state.columns.map(t => t - 1),
                  }),
                  y(Pt, {
                    classes: St.selectBox,
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
    function Ue({ strings: t }) {
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
    class Ve extends g {
      constructor() {
        super(), (this.state = {});
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
          { className: `full-size ${mt}` },
          y(pt, {
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
            { className: ft },
            y(jt, {
              classes: St.button.concat(t),
              labelTrue: this.props.strings.confirmedVsRecent.enlarge,
              labelFalse: this.props.strings.confirmedVsRecent.configure,
              onClick: this.toggleConfig.bind(this),
              state: this.props.state.isConfigOpen,
            }),
            y(xt, { config: this.props.menu })
          ),
          this.props.state.isConfigOpen
            ? y(
                'section',
                { className: `${ft}` },
                y(Mt, {
                  classes:
                    0 === this.props.countryKeys.length ? ['highlight'] : [],
                  inputButtonClasses: St.button,
                  inputSelectClasses: St.selectBox,
                  inputStringClasses: St.input,
                  filter: this.props.state.countryFilter,
                  onUpdateFilter: this.setCountryFilter.bind(this),
                  onChange: this.props.selectCountries,
                  onClear: this.props.clearCountries,
                  onDeselect: this.props.selectCountry,
                  options: this.props.countries.filter(
                    lt(this.props.state.showStates, this.props.strings)
                  ),
                  selected: this.props.countryKeys,
                }),
                y(Pt, {
                  classes: St.selectBox,
                  onChange: this.selectShowStates.bind(this),
                  options: this.props.strings.states,
                  selected: this.props.state.showStates ? 1 : 0,
                })
              )
            : ''
        );
      }
    }
    class ze extends g {
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
          defaultPoint: {
            attributes: { toolTip: '<b>%name</b>' },
            tooltip: '%toolTip',
            z: 0,
          },
          palette: { pointValue: t => t.options('z'), ranges: t.ranges },
          series: t.series,
        };
      }
      render() {
        return y('div', { className: yt });
      }
    }
    class Ke extends g {
      constructor() {
        super(),
          (this.state = {
            currentSeries: -1,
            dataSet: 0,
            isPlaying: !1,
            map: 'world',
            menuProp: { labels: [], onClick: wt, selected: -1 },
            timer: 0,
            title: '',
          }),
          (this.dates = _t(Se(), (t, e, n) => ((t[e] = n), t), [])),
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
            if (qt[o]) return null;
            if (i.state() && i.state() !== this.props.strings.countries.total)
              return null;
            if (i.locale()) return null;
            if (!i.population()) return null;
            const a = He(this.state.dataSet, i, t);
            if (a < 1) return null;
            a > e && (e = a),
              n.push({
                attributes: {
                  toolTip: Pe(i, this.state.dataSet, i.counts().length - 1),
                },
                map: 'WORLD.' + o.toLowerCase(),
                z: a,
              });
          }),
          {
            ranges: We(this.state.dataSet),
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
            const a = Yt[o.country()];
            if (!a) return null;
            if (
              a !== t &&
              !(a.indexOf('America') > -1 && t.indexOf('America') > -1)
            )
              return null;
            if (o.state()) {
              if (o.state() !== this.props.strings.countries.total) return null;
              if (o.locale()) return null;
            }
            const r = o.countryCode();
            if (qt[r]) return null;
            const s = He(this.state.dataSet, o, e);
            if (s < 1) return null;
            s > n && (n = s),
              i.push({
                attributes: {
                  toolTip: Pe(o, this.state.dataSet, o.counts().length - 1),
                },
                map: r.toLowerCase(),
                z: s,
              });
          }),
          {
            ranges: We(this.state.dataSet),
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
          this.props.timeSeries.forEach(a => {
            if (a.country() !== t) return null;
            if (a.state() === this.props.strings.countries.total) return null;
            if (a.locale()) return null;
            let r = $t[t];
            if (!r) {
              if ('US' !== e) return null;
              r = Zt;
            }
            const s = a.stateCode();
            if (!s) return null;
            if (qt[a.countryCode() + '.' + s]) return null;
            const c = He(this.state.dataSet, a, n);
            if (c < 1) return null;
            c > i && (i = c),
              o.push({
                attributes: {
                  toolTip: Pe(a, this.state.dataSet, a.counts().length - 1),
                },
                map: e + '.' + s,
                z: c,
              });
          }),
          {
            ranges: We(this.state.dataSet),
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
          Object.assign(Object.assign({}, this.state), { dataSet: e })
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
          { onClick: this.zoomOut.bind(this), className: `full-size ${mt}` },
          y(ze, {
            ranges: t,
            series: e,
            strings: this.props.strings,
            title: this.state.title,
          }),
          y(
            'section',
            { className: ft },
            y(Pt, {
              classes: St.selectBox,
              onChange: this.onChangeDataSet.bind(this),
              options: [
                this.props.strings.series.activeCases,
                this.props.strings.series.confirmedCases,
                this.props.strings.series.deaths,
                this.props.strings.series.recoveries,
              ],
              selected: this.state.dataSet,
            }),
            y(jt, {
              classes: St.button,
              labelFalse: this.props.strings.geography.play,
              labelTrue: this.props.strings.geography.stop,
              onClick: this.togglePlay.bind(this),
              state: this.state.isPlaying,
            }),
            y(xt, { config: this.state.menuProp })
          )
        );
      }
    }
    function He(t, e, n = -1) {
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
    function We(t) {
      switch (t) {
        case 0:
          return it;
        case 1:
          return ot;
        case 2:
          return at;
        case 3:
          return rt;
        default:
          return it;
      }
    }
    function Je({ title: t, list: e }) {
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
    class $e extends g {
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
          y(Je, {
            title: this.props.strings.descriptions.titles.series,
            list: t,
          }),
          y(Je, {
            title: this.props.strings.descriptions.titles.modes,
            list: n,
          }),
          y(Je, {
            title: this.props.strings.descriptions.titles.scales,
            list: i,
          }),
          y(Je, {
            title: this.props.strings.descriptions.titles.metrics,
            list: e,
          }),
          y(xt, { config: this.props.menu })
        );
      }
    }
    n(3);
    class Ye extends g {
      constructor(t) {
        super();
        let e = Me(t.strings);
        var n;
        e ||
          (ut(t.strings.app.log.noState),
          (n = t.strings),
          (e = {
            countries: [],
            currentSeries: [],
            data: Xt.create(),
            dataPromise: ie(n),
            countryKeys: st,
            routePath: '/',
            seirState: {
              daysToProject: 18,
              r0: Gt.r0,
              incubationPeriod: Gt.incubationPeriod,
              durationOfInfection: Gt.durationOfInfection,
              recoveryTimeForMildCases: Gt.recoveryTimeForMildCases,
              timeFromIncubationToHospital: Gt.timeFromIncubationToDeath,
              lengthOfSevereHospitalStay: Gt.lengthOfSevereHospitalStay,
              timeFromIncubationToDeath: Gt.timeFromIncubationToDeath,
              hospitalizationRate: Gt.hospitalizationRate,
              fatalityRate: Gt.fatalityRate,
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
                H(e),
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
                    (o = '/' === n.routePath ? we(e, n, i) : ke(0, n, i)),
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
              dataPromise: ie(this.props.strings).then(
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
      onSeirStateChange(t) {
        this.setState(
          Object.assign(Object.assign({}, this.state), { seirState: t })
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
          { className: `full-size ${mt}` },
          y(Ue, { strings: this.props.strings }),
          y(
            X,
            null,
            y(Ut, {
              path: this.props.strings.app.menu[0].route,
              clearCountries: this.clearCountries.bind(this),
              countries: this.state.countries,
              countryKeys: this.state.countryKeys,
              currentSeries: this.state.currentSeries,
              menu: this.menu,
              onChange: this.timeVsCounts.bind(this),
              onSeirStateChange: this.onSeirStateChange.bind(this),
              key: '0',
              reload: this.reload.bind(this),
              seirState: this.state.seirState,
              selectCountry: this.selectCountry.bind(this),
              selectCountries: this.selectCountries.bind(this),
              state: this.state.timeVsCountsState,
              strings: this.props.strings,
            }),
            y(Ve, {
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
            y(Ge, {
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
            y(Ke, {
              path: this.props.strings.app.menu[3].route,
              key: '3',
              menu: this.menu,
              strings: this.props.strings,
              timeSeries: this.state.data,
            }),
            y($e, {
              path: this.props.strings.app.menu[4].route,
              key: '4',
              strings: this.props.strings,
              menu: this.menu,
            })
          )
        );
      }
    }
    const Ze = qe(n(0));
    function qe(t) {
      return _t(
        t,
        (t, e, n) => (
          At(e)
            ? Object.defineProperty(t, n, { get: () => e, set: wt })
            : (t[n] = qe(e)),
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
        return n(7)(`./${t}.json`).then(t => qe(t));
      })(e)
        .then(t => {
          const e = window.document.createElement('section');
          if (((e.className = 'full-size'), !e))
            throw new Error(t.errors.bootstrap);
          window.document.body.appendChild(e),
            (function(t, e) {
              let n = {};
              M(y(Ye, { cache: n, reset: () => (n = {}), strings: e }), t);
            })(e, t);
        })
        .catch(n => {
          var i;
          return (
            ut(Ze.i18n.part1, e, Ze.i18n.part2, `(${n.message})`),
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
    })().catch(t => ut(t.message));
  },
]);
