(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{evT8:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("f/Ol"),o=e("LRne");class i{static extractData(n,t){return n instanceof r.a?n.state:n instanceof t?Object(o.a)(n):void 0}}},iNMq:function(n,t,e){"use strict";e.r(t),e.d(t,"FirebaseProfilePageModule",(function(){return x}));var r=e("ofXK"),o=e("3Pt+"),i=e("tyNb"),a=e("TEn/"),l=e("j1ZV"),c=e("Uz1e"),s=e("T7tK"),b=e("evT8"),g=e("eIep"),p=e("fXoL"),u=e("2gss"),h=e("B7gC"),d=e("zK/y");const m=function(){return{w:1,h:1}};let v=(()=>{class n{constructor(n,t,e){this.router=n,this.route=t,this.authService=e}get isShell(){return!(!this.user||!this.user.isShell)}ngOnInit(){this.subscriptions=this.route.data.pipe(Object(g.a)(n=>b.a.extractData(n.data,c.a))).subscribe(n=>{this.user=n},n=>console.log(n))}signOut(){this.authService.signOut().subscribe(()=>{this.router.navigate(["firebase/auth/sign-in"],{replaceUrl:!0})},n=>{console.log("signout error",n)})}ionViewWillLeave(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(p.Ib(i.g),p.Ib(i.a),p.Ib(s.a))},n.\u0275cmp=p.Cb({type:n,selectors:[["app-firebase-profile"]],hostVars:2,hostBindings:function(n,t){2&n&&p.Ab("is-shell",t.isShell)},decls:37,vars:11,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","app/categories"],[1,"user-content"],[1,"ion-no-padding"],["animation","spinner",1,"user-image","add-overlay",3,"display","src","alt"],[3,"ratio"],[1,"user-details"],[1,"ion-no-padding","details-wrapper"],[1,"user-name"],[3,"data"],["name","checkmark-circle","color","bright-pink"],[1,"user-role"],[1,"user-description"],["lines","3",3,"data"],[1,"user-preferences-wrapper"],["size","12"],[1,"preference-name"],[1,"preference-value"],["expand","block","fill","outline","color","bright-blue",1,"sign-out-btn",3,"click"]],template:function(n,t){1&n&&(p.Ob(0,"ion-header",0),p.Ob(1,"ion-toolbar"),p.Ob(2,"ion-buttons",1),p.Jb(3,"ion-back-button",2),p.Nb(),p.Nb(),p.Nb(),p.Ob(4,"ion-content",3),p.Ob(5,"ion-row"),p.Ob(6,"ion-col",4),p.Ob(7,"app-image-shell",5),p.Jb(8,"app-aspect-ratio",6),p.Nb(),p.Nb(),p.Nb(),p.Ob(9,"ion-row",7),p.Ob(10,"ion-col",8),p.Ob(11,"h2",9),p.Jb(12,"app-text-shell",10),p.Jb(13,"ion-icon",11),p.Nb(),p.Ob(14,"span",12),p.Jb(15,"app-text-shell",10),p.Nb(),p.Ob(16,"p",13),p.Jb(17,"app-text-shell",14),p.Nb(),p.Nb(),p.Nb(),p.Ob(18,"ion-row",15),p.Ob(19,"ion-col",16),p.Ob(20,"h4",17),p.vc(21,"Mobile"),p.Nb(),p.Ob(22,"p",18),p.Jb(23,"app-text-shell",10),p.Nb(),p.Nb(),p.Ob(24,"ion-col",16),p.Ob(25,"h4",17),p.vc(26,"Email"),p.Nb(),p.Ob(27,"p",18),p.Jb(28,"app-text-shell",10),p.Nb(),p.Nb(),p.Ob(29,"ion-col",16),p.Ob(30,"h4",17),p.vc(31,"Auth Provider"),p.Nb(),p.Ob(32,"p",18),p.Jb(33,"app-text-shell",10),p.Nb(),p.Nb(),p.Ob(34,"ion-col",16),p.Ob(35,"ion-button",19),p.Wb("click",(function(){return t.signOut()})),p.vc(36,"Sign out"),p.Nb(),p.Nb(),p.Nb(),p.Nb()),2&n&&(p.yb(7),p.fc("display","cover")("src",null==t.user?null:t.user.image)("alt","item image"),p.yb(1),p.fc("ratio",p.hc(10,m)),p.yb(4),p.fc("data",null==t.user?null:t.user.name),p.yb(3),p.fc("data",null==t.user?null:t.user.role),p.yb(2),p.fc("data",null==t.user?null:t.user.description),p.yb(6),p.fc("data",null==t.user?null:t.user.phoneNumber),p.yb(5),p.fc("data",null==t.user?null:t.user.email),p.yb(5),p.fc("data",null==t.user?null:t.user.provider))},directives:[a.v,a.eb,a.i,a.e,a.f,a.q,a.N,a.p,u.a,h.a,d.a,a.w,a.h],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--ion-color-bright-blue:#001cff;--ion-color-bright-blue-rgb:0,28,255;--ion-color-bright-blue-contrast:#fff;--ion-color-bright-blue-contrast-rgb:255,255,255;--ion-color-bright-blue-shade:#0019e0;--ion-color-bright-blue-tint:#1a33ff;--ion-color-bright-pink:#ff0dcb;--ion-color-bright-pink-rgb:255,13,203;--ion-color-bright-pink-contrast:#fff;--ion-color-bright-pink-contrast-rgb:255,255,255;--ion-color-bright-pink-shade:#e00bb3;--ion-color-bright-pink-tint:#ff25d0}[_nghost-%COMP%]   .ion-color-bright-blue[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-bright-blue)!important;--ion-color-base-rgb:var(--ion-color-bright-blue-rgb)!important;--ion-color-contrast:var(--ion-color-bright-blue-contrast)!important;--ion-color-contrast-rgb:var(--ion-color-bright-blue-contrast-rgb)!important;--ion-color-shade:var(--ion-color-bright-blue-shade)!important;--ion-color-tint:var(--ion-color-bright-blue-tint)!important}[_nghost-%COMP%]   .ion-color-bright-pink[_ngcontent-%COMP%]{--ion-color-base:var(--ion-color-bright-pink)!important;--ion-color-base-rgb:var(--ion-color-bright-pink-rgb)!important;--ion-color-contrast:var(--ion-color-bright-pink-contrast)!important;--ion-color-contrast-rgb:var(--ion-color-bright-pink-contrast-rgb)!important;--ion-color-shade:var(--ion-color-bright-pink-shade)!important;--ion-color-tint:var(--ion-color-bright-pink-tint)!important}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background:transparent;--ion-toolbar-color:var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{position:relative;z-index:2;-webkit-margin-start:var(--page-margin);margin-inline-start:var(--page-margin);-webkit-margin-end:var(--page-margin);margin-inline-end:var(--page-margin);padding:var(--page-margin);background-color:var(--ion-color-lightest);border-radius:calc(var(--app-broad-radius) * 2);text-align:center;margin-top:calc(var(--page-margin) * -4);box-shadow:0 10px 20px rgba(var(--ion-color-dark-rgb),.15),0 3px 6px rgba(var(--ion-color-dark-rgb),.1)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;align-items:center}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:22px;margin-top:0;margin-bottom:calc(var(--page-margin) / 2);color:var(--ion-color-bright-blue)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-margin-start:calc(var(--page-margin) / 2);margin-inline-start:calc(var(--page-margin) / 2);font-size:18px}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%]{display:block;min-width:40%;font-size:14px;font-weight:500;color:var(--ion-color-medium-shade)}.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%]{min-width:100%;margin-top:var(--page-margin);margin-bottom:0;font-size:14px;color:var(--ion-color-medium-tint)}.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-name[_ngcontent-%COMP%]{margin:0 0 5px;font-size:16px;color:var(--ion-color-bright-pink)}.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-value[_ngcontent-%COMP%]{margin:0 0 calc(var(--page-margin) / 2);font-size:14px;line-height:1.4;color:var(--ion-color-dark-tint)}.user-content[_ngcontent-%COMP%]   .sign-out-btn[_ngcontent-%COMP%]{margin:0;margin-top:calc(var(--page-margin) * 4);color:#001cff}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--ion-color-bright-blue-rgb),0.25);--image-shell-spinner-color:var(--ion-color-bright-blue-tint);--image-shell-border-radius:0px 0px calc(var(--app-broad-radius) * 2) calc(var(--app-broad-radius) * 2);--image-shell-overlay-background:linear-gradient(180deg,rgba(var(--ion-color-dark-rgb),1),rgba(var(--ion-color-dark-rgb),0.40) 25%,rgba(var(--ion-color-dark-rgb),0.15))}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:22px;--text-shell-line-color:rgba(var(--ion-color-bright-blue-rgb),0.20);min-width:180px}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.user-role[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;--text-shell-line-color:rgba(var(--ion-color-bright-blue-rgb),0.15);max-width:40%}.user-role[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.user-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;--text-shell-line-color:rgba(var(--ion-color-bright-blue-rgb),0.10)}.preference-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;--text-shell-line-color:rgba(var(--ion-color-bright-pink-rgb),0.10);max-width:40%}.preference-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),n})(),O=(()=>{class n{constructor(n){this.firebaseAuthService=n}resolve(){const n=this.firebaseAuthService.getProfileDataSource();return this.firebaseAuthService.getProfileStore(n)}}return n.\u0275fac=function(t){return new(t||n)(p.Sb(s.a))},n.\u0275prov=p.Eb({token:n,factory:n.\u0275fac}),n})();var f=e("HTFn");const P=[{path:"",component:v,canActivate:[f.a],data:{authGuardPipe:()=>Object(f.b)(["/firebase/auth/sign-in"])},resolve:{data:O}}];let x=(()=>{class n{}return n.\u0275mod=p.Gb({type:n}),n.\u0275inj=p.Fb({factory:function(t){return new(t||n)},providers:[O],imports:[[r.c,o.h,o.o,a.fb,i.k.forChild(P),l.a]]}),n})()}}]);