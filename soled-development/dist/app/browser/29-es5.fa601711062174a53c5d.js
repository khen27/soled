!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);"Object"===a&&n.constructor&&(a=n.constructor.name);if("Map"===a||"Set"===a)return Array.from(n);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function r(n,e,t){return e&&a(n.prototype,e),t&&a(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{evT8:function(n,e,a){"use strict";a.d(e,"a",(function(){return c}));var o=a("f/Ol"),i=a("LRne"),c=function(){function n(){t(this,n)}return r(n,null,[{key:"extractData",value:function(n,e){return n instanceof o.a?n.state:n instanceof e?Object(i.a)(n):void 0}}]),n}()},"f/Ol":function(e,a,o){"use strict";o.d(a,"b",(function(){return d})),o.d(a,"a",(function(){return b}));var i=o("jtHE"),c=o("LRne"),s=o("itXk"),l=o("3E0/"),g=o("lJxs"),p=o("JX91"),u=o("AytR"),d=function n(){t(this,n),this.isShell=!1},b=function(){function e(n){t(this,e),this.shellModel=n,this.networkDelay=u.a.appShellConfig&&u.a.appShellConfig.networkDelay?u.a.appShellConfig.networkDelay:0,this.timeline=new i.a(1)}return r(e,[{key:"load",value:function(n,t){var a=this,r="number"==typeof t?t:this.networkDelay;(0===r?n:e.AppendShell(n,this.shellModel,r)).subscribe((function(n){a.timeline.next(n)}))}},{key:"state",get:function(){return this.timeline.asObservable()}}],[{key:"AppendShell",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,r=Object(c.a)(!0).pipe(Object(l.a)(a));return Object(s.a)([r,e]).pipe(Object(g.a)((function(e){var t=n(e,2),a=(t[0],t[1]);return Object.assign(a,{isShell:!1})})),Object(p.a)(Object.assign(t,{isShell:!0})))}}]),e}()},sSds:function(n,e,a){"use strict";a.r(e),a.d(e,"UserProfilePageModule",(function(){return E}));var o,i=a("ofXK"),c=a("3Pt+"),s=a("tyNb"),l=a("TEn/"),g=a("VGjC"),p=a("mrSG"),u=a("evT8"),d=a("/OzF"),b=a("fXoL"),f=((o=function(){function n(){t(this,n),this.languages=new Array,this.languages.push({name:"English",code:"en"},{name:"Spanish",code:"es"},{name:"French",code:"fr"})}return r(n,[{key:"getLanguages",value:function(){return this.languages}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275prov=b.Eb({token:o,factory:o.\u0275fac}),o),m=a("eIep"),h=a("sYmb"),O=a("B7gC"),v=a("2gss"),w=a("zK/y"),C=function(){return{w:1,h:1}};function _(n,e){if(1&n&&(b.Ob(0,"ion-col",39),b.Ob(1,"app-aspect-ratio",5),b.Jb(2,"app-image-shell",40),b.Nb(),b.Ob(3,"span",41),b.Jb(4,"app-text-shell",11),b.Nb(),b.Nb()),2&n){var t=e.$implicit;b.yb(1),b.fc("ratio",b.hc(3,C)),b.yb(1),b.fc("src",t.image),b.yb(2),b.fc("data",t.name)}}function P(n,e){if(1&n&&(b.Ob(0,"ion-col",42),b.Ob(1,"app-image-shell",43),b.Jb(2,"app-aspect-ratio",5),b.Nb(),b.Nb()),2&n){var t=e.$implicit;b.yb(1),b.fc("display","cover")("src",t.image),b.yb(1),b.fc("ratio",b.hc(3,C))}}var M,x,y,N=function(){return["/app/user/friends"]},k=((x=function(){function n(e,a,r,o){t(this,n),this.route=e,this.translate=a,this.languageService=r,this.alertController=o,this.available_languages=[]}return r(n,[{key:"ngOnInit",value:function(){var n=this;this.subscriptions=this.route.data.pipe(Object(m.a)((function(n){return u.a.extractData(n.data,d.a)}))).subscribe((function(e){n.profile=e,n.getTranslations()}),(function(n){return console.log(n)})),this.translate.onLangChange.subscribe((function(){return n.getTranslations()}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"getTranslations",value:function(){var n=this;this.translate.getTranslation(this.translate.currentLang).subscribe((function(e){return n.translations=e}))}},{key:"openLanguageChooser",value:function(){return Object(p.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.available_languages=this.languageService.getLanguages().map((function(n){return{name:n.name,type:"radio",label:n.name,value:n.code,checked:n.code===t.translate.currentLang}})),n.next=3,this.alertController.create({header:this.translations.SELECT_LANGUAGE,inputs:this.available_languages,cssClass:"language-alert",buttons:[{text:this.translations.CANCEL,role:"cancel",cssClass:"secondary",handler:function(){}},{text:this.translations.OK,handler:function(n){n&&t.translate.use(n)}}]});case 3:return e=n.sent,n.next=6,e.present();case 6:case"end":return n.stop()}}),n,this)})))}},{key:"isShell",get:function(){return!(!this.profile||!this.profile.isShell)}}]),n}()).\u0275fac=function(n){return new(n||x)(b.Ib(s.a),b.Ib(h.d),b.Ib(f),b.Ib(l.a))},x.\u0275cmp=b.Cb({type:x,selectors:[["app-user-profile"]],hostVars:2,hostBindings:function(n,e){2&n&&b.Ab("is-shell",e.isShell)},decls:75,vars:44,consts:[[1,"ion-no-border"],["slot","start"],[1,"user-profile-content"],[1,"user-details-section"],[1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src"],[1,"user-info-wrapper"],[1,"user-data-row"],["size","9"],[1,"user-name"],[3,"data"],[1,"user-title"],[1,"membership-col"],[1,"user-membership"],[1,"actions-row"],[1,"main-actions"],["size","small","color","primary",1,"call-to-action-btn"],["size","small","color","medium",1,"call-to-action-btn"],[1,"secondary-actions"],["size","small","fill","clear","color","medium",1,"more-btn",3,"click"],["slot","icon-only","ios","ellipsis-horizontal","md","ellipsis-vertical"],[1,"user-stats-section"],["size","4",1,"user-stats-wrapper"],[1,"stat-value"],[1,"stat-name"],[1,"user-about-section"],[1,"details-section-title"],[1,"user-description"],["animation","bouncing","lines","4",3,"data"],[1,"user-friends-section"],[1,"heading-row"],[1,"heading-call-to-action",3,"routerLink"],[1,"friends-row"],["class","friend-item",4,"ngFor","ngForOf"],[1,"user-photos-section"],[1,"heading-call-to-action"],[1,"pictures-row"],["class","picture-item",4,"ngFor","ngForOf"],[1,"friend-item"],[1,"friend-picture",3,"src"],[1,"friend-name"],[1,"picture-item"],[1,"user-photo-image",3,"display","src"]],template:function(n,e){1&n&&(b.Ob(0,"ion-header",0),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-buttons",1),b.Jb(3,"ion-menu-button"),b.Nb(),b.Nb(),b.Nb(),b.Ob(4,"ion-content",2),b.Ob(5,"ion-row",3),b.Ob(6,"ion-col",4),b.Ob(7,"app-aspect-ratio",5),b.Jb(8,"app-image-shell",6),b.Nb(),b.Nb(),b.Ob(9,"ion-col",7),b.Ob(10,"ion-row",8),b.Ob(11,"ion-col",9),b.Ob(12,"h3",10),b.Jb(13,"app-text-shell",11),b.Nb(),b.Ob(14,"h5",12),b.Jb(15,"app-text-shell",11),b.Nb(),b.Nb(),b.Ob(16,"ion-col",13),b.Ob(17,"span",14),b.Jb(18,"app-text-shell",11),b.Nb(),b.Nb(),b.Nb(),b.Ob(19,"ion-row",15),b.Ob(20,"ion-col",16),b.Ob(21,"ion-button",17),b.vc(22),b.Zb(23,"translate"),b.Nb(),b.Ob(24,"ion-button",18),b.vc(25),b.Zb(26,"translate"),b.Nb(),b.Nb(),b.Ob(27,"ion-col",19),b.Ob(28,"ion-button",20),b.Wb("click",(function(){return e.openLanguageChooser()})),b.Jb(29,"ion-icon",21),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(30,"ion-row",22),b.Ob(31,"ion-col",23),b.Ob(32,"span",24),b.Jb(33,"app-text-shell",11),b.Nb(),b.Ob(34,"span",25),b.vc(35),b.Zb(36,"translate"),b.Nb(),b.Nb(),b.Ob(37,"ion-col",23),b.Ob(38,"span",24),b.Jb(39,"app-text-shell",11),b.Nb(),b.Ob(40,"span",25),b.vc(41),b.Zb(42,"translate"),b.Nb(),b.Nb(),b.Ob(43,"ion-col",23),b.Ob(44,"span",24),b.Jb(45,"app-text-shell",11),b.Nb(),b.Ob(46,"span",25),b.vc(47),b.Zb(48,"translate"),b.Nb(),b.Nb(),b.Nb(),b.Ob(49,"div",26),b.Ob(50,"h3",27),b.vc(51),b.Zb(52,"translate"),b.Nb(),b.Ob(53,"p",28),b.Jb(54,"app-text-shell",29),b.Nb(),b.Nb(),b.Ob(55,"div",30),b.Ob(56,"ion-row",31),b.Ob(57,"h3",27),b.vc(58),b.Zb(59,"translate"),b.Nb(),b.Ob(60,"a",32),b.vc(61),b.Zb(62,"translate"),b.Nb(),b.Nb(),b.Ob(63,"ion-row",33),b.tc(64,_,5,4,"ion-col",34),b.Nb(),b.Nb(),b.Ob(65,"div",35),b.Ob(66,"ion-row",31),b.Ob(67,"h3",27),b.vc(68),b.Zb(69,"translate"),b.Nb(),b.Ob(70,"a",36),b.vc(71),b.Zb(72,"translate"),b.Nb(),b.Nb(),b.Ob(73,"ion-row",37),b.tc(74,P,3,4,"ion-col",38),b.Nb(),b.Nb(),b.Nb()),2&n&&(b.yb(7),b.fc("ratio",b.hc(42,C)),b.yb(1),b.fc("src",null==e.profile?null:e.profile.userImage),b.yb(5),b.fc("data",null==e.profile?null:e.profile.name),b.yb(2),b.fc("data",null==e.profile?null:e.profile.job),b.yb(3),b.fc("data",null==e.profile?null:e.profile.membership),b.yb(4),b.wc(b.ac(23,22,"FOLLOW")),b.yb(3),b.wc(b.ac(26,24,"MESSAGE")),b.yb(8),b.fc("data",null==e.profile?null:e.profile.likes),b.yb(2),b.wc(b.ac(36,26,"LIKES")),b.yb(4),b.fc("data",null==e.profile?null:e.profile.followers),b.yb(2),b.wc(b.ac(42,28,"FOLLOWERS")),b.yb(4),b.fc("data",null==e.profile?null:e.profile.following),b.yb(2),b.wc(b.ac(48,30,"FOLLOWING")),b.yb(4),b.wc(b.ac(52,32,"ABOUT")),b.yb(3),b.fc("data",null==e.profile?null:e.profile.about),b.yb(4),b.wc(b.ac(59,34,"FRIENDS")),b.yb(2),b.fc("routerLink",b.hc(43,N)),b.yb(1),b.wc(b.ac(62,36,"SEE_ALL")),b.yb(3),b.fc("ngForOf",null==e.profile?null:e.profile.friends),b.yb(4),b.wc(b.ac(69,38,"PHOTOS")),b.yb(3),b.wc(b.ac(72,40,"SEE_ALL")),b.yb(3),b.fc("ngForOf",null==e.profile?null:e.profile.photos))},directives:[l.v,l.eb,l.i,l.G,l.q,l.N,l.p,O.a,v.a,w.a,l.h,l.w,s.j,l.mb,i.l],pipes:[h.c],styles:['[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-actions-padding:5px;--page-friends-gutter:calc(var(--page-margin) / 2);--page-pictures-gutter:calc(var(--page-margin) / 2)}.user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:var(--page-margin)}.user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:26%}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);display:flex;flex-direction:column;justify-content:space-between;flex-wrap:nowrap}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]{padding-bottom:var(--page-margin);flex-wrap:nowrap;justify-content:space-between}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:20px;letter-spacing:.5px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-title[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-medium);font-size:16px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .membership-col[_ngcontent-%COMP%]{padding-left:var(--page-margin);flex-grow:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-data-row[_ngcontent-%COMP%]   .user-membership[_ngcontent-%COMP%]{display:block;background-color:var(--ion-color-secondary);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:4px 8px;text-align:center;font-weight:500;font-size:14px}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:var(--page-actions-padding);justify-content:space-between;flex-wrap:nowrap;margin-left:calc(var(--page-actions-padding) * -1);margin-right:calc(var(--page-actions-padding) * -1)}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0;margin-left:calc(var(--page-actions-padding) * -1);margin-right:calc(var(--page-actions-padding) * -1);display:flex}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .main-actions[_ngcontent-%COMP%]   .call-to-action-btn[_ngcontent-%COMP%]{padding:0 var(--page-actions-padding);margin:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]{flex-grow:0;padding-top:0;padding-bottom:0}.user-details-section[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .actions-row[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%]{--padding-start:4px;--padding-end:4px;margin:0}.user-stats-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]{text-align:center}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{display:block;padding-bottom:5px;color:var(--ion-color-dark-shade);font-weight:500;font-size:18px}.user-stats-section[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .stat-name[_ngcontent-%COMP%]{font-size:16px;color:var(--ion-color-medium)}.details-section-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:var(--ion-color-dark-tint);margin:0 0 var(--page-margin)}.user-about-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-about-section[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade);text-align:justify;margin:var(--page-margin) 0;font-size:14px;line-height:1.3}.user-friends-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:var(--page-margin);border-bottom:1px solid var(--ion-color-light-shade)}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-friends-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);text-decoration:none;color:var(--ion-color-secondary)}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]{--ion-grid-columns:7;--ion-grid-column-padding:0px;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;margin-left:calc(var(--page-margin) * -1);margin-right:calc(var(--page-margin) * -1);-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:after, .user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 calc(var(--page-margin) - var(--page-friends-gutter))}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]{--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);padding:0 var(--page-friends-gutter)}.user-friends-section[_ngcontent-%COMP%]   .friends-row[_ngcontent-%COMP%]   .friend-item[_ngcontent-%COMP%]   .friend-name[_ngcontent-%COMP%]{display:block;text-align:center;margin:var(--page-margin) 0;font-size:14px}.user-photos-section[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);padding-bottom:calc(var(--page-margin) * 2)}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]{margin-bottom:var(--page-margin);justify-content:space-between;align-items:center}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .details-section-title[_ngcontent-%COMP%]{margin:0}.user-photos-section[_ngcontent-%COMP%]   .heading-row[_ngcontent-%COMP%]   .heading-call-to-action[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);text-decoration:none;color:var(--ion-color-secondary)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:4;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter) * -1)}.user-photos-section[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-item[_ngcontent-%COMP%]{--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);padding:0 var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2)}  .language-alert{--select-alert-color:#000;--select-alert-background:#fff;--select-alert-margin:16px;--select-alert-color:var(--ion-color-lightest);--select-alert-background:var(--ion-color-primary);--select-alert-margin:var(--app-fair-margin)}  .language-alert .alert-head{padding-top:calc((var(--select-alert-margin) / 4) * 3);padding-bottom:calc((var(--select-alert-margin) / 4) * 3);-webkit-padding-start:var(--select-alert-margin);padding-inline-start:var(--select-alert-margin);-webkit-padding-end:var(--select-alert-margin);padding-inline-end:var(--select-alert-margin)}  .language-alert .alert-title{color:var(--select-alert-color)}  .language-alert .alert-head,   .language-alert .alert-message{background-color:var(--select-alert-background)}  .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title{margin:0}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-title{font-size:18px;font-weight:400}  .language-alert .alert-wrapper.sc-ion-alert-md .alert-button{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}  .language-alert .alert-message{display:none}',"app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:20px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-title[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:70%}.user-title[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-membership[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--ion-color-secondary-rgb),0.4);--text-shell-line-height:14px;min-width:30px}.user-membership[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.stat-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:18px;max-width:50%;margin:0 auto}.stat-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset;margin:initial}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.friend-picture[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.friend-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}app-image-shell.user-photo-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}",".ios[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:30%}",".md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{max-width:28%}"]}),x),S=((M=function(){function n(e){t(this,n),this.userService=e}return r(n,[{key:"resolve",value:function(){var n=this.userService.getProfileDataSource();return this.userService.getProfileStore(n)}}]),n}()).\u0275fac=function(n){return new(n||M)(b.Sb(g.a))},M.\u0275prov=b.Eb({token:M,factory:M.\u0275fac}),M),j=a("j1ZV"),L=[{path:"",component:k,resolve:{data:S}}],E=((y=function n(){t(this,n)}).\u0275mod=b.Gb({type:y}),y.\u0275inj=b.Fb({factory:function(n){return new(n||y)},providers:[S,g.a,f],imports:[[l.fb,i.c,c.h,h.b,j.a,s.k.forChild(L)]]}),y)}}])}();