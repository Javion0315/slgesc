(window.webpackJsonp=window.webpackJsonp||[]).push([[27,72],{417:function(e,t,n){var o,r,a;a=function(a){function g(a,e,t,n){a.hasOwnProperty(e)||(a[e]=n.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:a[e]}})))}g(a=a?a._modules:{},"Extensions/FullScreen.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/Renderer/HTML/AST.js"],a["Core/Utilities.js"]],(function(a,e,t,n){var p=n.addEvent;return n=function(){function a(e){this.chart=e,this.isOpen=!1,e=e.renderTo,this.browserProps||("function"==typeof e.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:e.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:e.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:e.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return a.prototype.close=function(){var e=this.chart,a=e.options.chart;this.isOpen&&this.browserProps&&e.container.ownerDocument instanceof Document&&e.container.ownerDocument[this.browserProps.exitFullscreen](),this.unbindFullscreenEvent&&(this.unbindFullscreenEvent=this.unbindFullscreenEvent()),e.setSize(this.origWidth,this.origHeight,!1),this.origHeight=this.origWidth=void 0,a.width=this.origWidthOption,a.height=this.origHeightOption,this.origHeightOption=this.origWidthOption=void 0,this.isOpen=!1,this.setButtonText()},a.prototype.open=function(){var e=this,a=e.chart,b=a.options.chart;if(b&&(e.origWidthOption=b.width,e.origHeightOption=b.height),e.origWidth=a.chartWidth,e.origHeight=a.chartHeight,e.browserProps){var t=p(a.container.ownerDocument,e.browserProps.fullscreenChange,(function(){e.isOpen?(e.isOpen=!1,e.close()):(a.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())})),n=p(a,"destroy",t);e.unbindFullscreenEvent=function(){t(),n()},(b=a.renderTo[e.browserProps.requestFullscreen]())&&b.catch((function(){alert("Full screen is not supported inside a frame.")}))}},a.prototype.setButtonText=function(){var e=this.chart,a=e.exportDivElements,b=e.options.exporting,n=b&&b.buttons&&b.buttons.contextButton.menuItems;e=e.options.lang,b&&b.menuItemDefinitions&&e&&e.exitFullscreen&&e.viewFullscreen&&n&&a&&(a=a[n.indexOf("viewFullscreen")])&&t.setElementHTML(a,this.isOpen?e.exitFullscreen:b.menuItemDefinitions.viewFullscreen.text||e.viewFullscreen)},a.prototype.toggle=function(){this.isOpen?this.close():this.open()},a}(),e.Fullscreen=n,p(a,"beforeRender",(function(){this.fullscreen=new e.Fullscreen(this)})),e.Fullscreen})),g(a,"Core/Chart/ChartNavigationComposition.js",[],(function(){var a;return function(a){a.compose=function(a){return a.navigation||(a.navigation=new e(a)),a};var e=function(){function a(a){this.updates=[],this.chart=a}return a.prototype.addUpdate=function(a){this.chart.navigation.updates.push(a)},a.prototype.update=function(a,e){var t=this;this.updates.forEach((function(n){n.call(t.chart,a,e)}))},a}();a.Additions=e}(a||(a={})),a})),g(a,"Extensions/Exporting/ExportingDefaults.js",[a["Core/Globals.js"]],(function(a){return{exporting:{type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:a.isTouchDevice?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"}}}})),g(a,"Extensions/Exporting/ExportingSymbols.js",[],(function(){var a;return function(a){function e(a,e,t,b){return[["M",a,e+2.5],["L",a+t,e+2.5],["M",a,e+b/2+.5],["L",a+t,e+b/2+.5],["M",a,e+b-1.5],["L",a+t,e+b-1.5]]}function p(a,e,t,b){return a=b/3-2,(b=[]).concat(this.circle(t-a,e,a,a),this.circle(t-a,e+a+4,a,a),this.circle(t-a,e+2*(a+4),a,a))}var g=[];a.compose=function(a){-1===g.indexOf(a)&&(g.push(a),(a=a.prototype.symbols).menu=e,a.menuball=p.bind(a))}}(a||(a={})),a})),g(a,"Core/HttpUtilities.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],(function(a,e){var p=a.doc,g=e.createElement,t=e.discardElement,n=e.merge,o=e.objectEach,r={ajax:function(a){var b=n(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},a);a={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var e=new XMLHttpRequest;if(!b.url)return!1;e.open(b.type.toUpperCase(),b.url,!0),b.headers["Content-Type"]||e.setRequestHeader("Content-Type",a[b.dataType]||a.text),o(b.headers,(function(a,t){e.setRequestHeader(t,a)})),b.responseType&&(e.responseType=b.responseType),e.onreadystatechange=function(){if(4===e.readyState){if(200===e.status){if("blob"!==b.responseType){var a=e.responseText;if("json"===b.dataType)try{a=JSON.parse(a)}catch(t){return void(b.error&&b.error(e,t))}}return b.success&&b.success(a,e)}b.error&&b.error(e,e.responseText)}};try{b.data=JSON.stringify(b.data)}catch(e){}e.send(b.data||!0)},getJSON:function(a,e){r.ajax({url:a,success:e,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(a,e,r){var b=g("form",n({method:"post",action:a,enctype:"multipart/form-data"},r),{display:"none"},p.body);o(e,(function(a,e){g("input",{type:"hidden",name:e,value:a},null,b)})),b.submit(),t(b)}};return r})),g(a,"Extensions/Exporting/Exporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Chart/ChartNavigationComposition.js"],a["Core/DefaultOptions.js"],a["Extensions/Exporting/ExportingDefaults.js"],a["Extensions/Exporting/ExportingSymbols.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Core/Utilities.js"]],(function(a,e,g,t,n,o,r,l,b){e=t.defaultOptions;var c,p=r.doc,h=r.win,d=b.addEvent,q=b.css,f=b.createElement,m=b.discardElement,x=b.extend,v=b.find,y=b.fireEvent,w=b.isObject,E=b.merge,C=b.objectEach,S=b.pick,T=b.removeEvent,D=b.uniqueKey;return function(e){function t(a){var e=this,t=e.renderer,b=E(e.options.navigation.buttonOptions,a),n=b.onclick,o=b.menuItems,r=b.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==b.enabled&&b.theme){var l,c=b.theme,h=c.states,p=h&&h.hover;h=h&&h.select,e.styledMode||(c.fill=S(c.fill,"#ffffff"),c.stroke=S(c.stroke,"none")),delete c.states,n?l=function(a){a&&a.stopPropagation(),n.call(e,a)}:o&&(l=function(a){a&&a.stopPropagation(),e.contextMenu(d.menuClassName,o,d.translateX,d.translateY,d.width,d.height,d),d.setState(2)}),b.text&&b.symbol?c.paddingLeft=S(c.paddingLeft,30):b.text||x(c,{width:b.width,height:b.height,padding:0}),e.styledMode||(c["stroke-linecap"]="round",c.fill=S(c.fill,"#ffffff"),c.stroke=S(c.stroke,"none"));var d=t.button(b.text,0,0,l,c,p,h).addClass(a.className).attr({title:S(e.options.lang[b._titleKey||b.titleKey],"")});if(d.menuClassName=a.menuClassName||"highcharts-menu-"+e.btnCount++,b.symbol){var g=t.symbol(b.symbol,b.symbolX-r/2,b.symbolY-r/2,r,r,{width:r,height:r}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d);e.styledMode||g.attr({stroke:b.symbolStroke,fill:b.symbolFill,"stroke-width":b.symbolStrokeWidth||1})}d.add(e.exportingGroup).align(x(b,{width:d.width,x:S(b.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(d.width+b.buttonSpacing)*("right"===b.align?-1:1),e.exportSVGElements.push(d,g)}}function n(){if(this.printReverseInfo){var a=this.printReverseInfo,b=a.childNodes,e=a.origDisplay;a=a.resetParams,this.moveContainers(this.renderTo),[].forEach.call(b,(function(a,t){1===a.nodeType&&(a.style.display=e[t]||"")})),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,z=void 0,y(this,"afterPrint")}}function c(){var a=p.body,b=this.options.exporting.printMaxWidth,e={childNodes:a.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),y(this,"beforePrint"),b&&this.chartWidth>b&&(e.resetParams=[this.options.chart.width,void 0,!1],this.setSize(b,void 0,!1)),[].forEach.call(e.childNodes,(function(a,t){1===a.nodeType&&(e.origDisplay[t]=a.style.display,a.style.display="none")})),this.moveContainers(a),this.printReverseInfo=e}function k(a){a.renderExporting(),d(a,"redraw",a.renderExporting),d(a,"destroy",a.destroyExport)}function O(e,t,n,o,g,r,l){var c=this,u=c.options.navigation,m=c.chartWidth,v=c.chartHeight,E="cache-"+e,C=Math.max(g,r),S=c[E];if(!S){c.exportContextMenu=c[E]=S=f("div",{className:e},{position:"absolute",zIndex:1e3,padding:C+"px",pointerEvents:"auto"},c.fixedDiv||c.container);var T=f("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},S);c.styledMode||q(T,x({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},u.menuStyle)),S.hideMenu=function(){q(S,{display:"none"}),l&&l.setState(0),c.openMenu=!1,q(c.renderTo,{overflow:"hidden"}),q(c.container,{overflow:"hidden"}),b.clearTimeout(S.hideTimer),y(c,"exportMenuHidden")},c.exportEvents.push(d(S,"mouseleave",(function(){S.hideTimer=h.setTimeout(S.hideMenu,500)})),d(S,"mouseenter",(function(){b.clearTimeout(S.hideTimer)})),d(p,"mouseup",(function(a){c.pointer.inClass(a.target,e)||S.hideMenu()})),d(S,"click",(function(){c.openMenu&&S.hideMenu()}))),t.forEach((function(e){if("string"==typeof e&&(e=c.options.exporting.menuItemDefinitions[e]),w(e,!0)){var b=void 0;e.separator?b=f("hr",void 0,void 0,T):("viewData"===e.textKey&&c.isDataTableVisible&&(e.textKey="hideData"),b=f("li",{className:"highcharts-menu-item",onclick:function(a){a&&a.stopPropagation(),S.hideMenu(),e.onclick&&e.onclick.apply(c,arguments)}},void 0,T),a.setElementHTML(b,e.text||c.options.lang[e.textKey]),c.styledMode||(b.onmouseover=function(){q(this,u.menuItemHoverStyle)},b.onmouseout=function(){q(this,u.menuItemStyle)},q(b,x({cursor:"pointer"},u.menuItemStyle||{})))),c.exportDivElements.push(b)}})),c.exportDivElements.push(T,S),c.exportMenuWidth=S.offsetWidth,c.exportMenuHeight=S.offsetHeight}t={display:"block"},n+c.exportMenuWidth>m?t.right=m-n-g-C+"px":t.left=n-C+"px",o+r+c.exportMenuHeight>v&&"top"!==l.alignOptions.verticalAlign?t.bottom=v-o-C+"px":t.top=o+r-C+"px",q(S,t),q(c.renderTo,{overflow:""}),q(c.container,{overflow:""}),c.openMenu=!0,y(c,"exportMenuShown")}function F(a){var g,e=a?a.target:this,t=e.exportSVGElements,n=e.exportDivElements;a=e.exportEvents,t&&(t.forEach((function(a,b){a&&(a.onclick=a.ontouchstart=null,g="cache-"+a.menuClassName,e[g]&&delete e[g],t[b]=a.destroy())})),t.length=0),e.exportingGroup&&(e.exportingGroup.destroy(),delete e.exportingGroup),n&&(n.forEach((function(a,e){a&&(b.clearTimeout(a.hideTimer),T(a,"mouseleave"),n[e]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null,m(a))})),n.length=0),a&&(a.forEach((function(a){a()})),a.length=0)}function M(a,b){b=this.getSVGForExport(a,b),a=E(this.options.exporting,a),l.post(a.url,{filename:a.filename?a.filename.replace(/\//g,"-"):this.getFilename(),type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)}function j(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function N(){var a=this.userOptions.title&&this.userOptions.title.text,b=this.options.exporting.filename;return b?b.replace(/\//g,"-"):("string"==typeof a&&(b=a.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!b||5>b.length)&&(b="chart"),b)}function H(a){var b,e=E(this.options,a);e.plotOptions=E(this.userOptions.plotOptions,a&&a.plotOptions),e.time=E(this.userOptions.time,a&&a.time);var t=f("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body),n=this.renderTo.style.width,g=this.renderTo.style.height;n=e.exporting.sourceWidth||e.chart.width||/px$/.test(n)&&parseInt(n,10)||(e.isGantt?800:600),g=e.exporting.sourceHeight||e.chart.height||/px$/.test(g)&&parseInt(g,10)||400,x(e.chart,{animation:!1,renderTo:t,forExport:!0,renderer:"SVGRenderer",width:n,height:g}),e.exporting.enabled=!1,delete e.data,e.series=[],this.series.forEach((function(a){(b=E(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible})).isInternal||e.series.push(b)}));var o={};this.axes.forEach((function(a){a.userOptions.internalKey||(a.userOptions.internalKey=D()),a.options.isInternal||(o[a.coll]||(o[a.coll]=!0,e[a.coll]=[]),e[a.coll].push(E(a.userOptions,{visible:a.visible})))}));var r=new this.constructor(e,this.callback);return a&&["xAxis","yAxis","series"].forEach((function(e){var b={};a[e]&&(b[e]=a[e],r.update(b))})),this.axes.forEach((function(a){var e=v(r.axes,(function(e){return e.options.internalKey===a.userOptions.internalKey})),b=a.getExtremes(),t=b.userMin;b=b.userMax,e&&(void 0!==t&&t!==e.min||void 0!==b&&b!==e.max)&&e.setExtremes(t,b,!0,!1)})),g=r.getChartHTML(),y(this,"getSVG",{chartCopy:r}),g=this.sanitizeSVG(g,e),e=null,r.destroy(),m(t),g}function L(a,b){var e=this.options.exporting;return this.getSVG(E({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))}function P(a){return a.replace(/([A-Z])/g,(function(a,b){return"-"+b.toLowerCase()}))}function A(){var t,b=B,g=e.inlineWhitelist,n={},o=p.createElement("iframe");q(o,{width:"1px",height:"1px",visibility:"hidden"}),p.body.appendChild(o);var l=o.contentWindow.document;l.open(),l.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),l.close(),function a(e){var o,u,c="";if(1===e.nodeType&&-1===$.indexOf(e.nodeName)){var d=h.getComputedStyle(e,null),p="svg"===e.nodeName?{}:h.getComputedStyle(e.parentNode,null);if(!n[e.nodeName]){t=l.getElementsByTagName("svg")[0];var f=l.createElementNS(e.namespaceURI,e.nodeName);t.appendChild(f),n[e.nodeName]=E(h.getComputedStyle(f,null)),"text"===e.nodeName&&delete n.text.fill,t.removeChild(f)}for(var q in d)if(r.isFirefox||r.isMS||r.isSafari||Object.hasOwnProperty.call(d,q)){var m=d[q],x=q;if(f=o=!1,g.length){for(u=g.length;u--&&!o;)o=g[u].test(x);f=!o}for("transform"===x&&"none"===m&&(f=!0),u=b.length;u--&&!f;)f=b[u].test(x)||"function"==typeof m;f||p[x]===m&&"svg"!==e.nodeName||n[e.nodeName][x]===m||(K&&-1===K.indexOf(x)?c+=P(x)+":"+m+";":m&&e.setAttribute(P(x),m))}c&&(d=e.getAttribute("style"),e.setAttribute("style",(d?d+";":"")+c)),"svg"===e.nodeName&&e.setAttribute("stroke-width","1px"),"text"!==e.nodeName&&[].forEach.call(e.children||e.childNodes,a)}}(this.container.querySelector("svg")),t.parentNode.removeChild(t),o.parentNode.removeChild(o)}function R(a){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach((function(e){a.appendChild(e)}))}function G(){var a=this;a.exporting={update:function(e,b){a.isDirtyExporting=!0,E(!0,a.options.exporting,e),S(b,!0)&&a.redraw()}},g.compose(a).navigation.addUpdate((function(e,b){a.isDirtyExporting=!0,E(!0,a.options.navigation,e),S(b,!0)&&a.redraw()}))}function V(){var a=this;a.isPrinting||(z=a,r.isSafari||a.beforePrint(),setTimeout((function(){h.focus(),h.print(),r.isSafari||setTimeout((function(){a.afterPrint()}),1e3)}),1))}function I(){var a=this,b=a.options.exporting,e=b.buttons,t=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0,a.isDirtyExporting&&a.destroyExport(),t&&!1!==b.enabled&&(a.exportEvents=[],a.exportingGroup=a.exportingGroup||a.renderer.g("exporting-group").attr({zIndex:3}).add(),C(e,(function(b){a.addButton(b)})),a.isDirtyExporting=!1)}function W(a,b){var e=a.indexOf("</svg>")+6,t=a.substr(e);return a=a.substr(0,e),b&&b.exporting&&b.exporting.allowHTML&&t&&(t='<foreignObject x="0" y="0" width="'+b.chart.width+'" height="'+b.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+t.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",a=a.replace("</svg>",t+"</svg>")),a=a.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a)),a}var U=[],B=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],K="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");e.inlineWhitelist=[];var z,$=["clipPath","defs","desc"];e.compose=function(a,b){o.compose(b),-1===U.indexOf(a)&&(U.push(a),(b=a.prototype).afterPrint=n,b.exportChart=M,b.inlineStyles=A,b.print=V,b.sanitizeSVG=W,b.getChartHTML=j,b.getSVG=H,b.getSVGForExport=L,b.getFilename=N,b.moveContainers=R,b.beforePrint=c,b.contextMenu=O,b.addButton=t,b.destroyExport=F,b.renderExporting=I,b.callbacks.push(k),d(a,"init",G),r.isSafari&&r.win.matchMedia("print").addListener((function(a){z&&(a.matches?z.beforePrint():z.afterPrint())})))}}(c||(c={})),e.exporting=E(n.exporting,e.exporting),e.lang=E(n.lang,e.lang),e.navigation=E(n.navigation,e.navigation),c})),g(a,"masters/modules/exporting.src.js",[a["Core/Globals.js"],a["Extensions/Exporting/Exporting.js"],a["Core/HttpUtilities.js"]],(function(a,e,g){a.HttpUtilities=g,a.ajax=g.ajax,a.getJSON=g.getJSON,a.post=g.post,e.compose(a.Chart,a.Renderer)}))},e.exports?(a.default=a,e.exports=a):(o=[n(138)],void 0===(r=function(g){return a(g),a.Highcharts=g,a}.apply(t,o))||(e.exports=r))},461:function(e,t,n){var o,r,a;a=function(a){function g(a,b,e,t){a.hasOwnProperty(b)||(a[b]=t.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}g(a=a?a._modules:{},"Extensions/DownloadURL.js",[a["Core/Globals.js"]],(function(a){var b=a.isSafari,e=a.win,t=e.document,n=e.URL||e.webkitURL||e,o=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&e.Blob&&n.createObjectURL){var b=e.atob(a[3]),t=new e.ArrayBuffer(b.length);t=new e.Uint8Array(t);for(var o=0;o<t.length;++o)t[o]=b.charCodeAt(o);return a=new e.Blob([t],{type:a[1]}),n.createObjectURL(a)}};return a=a.downloadURL=function(a,n){var r=e.navigator,l=t.createElement("a");if("string"==typeof a||a instanceof String||!r.msSaveOrOpenBlob){if(a=""+a,r=/Edge\/\d+/.test(r.userAgent),(b&&"string"==typeof a&&0===a.indexOf("data:application/pdf")||r||2e6<a.length)&&!(a=o(a)||""))throw Error("Failed to convert to blob");if(void 0!==l.download)l.href=a,l.download=n,t.body.appendChild(l),l.click(),t.body.removeChild(l);else try{var c=e.open(a,"chart");if(null==c)throw Error("Failed to open window")}catch(t){e.location.href=a}}else r.msSaveOrOpenBlob(a,n)},{dataURLtoBlob:o,downloadURL:a}})),g(a,"Extensions/ExportData.js",[a["Core/Axis/Axis.js"],a["Core/Chart/Chart.js"],a["Core/Renderer/HTML/AST.js"],a["Core/Globals.js"],a["Core/DefaultOptions.js"],a["Core/Utilities.js"],a["Extensions/DownloadURL.js"]],(function(a,b,e,t,n,o,r){function g(a,p){var e=h.navigator,t=-1<e.userAgent.indexOf("WebKit")&&0>e.userAgent.indexOf("Chrome"),b=h.URL||h.webkitURL||h;try{if(e.msSaveOrOpenBlob&&h.MSBlobBuilder){var n=new h.MSBlobBuilder;return n.append(a),n.getBlob("image/svg+xml")}if(!t)return b.createObjectURL(new h.Blob(["\ufeff"+a],{type:p}))}catch(e){}}var l=t.doc,c=t.seriesTypes,h=t.win;t=n.getOptions,n=n.setOptions;var d=o.addEvent,f=o.defined,m=o.extend,x=o.find,v=o.fireEvent,y=o.isNumber,w=o.pick,E=r.downloadURL;n({exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:"\n"},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},viewData:"View data table",hideData:"Hide data table"}}),d(b,"render",(function(){this.options&&this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&!this.dataTableDiv&&this.viewData()})),b.prototype.setUpKeyToAxis=function(){c.arearange&&(c.arearange.prototype.keyToAxis={low:"y",high:"y"}),c.gantt&&(c.gantt.prototype.keyToAxis={start:"x",end:"x"})},b.prototype.getDataRows=function(e){var t,p=this.hasParallelCoordinates,n=this.time,o=this.options.exporting&&this.options.exporting.csv||{},b=this.xAxis,r={},l=[],c=[],h=[],d=this.options.lang.exportData,m=d.categoryHeader,E=d.categoryDatetimeHeader,C=function(q,t,b){if(o.columnHeaderFormatter){var n=o.columnHeaderFormatter(q,t,b);if(!1!==n)return n}return q?q instanceof a?q.options.title&&q.options.title.text||(q.dateTime?E:m):e?{columnTitle:1<b?t:q.name,topLevelColumnTitle:q.name}:q.name+(1<b?" ("+t+")":""):m},S=function(a,e,t){var q={},b={};return e.forEach((function(e){var n=(a.keyToAxis&&a.keyToAxis[e]||e)+"Axis";n=y(t)?a.chart[n][t]:a[n],q[e]=n&&n.categories||[],b[e]=n&&n.dateTime})),{categoryMap:q,dateTimeValueAxisMap:b}},T=[],D=0;for(k in this.setUpKeyToAxis(),this.series.forEach((function(a){var l,d=a.xAxis,f=a.options.keys||function(a,e){return a.data.filter((function(a){return void 0!==a.y&&a.name})).length&&e&&!e.categories&&!a.keyToAxis?a.pointArrayMap&&a.pointArrayMap.filter((function(a){return"x"===a})).length?(a.pointArrayMap.unshift("x"),a.pointArrayMap):["x","y"]:a.pointArrayMap||["y"]}(a,d),q=f.length,m=!a.requireSorting&&{},g=b.indexOf(d),v=S(a,f);if(!1!==a.options.includeInDataExport&&!a.options.isInternal&&!1!==a.visible){for(x(T,(function(a){return a[0]===g}))||T.push([g,D]),l=0;l<q;)t=C(a,f[l],f.length),h.push(t.columnTitle||t),e&&c.push(t.topLevelColumnTitle||t),l++;var y={chart:a.chart,autoIncrement:a.autoIncrement,options:a.options,pointArrayMap:a.pointArrayMap};a.options.data.forEach((function(e,b){p&&(v=S(a,f,b));var t={series:y};a.pointClass.prototype.applyOptions.apply(t,[e]),e=t.x;var c=a.data[b]&&a.data[b].name;for(l=0,(!d||"name"===a.exportKey||!p&&d&&d.hasNames&&c)&&(e=c),m&&(m[e]&&(e+="|"+b),m[e]=!0),r[e]||(r[e]=[],r[e].xValues=[]),r[e].x=t.x,r[e].name=c,r[e].xValues[g]=t.x;l<q;)c=t[b=f[l]],r[e][D+l]=w(v.categoryMap[b][c],v.dateTimeValueAxisMap[b]?n.dateFormat(o.dateFormat,c):null,c),l++})),D+=l}})),r)Object.hasOwnProperty.call(r,k)&&l.push(r[k]);var k=e?[c,h]:[h];for(D=T.length;D--;){var O=T[D][0],F=T[D][1],g=b[O];l.sort((function(a,e){return a.xValues[O]-e.xValues[O]})),d=C(g),k[0].splice(F,0,d),e&&k[1]&&k[1].splice(F,0,d),l.forEach((function(a){var e=a.name;g&&!f(e)&&(g.dateTime?(a.x instanceof Date&&(a.x=a.x.getTime()),e=n.dateFormat(o.dateFormat,a.x)):e=g.categories?w(g.names[a.x],g.categories[a.x],a.x):a.x),a.splice(F,0,e)}))}return k=k.concat(l),v(this,"exportData",{dataRows:k}),k},b.prototype.getCSV=function(a){var e="",t=this.getDataRows(),b=this.options.exporting.csv,n=w(b.decimalPoint,","!==b.itemDelimiter&&a?1.1.toLocaleString()[1]:"."),o=w(b.itemDelimiter,","===n?";":","),r=b.lineDelimiter;return t.forEach((function(a,b){for(var p,l=a.length;l--;)"string"==typeof(p=a[l])&&(p='"'+p+'"'),"number"==typeof p&&"."!==n&&(p=p.toString().replace(".",n)),a[l]=p;e+=a.join(o),b<t.length-1&&(e+=r)})),e},b.prototype.getTable=function(a){var e=function(a){if(!a.tagName||"#text"===a.tagName)return a.textContent||"";var b=a.attributes,t="<"+a.tagName;return b&&Object.keys(b).forEach((function(a){t+=" "+a+'="'+b[a]+'"'})),t+=">",t+=a.textContent||"",(a.children||[]).forEach((function(a){t+=e(a)})),t+="</"+a.tagName+">"};return a=this.getTableAST(a),e(a)},b.prototype.getTableAST=function(a){var e=0,b=[],t=this.options,n=a?1.1.toLocaleString()[1]:".",o=w(t.exporting.useMultiLevelHeaders,!0);a=this.getDataRows(o);var r=o?a.shift():null,g=a.shift(),l=function(a,e,b,t){var o=w(t,"");return e="text"+(e?" "+e:""),"number"==typeof o?(o=o.toString(),","===n&&(o=o.replace(".",n)),e="number"):t||(e="empty"),{tagName:a,attributes:b=m({class:e},b),textContent:o}};!1!==t.exporting.tableCaption&&b.push({tagName:"caption",attributes:{class:"highcharts-table-caption"},textContent:w(t.exporting.tableCaption,t.title.text?t.title.text:"Chart")});for(var c=0,h=a.length;c<h;++c)a[c].length>e&&(e=a[c].length);b.push(function(a,e,b){var n=[],r=0;b=b||e&&e.length;var c,h=0;if(c=o&&a&&e){e:if(c=a.length,e.length===c){for(;c--;)if(a[c]!==e[c]){c=!1;break e}c=!0}else c=!1;c=!c}if(c){for(c=[];r<b;++r){var g=a[r],p=a[r+1];g===p?++h:h?(c.push(l("th","highcharts-table-topheading",{scope:"col",colspan:h+1},g)),h=0):(g===e[r]?t.exporting.useRowspanHeaders?(p=2,delete e[r]):(p=1,e[r]=""):p=1,g=l("th","highcharts-table-topheading",{scope:"col"},g),1<p&&g.attributes&&(g.attributes.valign="top",g.attributes.rowspan=p),c.push(g))}n.push({tagName:"tr",children:c})}if(e){for(c=[],r=0,b=e.length;r<b;++r)void 0!==e[r]&&c.push(l("th",null,{scope:"col"},e[r]));n.push({tagName:"tr",children:c})}return{tagName:"thead",children:n}}(r,g,Math.max(e,g.length)));var u=[];return a.forEach((function(a){for(var b=[],t=0;t<e;t++)b.push(l(t?"td":"th",null,t?{}:{scope:"row"},a[t]));u.push({tagName:"tr",children:b})})),b.push({tagName:"tbody",children:u}),b={tree:{tagName:"table",id:"highcharts-data-table-"+this.index,children:b}},v(this,"aftergetTableAST",b),b.tree},b.prototype.downloadCSV=function(){var a=this.getCSV(!0);E(g(a,"text/csv")||"data:text/csv,\ufeff"+encodeURIComponent(a),this.getFilename()+".csv")},b.prototype.downloadXLS=function(){var a='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+this.getTable(!0)+"</body></html>";E(g(a,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+h.btoa(unescape(encodeURIComponent(a))),this.getFilename()+".xls")},b.prototype.viewData=function(){this.toggleDataTable(!0)},b.prototype.hideData=function(){this.toggleDataTable(!1)},b.prototype.toggleDataTable=function(a){(a=w(a,!this.isDataTableVisible))&&!this.dataTableDiv&&(this.dataTableDiv=l.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling)),this.dataTableDiv&&(this.dataTableDiv.style.display=a?"block":"none",a&&(this.dataTableDiv.innerHTML=e.emptyHTML,new e([this.getTableAST()]).addToDOM(this.dataTableDiv),v(this,"afterViewData",this.dataTableDiv))),this.isDataTableVisible=a,a=this.exportDivElements;var b=this.options.exporting,t=b&&b.buttons&&b.buttons.contextButton.menuItems;b=this.options.lang,u&&u.menuItemDefinitions&&b&&b.viewData&&b.hideData&&t&&a&&(a=a[t.indexOf("viewData")])&&e.setElementHTML(a,this.isDataTableVisible?b.hideData:b.viewData)};var u=t().exporting;u&&(m(u.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},viewData:{textKey:"viewData",onclick:function(){this.toggleDataTable()}}}),u.buttons&&u.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData")),c.map&&(c.map.prototype.exportKey="name"),c.mapbubble&&(c.mapbubble.prototype.exportKey="name"),c.treemap&&(c.treemap.prototype.exportKey="name")})),g(a,"masters/modules/export-data.src.js",[],(function(){}))},e.exports?(a.default=a,e.exports=a):(o=[n(138),n(417)],void 0===(r=function(g){return a(g),a.Highcharts=g,a}.apply(t,o))||(e.exports=r))}}]);