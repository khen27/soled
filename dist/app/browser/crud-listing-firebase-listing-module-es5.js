(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crud-listing-firebase-listing-module"], {
    /***/
    "Y0ph":
    /*!******************************************************************!*\
      !*** ./src/app/firebase/crud/listing/firebase-listing.module.ts ***!
      \******************************************************************/

    /*! exports provided: FirebaseListingPageModule */

    /***/
    function Y0ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseListingPageModule", function () {
        return FirebaseListingPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _firebase_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firebase-listing.page */
      "dnet");
      /* harmony import */


      var _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./firebase-listing.resolver */
      "uwRk");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../firebase-crud.service */
      "izws");
      /* harmony import */


      var _firebase_crud_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../firebase-crud-shared.module */
      "k8ID");

      var routes = [{
        path: '',
        component: _firebase_listing_page__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingPage"],
        resolve: {
          data: _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingResolver"]
        }
      }];

      var FirebaseListingPageModule = function FirebaseListingPageModule() {
        _classCallCheck(this, FirebaseListingPageModule);
      };

      FirebaseListingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FirebaseListingPageModule
      });
      FirebaseListingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FirebaseListingPageModule_Factory(t) {
          return new (t || FirebaseListingPageModule)();
        },
        providers: [_firebase_crud_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseCrudService"], _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingResolver"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _firebase_crud_shared_module__WEBPACK_IMPORTED_MODULE_9__["FirebaseCrudSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirebaseListingPageModule, {
          declarations: [_firebase_listing_page__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _firebase_crud_shared_module__WEBPACK_IMPORTED_MODULE_9__["FirebaseCrudSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseListingPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _firebase_crud_shared_module__WEBPACK_IMPORTED_MODULE_9__["FirebaseCrudSharedModule"]],
            declarations: [_firebase_listing_page__WEBPACK_IMPORTED_MODULE_5__["FirebaseListingPage"]],
            providers: [_firebase_crud_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseCrudService"], _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingResolver"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dnet":
    /*!****************************************************************!*\
      !*** ./src/app/firebase/crud/listing/firebase-listing.page.ts ***!
      \****************************************************************/

    /*! exports provided: FirebaseListingPage */

    /***/
    function dnet(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseListingPage", function () {
        return FirebaseListingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./firebase-listing.model */
      "X1WR");
      /* harmony import */


      var _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../user/create/firebase-create-user.modal */
      "atpo");
      /* harmony import */


      var _app_shell_data_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../app/shell/data-store */
      "f/Ol");
      /* harmony import */


      var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../firebase-crud.service */
      "izws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shell/text-shell/text-shell.component */
      "zK/y");

      var _c0 = function _c0(a1) {
        return ["/firebase/crud/details", a1];
      };

      var _c1 = function _c1() {
        return {
          w: 1,
          h: 1
        };
      };

      function FirebaseListingPage_ion_list_29_ion_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-aspect-ratio", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-image-shell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-text-shell", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-text-shell", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, item_r3.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.avatar)("alt", "item image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r3.name == null ? null : item_r3.name.concat(" ").concat(item_r3.lastname));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", item_r3.age == null ? null : item_r3.age.toString().concat(" years old"));
        }
      }

      function FirebaseListingPage_ion_list_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FirebaseListingPage_ion_list_29_ion_item_1_Template, 11, 9, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.items);
        }
      }

      function FirebaseListingPage_h3_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No users found for the selected filters. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var FirebaseListingPage = /*#__PURE__*/function () {
        function FirebaseListingPage(firebaseCrudService, modalController, route, routerOutlet) {
          _classCallCheck(this, FirebaseListingPage);

          this.firebaseCrudService = firebaseCrudService;
          this.modalController = modalController;
          this.route = route;
          this.routerOutlet = routerOutlet;
          this.showAgeFilter = false;
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
          this.searchFiltersObservable = this.searchSubject.asObservable();
        }

        _createClass(FirebaseListingPage, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateSubscription.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.searchQuery = '';
            this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                lower: 1,
                upper: 100
              })
            });
            this.route.data.subscribe(function (resolvedRouteData) {
              _this.listingDataStore = resolvedRouteData['data']; // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
              // By using a switchMap to cancel previous subscription each time a new one arrives,
              // we ensure having just one subscription (the latest)

              var updateSearchObservable = _this.searchFiltersObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (filters) {
                var filteredDataSource = _this.firebaseCrudService.searchUsersByAge(filters.lower, filters.upper); // Send a shell until we have filtered data from Firebase


                var searchingShellModel = [new _firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"](), new _firebase_listing_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingItemModel"]()]; // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data

                var searchingDelay = 400;

                var dataSourceWithShellObservable = _app_shell_data_store__WEBPACK_IMPORTED_MODULE_9__["DataStore"].AppendShell(filteredDataSource, searchingShellModel, searchingDelay);

                return dataSourceWithShellObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (filteredItems) {
                  // Just filter items by name if there is a search query and they are not shell values
                  if (filters.query !== '' && !filteredItems.isShell) {
                    var queryFilteredItems = filteredItems.filter(function (item) {
                      return item.name.toLowerCase().includes(filters.query.toLowerCase());
                    }); // While filtering we strip out the isShell property, add it again

                    return Object.assign(queryFilteredItems, {
                      isShell: filteredItems.isShell
                    });
                  } else {
                    return filteredItems;
                  }
                }));
              })); // Keep track of the subscription to unsubscribe onDestroy
              // Merge filteredData with the original dataStore state


              _this.stateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_this.listingDataStore.state, updateSearchObservable).subscribe(function (state) {
                _this.items = state;
              }, function (error) {
                return console.log(error);
              }, function () {
                return console.log('stateSubscription completed');
              });
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "openFirebaseCreateModal",
          value: function openFirebaseCreateModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_8__["FirebaseCreateUserModal"],
                        swipeToClose: true,
                        presentingElement: this.routerOutlet.nativeEl
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "searchList",
          value: function searchList() {
            this.searchSubject.next({
              lower: this.rangeForm.controls.dual.value.lower,
              upper: this.rangeForm.controls.dual.value.upper,
              query: this.searchQuery
            });
          }
        }, {
          key: "isShell",
          get: function get() {
            return this.items && this.items.isShell ? true : false;
          }
        }]);

        return FirebaseListingPage;
      }();

      FirebaseListingPage.ɵfac = function FirebaseListingPage_Factory(t) {
        return new (t || FirebaseListingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_firebase_crud_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseCrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]));
      };

      FirebaseListingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FirebaseListingPage,
        selectors: [["app-firebase-listing"]],
        hostVars: 2,
        hostBindings: function FirebaseListingPage_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-shell", ctx.isShell);
          }
        },
        decls: 31,
        vars: 7,
        consts: [["color", "primary"], ["slot", "start"], ["color", "light"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "add"], [1, "filters-toolbar"], ["align-items-center", "", 1, "searchbar-row"], ["animated", "", "placeholder", "Filter by name...", 1, "items-searchbar", 3, "ngModel", "ngModelChange", "ionChange"], [1, "call-to-action-col"], ["fill", "clear", "color", "secondary", 1, "filters-btn", 3, "click"], ["slot", "icon-only", "name", "options"], [3, "formGroup", "hidden"], [1, "range-item-row"], ["size", "12"], [1, "range-header"], [1, "range-value"], [1, "range-label"], ["formControlName", "dual", "color", "secondary", "pin", "true", "dualKnobs", "true", "min", "1", "max", "100", "step", "1", "debounce", "400", 1, "range-control", 3, "ionChange"], [1, "firebase-listing-content"], ["class", "items-list", 4, "ngIf"], ["class", "empty-list-message", 4, "ngIf"], [1, "items-list"], ["class", "list-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "routerLink"], [1, "user-row"], ["size", "3", 1, "user-image-wrapper"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "src", "alt"], [1, "user-data-wrapper"], [1, "user-info"], [1, "user-name"], ["animation", "bouncing", 3, "data"], [1, "user-age"], [1, "empty-list-message"]],
        template: function FirebaseListingPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Firebase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirebaseListingPage_Template_ion_button_click_7_listener() {
              return ctx.openFirebaseCreateModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-searchbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FirebaseListingPage_Template_ion_searchbar_ngModelChange_12_listener($event) {
              return ctx.searchQuery = $event;
            })("ionChange", function FirebaseListingPage_Template_ion_searchbar_ionChange_12_listener() {
              return ctx.searchList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirebaseListingPage_Template_ion_button_click_14_listener() {
              return ctx.showAgeFilter = !ctx.showAgeFilter;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-row", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-col", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Filter by age");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-range", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FirebaseListingPage_Template_ion_range_ionChange_27_listener() {
              return ctx.searchList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-content", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, FirebaseListingPage_ion_list_29_Template, 2, 1, "ion-list", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, FirebaseListingPage_h3_30_Template, 2, 0, "h3", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.rangeForm)("hidden", !ctx.showAgeFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.rangeForm.controls.dual.value.lower);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.rangeForm.controls.dual.value.upper);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.items == null ? null : ctx.items.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.items == null ? null : ctx.items.length) == 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_12__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_13__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_14__["TextShellComponent"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.filters-toolbar[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .filters-btn[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin-top: var(--page-margin);\n  padding-top: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.firebase-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: var(--page-margin);\n  --inner-padding-top: calc(var(--page-margin) / 2);\n  --inner-padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-start: calc(var(--page-margin) / 2);\n          padding-inline-start: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  font-size: 16px;\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\n.firebase-listing-content[_ngcontent-%COMP%]   .empty-list-message[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFLQTtFQUNFLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBRkY7O0FBSUU7RUFDRSw4QkFBQTtBQUZKOztBQUlJO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQUpOOztBQU9JO0VBQ0UseUNBQUE7VUFBQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHlCQUFBO0FBTk47O0FBUU07RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFFQSxlQUFBO0FBUlI7O0FBYUU7RUFDRSw4QkFBQTtFQUVBLDhCQUFBO0VBQ0EsK0JBQUE7RUFFQSx5REFBQTtBQWJKOztBQWVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7QUFiTjs7QUFlTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFiUjs7QUFnQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBZFI7O0FBa0JJO0VBRUUseUNBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEJOOztBQXVCQTtFQUNFLG9DQUFBO0FBcEJGOztBQXVCSTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvREFBQTtBQXJCTjs7QUF1Qk07RUFDRSw4QkFBQTtFQUVBLFdBQUE7QUF0QlI7O0FBd0JRO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtBQXRCVjs7QUF5QlE7RUFDRSxtREFBQTtVQUFBLGtEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUF2QlY7O0FBMEJZO0VBQ0UsMkNBQUE7QUF4QmQ7O0FBMkJZO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQXpCZDs7QUE0Qlk7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FBMUJkOztBQWtDRTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQWhDSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2NydWQvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmZpbHRlcnMtdG9vbGJhciB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gIC5zZWFyY2hiYXItcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gTGVhcm4gbW9yZSBhYm91dCBDU1MgY29udGFpbiBwcm9wZXJ0eSBoZXJlOiBodHRwczovL3Rlcm12YWRlci5naXRodWIuaW8vY3NzLWNvbnRhaW4vXHJcbiAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmbGV4LWdyb3c6IDA7XHJcblxyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmZpbHRlcnMtYnRuIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcclxuICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yYW5nZS1pdGVtLXJvdyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcclxuXHJcbiAgICAucmFuZ2UtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuXHJcbiAgICAgIC5yYW5nZS12YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJhbmdlLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJhbmdlLWNvbnRyb2wge1xyXG4gICAgICAvLyBvdmVycmlkZSB0aGUgcGluIGNvbG9yXHJcbiAgICAgIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG5cclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuXHJcbiAgLml0ZW1zLWxpc3Qge1xyXG4gICAgLmxpc3QtaXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gICAgICAudXNlci1yb3cge1xyXG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC51c2VyLWltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXItZGF0YS13cmFwcGVyIHtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItYWdlIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVtcHR5LWxpc3QtbWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */", ".ios[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n.ios[_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%] {\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLmlvcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtBQUZOO0FBT0k7RUFDRSwrQkFBQTtFQUNBLHFDQUFBO0FBTE4iLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL2xpc3Rpbmcvc3R5bGVzL2ZpcmViYXNlLWxpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5pb3MpIHtcclxuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcclxuICAubGlzdC1pdGVtIHtcclxuICAgIC51c2VyLWRhdGEtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2hiYXItcm93IHtcclxuICAgIGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcclxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctdG9wKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctYm90dG9tKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.user-age[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxrQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvY3J1ZC9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XHJcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xyXG59XHJcblxyXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xyXG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuXHJcbiAgJi50ZXh0LWxvYWRlZCB7XHJcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseListingPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-firebase-listing',
            templateUrl: './firebase-listing.page.html',
            styleUrls: ['./styles/firebase-listing.page.scss', './styles/firebase-listing.ios.scss', './styles/firebase-listing.shell.scss']
          }]
        }], function () {
          return [{
            type: _firebase_crud_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseCrudService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
          }];
        }, {
          isShell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.is-shell']
          }]
        });
      })();
      /***/

    },

    /***/
    "uwRk":
    /*!********************************************************************!*\
      !*** ./src/app/firebase/crud/listing/firebase-listing.resolver.ts ***!
      \********************************************************************/

    /*! exports provided: FirebaseListingResolver */

    /***/
    function uwRk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseListingResolver", function () {
        return FirebaseListingResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../firebase-crud.service */
      "izws");

      var FirebaseListingResolver = /*#__PURE__*/function () {
        function FirebaseListingResolver(firebaseCrudService) {
          _classCallCheck(this, FirebaseListingResolver);

          this.firebaseCrudService = firebaseCrudService;
        }

        _createClass(FirebaseListingResolver, [{
          key: "resolve",
          value: function resolve() {
            var dataSource = this.firebaseCrudService.getListingDataSource();
            var dataStore = this.firebaseCrudService.getListingStore(dataSource);
            return dataStore;
          }
        }]);

        return FirebaseListingResolver;
      }();

      FirebaseListingResolver.ɵfac = function FirebaseListingResolver_Factory(t) {
        return new (t || FirebaseListingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_firebase_crud_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseCrudService"]));
      };

      FirebaseListingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FirebaseListingResolver,
        factory: FirebaseListingResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseListingResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _firebase_crud_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseCrudService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=crud-listing-firebase-listing-module-es5.js.map