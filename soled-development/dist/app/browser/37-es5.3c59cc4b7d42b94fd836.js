!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Y0ph:function(n,r,o){"use strict";o.r(r),o.d(r,"FirebaseListingPageModule",(function(){return W}));var a=o("ofXK"),i=o("3Pt+"),c=o("tyNb"),s=o("TEn/"),g=o("mrSG"),l=o("jtHE"),b=o("VRyK"),u=o("eIep"),d=o("lJxs"),p=o("X1WR"),m=o("Wgwc"),h=o("ypRl"),O=o("pXCI"),f=o("j7gE"),C=o("izws"),M=o("fXoL"),_=o("B7gC"),P=o("2gss");function v(e,n){if(1&e&&(M.Ob(0,"ion-item",36),M.Ob(1,"ion-label",37),M.vc(2),M.Nb(),M.Jb(3,"ion-checkbox",38),M.Nb()),2&e){var t=n.index,r=M.Yb();M.yb(2),M.wc(r.skills[t].name),M.yb(1),M.fc("formControlName",t)}}var x,w=function(){return{w:1,h:1}},k=((x=function(){function n(t,r){e(this,n),this.modalController=t,this.firebaseCrudService=r,this.userData=new O.b,this.skills=[]}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.userData.avatar="https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png",this.createUserForm=new i.e({name:new i.c("",i.q.required),lastname:new i.c("",i.q.required),email:new i.c("",i.q.compose([i.q.required,i.q.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),phone:new i.c("",i.q.required),birthdate:new i.c(i.q.required),skills:new i.a([],h.a.minSelectedCheckboxes(1)),spanish:new i.c,english:new i.c,french:new i.c}),this.firebaseCrudService.getSkills().subscribe((function(n){e.skills=n,e.skills.map((function(){e.createUserForm.controls.skills.push(new i.c)}))}))}},{key:"changeLangValue",value:function(e){switch(!0){case e<=3:return"Novice";case e>3&&e<=6:return"Competent";case e>6:return"Expert"}}},{key:"dismissModal",value:function(){this.modalController.dismiss()}},{key:"createUser",value:function(){var e=this;this.userData.name=this.createUserForm.value.name,this.userData.lastname=this.createUserForm.value.lastname,this.userData.birthdate=m(this.createUserForm.value.birthdate).unix(),this.userData.phone=this.createUserForm.value.phone,this.userData.email=this.createUserForm.value.email,this.userData.languages.spanish=this.createUserForm.value.spanish,this.userData.languages.english=this.createUserForm.value.english,this.userData.languages.french=this.createUserForm.value.french;var n=[];this.createUserForm.value.skills.map((function(t,r){t&&n.push(e.skills[r].id)})),this.userData.skills=n,this.firebaseCrudService.createUser(this.userData).then((function(){e.dismissModal()}))}},{key:"changeUserImage",value:function(){return Object(g.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.modalController,e.t1=f.a,e.t2=!0,e.next=5,this.modalController.getTop();case 5:return e.t3=e.sent,e.t4={component:e.t1,swipeToClose:e.t2,presentingElement:e.t3},e.next=9,e.t0.create.call(e.t0,e.t4);case 9:return(n=e.sent).onDidDismiss().then((function(e){null!=e.data&&(t.userData.avatar=e.data.link)})),e.next=13,n.present();case 13:case"end":return e.stop()}}),e,this)})))}},{key:"skillsFormArray",get:function(){return this.createUserForm.get("skills")}}]),n}()).\u0275fac=function(e){return new(e||x)(M.Ib(s.db),M.Ib(C.a))},x.\u0275cmp=M.Cb({type:x,selectors:[["app-firebase-create-user"]],decls:77,vars:11,consts:[[1,"create-user-form","ion-page",3,"formGroup","ngSubmit"],["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],[1,"create-user-content"],[1,"select-user-image-row"],["size","5",1,"user-image-col"],[3,"ratio"],["animation","spinner",1,"user-image",3,"display","src","alt"],["color","secondary",1,"change-image-btn",3,"click"],["slot","icon-only","name","camera",1,"btn-icon"],[1,"user-details-fields","fields-section"],["lines","full",1,"inputs-list"],[1,"input-item"],["color","secondary","position","floating"],["type","text","formControlName","name","required",""],["type","text","formControlName","lastname","required",""],["display-format","DD/MM/YYYY","picker-format","DD MMMM YYYY","formControlName","birthdate","required",""],["type","tel","formControlName","phone","required",""],["type","email","formControlName","email","required",""],[1,"user-experience-fields","fields-section"],[1,"section-header"],[1,"checkbox-tags","rounded-checkbox-tags"],["formArrayName","skills","lines","none","class","checkbox-tag rounded-tag",4,"ngFor","ngForOf"],[1,"user-languages-fields","fields-section"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-label"],[1,"range-value"],["formControlName","english","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","spanish","color","secondary","min","1","max","10","step","1",1,"range-control"],["formControlName","french","color","secondary","min","1","max","10","step","1",1,"range-control"],[1,"form-actions-wrapper"],["expand","block","color","secondary","type","submit","fill","solid",1,"submit-btn",3,"disabled"],["formArrayName","skills","lines","none",1,"checkbox-tag","rounded-tag"],[1,"tag-label"],[3,"formControlName"]],template:function(e,n){1&e&&(M.Ob(0,"form",0),M.Wb("ngSubmit",(function(){return n.createUser()})),M.Ob(1,"ion-header"),M.Ob(2,"ion-toolbar",1),M.Ob(3,"ion-buttons",2),M.Ob(4,"ion-button",3),M.Wb("click",(function(){return n.dismissModal()})),M.Jb(5,"ion-icon",4),M.Nb(),M.Nb(),M.Ob(6,"ion-title"),M.vc(7,"New User"),M.Nb(),M.Nb(),M.Nb(),M.Ob(8,"ion-content",5),M.Ob(9,"ion-row",6),M.Ob(10,"ion-col",7),M.Ob(11,"app-aspect-ratio",8),M.Jb(12,"app-image-shell",9),M.Nb(),M.Ob(13,"ion-button",10),M.Wb("click",(function(){return n.changeUserImage()})),M.Jb(14,"ion-icon",11),M.Nb(),M.Nb(),M.Nb(),M.Ob(15,"section",12),M.Ob(16,"ion-list",13),M.Ob(17,"ion-item",14),M.Ob(18,"ion-label",15),M.vc(19,"Name"),M.Nb(),M.Jb(20,"ion-input",16),M.Nb(),M.Ob(21,"ion-item",14),M.Ob(22,"ion-label",15),M.vc(23,"Last name"),M.Nb(),M.Jb(24,"ion-input",17),M.Nb(),M.Ob(25,"ion-item",14),M.Ob(26,"ion-label",15),M.vc(27,"Date of Birth"),M.Nb(),M.Jb(28,"ion-datetime",18),M.Nb(),M.Ob(29,"ion-item",14),M.Ob(30,"ion-label",15),M.vc(31,"Phone number"),M.Nb(),M.Jb(32,"ion-input",19),M.Nb(),M.Ob(33,"ion-item",14),M.Ob(34,"ion-label",15),M.vc(35,"Email"),M.Nb(),M.Jb(36,"ion-input",20),M.Nb(),M.Nb(),M.Nb(),M.Ob(37,"section",21),M.Ob(38,"h5",22),M.vc(39,"Experience in"),M.Nb(),M.Ob(40,"ion-row",23),M.tc(41,v,4,2,"ion-item",24),M.Nb(),M.Nb(),M.Ob(42,"section",25),M.Ob(43,"h5",22),M.vc(44,"Languages"),M.Nb(),M.Ob(45,"ion-row",26),M.Ob(46,"ion-col",27),M.Ob(47,"div",28),M.Ob(48,"span",29),M.vc(49,"English"),M.Nb(),M.Ob(50,"span",30),M.vc(51),M.Nb(),M.Nb(),M.Nb(),M.Ob(52,"ion-col",27),M.Jb(53,"ion-range",31),M.Nb(),M.Nb(),M.Ob(54,"ion-row",26),M.Ob(55,"ion-col",27),M.Ob(56,"div",28),M.Ob(57,"span",29),M.vc(58,"Spanish"),M.Nb(),M.Ob(59,"span",30),M.vc(60),M.Nb(),M.Nb(),M.Nb(),M.Ob(61,"ion-col",27),M.Jb(62,"ion-range",32),M.Nb(),M.Nb(),M.Ob(63,"ion-row",26),M.Ob(64,"ion-col",27),M.Ob(65,"div",28),M.Ob(66,"span",29),M.vc(67,"French"),M.Nb(),M.Ob(68,"span",30),M.vc(69),M.Nb(),M.Nb(),M.Nb(),M.Ob(70,"ion-col",27),M.Jb(71,"ion-range",33),M.Nb(),M.Nb(),M.Nb(),M.Nb(),M.Ob(72,"ion-footer"),M.Ob(73,"ion-row",34),M.Ob(74,"ion-col"),M.Ob(75,"ion-button",35),M.vc(76,"CREATE"),M.Nb(),M.Nb(),M.Nb(),M.Nb(),M.Nb()),2&e&&(M.fc("formGroup",n.createUserForm),M.yb(11),M.fc("ratio",M.hc(10,w)),M.yb(1),M.fc("display","cover")("src",n.userData.avatar)("alt","user image"),M.yb(29),M.fc("ngForOf",n.skillsFormArray.controls),M.yb(10),M.wc(n.changeLangValue(n.createUserForm.controls.english.value)),M.yb(9),M.wc(n.changeLangValue(n.createUserForm.controls.spanish.value)),M.yb(9),M.wc(n.changeLangValue(n.createUserForm.controls.french.value)),M.yb(6),M.fc("disabled",!n.createUserForm.valid))},directives:[i.r,i.m,i.f,s.p,s.Y,s.h,s.g,s.q,s.W,s.k,s.H,s.j,_.a,P.a,s.x,s.t,s.w,s.s,s.ib,i.l,i.d,i.p,s.l,s.hb,a.l,s.F,s.o,i.b,s.i,s.b],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-background-shade:var(--app-background-shade);--page-tags-gutter:5px}.create-user-content[_ngcontent-%COMP%]{--background:var(--page-background)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin);background-color:var(--page-background-shade)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]{margin:0 auto;position:relative}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{border-radius:50%;border:3px solid var(--ion-color-lightest)}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]{--border-radius:50%;--padding-start:0px;--padding-end:0px;position:absolute;right:0;bottom:var(--page-margin);z-index:3;width:4ch;height:4ch;margin:0}.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:26px}.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]{padding:var(--page-margin) 0;border-bottom:calc(var(--page-margin) * 2) solid var(--page-background-shade)}.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{padding:0 var(--page-margin);margin-top:0;margin-bottom:var(--page-margin)}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]{padding:0 var(--page-margin)}.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:0px}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color:#000;--checkbox-tag-background:#fff;--checkbox-tag-active-color:#fff;--checkbox-tag-active-background:#000}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--ion-item-background:var(--checkbox-tag-background);--ion-item-color:var(--checkbox-tag-color)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius:2.2rem}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background:var(--checkbox-tag-active-background);--ion-item-color:var(--checkbox-tag-active-color)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--border-width:2px;--border-style:solid;--border-color:var(--ion-color-medium-shade);--checkbox-tag-color:var(--ion-color-medium-shade);--checkbox-tag-background:var(--ion-color-lightest);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--border-color:var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]{padding-bottom:0}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium-shade)}.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium-shade);padding-top:0;padding-bottom:0}.form-actions-wrapper[_ngcontent-%COMP%]{--ion-grid-column-padding:calc(var(--page-margin) / 2);padding:calc(var(--page-margin) / 2)}.form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{margin:0}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:50%}"]}),x),N=o("f/Ol"),y=o("zK/y"),F=function(e){return["/firebase/crud/details",e]},S=function(){return{w:1,h:1}};function D(e,n){if(1&e&&(M.Ob(0,"ion-item",24),M.Ob(1,"ion-row",25),M.Ob(2,"ion-col",26),M.Ob(3,"app-aspect-ratio",27),M.Jb(4,"app-image-shell",28),M.Nb(),M.Nb(),M.Ob(5,"ion-col",29),M.Ob(6,"div",30),M.Ob(7,"h3",31),M.Jb(8,"app-text-shell",32),M.Nb(),M.Ob(9,"h5",33),M.Jb(10,"app-text-shell",32),M.Nb(),M.Nb(),M.Nb(),M.Nb(),M.Nb()),2&e){var t=n.$implicit;M.fc("routerLink",M.ic(6,F,t.id)),M.yb(3),M.fc("ratio",M.hc(8,S)),M.yb(1),M.fc("src",t.avatar)("alt","item image"),M.yb(4),M.fc("data",null==t.name?null:t.name.concat(" ").concat(t.lastname)),M.yb(2),M.fc("data",null==t.age?null:t.age.toString().concat(" years old"))}}function U(e,n){if(1&e&&(M.Ob(0,"ion-list",22),M.tc(1,D,11,9,"ion-item",23),M.Nb()),2&e){var t=M.Yb();M.yb(1),M.fc("ngForOf",t.items)}}function q(e,n){1&e&&(M.Ob(0,"h3",34),M.vc(1," No users found for the selected filters. "),M.Nb())}var z,J,j,I=((J=function(){function n(t,r,o,a){e(this,n),this.firebaseCrudService=t,this.modalController=r,this.route=o,this.routerOutlet=a,this.showAgeFilter=!1,this.searchSubject=new l.a(1),this.searchFiltersObservable=this.searchSubject.asObservable()}return t(n,[{key:"ngOnDestroy",value:function(){this.stateSubscription.unsubscribe()}},{key:"ngOnInit",value:function(){var e=this;this.searchQuery="",this.rangeForm=new i.e({dual:new i.c({lower:1,upper:100})}),this.route.data.subscribe((function(n){e.listingDataStore=n.data;var t=e.searchFiltersObservable.pipe(Object(u.a)((function(n){var t=e.firebaseCrudService.searchUsersByAge(n.lower,n.upper),r=[new p.a,new p.a];return N.a.AppendShell(t,r,400).pipe(Object(d.a)((function(e){if(""===n.query||e.isShell)return e;var t=e.filter((function(e){return e.name.toLowerCase().includes(n.query.toLowerCase())}));return Object.assign(t,{isShell:e.isShell})})))})));e.stateSubscription=Object(b.a)(e.listingDataStore.state,t).subscribe((function(n){e.items=n}),(function(e){return console.log(e)}),(function(){return console.log("stateSubscription completed")}))}),(function(e){return console.log(e)}))}},{key:"openFirebaseCreateModal",value:function(){return Object(g.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:k,swipeToClose:!0,presentingElement:this.routerOutlet.nativeEl});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"searchList",value:function(){this.searchSubject.next({lower:this.rangeForm.controls.dual.value.lower,upper:this.rangeForm.controls.dual.value.upper,query:this.searchQuery})}},{key:"isShell",get:function(){return!(!this.items||!this.items.isShell)}}]),n}()).\u0275fac=function(e){return new(e||J)(M.Ib(C.a),M.Ib(s.db),M.Ib(c.a),M.Ib(s.G))},J.\u0275cmp=M.Cb({type:J,selectors:[["app-firebase-listing"]],hostVars:2,hostBindings:function(e,n){2&e&&M.Ab("is-shell",n.isShell)},decls:31,vars:7,consts:[["color","primary"],["slot","start"],["color","light"],["slot","end"],[3,"click"],["slot","icon-only","name","add"],[1,"filters-toolbar"],["align-items-center","",1,"searchbar-row"],["animated","","placeholder","Filter by name...",1,"items-searchbar",3,"ngModel","ngModelChange","ionChange"],[1,"call-to-action-col"],["fill","clear","color","secondary",1,"filters-btn",3,"click"],["slot","icon-only","name","options"],[3,"formGroup","hidden"],[1,"range-item-row"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","pin","true","dualKnobs","true","min","1","max","100","step","1","debounce","400",1,"range-control",3,"ionChange"],[1,"firebase-listing-content"],["class","items-list",4,"ngIf"],["class","empty-list-message",4,"ngIf"],[1,"items-list"],["class","list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-item",3,"routerLink"],[1,"user-row"],["size","3",1,"user-image-wrapper"],[3,"ratio"],["animation","spinner",1,"user-image",3,"src","alt"],[1,"user-data-wrapper"],[1,"user-info"],[1,"user-name"],["animation","bouncing",3,"data"],[1,"user-age"],[1,"empty-list-message"]],template:function(e,n){1&e&&(M.Ob(0,"ion-header"),M.Ob(1,"ion-toolbar",0),M.Ob(2,"ion-buttons",1),M.Jb(3,"ion-menu-button",2),M.Nb(),M.Ob(4,"ion-title"),M.vc(5,"Firebase"),M.Nb(),M.Ob(6,"ion-buttons",3),M.Ob(7,"ion-button",4),M.Wb("click",(function(){return n.openFirebaseCreateModal()})),M.Jb(8,"ion-icon",5),M.Nb(),M.Nb(),M.Nb(),M.Ob(9,"ion-toolbar",6),M.Ob(10,"ion-row",7),M.Ob(11,"ion-col"),M.Ob(12,"ion-searchbar",8),M.Wb("ngModelChange",(function(e){return n.searchQuery=e}))("ionChange",(function(){return n.searchList()})),M.Nb(),M.Nb(),M.Ob(13,"ion-col",9),M.Ob(14,"ion-button",10),M.Wb("click",(function(){return n.showAgeFilter=!n.showAgeFilter})),M.Jb(15,"ion-icon",11),M.Nb(),M.Nb(),M.Nb(),M.Ob(16,"form",12),M.Ob(17,"ion-row",13),M.Ob(18,"ion-col",14),M.Ob(19,"div",15),M.Ob(20,"span",16),M.vc(21),M.Nb(),M.Ob(22,"span",17),M.vc(23,"Filter by age"),M.Nb(),M.Ob(24,"span",16),M.vc(25),M.Nb(),M.Nb(),M.Nb(),M.Ob(26,"ion-col",14),M.Ob(27,"ion-range",18),M.Wb("ionChange",(function(){return n.searchList()})),M.Nb(),M.Nb(),M.Nb(),M.Nb(),M.Nb(),M.Nb(),M.Ob(28,"ion-content",19),M.tc(29,U,2,1,"ion-list",20),M.tc(30,q,2,0,"h3",21),M.Nb()),2&e&&(M.yb(12),M.fc("ngModel",n.searchQuery),M.yb(4),M.fc("formGroup",n.rangeForm)("hidden",!n.showAgeFilter),M.yb(5),M.wc(n.rangeForm.controls.dual.value.lower),M.yb(4),M.wc(n.rangeForm.controls.dual.value.upper),M.yb(4),M.fc("ngIf",(null==n.items?null:n.items.length)>0),M.yb(1),M.fc("ngIf",0==(null==n.items?null:n.items.length)))},directives:[s.p,s.Y,s.h,s.A,s.W,s.g,s.q,s.H,s.j,s.I,s.ib,i.l,i.n,i.r,i.m,i.f,s.F,s.hb,i.d,s.k,a.m,s.x,a.l,s.t,s.gb,c.h,_.a,P.a,y.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background)}.filters-toolbar[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--padding-top:var(--page-margin);--padding-bottom:var(--page-margin)}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding:0;height:100%;contain:content}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]{-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;flex-shrink:0;flex-grow:0;display:flex;justify-content:flex-end}.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .filters-btn[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;margin:0;font-size:18px;height:auto}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;margin-top:var(--page-margin);padding-top:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium);padding-top:0;padding-bottom:0}.firebase-listing-content[_ngcontent-%COMP%]{--background:var(--page-background)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:0px;--inner-padding-start:0px;--inner-padding-end:var(--page-margin);--inner-padding-top:calc(var(--page-margin) / 2);--inner-padding-bottom:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;width:100%}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-start:calc(var(--page-margin) / 2);padding-inline-start:calc(var(--page-margin) / 2);display:flex;flex-direction:column;justify-content:center}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:calc(var(--page-margin) / 2)}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin) / 4);font-size:16px}.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%]{margin:0;color:rgba(var(--ion-color-dark-rgb),.4);font-size:14px}.firebase-listing-content[_ngcontent-%COMP%]   .empty-list-message[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * 3);color:rgba(var(--ion-color-dark-rgb),.4);text-align:center}",".ios[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]{-webkit-padding-end:calc(var(--page-margin) / 2);padding-inline-end:calc(var(--page-margin) / 2)}.ios[_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%]{padding-top:var(--padding-top);padding-bottom:var(--padding-bottom)}","app-image-shell.user-image[_ngcontent-%COMP%]{--image-shell-border-radius:var(--app-fair-radius)}.user-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:16px;max-width:80%}.user-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.user-age[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-height:14px;max-width:40%}.user-age[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}"]}),J),L=((z=function(){function n(t){e(this,n),this.firebaseCrudService=t}return t(n,[{key:"resolve",value:function(){var e=this.firebaseCrudService.getListingDataSource();return this.firebaseCrudService.getListingStore(e)}}]),n}()).\u0275fac=function(e){return new(e||z)(M.Sb(C.a))},z.\u0275prov=M.Eb({token:z,factory:z.\u0275fac}),z),A=o("j1ZV"),E=o("k8ID"),Y=[{path:"",component:I,resolve:{data:L}}],W=((j=function n(){e(this,n)}).\u0275mod=M.Gb({type:j}),j.\u0275inj=M.Fb({factory:function(e){return new(e||j)},providers:[C.a,L],imports:[[a.c,i.h,i.o,s.Z,A.a,c.k.forChild(Y),E.a]]}),j)}}])}();