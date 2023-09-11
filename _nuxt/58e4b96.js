(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{438:function(t,o,e){var r,n,b;b=function(b){function t(b,t,o,p){b.hasOwnProperty(t)||(b[t]=p.apply(null,o),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:b[t]}})))}t(b=b?b._modules:{},"Core/Axis/Color/ColorAxisComposition.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],(function(b,t){var u,o=b.parse,p=t.addEvent,e=t.extend,r=t.merge,n=t.pick,l=t.splat;return function(b){function t(){var t=this,a=this.options;this.colorAxis=[],a.colorAxis&&(a.colorAxis=l(a.colorAxis),a.colorAxis.forEach((function(a,o){a.index=o,new C(t,a)})))}function u(a){var t,o,e=this,r=function(t){-1!==(t=a.allItems.indexOf(t))&&(e.destroyItem(a.allItems[t]),a.allItems.splice(t,1))},n=[];for((this.chart.colorAxis||[]).forEach((function(a){(t=a.options)&&t.showInLegend&&(t.dataClasses&&t.visible?n=n.concat(a.getDataClassLegendSymbols()):t.visible&&n.push(a),a.series.forEach((function(a){a.options.showInLegend&&!t.dataClasses||("point"===a.options.legendType?a.points.forEach((function(a){r(a)})):r(a))})))})),o=n.length;o--;)a.allItems.unshift(n[o])}function h(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}function d(){var a=this.chart.colorAxis;a&&a.forEach((function(a,t,o){a.update({},o)}))}function c(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function q(){var a=this.axisTypes;a?-1===a.indexOf("colorAxis")&&a.push("colorAxis"):this.axisTypes=["colorAxis"]}function f(a){var t=this,o=a?"show":"hide";t.visible=t.options.visible=!!a,["graphic","dataLabel"].forEach((function(a){t[a]&&t[a][o]()})),this.series.buildKDTree()}function y(){var a=this,t=this.options.nullColor,o=this.colorAxis,e=this.colorKey;(this.data.length?this.data:this.points).forEach((function(r){var n=r.getNestedProperty(e);(n=r.options.color||(r.isNull||null===r.value?t:o&&void 0!==n?o.toColor(n,r):r.color||a.color))&&r.color!==n&&(r.color=n,"point"===a.options.legendType&&r.legendItem&&a.chart.legend.colorizeItem(r,r.visible))}))}function m(){this.elem.attr("fill",o(this.start).tweenTo(o(this.end),this.pos),void 0,!0)}function x(){this.elem.attr("stroke",o(this.start).tweenTo(o(this.end),this.pos),void 0,!0)}var C,v=[];b.compose=function(o,g,b,l,A){C||(C=o),-1===v.indexOf(g)&&(v.push(g),(o=g.prototype).collectionsWithUpdate.push("colorAxis"),o.collectionsWithInit.colorAxis=[o.addColorAxis],p(g,"afterGetAxes",t),function(a){var t=a.prototype.createAxis;a.prototype.createAxis=function(a,o){if("colorAxis"!==a)return t.apply(this,arguments);var e=new C(this,r(o.axis,{index:this[a].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach((function(a){a.series=[]})),this.series.forEach((function(a){a.bindAxes(),a.isDirtyData=!0})),n(o.redraw,!0)&&this.redraw(o.animation),e}}(g)),-1===v.indexOf(b)&&(v.push(b),(g=b.prototype).fillSetter=m,g.strokeSetter=x),-1===v.indexOf(l)&&(v.push(l),p(l,"afterGetAllItems",u),p(l,"afterColorizeItem",h),p(l,"afterUpdate",d)),-1===v.indexOf(A)&&(v.push(A),e(A.prototype,{optionalAxis:"colorAxis",translateColors:y}),e(A.prototype.pointClass.prototype,{setVisible:f}),p(A,"afterTranslate",c),p(A,"bindAxes",q))},b.pointSetVisible=f}(u||(u={})),u})),t(b,"Core/Axis/Color/ColorAxisDefaults.js",[],(function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}})),t(b,"Core/Axis/Color/ColorAxis.js",[b["Core/Axis/Axis.js"],b["Core/Color/Color.js"],b["Core/Axis/Color/ColorAxisComposition.js"],b["Core/Axis/Color/ColorAxisDefaults.js"],b["Core/Globals.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,t,o,p,e,r,n,l){var h=this&&this.__extends||function(){var b=function(t,a){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var o in t)t.hasOwnProperty(o)&&(a[o]=t[o])},b(t,a)};return function(t,a){function o(){this.constructor=t}b(t,a),t.prototype=null===a?Object.create(a):(o.prototype=a.prototype,new o)}}(),d=t.parse,c=e.noop,f=n.series,y=l.extend,m=l.isNumber,x=l.merge,q=l.pick;return t=function(b){function t(a,t){var o=b.call(this,a,t)||this;return o.beforePadding=!1,o.chart=void 0,o.coll="colorAxis",o.dataClasses=void 0,o.legendItem=void 0,o.legendItems=void 0,o.name="",o.options=void 0,o.stops=void 0,o.visible=!0,o.init(a,t),o}return h(t,b),t.compose=function(a,e,r,n){o.compose(t,a,e,r,n)},t.prototype.init=function(a,o){var e=a.options.legend||{},r=o.layout?"vertical"!==o.layout:"vertical"!==e.layout,n=o.visible;e=x(t.defaultColorAxisOptions,o,{showEmpty:!1,title:null,visible:e.enabled&&!1!==n}),this.coll="colorAxis",this.side=o.side||r?2:1,this.reversed=o.reversed||!r,this.opposite=!r,b.prototype.init.call(this,a,e),this.userOptions.visible=n,o.dataClasses&&this.initDataClasses(o),this.initStops(),this.horiz=r,this.zoomEnabled=!1},t.prototype.initDataClasses=function(a){var t,o=this.chart,e=this.options,r=a.dataClasses.length,b=0,n=o.options.chart.colorCount;this.dataClasses=t=[],this.legendItems=[],(a.dataClasses||[]).forEach((function(a,g){a=x(a),t.push(a),!o.styledMode&&a.color||("category"===e.dataClassColor?(o.styledMode||(g=o.options.colors,n=g.length,a.color=g[b]),a.colorIndex=b,++b===n&&(b=0)):a.color=d(e.minColor).tweenTo(d(e.maxColor),2>r?.5:g/(r-1)))}))},t.prototype.hasData=function(){return!!(this.tickPositions||[]).length},t.prototype.setTickPositions=function(){if(!this.dataClasses)return b.prototype.setTickPositions.call(this)},t.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(a){a.color=d(a[1])}))},t.prototype.setOptions=function(a){b.prototype.setOptions.call(this,a),this.options.crosshair=this.options.marker},t.prototype.setAxisSize=function(){var o,b,a=this.legendSymbol,e=this.chart,r=e.options.legend||{};a?(this.left=r=a.attr("x"),this.top=o=a.attr("y"),this.width=b=a.attr("width"),this.height=a=a.attr("height"),this.right=e.chartWidth-r-b,this.bottom=e.chartHeight-o-a,this.len=this.horiz?b:a,this.pos=this.horiz?r:o):this.len=(this.horiz?r.symbolWidth:r.symbolHeight)||t.defaultLegendLength},t.prototype.normalizedValue=function(a){return this.logarithmic&&(a=this.logarithmic.log2lin(a)),1-(this.max-a)/(this.max-this.min||1)},t.prototype.toColor=function(a,t){var b,o=this.dataClasses,e=this.stops;if(o)for(b=o.length;b--;){var r=o[b],g=r.from;if(e=r.to,(void 0===g||a>=g)&&(void 0===e||a<=e)){var n=r.color;t&&(t.dataClass=b,t.colorIndex=r.colorIndex);break}}else{for(a=this.normalizedValue(a),b=e.length;b--&&!(a>e[b][0]););g=e[b]||e[b+1],a=1-((e=e[b+1]||g)[0]-a)/(e[0]-g[0]||1),n=g.color.tweenTo(e.color,a)}return n},t.prototype.getOffset=function(){var a=this.legendGroup,o=this.chart.axisOffset[this.side];if(a){this.axisParent=a,b.prototype.getOffset.call(this);var e=this.chart.legend;e.allItems.forEach((function(a){a instanceof t&&a.drawLegendSymbol(e,a)})),e.render(),this.chart.getMargins(!0),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=o}},t.prototype.setLegendColor=function(){var a=this.reversed,t=a?1:0;a=a?0:1,t=this.horiz?[t,0,a,0]:[0,a,0,t],this.legendColor={linearGradient:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]},stops:this.stops}},t.prototype.drawLegendSymbol=function(a,o){var e=a.padding,r=a.options,b=this.horiz,n=q(r.symbolWidth,b?t.defaultLegendLength:12),g=q(r.symbolHeight,b?12:t.defaultLegendLength),l=q(r.labelPadding,b?16:30);r=q(r.itemDistance,10),this.setLegendColor(),o.legendSymbol||(o.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,n,g).attr({zIndex:1}).add(o.legendGroup)),this.legendItemWidth=n+e+(b?r:this.options.labels.x+this.maxLabelLength),this.legendItemHeight=g+e+(b?l:0)},t.prototype.setState=function(a){this.series.forEach((function(t){t.setState(a)}))},t.prototype.setVisible=function(){},t.prototype.getSeriesExtremes=function(){var b,a=this.series,t=a.length;for(this.dataMin=1/0,this.dataMax=-1/0;t--;){var o=a[t],e=o.colorKey=q(o.options.colorKey,o.colorKey,o.pointValKey,o.zoneAxis,"y"),r=o.pointArrayMap,g=o[e+"Min"]&&o[e+"Max"];if(o[e+"Data"])var n=o[e+"Data"];else if(r){n=[],r=r.indexOf(e);var l=o.yData;if(0<=r&&l)for(b=0;b<l.length;b++)n.push(q(l[b][r],l[b]))}else n=o.yData;g?(o.minColorValue=o[e+"Min"],o.maxColorValue=o[e+"Max"]):(n=f.prototype.getExtremes.call(o,n),o.minColorValue=n.dataMin,o.maxColorValue=n.dataMax),void 0!==o.minColorValue&&(this.dataMin=Math.min(this.dataMin,o.minColorValue),this.dataMax=Math.max(this.dataMax,o.maxColorValue)),g||f.prototype.applyExtremes.call(o)}},t.prototype.drawCrosshair=function(a,t){var o=t&&t.plotX,e=t&&t.plotY,r=this.pos,n=this.len;if(t){var g=this.toPixels(t.getNestedProperty(t.series.colorKey));g<r?g=r-2:g>r+n&&(g=r+n+2),t.plotX=g,t.plotY=this.len-g,b.prototype.drawCrosshair.call(this,a,t),t.plotX=o,t.plotY=e,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color}))}},t.prototype.getPlotLinePath=function(a){var t=this.left,o=a.translatedValue,e=this.top;return m(o)?this.horiz?[["M",o-4,e-6],["L",o+4,e-6],["L",o,e],["Z"]]:[["M",t,o],["L",t-6,o+6],["L",t-6,o-6],["Z"]]:b.prototype.getPlotLinePath.call(this,a)},t.prototype.update=function(a,t){var o=this.chart.legend;this.series.forEach((function(a){a.isDirtyData=!0})),(a.dataClasses&&o.allItems||this.dataClasses)&&this.destroyItems(),b.prototype.update.call(this,a,t),this.legendItem&&(this.setLegendColor(),o.colorizeItem(this,!0))},t.prototype.destroyItems=function(){var a=this.chart;this.legendItem?a.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach((function(t){a.legend.destroyItem(t)})),a.isDirtyLegend=!0},t.prototype.destroy=function(){this.chart.isDirtyLegend=!0,this.destroyItems(),b.prototype.destroy.apply(this,[].slice.call(arguments))},t.prototype.remove=function(a){this.destroyItems(),b.prototype.remove.call(this,a)},t.prototype.getDataClassLegendSymbols=function(){var g,a=this,t=a.chart,b=a.legendItems,o=t.options.legend,e=o.valueDecimals,n=o.valueSuffix||"";return b.length||a.dataClasses.forEach((function(o,l){var h=o.from,d=o.to,f=t.numberFormatter,m=!0;g="",void 0===h?g="< ":void 0===d&&(g="> "),void 0!==h&&(g+=f(h,e)+n),void 0!==h&&void 0!==d&&(g+=" - "),void 0!==d&&(g+=f(d,e)+n),b.push(y({chart:t,name:g,options:{},drawLegendSymbol:r.drawRectangle,visible:!0,setState:c,isDataClass:!0,setVisible:function(){m=a.visible=!m,a.series.forEach((function(a){a.points.forEach((function(a){a.dataClass===l&&a.setVisible(m)}))})),t.legend.colorizeItem(this,m)}},o))})),b},t.defaultColorAxisOptions=p,t.defaultLegendLength=200,t.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"],t}(b),Array.prototype.push.apply(b.keepProps,t.keepProps),t})),t(b,"masters/modules/coloraxis.src.js",[b["Core/Globals.js"],b["Core/Axis/Color/ColorAxis.js"]],(function(b,t){b.ColorAxis=t,t.compose(b.Chart,b.Fx,b.Legend,b.Series)}))},t.exports?(b.default=b,t.exports=b):(r=[e(138)],void 0===(n=function(t){return b(t),b.Highcharts=t,b}.apply(o,r))||(t.exports=n))}}]);