(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-card-contact-card-module"],{

/***/ "9ROj":
/*!***************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.ts ***!
  \***************************************************/
/*! exports provided: ContactCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPage", function() { return ContactCardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _facebook_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../facebook-provider.service */ "olL3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







class ContactCardPage {
    constructor(router, facebookProvider) {
        this.router = router;
        this.facebookProvider = facebookProvider;
        this.user = null;
    }
    // enable push notifications 
    pushNotificationsEnabled(ionicButton) {
        if (ionicButton.color === 'dark') {
            ionicButton.color = 'danger';
            console.log('turing on');
        }
        else {
            ionicButton.color = 'dark';
            console.log('turing off');
        }
    }
    returnHome() {
        console.log('go back to landing page');
        this.router.navigate(['/app/categories']);
    }
    launchAboutUsPage() {
        console.log('launch about us page (not implemented yet)');
    }
    logout() {
        console.log('logging out');
        this.facebookProvider.FacebookLogout();
        this.router.navigate(['/walkthrough']);
    }
    // Disable side menu for this page
    ionViewDidEnter() {
        //this.menu.enable(false);
    }
    // Restore to default when leaving this page
    ionViewDidLeave() {
        //this.menu.enable(true);
    }
    ngAfterViewInit() {
        let res = this.facebookProvider.getUser();
        res.then((ret) => {
            let userName = document.getElementById("ProfileName");
            //this.profilePicSrc = <HTMLImageElement>document.getElementById("ProfilePic");
            if (ret == null) {
                this.router.navigate(['/walkthrough']);
                userName.innerHTML = "No User";
                this.profilePicSrc = "./assets/sample-images/notifications/karl.jpg";
            }
            else {
                userName.innerHTML = `${ret.name}`;
                this.profilePicSrc = ret.picture.data.url;
            }
        });
    }
}
ContactCardPage.ɵfac = function ContactCardPage_Factory(t) { return new (t || ContactCardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facebook_provider_service__WEBPACK_IMPORTED_MODULE_2__["FacebookProviderService"])); };
ContactCardPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactCardPage, selectors: [["app-contact-card"]], decls: 46, vars: 2, consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["name", "chevron-back-outline"], [3, "fullscreen"], [1, "ion-padding"], [1, "ion-margin-bottom"], [1, "ion-align-items-center"], ["id", "ProfilePic", 3, "src"], ["size", "12", 1, "ion-text-center", "ion-margin-bottom"], ["id", "ProfileName"], ["size", "4", 1, "ion-text-center"], ["fill", "clear", "color", "dark", "routerLink", "/details"], ["slot", "icon-only", "name", "add-circle-outline"], ["fill", "clear", "color", "dark", 3, "click"], ["slot", "icon-only", "name", "card"], ["first", ""], ["slot", "icon-only", "name", "notifications"], ["lines", "none"], ["name", "mail-unread-outline", "slot", "start"], ["placeholder", "karl@appblitz.dev"], ["name", "location-outline", "slot", "start"], ["placeholder", "213 NE 8th"], ["lines", "none", 1, "learn-more", 3, "click"], ["name", "chevron-forward", "slot", "end", 1, "hidden"]], template: function ContactCardPage_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactCardPage_Template_ion_button_click_3_listener() { return ctx.returnHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-avatar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "10 Bids | 200 Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactCardPage_Template_ion_button_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-button", 14, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactCardPage_Template_ion_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.pushNotificationsEnabled(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ion-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ion-input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "SoleD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactCardPage_Template_ion_item_click_41_listener() { return ctx.launchAboutUsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profilePicSrc);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #316dd0;\n  color: #FFFFFF;\n  padding-bottom: 250px;\n  border-radius: 0 0 20% 20%;\n}\n\nion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: #f6f6f6;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-top: -180px;\n  z-index: 50;\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 40px;\n  overflow: visible;\n}\n\nion-card[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  --border-radius: 40%;\n  margin: -60px auto auto auto;\n  width: 150px;\n  height: 150px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.08);\n}\n\nion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:last-of-type {\n  background: #316dd0;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-of-type {\n  background: #ed576b;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  color: #316dd0;\n  padding: 4px;\n}\n\n.learn-more[_ngcontent-%COMP%] {\n  --ion-item-background:#316dd0;\n  text-align: center;\n}\n\n.learn-more[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.65em;\n}\n\n.learn-more[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLDhEQUFBO0FBRkY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBTEY7O0FBT0E7RUFDRSxVQUFBO0FBSkY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBR0U7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsZ0RBQUE7QUFGRjs7QUFJRTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZOOztBQUlFO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRk47O0FBSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU1BO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1JO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBSk47O0FBT0U7RUFDRSw2QkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XHJcblxyXG4gIC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG59XHJcblxyXG4vLyBuZXcgdXggcmV2YW1wXHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzMxNmRkMDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDIwJSAyMCU7XHJcbn1cclxuaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAtMTgwcHg7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgaW9uLWF2YXRhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgbWFyZ2luOiAtNjBweCBhdXRvIGF1dG8gYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4gIGlvbi1pY29uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMTZkZDA7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgfVxyXG4gIGlvbi1pY29uOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWQ1NzZiO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxuICBpb24tdG9nZ2xle1xyXG4gICAgY29sb3I6ICMzMTZkZDA7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVhcm4tbW9yZXtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IzMxNmRkMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGlvbi1sYWJlbHtcclxuICAgIHB7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDEuNjVlbTtcclxuICAgIH0gXHJcbiAgfVxyXG4gIC5oaWRkZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */", "app-image-shell.user-avatar[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.25);\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtREFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWF2YXRhciB7XHJcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMjUpO1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactCardPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-card',
                templateUrl: './contact-card.page.html',
                styleUrls: [
                    './styles/contact-card.page.scss',
                    './styles/contact-card.shell.scss'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _facebook_provider_service__WEBPACK_IMPORTED_MODULE_2__["FacebookProviderService"] }]; }, null); })();


/***/ }),

/***/ "lgZj":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPageModule", function() { return ContactCardPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_card_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-card.page */ "9ROj");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








class ContactCardPageModule {
}
ContactCardPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactCardPageModule });
ContactCardPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ContactCardPageModule_Factory(t) { return new (t || ContactCardPageModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _contact_card_page__WEBPACK_IMPORTED_MODULE_4__["ContactCardPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactCardPageModule, { declarations: [_contact_card_page__WEBPACK_IMPORTED_MODULE_4__["ContactCardPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ContactCardPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _contact_card_page__WEBPACK_IMPORTED_MODULE_4__["ContactCardPage"] }])
                ],
                declarations: [_contact_card_page__WEBPACK_IMPORTED_MODULE_4__["ContactCardPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=contact-card-contact-card-module-es2015.js.map