/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{457:function(t,e,o){var n,r,h;h=function(t){"use strict";var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}o(e,"Extensions/DragPanes.js",[e["Core/Globals.js"],e["Core/Axis/Axis.js"],e["Core/Axis/AxisDefaults.js"],e["Core/Pointer.js"],e["Core/Utilities.js"]],(function(t,e,o,n,r){var h=t.hasTouch,c=r.addEvent,d=r.clamp,l=r.isNumber,x=r.merge,f=r.objectEach,v=r.relativeLength,y=r.wrap,m=function(){function t(t){this.axis=void 0,this.controlLine=void 0,this.lastPos=void 0,this.options=void 0,this.init(t)}return t.prototype.init=function(t,e){this.axis=t,this.options=t.options.resize,this.render(),e||this.addMouseEvents()},t.prototype.render=function(){var t,e=this,o=e.axis,n=o.chart,r=e.options,h=r.x||0,c=r.y,l=d(o.top+o.height+c,n.plotTop,n.plotTop+n.plotHeight),x={};n.styledMode||(x={cursor:r.cursor,stroke:r.lineColor,"stroke-width":r.lineWidth,dashstyle:r.lineDashStyle}),e.lastPos=l-c,e.controlLine||(e.controlLine=n.renderer.path().addClass("highcharts-axis-resizer")),e.controlLine.add(o.axisGroup),t=n.styledMode?e.controlLine.strokeWidth():r.lineWidth,x.d=n.renderer.crispLine([["M",o.left+h,l],["L",o.left+o.width+h,l]],t),e.controlLine.attr(x)},t.prototype.addMouseEvents=function(){var t,e,o,n=this,r=n.controlLine.element,d=n.axis.chart.container,l=[];n.mouseMoveHandler=t=function(t){n.onMouseMove(t)},n.mouseUpHandler=e=function(t){n.onMouseUp(t)},n.mouseDownHandler=o=function(t){n.onMouseDown(t)},l.push(c(d,"mousemove",t),c(d.ownerDocument,"mouseup",e),c(r,"mousedown",o)),h&&l.push(c(d,"touchmove",t),c(d.ownerDocument,"touchend",e),c(r,"touchstart",o)),n.eventsToUnbind=l},t.prototype.onMouseMove=function(t){t.touches&&0===t.touches[0].pageX||this.grabbed&&(this.hasDragged=!0,this.updateAxes(this.axis.chart.pointer.normalize(t).chartY-this.options.y))},t.prototype.onMouseUp=function(t){this.hasDragged&&this.updateAxes(this.axis.chart.pointer.normalize(t).chartY-this.options.y),this.grabbed=this.hasDragged=this.axis.chart.activeResizer=null},t.prototype.onMouseDown=function(t){this.axis.chart.pointer.reset(!1,0),this.grabbed=this.axis.chart.activeResizer=!0},t.prototype.updateAxes=function(t){var e,o=this,n=o.axis.chart,r=o.options.controlledAxis,h=0===r.next.length?[n.yAxis.indexOf(o.axis)+1]:r.next,c=[o.axis].concat(r.prev),x=[],f=!1,y=n.plotTop,m=n.plotHeight,w=y+m,z=function(t){return 100*t/m+"%"},M=function(t,e,o){return Math.round(d(t,e,o))};t=d(t,y,w),(e=t-o.lastPos)*e<1||([c,h].forEach((function(r,h){r.forEach((function(r,i){var c,d,A,L,E=l(r)?n.yAxis[r]:h||i?n.get(r):r,D=E&&E.options,C=0;D&&"navigator-y-axis"!==D.id&&(d=E.top,A=Math.round(v(D.minLength,m)),L=Math.round(v(D.maxLength,m)),h?(e=t-o.lastPos,c=M(E.len-e,A,L),(d=E.top+e)+c>w&&(t+=C=w-c-d,d+=C),d<y&&(d=y)+c>w&&(c=m),c===A&&(f=!0),x.push({axis:E,options:{top:z(d-y),height:z(c)}})):((c=M(t-d,A,L))===L&&(f=!0),t=d+c,x.push({axis:E,options:{height:z(c)}})))}))})),f||(x.forEach((function(t){t.axis.update(t.options,!1)})),n.redraw(!1)))},t.prototype.destroy=function(){var t=this;delete t.axis.resizer,this.eventsToUnbind&&this.eventsToUnbind.forEach((function(t){t()})),t.controlLine.destroy(),f(t,(function(e,o){t[o]=null}))},t.resizerOptions={minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",lineWidth:4,x:0,y:0}},t}();return e.keepProps.push("resizer"),c(e,"afterRender",(function(){var t,e=this,o=e.resizer,n=e.options.resize;n&&(t=!1!==n.enabled,o?t?o.init(e,!0):o.destroy():t&&(e.resizer=new m(e)))})),c(e,"destroy",(function(t){!t.keepEvents&&this.resizer&&this.resizer.destroy()})),y(n.prototype,"runPointActions",(function(t){this.chart.activeResizer||t.apply(this,Array.prototype.slice.call(arguments,1))})),y(n.prototype,"drag",(function(t){this.chart.activeResizer||t.apply(this,Array.prototype.slice.call(arguments,1))})),x(!0,o.defaultYAxisOptions,m.resizerOptions),t.AxisResizer=m,t.AxisResizer})),o(e,"masters/modules/drag-panes.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(n=[o(140),o(419)],void 0===(r=function(t){return h(t),h.Highcharts=t,h}.apply(e,n))||(t.exports=r))}}]);