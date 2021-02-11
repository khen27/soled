!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Wgwc:function(t,n,e){t.exports=function(){"use strict";var t="millisecond",n="second",e="minute",a="hour",o="day",i="week",r="month",l="quarter",c="year",s="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,p=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},u=function(t,n,e){var a=String(t);return!a||a.length>=n?t:""+Array(n+1-a.length).join(e)+t},h={s:u,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),a=Math.floor(e/60),o=e%60;return(n<=0?"+":"-")+u(a,2,"0")+":"+u(o,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var a=12*(e.year()-n.year())+(e.month()-n.month()),o=n.clone().add(a,r),i=e-o<0,l=n.clone().add(a+(i?-1:1),r);return+(-(a+(e-o)/(i?o-l:l-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:r,y:c,w:i,d:o,D:s,h:a,m:e,s:n,ms:t,Q:l}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f="en",b={};b[f]=g;var m=function(t){return t instanceof _},O=function(t,n,e){var a;if(!t)return f;if("string"==typeof t)b[t]&&(a=t),n&&(b[t]=n,a=t);else{var o=t.name;b[o]=t,a=o}return!e&&a&&(f=a),a||!e&&f},M=function(t,n){if(m(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new _(e)},v=h;v.l=O,v.i=m,v.w=function(t,n){return M(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var _=function(){function g(t){this.$L=this.$L||O(t.locale,null,!0),this.parse(t)}var u=g.prototype;return u.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(v.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var a=n.match(d);if(a){var o=a[2]-1||0,i=(a[7]||"0").substring(0,3);return e?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},u.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},u.$utils=function(){return v},u.isValid=function(){return!("Invalid Date"===this.$d.toString())},u.isSame=function(t,n){var e=M(t);return this.startOf(n)<=e&&e<=this.endOf(n)},u.isAfter=function(t,n){return M(t)<this.startOf(n)},u.isBefore=function(t,n){return this.endOf(n)<M(t)},u.$g=function(t,n,e){return v.u(t)?this[n]:this.set(e,t)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(t,l){var d=this,p=!!v.u(l)||l,g=v.p(t),u=function(t,n){var e=v.w(d.$u?Date.UTC(d.$y,n,t):new Date(d.$y,n,t),d);return p?e:e.endOf(o)},h=function(t,n){return v.w(d.toDate()[t].apply(d.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(n)),d)},f=this.$W,b=this.$M,m=this.$D,O="set"+(this.$u?"UTC":"");switch(g){case c:return p?u(1,0):u(31,11);case r:return p?u(1,b):u(0,b+1);case i:var M=this.$locale().weekStart||0,_=(f<M?f+7:f)-M;return u(p?m-_:m+(6-_),b);case o:case s:return h(O+"Hours",0);case a:return h(O+"Minutes",1);case e:return h(O+"Seconds",2);case n:return h(O+"Milliseconds",3);default:return this.clone()}},u.endOf=function(t){return this.startOf(t,!1)},u.$set=function(i,l){var d,p=v.p(i),g="set"+(this.$u?"UTC":""),u=(d={},d[o]=g+"Date",d[s]=g+"Date",d[r]=g+"Month",d[c]=g+"FullYear",d[a]=g+"Hours",d[e]=g+"Minutes",d[n]=g+"Seconds",d[t]=g+"Milliseconds",d)[p],h=p===o?this.$D+(l-this.$W):l;if(p===r||p===c){var f=this.clone().set(s,1);f.$d[u](h),f.init(),this.$d=f.set(s,Math.min(this.$D,f.daysInMonth())).$d}else u&&this.$d[u](h);return this.init(),this},u.set=function(t,n){return this.clone().$set(t,n)},u.get=function(t){return this[v.p(t)]()},u.add=function(t,l){var s,d=this;t=Number(t);var p=v.p(l),g=function(n){var e=M(d);return v.w(e.date(e.date()+Math.round(n*t)),d)};if(p===r)return this.set(r,this.$M+t);if(p===c)return this.set(c,this.$y+t);if(p===o)return g(1);if(p===i)return g(7);var u=(s={},s[e]=6e4,s[a]=36e5,s[n]=1e3,s)[p]||1,h=this.$d.getTime()+t*u;return v.w(h,this)},u.subtract=function(t,n){return this.add(-1*t,n)},u.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",a=v.z(this),o=this.$locale(),i=this.$H,r=this.$m,l=this.$M,c=o.weekdays,s=o.months,d=function(t,a,o,i){return t&&(t[a]||t(n,e))||o[a].substr(0,i)},g=function(t){return v.s(i%12||12,t,"0")},u=o.meridiem||function(t,n,e){var a=t<12?"AM":"PM";return e?a.toLowerCase():a},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:v.s(l+1,2,"0"),MMM:d(o.monthsShort,l,s,3),MMMM:d(s,l),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:d(o.weekdaysMin,this.$W,c,2),ddd:d(o.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:v.s(i,2,"0"),h:g(1),hh:g(2),a:u(i,r,!0),A:u(i,r,!1),m:String(r),mm:v.s(r,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:a};return e.replace(p,(function(t,n){return n||h[t]||a.replace(":","")}))},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(t,s,d){var p,g=v.p(s),u=M(t),h=6e4*(u.utcOffset()-this.utcOffset()),f=this-u,b=v.m(this,u);return b=(p={},p[c]=b/12,p[r]=b,p[l]=b/3,p[i]=(f-h)/6048e5,p[o]=(f-h)/864e5,p[a]=f/36e5,p[e]=f/6e4,p[n]=f/1e3,p)[g]||f,d?b:v.a(b)},u.daysInMonth=function(){return this.endOf(r).$D},u.$locale=function(){return b[this.$L]},u.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),a=O(t,n,!0);return a&&(e.$L=a),e},u.clone=function(){return v.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},g}(),w=_.prototype;return M.prototype=w,[["$ms",t],["$s",n],["$m",e],["$H",a],["$W",o],["$M",r],["$y",c],["$D",s]].forEach((function(t){w[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),M.extend=function(t,n){return t(n,_,M),M},M.locale=O,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=b[f],M.Ls=b,M}()},Y7HM:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var a=e("DH7j");function o(t){return!Object(a.a)(t)&&t-parseFloat(t)+1>=0}},pvlM:function(n,a,o){"use strict";o.r(a),o.d(a,"DealsDetailsPageModule",(function(){return I}));var i=o("ofXK"),r=o("tyNb"),l=o("TEn/"),c=o("j1ZV"),s=o("iTUp"),d=o("y+sA"),p=o("evT8"),g=o("UG6G"),u=o("eIep"),h=o("fXoL"),f=o("B7gC"),b=o("2gss"),m=o("zK/y"),O=o("dAQS"),M=o("ykzn"),v=function(){return{from:"hour",to:"second"}};function _(t,n){if(1&t&&(h.Ob(0,"ion-row",34),h.Ob(1,"span",35),h.vc(2,"Deal expires in:"),h.Nb(),h.Jb(3,"app-countdown-timer",36),h.Nb()),2&t){var e=h.Yb();h.yb(3),h.fc("end",null==e.details?null:e.details.expirationDate)("units",h.hc(2,v))}}var w=function(){return{w:56,h:40}};function C(t,n){if(1&t&&(h.Ob(0,"ion-slide",37),h.Ob(1,"ion-row",38),h.Ob(2,"app-aspect-ratio",11),h.Jb(3,"app-image-shell",39),h.Nb(),h.Nb(),h.Nb()),2&t){var e=n.$implicit;h.yb(2),h.fc("ratio",h.hc(3,w)),h.yb(1),h.fc("src",e)("alt","deals details")}}var P=function(){return{w:1,h:1}};function x(t,n){if(1&t&&(h.Ob(0,"ion-row",43),h.Ob(1,"ion-col",44),h.Ob(2,"app-aspect-ratio",11),h.Jb(3,"app-image-shell",45),h.Nb(),h.Nb(),h.Ob(4,"ion-col",46),h.Ob(5,"h4",47),h.Jb(6,"app-text-shell",27),h.Nb(),h.Ob(7,"p",48),h.Jb(8,"app-text-shell",27),h.Nb(),h.Nb(),h.Nb()),2&t){var e=n.$implicit;h.yb(2),h.fc("ratio",h.hc(5,P)),h.yb(1),h.fc("src",e.logo)("alt","deals logo"),h.yb(3),h.fc("data",null==e?null:e.name),h.yb(2),h.fc("data",null==e?null:e.description)}}function y(t,n){if(1&t&&(h.Ob(0,"div",40),h.Ob(1,"h3",41),h.vc(2,"More hot deals"),h.Nb(),h.tc(3,x,9,6,"ion-row",42),h.Nb()),2&t){var e=h.Yb();h.yb(3),h.fc("ngForOf",null==e.details?null:e.details.relatedDeals)}}var $,D,k,N=function(t,n,e,a){return{ended:t,"imminent-end":n,"ends-soon":e,"distant-end":a}},S=function(){return{w:128,h:32}},z=((D=function(){function n(e){t(this,n),this.route=e,this.slidesOptions={zoom:{toggle:!1}}}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.subscriptions=this.route.data.pipe(Object(u.a)((function(t){return p.a.extractData(t.data,g.a)}))).subscribe((function(n){t.details=n}),(function(t){return console.log(t)}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.details||!this.details.isShell)}}]),n}()).\u0275fac=function(t){return new(t||D)(h.Ib(r.a))},D.\u0275cmp=h.Cb({type:D,selectors:[["app-deals-details"]],hostVars:2,hostBindings:function(t,n){2&t&&h.Ab("is-shell",n.isShell)},decls:57,vars:46,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories/deals"],[1,"deals-details-content",3,"ngClass"],["class","expiration-countdown",4,"ngIf"],[1,"details-wrapper"],[1,"slider-row"],["pager","true",1,"details-slides",3,"options"],["class","",4,"ngFor","ngForOf"],[1,"description-row"],["size","6",1,"logo-col"],[3,"ratio"],["animation","spinner",1,"logo-image",3,"src","alt"],["size","9",1,"info-col"],[1,"details-name"],["animation","bouncing",3,"data"],[1,"details-description"],["animation","bouncing","lines","3",3,"data"],["size","3",1,"preview-image-col"],["animation","spinner",1,"preview-image",3,"src","alt"],[1,"promo-row"],[1,"promo-title"],["size","8"],[1,"promo-description"],["size","6"],["expand","block","shape","round","fill","outline","color","claim",1,"promo-code-btn"],[1,"promo-code"],[3,"data"],[1,"promo-instructions"],["target","_blank","href","https://google.com/search?q=chocolate",1,"instructions-anchor"],[1,"expiration-notice"],[1,"notice-message"],[1,"expiration-value"],["class","related-deals-wrapper",4,"ngIf"],[1,"expiration-countdown"],[1,"expiration-lead"],["fill","countdown",1,"item-countdown",3,"end","units"],[1,""],[1,"slide-inner-row"],["animation","spinner",1,"showcase-image",3,"src","alt"],[1,"related-deals-wrapper"],[1,"related-deals-title"],["class","related-deal",4,"ngFor","ngForOf"],[1,"related-deal"],["size","4",1,"deal-logo-wrapper"],["animation","spinner",1,"related-deal-logo",3,"src","alt"],["size","8",1,"deal-info-wrapper"],[1,"related-deal-title"],[1,"related-deal-description"]],template:function(t,n){1&t&&(h.Ob(0,"ion-header"),h.Ob(1,"ion-toolbar",0),h.Ob(2,"ion-buttons",1),h.Jb(3,"ion-back-button",2),h.Nb(),h.Ob(4,"ion-title"),h.vc(5,"Deals Details"),h.Nb(),h.Nb(),h.Nb(),h.Ob(6,"ion-content",3),h.Zb(7,"appTimeDifference"),h.Zb(8,"appTimeDifference"),h.Zb(9,"appTimeDifference"),h.Zb(10,"appTimeDifference"),h.Zb(11,"appTimeDifference"),h.Zb(12,"appTimeDifference"),h.Zb(13,"appTimeDifference"),h.tc(14,_,4,3,"ion-row",4),h.Zb(15,"appTimeDifference"),h.Zb(16,"appTimeDifference"),h.Ob(17,"div",5),h.Ob(18,"ion-row",6),h.Ob(19,"ion-slides",7),h.tc(20,C,4,4,"ion-slide",8),h.Nb(),h.Nb(),h.Ob(21,"ion-row",9),h.Ob(22,"ion-col",10),h.Ob(23,"app-aspect-ratio",11),h.Jb(24,"app-image-shell",12),h.Nb(),h.Nb(),h.Ob(25,"ion-col",13),h.Ob(26,"h4",14),h.Jb(27,"app-text-shell",15),h.Nb(),h.Ob(28,"p",16),h.Jb(29,"app-text-shell",17),h.Nb(),h.Nb(),h.Ob(30,"ion-col",18),h.Ob(31,"app-aspect-ratio",11),h.Jb(32,"app-image-shell",19),h.Nb(),h.Nb(),h.Nb(),h.Ob(33,"ion-row",20),h.Ob(34,"h3",21),h.vc(35,"Copy the Code"),h.Nb(),h.Ob(36,"ion-col",22),h.Ob(37,"p",23),h.vc(38," Paste this code at checkout to get an extra 50% off "),h.Nb(),h.Nb(),h.Ob(39,"ion-col",24),h.Ob(40,"ion-button",25),h.Ob(41,"span",26),h.Jb(42,"app-text-shell",27),h.Nb(),h.Nb(),h.Nb(),h.Ob(43,"ion-col",22),h.Ob(44,"p",28),h.vc(45," Go to "),h.Ob(46,"a",29),h.vc(47,"lancasternutcandy.com"),h.Nb(),h.vc(48," and paste the code at checkout. "),h.Nb(),h.Nb(),h.Nb(),h.Ob(49,"div",30),h.Ob(50,"span",31),h.vc(51),h.Zb(52,"appTimeDifference"),h.Nb(),h.Ob(53,"span",32),h.Jb(54,"app-text-shell",27),h.Zb(55,"date"),h.Nb(),h.Nb(),h.Nb(),h.tc(56,y,4,1,"div",33),h.Nb()),2&t&&(h.yb(6),h.fc("ngClass",h.kc(39,N,h.ac(7,16,null==n.details?null:n.details.expirationDate)<0,h.ac(8,18,null==n.details?null:n.details.expirationDate)>0&&h.ac(9,20,null==n.details?null:n.details.expirationDate)<=2,h.ac(10,22,null==n.details?null:n.details.expirationDate)>0&&h.ac(11,24,null==n.details?null:n.details.expirationDate)>2&&h.ac(12,26,null==n.details?null:n.details.expirationDate)<10,h.ac(13,28,null==n.details?null:n.details.expirationDate)>=10)),h.yb(8),h.fc("ngIf",h.ac(15,30,null==n.details?null:n.details.expirationDate)>0&&h.ac(16,32,null==n.details?null:n.details.expirationDate)<=2),h.yb(5),h.fc("options",n.slidesOptions),h.yb(1),h.fc("ngForOf",null==n.details?null:n.details.showcaseImages),h.yb(3),h.fc("ratio",h.hc(44,S)),h.yb(1),h.fc("src",null==n.details?null:n.details.logo)("alt","deals details"),h.yb(3),h.fc("data",null==n.details?null:n.details.name),h.yb(2),h.fc("data",null==n.details?null:n.details.description),h.yb(2),h.fc("ratio",h.hc(45,P)),h.yb(1),h.fc("src",null==n.details?null:n.details.previewImage)("alt","deals details"),h.yb(10),h.fc("data",null==n.details?null:n.details.code),h.yb(9),h.xc("Cupon ",h.ac(52,34,null==n.details?null:n.details.expirationDate)<0?"expired":"expires"," on:"),h.yb(3),h.fc("data",h.bc(55,36,null==n.details?null:n.details.expirationDate,"mediumDate")),h.yb(2),h.fc("ngIf",(null==n.details?null:n.details.relatedDeals)&&n.details.relatedDeals.length>0))},directives:[l.v,l.eb,l.i,l.e,l.f,l.cb,l.q,i.k,i.m,l.N,l.U,i.l,l.p,f.a,b.a,m.a,l.h,O.a,l.T],pipes:[M.a,i.f],styles:['@charset "UTF-8";[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-swiper-pagination-space:30px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-countdown-fill-shadow-color:rgba(var(--ion-color-darkest-rgb),0.2);--page-expired-color:var(--ion-color-medium-tint);--page-ends-soon-color:#ffab6b;--page-distant-end-color:#70df70;--page-deal-color:var(--ion-color-medium);--page-color:#70df70;--ion-color-claim:#70df70;--ion-color-claim-rgb:112,223,112;--ion-color-claim-contrast:#fff;--ion-color-claim-contrast-rgb:255,255,255;--ion-color-claim-shade:#63c463;--ion-color-claim-tint:#7ee27e}[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-claim)!important;--ion-color-base-rgb:var(--ion-color-claim-rgb)!important;--ion-color-contrast:var(--ion-color-claim-contrast)!important;--ion-color-contrast-rgb:var(--ion-color-claim-contrast-rgb)!important;--ion-color-shade:var(--ion-color-claim-shade)!important;--ion-color-tint:var(--ion-color-claim-tint)!important}.deals-details-content[_ngcontent-%COMP%]{--background:var(--page-background)}.deals-details-content.ended[_ngcontent-%COMP%]{--page-deal-color:var(--page-expired-color)}.deals-details-content.imminent-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color)}.deals-details-content.ends-soon[_ngcontent-%COMP%]{--page-deal-color:var(--page-ends-soon-color)}.deals-details-content.distant-end[_ngcontent-%COMP%]{--page-deal-color:var(--page-distant-end-color)}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]{color:var(--ion-color-lightest);background-color:var(--ion-color-danger);padding:calc(var(--page-margin) / 2) var(--page-margin);position:-webkit-sticky;position:sticky;top:0;z-index:8;text-align:center;justify-content:center;align-items:center}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   .expiration-lead[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) / 2);text-transform:uppercase;font-weight:500;font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%]{--countdown-margin:0px;--countdown-padding:0px 3px;--countdown-time-margin:0px 2px;--countdown-time-padding:0px 2px;--countdown-inner-time-margin:0px 2px 0px 0px;--countdown-inner-time-padding:calc(var(--page-margin) / 2) 0px;--countdown-fill-border:none;--countdown-fill-border-radius:var(--app-narrow-radius);--countdown-fill-background:var(--ion-color-lightest);--countdown-fill-shadow:0px 0px 5px 0px var(--page-countdown-fill-shadow-color);--countdown-value-color:var(--ion-color-darkest);--countdown-unit-color:var(--ion-color-medium-shade);padding:0 calc(var(--page-margin) / 4);font-size:14px;font-weight:500}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{margin:var(--page-margin);border-radius:var(--app-broad-radius);background-color:var(--ion-color-lightest)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-primary);--bullet-background-active:var(--ion-color-primary);height:100%;width:100%;border-radius:var(--app-broad-radius) var(--app-broad-radius) 0 0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-bottom:var(--page-swiper-pagination-space);box-sizing:border-box}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);border-bottom:2px dashed rgba(var(--ion-color-dark-rgb),.1);align-items:center}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%]{padding-bottom:calc(var(--page-margin) / 2)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin) / 2)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-dark-tint);font-size:16px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);text-align:center;justify-content:center}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]{font-size:22px;font-weight:300;text-transform:uppercase;letter-spacing:4px;color:var(--ion-color-dark-tint);margin:0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]:after, .deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]:before{content:"\xb7";color:var(--ion-color-dark-tint)}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%]{margin:var(--page-margin) 0;color:var(--ion-color-medium-tint);font-size:14px}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code-btn[_ngcontent-%COMP%]{margin:0}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code[_ngcontent-%COMP%]{display:block;font-size:14px;line-height:1}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0;color:var(--ion-color-medium-tint);font-size:12px;line-height:1.4}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]   .instructions-anchor[_ngcontent-%COMP%]{color:var(--page-color);text-decoration:none}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]{background-color:var(--page-deal-color);padding:calc(var(--page-margin) / 2) var(--page-margin);color:var(--ion-color-lightest);border-radius:0 0 var(--app-broad-radius) var(--app-broad-radius);display:flex;justify-content:space-evenly}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .notice-message[_ngcontent-%COMP%]{display:block;margin-right:5px;text-transform:capitalize}.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%]{display:block}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deals-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:400;text-transform:uppercase;color:var(--ion-color-dark-shade);margin:0 0 var(--page-margin)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;border-radius:var(--app-broad-radius);background-color:var(--ion-color-lightest)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-logo-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);border-right:2px dashed rgba(var(--ion-color-dark-rgb),.1)}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 4) calc(var(--page-margin) / 2) calc(var(--page-margin) / 4) var(--page-margin);display:flex;flex-direction:column;justify-content:center}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-title[_ngcontent-%COMP%]{margin:0 0 5px;color:var(--ion-color-dark-tint);font-size:20px}.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-description[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium-tint);font-size:16px}[_nghost-%COMP%]     .details-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height)) / 2)}[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}[_nghost-%COMP%]     app-countdown-timer.item-countdown .time-unit{font-size:.8em}',"[_nghost-%COMP%]{--shell-color:#70df70;--shell-color-rgb:112,223,112}app-image-shell.showcase-image[_ngcontent-%COMP%]{--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}app-image-shell.logo-image[_ngcontent-%COMP%], app-image-shell.showcase-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10)}app-image-shell.logo-image[_ngcontent-%COMP%]{--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.details-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.30);--text-shell-line-height:16px}.details-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:14px}app-image-shell.preview-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.promo-code[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:14px;min-width:80px}.promo-code[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.expiration-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-lightest-rgb),.20);--text-shell-line-height:18px;min-width:60px}.expiration-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}app-image-shell.related-deal-logo[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.30);--image-shell-spinner-size:18px}.related-deal-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.30);--text-shell-line-height:20px;max-width:30%}.related-deal-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.related-deal-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:16px;max-width:50%}.related-deal-description[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),D),T=(($=function(){function n(e){t(this,n),this.dealsService=e}return e(n,[{key:"resolve",value:function(){var t=this.dealsService.getDetailsDataSource();return this.dealsService.getDetailsStore(t)}}]),n}()).\u0275fac=function(t){return new(t||$)(h.Sb(d.a))},$.\u0275prov=h.Eb({token:$,factory:$.\u0275fac}),$),J=[{path:"",component:z,resolve:{data:T}}],I=((k=function n(){t(this,n)}).\u0275mod=h.Gb({type:k}),k.\u0275inj=h.Fb({factory:function(t){return new(t||k)},providers:[T,d.a],imports:[[i.c,l.fb,r.k.forChild(J),c.a,s.a]]}),k)}}])}();