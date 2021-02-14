(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Y0ph:function(e,n,t){"use strict";t.r(n),t.d(n,"FirebaseListingPageModule",(function(){return L}));var o=t("ofXK"),r=t("3Pt+"),a=t("tyNb"),i=t("TEn/"),c=t("mrSG"),s=t("jtHE"),g=t("VRyK"),l=t("eIep"),b=t("lJxs"),d=t("X1WR"),p=t("Wgwc"),u=t("ypRl"),m=t("pXCI"),h=t("j7gE"),O=t("izws"),C=t("fXoL"),M=t("B7gC"),f=t("2gss");function _(e,n){if(1&e&&(C.Ob(0,"ion-item",36),C.Ob(1,"ion-label",37),C.vc(2),C.Nb(),C.Jb(3,"ion-checkbox",38),C.Nb()),2&e){const e=n.index,t=C.Yb();C.yb(2),C.wc(t.skills[e].name),C.yb(1),C.fc("formControlName",e)}}const P=function(){return{w:1,h:1}};let v=(()=>{class e{constructor(e,n){this.modalController=e,this.firebaseCrudService=n,this.userData=new m.b,this.skills=[]}ngOnInit(){this.userData.avatar="https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png",this.createUserForm=new r.e({name:new r.c("",r.q.required),lastname:new r.c("",r.q.required),email:new r.c("",r.q.compose([r.q.required,r.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),phone:new r.c("",r.q.required),birthdate:new r.c(r.q.required),skills:new r.a([],u.a.minSelectedCheckboxes(1)),spanish:new r.c,english:new r.c,french:new r.c}),this.firebaseCrudService.getSkills().subscribe(e=>{this.skills=e,this.skills.map(()=>{this.createUserForm.controls.skills.push(new r.c)})})}get skillsFormArray(){return this.createUserForm.get("skills")}changeLangValue(e){switch(!0){case e<=3:return"Novice";case e>3&&e<=6:return"Competent";case e>6:return"Expert"}}dismissModal(){this.modalController.dismiss()}createUser(){this.userData.name=this.createUserForm.value.name,this.userData.lastname=this.createUserForm.value.lastname,this.userData.birthdate=p(this.createUserForm.value.birthdate).unix(),this.userData.phone=this.createUserForm.value.phone,this.userData.email=this.createUserForm.value.email,this.userData.languages.spanish=this.createUserForm.value.spanish,this.userData.languages.english=this.createUserForm.value.english,this.userData.languages.french=this.createUserForm.value.french;const e=[];this.createUserForm.value.skills.map((n,t)=>{n&&e.push(this.skills[t].id)}),this.userData.skills=e,this.firebaseCrudService.createUser(this.userData).then(()=>{this.dismissModal()})}changeUserImage(){return Object(c.__awaiter)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:h.a,swipeToClose:!0,presentingElement:yield this.modalController.getTop()});e.onDidDismiss().then(e=>{null!=e.data&&(this.userData.avatar=e.data.link)}),yield e.present()}))}}return e.\u0275fac=function(n){return new(n||e)(C.Ib(i.jb),C.Ib(O.a))},e.\u0275cmp=C.Cb({type:e,selectors:[["app-firebase-create-user"]],decls:77,vars:11,consts:[[1,"create-user-form","ion-page",3,"formGroup","ngSubmit"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"create-user-content"],[1,"select-user-image-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["color","secondary",1,"change-image-btn",3,"click"],["slot","icon-only","name","camera",1,"btn-icon"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","secondary","position","floating"],["type","text","formControlName","name","required",""],["type","text","formControlName","lastname","required",""],["display-format","DD/MM/YYYY","picker-format","DD MMMM YYYY","formControlName","birthdate","required",""],["type","tel","formControlName","phone","required",""],["type","email","formControlName","email","required",""],[1,"user-experience-fields","fields-section"],[1,"section-header"],[1,"checkbox-tags","rounded-checkbox-tags"],["formArrayName","skills","lines","none","class","checkbox-tag rounded-tag",4,"ngFor","ngForOf"],[1,"user-languages-fields","fields-section"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-label"],[1,"range-value"],["formControlName","english","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","spanish","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","french","color","secondary","min","1","max","10","step","1",1,"range-control"],[1,"form-actions-wrapper"],["expand","block","color","secondary","type","submit","fill","solid",1,"submit-btn",3,"disabled"],["formArrayName","skills","lines","none",1,"checkbox-tag","rounded-tag"],[1,"tag-label"],[3,"formControlName"]],template:function(e,n){1&e&&(C.Ob(0,"form",0),C.Wb("ngSubmit",(function(){return n.createUser()})),C.Ob(1,"ion-header"),C.Ob(2,"ion-toolbar",1),C.Ob(3,"ion-buttons",2),C.Ob(4,"ion-button",3),C.Wb("click",(function(){return n.dismissModal()})),C.Jb(5,"ion-icon",4),C.Nb(),C.Nb(),C.Ob(6,"ion-title"),C.vc(7,"New User"),C.Nb(),C.Nb(),C.Nb(),C.Ob(8,"ion-content",5),C.Ob(9,"ion-row",6),C.Ob(10,"ion-col",7),C.Ob(11,"app-aspect-ratio",8),C.Jb(12,"app-image-shell",9),C.Nb(),C.Ob(13,"ion-button",10),C.Wb("click",(function(){return n.changeUserImage()})),C.Jb(14,"ion-icon",11),C.Nb(),C.Nb(),C.Nb(),C.Ob(15,"section",12),C.Ob(16,"ion-list",13),C.Ob(17,"ion-item",14),C.Ob(18,"ion-label",15),C.vc(19,"Name"),C.Nb(),C.Jb(20,"ion-input",16),C.Nb(),C.Ob(21,"ion-item",14),C.Ob(22,"ion-label",15),C.vc(23,"Last name"),C.Nb(),C.Jb(24,"ion-input",17),C.Nb(),C.Ob(25,"ion-item",14),C.Ob(26,"ion-label",15),C.vc(27,"Date of Birth"),C.Nb(),C.Jb(28,"ion-datetime",18),C.Nb(),C.Ob(29,"ion-item",14),C.Ob(30,"ion-label",15),C.vc(31,"Phone number"),C.Nb(),C.Jb(32,"ion-input",19),C.Nb(),C.Ob(33,"ion-item",14),C.Ob(34,"ion-label",15),C.vc(35,"Email"),C.Nb(),C.Jb(36,"ion-input",20),C.Nb(),C.Nb(),C.Nb(),C.Ob(37,"section",21),C.Ob(38,"h5",22),C.vc(39,"Experience in"),C.Nb(),C.Ob(40,"ion-row",23),C.tc(41,_,4,2,"ion-item",24),C.Nb(),C.Nb(),C.Ob(42,"section",25),C.Ob(43,"h5",22),C.vc(44,"Languages"),C.Nb(),C.Ob(45,"ion-row",26),C.Ob(46,"ion-col",27),C.Ob(47,"div",28),C.Ob(48,"span",29),C.vc(49,"English"),C.Nb(),C.Ob(50,"span",30),C.vc(51),C.Nb(),C.Nb(),C.Nb(),C.Ob(52,"ion-col",27),C.Jb(53,"ion-range",31),C.Nb(),C.Nb(),C.Ob(54,"ion-row",26),C.Ob(55,"ion-col",27),C.Ob(56,"div",28),C.Ob(57,"span",29),C.vc(58,"Spanish"),C.Nb(),C.Ob(59,"span",30),C.vc(60),C.Nb(),C.Nb(),C.Nb(),C.Ob(61,"ion-col",27),C.Jb(62,"ion-range",32),C.Nb(),C.Nb(),C.Ob(63,"ion-row",26),C.Ob(64,"ion-col",27),C.Ob(65,"div",28),C.Ob(66,"span",29),C.vc(67,"French"),C.Nb(),C.Ob(68,"span",30),C.vc(69),C.Nb(),C.Nb(),C.Nb(),C.Ob(70,"ion-col",27),C.Jb(71,"ion-range",33),C.Nb(),C.Nb(),C.Nb(),C.Nb(),C.Ob(72,"ion-footer"),C.Ob(73,"ion-row",34),C.Ob(74,"ion-col"),C.Ob(75,"ion-button",35),C.vc(76,"CREATE"),C.Nb(),C.Nb(),C.Nb(),C.Nb(),C.Nb()),2&e&&(C.fc("formGroup",n.createUserForm),C.yb(11),C.fc("ratio",C.hc(10,P)),C.yb(1),C.fc("display","cover")("src",n.userData.avatar)("alt","user image"),C.yb(29),C.fc("ngForOf",n.skillsFormArray.controls),C.yb(10),C.wc(n.changeLangValue(n.createUserForm.controls.english.value)),C.yb(9),C.wc(n.changeLangValue(n.createUserForm.controls.spanish.value)),C.yb(9),C.wc(n.changeLangValue(n.createUserForm.controls.french.value)),C.yb(6),C.fc("disabled",!n.createUserForm.valid))},directives:[r.r,r.m,r.f,i.v,i.eb,i.i,i.h,i.w,i.cb,i.q,i.N,i.p,M.a,f.a,i.D,i.z,i.C,i.y,i.ob,r.l,r.d,r.p,i.r,i.nb,o.l,i.L,i.u,r.b,i.o,i.b],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.create-user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);background-color:var(--page-background-shade)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;position:relative}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%;border:3px solid var(--ion-color-lightest)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]{--border-radius:50%;--padding-start:0px;--padding-end:0px;position:absolute;right:0;bottom:var(--page-margin);z-index:3;width:4ch;height:4ch;margin:0}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:26px}.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]{padding:var(--page-margin) 0;border-bottom:calc(var(--page-margin) * 2) solid var(--page-background-shade)}.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{padding:0 var(--page-margin);margin-top:0;margin-bottom:var(--page-margin)}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{padding:0 var(--page-margin)}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:0px}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color:#000;--checkbox-tag-background:#fff;--checkbox-tag-active-color:#fff;--checkbox-tag-active-background:#000}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--ion-item-background:var(--checkbox-tag-background);--ion-item-color:var(--checkbox-tag-color)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius:2.2rem}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background:var(--checkbox-tag-active-background);--ion-item-color:var(--checkbox-tag-active-color)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--border-width:2px;--border-style:solid;--border-color:var(--ion-color-medium-shade);--checkbox-tag-color:var(--ion-color-medium-shade);--checkbox-tag-background:var(--ion-color-lightest);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--border-color:var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]{padding-bottom:0}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium-shade);padding-top:0;padding-bottom:0}.form-actions-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}.form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]}),e})();var x=t("f/Ol"),w=t("zK/y");const k=function(e){return["/firebase/crud/details",e]},N=function(){return{w:1,h:1}};function y(e,n){if(1&e&&(C.Ob(0,"ion-item",24),C.Ob(1,"ion-row",25),C.Ob(2,"ion-col",26),C.Ob(3,"app-aspect-ratio",27),C.Jb(4,"app-image-shell",28),C.Nb(),C.Nb(),C.Ob(5,"ion-col",29),C.Ob(6,"div",30),C.Ob(7,"h3",31),C.Jb(8,"app-text-shell",32),C.Nb(),C.Ob(9,"h5",33),C.Jb(10,"app-text-shell",32),C.Nb(),C.Nb(),C.Nb(),C.Nb(),C.Nb()),2&e){const e=n.$implicit;C.fc("routerLink",C.ic(6,k,e.id)),C.yb(3),C.fc("ratio",C.hc(8,N)),C.yb(1),C.fc("src",e.avatar)("alt","item image"),C.yb(4),C.fc("data",null==e.name?null:e.name.concat(" ").concat(e.lastname)),C.yb(2),C.fc("data",null==e.age?null:e.age.toString().concat(" years old"))}}function F(e,n){if(1&e&&(C.Ob(0,"ion-list",22),C.tc(1,y,11,9,"ion-item",23),C.Nb()),2&e){const e=C.Yb();C.yb(1),C.fc("ngForOf",e.items)}}function S(e,n){1&e&&(C.Ob(0,"h3",34),C.vc(1," No users found for the selected filters. "),C.Nb())}let D=(()=>{class e{constructor(e,n,t,o){this.firebaseCrudService=e,this.modalController=n,this.route=t,this.routerOutlet=o,this.showAgeFilter=!1,this.searchSubject=new s.a(1),this.searchFiltersObservable=this.searchSubject.asObservable()}get isShell(){return!(!this.items||!this.items.isShell)}ngOnDestroy(){this.stateSubscription.unsubscribe()}ngOnInit(){this.searchQuery="",this.rangeForm=new r.e({dual:new r.c({lower:1,upper:100})}),this.route.data.subscribe(e=>{this.listingDataStore=e.data;const n=this.searchFiltersObservable.pipe(Object(l.a)(e=>{const n=this.firebaseCrudService.searchUsersByAge(e.lower,e.upper),t=[new d.a,new d.a];return x.a.AppendShell(n,t,400).pipe(Object(b.a)(n=>{if(""===e.query||n.isShell)return n;{const t=n.filter(n=>n.name.toLowerCase().includes(e.query.toLowerCase()));return Object.assign(t,{isShell:n.isShell})}}))}));this.stateSubscription=Object(g.a)(this.listingDataStore.state,n).subscribe(e=>{this.items=e},e=>console.log(e),()=>console.log("stateSubscription completed"))},e=>console.log(e))}openFirebaseCreateModal(){return Object(c.__awaiter)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:v,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});yield e.present()}))}searchList(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery})}}return e.\u0275fac=function(n){return new(n||e)(C.Ib(O.a),C.Ib(i.jb),C.Ib(a.a),C.Ib(i.M))},e.\u0275cmp=C.Cb({type:e,selectors:[["app-firebase-listing"]],hostVars:2,hostBindings:function(e,n){2&e&&C.Ab("is-shell",n.isShell)},decls:31,vars:7,consts:[["color","primary"],["slot","start"],["color","light"],["slot","end"],[3,"click"],["slot","icon-only","name","add"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","","placeholder","Filter by name...",1,"items-searchbar",3,"ngModel","ngModelChange","ionChange"],[1,"call-to-action-col"],["fill","clear","color","secondary",1,"filters-btn",3,"click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"firebase-listing-content"],["class","items-list",4,"ngIf"],["class","empty-list-message",4,"ngIf"],[1,"items-list"],["class","list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-item",3,"routerLink"],[1,"user-row"],["size","3",1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src","alt"],[1,"user-data-wrapper"],[1,"user-info"],[1,"user-name"],["animation","bouncing",3,"data"],[1,"user-age"],[1,"empty-list-message"]],template:function(e,n){1&e&&(C.Ob(0,"ion-header"),C.Ob(1,"ion-toolbar",0),C.Ob(2,"ion-buttons",1),C.Jb(3,"ion-menu-button",2),C.Nb(),C.Ob(4,"ion-title"),C.vc(5,"Firebase"),C.Nb(),C.Ob(6,"ion-buttons",3),C.Ob(7,"ion-button",4),C.Wb("click",(function(){return n.openFirebaseCreateModal()})),C.Jb(8,"ion-icon",5),C.Nb(),C.Nb(),C.Nb(),C.Ob(9,"ion-toolbar",6),C.Ob(10,"ion-row",7),C.Ob(11,"ion-col"),C.Ob(12,"ion-searchbar",8),C.Wb("ngModelChange",(function(e){return n.searchQuery=e}))("ionChange",(function(){return n.searchList()})),C.Nb(),C.Nb(),C.Ob(13,"ion-col",9),C.Ob(14,"ion-button",10),C.Wb("click",(function(){return n.showAgeFilter=!n.showAgeFilter})),C.Jb(15,"ion-icon",11),C.Nb(),C.Nb(),C.Nb(),C.Ob(16,"form",12),C.Ob(17,"ion-row",13),C.Ob(18,"ion-col",14),C.Ob(19,"div",15),C.Ob(20,"span",16),C.vc(21),C.Nb(),C.Ob(22,"span",17),C.vc(23,"Filter by age"),C.Nb(),C.Ob(24,"span",16),C.vc(25),C.Nb(),C.Nb(),C.Nb(),C.Ob(26,"ion-col",14),C.Ob(27,"ion-range",18),C.Wb("ionChange",(function(){return n.searchList()})),C.Nb(),C.Nb(),C.Nb(),C.Nb(),C.Nb(),C.Nb(),C.Ob(28,"ion-content",19),C.tc(29,F,2,1,"ion-list",20),C.tc(30,S,2,0,"h3",21),C.Nb()),2&e&&(C.yb(12),C.fc("ngModel",n.searchQuery),C.yb(4),C.fc("formGroup",n.rangeForm)("hidden",!n.showAgeFilter),C.yb(5),C.wc(n.rangeForm.controls.dual.value.lower),C.yb(4),C.wc(n.rangeForm.controls.dual.value.upper),C.yb(4),C.fc("ngIf",(null==n.items?null:n.items.length)>0),C.yb(1),C.fc("ngIf",0==(null==n.items?null:n.items.length)))},directives:[i.v,i.eb,i.i,i.G,i.cb,i.h,i.w,i.N,i.p,i.O,i.ob,r.l,r.n,r.r,r.m,r.f,i.L,i.nb,r.d,i.q,o.m,i.D,o.l,i.z,i.mb,a.h,M.a,f.a,w.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background)}.filters-toolbar[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding:0;height:100%;contain:content}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;flex-shrink:0;flex-grow:0;display:flex;justify-content:flex-end}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .filters-btn[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;margin:0;font-size:18px;height:auto}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin-top:var(--page-margin);padding-top:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium);padding-top:0;padding-bottom:0}.firebase-listing-content[_ngcontent-%COMP%]{--background:var(--page-background)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:var(--page-margin);--inner-padding-top:calc(var(--page-margin) / 2);--inner-padding-bottom:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:calc(var(--page-margin) / 2);padding-inline-start:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 4);font-size:16px}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}.firebase-listing-content[_ngcontent-%COMP%]   .empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}",".ios[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.ios[_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:80%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:40%}.user-age[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),e})(),U=(()=>{class e{constructor(e){this.firebaseCrudService=e}resolve(){const e=this.firebaseCrudService.getListingDataSource();return this.firebaseCrudService.getListingStore(e)}}return e.\u0275fac=function(n){return new(n||e)(C.Sb(O.a))},e.\u0275prov=C.Eb({token:e,factory:e.\u0275fac}),e})();var z=t("j1ZV"),q=t("k8ID");const J=[{path:"",component:D,resolve:{data:U}}];let L=(()=>{class e{}return e.\u0275mod=C.Gb({type:e}),e.\u0275inj=C.Fb({factory:function(n){return new(n||e)},providers:[O.a,U],imports:[[o.c,r.h,r.o,i.fb,z.a,a.k.forChild(J),q.a]]}),e})()}}]);