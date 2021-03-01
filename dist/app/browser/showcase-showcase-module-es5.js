(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcase-showcase-module"], {
    /***/
    "Zah/":
    /*!*********************************************!*\
      !*** ./src/app/showcase/showcase.module.ts ***!
      \*********************************************/

    /*! exports provided: ShowcasePageModule */

    /***/
    function Zah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowcasePageModule", function () {
        return ShowcasePageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");

      var showcaseRoutes = [{
        path: '',
        children: [// /showcase/ redirect
        {
          path: '',
          redirectTo: 'app-shell',
          pathMatch: 'full'
        }, {
          path: 'app-shell',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | app-shell-app-shell-module */
            [__webpack_require__.e("common"), __webpack_require__.e("app-shell-app-shell-module")]).then(__webpack_require__.bind(null,
            /*! ./app-shell/app-shell.module */
            "8Cws")).then(function (m) {
              return m.AppShellModule;
            });
          }
        }, {
          path: 'custom-components',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | custom-components-custom-components-module */
            [__webpack_require__.e("common"), __webpack_require__.e("custom-components-custom-components-module")]).then(__webpack_require__.bind(null,
            /*! ./custom-components/custom-components.module */
            "H2N2")).then(function (m) {
              return m.CustomComponentsModule;
            });
          }
        }, {
          path: 'route-resolvers-ux',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | route-resolvers-ux-route-resolvers-ux-module */
            [__webpack_require__.e("common"), __webpack_require__.e("route-resolvers-ux-route-resolvers-ux-module")]).then(__webpack_require__.bind(null,
            /*! ./route-resolvers-ux/route-resolvers-ux.module */
            "XxPA")).then(function (m) {
              return m.RouteResolversUXModule;
            });
          }
        }]
      }];

      var ShowcasePageModule = function ShowcasePageModule() {
        _classCallCheck(this, ShowcasePageModule);
      };

      ShowcasePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ShowcasePageModule
      });
      ShowcasePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function ShowcasePageModule_Factory(t) {
          return new (t || ShowcasePageModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(showcaseRoutes), _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShowcasePageModule, {
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ShowcasePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(showcaseRoutes), _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
            declarations: []
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=showcase-showcase-module-es5.js.map