!function(){function e(t,i){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,i)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=n(e);if(t){var a=n(this).constructor;s=Reflect.construct(r,arguments,a)}else s=r.apply(this,arguments);return i(this,s)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],n=!0,s=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){s=!0,r=l}finally{try{n||null==o.return||o.return()}finally{if(s)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Y7HM:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("DH7j");function s(e){return!Object(n.a)(e)&&e-parseFloat(e)+1>=0}},"f/Ol":function(e,t,i){"use strict";i.d(t,"b",(function(){return f})),i.d(t,"a",(function(){return p}));var n=i("jtHE"),r=i("LRne"),a=i("itXk"),c=i("3E0/"),u=i("lJxs"),d=i("JX91"),h=i("AytR"),f=function e(){l(this,e),this.isShell=!1},p=function(){function e(t){l(this,e),this.shellModel=t,this.networkDelay=h.a.appShellConfig&&h.a.appShellConfig.networkDelay?h.a.appShellConfig.networkDelay:0,this.timeline=new n.a(1)}return o(e,[{key:"load",value:function(t,i){var n=this,s="number"==typeof i?i:this.networkDelay;(0===s?t:e.AppendShell(t,this.shellModel,s)).subscribe((function(e){n.timeline.next(e)}))}},{key:"state",get:function(){return this.timeline.asObservable()}}],[{key:"AppendShell",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=Object(r.a)(!0).pipe(Object(c.a)(i));return Object(a.a)([n,e]).pipe(Object(u.a)((function(e){var t=s(e,2),i=(t[0],t[1]);return Object.assign(i,{isShell:!1})})),Object(d.a)(Object.assign(t,{isShell:!0})))}}]),e}()},"v9/t":function(i,n,s){"use strict";s.r(n),s.d(n,"VideoPlaylistPageModule",(function(){return ye}));var r,a,c,u,d,h,f,p,b,y=s("TEn/"),v=s("tyNb"),g=s("ofXK"),m=s("fXoL"),_=s("gcOT"),k=s("eIep"),P=s("B7gC"),O=s("zK/y"),M=s("XNiG"),C=s("xgIS"),w=s("HDdC"),A=s("itXk"),S=s("PqYM"),E=s("lJxs"),D=["*"],G=((p=function e(){l(this,e)}).\u0275fac=function(e){return new(e||p)},p.VG_ENDED="ended",p.VG_PAUSED="paused",p.VG_PLAYING="playing",p.VG_LOADING="waiting",p.\u0275prov=Object(m.Eb)({factory:function(){return new p},token:p,providedIn:"root"}),p),T=((f=function(){function e(){l(this,e),this.medias={},this.playerReadyEvent=new m.n(!0),this.isPlayerReady=!1}return o(e,[{key:"onPlayerReady",value:function(e){this.fsAPI=e,this.isPlayerReady=!0,this.playerReadyEvent.emit(this)}},{key:"getDefaultMedia",value:function(){for(var e in this.medias)if(this.medias[e])return this.medias[e]}},{key:"getMasterMedia",value:function(){var e;for(var t in this.medias)if("true"===this.medias[t].vgMaster||!0===this.medias[t].vgMaster){e=this.medias[t];break}return e||this.getDefaultMedia()}},{key:"isMasterDefined",value:function(){var e=!1;for(var t in this.medias)if("true"===this.medias[t].vgMaster||!0===this.medias[t].vgMaster){e=!0;break}return e}},{key:"getMediaById",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.medias[e];return e&&"*"!==e||(t=this),t}},{key:"play",value:function(){for(var e in this.medias)this.medias[e]&&this.medias[e].play()}},{key:"pause",value:function(){for(var e in this.medias)this.medias[e]&&this.medias[e].pause()}},{key:"seekTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var i in this.medias)this.medias[i]&&this.$$seek(this.medias[i],e,t)}},{key:"$$seek",value:function(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e.duration;n?(this.isMasterDefined()&&(s=this.getMasterMedia().duration),i=t*s/100):i=t,e.currentTime=i}},{key:"addTextTrack",value:function(e,t,i){for(var n in this.medias)this.medias[n]&&this.$$addTextTrack(this.medias[n],e,t,i)}},{key:"$$addTextTrack",value:function(e,t,i,n){e.addTextTrack(t,i,n)}},{key:"$$getAllProperties",value:function(e){var t,i={};for(var n in this.medias)this.medias[n]&&(i[n]=this.medias[n]);switch(Object.keys(i).length){case 0:switch(e){case"state":t=G.VG_PAUSED;break;case"playbackRate":case"volume":t=1;break;case"time":t={current:0,total:0,left:0}}break;case 1:t=i[Object.keys(i)[0]][e];break;default:t=i[this.getMasterMedia().id][e]}return t}},{key:"$$setAllProperties",value:function(e,t){for(var i in this.medias)this.medias[i]&&(this.medias[i][e]=t)}},{key:"registerElement",value:function(e){this.videogularElement=e}},{key:"registerMedia",value:function(e){this.medias[e.id]=e}},{key:"unregisterMedia",value:function(e){delete this.medias[e.id]}},{key:"duration",get:function(){return this.$$getAllProperties("duration")}},{key:"currentTime",set:function(e){this.$$setAllProperties("currentTime",e)},get:function(){return this.$$getAllProperties("currentTime")}},{key:"state",set:function(e){this.$$setAllProperties("state",e)},get:function(){return this.$$getAllProperties("state")}},{key:"volume",set:function(e){this.$$setAllProperties("volume",e)},get:function(){return this.$$getAllProperties("volume")}},{key:"playbackRate",set:function(e){this.$$setAllProperties("playbackRate",e)},get:function(){return this.$$getAllProperties("playbackRate")}},{key:"canPlay",get:function(){return this.$$getAllProperties("canPlay")}},{key:"canPlayThrough",get:function(){return this.$$getAllProperties("canPlayThrough")}},{key:"isMetadataLoaded",get:function(){return this.$$getAllProperties("isMetadataLoaded")}},{key:"isWaiting",get:function(){return this.$$getAllProperties("isWaiting")}},{key:"isCompleted",get:function(){return this.$$getAllProperties("isCompleted")}},{key:"isLive",get:function(){return this.$$getAllProperties("isLive")}},{key:"isMaster",get:function(){return this.$$getAllProperties("isMaster")}},{key:"time",get:function(){return this.$$getAllProperties("time")}},{key:"buffer",get:function(){return this.$$getAllProperties("buffer")}},{key:"buffered",get:function(){return this.$$getAllProperties("buffered")}},{key:"subscriptions",get:function(){return this.$$getAllProperties("subscriptions")}},{key:"textTracks",get:function(){return this.$$getAllProperties("textTracks")}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275prov=Object(m.Eb)({factory:function(){return new f},token:f,providedIn:"root"}),f),V=((h=function(){function e(){l(this,e),this.isHiddenSubject=new M.a,this.isHidden=this.isHiddenSubject.asObservable()}return o(e,[{key:"state",value:function(e){this.isHiddenSubject.next(e)}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275prov=Object(m.Eb)({factory:function(){return new h},token:h,providedIn:"root"}),h),x=((d=function(){function e(){l(this,e)}return o(e,null,[{key:"getZIndex",value:function(){for(var e,t=1,i=document.getElementsByTagName("*"),n=0,s=i.length;n<s;n++)(e=parseInt(window.getComputedStyle(i[n])["z-index"],10))>t&&(t=e+1);return t}},{key:"isMobileDevice",value:function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"isiOSDevice",value:function(){return navigator.userAgent.match(/ip(hone|ad|od)/i)&&!navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i)}},{key:"isCordova",value:function(){return-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")}}]),e}()).\u0275fac=function(e){return new(e||d)},d.\u0275prov=Object(m.Eb)({factory:function(){return new d},token:d,providedIn:"root"}),d),j=((u=function(){function e(){l(this,e),this.nativeFullscreen=!0,this.isFullscreen=!1,this.onChangeFullscreen=new m.n}return o(e,[{key:"init",value:function(e,t){var i=this;this.videogularElement=e,this.medias=t;var n={w3:{enabled:"fullscreenEnabled",element:"fullscreenElement",request:"requestFullscreen",exit:"exitFullscreen",onchange:"fullscreenchange",onerror:"fullscreenerror"},newWebkit:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitRequestFullscreen",exit:"webkitExitFullscreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},oldWebkit:{enabled:"webkitIsFullScreen",element:"webkitCurrentFullScreenElement",request:"webkitRequestFullScreen",exit:"webkitCancelFullScreen",onchange:"webkitfullscreenchange",onerror:"webkitfullscreenerror"},moz:{enabled:"mozFullScreen",element:"mozFullScreenElement",request:"mozRequestFullScreen",exit:"mozCancelFullScreen",onchange:"mozfullscreenchange",onerror:"mozfullscreenerror"},ios:{enabled:"webkitFullscreenEnabled",element:"webkitFullscreenElement",request:"webkitEnterFullscreen",exit:"webkitExitFullscreen",onchange:"webkitendfullscreen",onerror:"webkitfullscreenerror"},ms:{enabled:"msFullscreenEnabled",element:"msFullscreenElement",request:"msRequestFullscreen",exit:"msExitFullscreen",onchange:"MSFullscreenChange",onerror:"MSFullscreenError"}};for(var s in n)if(n[s].enabled in document){this.polyfill=n[s];break}if(x.isiOSDevice()&&(this.polyfill=n.ios),this.isAvailable=null!=this.polyfill,null!=this.polyfill){var r;switch(this.polyfill.onchange){case"mozfullscreenchange":r=document;break;case"webkitendfullscreen":r=this.medias.toArray()[0].elem;break;default:r=e}this.fsChangeSubscription=Object(C.a)(r,this.polyfill.onchange).subscribe((function(){i.onFullscreenChange()}))}}},{key:"onFullscreenChange",value:function(){this.isFullscreen=!!document[this.polyfill.element],this.onChangeFullscreen.emit(this.isFullscreen)}},{key:"toggleFullscreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.isFullscreen?this.exit():this.request(e)}},{key:"request",value:function(e){e||(e=this.videogularElement),this.isFullscreen=!0,this.onChangeFullscreen.emit(!0),this.isAvailable&&this.nativeFullscreen&&(x.isMobileDevice()?((!this.polyfill.enabled&&e===this.videogularElement||x.isiOSDevice())&&(e=this.medias.toArray()[0].elem),this.enterElementInFullScreen(e)):this.enterElementInFullScreen(this.videogularElement))}},{key:"enterElementInFullScreen",value:function(e){e[this.polyfill.request]()}},{key:"exit",value:function(){this.isFullscreen=!1,this.onChangeFullscreen.emit(!1),this.isAvailable&&this.nativeFullscreen&&document[this.polyfill.exit]()}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275prov=Object(m.Eb)({factory:function(){return new u},token:u,providedIn:"root"}),u),I=((c=function e(){l(this,e)}).\u0275fac=function(e){return new(e||c)},c.VG_ABORT="abort",c.VG_CAN_PLAY="canplay",c.VG_CAN_PLAY_THROUGH="canplaythrough",c.VG_DURATION_CHANGE="durationchange",c.VG_EMPTIED="emptied",c.VG_ENCRYPTED="encrypted",c.VG_ENDED="ended",c.VG_ERROR="error",c.VG_LOADED_DATA="loadeddata",c.VG_LOADED_METADATA="loadedmetadata",c.VG_LOAD_START="loadstart",c.VG_PAUSE="pause",c.VG_PLAY="play",c.VG_PLAYING="playing",c.VG_PROGRESS="progress",c.VG_RATE_CHANGE="ratechange",c.VG_SEEK="seek",c.VG_SEEKED="seeked",c.VG_SEEKING="seeking",c.VG_STALLED="stalled",c.VG_SUSPEND="suspend",c.VG_TIME_UPDATE="timeupdate",c.VG_VOLUME_CHANGE="volumechange",c.VG_WAITING="waiting",c.VG_LOAD="load",c.VG_ENTER="enter",c.VG_EXIT="exit",c.VG_START_ADS="startads",c.VG_END_ADS="endads",c.\u0275prov=Object(m.Eb)({factory:function(){return new c},token:c,providedIn:"root"}),c),N=((a=function(){function e(t,i){l(this,e),this.api=t,this.ref=i,this.state=G.VG_PAUSED,this.time={current:0,total:0,left:0},this.buffer={end:0},this.canPlay=!1,this.canPlayThrough=!1,this.isMetadataLoaded=!1,this.isWaiting=!1,this.isCompleted=!1,this.isLive=!1,this.isBufferDetected=!1,this.checkInterval=200,this.currentPlayPos=0,this.lastPlayPos=0,this.playAtferSync=!1,this.bufferDetected=new M.a}return o(e,[{key:"ngOnInit",value:function(){var e=this;this.elem=this.vgMedia.nodeName?this.vgMedia:this.vgMedia.elem,this.api.registerMedia(this),this.subscriptions={abort:Object(C.a)(this.elem,I.VG_ABORT),canPlay:Object(C.a)(this.elem,I.VG_CAN_PLAY),canPlayThrough:Object(C.a)(this.elem,I.VG_CAN_PLAY_THROUGH),durationChange:Object(C.a)(this.elem,I.VG_DURATION_CHANGE),emptied:Object(C.a)(this.elem,I.VG_EMPTIED),encrypted:Object(C.a)(this.elem,I.VG_ENCRYPTED),ended:Object(C.a)(this.elem,I.VG_ENDED),error:Object(C.a)(this.elem,I.VG_ERROR),loadedData:Object(C.a)(this.elem,I.VG_LOADED_DATA),loadedMetadata:Object(C.a)(this.elem,I.VG_LOADED_METADATA),loadStart:Object(C.a)(this.elem,I.VG_LOAD_START),pause:Object(C.a)(this.elem,I.VG_PAUSE),play:Object(C.a)(this.elem,I.VG_PLAY),playing:Object(C.a)(this.elem,I.VG_PLAYING),progress:Object(C.a)(this.elem,I.VG_PROGRESS),rateChange:Object(C.a)(this.elem,I.VG_RATE_CHANGE),seeked:Object(C.a)(this.elem,I.VG_SEEKED),seeking:Object(C.a)(this.elem,I.VG_SEEKING),stalled:Object(C.a)(this.elem,I.VG_STALLED),suspend:Object(C.a)(this.elem,I.VG_SUSPEND),timeUpdate:Object(C.a)(this.elem,I.VG_TIME_UPDATE),volumeChange:Object(C.a)(this.elem,I.VG_VOLUME_CHANGE),waiting:Object(C.a)(this.elem,I.VG_WAITING),startAds:Object(C.a)(window,I.VG_START_ADS),endAds:Object(C.a)(window,I.VG_END_ADS),mutation:new w.a((function(t){var i=new MutationObserver((function(e){t.next(e)}));return i.observe(e.elem,{childList:!0,attributes:!0}),function(){i.disconnect()}})),bufferDetected:this.bufferDetected},this.mutationObs=this.subscriptions.mutation.subscribe(this.onMutation.bind(this)),this.canPlayObs=this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this)),this.canPlayThroughObs=this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this)),this.loadedMetadataObs=this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this)),this.waitingObs=this.subscriptions.waiting.subscribe(this.onWait.bind(this)),this.progressObs=this.subscriptions.progress.subscribe(this.onProgress.bind(this)),this.endedObs=this.subscriptions.ended.subscribe(this.onComplete.bind(this)),this.playingObs=this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this)),this.playObs=this.subscriptions.play.subscribe(this.onPlay.bind(this)),this.pauseObs=this.subscriptions.pause.subscribe(this.onPause.bind(this)),this.timeUpdateObs=this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this)),this.volumeChangeObs=this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this)),this.errorObs=this.subscriptions.error.subscribe(this.onError.bind(this)),this.vgMaster&&this.api.playerReadyEvent.subscribe((function(){e.prepareSync()}))}},{key:"prepareSync",value:function(){var e=this,t=[];for(var i in this.api.medias)this.api.medias[i]&&t.push(this.api.medias[i].subscriptions.canPlay);this.canPlayAllSubscription=Object(A.a)(t).pipe(Object(E.a)((function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];i.some((function(e){return 4===e.target.readyState}))&&!e.syncSubscription&&(e.startSync(),e.syncSubscription.unsubscribe())}))).subscribe()}},{key:"startSync",value:function(){var e=this;this.syncSubscription=Object(S.a)(0,1e3).subscribe((function(){for(var t in e.api.medias)if(e.api.medias[t]!==e){var i=e.api.medias[t].currentTime-e.currentTime;i<-.3||i>.3?(e.playAtferSync=e.state===G.VG_PLAYING,e.pause(),e.api.medias[t].pause(),e.api.medias[t].currentTime=e.currentTime):e.playAtferSync&&(e.play(),e.api.medias[t].play(),e.playAtferSync=!1)}}))}},{key:"onMutation",value:function(e){for(var t=0,i=e.length;t<i;t++){var n=e[t];if("attributes"===n.type&&"src"===n.attributeName){if(n.target.src&&n.target.src.length>0&&n.target.src.indexOf("blob:")<0){this.loadMedia();break}}else if("childList"===n.type&&n.removedNodes.length&&"source"===n.removedNodes[0].nodeName.toLowerCase()){this.loadMedia();break}}}},{key:"loadMedia",value:function(){var e=this;this.vgMedia.pause(),this.vgMedia.currentTime=0,this.stopBufferCheck(),this.isBufferDetected=!0,this.bufferDetected.next(this.isBufferDetected),setTimeout((function(){return e.vgMedia.load()}),10)}},{key:"play",value:function(){var e=this;if(!(this.playPromise||this.state!==G.VG_PAUSED&&this.state!==G.VG_ENDED))return this.playPromise=this.vgMedia.play(),this.playPromise&&this.playPromise.then&&this.playPromise.catch&&this.playPromise.then((function(){e.playPromise=null})).catch((function(){e.playPromise=null})),this.playPromise}},{key:"pause",value:function(){var e=this;this.playPromise?this.playPromise.then((function(){e.vgMedia.pause()})):this.vgMedia.pause()}},{key:"onCanPlay",value:function(e){this.isBufferDetected=!1,this.bufferDetected.next(this.isBufferDetected),this.canPlay=!0,this.ref.detectChanges()}},{key:"onCanPlayThrough",value:function(e){this.isBufferDetected=!1,this.bufferDetected.next(this.isBufferDetected),this.canPlayThrough=!0,this.ref.detectChanges()}},{key:"onLoadMetadata",value:function(e){this.isMetadataLoaded=!0,this.time={current:0,left:0,total:1e3*this.duration},this.state=G.VG_PAUSED;var t=Math.round(this.time.total);this.isLive=t===1/0,this.ref.detectChanges()}},{key:"onWait",value:function(e){this.isWaiting=!0,this.ref.detectChanges()}},{key:"onComplete",value:function(e){this.isCompleted=!0,this.state=G.VG_ENDED,this.ref.detectChanges()}},{key:"onStartPlaying",value:function(e){this.state=G.VG_PLAYING,this.ref.detectChanges()}},{key:"onPlay",value:function(e){this.state=G.VG_PLAYING,this.vgMaster&&(this.syncSubscription&&!this.syncSubscription.closed||this.startSync()),this.startBufferCheck(),this.ref.detectChanges()}},{key:"onPause",value:function(e){this.state=G.VG_PAUSED,this.vgMaster&&(this.playAtferSync||this.syncSubscription.unsubscribe()),this.stopBufferCheck(),this.ref.detectChanges()}},{key:"onTimeUpdate",value:function(e){var t=this.buffered.length-1;this.time={current:1e3*this.currentTime,total:this.time.total,left:1e3*(this.duration-this.currentTime)},t>=0&&(this.buffer={end:1e3*this.buffered.end(t)}),this.ref.detectChanges()}},{key:"onProgress",value:function(e){var t=this.buffered.length-1;t>=0&&(this.buffer={end:1e3*this.buffered.end(t)}),this.ref.detectChanges()}},{key:"onVolumeChange",value:function(e){this.ref.detectChanges()}},{key:"onError",value:function(e){this.ref.detectChanges()}},{key:"bufferCheck",value:function(){var e=1/this.checkInterval;this.currentPlayPos=this.currentTime,!this.isBufferDetected&&this.currentPlayPos<this.lastPlayPos+e&&(this.isBufferDetected=!0),this.isBufferDetected&&this.currentPlayPos>this.lastPlayPos+e&&(this.isBufferDetected=!1),this.bufferDetected.closed||this.bufferDetected.next(this.isBufferDetected),this.lastPlayPos=this.currentPlayPos}},{key:"startBufferCheck",value:function(){var e=this;this.checkBufferSubscription=Object(S.a)(0,this.checkInterval).subscribe((function(){e.bufferCheck()}))}},{key:"stopBufferCheck",value:function(){this.checkBufferSubscription&&this.checkBufferSubscription.unsubscribe(),this.isBufferDetected=!1,this.bufferDetected.next(this.isBufferDetected)}},{key:"seekTime",value:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=i?e*this.duration/100:e,this.currentTime=t}},{key:"addTextTrack",value:function(e,t,i,n){var s=this.vgMedia.addTextTrack(e,t,i);return n&&(s.mode=n),s}},{key:"ngOnDestroy",value:function(){this.vgMedia.src="",this.mutationObs.unsubscribe(),this.canPlayObs.unsubscribe(),this.canPlayThroughObs.unsubscribe(),this.loadedMetadataObs.unsubscribe(),this.waitingObs.unsubscribe(),this.progressObs.unsubscribe(),this.endedObs.unsubscribe(),this.playingObs.unsubscribe(),this.playObs.unsubscribe(),this.pauseObs.unsubscribe(),this.timeUpdateObs.unsubscribe(),this.volumeChangeObs.unsubscribe(),this.errorObs.unsubscribe(),this.checkBufferSubscription&&this.checkBufferSubscription.unsubscribe(),this.syncSubscription&&this.syncSubscription.unsubscribe(),this.bufferDetected.complete(),this.bufferDetected.unsubscribe(),this.api.unregisterMedia(this)}},{key:"id",get:function(){var e;return this.vgMedia&&(e=this.vgMedia.id),e}},{key:"duration",get:function(){return this.vgMedia.duration===1/0?this.specifiedDuration:this.vgMedia.duration}},{key:"currentTime",set:function(e){this.vgMedia.currentTime=e},get:function(){return this.vgMedia.currentTime}},{key:"volume",set:function(e){this.vgMedia.volume=e},get:function(){return this.vgMedia.volume}},{key:"playbackRate",set:function(e){this.vgMedia.playbackRate=e},get:function(){return this.vgMedia.playbackRate}},{key:"buffered",get:function(){return this.vgMedia.buffered}},{key:"textTracks",get:function(){return this.vgMedia.textTracks}}]),e}()).\u0275fac=function(e){return new(e||a)(m.Ib(T),m.Ib(m.h))},a.\u0275dir=m.Db({type:a,selectors:[["","vgMedia",""]],inputs:{vgMedia:"vgMedia",vgMaster:"vgMaster"}}),a),F=((r=function(){function e(t,i,n,s){l(this,e),this.api=i,this.fsAPI=n,this.controlsHidden=s,this.isFullscreen=!1,this.isNativeFullscreen=!1,this.areControlsHidden=!1,this.onPlayerReady=new m.n,this.onMediaReady=new m.n,this.subscriptions=[],this.elem=t.nativeElement,this.api.registerElement(this.elem)}return o(e,[{key:"ngAfterContentInit",value:function(){var e=this;this.medias.toArray().forEach((function(t){e.api.registerMedia(t)})),this.fsAPI.init(this.elem,this.medias),this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this))),this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this))),this.api.onPlayerReady(this.fsAPI),this.onPlayerReady.emit(this.api)}},{key:"onChangeFullscreen",value:function(e){this.fsAPI.nativeFullscreen?this.isNativeFullscreen=e:(this.isFullscreen=e,this.zIndex=e?x.getZIndex().toString():"auto")}},{key:"onHideControls",value:function(e){this.areControlsHidden=e}},{key:"ngOnDestroy",value:function(){this.subscriptions.forEach((function(e){return e.unsubscribe()}))}}]),e}()).\u0275fac=function(e){return new(e||r)(m.Ib(m.l),m.Ib(T),m.Ib(j),m.Ib(V))},r.\u0275cmp=m.Cb({type:r,selectors:[["vg-player"]],contentQueries:function(e,t,i){var n;1&e&&m.Bb(i,N,!1),2&e&&m.lc(n=m.Xb())&&(t.medias=n)},hostVars:8,hostBindings:function(e,t){2&e&&(m.sc("z-index",t.zIndex),m.Ab("fullscreen",t.isFullscreen)("native-fullscreen",t.isNativeFullscreen)("controls-hidden",t.areControlsHidden))},outputs:{onPlayerReady:"onPlayerReady",onMediaReady:"onMediaReady"},features:[m.xb([T,j,V])],ngContentSelectors:D,decls:1,vars:0,template:function(e,t){1&e&&(m.ec(),m.dc(0))},styles:["\n      vg-player {\n        font-family: 'videogular';\n        position: relative;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background-color: black;\n      }\n      vg-player.fullscreen {\n        position: fixed;\n        left: 0;\n        top: 0;\n      }\n      vg-player.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n    "],encapsulation:2}),r),R=[T,V,j,x,I,G],$=((b=function e(){l(this,e)}).\u0275mod=m.Gb({type:b}),b.\u0275inj=m.Fb({factory:function(e){return new(e||b)},providers:[].concat(R),imports:[[g.c]]}),b),L=s("2gss");function B(e,t){if(1&e&&m.Jb(0,"source",18),2&e){var i=t.$implicit;m.fc("src",i.src,m.pc)("type",i.type)}}function H(e,t){if(1&e&&(m.Ob(0,"video",16),m.tc(1,B,1,2,"source",17),m.Nb()),2&e){var i=m.Yb();m.yb(1),m.fc("ngForOf",null==i.video_playlist_model||null==i.video_playlist_model.selected_video?null:i.video_playlist_model.selected_video.sources)}}function U(e,t){if(1&e&&m.Jb(0,"source",18),2&e){var i=t.$implicit;m.fc("src",i.src,m.pc)("type",i.type)}}function Y(e,t){if(1&e){var i=m.Pb();m.Ob(0,"vg-player",19),m.Wb("onPlayerReady",(function(e){return m.oc(i),m.Yb().onPlayerReady(e)})),m.Ob(1,"video",20,21),m.tc(3,U,1,2,"source",17),m.Nb(),m.Nb()}if(2&e){var n=m.mc(2),s=m.Yb();m.yb(1),m.fc("vgMedia",n),m.yb(2),m.fc("ngForOf",null==s.video_playlist_model||null==s.video_playlist_model.selected_video?null:s.video_playlist_model.selected_video.sources)}}var z=function(){return{w:3,h:2}};function q(e,t){if(1&e){var i=m.Pb();m.Ob(0,"ion-row",22),m.Ob(1,"ion-col",23),m.Ob(2,"app-image-shell",24),m.Wb("click",(function(){m.oc(i);var e=t.$implicit;return m.Yb().playMedia(e)})),m.Ob(3,"app-aspect-ratio",6),m.Ob(4,"a",25),m.Wb("click",(function(){m.oc(i);var e=t.$implicit;return m.Yb().playMedia(e)})),m.Jb(5,"ion-icon",26),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(6,"ion-col",27),m.Ob(7,"h4",28),m.Jb(8,"app-text-shell",11),m.Nb(),m.Ob(9,"p",29),m.Jb(10,"app-text-shell",30),m.Nb(),m.Nb(),m.Nb()}if(2&e){var n=t.$implicit;m.yb(2),m.fc("display","cover")("src",n.thumbnail)("alt","video thumbnail"),m.yb(1),m.fc("ratio",m.hc(6,z)),m.yb(5),m.fc("data",n.title),m.yb(2),m.fc("data",n.description)}}var J,W,X,K,Z,Q,ee,te=function(){return{w:16,h:9}},ie=_.b.Share,ne=((J=function(){function e(t,i){l(this,e),this.route=t,this.platformId=i,this.ssr=!0,this.start_playing=!1}return o(e,[{key:"ngOnInit",value:function(){var e=this;Object(g.t)(this.platformId)&&(this.ssr=!1),this.route.data.pipe(Object(k.a)((function(e){return e.data.state}))).subscribe((function(t){e.video_playlist_model=t,t.isShell||(e.video_playlist_model.video_playlist=t.videos,e.video_playlist_model.selected_video=t.videos[0])}),(function(e){return console.log(e)}))}},{key:"playMedia",value:function(e){e!==this.video_playlist_model.selected_video&&(this.video_playlist_model.selected_video=e)}},{key:"onPlayerReady",value:function(e){this.api=e,this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this))}},{key:"playVideo",value:function(){this.start_playing?this.api.play():this.start_playing=!0}},{key:"shareMedia",value:function(){var e=this.video_playlist_model.selected_video;ie.share({title:e.title,text:e.description,url:"https://ionicthemes.com/",dialogTitle:"Share Media"}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)}))}},{key:"isShell",get:function(){return!(!this.video_playlist_model||!this.video_playlist_model.isShell)}}]),e}()).\u0275fac=function(e){return new(e||J)(m.Ib(v.a),m.Ib(m.B))},J.\u0275cmp=m.Cb({type:J,selectors:[["app-video-playlist"]],hostVars:2,hostBindings:function(e,t){2&e&&m.Ab("is-shell",t.isShell)},decls:20,vars:7,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],["slot","icon-only","name","share"],[1,"video-playlist-content"],[3,"ratio"],["class","ssr-video","controls","","preload","auto",4,"ngIf"],["class","video-player",3,"onPlayerReady",4,"ngIf"],[1,"video-data-section"],[1,"video-title"],["animation","gradient",3,"data"],[1,"video-description"],["lines","5","animation","gradient",3,"data"],[1,"video-playlist-section"],["class","playlist-item-row",4,"ngFor","ngForOf"],["controls","","preload","auto",1,"ssr-video"],[3,"src","type",4,"ngFor","ngForOf"],[3,"src","type"],[1,"video-player",3,"onPlayerReady"],["controls","","id","player-video","preload","auto",3,"vgMedia"],["player_video",""],[1,"playlist-item-row"],["size","4"],["animation","spinner",1,"video-image",3,"display","src","alt","click"],[1,"play-icon-wrapper",3,"click"],["name","play",1,"play-icon"],["size","8",1,"video-info-wrapper"],[1,"image-title"],[1,"image-description"],["lines","3","animation","gradient",3,"data"]],template:function(e,t){1&e&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Jb(3,"ion-menu-button"),m.Nb(),m.Ob(4,"ion-title"),m.vc(5,"Video Playlist"),m.Nb(),m.Ob(6,"ion-buttons",2),m.Ob(7,"ion-button",3),m.Wb("click",(function(){return t.shareMedia()})),m.Jb(8,"ion-icon",4),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(9,"ion-content",5),m.Ob(10,"app-aspect-ratio",6),m.tc(11,H,2,1,"video",7),m.tc(12,Y,4,2,"vg-player",8),m.Nb(),m.Ob(13,"section",9),m.Ob(14,"h3",10),m.Jb(15,"app-text-shell",11),m.Nb(),m.Ob(16,"p",12),m.Jb(17,"app-text-shell",13),m.Nb(),m.Nb(),m.Ob(18,"section",14),m.tc(19,q,11,7,"ion-row",15),m.Nb(),m.Nb()),2&e&&(m.yb(10),m.fc("ratio",m.hc(6,te)),m.yb(1),m.fc("ngIf",t.ssr),m.yb(1),m.fc("ngIf",!t.ssr),m.yb(3),m.fc("data",null==t.video_playlist_model||null==t.video_playlist_model.selected_video?null:t.video_playlist_model.selected_video.title),m.yb(2),m.fc("data",null==t.video_playlist_model||null==t.video_playlist_model.selected_video?null:t.video_playlist_model.selected_video.description),m.yb(2),m.fc("ngForOf",null==t.video_playlist_model?null:t.video_playlist_model.video_playlist))},directives:[y.v,y.eb,y.i,y.G,y.cb,y.h,y.w,y.q,P.a,g.m,O.a,g.l,F,N,y.N,y.p,L.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background)}.video-playlist-content[_ngcontent-%COMP%]{--background:var(--page-background)}.video-playlist-content[_ngcontent-%COMP%]   .ssr-video[_ngcontent-%COMP%]{width:100%;height:100%}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]{padding:var(--page-margin)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-secondary)}.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-description[_ngcontent-%COMP%]{margin:0;font-size:13px;line-height:1.3;letter-spacing:.3px;color:var(--ion-color-dark)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]{padding:0 var(--page-margin);padding-bottom:var(--page-margin)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:first-child){padding-top:calc(var(--page-margin) / 2)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:last-child){padding-bottom:calc(var(--page-margin) / 2);box-shadow:inset 0 -7px 3px -8px var(--ion-color-darkest)}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]{height:100%;text-decoration:none;display:flex;justify-content:center;align-items:center}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary);background:rgba(var(--ion-color-lightest-rgb),.7);font-size:20px;padding:8px;border-radius:50%}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);align-self:center}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 4);color:var(--ion-color-secondary);font-size:14px}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark);font-size:13px;line-height:1.3;letter-spacing:.3px;display:-webkit-box;-webkit-line-clamp:3;overflow:hidden;-webkit-box-orient:vertical}","app-image-shell.video-image[_ngcontent-%COMP%]{background-position:50%}.image-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}.image-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:13px}"]}),J),se=s("f/Ol"),re=function e(){l(this,e)},ae=function(i){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&e(t,i)}(s,i);var n=t(s);function s(){var e;return l(this,s),(e=n.call(this)).selected_video=new re,e.video_playlist=[new re,new re,new re],e}return s}(se.b),oe=s("O2zu"),le=s("tk/3"),ce=((X=function(){function e(t,i,n){l(this,e),this.platformId=t,this.transferStateHelper=i,this.http=n}return o(e,[{key:"getVideoPlaylistDataSource",value:function(){var e=this.http.get("./assets/sample-data/video-playlist/video-playlist.json");return this.transferStateHelper.checkDataSourceState("video-playlist-state",e)}},{key:"getVideoPlaylistStore",value:function(e){if(!this.videoPlaylistDataStore){var t=new ae;this.videoPlaylistDataStore=new se.a(t),Object(g.u)(this.platformId)||e.ssr_state?this.videoPlaylistDataStore.load(e,0):this.videoPlaylistDataStore.load(e)}return this.videoPlaylistDataStore}}]),e}()).\u0275fac=function(e){return new(e||X)(m.Sb(m.B),m.Sb(oe.b),m.Sb(le.a))},X.\u0275prov=m.Eb({token:X,factory:X.\u0275fac}),X),ue=((W=function(){function e(t){l(this,e),this.videoPlaylistService=t}return o(e,[{key:"resolve",value:function(){var e=this.videoPlaylistService.getVideoPlaylistDataSource();return this.videoPlaylistService.getVideoPlaylistStore(e)}}]),e}()).\u0275fac=function(e){return new(e||W)(m.Sb(ce))},W.\u0275prov=m.Eb({token:W,factory:W.\u0275fac}),W),de=s("j1ZV"),he=((Q=function e(){l(this,e)}).\u0275mod=m.Gb({type:Q}),Q.\u0275inj=m.Fb({factory:function(e){return new(e||Q)},imports:[[g.c,$]]}),Q),fe=((Z=function e(){l(this,e)}).\u0275mod=m.Gb({type:Z}),Z.\u0275inj=m.Fb({factory:function(e){return new(e||Z)},imports:[[g.c,$]]}),Z),pe=((K=function e(){l(this,e)}).\u0275mod=m.Gb({type:K}),K.\u0275inj=m.Fb({factory:function(e){return new(e||K)},imports:[[g.c,$]]}),K),be=[{path:"",component:ne,resolve:{data:ue}}],ye=((ee=function e(){l(this,e)}).\u0275mod=m.Gb({type:ee}),ee.\u0275inj=m.Fb({factory:function(e){return new(e||ee)},providers:[ue,ce],imports:[[y.fb,g.c,de.a,v.k.forChild(be),$,he,fe,pe]]}),ee)}}])}();