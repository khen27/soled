(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-playlist-video-playlist-module"], {
    /***/
    "4w57":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-core.js ***!
      \*********************************************************************************************************/

    /*! exports provided: VgApiService, VgControlsHiddenService, VgCoreModule, VgCuePointsDirective, VgEvents, VgFullscreenApiService, VgMediaDirective, VgMediaElement, VgPlayerComponent, VgStates, VgUtilsService */

    /***/
    function w57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgApiService", function () {
        return VgApiService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgControlsHiddenService", function () {
        return VgControlsHiddenService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgCoreModule", function () {
        return VgCoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgCuePointsDirective", function () {
        return VgCuePointsDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgEvents", function () {
        return VgEvents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgFullscreenApiService", function () {
        return VgFullscreenApiService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgMediaDirective", function () {
        return VgMediaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgMediaElement", function () {
        return VgMediaElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgPlayerComponent", function () {
        return VgPlayerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgStates", function () {
        return VgStates;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgUtilsService", function () {
        return VgUtilsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/services/states/vg-states.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["*"];

      var VgStates = function VgStates() {
        _classCallCheck(this, VgStates);
      };

      VgStates.ɵfac = function VgStates_Factory(t) {
        return new (t || VgStates)();
      };

      VgStates.VG_ENDED = 'ended';
      VgStates.VG_PAUSED = 'paused';
      VgStates.VG_PLAYING = 'playing';
      VgStates.VG_LOADING = 'waiting';
      /** @nocollapse */

      VgStates.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function VgStates_Factory() {
          return new VgStates();
        },
        token: VgStates,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgStates, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/services/vg-api/vg-api.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgApiService = /*#__PURE__*/function () {
        function VgApiService() {
          _classCallCheck(this, VgApiService);

          this.medias = {}; // TODO: refactor to Set<IPlayable>

          this.playerReadyEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.isPlayerReady = false;
        }
        /**
         * @param {?} fsAPI
         * @return {?}
         */


        _createClass(VgApiService, [{
          key: "onPlayerReady",
          value: function onPlayerReady(fsAPI) {
            this.fsAPI = fsAPI;
            this.isPlayerReady = true;
            this.playerReadyEvent.emit(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getDefaultMedia",
          value: function getDefaultMedia() {
            for (var item in this.medias) {
              if (this.medias[item]) {
                return this.medias[item];
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getMasterMedia",
          value: function getMasterMedia() {
            /** @type {?} */
            var master;

            for (var id in this.medias) {
              if (this.medias[id].vgMaster === 'true' || this.medias[id].vgMaster === true) {
                master = this.medias[id];
                break;
              }
            }

            return master || this.getDefaultMedia();
          }
          /**
           * @return {?}
           */

        }, {
          key: "isMasterDefined",
          value: function isMasterDefined() {
            /** @type {?} */
            var result = false;

            for (var id in this.medias) {
              if (this.medias[id].vgMaster === 'true' || this.medias[id].vgMaster === true) {
                result = true;
                break;
              }
            }

            return result;
          }
          /**
           * @param {?=} id
           * @return {?}
           */

        }, {
          key: "getMediaById",
          value: function getMediaById() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            /** @type {?} */
            var media = this.medias[id];

            if (!id || id === '*') {
              media = this;
            }

            return media;
          }
          /**
           * @return {?}
           */

        }, {
          key: "play",
          value: function play() {
            for (var id in this.medias) {
              if (this.medias[id]) {
                this.medias[id].play();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "pause",
          value: function pause() {
            for (var id in this.medias) {
              if (this.medias[id]) {
                this.medias[id].pause();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "seekTime",

          /**
           * @param {?} value
           * @param {?=} byPercent
           * @return {?}
           */
          value: function seekTime(value) {
            var byPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            for (var id in this.medias) {
              if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
              }
            }
          }
          /**
           * @param {?} media
           * @param {?} value
           * @param {?=} byPercent
           * @return {?}
           */

        }, {
          key: "$$seek",
          value: function $$seek(media, value) {
            var byPercent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            /** @type {?} */
            var second;
            /** @type {?} */

            var duration = media.duration;

            if (byPercent) {
              if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
              }

              second = value * duration / 100;
            } else {
              second = value;
            }

            media.currentTime = second;
          }
          /**
           * @param {?} type
           * @param {?=} label
           * @param {?=} language
           * @return {?}
           */

        }, {
          key: "addTextTrack",
          value: function addTextTrack(type, label, language) {
            for (var id in this.medias) {
              if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
              }
            }
          }
          /**
           * @param {?} media
           * @param {?} type
           * @param {?=} label
           * @param {?=} language
           * @return {?}
           */

        }, {
          key: "$$addTextTrack",
          value: function $$addTextTrack(media, type, label, language) {
            media.addTextTrack(type, label, language);
          }
          /**
           * @param {?} property
           * @return {?}
           */

        }, {
          key: "$$getAllProperties",
          value: function $$getAllProperties(property) {
            /** @type {?} */
            var medias = {};
            /** @type {?} */

            var result;

            for (var id in this.medias) {
              if (this.medias[id]) {
                medias[id] = this.medias[id];
              }
            }
            /** @type {?} */


            var nMedias = Object.keys(medias).length;

            switch (nMedias) {
              case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                  case 'state':
                    result = VgStates.VG_PAUSED;
                    break;

                  case 'playbackRate':
                  case 'volume':
                    result = 1;
                    break;

                  case 'time':
                    result = {
                      current: 0,
                      total: 0,
                      left: 0
                    };
                    break;
                }

                break;

              case 1:
                // If there's only one media element then return the plain value

                /** @type {?} */
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;

              default:
                // TODO: return 'master' value

                /** @type {?} */
                var master = this.getMasterMedia();
                result = medias[master.id][property];
            }

            return result;
          }
          /**
           * @param {?} property
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "$$setAllProperties",
          value: function $$setAllProperties(property, value) {
            for (var id in this.medias) {
              if (this.medias[id]) {
                this.medias[id][property] = value;
              }
            }
          }
          /**
           * @param {?} elem
           * @return {?}
           */

        }, {
          key: "registerElement",
          value: function registerElement(elem) {
            this.videogularElement = elem;
          }
          /**
           * @param {?} media
           * @return {?}
           */

        }, {
          key: "registerMedia",
          value: function registerMedia(media) {
            this.medias[media.id] = media;
          }
          /**
           * @param {?} media
           * @return {?}
           */

        }, {
          key: "unregisterMedia",
          value: function unregisterMedia(media) {
            delete this.medias[media.id];
          }
        }, {
          key: "duration",
          get: function get() {
            return this.$$getAllProperties('duration');
          }
          /**
           * @param {?} seconds
           * @return {?}
           */

        }, {
          key: "currentTime",
          set: function set(seconds) {
            this.$$setAllProperties('currentTime', seconds);
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.$$getAllProperties('currentTime');
          }
          /**
           * @param {?} state
           * @return {?}
           */

        }, {
          key: "state",
          set: function set(state) {
            this.$$setAllProperties('state', state);
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.$$getAllProperties('state');
          }
          /**
           * @param {?} volume
           * @return {?}
           */

        }, {
          key: "volume",
          set: function set(volume) {
            this.$$setAllProperties('volume', volume);
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.$$getAllProperties('volume');
          }
          /**
           * @param {?} rate
           * @return {?}
           */

        }, {
          key: "playbackRate",
          set: function set(rate) {
            this.$$setAllProperties('playbackRate', rate);
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.$$getAllProperties('playbackRate');
          }
          /**
           * @return {?}
           */

        }, {
          key: "canPlay",
          get: function get() {
            return this.$$getAllProperties('canPlay');
          }
          /**
           * @return {?}
           */

        }, {
          key: "canPlayThrough",
          get: function get() {
            return this.$$getAllProperties('canPlayThrough');
          }
          /**
           * @return {?}
           */

        }, {
          key: "isMetadataLoaded",
          get: function get() {
            return this.$$getAllProperties('isMetadataLoaded');
          }
          /**
           * @return {?}
           */

        }, {
          key: "isWaiting",
          get: function get() {
            return this.$$getAllProperties('isWaiting');
          }
          /**
           * @return {?}
           */

        }, {
          key: "isCompleted",
          get: function get() {
            return this.$$getAllProperties('isCompleted');
          }
          /**
           * @return {?}
           */

        }, {
          key: "isLive",
          get: function get() {
            return this.$$getAllProperties('isLive');
          }
          /**
           * @return {?}
           */

        }, {
          key: "isMaster",
          get: function get() {
            return this.$$getAllProperties('isMaster');
          }
          /**
           * @return {?}
           */

        }, {
          key: "time",
          get: function get() {
            return this.$$getAllProperties('time');
          }
          /**
           * @return {?}
           */

        }, {
          key: "buffer",
          get: function get() {
            return this.$$getAllProperties('buffer');
          }
          /**
           * @return {?}
           */

        }, {
          key: "buffered",
          get: function get() {
            return this.$$getAllProperties('buffered');
          }
          /**
           * @return {?}
           */

        }, {
          key: "subscriptions",
          get: function get() {
            return this.$$getAllProperties('subscriptions');
          }
          /**
           * @return {?}
           */

        }, {
          key: "textTracks",
          get: function get() {
            return this.$$getAllProperties('textTracks');
          }
        }]);

        return VgApiService;
      }();

      VgApiService.ɵfac = function VgApiService_Factory(t) {
        return new (t || VgApiService)();
      };
      /** @nocollapse */


      VgApiService.ctorParameters = function () {
        return [];
      };
      /** @nocollapse */


      VgApiService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function VgApiService_Factory() {
          return new VgApiService();
        },
        token: VgApiService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/services/vg-controls-hidden/vg-controls-hidden.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgControlsHiddenService = /*#__PURE__*/function () {
        function VgControlsHiddenService() {
          _classCallCheck(this, VgControlsHiddenService);

          this.isHiddenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.isHidden = this.isHiddenSubject.asObservable();
        }
        /**
         * @param {?} hidden
         * @return {?}
         */


        _createClass(VgControlsHiddenService, [{
          key: "state",
          value: function state(hidden) {
            this.isHiddenSubject.next(hidden);
          }
        }]);

        return VgControlsHiddenService;
      }();

      VgControlsHiddenService.ɵfac = function VgControlsHiddenService_Factory(t) {
        return new (t || VgControlsHiddenService)();
      };
      /** @nocollapse */


      VgControlsHiddenService.ctorParameters = function () {
        return [];
      };
      /** @nocollapse */


      VgControlsHiddenService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function VgControlsHiddenService_Factory() {
          return new VgControlsHiddenService();
        },
        token: VgControlsHiddenService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsHiddenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/services/vg-utils/vg-utils.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgUtilsService = /*#__PURE__*/function () {
        function VgUtilsService() {
          _classCallCheck(this, VgUtilsService);
        }

        _createClass(VgUtilsService, null, [{
          key: "getZIndex",

          /**
           * Inspired by Paul Irish
           * https://gist.github.com/paulirish/211209
           * @return {?}
           */
          value: function getZIndex() {
            /** @type {?} */
            var zIndex = 1;
            /** @type {?} */

            var elementZIndex;
            /** @type {?} */

            var tags = document.getElementsByTagName('*');

            for (var i = 0, l = tags.length; i < l; i++) {
              elementZIndex = parseInt(window.getComputedStyle(tags[i])['z-index'], 10);

              if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
              }
            }

            return zIndex;
          } // Very simple mobile detection, not 100% reliable

          /**
           * @return {?}
           */

        }, {
          key: "isMobileDevice",
          value: function isMobileDevice() {
            // return (
            //   typeof window.screen.orientation !== 'undefined' ||
            //   navigator.userAgent.indexOf('IEMobile') !== -1
            // );
            // window.orientation is deprecated and we should use window.screen.orientation
            return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
          }
          /**
           * @return {?}
           */

        }, {
          key: "isiOSDevice",
          value: function isiOSDevice() {
            return navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i);
          }
          /**
           * @return {?}
           */

        }, {
          key: "isCordova",
          value: function isCordova() {
            return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
          }
        }]);

        return VgUtilsService;
      }();

      VgUtilsService.ɵfac = function VgUtilsService_Factory(t) {
        return new (t || VgUtilsService)();
      };
      /** @nocollapse */


      VgUtilsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function VgUtilsService_Factory() {
          return new VgUtilsService();
        },
        token: VgUtilsService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgUtilsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/services/vg-fullscreen-api/vg-fullscreen-api.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgFullscreenApiService = /*#__PURE__*/function () {
        function VgFullscreenApiService() {
          _classCallCheck(this, VgFullscreenApiService);

          this.nativeFullscreen = true;
          this.isFullscreen = false;
          this.onChangeFullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} elem
         * @param {?} medias
         * @return {?}
         */


        _createClass(VgFullscreenApiService, [{
          key: "init",
          value: function init(elem, medias) {
            var _this = this;

            this.videogularElement = elem;
            this.medias = medias;
            /** @type {?} */

            var APIs = {
              w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
              },
              newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
              },
              oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
              },
              moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
              },
              ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                // Hack for iOS: webkitfullscreenchange it's not firing
                onerror: 'webkitfullscreenerror'
              },
              ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
              }
            };

            for (var browser in APIs) {
              if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
              }
            }

            if (VgUtilsService.isiOSDevice()) {
              this.polyfill = APIs.ios;
            }

            this.isAvailable = this.polyfill != null;

            if (this.polyfill == null) {
              return;
            }
            /** @type {?} */


            var fsElemDispatcher;

            switch (this.polyfill.onchange) {
              // Mozilla dispatches the fullscreen change event from document, not the element
              // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
              case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
              // iOS dispatches the fullscreen change event from video element

              case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
              // HTML5 implementation dispatches the fullscreen change event from the element

              default:
                fsElemDispatcher = elem;
            }

            this.fsChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(fsElemDispatcher, this.polyfill.onchange).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this.onFullscreenChange();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "onFullscreenChange",
          value: function onFullscreenChange() {
            this.isFullscreen = !!document[this.polyfill.element];
            this.onChangeFullscreen.emit(this.isFullscreen);
          }
          /**
           * @param {?=} element
           * @return {?}
           */

        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (this.isFullscreen) {
              this.exit();
            } else {
              this.request(element);
            }
          }
          /**
           * @param {?} elem
           * @return {?}
           */

        }, {
          key: "request",
          value: function request(elem) {
            if (!elem) {
              elem = this.videogularElement;
            }

            this.isFullscreen = true;
            this.onChangeFullscreen.emit(true); // Perform native full screen support

            if (this.isAvailable && this.nativeFullscreen) {
              // Fullscreen for mobile devices
              if (VgUtilsService.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if (!this.polyfill.enabled && elem === this.videogularElement || VgUtilsService.isiOSDevice()) {
                  elem = this.medias.toArray()[0].elem;
                }

                this.enterElementInFullScreen(elem);
              } else {
                this.enterElementInFullScreen(this.videogularElement);
              }
            }
          }
          /**
           * @param {?} elem
           * @return {?}
           */

        }, {
          key: "enterElementInFullScreen",
          value: function enterElementInFullScreen(elem) {
            elem[this.polyfill.request]();
          }
          /**
           * @return {?}
           */

        }, {
          key: "exit",
          value: function exit() {
            this.isFullscreen = false;
            this.onChangeFullscreen.emit(false); // Exit from native fullscreen

            if (this.isAvailable && this.nativeFullscreen) {
              document[this.polyfill.exit]();
            }
          }
        }]);

        return VgFullscreenApiService;
      }();

      VgFullscreenApiService.ɵfac = function VgFullscreenApiService_Factory(t) {
        return new (t || VgFullscreenApiService)();
      };
      /** @nocollapse */


      VgFullscreenApiService.ctorParameters = function () {
        return [];
      };
      /** @nocollapse */


      VgFullscreenApiService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function VgFullscreenApiService_Factory() {
          return new VgFullscreenApiService();
        },
        token: VgFullscreenApiService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgFullscreenApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/services/events/vg-events.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgEvents = function VgEvents() {
        _classCallCheck(this, VgEvents);
      };

      VgEvents.ɵfac = function VgEvents_Factory(t) {
        return new (t || VgEvents)();
      };

      VgEvents.VG_ABORT = 'abort';
      VgEvents.VG_CAN_PLAY = 'canplay';
      VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
      VgEvents.VG_DURATION_CHANGE = 'durationchange';
      VgEvents.VG_EMPTIED = 'emptied';
      VgEvents.VG_ENCRYPTED = 'encrypted';
      VgEvents.VG_ENDED = 'ended';
      VgEvents.VG_ERROR = 'error';
      VgEvents.VG_LOADED_DATA = 'loadeddata';
      VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
      VgEvents.VG_LOAD_START = 'loadstart';
      VgEvents.VG_PAUSE = 'pause';
      VgEvents.VG_PLAY = 'play';
      VgEvents.VG_PLAYING = 'playing';
      VgEvents.VG_PROGRESS = 'progress';
      VgEvents.VG_RATE_CHANGE = 'ratechange';
      VgEvents.VG_SEEK = 'seek';
      VgEvents.VG_SEEKED = 'seeked';
      VgEvents.VG_SEEKING = 'seeking';
      VgEvents.VG_STALLED = 'stalled';
      VgEvents.VG_SUSPEND = 'suspend';
      VgEvents.VG_TIME_UPDATE = 'timeupdate';
      VgEvents.VG_VOLUME_CHANGE = 'volumechange';
      VgEvents.VG_WAITING = 'waiting';
      VgEvents.VG_LOAD = 'load';
      VgEvents.VG_ENTER = 'enter';
      VgEvents.VG_EXIT = 'exit';
      VgEvents.VG_START_ADS = 'startads';
      VgEvents.VG_END_ADS = 'endads';
      /** @nocollapse */

      VgEvents.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function VgEvents_Factory() {
          return new VgEvents();
        },
        token: VgEvents,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgEvents, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/directives/vg-cue-points/vg-cue-points.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgCuePointsDirective = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         */
        function VgCuePointsDirective(ref) {
          _classCallCheck(this, VgCuePointsDirective);

          this.ref = ref;
          this.onEnterCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onUpdateCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onExitCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onCompleteCuePoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = [];
          this.cuesSubscriptions = [];
          this.totalCues = 0;
        }
        /**
         * @return {?}
         */


        _createClass(VgCuePointsDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onLoad$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.ref.nativeElement, VgEvents.VG_LOAD);
            this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onLoad",
          value: function onLoad(event) {
            /** @type {?} */
            var cues = event.target.track.cues;
            this.ref.nativeElement.cues = cues;
            this.updateCuePoints(cues);
          }
          /**
           * @param {?} cues
           * @return {?}
           */

        }, {
          key: "updateCuePoints",
          value: function updateCuePoints(cues) {
            this.cuesSubscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });

            for (var i = 0, l = cues.length; i < l; i++) {
              this.onEnter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(cues[i], VgEvents.VG_ENTER);
              this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
              this.onExit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(cues[i], VgEvents.VG_EXIT);
              this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onEnter",
          value: function onEnter(event) {
            this.onEnterCuePoint.emit(event.target);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onExit",
          value: function onExit(event) {
            this.onExitCuePoint.emit(event.target);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ref.nativeElement.track && this.ref.nativeElement.track.cues) {
              /** @type {?} */
              var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;

              if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgCuePointsDirective;
      }();

      VgCuePointsDirective.ɵfac = function VgCuePointsDirective_Factory(t) {
        return new (t || VgCuePointsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      VgCuePointsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: VgCuePointsDirective,
        selectors: [["", "vgCuePoints", ""]],
        outputs: {
          onEnterCuePoint: "onEnterCuePoint",
          onUpdateCuePoint: "onUpdateCuePoint",
          onExitCuePoint: "onExitCuePoint",
          onCompleteCuePoint: "onCompleteCuePoint"
        }
      });
      /** @nocollapse */

      VgCuePointsDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      VgCuePointsDirective.propDecorators = {
        onEnterCuePoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onUpdateCuePoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onExitCuePoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onCompleteCuePoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgCuePointsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[vgCuePoints]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onEnterCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onUpdateCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onExitCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onCompleteCuePoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/directives/vg-media/vg-media.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgMediaDirective = /*#__PURE__*/function () {
        /**
         * @param {?} api
         * @param {?} ref
         */
        function VgMediaDirective(api, ref) {
          _classCallCheck(this, VgMediaDirective);

          this.api = api;
          this.ref = ref;
          this.state = VgStates.VG_PAUSED;
          this.time = {
            current: 0,
            total: 0,
            left: 0
          };
          this.buffer = {
            end: 0
          };
          this.canPlay = false;
          this.canPlayThrough = false;
          this.isMetadataLoaded = false;
          this.isWaiting = false;
          this.isCompleted = false;
          this.isLive = false;
          this.isBufferDetected = false;
          this.checkInterval = 200;
          this.currentPlayPos = 0;
          this.lastPlayPos = 0;
          this.playAtferSync = false;
          this.bufferDetected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        /**
         * @return {?}
         */


        _createClass(VgMediaDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (this.vgMedia.nodeName) {
              // It's a native element
              this.elem = this.vgMedia;
            } else {
              // It's an Angular Class
              this.elem = this.vgMedia.elem;
            } // Just in case we're creating this vgMedia dynamically register again into API


            this.api.registerMedia(this);
            this.subscriptions = {
              // Native events
              abort: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_ABORT),
              canPlay: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_CAN_PLAY),
              canPlayThrough: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_CAN_PLAY_THROUGH),
              durationChange: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_DURATION_CHANGE),
              emptied: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_EMPTIED),
              encrypted: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_ENCRYPTED),
              ended: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_ENDED),
              error: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_ERROR),
              loadedData: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_LOADED_DATA),
              loadedMetadata: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_LOADED_METADATA),
              loadStart: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_LOAD_START),
              pause: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_PAUSE),
              play: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_PLAY),
              playing: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_PLAYING),
              progress: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_PROGRESS),
              rateChange: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_RATE_CHANGE),
              seeked: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_SEEKED),
              seeking: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_SEEKING),
              stalled: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_STALLED),
              suspend: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_SUSPEND),
              timeUpdate: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_TIME_UPDATE),
              volumeChange: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_VOLUME_CHANGE),
              waiting: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              this.elem, VgEvents.VG_WAITING),
              // Advertisement only events
              startAds: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              window, VgEvents.VG_START_ADS),
              endAds: Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(
              /** @type {?} */
              window, VgEvents.VG_END_ADS),
              // See changes on <source> child elements to reload the video file
              mutation: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                /** @type {?} */
                var domObs = new MutationObserver(
                /**
                * @param {?} mutations
                * @return {?}
                */
                function (mutations) {
                  observer.next(mutations);
                });
                domObs.observe(
                /** @type {?} */
                _this2.elem, {
                  childList: true,
                  attributes: true
                });
                return (
                  /**
                  * @return {?}
                  */
                  function () {
                    domObs.disconnect();
                  }
                );
              }),
              // Custom buffering detection
              bufferDetected: this.bufferDetected
            };
            this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
            this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
            this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
            this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
            this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
            this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
            this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
            this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
            this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
            this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
            this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
            this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
            this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));

            if (this.vgMaster) {
              this.api.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                _this2.prepareSync();
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "prepareSync",
          value: function prepareSync() {
            var _this3 = this;

            /** @type {?} */
            var canPlayAll = [];

            for (var media in this.api.medias) {
              if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
              }
            }

            this.canPlayAllSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(canPlayAll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
            /**
            * @param {...?} params
            * @return {?}
            */
            function () {
              /** @type {?} */
              var checkReadyState =
              /**
              * @param {?} event
              * @return {?}
              */
              function checkReadyState(event) {
                return event.target.readyState === 4;
              };
              /** @type {?} */


              for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
              }

              var allReady = params.some(checkReadyState);

              if (allReady && !_this3.syncSubscription) {
                _this3.startSync();

                _this3.syncSubscription.unsubscribe();
              }
            })).subscribe();
          }
          /**
           * @return {?}
           */

        }, {
          key: "startSync",
          value: function startSync() {
            var _this4 = this;

            this.syncSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).subscribe(
            /**
            * @return {?}
            */
            function () {
              for (var media in _this4.api.medias) {
                if (_this4.api.medias[media] !== _this4) {
                  /** @type {?} */
                  var diff = _this4.api.medias[media].currentTime - _this4.currentTime;

                  if (diff < -0.3 || diff > 0.3) {
                    _this4.playAtferSync = _this4.state === VgStates.VG_PLAYING;

                    _this4.pause();

                    _this4.api.medias[media].pause();

                    _this4.api.medias[media].currentTime = _this4.currentTime;
                  } else {
                    if (_this4.playAtferSync) {
                      _this4.play();

                      _this4.api.medias[media].play();

                      _this4.playAtferSync = false;
                    }
                  }
                }
              }
            });
          }
          /**
           * @param {?} mutations
           * @return {?}
           */

        }, {
          key: "onMutation",
          value: function onMutation(mutations) {
            // Detect changes only for source elements or src attribute
            for (var i = 0, l = mutations.length; i < l; i++) {
              /** @type {?} */
              var mut = mutations[i];

              if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (
                /** @type {?} */
                mut.target.src &&
                /** @type {?} */
                mut.target.src.length > 0 &&
                /** @type {?} */
                mut.target.src.indexOf('blob:') < 0) {
                  this.loadMedia();
                  break;
                }
              } else if (mut.type === 'childList' && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "loadMedia",
          value: function loadMedia() {
            var _this5 = this;

            this.vgMedia.pause();
            this.vgMedia.currentTime = 0; // Start buffering until we can play the media file

            this.stopBufferCheck();
            this.isBufferDetected = true;
            this.bufferDetected.next(this.isBufferDetected); // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.

            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this5.vgMedia.load();
            }, 10);
          }
          /**
           * @return {?}
           */

        }, {
          key: "play",
          value: function play() {
            var _this6 = this;

            // short-circuit if already playing
            if (this.playPromise || this.state !== VgStates.VG_PAUSED && this.state !== VgStates.VG_ENDED) {
              return;
            }

            this.playPromise = this.vgMedia.play(); // browser has async play promise

            if (this.playPromise && this.playPromise.then && this.playPromise["catch"]) {
              this.playPromise.then(
              /**
              * @return {?}
              */
              function () {
                _this6.playPromise = null;
              })["catch"](
              /**
              * @return {?}
              */
              function () {
                _this6.playPromise = null; // deliberately empty for the sake of eating console noise
              });
            }

            return this.playPromise;
          }
          /**
           * @return {?}
           */

        }, {
          key: "pause",
          value: function pause() {
            var _this7 = this;

            // browser has async play promise
            if (this.playPromise) {
              this.playPromise.then(
              /**
              * @return {?}
              */
              function () {
                _this7.vgMedia.pause();
              });
            } else {
              this.vgMedia.pause();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onCanPlay",
          // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */
          value: function onCanPlay(event) {
            this.isBufferDetected = false;
            this.bufferDetected.next(this.isBufferDetected);
            this.canPlay = true;
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onCanPlayThrough",
          value: function onCanPlayThrough(event) {
            this.isBufferDetected = false;
            this.bufferDetected.next(this.isBufferDetected);
            this.canPlayThrough = true;
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onLoadMetadata",
          value: function onLoadMetadata(event) {
            this.isMetadataLoaded = true;
            this.time = {
              current: 0,
              left: 0,
              total: this.duration * 1000
            };
            this.state = VgStates.VG_PAUSED; // Live streaming check

            /** @type {?} */

            var t = Math.round(this.time.total);
            this.isLive = t === Infinity;
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onWait",
          value: function onWait(event) {
            this.isWaiting = true;
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onComplete",
          value: function onComplete(event) {
            this.isCompleted = true;
            this.state = VgStates.VG_ENDED;
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onStartPlaying",
          value: function onStartPlaying(event) {
            this.state = VgStates.VG_PLAYING;
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onPlay",
          value: function onPlay(event) {
            this.state = VgStates.VG_PLAYING;

            if (this.vgMaster) {
              if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
              }
            }

            this.startBufferCheck();
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onPause",
          value: function onPause(event) {
            this.state = VgStates.VG_PAUSED;

            if (this.vgMaster) {
              if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
              }
            }

            this.stopBufferCheck();
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onTimeUpdate",
          value: function onTimeUpdate(event) {
            /** @type {?} */
            var end = this.buffered.length - 1;
            this.time = {
              current: this.currentTime * 1000,
              total: this.time.total,
              left: (this.duration - this.currentTime) * 1000
            };

            if (end >= 0) {
              this.buffer = {
                end: this.buffered.end(end) * 1000
              };
            }

            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onProgress",
          value: function onProgress(event) {
            /** @type {?} */
            var end = this.buffered.length - 1;

            if (end >= 0) {
              this.buffer = {
                end: this.buffered.end(end) * 1000
              };
            }

            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onVolumeChange",
          value: function onVolumeChange(event) {
            // TODO: Save to localstorage the current volume
            this.ref.detectChanges();
          } // @ts-ignore

          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onError",
          value: function onError(event) {
            // TODO: Handle error messages
            this.ref.detectChanges();
          } // http://stackoverflow.com/a/23828241/779529

          /**
           * @return {?}
           */

        }, {
          key: "bufferCheck",
          value: function bufferCheck() {
            /** @type {?} */
            var offset = 1 / this.checkInterval;
            this.currentPlayPos = this.currentTime;

            if (!this.isBufferDetected && this.currentPlayPos < this.lastPlayPos + offset) {
              this.isBufferDetected = true;
            }

            if (this.isBufferDetected && this.currentPlayPos > this.lastPlayPos + offset) {
              this.isBufferDetected = false;
            } // Prevent calls to bufferCheck after ngOnDestroy have been called


            if (!this.bufferDetected.closed) {
              this.bufferDetected.next(this.isBufferDetected);
            }

            this.lastPlayPos = this.currentPlayPos;
          }
          /**
           * @return {?}
           */

        }, {
          key: "startBufferCheck",
          value: function startBufferCheck() {
            var _this8 = this;

            this.checkBufferSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, this.checkInterval).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this8.bufferCheck();
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "stopBufferCheck",
          value: function stopBufferCheck() {
            if (this.checkBufferSubscription) {
              this.checkBufferSubscription.unsubscribe();
            }

            this.isBufferDetected = false;
            this.bufferDetected.next(this.isBufferDetected);
          }
          /**
           * @param {?} value
           * @param {?=} byPercent
           * @return {?}
           */

        }, {
          key: "seekTime",
          value: function seekTime(value) {
            var byPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /** @type {?} */
            var second;
            /** @type {?} */

            var duration = this.duration;

            if (byPercent) {
              second = value * duration / 100;
            } else {
              second = value;
            }

            this.currentTime = second;
          }
          /**
           * @param {?} type
           * @param {?=} label
           * @param {?=} language
           * @param {?=} mode
           * @return {?}
           */

        }, {
          key: "addTextTrack",
          value: function addTextTrack(type, label, language, mode) {
            /** @type {?} */
            var newTrack = this.vgMedia.addTextTrack(type, label, language);

            if (mode) {
              newTrack.mode = mode;
            }

            return newTrack;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.vgMedia.src = '';
            this.mutationObs.unsubscribe();
            this.canPlayObs.unsubscribe();
            this.canPlayThroughObs.unsubscribe();
            this.loadedMetadataObs.unsubscribe();
            this.waitingObs.unsubscribe();
            this.progressObs.unsubscribe();
            this.endedObs.unsubscribe();
            this.playingObs.unsubscribe();
            this.playObs.unsubscribe();
            this.pauseObs.unsubscribe();
            this.timeUpdateObs.unsubscribe();
            this.volumeChangeObs.unsubscribe();
            this.errorObs.unsubscribe();

            if (this.checkBufferSubscription) {
              this.checkBufferSubscription.unsubscribe();
            }

            if (this.syncSubscription) {
              this.syncSubscription.unsubscribe();
            }

            this.bufferDetected.complete();
            this.bufferDetected.unsubscribe();
            this.api.unregisterMedia(this);
          }
        }, {
          key: "id",
          get: function get() {
            // We should return undefined if vgMedia still doesn't exist

            /** @type {?} */
            var result;

            if (this.vgMedia) {
              result = this.vgMedia.id;
            }

            return result;
          }
          /**
           * @return {?}
           */

        }, {
          key: "duration",
          get: function get() {
            return this.vgMedia.duration === Infinity ? this.specifiedDuration : this.vgMedia.duration;
          }
          /**
           * @param {?} seconds
           * @return {?}
           */

        }, {
          key: "currentTime",
          set: function set(seconds) {
            this.vgMedia.currentTime = seconds; // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.vgMedia.currentTime;
          }
          /**
           * @param {?} volume
           * @return {?}
           */

        }, {
          key: "volume",
          set: function set(volume) {
            this.vgMedia.volume = volume;
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.vgMedia.volume;
          }
          /**
           * @param {?} rate
           * @return {?}
           */

        }, {
          key: "playbackRate",
          set: function set(rate) {
            this.vgMedia.playbackRate = rate;
          }
          /**
           * @return {?}
           */
          ,
          get: function get() {
            return this.vgMedia.playbackRate;
          }
          /**
           * @return {?}
           */

        }, {
          key: "buffered",
          get: function get() {
            return this.vgMedia.buffered;
          }
          /**
           * @return {?}
           */

        }, {
          key: "textTracks",
          get: function get() {
            return this.vgMedia.textTracks;
          }
        }]);

        return VgMediaDirective;
      }();

      VgMediaDirective.ɵfac = function VgMediaDirective_Factory(t) {
        return new (t || VgMediaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      VgMediaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: VgMediaDirective,
        selectors: [["", "vgMedia", ""]],
        inputs: {
          vgMedia: "vgMedia",
          vgMaster: "vgMaster"
        }
      });
      /** @nocollapse */

      VgMediaDirective.ctorParameters = function () {
        return [{
          type: VgApiService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      VgMediaDirective.propDecorators = {
        vgMedia: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgMaster: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgMediaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[vgMedia]'
          }]
        }], function () {
          return [{
            type: VgApiService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          vgMedia: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgMaster: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-player/vg-player.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgPlayerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} api
         * @param {?} fsAPI
         * @param {?} controlsHidden
         */
        function VgPlayerComponent(ref, api, fsAPI, controlsHidden) {
          _classCallCheck(this, VgPlayerComponent);

          this.api = api;
          this.fsAPI = fsAPI;
          this.controlsHidden = controlsHidden;
          this.isFullscreen = false;
          this.isNativeFullscreen = false;
          this.areControlsHidden = false;
          this.onPlayerReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onMediaReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = [];
          this.elem = ref.nativeElement;
          this.api.registerElement(this.elem);
        }
        /**
         * @return {?}
         */


        _createClass(VgPlayerComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this9 = this;

            this.medias.toArray().forEach(
            /**
            * @param {?} media
            * @return {?}
            */
            function (media) {
              _this9.api.registerMedia(media);
            });
            this.fsAPI.init(this.elem, this.medias);
            this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
            this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
            this.api.onPlayerReady(this.fsAPI);
            this.onPlayerReady.emit(this.api);
          }
          /**
           * @param {?} fsState
           * @return {?}
           */

        }, {
          key: "onChangeFullscreen",
          value: function onChangeFullscreen(fsState) {
            if (!this.fsAPI.nativeFullscreen) {
              this.isFullscreen = fsState;
              this.zIndex = fsState ? VgUtilsService.getZIndex().toString() : 'auto';
            } else {
              this.isNativeFullscreen = fsState;
            }
          }
          /**
           * @param {?} hidden
           * @return {?}
           */

        }, {
          key: "onHideControls",
          value: function onHideControls(hidden) {
            this.areControlsHidden = hidden;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgPlayerComponent;
      }();

      VgPlayerComponent.ɵfac = function VgPlayerComponent_Factory(t) {
        return new (t || VgPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgFullscreenApiService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VgControlsHiddenService));
      };

      VgPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgPlayerComponent,
        selectors: [["vg-player"]],
        contentQueries: function VgPlayerComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, VgMediaDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.medias = _t);
          }
        },
        hostVars: 8,
        hostBindings: function VgPlayerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx.zIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fullscreen", ctx.isFullscreen)("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);
          }
        },
        outputs: {
          onPlayerReady: "onPlayerReady",
          onMediaReady: "onMediaReady"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([VgApiService, VgFullscreenApiService, VgControlsHiddenService])],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function VgPlayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["\n      vg-player {\n        font-family: 'videogular';\n        position: relative;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background-color: black;\n      }\n      vg-player.fullscreen {\n        position: fixed;\n        left: 0;\n        top: 0;\n      }\n      vg-player.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgPlayerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: VgApiService
        }, {
          type: VgFullscreenApiService
        }, {
          type: VgControlsHiddenService
        }];
      };

      VgPlayerComponent.propDecorators = {
        isFullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.fullscreen']
        }],
        isNativeFullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.native-fullscreen']
        }],
        areControlsHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.controls-hidden']
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.z-index']
        }],
        onPlayerReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMediaReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        medias: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [VgMediaDirective]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlayerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-player',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>",
            providers: [VgApiService, VgFullscreenApiService, VgControlsHiddenService],
            styles: ["\n      vg-player {\n        font-family: 'videogular';\n        position: relative;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        background-color: black;\n      }\n      vg-player.fullscreen {\n        position: fixed;\n        left: 0;\n        top: 0;\n      }\n      vg-player.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: VgApiService
          }, {
            type: VgFullscreenApiService
          }, {
            type: VgControlsHiddenService
          }];
        }, {
          isFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fullscreen']
          }],
          isNativeFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.native-fullscreen']
          }],
          areControlsHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.controls-hidden']
          }],
          onPlayerReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onMediaReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.z-index']
          }],
          medias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [VgMediaDirective]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/core.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var services = [VgApiService, VgControlsHiddenService, VgFullscreenApiService, VgUtilsService, VgEvents, VgStates];
      /** @type {?} */

      var directives = [VgCuePointsDirective, VgMediaDirective];

      var VgCoreModule = function VgCoreModule() {
        _classCallCheck(this, VgCoreModule);
      };

      VgCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VgCoreModule
      });
      VgCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VgCoreModule_Factory(t) {
          return new (t || VgCoreModule)();
        },
        providers: [].concat(services),
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgCoreModule, {
          declarations: function declarations() {
            return [VgCuePointsDirective, VgMediaDirective, VgPlayerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [VgCuePointsDirective, VgMediaDirective, VgPlayerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgCoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [].concat(services),
            declarations: [].concat(directives, [VgPlayerComponent]),
            exports: [].concat(directives, [VgPlayerComponent])
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/interfaces/bitrate-options.interface.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function BitrateOptions() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/interfaces/i-media-element.interface.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function IMediaElement() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/interfaces/idrm-license-server.interface.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function IDRMLicenseServer() {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/interfaces/ihls-config.interface.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function IHLSConfig() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/interfaces/vg-media-api.interface.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function IPlayable() {}

      if (false) {}
      /**
       * @record
       */


      function IMediaSubscriptions() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/interfaces/deprecated-tracks-types.interface.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function AudioTrack() {}

      if (false) {}
      /**
       * @record
       */


      function AudioTrackListEventMap() {}

      if (false) {}
      /**
       * Used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate AudioTrack object in the list.
       * @record
       */


      function AudioTrackList() {}

      if (false) {}
      /**
       * A single video track from a <video> element.
       * @record
       */


      function VideoTrack() {}

      if (false) {}
      /**
       * @record
       */


      function VideoTrackListEventMap() {}

      if (false) {}
      /**
       * Used to represent a list of the video tracks contained within a <video> element, with each track represented by a separate VideoTrack object in the list.
       * @record
       */


      function VideoTrackList() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/directives/vg-media/vg-media-element.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgMediaElement = /*#__PURE__*/function () {
        function VgMediaElement() {
          _classCallCheck(this, VgMediaElement);
        }

        _createClass(VgMediaElement, [{
          key: "addTextTrack",
          // @ts-ignore

          /**
           * @param {?} kind
           * @param {?=} label
           * @param {?=} language
           * @return {?}
           */
          value: function addTextTrack(kind, label, language) {
            return null;
          } // @ts-ignore

          /**
           * @param {?} type
           * @return {?}
           */

        }, {
          key: "canPlayType",
          value: function canPlayType(type) {
            return null;
          }
          /**
           * @return {?}
           */

        }, {
          key: "load",
          value: function load() {}
          /**
           * @return {?}
           */

        }, {
          key: "msClearEffects",
          value: function msClearEffects() {}
          /**
           * @return {?}
           */

        }, {
          key: "msGetAsCastingSource",
          value: function msGetAsCastingSource() {
            return null;
          } // @ts-ignore

          /**
           * @param {?} _activatableClassId
           * @param {?} _effectRequired
           * @param {?=} _config
           * @return {?}
           */

        }, {
          key: "msInsertAudioEffect",
          value: function msInsertAudioEffect(_activatableClassId, _effectRequired, _config) {} // @ts-ignore

          /**
           * @param {?} mediaKeys
           * @return {?}
           */

        }, {
          key: "msSetMediaKeys",
          value: function msSetMediaKeys(mediaKeys) {} // @ts-ignore

          /**
           * @param {?=} mediaProtectionManager
           * @return {?}
           */

        }, {
          key: "msSetMediaProtectionManager",
          value: function msSetMediaProtectionManager(mediaProtectionManager) {}
          /**
           * @return {?}
           */

        }, {
          key: "pause",
          value: function pause() {}
          /**
           * @return {?}
           */

        }, {
          key: "play",
          value: function play() {
            return null;
          } // @ts-ignore

          /**
           * @param {?} mediaKeys
           * @return {?}
           */

        }, {
          key: "setMediaKeys",
          value: function setMediaKeys(mediaKeys) {
            return null;
          } // @ts-ignore

          /**
           * @param {?} _type
           * @param {?} _listener
           * @param {?=} _useCapture
           * @return {?}
           */

        }, {
          key: "addEventListener",
          value: function addEventListener(_type, _listener, _useCapture) {}
        }, {
          key: "audioTracks",

          /**
           * @return {?}
           */
          get: function get() {
            return null;
          }
        }]);

        return VgMediaElement;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: videogular-ngx-videogular-core.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=videogular-ngx-videogular-core.js.map

      /***/

    },

    /***/
    "J1pr":
    /*!*******************************************************!*\
      !*** ./src/app/video-playlist/video-playlist.page.ts ***!
      \*******************************************************/

    /*! exports provided: VideoPlaylistPage */

    /***/
    function J1pr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlaylistPage", function () {
        return VideoPlaylistPage;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shell/text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "4w57");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shell/image-shell/image-shell.component */
      "2gss");

      function VideoPlaylistPage_video_11_source_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 18);
        }

        if (rf & 2) {
          var video_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("type", video_r4.type);
        }
      }

      function VideoPlaylistPage_video_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoPlaylistPage_video_11_source_1_Template, 1, 2, "source", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.video_playlist_model == null ? null : ctx_r0.video_playlist_model.selected_video == null ? null : ctx_r0.video_playlist_model.selected_video.sources);
        }
      }

      function VideoPlaylistPage_vg_player_12_source_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "source", 18);
        }

        if (rf & 2) {
          var video_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r7.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("type", video_r7.type);
        }
      }

      function VideoPlaylistPage_vg_player_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "vg-player", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPlayerReady", function VideoPlaylistPage_vg_player_12_Template_vg_player_onPlayerReady_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onPlayerReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideoPlaylistPage_vg_player_12_source_3_Template, 1, 2, "source", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vgMedia", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.video_playlist_model == null ? null : ctx_r1.video_playlist_model.selected_video == null ? null : ctx_r1.video_playlist_model.selected_video.sources);
        }
      }

      var _c0 = function _c0() {
        return {
          w: 3,
          h: 2
        };
      };

      function VideoPlaylistPage_ion_row_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-image-shell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoPlaylistPage_ion_row_19_Template_app_image_shell_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var video_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.playMedia(video_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-aspect-ratio", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoPlaylistPage_ion_row_19_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var video_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.playMedia(video_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-text-shell", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-text-shell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var video_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", video_r10.thumbnail)("alt", "video thumbnail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", video_r10.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", video_r10.description);
        }
      }

      var _c1 = function _c1() {
        return {
          w: 16,
          h: 9
        };
      };

      var Share = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Share;

      var VideoPlaylistPage = /*#__PURE__*/function () {
        function VideoPlaylistPage(route, platformId) {
          _classCallCheck(this, VideoPlaylistPage);

          this.route = route;
          this.platformId = platformId;
          this.ssr = true;
          this.start_playing = false;
        }

        _createClass(VideoPlaylistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            // In SSR show a placeholder for the <vg-player>
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              this.ssr = false;
            }

            this.route.data.pipe( // Extract data for this page
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resolvedRouteData) {
              return resolvedRouteData['data'].state;
            })).subscribe(function (state) {
              _this10.video_playlist_model = state;

              if (!state.isShell) {
                _this10.video_playlist_model.video_playlist = state.videos;
                _this10.video_playlist_model.selected_video = state.videos[0];
              }
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "playMedia",
          value: function playMedia(media) {
            // Check if this media is not the same we are currently playing
            if (media !== this.video_playlist_model.selected_video) {
              // Change sources
              this.video_playlist_model.selected_video = media; // When changing sources we wait until the metadata is loaded and then we start playing the video
            }
          }
        }, {
          key: "onPlayerReady",
          value: function onPlayerReady(api) {
            this.api = api;
            this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
          }
        }, {
          key: "playVideo",
          value: function playVideo() {
            if (this.start_playing) {
              this.api.play();
            } else {
              this.start_playing = true;
            }
          }
        }, {
          key: "shareMedia",
          value: function shareMedia() {
            var selectedVideo = this.video_playlist_model.selected_video;
            Share.share({
              title: selectedVideo.title,
              text: selectedVideo.description,
              url: 'https://ionicthemes.com/',
              dialogTitle: 'Share Media'
            }).then(function () {
              return console.log('Successful share');
            })["catch"](function (error) {
              return console.log('Error sharing', error);
            });
          }
        }, {
          key: "isShell",
          get: function get() {
            return this.video_playlist_model && this.video_playlist_model.isShell ? true : false;
          }
        }]);

        return VideoPlaylistPage;
      }();

      VideoPlaylistPage.ɵfac = function VideoPlaylistPage_Factory(t) {
        return new (t || VideoPlaylistPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      VideoPlaylistPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideoPlaylistPage,
        selectors: [["app-video-playlist"]],
        hostVars: 2,
        hostBindings: function VideoPlaylistPage_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
          }
        },
        decls: 20,
        vars: 7,
        consts: [["color", "primary"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "share"], [1, "video-playlist-content"], [3, "ratio"], ["class", "ssr-video", "controls", "", "preload", "auto", 4, "ngIf"], ["class", "video-player", 3, "onPlayerReady", 4, "ngIf"], [1, "video-data-section"], [1, "video-title"], ["animation", "gradient", 3, "data"], [1, "video-description"], ["lines", "5", "animation", "gradient", 3, "data"], [1, "video-playlist-section"], ["class", "playlist-item-row", 4, "ngFor", "ngForOf"], ["controls", "", "preload", "auto", 1, "ssr-video"], [3, "src", "type", 4, "ngFor", "ngForOf"], [3, "src", "type"], [1, "video-player", 3, "onPlayerReady"], ["controls", "", "id", "player-video", "preload", "auto", 3, "vgMedia"], ["player_video", ""], [1, "playlist-item-row"], ["size", "4"], ["animation", "spinner", 1, "video-image", 3, "display", "src", "alt", "click"], [1, "play-icon-wrapper", 3, "click"], ["name", "play", 1, "play-icon"], ["size", "8", 1, "video-info-wrapper"], [1, "image-title"], [1, "image-description"], ["lines", "3", "animation", "gradient", 3, "data"]],
        template: function VideoPlaylistPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Video Playlist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoPlaylistPage_Template_ion_button_click_7_listener() {
              return ctx.shareMedia();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-aspect-ratio", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VideoPlaylistPage_video_11_Template, 2, 1, "video", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoPlaylistPage_vg_player_12_Template, 4, 2, "vg-player", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-text-shell", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-text-shell", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VideoPlaylistPage_ion_row_19_Template, 11, 7, "ion-row", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ssr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ssr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.selected_video == null ? null : ctx.video_playlist_model.selected_video.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.selected_video == null ? null : ctx.video_playlist_model.selected_video.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.video_playlist_model == null ? null : ctx.video_playlist_model.video_playlist);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgPlayerComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgMediaDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.video-playlist-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .ssr-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-secondary);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-data-section[_ngcontent-%COMP%]   .video-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  color: var(--ion-color-dark);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  padding-bottom: var(--page-margin);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:first-child) {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .playlist-item-row[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n  box-shadow: inset 0 -7px 3px -8px var(--ion-color-darkest);\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .play-icon-wrapper[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  background: rgba(var(--ion-color-lightest-rgb), 0.7);\n  font-size: 20px;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  align-self: center;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  color: var(--ion-color-secondary);\n  font-size: 14px;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-playlist-content[_ngcontent-%COMP%]   .video-playlist-section[_ngcontent-%COMP%]   .video-info-wrapper[_ngcontent-%COMP%]   .image-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-dark);\n  font-size: 13px;\n  line-height: 1.3;\n  letter-spacing: 0.3px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  \n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcGxheWxpc3Qvc3R5bGVzL3ZpZGVvLXBsYXlsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlDO0VBQ0MsMkJBQUE7QUFGRjs7QUFJRTtFQUNDLGVBQUE7RUFDRywyQ0FBQTtFQUNILGlDQUFBO0FBRkg7O0FBS0U7RUFDSSxXQUFBO0VBQ0QsZUFBQTtFQUNELGdCQUFBO0VBQ0QscUJBQUE7RUFDQSw0QkFBQTtBQUhIOztBQU9FO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQUxKOztBQU9JO0VBQ0UsOEJBQUE7QUFMTjs7QUFPTTtFQUNFLHlDQUFBO0FBTFI7O0FBUU07RUFDRSw0Q0FBQTtFQUVBLDBEQUFBO0FBUFI7O0FBV0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVROOztBQVdNO0VBQ0UsaUNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFhSTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSxrQkFBQTtBQVhOOztBQWFNO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBWFI7O0FBYVE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFYVjs7QUFlTTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBR0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSw0QkFBQTtBQWhCUiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXBsYXlsaXN0L3N0eWxlcy92aWRlby1wbGF5bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXHJcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4udmlkZW8tcGxheWxpc3QtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAuc3NyLXZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcblx0LnZpZGVvLWRhdGEtc2VjdGlvbiB7XHJcblx0XHRwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG5cdFx0LnZpZGVvLXRpdGxlIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LnZpZGVvLWRlc2NyaXB0aW9uIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICBcdGZvbnQtc2l6ZTogMTNweDtcclxuICBcdFx0bGluZS1oZWlnaHQ6IDEuMztcclxuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgLnZpZGVvLXBsYXlsaXN0LXNlY3Rpb25cdHtcclxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG5cclxuICAgIC5wbGF5bGlzdC1pdGVtLXJvdyB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIGJvdHRvbVxyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTdweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGxheS1pY29uLXdyYXBwZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAucGxheS1pY29uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QtcmdiKSwgLjcpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvLWluZm8td3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5pbWFnZS10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmltYWdlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuXHJcbiAgICAgICAgLy8gbGluZSBjbGFtcCBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmUtY2xhbXBpbi8jYXJ0aWNsZS1oZWFkZXItaWQtMFxyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC8vIHdlIG5lZWQgYXV0b3ByZWZpeGVyIG9mZiBmb3IgbmV4dCBsaW5lIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvNzc2I2lzc3VlY29tbWVudC00NDUyNDkxNzRcclxuICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */", "app-image-shell.video-image[_ngcontent-%COMP%] {\n  background-position: center;\n}\n\n.image-title[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.image-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tcGxheWxpc3Qvc3R5bGVzL3ZpZGVvLXBsYXlsaXN0LnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby1wbGF5bGlzdC9zdHlsZXMvdmlkZW8tcGxheWxpc3Quc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC52aWRlby1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxM3B4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlaylistPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-video-playlist',
            templateUrl: './video-playlist.page.html',
            styleUrls: ['./styles/video-playlist.page.scss', './styles/video-playlist.shell.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
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
    "LCGB":
    /*!***********************************************************!*\
      !*** ./src/app/video-playlist/video-playlist.resolver.ts ***!
      \***********************************************************/

    /*! exports provided: VideoPlaylistResolver */

    /***/
    function LCGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlaylistResolver", function () {
        return VideoPlaylistResolver;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _video_playlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./video-playlist.service */
      "pXHv");

      var VideoPlaylistResolver = /*#__PURE__*/function () {
        function VideoPlaylistResolver(videoPlaylistService) {
          _classCallCheck(this, VideoPlaylistResolver);

          this.videoPlaylistService = videoPlaylistService;
        }

        _createClass(VideoPlaylistResolver, [{
          key: "resolve",
          value: function resolve() {
            var dataSource = this.videoPlaylistService.getVideoPlaylistDataSource();
            var dataStore = this.videoPlaylistService.getVideoPlaylistStore(dataSource);
            return dataStore;
          }
        }]);

        return VideoPlaylistResolver;
      }();

      VideoPlaylistResolver.ɵfac = function VideoPlaylistResolver_Factory(t) {
        return new (t || VideoPlaylistResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_video_playlist_service__WEBPACK_IMPORTED_MODULE_1__["VideoPlaylistService"]));
      };

      VideoPlaylistResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VideoPlaylistResolver,
        factory: VideoPlaylistResolver.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlaylistResolver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _video_playlist_service__WEBPACK_IMPORTED_MODULE_1__["VideoPlaylistService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PTlW":
    /*!********************************************************!*\
      !*** ./src/app/video-playlist/video-playlist.model.ts ***!
      \********************************************************/

    /*! exports provided: VideoModel, VideoPlaylistModel */

    /***/
    function PTlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoModel", function () {
        return VideoModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlaylistModel", function () {
        return VideoPlaylistModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");

      var VideoModel = function VideoModel() {
        _classCallCheck(this, VideoModel);
      };

      var VideoPlaylistModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(VideoPlaylistModel, _shell_data_store__WE);

        var _super = _createSuper(VideoPlaylistModel);

        function VideoPlaylistModel() {
          var _this11;

          _classCallCheck(this, VideoPlaylistModel);

          _this11 = _super.call(this);
          _this11.selected_video = new VideoModel();
          _this11.video_playlist = [new VideoModel(), new VideoModel(), new VideoModel()];
          return _this11;
        }

        return VideoPlaylistModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "VKRg":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-buffering.js ***!
      \**************************************************************************************************************/

    /*! exports provided: VgBufferingComponent, VgBufferingModule */

    /***/
    function VKRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgBufferingComponent", function () {
        return VgBufferingComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgBufferingModule", function () {
        return VgBufferingModule;
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


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "4w57");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/vg-buffering/vg-buffering.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgBufferingComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgBufferingComponent(ref, API) {
          _classCallCheck(this, VgBufferingComponent);

          this.API = API;
          this.checkInterval = 50;
          this.currentPlayPos = 0;
          this.lastPlayPos = 0;
          this.subscriptions = [];
          this.isBuffering = false;
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgBufferingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this12.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            var _this13 = this;

            this.target = this.API.getMediaById(this.vgFor);
            this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(
            /**
            * @param {?} isBuffering
            * @return {?}
            */
            function (isBuffering) {
              return _this13.onUpdateBuffer(isBuffering);
            }));
          }
          /**
           * @param {?} isBuffering
           * @return {?}
           */

        }, {
          key: "onUpdateBuffer",
          value: function onUpdateBuffer(isBuffering) {
            this.isBuffering = isBuffering;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgBufferingComponent;
      }();

      VgBufferingComponent.ɵfac = function VgBufferingComponent_Factory(t) {
        return new (t || VgBufferingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]));
      };

      VgBufferingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgBufferingComponent,
        selectors: [["vg-buffering"]],
        hostVars: 2,
        hostBindings: function VgBufferingComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-buffering", ctx.isBuffering);
          }
        },
        inputs: {
          vgFor: "vgFor"
        },
        decls: 3,
        vars: 0,
        consts: [[1, "vg-buffering"], [1, "bufferingContainer"], [1, "loadingSpinner"]],
        template: function VgBufferingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n      vg-buffering {\n        display: none;\n        z-index: 201;\n      }\n      vg-buffering.is-buffering {\n        display: block;\n      }\n\n      .vg-buffering {\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      .vg-buffering .bufferingContainer {\n        width: 100%;\n        position: absolute;\n        cursor: pointer;\n        top: 50%;\n        margin-top: -50px;\n        zoom: 1;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n      .vg-buffering .loadingSpinner {\n        background-color: rgba(0, 0, 0, 0);\n        border: 5px solid rgba(255, 255, 255, 1);\n        opacity: 0.9;\n        border-top: 5px solid rgba(0, 0, 0, 0);\n        border-left: 5px solid rgba(0, 0, 0, 0);\n        border-radius: 50px;\n        box-shadow: 0 0 35px #ffffff;\n        width: 50px;\n        height: 50px;\n        margin: 0 auto;\n        -moz-animation: spin 0.5s infinite linear;\n        -webkit-animation: spin 0.5s infinite linear;\n      }\n      .vg-buffering .loadingSpinner .stop {\n        -webkit-animation-play-state: paused;\n        -moz-animation-play-state: paused;\n      }\n      @-moz-keyframes spin {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-moz-keyframes spinoff {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(-360deg);\n        }\n      }\n      @-webkit-keyframes spin {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @-webkit-keyframes spinoff {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(-360deg);\n        }\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgBufferingComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]
        }];
      };

      VgBufferingComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isBuffering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.is-buffering']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgBufferingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-buffering',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<div class=\"vg-buffering\">\n    <div class=\"bufferingContainer\">\n      <div class=\"loadingSpinner\"></div>\n    </div>\n  </div>",
            styles: ["\n      vg-buffering {\n        display: none;\n        z-index: 201;\n      }\n      vg-buffering.is-buffering {\n        display: block;\n      }\n\n      .vg-buffering {\n        position: absolute;\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      .vg-buffering .bufferingContainer {\n        width: 100%;\n        position: absolute;\n        cursor: pointer;\n        top: 50%;\n        margin-top: -50px;\n        zoom: 1;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n      .vg-buffering .loadingSpinner {\n        background-color: rgba(0, 0, 0, 0);\n        border: 5px solid rgba(255, 255, 255, 1);\n        opacity: 0.9;\n        border-top: 5px solid rgba(0, 0, 0, 0);\n        border-left: 5px solid rgba(0, 0, 0, 0);\n        border-radius: 50px;\n        box-shadow: 0 0 35px #ffffff;\n        width: 50px;\n        height: 50px;\n        margin: 0 auto;\n        -moz-animation: spin 0.5s infinite linear;\n        -webkit-animation: spin 0.5s infinite linear;\n      }\n      .vg-buffering .loadingSpinner .stop {\n        -webkit-animation-play-state: paused;\n        -moz-animation-play-state: paused;\n      }\n      @-moz-keyframes spin {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(360deg);\n        }\n      }\n      @-moz-keyframes spinoff {\n        0% {\n          -moz-transform: rotate(0deg);\n        }\n        100% {\n          -moz-transform: rotate(-360deg);\n        }\n      }\n      @-webkit-keyframes spin {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(360deg);\n        }\n      }\n      @-webkit-keyframes spinoff {\n        0% {\n          -webkit-transform: rotate(0deg);\n        }\n        100% {\n          -webkit-transform: rotate(-360deg);\n        }\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]
          }];
        }, {
          isBuffering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-buffering']
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/buffering.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgBufferingModule = function VgBufferingModule() {
        _classCallCheck(this, VgBufferingModule);
      };

      VgBufferingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VgBufferingModule
      });
      VgBufferingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VgBufferingModule_Factory(t) {
          return new (t || VgBufferingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgBufferingModule, {
          declarations: function declarations() {
            return [VgBufferingComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]];
          },
          exports: function exports() {
            return [VgBufferingComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgBufferingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]],
            declarations: [VgBufferingComponent],
            exports: [VgBufferingComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: videogular-ngx-videogular-buffering.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=videogular-ngx-videogular-buffering.js.map

      /***/

    },

    /***/
    "cqME":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-overlay-play.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: VgOverlayPlayComponent, VgOverlayPlayModule */

    /***/
    function cqME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgOverlayPlayComponent", function () {
        return VgOverlayPlayComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgOverlayPlayModule", function () {
        return VgOverlayPlayModule;
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


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "4w57");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/vg-overlay-play.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgOverlayPlayComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} fsAPI
         * @param {?} controlsHidden
         */
        function VgOverlayPlayComponent(ref, API, fsAPI, controlsHidden) {
          _classCallCheck(this, VgOverlayPlayComponent);

          this.API = API;
          this.fsAPI = fsAPI;
          this.controlsHidden = controlsHidden;
          this.isNativeFullscreen = false;
          this.areControlsHidden = false;
          this.subscriptions = [];
          this.isBuffering = false;
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgOverlayPlayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this14.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            var _this15 = this;

            this.target = this.API.getMediaById(this.vgFor);
            this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
            this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
            this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(
            /**
            * @param {?} isBuffering
            * @return {?}
            */
            function (isBuffering) {
              return _this15.onUpdateBuffer(isBuffering);
            }));
          }
          /**
           * @param {?} isBuffering
           * @return {?}
           */

        }, {
          key: "onUpdateBuffer",
          value: function onUpdateBuffer(isBuffering) {
            this.isBuffering = isBuffering;
          }
          /**
           * @param {?} fsState
           * @return {?}
           */

        }, {
          key: "onChangeFullscreen",
          value: function onChangeFullscreen(fsState) {
            if (this.fsAPI.nativeFullscreen) {
              this.isNativeFullscreen = fsState;
            }
          }
          /**
           * @param {?} hidden
           * @return {?}
           */

        }, {
          key: "onHideControls",
          value: function onHideControls(hidden) {
            this.areControlsHidden = hidden;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick() {
            /** @type {?} */
            var state = this.getState();

            switch (state) {
              case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PLAYING:
                this.target.pause();
                break;

              case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PAUSED:
              case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_ENDED:
                this.target.play();
                break;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getState",
          value: function getState() {
            /** @type {?} */
            var state = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PAUSED;

            if (this.target) {
              if (this.target.state instanceof Array) {
                for (var i = 0, l = this.target.state.length; i < l; i++) {
                  if (this.target.state[i] === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PLAYING) {
                    state = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgStates"].VG_PLAYING;
                    break;
                  }
                }
              } else {
                state = this.target.state;
              }
            }

            return state;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgOverlayPlayComponent;
      }();

      VgOverlayPlayComponent.ɵfac = function VgOverlayPlayComponent_Factory(t) {
        return new (t || VgOverlayPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgControlsHiddenService"]));
      };

      VgOverlayPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgOverlayPlayComponent,
        selectors: [["vg-overlay-play"]],
        hostVars: 2,
        hostBindings: function VgOverlayPlayComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgOverlayPlayComponent_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-buffering", ctx.isBuffering);
          }
        },
        inputs: {
          vgFor: "vgFor"
        },
        decls: 2,
        vars: 6,
        consts: [[1, "vg-overlay-play"], [1, "overlay-play-container"]],
        template: function VgOverlayPlayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("native-fullscreen", ctx.isNativeFullscreen)("controls-hidden", ctx.areControlsHidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-play_arrow", ctx.getState() !== "playing");
          }
        },
        styles: ["\n      vg-overlay-play {\n        z-index: 200;\n      }\n      vg-overlay-play.is-buffering {\n        display: none;\n      }\n      vg-overlay-play .vg-overlay-play {\n        transition: all 0.5s;\n        cursor: pointer;\n        position: absolute;\n        display: block;\n        color: white;\n        width: 100%;\n        height: 100%;\n        font-size: 80px;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n      vg-overlay-play\n        .vg-overlay-play\n        .overlay-play-container.vg-icon-play_arrow {\n        pointer-events: none;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 80px;\n      }\n      vg-overlay-play .vg-overlay-play:hover {\n        filter: alpha(opacity=100);\n        opacity: 1;\n      }\n      vg-overlay-play\n        .vg-overlay-play:hover\n        .overlay-play-container.vg-icon-play_arrow:before {\n        transform: scale(1.2);\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgOverlayPlayComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenApiService"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgControlsHiddenService"]
        }];
      };

      VgOverlayPlayComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isBuffering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.is-buffering']
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgOverlayPlayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-overlay-play',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<div\n    class=\"vg-overlay-play\"\n    [class.native-fullscreen]=\"isNativeFullscreen\"\n    [class.controls-hidden]=\"areControlsHidden\"\n  >\n    <div\n      class=\"overlay-play-container\"\n      [class.vg-icon-play_arrow]=\"getState() !== 'playing'\"\n    ></div>\n  </div>",
            styles: ["\n      vg-overlay-play {\n        z-index: 200;\n      }\n      vg-overlay-play.is-buffering {\n        display: none;\n      }\n      vg-overlay-play .vg-overlay-play {\n        transition: all 0.5s;\n        cursor: pointer;\n        position: absolute;\n        display: block;\n        color: white;\n        width: 100%;\n        height: 100%;\n        font-size: 80px;\n        filter: alpha(opacity=60);\n        opacity: 0.6;\n      }\n      vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n        cursor: none;\n      }\n      vg-overlay-play\n        .vg-overlay-play\n        .overlay-play-container.vg-icon-play_arrow {\n        pointer-events: none;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 80px;\n      }\n      vg-overlay-play .vg-overlay-play:hover {\n        filter: alpha(opacity=100);\n        opacity: 1;\n      }\n      vg-overlay-play\n        .vg-overlay-play:hover\n        .overlay-play-container.vg-icon-play_arrow:before {\n        transform: scale(1.2);\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgApiService"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgFullscreenApiService"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgControlsHiddenService"]
          }];
        }, {
          isBuffering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-buffering']
          }],

          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/overlay-play.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgOverlayPlayModule = function VgOverlayPlayModule() {
        _classCallCheck(this, VgOverlayPlayModule);
      };

      VgOverlayPlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VgOverlayPlayModule
      });
      VgOverlayPlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VgOverlayPlayModule_Factory(t) {
          return new (t || VgOverlayPlayModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgOverlayPlayModule, {
          declarations: function declarations() {
            return [VgOverlayPlayComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]];
          },
          exports: function exports() {
            return [VgOverlayPlayComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgOverlayPlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_2__["VgCoreModule"]],
            declarations: [VgOverlayPlayComponent],
            exports: [VgOverlayPlayComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: videogular-ngx-videogular-overlay-play.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=videogular-ngx-videogular-overlay-play.js.map

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
            var _this16 = this;

            // tslint:disable-next-line:no-shadowed-variable
            var delay = typeof networkDelay === 'number' ? networkDelay : this.networkDelay;
            var processedDataSource; // If no network delay, then don't show shell

            if (delay === 0) {
              processedDataSource = dataSourceObservable;
            } else {
              processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
            }

            processedDataSource.subscribe(function (dataValue) {
              _this16.timeline.next(dataValue);
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
    "pXHv":
    /*!**********************************************************!*\
      !*** ./src/app/video-playlist/video-playlist.service.ts ***!
      \**********************************************************/

    /*! exports provided: VideoPlaylistService */

    /***/
    function pXHv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlaylistService", function () {
        return VideoPlaylistService;
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


      var _video_playlist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./video-playlist.model */
      "PTlW");
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var VideoPlaylistService = /*#__PURE__*/function () {
        function VideoPlaylistService(platformId, transferStateHelper, http) {
          _classCallCheck(this, VideoPlaylistService);

          this.platformId = platformId;
          this.transferStateHelper = transferStateHelper;
          this.http = http;
        }

        _createClass(VideoPlaylistService, [{
          key: "getVideoPlaylistDataSource",
          value: function getVideoPlaylistDataSource() {
            var rawDataSource = this.http.get('./assets/sample-data/video-playlist/video-playlist.json'); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('video-playlist-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getVideoPlaylistStore",
          value: function getVideoPlaylistStore(dataSource) {
            // Use cache if available
            if (!this.videoPlaylistDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = new _video_playlist_model__WEBPACK_IMPORTED_MODULE_2__["VideoPlaylistModel"]();
              this.videoPlaylistDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
              // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.videoPlaylistDataStore.load(dataSource, 0);
              } else {
                // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.videoPlaylistDataStore.load(dataSource);
              }
            }

            return this.videoPlaylistDataStore;
          }
        }]);

        return VideoPlaylistService;
      }();

      VideoPlaylistService.ɵfac = function VideoPlaylistService_Factory(t) {
        return new (t || VideoPlaylistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_4__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      VideoPlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VideoPlaylistService,
        factory: VideoPlaylistService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPlaylistService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_4__["TransferStateHelper"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "v2j/":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@videogular/ngx-videogular/__ivy_ngcc__/fesm2015/videogular-ngx-videogular-controls.js ***!
      \*************************************************************************************************************/

    /*! exports provided: VgControlsComponent, VgControlsModule, VgFullscreenComponent, VgMuteComponent, VgPlayPauseComponent, VgPlaybackButtonComponent, VgQualitySelectorComponent, VgScrubBarBufferingTimeComponent, VgScrubBarComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent, VgTimeDisplayComponent, VgTrackSelectorComponent, VgUtcPipe, VgVolumeComponent */

    /***/
    function v2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgControlsComponent", function () {
        return VgControlsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgControlsModule", function () {
        return VgControlsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgFullscreenComponent", function () {
        return VgFullscreenComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgMuteComponent", function () {
        return VgMuteComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgPlayPauseComponent", function () {
        return VgPlayPauseComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgPlaybackButtonComponent", function () {
        return VgPlaybackButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgQualitySelectorComponent", function () {
        return VgQualitySelectorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgScrubBarBufferingTimeComponent", function () {
        return VgScrubBarBufferingTimeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgScrubBarComponent", function () {
        return VgScrubBarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgScrubBarCuePointsComponent", function () {
        return VgScrubBarCuePointsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgScrubBarCurrentTimeComponent", function () {
        return VgScrubBarCurrentTimeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgTimeDisplayComponent", function () {
        return VgTimeDisplayComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgTrackSelectorComponent", function () {
        return VgTrackSelectorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgUtcPipe", function () {
        return VgUtcPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VgVolumeComponent", function () {
        return VgVolumeComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "4w57");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-controls/vg-controls.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["*"];
      var _c1 = ["volumeBar"];

      var _c2 = function _c2(a0) {
        return {
          dragging: a0
        };
      };

      function VgTrackSelectorComponent_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var track_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", track_r1.id)("selected", track_r1.selected === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", track_r1.label, " ");
        }
      }

      function VgTimeDisplayComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function VgTimeDisplayComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "vgUtc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.getTime(), ctx_r1.vgFormat));
        }
      }

      function VgQualitySelectorComponent_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bitrate_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bitrate_r1.qualityIndex)("selected", bitrate_r1.qualityIndex === (ctx_r0.bitrateSelected == null ? null : ctx_r0.bitrateSelected.qualityIndex));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bitrate_r1.label, " ");
        }
      }

      function VgScrubBarCuePointsComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
        }

        if (rf & 2) {
          var cp_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", cp_r1.$$style == null ? null : cp_r1.$$style.width)("left", cp_r1.$$style == null ? null : cp_r1.$$style.left);
        }
      }

      function VgScrubBarCurrentTimeComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
        }
      }

      var VgControlsComponent = /*#__PURE__*/function () {
        // @ts-ignore

        /**
         * @param {?} API
         * @param {?} ref
         * @param {?} hidden
         */
        function VgControlsComponent(API, ref, hidden) {
          _classCallCheck(this, VgControlsComponent);

          this.API = API;
          this.hidden = hidden;
          this.isAdsPlaying = 'initial';
          this.hideControls = false;
          this.vgAutohide = false;
          this.vgAutohideTime = 3;
          this.subscriptions = [];
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgControlsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.API.videogularElement, 'mousemove');
            this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
            this.touchStart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.API.videogularElement, 'touchstart');
            this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this17.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
            this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
            this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
            this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
            this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.vgAutohide) {
              this.hide();
            } else {
              this.show();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlay",
          value: function onPlay() {
            if (this.vgAutohide) {
              this.hide();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPause",
          value: function onPause() {
            clearTimeout(this.timer);
            this.hideControls = false;
            this.hidden.state(false);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onStartAds",
          value: function onStartAds() {
            this.isAdsPlaying = 'none';
          }
          /**
           * @return {?}
           */

        }, {
          key: "onEndAds",
          value: function onEndAds() {
            this.isAdsPlaying = 'initial';
          }
          /**
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (this.vgAutohide) {
              clearTimeout(this.timer);
              this.hideAsync();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            clearTimeout(this.timer);
            this.hideControls = false;
            this.hidden.state(false);

            if (this.vgAutohide) {
              this.hideAsync();
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "hideAsync",
          value: function hideAsync() {
            var _this18 = this;

            if (this.API.state === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PLAYING) {
              this.timer = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this18.hideControls = true;

                _this18.hidden.state(true);
              }, this.vgAutohideTime * 1000);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgControlsComponent;
      }();

      VgControlsComponent.ɵfac = function VgControlsComponent_Factory(t) {
        return new (t || VgControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"]));
      };

      VgControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgControlsComponent,
        selectors: [["vg-controls"]],
        hostVars: 4,
        hostBindings: function VgControlsComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("pointer-events", ctx.isAdsPlaying);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.hideControls);
          }
        },
        inputs: {
          vgAutohide: "vgAutohide",
          vgAutohideTime: "vgAutohideTime",
          vgFor: "vgFor"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function VgControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: ["\n      vg-controls {\n        position: absolute;\n        display: flex;\n        width: 100%;\n        height: 50px;\n        z-index: 300;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        -webkit-transition: bottom 1s;\n        -khtml-transition: bottom 1s;\n        -moz-transition: bottom 1s;\n        -ms-transition: bottom 1s;\n        transition: bottom 1s;\n      }\n      vg-controls.hide {\n        bottom: -50px;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgControlsComponent.ctorParameters = function () {
        return [{
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"]
        }];
      };

      VgControlsComponent.propDecorators = {
        isAdsPlaying: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.pointer-events']
        }],
        hideControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.hide']
        }],
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgAutohide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgAutohideTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-controls',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<ng-content></ng-content>",
            styles: ["\n      vg-controls {\n        position: absolute;\n        display: flex;\n        width: 100%;\n        height: 50px;\n        z-index: 300;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        -webkit-transition: bottom 1s;\n        -khtml-transition: bottom 1s;\n        -moz-transition: bottom 1s;\n        -ms-transition: bottom 1s;\n        transition: bottom 1s;\n      }\n      vg-controls.hide {\n        bottom: -50px;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"]
          }];
        }, {
          isAdsPlaying: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.pointer-events']
          }],
          hideControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.hide']
          }],
          vgAutohide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgAutohideTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-volume/vg-volume.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgVolumeComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgVolumeComponent(ref, API) {
          _classCallCheck(this, VgVolumeComponent);

          this.API = API;
          this.subscriptions = [];
          this.elem = ref.nativeElement;
          this.isDragging = false;
        }
        /**
         * @return {?}
         */


        _createClass(VgVolumeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this19.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
            this.ariaValue = this.getVolume() * 100;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick(event) {
            this.setVolume(this.calculateVolume(event.clientX));
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            this.mouseDownPosX = event.clientX;
            this.isDragging = true;
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDrag",
          value: function onDrag(event) {
            if (this.isDragging) {
              this.setVolume(this.calculateVolume(event.clientX));
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onStopDrag",
          value: function onStopDrag(event) {
            if (this.isDragging) {
              this.isDragging = false;

              if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
              }
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "arrowAdjustVolume",
          value: function arrowAdjustVolume(event) {
            if (event.keyCode === 38 || event.keyCode === 39) {
              event.preventDefault();
              this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 + 10)));
            } else if (event.keyCode === 37 || event.keyCode === 40) {
              event.preventDefault();
              this.setVolume(Math.max(0, Math.min(100, this.getVolume() * 100 - 10)));
            }
          }
          /**
           * @param {?} mousePosX
           * @return {?}
           */

        }, {
          key: "calculateVolume",
          value: function calculateVolume(mousePosX) {
            /** @type {?} */
            var recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
            /** @type {?} */

            var volumeBarOffsetLeft = recObj.left;
            /** @type {?} */

            var volumeBarWidth = recObj.width;
            return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
          }
          /**
           * @param {?} vol
           * @return {?}
           */

        }, {
          key: "setVolume",
          value: function setVolume(vol) {
            this.target.volume = Math.max(0, Math.min(1, vol / 100));
            this.ariaValue = this.target.volume * 100;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getVolume",
          value: function getVolume() {
            return this.target ? this.target.volume : 0;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgVolumeComponent;
      }();

      VgVolumeComponent.ɵfac = function VgVolumeComponent_Factory(t) {
        return new (t || VgVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgVolumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgVolumeComponent,
        selectors: [["vg-volume"]],
        viewQuery: function VgVolumeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.volumeBarRef = _t.first);
          }
        },
        hostBindings: function VgVolumeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function VgVolumeComponent_mousemove_HostBindingHandler($event) {
              return ctx.onDrag($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function VgVolumeComponent_mouseup_HostBindingHandler($event) {
              return ctx.onStopDrag($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function VgVolumeComponent_keydown_HostBindingHandler($event) {
              return ctx.arrowAdjustVolume($event);
            });
          }
        },
        inputs: {
          vgFor: "vgFor"
        },
        decls: 5,
        vars: 9,
        consts: [["tabindex", "0", "role", "slider", "aria-label", "volume level", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", "aria-orientation", "horizontal", 1, "volumeBar", 3, "click", "mousedown"], ["volumeBar", ""], [1, "volumeBackground", 3, "ngClass"], [1, "volumeValue"], [1, "volumeKnob"]],
        template: function VgVolumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgVolumeComponent_Template_div_click_0_listener($event) {
              return ctx.onClick($event);
            })("mousedown", function VgVolumeComponent_Template_div_mousedown_0_listener($event) {
              return ctx.onMouseDown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.ariaValue)("aria-valuetext", ctx.ariaValue + "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.isDragging));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getVolume() * (100 - 15) + "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.getVolume() * (100 - 15) + "%");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["\n      vg-volume {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 100px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-volume .volumeBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n      }\n      vg-volume .volumeBackground {\n        display: flex;\n        flex-grow: 1;\n        height: 5px;\n        pointer-events: none;\n        background-color: #333;\n      }\n      vg-volume .volumeValue {\n        display: flex;\n        height: 5px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeKnob {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-radius: 15px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeBackground.dragging .volumeValue,\n      vg-volume .volumeBackground.dragging .volumeKnob {\n        transition: none;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgVolumeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgVolumeComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        volumeBarRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['volumeBar', {
            "static": true
          }]
        }],
        onDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }],
        onStopDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup', ['$event']]
        }],
        arrowAdjustVolume: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgVolumeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-volume',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div\n      #volumeBar\n      class=\"volumeBar\"\n      tabindex=\"0\"\n      role=\"slider\"\n      aria-label=\"volume level\"\n      aria-level=\"polite\"\n      [attr.aria-valuenow]=\"ariaValue\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      aria-orientation=\"horizontal\"\n      [attr.aria-valuetext]=\"ariaValue + '%'\"\n      (click)=\"onClick($event)\"\n      (mousedown)=\"onMouseDown($event)\"\n    >\n      <div class=\"volumeBackground\" [ngClass]=\"{ dragging: isDragging }\">\n        <div\n          class=\"volumeValue\"\n          [style.width]=\"getVolume() * (100 - 15) + '%'\"\n        ></div>\n        <div\n          class=\"volumeKnob\"\n          [style.left]=\"getVolume() * (100 - 15) + '%'\"\n        ></div>\n      </div>\n    </div>\n  ",
            styles: ["\n      vg-volume {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 100px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-volume .volumeBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n      }\n      vg-volume .volumeBackground {\n        display: flex;\n        flex-grow: 1;\n        height: 5px;\n        pointer-events: none;\n        background-color: #333;\n      }\n      vg-volume .volumeValue {\n        display: flex;\n        height: 5px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeKnob {\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-radius: 15px;\n        pointer-events: none;\n        background-color: #fff;\n        transition: all 0.2s ease-out;\n      }\n      vg-volume .volumeBackground.dragging .volumeValue,\n      vg-volume .volumeBackground.dragging .volumeKnob {\n        transition: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          /**
           * @param {?} event
           * @return {?}
           */
          onDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onStopDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          arrowAdjustVolume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          volumeBarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['volumeBar', {
              "static": true
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-track-selector/vg-track-selector.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function Option() {}

      if (false) {}

      var VgTrackSelectorComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgTrackSelectorComponent(ref, API) {
          _classCallCheck(this, VgTrackSelectorComponent);

          this.API = API;
          this.subscriptions = [];
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgTrackSelectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this20.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
            /** @type {?} */

            var subs = Array.from(
            /** @type {?} */
            this.API.getMasterMedia().elem.children).filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.tagName === 'TRACK';
            }).filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.kind === 'subtitles';
            }).map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return {
                label: item.label,
                selected: item["default"] === true,
                id: item.srclang
              };
            });
            this.tracks = [].concat(_toConsumableArray(subs), [{
              id: null,
              label: 'Off',
              selected: subs.every(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item.selected === false;
              })
            }]);
            /** @type {?} */

            var track = this.tracks.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.selected === true;
            })[0];
            this.trackSelected = track.id;
            this.ariaValue = track.label;
          }
          /**
           * @param {?} trackId
           * @return {?}
           */

        }, {
          key: "selectTrack",
          value: function selectTrack(trackId) {
            var _this21 = this;

            this.trackSelected = trackId === 'null' ? null : trackId;
            this.ariaValue = 'No track selected';
            Array.from(
            /** @type {?} */
            this.API.getMasterMedia().elem.textTracks).forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (item.language === trackId) {
                _this21.ariaValue = item.label;
                item.mode = 'showing';
              } else {
                item.mode = 'hidden';
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgTrackSelectorComponent;
      }();

      VgTrackSelectorComponent.ɵfac = function VgTrackSelectorComponent_Factory(t) {
        return new (t || VgTrackSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgTrackSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgTrackSelectorComponent,
        selectors: [["vg-track-selector"]],
        inputs: {
          vgFor: "vgFor"
        },
        decls: 5,
        vars: 5,
        consts: [[1, "container"], [1, "track-selected"], ["tabindex", "0", "aria-label", "track selector", 1, "trackSelector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
        template: function VgTrackSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VgTrackSelectorComponent_Template_select_change_3_listener($event) {
              return ctx.selectTrack($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VgTrackSelectorComponent_option_4_Template, 2, 3, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-closed_caption", !ctx.trackSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.trackSelected || "", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tracks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n      vg-track-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-track-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-track-selector select.trackSelector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-track-selector select.trackSelector::-ms-expand {\n        display: none;\n      }\n      vg-track-selector select.trackSelector option {\n        color: #000;\n      }\n      vg-track-selector .track-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-track-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgTrackSelectorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgTrackSelectorComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgTrackSelectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-track-selector',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"container\">\n      <div\n        class=\"track-selected\"\n        [class.vg-icon-closed_caption]=\"!trackSelected\"\n      >\n        {{ trackSelected || '' }}\n      </div>\n      <select\n        class=\"trackSelector\"\n        (change)=\"selectTrack($event.target.value)\"\n        tabindex=\"0\"\n        aria-label=\"track selector\"\n        [attr.aria-valuetext]=\"ariaValue\"\n      >\n        <option\n          *ngFor=\"let track of tracks\"\n          [value]=\"track.id\"\n          [selected]=\"track.selected === true\"\n        >\n          {{ track.label }}\n        </option>\n      </select>\n    </div>\n  ",
            styles: ["\n      vg-track-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-track-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-track-selector select.trackSelector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-track-selector select.trackSelector::-ms-expand {\n        display: none;\n      }\n      vg-track-selector select.trackSelector option {\n        color: #000;\n      }\n      vg-track-selector .track-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-track-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-time-display/vg-time-display.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // Workaround until we can use UTC with Angular Date Pipe


      var VgUtcPipe = /*#__PURE__*/function () {
        function VgUtcPipe() {
          _classCallCheck(this, VgUtcPipe);
        }

        _createClass(VgUtcPipe, [{
          key: "transform",

          /**
           * @param {?} value
           * @param {?} format
           * @return {?}
           */
          value: function transform(value, format) {
            /** @type {?} */
            var date = new Date(value);
            /** @type {?} */

            var result = format;
            /** @type {?} */

            var ss = date.getUTCSeconds();
            /** @type {?} */

            var mm = date.getUTCMinutes();
            /** @type {?} */

            var hh = date.getUTCHours();

            if (ss < 10) {
              ss = '0' + ss;
            }

            if (mm < 10) {
              mm = '0' + mm;
            }

            if (hh < 10) {
              hh = '0' + hh;
            }

            result = result.replace(/ss/g,
            /** @type {?} */
            ss);
            result = result.replace(/mm/g,
            /** @type {?} */
            mm);
            result = result.replace(/hh/g,
            /** @type {?} */
            hh);
            return result;
          }
        }]);

        return VgUtcPipe;
      }();

      VgUtcPipe.ɵfac = function VgUtcPipe_Factory(t) {
        return new (t || VgUtcPipe)();
      };

      VgUtcPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "vgUtc",
        type: VgUtcPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgUtcPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'vgUtc'
          }]
        }], null, null);
      })();

      var VgTimeDisplayComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgTimeDisplayComponent(ref, API) {
          _classCallCheck(this, VgTimeDisplayComponent);

          this.API = API;
          this.vgProperty = 'current';
          this.vgFormat = 'mm:ss';
          this.subscriptions = [];
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgTimeDisplayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this22.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getTime",
          value: function getTime() {
            /** @type {?} */
            var t = 0;

            if (this.target) {
              t = Math.round(this.target.time[this.vgProperty]);
              t = isNaN(t) || this.target.isLive ? 0 : t;
            }

            return t;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgTimeDisplayComponent;
      }();

      VgTimeDisplayComponent.ɵfac = function VgTimeDisplayComponent_Factory(t) {
        return new (t || VgTimeDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgTimeDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgTimeDisplayComponent,
        selectors: [["vg-time-display"]],
        inputs: {
          vgProperty: "vgProperty",
          vgFormat: "vgFormat",
          vgFor: "vgFor"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function VgTimeDisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VgTimeDisplayComponent_span_0_Template, 2, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgTimeDisplayComponent_span_1_Template, 3, 4, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.target == null ? null : ctx.target.isLive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.target == null ? null : ctx.target.isLive));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        pipes: [VgUtcPipe],
        styles: ["\n      vg-time-display {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 60px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        pointer-events: none;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgTimeDisplayComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgTimeDisplayComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgProperty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgTimeDisplayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-time-display',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <span *ngIf=\"target?.isLive\">LIVE</span>\n    <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc: vgFormat }}</span>\n    <ng-content></ng-content>\n  ",
            styles: ["\n      vg-time-display {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 60px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        pointer-events: none;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          vgProperty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgScrubBarComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} vgControlsHiddenState
         */
        function VgScrubBarComponent(ref, API, vgControlsHiddenState) {
          var _this23 = this;

          _classCallCheck(this, VgScrubBarComponent);

          this.API = API;
          this.hideScrubBar = false;
          this.vgSlider = true;
          this.isSeeking = false;
          this.wasPlaying = false;
          this.subscriptions = [];
          this.elem = ref.nativeElement;
          this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(
          /**
          * @param {?} hide
          * @return {?}
          */
          function (hide) {
            return _this23.onHideScrubBar(hide);
          }));
        }
        /**
         * @return {?}
         */


        _createClass(VgScrubBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this24.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "seekStart",
          value: function seekStart() {
            if (this.target.canPlay) {
              this.isSeeking = true;

              if (this.target.state === _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PLAYING) {
                this.wasPlaying = true;
              }

              this.target.pause();
            }
          }
          /**
           * @protected
           * @param {?} offset
           * @return {?}
           */

        }, {
          key: "seekMove",
          value: function seekMove(offset) {
            if (this.isSeeking) {
              /** @type {?} */
              var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
              this.target.time.current = percentage * this.target.time.total / 100;
              this.target.seekTime(percentage, true);
            }
          }
          /**
           * @protected
           * @param {?} offset
           * @return {?}
           */

        }, {
          key: "seekEnd",
          value: function seekEnd(offset) {
            this.isSeeking = false;

            if (this.target.canPlay) {
              /** @type {?} */
              var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
              this.target.seekTime(percentage, true);

              if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
              }
            }
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "touchEnd",
          value: function touchEnd() {
            this.isSeeking = false;

            if (this.wasPlaying) {
              this.wasPlaying = false;
              this.target.play();
            }
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "getTouchOffset",
          value: function getTouchOffset(event) {
            /** @type {?} */
            var offsetLeft = 0;
            /** @type {?} */

            var element = event.target;

            while (element) {
              offsetLeft += element.offsetLeft;
              element = element.offsetParent;
            }

            return event.touches[0].pageX - offsetLeft;
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onMouseDownScrubBar",
          value: function onMouseDownScrubBar($event) {
            if (this.target) {
              if (!this.target.isLive) {
                if (!this.vgSlider) {
                  this.seekEnd($event.offsetX);
                } else {
                  this.seekStart();
                }
              }
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onMouseMoveScrubBar",
          value: function onMouseMoveScrubBar($event) {
            if (this.target) {
              if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
              }
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onMouseUpScrubBar",
          value: function onMouseUpScrubBar($event) {
            if (this.target) {
              if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
              }
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onTouchStartScrubBar",
          value: function onTouchStartScrubBar($event) {
            if (this.target) {
              if (!this.target.isLive) {
                if (!this.vgSlider) {
                  this.seekEnd(this.getTouchOffset($event));
                } else {
                  this.seekStart();
                }
              }
            }
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "onTouchMoveScrubBar",
          value: function onTouchMoveScrubBar($event) {
            if (this.target) {
              if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
              }
            }
          } // @ts-ignore

          /**
           * @param {?} _$event
           * @return {?}
           */

        }, {
          key: "onTouchCancelScrubBar",
          value: function onTouchCancelScrubBar(_$event) {
            if (this.target) {
              if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
              }
            }
          } // @ts-ignore

          /**
           * @param {?} _$event
           * @return {?}
           */

        }, {
          key: "onTouchEndScrubBar",
          value: function onTouchEndScrubBar(_$event) {
            if (this.target) {
              if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
              }
            }
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "arrowAdjustVolume",
          value: function arrowAdjustVolume(event) {
            if (this.target) {
              if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
              } else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getPercentage",
          value: function getPercentage() {
            return this.target ? Math.round(this.target.time.current * 100 / this.target.time.total) + '%' : '0%';
          }
          /**
           * @param {?} hide
           * @return {?}
           */

        }, {
          key: "onHideScrubBar",
          value: function onHideScrubBar(hide) {
            this.hideScrubBar = hide;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgScrubBarComponent;
      }();

      VgScrubBarComponent.ɵfac = function VgScrubBarComponent_Factory(t) {
        return new (t || VgScrubBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"]));
      };

      VgScrubBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgScrubBarComponent,
        selectors: [["vg-scrub-bar"]],
        hostVars: 2,
        hostBindings: function VgScrubBarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function VgScrubBarComponent_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDownScrubBar($event);
            })("mousemove", function VgScrubBarComponent_mousemove_HostBindingHandler($event) {
              return ctx.onMouseMoveScrubBar($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function VgScrubBarComponent_mouseup_HostBindingHandler($event) {
              return ctx.onMouseUpScrubBar($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchstart", function VgScrubBarComponent_touchstart_HostBindingHandler($event) {
              return ctx.onTouchStartScrubBar($event);
            })("touchmove", function VgScrubBarComponent_touchmove_HostBindingHandler($event) {
              return ctx.onTouchMoveScrubBar($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchcancel", function VgScrubBarComponent_touchcancel_HostBindingHandler($event) {
              return ctx.onTouchCancelScrubBar($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function VgScrubBarComponent_touchend_HostBindingHandler($event) {
              return ctx.onTouchEndScrubBar($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function VgScrubBarComponent_keydown_HostBindingHandler($event) {
              return ctx.arrowAdjustVolume($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.hideScrubBar);
          }
        },
        inputs: {
          vgSlider: "vgSlider",
          vgFor: "vgFor"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 2,
        consts: [["tabindex", "0", "role", "slider", "aria-label", "scrub bar", "aria-level", "polite", "aria-valuemin", "0", "aria-valuemax", "100", 1, "scrubBar"]],
        template: function VgScrubBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.getPercentage())("aria-valuetext", ctx.getPercentage());
          }
        },
        styles: ["\n      vg-scrub-bar {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        position: absolute;\n        width: 100%;\n        height: 5px;\n        bottom: 50px;\n        margin: 0;\n        cursor: pointer;\n        align-items: center;\n        background: rgba(0, 0, 0, 0.75);\n        z-index: 250;\n        -webkit-transition: bottom 1s, opacity 0.5s;\n        -khtml-transition: bottom 1s, opacity 0.5s;\n        -moz-transition: bottom 1s, opacity 0.5s;\n        -ms-transition: bottom 1s, opacity 0.5s;\n        transition: bottom 1s, opacity 0.5s;\n      }\n      vg-scrub-bar .scrubBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        height: 100%;\n      }\n      vg-controls vg-scrub-bar {\n        position: relative;\n        bottom: 0;\n        background: transparent;\n        height: 50px;\n        flex-grow: 1;\n        flex-basis: 0;\n        margin: 0 10px;\n        -webkit-transition: initial;\n        -khtml-transition: initial;\n        -moz-transition: initial;\n        -ms-transition: initial;\n        transition: initial;\n      }\n      vg-scrub-bar.hide {\n        bottom: 0;\n        opacity: 0;\n      }\n      vg-controls vg-scrub-bar.hide {\n        bottom: initial;\n        opacity: initial;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgScrubBarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"]
        }];
      };

      VgScrubBarComponent.propDecorators = {
        hideScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.hide']
        }],
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseDownScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        onMouseMoveScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }],
        onMouseUpScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:mouseup', ['$event']]
        }],
        onTouchStartScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }],
        onTouchMoveScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchmove', ['$event']]
        }],
        onTouchCancelScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchcancel', ['$event']]
        }],
        onTouchEndScrubBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:touchend', ['$event']]
        }],
        arrowAdjustVolume: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-scrub-bar',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div\n      class=\"scrubBar\"\n      tabindex=\"0\"\n      role=\"slider\"\n      aria-label=\"scrub bar\"\n      aria-level=\"polite\"\n      [attr.aria-valuenow]=\"getPercentage()\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n      [attr.aria-valuetext]=\"getPercentage()\"\n    >\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n      vg-scrub-bar {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        position: absolute;\n        width: 100%;\n        height: 5px;\n        bottom: 50px;\n        margin: 0;\n        cursor: pointer;\n        align-items: center;\n        background: rgba(0, 0, 0, 0.75);\n        z-index: 250;\n        -webkit-transition: bottom 1s, opacity 0.5s;\n        -khtml-transition: bottom 1s, opacity 0.5s;\n        -moz-transition: bottom 1s, opacity 0.5s;\n        -ms-transition: bottom 1s, opacity 0.5s;\n        transition: bottom 1s, opacity 0.5s;\n      }\n      vg-scrub-bar .scrubBar {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        height: 100%;\n      }\n      vg-controls vg-scrub-bar {\n        position: relative;\n        bottom: 0;\n        background: transparent;\n        height: 50px;\n        flex-grow: 1;\n        flex-basis: 0;\n        margin: 0 10px;\n        -webkit-transition: initial;\n        -khtml-transition: initial;\n        -moz-transition: initial;\n        -ms-transition: initial;\n        transition: initial;\n      }\n      vg-scrub-bar.hide {\n        bottom: 0;\n        opacity: 0;\n      }\n      vg-controls vg-scrub-bar.hide {\n        bottom: initial;\n        opacity: initial;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgControlsHiddenService"]
          }];
        }, {
          hideScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.hide']
          }],
          vgSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          onMouseDownScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          onMouseMoveScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          onMouseUpScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          onTouchStartScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart', ['$event']]
          }],

          /**
           * @param {?} $event
           * @return {?}
           */
          onTouchMoveScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
          }],
          // @ts-ignore

          /**
           * @param {?} _$event
           * @return {?}
           */
          onTouchCancelScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchcancel', ['$event']]
          }],
          // @ts-ignore

          /**
           * @param {?} _$event
           * @return {?}
           */
          onTouchEndScrubBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend', ['$event']]
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          arrowAdjustVolume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-quality-selector/vg-quality-selector.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgQualitySelectorComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgQualitySelectorComponent(ref, API) {
          _classCallCheck(this, VgQualitySelectorComponent);

          this.API = API;
          this.onBitrateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = [];
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgQualitySelectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.bitrates.currentValue && changes.bitrates.currentValue.length) {
              this.bitrates.forEach(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return item.label = item.label || Math.round(item.bitrate / 1000).toString();
              });
            }
          }
          /**
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "selectBitrate",
          value: function selectBitrate(index) {
            this.bitrateSelected = this.bitrates[index];
            this.onBitrateChange.emit(this.bitrates[index]);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgQualitySelectorComponent;
      }();

      VgQualitySelectorComponent.ɵfac = function VgQualitySelectorComponent_Factory(t) {
        return new (t || VgQualitySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgQualitySelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgQualitySelectorComponent,
        selectors: [["vg-quality-selector"]],
        inputs: {
          bitrates: "bitrates"
        },
        outputs: {
          onBitrateChange: "onBitrateChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 5,
        consts: [[1, "container"], [1, "quality-selected"], ["tabindex", "0", "aria-label", "quality selector", 1, "quality-selector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
        template: function VgQualitySelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VgQualitySelectorComponent_Template_select_change_3_listener($event) {
              return ctx.selectBitrate($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VgQualitySelectorComponent_option_4_Template, 2, 3, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-hd", !ctx.bitrateSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bitrateSelected == null ? null : ctx.bitrateSelected.label, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bitrates);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n      vg-quality-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-quality-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-quality-selector select.quality-selector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-quality-selector select.quality-selector::-ms-expand {\n        display: none;\n      }\n      vg-quality-selector select.quality-selector option {\n        color: #000;\n      }\n      vg-quality-selector .quality-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-quality-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgQualitySelectorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgQualitySelectorComponent.propDecorators = {
        bitrates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onBitrateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgQualitySelectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-quality-selector',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"container\">\n      <div class=\"quality-selected\" [class.vg-icon-hd]=\"!bitrateSelected\">\n        {{ bitrateSelected?.label }}\n      </div>\n      <select\n        class=\"quality-selector\"\n        (change)=\"selectBitrate($event.target.value)\"\n        tabindex=\"0\"\n        aria-label=\"quality selector\"\n        [attr.aria-valuetext]=\"ariaValue\"\n      >\n        <option\n          *ngFor=\"let bitrate of bitrates\"\n          [value]=\"bitrate.qualityIndex\"\n          [selected]=\"bitrate.qualityIndex === bitrateSelected?.qualityIndex\"\n        >\n          {{ bitrate.label }}\n        </option>\n      </select>\n    </div>\n  ",
            styles: ["\n      vg-quality-selector {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-quality-selector .container {\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        padding: 0;\n        margin: 5px;\n      }\n      vg-quality-selector select.quality-selector {\n        width: 50px;\n        padding: 5px 8px;\n        border: none;\n        background: none;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        color: transparent;\n        font-size: 16px;\n      }\n      vg-quality-selector select.quality-selector::-ms-expand {\n        display: none;\n      }\n      vg-quality-selector select.quality-selector option {\n        color: #000;\n      }\n      vg-quality-selector .quality-selected {\n        position: absolute;\n        width: 100%;\n        height: 50px;\n        top: -6px;\n        text-align: center;\n        text-transform: uppercase;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        padding-top: 2px;\n        pointer-events: none;\n      }\n      vg-quality-selector .vg-icon-closed_caption:before {\n        width: 100%;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          onBitrateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          bitrates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-playback-button/vg-playback-button.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgPlaybackButtonComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} cdr
         */
        function VgPlaybackButtonComponent(ref, API, cdr) {
          _classCallCheck(this, VgPlaybackButtonComponent);

          this.API = API;
          this.cdr = cdr;
          this.subscriptions = [];
          this.ariaValue = 1;
          this.elem = ref.nativeElement;
          this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
          this.playbackIndex = 1;
        }
        /**
         * @return {?}
         */


        _createClass(VgPlaybackButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this25.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick() {
            this.updatePlaybackSpeed();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              this.updatePlaybackSpeed();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "updatePlaybackSpeed",
          value: function updatePlaybackSpeed() {
            this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;

            if (this.target instanceof _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]) {
              this.target.playbackRate = this.playbackValues[this.playbackIndex];
            } else {
              this.target.playbackRate[this.vgFor] = this.playbackValues[this.playbackIndex];
            }

            this.detectChanges();
          }
          /**
           * @return {?}
           */

        }, {
          key: "getPlaybackRate",
          value: function getPlaybackRate() {
            this.ariaValue = this.target ? this.target.playbackRate : 1.0;
            return this.ariaValue;
          }
          /**
           * @return {?}
           */

        }, {
          key: "detectChanges",
          value: function detectChanges() {
            try {
              this.cdr.detectChanges();
            } catch (e) {
              console.warn(e);
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgPlaybackButtonComponent;
      }();

      VgPlaybackButtonComponent.ɵfac = function VgPlaybackButtonComponent_Factory(t) {
        return new (t || VgPlaybackButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      VgPlaybackButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgPlaybackButtonComponent,
        selectors: [["vg-playback-button"]],
        hostBindings: function VgPlaybackButtonComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgPlaybackButtonComponent_click_HostBindingHandler() {
              return ctx.onClick();
            })("keydown", function VgPlaybackButtonComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }
        },
        inputs: {
          playbackValues: "playbackValues",
          vgFor: "vgFor"
        },
        decls: 2,
        vars: 2,
        consts: [["tabindex", "0", "role", "button", "aria-label", "playback speed button", 1, "button"]],
        template: function VgPlaybackButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getPlaybackRate(), "x ");
          }
        },
        styles: ["\n      vg-playback-button {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n      vg-playback-button .button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50px;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgPlaybackButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      VgPlaybackButtonComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        playbackValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlaybackButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-playback-button',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: " <span\n    class=\"button\"\n    tabindex=\"0\"\n    role=\"button\"\n    aria-label=\"playback speed button\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  >\n    {{ getPlaybackRate() }}x\n  </span>",
            styles: ["\n      vg-playback-button {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      }\n      vg-playback-button .button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 50px;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          playbackValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],

          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-play-pause/vg-play-pause.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgPlayPauseComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgPlayPauseComponent(ref, API) {
          _classCallCheck(this, VgPlayPauseComponent);

          this.API = API;
          this.subscriptions = [];
          this.ariaValue = _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PAUSED;
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgPlayPauseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this26.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick() {
            this.playPause();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              this.playPause();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "playPause",
          value: function playPause() {
            /** @type {?} */
            var state = this.getState();

            switch (state) {
              case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PLAYING:
                this.target.pause();
                break;

              case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PAUSED:
              case _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_ENDED:
                this.target.play();
                break;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getState",
          value: function getState() {
            this.ariaValue = this.target ? this.target.state : _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgStates"].VG_PAUSED;
            return this.ariaValue;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgPlayPauseComponent;
      }();

      VgPlayPauseComponent.ɵfac = function VgPlayPauseComponent_Factory(t) {
        return new (t || VgPlayPauseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgPlayPauseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgPlayPauseComponent,
        selectors: [["vg-play-pause"]],
        hostBindings: function VgPlayPauseComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgPlayPauseComponent_click_HostBindingHandler() {
              return ctx.onClick();
            })("keydown", function VgPlayPauseComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }
        },
        inputs: {
          vgFor: "vgFor"
        },
        decls: 1,
        vars: 6,
        consts: [["tabindex", "0", "role", "button", 1, "icon"]],
        template: function VgPlayPauseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-pause", ctx.getState() === "playing")("vg-icon-play_arrow", ctx.getState() === "paused" || ctx.getState() === "ended");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.getState() === "paused" ? "play" : "pause")("aria-valuetext", ctx.ariaValue);
          }
        },
        styles: ["\n      vg-play-pause {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-play-pause .icon {\n        pointer-events: none;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgPlayPauseComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgPlayPauseComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgPlayPauseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-play-pause',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: " <div\n    class=\"icon\"\n    [class.vg-icon-pause]=\"getState() === 'playing'\"\n    [class.vg-icon-play_arrow]=\"\n      getState() === 'paused' || getState() === 'ended'\n    \"\n    tabindex=\"0\"\n    role=\"button\"\n    [attr.aria-label]=\"getState() === 'paused' ? 'play' : 'pause'\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  ></div>",
            styles: ["\n      vg-play-pause {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-play-pause .icon {\n        pointer-events: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-mute/vg-mute.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgMuteComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgMuteComponent(ref, API) {
          _classCallCheck(this, VgMuteComponent);

          this.API = API;
          this.subscriptions = [];
          this.ariaValue = 'unmuted';
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgMuteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this27.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
            this.currentVolume = this.target.volume;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick() {
            this.changeMuteState();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              this.changeMuteState();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "changeMuteState",
          value: function changeMuteState() {
            /** @type {?} */
            var volume = this.getVolume();

            if (volume === 0) {
              if (this.target.volume === 0 && this.currentVolume === 0) {
                this.currentVolume = 1;
              }

              this.target.volume = this.currentVolume;
            } else {
              this.currentVolume = volume;
              this.target.volume = 0;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "getVolume",
          value: function getVolume() {
            /** @type {?} */
            var volume = this.target ? this.target.volume : 0;
            this.ariaValue = volume ? 'unmuted' : 'muted';
            return volume;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgMuteComponent;
      }();

      VgMuteComponent.ɵfac = function VgMuteComponent_Factory(t) {
        return new (t || VgMuteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgMuteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgMuteComponent,
        selectors: [["vg-mute"]],
        hostBindings: function VgMuteComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgMuteComponent_click_HostBindingHandler() {
              return ctx.onClick();
            })("keydown", function VgMuteComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }
        },
        inputs: {
          vgFor: "vgFor"
        },
        decls: 1,
        vars: 9,
        consts: [["tabindex", "0", "role", "button", "aria-label", "mute button", 1, "icon"]],
        template: function VgMuteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-volume_up", ctx.getVolume() >= 0.75)("vg-icon-volume_down", ctx.getVolume() >= 0.25 && ctx.getVolume() < 0.75)("vg-icon-volume_mute", ctx.getVolume() > 0 && ctx.getVolume() < 0.25)("vg-icon-volume_off", ctx.getVolume() === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
          }
        },
        styles: ["\n      vg-mute {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-mute .icon {\n        pointer-events: none;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgMuteComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgMuteComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgMuteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-mute',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: " <div\n    class=\"icon\"\n    [class.vg-icon-volume_up]=\"getVolume() >= 0.75\"\n    [class.vg-icon-volume_down]=\"getVolume() >= 0.25 && getVolume() < 0.75\"\n    [class.vg-icon-volume_mute]=\"getVolume() > 0 && getVolume() < 0.25\"\n    [class.vg-icon-volume_off]=\"getVolume() === 0\"\n    tabindex=\"0\"\n    role=\"button\"\n    aria-label=\"mute button\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  ></div>",
            styles: ["\n      vg-mute {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-mute .icon {\n        pointer-events: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-fullscreen/vg-fullscreen.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgFullscreenComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         * @param {?} fsAPI
         */
        function VgFullscreenComponent(ref, API, fsAPI) {
          _classCallCheck(this, VgFullscreenComponent);

          this.API = API;
          this.fsAPI = fsAPI;
          this.isFullscreen = false;
          this.subscriptions = [];
          this.ariaValue = 'normal mode';
          this.elem = ref.nativeElement;
          this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        }
        /**
         * @return {?}
         */


        _createClass(VgFullscreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this28.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @param {?} fsState
           * @return {?}
           */

        }, {
          key: "onChangeFullscreen",
          value: function onChangeFullscreen(fsState) {
            this.ariaValue = fsState ? 'fullscreen mode' : 'normal mode';
            this.isFullscreen = fsState;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onClick",
          value: function onClick() {
            this.changeFullscreenState();
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            // On press Enter (13) or Space (32)
            if (event.keyCode === 13 || event.keyCode === 32) {
              event.preventDefault();
              this.changeFullscreenState();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "changeFullscreenState",
          value: function changeFullscreenState() {
            /** @type {?} */
            var element = this.target;

            if (this.target instanceof _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]) {
              element = null;
            }

            this.fsAPI.toggleFullscreen(element);
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgFullscreenComponent;
      }();

      VgFullscreenComponent.ɵfac = function VgFullscreenComponent_Factory(t) {
        return new (t || VgFullscreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenApiService"]));
      };

      VgFullscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgFullscreenComponent,
        selectors: [["vg-fullscreen"]],
        hostBindings: function VgFullscreenComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VgFullscreenComponent_click_HostBindingHandler() {
              return ctx.onClick();
            })("keydown", function VgFullscreenComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }
        },
        decls: 1,
        vars: 5,
        consts: [["tabindex", "0", "role", "button", "aria-label", "fullscreen button", 1, "icon"]],
        template: function VgFullscreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vg-icon-fullscreen", !ctx.isFullscreen)("vg-icon-fullscreen_exit", ctx.isFullscreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx.ariaValue);
          }
        },
        styles: ["\n      vg-fullscreen {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-fullscreen .icon {\n        pointer-events: none;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgFullscreenComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenApiService"]
        }];
      };

      VgFullscreenComponent.propDecorators = {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['keydown', ['$event']]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgFullscreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-fullscreen',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: " <div\n    class=\"icon\"\n    [class.vg-icon-fullscreen]=\"!isFullscreen\"\n    [class.vg-icon-fullscreen_exit]=\"isFullscreen\"\n    tabindex=\"0\"\n    role=\"button\"\n    aria-label=\"fullscreen button\"\n    [attr.aria-valuetext]=\"ariaValue\"\n  ></div>",
            styles: ["\n      vg-fullscreen {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        height: 50px;\n        width: 50px;\n        cursor: pointer;\n        color: white;\n        line-height: 50px;\n      }\n      vg-fullscreen .icon {\n        pointer-events: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgFullscreenApiService"]
          }];
        }, {
          /**
           * @return {?}
           */
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],

          /**
           * @param {?} event
           * @return {?}
           */
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgScrubBarBufferingTimeComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgScrubBarBufferingTimeComponent(ref, API) {
          _classCallCheck(this, VgScrubBarBufferingTimeComponent);

          this.API = API;
          this.subscriptions = [];
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgScrubBarBufferingTimeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this29.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getBufferTime",
          value: function getBufferTime() {
            /** @type {?} */
            var bufferTime = '0%';

            if (this.target && this.target.buffer && this.target.buffered.length) {
              if (this.target.time.total === 0) {
                bufferTime = '0%';
              } else {
                bufferTime = this.target.buffer.end / this.target.time.total * 100 + '%';
              }
            }

            return bufferTime;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgScrubBarBufferingTimeComponent;
      }();

      VgScrubBarBufferingTimeComponent.ɵfac = function VgScrubBarBufferingTimeComponent_Factory(t) {
        return new (t || VgScrubBarBufferingTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgScrubBarBufferingTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgScrubBarBufferingTimeComponent,
        selectors: [["vg-scrub-bar-buffering-time"]],
        inputs: {
          vgFor: "vgFor"
        },
        decls: 1,
        vars: 2,
        consts: [[1, "background"]],
        template: function VgScrubBarBufferingTimeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getBufferTime());
          }
        },
        styles: ["\n      vg-scrub-bar-buffering-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-buffering-time .background {\n        background-color: rgba(255, 255, 255, 0.3);\n      }\n      vg-controls vg-scrub-bar-buffering-time {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n      vg-controls vg-scrub-bar-buffering-time .background {\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgScrubBarBufferingTimeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgScrubBarBufferingTimeComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarBufferingTimeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-scrub-bar-buffering-time',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
            styles: ["\n      vg-scrub-bar-buffering-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-buffering-time .background {\n        background-color: rgba(255, 255, 255, 0.3);\n      }\n      vg-controls vg-scrub-bar-buffering-time {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n      vg-controls vg-scrub-bar-buffering-time .background {\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // tslint:disable-next-line: no-conflicting-lifecycle


      var VgScrubBarCuePointsComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgScrubBarCuePointsComponent(ref, API) {
          _classCallCheck(this, VgScrubBarCuePointsComponent);

          this.API = API;
          this.onLoadedMetadataCalled = false;
          this.cuePoints = [];
          this.subscriptions = [];
          this.totalCues = 0;
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgScrubBarCuePointsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this30.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
            /** @type {?} */

            var onTimeUpdate = this.target.subscriptions.loadedMetadata;
            this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));

            if (this.onLoadedMetadataCalled) {
              this.onLoadedMetadata();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onLoadedMetadata",
          value: function onLoadedMetadata() {
            if (this.vgCuePoints) {
              // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
              // See: https://github.com/videogular/videogular2/issues/369
              this.cuePoints = [];

              for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                /** @type {?} */
                var end = this.vgCuePoints[i].endTime >= 0 ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
                /** @type {?} */

                var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                /** @type {?} */

                var position = '0';
                /** @type {?} */

                var percentWidth = '0';

                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                  percentWidth = cuePointDuration * 100 / this.target.time.total + '%';
                  position = this.vgCuePoints[i].startTime * 100 / Math.round(this.target.time.total / 1000) + '%';
                }

                /** @type {?} */
                this.vgCuePoints[i].$$style = {
                  width: percentWidth,
                  left: position
                };
                this.cuePoints.push(this.vgCuePoints[i]);
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "updateCuePoints",
          value: function updateCuePoints() {
            if (!this.target) {
              this.onLoadedMetadataCalled = true;
              return;
            }

            this.onLoadedMetadata();
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.vgCuePoints.currentValue) {
              this.updateCuePoints();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.vgCuePoints) {
              /** @type {?} */
              var changes = this.totalCues !== this.vgCuePoints.length;

              if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgScrubBarCuePointsComponent;
      }();

      VgScrubBarCuePointsComponent.ɵfac = function VgScrubBarCuePointsComponent_Factory(t) {
        return new (t || VgScrubBarCuePointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgScrubBarCuePointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgScrubBarCuePointsComponent,
        selectors: [["vg-scrub-bar-cue-points"]],
        inputs: {
          vgCuePoints: "vgCuePoints",
          vgFor: "vgFor"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 1,
        consts: [[1, "cue-point-container"], ["class", "cue-point", 3, "width", "left", 4, "ngFor", "ngForOf"], [1, "cue-point"]],
        template: function VgScrubBarCuePointsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgScrubBarCuePointsComponent_span_1_Template, 1, 4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuePoints);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n      vg-scrub-bar-cue-points {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-cue-points .cue-point-container .cue-point {\n        position: absolute;\n        height: 5px;\n        background-color: rgba(255, 204, 0, 0.7);\n      }\n      vg-controls vg-scrub-bar-cue-points {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgScrubBarCuePointsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgScrubBarCuePointsComponent.propDecorators = {
        vgCuePoints: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarCuePointsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-scrub-bar-cue-points',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div class=\"cue-point-container\">\n      <span\n        *ngFor=\"let cp of cuePoints\"\n        [style.width]=\"cp.$$style?.width\"\n        [style.left]=\"cp.$$style?.left\"\n        class=\"cue-point\"\n      ></span>\n    </div>\n  ",
            styles: ["\n      vg-scrub-bar-cue-points {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-cue-points .cue-point-container .cue-point {\n        position: absolute;\n        height: 5px;\n        background-color: rgba(255, 204, 0, 0.7);\n      }\n      vg-controls vg-scrub-bar-cue-points {\n        position: absolute;\n        top: calc(50% - 3px);\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          vgCuePoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/components/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var VgScrubBarCurrentTimeComponent = /*#__PURE__*/function () {
        /**
         * @param {?} ref
         * @param {?} API
         */
        function VgScrubBarCurrentTimeComponent(ref, API) {
          _classCallCheck(this, VgScrubBarCurrentTimeComponent);

          this.API = API;
          this.vgSlider = false;
          this.subscriptions = [];
          this.elem = ref.nativeElement;
        }
        /**
         * @return {?}
         */


        _createClass(VgScrubBarCurrentTimeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            if (this.API.isPlayerReady) {
              this.onPlayerReady();
            } else {
              this.subscriptions.push(this.API.playerReadyEvent.subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this31.onPlayerReady();
              }));
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onPlayerReady",
          value: function onPlayerReady() {
            this.target = this.API.getMediaById(this.vgFor);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getPercentage",
          value: function getPercentage() {
            return this.target ? Math.round(this.target.time.current * 100 / this.target.time.total) + '%' : '0%';
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return VgScrubBarCurrentTimeComponent;
      }();

      VgScrubBarCurrentTimeComponent.ɵfac = function VgScrubBarCurrentTimeComponent_Factory(t) {
        return new (t || VgScrubBarCurrentTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]));
      };

      VgScrubBarCurrentTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VgScrubBarCurrentTimeComponent,
        selectors: [["vg-scrub-bar-current-time"]],
        inputs: {
          vgSlider: "vgSlider",
          vgFor: "vgFor"
        },
        decls: 2,
        vars: 3,
        consts: [[1, "background"], ["class", "slider", 4, "ngIf"], [1, "slider"]],
        template: function VgScrubBarCurrentTimeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VgScrubBarCurrentTimeComponent_span_1_Template, 1, 0, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getPercentage());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vgSlider);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n      vg-scrub-bar-current-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-current-time .background {\n        background-color: white;\n      }\n      vg-controls vg-scrub-bar-current-time {\n        position: absolute;\n        top: calc(50% - 3px);\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-controls vg-scrub-bar-current-time .background {\n        border: 1px solid white;\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-scrub-bar-current-time .slider {\n        background: white;\n        height: 15px;\n        width: 15px;\n        border-radius: 50%;\n        box-shadow: 0px 0px 10px black;\n        margin-top: -5px;\n        margin-left: -10px;\n      }\n    "],
        encapsulation: 2
      });
      /** @nocollapse */

      VgScrubBarCurrentTimeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
        }];
      };

      VgScrubBarCurrentTimeComponent.propDecorators = {
        vgFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vgSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgScrubBarCurrentTimeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'vg-scrub-bar-current-time',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div>\n    <span class=\"slider\" *ngIf=\"vgSlider\"></span>",
            styles: ["\n      vg-scrub-bar-current-time {\n        display: flex;\n        width: 100%;\n        height: 5px;\n        pointer-events: none;\n        position: absolute;\n      }\n      vg-scrub-bar-current-time .background {\n        background-color: white;\n      }\n      vg-controls vg-scrub-bar-current-time {\n        position: absolute;\n        top: calc(50% - 3px);\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-controls vg-scrub-bar-current-time .background {\n        border: 1px solid white;\n        -webkit-border-radius: 2px;\n        -moz-border-radius: 2px;\n        border-radius: 2px;\n      }\n      vg-scrub-bar-current-time .slider {\n        background: white;\n        height: 15px;\n        width: 15px;\n        border-radius: 50%;\n        box-shadow: 0px 0px 10px black;\n        margin-top: -5px;\n        margin-left: -10px;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgApiService"]
          }];
        }, {
          vgSlider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          vgFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/controls.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var components = [VgControlsComponent, VgVolumeComponent, VgTrackSelectorComponent, VgTimeDisplayComponent, VgScrubBarComponent, VgQualitySelectorComponent, VgPlaybackButtonComponent, VgPlayPauseComponent, VgMuteComponent, VgFullscreenComponent, VgUtcPipe, VgScrubBarBufferingTimeComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent];

      var VgControlsModule = function VgControlsModule() {
        _classCallCheck(this, VgControlsModule);
      };

      VgControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VgControlsModule
      });
      VgControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VgControlsModule_Factory(t) {
          return new (t || VgControlsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VgControlsModule, {
          declarations: function declarations() {
            return [VgControlsComponent, VgVolumeComponent, VgTrackSelectorComponent, VgTimeDisplayComponent, VgScrubBarComponent, VgQualitySelectorComponent, VgPlaybackButtonComponent, VgPlayPauseComponent, VgMuteComponent, VgFullscreenComponent, VgUtcPipe, VgScrubBarBufferingTimeComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"]];
          },
          exports: function exports() {
            return [VgControlsComponent, VgVolumeComponent, VgTrackSelectorComponent, VgTimeDisplayComponent, VgScrubBarComponent, VgQualitySelectorComponent, VgPlaybackButtonComponent, VgPlayPauseComponent, VgMuteComponent, VgFullscreenComponent, VgUtcPipe, VgScrubBarBufferingTimeComponent, VgScrubBarCuePointsComponent, VgScrubBarCurrentTimeComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VgControlsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"]],
            declarations: [].concat(components),
            exports: [].concat(components)
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: index.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: videogular-ngx-videogular-controls.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=videogular-ngx-videogular-controls.js.map

      /***/

    },

    /***/
    "v9/t":
    /*!*********************************************************!*\
      !*** ./src/app/video-playlist/video-playlist.module.ts ***!
      \*********************************************************/

    /*! exports provided: VideoPlaylistPageModule */

    /***/
    function v9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPlaylistPageModule", function () {
        return VideoPlaylistPageModule;
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


      var _video_playlist_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./video-playlist.page */
      "J1pr");
      /* harmony import */


      var _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./video-playlist.resolver */
      "LCGB");
      /* harmony import */


      var _video_playlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./video-playlist.service */
      "pXHv");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");
      /* harmony import */


      var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @videogular/ngx-videogular/core */
      "4w57");
      /* harmony import */


      var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @videogular/ngx-videogular/controls */
      "v2j/");
      /* harmony import */


      var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @videogular/ngx-videogular/overlay-play */
      "cqME");
      /* harmony import */


      var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @videogular/ngx-videogular/buffering */
      "VKRg");

      var routes = [{
        path: '',
        component: _video_playlist_page__WEBPACK_IMPORTED_MODULE_4__["VideoPlaylistPage"],
        resolve: {
          data: _video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__["VideoPlaylistResolver"]
        }
      }];

      var VideoPlaylistPageModule = function VideoPlaylistPageModule() {
        _classCallCheck(this, VideoPlaylistPageModule);
      };

      VideoPlaylistPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: VideoPlaylistPageModule
      });
      VideoPlaylistPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function VideoPlaylistPageModule_Factory(t) {
          return new (t || VideoPlaylistPageModule)();
        },
        providers: [_video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__["VideoPlaylistResolver"], _video_playlist_service__WEBPACK_IMPORTED_MODULE_6__["VideoPlaylistService"]],
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__["VgBufferingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VideoPlaylistPageModule, {
          declarations: [_video_playlist_page__WEBPACK_IMPORTED_MODULE_4__["VideoPlaylistPage"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__["VgBufferingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VideoPlaylistPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_8__["VgCoreModule"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsModule"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_10__["VgOverlayPlayModule"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_11__["VgBufferingModule"]],
            declarations: [_video_playlist_page__WEBPACK_IMPORTED_MODULE_4__["VideoPlaylistPage"]],
            providers: [_video_playlist_resolver__WEBPACK_IMPORTED_MODULE_5__["VideoPlaylistResolver"], _video_playlist_service__WEBPACK_IMPORTED_MODULE_6__["VideoPlaylistService"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=video-playlist-video-playlist-module-es5.js.map