(window.webpackJsonp=window.webpackJsonp||[]).push([[35,10,25,26,27,28,29,30,31],{556:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));n(86);var r=n(692).a.create({baseURL:"https://www.slgesc.nat.gov.tw/"});function o(){return r.get("WeatherReport")}function l(){return r.get("RealtimeStatus")}function c(t,e,n,o,l){return r.get("HistoryTrend/".concat(t,"/").concat(e,"/").concat(n,"/").concat(o,"/").concat(l))}function m(){return r.get("ConsumptionCompare")}function d(t,e){return r.get("PowerMonthSummary/".concat(t,"/").concat(e))}function h(t){return r.get("PowerYearSummary/".concat(t))}},557:function(t,e,n){"use strict";var r=n(3),o=n(5),l=n(52),c=n(341),m=n(340),d=n(4),h=RangeError,f=String,v=Math.floor,y=o(m),F=o("".slice),x=o(1..toFixed),_=function(t,e,n){return 0===e?n:e%2==1?_(t,e-1,n*t):_(t*t,e/2,n)},C=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=v(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=v(n/t),n=n%t*1e7},O=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!d((function(){x({})}))},{toFixed:function(t){var e,n,r,o,m=c(this),d=l(t),data=[0,0,0,0,0,0],v="",x="0";if(d<0||d>20)throw h("Incorrect fraction digits");if(m!=m)return"NaN";if(m<=-1e21||m>=1e21)return f(m);if(m<0&&(v="-",m=-m),m>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(m*_(2,69,1))-69)<0?m*_(2,-e,1):m/_(2,e,1),n*=4503599627370496,(e=52-e)>0){for(C(data,0,n),r=d;r>=7;)C(data,1e7,0),r-=7;for(C(data,_(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),C(data,1,1),k(data,2),x=O(data)}else C(data,0,n),C(data,1<<-e,0),x=O(data)+y("0",d);return x=d>0?v+((o=x.length)<=d?"0."+y("0",d-o)+x:F(x,0,o-d)+"."+F(x,o-d)):v+x}})},558:function(t,e,n){"use strict";n.r(e);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center bg-dark-black200/80 w-full fixed h-full top-0 left-0 z-[999]"},[e("div",{staticClass:"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2",attrs:{role:"status"}},[e("svg",{staticClass:"w-20 h-20 mr-2 text-gray-100 animate-spin fill-dark-yellow200",attrs:{"aria-hidden":"true",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),e("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}),[],!1,null,null,null);e.default=component.exports},580:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;data&&(this.consuming=(data[0].consuming/790*100).toFixed(0),this.generating=data[0].generating,this.getConsuming(),this.getGenerating())},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("RdCenter","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#4F6947"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("RdCenter","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#4F6947"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-center border-b-2 border-gray-600 p-4 text-dark-yellow200 font-bold"},[t._v("\n\t\tC區 資安暨智慧科技研發大樓\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t790 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},581:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;data&&(this.consuming=(data[1].consuming/1200*100).toFixed(0),this.generating=data[1].generating,this.getConsuming(),this.getGenerating())},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("ITRI","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#856C2D"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("ITRI","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#856C2D"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\tD區 綠能科技示範場域\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t1200 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},582:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;data&&(this.consuming=(data[2].consuming/1200*100).toFixed(0),this.generating=data[2].generating,this.getConsuming(),this.getGenerating())},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("exhibition","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#477880"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("exhibition","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#477880"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\tA區 大臺南會展中心\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t1200 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},583:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;if(data){this.consuming=100,this.generating=data[3].generating,this.getConsuming(),this.getGenerating()}},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("K","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#88522E"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("K","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#88522E"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\tK棟 工研院k棟示範場所\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t0 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},584:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;data&&(this.consuming=(data[4].consuming/799*100).toFixed(0),this.generating=data[4].generating,this.getConsuming(),this.getGenerating())},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("E","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#813731"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("E","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#813731"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\tE區 中研院南部院區\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t799 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},585:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;data&&(this.consuming=(data[6].consuming/200*100).toFixed(0),this.generating=data[6].generating,this.getConsuming(),this.getGenerating())},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("R","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#6D3265"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("R","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#6D3265"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\t住區 智慧綠能循環住宅園區\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t200 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},586:function(t,e,n){"use strict";n.r(e);n(557),n(85),n(15),n(49);var main=n(556),r={props:{realtimeStatus:{type:Array,required:!0},powerMonth:{type:Object,required:!0},nameList:{type:Array,required:!0}},data:function(){return{chartConsumingOptions:{},chartGeneratingOptions:{},isLoading:!0,consuming:null,generating:null}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var data=this.realtimeStatus;data&&(this.consuming=(data[7].consuming/150*100).toFixed(0),this.generating=data[7].generating,this.getConsuming(),this.getGenerating())},getConsuming:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("C1","consumingPercent","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartConsumingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#204C71"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"契約容量占比 (%)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時契約容量占比 ".concat(t.consuming,"%"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},tooltip:{headerFormat:"{point.key:%Y/%m/%d %A}<br/>"},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))},getGenerating:function(){var t=this,e=this.$moment().subtract(1,"days").format("x"),n=this.$moment().format("x");Object(main.b)("C1","generating","Hour",e,n).then((function(e){var data=e.data;if(data){for(var n=data.series,i=0;i<n.length;i++){var r;r=n[i].data.map((function(e){return[t.$moment(e[0]).format("MMM Do"),e[1]]})),n[i].data=r}t.chartGeneratingOptions={credits:{enabled:!1},legend:{itemStyle:{color:"#FFF",fontWeight:"normal"}},colors:["#204C71"],chart:{type:"area",backgroundColor:"transparent"},xAxis:{type:"datetime",dateTimeLabelFormats:{day:"%m月%d日"},labels:{style:{color:"#FFF"}}},yAxis:{title:{text:"發電量 (kW)",style:{color:"#FFF",font:"normal 16px '微軟正黑體'"}},labels:{style:{color:"#FFF"}}},title:{text:"即時發電量 ".concat(t.generating.toFixed(0)," kW"),style:{color:"#FFF",font:"normal 20px '微軟正黑體'"}},plotOptions:{area:{marker:{enabled:!1,symbol:"circle",radius:2,states:{hover:{enabled:!0}}},pointInterval:36e5,pointStart:t.$moment().subtract(1,"days")}},series:n}}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg text-neutral-100 mt-4"},[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("div",{staticClass:"text-2xl text-dark-yellow200 font-bold text-center border-b-2 border-gray-600 p-4"},[t._v("\n\t\tC1區 臺灣智駕測試實驗室\n\t")]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-lg:gap-0 mt-4"},[t.chartConsumingOptions.series?e("highchart",{attrs:{options:t.chartConsumingOptions}}):t._e(),t._v(" "),t.chartGeneratingOptions.series?e("highchart",{attrs:{options:t.chartGeneratingOptions}}):t._e()],1),t._v(" "),t.powerMonth?e("div",{staticClass:"grid grid-cols-5 gap-4 text-center px-4 max-lg:grid-cols-2 my-4"},[t._m(0),t._v(" "),t._l(t.powerMonth.data,(function(n,r){return e("div",{key:r,staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("\n\t\t\t\t"+t._s(t.nameList[r])+"\n\t\t\t")]),t._v("\n\t\t\t"+t._s(n.toFixed(0))+" kW\n\t\t")])}))],2):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"backdrop-blur-sm bg-white/30 rounded-lg"},[e("div",[t._v("契約容量")]),t._v("\n\t\t\t150 kW\n\t\t")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:n(558).default})},695:function(t,e,n){"use strict";n.r(e);n(15),n(31),n(49);var main=n(556),r={data:function(){return{realtimeStatus:[],isLoading:!1,powerMonth:[],nameList:["最高發電量","最高用電量","平均發電量","平均用電量"]}},created:function(){var t=this;this.isLoading=!0,Object(main.e)().then((function(e){var data=e.data.summary;data&&(t.realtimeStatus=data)})).finally((function(){t.isLoading=!1})),this.getData()},methods:{getData:function(){var t=this,e=this.$moment().year(),n=this.$moment().format("M");this.isLoading=!0,Object(main.c)(e,n).then((function(e){var data=e.data;if(data){var n=data.filter((function(t){return 6!==t.monitorID}));t.powerMonth=n.map((function(t){return{name:t.displayName,data:[t.maxGenerating,t.maxConsuming,t.avgGenerating,t.avgConsuming]}}))}})).finally((function(){t.isLoading=!1}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",[t.powerMonth[0]?e("GeneratingAreaC",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[0],"name-list":t.nameList}}):t._e(),t._v(" "),t.powerMonth[1]?e("GeneratingAreaD",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[1],"name-list":t.nameList}}):t._e(),t._v(" "),t.powerMonth[2]?e("GeneratingAreaA",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[2],"name-list":t.nameList}}):t._e(),t._v(" "),t.powerMonth[3]?e("GeneratingAreaK",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[3],"name-list":t.nameList}}):t._e(),t._v(" "),t.powerMonth[4]?e("GeneratingAreaE",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[4],"name-list":t.nameList}}):t._e(),t._v(" "),t.powerMonth[5]?e("GeneratingAreaR",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[5],"name-list":t.nameList}}):t._e(),t._v(" "),t.powerMonth[6]?e("GeneratingAreaC1",{attrs:{"realtime-status":t.realtimeStatus,"power-month":t.powerMonth[6],"name-list":t.nameList}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GeneratingAreaC:n(580).default,GeneratingAreaD:n(581).default,GeneratingAreaA:n(582).default,GeneratingAreaK:n(583).default,GeneratingAreaE:n(584).default,GeneratingAreaR:n(585).default,GeneratingAreaC1:n(586).default})}}]);