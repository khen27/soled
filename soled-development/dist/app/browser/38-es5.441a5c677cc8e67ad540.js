!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{ZexN:function(n,r,o){"use strict";o.r(r),o.d(r,"FirebaseUserDetailsPageModule",(function(){return D}));var a=o("ofXK"),i=o("3Pt+"),c=o("tyNb"),s=o("TEn/"),l=o("j1ZV"),g=o("mrSG"),u=o("Wgwc"),d=o("ypRl"),b=(o("pXCI"),o("j7gE")),p=o("izws"),m=o("fXoL"),O=o("B7gC"),h=o("2gss");function C(e,n){if(1&e&&(m.Ob(0,"ion-item",37),m.Ob(1,"ion-label",38),m.vc(2),m.Nb(),m.Jb(3,"ion-checkbox",39),m.Nb()),2&e){var t=n.index,r=m.Yb();m.yb(2),m.wc(r.skills[t].name),m.yb(1),m.fc("formControlName",t)}}var f,M=function(){return{w:1,h:1}},_=((f=function(){function n(t,r,o,a,i){e(this,n),this.modalController=t,this.alertController=r,this.firebaseCrudService=o,this.router=a,this.ngZone=i,this.skills=[]}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.selectedAvatar=this.user.avatar,this.updateUserForm=new i.e({name:new i.c(this.user.name,i.q.required),lastname:new i.c(this.user.lastname,i.q.required),email:new i.c(this.user.email,i.q.compose([i.q.required,i.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),phone:new i.c(this.user.phone,i.q.required),birthdate:new i.c(u.unix(this.user.birthdate).format("DD/MMMM/YYYY"),i.q.required),skills:new i.a([],d.a.minSelectedCheckboxes(1)),spanish:new i.c(this.user.languages.spanish),english:new i.c(this.user.languages.english),french:new i.c(this.user.languages.french)}),this.firebaseCrudService.getSkills().subscribe((function(n){e.skills=n,e.skills.map((function(n){var t=[];e.user.skills&&(t=e.user.skills.map((function(e){return e.id})));var r=new i.c(t.includes(n.id));e.updateUserForm.controls.skills.push(r)}))}))}},{key:"changeLangValue",value:function(e){switch(!0){case e<=3:return"Novice";case e>3&&e<=6:return"Competent";case e>6:return"Expert"}}},{key:"dismissModal",value:function(){this.modalController.dismiss()}},{key:"deleteUser",value:function(){return Object(g.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Confirm",message:"Do you want to delete "+this.user.name+"?",buttons:[{text:"No",role:"cancel",handler:function(){}},{text:"Yes",handler:function(){t.firebaseCrudService.deleteUser(t.user.id).then((function(){t.dismissModal(),t.ngZone.run((function(){return t.router.navigate(["firebase/crud/listing"])})).then()}),(function(e){return console.log(e)}))}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"updateUser",value:function(){var e=this;this.user.avatar=this.selectedAvatar,this.user.name=this.updateUserForm.value.name,this.user.lastname=this.updateUserForm.value.lastname,this.user.birthdate=u(this.updateUserForm.value.birthdate).unix(),this.user.phone=this.updateUserForm.value.phone,this.user.email=this.updateUserForm.value.email,this.user.languages.spanish=this.updateUserForm.value.spanish,this.user.languages.english=this.updateUserForm.value.english,this.user.languages.french=this.updateUserForm.value.french;var n=[];this.updateUserForm.value.skills.map((function(t,r){t&&n.push(e.skills[r].id)})),this.user.skills=n;var t=this.user,r=Object(g.__rest)(t,["age"]);this.firebaseCrudService.updateUser(r).then((function(){return e.modalController.dismiss()}),(function(e){return console.log(e)}))}},{key:"changeUserImage",value:function(){return Object(g.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.modalController,e.t1=b.a,e.t2=!0,e.next=5,this.modalController.getTop();case 5:return e.t3=e.sent,e.t4={component:e.t1,swipeToClose:e.t2,presentingElement:e.t3},e.next=9,e.t0.create.call(e.t0,e.t4);case 9:return(n=e.sent).onDidDismiss().then((function(e){null!=e.data&&(t.selectedAvatar=e.data.link)})),e.next=13,n.present();case 13:case"end":return e.stop()}}),e,this)})))}},{key:"skillsFormArray",get:function(){return this.updateUserForm.get("skills")}}]),n}()).\u0275fac=function(e){return new(e||f)(m.Ib(s.hb),m.Ib(s.a),m.Ib(p.a),m.Ib(c.g),m.Ib(m.z))},f.\u0275cmp=m.Cb({type:f,selectors:[["app-firebase-update-user"]],inputs:{user:"user"},decls:80,vars:11,consts:[[1,"update-user-form","ion-page",3,"formGroup","ngSubmit"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"update-user-content"],[1,"select-user-image-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["color","secondary",1,"change-image-btn",3,"click"],["slot","icon-only","name","camera",1,"btn-icon"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","secondary","position","floating"],["type","text","formControlName","name","required",""],["type","text","formControlName","lastname","required",""],["display-format","DD/MM/YYYY","picker-format","DD MMMM YYYY","formControlName","birthdate","required",""],["type","tel","formControlName","phone","required",""],["type","email","formControlName","email","required",""],[1,"user-experience-fields","fields-section"],[1,"section-header"],[1,"checkbox-tags","rounded-checkbox-tags"],["formArrayName","skills","lines","none","class","checkbox-tag rounded-tag",4,"ngFor","ngForOf"],[1,"user-languages-fields","fields-section"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-label"],[1,"range-value"],["formControlName","english","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","spanish","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","french","color","secondary","min","1","max","10","step","1",1,"range-control"],[1,"form-actions-wrapper"],["expand","block","color","primary","fill","outline",1,"delete-btn",3,"click"],["expand","block","color","secondary","type","submit","fill","solid",1,"submit-btn",3,"disabled"],["formArrayName","skills","lines","none",1,"checkbox-tag","rounded-tag"],[1,"tag-label"],[3,"formControlName"]],template:function(e,n){1&e&&(m.Ob(0,"form",0),m.Wb("ngSubmit",(function(){return n.updateUser()})),m.Ob(1,"ion-header"),m.Ob(2,"ion-toolbar",1),m.Ob(3,"ion-buttons",2),m.Ob(4,"ion-button",3),m.Wb("click",(function(){return n.dismissModal()})),m.Jb(5,"ion-icon",4),m.Nb(),m.Nb(),m.Ob(6,"ion-title"),m.vc(7,"Update User"),m.Nb(),m.Nb(),m.Nb(),m.Ob(8,"ion-content",5),m.Ob(9,"ion-row",6),m.Ob(10,"ion-col",7),m.Ob(11,"app-aspect-ratio",8),m.Jb(12,"app-image-shell",9),m.Nb(),m.Ob(13,"ion-button",10),m.Wb("click",(function(){return n.changeUserImage()})),m.Jb(14,"ion-icon",11),m.Nb(),m.Nb(),m.Nb(),m.Ob(15,"section",12),m.Ob(16,"ion-list",13),m.Ob(17,"ion-item",14),m.Ob(18,"ion-label",15),m.vc(19,"Name"),m.Nb(),m.Jb(20,"ion-input",16),m.Nb(),m.Ob(21,"ion-item",14),m.Ob(22,"ion-label",15),m.vc(23,"Last name"),m.Nb(),m.Jb(24,"ion-input",17),m.Nb(),m.Ob(25,"ion-item",14),m.Ob(26,"ion-label",15),m.vc(27,"Date of Birth"),m.Nb(),m.Jb(28,"ion-datetime",18),m.Nb(),m.Ob(29,"ion-item",14),m.Ob(30,"ion-label",15),m.vc(31,"Phone number"),m.Nb(),m.Jb(32,"ion-input",19),m.Nb(),m.Ob(33,"ion-item",14),m.Ob(34,"ion-label",15),m.vc(35,"Email"),m.Nb(),m.Jb(36,"ion-input",20),m.Nb(),m.Nb(),m.Nb(),m.Ob(37,"section",21),m.Ob(38,"h5",22),m.vc(39,"Experience in"),m.Nb(),m.Ob(40,"ion-row",23),m.tc(41,C,4,2,"ion-item",24),m.Nb(),m.Nb(),m.Ob(42,"section",25),m.Ob(43,"h5",22),m.vc(44,"Languages"),m.Nb(),m.Ob(45,"ion-row",26),m.Ob(46,"ion-col",27),m.Ob(47,"div",28),m.Ob(48,"span",29),m.vc(49,"English"),m.Nb(),m.Ob(50,"span",30),m.vc(51),m.Nb(),m.Nb(),m.Nb(),m.Ob(52,"ion-col",27),m.Jb(53,"ion-range",31),m.Nb(),m.Nb(),m.Ob(54,"ion-row",26),m.Ob(55,"ion-col",27),m.Ob(56,"div",28),m.Ob(57,"span",29),m.vc(58,"Spanish"),m.Nb(),m.Ob(59,"span",30),m.vc(60),m.Nb(),m.Nb(),m.Nb(),m.Ob(61,"ion-col",27),m.Jb(62,"ion-range",32),m.Nb(),m.Nb(),m.Ob(63,"ion-row",26),m.Ob(64,"ion-col",27),m.Ob(65,"div",28),m.Ob(66,"span",29),m.vc(67,"French"),m.Nb(),m.Ob(68,"span",30),m.vc(69),m.Nb(),m.Nb(),m.Nb(),m.Ob(70,"ion-col",27),m.Jb(71,"ion-range",33),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(72,"ion-footer"),m.Ob(73,"ion-row",34),m.Ob(74,"ion-col"),m.Ob(75,"ion-button",35),m.Wb("click",(function(){return n.deleteUser()})),m.vc(76,"DELETE"),m.Nb(),m.Nb(),m.Ob(77,"ion-col"),m.Ob(78,"ion-button",36),m.vc(79,"UPDATE"),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb()),2&e&&(m.fc("formGroup",n.updateUserForm),m.yb(11),m.fc("ratio",m.hc(10,M)),m.yb(1),m.fc("display","cover")("src",n.selectedAvatar)("alt","user image"),m.yb(29),m.fc("ngForOf",n.skillsFormArray.controls),m.yb(10),m.wc(n.changeLangValue(n.updateUserForm.controls.english.value)),m.yb(9),m.wc(n.changeLangValue(n.updateUserForm.controls.spanish.value)),m.yb(9),m.wc(n.changeLangValue(n.updateUserForm.controls.french.value)),m.yb(9),m.fc("disabled",!n.updateUserForm.valid))},directives:[i.r,i.m,i.f,s.u,s.cb,s.i,s.h,s.v,s.ab,s.p,s.L,s.o,O.a,h.a,s.B,s.x,s.A,s.w,s.mb,i.l,i.d,i.p,s.q,s.lb,a.l,s.J,s.t,i.b,s.n,s.b],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.update-user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);background-color:var(--page-background-shade)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;position:relative}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%;border:3px solid var(--ion-color-lightest)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]{--border-radius:50%;--padding-start:0px;--padding-end:0px;position:absolute;right:0;bottom:var(--page-margin);z-index:3;width:4ch;height:4ch;margin:0}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:26px}.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]{padding:var(--page-margin) 0;border-bottom:calc(var(--page-margin) * 2) solid var(--page-background-shade)}.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{padding:0 var(--page-margin);margin-top:0;margin-bottom:var(--page-margin)}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{padding:0 var(--page-margin)}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:0px}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color:#000;--checkbox-tag-background:#fff;--checkbox-tag-active-color:#fff;--checkbox-tag-active-background:#000}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--ion-item-background:var(--checkbox-tag-background);--ion-item-color:var(--checkbox-tag-color)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius:2.2rem}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background:var(--checkbox-tag-active-background);--ion-item-color:var(--checkbox-tag-active-color)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--border-width:2px;--border-style:solid;--border-color:var(--ion-color-medium-shade);--checkbox-tag-color:var(--ion-color-medium-shade);--checkbox-tag-background:var(--ion-color-lightest);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--border-color:var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]{padding-bottom:0}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium-shade);padding-top:0;padding-bottom:0}.form-actions-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}.form-actions-wrapper[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%], .form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]}),f),P=o("lJxs"),v=o("zK/y");function x(e,n){if(1&e&&(m.Ob(0,"ion-item",31),m.Ob(1,"label",32),m.Jb(2,"app-text-shell",12),m.Nb(),m.Jb(3,"ion-icon",33),m.Nb()),2&e){var t=n.$implicit;m.yb(2),m.fc("data",null==t?null:t.name)}}var w=function(){return{w:1,h:1}},k=function(e){return["/firebase/crud/details",e]};function N(e,n){if(1&e&&(m.Ob(0,"ion-col",37),m.Ob(1,"app-aspect-ratio",8),m.Jb(2,"app-image-shell",38),m.Nb(),m.Ob(3,"span",39),m.Jb(4,"app-text-shell",40),m.Nb(),m.Nb()),2&e){var t=n.$implicit;m.yb(1),m.fc("ratio",m.hc(5,w)),m.yb(1),m.fc("display","cover")("src",t.avatar)("routerLink",m.ic(6,k,t.id)),m.yb(2),m.fc("data",t.name)}}function y(e,n){if(1&e&&(m.Ob(0,"section",34),m.Ob(1,"h5",22),m.vc(2,"Users with similar skills"),m.Nb(),m.Ob(3,"ion-row",35),m.tc(4,N,5,8,"ion-col",36),m.Nb(),m.Nb()),2&e){var t=m.Yb();m.yb(4),m.fc("ngForOf",t.relatedUsers)}}var U,F,J,S=((F=function(){function n(t,r,o,a,i){e(this,n),this.firebaseCrudService=t,this.modalController=r,this.router=o,this.route=a,this.routerOutlet=i}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.route.data.pipe(Object(P.a)((function(n){var t=n.data,r=t.relatedUsers;t.user.state.subscribe((function(n){return e.user=n})),r.state.subscribe((function(n){return e.relatedUsers=n}))}))).subscribe()}},{key:"openFirebaseUpdateModal",value:function(){return Object(g.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:_,componentProps:{user:this.user},swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"isShell",get:function(){return!!(this.user&&this.user.isShell||this.relatedUsers&&this.relatedUsers.isShell)}}]),n}()).\u0275fac=function(e){return new(e||F)(m.Ib(p.a),m.Ib(s.hb),m.Ib(c.g),m.Ib(c.a),m.Ib(s.K))},F.\u0275cmp=m.Cb({type:F,selectors:[["app-firebase-user-details"]],hostVars:2,hostBindings:function(e,n){2&e&&m.Ab("is-shell",n.isShell)},decls:57,vars:12,consts:[["color","primary"],["slot","start"],["defaultHref","firebase/crud/listing"],["slot","end"],[3,"click"],[1,"user-content"],[1,"user-info-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["size","12",1,"user-details-col"],[1,"user-name"],["animation","bouncing",3,"data"],[1,"user-age"],["size","12",1,"actions-col"],["size","3"],["color","secondary",1,"action-btn"],["slot","icon-only","name","mail",1,"btn-icon"],["slot","icon-only","name","call",1,"btn-icon"],["slot","icon-only","name","videocam",1,"btn-icon"],["slot","icon-only","name","text",1,"btn-icon"],[1,"content-section","user-languages-wrapper"],[1,"section-header"],[1,"language-item-row"],[1,"language-item"],[1,"language-name"],["type","determinate",1,"language-score",3,"value"],[1,"content-section","user-experience-wrapper"],["lines","none",1,"experience-list"],["class","experience-item",4,"ngFor","ngForOf"],["class","content-section related-users-wrapper",4,"ngIf"],[1,"experience-item"],[1,"experience-label"],["slot","start","name","checkmark","color","secondary",1,"experience-list-icon"],[1,"content-section","related-users-wrapper"],[1,"related-users-row"],["class","related-user-item",4,"ngFor","ngForOf"],[1,"related-user-item"],[1,"related-user-picture",3,"display","src","routerLink"],[1,"related-user-name"],[3,"data"]],template:function(e,n){1&e&&(m.Ob(0,"ion-header"),m.Ob(1,"ion-toolbar",0),m.Ob(2,"ion-buttons",1),m.Jb(3,"ion-back-button",2),m.Nb(),m.Ob(4,"ion-title"),m.vc(5,"User Details"),m.Nb(),m.Ob(6,"ion-buttons",3),m.Ob(7,"ion-button",4),m.Wb("click",(function(){return n.openFirebaseUpdateModal()})),m.vc(8," Edit "),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(9,"ion-content",5),m.Ob(10,"ion-row",6),m.Ob(11,"ion-col",7),m.Ob(12,"app-aspect-ratio",8),m.Jb(13,"app-image-shell",9),m.Nb(),m.Nb(),m.Ob(14,"ion-col",10),m.Ob(15,"h2",11),m.Jb(16,"app-text-shell",12),m.Nb(),m.Ob(17,"span",13),m.Jb(18,"app-text-shell",12),m.Nb(),m.Nb(),m.Ob(19,"ion-col",14),m.Ob(20,"ion-row"),m.Ob(21,"ion-col",15),m.Ob(22,"ion-button",16),m.Jb(23,"ion-icon",17),m.Nb(),m.Nb(),m.Ob(24,"ion-col",15),m.Ob(25,"ion-button",16),m.Jb(26,"ion-icon",18),m.Nb(),m.Nb(),m.Ob(27,"ion-col",15),m.Ob(28,"ion-button",16),m.Jb(29,"ion-icon",19),m.Nb(),m.Nb(),m.Ob(30,"ion-col",15),m.Ob(31,"ion-button",16),m.Jb(32,"ion-icon",20),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(33,"section",21),m.Ob(34,"h5",22),m.vc(35,"Languages"),m.Nb(),m.Ob(36,"ion-row",23),m.Ob(37,"ion-col",24),m.Ob(38,"span",25),m.vc(39,"English"),m.Nb(),m.Jb(40,"ion-progress-bar",26),m.Nb(),m.Nb(),m.Ob(41,"ion-row",23),m.Ob(42,"ion-col",24),m.Ob(43,"span",25),m.vc(44,"Spanish"),m.Nb(),m.Jb(45,"ion-progress-bar",26),m.Nb(),m.Nb(),m.Ob(46,"ion-row",23),m.Ob(47,"ion-col",24),m.Ob(48,"span",25),m.vc(49,"French"),m.Nb(),m.Jb(50,"ion-progress-bar",26),m.Nb(),m.Nb(),m.Nb(),m.Ob(51,"section",27),m.Ob(52,"h5",22),m.vc(53,"Skills"),m.Nb(),m.Ob(54,"ion-list",28),m.tc(55,x,4,1,"ion-item",29),m.Nb(),m.Nb(),m.tc(56,y,5,1,"section",30),m.Nb()),2&e&&(m.yb(12),m.fc("ratio",m.hc(11,w)),m.yb(1),m.fc("display","cover")("src",null==n.user?null:n.user.avatar)("alt","item image"),m.yb(3),m.fc("data",null==n.user||null==n.user.name?null:n.user.name.concat(" ").concat(null==n.user?null:n.user.lastname)),m.yb(2),m.fc("data",null==n.user||null==n.user.age?null:n.user.age.toString().concat(" years young")),m.yb(22),m.fc("value",(null==n.user||null==n.user.languages?null:n.user.languages.english)/10),m.yb(5),m.fc("value",(null==n.user||null==n.user.languages?null:n.user.languages.spanish)/10),m.yb(5),m.fc("value",(null==n.user||null==n.user.languages?null:n.user.languages.french)/10),m.yb(5),m.fc("ngForOf",null==n.user?null:n.user.skills),m.yb(1),m.fc("ngIf",(null==n.relatedUsers?null:n.relatedUsers.length)>0))},directives:[s.u,s.cb,s.i,s.e,s.f,s.ab,s.h,s.p,s.L,s.o,O.a,h.a,v.a,s.v,s.G,s.B,a.l,a.m,s.x,s.kb,c.h],styles:['[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-related-users-gutter:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;margin-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 2);min-width:40%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{font-size:14px;font-weight:300;min-width:60%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]{text-align:center;margin-top:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{--border-radius:50%;--padding-start:0px;--padding-end:0px;width:4ch;height:4ch}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:24px}.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]{padding:var(--page-margin);border-top:1px solid var(--ion-color-light-shade)}.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-top:0;margin-bottom:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:0;padding-inline-end:0}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-name[_ngcontent-%COMP%]{display:block;font-size:16px;font-weight:300;margin-bottom:calc(var(--page-margin) / 3)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-score[_ngcontent-%COMP%]{--buffer-background:rgba(var(--ion-color-secondary-rgb),.20);--progress-background:rgba(var(--ion-color-secondary-rgb),1);height:var(--page-margin);border-radius:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]{margin:0;padding:0}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{--min-height:initial;--padding-start:0px;--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:0px}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:not(:last-child){padding-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-list-icon[_ngcontent-%COMP%]{margin:0;margin-right:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-label[_ngcontent-%COMP%]{font-size:16px;font-weight:300;width:100%}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]{--ion-grid-columns:7;--ion-grid-column-padding:0px;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;margin-left:calc(var(--page-margin) * -1);margin-right:calc(var(--page-margin) * -1);-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]:after, .user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 calc(var(--page-margin) - var(--page-related-users-gutter))}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]{padding:0 var(--page-related-users-gutter);--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%)}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]   .related-user-name[_ngcontent-%COMP%]{display:block;text-align:center;margin-top:calc(var(--page-margin) / 2);font-size:14px}',"app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:24px}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}.experience-label[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:40%}.experience-label[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}app-image-shell.related-user-picture[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius)}.related-user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:80%}.related-user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),F),z=((U=function(){function n(t){e(this,n),this.firebaseCrudService=t}return t(n,[{key:"resolve",value:function(e){var n=e.paramMap.get("id"),t=this.firebaseCrudService.getCombinedUserDataSource(n),r=this.firebaseCrudService.getCombinedUserStore(t),o=this.firebaseCrudService.getRelatedUsersDataSource(r.state,n);return{user:r,relatedUsers:this.firebaseCrudService.getRelatedUsersStore(o)}}}]),n}()).\u0275fac=function(e){return new(e||U)(m.Sb(p.a))},U.\u0275prov=m.Eb({token:U,factory:U.\u0275fac}),U),q=o("k8ID"),I=[{path:"",component:S,resolve:{data:z}}],D=((J=function n(){e(this,n)}).\u0275mod=m.Gb({type:J}),J.\u0275inj=m.Fb({factory:function(e){return new(e||J)},providers:[p.a,z],imports:[[a.c,i.h,i.o,s.db,c.k.forChild(I),l.a,q.a]]}),J)}}])}();