!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"6i+d":function(t,o,i){"use strict";i.r(o),i.d(o,"FoodListingPageModule",(function(){return $}));var r=i("ofXK"),c=i("tyNb"),a=i("TEn/"),g=i("j1ZV"),l=i("iTUp"),s=i("MrCo"),p=i("evT8"),b=i("WAd3"),d=i("eIep"),m=i("fXoL"),u=i("2gss"),O=i("B7gC"),f=i("zK/y"),h=i("+1ss");function C(n,t){if(1&n&&(m.Ob(0,"ion-col",29),m.Ob(1,"span",30),m.Jb(2,"app-text-shell",18),m.Nb(),m.Nb()),2&n){var e=t.$implicit;m.yb(2),m.fc("data",e)}}function M(n,t){1&n&&(m.Ob(0,"span",31),m.vc(1,"$"),m.Nb())}function P(n,t){1&n&&(m.Ob(0,"span",32),m.vc(1,"$"),m.Nb())}var _=function(n){return["/app/categories/food/",n]};function v(n,t){if(1&n&&(m.Ob(0,"a",36),m.Ob(1,"span",37),m.vc(2),m.Nb(),m.Nb()),2&n){var e=m.Yb(2).$implicit;m.fc("routerLink",m.ic(2,_,e.slug)),m.yb(2),m.wc(e.pictures.length-5)}}var w=function(){return{w:1,h:1}};function x(n,t){if(1&n&&(m.Ob(0,"ion-col",33),m.Ob(1,"app-aspect-ratio",10),m.Jb(2,"app-image-shell",34),m.Nb(),m.tc(3,v,3,4,"a",35),m.Nb()),2&n){var e=t.$implicit,o=t.index,i=m.Yb().$implicit;m.yb(1),m.fc("ratio",m.hc(4,w)),m.yb(1),m.fc("src",e)("alt","food image"),m.yb(1),m.fc("ngIf",4==o&&i.pictures.length>5)}}var y=function(){return{w:35,h:15}},k=function(){return{w:20,h:7}},N=function(){return[]};function F(n,t){if(1&n&&(m.Ob(0,"div",6),m.Ob(1,"div",7),m.Ob(2,"a",8),m.Ob(3,"app-image-shell",9),m.Ob(4,"app-aspect-ratio",10),m.Ob(5,"div",11),m.Ob(6,"app-aspect-ratio",10),m.Jb(7,"app-image-shell",12),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(8,"ion-row",13),m.Ob(9,"ion-col",14),m.Ob(10,"ion-row",15),m.Ob(11,"h3",16),m.Ob(12,"a",17),m.Jb(13,"app-text-shell",18),m.Nb(),m.Nb(),m.Ob(14,"p",19),m.Jb(15,"app-text-shell",18),m.Nb(),m.Ob(16,"ion-row",20),m.tc(17,C,3,1,"ion-col",21),m.Nb(),m.Nb(),m.Nb(),m.Ob(18,"ion-col",22),m.Ob(19,"span",23),m.Zb(20,"floor"),m.Jb(21,"app-text-shell",18),m.Nb(),m.Ob(22,"div",24),m.tc(23,M,2,0,"span",25),m.tc(24,P,2,0,"span",26),m.Nb(),m.Nb(),m.Nb(),m.Ob(25,"ion-row",27),m.tc(26,x,4,5,"ion-col",28),m.Nb(),m.Nb()),2&n){var e=t.$implicit;m.yb(2),m.fc("routerLink",m.ic(17,_,e.slug)),m.yb(1),m.fc("display","cover")("src",e.image),m.yb(1),m.fc("ratio",m.hc(19,y)),m.yb(2),m.fc("ratio",m.hc(20,k)),m.yb(1),m.fc("src",e.icon),m.yb(5),m.fc("routerLink",m.ic(21,_,e.slug)),m.yb(1),m.fc("data",e.name),m.yb(2),m.fc("data",e.address),m.yb(2),m.fc("ngForOf",e.tags),m.yb(2),m.zb("ratingBase",m.ac(20,15,e.rating)),m.yb(2),m.fc("data",e.rating),m.yb(2),m.fc("ngForOf",m.hc(23,N).constructor(e.priceRange)),m.yb(1),m.fc("ngForOf",m.hc(24,N).constructor(5-(e.priceRange||1))),m.yb(2),m.fc("ngForOf",e.pictures.slice(0,5))}}function L(n,t){if(1&n&&(m.Mb(0),m.tc(1,F,27,25,"div",5),m.Lb()),2&n){var e=m.Yb();m.yb(1),m.fc("ngForOf",null==e.listing?null:e.listing.items)}}var z,j,J,S=((j=function(){function t(e){n(this,t),this.route=e}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.subscriptions=this.route.data.pipe(Object(d.a)((function(n){return p.a.extractData(n.data,b.a)}))).subscribe((function(t){n.listing=t}),(function(n){return console.log(n)}))}},{key:"ionViewWillLeave",value:function(){this.subscriptions.unsubscribe()}},{key:"isShell",get:function(){return!(!this.listing||!this.listing.isShell)}}]),t}()).\u0275fac=function(n){return new(n||j)(m.Ib(c.a))},j.\u0275cmp=m.Cb({type:j,selectors:[["app-food-listing"]],hostVars:2,hostBindings:function(n,t){2&n&&m.Ab("is-shell",t.isShell)},decls:8,vars:1,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories"],[1,"food-listing-content"],[4,"ngIf"],["class","listing-item",4,"ngFor","ngForOf"],[1,"listing-item"],[1,"cover-wrapper"],[1,"cover-anchor",3,"routerLink"],["animation","spinner",1,"cover-image","add-overlay",3,"display","src"],[3,"ratio"],[1,"cover-icon-wrapper"],[1,"item-icon",3,"src"],[1,"info-row"],[1,"description-col"],[1,"description-wrapper"],[1,"item-name"],[1,"name-anchor",3,"routerLink"],[3,"data"],[1,"item-address"],[1,"item-tags"],["class","tag-wrapper",4,"ngFor","ngForOf"],[1,"stats-col"],[1,"item-rating"],[1,"item-price-range"],["class","price",4,"ngFor","ngForOf"],["class","no-price",4,"ngFor","ngForOf"],[1,"pictures-row"],["class","picture-wrapper",4,"ngFor","ngForOf"],[1,"tag-wrapper"],[1,"item-tag"],[1,"price"],[1,"no-price"],[1,"picture-wrapper"],[1,"picture-image",3,"src","alt"],["class","has-more-pictures",3,"routerLink",4,"ngIf"],[1,"has-more-pictures",3,"routerLink"],[1,"pictures-count"]],template:function(n,t){1&n&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Jb(3,"ion-back-button",2),m.Nb(),m.Ob(4,"ion-title"),m.vc(5,"Food Listing"),m.Nb(),m.Nb(),m.Nb(),m.Ob(6,"ion-content",3),m.tc(7,L,2,1,"ng-container",4),m.Nb()),2&n&&(m.yb(7),m.fc("ngIf",null==t.listing?null:t.listing.items))},directives:[a.p,a.Y,a.h,a.d,a.e,a.W,a.k,r.m,r.l,c.j,a.gb,u.a,O.a,a.H,a.j,f.a],pipes:[h.a],styles:['[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-pictures-gutter:calc(var(--page-margin) / 4);--page-tags-gutter:4px;--page-rating-5-color:#7ce198;--page-rating-4-color:#a8e07c;--page-rating-3-color:#cee07c;--page-rating-2-color:#e0c77c;--page-rating-1-color:#e07c7c;--page-color:#ebbb00;--page-color-rgb:235,187,0}.food-listing-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]{border-bottom:2px solid var(--ion-color-medium-tint);margin-bottom:calc(var(--page-margin) * 2);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]:last-child{border-bottom:none;margin-bottom:0}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]{margin-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-anchor[_ngcontent-%COMP%]{display:block}.listing-item[_ngcontent-%COMP%]   .cover-wrapper[_ngcontent-%COMP%]   .cover-icon-wrapper[_ngcontent-%COMP%]{margin:0 20%;display:flex;height:100%;justify-content:center;align-items:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter) * -1);padding-bottom:var(--page-margin)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:after, .listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]{height:100%;justify-content:space-between;flex-direction:column}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;color:var(--ion-color-dark-tint);font-size:20px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{display:block;text-decoration:none}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-address[_ngcontent-%COMP%]{margin:5px 0 0;color:var(--ion-color-medium-tint);font-size:12px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]{margin-top:5px}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]{padding-right:var(--page-tags-gutter);flex-grow:0;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child{padding-right:0}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .description-col[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .item-tag[_ngcontent-%COMP%]{display:block;border-radius:var(--app-narrow-radius);border:1px solid var(--ion-color-light-shade);padding:calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);font-size:10px;color:var(--ion-color-medium-tint)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]{--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);padding-left:calc(var(--page-margin) / 2)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[_ngcontent-%COMP%]{background-color:rgba(var(--page-color-rgb),.35);color:var(--ion-color-lightest);border-radius:var(--app-narrow-radius);padding:calc(var(--page-margin) / 3) calc(var(--page-margin) / 2);font-size:12px;font-weight:600;width:100%;display:block;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="1"][_ngcontent-%COMP%]{background-color:var(--page-rating-1-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="2"][_ngcontent-%COMP%]{background-color:var(--page-rating-2-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="3"][_ngcontent-%COMP%]{background-color:var(--page-rating-3-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="4"][_ngcontent-%COMP%]{background-color:var(--page-rating-4-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-rating[ratingBase="5"][_ngcontent-%COMP%]{background-color:var(--page-rating-5-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]{margin-top:5px;font-size:12px;letter-spacing:1px;font-weight:500;text-align:center}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:var(--page-color)}.listing-item[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .stats-col[_ngcontent-%COMP%]   .item-price-range[_ngcontent-%COMP%]   .no-price[_ngcontent-%COMP%]{color:rgba(var(--ion-color-light-shade-rgb),.4)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]{--ion-grid-columns:10;--ion-grid-column-padding:0px;margin:0 calc(var(--page-pictures-gutter) * -1)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]{--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);padding:0 var(--page-pictures-gutter)}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;margin:0 var(--page-pictures-gutter);background-color:rgba(var(--page-color-rgb),.7);border-radius:var(--app-narrow-radius);display:flex;align-items:center;justify-content:center;text-decoration:none;z-index:2}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]{font-size:22px;color:var(--ion-color-lightest);font-weight:600}.listing-item[_ngcontent-%COMP%]   .pictures-row[_ngcontent-%COMP%]   .picture-wrapper[_ngcontent-%COMP%]   .has-more-pictures[_ngcontent-%COMP%]   .pictures-count[_ngcontent-%COMP%]:before{content:"+";font-size:26px;color:var(--ion-color-lightest);font-weight:600}',"[_nghost-%COMP%]{--shell-color:#ebbb00;--shell-color-rgb:235,187,0}app-image-shell.cover-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius);--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-overlay-background:transparent;--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}app-image-shell.item-icon[_ngcontent-%COMP%]{--image-shell-loading-background:transparent}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.25);--text-shell-line-height:20px;max-width:30%}.item-name[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:12px;max-width:50%}.item-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:unset}.item-tag[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:10px;min-width:30px}.item-tag[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.item-rating[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:12px}app-image-shell.picture-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-narrow-radius);--image-shell-loading-background:rgba(var(--shell-color-rgb),.20)}"]}),j),B=((z=function(){function t(e){n(this,t),this.foodService=e}return e(t,[{key:"resolve",value:function(){var n=this.foodService.getListingDataSource();return this.foodService.getListingStore(n)}}]),t}()).\u0275fac=function(n){return new(n||z)(m.Sb(s.a))},z.\u0275prov=m.Eb({token:z,factory:z.\u0275fac}),z),I=[{path:"",component:S,resolve:{data:B}}],$=((J=function t(){n(this,t)}).\u0275mod=m.Gb({type:J}),J.\u0275inj=m.Fb({factory:function(n){return new(n||J)},providers:[B,s.a],imports:[[r.c,a.Z,c.k.forChild(I),g.a,l.a]]}),J)}}])}();