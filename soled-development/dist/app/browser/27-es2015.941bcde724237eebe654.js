(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"HbU+":function(t,n,e){"use strict";e.r(n),e.d(n,"TravelListingPageModule",(function(){return y}));var i=e("ofXK"),o=e("tyNb"),a=e("TEn/"),r=e("j1ZV"),c=e("v0Fq"),s=e("evT8"),g=e("8zxt"),l=e("eIep"),p=e("fXoL"),m=e("2gss"),b=e("B7gC"),d=e("zK/y");const O=function(t){return["/app/categories/travel/",t]},u=function(){return{w:3,h:2}},f=function(){return{w:1,h:1}};function h(t,n){if(1&t&&(p.Ob(0,"div",5),p.Ob(1,"ion-row",6),p.Ob(2,"ion-col",7),p.Ob(3,"a",8),p.Ob(4,"app-image-shell",9),p.Ob(5,"app-aspect-ratio",10),p.Ob(6,"div",11),p.Ob(7,"div",12),p.Ob(8,"app-aspect-ratio",10),p.Jb(9,"app-image-shell",13),p.Nb(),p.Nb(),p.Ob(10,"div",14),p.Ob(11,"span"),p.vc(12,"Explore"),p.Nb(),p.Jb(13,"ion-icon",15),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(14,"ion-row",16),p.Ob(15,"ion-col",17),p.Ob(16,"h3",18),p.Ob(17,"a",19),p.Jb(18,"app-text-shell",20),p.Nb(),p.Nb(),p.Ob(19,"p",21),p.Jb(20,"app-text-shell",22),p.Nb(),p.Ob(21,"p",23),p.Jb(22,"app-text-shell",20),p.Nb(),p.Nb(),p.Nb(),p.Ob(23,"ion-row",24),p.Ob(24,"ion-col",25),p.Ob(25,"span",26),p.Jb(26,"app-text-shell",27),p.Nb(),p.Jb(27,"ion-icon",28),p.Nb(),p.Ob(28,"ion-col",29),p.Ob(29,"span",30),p.Jb(30,"app-text-shell",27),p.Nb(),p.Jb(31,"ion-icon",31),p.Nb(),p.Nb(),p.Nb()),2&t){const t=n.$implicit;p.yb(3),p.fc("routerLink",p.ic(13,O,t.slug)),p.yb(1),p.fc("display","cover")("src",t.image)("routerLink",p.ic(15,O,t.slug)),p.yb(1),p.fc("ratio",p.hc(17,u)),p.yb(3),p.fc("ratio",p.hc(18,f)),p.yb(1),p.fc("src",t.icon),p.yb(8),p.fc("routerLink",p.ic(19,O,t.slug)),p.yb(1),p.fc("data",null!=t&&t.name&&null!=t&&t.category?t.name+" - "+t.category:t.name),p.yb(2),p.fc("data",t.description),p.yb(2),p.fc("data",t.address),p.yb(4),p.fc("data",t.rating),p.yb(4),p.fc("data",t.reviewsCount)}}function C(t,n){if(1&t&&(p.Mb(0),p.tc(1,h,32,21,"div",4),p.Lb()),2&t){const t=p.Yb();p.yb(1),p.fc("ngForOf",null==t.listing?null:t.listing.items)}}let v=(()=>{class t{constructor(t){this.route=t}get isShell(){return!(!this.listing||!this.listing.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe(Object(l.a)(t=>s.a.extractData(t.data.dataStore,g.a))).subscribe(t=>{this.listing=t},t=>console.log(t))}ionViewWillLeave(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(p.Ib(o.a))},t.\u0275cmp=p.Cb({type:t,selectors:[["app-travel-listing"]],hostVars:2,hostBindings:function(t,n){2&t&&p.Ab("is-shell",n.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[4,"ngIf"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"image-row"],["size","12"],[3,"routerLink"],[1,"add-overlay","item-image",3,"display","src","routerLink"],[3,"ratio"],[1,"content-inside-item-image"],[1,"item-icon"],[1,"icon-image",3,"src"],[1,"item-cta"],["name","arrow-forward",1,"cta-icon"],[1,"info-row"],[1,"main-info-col"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],["animation","bouncing",3,"data"],[1,"item-description"],["animation","bouncing","lines","3",3,"data"],[1,"item-address"],[1,"stats-row"],["size","2",1,"item-rating"],[1,"rating-value"],[3,"data"],["src","./assets/custom-icons/travel/star.svg",1,"stats-icon"],["size","2",1,"item-reviews"],[1,"reviews-count"],["src","./assets/custom-icons/travel/comments.svg",1,"stats-icon"]],template:function(t,n){1&t&&(p.Ob(0,"ion-header"),p.Ob(1,"ion-toolbar",0),p.Ob(2,"ion-buttons",1),p.Jb(3,"ion-back-button",2),p.Nb(),p.Ob(4,"ion-title"),p.vc(5,"Travel Listing"),p.Nb(),p.Nb(),p.Nb(),p.Ob(6,"ion-content"),p.tc(7,C,2,1,"ng-container",3),p.Nb()),2&t&&(p.yb(7),p.fc("ngIf",null==n.listing?null:n.listing.items))},directives:[a.v,a.eb,a.i,a.e,a.f,a.cb,a.q,i.m,i.l,a.N,a.p,o.j,a.mb,m.a,o.h,b.a,a.w,d.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-color:#00afff}.listing-item[_ngcontent-%COMP%]{padding:0 0 var(--page-margin);background-color:var(--page-background);border-bottom:calc(var(--page-margin) / 2) solid var(--page-color)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{cursor:pointer}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]:focus{outline:none}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]{padding:0 12%;height:100%;display:flex;justify-content:center;flex-direction:column}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{width:54px;align-self:center;margin-bottom:24px}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%]{margin:0 auto;padding:calc(var(--page-margin) / 2) calc(var(--page-margin));text-transform:uppercase;font-size:20px;font-weight:700;text-align:center;color:var(--ion-color-light);display:flex;align-items:center;background-color:var(--page-color);border-radius:var(--app-fair-radius)}.listing-item[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .content-inside-item-image[_ngcontent-%COMP%]   .item-cta[_ngcontent-%COMP%]   .cta-icon[_ngcontent-%COMP%]{font-size:26px;margin-left:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);padding-bottom:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .main-info-col[_ngcontent-%COMP%]{padding-right:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0 0 var(--page-margin);text-transform:capitalize;font-size:16px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{color:var(--ion-color-dark);display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%]{margin:0 0 calc(var(--page-margin) / 2);color:var(--ion-color-dark-shade);font-size:14px;line-height:1.3}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark-tint);font-size:12px}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:0 var(--page-margin);justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%]{font-size:24px}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]{display:inline-flex;text-align:center;justify-content:flex-end;margin-right:10px}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%]{font-size:16px;margin:auto}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%]{display:inline-flex;text-align:center;justify-content:flex-end}.listing-item[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .item-reviews[_ngcontent-%COMP%]   .reviews-count[_ngcontent-%COMP%]{font-size:16px;margin:auto}","[_nghost-%COMP%]{--shell-color:#00afff;--shell-color-rgb:0,175,255}app-image-shell.item-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-overlay-background:rgba(var(--ion-color-dark-rgb),.60)}app-image-shell.icon-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.15)}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:70%}.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:12px;max-width:60%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.rating-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%], .reviews-count[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;min-width:30px}"]}),t})();var M=e("LRne"),P=e("diig");let _=(()=>{class t{constructor(t){this.travelService=t}resolve(){const t=this.travelService.getListingDataSource(),n=this.travelService.getListingStore(t),e=new P.a;return e.title="Travel Listing Page",e.description="Travel Description",e.keywords="travel, keywords, ionic, angular",{dataStore:n,seo:Object(M.a)(e)}}}return t.\u0275fac=function(n){return new(n||t)(p.Sb(c.a))},t.\u0275prov=p.Eb({token:t,factory:t.\u0275fac}),t})(),w=(()=>{class t{constructor(t){this.travelService=t}resolve(){return this.travelService.getListingDataSource()}}return t.\u0275fac=function(n){return new(n||t)(p.Sb(c.a))},t.\u0275prov=p.Eb({token:t,factory:t.\u0275fac}),t})();const x=[{path:"",component:v,resolve:{data:_}}];let y=(()=>{class t{}return t.\u0275mod=p.Gb({type:t}),t.\u0275inj=p.Fb({factory:function(n){return new(n||t)},providers:[_,w,c.a],imports:[[i.c,a.fb,o.k.forChild(x),r.a]]}),t})()},evT8:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("f/Ol"),o=e("LRne");class a{static extractData(t,n){return t instanceof i.a?t.state:t instanceof n?Object(o.a)(t):void 0}}},"f/Ol":function(t,n,e){"use strict";e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return p}));var i=e("jtHE"),o=e("LRne"),a=e("itXk"),r=e("3E0/"),c=e("lJxs"),s=e("JX91"),g=e("AytR");class l{constructor(){this.isShell=!1}}class p{constructor(t){this.shellModel=t,this.networkDelay=g.a.appShellConfig&&g.a.appShellConfig.networkDelay?g.a.appShellConfig.networkDelay:0,this.timeline=new i.a(1)}static AppendShell(t,n,e=400){const i=Object(o.a)(!0).pipe(Object(r.a)(e));return Object(a.a)([i,t]).pipe(Object(c.a)(([t,n])=>Object.assign(n,{isShell:!1})),Object(s.a)(Object.assign(n,{isShell:!0})))}load(t,n){const e="number"==typeof n?n:this.networkDelay;let i;i=0===e?t:p.AppendShell(t,this.shellModel,e),i.subscribe(t=>{this.timeline.next(t)})}get state(){return this.timeline.asObservable()}}}}]);