(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{x04h:function(t,e,o){"use strict";o.r(e),o.d(e,"MapsPageModule",(function(){return b}));var n=o("TEn/"),i=o("tyNb"),a=o("ofXK"),s=o("mrSG"),r=o("gcOT"),l=o("fXoL");let c=(()=>{class t{constructor(t,e){this._elementRef=t,this.platformId=e,this.$mapReady=new l.n,this._mapIdledOnce=!1}ngOnInit(){Object(a.t)(this.platformId)&&this.initMap()}initMap(){this._el=this._elementRef.nativeElement,this._map=new google.maps.Map(this._el,this.mapOptions);const t=this._map.addListener("idle",()=>{console.log("mapReady - IDLE"),this._mapIdledOnce||(this.$mapReady.emit(this._map),this._mapIdledOnce=!0,google.maps.event.removeListener(t))})}}return t.\u0275fac=function(e){return new(e||t)(l.Ib(l.l),l.Ib(l.B))},t.\u0275cmp=l.Cb({type:t,selectors:[["google-map"]],inputs:{mapOptions:"mapOptions"},decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})();const{Geolocation:p}=r.b;let d=(()=>{class t{constructor(t){this.loadingController=t,this.mapOptions={zoom:15,center:{lat:-34.9199842,lng:-56.149849}}}ngAfterViewInit(){this._GoogleMap.$mapReady.subscribe(t=>{this.map=t,console.log("ngAfterViewInit - Google map ready")}),this.createLoader()}createLoader(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){this.loadingElement=yield this.loadingController.create({message:"Trying to get your current location..."})}))}presentLoader(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){yield this.loadingElement.present()}))}dismissLoader(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){this.loadingElement&&(yield this.loadingElement.dismiss())}))}geolocateMe(){this.presentLoader(),p.getCurrentPosition().then(t=>{const e=new google.maps.LatLng(t.coords.latitude,t.coords.longitude);this.map.panTo(e),new google.maps.Marker({position:e,title:"You are here!"}).setMap(this.map)}).catch(t=>{console.log("Error getting current location",t)}).finally(()=>this.dismissLoader())}}return t.\u0275fac=function(e){return new(e||t)(l.Ib(n.hb))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-maps"]],viewQuery:function(t,e){var o;1&t&&l.zc(c,!0),2&t&&l.lc(o=l.Xb())&&(e._GoogleMap=o.first)},decls:11,vars:1,consts:[["color","primary"],["slot","start"],["vertical","top","horizontal","end","slot","fixed"],["color","secondary",3,"click"],["name","locate"],[3,"mapOptions"]],template:function(t,e){1&t&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar",0),l.Ob(2,"ion-buttons",1),l.Jb(3,"ion-menu-button"),l.Nb(),l.Ob(4,"ion-title"),l.vc(5,"Maps & Geolocation"),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"ion-fab",2),l.Ob(8,"ion-fab-button",3),l.Wb("click",(function(){return e.geolocateMe()})),l.Jb(9,"ion-icon",4),l.Nb(),l.Nb(),l.Jb(10,"google-map",5),l.Nb()),2&t&&(l.yb(10),l.fc("mapOptions",e.mapOptions))},directives:[n.v,n.eb,n.i,n.G,n.cb,n.q,n.s,n.t,n.w,c],styles:["google-map[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"]}),t})();var m=o("j1ZV");let b=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(e){return new(e||t)},imports:[[n.fb,a.c,m.a,i.k.forChild([{path:"",component:d}])]]}),t})()}}]);