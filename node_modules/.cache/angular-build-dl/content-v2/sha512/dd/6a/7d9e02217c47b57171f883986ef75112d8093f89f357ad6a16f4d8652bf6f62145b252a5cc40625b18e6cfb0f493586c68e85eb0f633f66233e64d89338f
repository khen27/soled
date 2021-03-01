(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~food-details-food-details-module~food-listing-food-listing-module"], {
    /***/
    "K05d":
    /*!****************************************************!*\
      !*** ./src/app/food/details/food-details.model.ts ***!
      \****************************************************/

    /*! exports provided: FoodDetailsModel */

    /***/
    function K05d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodDetailsModel", function () {
        return FoodDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var FoodDetailsModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(FoodDetailsModel, _shell_data_store__WE);

        var _super = _createSuper(FoodDetailsModel);

        function FoodDetailsModel() {
          var _this;

          _classCallCheck(this, FoodDetailsModel);

          _this = _super.call(this);
          _this.ratings = [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }];
          _this.openHours = [{
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: true,
            hourFrom: '',
            hourTo: ''
          }, {
            day: '',
            open: false,
            hourFrom: '',
            hourTo: ''
          }];
          _this.tags = ['', '', ''];
          _this.usersPictures = ['', '', '', '', '', ''];
          _this.popularDishes = [{
            name: '',
            rate: null,
            votesCount: null
          }, {
            name: '',
            rate: null,
            votesCount: null
          }];
          _this.reviews = [{
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }, {
            user: {
              image: '',
              name: '',
              reviewsCount: null,
              points: null
            },
            avgRating: null,
            ratings: [{
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }, {
              concept: '',
              rate: null
            }],
            publishedAt: null,
            message: ''
          }];
          _this.popularRecipes = [{
            showcaseImage: '',
            name: '',
            chef: {
              name: '',
              image: ''
            },
            difficulty: '',
            time: '',
            calories: '',
            chefExtract: ''
          }];
          return _this;
        }

        return FoodDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "MrCo":
    /*!**************************************!*\
      !*** ./src/app/food/food.service.ts ***!
      \**************************************/

    /*! exports provided: FoodService */

    /***/
    function MrCo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodService", function () {
        return FoodService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./listing/food-listing.model */
      "WAd3");
      /* harmony import */


      var _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details/food-details.model */
      "K05d");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var FoodService = /*#__PURE__*/function () {
        function FoodService(platformId, transferStateHelper, http) {
          _classCallCheck(this, FoodService);

          this.platformId = platformId;
          this.transferStateHelper = transferStateHelper;
          this.http = http;
        }

        _createClass(FoodService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            var rawDataSource = this.http.get('./assets/sample-data/food/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('food-listing-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
              // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.listingDataStore.load(dataSource, 0);
              } else {
                // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.listingDataStore.load(dataSource);
              }
            }

            return this.listingDataStore;
          }
        }, {
          key: "getDetailsDataSource",
          value: function getDetailsDataSource(slug) {
            var rawDataSource = this.http.get('./assets/sample-data/food/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (details) {
              return details.items.filter(function (item) {
                return item.slug === slug;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('food-details-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
              // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
              this.detailsDataStore.load(dataSource, 0);
            } else {
              // On browser transitions
              // Trigger the loading mechanism (with shell)
              this.detailsDataStore.load(dataSource);
            }

            return this.detailsDataStore;
          }
        }]);

        return FoodService;
      }();

      FoodService.ɵfac = function FoodService_Factory(t) {
        return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      FoodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FoodService,
        factory: FoodService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__["TransferStateHelper"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WAd3":
    /*!****************************************************!*\
      !*** ./src/app/food/listing/food-listing.model.ts ***!
      \****************************************************/

    /*! exports provided: FoodItemModel, FoodListingModel */

    /***/
    function WAd3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodItemModel", function () {
        return FoodItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodListingModel", function () {
        return FoodListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var FoodItemModel = function FoodItemModel() {
        _classCallCheck(this, FoodItemModel);

        this.tags = ['', '', ''];
        this.pictures = ['', '', '', '', ''];
      };

      var FoodListingModel = /*#__PURE__*/function (_shell_data_store__WE2) {
        _inherits(FoodListingModel, _shell_data_store__WE2);

        var _super2 = _createSuper(FoodListingModel);

        function FoodListingModel() {
          var _this2;

          _classCallCheck(this, FoodListingModel);

          _this2 = _super2.call(this);
          _this2.items = [new FoodItemModel(), new FoodItemModel(), new FoodItemModel(), new FoodItemModel()];
          return _this2;
        }

        return FoodListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~food-details-food-details-module~food-listing-food-listing-module-es5.js.map