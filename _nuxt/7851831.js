/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{441:function(t,e,n){var o,r,l;l=function(t){"use strict";var e=t?t._modules:{};function n(t,path,e,n){t.hasOwnProperty(path)||(t[path]=n.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}n(e,"Extensions/CurrentDateIndication.js",[e["Core/Axis/Axis.js"],e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],e["Core/Utilities.js"]],(function(t,e,n){var o=n.addEvent,r=n.merge,l=n.wrap,c={color:"#ccd6eb",width:2,label:{format:"%a, %b %d %Y, %H:%M",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t)},rotation:0,style:{fontSize:"10px"}}};o(t,"afterSetOptions",(function(){var t=this.options,e=t.currentDateIndicator;if(e){var n="object"==typeof e?r(c,e):r(c);n.value=Date.now(),n.className="highcharts-current-date-indicator",t.plotLines||(t.plotLines=[]),t.plotLines.push(n)}})),o(e,"render",(function(){this.label&&this.label.attr({text:this.getLabelText(this.options.label)})})),l(e.prototype,"getLabelText",(function(t,e){var n=this.options;return n&&n.className&&-1!==n.className.indexOf("highcharts-current-date-indicator")&&n.label&&"function"==typeof n.label.formatter?(n.value=Date.now(),n.label.formatter.call(this,n.value,n.label.format)):t.call(this,e)}))})),n(e,"masters/modules/current-date-indicator.src.js",[],(function(){}))},t.exports?(l.default=l,t.exports=l):(o=[n(138)],void 0===(r=function(t){return l(t),l.Highcharts=t,l}.apply(e,o))||(t.exports=r))}}]);