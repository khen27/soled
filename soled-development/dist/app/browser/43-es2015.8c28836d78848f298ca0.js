(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{Zcw4:function(n,t,o){"use strict";o.r(t),o.d(t,"GettingStartedPageModule",(function(){return m}));var e=o("ofXK"),i=o("3Pt+"),a=o("tyNb"),s=o("TEn/"),c=o("j1ZV"),r=o("fXoL"),l=o("fpyr"),g=o("2gss"),b=o("B7gC");const p=function(){return["/auth/login"]},d=function(){return{w:1,h:1}},h=function(){return["/auth/signup"]},O=[{path:"",component:(()=>{class n{constructor(n,t){this.platformId=n,this.menu=t,this.isLastSlide=!1,this.gettingStartedForm=new i.e({browsingCategory:new i.c("men"),followingInterests:new i.e({tops:new i.c(!0),dresses:new i.c,jeans:new i.c,jackets:new i.c(!0),shoes:new i.c,glasses:new i.c})})}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}ngAfterViewInit(){Object(e.t)(this.platformId)&&(this.slides.isEnd().then(n=>{this.isLastSlide=n}),this.slides.ionSlideWillChange.subscribe(n=>{this.slides.isEnd().then(n=>{this.isLastSlide=n})}))}}return n.\u0275fac=function(t){return new(t||n)(r.Ib(r.B),r.Ib(s.cb))},n.\u0275cmp=r.Cb({type:n,selectors:[["app-getting-started"]],viewQuery:function(n,t){var o;1&n&&r.rc(s.O,!0),2&n&&r.lc(o=r.Xb())&&(t.slides=o.first)},hostVars:2,hostBindings:function(n,t){2&n&&r.Ab("last-slide-active",t.isLastSlide)},decls:93,vars:29,consts:[[1,"ion-no-border"],["slot","end"],["fill","clear",1,"skip-getting-started-button",3,"routerLink"],[1,"getting-started-form",3,"formGroup"],["pager","true",1,"getting-started-slides"],[1,"browsing-categories-slide","question-slide"],[1,"slide-inner-row"],["size","12",1,"question-options-col"],[1,"slide-title"],[1,"question-options-list"],["formControlName","browsingCategory"],[1,"question-option"],["value","woman"],["value","men"],["value","kids"],["value","petit"],["value","plus-size"],["value","new-in"],[1,"interests-to-follow-slide","question-slide"],[1,"heading-col"],[1,"slide-subtitle"],[1,"question-options-col"],["formGroupName","followingInterests",1,"options-list-row"],["size","6"],[1,"custom-checkbox"],["animation","spinner",1,"checkbox-cover","add-overlay",3,"display","src"],[3,"ratio"],[1,"checkbox-title"],["formControlName","tops"],["formControlName","dresses"],["formControlName","jeans"],["formControlName","jackets"],["formControlName","shoes"],["formControlName","glasses"],[1,"call-to-action-col"],["color","secondary","expand","block",1,"signup-button",3,"routerLink"]],template:function(n,t){1&n&&(r.Ob(0,"ion-header",0),r.Ob(1,"ion-toolbar"),r.Ob(2,"ion-buttons",1),r.Ob(3,"ion-button",2),r.vc(4,"skip"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(5,"ion-content"),r.Ob(6,"form",3),r.Ob(7,"ion-slides",4),r.Ob(8,"ion-slide",5),r.Ob(9,"ion-row",6),r.Ob(10,"ion-col",7),r.Ob(11,"h2",8),r.vc(12,"What are you browsing for?"),r.Nb(),r.Ob(13,"ion-list",9),r.Ob(14,"ion-radio-group",10),r.Ob(15,"ion-item",11),r.Ob(16,"ion-label"),r.vc(17,"Woman"),r.Nb(),r.Jb(18,"ion-radio",12),r.Nb(),r.Ob(19,"ion-item",11),r.Ob(20,"ion-label"),r.vc(21,"Men"),r.Nb(),r.Jb(22,"ion-radio",13),r.Nb(),r.Ob(23,"ion-item",11),r.Ob(24,"ion-label"),r.vc(25,"Kids"),r.Nb(),r.Jb(26,"ion-radio",14),r.Nb(),r.Ob(27,"ion-item",11),r.Ob(28,"ion-label"),r.vc(29,"Petit"),r.Nb(),r.Jb(30,"ion-radio",15),r.Nb(),r.Ob(31,"ion-item",11),r.Ob(32,"ion-label"),r.vc(33,"Plus Size"),r.Nb(),r.Jb(34,"ion-radio",16),r.Nb(),r.Ob(35,"ion-item",11),r.Ob(36,"ion-label"),r.vc(37,"New In"),r.Nb(),r.Jb(38,"ion-radio",17),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(39,"ion-slide",18),r.Ob(40,"ion-row",6),r.Ob(41,"ion-col",19),r.Ob(42,"h2",8),r.vc(43,"Pick categories to follow"),r.Nb(),r.Ob(44,"p",20),r.vc(45," You can add or change them later "),r.Nb(),r.Nb(),r.Ob(46,"ion-col",21),r.Ob(47,"ion-row",22),r.Ob(48,"ion-col",23),r.Ob(49,"app-checkbox-wrapper",24),r.Ob(50,"app-image-shell",25),r.Ob(51,"app-aspect-ratio",26),r.Ob(52,"span",27),r.vc(53,"Tops"),r.Nb(),r.Jb(54,"ion-checkbox",28),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(55,"ion-col",23),r.Ob(56,"app-checkbox-wrapper",24),r.Ob(57,"app-image-shell",25),r.Ob(58,"app-aspect-ratio",26),r.Ob(59,"span",27),r.vc(60,"Dresses"),r.Nb(),r.Jb(61,"ion-checkbox",29),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(62,"ion-col",23),r.Ob(63,"app-checkbox-wrapper",24),r.Ob(64,"app-image-shell",25),r.Ob(65,"app-aspect-ratio",26),r.Ob(66,"span",27),r.vc(67,"Jeans"),r.Nb(),r.Jb(68,"ion-checkbox",30),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(69,"ion-col",23),r.Ob(70,"app-checkbox-wrapper",24),r.Ob(71,"app-image-shell",25),r.Ob(72,"app-aspect-ratio",26),r.Ob(73,"span",27),r.vc(74,"Jackets"),r.Nb(),r.Jb(75,"ion-checkbox",31),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(76,"ion-col",23),r.Ob(77,"app-checkbox-wrapper",24),r.Ob(78,"app-image-shell",25),r.Ob(79,"app-aspect-ratio",26),r.Ob(80,"span",27),r.vc(81,"Shoes"),r.Nb(),r.Jb(82,"ion-checkbox",32),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(83,"ion-col",23),r.Ob(84,"app-checkbox-wrapper",24),r.Ob(85,"app-image-shell",25),r.Ob(86,"app-aspect-ratio",26),r.Ob(87,"span",27),r.vc(88,"Glasses"),r.Nb(),r.Jb(89,"ion-checkbox",33),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(90,"ion-col",34),r.Ob(91,"ion-button",35),r.vc(92,"Sign Up"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&n&&(r.yb(3),r.fc("routerLink",r.hc(21,p)),r.yb(3),r.fc("formGroup",t.gettingStartedForm),r.yb(44),r.fc("display","cover")("src","./assets/sample-images/getting-started/category1-1.1.png"),r.yb(1),r.fc("ratio",r.hc(22,d)),r.yb(6),r.fc("display","cover")("src","./assets/sample-images/getting-started/category2-1.1.png"),r.yb(1),r.fc("ratio",r.hc(23,d)),r.yb(6),r.fc("display","cover")("src","./assets/sample-images/getting-started/category3-1.1.png"),r.yb(1),r.fc("ratio",r.hc(24,d)),r.yb(6),r.fc("display","cover")("src","./assets/sample-images/getting-started/category4-1.1.png"),r.yb(1),r.fc("ratio",r.hc(25,d)),r.yb(6),r.fc("display","cover")("src","./assets/sample-images/getting-started/category5-1.1.png"),r.yb(1),r.fc("ratio",r.hc(26,d)),r.yb(6),r.fc("display","cover")("src","./assets/sample-images/getting-started/category6-1.1.png"),r.yb(1),r.fc("ratio",r.hc(27,d)),r.yb(5),r.fc("routerLink",r.hc(28,h)))},directives:[s.p,s.Y,s.h,s.g,s.gb,a.h,s.k,i.r,i.m,i.f,s.O,s.N,s.H,s.j,s.x,s.E,s.hb,i.l,i.d,s.t,s.w,s.D,s.fb,i.g,l.a,g.a,b.a,s.i,s.b],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-alt);--page-swiper-pagination-space:40px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-max-heading-height:16%;--page-max-call-to-actions-height:10%;background-color:var(--page-background)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:var(--page-background)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{--background:var(--page-background)}.getting-started-form[_ngcontent-%COMP%]{height:100%}.getting-started-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-light);--bullet-background-active:var(--ion-color-light);height:100%}.getting-started-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;height:100%;width:100%;padding:var(--page-margin);border-bottom:var(--page-swiper-pagination-space) solid transparent;background-clip:padding-box}.question-slide[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]{color:var(--ion-color-lightest);text-align:center;margin:calc(var(--page-margin) / 2) calc(var(--page-margin) * 2) 0;font-size:22px;font-weight:400;line-height:30px}.question-slide[_ngcontent-%COMP%]   .slide-subtitle[_ngcontent-%COMP%]{color:var(--ion-color-lightest);text-align:center;margin:calc(var(--page-margin) / 2) var(--page-margin);font-size:14px;font-weight:300;line-height:28px}.browsing-categories-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{flex-flow:column;justify-content:space-between}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]{overflow:scroll;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0;background:transparent}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]{--padding-start:0px;--ion-item-background:var(--ion-color-lightest);--ion-item-color:var(--ion-color-dark);--inner-border-width:0px;--inner-padding-end:0px;text-align:center}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]:not(:last-child){margin-bottom:var(--page-margin)}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option.item-radio-checked[_ngcontent-%COMP%]{--ion-item-background:var(--ion-color-secondary);--ion-item-color:var(--ion-color-lightest)}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:calc(var(--page-margin) / 2) 0}.browsing-categories-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .question-options-list[_ngcontent-%COMP%]   .question-option[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.interests-to-follow-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{flex-flow:column;justify-content:space-between;border-width:0}.interests-to-follow-slide[_ngcontent-%COMP%]   .heading-col[_ngcontent-%COMP%]{flex:0 1 auto;max-height:var(--page-max-heading-height);max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]{overflow:scroll;-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:calc(var(--page-margin) / 4);padding-bottom:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{transform:translateZ(0);padding-top:calc(var(--page-margin) / 4);padding-bottom:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(odd){padding-right:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .question-options-col[_ngcontent-%COMP%]   .options-list-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2n){padding-left:calc(var(--page-margin) / 4)}.interests-to-follow-slide[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{flex:0 1 auto;max-height:var(--page-max-call-to-actions-height);max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;display:flex;align-items:flex-end;padding-top:calc(var(--page-margin) / 2)}.interests-to-follow-slide[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%]{margin:0;flex:1 0 100%}.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase;font-size:22px;color:var(--ion-color-lightest);text-align:center;word-break:break-word;overflow:visible;position:absolute;width:70%;left:15%;top:50%;transform:translateY(-50%)}.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-radius:0px;--border-width:10vw;--border-color:transparent;--border-color-checked:transparent;--background:transparent;--background-checked:rgba(var(--ion-color-secondary-rgb),.4);height:100%;width:100%}.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox.checkbox-checked[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%], .last-slide-active[_nghost-%COMP%]     .getting-started-slides .swiper-pagination{display:none}[_nghost-%COMP%]     .getting-started-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height)) / 2)}[_nghost-%COMP%]     .getting-started-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}","app-image-shell.checkbox-cover[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--ion-color-light-rgb),.4);--image-shell-overlay-background:rgba(var(--ion-color-dark-rgb),.4);--image-shell-spinner-color:var(--ion-color-lightest)}","@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:2/3){.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{font-size:18px}}@media only screen and (min-device-width:320px) and (max-device-width:568px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:40/71){.interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%]{font-size:18px}}"]}),n})()}];let m=(()=>{class n{}return n.\u0275mod=r.Gb({type:n}),n.\u0275inj=r.Fb({factory:function(t){return new(t||n)},imports:[[e.c,i.h,i.o,s.Z,a.k.forChild(O),c.a]]}),n})()}}]);