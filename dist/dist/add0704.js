(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{698:function(t,e,r){"use strict";r.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-1 rounded-lg mt-4"},[e("div",{staticClass:"ml-2 mt-1 text-2xl font-bold"},[t._v("區域概覽")]),t._v(" "),e("img",{staticClass:"w-full",attrs:{src:r(574),alt:"area"}})])}],main=(r(15),r(24),r(557),r(556)),n={data:function(){return{realtimeStatus:[],isLoading:!1,trees:0}},created:function(){var t=this;this.isLoading=!0,Object(main.e)().then((function(e){var data=e.data.summary;if(data){var r=0;data.forEach((function(t){r+=t.generating})),t.trees=(.495*r/12).toFixed(0),t.realtimeStatus=data}})).finally((function(){t.isLoading=!1}))}},o=r(30),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.isLoading?e("CommonLoading"):t._e(),t._v(" "),e("DashboardAreaStatus",{attrs:{"realtime-status":t.realtimeStatus}}),t._v(" "),e("div",{staticClass:"grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0"},[e("DashboardConsuming",{staticClass:"col-span-3",attrs:{"realtime-status":t.realtimeStatus}}),t._v(" "),e("div",[e("div",{staticClass:"py-4 px-2 rounded-lg mt-4 bg-tree h-72 bg-no-repeat bg-cover w-full relative"},[e("div",{staticClass:"ml-2 mt-1 text-2xl font-bold"},[t._v("節能減碳量")]),t._v(" "),e("div",{staticClass:"absolute right-[10%] top-[50%] transform -translate-x-[10%] -translate-y-[50%] text-right max-lg:right-[3%] max-lg:-translate-x-[3%]"},[e("div",{staticClass:"mt-1 text-lg font-bold"},[t._v("相當於種植")]),t._v(" "),e("div",{staticClass:"mt-1 text-6xl font-bold text-dark-yellow200"},[t._v("\n\t\t\t\t\t\t"+t._s(t.trees)+"\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"mt-1 text-lg font-bold"},[t._v("棵樹")])])]),t._v(" "),e("DashboardWeather",{attrs:{"realtime-status":t.realtimeStatus}}),t._v(" "),t._m(0)],1)],1),t._v(" "),e("div",{staticClass:"grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-lg:gap-0"},[e("DashboardAreaChart",{staticClass:"col-span-3"}),t._v(" "),e("DashboardGreenPercent",{attrs:{"realtime-status":t.realtimeStatus}})],1),t._v(" "),e("div",[e("DashboardColumnChart")],1)],1)}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{CommonLoading:r(558).default,DashboardAreaStatus:r(569).default,DashboardConsuming:r(570).default,DashboardWeather:r(579).default,DashboardAreaChart:r(571).default,DashboardGreenPercent:r(572).default,DashboardColumnChart:r(573).default})}}]);