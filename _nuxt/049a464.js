/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{520:function(n,t,e){var o,r,c;c=function(n){"use strict";var t=n?n._modules:{};function e(n,path,t,e){n.hasOwnProperty(path)||(n[path]=e.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:path,module:n[path]}})))}e(t,"Extensions/Sonification/MusicalFrequencies.js",[],(function(){return[16.351597831287414,17.323914436054505,18.354047994837977,19.445436482630058,20.601722307054366,21.826764464562746,23.12465141947715,24.499714748859326,25.956543598746574,27.5,29.13523509488062,30.86770632850775,32.70319566257483,34.64782887210901,36.70809598967594,38.890872965260115,41.20344461410875,43.653528929125486,46.2493028389543,48.999429497718666,51.91308719749314,55,58.27047018976124,61.7354126570155,65.40639132514966,69.29565774421802,73.41619197935188,77.78174593052023,82.4068892282175,87.30705785825097,92.4986056779086,97.99885899543733,103.82617439498628,110,116.54094037952248,123.47082531403103,130.8127826502993,138.59131548843604,146.8323839587038,155.56349186104046,164.81377845643496,174.61411571650194,184.9972113558172,195.99771799087463,207.65234878997256,220,233.08188075904496,246.94165062806206,261.6255653005986,277.1826309768721,293.6647679174076,311.1269837220809,329.6275569128699,349.2282314330039,369.9944227116344,391.99543598174927,415.3046975799451,440,466.1637615180899,493.8833012561241,523.2511306011972,554.3652619537442,587.3295358348151,622.2539674441618,659.2551138257398,698.4564628660078,739.9888454232688,783.9908719634985,830.6093951598903,880,932.3275230361799,987.7666025122483,1046.5022612023945,1108.7305239074883,1174.6590716696303,1244.5079348883237,1318.5102276514797,1396.9129257320155,1479.9776908465376,1567.981743926997,1661.2187903197805,1760,1864.6550460723597,1975.533205024496,2093.004522404789,2217.4610478149766,2349.31814333926,2489.0158697766474,2637.02045530296,2793.825851464031,2959.955381693075,3135.9634878539946,3322.437580639561,3520,3729.3100921447194,3951.066410048992,4186.009044809578]})),e(t,"Extensions/Sonification/SignalHandler.js",[],(function(){return function(){function n(n){this.signals=void 0,this.supportedSignals=void 0,this.init(n||[])}return n.prototype.init=function(n){this.supportedSignals=n,this.signals={}},n.prototype.registerSignalCallbacks=function(n){var t=this;t.supportedSignals.forEach((function(e){var o=n[e];o&&(t.signals[e]=t.signals[e]||[]).push(o)}))},n.prototype.clearSignalCallbacks=function(n){var t=this;n?n.forEach((function(n){t.signals[n]&&delete t.signals[n]})):t.signals={}},n.prototype.emitSignal=function(n,data){var t;return this.signals[n]&&this.signals[n].forEach((function(n){var e=n(data);t=void 0!==e?e:t})),t},n}()})),e(t,"Extensions/Sonification/SonificationUtilities.js",[t["Extensions/Sonification/MusicalFrequencies.js"],t["Extensions/Sonification/SignalHandler.js"],t["Core/Utilities.js"]],(function(n,t,e){var o=e.clamp,r=e.merge,c={musicalFrequencies:n,SignalHandler:t,getExtremesForInstrumentProps:function(n,t,e){var o=n.options.sonification&&n.options.sonification.defaultInstrumentOptions,l=function(n){return{instrumentMapping:n.mapping}},f=(t||[]).slice(0);return o&&f.push(l(o)),n.series.forEach((function(n){var t=n.options.sonification&&n.options.sonification.instruments;t&&(f=f.concat(t.map(l)))})),f.reduce((function(t,e){return Object.keys(e.instrumentMapping||{}).forEach((function(o){var r=e.instrumentMapping[o];"string"!=typeof r||t[r]||(t[r]=c.calculateDataExtremes(n,r))})),t}),r(e))},getMusicalScale:function(t){return n.filter((function(n,i){var e=i%12+1;return t.some((function(n){return n===e}))}))},calculateDataExtremes:function(n,t){return n.series.reduce((function(n,e){return e.points.forEach((function(e){var o=void 0!==e[t]?e[t]:e.options[t];n.min=Math.min(n.min,o),n.max=Math.max(n.max,o)})),n}),{min:1/0,max:-1/0})},virtualAxisTranslate:function(n,t,e,r){var c=t.max-t.min,l=Math.abs(e.max-e.min)*(r?t.max-n:n-t.min)/c,f=e.min+l;return c>0?o(f,e.min,e.max):e.min}};return c})),e(t,"Extensions/Sonification/Options.js",[],(function(){return{sonification:{enabled:!1,duration:2500,afterSeriesWait:700,masterVolume:1,order:"sequential",defaultInstrumentOptions:{instrument:"sineMusical",minFrequency:392,maxFrequency:1046,mapping:{pointPlayTime:"x",duration:200,frequency:"y"}}}}})),e(t,"Extensions/Sonification/Sonification.js",[t["Core/DefaultOptions.js"],t["Core/Utilities.js"],t["Extensions/Sonification/SonificationUtilities.js"],t["Extensions/Sonification/Options.js"]],(function(n,t,e,o){var r=n.defaultOptions;return(0,t.merge)(!0,r,o),{fadeOutDuration:20,utilities:e}})),e(t,"Extensions/Sonification/Instrument.js",[t["Core/Globals.js"],t["Extensions/Sonification/Sonification.js"],t["Extensions/Sonification/SonificationUtilities.js"],t["Core/Utilities.js"]],(function(n,t,e,o){var r=n.win,c=o.error,l=o.merge,f=o.pick,m=o.uniqueKey,h=function(){function n(n){this.id=void 0,this.masterVolume=void 0,this.options=void 0,this.playCallbackTimers=void 0,this.init(n)}return n.prototype.init=function(t){if(this.initAudioContext()){this.options=l(n.defaultOptions,t),this.id=this.options.id=t&&t.id||m(),this.masterVolume=this.options.masterVolume||0;var e=n.audioContext,o=this.destinationNode||e.destination;this.gainNode=e.createGain(),this.setGain(0),this.panNode=e.createStereoPanner&&e.createStereoPanner(),this.panNode?(this.setPan(0),this.gainNode.connect(this.panNode),this.panNode.connect(o)):this.gainNode.connect(o),"oscillator"===this.options.type&&this.initOscillator(this.options.oscillator),this.playCallbackTimers=[]}else c(29)},n.prototype.copy=function(t){return new n(l(this.options,{id:null},t))},n.prototype.initAudioContext=function(){var t=r.AudioContext||r.webkitAudioContext,e=!!n.audioContext;return!!t&&(n.audioContext=n.audioContext||new t,!e&&n.audioContext&&"running"===n.audioContext.state&&n.audioContext.suspend(),!!(n.audioContext&&n.audioContext.createOscillator&&n.audioContext.createGain))},n.prototype.initOscillator=function(t){var e=n.audioContext;this.oscillator=e.createOscillator(),this.oscillator.type=t.waveformShape,this.oscillator.connect(this.gainNode),this.oscillatorStarted=!1},n.prototype.setPan=function(t){this.panNode&&this.panNode.pan.setValueAtTime(t,n.audioContext.currentTime)},n.prototype.setGain=function(t,e){var o=this.gainNode,r=t*this.masterVolume;o&&(r>1.2&&(console.warn("Highcharts sonification warning: Volume of instrument set too high."),r=1.2),e?(o.gain.setValueAtTime(o.gain.value,n.audioContext.currentTime),o.gain.linearRampToValueAtTime(r,n.audioContext.currentTime+e/1e3)):o.gain.setValueAtTime(r,n.audioContext.currentTime))},n.prototype.cancelGainRamp=function(){this.gainNode&&this.gainNode.gain.cancelScheduledValues(0)},n.prototype.setMasterVolume=function(n){this.masterVolume=n||0},n.prototype.getValidFrequency=function(n,t,e){var o=this.options.allowedFrequencies,r=f(e,1/0),c=f(t,-1/0);return o&&o.length?o.reduce((function(t,e){return Math.abs(e-n)<Math.abs(t-n)&&e<r&&e>c?e:t}),1/0):n},n.prototype.clearPlayCallbackTimers=function(){this.playCallbackTimers.forEach((function(n){clearInterval(n)})),this.playCallbackTimers=[]},n.prototype.setFrequency=function(n,t){var e=t||{},o=this.getValidFrequency(n,e.min,e.max);"oscillator"===this.options.type&&this.oscillatorPlay(o)},n.prototype.oscillatorPlay=function(t){this.oscillatorStarted||(this.oscillator.start(),this.oscillatorStarted=!0),this.oscillator.frequency.setValueAtTime(t,n.audioContext.currentTime)},n.prototype.preparePlay=function(){this.setGain(.001),"suspended"===n.audioContext.state&&n.audioContext.resume(),this.oscillator&&!this.oscillatorStarted&&(this.oscillator.start(),this.oscillatorStarted=!0)},n.prototype.play=function(e){var o=this,r=e.duration||0,c=function(n,t,r){var c=e.duration,l=o.options.playCallbackInterval,f=0;if("function"==typeof n){var m=setInterval((function(){var e=++f*l/c;e>=1?(o[t](n(1),r),clearInterval(m)):o[t](n(e),r)}),l);o.playCallbackTimers.push(m)}else o[t](n,r)};if(o.id){if("suspended"===n.audioContext.state||this.oscillator&&!this.oscillatorStarted)return o.preparePlay(),void setTimeout((function(){o.play(e)}),10);o.playCallbackTimers.length&&o.clearPlayCallbackTimers(),o.cancelGainRamp(),o.stopOscillatorTimeout&&(clearTimeout(o.stopOscillatorTimeout),delete o.stopOscillatorTimeout),o.stopTimeout&&(clearTimeout(o.stopTimeout),delete o.stopTimeout,o.stopCallback&&(o._play=o.play,o.play=function(){},o.stopCallback("cancelled"),o.play=o._play));var l=r<t.fadeOutDuration+20;o.stopCallback=e.onEnd;var m=function(){delete o.stopTimeout,o.stop(l)};r?(o.stopTimeout=setTimeout(m,l?r:r-t.fadeOutDuration),c(e.frequency,"setFrequency",{minFrequency:e.minFrequency,maxFrequency:e.maxFrequency}),c(f(e.volume,1),"setGain",4),c(f(e.pan,0),"setPan")):m()}},n.prototype.mute=function(){this.setGain(1e-4,.8*t.fadeOutDuration)},n.prototype.stop=function(n,e,o){var r=this,c=function(){if(r.stopOscillatorTimeout&&delete r.stopOscillatorTimeout,r.oscillator&&r.options.oscillator){try{r.oscillator.stop()}catch(n){}r.gainNode&&r.oscillator.disconnect(r.gainNode),r.initOscillator(r.options.oscillator)}e&&e(o),r.stopCallback&&r.stopCallback(o)};r.playCallbackTimers.length&&r.clearPlayCallbackTimers(),r.stopTimeout&&clearTimeout(r.stopTimeout),n?(r.setGain(0),c()):(r.mute(),r.stopOscillatorTimeout=setTimeout(c,t.fadeOutDuration+100))},n.defaultOptions={type:"oscillator",playCallbackInterval:20,masterVolume:1,oscillator:{waveformShape:"sine"}},n.definitions={},n}();return["sine","square","triangle","sawtooth"].forEach((function(n){h.definitions[n]=new h({oscillator:{waveformShape:n}}),h.definitions[n+"Musical"]=new h({allowedFrequencies:e.musicalFrequencies,oscillator:{waveformShape:n}}),h.definitions[n+"Major"]=new h({allowedFrequencies:e.getMusicalScale([1,3,5,6,8,10,12]),oscillator:{waveformShape:n}})})),h})),e(t,"Extensions/Sonification/Earcon.js",[t["Extensions/Sonification/Instrument.js"],t["Core/Utilities.js"]],(function(n,t){var e=t.error,o=t.merge,r=t.pick,c=t.uniqueKey,l=function(){function t(n){this.id=void 0,this.instrumentsPlaying=void 0,this.options=void 0,this.init(n||{})}return t.prototype.init=function(n){this.options=n,this.options.id||(this.options.id=this.id=c()),this.instrumentsPlaying={}},t.prototype.sonify=function(t){var c=o(this.options,t),l=r(c.volume,1),f=c.pan,m=this,h=t&&t.onEnd,d=m.options.onEnd;c.instruments.forEach((function(t){var c,y,v="string"==typeof t.instrument?n.definitions[t.instrument]:t.instrument,E=o(t.playOptions),S="";v&&v.play?t.playOptions&&(E.pan=r(f,E.pan),c=E.onEnd,E.onEnd=function(){delete m.instrumentsPlaying[S],c&&c.apply(this,arguments),Object.keys(m.instrumentsPlaying).length||(h&&h.apply(this,arguments),d&&d.apply(this,arguments))},(y=v.copy()).setMasterVolume(l),S=y.id,m.instrumentsPlaying[S]=y,y.play(E)):e(30)}))},t.prototype.cancelSonify=function(n){var t=this.instrumentsPlaying,e=t&&Object.keys(t);e&&e.length&&(e.forEach((function(e){t[e].stop(!n,null,"cancelled")})),this.instrumentsPlaying={})},t}();return l})),e(t,"Extensions/Sonification/Timeline.js",[t["Extensions/Sonification/Sonification.js"],t["Core/Utilities.js"],t["Extensions/Sonification/SonificationUtilities.js"]],(function(n,t,e){var o=t.merge,r=t.splat;return function(){function t(n){this.cursor=void 0,this.options=void 0,this.paths=void 0,this.pathsPlaying=void 0,this.signalHandler=void 0,this.init(n||{})}return t.prototype.init=function(n){this.options=n,this.cursor=0,this.paths=n.paths||[],this.pathsPlaying={},this.signalHandler=new e.SignalHandler(["playOnEnd","masterOnEnd","onPathStart","onPathEnd"]),this.signalHandler.registerSignalCallbacks(o(n,{masterOnEnd:n.onEnd}))},t.prototype.play=function(n){this.pause(),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:n}),this.playPaths(1)},t.prototype.rewind=function(n){this.pause(),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:n}),this.playPaths(-1)},t.prototype.playPaths=function(t){var e=this,o=e.signalHandler;if(!e.paths.length){var c={cancelled:!1};return o.emitSignal("playOnEnd",c),void o.emitSignal("masterOnEnd",c)}var l=r(this.paths[this.cursor]),f=this.paths[this.cursor+t];l.forEach((function(path){path&&(path.timeline=e,setTimeout((function(){!function(path){o.emitSignal("onPathStart",path),e.pathsPlaying[path.id]=path,path[t>0?"play":"rewind"]((function(n){var c=n&&n.cancelled,m={path:path,cancelled:c};delete e.pathsPlaying[path.id],o.emitSignal("onPathEnd",m),1>=l.length&&(f&&!c?(e.cursor+=t,r(f).forEach((function(n){n[t>0?"resetCursor":"resetCursorEnd"]()})),e.playPaths(t)):(o.emitSignal("playOnEnd",m),o.emitSignal("masterOnEnd",m)))}))}(path)}),n.fadeOutDuration))}))},t.prototype.pause=function(n){var t=this;Object.keys(t.pathsPlaying).forEach((function(e){t.pathsPlaying[e]&&t.pathsPlaying[e].pause(n)})),t.pathsPlaying={}},t.prototype.resetCursor=function(){this.paths.forEach((function(n){r(n).forEach((function(path){path.resetCursor()}))})),this.cursor=0},t.prototype.resetCursorEnd=function(){this.paths.forEach((function(n){r(n).forEach((function(path){path.resetCursorEnd()}))})),this.cursor=this.paths.length-1},t.prototype.setCursor=function(n){return this.paths.some((function(t){return r(t).some((function(path){return path.setCursor(n)}))}))},t.prototype.getCursor=function(){return this.getCurrentPlayingPaths().reduce((function(n,t){return n[t.id]=t.getCursor(),n}),{})},t.prototype.atStart=function(){return!this.cursor&&!r(this.paths[0]).some((function(path){return path.cursor}))},t.prototype.getCurrentPlayingPaths=function(){return this.paths.length?r(this.paths[this.cursor]):[]},t}()})),e(t,"Extensions/Sonification/TimelineEvent.js",[t["Core/Utilities.js"]],(function(n){var t=n.merge,e=n.uniqueKey,o=function(){function n(n){this.id=void 0,this.options=void 0,this.time=void 0,this.init(n)}return n.prototype.init=function(n){this.options=n,this.time=n.time||0,this.id=this.options.id=n.id||e()},n.prototype.play=function(n){var e=this.options.eventObject,o=this.options.onEnd,r=n&&n.onEnd,c=this.options.playOptions&&this.options.playOptions.onEnd,l=t(this.options.playOptions,n);e&&e.sonify?(l.onEnd=o||r||c?function(){var n=arguments;[o,r,c].forEach((function(t){t&&t.apply(this,n)}))}:void 0,e.sonify(l)):(r&&r(),o&&o())},n.prototype.cancel=function(n){var t=this.options.eventObject;t&&t.cancelSonify(n)},n}();return o})),e(t,"Extensions/Sonification/TimelinePath.js",[t["Extensions/Sonification/TimelineEvent.js"],t["Extensions/Sonification/SonificationUtilities.js"],t["Core/Utilities.js"]],(function(n,t,e){var o=e.merge,r=e.uniqueKey;return function(){function e(n){this.cursor=void 0,this.events=void 0,this.eventIdMap=void 0,this.eventsPlaying=void 0,this.id=void 0,this.options=void 0,this.signalHandler=void 0,this.init(n)}return e.prototype.init=function(e){this.options=e,this.id=this.options.id=e.id||r(),this.cursor=0,this.eventsPlaying={},this.events=e.silentWait?[new n({time:0}),new n({time:e.silentWait})]:this.options.events,this.targetDuration=e.targetDuration||e.silentWait,this.sortEvents(),this.updateEventIdMap(),this.signalHandler=new t.SignalHandler(["playOnEnd","masterOnEnd","onStart","onEventStart","onEventEnd"]),this.signalHandler.registerSignalCallbacks(o(e,{masterOnEnd:e.onEnd}))},e.prototype.sortEvents=function(){this.events=this.events.sort((function(a,b){return a.time-b.time}))},e.prototype.updateEventIdMap=function(){this.eventIdMap=this.events.reduce((function(n,t,i){return n[t.id]=i,n}),{})},e.prototype.addTimelineEvents=function(n){this.events=this.events.concat(n),this.sortEvents(),this.updateEventIdMap()},e.prototype.getCursor=function(){return this.events[this.cursor]},e.prototype.setCursor=function(n){var t=this.eventIdMap[n];return void 0!==t&&(this.cursor=t,!0)},e.prototype.play=function(n){this.pause(),this.signalHandler.emitSignal("onStart"),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:n}),this.playEvents(1)},e.prototype.rewind=function(n){this.pause(),this.signalHandler.emitSignal("onStart"),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:n}),this.playEvents(-1)},e.prototype.resetCursor=function(){this.cursor=0},e.prototype.resetCursorEnd=function(){this.cursor=this.events.length-1},e.prototype.pause=function(n){var t=this;clearTimeout(t.nextScheduledPlay),Object.keys(t.eventsPlaying).forEach((function(e){t.eventsPlaying[e]&&t.eventsPlaying[e].cancel(n)})),t.eventsPlaying={}},e.prototype.playEvents=function(n){var t,e=this,o=e.events[this.cursor],r=e.events[this.cursor+n],c=function(n){e.signalHandler.emitSignal("masterOnEnd",n),e.signalHandler.emitSignal("playOnEnd",n)};o.timelinePath=e,!1!==e.signalHandler.emitSignal("onEventStart",o)?(e.eventsPlaying[o.id]=o,o.play({onEnd:function(n){var t={event:o,cancelled:!!n};delete e.eventsPlaying[o.id],e.signalHandler.emitSignal("onEventEnd",t),r||c(t)}}),r&&((t=Math.abs(r.time-o.time))<1?(e.cursor+=n,e.playEvents(n)):this.nextScheduledPlay=setTimeout((function(){e.cursor+=n,e.playEvents(n)}),t))):c({event:o,cancelled:!0})},e}()})),e(t,"Extensions/Sonification/SeriesSonify.js",[t["Extensions/Sonification/Earcon.js"],t["Extensions/Sonification/Instrument.js"],t["Core/Series/Point.js"],t["Extensions/Sonification/SonificationUtilities.js"],t["Extensions/Sonification/Timeline.js"],t["Extensions/Sonification/TimelineEvent.js"],t["Extensions/Sonification/TimelinePath.js"],t["Core/Utilities.js"]],(function(n,t,e,o,r,c,l,f){var m,h=o.getExtremesForInstrumentProps,d=o.virtualAxisTranslate,y=f.extend,v=f.find,E=f.isArray,S=f.merge,x=f.objectEach,P=f.pick;return function(o){var f=[];function m(o,r){var f=r.timeExtremes||T(o,r.pointPlayTime),m=h(o.chart,r.instruments,r.dataExtremes),y=function(n,t,e){var o=n.points[n.points.length-1];return t.reduce((function(n,t){var r,c=t.instrumentMapping.duration;return r="string"==typeof c?0:"function"==typeof c?c(o,e):c,Math.max(n,r)}),0)}(o,r.instruments,m),v=P(r.masterVolume,1),E=function(n){return n.map((function(n){var e=n.instrument,o=("string"==typeof e?t.definitions[e]:e).copy();return S(n,{instrument:o})}))}(r.instruments),x=function(n,t){return n.forEach((function(n){var e=n.instrument;"string"!=typeof e&&e.setMasterVolume(t)})),n}(E,v),C=o.points.reduce((function(t,e){var o=function(t,e){return e.reduce((function(e,o){var r,c=o.earcon;return o.condition?(r=o.condition(t))instanceof n?e.push(r):r&&e.push(c):o.onPoint&&t.id===o.onPoint&&e.push(c),e}),[])}(e,r.earcons||[]),time=function(n){return d(O(n,r.pointPlayTime),f,{min:0,max:Math.max(r.duration-y,10)})}(e);return t.concat(new c({eventObject:e,time:time,id:e.id,playOptions:{instruments:x,dataExtremes:m,masterVolume:v}}),o.map((function(n){return new c({eventObject:n,time:time,playOptions:{volume:v}})})))}),[]);return new l({events:C,onStart:function(){r.onStart&&r.onStart(o)},onEventStart:function(n){var t=n.options&&n.options.eventObject;if(t instanceof e){if(!t.series.visible&&!t.series.chart.series.some((function(n){return n.visible})))return n.timelinePath.timeline.pause(),n.timelinePath.timeline.resetCursor(),!1;r.onPointStart&&r.onPointStart(n,t)}},onEventEnd:function(n){var t=n.event&&n.event.options&&n.event.options.eventObject;t instanceof e&&r.onPointEnd&&r.onPointEnd(n.event,t)},onEnd:function(){r.onEnd&&r.onEnd(o)},targetDuration:r.duration})}function C(n){var t=n.options.sonification||{},e=n.chart.options.sonification||{},o=e.events||{},r=t.events||{};return{onEnd:r.onSeriesEnd||o.onSeriesEnd,onStart:r.onSeriesStart||o.onSeriesStart,onPointEnd:r.onPointEnd||o.onPointEnd,onPointStart:r.onPointStart||o.onPointStart,pointPlayTime:e.defaultInstrumentOptions&&e.defaultInstrumentOptions.mapping&&e.defaultInstrumentOptions.mapping.pointPlayTime,masterVolume:e.masterVolume,instruments:j(n),earcons:t.earcons||e.earcons}}function O(n,t){return"function"==typeof t?t(n):P(n[t],n.options[t])}function j(n,t){if(t&&t.instruments)return t.instruments;var e=n.chart.options.sonification&&n.chart.options.sonification.defaultInstrumentOptions||{},o=n.options.sonification&&n.options.sonification.instruments||[{}],r=function(n){x(n,(function(t,e){null===t&&delete n[e]}))};return o.map((function(n){return r(n.mapping||{}),r(n),{instrument:n.instrument||e.instrument,instrumentOptions:S(e,n,{mapping:void 0,instrument:void 0}),instrumentMapping:S(e.mapping,n.mapping)}}))}function T(n,t){return n.points.reduce((function(n,e){var o=O(e,t);return n.min=Math.min(n.min,o),n.max=Math.max(n.max,o),n}),{min:1/0,max:-1/0})}function w(n){var t=function(n,t){var e=n.chart.options.sonification,o=n.options.sonification;return S({duration:o&&o.duration||e&&e.duration},C(n),t)}(this,n),e=m(this,t),o=this.chart.sonification;o&&(o.timeline&&o.timeline.pause(),o.duration=t.duration,o.timeline=new r({paths:[e]}),o.timeline.play())}o.compose=function(n){if(-1===f.indexOf(n)){f.push(n);var t=n.prototype;y(t,{sonify:w})}return n},o.buildChartSonifySeriesOptions=function(n,t,e){var o=e.seriesOptions||{},r=n.chart.options.sonification,c=r&&r.defaultInstrumentOptions&&r.defaultInstrumentOptions.mapping&&r.defaultInstrumentOptions.mapping.pointPlayTime||"x",l=C(n);return S(l,{dataExtremes:t,timeExtremes:T(n,c),instruments:e.instruments||l.instruments,onStart:e.onSeriesStart||l.onStart,onEnd:e.onSeriesEnd||l.onEnd,earcons:e.earcons||l.earcons,masterVolume:P(e.masterVolume,l.masterVolume)},E(o)?v(o,(function(t){return t.id===P(n.id,n.options.id)}))||{}:o,{pointPlayTime:c})},o.buildTimelinePathFromSeries=m}(m||(m={})),m})),e(t,"Extensions/Sonification/ChartSonify.js",[t["Extensions/Sonification/Earcon.js"],t["Core/Series/Point.js"],t["Extensions/Sonification/SeriesSonify.js"],t["Extensions/Sonification/SonificationUtilities.js"],t["Extensions/Sonification/Timeline.js"],t["Extensions/Sonification/TimelineEvent.js"],t["Extensions/Sonification/TimelinePath.js"],t["Core/Utilities.js"]],(function(n,t,e,o,r,c,l,f){var m=o.getExtremesForInstrumentProps,h=o.virtualAxisTranslate,d=f.addEvent,y=f.extend,v=f.merge,E=f.pick,S=f.splat;function x(n,t){var o=Math.max(t-function(n){return n.reduce((function(n,t){var e=S(t);return n+(1===e.length&&e[0].options&&e[0].options.silentWait||0)}),0)}(n),0),r=function(n){return n.reduce((function(n,t){return n+S(t).reduce((function(n,t){var e=t.series&&t.seriesOptions&&t.seriesOptions.timeExtremes;return e?Math.max(n,e.max-e.min):n}),0)}),0)}(n);return n.reduce((function(n,t){var c=S(t).reduce((function(n,t){var c;return t instanceof l?n.push(t):t.series&&(t.seriesOptions.duration=t.seriesOptions.duration||(c=t.seriesOptions.timeExtremes.max-t.seriesOptions.timeExtremes.min,h(c,{min:0,max:r},{min:0,max:o})),n.push(e.buildTimelinePathFromSeries(t.series,t.seriesOptions))),n}),[]);return n.push(c),n}),[])}function P(t){var o=function(n,t){var e=n.options.sonification||{};return v({duration:e.duration,afterSeriesWait:e.afterSeriesWait,pointPlayTime:e.defaultInstrumentOptions&&e.defaultInstrumentOptions.mapping&&e.defaultInstrumentOptions.mapping.pointPlayTime,order:e.order,onSeriesStart:e.events&&e.events.onSeriesStart,onSeriesEnd:e.events&&e.events.onSeriesEnd,onEnd:e.events&&e.events.onEnd},t)}(this,t);this.sonification.timeline&&this.sonification.timeline.pause(),this.sonification.duration=o.duration;var f=m(this,o.instruments,o.dataExtremes),h=function(t,e,o){var r;return"sequential"===t||"simultaneous"===t?(r=e.series.reduce((function(n,t){return t.visible&&!1!==(t.options.sonification&&t.options.sonification.enabled)&&n.push({series:t,seriesOptions:o(t)}),n}),[]),"simultaneous"===t&&(r=[r])):r=t.reduce((function(t,r){var f=S(r).reduce((function(t,r){var f;if("string"==typeof r){var m=e.get(r);m.visible&&(f={series:m,seriesOptions:o(m)})}else r instanceof n&&(f=new l({events:[new c({eventObject:r})]}));return r.silentWait&&(f=new l({silentWait:r.silentWait})),f&&t.push(f),t}),[]);return f.length&&t.push(f),t}),[]),r}(o.order,this,(function(n){return e.buildChartSonifySeriesOptions(n,f,o)})),d=x(h=function(n,t){return t?n.reduce((function(e,o,i){var r=S(o);return e.push(r),i<n.length-1&&r.some((function(n){return n.series}))&&e.push(new l({silentWait:t})),e}),[]):n}(h,o.afterSeriesWait||0),o.duration);d.forEach((function(n){!function(n){var t=n.reduce((function(n,path){var t=path.events;return t&&t.length&&(n.min=Math.min(t[0].time,n.min),n.max=Math.max(t[t.length-1].time,n.max)),n}),{min:1/0,max:-1/0});n.forEach((function(path){var n=path.events,e=n&&n.length,o=[];e&&n[0].time<=t.min||o.push(new c({time:t.min})),e&&n[n.length-1].time>=t.max||o.push(new c({time:t.max})),o.length&&path.addTimelineEvents(o)}))}(n)})),this.sonification.timeline=new r({paths:d,onEnd:o.onEnd}),this.sonification.timeline.play()}function C(){var n;return this.sonification.timeline?(n=this.sonification.timeline.getCursor(),Object.keys(n).map((function(path){return n[path].options.eventObject})).filter((function(n){return n instanceof t}))):[]}function O(n){var t=this.sonification.timeline;t&&S(n).forEach((function(n){t.setCursor(n.id)}))}function j(n){this.sonification.timeline?this.sonification.timeline.pause(E(n,!0)):this.sonification.currentlyPlayingPoint&&this.sonification.currentlyPlayingPoint.cancelSonify(n)}function T(n){this.sonification.timeline&&this.sonification.timeline.play(n)}function w(n){this.sonification.timeline&&this.sonification.timeline.rewind(n)}function k(n){this.pauseSonify(n),this.resetSonifyCursor()}function M(){this.sonification.timeline&&this.sonification.timeline.resetCursor()}function H(){this.sonification.timeline&&this.sonification.timeline.resetCursorEnd()}var I=[];return{chartSonify:P,compose:function(n){if(-1===I.indexOf(n)){I.push(n);var t=n.prototype;y(t,{sonify:P,pauseSonify:j,resumeSonify:T,rewindSonify:w,cancelSonify:k,getCurrentSonifyPoints:C,setSonifyCursor:O,resetSonifyCursor:M,resetSonifyCursorEnd:H}),d(n,"init",(function(){this.sonification={}})),d(n,"update",(function(n){var t=n.options.sonification;t&&v(!0,this.options.sonification,t)}))}return n},pause:j,resume:T,rewind:w,cancel:k,getCurrentPoints:C,setCursor:O,resetCursor:M,resetCursorEnd:H}})),e(t,"Extensions/Sonification/PointSonify.js",[t["Extensions/Sonification/Instrument.js"],t["Core/Utilities.js"],t["Extensions/Sonification/SonificationUtilities.js"]],(function(n,t,e){var o,r=t.error,c=t.merge,l=t.pick,f=[],m={minDuration:20,maxDuration:2e3,minVolume:.1,maxVolume:1,minPan:-1,maxPan:1,minFrequency:220,maxFrequency:2200};return function(t){function o(t){var o=this,f=o.series.chart,h=l(t.masterVolume,f.options.sonification&&f.options.sonification.masterVolume),d=t.dataExtremes||{},y=function(n,t,r){if("function"==typeof n)return t?function(time){return n(o,d,time)}:n(o,d);if("string"==typeof n){var c="-"===n.charAt(0),f=c?n.slice(1):n,m=l(o[f],o.options[f]);return d[f]=d[f]||e.calculateDataExtremes(o.series.chart,f),e.virtualAxisTranslate(m,d[f],r,c)}return n};f.sonification.currentlyPlayingPoint=o,o.sonification=o.sonification||{},o.sonification.instrumentsPlaying=o.sonification.instrumentsPlaying||{};var v=o.sonification.signalHandler=o.sonification.signalHandler||new e.SignalHandler(["onEnd"]);v.clearSignalCallbacks(),v.registerSignalCallbacks({onEnd:t.onEnd}),!o.isNull&&o.visible&&o.series.visible?t.instruments.forEach((function(t){var e="string"==typeof t.instrument?n.definitions[t.instrument]:t.instrument,l=t.instrumentMapping||{},d=c(m,t.instrumentOptions),E=e.id;e&&e.play?(void 0!==h&&e.setMasterVolume(h),o.sonification.instrumentsPlaying[e.id]=e,e.play({frequency:y(l.frequency,!0,{min:d.minFrequency,max:d.maxFrequency}),duration:y(l.duration,!1,{min:d.minDuration,max:d.maxDuration}),pan:y(l.pan,!0,{min:d.minPan,max:d.maxPan}),volume:y(l.volume,!0,{min:d.minVolume,max:d.maxVolume}),onEnd:function(n){t.onEnd&&t.onEnd.apply(this,arguments),f.sonification&&f.sonification.currentlyPlayingPoint&&delete f.sonification.currentlyPlayingPoint,o.sonification&&o.sonification.instrumentsPlaying&&(delete o.sonification.instrumentsPlaying[E],Object.keys(o.sonification.instrumentsPlaying).length||v.emitSignal("onEnd",n))},minFrequency:d.minFrequency,maxFrequency:d.maxFrequency})):r(30)})):v.emitSignal("onEnd")}function h(n){var t=this.sonification&&this.sonification.instrumentsPlaying,e=t&&Object.keys(t);e&&e.length&&(e.forEach((function(e){t[e].stop(!n,null,"cancelled")})),this.sonification.instrumentsPlaying={},this.sonification.signalHandler.emitSignal("onEnd","cancelled"))}t.compose=function(n){if(-1===f.indexOf(n)){f.push(n);var t=n.prototype;t.sonify=o,t.cancelSonify=h}return n}}(o||(o={})),o})),e(t,"masters/modules/sonification.src.js",[t["Core/Globals.js"],t["Extensions/Sonification/ChartSonify.js"],t["Extensions/Sonification/Earcon.js"],t["Extensions/Sonification/Instrument.js"],t["Extensions/Sonification/PointSonify.js"],t["Extensions/Sonification/SeriesSonify.js"],t["Extensions/Sonification/Sonification.js"],t["Extensions/Sonification/Timeline.js"],t["Extensions/Sonification/TimelineEvent.js"],t["Extensions/Sonification/TimelinePath.js"]],(function(n,t,e,o,r,c,l,f,m,h){var d=this&&this.__assign||function(){return d=Object.assign||function(n){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(n[p]=s[p]);return n},d.apply(this,arguments)},y=n;y.sonification=d(d({},l),{instruments:o.definitions,Earcon:e,Instrument:o,Timeline:f,TimelineEvent:m,TimelinePath:h}),y.Earcon=e,y.Instrument=o,t.compose(y.Chart),c.compose(y.Series),r.compose(y.Point)}))},n.exports?(c.default=c,n.exports=c):(o=[e(138)],void 0===(r=function(n){return c(n),c.Highcharts=n,c}.apply(t,o))||(n.exports=r))}}]);