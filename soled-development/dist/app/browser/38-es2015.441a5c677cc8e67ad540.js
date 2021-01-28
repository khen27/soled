(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{ZexN:function(e,n,t){"use strict";t.r(n),t.d(n,"FirebaseUserDetailsPageModule",(function(){return F}));var o=t("ofXK"),r=t("3Pt+"),a=t("tyNb"),i=t("TEn/"),c=t("j1ZV"),s=t("mrSG"),l=t("Wgwc"),g=t("ypRl"),u=(t("pXCI"),t("j7gE")),d=t("izws"),b=t("fXoL"),p=t("B7gC"),m=t("2gss");function O(e,n){if(1&e&&(b.Ob(0,"ion-item",37),b.Ob(1,"ion-label",38),b.vc(2),b.Nb(),b.Jb(3,"ion-checkbox",39),b.Nb()),2&e){const e=n.index,t=b.Yb();b.yb(2),b.wc(t.skills[e].name),b.yb(1),b.fc("formControlName",e)}}const h=function(){return{w:1,h:1}};let C=(()=>{class e{constructor(e,n,t,o,r){this.modalController=e,this.alertController=n,this.firebaseCrudService=t,this.router=o,this.ngZone=r,this.skills=[]}ngOnInit(){this.selectedAvatar=this.user.avatar,this.updateUserForm=new r.e({name:new r.c(this.user.name,r.q.required),lastname:new r.c(this.user.lastname,r.q.required),email:new r.c(this.user.email,r.q.compose([r.q.required,r.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),phone:new r.c(this.user.phone,r.q.required),birthdate:new r.c(l.unix(this.user.birthdate).format("DD/MMMM/YYYY"),r.q.required),skills:new r.a([],g.a.minSelectedCheckboxes(1)),spanish:new r.c(this.user.languages.spanish),english:new r.c(this.user.languages.english),french:new r.c(this.user.languages.french)}),this.firebaseCrudService.getSkills().subscribe(e=>{this.skills=e,this.skills.map(e=>{let n=[];this.user.skills&&(n=this.user.skills.map((function(e){return e.id})));const t=new r.c(n.includes(e.id));this.updateUserForm.controls.skills.push(t)})})}get skillsFormArray(){return this.updateUserForm.get("skills")}changeLangValue(e){switch(!0){case e<=3:return"Novice";case e>3&&e<=6:return"Competent";case e>6:return"Expert"}}dismissModal(){this.modalController.dismiss()}deleteUser(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Confirm",message:"Do you want to delete "+this.user.name+"?",buttons:[{text:"No",role:"cancel",handler:()=>{}},{text:"Yes",handler:()=>{this.firebaseCrudService.deleteUser(this.user.id).then(()=>{this.dismissModal(),this.ngZone.run(()=>this.router.navigate(["firebase/crud/listing"])).then()},e=>console.log(e))}}]});yield e.present()}))}updateUser(){this.user.avatar=this.selectedAvatar,this.user.name=this.updateUserForm.value.name,this.user.lastname=this.updateUserForm.value.lastname,this.user.birthdate=l(this.updateUserForm.value.birthdate).unix(),this.user.phone=this.updateUserForm.value.phone,this.user.email=this.updateUserForm.value.email,this.user.languages.spanish=this.updateUserForm.value.spanish,this.user.languages.english=this.updateUserForm.value.english,this.user.languages.french=this.updateUserForm.value.french;const e=[];this.updateUserForm.value.skills.map((n,t)=>{n&&e.push(this.skills[t].id)}),this.user.skills=e;const n=this.user,t=Object(s.__rest)(n,["age"]);this.firebaseCrudService.updateUser(t).then(()=>this.modalController.dismiss(),e=>console.log(e))}changeUserImage(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:u.a,swipeToClose:!0,presentingElement:yield this.modalController.getTop()});e.onDidDismiss().then(e=>{null!=e.data&&(this.selectedAvatar=e.data.link)}),yield e.present()}))}}return e.\u0275fac=function(n){return new(n||e)(b.Ib(i.hb),b.Ib(i.a),b.Ib(d.a),b.Ib(a.g),b.Ib(b.z))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-firebase-update-user"]],inputs:{user:"user"},decls:80,vars:11,consts:[[1,"update-user-form","ion-page",3,"formGroup","ngSubmit"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"update-user-content"],[1,"select-user-image-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["color","secondary",1,"change-image-btn",3,"click"],["slot","icon-only","name","camera",1,"btn-icon"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","secondary","position","floating"],["type","text","formControlName","name","required",""],["type","text","formControlName","lastname","required",""],["display-format","DD/MM/YYYY","picker-format","DD MMMM YYYY","formControlName","birthdate","required",""],["type","tel","formControlName","phone","required",""],["type","email","formControlName","email","required",""],[1,"user-experience-fields","fields-section"],[1,"section-header"],[1,"checkbox-tags","rounded-checkbox-tags"],["formArrayName","skills","lines","none","class","checkbox-tag rounded-tag",4,"ngFor","ngForOf"],[1,"user-languages-fields","fields-section"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-label"],[1,"range-value"],["formControlName","english","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","spanish","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","french","color","secondary","min","1","max","10","step","1",1,"range-control"],[1,"form-actions-wrapper"],["expand","block","color","primary","fill","outline",1,"delete-btn",3,"click"],["expand","block","color","secondary","type","submit","fill","solid",1,"submit-btn",3,"disabled"],["formArrayName","skills","lines","none",1,"checkbox-tag","rounded-tag"],[1,"tag-label"],[3,"formControlName"]],template:function(e,n){1&e&&(b.Ob(0,"form",0),b.Wb("ngSubmit",(function(){return n.updateUser()})),b.Ob(1,"ion-header"),b.Ob(2,"ion-toolbar",1),b.Ob(3,"ion-buttons",2),b.Ob(4,"ion-button",3),b.Wb("click",(function(){return n.dismissModal()})),b.Jb(5,"ion-icon",4),b.Nb(),b.Nb(),b.Ob(6,"ion-title"),b.vc(7,"Update User"),b.Nb(),b.Nb(),b.Nb(),b.Ob(8,"ion-content",5),b.Ob(9,"ion-row",6),b.Ob(10,"ion-col",7),b.Ob(11,"app-aspect-ratio",8),b.Jb(12,"app-image-shell",9),b.Nb(),b.Ob(13,"ion-button",10),b.Wb("click",(function(){return n.changeUserImage()})),b.Jb(14,"ion-icon",11),b.Nb(),b.Nb(),b.Nb(),b.Ob(15,"section",12),b.Ob(16,"ion-list",13),b.Ob(17,"ion-item",14),b.Ob(18,"ion-label",15),b.vc(19,"Name"),b.Nb(),b.Jb(20,"ion-input",16),b.Nb(),b.Ob(21,"ion-item",14),b.Ob(22,"ion-label",15),b.vc(23,"Last name"),b.Nb(),b.Jb(24,"ion-input",17),b.Nb(),b.Ob(25,"ion-item",14),b.Ob(26,"ion-label",15),b.vc(27,"Date of Birth"),b.Nb(),b.Jb(28,"ion-datetime",18),b.Nb(),b.Ob(29,"ion-item",14),b.Ob(30,"ion-label",15),b.vc(31,"Phone number"),b.Nb(),b.Jb(32,"ion-input",19),b.Nb(),b.Ob(33,"ion-item",14),b.Ob(34,"ion-label",15),b.vc(35,"Email"),b.Nb(),b.Jb(36,"ion-input",20),b.Nb(),b.Nb(),b.Nb(),b.Ob(37,"section",21),b.Ob(38,"h5",22),b.vc(39,"Experience in"),b.Nb(),b.Ob(40,"ion-row",23),b.tc(41,O,4,2,"ion-item",24),b.Nb(),b.Nb(),b.Ob(42,"section",25),b.Ob(43,"h5",22),b.vc(44,"Languages"),b.Nb(),b.Ob(45,"ion-row",26),b.Ob(46,"ion-col",27),b.Ob(47,"div",28),b.Ob(48,"span",29),b.vc(49,"English"),b.Nb(),b.Ob(50,"span",30),b.vc(51),b.Nb(),b.Nb(),b.Nb(),b.Ob(52,"ion-col",27),b.Jb(53,"ion-range",31),b.Nb(),b.Nb(),b.Ob(54,"ion-row",26),b.Ob(55,"ion-col",27),b.Ob(56,"div",28),b.Ob(57,"span",29),b.vc(58,"Spanish"),b.Nb(),b.Ob(59,"span",30),b.vc(60),b.Nb(),b.Nb(),b.Nb(),b.Ob(61,"ion-col",27),b.Jb(62,"ion-range",32),b.Nb(),b.Nb(),b.Ob(63,"ion-row",26),b.Ob(64,"ion-col",27),b.Ob(65,"div",28),b.Ob(66,"span",29),b.vc(67,"French"),b.Nb(),b.Ob(68,"span",30),b.vc(69),b.Nb(),b.Nb(),b.Nb(),b.Ob(70,"ion-col",27),b.Jb(71,"ion-range",33),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(72,"ion-footer"),b.Ob(73,"ion-row",34),b.Ob(74,"ion-col"),b.Ob(75,"ion-button",35),b.Wb("click",(function(){return n.deleteUser()})),b.vc(76,"DELETE"),b.Nb(),b.Nb(),b.Ob(77,"ion-col"),b.Ob(78,"ion-button",36),b.vc(79,"UPDATE"),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.fc("formGroup",n.updateUserForm),b.yb(11),b.fc("ratio",b.hc(10,h)),b.yb(1),b.fc("display","cover")("src",n.selectedAvatar)("alt","user image"),b.yb(29),b.fc("ngForOf",n.skillsFormArray.controls),b.yb(10),b.wc(n.changeLangValue(n.updateUserForm.controls.english.value)),b.yb(9),b.wc(n.changeLangValue(n.updateUserForm.controls.spanish.value)),b.yb(9),b.wc(n.changeLangValue(n.updateUserForm.controls.french.value)),b.yb(9),b.fc("disabled",!n.updateUserForm.valid))},directives:[r.r,r.m,r.f,i.u,i.cb,i.i,i.h,i.v,i.ab,i.p,i.L,i.o,p.a,m.a,i.B,i.x,i.A,i.w,i.mb,r.l,r.d,r.p,i.q,i.lb,o.l,i.J,i.t,r.b,i.n,i.b],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.update-user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);background-color:var(--page-background-shade)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;position:relative}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%;border:3px solid var(--ion-color-lightest)}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]{--border-radius:50%;--padding-start:0px;--padding-end:0px;position:absolute;right:0;bottom:var(--page-margin);z-index:3;width:4ch;height:4ch;margin:0}.update-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:26px}.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]{padding:var(--page-margin) 0;border-bottom:calc(var(--page-margin) * 2) solid var(--page-background-shade)}.update-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{padding:0 var(--page-margin);margin-top:0;margin-bottom:var(--page-margin)}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{padding:0 var(--page-margin)}.update-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:0px}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color:#000;--checkbox-tag-background:#fff;--checkbox-tag-active-color:#fff;--checkbox-tag-active-background:#000}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--ion-item-background:var(--checkbox-tag-background);--ion-item-color:var(--checkbox-tag-color)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius:2.2rem}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background:var(--checkbox-tag-active-background);--ion-item-color:var(--checkbox-tag-active-color)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--border-width:2px;--border-style:solid;--border-color:var(--ion-color-medium-shade);--checkbox-tag-color:var(--ion-color-medium-shade);--checkbox-tag-background:var(--ion-color-lightest);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--border-color:var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]{padding-bottom:0}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.update-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium-shade);padding-top:0;padding-bottom:0}.form-actions-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}.form-actions-wrapper[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%], .form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]}),e})();var M=t("lJxs"),_=t("zK/y");function P(e,n){if(1&e&&(b.Ob(0,"ion-item",31),b.Ob(1,"label",32),b.Jb(2,"app-text-shell",12),b.Nb(),b.Jb(3,"ion-icon",33),b.Nb()),2&e){const e=n.$implicit;b.yb(2),b.fc("data",null==e?null:e.name)}}const f=function(){return{w:1,h:1}},x=function(e){return["/firebase/crud/details",e]};function v(e,n){if(1&e&&(b.Ob(0,"ion-col",37),b.Ob(1,"app-aspect-ratio",8),b.Jb(2,"app-image-shell",38),b.Nb(),b.Ob(3,"span",39),b.Jb(4,"app-text-shell",40),b.Nb(),b.Nb()),2&e){const e=n.$implicit;b.yb(1),b.fc("ratio",b.hc(5,f)),b.yb(1),b.fc("display","cover")("src",e.avatar)("routerLink",b.ic(6,x,e.id)),b.yb(2),b.fc("data",e.name)}}function w(e,n){if(1&e&&(b.Ob(0,"section",34),b.Ob(1,"h5",22),b.vc(2,"Users with similar skills"),b.Nb(),b.Ob(3,"ion-row",35),b.tc(4,v,5,8,"ion-col",36),b.Nb(),b.Nb()),2&e){const e=b.Yb();b.yb(4),b.fc("ngForOf",e.relatedUsers)}}let k=(()=>{class e{constructor(e,n,t,o,r){this.firebaseCrudService=e,this.modalController=n,this.router=t,this.route=o,this.routerOutlet=r}get isShell(){return!!(this.user&&this.user.isShell||this.relatedUsers&&this.relatedUsers.isShell)}ngOnInit(){this.route.data.pipe(Object(M.a)(e=>{const n=e.data,t=n.relatedUsers;n.user.state.subscribe(e=>this.user=e),t.state.subscribe(e=>this.relatedUsers=e)})).subscribe()}openFirebaseUpdateModal(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:C,componentProps:{user:this.user},swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});yield e.present()}))}}return e.\u0275fac=function(n){return new(n||e)(b.Ib(d.a),b.Ib(i.hb),b.Ib(a.g),b.Ib(a.a),b.Ib(i.K))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-firebase-user-details"]],hostVars:2,hostBindings:function(e,n){2&e&&b.Ab("is-shell",n.isShell)},decls:57,vars:12,consts:[["color","primary"],["slot","start"],["defaultHref","firebase/crud/listing"],["slot","end"],[3,"click"],[1,"user-content"],[1,"user-info-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["size","12",1,"user-details-col"],[1,"user-name"],["animation","bouncing",3,"data"],[1,"user-age"],["size","12",1,"actions-col"],["size","3"],["color","secondary",1,"action-btn"],["slot","icon-only","name","mail",1,"btn-icon"],["slot","icon-only","name","call",1,"btn-icon"],["slot","icon-only","name","videocam",1,"btn-icon"],["slot","icon-only","name","text",1,"btn-icon"],[1,"content-section","user-languages-wrapper"],[1,"section-header"],[1,"language-item-row"],[1,"language-item"],[1,"language-name"],["type","determinate",1,"language-score",3,"value"],[1,"content-section","user-experience-wrapper"],["lines","none",1,"experience-list"],["class","experience-item",4,"ngFor","ngForOf"],["class","content-section related-users-wrapper",4,"ngIf"],[1,"experience-item"],[1,"experience-label"],["slot","start","name","checkmark","color","secondary",1,"experience-list-icon"],[1,"content-section","related-users-wrapper"],[1,"related-users-row"],["class","related-user-item",4,"ngFor","ngForOf"],[1,"related-user-item"],[1,"related-user-picture",3,"display","src","routerLink"],[1,"related-user-name"],[3,"data"]],template:function(e,n){1&e&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Jb(3,"ion-back-button",2),b.Nb(),b.Ob(4,"ion-title"),b.vc(5,"User Details"),b.Nb(),b.Ob(6,"ion-buttons",3),b.Ob(7,"ion-button",4),b.Wb("click",(function(){return n.openFirebaseUpdateModal()})),b.vc(8," Edit "),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(9,"ion-content",5),b.Ob(10,"ion-row",6),b.Ob(11,"ion-col",7),b.Ob(12,"app-aspect-ratio",8),b.Jb(13,"app-image-shell",9),b.Nb(),b.Nb(),b.Ob(14,"ion-col",10),b.Ob(15,"h2",11),b.Jb(16,"app-text-shell",12),b.Nb(),b.Ob(17,"span",13),b.Jb(18,"app-text-shell",12),b.Nb(),b.Nb(),b.Ob(19,"ion-col",14),b.Ob(20,"ion-row"),b.Ob(21,"ion-col",15),b.Ob(22,"ion-button",16),b.Jb(23,"ion-icon",17),b.Nb(),b.Nb(),b.Ob(24,"ion-col",15),b.Ob(25,"ion-button",16),b.Jb(26,"ion-icon",18),b.Nb(),b.Nb(),b.Ob(27,"ion-col",15),b.Ob(28,"ion-button",16),b.Jb(29,"ion-icon",19),b.Nb(),b.Nb(),b.Ob(30,"ion-col",15),b.Ob(31,"ion-button",16),b.Jb(32,"ion-icon",20),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(33,"section",21),b.Ob(34,"h5",22),b.vc(35,"Languages"),b.Nb(),b.Ob(36,"ion-row",23),b.Ob(37,"ion-col",24),b.Ob(38,"span",25),b.vc(39,"English"),b.Nb(),b.Jb(40,"ion-progress-bar",26),b.Nb(),b.Nb(),b.Ob(41,"ion-row",23),b.Ob(42,"ion-col",24),b.Ob(43,"span",25),b.vc(44,"Spanish"),b.Nb(),b.Jb(45,"ion-progress-bar",26),b.Nb(),b.Nb(),b.Ob(46,"ion-row",23),b.Ob(47,"ion-col",24),b.Ob(48,"span",25),b.vc(49,"French"),b.Nb(),b.Jb(50,"ion-progress-bar",26),b.Nb(),b.Nb(),b.Nb(),b.Ob(51,"section",27),b.Ob(52,"h5",22),b.vc(53,"Skills"),b.Nb(),b.Ob(54,"ion-list",28),b.tc(55,P,4,1,"ion-item",29),b.Nb(),b.Nb(),b.tc(56,w,5,1,"section",30),b.Nb()),2&e&&(b.yb(12),b.fc("ratio",b.hc(11,f)),b.yb(1),b.fc("display","cover")("src",null==n.user?null:n.user.avatar)("alt","item image"),b.yb(3),b.fc("data",null==n.user||null==n.user.name?null:n.user.name.concat(" ").concat(null==n.user?null:n.user.lastname)),b.yb(2),b.fc("data",null==n.user||null==n.user.age?null:n.user.age.toString().concat(" years young")),b.yb(22),b.fc("value",(null==n.user||null==n.user.languages?null:n.user.languages.english)/10),b.yb(5),b.fc("value",(null==n.user||null==n.user.languages?null:n.user.languages.spanish)/10),b.yb(5),b.fc("value",(null==n.user||null==n.user.languages?null:n.user.languages.french)/10),b.yb(5),b.fc("ngForOf",null==n.user?null:n.user.skills),b.yb(1),b.fc("ngIf",(null==n.relatedUsers?null:n.relatedUsers.length)>0))},directives:[i.u,i.cb,i.i,i.e,i.f,i.ab,i.h,i.p,i.L,i.o,p.a,m.a,_.a,i.v,i.G,i.B,o.l,o.m,i.x,i.kb,a.h],styles:['[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-related-users-gutter:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;margin-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 2);min-width:40%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{font-size:14px;font-weight:300;min-width:60%}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]{text-align:center;margin-top:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{--border-radius:50%;--padding-start:0px;--padding-end:0px;width:4ch;height:4ch}.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:24px}.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]{padding:var(--page-margin);border-top:1px solid var(--ion-color-light-shade)}.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{margin-top:0;margin-bottom:var(--page-margin)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:0;padding-inline-end:0}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-name[_ngcontent-%COMP%]{display:block;font-size:16px;font-weight:300;margin-bottom:calc(var(--page-margin) / 3)}.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-score[_ngcontent-%COMP%]{--buffer-background:rgba(var(--ion-color-secondary-rgb),.20);--progress-background:rgba(var(--ion-color-secondary-rgb),1);height:var(--page-margin);border-radius:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]{margin:0;padding:0}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{--min-height:initial;--padding-start:0px;--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:0px}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:not(:last-child){padding-bottom:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-list-icon[_ngcontent-%COMP%]{margin:0;margin-right:calc(var(--page-margin) / 2)}.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-label[_ngcontent-%COMP%]{font-size:16px;font-weight:300;width:100%}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]{--ion-grid-columns:7;--ion-grid-column-padding:0px;flex-wrap:nowrap;overflow-x:scroll;will-change:scroll-position;margin-left:calc(var(--page-margin) * -1);margin-right:calc(var(--page-margin) * -1);-ms-overflow-style:none;overflow:-moz-scrollbars-none;scrollbar-width:none}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]:after, .user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]:before{content:"";flex:0 0 calc(var(--page-margin) - var(--page-related-users-gutter))}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]{padding:0 var(--page-related-users-gutter);--col-item-width:2;flex:0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);max-width:calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%)}.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]   .related-user-name[_ngcontent-%COMP%]{display:block;text-align:center;margin-top:calc(var(--page-margin) / 2);font-size:14px}',"app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:24px}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px}.experience-label[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:40%}.experience-label[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}app-image-shell.related-user-picture[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius)}.related-user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:80%}.related-user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),e})(),N=(()=>{class e{constructor(e){this.firebaseCrudService=e}resolve(e){const n=e.paramMap.get("id"),t=this.firebaseCrudService.getCombinedUserDataSource(n),o=this.firebaseCrudService.getCombinedUserStore(t),r=this.firebaseCrudService.getRelatedUsersDataSource(o.state,n);return{user:o,relatedUsers:this.firebaseCrudService.getRelatedUsersStore(r)}}}return e.\u0275fac=function(n){return new(n||e)(b.Sb(d.a))},e.\u0275prov=b.Eb({token:e,factory:e.\u0275fac}),e})();var y=t("k8ID");const U=[{path:"",component:k,resolve:{data:N}}];let F=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(n){return new(n||e)},providers:[d.a,N],imports:[[o.c,r.h,r.o,i.db,a.k.forChild(U),c.a,y.a]]}),e})()}}]);