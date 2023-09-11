(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{453:function(t,e,o){var n,r,a;a=function(a){function t(a,t,e,o){a.hasOwnProperty(t)||(a[t]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))}t(a=a?a._modules:{},"Extensions/DragPanes.js",[a["Core/Globals.js"],a["Core/Axis/Axis.js"],a["Core/Axis/AxisDefaults.js"],a["Core/Pointer.js"],a["Core/Utilities.js"]],(function(a,t,e,o,b){var n=a.hasTouch,r=b.addEvent,h=b.clamp,c=b.isNumber,d=b.merge,l=b.objectEach,x=b.relativeLength;b=b.wrap;var u=function(){function a(t){this.options=this.lastPos=this.controlLine=this.axis=void 0,this.init(t)}return a.prototype.init=function(t,a){this.axis=t,this.options=t.options.resize,this.render(),a||this.addMouseEvents()},a.prototype.render=function(){var t=this.axis,a=t.chart,e=this.options,o=e.x||0,b=e.y,n=h(t.top+t.height+b,a.plotTop,a.plotTop+a.plotHeight),r={};a.styledMode||(r={cursor:e.cursor,stroke:e.lineColor,"stroke-width":e.lineWidth,dashstyle:e.lineDashStyle}),this.lastPos=n-b,this.controlLine||(this.controlLine=a.renderer.path().addClass("highcharts-axis-resizer")),this.controlLine.add(t.axisGroup),e=a.styledMode?this.controlLine.strokeWidth():e.lineWidth,r.d=a.renderer.crispLine([["M",t.left+o,n],["L",t.left+t.width+o,n]],e),this.controlLine.attr(r)},a.prototype.addMouseEvents=function(){var t,e,o,h=this,a=h.controlLine.element,c=h.axis.chart.container,b=[];h.mouseMoveHandler=t=function(a){h.onMouseMove(a)},h.mouseUpHandler=e=function(a){h.onMouseUp(a)},h.mouseDownHandler=o=function(a){h.onMouseDown(a)},b.push(r(c,"mousemove",t),r(c.ownerDocument,"mouseup",e),r(a,"mousedown",o)),n&&b.push(r(c,"touchmove",t),r(c.ownerDocument,"touchend",e),r(a,"touchstart",o)),h.eventsToUnbind=b},a.prototype.onMouseMove=function(a){a.touches&&0===a.touches[0].pageX||!this.grabbed||(this.hasDragged=!0,this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y))},a.prototype.onMouseUp=function(a){this.hasDragged&&this.updateAxes(this.axis.chart.pointer.normalize(a).chartY-this.options.y),this.grabbed=this.hasDragged=this.axis.chart.activeResizer=null},a.prototype.onMouseDown=function(a){this.axis.chart.pointer.reset(!1,0),this.grabbed=this.axis.chart.activeResizer=!0},a.prototype.updateAxes=function(a){var t=this,e=t.axis.chart,b=t.options.controlledAxis,o=0===b.next.length?[e.yAxis.indexOf(t.axis)+1]:b.next;b=[t.axis].concat(b.prev);var n=[],r=!1,q=e.plotTop,d=e.plotHeight,l=q+d,f=(a=h(a,q,l))-t.lastPos;1>f*f||([b,o].forEach((function(b,o){b.forEach((function(b,y){var g=(b=c(b)?e.yAxis[b]:o||y?e.get(b):b)&&b.options;if(g&&"navigator-y-axis"!==g.id){y=b.top;var v=Math.round(x(g.minLength,d)),p=Math.round(x(g.maxLength,d));o?(f=a-t.lastPos,g=Math.round(h(b.len-f,v,p)),(y=b.top+f)+g>l&&(a+=p=l-g-y,y+=p),y<q&&(y=q)+g>l&&(g=d),g===v&&(r=!0),n.push({axis:b,options:{top:100*(y-q)/d+"%",height:100*g/d+"%"}})):((g=Math.round(h(a-y,v,p)))===p&&(r=!0),a=y+g,n.push({axis:b,options:{height:100*g/d+"%"}}))}}))})),r||(n.forEach((function(a){a.axis.update(a.options,!1)})),e.redraw(!1)))},a.prototype.destroy=function(){var a=this;delete a.axis.resizer,this.eventsToUnbind&&this.eventsToUnbind.forEach((function(a){a()})),a.controlLine.destroy(),l(a,(function(b,t){a[t]=null}))},a.resizerOptions={minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",lineWidth:4,x:0,y:0}},a}();return t.keepProps.push("resizer"),r(t,"afterRender",(function(){var a=this.resizer,b=this.options.resize;b&&(b=!1!==b.enabled,a?b?a.init(this,!0):a.destroy():b&&(this.resizer=new u(this)))})),r(t,"destroy",(function(a){!a.keepEvents&&this.resizer&&this.resizer.destroy()})),b(o.prototype,"runPointActions",(function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))})),b(o.prototype,"drag",(function(a){this.chart.activeResizer||a.apply(this,Array.prototype.slice.call(arguments,1))})),d(!0,e.defaultYAxisOptions,u.resizerOptions),a.AxisResizer=u,a.AxisResizer})),t(a,"masters/modules/drag-panes.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(n=[o(138),o(416)],void 0===(r=function(t){return a(t),a.Highcharts=t,a}.apply(e,n))||(t.exports=r))}}]);