!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],i=!0,o=!1,r=void 0;try{for(var a,s=n[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);i=!0);}catch(c){o=!0,r=c}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return t}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);"Object"===i&&n.constructor&&(i=n.constructor.name);if("Map"===i||"Set"===i)return Array.from(n);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function o(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{SJx6:function(n,e,i){"use strict";i.r(e),i.d(e,"UserFriendsPageModule",(function(){return E}));var r=i("ofXK"),a=i("3Pt+"),s=i("tyNb"),c=i("TEn/"),l=i("j1ZV"),g=i("VGjC"),u=i("evT8"),f=i("7d5M"),d=i("eIep"),b=i("fXoL"),p=i("B7gC"),h=i("2gss"),m=i("zK/y");function O(n,e){1&n&&(b.Ob(0,"ion-button",25),b.vc(1,"Follow"),b.Nb())}function v(n,e){1&n&&(b.Ob(0,"ion-button",26),b.vc(1,"Following"),b.Nb())}var C=function(){return{w:1,h:1}};function y(n,e){if(1&n&&(b.Ob(0,"ion-row",13),b.Ob(1,"ion-col",14),b.Ob(2,"app-aspect-ratio",15),b.Jb(3,"app-image-shell",16),b.Nb(),b.Nb(),b.Ob(4,"ion-col",17),b.Ob(5,"div",18),b.Ob(6,"h3",19),b.Jb(7,"app-text-shell",20),b.Nb(),b.Ob(8,"h5",21),b.Jb(9,"app-text-shell",20),b.Nb(),b.Nb(),b.Nb(),b.Ob(10,"ion-col",22),b.tc(11,O,2,0,"ion-button",23),b.tc(12,v,2,0,"ion-button",24),b.Nb(),b.Nb()),2&n){var t=e.friend;b.yb(2),b.fc("ratio",b.hc(7,C)),b.yb(1),b.fc("src",t.image)("alt","friend"),b.yb(4),b.fc("data",t.name),b.yb(2),b.fc("data",t.job),b.yb(2),b.fc("ngIf",!t.following),b.yb(1),b.fc("ngIf",t.following)}}function M(n,e){1&n&&b.Kb(0)}var w=function(n){return{friend:n}};function P(n,e){if(1&n&&(b.Ob(0,"ion-item",29),b.tc(1,M,1,0,"ng-container",30),b.Nb()),2&n){var t=e.$implicit;b.Yb(2);var i=b.mc(17);b.yb(1),b.fc("ngTemplateOutlet",i)("ngTemplateOutletContext",b.ic(2,w,t))}}function _(n,e){if(1&n&&(b.Ob(0,"ion-list",27),b.tc(1,P,2,4,"ion-item",28),b.Nb()),2&n){var t=b.Yb();b.yb(1),b.fc("ngForOf",t.friendsList)}}function x(n,e){1&n&&(b.Mb(0),b.Ob(1,"h3",31),b.vc(2,"No Friends"),b.Nb(),b.Lb())}function k(n,e){1&n&&b.Kb(0)}function N(n,e){if(1&n&&(b.Ob(0,"ion-item",29),b.tc(1,k,1,0,"ng-container",30),b.Nb()),2&n){var t=e.$implicit;b.Yb(2);var i=b.mc(17);b.yb(1),b.fc("ngTemplateOutlet",i)("ngTemplateOutletContext",b.ic(2,w,t))}}function L(n,e){if(1&n&&(b.Ob(0,"ion-list",27),b.tc(1,N,2,4,"ion-item",28),b.Nb()),2&n){var t=b.Yb();b.yb(1),b.fc("ngForOf",t.followersList)}}function j(n,e){1&n&&(b.Mb(0),b.Ob(1,"h3",31),b.vc(2,"No Followers"),b.Nb(),b.Lb())}function S(n,e){1&n&&b.Kb(0)}function I(n,e){if(1&n&&(b.Ob(0,"ion-item",29),b.tc(1,S,1,0,"ng-container",30),b.Nb()),2&n){var t=e.$implicit;b.Yb(2);var i=b.mc(17);b.yb(1),b.fc("ngTemplateOutlet",i)("ngTemplateOutletContext",b.ic(2,w,t))}}function F(n,e){if(1&n&&(b.Ob(0,"ion-list",27),b.tc(1,I,2,4,"ion-item",28),b.Nb()),2&n){var t=b.Yb();b.yb(1),b.fc("ngForOf",t.followingList)}}function T(n,e){1&n&&(b.Mb(0),b.Ob(1,"h3",31),b.vc(2,"No Following"),b.Nb(),b.Lb())}var V,z,A,J=((z=function(){function n(e){t(this,n),this.route=e,this.segmentValue="friends",this.searchQuery="",this.showFilters=!1}return o(n,[{key:"ngOnInit",value:function(){var n=this;this.subscriptions=this.route.data.pipe(Object(d.a)((function(n){return u.a.extractData(n.data,f.a)}))).subscribe((function(e){n.data=e,n.friendsList=n.data.friends,n.followersList=n.data.followers,n.followingList=n.data.following}),(function(n){return console.log(n)}))}},{key:"segmentChanged",value:function(n){this.segmentValue=n.detail.value,this.searchList()}},{key:"searchList",value:function(){var n=this.searchQuery&&null!==this.searchQuery?this.searchQuery:"";"friends"===this.segmentValue?this.friendsList=this.filterList(this.data.friends,n):"followers"===this.segmentValue?this.followersList=this.filterList(this.data.followers,n):"following"===this.segmentValue&&(this.followingList=this.filterList(this.data.following,n))}},{key:"filterList",value:function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.data||!this.data.isShell)}}]),n}()).\u0275fac=function(n){return new(n||z)(b.Ib(s.a))},z.\u0275cmp=b.Cb({type:z,selectors:[["app-user-friends"]],hostVars:2,hostBindings:function(n,e){2&n&&b.Ab("is-shell",e.isShell)},decls:27,vars:10,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","app/user"],[1,"user-friends-content"],["value","friends",1,"user-friends-segment",3,"ionChange"],["value","friends"],["value","followers"],["value","following"],["animated","",1,"friends-searchbar",3,"ngModel","ngModelChange","ionChange"],["friendItem",""],[3,"hidden"],["class","friends-list",4,"ngIf"],[4,"ngIf"],[1,"user-details-section"],["size","2",1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src","alt"],[1,"user-data-wrapper"],[1,"user-info"],[1,"user-name"],[3,"data"],[1,"user-job"],[1,"user-actions-wrapper"],["class","user-action","expand","block","size","small","color","primary",4,"ngIf"],["class","user-action","expand","block","size","small","color","light",4,"ngIf"],["expand","block","size","small","color","primary",1,"user-action"],["expand","block","size","small","color","light",1,"user-action"],[1,"friends-list"],["class","friend-item",4,"ngFor","ngForOf"],[1,"friend-item"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"empty-list-message"]],template:function(n,e){1&n&&(b.Ob(0,"ion-header",0),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-buttons",1),b.Jb(3,"ion-back-button",2),b.Nb(),b.Nb(),b.Nb(),b.Ob(4,"ion-content",3),b.Ob(5,"ion-segment",4),b.Wb("ionChange",(function(n){return e.segmentChanged(n)})),b.Ob(6,"ion-segment-button",5),b.Ob(7,"ion-label"),b.vc(8,"Friends"),b.Nb(),b.Nb(),b.Ob(9,"ion-segment-button",6),b.Ob(10,"ion-label"),b.vc(11,"Followers"),b.Nb(),b.Nb(),b.Ob(12,"ion-segment-button",7),b.Ob(13,"ion-label"),b.vc(14,"Following"),b.Nb(),b.Nb(),b.Nb(),b.Ob(15,"ion-searchbar",8),b.Wb("ngModelChange",(function(n){return e.searchQuery=n}))("ionChange",(function(){return e.searchList()})),b.Nb(),b.tc(16,y,13,8,"ng-template",null,9,b.uc),b.Ob(18,"section",10),b.tc(19,_,2,1,"ion-list",11),b.tc(20,x,3,0,"ng-container",12),b.Nb(),b.Ob(21,"section",10),b.tc(22,L,2,1,"ion-list",11),b.tc(23,j,3,0,"ng-container",12),b.Nb(),b.Ob(24,"section",10),b.tc(25,F,2,1,"ion-list",11),b.tc(26,T,3,0,"ng-container",12),b.Nb(),b.Nb()),2&n&&(b.yb(15),b.fc("ngModel",e.searchQuery),b.yb(3),b.fc("hidden","friends"!==e.segmentValue),b.yb(1),b.fc("ngIf",e.friendsList.length>0),b.yb(1),b.fc("ngIf",e.friendsList.length<=0),b.yb(1),b.fc("hidden","followers"!==e.segmentValue),b.yb(1),b.fc("ngIf",e.followersList.length>0),b.yb(1),b.fc("ngIf",e.followersList.length<=0),b.yb(1),b.fc("hidden","following"!==e.segmentValue),b.yb(1),b.fc("ngIf",e.followingList.length>0),b.yb(1),b.fc("ngIf",e.followingList.length<=0))},directives:[c.p,c.Y,c.h,c.d,c.e,c.k,c.J,c.hb,c.K,c.w,c.I,c.ib,a.l,a.n,r.m,c.H,c.j,p.a,h.a,m.a,c.g,c.x,r.l,c.t,r.o],styles:["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}.user-friends-segment[_ngcontent-%COMP%]{--background:var(--page-segment-background);position:-webkit-sticky;position:sticky;top:0;z-index:8}.user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--padding-end:var(--page-margin);--padding-start:var(--page-margin);--color:rgba(var(--ion-color-dark-rgb),0.4);--indicator-color:var(--ion-color-dark);text-transform:capitalize;min-height:calc((var(--page-margin) * 3) - var(--page-segment-indicator-height))}ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding:calc(var(--page-margin) * 1.5) var(--page-margin)}.friends-list[_ngcontent-%COMP%]{padding:0 var(--page-margin);margin-bottom:calc(var(--page-margin) * 3)}.empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}ion-item.friend-item[_ngcontent-%COMP%]{--inner-padding-start:0px;--inner-padding-end:0px;--padding-start:0px;--padding-end:0px;--padding-bottom:var(--page-margin);--inner-padding-bottom:var(--page-margin)}ion-item.friend-item[_ngcontent-%COMP%]:last-child{--border-style:none;--padding-bottom:0px;--inner-padding-bottom:0px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;align-items:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);padding-right:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 4px;font-size:16px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-job[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{font-size:14px;max-width:10ex;max-width:10ch}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]   .user-action[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-job[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:70%}.user-job[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}",".ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]{--background:var(--page-segment-background);padding:var(--page-margin)}.ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked:var(--ion-color-light)}.ios[_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding-top:0}",".md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{max-width:12ex;max-width:12ch}.md[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked:var(--ion-color-dark)}"]}),z),D=((V=function(){function n(e){t(this,n),this.userService=e}return o(n,[{key:"resolve",value:function(){var n=this.userService.getFriendsDataSource();return this.userService.getFriendsStore(n)}}]),n}()).\u0275fac=function(n){return new(n||V)(b.Sb(g.a))},V.\u0275prov=b.Eb({token:V,factory:V.\u0275fac}),V),Y=[{path:"",component:J,resolve:{data:D}}],E=((A=function n(){t(this,n)}).\u0275mod=b.Gb({type:A}),A.\u0275inj=b.Fb({factory:function(n){return new(n||A)},providers:[D,g.a],imports:[[c.Z,r.c,a.h,l.a,s.k.forChild(Y)]]}),A)},evT8:function(n,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("f/Ol"),a=i("LRne"),s=function(){function n(){t(this,n)}return o(n,null,[{key:"extractData",value:function(n,e){return n instanceof r.a?n.state:n instanceof e?Object(a.a)(n):void 0}}]),n}()},"f/Ol":function(e,i,r){"use strict";r.d(i,"b",(function(){return d})),r.d(i,"a",(function(){return b}));var a=r("jtHE"),s=r("LRne"),c=r("itXk"),l=r("3E0/"),g=r("lJxs"),u=r("JX91"),f=r("AytR"),d=function n(){t(this,n),this.isShell=!1},b=function(){function e(n){t(this,e),this.shellModel=n,this.networkDelay=f.a.appShellConfig&&f.a.appShellConfig.networkDelay?f.a.appShellConfig.networkDelay:0,this.timeline=new a.a(1)}return o(e,[{key:"load",value:function(n,t){var i=this,o="number"==typeof t?t:this.networkDelay;(0===o?n:e.AppendShell(n,this.shellModel,o)).subscribe((function(n){i.timeline.next(n)}))}},{key:"state",get:function(){return this.timeline.asObservable()}}],[{key:"AppendShell",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,o=Object(s.a)(!0).pipe(Object(l.a)(i));return Object(c.a)([o,e]).pipe(Object(g.a)((function(e){var t=n(e,2),i=(t[0],t[1]);return Object.assign(i,{isShell:!1})})),Object(u.a)(Object.assign(t,{isShell:!0})))}}]),e}()}}])}();