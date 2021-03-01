(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~real-estate-details-real-estate-details-module~real-estate-listing-real-estate-listing-module"], {
    /***/
    "FUeK":
    /*!******************************************************************!*\
      !*** ./src/app/real-estate/listing/real-estate-listing.model.ts ***!
      \******************************************************************/

    /*! exports provided: RealEstateItemModel, RealEstateListingModel */

    /***/
    function FUeK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateItemModel", function () {
        return RealEstateItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateListingModel", function () {
        return RealEstateListingModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var RealEstateItemModel = function RealEstateItemModel() {
        _classCallCheck(this, RealEstateItemModel);

        this.amenities = [{
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }];
      };

      var RealEstateListingModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(RealEstateListingModel, _shell_data_store__WE);

        var _super = _createSuper(RealEstateListingModel);

        function RealEstateListingModel() {
          var _this;

          _classCallCheck(this, RealEstateListingModel);

          _this = _super.call(this);
          _this.items = [new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel()];
          return _this;
        }

        return RealEstateListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "GBb9":
    /*!******************************************************************!*\
      !*** ./src/app/real-estate/details/real-estate-details.model.ts ***!
      \******************************************************************/

    /*! exports provided: RealEstateDetailsModel */

    /***/
    function GBb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateDetailsModel", function () {
        return RealEstateDetailsModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var RealEstateDetailsModel = /*#__PURE__*/function (_shell_data_store__WE2) {
        _inherits(RealEstateDetailsModel, _shell_data_store__WE2);

        var _super2 = _createSuper(RealEstateDetailsModel);

        function RealEstateDetailsModel() {
          var _this2;

          _classCallCheck(this, RealEstateDetailsModel);

          _this2 = _super2.call(this);
          _this2.amenities = [{
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }, {
            name: '',
            icon: ''
          }];
          return _this2;
        }

        return RealEstateDetailsModel;
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
            var _this3 = this;

            // tslint:disable-next-line:no-shadowed-variable
            var delay = typeof networkDelay === 'number' ? networkDelay : this.networkDelay;
            var processedDataSource; // If no network delay, then don't show shell

            if (delay === 0) {
              processedDataSource = dataSourceObservable;
            } else {
              processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
            }

            processedDataSource.subscribe(function (dataValue) {
              _this3.timeline.next(dataValue);
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
    "r7vE":
    /*!****************************************************!*\
      !*** ./src/app/real-estate/real-estate.service.ts ***!
      \****************************************************/

    /*! exports provided: RealEstateService */

    /***/
    function r7vE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealEstateService", function () {
        return RealEstateService;
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


      var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./listing/real-estate-listing.model */
      "FUeK");
      /* harmony import */


      var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details/real-estate-details.model */
      "GBb9");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var RealEstateService = /*#__PURE__*/function () {
        function RealEstateService(platformId, transferStateHelper, http) {
          _classCallCheck(this, RealEstateService);

          this.platformId = platformId;
          this.transferStateHelper = transferStateHelper;
          this.http = http;
        }

        _createClass(RealEstateService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            var rawDataSource = this.http.get('./assets/sample-data/real-estate/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var listing = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, data);
              return listing;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('real-estate-listing-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateListingModel"]();
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
          value: function getDetailsDataSource() {
            var rawDataSource = this.http.get('./assets/sample-data/real-estate/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data
              var details = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_5__["RealEstateDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, data);
              return details;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('real-estate-details-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Use cache if available
            if (!this.detailsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_5__["RealEstateDetailsModel"]();
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
            }

            return this.detailsDataStore;
          }
        }]);

        return RealEstateService;
      }();

      RealEstateService.ɵfac = function RealEstateService_Factory(t) {
        return new (t || RealEstateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_6__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RealEstateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RealEstateService,
        factory: RealEstateService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateService, [{
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

    }
  }]);
})();
//# sourceMappingURL=default~real-estate-details-real-estate-details-module~real-estate-listing-real-estate-listing-module-es5.js.map