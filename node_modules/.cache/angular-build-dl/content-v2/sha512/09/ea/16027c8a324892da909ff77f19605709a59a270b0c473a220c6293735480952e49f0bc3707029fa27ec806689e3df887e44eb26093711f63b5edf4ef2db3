(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "2c9M":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function c9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "5e4S":
    /*!**********************************************!*\
      !*** ./src/app/showcase/showcase.service.ts ***!
      \**********************************************/

    /*! exports provided: ShowcaseService */

    /***/
    function e4S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseService", function () {
        return ShowcaseService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./showcase-shell.model */
      "wwno");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol"); // tslint:disable-next-line:max-line-length


      var ShowcaseService = /*#__PURE__*/function () {
        function ShowcaseService(http) {
          _classCallCheck(this, ShowcaseService);

          this.http = http;
          this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        }

        _createClass(ShowcaseService, [{
          key: "getDataSourceWithDelay",
          value: function getDataSourceWithDelay() {
            return this.http.get('./assets/sample-data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) {
              console.log('getData STARTED'); // tslint:disable-next-line:no-console

              console.time('getData Roundtrip');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              console.log('getData COMPLETED'); // tslint:disable-next-line:no-console

              console.timeEnd('getData Roundtrip');
            }));
          }
        }, {
          key: "getSimpleDataSource",
          value: function getSimpleDataSource() {
            return this.http.get('./assets/sample-data/showcase/shell.json');
          }
        }, {
          key: "getSimpleDataStore",
          value: function getSimpleDataStore(dataSource) {
            // Use cache if available
            if (!this.showcaseDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_4__["ShowcaseShellModel"]();
              this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.showcaseDataStore.load(dataSource);
            }

            return this.showcaseDataStore;
          }
        }, {
          key: "getListDataSource",
          value: function getListDataSource() {
            return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              return result['data'];
            }));
          }
        }, {
          key: "getPaginationDataSource",
          value: function getPaginationDataSource(page) {
            return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
              return result['data'];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (results) {
              return results.length > 0;
            }));
          }
        }, {
          key: "getMultipleDataSourceA",
          value: function getMultipleDataSourceA() {
            return this.http.get('./assets/sample-data/travel/listing.json');
          }
        }, {
          key: "getMultipleDataSourceB",
          value: function getMultipleDataSourceB() {
            return this.http.get('./assets/sample-data/fashion/listing.json');
          }
        }, {
          key: "getDependantDataSourcePost",
          value: function getDependantDataSourcePost() {
            return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
          } // tslint:disable-next-line:max-line-length

        }, {
          key: "getDependantDataSourcePostComments",
          value: function getDependantDataSourcePostComments(dependantDataSource) {
            var _this = this;

            return dependantDataSource.pipe( // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (post) {
              return !post.isShell;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (post) {
              return _this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
            }));
          }
        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
          } // get the company details, a subset of the user data

        }, {
          key: "getUserSubsetData",
          value: function getUserSubsetData(userId) {
            var dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
            return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (jsonResponse) {
              var filteredData = Object.assign({}, jsonResponse.company);
              return filteredData;
            }));
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            return this.http.get('https://jsonplaceholder.typicode.com/todos');
          } // Concat the task with the details of the user

        }, {
          key: "getCombinedTasksUserDataSource",
          value: function getCombinedTasksUserDataSource() {
            var _this2 = this;

            return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (tasks) {
              var completeTaskData = tasks.map(function (task) {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                var taskUser = _this2.getUser(task.userId);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(task), taskUser]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                      taskData = _ref2[0],
                      user = _ref2[1];

                  return Object.assign(Object.assign({}, taskData), {
                    user: user
                  });
                }));
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(completeTaskData);
            }));
          }
        }, {
          key: "getOpenDataStream",
          value: function getOpenDataStream() {
            var firstLoadData = this.getPaginationDataSource(1);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.openDataStream.asObservable(), firstLoadData);
          }
        }, {
          key: "pushValuesToOpenStream",
          value: function pushValuesToOpenStream() {
            var stackedValues = this.getStackedValues();
            this.openDataStream.next(stackedValues);
          }
        }, {
          key: "getStackedValuesDataSource",
          value: function getStackedValuesDataSource() {
            var stackedValues = this.getStackedValues();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000));
          }
        }, {
          key: "getStackedValues",
          value: function getStackedValues() {
            var newUser = {
              first_name: 'Agustin',
              last_name: 'Nitsuga',
              avatar: './assets/sample-images/user/person_1.jpg'
            }; // Get a random integer between 1 (and only 1) and 'max'

            var getRand = function getRand(max) {
              var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              return Math.floor(Math.random() * max) + min;
            }; // Randomly send one, two or three users


            return Array(getRand(3)).fill(newUser);
          }
        }]);

        return ShowcaseService;
      }();

      ShowcaseService.ɵfac = function ShowcaseService_Factory(t) {
        return new (t || ShowcaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ShowcaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowcaseService,
        factory: ShowcaseService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6i10":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function i10(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "HTFn":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js ***!
      \*************************************************************************************/

    /*! exports provided: AngularFireAuthGuard, AngularFireAuthGuardModule, canActivate, customClaims, emailVerified, hasCustomClaim, idTokenResult, isNotAnonymous, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo */

    /***/
    function HTFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function () {
        return AngularFireAuthGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function () {
        return AngularFireAuthGuardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canActivate", function () {
        return canActivate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customClaims", function () {
        return customClaims;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailVerified", function () {
        return emailVerified;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function () {
        return hasCustomClaim;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "idTokenResult", function () {
        return idTokenResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function () {
        return isNotAnonymous;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loggedIn", function () {
        return loggedIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function () {
        return redirectLoggedInTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function () {
        return redirectUnauthorizedTo;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /**
       * @fileoverview added by tsickle
       * Generated from: auth-guard.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ɵ0 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ0(user) {
        return !!user;
      };
      /** @type {?} */


      var loggedIn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ0);

      var AngularFireAuthGuard =
      /**
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} zone
       * @param {?} router
       */
      function AngularFireAuthGuard(options, nameOrConfig, zone, router) {
        var _this3 = this;

        _classCallCheck(this, AngularFireAuthGuard);

        this.router = router;

        this.canActivate =
        /**
        * @param {?} next
        * @param {?} state
        * @return {?}
        */
        function (next, state) {
          /** @type {?} */
          var authPipeFactory =
          /** @type {?} */
          next.data.authGuardPipe ||
          /**
          * @return {?}
          */
          function () {
            return loggedIn;
          };

          return _this3.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), authPipeFactory(next, state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} can
          * @return {?}
          */
          function (can) {
            return typeof can === 'boolean' ? can : _this3.router.createUrlTree(
            /** @type {?} */
            can);
          }));
        };
        /** @type {?} */


        var schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone);
        /** @type {?} */

        var keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        /** @type {?} */

        var auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone).outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @return {?}
        */
        function () {
          return zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! firebase/auth */
            "6nsN"));
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @return {?}
        */
        function () {
          return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} app
        * @return {?}
        */
        function (app) {
          return zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return app.auth();
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({
          bufferSize: 1,
          refCount: false
        }));
        this.authState = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} auth
        * @return {?}
        */
        function (auth) {
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](auth.onAuthStateChanged.bind(auth));
        }), keepUnstableUntilFirst);
      };

      AngularFireAuthGuard.ɵfac = function AngularFireAuthGuard_Factory(t) {
        return new (t || AngularFireAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };
      /** @nocollapse */


      AngularFireAuthGuard.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };
      /** @nocollapse */


      AngularFireAuthGuard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFireAuthGuard_Factory() {
          return new AngularFireAuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
        },
        token: AngularFireAuthGuard,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();

      if (false) {}
      /** @type {?} */


      var canActivate =
      /**
      * @param {?} pipe
      * @return {?}
      */
      function canActivate(pipe) {
        return {
          canActivate: [AngularFireAuthGuard],
          data: {
            authGuardPipe: pipe
          }
        };
      };

      var ɵ1 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ1(user) {
        return !!user && !user.isAnonymous;
      };
      /** @type {?} */


      var isNotAnonymous = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ1);

      var ɵ2 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ2(user) {
        return user ? user.getIdTokenResult() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
      };
      /** @type {?} */


      var idTokenResult = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(ɵ2);

      var ɵ3 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ3(user) {
        return !!user && user.emailVerified;
      };
      /** @type {?} */


      var emailVerified = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ3);

      var ɵ4 =
      /**
      * @param {?} idTokenResult
      * @return {?}
      */
      function ɵ4(idTokenResult) {
        return idTokenResult ? idTokenResult.claims : [];
      };
      /** @type {?} */


      var customClaims = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(idTokenResult, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ4));
      /** @type {?} */

      var hasCustomClaim =
      /**
      * @param {?} claim
      * @return {?}
      */
      function hasCustomClaim(claim) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(customClaims, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} claims
        * @return {?}
        */
        function (claims) {
          return claims.hasOwnProperty(claim);
        }));
      };
      /** @type {?} */


      var redirectUnauthorizedTo =
      /**
      * @param {?} redirect
      * @return {?}
      */
      function redirectUnauthorizedTo(redirect) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} loggedIn
        * @return {?}
        */
        function (loggedIn) {
          return loggedIn || redirect;
        }));
      };
      /** @type {?} */


      var redirectLoggedInTo =
      /**
      * @param {?} redirect
      * @return {?}
      */
      function redirectLoggedInTo(redirect) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} loggedIn
        * @return {?}
        */
        function (loggedIn) {
          return loggedIn && redirect || true;
        }));
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: auth-guard.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFireAuthGuardModule = function AngularFireAuthGuardModule() {
        _classCallCheck(this, AngularFireAuthGuardModule);
      };

      AngularFireAuthGuardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFireAuthGuardModule
      });
      AngularFireAuthGuardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFireAuthGuardModule_Factory(t) {
          return new (t || AngularFireAuthGuardModule)();
        },
        providers: [AngularFireAuthGuard]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFireAuthGuard]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-auth-guard.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-auth-guard.js.map

      /***/

    },

    /***/
    "NqGI":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function NqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "SQnO":
    /*!******************************************************!*\
      !*** ./src/app/deals/listing/deals-listing.model.ts ***!
      \******************************************************/

    /*! exports provided: DealsItemModel, DealsListingModel */

    /***/
    function SQnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsItemModel", function () {
        return DealsItemModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsListingModel", function () {
        return DealsListingModel;
      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var DealsItemModel = function DealsItemModel() {
        _classCallCheck(this, DealsItemModel);

        // Default mock value
        // expirationDate = '12/01/2018';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
      };

      var DealsListingModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(DealsListingModel, _shell_data_store__WE);

        var _super = _createSuper(DealsListingModel);

        function DealsListingModel() {
          var _this4;

          _classCallCheck(this, DealsListingModel);

          _this4 = _super.call(this);
          _this4.items = [new DealsItemModel(), new DealsItemModel(), new DealsItemModel(), new DealsItemModel()];
          return _this4;
        }

        return DealsListingModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
      /***/

    },

    /***/
    "U/uv":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function UUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-92848855.js */
      "sxy2");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "ItpF");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "2c9M");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "UG6G":
    /*!******************************************************!*\
      !*** ./src/app/deals/details/deals-details.model.ts ***!
      \******************************************************/

    /*! exports provided: DealsDetailsModel */

    /***/
    function UG6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function () {
        return DealsDetailsModel;
      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");

      var DealsDetailsModel = /*#__PURE__*/function (_shell_data_store__WE2) {
        _inherits(DealsDetailsModel, _shell_data_store__WE2);

        var _super2 = _createSuper(DealsDetailsModel);

        function DealsDetailsModel() {
          var _this5;

          _classCallCheck(this, DealsDetailsModel);

          _this5 = _super2.call(this);
          _this5.showcaseImages = ['', '', '']; // Default mock value
          // expirationDate = '03/03/2019';

          _this5.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
          _this5.relatedDeals = [{
            logo: '',
            name: '',
            description: ''
          }, {
            logo: '',
            name: '',
            description: ''
          }, {
            logo: '',
            name: '',
            description: ''
          }];
          return _this5;
        }

        return DealsDetailsModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
      /***/

    },

    /***/
    "sPtc":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function sPtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref4.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "sY96":
    /*!**************************************************!*\
      !*** ./src/app/validators/password.validator.ts ***!
      \**************************************************/

    /*! exports provided: PasswordValidator */

    /***/
    function sY96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
        return PasswordValidator;
      });

      var PasswordValidator = /*#__PURE__*/function () {
        function PasswordValidator() {
          _classCallCheck(this, PasswordValidator);
        }

        _createClass(PasswordValidator, null, [{
          key: "areNotEqual",
          // If our validation fails, we return an object with a key for the error name and a value of true.
          // Otherwise, if the validation passes, we simply return null because there is no error.
          value: function areNotEqual(formGroup) {
            var firstControlValue;
            var valid = true;

            for (var key in formGroup.controls) {
              if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];

                if (firstControlValue === undefined) {
                  firstControlValue = control.value;
                } else {
                  // check if the value of the first control is equal to the value of the second control
                  if (firstControlValue !== control.value) {
                    valid = false;
                    break;
                  }
                }
              }
            }

            if (valid) {
              return null;
            }

            return {
              areNotEqual: true
            };
          }
        }]);

        return PasswordValidator;
      }();
      /***/

    },

    /***/
    "wwno":
    /*!**************************************************!*\
      !*** ./src/app/showcase/showcase-shell.model.ts ***!
      \**************************************************/

    /*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */

    /***/
    function wwno(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function () {
        return ShowcaseShellModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function () {
        return ShowcaseShellUserModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function () {
        return ShowcaseCommentModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function () {
        return ShowcasePostModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function () {
        return ShowcaseTaskModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function () {
        return ShowcaseUser2Model;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function () {
        return ShowcaseCompanyModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function () {
        return ShowcaseCombinedTaskUserModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");

      var ShowcaseShellModel = /*#__PURE__*/function (_shell_data_store__WE3) {
        _inherits(ShowcaseShellModel, _shell_data_store__WE3);

        var _super3 = _createSuper(ShowcaseShellModel);

        function ShowcaseShellModel() {
          _classCallCheck(this, ShowcaseShellModel);

          return _super3.call(this);
        }

        return ShowcaseShellModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseShellUserModel = /*#__PURE__*/function (_shell_data_store__WE4) {
        _inherits(ShowcaseShellUserModel, _shell_data_store__WE4);

        var _super4 = _createSuper(ShowcaseShellUserModel);

        function ShowcaseShellUserModel() {
          _classCallCheck(this, ShowcaseShellUserModel);

          return _super4.call(this);
        }

        return ShowcaseShellUserModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseCommentModel = /*#__PURE__*/function (_shell_data_store__WE5) {
        _inherits(ShowcaseCommentModel, _shell_data_store__WE5);

        var _super5 = _createSuper(ShowcaseCommentModel);

        function ShowcaseCommentModel() {
          _classCallCheck(this, ShowcaseCommentModel);

          return _super5.call(this);
        }

        return ShowcaseCommentModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcasePostModel = /*#__PURE__*/function (_shell_data_store__WE6) {
        _inherits(ShowcasePostModel, _shell_data_store__WE6);

        var _super6 = _createSuper(ShowcasePostModel);

        function ShowcasePostModel() {
          _classCallCheck(this, ShowcasePostModel);

          return _super6.call(this);
        }

        return ShowcasePostModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseTaskModel = /*#__PURE__*/function (_shell_data_store__WE7) {
        _inherits(ShowcaseTaskModel, _shell_data_store__WE7);

        var _super7 = _createSuper(ShowcaseTaskModel);

        function ShowcaseTaskModel() {
          _classCallCheck(this, ShowcaseTaskModel);

          return _super7.call(this);
        }

        return ShowcaseTaskModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseUser2Model = /*#__PURE__*/function (_shell_data_store__WE8) {
        _inherits(ShowcaseUser2Model, _shell_data_store__WE8);

        var _super8 = _createSuper(ShowcaseUser2Model);

        function ShowcaseUser2Model() {
          _classCallCheck(this, ShowcaseUser2Model);

          return _super8.call(this);
        }

        return ShowcaseUser2Model;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseCompanyModel = /*#__PURE__*/function (_shell_data_store__WE9) {
        _inherits(ShowcaseCompanyModel, _shell_data_store__WE9);

        var _super9 = _createSuper(ShowcaseCompanyModel);

        function ShowcaseCompanyModel() {
          _classCallCheck(this, ShowcaseCompanyModel);

          return _super9.call(this);
        }

        return ShowcaseCompanyModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var ShowcaseCombinedTaskUserModel = /*#__PURE__*/function (_ShowcaseTaskModel) {
        _inherits(ShowcaseCombinedTaskUserModel, _ShowcaseTaskModel);

        var _super10 = _createSuper(ShowcaseCombinedTaskUserModel);

        function ShowcaseCombinedTaskUserModel() {
          _classCallCheck(this, ShowcaseCombinedTaskUserModel);

          return _super10.call(this);
        }

        return ShowcaseCombinedTaskUserModel;
      }(ShowcaseTaskModel);
      /***/

    },

    /***/
    "y+sA":
    /*!****************************************!*\
      !*** ./src/app/deals/deals.service.ts ***!
      \****************************************/

    /*! exports provided: DealsService */

    /***/
    function ySA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsService", function () {
        return DealsService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./listing/deals-listing.model */
      "SQnO");
      /* harmony import */


      var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./details/deals-details.model */
      "UG6G");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DealsService = /*#__PURE__*/function () {
        function DealsService(platformId, transferStateHelper, http) {
          _classCallCheck(this, DealsService);

          this.platformId = platformId;
          this.transferStateHelper = transferStateHelper;
          this.http = http;
        }

        _createClass(DealsService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            var _this6 = this;

            var rawDataSource = this.http.get('./assets/sample-data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              // Using rest operator to divide the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
              var items = data.items,
                  otherData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(data, ["items"]);
              var itemsWithRelativeDates = items.map(function (dealItem, index) {
                // Relative date (better to showcase UI micro-interactions)
                return Object.assign(Object.assign({}, dealItem), {
                  expirationDate: _this6.relativeDates[index]
                });
              }); // Using spread operator to concat the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)

              var updatedListingData = Object.assign(Object.assign({}, otherData), {
                items: itemsWithRelativeDates
              }); // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data

              var listing = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_6__["DealsListingModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(listing, updatedListingData);
              return listing;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('deals-listing-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_6__["DealsListingModel"]();
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
              // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
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
            var rawDataSource = this.http.get('./assets/sample-data/deals/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              var expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
              var updatedDetailsData = Object.assign(Object.assign({}, data), {
                expirationDate: expirationDate
              }); // Note: HttpClient cannot know how to instantiate a class for the returned data
              // We need to properly cast types from json data

              var details = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_7__["DealsDetailsModel"](); // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
              // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
              // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)

              Object.assign(details, updatedDetailsData);
              return details;
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('deals-details-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getDetailsStore",
          value: function getDetailsStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_7__["DealsDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
              // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
              this.detailsDataStore.load(dataSource, 0);
            } else {
              // On browser transitions
              // Trigger the loading mechanism (with shell)
              this.detailsDataStore.load(dataSource);
            }

            return this.detailsDataStore;
          }
        }, {
          key: "relativeDates",
          get: function get() {
            return [dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_4__().add(7, 'day').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_4__().subtract(1, 'month').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_4__().add(2, 'month').format('MM/DD/YYYY')];
          }
        }]);

        return DealsService;
      }();

      DealsService.ɵfac = function DealsService_Factory(t) {
        return new (t || DealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_8__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      DealsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DealsService,
        factory: DealsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DealsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_8__["TransferStateHelper"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map