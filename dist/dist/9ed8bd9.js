(window.webpackJsonp=window.webpackJsonp||[]).push([[17,11],{557:function(t,e,n){"use strict";var r=n(3),o=n(5),l=n(52),c=n(341),d=n(340),f=n(4),m=RangeError,h=String,v=Math.floor,C=o(d),x=o("".slice),_=o(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=v(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=v(n/t),n=n%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+C("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!f((function(){_({})}))},{toFixed:function(t){var e,n,r,o,d=c(this),f=l(t),data=[0,0,0,0,0,0],v="",_="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return h(d);if(d<0&&(v="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),r=f;r>=7;)y(data,1e7,0),r-=7;for(y(data,w(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),y(data,1,1),k(data,2),_=S(data)}else y(data,0,n),y(data,1<<-e,0),_=S(data)+C("0",f);return _=f>0?v+((o=_.length)<=f?"0."+C("0",f-o)+_:x(_,0,o-f)+"."+x(_,o-f)):v+_}})},562:function(t,e,n){"use strict";n.r(e);n(342);var r={props:{title:{type:String,required:!1},theme:{type:String,required:!1,default:"green"},percent:{type:[String,Number],required:!0},isShowTitle:{type:Boolean,required:!1,default:!0}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.isShowTitle?e("div",{staticClass:"flex justify-between mb-1 items-center"},[e("span",{staticClass:"text-base font-medium",class:"text-dark-"+t.theme},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),t._v(" "),e("span",{staticClass:"text-sm font-medium",class:"text-dark-"+t.theme},[t._v(t._s(t.percent)+"%")])]):t._e(),t._v(" "),t.isShowTitle?e("div",{staticClass:"w-full bg-gray-200 rounded-full h-2.5"},[t.theme&&t.percent?e("div",{staticClass:"h-2.5 rounded-full",style:{width:"".concat(t.percent,"%"),backgroundColor:t.theme}}):t._e()]):e("div",{staticClass:"grid grid-cols-3 items-center"},[e("div",{staticClass:"w-full bg-gray-200 rounded-full h-2.5 flex-1 col-span-2"},[t.theme&&t.percent?e("div",{staticClass:"h-2.5 rounded-full",style:{width:"".concat(t.percent,"%"),backgroundColor:t.theme}}):t._e()]),t._v(" "),e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-sm text-left"},[t._v(t._s(t.percent)+"%")])])])])}),[],!1,null,null,null);e.default=component.exports},572:function(t,e,n){"use strict";n.r(e);n(85),n(31),n(15),n(24),n(40),n(557),n(53);var r={props:{realtimeStatus:{type:Array,required:!0}},data:function(){return{list:[]}},mounted:function(){var t=this;setTimeout((function(){t.getData()}),500)},methods:{getData:function(){var t=this,e=[{name:"資安暨智慧科技研發大樓(C)",code:"RdCenter"},{name:"綠能科技示範場域(D)",code:"ITRI"},{name:"大臺南會展中心(A)",code:"exhibition"},{name:"工研院 k棟示範場所(K)",code:"K"},{name:"中研院南部院區(E)",code:"E"},{name:"智慧綠能循環住宅園區(住)",code:"R"},{name:"臺灣智駕測試實驗室(C1)",code:"C1"}],n=["#4F6947","#856C2D","#477880","#88522E","#813731","#204C71","#6D3265","#483F60"];this.realtimeStatus.filter((function(t){return 6!==t.monitorID})).forEach((function(r,o){var l={title:e[o].name,theme:n[o],consuming:0===r.generating&&0===r.consuming?0:(r.generating/r.consuming*100).toFixed(0)>100?100:(r.generating/r.consuming*100).toFixed(0).toString()};t.list.push(l)}))}}},o=n(30),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-dark-black200/80 p-4 rounded-lg text-neutral-100 mt-4 h-fit"},[e("div",{staticClass:"text-2xl text-neutral-100 text-center font-bold"},[t._v("\n\t\t綠能滲透率\n\t")]),t._v(" "),t._l(t.list,(function(t){return e("div",{key:t.title,staticClass:"my-4"},[e("CommonProgressBar",{attrs:{title:t.title,percent:t.consuming,theme:t.theme}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonProgressBar:n(562).default})}}]);