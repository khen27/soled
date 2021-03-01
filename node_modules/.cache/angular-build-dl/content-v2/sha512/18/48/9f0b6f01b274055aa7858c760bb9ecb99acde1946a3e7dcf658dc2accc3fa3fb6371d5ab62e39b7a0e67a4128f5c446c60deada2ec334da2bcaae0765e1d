(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
    /***/
    "1n1Y":
    /*!***********************************************!*\
      !*** ./src/app/categories/categories.page.ts ***!
      \***********************************************/

    /*! exports provided: CategoriesPage */

    /***/
    function n1Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
        return CategoriesPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _facebook_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../facebook-provider.service */
      "olL3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/"); //import { /*IonSlides, ModalController, MenuController, IonRouterOutlet,*/ isPlatform } from '@ionic/angular';


      var CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage(router, facebookProvider) {
          _classCallCheck(this, CategoriesPage);

          this.router = router;
          this.facebookProvider = facebookProvider;
          this.user = null;
          this.clickHandled = false;
          this.slideOptions = {
            slidesPerView: 1.5
          };
        }

        _createClass(CategoriesPage, [{
          key: "launchProfilePage",
          value: function launchProfilePage() {
            console.log('launch profile page');
            this.router.navigate(['app/contact-card']);
          }
        }, {
          key: "launchStorePage",
          value: function launchStorePage() {
            console.log('launch store landing page');
            this.router.navigate(['/app/categories/fashion']);
          }
        }, {
          key: "launchRafflePage",
          value: function launchRafflePage() {
            console.log('launch raffle page (not implemented yet)');
          }
        }, {
          key: "launchCartPage",
          value: function launchCartPage() {
            console.log('launch cart page (not implemented yet)');
          }
        }, {
          key: "launchFashionDetailsPage",
          value: function launchFashionDetailsPage() {
            this.propagationHandler(function () {
              console.log('launch fashion details page (not implemented yet)');
            });
          }
        }, {
          key: "launchShareSystem",
          value: function launchShareSystem() {
            this.propagationHandler(function () {
              console.log('launch share system (not implemented yet)');
            });
          }
        }, {
          key: "launchAuctionPage",
          value: function launchAuctionPage() {
            this.propagationHandler(function () {
              console.log('launch auction page (not implemented yet)');
            });
          }
        }, {
          key: "propagationHandler",
          value: function propagationHandler(resolve) {
            var _this = this;

            if (this.clickHandled) return;
            resolve();
            this.clickHandled = true;
            setTimeout(function () {
              console.log("reset the click trigger");
              _this.clickHandled = false;
            }, 0);
          } // Disable side menu for this page

        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {//this.menu.enable(false);
          } // Restore to default when leaving this page

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {//this.menu.enable(true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            var res = this.facebookProvider.getUser();
            res.then(function (ret) {
              var userGreeting = document.getElementById("UserGreeting");
              _this2.profilePic = document.getElementById("ProfilePic");

              if (ret == null) {
                userGreeting.innerHTML = "Hi, no one is online. This screen shouldn't be viewable.";
                _this2.profilePic.src = "https://habib.al-mawali.com/wp-content/uploads/IMG_4838-1-768x768.jpg";

                _this2.router.navigate(['walkthrough']);
              } else {
                userGreeting.innerHTML = "Hey ".concat(ret.name, ",");
                _this2.profilePic.src = ret.picture.data.url;
              }
            });
          }
        }]);

        return CategoriesPage;
      }();

      CategoriesPage.ɵfac = function CategoriesPage_Factory(t) {
        return new (t || CategoriesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_facebook_provider_service__WEBPACK_IMPORTED_MODULE_2__["FacebookProviderService"]));
      };

      CategoriesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoriesPage,
        selectors: [["app-categories"]],
        decls: 92,
        vars: 2,
        consts: [[1, "ion-no-border"], ["lines", "none", "slot", "start"], ["slot", "start", 3, "click"], ["id", "ProfilePic", "src", ""], [1, "greeting"], ["id", "UserGreeting"], ["slot", "end"], ["color", "dark", 1, "bordered", 3, "click"], ["name", "logo-usd"], ["fill", "solid", "color", "light", 1, "bordered", 3, "click"], ["name", "gift-outline"], ["name", "cart-outline"], [1, "slides", "ion-margin-bottom"], [3, "options"], [3, "click"], ["slot", "start", 1, "icon-shape"], ["color", "favorite", 3, "click"], ["slot", "icon-only", "name", "share-outline"], ["slot", "end", 1, "icon-shape"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "time-outline"], ["src", "./assets/sample-images/categories/Jordan_1_High_Dark_Mocha.png", 1, "files"], [1, "ion-text-left"], [1, "ion-text-center"], ["lines", "none", "slot", "end"], ["color", "favorite"], ["fill", "clear", "color", "dark"], ["src", "./assets/sample-images/categories/pink-nike.jpg", 1, "files"], [1, "slides2", "ion-no-border"], ["lines", "none"]],
        template: function CategoriesPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-avatar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_avatar_click_3_listener() {
              return ctx.launchProfilePage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hey Karl,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Buy some more bids!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-buttons", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_button_click_11_listener() {
              return ctx.launchStorePage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-buttons", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_button_click_14_listener() {
              return ctx.launchRafflePage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-buttons", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_button_click_17_listener() {
              return ctx.launchCartPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-slides", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_card_click_23_listener() {
              return ctx.launchFashionDetailsPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-buttons", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_button_click_27_listener() {
              return ctx.launchShareSystem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-buttons", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_button_click_30_listener() {
              return ctx.launchAuctionPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-card-content", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-card-title", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Air Jordans ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "$100+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "14s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesPage_Template_ion_card_click_46_listener() {
              return ctx.launchFashionDetailsPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-buttons", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ion-buttons", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ion-button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ion-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ion-card-content", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ion-card-title", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pink Nikes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "$1000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ion-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "15s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ion-item", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Past Auctions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ion-slides", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ion-card-content", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ion-card-title", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Air Jordans ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ion-card-subtitle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "$800");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ion-card-content", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ion-card-title", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Pink Nikes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ion-card-subtitle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "$500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOptions);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardSubtitle"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-narrow-margin);\n  --page-categories-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n}\n\n.categories-list[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: var(--page-categories-gutter);\n  padding: calc(var(--page-categories-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.categories-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%] {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 18px;\n  letter-spacing: 1px;\n  padding: calc((var(--page-margin) / 4) * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n\n.categories-list[_ngcontent-%COMP%]   .travel-category[_ngcontent-%COMP%] {\n  --page-category-background: #00AFFF;\n  --page-category-background-rgb: 0,175,255;\n}\n\n.categories-list[_ngcontent-%COMP%]   .fashion-category[_ngcontent-%COMP%] {\n  --page-category-background: #cb328f;\n  --page-category-background-rgb: 203,50,143;\n}\n\n.categories-list[_ngcontent-%COMP%]   .food-category[_ngcontent-%COMP%] {\n  --page-category-background: #ebbb00;\n  --page-category-background-rgb: 235,187,0;\n}\n\n.categories-list[_ngcontent-%COMP%]   .deals-category[_ngcontent-%COMP%] {\n  --page-category-background: #70df70;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.categories-list[_ngcontent-%COMP%]   .real-estate-category[_ngcontent-%COMP%] {\n  --page-category-background: #d9453a;\n  --page-category-background-rgb: 217,69,58;\n}\n\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f1f5f8;\n  background: #f1f5f8;\n  padding: 0 10px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   .bordered[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;\n}\n\nion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: black;\n}\n\nion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  --border-radius: 40%;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: linear-gradient(\n    90deg,\n    rgba(43, 90, 148, 1) 0%,\n    rgba(45, 112, 229, 1) 35%,\n    rgba(45, 112, 229, 1) 100%\n  );\n}\n\nion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: -20px -20px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%] {\n  background: #f1f5f8;\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 525px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 500px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n  background: none;\n  padding: 0 10px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  color: inear-gradient(90deg, #2b5a94 0%, #2d70e5 35%, #2d70e5 100%);\n}\n\nion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]   .icon-shape[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;\n}\n\nion-content[_ngcontent-%COMP%]   .slides2[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #2b5a94 0%, #2d70e5 35%, #2d70e5 100%);\n  padding: 4px 10px 20px 10px;\n  border-radius: 0 0 28px 28px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides2[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 445px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 500px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n  padding: 0 10px;\n}\n\nion-content[_ngcontent-%COMP%]   .slides2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  color: #f1f5f8;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0px;\n  border-radius: 14px;\n  padding: 4px;\n  background: white;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  box-shadow: 7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  background: favorite;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%] {\n  padding-top: 14px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 12px;\n  color: black;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .auction-data[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  background: none;\n}\n\nion-content[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  color: black;\n}\n\nion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #ffffff;\n  font-weight: 600;\n}\n\nion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n\nion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.66);\n}\n\nion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHVDQUFBO0VBRUEsc0RBQUE7RUFFQSxtREFBQTtFQUNBLDJEQUFBO0FBTEY7O0FBU0E7RUFDRSx3REFBQTtFQUVBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUNqQkEsd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEU0Y7O0FDTkU7RUFDRSxhQUFBO0FEUUo7O0FBTUk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUpOOztBQU1NO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7RUFDQSxxQ0FBQTtBQUpSOztBQVNFO0VBQ0UsbUNBQUE7RUFDQSx5Q0FBQTtBQVBKOztBQVVFO0VBQ0UsbUNBQUE7RUFDQSwwQ0FBQTtBQVJKOztBQVdFO0VBQ0UsbUNBQUE7RUFDQSx5Q0FBQTtBQVRKOztBQVlFO0VBQ0UsbUNBQUE7RUFDQSwyQ0FBQTtBQVZKOztBQWFFO0VBQ0UsbUNBQUE7RUFDQSx5Q0FBQTtBQVhKOztBQWlCRTs7RUFFRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWtCSTtFQUNFLHFCQUFBO0VBQ0EsMERBQUE7QUFoQk47O0FBcUJJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQW5CTjs7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFwQk47O0FBdUJJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBckJOOztBQXdCSTtFQUNFLG9CQUFBO0FBdEJOOztBQTJCQTtFQUNFOzs7OztHQUFBO0FBbkJGOztBQTBCRTtFQUNFLG9CQUFBO0FBeEJKOztBQTRCRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQTFCSjs7QUE0Qkk7RUFDRSxhQUFBO0FBMUJOOztBQTZCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBM0JOOztBQThCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBNUJOOztBQThCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQTVCUjs7QUFpQ0k7RUFDRSxtRUFBQTtBQS9CTjs7QUF1Q0k7RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FBckNOOztBQXdDRTtFQUNFLHlFQUFBO0VBT0EsMkJBQUE7RUFDQSw0QkFBQTtBQTVDSjs7QUE4Q0k7RUFDRSxhQUFBO0FBNUNOOztBQStDSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBN0NOOztBQWdESTtFQUdDLGtCQUFBO0VBQ0MsZUFBQTtBQWhETjs7QUFrRE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBaERSOztBQW9ERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFsREo7O0FBb0RJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFuRE47O0FBb0RNO0VBQ0UsV0FBQTtBQWxEUjs7QUFvRE07RUFDRSxvQkFBQTtBQWxEUjs7QUFxREk7RUFDRSxpQkFBQTtBQW5ETjs7QUFzREk7RUFDRSxVQUFBO0FBcEROOztBQXNETTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFwRFI7O0FBeURRO0VBQ0UsZ0JBQUE7QUF2RFY7O0FBK0RFO0VBQ0UsWUFBQTtBQTdESjs7QUFnRUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUE5REo7O0FBZ0VJO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBOUROOztBQWdFTTtFQUNFLGNBQUE7QUE5RFI7O0FBZ0VRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBOURWOztBQWdFUTtFQUNFLGdDQUFBO0FBOURWOztBQW1FSTtFQUNFLG1CQUFBO0FBakVOIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcclxuXHJcbi8vIEN1c3RvbSB2YXJpYWJsZXNcclxuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbjpob3N0IHtcclxuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XHJcblxyXG4gIC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuXHJcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmNhdGVnb3JpZXMtbGlzdCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcik7XHJcblxyXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcikgKiAzKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcclxuXHJcbiAgLmNhdGVnb3J5LWl0ZW0ge1xyXG4gICAgLmNhdGVnb3J5LWFuY2hvciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudHJhdmVsLWNhdGVnb3J5IHtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjMDBBRkZGO1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAwLDE3NSwyNTU7XHJcbiAgfVxyXG5cclxuICAuZmFzaGlvbi1jYXRlZ29yeSB7XHJcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2NiMzI4ZjtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjAzLDUwLDE0MztcclxuICB9XHJcblxyXG4gIC5mb29kLWNhdGVnb3J5IHtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjZWJiYjAwO1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMzUsMTg3LDA7XHJcbiAgfVxyXG5cclxuICAuZGVhbHMtY2F0ZWdvcnkge1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICM3MGRmNzA7XHJcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDExMiwyMjMsMTEyO1xyXG4gIH1cclxuXHJcbiAgLnJlYWwtZXN0YXRlLWNhdGVnb3J5IHtcclxuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjZDk0NTNhO1xyXG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsNjksNTg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIsXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmODtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgLmJvcmRlcmVkIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgcmdiYSg0MywgOTAsIDE0OCwgMSkgMCUsXHJcbiAgICByZ2JhKDQ1LCAxMTIsIDIyOSwgMSkgMzUlLFxyXG4gICAgcmdiYSg0NSwgMTEyLCAyMjksIDEpIDEwMCVcclxuICApO1xyXG5cclxuICBpb24tdG9vbGJhcntcclxuICAgIHBhZGRpbmc6IC0yMHB4IC0yMHB4O1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5zbGlkZXMge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmODtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBoZWlnaHQ6IDUyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGlvbi1wcm9ncmVzcy1iYXJ7XHJcbiAgICAgIGNvbG9yOmluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDkwZGVnLFxyXG4gICAgICAgIHJnYmEoNDMsIDkwLCAxNDgsIDEpIDAlLFxyXG4gICAgICAgIHJnYmEoNDUsIDExMiwgMjI5LCAxKSAzNSUsXHJcbiAgICAgICAgcmdiYSg0NSwgMTEyLCAyMjksIDEpIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1zaGFwZSB7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2QxZDFkMSwgLTVweCAtNXB4IDEwcHggI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgLnNsaWRlczIge1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDkwZGVnLFxyXG4gICAgICByZ2JhKDQzLCA5MCwgMTQ4LCAxKSAwJSxcclxuICAgICAgcmdiYSg0NSwgMTEyLCAyMjksIDEpIDM1JSxcclxuICAgICAgcmdiYSg0NSwgMTEyLCAyMjksIDEpIDEwMCVcclxuICAgICk7Oy8vICNmMWY1Zjg7XHJcbiAgICAvL3BhZGRpbmc6IDZweCA2cHggMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyOHB4IDI4cHg7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBoZWlnaHQ6IDQ0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjMzY3MGU1O1xyXG4gICAgIC8vIGJhY2tncm91bmQ6ICMzNjcwZTU7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6I2YxZjVmODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgLy8gaW1hZ2VzIGZvciBzbGlkZXNcclxuICAgIC5tYWluIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogN3B4IDdweCAyMHB4ICNkYmRmZTIsIC03cHggLTdweCAyMHB4ICNmZmZmZmY7XHJcblxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6ZmF2b3JpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5maWxlcyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5hdWN0aW9uLWRhdGF7XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XHJcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XHJcbiAgLy8gSUUgMTArXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG5cclxuICAvLyBGaXJlZm94XHJcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuXHJcbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */", "app-image-shell.category-cover[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0ZBQUE7RUFDQSxzREFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNhdGVnb3J5LWNvdmVyIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiKSwgLjI1KTtcclxuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XHJcbn1cclxuIl19 */", "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category-anchor[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQWFRO0lBQ0UsZUFBQTtFQWhCUjtBQUNGO0FBc0JBLHFEQUFBO0FBY0Esa0RBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VBNUNSO0FBQ0Y7QUFrREEscUNBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VBM0RSO0FBQ0Y7QUFpRUEsaURBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VBMUVSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcclxuXHJcbi8vIChzZWU6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL21lZGlhLXF1ZXJpZXMtZm9yLXN0YW5kYXJkLWRldmljZXMvI2lwaG9uZS1xdWVyaWVzKVxyXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMylcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXHJcbntcclxuICAuY2F0ZWdvcmllcy1saXN0IHtcclxuICAgIC5jYXRlZ29yeS1pdGVtIHtcclxuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XHJcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcclxuICBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwIC8gNzEpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcblxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNiwgNlMsIDcgYW5kIDggLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNjY3cHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XHJcbiAgICAuY2F0ZWdvcnktaXRlbSB7XHJcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xyXG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XHJcbiAgICAuY2F0ZWdvcnktaXRlbSB7XHJcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xyXG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcclxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3MzZweClcclxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXHJcbntcclxuICAuY2F0ZWdvcmllcy1saXN0IHtcclxuICAgIC5jYXRlZ29yeS1pdGVtIHtcclxuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XHJcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-categories',
            templateUrl: './categories.page.html',
            styleUrls: ['./styles/categories.page.scss', './styles/categories.shell.scss', './styles/categories.responsive.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _facebook_provider_service__WEBPACK_IMPORTED_MODULE_2__["FacebookProviderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kMJQ":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.module.ts ***!
      \*************************************************/

    /*! exports provided: CategoriesPageModule */

    /***/
    function kMJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
        return CategoriesPageModule;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categories.page */
      "1n1Y");

      var categoriesRoutes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_5__["CategoriesPage"]
      }];

      var CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      CategoriesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: CategoriesPageModule
      });
      CategoriesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function CategoriesPageModule_Factory(t) {
          return new (t || CategoriesPageModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(categoriesRoutes), _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategoriesPageModule, {
          declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_5__["CategoriesPage"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CategoriesPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(categoriesRoutes), _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_5__["CategoriesPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=categories-categories-module-es5.js.map