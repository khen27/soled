(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{SJx6:function(n,t,e){"use strict";e.r(t),e.d(t,"UserFriendsPageModule",(function(){return T}));var i=e("ofXK"),o=e("3Pt+"),s=e("tyNb"),r=e("TEn/"),a=e("j1ZV"),c=e("VGjC"),l=e("evT8"),g=e("7d5M"),d=e("eIep"),b=e("fXoL"),u=e("B7gC"),f=e("2gss"),p=e("zK/y");function h(n,t){1&n&&(b.Ob(0,"ion-button",25),b.vc(1,"Follow"),b.Nb())}function m(n,t){1&n&&(b.Ob(0,"ion-button",26),b.vc(1,"Following"),b.Nb())}const O=function(){return{w:1,h:1}};function C(n,t){if(1&n&&(b.Ob(0,"ion-row",13),b.Ob(1,"ion-col",14),b.Ob(2,"app-aspect-ratio",15),b.Jb(3,"app-image-shell",16),b.Nb(),b.Nb(),b.Ob(4,"ion-col",17),b.Ob(5,"div",18),b.Ob(6,"h3",19),b.Jb(7,"app-text-shell",20),b.Nb(),b.Ob(8,"h5",21),b.Jb(9,"app-text-shell",20),b.Nb(),b.Nb(),b.Nb(),b.Ob(10,"ion-col",22),b.tc(11,h,2,0,"ion-button",23),b.tc(12,m,2,0,"ion-button",24),b.Nb(),b.Nb()),2&n){const n=t.friend;b.yb(2),b.fc("ratio",b.hc(7,O)),b.yb(1),b.fc("src",n.image)("alt","friend"),b.yb(4),b.fc("data",n.name),b.yb(2),b.fc("data",n.job),b.yb(2),b.fc("ngIf",!n.following),b.yb(1),b.fc("ngIf",n.following)}}function M(n,t){1&n&&b.Kb(0)}const P=function(n){return{friend:n}};function w(n,t){if(1&n&&(b.Ob(0,"ion-item",29),b.tc(1,M,1,0,"ng-container",30),b.Nb()),2&n){const n=t.$implicit;b.Yb(2);const e=b.mc(17);b.yb(1),b.fc("ngTemplateOutlet",e)("ngTemplateOutletContext",b.ic(2,P,n))}}function _(n,t){if(1&n&&(b.Ob(0,"ion-list",27),b.tc(1,w,2,4,"ion-item",28),b.Nb()),2&n){const n=b.Yb();b.yb(1),b.fc("ngForOf",n.friendsList)}}function v(n,t){1&n&&(b.Mb(0),b.Ob(1,"h3",31),b.vc(2,"No Friends"),b.Nb(),b.Lb())}function x(n,t){1&n&&b.Kb(0)}function y(n,t){if(1&n&&(b.Ob(0,"ion-item",29),b.tc(1,x,1,0,"ng-container",30),b.Nb()),2&n){const n=t.$implicit;b.Yb(2);const e=b.mc(17);b.yb(1),b.fc("ngTemplateOutlet",e)("ngTemplateOutletContext",b.ic(2,P,n))}}function N(n,t){if(1&n&&(b.Ob(0,"ion-list",27),b.tc(1,y,2,4,"ion-item",28),b.Nb()),2&n){const n=b.Yb();b.yb(1),b.fc("ngForOf",n.followersList)}}function L(n,t){1&n&&(b.Mb(0),b.Ob(1,"h3",31),b.vc(2,"No Followers"),b.Nb(),b.Lb())}function k(n,t){1&n&&b.Kb(0)}function j(n,t){if(1&n&&(b.Ob(0,"ion-item",29),b.tc(1,k,1,0,"ng-container",30),b.Nb()),2&n){const n=t.$implicit;b.Yb(2);const e=b.mc(17);b.yb(1),b.fc("ngTemplateOutlet",e)("ngTemplateOutletContext",b.ic(2,P,n))}}function F(n,t){if(1&n&&(b.Ob(0,"ion-list",27),b.tc(1,j,2,4,"ion-item",28),b.Nb()),2&n){const n=b.Yb();b.yb(1),b.fc("ngForOf",n.followingList)}}function S(n,t){1&n&&(b.Mb(0),b.Ob(1,"h3",31),b.vc(2,"No Following"),b.Nb(),b.Lb())}let I=(()=>{class n{constructor(n){this.route=n,this.segmentValue="friends",this.searchQuery="",this.showFilters=!1}get isShell(){return!(!this.data||!this.data.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe(Object(d.a)(n=>l.a.extractData(n.data,g.a))).subscribe(n=>{this.data=n,this.friendsList=this.data.friends,this.followersList=this.data.followers,this.followingList=this.data.following},n=>console.log(n))}segmentChanged(n){this.segmentValue=n.detail.value,this.searchList()}searchList(){const n=this.searchQuery&&null!==this.searchQuery?this.searchQuery:"";"friends"===this.segmentValue?this.friendsList=this.filterList(this.data.friends,n):"followers"===this.segmentValue?this.followersList=this.filterList(this.data.followers,n):"following"===this.segmentValue&&(this.followingList=this.filterList(this.data.following,n))}filterList(n,t){return n.filter(n=>n.name.toLowerCase().includes(t.toLowerCase()))}ionViewWillLeave(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(b.Ib(s.a))},n.\u0275cmp=b.Cb({type:n,selectors:[["app-user-friends"]],hostVars:2,hostBindings:function(n,t){2&n&&b.Ab("is-shell",t.isShell)},decls:27,vars:10,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","app/user"],[1,"user-friends-content"],["value","friends",1,"user-friends-segment",3,"ionChange"],["value","friends"],["value","followers"],["value","following"],["animated","",1,"friends-searchbar",3,"ngModel","ngModelChange","ionChange"],["friendItem",""],[3,"hidden"],["class","friends-list",4,"ngIf"],[4,"ngIf"],[1,"user-details-section"],["size","2",1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src","alt"],[1,"user-data-wrapper"],[1,"user-info"],[1,"user-name"],[3,"data"],[1,"user-job"],[1,"user-actions-wrapper"],["class","user-action","expand","block","size","small","color","primary",4,"ngIf"],["class","user-action","expand","block","size","small","color","light",4,"ngIf"],["expand","block","size","small","color","primary",1,"user-action"],["expand","block","size","small","color","light",1,"user-action"],[1,"friends-list"],["class","friend-item",4,"ngFor","ngForOf"],[1,"friend-item"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"empty-list-message"]],template:function(n,t){1&n&&(b.Ob(0,"ion-header",0),b.Ob(1,"ion-toolbar"),b.Ob(2,"ion-buttons",1),b.Jb(3,"ion-back-button",2),b.Nb(),b.Nb(),b.Nb(),b.Ob(4,"ion-content",3),b.Ob(5,"ion-segment",4),b.Wb("ionChange",(function(n){return t.segmentChanged(n)})),b.Ob(6,"ion-segment-button",5),b.Ob(7,"ion-label"),b.vc(8,"Friends"),b.Nb(),b.Nb(),b.Ob(9,"ion-segment-button",6),b.Ob(10,"ion-label"),b.vc(11,"Followers"),b.Nb(),b.Nb(),b.Ob(12,"ion-segment-button",7),b.Ob(13,"ion-label"),b.vc(14,"Following"),b.Nb(),b.Nb(),b.Nb(),b.Ob(15,"ion-searchbar",8),b.Wb("ngModelChange",(function(n){return t.searchQuery=n}))("ionChange",(function(){return t.searchList()})),b.Nb(),b.tc(16,C,13,8,"ng-template",null,9,b.uc),b.Ob(18,"section",10),b.tc(19,_,2,1,"ion-list",11),b.tc(20,v,3,0,"ng-container",12),b.Nb(),b.Ob(21,"section",10),b.tc(22,N,2,1,"ion-list",11),b.tc(23,L,3,0,"ng-container",12),b.Nb(),b.Ob(24,"section",10),b.tc(25,F,2,1,"ion-list",11),b.tc(26,S,3,0,"ng-container",12),b.Nb(),b.Nb()),2&n&&(b.yb(15),b.fc("ngModel",t.searchQuery),b.yb(3),b.fc("hidden","friends"!==t.segmentValue),b.yb(1),b.fc("ngIf",t.friendsList.length>0),b.yb(1),b.fc("ngIf",t.friendsList.length<=0),b.yb(1),b.fc("hidden","followers"!==t.segmentValue),b.yb(1),b.fc("ngIf",t.followersList.length>0),b.yb(1),b.fc("ngIf",t.followersList.length<=0),b.yb(1),b.fc("hidden","following"!==t.segmentValue),b.yb(1),b.fc("ngIf",t.followingList.length>0),b.yb(1),b.fc("ngIf",t.followingList.length<=0))},directives:[r.u,r.cb,r.i,r.e,r.f,r.p,r.N,r.lb,r.O,r.A,r.M,r.mb,o.l,o.n,i.m,r.L,r.o,u.a,f.a,p.a,r.h,r.B,i.l,r.x,i.o],styles:["[_nghost-%COMP%]{--page-margin:var(--app-narrow-margin);--page-border-radius:var(--app-fair-radius);--page-segment-background:var(--app-background);--page-segment-indicator-height:2px}.user-friends-segment[_ngcontent-%COMP%]{--background:var(--page-segment-background);position:-webkit-sticky;position:sticky;top:0;z-index:8}.user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--padding-end:var(--page-margin);--padding-start:var(--page-margin);--color:rgba(var(--ion-color-dark-rgb),0.4);--indicator-color:var(--ion-color-dark);text-transform:capitalize;min-height:calc((var(--page-margin) * 3) - var(--page-segment-indicator-height))}ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding:calc(var(--page-margin) * 1.5) var(--page-margin)}.friends-list[_ngcontent-%COMP%]{padding:0 var(--page-margin);margin-bottom:calc(var(--page-margin) * 3)}.empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}ion-item.friend-item[_ngcontent-%COMP%]{--inner-padding-start:0px;--inner-padding-end:0px;--padding-start:0px;--padding-end:0px;--padding-bottom:var(--page-margin);--inner-padding-bottom:var(--page-margin)}ion-item.friend-item[_ngcontent-%COMP%]:last-child{--border-style:none;--padding-bottom:0px;--inner-padding-bottom:0px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%;align-items:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{padding-left:var(--page-margin);padding-right:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0 0 4px;font-size:16px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-job[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{font-size:14px;max-width:10ex;max-width:10ch}ion-item.friend-item[_ngcontent-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]   .user-action[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--page-border-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:50%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.user-job[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:70%}.user-job[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}",".ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]{--background:var(--page-segment-background);padding:var(--page-margin)}.ios[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked:var(--ion-color-light)}.ios[_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   ion-searchbar.friends-searchbar[_ngcontent-%COMP%]{padding-top:0}",".md[_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-details-section[_ngcontent-%COMP%]   .user-actions-wrapper[_ngcontent-%COMP%]{max-width:12ex;max-width:12ch}.md[_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .user-friends-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{--color-checked:var(--ion-color-dark)}"]}),n})(),V=(()=>{class n{constructor(n){this.userService=n}resolve(){const n=this.userService.getFriendsDataSource();return this.userService.getFriendsStore(n)}}return n.\u0275fac=function(t){return new(t||n)(b.Sb(c.a))},n.\u0275prov=b.Eb({token:n,factory:n.\u0275fac}),n})();const z=[{path:"",component:I,resolve:{data:V}}];let T=(()=>{class n{}return n.\u0275mod=b.Gb({type:n}),n.\u0275inj=b.Fb({factory:function(t){return new(t||n)},providers:[V,c.a],imports:[[r.db,i.c,o.h,a.a,s.k.forChild(z)]]}),n})()},evT8:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var i=e("f/Ol"),o=e("LRne");class s{static extractData(n,t){return n instanceof i.a?n.state:n instanceof t?Object(o.a)(n):void 0}}},"f/Ol":function(n,t,e){"use strict";e.d(t,"b",(function(){return g})),e.d(t,"a",(function(){return d}));var i=e("jtHE"),o=e("LRne"),s=e("itXk"),r=e("3E0/"),a=e("lJxs"),c=e("JX91"),l=e("AytR");class g{constructor(){this.isShell=!1}}class d{constructor(n){this.shellModel=n,this.networkDelay=l.a.appShellConfig&&l.a.appShellConfig.networkDelay?l.a.appShellConfig.networkDelay:0,this.timeline=new i.a(1)}static AppendShell(n,t,e=400){const i=Object(o.a)(!0).pipe(Object(r.a)(e));return Object(s.a)([i,n]).pipe(Object(a.a)(([n,t])=>Object.assign(t,{isShell:!1})),Object(c.a)(Object.assign(t,{isShell:!0})))}load(n,t){const e="number"==typeof t?t:this.networkDelay;let i;i=0===e?n:d.AppendShell(n,this.shellModel,e),i.subscribe(n=>{this.timeline.next(n)})}get state(){return this.timeline.asObservable()}}}}]);