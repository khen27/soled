(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-details-deals-details-module"], {
    /***/
    "/B+m":
    /*!*****************************************************!*\
      !*** ./src/app/deals/details/deals-details.page.ts ***!
      \*****************************************************/

    /*! exports provided: DealsDetailsPage */

    /***/
    function BM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsDetailsPage", function () {
        return DealsDetailsPage;
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


      var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/resolver-helper */
      "evT8");
      /* harmony import */


      var _deals_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deals-details.model */
      "UG6G");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/countdown-timer/countdown-timer.component */
      "dAQS");
      /* harmony import */


      var _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../pipes/time-difference.pipe */
      "ykzn");

      var _c0 = function _c0() {
        return {
          from: "hour",
          to: "second"
        };
      };

      function DealsDetailsPage_ion_row_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deal expires in:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-countdown-timer", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", ctx_r0.details == null ? null : ctx_r0.details.expirationDate)("units", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      }

      var _c1 = function _c1() {
        return {
          w: 56,
          h: 40
        };
      };

      function DealsDetailsPage_ion_slide_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r3)("alt", "deals details");
        }
      }

      var _c2 = function _c2() {
        return {
          w: 1,
          h: 1
        };
      };

      function DealsDetailsPage_div_56_ion_row_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-aspect-ratio", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-image-shell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-shell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deal_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", deal_r5.logo)("alt", "deals logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", deal_r5 == null ? null : deal_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", deal_r5 == null ? null : deal_r5.description);
        }
      }

      function DealsDetailsPage_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More hot deals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DealsDetailsPage_div_56_ion_row_3_Template, 9, 6, "ion-row", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.details == null ? null : ctx_r2.details.relatedDeals);
        }
      }

      var _c3 = function _c3(a0, a1, a2, a3) {
        return {
          "ended": a0,
          "imminent-end": a1,
          "ends-soon": a2,
          "distant-end": a3
        };
      };

      var _c4 = function _c4() {
        return {
          w: 128,
          h: 32
        };
      };

      var DealsDetailsPage = /*#__PURE__*/function () {
        function DealsDetailsPage(route) {
          _classCallCheck(this, DealsDetailsPage);

          this.route = route;
          this.slidesOptions = {
            zoom: {
              toggle: false // Disable zooming to prevent weird double tap zomming on slide images

            }
          };
        }

        _createClass(DealsDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions = this.route.data.pipe( // Extract data for this page
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resolvedRouteData) {
              return _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_2__["ResolverHelper"].extractData(resolvedRouteData.data, _deals_details_model__WEBPACK_IMPORTED_MODULE_3__["DealsDetailsModel"]);
            })).subscribe(function (state) {
              _this.details = state;
            }, function (error) {
              return console.log(error);
            });
          } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
          // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "isShell",
          get: function get() {
            return this.details && this.details.isShell ? true : false;
          }
        }]);

        return DealsDetailsPage;
      }();

      DealsDetailsPage.ɵfac = function DealsDetailsPage_Factory(t) {
        return new (t || DealsDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      DealsDetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DealsDetailsPage,
        selectors: [["app-deals-details"]],
        hostVars: 2,
        hostBindings: function DealsDetailsPage_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
          }
        },
        decls: 57,
        vars: 46,
        consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "app/categories/deals"], [1, "deals-details-content", 3, "ngClass"], ["class", "expiration-countdown", 4, "ngIf"], [1, "details-wrapper"], [1, "slider-row"], ["pager", "true", 1, "details-slides", 3, "options"], ["class", "", 4, "ngFor", "ngForOf"], [1, "description-row"], ["size", "6", 1, "logo-col"], [3, "ratio"], ["animation", "spinner", 1, "logo-image", 3, "src", "alt"], ["size", "9", 1, "info-col"], [1, "details-name"], ["animation", "bouncing", 3, "data"], [1, "details-description"], ["animation", "bouncing", "lines", "3", 3, "data"], ["size", "3", 1, "preview-image-col"], ["animation", "spinner", 1, "preview-image", 3, "src", "alt"], [1, "promo-row"], [1, "promo-title"], ["size", "8"], [1, "promo-description"], ["size", "6"], ["expand", "block", "shape", "round", "fill", "outline", "color", "claim", 1, "promo-code-btn"], [1, "promo-code"], [3, "data"], [1, "promo-instructions"], ["target", "_blank", "href", "https://google.com/search?q=chocolate", 1, "instructions-anchor"], [1, "expiration-notice"], [1, "notice-message"], [1, "expiration-value"], ["class", "related-deals-wrapper", 4, "ngIf"], [1, "expiration-countdown"], [1, "expiration-lead"], ["fill", "countdown", 1, "item-countdown", 3, "end", "units"], [1, ""], [1, "slide-inner-row"], ["animation", "spinner", 1, "showcase-image", 3, "src", "alt"], [1, "related-deals-wrapper"], [1, "related-deals-title"], ["class", "related-deal", 4, "ngFor", "ngForOf"], [1, "related-deal"], ["size", "4", 1, "deal-logo-wrapper"], ["animation", "spinner", 1, "related-deal-logo", 3, "src", "alt"], ["size", "8", 1, "deal-info-wrapper"], [1, "related-deal-title"], [1, "related-deal-description"]],
        template: function DealsDetailsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Deals Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DealsDetailsPage_ion_row_14_Template, 4, 3, "ion-row", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-slides", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DealsDetailsPage_ion_slide_20_Template, 4, 4, "ion-slide", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-aspect-ratio", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-image-shell", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-text-shell", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-text-shell", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-aspect-ratio", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-image-shell", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-row", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Copy the Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Paste this code at checkout to get an extra 50% off ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-text-shell", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Go to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "lancasternutcandy.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " and paste the code at checkout. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "appTimeDifference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-text-shell", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DealsDetailsPage_div_56_Template, 4, 1, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](39, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, ctx.details == null ? null : ctx.details.expirationDate) < 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx.details == null ? null : ctx.details.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx.details == null ? null : ctx.details.expirationDate) <= 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 22, ctx.details == null ? null : ctx.details.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 24, ctx.details == null ? null : ctx.details.expirationDate) > 2 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 26, ctx.details == null ? null : ctx.details.expirationDate) < 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 28, ctx.details == null ? null : ctx.details.expirationDate) >= 10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 30, ctx.details == null ? null : ctx.details.expirationDate) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 32, ctx.details == null ? null : ctx.details.expirationDate) <= 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slidesOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.showcaseImages);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details == null ? null : ctx.details.logo)("alt", "deals details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.details == null ? null : ctx.details.previewImage)("alt", "deals details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cupon ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 34, ctx.details == null ? null : ctx.details.expirationDate) < 0 ? "expired" : "expires", " on:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 36, ctx.details == null ? null : ctx.details.expirationDate, "mediumDate"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.details == null ? null : ctx.details.relatedDeals) && ctx.details.relatedDeals.length > 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_10__["CountdownTimerComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlide"]],
        pipes: [_pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_11__["TimeDifferencePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-details-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.deals-details-content.ended[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-expired-color);\n}\n.deals-details-content.imminent-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n}\n.deals-details-content.ends-soon[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n}\n.deals-details-content.distant-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n}\n.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%] {\n  color: var(--ion-color-lightest);\n  background-color: var(--ion-color-danger);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   .expiration-lead[_ngcontent-%COMP%] {\n  padding: 0px calc(var(--page-margin) / 2);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .expiration-countdown[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%] {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px 3px;\n  --countdown-time-margin: 0px 2px;\n  --countdown-time-padding: 0px 2px;\n  --countdown-inner-time-margin: 0px 2px 0px 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  padding: 0px calc(var(--page-margin) / 4);\n  font-size: 14px;\n  font-weight: 500;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  margin: var(--page-margin);\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%] {\n  --bullet-background: var(--ion-color-primary);\n  --bullet-background-active: var(--ion-color-primary);\n  height: 100%;\n  width: 100%;\n  border-radius: var(--app-broad-radius) var(--app-broad-radius) 0px 0px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n  box-sizing: border-box;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  align-items: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%] {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  text-align: center;\n  justify-content: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::before, .deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::after {\n  content: \"\xB7\";\n  color: var(--ion-color-dark-tint);\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-code[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  line-height: 1;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%] {\n  margin: var(--page-margin) 0px 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n  line-height: 1.4;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .promo-row[_ngcontent-%COMP%]   .promo-instructions[_ngcontent-%COMP%]   .instructions-anchor[_ngcontent-%COMP%] {\n  color: var(--page-color);\n  text-decoration: none;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%] {\n  background-color: var(--page-deal-color);\n  padding: calc(var(--page-margin) / 2) var(--page-margin);\n  color: var(--ion-color-lightest);\n  border-radius: 0px 0px var(--app-broad-radius) var(--app-broad-radius);\n  display: flex;\n  justify-content: space-evenly;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .notice-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n.deals-details-content[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%]   .expiration-notice[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%] {\n  display: block;\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 3) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deals-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  border-radius: var(--app-broad-radius);\n  background-color: var(--ion-color-lightest);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-logo-wrapper[_ngcontent-%COMP%] {\n  padding: calc(var(--page-margin) / 4) var(--page-margin) calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border-right: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  padding-top: calc(var(--page-margin) / 4);\n  padding-bottom: calc(var(--page-margin) / 4);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: 5px;\n  color: var(--ion-color-dark-tint);\n  font-size: 20px;\n}\n.deals-details-content[_ngcontent-%COMP%]   .related-deals-wrapper[_ngcontent-%COMP%]   .related-deal[_ngcontent-%COMP%]   .deal-info-wrapper[_ngcontent-%COMP%]   .related-deal-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n[_nghost-%COMP%]     app-countdown-timer.item-countdown .time-unit {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zL2lvbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNFLHNDQUFBO0VBQ0EsOENBQUE7RUFFQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFFQSwyRUFBQTtFQUVBLGtEQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLDBDQUFBO0VBRUEscUJBQUE7RUFJRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFWSjtBQ2hCRTtFQUNFLG1EQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtFQUNBLHdFQUFBO0VBQ0EsMERBQUE7RUFDQSx3REFBQTtBRGtCSjtBQU9BO0VBQ0Usb0NBQUE7QUFKRjtBQU1FO0VBQ0UsNENBQUE7QUFKSjtBQU1FO0VBQ0UsZ0RBQUE7QUFKSjtBQU1FO0VBQ0UsOENBQUE7QUFKSjtBQU1FO0VBQ0UsZ0RBQUE7QUFKSjtBQU9FO0VBQ0UsZ0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHdEQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQTjtBQVVJO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGdFQUFBO0VBQ0EsNkJBQUE7RUFDQSx3REFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxpREFBQTtFQUNBLHFEQUFBO0VBRUEseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFUTjtBQWFFO0VBQ0UsMEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDJDQUFBO0FBWEo7QUFjTTtFQUNFLDZDQUFBO0VBQ0Esb0RBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNFQUFBO0FBYlI7QUFlUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1EQUFBO0VBRUEsc0JBQUE7QUFmVjtBQW9CSTtFQUNFLDhCQUFBO0VBRUEsMkVBQUE7RUFDQSw4REFBQTtFQUNBLG1CQUFBO0FBbkJOO0FBcUJNO0VBQ0UsNENBQUE7QUFuQlI7QUFzQk07RUFDRSwyQ0FBQTtBQXBCUjtBQXNCUTtFQUNFLFdBQUE7RUFDSCwyQ0FBQTtFQUNHLGlDQUFBO0VBQ0EsZUFBQTtBQXBCVjtBQXVCUTtFQUNFLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFyQlY7QUEwQkk7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQXpCTjtBQTJCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUF6QlI7QUEyQlE7RUFFRSxZQUFBO0VBQ0EsaUNBQUE7QUExQlY7QUE4Qk07RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQTVCUjtBQStCTTtFQUNFLFdBQUE7QUE3QlI7QUFnQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUE5QlI7QUFpQ007RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBL0JSO0FBaUNRO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtBQS9CVjtBQW9DSTtFQUNFLHdDQUFBO0VBQ0Esd0RBQUE7RUFDQSxnQ0FBQTtFQUNBLHNFQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBbENOO0FBb0NNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFsQ1I7QUFxQ007RUFDRSxjQUFBO0FBbkNSO0FBd0NFO0VBQ0Usb0ZBQUE7QUF0Q0o7QUF3Q0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtBQXRDTjtBQXlDSTtFQUNFLDhCQUFBO0VBRUEsc0NBQUE7RUFDQSwyQ0FBQTtBQXhDTjtBQTBDTTtFQUNFLDJDQUFBO0FBeENSO0FBMkNNO0VBQ0Usa0hBQUE7RUFDQSw2REFBQTtBQXpDUjtBQTRDTTtFQUNFLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUExQ1I7QUE0Q1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUExQ1Y7QUE2Q1E7RUFDRSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBM0NWO0FBd0RJO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0VBRUEsK0ZBQUE7QUF0RE47QUF3RE07RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FBdERSO0FBNERJO0VBRUUsZ0JBQUE7QUEzRE4iLCJmaWxlIjoic3JjL2FwcC9kZWFscy9kZXRhaWxzL3N0eWxlcy9kZWFscy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogMzBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG4gIC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC4yKTtcbiAgLS1wYWdlLWV4cGlyZWQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIC0tcGFnZS1lbmRzLXNvb24tY29sb3I6ICNGRkFCNkI7XG4gIC0tcGFnZS1kaXN0YW50LWVuZC1jb2xvcjogIzcwREY3MDtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtY29sb3I6ICM3MERGNzA7XG4gIC0taW9uLWNvbG9yLWNsYWltOiAjNzBERjcwO1xuICAtLWlvbi1jb2xvci1jbGFpbS1yZ2I6IDExMiwyMjMsMTEyO1xuICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItY2xhaW0tc2hhZGU6ICM2M0M0NjM7XG4gIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG59XG46aG9zdCAuaW9uLWNvbG9yLWNsYWltIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWNsYWltKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWNsYWltLXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWNsYWltLXNoYWRlKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY2xhaW0tdGludCkgIWltcG9ydGFudDtcbn1cblxuLmRlYWxzLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQuZW5kZWQge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQuaW1taW5lbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudC5lbmRzLXNvb24ge1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0tcGFnZS1lbmRzLXNvb24tY29sb3IpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudC5kaXN0YW50LWVuZCB7XG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmV4cGlyYXRpb24tY291bnRkb3duIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZXhwaXJhdGlvbi1jb3VudGRvd24gLmV4cGlyYXRpb24tbGVhZCB7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5leHBpcmF0aW9uLWNvdW50ZG93biBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXBhZGRpbmc6IDBweCAzcHg7XG4gIC0tY291bnRkb3duLXRpbWUtbWFyZ2luOiAwcHggMnB4O1xuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweCAycHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAwcHggMnB4IDBweCAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLWNvdW50ZG93bi1maWxsLXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yKTtcbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgLS1jb3VudGRvd24tdW5pdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWJyb2FkLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnNsaWRlci1yb3cgLmRldGFpbHMtc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAwcHggMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5zbGlkZXItcm93IC5kZXRhaWxzLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmRlc2NyaXB0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4xKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZGVzY3JpcHRpb24tcm93IC5sb2dvLWNvbCB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5kZXNjcmlwdGlvbi1yb3cgLmluZm8tY29sIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAuZGVzY3JpcHRpb24tcm93IC5pbmZvLWNvbCAuZGV0YWlscy1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5kZXNjcmlwdGlvbi1yb3cgLmluZm8tY29sIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLnByb21vLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLXRpdGxlOjpiZWZvcmUsIC5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsK3XCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby1jb2RlLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLWNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtd3JhcHBlciAucHJvbW8tcm93IC5wcm9tby1pbnN0cnVjdGlvbnMge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5wcm9tby1yb3cgLnByb21vLWluc3RydWN0aW9ucyAuaW5zdHJ1Y3Rpb25zLWFuY2hvciB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAuZGV0YWlscy13cmFwcGVyIC5leHBpcmF0aW9uLW5vdGljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtZGVhbC1jb2xvcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmV4cGlyYXRpb24tbm90aWNlIC5ub3RpY2UtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXdyYXBwZXIgLmV4cGlyYXRpb24tbm90aWNlIC5leHBpcmF0aW9uLXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMykgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbHMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbi5kZWFscy1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtZGVhbHMtd3JhcHBlciAucmVsYXRlZC1kZWFsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtbG9nby13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjEpO1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGVhbHMtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWRlYWxzLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbCAuZGVhbC1pbmZvLXdyYXBwZXIgLnJlbGF0ZWQtZGVhbC10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRlYWxzLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1kZWFscy13cmFwcGVyIC5yZWxhdGVkLWRlYWwgLmRlYWwtaW5mby13cmFwcGVyIC5yZWxhdGVkLWRlYWwtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWxzLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWxzLXNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG59XG46aG9zdCA6Om5nLWRlZXAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biAudGltZS11bml0IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iLCJAbWl4aW4gaW9uLWNvbG9yKCRjb2xvcikge1xyXG4gIEBjb250ZW50O1xyXG5cclxuICAuaW9uLWNvbG9yLSN7JGNvbG9yfSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tcmdiKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tc2hhZGUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXRpbnQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "[_nghost-%COMP%] {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.logo-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.details-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.details-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.preview-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.promo-code[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 80px;\n}\n\n.promo-code[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.expiration-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--ion-color-lightest-rgb), .20);\n  --text-shell-line-height: 18px;\n  min-width: 60px;\n}\n\n.expiration-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\napp-image-shell.related-deal-logo[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.related-deal-title[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.related-deal-title[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.related-deal-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.related-deal-description[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQURGOztBQVdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQVJGOztBQVdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0FBUkY7O0FBV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBV0E7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0VBQ0EsZ0NBQUE7QUFSRjs7QUFXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBUkY7O0FBVUU7RUFDRSxjQUFBO0FBUko7O0FBWUE7RUFDRSxpRUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVRGOztBQVdFO0VBQ0UsY0FBQTtBQVRKOztBQWFBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0FBVkY7O0FBYUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQVlFO0VBQ0Usa0JBQUE7QUFWSjs7QUFjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBWEY7O0FBYUU7RUFDRSxrQkFBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvZGV0YWlscy9zdHlsZXMvZGVhbHMtZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tc2hlbGwtY29sb3I6ICM3MERGNzA7XHJcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDExMiwyMjMsMTEyO1xyXG59XHJcblxyXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxyXG46aG9zdCguaXMtc2hlbGwpIHtcclxuICAvLyBpb24tY29udGVudCB7XHJcbiAgLy8gICBvcGFjaXR5OiAwLjg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwuc2hvd2Nhc2UtaW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XHJcbn1cclxuXHJcbmFwcC1pbWFnZS1zaGVsbC5sb2dvLWltYWdlIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xyXG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcclxufVxyXG5cclxuYXBwLWltYWdlLXNoZWxsLnByZXZpZXctaW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wcm9tby1jb2RlID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1pbi13aWR0aDogODBweDtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtaW4td2lkdGg6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5leHBpcmF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodGVzdC1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWluLXdpZHRoOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1kZWFsLWxvZ28ge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5yZWxhdGVkLWRlYWwtdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcblxyXG4gICYudGV4dC1sb2FkZWQge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLnJlbGF0ZWQtZGVhbC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDetailsPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-deals-details',
            templateUrl: './deals-details.page.html',
            styleUrls: ['./styles/deals-details.page.scss', './styles/deals-details.shell.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, {
          isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-shell']
          }]
        });
      })();
      /***/

    },

    /***/
    "XC8D":
    /*!*********************************************************!*\
      !*** ./src/app/deals/details/deals-details.resolver.ts ***!
      \*********************************************************/

    /*! exports provided: DealsDetailsResolver */

    /***/
    function XC8D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsDetailsResolver", function () {
        return DealsDetailsResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../deals.service */
      "y+sA");

      var DealsDetailsResolver = /*#__PURE__*/function () {
        function DealsDetailsResolver(dealsService) {
          _classCallCheck(this, DealsDetailsResolver);

          this.dealsService = dealsService;
        }

        _createClass(DealsDetailsResolver, [{
          key: "resolve",
          value: function resolve() {
            var dataSource = this.dealsService.getDetailsDataSource();
            var dataStore = this.dealsService.getDetailsStore(dataSource);
            return dataStore;
          }
        }]);

        return DealsDetailsResolver;
      }();

      DealsDetailsResolver.ɵfac = function DealsDetailsResolver_Factory(t) {
        return new (t || DealsDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"]));
      };

      DealsDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DealsDetailsResolver,
        factory: DealsDetailsResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDetailsResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pvlM":
    /*!*******************************************************!*\
      !*** ./src/app/deals/details/deals-details.module.ts ***!
      \*******************************************************/

    /*! exports provided: DealsDetailsPageModule */

    /***/
    function pvlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsDetailsPageModule", function () {
        return DealsDetailsPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _deals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../deals.service */
      "y+sA");
      /* harmony import */


      var _deals_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./deals-details.page */
      "/B+m");
      /* harmony import */


      var _deals_details_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./deals-details.resolver */
      "XC8D");

      var routes = [{
        path: '',
        component: _deals_details_page__WEBPACK_IMPORTED_MODULE_7__["DealsDetailsPage"],
        resolve: {
          data: _deals_details_resolver__WEBPACK_IMPORTED_MODULE_8__["DealsDetailsResolver"]
        }
      }];

      var DealsDetailsPageModule = function DealsDetailsPageModule() {
        _classCallCheck(this, DealsDetailsPageModule);
      };

      DealsDetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DealsDetailsPageModule
      });
      DealsDetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DealsDetailsPageModule_Factory(t) {
          return new (t || DealsDetailsPageModule)();
        },
        providers: [_deals_details_resolver__WEBPACK_IMPORTED_MODULE_8__["DealsDetailsResolver"], _deals_service__WEBPACK_IMPORTED_MODULE_6__["DealsService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DealsDetailsPageModule, {
          declarations: [_deals_details_page__WEBPACK_IMPORTED_MODULE_7__["DealsDetailsPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DealsDetailsPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]],
            declarations: [_deals_details_page__WEBPACK_IMPORTED_MODULE_7__["DealsDetailsPage"]],
            providers: [_deals_details_resolver__WEBPACK_IMPORTED_MODULE_8__["DealsDetailsResolver"], _deals_service__WEBPACK_IMPORTED_MODULE_6__["DealsService"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=deals-details-deals-details-module-es5.js.map