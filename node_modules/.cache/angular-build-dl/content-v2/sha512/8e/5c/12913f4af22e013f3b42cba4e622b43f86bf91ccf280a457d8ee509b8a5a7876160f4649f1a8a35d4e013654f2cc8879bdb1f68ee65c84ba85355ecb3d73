(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
    /***/
    3:
    /*!*************************************************************************************************************************!*\
      !*** multi ./src/theme/variables.scss ./src/global.scss ./node_modules/@videogular/ngx-videogular/fonts/videogular.css ***!
      \*************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      __webpack_require__(
      /*! C:\Users\Deondre\Documents\GitHub\soled\src\theme\variables.scss */
      "fFqt");

      __webpack_require__(
      /*! C:\Users\Deondre\Documents\GitHub\soled\src\global.scss */
      "8oQk");

      module.exports = __webpack_require__(
      /*! C:\Users\Deondre\Documents\GitHub\soled\node_modules\@videogular\ngx-videogular\fonts\videogular.css */
      "aLI7");
      /***/
    },

    /***/
    "8oQk":
    /*!*************************!*\
      !*** ./src/global.scss ***!
      \*************************/

    /*! no static exports found */

    /***/
    function oQk(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "LboF");

      var content = __webpack_require__(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./global.scss */
      "kTCX");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    "JPst":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function JPst(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "LboF":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function LboF(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "YXXb":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/@videogular/ngx-videogular/fonts/videogular.css ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YXXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../css-loader/dist/runtime/api.js */
      "JPst");
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true); // Module


      ___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:videogular;src:url(videogular.eot?hj1wei);src:url(videogular.eot?hj1wei#iefix) format(\"embedded-opentype\"),url(videogular.ttf?hj1wei) format(\"truetype\"),url(videogular.woff?hj1wei) format(\"woff\"),url(videogular.svg?hj1wei#videogular) format(\"svg\");font-weight:400;font-style:normal}[class*=\" vg-icon-\"],[class^=vg-icon-]{font-family:videogular!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;display:flex;align-items:center;justify-content:center;width:50px;font-size:24px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.vg-icon-closed_caption:before{content:\"\\e006\"}.vg-icon-pause:before{content:\"\\e018\"}.vg-icon-play_arrow:before{content:\"\\e01b\"}.vg-icon-repeat:before{content:\"\\e023\"}.vg-icon-replay:before{content:\"\\e025\"}.vg-icon-skip_next:before{content:\"\\e027\"}.vg-icon-skip_previous:before{content:\"\\e028\"}.vg-icon-stop:before{content:\"\\e02a\"}.vg-icon-volume_down:before{content:\"\\e030\"}.vg-icon-volume_mute:before{content:\"\\e031\"}.vg-icon-volume_off:before{content:\"\\e032\"}.vg-icon-volume_up:before{content:\"\\e033\"}.vg-icon-hd:before{content:\"\\e035\"}.vg-icon-forward_10:before{content:\"\\e038\"}.vg-icon-forward_30:before{content:\"\\e039\"}.vg-icon-replay_10:before{content:\"\\e03b\"}.vg-icon-replay_30:before{content:\"\\e03c\"}.vg-icon-fullscreen:before{content:\"\\e20c\"}.vg-icon-fullscreen_exit:before{content:\"\\e20d\"}vg-player video{width:100%;height:100%}", "", {
        "version": 3,
        "sources": ["webpack://node_modules/@videogular/ngx-videogular/fonts/videogular.css"],
        "names": [],
        "mappings": "AAAA,WAAW,sBAAsB,CAAC,8BAA8B,CAAC,6MAA6M,CAAC,eAAe,CAAC,iBAAiB,CAAC,uCAAuC,gCAAgC,CAAC,UAAU,CAAC,iBAAiB,CAAC,eAAe,CAAC,mBAAmB,CAAC,mBAAmB,CAAC,aAAa,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,cAAc,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,+BAA+B,eAAe,CAAC,sBAAsB,eAAe,CAAC,2BAA2B,eAAe,CAAC,uBAAuB,eAAe,CAAC,uBAAuB,eAAe,CAAC,0BAA0B,eAAe,CAAC,8BAA8B,eAAe,CAAC,qBAAqB,eAAe,CAAC,4BAA4B,eAAe,CAAC,4BAA4B,eAAe,CAAC,2BAA2B,eAAe,CAAC,0BAA0B,eAAe,CAAC,mBAAmB,eAAe,CAAC,2BAA2B,eAAe,CAAC,2BAA2B,eAAe,CAAC,0BAA0B,eAAe,CAAC,0BAA0B,eAAe,CAAC,2BAA2B,eAAe,CAAC,gCAAgC,eAAe,CAAC,gBAAgB,UAAU,CAAC,WAAW",
        "sourcesContent": ["@font-face{font-family:videogular;src:url(videogular.eot?hj1wei);src:url(videogular.eot?hj1wei#iefix) format(\"embedded-opentype\"),url(videogular.ttf?hj1wei) format(\"truetype\"),url(videogular.woff?hj1wei) format(\"woff\"),url(videogular.svg?hj1wei#videogular) format(\"svg\");font-weight:400;font-style:normal}[class*=\" vg-icon-\"],[class^=vg-icon-]{font-family:videogular!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;display:flex;align-items:center;justify-content:center;width:50px;font-size:24px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.vg-icon-closed_caption:before{content:\"\\e006\"}.vg-icon-pause:before{content:\"\\e018\"}.vg-icon-play_arrow:before{content:\"\\e01b\"}.vg-icon-repeat:before{content:\"\\e023\"}.vg-icon-replay:before{content:\"\\e025\"}.vg-icon-skip_next:before{content:\"\\e027\"}.vg-icon-skip_previous:before{content:\"\\e028\"}.vg-icon-stop:before{content:\"\\e02a\"}.vg-icon-volume_down:before{content:\"\\e030\"}.vg-icon-volume_mute:before{content:\"\\e031\"}.vg-icon-volume_off:before{content:\"\\e032\"}.vg-icon-volume_up:before{content:\"\\e033\"}.vg-icon-hd:before{content:\"\\e035\"}.vg-icon-forward_10:before{content:\"\\e038\"}.vg-icon-forward_30:before{content:\"\\e039\"}.vg-icon-replay_10:before{content:\"\\e03b\"}.vg-icon-replay_30:before{content:\"\\e03c\"}.vg-icon-fullscreen:before{content:\"\\e20c\"}.vg-icon-fullscreen_exit:before{content:\"\\e20d\"}vg-player video{width:100%;height:100%}"],
        "sourceRoot": ""
      }]); // Exports

      /* harmony default export */


      __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
      /***/
    },

    /***/
    "aLI7":
    /*!**********************************************************************!*\
      !*** ./node_modules/@videogular/ngx-videogular/fonts/videogular.css ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function aLI7(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "LboF");

      var content = __webpack_require__(
      /*! !../../../css-loader/dist/cjs.js??ref--12-1!../../../postcss-loader/src??embedded!./videogular.css */
      "YXXb");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    "fFqt":
    /*!**********************************!*\
      !*** ./src/theme/variables.scss ***!
      \**********************************/

    /*! no static exports found */

    /***/
    function fFqt(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "LboF");

      var content = __webpack_require__(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/resolve-url-loader??ref--13-3!../../node_modules/sass-loader/dist/cjs.js??ref--13-4!./variables.scss */
      "yb4E");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    "kTCX":
    /*!*********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/global.scss ***!
      \*********************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kTCX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../node_modules/css-loader/dist/runtime/api.js */
      "JPst");
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);

      ___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700);"]); // Module


      ___CSS_LOADER_EXPORT___.push([module.i, "html.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\nbody {\r\n  background: var(--ion-background-color);\r\n}\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\r\n  padding-top: 0px;\r\n}\nhtml.ios ion-modal .ion-page {\r\n  border-radius: inherit;\r\n}\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\r\n}\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\r\n}\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\r\n}\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\r\n}\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\r\n}\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\r\n}\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\n.split-pane-visible > .ion-page.split-pane-main {\r\n  position: relative;\r\n}\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\n.can-go-back > ion-header ion-back-button {\r\n  display: block;\r\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\nion-card.ion-color .ion-inherit-color,\r\nion-card-header.ion-color .ion-inherit-color {\r\n  color: inherit;\r\n}\n.menu-content {\r\n  transform: translate3d(0,  0,  0);\r\n}\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\n.md .menu-content-reveal {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\n.md .menu-content-push {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\nfigure {\r\n  margin: 1em 40px;\r\n}\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\npre {\r\n  overflow: auto;\r\n}\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\ntextarea::-moz-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\n[tappable] {\r\n  cursor: pointer;\r\n}\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\ntd,\r\nth {\r\n  padding: 0;\r\n}\n* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n     -moz-text-size-adjust: 100%;\r\n          text-size-adjust: 100%;\r\n}\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  -webkit-text-size-adjust: none;\r\n     -moz-text-size-adjust: none;\r\n          text-size-adjust: none;\r\n}\nhtml {\r\n  font-family: var(--ion-font-family);\r\n}\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\nh3 {\r\n  font-size: 22px;\r\n}\nh4 {\r\n  font-size: 20px;\r\n}\nh5 {\r\n  font-size: 18px;\r\n}\nh6 {\r\n  font-size: 16px;\r\n}\nsmall {\r\n  font-size: 75%;\r\n}\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\nsup {\r\n  top: -0.5em;\r\n}\nsub {\r\n  bottom: -0.25em;\r\n}\n.ion-no-padding {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\n.ion-padding {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-top {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\n.ion-padding-start {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-end {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-bottom {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-vertical {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-horizontal {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-no-margin {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\n.ion-margin {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-top {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\n.ion-margin-start {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-end {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-bottom {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-vertical {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-horizontal {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-float-left {\r\n  float: left !important;\r\n}\n.ion-float-right {\r\n  float: right !important;\r\n}\n.ion-float-start {\r\n  float: left !important;\r\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\r\n  float: right !important;\r\n}\n.ion-float-end {\r\n  float: right !important;\r\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\r\n  float: left !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-float-sm-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-float-md-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-float-lg-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\r\n    float: left !important;\r\n  }\r\n}\n.ion-text-center {\r\n  text-align: center !important;\r\n}\n.ion-text-justify {\r\n  text-align: justify !important;\r\n}\n.ion-text-start {\r\n  text-align: start !important;\r\n}\n.ion-text-end {\r\n  text-align: end !important;\r\n}\n.ion-text-left {\r\n  text-align: left !important;\r\n}\n.ion-text-right {\r\n  text-align: right !important;\r\n}\n.ion-text-nowrap {\r\n  white-space: nowrap !important;\r\n}\n.ion-text-wrap {\r\n  white-space: normal !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\n.ion-text-uppercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\n.ion-text-lowercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\n.ion-text-capitalize {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n.ion-align-self-start {\r\n  align-self: flex-start !important;\r\n}\n.ion-align-self-end {\r\n  align-self: flex-end !important;\r\n}\n.ion-align-self-center {\r\n  align-self: center !important;\r\n}\n.ion-align-self-stretch {\r\n  align-self: stretch !important;\r\n}\n.ion-align-self-baseline {\r\n  align-self: baseline !important;\r\n}\n.ion-align-self-auto {\r\n  align-self: auto !important;\r\n}\n.ion-wrap {\r\n  flex-wrap: wrap !important;\r\n}\n.ion-nowrap {\r\n  flex-wrap: nowrap !important;\r\n}\n.ion-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\r\n}\n.ion-justify-content-start {\r\n  justify-content: flex-start !important;\r\n}\n.ion-justify-content-center {\r\n  justify-content: center !important;\r\n}\n.ion-justify-content-end {\r\n  justify-content: flex-end !important;\r\n}\n.ion-justify-content-around {\r\n  justify-content: space-around !important;\r\n}\n.ion-justify-content-between {\r\n  justify-content: space-between !important;\r\n}\n.ion-justify-content-evenly {\r\n  justify-content: space-evenly !important;\r\n}\n.ion-align-items-start {\r\n  align-items: flex-start !important;\r\n}\n.ion-align-items-center {\r\n  align-items: center !important;\r\n}\n.ion-align-items-end {\r\n  align-items: flex-end !important;\r\n}\n.ion-align-items-stretch {\r\n  align-items: stretch !important;\r\n}\n.ion-align-items-baseline {\r\n  align-items: baseline !important;\r\n}\n:root {\n  --ion-color-facebook: #3b5998;\n  --ion-color-facebook-rgb: 59,89,152;\n  --ion-color-facebook-contrast: #ffffff;\n  --ion-color-facebook-contrast-rgb: 255,255,255;\n  --ion-color-facebook-shade: #344e86;\n  --ion-color-facebook-tint: #4f6aa2;\n  --ion-color-google: #cc181e;\n  --ion-color-google-rgb: 204,24,30;\n  --ion-color-google-contrast: #ffffff;\n  --ion-color-google-contrast-rgb: 255,255,255;\n  --ion-color-google-shade: #b4151a;\n  --ion-color-google-tint: #d12f35;\n  --ion-color-twitter: #00aced;\n  --ion-color-twitter-rgb: 0,172,237;\n  --ion-color-twitter-contrast: #ffffff;\n  --ion-color-twitter-contrast-rgb: 255,255,255;\n  --ion-color-twitter-shade: #0097d1;\n  --ion-color-twitter-tint: #1ab4ef;\n}\n:root .ion-color-facebook {\n  --ion-color-base: var(--ion-color-facebook) !important;\n  --ion-color-base-rgb: var(--ion-color-facebook-rgb) !important;\n  --ion-color-contrast: var(--ion-color-facebook-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-facebook-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-facebook-shade) !important;\n  --ion-color-tint: var(--ion-color-facebook-tint) !important;\n}\n:root .ion-color-google {\n  --ion-color-base: var(--ion-color-google) !important;\n  --ion-color-base-rgb: var(--ion-color-google-rgb) !important;\n  --ion-color-contrast: var(--ion-color-google-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-google-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-google-shade) !important;\n  --ion-color-tint: var(--ion-color-google-tint) !important;\n}\n:root .ion-color-twitter {\n  --ion-color-base: var(--ion-color-twitter) !important;\n  --ion-color-base-rgb: var(--ion-color-twitter-rgb) !important;\n  --ion-color-contrast: var(--ion-color-twitter-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-twitter-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-twitter-shade) !important;\n  --ion-color-tint: var(--ion-color-twitter-tint) !important;\n}\nion-title {\n  font-weight: 400 !important;\n  letter-spacing: 0.4px !important;\n}\n.input-clear-icon.sc-ion-input-ios, .input-clear-icon.sc-ion-input-md {\n  width: calc(1.2rem);\n  -webkit-margin-start: 0.5rem;\n          margin-inline-start: 0.5rem;\n}\n:root h1 > app-text-shell {\n  --font-size: 32px;\n  --text-shell-line-height: calc(var(--font-size) * 1.2);\n  --text-shell-line-color: #CCC;\n}\n:root h2 > app-text-shell {\n  --font-size: 28px;\n  --text-shell-line-height: calc(var(--font-size) * 1.2);\n  --text-shell-line-color: #DDD;\n}\n:root h3 > app-text-shell {\n  --font-size: 24px;\n  --text-shell-line-height: calc(var(--font-size) * 1.2);\n  --text-shell-line-color: #DDD;\n}\n:root h4 > app-text-shell {\n  --font-size: 20px;\n  --text-shell-line-height: calc(var(--font-size) * 1.2);\n  --text-shell-line-color: #DDD;\n}\n:root h5 > app-text-shell {\n  --font-size: 18px;\n  --text-shell-line-height: calc(var(--font-size) * 1.2);\n  --text-shell-line-color: #DDD;\n}", "", {
        "version": 3,
        "sources": ["webpack://node_modules/@ionic/angular/src/css/core.scss", "webpack://node_modules/@ionic/angular/css/core.css", "webpack://node_modules/@ionic/angular/src/themes/ionic.mixins.scss", "webpack://node_modules/@ionic/angular/src/themes/ionic.globals.scss", "webpack://node_modules/@ionic/angular/src/components/menu/menu.ios.vars.scss", "webpack://node_modules/@ionic/angular/src/components/menu/menu.md.vars.scss", "webpack://node_modules/@ionic/angular/src/css/normalize.scss", "webpack://node_modules/@ionic/angular/css/normalize.css", "webpack://node_modules/@ionic/angular/src/css/structure.scss", "webpack://node_modules/@ionic/angular/css/structure.css", "webpack://node_modules/@ionic/angular/src/css/typography.scss", "webpack://node_modules/@ionic/angular/css/typography.css", "webpack://node_modules/@ionic/angular/src/css/padding.scss", "webpack://node_modules/@ionic/angular/css/padding.css", "webpack://node_modules/@ionic/angular/src/css/float-elements.scss", "webpack://node_modules/@ionic/angular/css/float-elements.css", "webpack://node_modules/@ionic/angular/src/css/text-alignment.scss", "webpack://node_modules/@ionic/angular/css/text-alignment.css", "webpack://node_modules/@ionic/angular/src/css/text-transformation.scss", "webpack://node_modules/@ionic/angular/css/text-transformation.css", "webpack://node_modules/@ionic/angular/src/css/flex-utils.scss", "webpack://node_modules/@ionic/angular/css/flex-utils.css", "webpack://src/theme/custom-ion-colors.scss", "webpack://src/global.scss", "webpack://src/theme/mixins/ion-color.scss", "webpack://src/theme/app-defaults.scss", "webpack://src/theme/shell-defaults.scss"],
        "names": [],
        "mappings": "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sCUnNM;AC6BV;AX0LM;EACE;IAEI,mBAAA;IAMF,+CUhOA;IViOA,8CUjOA;ECmCR;AACF;ADAA;EACE,uCAAA;EV+KE,uCUpNM;ACyCV;AX8KM;EACE;IAKI,oBAAA;IAKF,6CUlOA;IVmOA,4CUnOA;EC+CR;AACF;ADNA;EACE,0CAAA;EV0MA,wCUrPQ;ACqDV;ADLA;EACE,uCAAA;EACA,0CAAA;EVkMA,qCUpPQ;EVqPR,wCUrPQ;AC2DV;ADJA;EACE,yCAAA;EACA,uCAAA;EV0JE,sCUnNM;EVoNN,uCUpNM;ACiEV;AXsJM;EACE;IAEI,mBAAA;IAGA,oBAAA;IAGF,+CUhOA;IViOA,8CUjOA;IVkOA,6CUlOA;IVmOA,4CUnOA;EC0ER;AACF;ADTA;EACE,iBAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EVyIE,cUvIc;EVwId,eUxIc;EV4KhB,aU5KgB;EV6KhB,gBU7KgB;ACclB;ADXA;EACE,uCAAA;EACA,qCAAA;EACA,qCAAA;EACA,wCAAA;EVoIE,oCUlNK;EVmNL,qCUnNK;EVmPP,mCUnPO;EVoPP,sCUpPO;ACgGT;AXsHM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAGF,6CU/ND;IVgOC,4CUhOD;IViOC,2CUjOD;IVkOC,0CUlOD;ECyGP;AACF;ADvBA;EACE,qCAAA;EV+JA,mCUnPO;AC+GT;ADtBA;EACE,uCAAA;EVwHE,oCUlNK;ACmHT;AXmGM;EACE;IAEI,kBAAA;IAMF,6CU/ND;IVgOC,4CUhOD;ECyHP;AACF;AD3BA;EACE,qCAAA;EVmHE,qCUnNK;AC+HT;AXuFM;EACE;IAKI,mBAAA;IAKF,2CUjOD;IVkOC,0CUlOD;ECqIP;AACF;ADjCA;EACE,wCAAA;EV8IA,sCUpPO;AC2IT;ADhCA;EACE,qCAAA;EACA,wCAAA;EVsIA,mCUnPO;EVoPP,sCUpPO;ACiJT;AD/BA;EACE,uCAAA;EACA,qCAAA;EV8FE,oCUlNK;EVmNL,qCUnNK;ACuJT;AX+DM;EACE;IAEI,kBAAA;IAGA,mBAAA;IAGF,6CU/ND;IVgOC,4CUhOD;IViOC,2CUjOD;IVkOC,0CUlOD;ECgKP;AACF;AC9JI;EZ0YE,sBAAA;AatZN;ADgBI;EZsYE,uBAAA;AalZN;ADgBI;EZoXE,sBAAA;AahYN;AbmKW;EAgOL,uBAAA;AahYN;ADaI;EZuXE,uBAAA;AahYN;Ab4JW;EAuOL,sBAAA;AahYN;AbmFI;EYzFA;IZ0YE,sBAAA;Ea/XJ;;EDPE;IZsYE,uBAAA;Ea3XJ;;EDPE;IZoXE,sBAAA;EazWJ;Eb4IS;IAgOL,uBAAA;EazWJ;;EDVE;IZuXE,uBAAA;EazWJ;EbqIS;IAuOL,sBAAA;EazWJ;AACF;Ab2DI;EYzFA;IZ0YE,sBAAA;EaxWJ;;ED9BE;IZsYE,uBAAA;EapWJ;;ED9BE;IZoXE,sBAAA;EalVJ;EbqHS;IAgOL,uBAAA;EalVJ;;EDjCE;IZuXE,uBAAA;EalVJ;Eb8GS;IAuOL,sBAAA;EalVJ;AACF;AboCI;EYzFA;IZ0YE,sBAAA;EajVJ;;EDrDE;IZsYE,uBAAA;Ea7UJ;;EDrDE;IZoXE,sBAAA;Ea3TJ;Eb8FS;IAgOL,uBAAA;Ea3TJ;;EDxDE;IZuXE,uBAAA;Ea3TJ;EbuFS;IAuOL,sBAAA;Ea3TJ;AACF;AbaI;EYzFA;IZ0YE,sBAAA;Ea1TJ;;ED5EE;IZsYE,uBAAA;EatTJ;;ED5EE;IZoXE,sBAAA;EapSJ;EbuES;IAgOL,uBAAA;EapSJ;;ED/EE;IZuXE,uBAAA;EapSJ;EbgES;IAuOL,sBAAA;EapSJ;AACF;ACnGI;EACE,6BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;ADgBI;EACE,4BAAA;ACbN;ADgBI;EACE,0BAAA;ACbN;ADgBI;EACE,2BAAA;ACbN;ADgBI;EACE,4BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;ADgBI;EACE,8BAAA;ACbN;AfyEI;EczFA;IACE,6BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,0BAAA;ECoBJ;;EDjBE;IACE,2BAAA;ECoBJ;;EDjBE;IACE,4BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;;EDjBE;IACE,8BAAA;ECoBJ;AACF;AfuCI;EczFA;IACE,6BAAA;ECqDJ;;EDlDE;IACE,8BAAA;ECqDJ;;ED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",
        "sourcesContent": [null, "html.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\r\n\r\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\r\n\r\nbody {\r\n  background: var(--ion-background-color);\r\n}\r\n\r\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\r\n  padding-top: 0px;\r\n}\r\n\r\nhtml.ios ion-modal .ion-page {\r\n  border-radius: inherit;\r\n}\r\n\r\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\r\n\r\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\r\n}\r\n\r\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\r\n}\r\n\r\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\r\n}\r\n\r\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\r\n}\r\n\r\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\r\n}\r\n\r\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\r\n\r\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\r\n}\r\n\r\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\r\n\r\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\n\r\n.split-pane-visible > .ion-page.split-pane-main {\r\n  position: relative;\r\n}\r\n\r\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\r\n\r\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\r\n\r\n.can-go-back > ion-header ion-back-button {\r\n  display: block;\r\n}\r\n\r\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\r\n\r\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\r\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\r\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\r\nion-card.ion-color .ion-inherit-color,\r\nion-card-header.ion-color .ion-inherit-color {\r\n  color: inherit;\r\n}\r\n\r\n.menu-content {\r\n  transform: translate3d(0,  0,  0);\r\n}\r\n\r\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\r\n\r\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.md .menu-content-reveal {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.md .menu-content-push {\r\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n/*# sourceMappingURL=core.css.map */\r\n", null, null, null, null, null, "audio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\r\n\r\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\r\n\r\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\r\n\r\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\r\n\r\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[tappable] {\r\n  cursor: pointer;\r\n}\r\n\r\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=normalize.css.map */\r\n", null, "* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  text-size-adjust: 100%;\r\n}\r\n\r\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\r\n\r\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/*# sourceMappingURL=structure.css.map */\r\n", null, "html {\r\n  font-family: var(--ion-font-family);\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\r\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\r\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\r\nh3 {\r\n  font-size: 22px;\r\n}\r\n\r\nh4 {\r\n  font-size: 20px;\r\n}\r\n\r\nh5 {\r\n  font-size: 18px;\r\n}\r\n\r\nh6 {\r\n  font-size: 16px;\r\n}\r\n\r\nsmall {\r\n  font-size: 75%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/*# sourceMappingURL=typography.css.map */\r\n", null, ".ion-no-padding {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.ion-padding {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-top {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-start {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-end {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-padding-bottom {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-vertical {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\r\n.ion-padding-horizontal {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\r\n\r\n.ion-no-margin {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ion-margin {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-top {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-start {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-end {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n.ion-margin-bottom {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-vertical {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\r\n.ion-margin-horizontal {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\r\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=padding.css.map */\r\n", null, ".ion-float-left {\r\n  float: left !important;\r\n}\r\n\r\n.ion-float-right {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-start {\r\n  float: left !important;\r\n}\r\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\r\n  float: right !important;\r\n}\r\n\r\n.ion-float-end {\r\n  float: right !important;\r\n}\r\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\r\n  float: left !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-float-sm-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-float-md-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-float-lg-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\r\n    float: left !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=float-elements.css.map */\r\n", null, ".ion-text-center {\r\n  text-align: center !important;\r\n}\r\n\r\n.ion-text-justify {\r\n  text-align: justify !important;\r\n}\r\n\r\n.ion-text-start {\r\n  text-align: start !important;\r\n}\r\n\r\n.ion-text-end {\r\n  text-align: end !important;\r\n}\r\n\r\n.ion-text-left {\r\n  text-align: left !important;\r\n}\r\n\r\n.ion-text-right {\r\n  text-align: right !important;\r\n}\r\n\r\n.ion-text-nowrap {\r\n  white-space: nowrap !important;\r\n}\r\n\r\n.ion-text-wrap {\r\n  white-space: normal !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-text-md-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap {\r\n    white-space: normal !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=text-alignment.css.map */\r\n", null, ".ion-text-uppercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.ion-text-lowercase {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\r\n\r\n.ion-text-capitalize {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=text-transformation.css.map */\r\n", null, ".ion-align-self-start {\r\n  align-self: flex-start !important;\r\n}\r\n\r\n.ion-align-self-end {\r\n  align-self: flex-end !important;\r\n}\r\n\r\n.ion-align-self-center {\r\n  align-self: center !important;\r\n}\r\n\r\n.ion-align-self-stretch {\r\n  align-self: stretch !important;\r\n}\r\n\r\n.ion-align-self-baseline {\r\n  align-self: baseline !important;\r\n}\r\n\r\n.ion-align-self-auto {\r\n  align-self: auto !important;\r\n}\r\n\r\n.ion-wrap {\r\n  flex-wrap: wrap !important;\r\n}\r\n\r\n.ion-nowrap {\r\n  flex-wrap: nowrap !important;\r\n}\r\n\r\n.ion-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.ion-justify-content-start {\r\n  justify-content: flex-start !important;\r\n}\r\n\r\n.ion-justify-content-center {\r\n  justify-content: center !important;\r\n}\r\n\r\n.ion-justify-content-end {\r\n  justify-content: flex-end !important;\r\n}\r\n\r\n.ion-justify-content-around {\r\n  justify-content: space-around !important;\r\n}\r\n\r\n.ion-justify-content-between {\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.ion-justify-content-evenly {\r\n  justify-content: space-evenly !important;\r\n}\r\n\r\n.ion-align-items-start {\r\n  align-items: flex-start !important;\r\n}\r\n\r\n.ion-align-items-center {\r\n  align-items: center !important;\r\n}\r\n\r\n.ion-align-items-end {\r\n  align-items: flex-end !important;\r\n}\r\n\r\n.ion-align-items-stretch {\r\n  align-items: stretch !important;\r\n}\r\n\r\n.ion-align-items-baseline {\r\n  align-items: baseline !important;\r\n}\r\n\r\n/*# sourceMappingURL=flex-utils.css.map */\r\n", "@import \"mixins/ion-color\";\r\n\r\n// Add custom colors to use with [color] property\r\n// (see: https://forum.ionicframework.com/t/adding-custom-colours-to-use-with-color-property/136919)\r\n// GLOBAL COLORS:\r\n//    You can define new Ionic colors here (inside :root{ ... }) to be available within the entire app\r\n// LOCAL COLORS:\r\n//    You can also define new Ionic colors in each page (inside :host{ ... }) to be available just in that page\r\n//    (We have an example of local custom Ionic colors in the deals pages)\r\n:root {\r\n  @include ion-color('facebook') {\r\n    --ion-color-facebook: #3b5998;\r\n    --ion-color-facebook-rgb: 59,89,152;\r\n    --ion-color-facebook-contrast: #ffffff;\r\n    --ion-color-facebook-contrast-rgb: 255,255,255;\r\n    --ion-color-facebook-shade: #344e86;\r\n    --ion-color-facebook-tint: #4f6aa2;\r\n  }\r\n\r\n  @include ion-color('google') {\r\n    --ion-color-google: #cc181e;\r\n    --ion-color-google-rgb: 204,24,30;\r\n    --ion-color-google-contrast: #ffffff;\r\n    --ion-color-google-contrast-rgb: 255,255,255;\r\n    --ion-color-google-shade: #b4151a;\r\n    --ion-color-google-tint: #d12f35;\r\n  }\r\n\r\n  @include ion-color('twitter') {\r\n    --ion-color-twitter: #00aced;\r\n    --ion-color-twitter-rgb: 0,172,237;\r\n    --ion-color-twitter-contrast: #ffffff;\r\n    --ion-color-twitter-contrast-rgb: 255,255,255;\r\n    --ion-color-twitter-shade: #0097d1;\r\n    --ion-color-twitter-tint: #1ab4ef;\r\n  }\r\n}\r\n", "// http://ionicframework.com/docs/theming/\r\n@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700');\r\n\r\n@import \"~@ionic/angular/css/core.css\";\r\n@import \"~@ionic/angular/css/normalize.css\";\r\n@import \"~@ionic/angular/css/structure.css\";\r\n@import \"~@ionic/angular/css/typography.css\";\r\n\r\n@import \"~@ionic/angular/css/padding.css\";\r\n@import \"~@ionic/angular/css/float-elements.css\";\r\n@import \"~@ionic/angular/css/text-alignment.css\";\r\n@import \"~@ionic/angular/css/text-transformation.css\";\r\n@import \"~@ionic/angular/css/flex-utils.css\";\r\n\r\n// EXTRA GLOBAL STYLES\r\n// Add custom Ionic Colors\r\n@import \"theme/custom-ion-colors.scss\";\r\n// Add base app styles\r\n@import \"theme/app-defaults.scss\";\r\n// Add base shell styles\r\n@import \"theme/shell-defaults.scss\";\r\n", "@mixin ion-color($color) {\r\n  @content;\r\n\r\n  .ion-color-#{$color} {\r\n    --ion-color-base: var(--ion-color-#{$color}) !important;\r\n    --ion-color-base-rgb: var(--ion-color-#{$color}-rgb) !important;\r\n    --ion-color-contrast: var(--ion-color-#{$color}-contrast) !important;\r\n    --ion-color-contrast-rgb: var(--ion-color-#{$color}-contrast-rgb) !important;\r\n    --ion-color-shade: var(--ion-color-#{$color}-shade) !important;\r\n    --ion-color-tint: var(--ion-color-#{$color}-tint) !important;\r\n  }\r\n}\r\n", "ion-title {\r\n  // Adding !important to force precedence in SSR\r\n  font-weight: 400 !important;\r\n  letter-spacing: 0.4px !important;\r\n}\r\n\r\n// Override Ionic styles\r\n.input-clear-icon {\r\n  // Change these properties so the Ionic close icon aligns with show/hide password\r\n  &.sc-ion-input-ios,\r\n  &.sc-ion-input-md {\r\n    width: calc(1.2rem);\r\n    margin-inline-start: .5rem;\r\n  }\r\n}\r\n", "// Need to add :root to take precedence over angular encapsulation of the app-text-shell component\r\n:root {\r\n  h1 > app-text-shell {\r\n    --font-size: 32px;\r\n    --text-shell-line-height: calc(var(--font-size) * 1.2);\r\n    --text-shell-line-color: #CCC;\r\n  }\r\n\r\n  h2 > app-text-shell {\r\n    --font-size: 28px;\r\n    --text-shell-line-height: calc(var(--font-size) * 1.2);\r\n    --text-shell-line-color: #DDD;\r\n  }\r\n\r\n  h3 > app-text-shell {\r\n    --font-size: 24px;\r\n    --text-shell-line-height: calc(var(--font-size) * 1.2);\r\n    --text-shell-line-color: #DDD;\r\n  }\r\n\r\n  h4 > app-text-shell {\r\n    --font-size: 20px;\r\n    --text-shell-line-height: calc(var(--font-size) * 1.2);\r\n    --text-shell-line-color: #DDD;\r\n  }\r\n\r\n  h5 > app-text-shell {\r\n    --font-size: 18px;\r\n    --text-shell-line-height: calc(var(--font-size) * 1.2);\r\n    --text-shell-line-color: #DDD;\r\n  }\r\n}\r\n"],
        "sourceRoot": ""
      }]); // Exports

      /* harmony default export */


      __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
      /***/
    },

    /***/
    "yb4E":
    /*!******************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/theme/variables.scss ***!
      \******************************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yb4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../node_modules/css-loader/dist/runtime/api.js */
      "JPst");
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true); // Module


      ___CSS_LOADER_EXPORT___.push([module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #1C1C1C;\n  --ion-color-primary-rgb: 28,28,28;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #191919;\n  --ion-color-primary-tint: #333333;\n  /** secondary **/\n  --ion-color-secondary: #FF0062;\n  --ion-color-secondary-rgb: 255,0,98;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #e00056;\n  --ion-color-secondary-tint: #025AB4;\n  /** tertiary **/\n  --ion-color-tertiary: #00AFFF;\n  --ion-color-tertiary-rgb: 0,175,255;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb: 0,0,0;\n  --ion-color-tertiary-shade: #009ae0;\n  --ion-color-tertiary-tint: #1ab7ff;\n  /** success **/\n  --ion-color-success: #20dc6a;\n  --ion-color-success-rgb: 32,220,106;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #1cc25d;\n  --ion-color-success-tint: #36e079;\n  /** warning **/\n  --ion-color-warning: #ffed11;\n  --ion-color-warning-rgb: 255,237,17;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0d10f;\n  --ion-color-warning-tint: #ffef29;\n  /** danger **/\n  --ion-color-danger: #f4344f;\n  --ion-color-danger-rgb: 244,52,79;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #d72e46;\n  --ion-color-danger-tint: #f54861;\n  /** lightest **/\n  --ion-color-lightest: #FFFFFF;\n  --ion-color-lightest-rgb: 255,255,255;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244,244,244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-shade-rgb: 215,216,218;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-light-tint-rgb: 245,246,249;\n  /** medium **/\n  --ion-color-medium: #0063c6;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-medium-contrast: #0063c6;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-shade-rgb: 134,136,143;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-medium-tint-rgb: 162,164,171;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34,34,34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255,255,255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-shade-rgb: 30,32,35;\n  --ion-color-dark-tint: #383a3e;\n  --ion-color-dark-tint-rgb: 56,58,62;\n  /** darkest **/\n  --ion-color-darkest: #000000;\n  --ion-color-darkest-rgb: 0,0,0;\n}\n:root {\n  /* Set the font family of the entire app */\n  --ion-font-family: \"Rubik\", sans-serif;\n  --app-background: #FFFFFF;\n  --app-background-shade: var(--ion-background-color-step-50, #F2F2F2);\n  --app-background-alt: var(--ion-color-primary);\n  --app-background-alt-shade: var(--ion-color-primary-shade);\n  --app-narrow-margin: 12px;\n  --app-fair-margin: 16px;\n  --app-broad-margin: 20px;\n  --app-narrow-radius: 4px;\n  --app-fair-radius: 8px;\n  --app-broad-radius: 12px;\n}\nhtml.ios {\n  --app-header-height: 44px;\n}\nhtml.md {\n  --app-header-height: 56px;\n}\n:root {\n  --ion-color-favorite: #3670e5;\n  --ion-color-favorite-rgb: 54,112,229;\n  --ion-color-favorite-contrast: #ffffff;\n  --ion-color-favorite-contrast-rgb: 255,255,255;\n  --ion-color-favorite-shade: #3063ca;\n  --ion-color-favorite-tint: #4a7ee8;\n}\n.ion-color-favorite {\n  --ion-color-base: var(--ion-color-favorite);\n  --ion-color-base-rgb: var(--ion-color-favorite-rgb);\n  --ion-color-contrast: var(--ion-color-favorite-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-favorite-contrast-rgb);\n  --ion-color-shade: var(--ion-color-favorite-shade);\n  --ion-color-tint: var(--ion-color-favorite-tint);\n}", "", {
        "version": 3,
        "sources": ["webpack://src/theme/variables.scss"],
        "names": [],
        "mappings": "AAGA,0BAAA;AACA;EACE,cAAA;EACA,4BAAA;EACA,iCAAA;EACA,qCAAA;EACA,6CAAA;EACA,kCAAA;EACA,iCAAA;EAEA,gBAAA;EACA,8BAAA;EACA,mCAAA;EACA,uCAAA;EACA,+CAAA;EACA,oCAAA;EACA,mCAAA;EAEA,eAAA;EACA,6BAAA;EACA,mCAAA;EACA,sCAAA;EACA,wCAAA;EACA,mCAAA;EACA,kCAAA;EAEA,cAAA;EACA,4BAAA;EACA,mCAAA;EACA,qCAAA;EACA,uCAAA;EACA,kCAAA;EACA,iCAAA;EAEA,cAAA;EACA,4BAAA;EACA,mCAAA;EACA,qCAAA;EACA,uCAAA;EACA,kCAAA;EACA,iCAAA;EAEA,aAAA;EACA,2BAAA;EACA,iCAAA;EACA,oCAAA;EACA,4CAAA;EACA,iCAAA;EACA,gCAAA;EAEA,eAAA;EACA,6BAAA;EACA,qCAAA;EAEA,YAAA;EACA,0BAAA;EACA,kCAAA;EACA,mCAAA;EACA,qCAAA;EACA,gCAAA;EACA,wCAAA;EACA,+BAAA;EACA,uCAAA;EAEA,aAAA;EACA,2BAAA;EACA,mCAAA;EACA,oCAAA;EACA,4CAAA;EACA,iCAAA;EACA,yCAAA;EACA,gCAAA;EACA,wCAAA;EAEA,WAAA;EACA,yBAAA;EACA,8BAAA;EACA,kCAAA;EACA,0CAAA;EACA,+BAAA;EACA,oCAAA;EACA,8BAAA;EACA,mCAAA;EAEA,cAAA;EACA,4BAAA;EACA,8BAAA;AAZF;AAeA;EACE,0CAAA;EACA,sCAAA;EAEA,yBAAA;EACA,oEAAA;EACA,8CAAA;EACA,0DAAA;EAEA,yBAAA;EACA,uBAAA;EACA,wBAAA;EAEA,wBAAA;EACA,sBAAA;EACA,wBAAA;AAfF;AAkBA;EACE,yBAAA;AAfF;AAkBA;EACE,yBAAA;AAfF;AAkBA;EACE,6BAAA;EACA,oCAAA;EACA,sCAAA;EACA,8CAAA;EACA,mCAAA;EACA,kCAAA;AAfF;AAkBA;EACE,2CAAA;EACA,mDAAA;EACA,wDAAA;EACA,gEAAA;EACA,kDAAA;EACA,gDAAA;AAfF",
        "sourcesContent": ["// Ionic Variables and Theming. For more info, please see:\r\n// http://ionicframework.com/docs/theming/\r\n\r\n/** Ionic CSS Variables **/\r\n:root {\r\n  /** primary **/\r\n  --ion-color-primary: #1C1C1C;\r\n  --ion-color-primary-rgb: 28,28,28;\r\n  --ion-color-primary-contrast: #ffffff;\r\n  --ion-color-primary-contrast-rgb: 255,255,255;\r\n  --ion-color-primary-shade: #191919;\r\n  --ion-color-primary-tint: #333333;\r\n\r\n  /** secondary **/\r\n  --ion-color-secondary: #FF0062;\r\n  --ion-color-secondary-rgb: 255,0,98;\r\n  --ion-color-secondary-contrast: #ffffff;\r\n  --ion-color-secondary-contrast-rgb: 255,255,255;\r\n  --ion-color-secondary-shade: #e00056;\r\n  --ion-color-secondary-tint: #025AB4;\r\n\r\n  /** tertiary **/\r\n  --ion-color-tertiary: #00AFFF;\r\n  --ion-color-tertiary-rgb: 0,175,255;\r\n  --ion-color-tertiary-contrast: #000000;\r\n  --ion-color-tertiary-contrast-rgb: 0,0,0;\r\n  --ion-color-tertiary-shade: #009ae0;\r\n  --ion-color-tertiary-tint: #1ab7ff;\r\n\r\n  /** success **/\r\n  --ion-color-success: #20dc6a;\r\n  --ion-color-success-rgb: 32,220,106;\r\n  --ion-color-success-contrast: #000000;\r\n  --ion-color-success-contrast-rgb: 0,0,0;\r\n  --ion-color-success-shade: #1cc25d;\r\n  --ion-color-success-tint: #36e079;\r\n\r\n  /** warning **/\r\n  --ion-color-warning: #ffed11;\r\n  --ion-color-warning-rgb: 255,237,17;\r\n  --ion-color-warning-contrast: #000000;\r\n  --ion-color-warning-contrast-rgb: 0,0,0;\r\n  --ion-color-warning-shade: #e0d10f;\r\n  --ion-color-warning-tint: #ffef29;\r\n\r\n  /** danger **/\r\n  --ion-color-danger: #f4344f;\r\n  --ion-color-danger-rgb: 244,52,79;\r\n  --ion-color-danger-contrast: #ffffff;\r\n  --ion-color-danger-contrast-rgb: 255,255,255;\r\n  --ion-color-danger-shade: #d72e46;\r\n  --ion-color-danger-tint: #f54861;\r\n\r\n  /** lightest **/\r\n  --ion-color-lightest: #FFFFFF;\r\n  --ion-color-lightest-rgb: 255,255,255;\r\n\r\n  /** light **/\r\n  --ion-color-light: #f4f5f8;\r\n  --ion-color-light-rgb: 244,244,244;\r\n  --ion-color-light-contrast: #000000;\r\n  --ion-color-light-contrast-rgb: 0,0,0;\r\n  --ion-color-light-shade: #d7d8da;\r\n  --ion-color-light-shade-rgb: 215,216,218;\r\n  --ion-color-light-tint: #f5f6f9;\r\n  --ion-color-light-tint-rgb: 245,246,249;\r\n\r\n  /** medium **/\r\n  --ion-color-medium: #0063c6;\r\n  --ion-color-medium-rgb: 152,154,162;\r\n  --ion-color-medium-contrast: #0063c6;\r\n  --ion-color-medium-contrast-rgb: 255,255,255;\r\n  --ion-color-medium-shade: #86888f;\r\n  --ion-color-medium-shade-rgb: 134,136,143;\r\n  --ion-color-medium-tint: #a2a4ab;\r\n  --ion-color-medium-tint-rgb: 162,164,171;\r\n\r\n  /** dark **/\r\n  --ion-color-dark: #222428;\r\n  --ion-color-dark-rgb: 34,34,34;\r\n  --ion-color-dark-contrast: #ffffff;\r\n  --ion-color-dark-contrast-rgb: 255,255,255;\r\n  --ion-color-dark-shade: #1e2023;\r\n  --ion-color-dark-shade-rgb: 30,32,35;\r\n  --ion-color-dark-tint: #383a3e;\r\n  --ion-color-dark-tint-rgb: 56,58,62;\r\n\r\n  /** darkest **/\r\n  --ion-color-darkest: #000000;\r\n  --ion-color-darkest-rgb: 0,0,0;\r\n}\r\n\r\n:root {\r\n  /* Set the font family of the entire app */\r\n  --ion-font-family: 'Rubik', sans-serif;\r\n\r\n  --app-background: #FFFFFF;\r\n  --app-background-shade: var(--ion-background-color-step-50, #F2F2F2);\r\n  --app-background-alt: var(--ion-color-primary);\r\n  --app-background-alt-shade: var(--ion-color-primary-shade);\r\n\r\n  --app-narrow-margin: 12px;\r\n  --app-fair-margin: 16px;\r\n  --app-broad-margin: 20px;\r\n\r\n  --app-narrow-radius: 4px;\r\n  --app-fair-radius: 8px;\r\n  --app-broad-radius: 12px;\r\n}\r\n\r\nhtml.ios {\r\n  --app-header-height: 44px;\r\n}\r\n\r\nhtml.md {\r\n  --app-header-height: 56px;\r\n}\r\n\r\n:root {\r\n  --ion-color-favorite: #3670e5;\r\n  --ion-color-favorite-rgb: 54,112,229;\r\n  --ion-color-favorite-contrast: #ffffff;\r\n  --ion-color-favorite-contrast-rgb: 255,255,255;\r\n  --ion-color-favorite-shade: #3063ca;\r\n  --ion-color-favorite-tint: #4a7ee8;\r\n}\r\n\r\n.ion-color-favorite {\r\n  --ion-color-base: var(--ion-color-favorite);\r\n  --ion-color-base-rgb: var(--ion-color-favorite-rgb);\r\n  --ion-color-contrast: var(--ion-color-favorite-contrast);\r\n  --ion-color-contrast-rgb: var(--ion-color-favorite-contrast-rgb);\r\n  --ion-color-shade: var(--ion-color-favorite-shade);\r\n  --ion-color-tint: var(--ion-color-favorite-tint);\r\n}"],
        "sourceRoot": ""
      }]); // Exports

      /* harmony default export */


      __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
      /***/
    }
  }, [[3, "runtime"]]]);
})();
//# sourceMappingURL=styles-es5.js.map