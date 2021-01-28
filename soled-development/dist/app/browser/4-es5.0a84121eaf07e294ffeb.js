!function(){function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",s="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,o=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:s,y:u,w:a,d:i,D:c,h:r,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",v={};v[b]=h;var g=function(t){return t instanceof O},y=function(t,e,n){var r;if(!t)return b;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(b=r),r||!n&&b},m=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},S=p;S.l=y,S.i=g,S.w=function(t,e){return m(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function h(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var d=h.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return S},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=m(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return m(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<m(t)},d.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var l=this,f=!!S.u(o)||o,h=S.p(t),d=function(t,e){var n=S.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return f?n:n.endOf(i)},p=function(t,e){return S.w(l.toDate()[t].apply(l.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},b=this.$W,v=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case u:return f?d(1,0):d(31,11);case s:return f?d(1,v):d(0,v+1);case a:var m=this.$locale().weekStart||0,O=(b<m?b+7:b)-m;return d(f?g-O:g+(6-O),v);case i:case c:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case n:return p(y+"Seconds",2);case e:return p(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(a,o){var l,f=S.p(a),h="set"+(this.$u?"UTC":""),d=(l={},l[i]=h+"Date",l[c]=h+"Date",l[s]=h+"Month",l[u]=h+"FullYear",l[r]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[f],p=f===i?this.$D+(o-this.$W):o;if(f===s||f===u){var b=this.clone().set(c,1);b.$d[d](p),b.init(),this.$d=b.set(c,Math.min(this.$D,b.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[S.p(t)]()},d.add=function(t,o){var c,l=this;t=Number(t);var f=S.p(o),h=function(e){var n=m(l);return S.w(n.date(n.date()+Math.round(e*t)),l)};if(f===s)return this.set(s,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===i)return h(1);if(f===a)return h(7);var d=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[f]||1,p=this.$d.getTime()+t*d;return S.w(p,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),i=this.$locale(),a=this.$H,s=this.$m,o=this.$M,u=i.weekdays,c=i.months,l=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].substr(0,a)},h=function(t){return S.s(a%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(i.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,u,2),ddd:l(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:S.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,s,!0),A:d(a,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||p[t]||r.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,l){var f,h=S.p(c),d=m(t),p=6e4*(d.utcOffset()-this.utcOffset()),b=this-d,v=S.m(this,d);return v=(f={},f[u]=v/12,f[s]=v,f[o]=v/3,f[a]=(b-p)/6048e5,f[i]=(b-p)/864e5,f[r]=b/36e5,f[n]=b/6e4,f[e]=b/1e3,f)[h]||b,l?v:S.a(v)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return v[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return S.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},h}(),w=O.prototype;return m.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",s],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),m.extend=function(t,e){return t(e,O,m),m},m.locale=y,m.isDayjs=g,m.unix=function(t){return m(1e3*t)},m.en=v[b],m.Ls=v,m}()},X1WR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){o(n,t);var e=c(n);function n(){return s(this,n),e.call(this)}return n}(n("f/Ol").b)},"f/Ol":function(t,n,r){"use strict";r.d(n,"b",(function(){return d})),r.d(n,"a",(function(){return p}));var i=r("jtHE"),o=r("LRne"),u=r("itXk"),c=r("3E0/"),l=r("lJxs"),f=r("JX91"),h=r("AytR"),d=function t(){s(this,t),this.isShell=!1},p=function(){function t(e){s(this,t),this.shellModel=e,this.networkDelay=h.a.appShellConfig&&h.a.appShellConfig.networkDelay?h.a.appShellConfig.networkDelay:0,this.timeline=new i.a(1)}return a(t,[{key:"load",value:function(e,n){var r=this,i="number"==typeof n?n:this.networkDelay;(0===i?e:t.AppendShell(e,this.shellModel,i)).subscribe((function(t){r.timeline.next(t)}))}},{key:"state",get:function(){return this.timeline.asObservable()}}],[{key:"AppendShell",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,i=Object(o.a)(!0).pipe(Object(c.a)(r));return Object(u.a)([i,t]).pipe(Object(l.a)((function(t){var n=e(t,2),r=(n[0],n[1]);return Object.assign(r,{isShell:!1})})),Object(f.a)(Object.assign(n,{isShell:!0})))}}]),t}()},izws:function(n,r,i){"use strict";i.d(r,"a",(function(){return M}));var u,l=i("fXoL"),f=i("itXk"),h=i("LRne"),d=i("cp0P"),p=i("z6cu"),b=i("lJxs"),v=i("bOdf"),g=i("SxV6"),y=i("pLZG"),m=i("Wgwc"),S=i("f/Ol"),O=i("X1WR"),w=i("pXCI"),$=function(t){o(n,t);var e=c(n);function n(){return s(this,n),e.call(this)}return n}(S.b),D=i("O2zu"),k=i("ofXK"),j=i("I/3d"),M=((u=function(){function n(t,e,r){s(this,n),this.platformId=t,this.transferStateHelper=e,this.afs=r}return a(n,[{key:"getListingDataSource",value:function(){var t=this,e=this.afs.collection("users").valueChanges({idField:"id"}).pipe(Object(b.a)((function(e){return e.map((function(e){var n=t.calcUserAge(e.birthdate);return Object.assign({age:n},e)}))})));return this.transferStateHelper.checkDataSourceState("firebase-listing-state",e)}},{key:"getListingStore",value:function(t){if(!this.listingDataStore){var e=[new O.a,new O.a,new O.a,new O.a,new O.a,new O.a];this.listingDataStore=new S.a(e),Object(k.u)(this.platformId)||t.ssr_state?this.listingDataStore.load(t,0):this.listingDataStore.load(t)}return this.listingDataStore}},{key:"searchUsersByAge",value:function(t,e){var n=this,r=m(Date.now()).subtract(e,"year").unix(),i=m(Date.now()).subtract(t,"year").unix();return this.afs.collection("users",(function(t){return t.orderBy("birthdate").startAt(r).endAt(i)})).valueChanges({idField:"id"}).pipe(Object(b.a)((function(t){return t.map((function(t){var e=n.calcUserAge(t.birthdate);return Object.assign({age:e},t)}))})))}},{key:"getCombinedUserDataSource",value:function(t){var n=this,r=this.getUser(t).pipe(Object(v.a)((function(t){if(t&&t.skills){var r=t.skills.map((function(t){return n.getSkill(t).pipe(Object(g.a)())}));return Object(f.a)([Object(h.a)(t),Object(d.a)(r)]).pipe(Object(b.a)((function(t){var n=e(t,2),r=n[0],i=n[1];return Object.assign(Object.assign({},r),{skills:i})})))}return Object(p.a)("User does not have any skills.")})));return this.transferStateHelper.checkDataSourceState("firebase-user-".concat(t,"-state"),r)}},{key:"getCombinedUserStore",value:function(t){var e=new w.a;return this.combinedUserDataStore=new S.a(e),Object(k.u)(this.platformId)||t.ssr_state?this.combinedUserDataStore.load(t,0):this.combinedUserDataStore.load(t),this.combinedUserDataStore}},{key:"getRelatedUsersDataSource",value:function(t,e){var n=this,r=t.pipe(Object(y.a)((function(t){return!t.isShell})),Object(v.a)((function(t){return t&&t.skills?n.getUsersWithSameSkill(t.id,t.skills):Object(p.a)("Could not get related user")})));return this.transferStateHelper.checkDataSourceState("firebase-user-".concat(e,"-related-users-state"),r)}},{key:"getRelatedUsersStore",value:function(t){var e=[new O.a,new O.a,new O.a];return this.relatedUsersDataStore=new S.a(e),Object(k.u)(this.platformId)||t.ssr_state?this.relatedUsersDataStore.load(t,0):this.relatedUsersDataStore.load(t),this.relatedUsersDataStore}},{key:"createUser",value:function(t){return this.afs.collection("users").add(Object.assign({},t))}},{key:"updateUser",value:function(t){return this.afs.collection("users").doc(t.id).set(t)}},{key:"deleteUser",value:function(t){return this.afs.collection("users").doc(t).delete()}},{key:"getAvatarsDataSource",value:function(){return this.afs.collection("avatars").valueChanges()}},{key:"getAvatarsStore",value:function(t){if(!this.avatarsDataStore){var e=[new $,new $,new $,new $,new $];this.avatarsDataStore=new S.a(e),this.avatarsDataStore.load(t)}return this.avatarsDataStore}},{key:"getSkills",value:function(){return this.afs.collection("skills").valueChanges({idField:"id"})}},{key:"getSkill",value:function(t){return this.afs.doc("skills/"+t).snapshotChanges().pipe(Object(b.a)((function(t){var e=t.payload.data();return Object.assign({id:t.payload.id},e)})))}},{key:"getUser",value:function(t){var e=this;return this.afs.doc("users/"+t).snapshotChanges().pipe(Object(b.a)((function(t){var n=t.payload.data(),r=t.payload.id,i=n?e.calcUserAge(n.birthdate):0;return Object.assign({id:r,age:i},n)})))}},{key:"getUsersWithSameSkill",value:function(e,n){var r=this,i=n.map((function(t){return r.afs.collection("users",(function(e){return e.where("skills","array-contains",t.id)})).valueChanges({idField:"id"})}));return Object(f.a)(i).pipe(Object(b.a)((function(n){var r;return(r=[]).concat.apply(r,t(n)).reduce((function(n,r){return n.findIndex((function(t){return t.id===r.id}))<0&&r.id!==e?[].concat(t(n),[r]):n}),[])})))}},{key:"calcUserAge",value:function(t){return m(Date.now()).diff(m.unix(t),"year")}}]),n}()).\u0275fac=function(t){return new(t||u)(l.Sb(l.B),l.Sb(D.b),l.Sb(j.a))},u.\u0275prov=l.Eb({token:u,factory:u.\u0275fac}),u)},j7gE:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("izws"),i=n("fXoL"),o=n("TEn/"),u=n("ofXK"),c=n("2gss"),l=n("B7gC"),f=function(){return{w:1,h:1}};function h(t,e){if(1&t){var n=i.Pb();i.Ob(0,"ion-col",7),i.Ob(1,"app-image-shell",8),i.Wb("click",(function(){i.oc(n);var t=e.$implicit;return i.Yb().dismissModal(t)})),i.Jb(2,"app-aspect-ratio",9),i.Nb(),i.Nb()}if(2&t){var r=e.$implicit;i.yb(1),i.fc("display","cover")("src",r.link)("alt","avatar image"),i.yb(1),i.fc("ratio",i.hc(4,f))}}var d=function(){var t=function(){function t(e,n){s(this,t),this.modalController=e,this.firebaseCrudService=n}return a(t,[{key:"ngOnInit",value:function(){var t=this,e=this.firebaseCrudService.getAvatarsDataSource();this.firebaseCrudService.getAvatarsStore(e).state.subscribe((function(e){t.avatars=e}),(function(t){}))}},{key:"dismissModal",value:function(t){this.modalController.dismiss(t)}},{key:"isShell",get:function(){return!(!this.avatars||!this.avatars.isShell)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Ib(o.db),i.Ib(r.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-select-user-image"]],hostVars:2,hostBindings:function(t,e){2&t&&i.Ab("is-shell",e.isShell)},decls:10,vars:1,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"select-image-content"],[1,"images-wrapper"],["size","4","class","image-item",4,"ngFor","ngForOf"],["size","4",1,"image-item"],["animation","spinner",1,"user-image",3,"display","src","alt","click"],[3,"ratio"]],template:function(t,e){1&t&&(i.Ob(0,"ion-header"),i.Ob(1,"ion-toolbar",0),i.Ob(2,"ion-buttons",1),i.Ob(3,"ion-button",2),i.Wb("click",(function(){return e.dismissModal()})),i.Jb(4,"ion-icon",3),i.Nb(),i.Nb(),i.Ob(5,"ion-title"),i.vc(6,"Select an Avatar"),i.Nb(),i.Nb(),i.Nb(),i.Ob(7,"ion-content",4),i.Ob(8,"ion-row",5),i.tc(9,h,3,5,"ion-col",6),i.Nb(),i.Nb()),2&t&&(i.yb(9),i.fc("ngForOf",e.avatars))},directives:[o.p,o.Y,o.h,o.g,o.q,o.W,o.k,o.H,u.l,o.j,c.a,l.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background)}.select-image-content[_ngcontent-%COMP%]{--background:var(--page-background)}.select-image-content[_ngcontent-%COMP%]   .images-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius)}"]}),t}()},k8ID:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("TEn/"),i=n("ofXK"),a=n("j1ZV"),o=n("3Pt+"),u=n("fXoL"),c=function(){var t=function t(){s(this,t)};return t.\u0275mod=u.Gb({type:t}),t.\u0275inj=u.Fb({factory:function(e){return new(e||t)},imports:[[r.Z,i.c,a.a,o.h,o.o]]}),t}()},pXCI:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n("f/Ol"),i=function(t){o(n,t);var e=c(n);function n(){return s(this,n),e.call(this)}return n}(r.b),a=function(t){o(n,t);var e=c(n);function n(){var t;return s(this,n),(t=e.call(this)).skills=["","",""],t.languages={spanish:0,english:0,french:0},t}return n}(r.b),u=function(t){o(n,t);var e=c(n);function n(){var t;return s(this,n),(t=e.call(this)).skills=[new i,new i,new i],t}return n}(a)},ypRl:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){function t(){s(this,t)}return a(t,null,[{key:"minSelectedCheckboxes",value:function(t){return function(e){return e.controls.map((function(t){return t.value})).reduce((function(t,e){return e?t+e:t}),0)>=t?null:{required:!0}}}}]),t}()}}])}();