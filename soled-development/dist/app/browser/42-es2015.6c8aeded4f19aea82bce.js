(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"F/Sz":function(n,o,t){"use strict";t.r(o),t.d(o,"FormsFiltersPageModule",(function(){return m}));var e=t("ofXK"),i=t("tyNb"),r=t("3Pt+"),a=t("TEn/"),c=t("j1ZV"),g=t("lfmG"),b=t("fXoL");function l(n,o){if(1&n){const n=b.Pb();b.Ob(0,"ion-button",1),b.Wb("click",(function(){b.qc(n);const t=o.index;return b.ac().rate(t+1)})),b.Jb(1,"ion-icon",2),b.Nb()}if(2&n){const n=o.$implicit,t=o.index,e=b.ac();b.yb(1),b.hc("name",void 0===e.value?1===n?"star":2===n?"star-half":"star-outline":e.value>t?e.value<t+1?"star-half":"star":"star-outline")}}let d=(()=>{class n{constructor(){this.max=5,this.readOnly=!1,this.propagateChange=()=>{}}ngOnInit(){const n=[];for(let o=0;o<this.max;o++)n[o]=this.innerValue>o&&this.innerValue<o+1?2:this.innerValue>o?1:0;this.range=n}get value(){return this.innerValue}set value(n){n!==this.innerValue&&(this.innerValue=n,this.propagateChange(n))}writeValue(n){n!==this.innerValue&&(this.innerValue=n)}registerOnChange(n){this.propagateChange=n}registerOnTouched(){}rate(n){!this.readOnly&&n>=0&&n<=this.range.length&&(this.value=n)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=b.Cb({type:n,selectors:[["app-rating-input"]],inputs:{max:"max",readOnly:"readOnly"},features:[b.xb([{provide:r.j,useExisting:Object(b.T)(()=>n),multi:!0}])],decls:1,vars:1,consts:[["class","rating-icon","fill","clear","shape","round",3,"click",4,"ngFor","ngForOf"],["fill","clear","shape","round",1,"rating-icon",3,"click"],["slot","icon-only",3,"name"]],template:function(n,o){1&n&&b.vc(0,l,2,1,"ion-button",0),2&n&&b.hc("ngForOf",o.range)},directives:[e.l,a.g,a.q],styles:["app-rating-input{--rating-background:transparent;--rating-color:#000;--rating-size:32px;display:flex;align-items:center;justify-content:flex-end}app-rating-input ion-button.rating-icon{--background:var(--rating-background);--color:var(--rating-color);--color-activated:var(--rating-color);--box-shadow:none;--padding-bottom:0px;--padding-end:4px;--padding-start:4px;--padding-top:0px;margin:0;flex:1;width:var(--rating-size)}"],encapsulation:2}),n})();var s=t("B7gC");const O=function(){return{w:1,h:1}},p=[{path:"",component:(()=>{class n{constructor(){this.rangeForm=new r.e({single:new r.c(25),dual:new r.c({lower:12,upper:23})}),this.checkboxForm=new r.e({person_1:new r.c(!0),person_2:new r.c(!1),person_3:new r.c(!1),person_4:new r.c(!0),person_5:new r.c(!1)}),this.radioForm=new r.e({selected_option:new r.c("apple")}),this.checkboxTagsForm=new r.e({tag_1:new r.c(!0),tag_2:new r.c(!1),tag_3:new r.c(!0),tag_4:new r.c(!0),tag_5:new r.c(!1),tag_6:new r.c(!1),tag_7:new r.c({value:!0,disabled:!0}),tag_8:new r.c(!1)}),this.radioTagsForm=new r.e({selected_option:new r.c("any")}),this.switchersForm=new r.e({notifications:new r.c(!0),email_notifications:new r.c(!1)}),this.counterForm=new r.e({counter:new r.c(5,Object(g.b)(1,7)),counter2:new r.c(2,Object(g.b)(1,5))}),this.ratingForm=new r.e({rate:new r.c(2.5),rate2:new r.c(1.5)}),this.radioColorForm=new r.e({selected_color:new r.c("#fc9961")})}rangeChange(n){console.log("range change",n)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=b.Cb({type:n,selectors:[["forms-filters-page"]],decls:267,vars:32,consts:[["color","primary"],["slot","start"],[1,"filters-content"],[1,"filters-group"],[1,"range-list",3,"formGroup"],[1,"range-item"],["size","12"],[1,"range-header"],[1,"range-value"],[1,"range-label"],["formControlName","dual","color","secondary","dualKnobs","true","min","1","max","40","step","1",1,"range-control",3,"ionChange"],["formControlName","single","color","secondary","min","0","max","50","step","1",1,"range-control",3,"ionChange"],[3,"formGroup"],["lines","full",1,"checkbox-list"],[1,"checkbox-item"],[1,"checkbox-label"],["color","secondary","formControlName","person_1"],["color","secondary","formControlName","person_2"],["color","secondary","formControlName","person_3"],["color","secondary","formControlName","person_4"],["color","secondary","formControlName","person_5"],["lines","full",1,"radio-list"],["formControlName","selected_option",1,"radio-group"],[1,"radio-item"],[1,"radio-label"],["slot","start","color","secondary","value","apple"],["slot","start","color","secondary","value","banana"],["slot","start","color","secondary","value","orange","disabled","true"],["slot","start","color","secondary","value","kiwi"],[1,"checkbox-tags","square-checkbox-tags"],["lines","none",1,"checkbox-tag"],[1,"tag-label"],["formControlName","tag_1"],["formControlName","tag_2"],["formControlName","tag_3"],["formControlName","tag_4"],["formControlName","tag_5"],["formControlName","tag_6"],["formControlName","tag_7"],["formControlName","tag_8"],[1,"checkbox-tags","rounded-checkbox-tags"],["lines","none",1,"checkbox-tag","rounded-tag"],["formControlName","selected_option"],[1,"radio-tags"],["lines","none",1,"radio-tag"],["value","any"],["value","1"],["value","2","disabled","true"],["value","3"],["lines","full",1,"toggle-list"],[1,"toggle-item"],[1,"toggle-label"],["color","secondary","formControlName","notifications"],["color","secondary","formControlName","email_notifications"],["lines","full",1,"counter-list"],[1,"counter-item"],[1,"counter-label"],["formControlName","counter"],[1,"counter-value"],["formControlName","counter2","basic",""],["lines","full",1,"ratings-list"],[1,"rating-item"],[1,"rating-label"],["formControlName","rate","max","5"],["formControlName","rate2","max","3","readOnly","true"],["formControlName","selected_color"],[1,"color-radio-group"],[1,"color-radio",2,"--color-radio-background","#fc6161"],[3,"ratio"],[1,"color-radio-inner-wrapper"],[1,"color-label"],["value","#fc6161"],[1,"color-radio",2,"--color-radio-background","#fc9961"],["value","#fc9961"],[1,"color-radio",2,"--color-radio-background","#fcea61"],["value","#fcea61","disabled","true"],[1,"color-radio",2,"--color-radio-background","#affc61"],["value","#affc61"],[1,"color-radio",2,"--color-radio-background","#61fcc5"],["value","#61fcc5"],[1,"color-radio",2,"--color-radio-background","#fc61ad"],["value","#fc61ad"],[1,"color-radio",2,"--color-radio-background","#b561fc"],["value","#b561fc"],[1,"color-radio",2,"--color-radio-background","#6182fc"],["value","#6182fc"],[1,"color-radio",2,"--color-radio-background","#61d1fc"],["value","#61d1fc"]],template:function(n,o){1&n&&(b.Ob(0,"ion-header"),b.Ob(1,"ion-toolbar",0),b.Ob(2,"ion-buttons",1),b.Jb(3,"ion-menu-button"),b.Nb(),b.Ob(4,"ion-title"),b.xc(5,"Filters"),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content",2),b.Ob(7,"ion-item-group",3),b.Ob(8,"ion-item-divider"),b.Ob(9,"ion-label"),b.xc(10,"Range"),b.Nb(),b.Nb(),b.Ob(11,"form",4),b.Ob(12,"ion-row",5),b.Ob(13,"ion-col",6),b.Ob(14,"div",7),b.Ob(15,"span",8),b.xc(16),b.Nb(),b.Ob(17,"span",9),b.xc(18,"Quantity"),b.Nb(),b.Ob(19,"span",8),b.xc(20),b.Nb(),b.Nb(),b.Nb(),b.Ob(21,"ion-col",6),b.Ob(22,"ion-range",10),b.Wb("ionChange",(function(n){return o.rangeChange(n)})),b.Nb(),b.Nb(),b.Nb(),b.Ob(23,"ion-row",5),b.Ob(24,"ion-col",6),b.Ob(25,"div",7),b.Ob(26,"span",9),b.xc(27,"Amount"),b.Nb(),b.Ob(28,"span",8),b.xc(29),b.Nb(),b.Nb(),b.Nb(),b.Ob(30,"ion-col",6),b.Ob(31,"ion-range",11),b.Wb("ionChange",(function(n){return o.rangeChange(n)})),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(32,"ion-item-divider"),b.Ob(33,"ion-label"),b.xc(34,"Multiple Items"),b.Nb(),b.Nb(),b.Ob(35,"form",12),b.Ob(36,"ion-list",13),b.Ob(37,"ion-item",14),b.Ob(38,"ion-label",15),b.xc(39,"Sophia Martin"),b.Nb(),b.Jb(40,"ion-checkbox",16),b.Nb(),b.Ob(41,"ion-item",14),b.Ob(42,"ion-label",15),b.xc(43,"Mattie Abbott"),b.Nb(),b.Jb(44,"ion-checkbox",17),b.Nb(),b.Ob(45,"ion-item",14),b.Ob(46,"ion-label",15),b.xc(47,"Marguerite Alvarez"),b.Nb(),b.Jb(48,"ion-checkbox",18),b.Nb(),b.Ob(49,"ion-item",14),b.Ob(50,"ion-label",15),b.xc(51,"Lewis Padilla"),b.Nb(),b.Jb(52,"ion-checkbox",19),b.Nb(),b.Ob(53,"ion-item",14),b.Ob(54,"ion-label",15),b.xc(55,"Nannie Willis"),b.Nb(),b.Jb(56,"ion-checkbox",20),b.Nb(),b.Nb(),b.Nb(),b.Ob(57,"ion-item-divider"),b.Ob(58,"ion-label"),b.xc(59,"Pick One"),b.Nb(),b.Nb(),b.Ob(60,"form",12),b.Ob(61,"ion-list",21),b.Ob(62,"ion-radio-group",22),b.Ob(63,"ion-item",23),b.Ob(64,"ion-label",24),b.xc(65,"Apple"),b.Nb(),b.Jb(66,"ion-radio",25),b.Nb(),b.Ob(67,"ion-item",23),b.Ob(68,"ion-label",24),b.xc(69,"Banana"),b.Nb(),b.Jb(70,"ion-radio",26),b.Nb(),b.Ob(71,"ion-item",23),b.Ob(72,"ion-label",24),b.xc(73,"Orange"),b.Nb(),b.Jb(74,"ion-radio",27),b.Nb(),b.Ob(75,"ion-item",23),b.Ob(76,"ion-label",24),b.xc(77,"Kiwi"),b.Nb(),b.Jb(78,"ion-radio",28),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(79,"ion-item-divider"),b.Ob(80,"ion-label"),b.xc(81,"Multiple Tags"),b.Nb(),b.Nb(),b.Ob(82,"form",12),b.Ob(83,"ion-row",29),b.Ob(84,"ion-item",30),b.Ob(85,"ion-label",31),b.xc(86,"Indonesia"),b.Nb(),b.Jb(87,"ion-checkbox",32),b.Nb(),b.Ob(88,"ion-item",30),b.Ob(89,"ion-label",31),b.xc(90,"Pitcairn Islands"),b.Nb(),b.Jb(91,"ion-checkbox",33),b.Nb(),b.Ob(92,"ion-item",30),b.Ob(93,"ion-label",31),b.xc(94,"Malta"),b.Nb(),b.Jb(95,"ion-checkbox",34),b.Nb(),b.Ob(96,"ion-item",30),b.Ob(97,"ion-label",31),b.xc(98,"Sierra Leone"),b.Nb(),b.Jb(99,"ion-checkbox",35),b.Nb(),b.Ob(100,"ion-item",30),b.Ob(101,"ion-label",31),b.xc(102,"Dominican Republic"),b.Nb(),b.Jb(103,"ion-checkbox",36),b.Nb(),b.Ob(104,"ion-item",30),b.Ob(105,"ion-label",31),b.xc(106,"Antigua and Barbuda"),b.Nb(),b.Jb(107,"ion-checkbox",37),b.Nb(),b.Ob(108,"ion-item",30),b.Ob(109,"ion-label",31),b.xc(110,"Macedonia"),b.Nb(),b.Jb(111,"ion-checkbox",38),b.Nb(),b.Ob(112,"ion-item",30),b.Ob(113,"ion-label",31),b.xc(114,"Vietnam"),b.Nb(),b.Jb(115,"ion-checkbox",39),b.Nb(),b.Nb(),b.Nb(),b.Ob(116,"ion-item-divider"),b.Ob(117,"ion-label"),b.xc(118,"Multiple Tags (rounded)"),b.Nb(),b.Nb(),b.Ob(119,"form",12),b.Ob(120,"ion-row",40),b.Ob(121,"ion-item",41),b.Ob(122,"ion-label",31),b.xc(123,"Indonesia"),b.Nb(),b.Jb(124,"ion-checkbox",32),b.Nb(),b.Ob(125,"ion-item",41),b.Ob(126,"ion-label",31),b.xc(127,"Pitcairn Islands"),b.Nb(),b.Jb(128,"ion-checkbox",33),b.Nb(),b.Ob(129,"ion-item",41),b.Ob(130,"ion-label",31),b.xc(131,"Malta"),b.Nb(),b.Jb(132,"ion-checkbox",34),b.Nb(),b.Ob(133,"ion-item",41),b.Ob(134,"ion-label",31),b.xc(135,"Sierra Leone"),b.Nb(),b.Jb(136,"ion-checkbox",35),b.Nb(),b.Ob(137,"ion-item",41),b.Ob(138,"ion-label",31),b.xc(139,"Dominican Republic"),b.Nb(),b.Jb(140,"ion-checkbox",36),b.Nb(),b.Ob(141,"ion-item",41),b.Ob(142,"ion-label",31),b.xc(143,"Antigua and Barbuda"),b.Nb(),b.Jb(144,"ion-checkbox",37),b.Nb(),b.Ob(145,"ion-item",41),b.Ob(146,"ion-label",31),b.xc(147,"Macedonia"),b.Nb(),b.Jb(148,"ion-checkbox",38),b.Nb(),b.Ob(149,"ion-item",41),b.Ob(150,"ion-label",31),b.xc(151,"Vietnam"),b.Nb(),b.Jb(152,"ion-checkbox",39),b.Nb(),b.Nb(),b.Nb(),b.Ob(153,"ion-item-divider"),b.Ob(154,"ion-label"),b.xc(155,"Budget (Radio Tags)"),b.Nb(),b.Nb(),b.Ob(156,"form",12),b.Ob(157,"ion-radio-group",42),b.Ob(158,"ion-row",43),b.Ob(159,"ion-item",44),b.Ob(160,"ion-label",31),b.xc(161,"Any"),b.Nb(),b.Jb(162,"ion-radio",45),b.Nb(),b.Ob(163,"ion-item",44),b.Ob(164,"ion-label",31),b.Ob(165,"span"),b.xc(166,"$"),b.Nb(),b.Nb(),b.Jb(167,"ion-radio",46),b.Nb(),b.Ob(168,"ion-item",44),b.Ob(169,"ion-label",31),b.Ob(170,"span"),b.xc(171,"$$"),b.Nb(),b.Nb(),b.Jb(172,"ion-radio",47),b.Nb(),b.Ob(173,"ion-item",44),b.Ob(174,"ion-label",31),b.Ob(175,"span"),b.xc(176,"$$$"),b.Nb(),b.Nb(),b.Jb(177,"ion-radio",48),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(178,"ion-item-divider"),b.Ob(179,"ion-label"),b.xc(180,"Toggle"),b.Nb(),b.Nb(),b.Ob(181,"form",12),b.Ob(182,"ion-list",49),b.Ob(183,"ion-item",50),b.Ob(184,"ion-label",51),b.xc(185,"Notifications"),b.Nb(),b.Jb(186,"ion-toggle",52),b.Nb(),b.Ob(187,"ion-item",50),b.Ob(188,"ion-label",51),b.xc(189,"Email notifications"),b.Nb(),b.Jb(190,"ion-toggle",53),b.Nb(),b.Nb(),b.Nb(),b.Ob(191,"ion-item-divider"),b.Ob(192,"ion-label"),b.xc(193,"Add & Subtract"),b.Nb(),b.Nb(),b.Ob(194,"form",12),b.Ob(195,"ion-list",54),b.Ob(196,"ion-item",55),b.Ob(197,"ion-label",56),b.xc(198,"Amount"),b.Nb(),b.Jb(199,"app-counter-input",57),b.Nb(),b.Ob(200,"ion-item",55),b.Ob(201,"ion-label",56),b.xc(202,"Bedrooms"),b.Nb(),b.Ob(203,"ion-label",58),b.xc(204),b.Nb(),b.Jb(205,"app-counter-input",59),b.Nb(),b.Nb(),b.Nb(),b.Ob(206,"ion-item-divider"),b.Ob(207,"ion-label"),b.xc(208,"Rating Component"),b.Nb(),b.Nb(),b.Ob(209,"form",12),b.Ob(210,"ion-list",60),b.Ob(211,"ion-item",61),b.Ob(212,"ion-label",62),b.xc(213,"Rate"),b.Nb(),b.Jb(214,"app-rating-input",63),b.Nb(),b.Ob(215,"ion-item",61),b.Ob(216,"ion-label",62),b.xc(217,"Read Only"),b.Nb(),b.Jb(218,"app-rating-input",64),b.Nb(),b.Nb(),b.Nb(),b.Ob(219,"ion-item-divider"),b.Ob(220,"ion-label"),b.xc(221,"Color chooser"),b.Nb(),b.Nb(),b.Ob(222,"form",12),b.Ob(223,"ion-radio-group",65),b.Ob(224,"ion-row",66),b.Ob(225,"ion-item",67),b.Ob(226,"app-aspect-ratio",68),b.Ob(227,"div",69),b.Ob(228,"ion-label",70),b.xc(229,"Red"),b.Nb(),b.Jb(230,"ion-radio",71),b.Nb(),b.Nb(),b.Nb(),b.Ob(231,"ion-item",72),b.Ob(232,"app-aspect-ratio",68),b.Ob(233,"div",69),b.Jb(234,"ion-radio",73),b.Nb(),b.Nb(),b.Nb(),b.Ob(235,"ion-item",74),b.Ob(236,"app-aspect-ratio",68),b.Ob(237,"div",69),b.Jb(238,"ion-radio",75),b.Nb(),b.Nb(),b.Nb(),b.Ob(239,"ion-item",76),b.Ob(240,"app-aspect-ratio",68),b.Ob(241,"div",69),b.Jb(242,"ion-radio",77),b.Nb(),b.Nb(),b.Nb(),b.Ob(243,"ion-item",78),b.Ob(244,"app-aspect-ratio",68),b.Ob(245,"div",69),b.Jb(246,"ion-radio",79),b.Nb(),b.Nb(),b.Nb(),b.Ob(247,"ion-item",80),b.Ob(248,"app-aspect-ratio",68),b.Ob(249,"div",69),b.Jb(250,"ion-radio",81),b.Nb(),b.Nb(),b.Nb(),b.Ob(251,"ion-item",82),b.Ob(252,"app-aspect-ratio",68),b.Ob(253,"div",69),b.Ob(254,"ion-label",70),b.xc(255,"Purple"),b.Nb(),b.Jb(256,"ion-radio",83),b.Nb(),b.Nb(),b.Nb(),b.Ob(257,"ion-item",84),b.Ob(258,"app-aspect-ratio",68),b.Ob(259,"div",69),b.Ob(260,"ion-label",70),b.xc(261,"Blue"),b.Nb(),b.Jb(262,"ion-radio",85),b.Nb(),b.Nb(),b.Nb(),b.Ob(263,"ion-item",86),b.Ob(264,"app-aspect-ratio",68),b.Ob(265,"div",69),b.Jb(266,"ion-radio",87),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Nb()),2&n&&(b.yb(11),b.hc("formGroup",o.rangeForm),b.yb(5),b.yc(o.rangeForm.controls.dual.value.lower),b.yb(4),b.yc(o.rangeForm.controls.dual.value.upper),b.yb(9),b.yc(o.rangeForm.controls.single.value),b.yb(6),b.hc("formGroup",o.checkboxForm),b.yb(25),b.hc("formGroup",o.radioForm),b.yb(22),b.hc("formGroup",o.checkboxTagsForm),b.yb(37),b.hc("formGroup",o.checkboxTagsForm),b.yb(37),b.hc("formGroup",o.radioTagsForm),b.yb(25),b.hc("formGroup",o.switchersForm),b.yb(13),b.hc("formGroup",o.counterForm),b.yb(10),b.yc(o.counterForm.controls.counter2.value),b.yb(5),b.hc("formGroup",o.ratingForm),b.yb(13),b.hc("formGroup",o.radioColorForm),b.yb(4),b.hc("ratio",b.jc(23,O)),b.yb(6),b.hc("ratio",b.jc(24,O)),b.yb(4),b.hc("ratio",b.jc(25,O)),b.yb(4),b.hc("ratio",b.jc(26,O)),b.yb(4),b.hc("ratio",b.jc(27,O)),b.yb(4),b.hc("ratio",b.jc(28,O)),b.yb(4),b.hc("ratio",b.jc(29,O)),b.yb(6),b.hc("ratio",b.jc(30,O)),b.yb(6),b.hc("ratio",b.jc(31,O)))},directives:[a.p,a.Y,a.h,a.A,a.W,a.k,a.v,a.u,a.w,r.r,r.m,r.f,a.H,a.j,a.F,a.hb,r.l,r.d,a.x,a.t,a.i,a.b,a.E,a.D,a.fb,a.X,g.a,d,s.a],styles:["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background-shade);--page-tags-gutter:5px;--page-color-radio-items-per-row:5;--page-color-radio-gutter:2%;--page-color-radio-width:calc((100% - (2 * var(--page-color-radio-gutter) * var(--page-color-radio-items-per-row))) / var(--page-color-radio-items-per-row))}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]{position:absolute;top:0;border-top:calc(var(--app-header-height) + var(--ion-safe-area-top));border-top-style:solid;border-top-color:var(--ion-color-primary)}.filters-content[_ngcontent-%COMP%], .filters-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--background:var(--page-background)}.filters-content[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]{--padding-bottom:calc(var(--page-margin) / 2);--padding-top:calc(var(--page-margin) / 2);--padding-start:var(--page-margin);--padding-end:var(--page-margin);border:none}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding-top:var(--page-margin);-webkit-padding-start:var(--page-margin);padding-inline-start:var(--page-margin);-webkit-padding-end:var(--page-margin);padding-inline-end:var(--page-margin);box-shadow:inset 0 6px 3px -8px var(--ion-color-darkest)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:calc(var(--page-margin) / 2)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%]{font-size:12px;font-weight:600;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .range-list[_ngcontent-%COMP%]   .range-item[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-medium);padding-top:0;padding-bottom:0}.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .checkbox-list[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{-webkit-margin-end:0;margin-inline-end:0}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%]{display:block}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{-webkit-margin-start:0;margin-inline-start:0}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]{padding:calc(var(--page-margin) / 2) calc(var(--page-margin) - var(--page-tags-gutter));--checkbox-tag-color:#000;--checkbox-tag-background:#fff;--checkbox-tag-active-color:#fff;--checkbox-tag-active-background:#000}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--ion-item-background:var(--checkbox-tag-background);--ion-item-color:var(--checkbox-tag-color)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%]{--border-radius:2.2rem}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%]{--ion-item-background:var(--checkbox-tag-active-background);--ion-item-color:var(--checkbox-tag-active-color)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.filters-content[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.square-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--page-background)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.square-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--checkbox-tag-color:var(--ion-color-medium);--checkbox-tag-background:var(--ion-color-lightest);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]{background-color:var(--ion-color-lightest)}.filters-content[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]{--checkbox-tag-color:var(--ion-color-lightest);--checkbox-tag-background:var(--ion-color-light-shade);--checkbox-tag-active-color:var(--ion-color-lightest);--checkbox-tag-active-background:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]{padding:0 calc(var(--page-margin) - var(--page-tags-gutter));background-color:var(--page-background);justify-content:space-between;--radio-tag-color:#000;--radio-tag-background:#fff;--radio-tag-active-color:#fff;--radio-tag-active-background:#000}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]{--padding-start:0px;--inner-padding-end:8px;--inner-padding-start:8px;--min-height:38px;--border-radius:8px;--border-width:1px;--border-style:solid;--border-color:var(--radio-tag-color);--ion-item-background:var(--radio-tag-background);--ion-item-color:var(--radio-tag-color);flex:1}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-radio-checked[_ngcontent-%COMP%]{--ion-item-background:var(--radio-tag-active-background);--ion-item-color:var(--radio-tag-active-color)}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{margin:5px;font-size:14px;font-weight:500;letter-spacing:.2px;text-align:center}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.filters-content[_ngcontent-%COMP%]   .radio-tags[_ngcontent-%COMP%]   .radio-tag[_ngcontent-%COMP%]{--radio-tag-color:var(--ion-color-secondary);--radio-tag-background:var(--ion-color-lightest);--radio-tag-active-color:var(--ion-color-lightest);--radio-tag-active-background:var(--ion-color-secondary);padding:0 var(--page-tags-gutter);margin:var(--page-tags-gutter) 0}.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .toggle-list[_ngcontent-%COMP%]   .toggle-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{-webkit-padding-end:0;padding-inline-end:0}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   .counter-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   .counter-value[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .counter-list[_ngcontent-%COMP%]   .counter-item[_ngcontent-%COMP%]   app-counter-input[_ngcontent-%COMP%]{--counter-background:transparent;--counter-color:var(--ion-color-secondary);--counter-border-color:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]{--padding-start:var(--page-margin);--padding-end:var(--page-margin);--inner-padding-end:0px}.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%]{font-size:14px;font-weight:500;letter-spacing:.2px;color:var(--ion-color-medium)}.filters-content[_ngcontent-%COMP%]   .ratings-list[_ngcontent-%COMP%]   .rating-item[_ngcontent-%COMP%]   app-rating-input[_ngcontent-%COMP%]{--rating-color:var(--ion-color-secondary)}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]{padding:var(--page-margin) calc(var(--page-margin) - var(--page-color-radio-gutter));background-color:var(--ion-color-lightest);--color-radio-color:#fff;--color-radio-background:#ccc;--color-radio-active-border-rgb:255,255,255;--color-radio-border-radius:50%}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   .color-radio[_ngcontent-%COMP%]{--color-radio-color:#fff;--color-radio-background:#ccc;--color-radio-active-border-rgb:var(--ion-color-darkest-rgb);--color-radio-border-radius:40%;flex:0 0 var(--page-color-radio-width);max-width:var(--page-color-radio-width);margin:var(--page-color-radio-gutter)}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   .color-radio[_ngcontent-%COMP%]   .color-radio-inner-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]{--padding-bottom:0px;--padding-end:0px;--padding-top:0px;--padding-start:0px;--border-width:4px;--border-style:solid;--border-color:var(--color-radio-background);--background:var(--color-radio-background);--inner-padding-end:0px;--inner-border-width:0px;--min-height:initial;--border-radius:var(--color-radio-border-radius);border-radius:var(--color-radio-border-radius)}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-radio-checked[_ngcontent-%COMP%]{--border-color:rgba(var(--color-radio-active-border-rgb),.3)!important;--box-shadow:none}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-radio-checked[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-interactive-disabled[_ngcontent-%COMP%]{opacity:.5}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio.item-interactive-disabled[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{opacity:1}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{--color:var(--color-radio-color);font-size:12px;opacity:.7}.filters-content[_ngcontent-%COMP%]   .color-radio-group[_ngcontent-%COMP%]   ion-item.color-radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0;width:0;--border-width:0px;height:0;--color-checked:transparent}.md[_nghost-%COMP%]   .checkbox-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .checkbox-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .counter-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .counter-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .range-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .range-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .ratings-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .ratings-list[_ngcontent-%COMP%], .md[_nghost-%COMP%]   .toggle-list[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .toggle-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.ios[_nghost-%COMP%]   .checkbox-tags[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .checkbox-tags[_ngcontent-%COMP%], .ios[_nghost-%COMP%]   .radio-tags[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .radio-tags[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin) * 2)}",".md[_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%], .md   [_nghost-%COMP%]   .radio-list[_ngcontent-%COMP%]   .radio-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{-webkit-margin-end:32px;margin-inline-end:32px}"]}),n})()}];let m=(()=>{class n{}return n.\u0275mod=b.Gb({type:n}),n.\u0275inj=b.Fb({factory:function(o){return new(o||n)},imports:[[e.c,a.Z,r.h,r.o,i.k.forChild(p),c.a]]}),n})()}}]);