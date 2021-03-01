(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fashion-details-fashion-details-module~fashion-listing-fashion-listing-module"], {
    /***/
    "/pNQ":
    /*!********************************************!*\
      !*** ./src/app/fashion/fashion.service.ts ***!
      \********************************************/

    /*! exports provided: FashionService */

    /***/
    function pNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionService", function () {
        return FashionService;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listing/fashion-listing.model */
      "nfFl");
      /* harmony import */


      var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./details/fashion-details.model */
      "W6mW");

      var FashionService = /*#__PURE__*/function () {
        function FashionService(platformId, transferStateHelper, http) {
          _classCallCheck(this, FashionService);

          this.platformId = platformId;
          this.transferStateHelper = transferStateHelper;
          this.http = http;
        }

        _createClass(FashionService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            var rawDataSource = this.http.get('./assets/sample-data/fashion/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_6__["FashionListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('fashion-listing-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Check if we already loaded this object
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_6__["FashionListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
              // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
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
          value: function getDetailsDataSource() {
            var rawDataSource = this.http.get('./assets/sample-data/fashion/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('fashion-details-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Check if we already loaded this object
            if (!this.detailsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_7__["FashionDetailsModel"]();
              this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
              // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.detailsDataStore.load(dataSource, 0);
              } else {
                // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.detailsDataStore.load(dataSource);
              }
            }

            return this.detailsDataStore;
          }
        }]);

        return FashionService;
      }();

      FashionService.ɵfac = function FashionService_Factory(t) {
        return new (t || FashionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_5__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      FashionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FashionService,
        factory: FashionService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_5__["TransferStateHelper"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "W6mW":
    /*!**********************************************************!*\
      !*** ./src/app/fashion/details/fashion-details.model.ts ***!
      \**********************************************************/

    /*! exports provided: FashionDetailsModel */

    /***/
    function W6mW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function () {
        return FashionDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var FashionDetailsModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(FashionDetailsModel, _shell_data_store__WE);

        var _super = _createSuper(FashionDetailsModel);

        function FashionDetailsModel() {
          var _this;

          _classCallCheck(this, FashionDetailsModel);

          _this = _super.call(this);
          _this.showcaseImages = [{
            type: '',
            source: ''
          }, {
            type: '',
            source: ''
          }, {
            type: '',
            source: ''
          }];
          _this.colorVariants = [{
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }];
          _this.sizeVariants = [{
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }, {
            name: '',
            value: '',
            "default": false
          }];
          _this.relatedProducts = [{
            id: null
          }, {
            id: null
          }];
          return _this;
        }

        return FashionDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "evT8":
    /*!******************************************!*\
      !*** ./src/app/utils/resolver-helper.ts ***!
      \******************************************/

    /*! exports provided: ResolverHelper */

    /***/
    function evT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResolverHelper", function () {
        return ResolverHelper;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ResolverHelper = /*#__PURE__*/function () {
        function ResolverHelper() {
          _classCallCheck(this, ResolverHelper);
        }

        _createClass(ResolverHelper, null, [{
          key: "extractData",
          // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
          value: function extractData(source, constructor) {
            if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["DataStore"]) {
              return source.state;
            } else if (source instanceof constructor) {
              // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
              // That's why we included an extra parameter which acts as a constructor function for type T
              // (see: https://github.com/microsoft/TypeScript/issues/5236)
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source);
            }
          }
        }]);

        return ResolverHelper;
      }();
      /***/

    },

    /***/
    "f/Ol":
    /*!*************************************!*\
      !*** ./src/app/shell/data-store.ts ***!
      \*************************************/

    /*! exports provided: ShellModel, DataStore */

    /***/
    function fOl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShellModel", function () {
        return ShellModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataStore", function () {
        return DataStore;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var ShellModel = function ShellModel() {
        _classCallCheck(this, ShellModel);

        this.isShell = false;
      };

      var DataStore = /*#__PURE__*/function () {
        function DataStore(shellModel) {
          _classCallCheck(this, DataStore);

          this.shellModel = shellModel; // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
          // However, in production you should set this delay to 0 in the environment.prod file.
          // tslint:disable-next-line:max-line-length

          this.networkDelay = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appShellConfig.networkDelay ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appShellConfig.networkDelay : 0;
          this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        } // Static function with generics
        // (ref: https://stackoverflow.com/a/24293088/1116959)
        // Append a shell (T & ShellModel) to every value (T) emmited to the timeline


        _createClass(DataStore, [{
          key: "load",
          value: function load(dataSourceObservable, networkDelay) {
            var _this2 = this;

            // tslint:disable-next-line:no-shadowed-variable
            var delay = typeof networkDelay === 'number' ? networkDelay : this.networkDelay;
            var processedDataSource; // If no network delay, then don't show shell

            if (delay === 0) {
              processedDataSource = dataSourceObservable;
            } else {
              processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
            }

            processedDataSource.subscribe(function (dataValue) {
              _this2.timeline.next(dataValue);
            });
          }
        }, {
          key: "state",
          get: function get() {
            return this.timeline.asObservable();
          }
        }], [{
          key: "AppendShell",
          value: function AppendShell(dataObservable, shellModel) {
            var networkDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
            var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay)); // Assign shell flag accordingly
            // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([delayObservable, dataObservable]).pipe( // Dismiss unnecessary delayValue
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  delayValue = _ref2[0],
                  dataValue = _ref2[1];

              return Object.assign(dataValue, {
                isShell: false
              });
            }), // Set the shell model as the initial value
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, {
              isShell: true
            })));
          }
        }]);

        return DataStore;
      }();
      /***/

    },

    /***/
    "nfFl":
    /*!**********************************************************!*\
      !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
      \**********************************************************/

    /*! exports provided: FashionItemModel, FashionListingModel */

    /***/
    function nfFl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionItemModel", function () {
        return FashionItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FashionListingModel", function () {
        return FashionListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var FashionItemModel = function FashionItemModel() {
        _classCallCheck(this, FashionItemModel);
      };

      var FashionListingModel = /*#__PURE__*/function (_shell_data_store__WE2) {
        _inherits(FashionListingModel, _shell_data_store__WE2);

        var _super2 = _createSuper(FashionListingModel);

        function FashionListingModel() {
          var _this3;

          _classCallCheck(this, FashionListingModel);

          _this3 = _super2.call(this);
          _this3.items = [new FashionItemModel(), new FashionItemModel(), new FashionItemModel(), new FashionItemModel()];
          return _this3;
        }

        return FashionListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~fashion-details-fashion-details-module~fashion-listing-fashion-listing-module-es5.js.map