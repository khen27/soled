(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"6i+d":function(t,n,e){"use strict";e.r(n),e.d(n,"FoodListingPageModule",(function(){return J}));var o=e("ofXK"),i=e("tyNb"),r=e("TEn/"),c=e("j1ZV"),a=e("iTUp"),g=e("MrCo"),l=e("evT8"),s=e("WAd3"),p=e("eIep"),b=e("fXoL"),d=e("2gss"),m=e("B7gC"),O=e("zK/y"),u=e("+1ss");function C(t,n){if(1&t&&(b.Ob(0,"ion-col",29),b.Ob(1,"span",30),b.Jb(2,"app-text-shell",18),b.Nb(),b.Nb()),2&t){const t=n.$implicit;b.yb(2),b.fc("data",t)}}function M(t,n){1&t&&(b.Ob(0,"span",31),b.vc(1,"$"),b.Nb())}function h(t,n){1&t&&(b.Ob(0,"span",32),b.vc(1,"$"),b.Nb())}const P=function(t){return["/app/categories/food/",t]};function f(t,n){if(1&t&&(b.Ob(0,"a",36),b.Ob(1,"span",37),b.vc(2),b.Nb(),b.Nb()),2&t){const t=b.Yb(2).$implicit;b.fc("routerLink",b.ic(2,P,t.slug)),b.yb(2),b.wc(t.pictures.length-5)}}const _=function(){return{w:1,h:1}};function v(t,n){if(1&t&&(b.Ob(0,"ion-col",33),b.Ob(1,"app-aspect-ratio",10),b.Jb(2,"app-image-shell",34),b.Nb(),b.tc(3,f,3,4,"a",35),b.Nb()),2&t){const t=n.$implicit,e=n.index,o=b.Yb().$implicit;b.yb(1),b.fc("ratio",b.hc(4,_)),b.yb(1),b.fc("src",t)("alt","food image"),b.yb(1),b.fc("ngIf",4==e&&o.pictures.length>5)}}const w=function(){return{w:35,h:15}},x=function(){return{w:20,h:7}},y=function(){return[]};function k(t,n){if(1&t&&(b.Ob(0,"div",6),b.Ob(1,"div",7),b.Ob(2,"a",8),b.Ob(3,"app-image-shell",9),b.Ob(4,"app-aspect-ratio",10),b.Ob(5,"div",11),b.Ob(6,"app-aspect-ratio",10),b.Jb(7,"app-image-shell",12),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(8,"ion-row",13),b.Ob(9,"ion-col",14),b.Ob(10,"ion-row",15),b.Ob(11,"h3",16),b.Ob(12,"a",17),b.Jb(13,"app-text-shell",18),b.Nb(),b.Nb(),b.Ob(14,"p",19),b.Jb(15,"app-text-shell",18),b.Nb(),b.Ob(16,"ion-row",20),b.tc(17,C,3,1,"ion-col",21),b.Nb(),b.Nb(),b.Nb(),b.Ob(18,"ion-col",22),b.Ob(19,"span",23),b.Zb(20,"floor"),b.Jb(21,"app-text-shell",18),b.Nb(),b.Ob(22,"div",24),b.tc(23,M,2,0,"span",25),b.tc(24,h,2,0,"span",26),b.Nb(),b.Nb(),b.Nb(),b.Ob(25,"ion-row",27),b.tc(26,v,4,5,"ion-col",28),b.Nb(),b.Nb()),2&t){const t=n.$implicit;b.yb(2),b.fc("routerLink",b.ic(17,P,t.slug)),b.yb(1),b.fc("display","cover")("src",t.image),b.yb(1),b.fc("ratio",b.hc(19,w)),b.yb(2),b.fc("ratio",b.hc(20,x)),b.yb(1),b.fc("src",t.icon),b.yb(5),b.fc("routerLink",b.ic(21,P,t.slug)),b.yb(1),b.fc("data",t.name),b.yb(2),b.fc("data",t.address),b.yb(2),b.fc("ngForOf",t.tags),b.yb(2),b.zb("ratingBase",b.ac(20,15,t.rating)),b.yb(2),b.fc("data",t.rating),b.yb(2),b.fc("ngForOf",b.hc(23,y).constructor(t.priceRange)),b.yb(1),b.fc("ngForOf",b.hc(24,y).constructor(5-(t.priceRange||1))),b.yb(2),b.fc("ngForOf",t.pictures.slice(0,5))}}function N(t,n){if(1&t&&(b.Mb(0),b.tc(1,k,27,25,"div",5),b.Lb()),2&t){const t=b.Yb();b.yb(1),b.fc("ngForOf",null==t.listing?null:t.listing.items)}}let F=(()=>{class t{constructor(t){this.route=t}get isShell(){return!(!this.listing||!this.listing.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe(Object(p.a)(t=>l.a.extractData(t.data,s.a))).subscribe(t=>{this.listing=t},t=>console.log(t))}ionViewWillLeave(){this.subscriptions.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(b.Ib(i.a))},t.\u0275cmp=b.Cb({type:t,selectors:[["app-food-listing"]],hostVars:2,hostBindings:function(t,n){2&t&&b.Ab("is-shell",n.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"food-listing-content"],[4,"ngIf"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"cover-wrapper"],[1,"cover-anchor",3,"routerLink"],["animation","spinner",1,"cover-image","add-overlay",3,"display","src"],[3,"ratio"],[1,"cover-icon-wrapper"],[1,"item-icon",3,"src"],[1,"info-row"],[1,"description-col"],[1,"description-wrapper"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],[3,"data"],[1,"item-address"],[1,"item-tags"],["class","tag-wrapper",4,"ngFor","ngForOf"],[1,"stats-col"],[1,"item-rating"],[1,"item-price-range"],["class","price",4,"ngFor","ngForOf"],["class","no-price",4,"ngFor","ngForOf"],[1,"pictures-row"],["class","picture-wrapper",4,"ngFor","ngForOf"],[1,"tag-wrapper"],[1,"item-tag"],[1,"price"],[1,"no-price"],[1,"picture-wrapper"],[1,"picture-image",3,"src","alt"],["class","has-more-pictures",3,"routerLink",4,"ngIf"],[1,"has-more-pictures",3,"routerLink"],[1,"pictures-count"]],template:function(t,n){1&t&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Jb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.vc(5,"Food Listing"),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",3),b.tc(7,N,2,1,"ng-container",4),b.Nb()),2&t&&(b.yb(7),b.fc("ngIf",null==n.listing?null:n.listing.items))},directives:[r.v,r.eb,r.i,r.e,r.f,r.cb,r.q,o.m,o.l,i.j,r.mb,d.a,m.a,r.N,r.p,O.a],pipes:[u.a],styles:['[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-pictures-gutter:calc(var(--page-margin) / 4);--page-tags-gutter:4px;--page-rating-5-color:#7ce198;--page-rating-4-color:#a8e07c;--page-rating-3-color:#cee07c;--page-rating-2-color:#e0c77c;--page-rating-1-color:#e07c7c;--page-color:#ebbb00;--page-color-rgb:235,187,0}.food-listing-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]{border-bottom:2px solid var(--ion-color-medium-tint);margin-bottom:calc(var(--page-margin) * 2);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]:last-child{border-bottom:none;margin-bottom:0}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]{margin-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-icon-wrapper[_ngcontent-%COMP%]{margin:0 20%;display:flex;height:100%;justify-content:center;align-items:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter) * -1);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:after, .listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]{height:100%;justify-content:space-between;flex-direction:column}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark-tint);font-size:20px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:5px 0 0;color:var(--ion-color-medium-tint);font-size:12px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]{margin-top:5px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]{padding-right:var(--page-tags-gutter);flex-grow:0;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child{padding-right:0}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%]{display:block;border-radius:var(--app-narrow-radius);border:1px solid var(--ion-color-light-shade);padding:calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);font-size:10px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]{--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);padding-left:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]{background-color:rgba(var(--page-color-rgb),.35);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:calc(var(--page-margin) / 3) calc(var(--page-margin) / 2);font-size:12px;font-weight:600;width:100%;display:block;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="1"][_ngcontent-%COMP%]{background-color:var(--page-rating-1-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="2"][_ngcontent-%COMP%]{background-color:var(--page-rating-2-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="3"][_ngcontent-%COMP%]{background-color:var(--page-rating-3-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="4"][_ngcontent-%COMP%]{background-color:var(--page-rating-4-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="5"][_ngcontent-%COMP%]{background-color:var(--page-rating-5-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]{margin-top:5px;font-size:12px;letter-spacing:1px;font-weight:500;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%]{color:rgba(var(--ion-color-light-shade-rgb),.4)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter) * -1)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]{--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);padding:0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;margin:0 var(--page-pictures-gutter);background-color:rgba(var(--page-color-rgb),.7);border-radius:var(--app-narrow-radius);display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:2}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]{font-size:22px;color:var(--ion-color-lightest);font-weight:600}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]:before{content:"+";font-size:26px;color:var(--ion-color-lightest);font-weight:600}',"[_nghost-%COMP%]{--shell-color:#ebbb00;--shell-color-rgb:235,187,0}app-image-shell.cover-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius);--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-overlay-background:transparent;--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}app-image-shell.item-icon[_ngcontent-%COMP%]{--image-shell-loading-background:transparent}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.25);--text-shell-line-height:20px;max-width:30%}.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:12px;max-width:50%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-tag[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:10px;min-width:30px}.item-tag[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.item-rating[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:12px}app-image-shell.picture-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-narrow-radius);--image-shell-loading-background:rgba(var(--shell-color-rgb),.20)}"]}),t})(),L=(()=>{class t{constructor(t){this.foodService=t}resolve(){const t=this.foodService.getListingDataSource();return this.foodService.getListingStore(t)}}return t.\u0275fac=function(n){return new(n||t)(b.Sb(g.a))},t.\u0275prov=b.Eb({token:t,factory:t.\u0275fac}),t})();const z=[{path:"",component:F,resolve:{data:L}}];let J=(()=>{class t{}return t.\u0275mod=b.Gb({type:t}),t.\u0275inj=b.Fb({factory:function(n){return new(n||t)},providers:[L,g.a],imports:[[o.c,r.fb,i.k.forChild(z),c.a,a.a]]}),t})()}}]);