/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{489:function(t,e,o){var n,r,h;h=function(t){"use strict";var e=t?t._modules:{};function o(t,path,e,o){t.hasOwnProperty(path)||(t[path]=o.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:t[path]}})))}o(e,"Series/NodesComposition.js",[e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Utilities.js"]],(function(t,e,o){var n,r=o.defined,h=o.extend,d=o.find,c=o.merge,l=o.pick;return function(o){var n=[];function f(){return this.data=[].concat(this.points||[],this.nodes),e.prototype.destroy.apply(this,arguments)}function m(){this.nodes&&(this.nodes.forEach((function(t){t.destroy()})),this.nodes.length=0),e.prototype.setData.apply(this,arguments)}function y(e){var o=arguments,n=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==e&&n.forEach((function(e){e&&e.series&&(t.prototype.setState.apply(e,o),e.isNode||(e.fromNode.graphic&&t.prototype.setState.apply(e.fromNode,o),e.toNode&&e.toNode.graphic&&t.prototype.setState.apply(e.toNode,o)))})),t.prototype.setState.apply(this,o)}function v(e,o,n,r){var h=this,d=this.series.options.nodes,data=this.series.options.data,f=data&&data.length||0,m=data&&data[this.index];if(t.prototype.update.call(this,e,!this.isNode&&o,n,r),this.isNode){var y=(d||[]).reduce((function(t,e,o){return h.id===e.id?o:t}),-1),v=c(d&&d[y]||{},data&&data[this.index]||{});data&&(m?data[this.index]=m:data.length=f),d?y>=0?d[y]=v:d.push(v):this.series.options.nodes=[v],l(o,!0)&&this.series.chart.redraw(n)}}o.compose=function(t,e){if(-1===n.indexOf(t)){n.push(t);var o=t.prototype;o.setNodeState=y,o.setState=y,o.update=v}if(-1===n.indexOf(e)){n.push(e);var r=e.prototype;r.destroy=f,r.setData=m}return e},o.createNode=function(t){var e,o=this.pointClass,n=function(t,e){return d(t,(function(t){return t.id===e}))},r=n(this.nodes,t);return r||(e=this.options.nodes&&n(this.options.nodes,t),(r=(new o).init(this,h({className:"highcharts-node",isNode:!0,id:t,y:1},e))).linksTo=[],r.linksFrom=[],r.getSum=function(){var t=0,e=0;return r.linksTo.forEach((function(link){t+=link.weight})),r.linksFrom.forEach((function(link){e+=link.weight})),Math.max(t,e)},r.offset=function(t,e){for(var o=0,i=0;i<r[e].length;i++){if(r[e][i]===t)return o;o+=r[e][i].weight}},r.hasShape=function(){var t=0;return r.linksTo.forEach((function(link){link.outgoing&&t++})),!r.linksTo.length||t!==r.linksTo.length},r.index=this.nodes.push(r)-1),r.formatPrefix="node",r.name=r.name||r.options.id||"",r.mass=l(r.options.mass,r.options.marker&&r.options.marker.radius,this.options.marker&&this.options.marker.radius,4),r},o.destroy=f,o.generatePoints=function(){var t=this.chart,o={};e.prototype.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach((function(t){t.linksFrom.length=0,t.linksTo.length=0,t.level=t.options.level})),this.points.forEach((function(e){r(e.from)&&(o[e.from]||(o[e.from]=this.createNode(e.from)),o[e.from].linksFrom.push(e),e.fromNode=o[e.from],t.styledMode?e.colorIndex=l(e.options.colorIndex,o[e.from].colorIndex):e.color=e.options.color||o[e.from].color),r(e.to)&&(o[e.to]||(o[e.to]=this.createNode(e.to)),o[e.to].linksTo.push(e),e.toNode=o[e.to]),e.name=e.name||e.id}),this),this.nodeLookup=o},o.setNodeState=y,o.updateNode=v}(n||(n={})),n})),o(e,"Series/Networkgraph/Integrations.js",[e["Core/Globals.js"]],(function(t){t.networkgraphIntegrations={verlet:{attractiveForceFunction:function(t,e){return(e-t)/t},repulsiveForceFunction:function(t,e){return(e-t)/t*(e>t?1:0)},barycenter:function(){var t=this.options.gravitationalConstant,e=this.barycenter.xFactor,o=this.barycenter.yFactor;e=(e-(this.box.left+this.box.width)/2)*t,o=(o-(this.box.top+this.box.height)/2)*t,this.nodes.forEach((function(t){t.fixedPosition||(t.plotX-=e/t.mass/t.degree,t.plotY-=o/t.mass/t.degree)}))},repulsive:function(t,e,o){var n=e*this.diffTemperature/t.mass/t.degree;t.fixedPosition||(t.plotX+=o.x*n,t.plotY+=o.y*n)},attractive:function(link,t,e){var o=link.getMass(),n=-e.x*t*this.diffTemperature,r=-e.y*t*this.diffTemperature;link.fromNode.fixedPosition||(link.fromNode.plotX-=n*o.fromNode/link.fromNode.degree,link.fromNode.plotY-=r*o.fromNode/link.fromNode.degree),link.toNode.fixedPosition||(link.toNode.plotX+=n*o.toNode/link.toNode.degree,link.toNode.plotY+=r*o.toNode/link.toNode.degree)},integrate:function(t,e){var o=-t.options.friction,n=t.options.maxSpeed,r=e.prevX,h=e.prevY,d=(e.plotX+e.dispX-r)*o,c=(e.plotY+e.dispY-h)*o,l=Math.abs,f=l(d)/(d||1),m=l(c)/(c||1);d=f*Math.min(n,Math.abs(d)),c=m*Math.min(n,Math.abs(c)),e.prevX=e.plotX+e.dispX,e.prevY=e.plotY+e.dispY,e.plotX+=d,e.plotY+=c,e.temperature=t.vectorLength({x:d,y:c})},getK:function(t){return Math.pow(t.box.width*t.box.height/t.nodes.length,.5)}},euler:{attractiveForceFunction:function(t,e){return t*t/e},repulsiveForceFunction:function(t,e){return e*e/t},barycenter:function(){var t=this.options.gravitationalConstant,e=this.barycenter.xFactor,o=this.barycenter.yFactor;this.nodes.forEach((function(n){if(!n.fixedPosition){var r=n.getDegree(),h=r*(1+r/2);n.dispX+=(e-n.plotX)*t*h/n.degree,n.dispY+=(o-n.plotY)*t*h/n.degree}}))},repulsive:function(t,e,o,n){t.dispX+=o.x/n*e/t.degree,t.dispY+=o.y/n*e/t.degree},attractive:function(link,t,e,o){var n=link.getMass(),r=e.x/o*t,h=e.y/o*t;link.fromNode.fixedPosition||(link.fromNode.dispX-=r*n.fromNode/link.fromNode.degree,link.fromNode.dispY-=h*n.fromNode/link.fromNode.degree),link.toNode.fixedPosition||(link.toNode.dispX+=r*n.toNode/link.toNode.degree,link.toNode.dispY+=h*n.toNode/link.toNode.degree)},integrate:function(t,e){var o;e.dispX+=e.dispX*t.options.friction,e.dispY+=e.dispY*t.options.friction,0!==(o=e.temperature=t.vectorLength({x:e.dispX,y:e.dispY}))&&(e.plotX+=e.dispX/o*Math.min(Math.abs(e.dispX),t.temperature),e.plotY+=e.dispY/o*Math.min(Math.abs(e.dispY),t.temperature))},getK:function(t){return Math.pow(t.box.width*t.box.height/t.nodes.length,.3)}}}})),o(e,"Series/Networkgraph/QuadTree.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],(function(t,e){var o=e.extend,n=t.QuadTreeNode=function(t){this.box=t,this.boxSize=Math.min(t.width,t.height),this.nodes=[],this.isInternal=!1,this.body=!1,this.isEmpty=!0};o(n.prototype,{insert:function(t,e){var o;this.isInternal?this.nodes[this.getBoxPosition(t)].insert(t,e-1):(this.isEmpty=!1,this.body?e?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,e-1),this.body=!0),this.nodes[this.getBoxPosition(t)].insert(t,e-1)):((o=new n({top:t.plotX,left:t.plotY,width:.1,height:.1})).body=t,o.isInternal=!1,this.nodes.push(o)):(this.isInternal=!1,this.body=t))},updateMassAndCenter:function(){var t=0,e=0,o=0;this.isInternal?(this.nodes.forEach((function(n){n.isEmpty||(t+=n.mass,e+=n.plotX*n.mass,o+=n.plotY*n.mass)})),e/=t,o/=t):this.body&&(t=this.body.mass,e=this.body.plotX,o=this.body.plotY),this.mass=t,this.plotX=e,this.plotY=o},divideBox:function(){var t=this.box.width/2,e=this.box.height/2;this.nodes[0]=new n({left:this.box.left,top:this.box.top,width:t,height:e}),this.nodes[1]=new n({left:this.box.left+t,top:this.box.top,width:t,height:e}),this.nodes[2]=new n({left:this.box.left+t,top:this.box.top+e,width:t,height:e}),this.nodes[3]=new n({left:this.box.left,top:this.box.top+e,width:t,height:e})},getBoxPosition:function(t){var e=t.plotX<this.box.left+this.box.width/2,o=t.plotY<this.box.top+this.box.height/2;return e?o?0:3:o?1:2}}),o((t.QuadTree=function(t,e,o,r){this.box={left:t,top:e,width:o,height:r},this.maxDepth=25,this.root=new n(this.box,"0"),this.root.isInternal=!0,this.root.isRoot=!0,this.root.divideBox()}).prototype,{insertNodes:function(t){t.forEach((function(t){this.root.insert(t,this.maxDepth)}),this)},visitNodeRecursive:function(t,e,o){var n;t||(t=this.root),t===this.root&&e&&(n=e(t)),!1!==n&&(t.nodes.forEach((function(t){if(t.isInternal){if(e&&(n=e(t)),!1===n)return;this.visitNodeRecursive(t,e,o)}else t.body&&e&&e(t.body);o&&o(t)}),this),t===this.root&&o&&o(t))},calculateMassAndCenter:function(){this.visitNodeRecursive(null,null,(function(t){t.updateMassAndCenter()}))}})})),o(e,"Series/Networkgraph/Layouts.js",[e["Core/Chart/Chart.js"],e["Core/Animation/AnimationUtilities.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],(function(t,e,o,n){var r=e.setAnimation,h=n.addEvent,d=n.clamp,c=n.defined,l=n.extend,f=n.isFunction,m=n.pick;o.layouts={"reingold-fruchterman":function(){}},l(o.layouts["reingold-fruchterman"].prototype,{init:function(t){this.options=t,this.nodes=[],this.links=[],this.series=[],this.box={x:0,y:0,width:0,height:0},this.setInitialRendering(!0),this.integration=o.networkgraphIntegrations[t.integration],this.enableSimulation=t.enableSimulation,this.attractiveForce=m(t.attractiveForce,this.integration.attractiveForceFunction),this.repulsiveForce=m(t.repulsiveForce,this.integration.repulsiveForceFunction),this.approximation=t.approximation},updateSimulation:function(t){this.enableSimulation=m(t,this.options.enableSimulation)},start:function(){var t=this,e=this.series,o=this.options;t.currentStep=0,t.forces=e[0]&&e[0].forces||[],t.chart=e[0]&&e[0].chart,t.initialRendering&&(t.initPositions(),e.forEach((function(s){s.finishedAnimating=!0,s.render()}))),t.setK(),t.resetSimulation(o),t.enableSimulation&&t.step()},step:function(){var t=this,e=this.series;this.options,t.currentStep++,"barnes-hut"===t.approximation&&(t.createQuadTree(),t.quadTree.calculateMassAndCenter()),t.forces.forEach((function(e){t[e+"Forces"](t.temperature)})),t.applyLimits(t.temperature),t.temperature=t.coolDown(t.startTemperature,t.diffTemperature,t.currentStep),t.prevSystemTemperature=t.systemTemperature,t.systemTemperature=t.getSystemTemperature(),t.enableSimulation&&(e.forEach((function(s){s.chart&&s.render()})),t.maxIterations--&&isFinite(t.temperature)&&!t.isStable()?(t.simulation&&o.win.cancelAnimationFrame(t.simulation),t.simulation=o.win.requestAnimationFrame((function(){t.step()}))):t.simulation=!1)},stop:function(){this.simulation&&o.win.cancelAnimationFrame(this.simulation)},setArea:function(t,e,o,n){this.box={left:t,top:e,width:o,height:n}},setK:function(){this.k=this.options.linkLength||this.integration.getK(this)},addElementsToCollection:function(t,e){t.forEach((function(t){-1===e.indexOf(t)&&e.push(t)}))},removeElementFromCollection:function(element,t){var e=t.indexOf(element);-1!==e&&t.splice(e,1)},clear:function(){this.nodes.length=0,this.links.length=0,this.series.length=0,this.resetSimulation()},resetSimulation:function(){this.forcedStop=!1,this.systemTemperature=0,this.setMaxIterations(),this.setTemperature(),this.setDiffTemperature()},restartSimulation:function(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))},setMaxIterations:function(t){this.maxIterations=m(t,this.options.maxIterations)},setTemperature:function(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)},setDiffTemperature:function(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)},setInitialRendering:function(t){this.initialRendering=t},createQuadTree:function(){this.quadTree=new o.QuadTree(this.box.left,this.box.top,this.box.width,this.box.height),this.quadTree.insertNodes(this.nodes)},initPositions:function(){var t=this.options.initialPositions;f(t)?(t.call(this),this.nodes.forEach((function(t){c(t.prevX)||(t.prevX=t.plotX),c(t.prevY)||(t.prevY=t.plotY),t.dispX=0,t.dispY=0}))):"circle"===t?this.setCircularPositions():this.setRandomPositions()},setCircularPositions:function(){var t=this.box,e=this.nodes,o=e.length+1,n=2*Math.PI/o,r=e.filter((function(t){return 0===t.linksTo.length})),h=[],d={},c=this.options.initialPositionRadius;function l(t){t.linksFrom.forEach((function(link){d[link.toNode.id]||(d[link.toNode.id]=!0,h.push(link.toNode),l(link.toNode))}))}r.forEach((function(t){h.push(t),l(t)})),h.length?e.forEach((function(t){-1===h.indexOf(t)&&h.push(t)})):h=e,h.forEach((function(e,o){e.plotX=e.prevX=m(e.plotX,t.width/2+c*Math.cos(o*n)),e.plotY=e.prevY=m(e.plotY,t.height/2+c*Math.sin(o*n)),e.dispX=0,e.dispY=0}))},setRandomPositions:function(){var t=this.box,e=this.nodes,o=e.length+1;function n(t){var e=t*t/Math.PI;return e-=Math.floor(e)}e.forEach((function(e,r){e.plotX=e.prevX=m(e.plotX,t.width*n(r)),e.plotY=e.prevY=m(e.plotY,t.height*n(o+r)),e.dispX=0,e.dispY=0}))},force:function(t){this.integration[t].apply(this,Array.prototype.slice.call(arguments,1))},barycenterForces:function(){this.getBarycenter(),this.force("barycenter")},getBarycenter:function(){var t=0,e=0,o=0;return this.nodes.forEach((function(n){e+=n.plotX*n.mass,o+=n.plotY*n.mass,t+=n.mass})),this.barycenter={x:e,y:o,xFactor:e/t,yFactor:o/t},this.barycenter},barnesHutApproximation:function(t,e){var o,n,r=this,h=r.getDistXY(t,e),d=r.vectorLength(h);return t!==e&&0!==d&&(e.isInternal?e.boxSize/d<r.options.theta&&0!==d?(n=r.repulsiveForce(d,r.k),r.force("repulsive",t,n*e.mass,h,d),o=!1):o=!0:(n=r.repulsiveForce(d,r.k),r.force("repulsive",t,n*e.mass,h,d))),o},repulsiveForces:function(){var t=this;"barnes-hut"===t.approximation?t.nodes.forEach((function(e){t.quadTree.visitNodeRecursive(null,(function(o){return t.barnesHutApproximation(e,o)}))})):t.nodes.forEach((function(e){t.nodes.forEach((function(o){var n,r,h;e===o||e.fixedPosition||(h=t.getDistXY(e,o),0!==(r=t.vectorLength(h))&&(n=t.repulsiveForce(r,t.k),t.force("repulsive",e,n*o.mass,h,r)))}))}))},attractiveForces:function(){var t,e,o,n=this;n.links.forEach((function(link){link.fromNode&&link.toNode&&(t=n.getDistXY(link.fromNode,link.toNode),0!==(e=n.vectorLength(t))&&(o=n.attractiveForce(e,n.k),n.force("attractive",link,o,t,e)))}))},applyLimits:function(){var t=this;t.nodes.forEach((function(e){e.fixedPosition||(t.integration.integrate(t,e),t.applyLimitBox(e,t.box),e.dispX=0,e.dispY=0)}))},applyLimitBox:function(t,e){var o=t.radius;t.plotX=d(t.plotX,e.left+o,e.width-o),t.plotY=d(t.plotY,e.top+o,e.height-o)},coolDown:function(t,e,o){return t-e*o},isStable:function(){return Math.abs(this.systemTemperature-this.prevSystemTemperature)<1e-5||this.temperature<=0},getSystemTemperature:function(){return this.nodes.reduce((function(t,e){return t+e.temperature}),0)},vectorLength:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},getDistR:function(t,e){var o=this.getDistXY(t,e);return this.vectorLength(o)},getDistXY:function(t,e){var o=t.plotX-e.plotX,n=t.plotY-e.plotY;return{x:o,y:n,absX:Math.abs(o),absY:Math.abs(n)}}}),h(t,"predraw",(function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach((function(t){t.stop()}))})),h(t,"render",(function(){var t,e=!1;function o(o){o.maxIterations--&&isFinite(o.temperature)&&!o.isStable()&&!o.enableSimulation&&(o.beforeStep&&o.beforeStep(),o.step(),t=!1,e=!0)}if(this.graphLayoutsLookup){for(r(!1,this),this.graphLayoutsLookup.forEach((function(t){t.start()}));!t;)t=!0,this.graphLayoutsLookup.forEach(o);e&&this.series.forEach((function(s){s&&s.layout&&s.render()}))}})),h(t,"beforePrint",(function(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach((function(t){t.updateSimulation(!1)})),this.redraw())})),h(t,"afterPrint",(function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach((function(t){t.updateSimulation()})),this.redraw()}))})),o(e,"Series/Networkgraph/DraggableNodes.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],(function(t,e,o){var n=o.addEvent;e.dragNodesMixin={onMouseDown:function(t,e){var o=this.chart.pointer.normalize(e);t.fixedPosition={chartX:o.chartX,chartY:o.chartY,plotX:t.plotX,plotY:t.plotY},t.inDragMode=!0},onMouseMove:function(t,e){if(t.fixedPosition&&t.inDragMode){var o=this.chart,n=o.pointer.normalize(e),r=t.fixedPosition.chartX-n.chartX,h=t.fixedPosition.chartY-n.chartY,d=void 0,c=void 0,l=o.graphLayoutsLookup;(Math.abs(r)>5||Math.abs(h)>5)&&(d=t.fixedPosition.plotX-r,c=t.fixedPosition.plotY-h,o.isInsidePlot(d,c)&&(t.plotX=d,t.plotY=c,t.hasDragged=!0,this.redrawHalo(t),l.forEach((function(t){t.restartSimulation()}))))}},onMouseUp:function(t,e){t.fixedPosition&&(t.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),t.inDragMode=t.hasDragged=!1,this.options.fixedDraggable||delete t.fixedPosition)},redrawHalo:function(t){t&&this.halo&&this.halo.attr({d:t.haloPath(this.options.states.hover.halo.size)})}},n(t,"load",(function(){var t,e,o,r=this;r.container&&(t=n(r.container,"mousedown",(function(t){var h=r.hoverPoint;h&&h.series&&h.series.hasDraggableNodes&&h.series.options.draggable&&(h.series.onMouseDown(h,t),e=n(r.container,"mousemove",(function(t){return h&&h.series&&h.series.onMouseMove(h,t)})),o=n(r.container.ownerDocument,"mouseup",(function(t){return e(),o(),h&&h.series&&h.series.onMouseUp(h,t)})))}))),n(r,"destroy",(function(){t()}))}))})),o(e,"Series/Networkgraph/Networkgraph.js",[e["Core/Globals.js"],e["Series/NodesComposition.js"],e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],(function(t,e,o,n,r,h){var d,c=this&&this.__extends||(d=function(t,b){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])},d(t,b)},function(t,b){function e(){this.constructor=t}d(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=r.seriesTypes,f=h.addEvent,m=h.css,y=h.defined,v=h.extend,x=h.merge,k=h.pick,N=t.dragNodesMixin,w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.nodes=void 0,e.options=void 0,e.points=void 0,e}return c(e,t),e.defaultOptions=x(n.defaultOptions,{stickyTracking:!1,inactiveOtherPoints:!0,marker:{enabled:!0,states:{inactive:{opacity:.3,animation:{duration:50}}}},states:{inactive:{linkOpacity:.3,animation:{duration:50}}},dataLabels:{formatter:function(){return this.key},linkFormatter:function(){return this.point.fromNode.name+"<br>"+this.point.toNode.name},linkTextPath:{enabled:!0},textPath:{enabled:!1},style:{transition:"opacity 2000ms"}},link:{color:"rgba(100, 100, 100, 0.5)",width:1},draggable:!0,layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:1,enableSimulation:!1,theta:.5,maxSpeed:10,approximation:"none",type:"reingold-fruchterman",integration:"euler",maxIterations:1e3,gravitationalConstant:.0625,friction:-.981},showInLegend:!1}),e}(n);v(w.prototype,{forces:["barycenter","repulsive","attractive"],hasDraggableNodes:!0,drawGraph:void 0,isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,pointArrayMap:["from","to"],trackerGroups:["group","markerGroup","dataLabelsGroup"],drawTracker:l.column.prototype.drawTracker,animate:void 0,buildKDTree:t.noop,createNode:e.createNode,destroy:function(){this.layout&&this.layout.removeElementFromCollection(this,this.layout.series),e.destroy.call(this)},init:function(){var t=this;return n.prototype.init.apply(this,arguments),f(this,"updatedData",(function(){t.layout&&t.layout.stop()})),f(this,"afterUpdate",(function(){t.nodes.forEach((function(t){t&&t.series&&t.resolveColor()}))})),this},generatePoints:function(){var t,i;for(e.generatePoints.apply(this,arguments),this.options.nodes&&this.options.nodes.forEach((function(t){this.nodeLookup[t.id]||(this.nodeLookup[t.id]=this.createNode(t.id))}),this),i=this.nodes.length-1;i>=0;i--)(t=this.nodes[i]).degree=t.getDegree(),t.radius=k(t.marker&&t.marker.radius,this.options.marker&&this.options.marker.radius,0),this.nodeLookup[t.id]||t.remove();this.data.forEach((function(link){link.formatPrefix="link"})),this.indexateNodes()},getPointsCollection:function(){return this.nodes||[]},indexateNodes:function(){this.nodes.forEach((function(t,e){t.index=e}))},markerAttribs:function(t,e){var o=n.prototype.markerAttribs.call(this,t,e);return y(t.plotY)||(o.y=0),o.x=(t.plotX||0)-(o.width||0)/2,o},translate:function(){this.processedXData||this.processData(),this.generatePoints(),this.deferLayout(),this.nodes.forEach((function(t){t.isInside=!0,t.linksFrom.forEach((function(t){t.shapeType="path",t.y=1}))}))},deferLayout:function(){var e,o=this.options.layoutAlgorithm,n=this.chart.graphLayoutsStorage,r=this.chart.graphLayoutsLookup,h=this.chart.options.chart;this.visible&&(n||(this.chart.graphLayoutsStorage=n={},this.chart.graphLayoutsLookup=r=[]),(e=n[o.type])||(o.enableSimulation=y(h.forExport)?!h.forExport:o.enableSimulation,n[o.type]=e=new t.layouts[o.type],e.init(o),r.splice(e.index,0,e)),this.layout=e,e.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight),e.addElementsToCollection([this],e.series),e.addElementsToCollection(this.nodes,e.nodes),e.addElementsToCollection(this.points,e.links))},render:function(){var t=this,e=t.points,o=t.chart.hoverPoint,n=[];t.points=t.nodes,l.line.prototype.render.call(this),t.points=e,e.forEach((function(t){t.fromNode&&t.toNode&&(t.renderLink(),t.redrawLink())})),o&&o.series===t&&t.redrawHalo(o),t.chart.hasRendered&&!t.options.dataLabels.allowOverlap&&(t.nodes.concat(t.points).forEach((function(t){t.dataLabel&&n.push(t.dataLabel)})),t.chart.hideOverlappingLabels(n))},drawDataLabels:function(){var t=this.options.dataLabels.textPath;n.prototype.drawDataLabels.apply(this,arguments),this.points=this.data,this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath,n.prototype.drawDataLabels.apply(this,arguments),this.points=this.nodes,this.options.dataLabels.textPath=t},pointAttribs:function(t,e){var o=e||t&&t.state||"normal",r=n.prototype.pointAttribs.call(this,t,o),h=this.options.states[o];return t&&!t.isNode&&(r=t.getLinkAttributes(),h&&(r={stroke:h.linkColor||r.stroke,dashstyle:h.linkDashStyle||r.dashstyle,opacity:k(h.linkOpacity,r.opacity),"stroke-width":h.linkColor||r["stroke-width"]})),r},redrawHalo:N.redrawHalo,onMouseDown:N.onMouseDown,onMouseMove:N.onMouseMove,onMouseUp:N.onMouseUp,setState:function(t,e){e?(this.points=this.nodes.concat(this.data),n.prototype.setState.apply(this,arguments),this.points=this.data):n.prototype.setState.apply(this,arguments),this.layout.simulation||t||this.render()}});var S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.degree=void 0,e.linksFrom=void 0,e.linksTo=void 0,e.options=void 0,e.radius=void 0,e.series=void 0,e.toNode=void 0,e}return c(e,t),e}(n.prototype.pointClass);return v(S.prototype,{setState:e.setNodeState,init:function(){return o.prototype.init.apply(this,arguments),this.series.options.draggable&&!this.series.chart.styledMode&&(f(this,"mouseOver",(function(){m(this.series.chart.container,{cursor:"move"})})),f(this,"mouseOut",(function(){m(this.series.chart.container,{cursor:"default"})}))),this},getDegree:function(){var t=this.isNode?this.linksFrom.length+this.linksTo.length:0;return 0===t?1:t},getLinkAttributes:function(){var t=this.series.options.link,e=this.options;return{"stroke-width":k(e.width,t.width),stroke:e.color||t.color,dashstyle:e.dashStyle||t.dashStyle,opacity:k(e.opacity,t.opacity,1)}},renderLink:function(){var t;this.graphic||(this.graphic=this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(),!0).add(this.series.group),this.series.chart.styledMode||(t=this.series.pointAttribs(this),this.graphic.attr(t),(this.dataLabels||[]).forEach((function(label){label&&label.attr({opacity:t.opacity})}))))},redrawLink:function(){var t,path=this.getLinkPath();if(this.graphic){this.shapeArgs={d:path},this.series.chart.styledMode||(t=this.series.pointAttribs(this),this.graphic.attr(t),(this.dataLabels||[]).forEach((function(label){label&&label.attr({opacity:t.opacity})}))),this.graphic.animate(this.shapeArgs);var e=path[0],o=path[1];"M"===e[0]&&"L"===o[0]&&(this.plotX=(e[1]+o[1])/2,this.plotY=(e[2]+o[2])/2)}},getMass:function(){var t=this.fromNode.mass,e=this.toNode.mass,o=t+e;return{fromNode:1-t/o,toNode:1-e/o}},getLinkPath:function(){var t=this.fromNode,e=this.toNode;return t.plotX>e.plotX&&(t=this.toNode,e=this.fromNode),[["M",t.plotX||0,t.plotY||0],["L",e.plotX||0,e.plotY||0]]},isValid:function(){return!this.isNode||y(this.id)},remove:function(t,e){var o,r=this,h=r.series,d=h.options.nodes||[],i=d.length;if(r.isNode){for(h.points=[],[].concat(r.linksFrom).concat(r.linksTo).forEach((function(t){(o=t.fromNode.linksFrom.indexOf(t))>-1&&t.fromNode.linksFrom.splice(o,1),(o=t.toNode.linksTo.indexOf(t))>-1&&t.toNode.linksTo.splice(o,1),n.prototype.removePoint.call(h,h.data.indexOf(t),!1,!1)})),h.points=h.data.slice(),h.nodes.splice(h.nodes.indexOf(r),1);i--;)if(d[i].id===r.options.id){h.options.nodes.splice(i,1);break}r&&r.destroy(),h.isDirty=!0,h.isDirtyData=!0,t&&h.chart.redraw(t)}else h.removePoint(h.data.indexOf(r),t,e)},destroy:function(){return this.isNode&&this.linksFrom.concat(this.linksTo).forEach((function(link){link.destroyElements&&link.destroyElements()})),this.series.layout.removeElementFromCollection(this,this.series.layout[this.isNode?"nodes":"links"]),o.prototype.destroy.apply(this,arguments)}}),w.prototype.pointClass=S,r.registerSeriesType("networkgraph",w),w})),o(e,"masters/modules/networkgraph.src.js",[],(function(){}))},t.exports?(h.default=h,t.exports=h):(n=[o(138)],void 0===(r=function(t){return h(t),h.Highcharts=t,h}.apply(e,n))||(t.exports=r))}}]);