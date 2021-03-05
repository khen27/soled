(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-auth-firebase-auth-module"], {
    /***/
    "0zuk":
    /*!******************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/facades.js ***!
      \******************************************************************/

    /*! exports provided: cfaSignIn, cfaSignInGoogle, cfaSignInTwitter, cfaSignInFacebook, cfaSignInPhone, cfaSignInPhoneOnCodeSent, cfaSignInPhoneOnCodeReceived, cfaSignOut */

    /***/
    function zuk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignIn", function () {
        return cfaSignIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInGoogle", function () {
        return cfaSignInGoogle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInTwitter", function () {
        return cfaSignInTwitter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInFacebook", function () {
        return cfaSignInFacebook;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInPhone", function () {
        return cfaSignInPhone;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeSent", function () {
        return cfaSignInPhoneOnCodeSent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeReceived", function () {
        return cfaSignInPhoneOnCodeReceived;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "cfaSignOut", function () {
        return cfaSignOut;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./web */
      "LRWT");

      var plugin = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].CapacitorFirebaseAuth;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].platform === 'web') {
        Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(_web__WEBPACK_IMPORTED_MODULE_4__["CapacitorFirebaseAuth"]);
      }
      /**
       * Call the sign in method on native layer and sign in on web layer with retrieved credentials.
       * @param providerId The provider identification.
       * @param data The provider additional information (optional).
       */


      var cfaSignIn = function cfaSignIn(providerId, data) {
        var googleProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider().providerId;
        var facebookProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider().providerId;
        var twitterProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider().providerId;
        var phoneProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider().providerId;

        switch (providerId) {
          case googleProvider:
            return cfaSignInGoogle();

          case twitterProvider:
            return cfaSignInTwitter();

          case facebookProvider:
            return cfaSignInFacebook();

          case phoneProvider:
            return cfaSignInPhone(data.phone, data.verificationCode);

          default:
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error("The '".concat(providerId, "' provider was not supported")));
        }
      };
      /**
       * Call the Google sign in method on native layer and sign in on web layer with retrieved credentials.
       */


      var cfaSignInGoogle = function cfaSignInGoogle() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          // get the provider id
          var providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider.PROVIDER_ID; // native sign in

          plugin.signIn({
            providerId: providerId
          }).then(function (result) {
            // create the credentials
            var credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider.credential(result.idToken); // web sign in

            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential).then(function (userCredential) {
              observer.next(userCredential.user);
              observer.complete();
            })["catch"](function (reject) {
              observer.error(reject);
            });
          })["catch"](function (reject) {
            observer.error(reject);
          });
        });
      };
      /**
       * Call the Twitter sign in method on native and sign in on web layer with retrieved credentials.
       */


      var cfaSignInTwitter = function cfaSignInTwitter() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          // get the provider id
          var providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider.PROVIDER_ID; // native sign in

          plugin.signIn({
            providerId: providerId
          }).then(function (result) {
            // create the credentials
            var credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider.credential(result.idToken, result.secret); // web sign in

            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential).then(function (userCredential) {
              observer.next(userCredential.user);
              observer.complete();
            })["catch"](function (reject) {
              return observer.error(reject);
            });
          })["catch"](function (reject) {
            return observer.error(reject);
          });
        });
      };
      /**
       * Call the Facebook sign in method on native and sign in on web layer with retrieved credentials.
       */


      var cfaSignInFacebook = function cfaSignInFacebook() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          // get the provider id
          var providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider.PROVIDER_ID; // native sign in

          plugin.signIn({
            providerId: providerId
          }).then(function (result) {
            // create the credentials
            var credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider.credential(result.idToken); // web sign in

            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential).then(function (userCredential) {
              observer.next(userCredential.user);
              observer.complete();
            })["catch"](function (reject) {
              return observer.error(reject);
            });
          })["catch"](function (reject) {
            return observer.error(reject);
          });
        });
      };
      /**
       * Call the Phone verification sign in, handling send and retrieve to code on native, but only sign in on web with retrieved credentials.
       * @param phone The user phone number.
       * @param verificationCode The verification code sent by SMS (optional).
       */


      var cfaSignInPhone = function cfaSignInPhone(phone, verificationCode) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          // get the provider id
          var providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider.PROVIDER_ID;
          plugin.signIn({
            providerId: providerId,
            data: {
              phone: phone,
              verificationCode: verificationCode
            }
          }).then(function (result) {
            // if there is no verification code
            if (!result.verificationCode) {
              return observer.complete();
            } // create the credentials


            var credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider.credential(result.verificationId, result.verificationCode); // web sign in

            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential).then(function (userCredential) {
              observer.next(userCredential.user);
              observer.complete();
            })["catch"](function (reject) {
              return observer.error(reject);
            });
          })["catch"](function (reject) {
            return observer.error(reject);
          });
        });
      };
      /**
       * Observable of one notification of <code>On Code Sent</code>event from Phone Verification process.
       */


      var cfaSignInPhoneOnCodeSent = function cfaSignInPhoneOnCodeSent() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          // @ts-ignore
          return plugin.addListener('cfaSignInPhoneOnCodeSent', function (event) {
            observer.next(event.verificationId);
            observer.complete();
          });
        });
      };
      /**
       * Observable of one notification of <code>On Code Received</code> event from Phone Verification process.
       */


      var cfaSignInPhoneOnCodeReceived = function cfaSignInPhoneOnCodeReceived() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          // @ts-ignore
          return plugin.addListener('cfaSignInPhoneOnCodeReceived', function (event) {
            observer.next(event);
            observer.complete();
          });
        });
      };
      /**
       * Call Google sign out method on native and web layers.
       */


      var cfaSignOut = function cfaSignOut() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          plugin.signOut({}).then(function () {
            // web sign out
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signOut().then(function () {
              observer.next();
              observer.complete();
            })["catch"](function (reject) {
              return observer.error(reject);
            });
          });
        });
      }; //# sourceMappingURL=facades.js.map

      /***/

    },

    /***/
    "6nsN":
    /*!******************************************************!*\
      !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
      \******************************************************/

    /*! no exports provided */

    /***/
    function nsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/auth */
      "LOEa");
      /* harmony import */


      var _firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "7cWe":
    /*!**************************************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/facebook.provider.js ***!
      \**************************************************************************************/

    /*! exports provided: facebookSignInWeb */

    /***/
    function cWe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "facebookSignInWeb", function () {
        return facebookSignInWeb;
      });
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../definitions */
      "o6qA");

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

      var facebookSignInWeb = function facebookSignInWeb() {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var provider, userCredential, credential;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].FacebookAuthProvider();
                  firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().useDeviceLanguage();
                  _context.next = 4;
                  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithPopup(provider);

                case 4:
                  userCredential = _context.sent;
                  credential = userCredential.credential;
                  return _context.abrupt("return", new _definitions__WEBPACK_IMPORTED_MODULE_2__["FacebookSignInResult"](credential.accessToken));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }; //# sourceMappingURL=facebook.provider.js.map

      /***/

    },

    /***/
    "9874":
    /*!***********************************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/phone.provider.js ***!
      \***********************************************************************************/

    /*! exports provided: phoneSignInWeb */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "phoneSignInWeb", function () {
        return phoneSignInWeb;
      });
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");

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

      var phoneSignInWeb = function phoneSignInWeb(options) {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", Promise.reject("The '".concat(options.providerId, "' provider was not implemented for web yet")));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
      }; //# sourceMappingURL=phone.provider.js.map

      /***/

    },

    /***/
    "E+18":
    /*!*************************************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/twitter.provider.js ***!
      \*************************************************************************************/

    /*! exports provided: twitterSignInWeb */

    /***/
    function E18(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "twitterSignInWeb", function () {
        return twitterSignInWeb;
      });
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../definitions */
      "o6qA");

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

      var twitterSignInWeb = function twitterSignInWeb() {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var provider, userCredential, credential;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].TwitterAuthProvider();
                  firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().useDeviceLanguage();
                  _context3.next = 5;
                  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithPopup(provider);

                case 5:
                  userCredential = _context3.sent;
                  credential = userCredential.credential;
                  return _context3.abrupt("return", new _definitions__WEBPACK_IMPORTED_MODULE_2__["TwitterSignInResult"](credential.accessToken, credential.secret));

                case 10:
                  _context3.prev = 10;
                  _context3.t0 = _context3["catch"](0);
                  return _context3.abrupt("return", Promise.reject(_context3.t0));

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[0, 10]]);
        }));
      }; //# sourceMappingURL=twitter.provider.js.map

      /***/

    },

    /***/
    "LRWT":
    /*!**************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/web.js ***!
      \**************************************************************/

    /*! exports provided: CapacitorFirebaseAuthWeb, CapacitorFirebaseAuth */

    /***/
    function LRWT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuthWeb", function () {
        return CapacitorFirebaseAuthWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuth", function () {
        return CapacitorFirebaseAuth;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var _providers_facebook_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./providers/facebook.provider */
      "7cWe");
      /* harmony import */


      var _providers_google_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./providers/google.provider */
      "mIOL");
      /* harmony import */


      var _providers_phone_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./providers/phone.provider */
      "9874");
      /* harmony import */


      var _providers_twitter_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./providers/twitter.provider */
      "E+18");

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

      var CapacitorFirebaseAuthWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(CapacitorFirebaseAuthWeb, _capacitor_core__WEBP);

        var _super = _createSuper(CapacitorFirebaseAuthWeb);

        function CapacitorFirebaseAuthWeb() {
          _classCallCheck(this, CapacitorFirebaseAuthWeb);

          return _super.call(this, {
            name: 'CapacitorFirebaseAuth',
            platforms: ['web']
          });
        }

        _createClass(CapacitorFirebaseAuthWeb, [{
          key: "signIn",
          value: function signIn(options) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var googleProvider, facebookProvider, twitterProvider, phoneProvider;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      googleProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider().providerId;
                      facebookProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider().providerId;
                      twitterProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider().providerId;
                      phoneProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider().providerId;
                      _context4.t0 = options.providerId;
                      _context4.next = _context4.t0 === googleProvider ? 7 : _context4.t0 === twitterProvider ? 8 : _context4.t0 === facebookProvider ? 9 : _context4.t0 === phoneProvider ? 10 : 11;
                      break;

                    case 7:
                      return _context4.abrupt("return", Object(_providers_google_provider__WEBPACK_IMPORTED_MODULE_4__["googleSignInWeb"])(options));

                    case 8:
                      return _context4.abrupt("return", Object(_providers_twitter_provider__WEBPACK_IMPORTED_MODULE_6__["twitterSignInWeb"])(options));

                    case 9:
                      return _context4.abrupt("return", Object(_providers_facebook_provider__WEBPACK_IMPORTED_MODULE_3__["facebookSignInWeb"])(options));

                    case 10:
                      return _context4.abrupt("return", Object(_providers_phone_provider__WEBPACK_IMPORTED_MODULE_5__["phoneSignInWeb"])(options));

                    case 11:
                      return _context4.abrupt("return", Promise.reject("The '".concat(options.providerId, "' provider was not supported")));

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut(options) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(options);
                      return _context5.abrupt("return", firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut());

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }]);

        return CapacitorFirebaseAuthWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var CapacitorFirebaseAuth = new CapacitorFirebaseAuthWeb(); // Register as a web plugin

      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(CapacitorFirebaseAuth); //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "T7tK":
    /*!********************************************************!*\
      !*** ./src/app/firebase/auth/firebase-auth.service.ts ***!
      \********************************************************/

    /*! exports provided: FirebaseAuthService */

    /***/
    function T7tK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function () {
        return FirebaseAuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile/firebase-profile.model */
      "Uz1e");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! capacitor-firebase-auth */
      "wqjM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var FirebaseAuthService = /*#__PURE__*/function () {
        function FirebaseAuthService(angularFire, platform, platformId) {
          var _this = this;

          _classCallCheck(this, FirebaseAuthService);

          this.angularFire = angularFire;
          this.platform = platform;
          this.platformId = platformId;
          this.redirectResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformBrowser"])(this.platformId)) {
            this.angularFire.onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in.
                _this.currentUser = user;
              } else {
                // No user is signed in.
                _this.currentUser = null;
              }
            });

            if (!this.platform.is('capacitor')) {
              // when using signInWithRedirect, this listens for the redirect results
              this.angularFire.getRedirectResult().then(function (result) {
                // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
                if (result.user) {
                  _this.userProviderAdditionalInfo = result.additionalUserInfo.profile;

                  _this.redirectResult.next(result);
                }
              }, function (error) {
                _this.redirectResult.next({
                  error: error.code
                });
              });
            }
          }
        }

        _createClass(FirebaseAuthService, [{
          key: "getRedirectResult",
          value: function getRedirectResult() {
            return this.redirectResult.asObservable();
          }
        }, {
          key: "getPhotoURL",
          value: function getPhotoURL(signInProviderId, photoURL) {
            // Default imgs are too small and our app needs a bigger image
            switch (signInProviderId) {
              case 'facebook.com':
                return photoURL + '?height=400';

              case 'password':
                return 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';

              case 'twitter.com':
                return photoURL.replace('_normal', '_400x400');

              case 'google.com':
                return photoURL.split('=')[0];

              default:
                return photoURL;
            }
          }
        }, {
          key: "signOut",
          value: function signOut() {
            if (this.platform.is('capacitor')) {
              return Object(capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__["cfaSignOut"])();
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signOut());
            }
          }
        }, {
          key: "signInWithEmail",
          value: function signInWithEmail(email, password) {
            return this.angularFire.signInWithEmailAndPassword(email, password);
          }
        }, {
          key: "signUpWithEmail",
          value: function signUpWithEmail(email, password) {
            return this.angularFire.createUserWithEmailAndPassword(email, password);
          }
        }, {
          key: "socialSignIn",
          value: function socialSignIn(providerName, scopes) {
            if (this.platform.is('capacitor')) {
              return Object(capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__["cfaSignIn"])(providerName);
            } else {
              var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].OAuthProvider(providerName);

              if (scopes) {
                scopes.forEach(function (scope) {
                  provider.addScope(scope);
                });
              }

              if (this.platform.is('desktop')) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signInWithPopup(provider));
              } else {
                // web but not desktop, for example mobile PWA
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signInWithRedirect(provider));
              }
            }
          }
        }, {
          key: "signInWithFacebook",
          value: function signInWithFacebook() {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].FacebookAuthProvider();
            return this.socialSignIn(provider.providerId);
          }
        }, {
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].GoogleAuthProvider();
            var scopes = ['profile', 'email'];
            return this.socialSignIn(provider.providerId, scopes);
          }
        }, {
          key: "signInWithTwitter",
          value: function signInWithTwitter() {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].TwitterAuthProvider();
            return this.socialSignIn(provider.providerId);
          }
        }, {
          key: "getProfileDataSource",
          value: function getProfileDataSource() {
            var _this2 = this;

            // we need to do this differentiation because there is a bug in
            // platform capacitor ios when executing this.angularFire.user
            if (this.platform.is('capacitor')) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.setUserModelForProfile());
            } else {
              return this.angularFire.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (user) {
                return user != null;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
                return _this2.setUserModelForProfile();
              }));
            }
          }
        }, {
          key: "setUserModelForProfile",
          value: function setUserModelForProfile() {
            var userModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseProfileModel"]();
            var provierData = this.currentUser.providerData[0];
            var userData = this.userProviderAdditionalInfo ? this.userProviderAdditionalInfo : provierData;
            userModel.image = this.getPhotoURL(provierData.providerId, provierData.photoURL);
            userModel.name = userData.name || userData.displayName || 'What\'s your name?';
            userModel.role = 'How would you describe yourself?';
            userModel.description = userData.description || 'Anything else you would like to share with the world?';
            userModel.phoneNumber = userData.phoneNumber || 'Is there a number where I can reach you?';
            userModel.email = userData.email || 'Where can I send you emails?';
            userModel.provider = provierData.providerId !== 'password' ? provierData.providerId : 'Credentials';
            return userModel;
          }
        }, {
          key: "getProfileStore",
          value: function getProfileStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseProfileModel"]();
            this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.profileDataStore.load(dataSource);
            return this.profileDataStore;
          }
        }]);

        return FirebaseAuthService;
      }();

      FirebaseAuthService.ɵfac = function FirebaseAuthService_Factory(t) {
        return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      FirebaseAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FirebaseAuthService,
        factory: FirebaseAuthService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UbJi":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js ***!
      \*******************************************************************************/

    /*! exports provided: AngularFireAuth, AngularFireAuthModule */

    /***/
    function UbJi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function () {
        return AngularFireAuth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function () {
        return AngularFireAuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * Generated from: auth.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // WARNING: interface has both a type and a value, skipping emit


      var AngularFireAuth =
      /**
       * @param {?} options
       * @param {?} nameOrConfig
       * @param {?} platformId
       * @param {?} zone
       */
      function AngularFireAuth(options, nameOrConfig, // tslint:disable-next-line:ban-types
      platformId, zone) {
        _classCallCheck(this, AngularFireAuth);

        /** @type {?} */
        var schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        /** @type {?} */

        var keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        /** @type {?} */

        var auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @return {?}
        */
        function () {
          return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
          bufferSize: 1,
          refCount: false
        }));

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
          this.authState = this.user = this.idToken = this.idTokenResult = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        } else {
          // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
          //       (e.g, `import { auth } from 'firebase/app'`) are getting an undefined auth object unexpectedly
          //       as we're completely lazy. Let's eagerly load the Auth SDK here.
          //       There could potentially be race conditions still... but this greatly decreases the odds while
          //       we reevaluate the API.

          /** @type {?} */
          var _ = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();

          this.authState = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} auth
          * @return {?}
          */
          function (auth) {
            return auth.getRedirectResult().then(
            /**
            * @return {?}
            */
            function () {
              return auth;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} auth
          * @return {?}
          */
          function (auth) {
            return zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](auth.onAuthStateChanged.bind(auth));
            });
          }), keepUnstableUntilFirst);
          this.user = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} auth
          * @return {?}
          */
          function (auth) {
            return auth.getRedirectResult().then(
            /**
            * @return {?}
            */
            function () {
              return auth;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} auth
          * @return {?}
          */
          function (auth) {
            return zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](auth.onIdTokenChanged.bind(auth));
            });
          }), keepUnstableUntilFirst);
          this.idToken = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} user
          * @return {?}
          */
          function (user) {
            return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdToken()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
          this.idTokenResult = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} user
          * @return {?}
          */
          function (user) {
            return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdTokenResult()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }

        return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlazySDKProxy"])(this, auth, zone);
      };

      AngularFireAuth.ɵfac = function AngularFireAuth_Factory(t) {
        return new (t || AngularFireAuth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };
      /** @nocollapse */


      AngularFireAuth.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };
      /** @nocollapse */


      AngularFireAuth.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFireAuth_Factory() {
          return new AngularFireAuth(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: AngularFireAuth,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuth, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: auth.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFireAuthModule = function AngularFireAuthModule() {
        _classCallCheck(this, AngularFireAuthModule);
      };

      AngularFireAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFireAuthModule
      });
      AngularFireAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFireAuthModule_Factory(t) {
          return new (t || AngularFireAuthModule)();
        },
        providers: [AngularFireAuth]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFireAuth]
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
       * Generated from: angular-fire-auth.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-auth.js.map

      /***/

    },

    /***/
    "Uz1e":
    /*!*****************************************************************!*\
      !*** ./src/app/firebase/auth/profile/firebase-profile.model.ts ***!
      \*****************************************************************/

    /*! exports provided: FirebaseProfileModel */

    /***/
    function Uz1e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseProfileModel", function () {
        return FirebaseProfileModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shell/data-store */
      "f/Ol");

      var FirebaseProfileModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(FirebaseProfileModel, _shell_data_store__WE);

        var _super2 = _createSuper(FirebaseProfileModel);

        function FirebaseProfileModel() {
          _classCallCheck(this, FirebaseProfileModel);

          return _super2.call(this);
        }

        return FirebaseProfileModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "VhLB":
    /*!********************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/operators.js ***!
      \********************************************************************/

    /*! exports provided: mapUserToUserInfo, mapUserCredentialToUserInfo */

    /***/
    function VhLB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapUserToUserInfo", function () {
        return mapUserToUserInfo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mapUserCredentialToUserInfo", function () {
        return mapUserCredentialToUserInfo;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Operator to map firebase.User to firebase.UserInfo.
       *
       * Sample of use:
       *
       * ```ts
       * import {cfaSignIn, mapUserToUserInfo} from 'capacitor-firebase-auth';
       * import {UserInfo} from 'firebase/app';
       *
       * cfaSignIn('google.com').pipe(
       *     mapUserToUserInfo(),
       * ).subscribe(
       *     (user: UserInfo) => console.log(user.displayName);
       * )
       * ```
       */


      var mapUserToUserInfo = function mapUserToUserInfo() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (user) {
          if (user) {
            var uid = user.uid,
                providerId = user.providerId,
                displayName = user.displayName,
                photoURL = user.photoURL,
                phoneNumber = user.phoneNumber,
                email = user.email;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              uid: uid,
              providerId: providerId,
              displayName: displayName,
              photoURL: photoURL,
              phoneNumber: phoneNumber,
              email: email
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(user);
        }));
      };
      /**
       * Operator to map firebase.auth.UserCredential to firebase.UserInfo.
       *
       * For use with alternative facade only.
       *
       * Sample of use:
       *
       * ```ts
       * import {cfaSignIn, mapUserToUserInfo} from 'capacitor-firebase-auth/alternative';
       * import {UserInfo} from 'firebase/app';
       *
       * cfaSignIn('google.com').pipe(
       *     mapUserToUserInfo(),
       * ).subscribe(
       *     (user: UserInfo) => console.log(user.displayName);
       * )
       * ```
       */


      var mapUserCredentialToUserInfo = function mapUserCredentialToUserInfo() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref) {
          var userCredential = _ref.userCredential;

          if (!!userCredential) {
            var _userCredential$user = userCredential.user,
                uid = _userCredential$user.uid,
                providerId = _userCredential$user.providerId,
                displayName = _userCredential$user.displayName,
                photoURL = _userCredential$user.photoURL,
                phoneNumber = _userCredential$user.phoneNumber,
                email = _userCredential$user.email;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              uid: uid,
              providerId: providerId,
              displayName: displayName,
              photoURL: photoURL,
              phoneNumber: phoneNumber,
              email: email
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }));
      }; //# sourceMappingURL=operators.js.map

      /***/

    },

    /***/
    "duP/":
    /*!*******************************************************!*\
      !*** ./src/app/firebase/auth/firebase-auth.module.ts ***!
      \*******************************************************/

    /*! exports provided: FirebaseAuthModule */

    /***/
    function duP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseAuthModule", function () {
        return FirebaseAuthModule;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./firebase-auth.service */
      "T7tK");

      var routes = [{
        path: '',
        children: [// /firebase/auth redirect
        {
          path: '',
          redirectTo: 'sign-in',
          pathMatch: 'full'
        }, {
          path: 'sign-in',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | sign-in-firebase-sign-in-module */
            [__webpack_require__.e("common"), __webpack_require__.e("sign-in-firebase-sign-in-module")]).then(__webpack_require__.bind(null,
            /*! ./sign-in/firebase-sign-in.module */
            "ROOv")).then(function (m) {
              return m.FirebaseSignInPageModule;
            });
          }
        }, {
          path: 'sign-up',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | sign-up-firebase-sign-up-module */
            [__webpack_require__.e("common"), __webpack_require__.e("sign-up-firebase-sign-up-module")]).then(__webpack_require__.bind(null,
            /*! ./sign-up/firebase-sign-up.module */
            "RMgo")).then(function (m) {
              return m.FirebaseSignUpPageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-firebase-profile-module */
            [__webpack_require__.e("common"), __webpack_require__.e("profile-firebase-profile-module")]).then(__webpack_require__.bind(null,
            /*! ./profile/firebase-profile.module */
            "iNMq")).then(function (m) {
              return m.FirebaseProfilePageModule;
            });
          }
        }]
      }];

      var FirebaseAuthModule = function FirebaseAuthModule() {
        _classCallCheck(this, FirebaseAuthModule);
      };

      FirebaseAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FirebaseAuthModule
      });
      FirebaseAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FirebaseAuthModule_Factory(t) {
          return new (t || FirebaseAuthModule)();
        },
        providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirebaseAuthModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseAuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]],
            providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]]
          }]
        }], null, null);
      })();
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
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  delayValue = _ref3[0],
                  dataValue = _ref3[1];

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
    "mIOL":
    /*!************************************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/google.provider.js ***!
      \************************************************************************************/

    /*! exports provided: googleSignInWeb */

    /***/
    function mIOL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "googleSignInWeb", function () {
        return googleSignInWeb;
      });
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../definitions */
      "o6qA");

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

      var googleSignInWeb = function googleSignInWeb() {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var provider, userCredential, credential;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider();
                  firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().useDeviceLanguage();
                  _context6.next = 5;
                  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithPopup(provider);

                case 5:
                  userCredential = _context6.sent;
                  credential = userCredential.credential;
                  return _context6.abrupt("return", new _definitions__WEBPACK_IMPORTED_MODULE_2__["GoogleSignInResult"](credential.idToken));

                case 10:
                  _context6.prev = 10;
                  _context6.t0 = _context6["catch"](0);
                  return _context6.abrupt("return", Promise.reject(_context6.t0));

                case 13:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[0, 10]]);
        }));
      }; //# sourceMappingURL=google.provider.js.map

      /***/

    },

    /***/
    "o6qA":
    /*!**********************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/definitions.js ***!
      \**********************************************************************/

    /*! exports provided: GoogleSignInResult, TwitterSignInResult, FacebookSignInResult, PhoneSignInResult */

    /***/
    function o6qA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleSignInResult", function () {
        return GoogleSignInResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwitterSignInResult", function () {
        return TwitterSignInResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacebookSignInResult", function () {
        return FacebookSignInResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhoneSignInResult", function () {
        return PhoneSignInResult;
      });
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");

      var GoogleSignInResult = function GoogleSignInResult(idToken) {
        _classCallCheck(this, GoogleSignInResult);

        this.idToken = idToken;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID;
      };

      var TwitterSignInResult = function TwitterSignInResult(idToken, secret) {
        _classCallCheck(this, TwitterSignInResult);

        this.idToken = idToken;
        this.secret = secret;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].TwitterAuthProvider.PROVIDER_ID;
      };

      var FacebookSignInResult = function FacebookSignInResult(idToken) {
        _classCallCheck(this, FacebookSignInResult);

        this.idToken = idToken;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].FacebookAuthProvider.PROVIDER_ID;
      };

      var PhoneSignInResult = function PhoneSignInResult(verificationId, verificationCode) {
        _classCallCheck(this, PhoneSignInResult);

        this.verificationId = verificationId;
        this.verificationCode = verificationCode;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID;
      }; //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "wqjM":
    /*!****************************************************************!*\
      !*** ./node_modules/capacitor-firebase-auth/dist/esm/index.js ***!
      \****************************************************************/

    /*! exports provided: GoogleSignInResult, TwitterSignInResult, FacebookSignInResult, PhoneSignInResult, cfaSignIn, cfaSignInGoogle, cfaSignInTwitter, cfaSignInFacebook, cfaSignInPhone, cfaSignInPhoneOnCodeSent, cfaSignInPhoneOnCodeReceived, cfaSignOut, mapUserToUserInfo, mapUserCredentialToUserInfo, CapacitorFirebaseAuthWeb, CapacitorFirebaseAuth */

    /***/
    function wqjM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions */
      "o6qA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GoogleSignInResult", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_0__["GoogleSignInResult"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TwitterSignInResult", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_0__["TwitterSignInResult"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FacebookSignInResult", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_0__["FacebookSignInResult"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PhoneSignInResult", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_0__["PhoneSignInResult"];
      });
      /* harmony import */


      var _facades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./facades */
      "0zuk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignIn", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignIn"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInGoogle", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInGoogle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInTwitter", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInTwitter"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInFacebook", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInFacebook"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInPhone", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInPhone"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeSent", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInPhoneOnCodeSent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeReceived", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInPhoneOnCodeReceived"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "cfaSignOut", function () {
        return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignOut"];
      });
      /* harmony import */


      var _operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./operators */
      "VhLB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mapUserToUserInfo", function () {
        return _operators__WEBPACK_IMPORTED_MODULE_2__["mapUserToUserInfo"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mapUserCredentialToUserInfo", function () {
        return _operators__WEBPACK_IMPORTED_MODULE_2__["mapUserCredentialToUserInfo"];
      });
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web */
      "LRWT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuthWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_3__["CapacitorFirebaseAuthWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuth", function () {
        return _web__WEBPACK_IMPORTED_MODULE_3__["CapacitorFirebaseAuth"];
      }); //# sourceMappingURL=index.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=firebase-auth-firebase-auth-module-es5.js.map