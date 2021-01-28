(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"S+S0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i=r("zVF4"),o=function(){function e(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new i.Deferred;this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=n.__assign({identifier:"[DEFAULT]",optional:!1},e),r=t.optional,i=this.normalizeInstanceIdentifier(t.identifier);try{var o=this.getOrInitializeService(i);if(!o){if(r)return null;throw Error("Service "+this.name+" is not available")}return o}catch(a){if(r)return null;throw a}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService("[DEFAULT]")}catch(l){}try{for(var i=n.__values(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=n.__read(o.value,2),s=a[1],c=this.normalizeInstanceIdentifier(a[0]);try{var u=this.getOrInitializeService(c);s.resolve(u)}catch(l){}}}catch(h){t={error:h}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(n.__spread(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,function(e){return"[DEFAULT]"===e?void 0:e}(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e}(),s=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();t.Component=o,t.ComponentContainer=s,t.Provider=a},Wcq6:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(r("wj3C"));i.default.registerVersion("firebase","7.21.1","app"),e.exports=i.default},Y7HM:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("DH7j");function i(e){return!Object(n.a)(e)&&e-parseFloat(e)+1>=0}},"q/0M":function(e,t,r){"use strict";function n(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}var i;r.r(t),r.d(t,"LogLevel",(function(){return a})),r.d(t,"Logger",(function(){return h})),r.d(t,"setLogLevel",(function(){return f})),r.d(t,"setUserLogHandler",(function(){return p}));var o=[],a=function(e){return e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT",e}({}),s={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},c=a.INFO,u=((i={})[a.DEBUG]="log",i[a.VERBOSE]="log",i[a.INFO]="info",i[a.WARN]="warn",i[a.ERROR]="error",i),l=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(!(t<e.logLevel)){var o=(new Date).toISOString(),a=u[t];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[a].apply(console,n(["["+o+"]  "+e.name+":"],r))}},h=function(){function e(e){this.name=e,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,o.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in a))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?s[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,a.DEBUG],e)),this._logHandler.apply(this,n([this,a.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,a.VERBOSE],e)),this._logHandler.apply(this,n([this,a.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,a.INFO],e)),this._logHandler.apply(this,n([this,a.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,a.WARN],e)),this._logHandler.apply(this,n([this,a.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,n([this,a.ERROR],e)),this._logHandler.apply(this,n([this,a.ERROR],e))},e}();function f(e){o.forEach((function(t){t.setLogLevel(e)}))}function p(e,t){for(var r=function(r){var n=null;t&&t.level&&(n=s[t.level]),r.userLogHandler=null===e?null:function(t,r){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var s=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:a[r].toLowerCase(),message:s,args:i,type:t.name})}},n=0,i=o;n<i.length;n++)r(i[n])}},spgP:function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return P})),r.d(t,"c",(function(){return T})),r.d(t,"d",(function(){return N})),r.d(t,"e",(function(){return k})),r.d(t,"f",(function(){return D})),r.d(t,"g",(function(){return L}));var n=r("qgXg"),i=r("D0XW"),o=r("vkgz"),a=r("HDdC");let s=1;const c=(()=>Promise.resolve())(),u={};function l(e){return e in u&&(delete u[e],!0)}const h={setImmediate(e){const t=s++;return u[t]=!0,c.then(()=>l(t)&&e()),t},clearImmediate(e){l(e)}};var f=r("3N8a");class p extends f.a{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,r=0){return null!==r&&r>0?super.requestAsyncId(e,t,r):(e.actions.push(this),e.scheduled||(e.scheduled=h.setImmediate(e.flush.bind(e,null))))}recycleAsyncId(e,t,r=0){if(null!==r&&r>0||null===r&&this.delay>0)return super.recycleAsyncId(e,t,r);0===e.actions.length&&(h.clearImmediate(t),e.scheduled=void 0)}}var d=r("IjjT");class v extends d.a{flush(e){this.active=!0,this.scheduled=void 0;const{actions:t}=this;let r,n=-1,i=t.length;e=e||t.shift();do{if(r=e.execute(e.state,e.delay))break}while(++n<i&&(e=t.shift()));if(this.active=!1,r){for(;++n<i&&(e=t.shift());)e.unsubscribe();throw r}}}const g=new v(p);var b=r("Y7HM");class y extends a.a{constructor(e,t=0,r=g){super(),this.source=e,this.delayTime=t,this.scheduler=r,(!Object(b.a)(t)||t<0)&&(this.delayTime=0),r&&"function"==typeof r.schedule||(this.scheduler=g)}static create(e,t=0,r=g){return new y(e,t,r)}static dispatch(e){const{source:t,subscriber:r}=e;return this.add(t.subscribe(r))}_subscribe(e){return this.scheduler.schedule(y.dispatch,this.delayTime,{source:this.source,subscriber:e})}}class m{constructor(e,t){this.scheduler=e,this.delay=t}call(e,t){return new y(t,this.delay,this.scheduler).subscribe(e)}}var _=r("pxpQ"),E=r("fXoL"),w=r("Wcq6"),A=r.n(w);function O(){}class S{constructor(e,t=n.b){this.zone=e,this.delegate=t}now(){return this.delegate.now()}schedule(e,t,r){const n=this.zone;return this.delegate.schedule((function(t){n.runGuarded(()=>{e.apply(this,[t])})}),t,r)}}class C{constructor(e){this.zone=e,this.task=null}call(e,t){const r=this.unscheduleTask.bind(this);return this.task=this.zone.run(()=>Zone.current.scheduleMacroTask("firebaseZoneBlock",O,{},O,O)),t.pipe(Object(o.a)({next:r,complete:r,error:r})).subscribe(e).add(r)}unscheduleTask(){setTimeout(()=>{null!=this.task&&"scheduled"===this.task.state&&(this.task.invoke(),this.task=null)},10)}}class N{constructor(e){this.ngZone=e,this.outsideAngular=e.runOutsideAngular(()=>new S(Zone.current)),this.insideAngular=e.run(()=>new S(Zone.current,i.b))}}function D(e){return function(t){return(t=t.lift(new C(e.ngZone))).pipe(function(e,t=0){return function(r){return r.lift(new m(e,t))}}(e.outsideAngular),Object(_.b)(e.insideAngular))}}const I=["ngOnDestroy"],L=(e,t,r)=>new Proxy(e,{get:(n,i)=>r.runOutsideAngular(()=>{if(e[i])return e[i];if(I.includes(i))return()=>{};const n=t.toPromise().then(e=>{const t=e&&e[i];return"function"==typeof t?t.bind(e):t&&t.then?t.then(e=>r.run(()=>e)):r.run(()=>t)});return new Proxy(()=>{},{get:(e,t)=>n[t],apply:(e,t,r)=>n.then(e=>e&&e(...r))})})}),T=new E.q("angularfire2.app.options"),P=new E.q("angularfire2.app.nameOrConfig"),j=new E.O("6.0.3");function k(e,t,r){const n="object"==typeof r&&r||{};return n.name=n.name||"string"==typeof r&&r||"[DEFAULT]",A.a.apps.filter(e=>e&&e.name===n.name)[0]||t.runOutsideAngular(()=>A.a.initializeApp(e,n))}const R={provide:class{},useFactory:k,deps:[T,E.z,[new E.A,P]]};let F=(()=>{class e{constructor(e){A.a.registerVersion("angularfire",j.full,e.toString()),A.a.registerVersion("angular",E.N.full)}static initializeApp(t,r){return{ngModule:e,providers:[{provide:T,useValue:t},{provide:P,useValue:r}]}}}return e.\u0275mod=E.Gb({type:e}),e.\u0275inj=E.Fb({factory:function(t){return new(t||e)(E.Sb(E.B))},providers:[R]}),e})()},wj3C:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i,o=r("mrSG"),a=r("zVF4"),s=r("S+S0"),c=r("q/0M"),u=((n={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$appName}",n["duplicate-app"]="Firebase App named '{$appName}' already exists",n["app-deleted"]="Firebase App named '{$appName}' already deleted",n["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",n["invalid-log-argument"]="First argument to `onLog` must be null or a function.",n),l=new a.ErrorFactory("app","Firebase",u),h=((i={})["@firebase/app"]="fire-core",i["@firebase/analytics"]="fire-analytics",i["@firebase/auth"]="fire-auth",i["@firebase/database"]="fire-rtdb",i["@firebase/functions"]="fire-fn",i["@firebase/installations"]="fire-iid",i["@firebase/messaging"]="fire-fcm",i["@firebase/performance"]="fire-perf",i["@firebase/remote-config"]="fire-rc",i["@firebase/storage"]="fire-gcs",i["@firebase/firestore"]="fire-fst",i["fire-js"]="fire-js",i["firebase-wrapper"]="fire-js-all",i),f=new c.Logger("@firebase/app"),p=function(){function e(e,t,r){var n,i,c=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a.deepCopy(e),this.container=new s.ComponentContainer(t.name),this._addComponent(new s.Component("app",(function(){return c}),"PUBLIC"));try{for(var u=o.__values(this.firebase_.INTERNAL.components.values()),l=u.next();!l.done;l=u.next())this._addComponent(l.value)}catch(h){n={error:h}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){f.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw l.create("app-deleted",{appName:this.name_})},e}();p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc");var d=function e(){var t=function(e){var t={},r=new Map,n={__esModule:!0,initializeApp:function(r,i){void 0===i&&(i={}),"object"==typeof i&&null!==i||(i={name:i});var o=i;void 0===o.name&&(o.name="[DEFAULT]");var s=o.name;if("string"!=typeof s||!s)throw l.create("bad-app-name",{appName:String(s)});if(a.contains(t,s))throw l.create("duplicate-app",{appName:s});var c=new e(r,o,n);return t[s]=c,c},app:i,registerVersion:function(e,t,r){var n,i=null!==(n=h[e])&&void 0!==n?n:e;r&&(i+="-"+r);var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var c=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&c.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&a&&c.push("and"),a&&c.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void f.warn(c.join(" "))}u(new s.Component(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:c.setLogLevel,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw l.create("invalid-log-argument",{appName:name});c.setUserLogHandler(e,t)},apps:null,SDK_VERSION:"7.20.0",INTERNAL:{registerComponent:u,removeApp:function(e){delete t[e]},components:r,useAsService:function(e,t){return"serverAuth"===t?null:t}}};function i(e){if(!a.contains(t,e=e||"[DEFAULT]"))throw l.create("no-app",{appName:e});return t[e]}function u(s){var c,u,h=s.name;if(r.has(h))return f.debug("There were multiple attempts to register component "+h+"."),"PUBLIC"===s.type?n[h]:null;if(r.set(h,s),"PUBLIC"===s.type){var p=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[h])throw l.create("invalid-app-argument",{appName:h});return e[h]()};void 0!==s.serviceProps&&a.deepExtend(p,s.serviceProps),n[h]=p,e.prototype[h]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,h).apply(this,s.multipleInstances?e:[])}}try{for(var d=o.__values(Object.keys(t)),v=d.next();!v.done;v=d.next())t[v.value]._addComponent(s)}catch(g){c={error:g}}finally{try{v&&!v.done&&(u=d.return)&&u.call(d)}finally{if(c)throw c.error}}return"PUBLIC"===s.type?n[h]:null}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,n}(p);return t.INTERNAL=o.__assign(o.__assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a.deepExtend(t,e)},createSubscribe:a.createSubscribe,ErrorFactory:a.ErrorFactory,deepExtend:a.deepExtend}),t}(),v=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();if(a.isBrowser()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var g=self.firebase.SDK_VERSION;g&&g.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var b=d.initializeApp;d.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.isNode()&&f.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),b.apply(void 0,e)};var y=d;!function(e,t){e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e){return new v(e)}),"PRIVATE")),e.registerVersion("@firebase/app","0.6.11",void 0),e.registerVersion("fire-js","")}(y),t.default=y,t.firebase=y},zVF4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("mrSG"),i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},o=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=(15&s)<<2|u>>6,h=63&u;c||(h=64,a||(l=64)),n.push(r[o>>2],r[(3&o)<<4|s>>4],r[l],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&(o=e[r++]))<<12|(63&(s=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{o=e[r++];var s=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var o=r[e.charAt(i++)],a=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,c=++i<e.length?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==c)throw Error();n.push(o<<2|a>>4),64!==s&&(n.push(a<<4&240|s>>2),64!==c&&n.push(s<<6&192|c))}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=l(e[r],t[r]));return e}var h=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();function f(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}var d=function(e){function t(r,n){var i=e.call(this,n)||this;return i.code=r,i.name="FirebaseError",Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,v.prototype.create),i}return n.__extends(t,e),t}(Error),v=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?g(o,n):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new d(i,s),u=0,l=Object.keys(n);u<l.length;u++){var h=l[u];"_"!==h.slice(-1)&&(h in c&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),c[h]=n[h])}return c},e}();function g(e,t){return e.replace(b,(function(e,r){var n=t[r];return null!=n?String(n):"<"+r+"?>"}))}var b=/\{\$([^}]+)}/g;function y(e){return JSON.parse(e)}var m=function(e){var t={},r={},n={},i="";try{var o=e.split(".");t=y(u(o[0])||""),r=y(u(o[1])||""),i=o[2],n=r.d||{},delete r.d}catch(a){}return{header:t,claims:r,data:n,signature:i}},_=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++)r[n]=4294967295&((h=r[n-3]^r[n-8]^r[n-14]^r[n-16])<<1|h>>>31);var i,o,a=this.chain_[0],s=this.chain_[1],c=this.chain_[2],u=this.chain_[3],l=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=u^s&(c^u),o=1518500249):(i=s^c^u,o=1859775393):n<60?(i=s&c|u&(s|c),o=2400959708):(i=s^c^u,o=3395469782);var h=(a<<5|a>>>27)+i+l+o+r[n]&4294967295;l=u,u=c,c=4294967295&(s<<30|s>>>2),s=a,a=h}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,i=this.buf_,o=this.inbuf_;n<t;){if(0===o)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[o]=e.charCodeAt(n),++n,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;n<t;)if(i[o]=e[n],++n,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.update(this.pad_,this.inbuf_<56?56-this.inbuf_:this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e},e}(),E=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=["next","error","complete"];r<n.length;r++){var i=n[r];if(i in e&&"function"==typeof e[i])return!0}return!1}(e)?e:{next:e,error:t,complete:r}).next&&(n.next=w),void 0===n.error&&(n.error=w),void 0===n.complete&&(n.complete=w);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function w(){}function A(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}return e+" failed: "+n+" argument "}t.CONSTANTS=i,t.Deferred=h,t.ErrorFactory=v,t.FirebaseError=d,t.MAX_VALUE_MILLIS=144e5,t.RANDOM_FACTOR=.5,t.Sha1=_,t.areCookiesEnabled=function(){return!(!navigator||!navigator.cookieEnabled)},t.assert=o,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then((function(){e.apply(void 0,r)})).catch((function(e){t&&t(e)}))}},t.base64=c,t.base64Decode=u,t.base64Encode=function(e){var t=s(e);return c.encodeByteArray(t,!0)},t.calculateBackoffMillis=function(e,t,r){void 0===t&&(t=1e3),void 0===r&&(r=2);var n=t*Math.pow(r,e),i=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(144e5,n+i)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new E(e,t);return r.subscribe.bind(r)},t.decode=m,t.deepCopy=function(e){return l(void 0,e)},t.deepExtend=l,t.errorPrefix=A,t.getUA=f,t.isAdmin=function(e){var t=m(e).claims;return"object"==typeof t&&!0===t.admin},t.isBrowser=function(){return"object"==typeof self&&self.self===self},t.isBrowserExtension=function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},t.isElectron=function(){return f().indexOf("Electron/")>=0},t.isEmpty=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},t.isIE=function(){var e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},t.isIndexedDBAvailable=function(){return"indexedDB"in self&&null!=indexedDB},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())},t.isNode=p,t.isNodeSdk=function(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isSafari=function(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},t.isUWP=function(){return f().indexOf("MSAppHost/")>=0},t.isValidFormat=function(e){var t=m(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t=m(e).claims,r=Math.floor((new Date).getTime()/1e3),n=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),i=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!i&&r>=n&&r<=i},t.issuedAtTime=function(e){var t=m(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=y,t.map=function(e,t,r){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n},t.querystring=function(e){for(var t=[],r=function(e,r){Array.isArray(r)?r.forEach((function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))},n=0,i=Object.entries(e);n<i.length;n++){var o=i[n];r(o[0],o[1])}return t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}})),t},t.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319){var a=i-55296;n++,o(n<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(n)-56320)}i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):i<65536?(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var i;if(n<t?i="at least "+t:n>r&&(i=0===r?"none":"no more than "+r),i)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(A(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(A(e,t,n)+"must be a valid context object.")},t.validateIndexedDBOpenable=function(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=window.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||window.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(o){t(o)}}))},t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(A(e,t,n)+"must be a valid firebase namespace.")}}}]);