/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{509:function(t,e,r){var o,n,h;h=function(t){"use strict";var e=t?t._modules:{};function r(t,path,e,r){t.hasOwnProperty(path)||(t[path]=r.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}r(e,"Extensions/PatternFill.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/DefaultOptions.js"],e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],(function(t,e,r,o,n,h,d,c){var l=t.animObject,f=o.getOptions,m=c.addEvent,y=c.erase,w=c.merge,x=c.pick,M=c.removeEvent,v=c.wrap,L=r.patterns=function(){var t=[],e=f().colors;return["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5","M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5","M 2 0 L 2 5 M 4 0 L 4 5","M 0 2 L 5 2 M 0 4 L 5 4","M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"].forEach((function(pattern,i){t.push({path:pattern,color:e[i],width:5,height:5,patternTransform:"scale(1.4 1.4)"})})),["M 0 0 L 5 10 L 10 0","M 3 3 L 8 3 L 8 8 L 3 8 Z","M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0","M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11","M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"].forEach((function(pattern,i){t.push({path:pattern,color:e[i+5],width:10,height:10})})),t}();function E(t,e){var r,o=JSON.stringify(t),n=o.length||0,h=0,i=0;if(e){r=Math.max(Math.floor(n/500),1);for(var a=0;a<n;a+=r)h+=o.charCodeAt(a);h&=h}for(;i<n;++i)h=(h<<5)-h+o.charCodeAt(i),h&=h;return h.toString(16).replace("-","1")}n.prototype.calculatePatternDimensions=function(pattern){if(!pattern.width||!pattern.height){var t=this.graphic&&(this.graphic.getBBox&&this.graphic.getBBox(!0)||this.graphic.element&&this.graphic.element.getBBox())||{},e=this.shapeArgs;if(e&&(t.width=e.width||t.width,t.height=e.height||t.height,t.x=e.x||t.x,t.y=e.y||t.y),pattern.image){if(!t.width||!t.height)return pattern._width="defer",void(pattern._height="defer");pattern.aspectRatio&&(t.aspectRatio=t.width/t.height,pattern.aspectRatio>t.aspectRatio?t.aspectWidth=t.height*pattern.aspectRatio:t.aspectHeight=t.width/pattern.aspectRatio),pattern._width=pattern.width||Math.ceil(t.aspectWidth||t.width),pattern._height=pattern.height||Math.ceil(t.aspectHeight||t.height)}pattern.width||(pattern._x=pattern.x||0,pattern._x+=t.x-Math.round(t.aspectWidth?Math.abs(t.aspectWidth-t.width)/2:0)),pattern.height||(pattern._y=pattern.y||0,pattern._y+=t.y-Math.round(t.aspectHeight?Math.abs(t.aspectHeight-t.height)/2:0))}},d.prototype.addPattern=function(t,e){var pattern,path,r,animate=x(e,!0),o=l(animate),n=t.width||t._width||32,h=t.height||t._height||32,d=t.color||"#343434",f=t.id,m=this;if(f||(this.idCounter=this.idCounter||0,f="highcharts-pattern-"+this.idCounter+"-"+(this.chartIndex||0),++this.idCounter),this.forExport&&(f+="-export"),this.defIds=this.defIds||[],!(this.defIds.indexOf(f)>-1)){this.defIds.push(f);var y,w={id:f,patternUnits:"userSpaceOnUse",patternContentUnits:t.patternContentUnits||"userSpaceOnUse",width:n,height:h,x:t._x||t.x||0,y:t._y||t.y||0};return t.patternTransform&&(w.patternTransform=t.patternTransform),(pattern=this.createElement("pattern").attr(w).add(this.defs)).id=f,t.path?(path=c.isObject(t.path)?t.path:{d:t.path},t.backgroundColor&&(y=t.backgroundColor,m.rect(0,0,n,h).attr({fill:y}).add(pattern)),r={d:path.d},this.styledMode||(r.stroke=path.stroke||d,r["stroke-width"]=x(path.strokeWidth,2),r.fill=path.fill||"none"),path.transform&&(r.transform=path.transform),this.createElement("path").attr(r).add(pattern),pattern.color=d):t.image&&(animate?this.image(t.image,0,0,n,h,(function(){this.animate({opacity:x(t.opacity,1)},o),M(this.element,"load")})).attr({opacity:0}).add(pattern):this.image(t.image,0,0,n,h).add(pattern)),t.image&&animate||void 0===t.opacity||[].forEach.call(pattern.element.childNodes,(function(e){e.setAttribute("opacity",t.opacity)})),this.patternElements=this.patternElements||{},this.patternElements[f]=pattern,pattern}},v(h.prototype,"getColor",(function(t){var e=this.options.color;e&&e.pattern&&!e.pattern.color?(delete this.options.color,t.apply(this,Array.prototype.slice.call(arguments,1)),e.pattern.color=this.color,this.color=this.options.color=e):t.apply(this,Array.prototype.slice.call(arguments,1))})),m(h,"render",(function(){var t=this.chart.isResizing;(this.isDirtyData||t||!this.chart.hasRendered)&&(this.points||[]).forEach((function(e){var r=e.options&&e.options.color;r&&r.pattern&&(!t||e.shapeArgs&&e.shapeArgs.width&&e.shapeArgs.height?e.calculatePatternDimensions(r.pattern):(r.pattern._width="defer",r.pattern._height="defer"))}))})),m(n,"afterInit",(function(){var t=this,e=t.options.color;e&&e.pattern&&("string"==typeof e.pattern.path&&(e.pattern.path={d:e.pattern.path}),t.color=t.options.color=w(t.series.options.color,e))})),m(d,"complexColor",(function(t){var e=t.args[0],r=t.args[1],element=t.args[2],o=this.chartIndex||0,pattern=e.pattern,h="#343434";if(void 0!==e.patternIndex&&L&&(pattern=L[e.patternIndex]),!pattern)return!0;if(pattern.image||"string"==typeof pattern.path||pattern.path&&pattern.path.d){var d=element.parentNode&&element.parentNode.getAttribute("class");d=d&&d.indexOf("highcharts-legend")>-1,"defer"!==pattern._width&&"defer"!==pattern._height||n.prototype.calculatePatternDimensions.call({graphic:{element:element}},pattern),!d&&pattern.id||((pattern=w({},pattern)).id="highcharts-pattern-"+o+"-"+E(pattern)+E(pattern,!0)),this.addPattern(pattern,!this.forExport&&x(pattern.animation,this.globalAnimation,{duration:100})),h="url("+this.url+"#"+pattern.id+(this.forExport?"-export":"")+")"}else h=pattern.color||h;return element.setAttribute(r,h),e.toString=function(){return h},!1})),m(e,"endResize",(function(){(this.renderer&&this.renderer.defIds||[]).filter((function(t){return t&&t.indexOf&&0===t.indexOf("highcharts-pattern-")})).length&&(this.series.forEach((function(t){t.points.forEach((function(t){var e=t.options&&t.options.color;e&&e.pattern&&(e.pattern._width="defer",e.pattern._height="defer")}))})),this.redraw(!1))})),m(e,"redraw",(function(){var t={},e=this.renderer,r=(e.defIds||[]).filter((function(pattern){return pattern.indexOf&&0===pattern.indexOf("highcharts-pattern-")}));r.length&&([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'),(function(r){var o=r.getAttribute("fill")||r.getAttribute("color")||r.getAttribute("stroke");if(o){var n=o.replace(e.url,"").replace("url(#","").replace(")","");t[n]=!0}})),r.forEach((function(r){t[r]||(y(e.defIds,r),e.patternElements[r]&&(e.patternElements[r].destroy(),delete e.patternElements[r]))})))}))})),r(e,"masters/modules/pattern-fill.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(o=[r(138)],void 0===(n=function(t){return h(t),h.Highcharts=t,h}.apply(e,o))||(t.exports=n))}}]);