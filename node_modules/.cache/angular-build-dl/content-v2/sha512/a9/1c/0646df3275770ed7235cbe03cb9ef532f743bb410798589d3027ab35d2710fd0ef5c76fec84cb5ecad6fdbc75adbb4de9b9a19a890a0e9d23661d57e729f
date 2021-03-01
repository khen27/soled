(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~categories-categories-module~contact-card-contact-card-module~walkthrough-walkthrough-module"], {
    /***/
    "OwEV":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/web.js ***!
      \**************************************************************************/

    /*! exports provided: FacebookLoginWeb, FacebookLogin */

    /***/
    function OwEV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookLoginWeb", function () {
        return FacebookLoginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookLogin", function () {
        return FacebookLogin;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var FacebookLoginWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(FacebookLoginWeb, _capacitor_core__WEBP);

        var _super = _createSuper(FacebookLoginWeb);

        function FacebookLoginWeb() {
          _classCallCheck(this, FacebookLoginWeb);

          return _super.call(this, {
            name: 'FacebookLogin',
            platforms: ['web']
          });
        }

        _createClass(FacebookLoginWeb, [{
          key: "login",
          value: function login(options) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('FacebookLoginWeb.login', options);
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        FB.login(function (response) {
                          console.debug('FB.login', response);

                          if (response.status === 'connected') {
                            resolve({
                              accessToken: {
                                token: response.authResponse.accessToken
                              }
                            });
                          } else {
                            reject({
                              accessToken: {
                                token: null
                              }
                            });
                          }
                        }, {
                          scope: options.permissions.join(',')
                        });
                      }));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve) {
                        FB.logout(function () {
                          return resolve();
                        });
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "getCurrentAccessToken",
          value: function getCurrentAccessToken() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        FB.getLoginStatus(function (response) {
                          if (response.status === 'connected') {
                            var result = {
                              accessToken: {
                                applicationId: null,
                                declinedPermissions: [],
                                expires: null,
                                isExpired: null,
                                lastRefresh: null,
                                permissions: [],
                                token: response.authResponse.accessToken,
                                userId: response.authResponse.userID
                              }
                            };
                            resolve(result);
                          } else {
                            reject({
                              accessToken: {
                                token: null
                              }
                            });
                          }
                        });
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "getProfile",
          value: function getProfile(options) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var fields;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      fields = options.fields.join(',');
                      return _context4.abrupt("return", new Promise(function (resolve, reject) {
                        FB.api('/me', {
                          fields: fields
                        }, function (response) {
                          if (response.error) {
                            reject(response.error.message);
                            return;
                          }

                          resolve(response);
                        });
                      }));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }]);

        return FacebookLoginWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var FacebookLogin = new FacebookLoginWeb();
      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(FacebookLogin); //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "n93f":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/definitions.js ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function n93f(module, exports) {//# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    "olL3":
    /*!**********************************************!*\
      !*** ./src/app/facebook-provider.service.ts ***!
      \**********************************************/

    /*! exports provided: FacebookProviderService */

    /***/
    function olL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookProviderService", function () {
        return FacebookProviderService;
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


      var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor-community/facebook-login */
      "phR/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["registerWebPlugin"])(_capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLogin"]);
      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

      var FacebookProviderService = /*#__PURE__*/function () {
        function FacebookProviderService(http) {
          _classCallCheck(this, FacebookProviderService);

          this.http = http;
          this.user = null;
          this.token = null;
          this.setupFbLogin();
        }

        _createClass(FacebookProviderService, [{
          key: "setupFbLogin",
          value: function setupFbLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var FacebookLogin;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["isPlatform"])('desktop')) {
                        this.fbLogin = _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLogin"];
                      } else {
                        // Use the native imlementation inside a real app!
                        FacebookLogin = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].FacebookLogin;
                        this.fbLogin = FacebookLogin;
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "FacebookLogin",
          value: function FacebookLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var FACEBOOK_PERMISSIONS, result;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log("Test 1: FacebookLogin() Starting");
                      FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
                      _context6.next = 4;
                      return this.fbLogin.login({
                        permissions: FACEBOOK_PERMISSIONS
                      });

                    case 4:
                      result = _context6.sent;
                      console.log("Test 2: result(from fbLogin.login) != undefined ? (true) ", result != undefined);

                      if (!(result.accessToken && result.accessToken.userId)) {
                        _context6.next = 11;
                        break;
                      }

                      this.token = result.accessToken;
                      this.loadUserData();
                      _context6.next = 18;
                      break;

                    case 11:
                      if (!(result.accessToken && !result.accessToken.userId)) {
                        _context6.next = 17;
                        break;
                      }

                      console.log("Test 3: I'm on the web"); // Web only gets the token but not the user ID
                      // Directly call get token to retrieve it now

                      _context6.next = 15;
                      return this.getCurrentToken();

                    case 15:
                      _context6.next = 18;
                      break;

                    case 17:
                      return _context6.abrupt("return", false);

                    case 18:
                      console.log("Test 9: Completing login. I don't believe Test 8 will have run yet, so user below is still undefined huh?");
                      console.log('facebook signup, user: ', this.user);
                      Storage.set({
                        key: 'facebookCredentials',
                        value: JSON.stringify({
                          token: this.token.token,
                          userId: this.token.userId
                        })
                      }); //this.router.navigate(['app/categories']);

                      return _context6.abrupt("return", true);

                    case 22:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getCurrentToken",
          value: function getCurrentToken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var result;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log("Test 4: getCurrentToken() Starting");
                      _context7.next = 3;
                      return this.fbLogin.getCurrentAccessToken();

                    case 3:
                      result = _context7.sent;
                      console.log("Test 5: result(from fbLogin.GetCurrentAccessToken() != undefined ? (true) ", result != undefined);

                      if (!result.accessToken) {
                        _context7.next = 12;
                        break;
                      }

                      this.token = result.accessToken;
                      _context7.next = 9;
                      return this.loadUserData();

                    case 9:
                      console.log("Test 7***: this.http.get(url).subscribe(callback) is run outside of this stack I'm guessing");
                      _context7.next = 12;
                      break;

                    case 12:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "loadUserData",
          value: function loadUserData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var url, res;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      console.log("Test 6: loadUserData() Starting");
                      console.log("Test 7: token = ", this.token);
                      url = "https://graph.facebook.com/".concat(this.token.userId, "?fields=id,name,picture.width(720),birthday,email&access_token=").concat(this.token.token);
                      _context8.next = 5;
                      return this.http.get(url).toPromise();

                    case 5:
                      res = _context8.sent;
                      //.then(res => {
                      console.log("Test 8***: doing the callback outside of the observable");
                      console.log('user: ', res);
                      this.user = res;

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "FacebookLogout",
          value: function FacebookLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.user = null;
                      this.token = null;
                      Storage.remove({
                        key: 'facebookCredentials'
                      });
                      _context9.next = 5;
                      return this.fbLogin.logout()["catch"](function (error) {
                        console.log("No access token, kick user");
                      });

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          } // Return a copy of the Facebook data to caller for information like user name, email, picture, etc..

        }, {
          key: "getUser",
          value: function getUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var res;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!(this.user != null)) {
                        _context10.next = 2;
                        break;
                      }

                      return _context10.abrupt("return", this.user);

                    case 2:
                      _context10.next = 4;
                      return this.isActiveUser();

                    case 4:
                      res = _context10.sent;

                      if (!res) {
                        _context10.next = 7;
                        break;
                      }

                      return _context10.abrupt("return", this.user);

                    case 7:
                      return _context10.abrupt("return", null);

                    case 8:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "isActiveUser",
          value: function isActiveUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var ret, creds, url, res;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return Storage.get({
                        key: 'facebookCredentials'
                      });

                    case 2:
                      ret = _context11.sent;
                      creds = JSON.parse(ret.value);

                      if (!(creds == null)) {
                        _context11.next = 6;
                        break;
                      }

                      return _context11.abrupt("return", false);

                    case 6:
                      url = "https://graph.facebook.com/".concat(creds.userId, "?fields=id,name,picture.width(720),birthday,email&access_token=").concat(creds.token);
                      _context11.next = 9;
                      return this.http.get(url).toPromise()["catch"](function (error) {
                        console.log("Failed to load Facebook data, error: ", error);
                        Storage.remove({
                          key: 'facebookCredentials'
                        });
                        return null;
                      });

                    case 9:
                      res = _context11.sent;

                      if (!(res == null)) {
                        _context11.next = 12;
                        break;
                      }

                      return _context11.abrupt("return", false);

                    case 12:
                      console.log("res (from isActiveuser()): ", res);
                      this.user = res;
                      return _context11.abrupt("return", true);

                    case 15:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return FacebookProviderService;
      }();

      FacebookProviderService.ɵfac = function FacebookProviderService_Factory(t) {
        return new (t || FacebookProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      FacebookProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FacebookProviderService,
        factory: FacebookProviderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FacebookProviderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "phR/":
    /*!****************************************************************************!*\
      !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/index.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function phR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions */
      "n93f");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_definitions__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony reexport (unknown) */


      for (var __WEBPACK_IMPORT_KEY__ in _definitions__WEBPACK_IMPORTED_MODULE_0__) {
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
          __webpack_require__.d(__webpack_exports__, key, function () {
            return _definitions__WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
      }
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./web */
      "OwEV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FacebookLoginWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FacebookLogin", function () {
        return _web__WEBPACK_IMPORTED_MODULE_1__["FacebookLogin"];
      }); //# sourceMappingURL=index.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~categories-categories-module~contact-card-contact-card-module~walkthrough-walkthrough-module-es5.js.map