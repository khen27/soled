(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{evT8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("f/Ol"),o=n("LRne");class i{static extractData(t,e){return t instanceof a.a?t.state:t instanceof e?Object(o.a)(t):void 0}}},"f/Ol":function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return p}));var a=n("jtHE"),o=n("LRne"),i=n("itXk"),l=n("3E0/"),c=n("lJxs"),r=n("JX91"),s=n("AytR");class g{constructor(){this.isShell=!1}}class p{constructor(t){this.shellModel=t,this.networkDelay=s.a.appShellConfig&&s.a.appShellConfig.networkDelay?s.a.appShellConfig.networkDelay:0,this.timeline=new a.a(1)}static AppendShell(t,e,n=400){const a=Object(o.a)(!0).pipe(Object(l.a)(n));return Object(i.a)([a,t]).pipe(Object(c.a)(([t,e])=>Object.assign(e,{isShell:!1})),Object(r.a)(Object.assign(e,{isShell:!0})))}load(t,e){const n="number"==typeof e?e:this.networkDelay;let a;a=0===n?t:p.AppendShell(t,this.shellModel,n),a.subscribe(t=>{this.timeline.next(t)})}get state(){return this.timeline.asObservable()}}},lkbD:function(t,e,n){"use strict";n.r(e),n.d(e,"RealEstateDetailsPageModule",(function(){return u}));var a=n("ofXK"),o=n("tyNb"),i=n("TEn/"),l=n("j1ZV"),c=n("r7vE"),r=n("GBb9"),s=n("eIep"),g=n("evT8"),p=n("fXoL"),d=n("2gss"),b=n("B7gC"),m=n("zK/y");function O(t,e){if(1&t&&(p.Ob(0,"ion-col",44),p.Ob(1,"span",45),p.Jb(2,"app-text-shell",12),p.Nb(),p.Nb()),2&t){const t=e.$implicit;p.yb(2),p.fc("data",t.name)}}const h=function(){return{w:64,h:40}},C=function(){return{w:64,h:30}};let M=(()=>{class t{constructor(t){this.route=t}get isShell(){return!(!this.details||!this.details.isShell)}ngOnInit(){this.route.data.pipe(Object(s.a)(t=>g.a.extractData(t.data,r.a))).subscribe(t=>{this.details=t},t=>console.log(t))}}return t.\u0275fac=function(e){return new(e||t)(p.Ib(o.a))},t.\u0275cmp=p.Cb({type:t,selectors:[["app-real-estate-details"]],hostVars:2,hostBindings:function(t,e){2&t&&p.Ab("is-shell",e.isShell)},decls:97,vars:23,consts:[["color","primary"],["slot","start"],["defaultHref","app/categories/real-estate"],[1,"real-estate-details-content"],[1,"image-row"],["size","12"],["animation","spinner",1,"details-picture",3,"display","src"],[3,"ratio"],["name","heart",1,"bookmark-icon"],[1,"description-row"],[1,"details-price"],[1,"price-icon"],[3,"data"],[1,"details-address"],["animation","bouncing",3,"data"],[1,"details-description"],["animation","bouncing","lines","5",3,"data"],[1,"accommodations-wrapper"],[1,"detail-title"],[1,"accommodation-row"],[1,"icon-wrapper"],["src","./assets/custom-icons/real-estate/guests.svg",1,"accommodation-icon"],["size","4"],[1,"accommodation-name"],["size","2"],[1,"accommodation-value"],["src","./assets/custom-icons/real-estate/bedrooms.svg",1,"accommodation-icon"],["src","./assets/custom-icons/real-estate/bathroom.svg",1,"accommodation-icon"],["src","./assets/custom-icons/real-estate/patio.svg",1,"accommodation-icon"],[1,"location-wrapper"],[1,"location-header"],[1,"location-address"],["animation","spinner",1,"location-image",3,"src","alt"],[1,"amenities-wrapper"],[1,"amenities-tags"],["class","tag-wrapper",4,"ngFor","ngForOf"],[1,"safety-features-wrapper"],[1,"features-list"],[1,"feature-item"],[1,"availability-wrapper"],[1,"availability-row"],[1,"availability-description"],[1,"availability-value"],["color","dark","expand","block","fill","outline",1,"book-now-btn"],[1,"tag-wrapper"],[1,"amenity-tag"]],template:function(t,e){1&t&&(p.Ob(0,"ion-header"),p.Ob(1,"ion-toolbar",0),p.Ob(2,"ion-buttons",1),p.Jb(3,"ion-back-button",2),p.Nb(),p.Ob(4,"ion-title"),p.vc(5,"Real Estate Details"),p.Nb(),p.Nb(),p.Nb(),p.Ob(6,"ion-content",3),p.Ob(7,"ion-row",4),p.Ob(8,"ion-col",5),p.Ob(9,"app-image-shell",6),p.Ob(10,"app-aspect-ratio",7),p.Jb(11,"ion-icon",8),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(12,"ion-row",9),p.Ob(13,"ion-col",5),p.Ob(14,"h4",10),p.Ob(15,"span",11),p.vc(16,"$"),p.Nb(),p.Jb(17,"app-text-shell",12),p.Nb(),p.Ob(18,"p",13),p.Jb(19,"app-text-shell",14),p.Nb(),p.Ob(20,"p",13),p.Jb(21,"app-text-shell",14),p.Nb(),p.Nb(),p.Ob(22,"ion-col",5),p.Ob(23,"p",15),p.Jb(24,"app-text-shell",16),p.Nb(),p.Nb(),p.Nb(),p.Ob(25,"div",17),p.Ob(26,"h3",18),p.vc(27,"About the space"),p.Nb(),p.Ob(28,"ion-row",19),p.Ob(29,"ion-col",20),p.Jb(30,"ion-icon",21),p.Nb(),p.Ob(31,"ion-col",22),p.Ob(32,"span",23),p.vc(33,"Guests"),p.Nb(),p.Nb(),p.Ob(34,"ion-col",24),p.Ob(35,"span",25),p.Jb(36,"app-text-shell",12),p.Nb(),p.Nb(),p.Nb(),p.Ob(37,"ion-row",19),p.Ob(38,"ion-col",20),p.Jb(39,"ion-icon",26),p.Nb(),p.Ob(40,"ion-col",22),p.Ob(41,"span",23),p.vc(42,"Bedrooms"),p.Nb(),p.Nb(),p.Ob(43,"ion-col",24),p.Ob(44,"span",25),p.Jb(45,"app-text-shell",12),p.Nb(),p.Nb(),p.Nb(),p.Ob(46,"ion-row",19),p.Ob(47,"ion-col",20),p.Jb(48,"ion-icon",27),p.Nb(),p.Ob(49,"ion-col",22),p.Ob(50,"span",23),p.vc(51,"Bathrooms"),p.Nb(),p.Nb(),p.Ob(52,"ion-col",24),p.Ob(53,"span",25),p.Jb(54,"app-text-shell",12),p.Nb(),p.Nb(),p.Nb(),p.Ob(55,"ion-row",19),p.Ob(56,"ion-col",20),p.Jb(57,"ion-icon",28),p.Nb(),p.Ob(58,"ion-col",22),p.Ob(59,"span",23),p.vc(60,"Patio"),p.Nb(),p.Nb(),p.Ob(61,"ion-col",24),p.Ob(62,"span",25),p.Jb(63,"app-text-shell",12),p.Nb(),p.Nb(),p.Nb(),p.Nb(),p.Ob(64,"div",29),p.Ob(65,"div",30),p.Ob(66,"h3",18),p.vc(67,"Location"),p.Nb(),p.Ob(68,"span",31),p.Jb(69,"app-text-shell",12),p.Nb(),p.Nb(),p.Ob(70,"app-aspect-ratio",7),p.Jb(71,"app-image-shell",32),p.Nb(),p.Nb(),p.Ob(72,"div",33),p.Ob(73,"h3",18),p.vc(74,"Amenities"),p.Nb(),p.Ob(75,"ion-row",34),p.tc(76,O,3,1,"ion-col",35),p.Nb(),p.Nb(),p.Ob(77,"div",36),p.Ob(78,"h3",18),p.vc(79,"Safety Features"),p.Nb(),p.Ob(80,"ul",37),p.Ob(81,"li",38),p.Jb(82,"app-text-shell",12),p.Nb(),p.Ob(83,"li",38),p.Jb(84,"app-text-shell",12),p.Nb(),p.Ob(85,"li",38),p.Jb(86,"app-text-shell",12),p.Nb(),p.Nb(),p.Nb(),p.Ob(87,"div",39),p.Ob(88,"h3",18),p.vc(89,"Availability"),p.Nb(),p.Ob(90,"ion-row",40),p.Ob(91,"span",41),p.Jb(92,"app-text-shell",12),p.Nb(),p.Ob(93,"span",42),p.Jb(94,"app-text-shell",12),p.Nb(),p.Nb(),p.Ob(95,"ion-button",43),p.vc(96,"BOOK NOW"),p.Nb(),p.Nb(),p.Nb()),2&t&&(p.yb(9),p.fc("display","cover")("src",null==e.details?null:e.details.picture),p.yb(1),p.fc("ratio",p.hc(21,h)),p.yb(7),p.fc("data",null==e.details?null:e.details.price),p.yb(2),p.fc("data",null==e.details||null==e.details.location?null:e.details.location.address),p.yb(2),p.fc("data",null==e.details||null==e.details.location?null:e.details.location.city),p.yb(3),p.fc("data",null==e.details?null:e.details.description),p.yb(12),p.fc("data",null==e.details||null==e.details.accommodations?null:e.details.accommodations.guests),p.yb(9),p.fc("data",null==e.details||null==e.details.accommodations?null:e.details.accommodations.bedrooms),p.yb(9),p.fc("data",null==e.details||null==e.details.accommodations?null:e.details.accommodations.bathrooms),p.yb(9),p.fc("data",null==e.details||null==e.details.accommodations?null:e.details.accommodations.patios),p.yb(6),p.fc("data",null==e.details||null==e.details.location?null:e.details.location.address),p.yb(1),p.fc("ratio",p.hc(22,C)),p.yb(1),p.fc("src",null==e.details||null==e.details.location?null:e.details.location.mapImage)("alt","location map"),p.yb(5),p.fc("ngForOf",null==e.details?null:e.details.amenities),p.yb(6),p.fc("data","Smoke Detector"),p.yb(2),p.fc("data","Carbon Monoxide Detector"),p.yb(2),p.fc("data","Security Alarm System"),p.yb(6),p.fc("data","1 month minimum"),p.yb(2),p.fc("data","Available from June"))},directives:[i.v,i.eb,i.i,i.e,i.f,i.cb,i.q,i.N,i.p,d.a,b.a,i.w,m.a,a.l,i.h],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-amenity-vertical-gutter:2px;--page-amenity-horizontal-gutter:4px;--page-color:#d9453a}.real-estate-details-content[_ngcontent-%COMP%]{--background:var(--page-background)}.real-estate-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.real-estate-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .bookmark-icon[_ngcontent-%COMP%]{position:absolute;right:var(--page-margin);top:var(--page-margin);font-size:32px;color:var(--page-color)}.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin)}.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%]{margin:0 0 calc(var(--page-margin) / 2);font-size:18px;font-weight:600;color:var(--ion-color-dark-tint);display:flex}.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%]{margin-right:5px}.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-address[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--ion-color-medium-tint)}.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-address[_ngcontent-%COMP%] + .details-address[_ngcontent-%COMP%]{margin-top:5px}.real-estate-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0;font-size:14px;color:var(--ion-color-medium-shade)}.real-estate-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:var(--ion-color-dark-tint);margin:0 0 var(--page-margin)}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]{padding:var(--page-margin);padding-top:calc(var(--page-margin) / 2)}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;align-items:center}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%] + .accommodation-row[_ngcontent-%COMP%]{padding-top:calc(var(--page-margin) / 2)}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-grow:0;padding-right:20px}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%]{font-size:30px;color:var(--ion-color-medium-shade)}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%]{display:block;font-size:14px;color:var(--ion-color-medium-tint)}.real-estate-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%]{display:block;font-size:16px;color:var(--ion-color-medium-tint)}.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) 0 var(--page-margin)}.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%]{padding:0 var(--page-margin) 0;margin-bottom:calc(var(--page-margin) / 2)}.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{margin-bottom:5px}.real-estate-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%]{display:block;font-size:14px;color:var(--ion-color-medium-tint)}.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin)}.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;justify-content:center;margin-top:calc(var(--page-amenity-vertical-gutter) * -1)}.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]{padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0;flex-grow:0;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child{padding-right:0}.real-estate-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .amenity-tag[_ngcontent-%COMP%]{display:block;border-radius:var(--app-narrow-radius);border:1px solid var(--ion-color-light-shade);padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);font-size:14px;color:var(--ion-color-medium-tint)}.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin)}.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-medium-tint)}.real-estate-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] + .feature-item[_ngcontent-%COMP%]{margin-top:calc(var(--page-margin) / 2)}.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin)}.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;justify-content:space-between;align-items:center}.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-description[_ngcontent-%COMP%], .real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-value[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-medium-tint);display:block;flex:1;display:flex}.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-description[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);justify-content:flex-start}.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-value[_ngcontent-%COMP%]{color:var(--page-color);justify-content:flex-end}.real-estate-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .book-now-btn[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0}","[_nghost-%COMP%]{--shell-color:#d9453a;--shell-color-rgb:217,69,58}app-image-shell.details-picture[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}.details-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.25);--text-shell-line-height:18px;max-width:100px;min-width:50px}.details-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.20);--text-shell-line-height:14px;max-width:60%}.details-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-address[_ngcontent-%COMP%] + .details-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{max-width:80%}.details-address[_ngcontent-%COMP%] + .details-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.accommodation-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%], .details-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:14px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{min-width:30px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.location-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:14px;max-width:60%}.location-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}app-image-shell.location-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb),.10);--image-shell-spinner-color:rgba(var(--shell-color-rgb),.25)}.amenity-tag[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.15);--text-shell-line-height:14px;min-width:50px}.amenity-tag[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.feature-item[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:14px;max-width:40%}.feature-item[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.availability-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%], .availability-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb),.10);--text-shell-line-height:14px;min-width:80%}.availability-description[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%], .availability-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}"]}),t})(),P=(()=>{class t{constructor(t){this.realEstateService=t}resolve(){const t=this.realEstateService.getDetailsDataSource();return this.realEstateService.getDetailsStore(t)}}return t.\u0275fac=function(e){return new(e||t)(p.Sb(c.a))},t.\u0275prov=p.Eb({token:t,factory:t.\u0275fac}),t})();const _=[{path:"",component:M,resolve:{data:P}}];let u=(()=>{class t{}return t.\u0275mod=p.Gb({type:t}),t.\u0275inj=p.Fb({factory:function(e){return new(e||t)},providers:[P,c.a],imports:[[a.c,i.fb,o.k.forChild(_),l.a]]}),t})()}}]);