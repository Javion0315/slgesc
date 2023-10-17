(window.webpackJsonp=window.webpackJsonp||[]).push([[18,10],{556:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return f}));n(86);var r=n(692).a.create({baseURL:"https://www.slgesc.nat.gov.tw/"});function o(){return r.get("WeatherReport")}function l(){return r.get("RealtimeStatus")}function c(t,e,n,o,l){return r.get("HistoryTrend/".concat(t,"/").concat(e,"/").concat(n,"/").concat(o,"/").concat(l))}function d(){return r.get("ConsumptionCompare")}function m(t,e){return r.get("PowerMonthSummary/".concat(t,"/").concat(e))}function f(t){return r.get("PowerYearSummary/".concat(t))}},558:function(t,e,n){"use strict";n.r(e);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center bg-dark-black200/80 w-full fixed h-full top-0 left-0 z-[999]"},[e("div",{staticClass:"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2",attrs:{role:"status"}},[e("svg",{staticClass:"w-20 h-20 mr-2 text-gray-100 animate-spin fill-dark-yellow200",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}),[],!1,null,null,null);e.default=component.exports},699:function(t,e,n){"use strict";n.r(e);n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0}},data:function(){return{chartOptions:{},chartGreenPercentOptions:{},isLoading:!0}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){this.realtimeStatus&&(this.getPower(),this.getGreenPercent())},getPower:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("exhibition","generating:storing:consuming","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#4F6947","#856C2D","#477880"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},title:{style:{color:"#FFF",font:"normal 20px '微軟正黑體'",display:"none"}},yAxis:{title:{text:"kW",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}},gridLineDashStyle:"Dash"},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{depth:100,marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0},inactive:{enabled:!1}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGreenPercent:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("exhibition","greenPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGreenPercentOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#477880"],chart:{type:"column",backgroundColor:"transparent"},title:{style:{color:"#FFF",font:"normal 20px '微軟正黑體'",display:"none"}},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"}},yAxis:{title:{text:"綠能滲透率 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},plotOptions:{column:{pointPadding:.2,borderWidth:0,pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\tA區 大臺南會展中心\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartOptions.series?e("highchart",{attrs:{options:t.chartOptions}}):t._e(),t._v(" "),t.chartGreenPercentOptions.series?e("highchart",{attrs:{options:t.chartGreenPercentOptions}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})}}]);