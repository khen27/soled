(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{JgOp:function(n,o,t){"use strict";t.r(o),t.d(o,"ForgotPasswordPageModule",(function(){return m}));var e=t("ofXK"),r=t("3Pt+"),a=t("tyNb"),i=t("TEn/"),s=t("j1ZV"),c=t("fXoL");function g(n,o){if(1&n&&(c.Ob(0,"div",13),c.Jb(1,"ion-icon",14),c.Ob(2,"span"),c.vc(3),c.Nb(),c.Nb()),2&n){const n=c.Yb().$implicit;c.yb(3),c.wc(n.message)}}function p(n,o){if(1&n&&(c.Mb(0),c.tc(1,g,4,1,"div",12),c.Lb()),2&n){const n=o.$implicit,t=c.Yb();c.yb(1),c.fc("ngIf",t.forgotPasswordForm.get("email").hasError(n.type)&&(t.forgotPasswordForm.get("email").dirty||t.forgotPasswordForm.get("email").touched))}}const d=[{path:"",component:(()=>{class n{constructor(n,o){this.router=n,this.menu=o,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}]},this.forgotPasswordForm=new r.e({email:new r.c("test@test.com",r.q.compose([r.q.required,r.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]))})}ionViewDidEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}recoverPassword(){console.log(this.forgotPasswordForm.value),this.router.navigate(["app/categories"])}}return n.\u0275fac=function(o){return new(o||n)(c.Ib(a.g),c.Ib(i.cb))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-forgot-password"]],decls:19,vars:3,consts:[["color","primary"],["slot","start"],[1,"forgot-password-content"],[1,"auth-title"],[1,"recover-message"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],[1,"error-container"],[4,"ngFor","ngForOf"],["type","submit","expand","block",1,"reset-password-btn",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,o){1&n&&(c.Ob(0,"ion-header"),c.Ob(1,"ion-toolbar",0),c.Ob(2,"ion-buttons",1),c.Jb(3,"ion-back-button"),c.Nb(),c.Ob(4,"ion-title"),c.vc(5,"Forgot Password?"),c.Nb(),c.Nb(),c.Nb(),c.Ob(6,"ion-content",2),c.Ob(7,"h2",3),c.vc(8,"Recover your password"),c.Nb(),c.Ob(9,"p",4),c.vc(10," Please enter your email address and we'll send you an email to reset your password. "),c.Nb(),c.Ob(11,"form",5),c.Wb("ngSubmit",(function(){return o.recoverPassword()})),c.Ob(12,"ion-list",6),c.Ob(13,"ion-item",7),c.Jb(14,"ion-input",8),c.Nb(),c.Ob(15,"div",9),c.tc(16,p,2,1,"ng-container",10),c.Nb(),c.Nb(),c.Ob(17,"ion-button",11),c.vc(18,"Reset Password"),c.Nb(),c.Nb(),c.Nb()),2&n&&(c.yb(11),c.fc("formGroup",o.forgotPasswordForm),c.yb(5),c.fc("ngForOf",o.validation_messages.email),c.yb(1),c.fc("disabled",!o.forgotPasswordForm.valid))},directives:[i.p,i.Y,i.h,i.d,i.e,i.W,i.k,r.r,r.m,r.f,i.x,i.t,i.s,i.ib,r.l,r.d,e.l,i.g,e.m,i.q],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade)}.forgot-password-content[_ngcontent-%COMP%]{--background:var(--page-background);--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.forgot-password-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700;margin-top:calc(var(--page-margin) / 2);margin-bottom:calc(var(--page-margin) * (3/2));letter-spacing:.6px}.forgot-password-content[_ngcontent-%COMP%]   .recover-message[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:calc(var(--page-margin) / 2) 0}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{--ion-item-background:var(--page-background)}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) / 2) 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.forgot-password-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.forgot-password-content[_ngcontent-%COMP%]   .reset-password-btn[_ngcontent-%COMP%]{margin:calc(var(--page-margin) / 2) 0}"]}),n})()}];let m=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(o){return new(o||n)},imports:[[e.c,r.h,r.o,i.Z,a.k.forChild(d),s.a]]}),n})()}}]);