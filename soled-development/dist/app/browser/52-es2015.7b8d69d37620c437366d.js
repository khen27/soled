(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{fE2E:function(n,t,e){"use strict";e.r(t),e.d(t,"WalkthroughPageModule",(function(){return h}));var i=e("ofXK"),o=e("3Pt+"),a=e("tyNb"),r=e("TEn/"),l=e("j1ZV"),c=e("mrSG"),s=e("fXoL"),g=e("XXTH"),d=e("qTUc");const p=[{path:"",component:(()=>{class n{constructor(n,t,e,i,o){this.platformId=n,this.menu=t,this.modalController=e,this.routerOutlet=i,this.router=o,this.slidesOptions={zoom:{toggle:!1}},this.isFirstSlide=!0,this.isLastSlide=!1}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}ngAfterViewInit(){Object(i.t)(this.platformId)&&(this.slides.isBeginning().then(n=>{this.isFirstSlide=n}),this.slides.isEnd().then(n=>{this.isLastSlide=n}),this.slides.ionSlideWillChange.subscribe(n=>{this.slides.isBeginning().then(n=>{this.isFirstSlide=n}),this.slides.isEnd().then(n=>{this.isLastSlide=n})}))}skipWalkthrough(){this.slides.length().then(n=>{this.slides.slideTo(n)})}doGoogleSignup(){console.log("google signup"),this.router.navigate(["app/categories"])}showTermsModal(){return Object(c.__awaiter)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:g.a,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});return yield n.present()}))}showPrivacyModal(){return Object(c.__awaiter)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:d.a,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});return yield n.present()}))}}return n.\u0275fac=function(t){return new(t||n)(s.Ib(s.B),s.Ib(r.gb),s.Ib(r.hb),s.Ib(r.K),s.Ib(a.g))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-walkthrough"]],viewQuery:function(n,t){var e;1&n&&s.rc(r.S,!0),2&n&&s.lc(e=s.Xb())&&(t.slides=e.first)},hostVars:4,hostBindings:function(n,t){2&n&&s.Ab("first-slide-active",t.isFirstSlide)("last-slide-active",t.isLastSlide)},decls:39,vars:1,consts:[[1,"ion-no-border"],["pager","true",3,"options"],[1,"splashScreen"],[1,"slide"],["src","./assets/sample-images/walkthrough/onboarding_one.png"],["src","./assets/sample-images/walkthrough/onboarding_two.png"],["src","./assets/sample-images/walkthrough/onboarding_three.png"],["src","./assets/sample-images/walkthrough/onboarding_four.png"],[1,"login"],["color","facebook",1,"facebookButton",3,"click"],[1,"legalText"]],template:function(n,t){1&n&&(s.Ob(0,"ion-header",0),s.Jb(1,"ion-toolbar"),s.Nb(),s.Ob(2,"ion-content"),s.Ob(3,"ion-slides",1),s.Jb(4,"ion-slide",2),s.Ob(5,"ion-slide"),s.Ob(6,"div",3),s.Jb(7,"img",4),s.Ob(8,"h2"),s.vc(9,"SOLED APP"),s.Nb(),s.Ob(10,"p"),s.vc(11,"We auction authentic shoes and apparel for below-retail prices. Bid small, win big, and earn more rewards"),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"ion-slide"),s.Ob(13,"div",3),s.Jb(14,"img",5),s.Ob(15,"h2"),s.vc(16,"WIN BIG"),s.Nb(),s.Ob(17,"p"),s.vc(18,"End auctions as the highest bidder and take home vintage rewards."),s.Nb(),s.Nb(),s.Nb(),s.Ob(19,"ion-slide"),s.Ob(20,"div",3),s.Jb(21,"img",6),s.Ob(22,"h2"),s.vc(23,"SHOP MORE"),s.Nb(),s.Ob(24,"p"),s.vc(25,"Shop our store for great deals on sneaker and streetwear accessories. "),s.Nb(),s.Nb(),s.Nb(),s.Ob(26,"ion-slide"),s.Ob(27,"div",3),s.Jb(28,"img",7),s.Ob(29,"h2"),s.vc(30,"LET'S START"),s.Nb(),s.Ob(31,"p"),s.vc(32,"Save money, win auctions, and buy cool stuff all in one place. Let's get started. "),s.Nb(),s.Ob(33,"div",8),s.Ob(34,"ion-button",9),s.Wb("click",(function(){return t.doGoogleSignup()})),s.vc(35,"Continue With Facebook"),s.Nb(),s.Ob(36,"p",10),s.Ob(37,"u"),s.vc(38,"Legal Stuff"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&n&&(s.yb(3),s.fc("options",t.slidesOptions))},directives:[r.u,r.cb,r.p,r.S,r.R,r.h],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-swiper-pagination-space:40px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-first-slide-background:#c1ebff;--page-second-slide-background:#a9ebd2;--page-third-slide-background:#f0cbe5;--page-last-slide-background:#eef3ff;--page-vector-decoration-fill:var(--ion-color-light-shade)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background:transparent}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.walkthrough-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-dark);--bullet-background-active:var(--ion-color-dark);height:100%}.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-top:calc(var(--app-header-height) + var(--ion-safe-area-top));border-bottom:var(--page-swiper-pagination-space) solid transparent;background-clip:padding-box;background-color:var(--page-vector-decoration-fill)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;flex-flow:column;justify-content:flex-start;align-items:center}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;min-height:auto;min-height:-webkit-fit-content;min-height:-moz-fit-content;min-height:fit-content;max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;min-height:12vh;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%]{fill:currentColor;color:var(--page-vector-decoration-fill);background-color:var(--page-background);padding-bottom:4px;transform:translateZ(0);shape-rendering:geometricprecision;height:calc(100% + 1px)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:0;min-height:auto;background-color:var(--page-background);margin-bottom:-1px;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * -1) var(--page-margin) 0;text-align:left}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin:0;margin-bottom:var(--page-margin);color:var(--ion-color-dark)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]{color:var(--ion-color-medium-shade);font-size:14px;margin:0 0 calc(var(--page-margin) / 2)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child{margin-bottom:0}.first-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-first-slide-background)}.second-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-second-slide-background)}.third-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-third-slide-background)}.last-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-last-slide-background)}.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{border-width:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding:var(--page-margin)}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]{height:100%;align-items:flex-end;flex-direction:column}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * -1) 0 0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%]{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%]{margin:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]{padding-top:5px;align-items:center;justify-content:space-evenly}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:16px}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:focus{outline:none}.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{display:none}.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height)) / 2)}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}ion-slides[_ngcontent-%COMP%]{height:100%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;margin-top:150px}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}.facebookButton[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:50}.legalText[_ngcontent-%COMP%]{font-weight:30;font-size:10px}.login[_ngcontent-%COMP%]{margin-top:75px}.splashScreen[_ngcontent-%COMP%]{background-image:url(/assets/sample-images/walkthrough/splashbackground.png);height:100%;background-repeat:no-repeat;background-size:cover;background-position:50%}","app-image-shell.illustration-image[_ngcontent-%COMP%]{--image-shell-loading-background:transparent;--image-shell-spinner-color:var(--ion-color-lightest)}","@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:2/3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin) / 2);font-size:20px}}@media only screen and (min-device-width:320px) and (max-device-width:568px) and (-webkit-min-device-pixel-ratio:2) and (device-aspect-ratio:40/71){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:32vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin) / 2);font-size:20px}}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:36vh;padding:2vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}@media only screen and (min-device-width:375px) and (max-device-width:812px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:34vh;padding:6vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:38vh;padding:4vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[i.c,o.h,r.db,a.k.forChild(p),l.a]]}),n})()}}]);