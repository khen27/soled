(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{hO9l:function(e,n,t){"use strict";t.r(n),t.d(n,"TabsPageModule",(function(){return p}));var o=t("TEn/"),i=t("ofXK"),a=t("3Pt+"),l=t("tyNb"),r=t("fXoL");const d=function(){return["tab-selected"]},h=function(){return["/app/categories"]},s=function(){return["/app/categories/fashion"]},c=function(){return["/app/contact-card"]},u=[{path:"",component:(()=>{class e{constructor(e){this.menu=e}ionViewWillEnter(){this.menu.enable(!0)}ionTabsDidChange(e){console.log("ionTabsDidChange",e)}}return e.\u0275fac=function(n){return new(n||e)(r.Ib(o.cb))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-tabs"]],decls:14,vars:12,consts:[[3,"ionTabsDidChange"],["slot","bottom"],["tab","categories",3,"routerLinkActive","routerLink"],["name","home-outline"],[1,"tab-title"],["tab","categories/fashion",3,"routerLinkActive","routerLink"],["name","cart-outline"],["tab","contact-card",3,"routerLinkActive","routerLink"],["name","person-outline"]],template:function(e,n){1&e&&(r.Ob(0,"ion-tabs",0),r.Wb("ionTabsDidChange",(function(e){return n.ionTabsDidChange(e)})),r.Ob(1,"ion-tab-bar",1),r.Ob(2,"ion-tab-button",2),r.Jb(3,"ion-icon",3),r.Ob(4,"ion-label",4),r.vc(5,"Home"),r.Nb(),r.Nb(),r.Ob(6,"ion-tab-button",5),r.Jb(7,"ion-icon",6),r.Ob(8,"ion-label",4),r.vc(9,"Store"),r.Nb(),r.Nb(),r.Ob(10,"ion-tab-button",7),r.Jb(11,"ion-icon",8),r.Ob(12,"ion-label",4),r.vc(13,"Profile"),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.yb(2),r.fc("routerLinkActive",r.hc(6,d))("routerLink",r.hc(7,h)),r.yb(4),r.fc("routerLinkActive",r.hc(8,d))("routerLink",r.hc(9,s)),r.yb(4),r.fc("routerLinkActive",r.hc(10,d))("routerLink",r.hc(11,c)))},directives:[o.T,o.R,o.S,l.i,o.gb,l.h,o.q,o.w],styles:["ion-tab-button[_ngcontent-%COMP%]{--color:var(--ion-color-medium-shade);--color-selected:var(--ion-color-dark)}"]}),e})(),children:[{path:"",redirectTo:"categories",pathMatch:"full"},{path:"categories",children:[{path:"",loadChildren:()=>t.e(34).then(t.bind(null,"kMJQ")).then(e=>e.CategoriesPageModule)},{path:"fashion",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(22)]).then(t.bind(null,"0toQ")).then(e=>e.FashionListingPageModule)},{path:"fashion/:productId",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(21)]).then(t.bind(null,"8DSg")).then(e=>e.FashionDetailsPageModule)},{path:"food",loadChildren:()=>Promise.all([t.e(1),t.e(3),t.e(0),t.e(40)]).then(t.bind(null,"6i+d")).then(e=>e.FoodListingPageModule)},{path:"food/:productId",loadChildren:()=>Promise.all([t.e(1),t.e(3),t.e(0),t.e(39)]).then(t.bind(null,"OQzY")).then(e=>e.FoodDetailsPageModule)},{path:"travel",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(27)]).then(t.bind(null,"HbU+")).then(e=>e.TravelListingPageModule)},{path:"travel/:productId",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(26)]).then(t.bind(null,"Tsqc")).then(e=>e.TravelDetailsPageModule)},{path:"deals",loadChildren:()=>Promise.all([t.e(1),t.e(3),t.e(0),t.e(17)]).then(t.bind(null,"bkrf")).then(e=>e.DealsListingPageModule)},{path:"deals/:productId",loadChildren:()=>Promise.all([t.e(1),t.e(3),t.e(0),t.e(20)]).then(t.bind(null,"pvlM")).then(e=>e.DealsDetailsPageModule)},{path:"real-estate",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(24)]).then(t.bind(null,"+Dkm")).then(e=>e.RealEstateListingPageModule)},{path:"real-estate/:productId",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(23)]).then(t.bind(null,"lkbD")).then(e=>e.RealEstateDetailsPageModule)}]},{path:"user",children:[{path:"",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(29)]).then(t.bind(null,"sSds")).then(e=>e.UserProfilePageModule)},{path:"friends",loadChildren:()=>Promise.all([t.e(1),t.e(0),t.e(28)]).then(t.bind(null,"SJx6")).then(e=>e.UserFriendsPageModule)}]},{path:"notifications",children:[{path:"",loadChildren:()=>t.e(46).then(t.bind(null,"wMrW")).then(e=>e.NotificationsPageModule)}]},{path:"contact-card",children:[{path:"",loadChildren:()=>t.e(7).then(t.bind(null,"lgZj")).then(e=>e.ContactCardPageModule)}]}]}];let b=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(n){return new(n||e)},providers:[],imports:[[l.k.forChild(u)],l.k]}),e})(),p=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(n){return new(n||e)},imports:[[o.Z,i.c,a.h,b]]}),e})()}}]);