(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{415:function(t,e,r){var n,o,a;a=function(a){function t(a,t,e,b){a.hasOwnProperty(t)||(a[t]=b.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}t(a=a?a._modules:{},"Series/Cylinder/CylinderPoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t){var e=this&&this.__extends||function(){var a=function(b,g){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])},a(b,g)};return function(b,g){function t(){this.constructor=b}a(b,g),b.prototype=null===g?Object.create(g):(t.prototype=g.prototype,new t)}}();return t=t.extend,a=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.options=void 0,b.series=void 0,b}return e(b,a),b}(a.seriesTypes.column.prototype.pointClass),t(a.prototype,{shapeType:"cylinder"}),a})),t(a,"Series/Cylinder/CylinderComposition.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Renderer/RendererRegistry.js"],a["Core/Utilities.js"]],(function(a,t,e,b,r){var g=a.parse,n=t.charts,u=t.deg2rad,o=e.perspective;a=r.merge;var c=r.pick,h=(b=b.getRendererType().prototype).cuboidPath,p=function(t){return!t.some((function(t){return"C"===t[0]}))};r=a(b.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(t){return this.singleSetterForParts("fill",null,{front:t,back:t,top:g(t).brighten(.1).get(),bottom:g(t).brighten(-.1).get()}),this.color=this.fill=t,this}}),b.elements3d.cylinder=r,b.cylinder=function(t){return this.element3d("cylinder",t)},b.cylinderPath=function(t){var a=n[this.chartIndex],e=h.call(this,t),r=!e.isTop,b=!e.isFront,o=this.getCylinderEnd(a,t);return t=this.getCylinderEnd(a,t,!0),{front:this.getCylinderFront(o,t),back:this.getCylinderBack(o,t),top:o,bottom:t,zIndexes:{top:r?3:0,bottom:r?0:3,front:b?2:1,back:b?1:2,group:e.zIndexes.group}}},b.getCylinderFront=function(t,a){if(t=t.slice(0,3),p(a)){var e=a[0];"M"===e[0]&&(t.push(a[2]),t.push(a[1]),t.push(["L",e[1],e[2]]))}else{e=a[0];var r=a[1];a=a[2],"M"===e[0]&&"C"===r[0]&&"C"===a[0]&&(t.push(["L",a[5],a[6]]),t.push(["C",a[3],a[4],a[1],a[2],r[5],r[6]]),t.push(["C",r[3],r[4],r[1],r[2],e[1],e[2]]))}return t.push(["Z"]),t},b.getCylinderBack=function(t,a){var e=[];if(p(t)){var r=t[0],b=t[2];"M"===r[0]&&"L"===b[0]&&(e.push(["M",b[1],b[2]]),e.push(t[3]),e.push(["L",r[1],r[2]]))}else"C"===t[2][0]&&e.push(["M",t[2][5],t[2][6]]),e.push(t[3],t[4]);return p(a)?"M"===(r=a[0])[0]&&(e.push(["L",r[1],r[2]]),e.push(a[3]),e.push(a[2])):(t=a[2],r=a[3],a=a[4],"C"===t[0]&&"C"===r[0]&&"C"===a[0]&&(e.push(["L",a[5],a[6]]),e.push(["C",a[3],a[4],a[1],a[2],r[5],r[6]]),e.push(["C",r[3],r[4],r[1],r[2],t[5],t[6]]))),e.push(["Z"]),e},b.getCylinderEnd=function(a,b,t){var e=b.width;e=void 0===e?0:e;var r=b.height,g=void 0===r?0:r,n=void 0===(r=b.alphaCorrection)?0:r;r=c(b.depth,e,0);var h=Math.min(e,r)/2;n=u*(a.options.chart.options3d.beta-90+n),t=(b.y||0)+(t?g:0),g=.5519*h;var q,l,y=e/2+(b.x||0),p=r/2+(b.z||0),d=[{x:0,y:t,z:h},{x:g,y:t,z:h},{x:h,y:t,z:g},{x:h,y:t,z:0},{x:h,y:t,z:-g},{x:g,y:t,z:-h},{x:0,y:t,z:-h},{x:-g,y:t,z:-h},{x:-h,y:t,z:-g},{x:-h,y:t,z:0},{x:-h,y:t,z:g},{x:-g,y:t,z:h},{x:0,y:t,z:h}],f=Math.cos(n),C=Math.sin(n);return d.forEach((function(a,t){q=a.x,l=a.z,d[t].x=q*f-l*C+y,d[t].z=l*f+q*C+p})),a=o(d,a,!0),2.5>Math.abs(a[3].y-a[9].y)&&2.5>Math.abs(a[0].y-a[6].y)?this.toLinePath([a[0],a[3],a[6],a[9]],!0):this.getCurvedPath(a)},b.getCurvedPath=function(a){var t,e=[["M",a[0].x,a[0].y]],b=a.length-2;for(t=1;t<b;t+=3)e.push(["C",a[t].x,a[t].y,a[t+1].x,a[t+1].y,a[t+2].x,a[t+2].y]);return e}})),t(a,"Series/Cylinder/CylinderSeries.js",[a["Series/Cylinder/CylinderPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],(function(a,t,e){var b=this&&this.__extends||function(){var a=function(b,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var t in b)b.hasOwnProperty(t)&&(a[t]=b[t])},a(b,t)};return function(b,t){function g(){this.constructor=b}a(b,t),b.prototype=null===t?Object.create(t):(g.prototype=t.prototype,new g)}}(),r=t.seriesTypes.column,g=e.extend,n=e.merge;return e=function(a){function t(){var b=null!==a&&a.apply(this,arguments)||this;return b.data=void 0,b.options=void 0,b.points=void 0,b}return b(t,a),t.defaultOptions=n(r.defaultOptions),t}(r),g(e.prototype,{pointClass:a}),t.registerSeriesType("cylinder",e),e})),t(a,"masters/modules/cylinder.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[r(138),r(553)],void 0===(o=function(t){return a(t),a.Highcharts=t,a}.apply(e,n))||(t.exports=o))}}]);