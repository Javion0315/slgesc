(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{414:function(o,t,e){var n,r,b;b=function(b){function q(b,o,t,e){b.hasOwnProperty(o)||(b[o]=e.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:b[o]}})))}q(b=b?b._modules:{},"Series/NodesComposition.js",[b["Core/Series/Point.js"],b["Core/Series/Series.js"],b["Core/Utilities.js"]],(function(b,o,t){var e,n=t.defined,r=t.extend,l=t.find,g=t.merge,d=t.pick;return function(a){function t(){return this.data=[].concat(this.points||[],this.nodes),o.prototype.destroy.apply(this,arguments)}function e(){this.nodes&&(this.nodes.forEach((function(a){a.destroy()})),this.nodes.length=0),o.prototype.setData.apply(this,arguments)}function h(a){var o=arguments,t=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==a&&t.forEach((function(a){a&&a.series&&(b.prototype.setState.apply(a,o),a.isNode||(a.fromNode.graphic&&b.prototype.setState.apply(a.fromNode,o),a.toNode&&a.toNode.graphic&&b.prototype.setState.apply(a.toNode,o)))})),b.prototype.setState.apply(this,o)}function u(a,o,t,e){var n=this,p=this.series.options.nodes,r=this.series.options.data,l=r&&r.length||0,h=r&&r[this.index];b.prototype.update.call(this,a,!this.isNode&&o,t,e),this.isNode&&(a=(p||[]).reduce((function(a,p,o){return n.id===p.id?o:a}),-1),e=g(p&&p[a]||{},r&&r[this.index]||{}),r&&(h?r[this.index]=h:r.length=l),p?0<=a?p[a]=e:p.push(e):this.series.options.nodes=[e],d(o,!0)&&this.series.chart.redraw(t))}var c=[];a.compose=function(a,o){return-1===c.indexOf(a)&&(c.push(a),(a=a.prototype).setNodeState=h,a.setState=h,a.update=u),-1===c.indexOf(o)&&(c.push(o),(a=o.prototype).destroy=t,a.setData=e),o},a.createNode=function(a){var o=this.pointClass,t=function(a,p){return l(a,(function(a){return a.id===p}))},e=t(this.nodes,a);return e||(t=this.options.nodes&&t(this.options.nodes,a),(e=(new o).init(this,r({className:"highcharts-node",isNode:!0,id:a,y:1},t))).linksTo=[],e.linksFrom=[],e.getSum=function(){var a=0,p=0;return e.linksTo.forEach((function(o){a+=o.weight})),e.linksFrom.forEach((function(a){p+=a.weight})),Math.max(a,p)},e.offset=function(a,p){for(var o=0,t=0;t<e[p].length;t++){if(e[p][t]===a)return o;o+=e[p][t].weight}},e.hasShape=function(){var a=0;return e.linksTo.forEach((function(o){o.outgoing&&a++})),!e.linksTo.length||a!==e.linksTo.length},e.index=this.nodes.push(e)-1),e.formatPrefix="node",e.name=e.name||e.options.id||"",e.mass=d(e.options.mass,e.options.marker&&e.options.marker.radius,this.options.marker&&this.options.marker.radius,4),e},a.destroy=t,a.generatePoints=function(){var a=this.chart,t={};o.prototype.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(a){a.linksFrom.length=0,a.linksTo.length=0,a.level=a.options.level})),this.points.forEach((function(o){n(o.from)&&(t[o.from]||(t[o.from]=this.createNode(o.from)),t[o.from].linksFrom.push(o),o.fromNode=t[o.from],a.styledMode?o.colorIndex=d(o.options.colorIndex,t[o.from].colorIndex):o.color=o.options.color||t[o.from].color),n(o.to)&&(t[o.to]||(t[o.to]=this.createNode(o.to)),t[o.to].linksTo.push(o),o.toNode=t[o.to]),o.name=o.name||o.id}),this),this.nodeLookup=t},a.setNodeState=h,a.updateNode=u}(e||(e={})),e})),q(b,"Series/Sankey/SankeyPoint.js",[b["Core/Series/Point.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],(function(b,o,t){var e=this&&this.__extends||function(){var b=function(g,o){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var t in a)a.hasOwnProperty(t)&&(o[t]=a[t])},b(g,o)};return function(g,o){function t(){this.constructor=g}b(g,o),g.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}}(),n=t.defined;return function(o){function g(){var t=null!==o&&o.apply(this,arguments)||this;return t.className=void 0,t.fromNode=void 0,t.level=void 0,t.linkBase=void 0,t.linksFrom=void 0,t.linksTo=void 0,t.mass=void 0,t.nodeX=void 0,t.nodeY=void 0,t.options=void 0,t.series=void 0,t.toNode=void 0,t}return e(g,o),g.prototype.applyOptions=function(o,t){return b.prototype.applyOptions.call(this,o,t),n(this.options.level)&&(this.options.column=this.column=this.options.level),this},g.prototype.getClassName=function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+b.prototype.getClassName.call(this)},g.prototype.getFromNode=function(){for(var b,o=-1,a=0;a<this.linksTo.length;a++){var t=this.linksTo[a];t.fromNode.column>o&&t.fromNode!==this&&(o=(b=t.fromNode).column)}return{fromNode:b,fromColumn:o}},g.prototype.setNodeColumn=function(){n(this.options.column)||(this.column=0===this.linksTo.length?0:this.getFromNode().fromColumn+1)},g.prototype.isValid=function(){return this.isNode||"number"==typeof this.weight},g}(o.seriesTypes.column.prototype.pointClass)})),q(b,"Series/Sankey/SankeyColumnComposition.js",[b["Core/Utilities.js"]],(function(b){var o,t=b.defined,e=b.relativeLength;return function(b){b.compose=function(b,t){return b.sankeyColumn=new o(b,t),b};var o=function(){function b(o,b){this.points=o,this.series=b}return b.prototype.getTranslationFactor=function(o){for(var t,b=this.points,a=b.slice(),e=o.options.minLinkWidth||0,g=0,n=(o.chart.plotSizeY||0)-(o.options.borderWidth||0)-(b.length-1)*o.nodePadding;b.length;){for(g=n/b.sankeyColumn.sum(),o=!1,t=b.length;t--;)b[t].getSum()*g<e&&(b.splice(t,1),n-=e,o=!0);if(!o)break}return b.length=0,a.forEach((function(a){b.push(a)})),g},b.prototype.top=function(o){var b=this.series,a=b.nodePadding,t=this.points.reduce((function(t,g){return 0<t&&(t+=a),t+(g=Math.max(g.getSum()*o,b.options.minLinkWidth||0))}),0);return((b.chart.plotSizeY||0)-t)/2},b.prototype.left=function(o){var b=this.series,a=b.chart,t=b.options.equalNodes,g=a.inverted?a.plotHeight:a.plotWidth,e=b.nodePadding,u=this.points.reduce((function(a,n){return 0<a&&(a+=e),a+(n=t?g/n.series.nodes.length-e:Math.max(n.getSum()*o,b.options.minLinkWidth||0))}),0);return((a.plotSizeX||0)-Math.round(u))/2},b.prototype.sum=function(){return this.points.reduce((function(b,g){return b+g.getSum()}),0)},b.prototype.offset=function(b,g){var a=this.points,o=this.series,n=o.nodePadding,r=0;if(o.is("organization")&&b.hangsFrom)return{absoluteTop:b.hangsFrom.nodeY};for(var u=0;u<a.length;u++){var l=a[u].getSum(),d=Math.max(l*g,o.options.minLinkWidth||0),h=b.options[o.chart.inverted?"offsetHorizontal":"offsetVertical"],c=b.options.offset||0;if(l=l?d+n:0,a[u]===b)return{relativeTop:r+(t(h)?e(h,d):e(c,l))};r+=l}},b}();b.SankeyColumnAdditions=o}(o||(o={})),o})),q(b,"Series/TreeUtilities.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],(function(b,o){var t=o.extend,e=o.isArray,q=o.isNumber,g=o.isObject,n=o.merge,r=o.pick;return{getColor:function(a,o){var p,t=o.index,g=o.mapOptionsToLevel,e=o.parentColor,n=o.parentColorIndex,l=o.series,d=o.colors,h=o.siblings,c=l.points,f=l.chart.options.chart;if(a){if(c=c[a.i],a=g[a.level]||{},g=c&&a.colorByPoint)var m=c.index%(d?d.length:f.colorCount),v=d&&d[m];l.chart.styledMode||(d=c&&c.options.color,f=a&&a.color,(p=e)&&(p=(p=a&&a.colorVariation)&&"brightness"===p.key&&t&&h?b.parse(e).brighten(t/h*p.to).get():e),p=r(d,f,v,p,l.color));var y=r(c&&c.options.colorIndex,a&&a.colorIndex,m,n,o.colorIndex)}return{color:p,colorIndex:y}},getLevelOptions:function(a){var b=null;if(g(a)){b={};var o=q(a.from)?a.from:1,t=a.levels,l={},d=g(a.defaults)?a.defaults:{};for(e(t)&&(l=t.reduce((function(a,b){if(g(b)&&q(b.level)){var t=n({},b),e=r(t.levelIsConstant,d.levelIsConstant);delete t.levelIsConstant,delete t.level,b=b.level+(e?0:o-1),g(a[b])?n(!0,a[b],t):a[b]=t}return a}),{})),t=q(a.to)?a.to:1,a=0;a<=t;a++)b[a]=n({},d,g(l[a])?l[a]:{})}return b},setTreeValues:function o(a,b){var e=b.before,n=b.idRoot,g=b.mapIdToNode[n],l=b.points[a.i],d=l&&l.options||{},h=[],c=0;return a.levelDynamic=a.level-(!1!==b.levelIsConstant?0:g.level),a.name=r(l&&l.name,""),a.visible=n===a.id||!0===b.visible,"function"==typeof e&&(a=e(a,b)),a.children.forEach((function(e,n){var p=t({},b);t(p,{index:n,siblings:a.children.length,visible:a.visible}),e=o(e,p),h.push(e),e.visible&&(c+=e.val)})),e=r(d.value,c),a.visible=0<=e&&(0<c||a.visible),a.children=h,a.childrenTotal=c,a.isLeaf=a.visible&&!c,a.val=e,a},updateRootId:function(a){if(g(a)){var b=g(a.options)?a.options:{};b=r(a.rootNode,b.rootId,""),g(a.userOptions)&&(a.userOptions.rootId=b),a.rootNode=b}return b}}})),q(b,"Series/Sankey/SankeySeries.js",[b["Core/Color/Color.js"],b["Core/Globals.js"],b["Series/NodesComposition.js"],b["Series/Sankey/SankeyPoint.js"],b["Core/Series/SeriesRegistry.js"],b["Series/Sankey/SankeyColumnComposition.js"],b["Series/TreeUtilities.js"],b["Core/Utilities.js"]],(function(b,o,t,e,q,n,g,r){var l=this&&this.__extends||function(){var a=function(b,o){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var o in b)b.hasOwnProperty(o)&&(a[o]=b[o])},a(b,o)};return function(b,o){function t(){this.constructor=b}a(b,o),b.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}}(),a=q.series,d=q.seriesTypes.column,h=g.getLevelOptions;g=r.extend;var c=r.isObject,u=r.merge,f=r.pick,m=r.relativeLength,v=r.stableSort;return r=function(a){function o(){var b=null!==a&&a.apply(this,arguments)||this;return b.colDistance=void 0,b.data=void 0,b.group=void 0,b.nodeLookup=void 0,b.nodePadding=void 0,b.nodes=void 0,b.nodeWidth=void 0,b.options=void 0,b.points=void 0,b.translationFactor=void 0,b}return l(o,a),o.getDLOptions=function(a){var b=c(a.optionsPoint)?a.optionsPoint.dataLabels:{};return a=c(a.level)?a.level.dataLabels:{},u({style:{}},a,b)},o.prototype.createNodeColumns=function(){var a=[];this.nodes.forEach((function(b){b.setNodeColumn(),a[b.column]||(a[b.column]=n.compose([],this)),a[b.column].push(b)}),this);for(var b=0;b<a.length;b++)void 0===a[b]&&(a[b]=n.compose([],this));return a},o.prototype.generatePoints=function(){function a(b,o){void 0===b.level&&(b.level=o,b.linksFrom.forEach((function(b){b.toNode&&a(b.toNode,o+1)})))}t.generatePoints.apply(this,arguments),this.orderNodes&&(this.nodes.filter((function(a){return 0===a.linksTo.length})).forEach((function(b){a(b,0)})),v(this.nodes,(function(a,b){return a.level-b.level})))},o.prototype.getNodePadding=function(){var a=this.options.nodePadding||0;if(this.nodeColumns){var b=this.nodeColumns.reduce((function(a,b){return Math.max(a,b.length)}),0);b*a>this.chart.plotSizeY&&(a=this.chart.plotSizeY/b)}return a},o.prototype.hasData=function(){return!!this.processedXData.length},o.prototype.pointAttribs=function(a,o){if(!a)return{};var t=this,p=t.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},e=a.options,n=p.states&&p.states[o||""]||{};o=["colorByPoint","borderColor","borderWidth","linkOpacity"].reduce((function(a,b){return a[b]=f(n[b],e[b],p[b],t.options[b]),a}),{});var g=f(n.color,e.color,o.colorByPoint?a.color:p.color);return a.isNode?{fill:g,stroke:o.borderColor,"stroke-width":o.borderWidth}:{fill:b.parse(g).setOpacity(o.linkOpacity).get()}},o.prototype.render=function(){var a=this.points;this.points=this.points.concat(this.nodes||[]),d.prototype.render.call(this),this.points=a},o.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints(),this.nodeColumns=this.createNodeColumns(),this.nodeWidth=m(this.options.nodeWidth,this.chart.plotSizeX);var a=this,b=this.chart,o=this.options,t=this.nodeWidth,e=this.nodeColumns;this.nodePadding=this.getNodePadding(),this.translationFactor=e.reduce((function(b,o){return Math.min(b,o.sankeyColumn.getTranslationFactor(a))}),1/0),this.colDistance=(b.plotSizeX-t-o.borderWidth)/Math.max(1,e.length-1),a.mapOptionsToLevel=h({from:1,levels:o.levels,to:e.length-1,defaults:{borderColor:o.borderColor,borderRadius:o.borderRadius,borderWidth:o.borderWidth,color:a.color,colorByPoint:o.colorByPoint,levelIsConstant:!0,linkColor:o.linkColor,linkLineWidth:o.linkLineWidth,linkOpacity:o.linkOpacity,states:o.states}}),e.forEach((function(b){b.forEach((function(o){a.translateNode(o,b)}))}),this),this.nodes.forEach((function(b){b.linksFrom.forEach((function(b){(b.weight||b.isNull)&&b.to&&(a.translateLink(b),b.allowShadow=!1)}))}))},o.prototype.translateLink=function(a){var b=function(b,o){return o=b.offset(a,o)*g,Math.min(b.nodeY+o,b.nodeY+(b.shapeArgs&&b.shapeArgs.height||0)-n)},o=a.fromNode,t=a.toNode,e=this.chart,g=this.translationFactor,n=Math.max(a.weight*g,this.options.minLinkWidth),r=(e.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,l=b(o,"linksFrom");b=b(t,"linksTo");var d=o.nodeX,h=this.nodeWidth;t=t.nodeX;var c=a.outgoing,q=t>d+h;if(e.inverted&&(l=e.plotSizeY-l,b=(e.plotSizeY||0)-b,h=-h,n=-n,q=d>t),a.shapeType="path",a.linkBase=[l,l+n,b,b+n],q&&"number"==typeof b)a.shapeArgs={d:[["M",d+h,l],["C",d+h+r,l,t-r,b,t,b],["L",t+(c?h:0),b+n/2],["L",t,b+n],["C",t-r,b+n,d+h+r,l+n,d+h,l+n],["Z"]]};else if("number"==typeof b){r=t-20-n,c=t-20;var f=(q=d+h)+20,m=f+n,v=l,u=l+n,y=u+20,k=y+(e.plotHeight-l-n),C=k+20,S=C+n,N=b,x=N+n,L=x+20,P=C+.7*n,O=t-.7*n,w=q+.7*n;a.shapeArgs={d:[["M",q,v],["C",w,v,m,u-.7*n,m,y],["L",m,k],["C",m,P,w,S,q,S],["L",t,S],["C",O,S,r,P,r,k],["L",r,L],["C",r,x-.7*n,O,N,t,N],["L",t,x],["C",c,x,c,x,c,L],["L",c,k],["C",c,C,c,C,t,C],["L",q,C],["C",f,C,f,C,f,k],["L",f,y],["C",f,u,f,u,q,u],["Z"]]}}a.dlBox={x:d+(t-d+h)/2,y:l+(b-l)/2,height:n,width:0},a.tooltipPos=e.inverted?[e.plotSizeY-a.dlBox.y-n/2,e.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+n/2],a.y=a.plotY=1,a.color||(a.color=o.color)},o.prototype.translateNode=function(a,b){var t=this.translationFactor,e=this.chart,n=this.options,g=a.getSum(),r=Math.max(Math.round(g*t),this.options.minLinkWidth),l=Math.round(this.nodeWidth),d=Math.round(n.borderWidth)%2/2,h=b.sankeyColumn.offset(a,t);if(b=Math.floor(f(h.absoluteTop,b.sankeyColumn.top(t)+h.relativeTop))+d,d=Math.floor(this.colDistance*a.column+n.borderWidth/2)+m(a.options.offsetHorizontal||0,l)+d,d=e.inverted?e.plotSizeX-d:d,a.sum=g){a.shapeType="rect",a.nodeX=d,a.nodeY=b,g=d,t=b,h=a.options.width||n.width||l;var c=a.options.height||n.height||r;e.inverted&&(g=d-l,t=e.plotSizeY-b-r,h=a.options.height||n.height||l,c=a.options.width||n.width||r),a.dlOptions=o.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotX=1,a.plotY=1,a.tooltipPos=e.inverted?[e.plotSizeY-t-c/2,e.plotSizeX-g-h/2]:[g+h/2,t+c/2],a.shapeArgs={x:g,y:t,width:h,height:c,display:a.hasShape()?"":"none"}}else a.dlOptions={enabled:!1}},o.defaultOptions=u(d.defaultOptions,{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1},inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 10px">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}),o}(d),t.compose(e,r),g(r.prototype,{animate:a.prototype.animate,createNode:t.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,pointArrayMap:["from","to","weight"],pointClass:e,searchPoint:o.noop}),q.registerSeriesType("sankey",r),r})),q(b,"masters/modules/sankey.src.js",[],(function(){}))},o.exports?(b.default=b,o.exports=b):(n=[e(138)],void 0===(r=function(q){return b(q),b.Highcharts=q,b}.apply(t,n))||(o.exports=r))}}]);