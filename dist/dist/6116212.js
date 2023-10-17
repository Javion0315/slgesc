(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{482:function(t,o,e){var n,r,b;b=function(b){function g(b,t,a,o){b.hasOwnProperty(t)||(b[t]=o.apply(null,a),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:b[t]}})))}g(b=b?b._modules:{},"Series/HollowCandlestick/HollowCandlestickPoint.js",[b["Core/Series/SeriesRegistry.js"]],(function(b){var t=this&&this.__extends||function(){var b=function(a,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var t in a)a.hasOwnProperty(t)&&(b[t]=a[t])},b(a,t)};return function(a,t){function o(){this.constructor=a}b(a,t),a.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;return a.series=void 0,a}return t(a,b),a.prototype.getClassName=function(){var a=b.prototype.getClassName.apply(this),t=this.series.hollowCandlestickData[this.index];return t.isBullish||"up"!==t.trendDirection||(a+="-bearish-up"),a},a}(b.seriesTypes.candlestick.prototype.pointClass)})),g(b,"Series/HollowCandlestick/HollowCandlestickSeries.js",[b["Series/HollowCandlestick/HollowCandlestickPoint.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"],b["Core/Axis/Axis.js"]],(function(b,t,a,g){var o=this&&this.__extends||function(){var b=function(a,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var t in a)a.hasOwnProperty(t)&&(b[t]=a[t])},b(a,t)};return function(a,t){function o(){this.constructor=a}b(a,t),a.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),e=t.seriesTypes.candlestick,n=a.addEvent,r=a.merge;return a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;return a.data=void 0,a.hollowCandlestickData=[],a.options=void 0,a.points=void 0,a}return o(a,b),a.prototype.getPriceMovement=function(){var a=this.allGroupedData||this.yData,b=this.hollowCandlestickData;if(!b.length&&a&&a.length){b.push({isBullish:!0,trendDirection:"up"});for(var t=1;t<a.length;t++)b.push(this.isBullish(a[t],a[t-1]))}},a.prototype.getLineColor=function(a){return"up"===a?this.options.upColor||"#06b535":this.options.color||"#f21313"},a.prototype.getPointFill=function(a){return a.isBullish?"transparent":"up"===a.trendDirection?this.options.upColor||"#06b535":this.options.color||"#f21313"},a.prototype.init=function(){b.prototype.init.apply(this,arguments),this.hollowCandlestickData=[]},a.prototype.isBullish=function(a,b){return{isBullish:a[0]<=a[3],trendDirection:a[3]<b[3]?"down":"up"}},a.prototype.pointAttribs=function(a,t){var o=b.prototype.pointAttribs.call(this,a,t);return a=this.hollowCandlestickData[a.index],o.fill=this.getPointFill(a)||o.fill,o.stroke=this.getLineColor(a.trendDirection)||o.stroke,t&&(t=this.options.states[t],o.fill=t.color||o.fill,o.stroke=t.lineColor||o.stroke,o["stroke-width"]=t.lineWidth||o["stroke-width"]),o},a.defaultOptions=r(e.defaultOptions,{color:"#f21313",dataGrouping:{groupAll:!0,groupPixelWidth:10},lineColor:"#f21313",upColor:"#06b535",upLineColor:"#06b535"}),a}(e),n(a,"updatedData",(function(){this.hollowCandlestickData.length&&(this.hollowCandlestickData.length=0)})),n(g,"postProcessData",(function(){this.series.forEach((function(a){a.is("hollowcandlestick")&&a.getPriceMovement()}))})),a.prototype.pointClass=b,t.registerSeriesType("hollowcandlestick",a),a})),g(b,"masters/modules/hollowcandlestick.src.js",[],(function(){}))},t.exports?(b.default=b,t.exports=b):(n=[e(140),e(419)],void 0===(r=function(g){return b(g),b.Highcharts=g,b}.apply(o,n))||(t.exports=r))}}]);