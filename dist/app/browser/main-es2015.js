(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Deondre\Documents\GitHub\soled\src\main.ts */"zUnb");


/***/ }),

/***/ "1oPy":
/*!*************************************************!*\
  !*** ./src/app/utils/history-helper.service.ts ***!
  \*************************************************/
/*! exports provided: HistoryHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryHelperService", function() { return HistoryHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class HistoryHelperService {
    constructor(router) {
        this.router = router;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(({ urlAfterRedirects }) => {
            // console.log('previous URL', this.previousUrl);
            this.previousUrl = urlAfterRedirects;
            // console.log('NEW previous URL', this.previousUrl);
        });
    }
}
HistoryHelperService.ɵfac = function HistoryHelperService_Factory(t) { return new (t || HistoryHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HistoryHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HistoryHelperService, factory: HistoryHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "2gss":
/*!************************************************************!*\
  !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
  \************************************************************/
/*! exports provided: ImageShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function() { return ImageShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/transfer-state-helper */ "O2zu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ImageShellComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "_display === 'cover'"]);
} }
const _c0 = ["*"];
class ImageShellComponent {
    constructor(transferStateHelper) {
        this.transferStateHelper = transferStateHelper;
        // To debug shell styles, change configuration in the environment file
        this.debugDisplay = (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appShellConfig.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appShellConfig.debug : false;
        // tslint:disable-next-line:variable-name
        this._src = '';
        // tslint:disable-next-line:variable-name
        this._alt = '';
        // tslint:disable-next-line:variable-name
        this._loadingStrategy = 'lazy';
        // tslint:disable-next-line:variable-name
        this._display = '';
        this.imageSSR = false;
        this.imageLoaded = false;
        this.imageError = false;
        this.errorMessage = 'Could not load image';
    }
    set display(val) {
        this._display = (val !== undefined && val !== null) ? val : '';
        // For display 'cover' we use a hidden aux image. As it's hidden, if set loading to 'lazy' it won't ever trigger the loading mechanism
        if (this._display === 'cover') {
            this._loadingStrategy = 'eager';
        }
    }
    get display() {
        return this._display;
    }
    set src(val) {
        if (!this.debugDisplay) {
            this._src = (val !== undefined && val !== null) ? val : '';
        }
        // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded
        const imageState = this.transferStateHelper.checkImageShellState('shell-images-state', this._src);
        if (imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__["ImageShellState"].SSR || imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__["ImageShellState"].BROWSER_FROM_SSR) {
            this._imageProcessedInServer();
        }
        else {
            if (this._display === 'cover') {
                // Unset the background-image until the image is loaded
                this.backgroundImage = 'unset';
            }
        }
    }
    set alt(val) {
        this._alt = (val !== undefined && val !== null) ? val : '';
    }
    _imageProcessedInServer() {
        this.imageSSR = true;
        // Also set backgroundImage so it's ready when transitioning from SSR to the browser
        if (this._display === 'cover') {
            this.backgroundImage = 'url(' + this._src + ')';
        }
    }
    _imageLoaded() {
        this.imageLoaded = true;
        // If it's a cover image then set the background-image property accordingly
        if (this._display === 'cover') {
            // Now that the image is loaded, set the background image
            this.backgroundImage = 'url(' + this._src + ')';
        }
    }
    _imageLoadError(event) {
        // Image error event get's called when the src is empty. We use emty values for the shell.
        // (see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Image_loading_errors)
        // Avoid that shell case
        if (this._src && this._src !== '') {
            this.imageLoaded = false;
            this.imageSSR = false;
            setTimeout(() => {
                this.imageError = true;
            }, 500);
        }
    }
}
ImageShellComponent.ɵfac = function ImageShellComponent_Factory(t) { return new (t || ImageShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__["TransferStateHelper"])); };
ImageShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageShellComponent, selectors: [["app-image-shell"]], hostVars: 10, hostBindings: function ImageShellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-error", ctx.errorMessage)("display", ctx.display);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.backgroundImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("img-ssr", ctx.imageSSR)("img-loaded", ctx.imageLoaded)("img-error", ctx.imageError);
    } }, inputs: { display: "display", src: "src", alt: "alt" }, ngContentSelectors: _c0, decls: 3, vars: 4, consts: [[1, "spinner"], [1, "inner-img", 3, "src", "alt", "load", "error"], [4, "ngIf"]], template: function ImageShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageShellComponent_Template_img_load_1_listener() { return ctx._imageLoaded(); })("error", function ImageShellComponent_Template_img_error_1_listener($event) { return ctx._imageLoadError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageShellComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx._src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx._alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("loading", ctx._loadingStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._display === "cover");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  --image-shell-color: #333;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]:not([display=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]:not([display=cover])    > .inner-img[_ngcontent-%COMP%] {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  display: block;\n}\n[_nghost-%COMP%]:not([display=cover]).img-ssr::before, [_nghost-%COMP%]:not([display=cover]).img-loaded::before {\n  display: none;\n}\n[_nghost-%COMP%]:not([display=cover]).img-ssr    > .inner-img[_ngcontent-%COMP%], [_nghost-%COMP%]:not([display=cover]).img-loaded    > .inner-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[_nghost-%COMP%]:not([display=cover]).img-error    > .inner-img[_ngcontent-%COMP%] {\n  color: var(--image-shell-color);\n  font-size: 12px;\n}\n[_nghost-%COMP%]:not([display=cover]).img-error::after {\n  content: attr(data-error);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  color: var(--image-shell-color);\n  background-color: var(--image-shell-loading-background);\n  font-size: 12px;\n}\n[display=cover][_nghost-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n[display=cover][_nghost-%COMP%]::before, [display=cover][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[display=cover][_nghost-%COMP%]    > .inner-img[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[display=cover].img-ssr[_nghost-%COMP%]::before, [display=cover].img-loaded[_nghost-%COMP%]::before {\n  display: none;\n}\n[animation=gradient][_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n[animation=gradient].img-ssr[_nghost-%COMP%]::before, [animation=gradient].img-loaded[_nghost-%COMP%]::before, [animation=gradient].img-error[_nghost-%COMP%]::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n[animation=spinner][_nghost-%COMP%] {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n[animation=spinner][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n[animation=spinner].img-ssr[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%], [animation=spinner].img-loaded[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%], [animation=spinner].img-error[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.add-overlay[_nghost-%COMP%] {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n.add-overlay.img-ssr[_nghost-%COMP%]::before, .add-overlay.img-loaded[_nghost-%COMP%]::before, .add-overlay.img-error[_nghost-%COMP%]::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaW1hZ2Utc2hlbGwvaW1hZ2Utc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFBRjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsaURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1JO0VBQ0UscURBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBRUEsY0FBQTtBQUxOO0FBV007RUFDRSxhQUFBO0FBVFI7QUFZTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVZSO0FBZU07RUFFRSwrQkFBQTtFQUNBLGVBQUE7QUFkUjtBQWtCTTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxlQUFBO0FBaEJSO0FBdUJFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQXJCSjtBQXdCSTtFQUVFLFdBQUE7QUF2Qk47QUEwQkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUF4Qk47QUE4Qk07RUFDRSxhQUFBO0FBNUJSO0FBa0NBO0VBQ0Usc0NBQUE7RUFDQSxtQ0FBQTtBQS9CRjtBQWtDRTtFQUNFLGtLQUNFO0VBQ0YsNEJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0FBakNKO0FBd0NJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtVQUFBLFlBQUE7QUF0Q047QUEwQ0U7RUFDRTtJQUNFLDZCQUFBO0VBeENKO0VBMkNFO0lBQ0UsNEJBQUE7RUF6Q0o7QUFDRjtBQWtDRTtFQUNFO0lBQ0UsNkJBQUE7RUF4Q0o7RUEyQ0U7SUFDRSw0QkFBQTtFQXpDSjtBQUNGO0FBNkNBO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQTFDRjtBQTRDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsMkRBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLHVDQUFBO0FBMUNKO0FBZ0RJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBOUNOO0FBbURBO0VBQ0UsbURBQUE7QUFoREY7QUFzREk7RUFDRSxjQUFBO0VBQ0EsaURBQUE7QUFwRE4iLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9pbWFnZS1zaGVsbC9pbWFnZS1zaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcclxuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAtLWltYWdlLXNoZWxsLWNvbG9yOiAjMzMzO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgLy8gQnkgZGVmYXVsdCwgaGlkZSB0aGUgc3Bpbm5lclxyXG4gICYgPiAuc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZGluZyBiYWNrZ3JvdW5kXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoW2Rpc3BsYXk9XCJjb3ZlclwiXSkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICYgPiAuaW5uZXItaW1nIHtcclxuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIsIG9wYWNpdHkgLjVzIGxpbmVhcjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgLy8gSW1hZ2Ugc2hvdWxkIGZpbGwgdGhlIHNwYWNlIHdoaWxlIGxvYWRpbmdcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbWctc3NyLFxyXG4gICAgJi5pbWctbG9hZGVkIHtcclxuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiAuaW5uZXItaW1nIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmltZy1lcnJvciB7XHJcbiAgICAgICYgPiAuaW5uZXItaW1nIHtcclxuICAgICAgICAvLyBGb3IgdGhlIEFsdCB0ZXh0XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLWNvbG9yKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciBiYWNrZ3JvdW5kXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtZXJyb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLWNvbG9yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gKiBOT1RFOiB3ZSBkaWRuJ3QgYWRkIC5pbWctZXJyb3Igc3R5bGVzIGZvciAnY292ZXInIGRpc3BsYXkgb24gcHVycG9zZS5cclxuICAvLyBJZiBpdCBpcyBkaXNwbGF5OiBjb3ZlclxyXG4gICZbZGlzcGxheT1cImNvdmVyXCJdIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIC8vIEluIGNvdmVyIGRpc3BsYXksIHdlIGNhbiBoYXZlIGNvbnRlbnQgaW5zaWRlIHRoZSBlbGVtZW50LCB0aHVzIHdlIG5lZWQgdG8gcHV0IHRoZXNlIGVsZW1lbnRzIGJlbmVhdGhcclxuICAgICY6OmJlZm9yZSxcclxuICAgICYgPiAuc3Bpbm5lciB7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuaW5uZXItaW1nIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW1nLXNzcixcclxuICAgICYuaW1nLWxvYWRlZCB7XHJcbiAgICAgIC8vIEhpZGUgbG9hZGluZyBiYWNrZ3JvdW5kIG9uY2UgdGhlIGltYWdlIGhhcyBsb2FkZWRcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcclxuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcclxuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcclxuXHJcbiAgLy8gVGhlIGFuaW1hdGlvbiB0aGF0IGdvZXMgYmVuZWF0aCB0aGUgbWFza3NcclxuICAmOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDglLCB2YXIoLS1pbWFnZS1zaGVsbC1hbmltYXRpb24tY29sb3IpIDE4JSwgdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKSAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAmLmltZy1zc3IsXHJcbiAgJi5pbWctbG9hZGVkLFxyXG4gICYuaW1nLWVycm9yIHtcclxuICAgIC8vIFJlc2V0IGJhY2tncm91bmQgYW5pbWF0aW9uXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBhbmltYXRpb246IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcclxuICAgIDAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxyXG4gICAgfVxyXG5cclxuICAgIDEwMCV7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0KFthbmltYXRpb249XCJzcGlubmVyXCJdKSB7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDI4cHg7XHJcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xyXG5cclxuICAmID4gLnNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gY2FsYyh2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpIC8gMikpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XHJcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcclxuICAgIGhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xyXG4gICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgJi5pbWctc3NyLFxyXG4gICYuaW1nLWxvYWRlZCxcclxuICAmLmltZy1lcnJvciB7XHJcbiAgICAmID4gLnNwaW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcclxuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XHJcblxyXG4gICYuaW1nLXNzcixcclxuICAmLmltZy1sb2FkZWQsXHJcbiAgJi5pbWctZXJyb3Ige1xyXG4gICAgLy8gQWRkIGJhY2tncm91bmQgb3ZlcmxheSBhZnRlciB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-shell',
                templateUrl: './image-shell.component.html',
                styleUrls: ['./image-shell.component.scss']
            }]
    }], function () { return [{ type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_2__["TransferStateHelper"] }]; }, { imageSSR: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.img-ssr']
        }], imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.img-loaded']
        }], imageError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.img-error']
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-error']
        }], backgroundImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundImage']
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.display']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "A0kb":
/*!*******************************************************************************!*\
  !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShowHidePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function() { return ShowHidePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




const _c0 = ["*"];
class ShowHidePasswordComponent {
    constructor() {
        this.show = false;
    }
    toggleShow() {
        this.show = !this.show;
        if (this.show) {
            this.input.type = 'text';
        }
        else {
            this.input.type = 'password';
        }
    }
}
ShowHidePasswordComponent.ɵfac = function ShowHidePasswordComponent_Factory(t) { return new (t || ShowHidePasswordComponent)(); };
ShowHidePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowHidePasswordComponent, selectors: [["app-show-hide-password"]], contentQueries: function ShowHidePasswordComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "type-toggle", 3, "click"], ["name", "eye-off-outline", 1, "show-option", 3, "hidden"], ["name", "eye-outline", 1, "hide-option", 3, "hidden"]], template: function ShowHidePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowHidePasswordComponent_Template_a_click_1_listener() { return ctx.toggleShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.show);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSw2QkFBQTtVQUFBLDRCQUFBO0FBQ0o7QUFDSTs7RUFFRSxpQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUVNOztFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93LWhpZGUtcGFzc3dvcmQvc2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnR5cGUtdG9nZ2xlIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XHJcblxyXG4gICAgLnNob3ctb3B0aW9uLFxyXG4gICAgLmhpZGUtb3B0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgLy8gSW4gY2FzZSB5b3Ugd2FudCB0byB1c2UgdGV4dCBpbnN0ZWFkIG9mIGljb25zXHJcbiAgICAgICY6bm90KGlvbi1pY29uKSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHidePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-hide-password',
                templateUrl: './show-hide-password.component.html',
                styleUrls: [
                    './show-hide-password.component.scss'
                ]
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"]]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyC5QK355uuknu0_ldVxFqqNqgp9oJi_eLc',
        authDomain: 'ion4fullpwa.firebaseapp.com',
        databaseURL: 'https://ion4fullpwa.firebaseio.com',
        projectId: 'ion4fullpwa',
        storageBucket: 'ion4fullpwa.appspot.com'
    },
    appShellConfig: {
        debug: false,
        networkDelay: 500
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B7gC":
/*!**************************************************************!*\
  !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
  \**************************************************************/
/*! exports provided: AspectRatioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function() { return AspectRatioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class AspectRatioComponent {
    constructor() {
        this.ratioPadding = '0px';
    }
    set ratio(ratio) {
        ratio = (ratio !== undefined && ratio !== null) ? ratio : { w: 1, h: 1 };
        const heightRatio = (ratio.h / ratio.w * 100) + '%';
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
    }
}
AspectRatioComponent.ɵfac = function AspectRatioComponent_Factory(t) { return new (t || AspectRatioComponent)(); };
AspectRatioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AspectRatioComponent, selectors: [["app-aspect-ratio"]], hostVars: 2, hostBindings: function AspectRatioComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.ratioPadding);
    } }, inputs: { ratio: "ratio" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "content-wrapper"]], template: function AspectRatioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYXNwZWN0LXJhdGlvL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2FzcGVjdC1yYXRpby9hc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspectRatioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aspect-ratio',
                templateUrl: './aspect-ratio.component.html',
                styleUrls: ['./aspect-ratio.component.scss']
            }]
    }], function () { return []; }, { ratioPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.padding']
        }], ratio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "O2zu":
/*!************************************************!*\
  !*** ./src/app/utils/transfer-state-helper.ts ***!
  \************************************************/
/*! exports provided: ImageShellState, TransferStateHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageShellState", function() { return ImageShellState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferStateHelper", function() { return TransferStateHelper; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var ImageShellState;
(function (ImageShellState) {
    ImageShellState["SSR"] = "ssr-loaded";
    ImageShellState["BROWSER_FROM_SSR"] = "browser-loaded-from-ssr";
    ImageShellState["NOT_FOUND"] = "not-found";
})(ImageShellState || (ImageShellState = {}));
class TransferStateHelper {
    constructor(platformId, state) {
        this.platformId = platformId;
        this.state = state;
    }
    // Method with generic param
    checkDataSourceState(stateKey, dataSource) {
        const dataKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])(stateKey);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            // When loading resource in the server, store the result in the TransferState
            // to use when transitioning to the browser from the SSR rendered app
            return dataSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
                this.state.set(dataKey, data);
            }));
        }
        else {
            // Check if we have data in the TransferState
            if (this.state.hasKey(dataKey)) {
                const stateData = this.state.get(dataKey, null);
                if (stateData && stateData !== null) {
                    const cachedDataSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stateData);
                    // After using it, remove data from state
                    // this.state.remove(dataKey);
                    // Set a flag to track if the dataSource is being cached in the server state or not
                    Object.assign(cachedDataSource, { ssr_state: true });
                    return cachedDataSource;
                }
                else {
                    return dataSource;
                }
            }
            else {
                return dataSource;
            }
        }
    }
    // This method checks if a specific image was previously handled in the server
    checkImageShellState(stateKey, imageSource) {
        let imageState = ImageShellState.NOT_FOUND;
        // Make sure we are not dealing with empty image sources
        if (imageSource !== '') {
            // We will store a collection of image sources in the state
            const dataKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])(stateKey);
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                // When loading resource in the server, store the result in the TransferState
                // to use when transitioning to the browser from the SSR rendered app
                const stateImages = this.state.get(dataKey, []);
                stateImages.push(imageSource);
                this.state.set(dataKey, stateImages);
                // Running in the server, in this execution the image is set in the transfer state for the first time
                imageState = ImageShellState.SSR;
            }
            else {
                // Check if we have data in the TransferState
                if (this.state.hasKey(dataKey)) {
                    const stateData = this.state.get(dataKey, []);
                    // Check if the image was previously loaded in the server
                    if (stateData.includes(imageSource)) {
                        imageState = ImageShellState.BROWSER_FROM_SSR;
                    }
                }
            }
        }
        return imageState;
    }
}
TransferStateHelper.ɵfac = function TransferStateHelper_Factory(t) { return new (t || TransferStateHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"])); };
TransferStateHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransferStateHelper, factory: TransferStateHelper.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransferStateHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _utils_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/seo/seo.service */ "yrgz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/history-helper.service */ "1oPy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");















function AppComponent_ion_menu_toggle_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-menu-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", p_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", p_r2.ionicIcon ? p_r2.ionicIcon : "")("src", p_r2.customIcon ? p_r2.customIcon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r2.title, " ");
} }
function AppComponent_ion_menu_toggle_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-menu-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", p_r4.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", p_r4.ionicIcon ? p_r4.ionicIcon : "")("src", p_r4.customIcon ? p_r4.customIcon : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r4.title, " ");
} }
const _c0 = function () { return { w: 1, h: 1 }; };
const _c1 = function () { return ["/forms-and-validations"]; };
const _c2 = function () { return ["/forms-filters"]; };
const _c3 = function () { return ["/firebase/auth/sign-in"]; };
const _c4 = function () { return ["/firebase/crud/listing"]; };
const _c5 = function () { return ["/maps"]; };
const _c6 = function () { return ["/video-playlist"]; };
const _c7 = function () { return ["/showcase/app-shell"]; };
const _c8 = function () { return ["/showcase/route-resolvers-ux"]; };
const _c9 = function () { return ["/showcase/custom-components"]; };
const { SplashScreen } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
class AppComponent {
    // Inject HistoryHelperService in the app.components.ts so its available app-wide
    constructor(translate, historyHelper, seoService) {
        this.translate = translate;
        this.historyHelper = historyHelper;
        this.seoService = seoService;
        this.appPages = [
            {
                title: 'Categories',
                url: '/app/categories',
                ionicIcon: 'list-outline'
            },
            {
                title: 'Profile',
                url: '/app/user',
                ionicIcon: 'person-outline'
            },
            {
                title: 'Contact Card',
                url: '/contact-card',
                customIcon: './assets/custom-icons/side-menu/contact-card.svg'
            },
            {
                title: 'Notifications',
                url: '/app/notifications',
                ionicIcon: 'notifications-outline'
            }
        ];
        this.accountPages = [
            {
                title: 'Log In',
                url: '/auth/login',
                ionicIcon: 'log-in-outline'
            },
            {
                title: 'Sign Up',
                url: '/auth/signup',
                ionicIcon: 'person-add-outline'
            },
            {
                title: 'Tutorial',
                url: '/walkthrough',
                ionicIcon: 'school-outline'
            },
            {
                title: 'Getting Started',
                url: '/getting-started',
                ionicIcon: 'rocket-outline'
            },
            {
                title: '404 page',
                url: '/page-not-found',
                ionicIcon: 'alert-circle-outline'
            }
        ];
        this.textDir = 'ltr';
        this.initializeApp();
        this.setLanguage();
    }
    initializeApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield SplashScreen.hide();
            }
            catch (err) {
                console.log('This is normal in a browser', err);
            }
        });
    }
    setLanguage() {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
        // this is to determine the text direction depending on the selected language
        // for the purpose of this example we determine that only arabic and hebrew are RTL.
        // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
        // });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_history_helper_service__WEBPACK_IMPORTED_MODULE_5__["HistoryHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 93, vars: 24, consts: [[3, "dir"], ["contentId", "menu-content", "when", "false"], ["contentId", "menu-content", 1, "app-sidemenu"], [1, "user-details-wrapper"], ["size", "4"], [3, "ratio"], ["animation", "spinner", 1, "user-avatar", 3, "src"], ["size", "8", 1, "user-info-wrapper"], [1, "user-name"], [1, "user-handle"], [1, "user-stats-wrapper", "user-details-wrapper"], [1, "user-stat-value"], [1, "user-stat-name"], ["autoHide", "false", 4, "ngFor", "ngForOf"], ["autoHide", "false"], [3, "routerLink"], ["slot", "start", "src", "./assets/custom-icons/side-menu/forms.svg"], ["slot", "start", "name", "options-outline"], ["auto-hide", "false"], ["slot", "start", "name", "logo-firebase"], ["slot", "start", "name", "map-outline"], ["slot", "start", "name", "videocam-outline"], ["slot", "start", "name", "egg-outline"], ["slot", "start", "name", "cog-outline"], ["slot", "start", "name", "color-wand-outline"], ["id", "menu-content"], ["slot", "start", 3, "name", "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-split-pane", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-aspect-ratio", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-image-shell", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ionic Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "@IonicThemes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "1553");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "537");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppComponent_ion_menu_toggle_30_Template, 5, 4, "ion-menu-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-menu-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Forms & Validations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-menu-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Firebase Auth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Firebase CRUD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Functionalities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-menu-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Maps & Geolocation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Video Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, AppComponent_ion_menu_toggle_74_Template, 5, 4, "ion-menu-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Showcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-menu-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " App Shell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Route Resolvers UX ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Custom Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "ion-router-outlet", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("dir", ctx.textDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "./assets/sample-images/ionicthemes_logo.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accountPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c9));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_7__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonMenuToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-alt-shade);\n  --page-headers-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.4);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --background: var(--ion-color-dark-tint);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  color: var(--ion-color-lightest);\n  padding: var(--page-margin);\n  align-items: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]    + .user-details-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-handle[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-value[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-weight: 500;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-light-shade);\n  --ion-text-color-rgb: var(--ion-color-light-shade-rgb);\n  --ion-item-background: var(--page-background);\n  --ion-item-border-color: transparent;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  --color: rgba(var(--ion-color-light-shade-rgb), 0.6);\n  text-transform: uppercase;\n  box-shadow: inset 0px -4px 8px -2px var(--page-headers-shadow-color);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n  --padding-start: var(--page-margin);\n  --background-activated: var(--ion-color-medium);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esa0RBQUE7RUFFQSxvRUFBQTtBQUZGOztBQU9FO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3Q0FBQTtBQUpKOztBQU9FO0VBQ0Usb0NBQUE7QUFMSjs7QUFRRTtFQUNFLDhCQUFBO0VBR0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUk7RUFDRSxnQkFBQTtBQVJOOztBQVlFO0VBQ0UsZ0NBQUE7QUFWSjs7QUFZSTtFQUNFLG1CQUFBO0FBVk47O0FBYUk7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYTjs7QUFlRTtFQUNFLGtCQUFBO0FBYko7O0FBZUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBYk47O0FBZ0JJO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBZE47O0FBbUJFO0VBQ0UsOENBQUE7RUFDQSxzREFBQTtFQUNBLDZDQUFBO0VBQ0Esb0NBQUE7QUFqQko7O0FBbUJJO0VBQ0Usb0RBQUE7RUFFQSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0EseUNBQUE7VUFBQSx3Q0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQW5CTjs7QUFzQkk7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0NBQUE7QUFwQk47O0FBdUJJO0VBQ0UsbUNBQUE7QUFyQk4iLCJmaWxlIjoic3JjL2FwcC9zaWRlLW1lbnUvc3R5bGVzL3NpZGUtbWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLWFsdC1zaGFkZSk7XHJcblxyXG4gIC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjQpO1xyXG59XHJcblxyXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuLmFwcC1zaWRlbWVudSB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmICsgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLWluZm8td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuXHJcbiAgICAudXNlci1uYW1lIHtcclxuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1oYW5kbGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLXN0YXRzLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC51c2VyLXN0YXQtdmFsdWUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1zdGF0LW5hbWUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWVudSBsaXN0IGl0ZW1zXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKTtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAtLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZS1yZ2IpLCAwLjYpO1xyXG5cclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC00cHggOHB4IC0ycHggdmFyKC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcik7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcblxyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "app-image-shell.user-avatar[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.15);\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUFBO0VBQ0EsZ0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbWVudS9zdHlsZXMvc2lkZS1tZW51LnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xyXG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcclxuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */", "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUFmTjtFQW9CSTtJQUNFLGVBQUE7RUFsQk47QUFDRjtBQXVCQSxxREFBQTtBQUNBO0VBWU07SUFDRSxlQUFBO0VBaENOO0FBQ0Y7QUFxQ0Esa0RBQUE7QUFhQSxxQ0FBQTtBQWFBLGlEQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1tZW51L3N0eWxlcy9zaWRlLW1lbnUucmVzcG9uc2l2ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKE5vdGU6IERvbid0IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGRldmljZXMgYXMgaXQgbWF5IGJyZWFrIHRoZSBjb3JyZWN0IGNzcyBwcmVjZWRlbmNlKVxyXG5cclxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXHJcbi8vIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80Nzc1MDI2MS8xMTE2OTU5KVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG4gIC5hcHAtc2lkZW1lbnUge1xyXG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcclxuICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNSwgNVMsIDVDIGFuZCA1U0UgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTY4cHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXHJcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiA0MCAvIDcxKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG4gIC5pbnRlcmVzdHMtdG8tZm9sbG93LXNsaWRlIHtcclxuICAgIC5jdXN0b20tY2hlY2tib3gge1xyXG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxyXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxyXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG5cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIFggLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogODEycHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcclxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcclxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcclxue1xyXG5cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXHJcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXHJcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpXHJcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxyXG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxyXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XHJcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxyXG57XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: [
                    './side-menu/styles/side-menu.scss',
                    './side-menu/styles/side-menu.shell.scss',
                    './side-menu/styles/side-menu.responsive.scss'
                ]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_5__["HistoryHelperService"] }, { type: _utils_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "a4Kx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");




















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: (platformId, response) => {
                return () => {
                    // In the server.ts we added a custom response header with information about the device requesting the app
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(platformId)) {
                        if (response && response !== null) {
                            // Get custom header from the response sent from the server.ts
                            const mobileDeviceHeader = response.get('mobile-device');
                            // Set Ionic config mode?
                        }
                    }
                };
            },
            deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__["RESPONSE"]]],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                            useFactory: (createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
                        }
                    })
                ],
                providers: [
                    { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                        useFactory: (platformId, response) => {
                            return () => {
                                // In the server.ts we added a custom response header with information about the device requesting the app
                                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(platformId)) {
                                    if (response && response !== null) {
                                        // Get custom header from the response sent from the server.ts
                                        const mobileDeviceHeader = response.get('mobile-device');
                                        // Set Ionic config mode?
                                    }
                                }
                            };
                        },
                        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__["RESPONSE"]]],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZpN7":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-shell/image-shell.component */ "2gss");
/* harmony import */ var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-shell/text-shell.component */ "zK/y");







class ShellModule {
}
ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShellModule });
ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShellModule_Factory(t) { return new (t || ShellModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShellModule, { declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__["AspectRatioComponent"],
        _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"],
        _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]], exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__["AspectRatioComponent"],
        _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"],
        _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__["AspectRatioComponent"],
                    _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"],
                    _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
                ],
                exports: [
                    _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_3__["AspectRatioComponent"],
                    _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"],
                    _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_5__["TextShellComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "aSMC":
/*!***************************************************************!*\
  !*** ./src/app/components/google-map/google-map.component.ts ***!
  \***************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GoogleMapComponent {
    constructor(_elementRef, platformId) {
        this._elementRef = _elementRef;
        this.platformId = platformId;
        this.$mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._mapIdledOnce = false;
    }
    ngOnInit() {
        // there are some issues with maps in server side
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.initMap();
        }
    }
    initMap() {
        this._el = this._elementRef.nativeElement;
        this._map = new google.maps.Map(this._el, this.mapOptions);
        // Workarround for init method: try to catch the first idle event after the map creation
        // (this._mapIdledOnce). The following idle events don't matter.
        const _ready_listener = this._map.addListener('idle', () => {
            console.log('mapReady - IDLE');
            if (!this._mapIdledOnce) {
                this.$mapReady.emit(this._map);
                this._mapIdledOnce = true;
                // Stop listening to event, the map is ready
                google.maps.event.removeListener(_ready_listener);
            }
        });
    }
}
GoogleMapComponent.ɵfac = function GoogleMapComponent_Factory(t) { return new (t || GoogleMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
GoogleMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleMapComponent, selectors: [["google-map"]], inputs: { mapOptions: "mapOptions" }, decls: 0, vars: 0, template: function GoogleMapComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'google-map',
                template: ''
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, { mapOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dAQS":
/*!*************************************************************************!*\
  !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
  \*************************************************************************/
/*! exports provided: CountdownTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function() { return CountdownTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








function CountdownTimerComponent_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._daysLeft);
} }
function CountdownTimerComponent_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1._hoursLeft);
} }
function CountdownTimerComponent_ion_col_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2._minutesLeft);
} }
function CountdownTimerComponent_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3._secondsLeft);
} }
class CountdownTimerComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this._initialUnit = 'hour';
        this._endingUnit = 'second';
        this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // DIVISORS
        // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day
        this._dayDivisor = (60 * 60 * 24);
        // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour
        this._hourDivisor = (60 * 60);
        // 60 seconds = 1 minute
        this._minuteDivisor = 60;
        this._secondDivisor = 1;
        // MODULUS
        // Neutral modulus
        this._dayModulus = (secondsLeft) => secondsLeft;
        // The modulus operator (%) returns the division remainder.
        // To figure out how many hours are left after taking in consideration the days, we should do:
        //    (secondsLeft % hourModulus) / hourDivisor
        // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
        //    (90000s % 86400s) / 3600s = 1h
        this._hourModulus = (secondsLeft) => (secondsLeft % this._dayDivisor);
        this._minuteModulus = (secondsLeft) => (secondsLeft % this._hourDivisor);
        this._secondModulus = (secondsLeft) => (secondsLeft % this._minuteDivisor);
    }
    set end(endingTime) {
        this._endingTime = (endingTime !== undefined && endingTime !== null) ? dayjs__WEBPACK_IMPORTED_MODULE_4__(endingTime) : dayjs__WEBPACK_IMPORTED_MODULE_4__();
    }
    set units(units) {
        // 'day', 'hour, 'minute', 'second'
        this._initialUnit = (units !== undefined && (units.from !== undefined && units.from !== null)) ? units.from : 'hour';
        this._endingUnit = (units !== undefined && (units.to !== undefined && units.to !== null)) ? units.to : 'second';
        // For 'day' unit, use the default modulus
        // Adjust modulus depending on the unit
        if (this._initialUnit === 'hour') {
            // Cancelation modulus
            this._dayModulus = (secondsLeft) => 1;
            // Neutral modulus
            this._hourModulus = (secondsLeft) => secondsLeft;
        }
        if (this._initialUnit === 'minute') {
            // Cancelation modulus
            this._dayModulus = (secondsLeft) => 1;
            this._hourModulus = (secondsLeft) => 1;
            // Neutral modulus
            this._minuteModulus = (secondsLeft) => secondsLeft;
        }
        if (this._initialUnit === 'second') {
            // Cancelation modulus
            this._dayModulus = (secondsLeft) => 1;
            this._hourModulus = (secondsLeft) => 1;
            this._minuteModulus = (secondsLeft) => 1;
            // Neutral modulus
            this._secondModulus = (secondsLeft) => secondsLeft;
        }
    }
    ngOnInit() {
        // I believe if we run this on SSR, it won't ever trigger the change detection and thus the server will be stuck loading
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeSubject)).subscribe((val) => {
                this.updateValues();
            }, (error) => console.error(error), () => console.log('[takeUntil] complete'));
        }
        else {
            this.updateValues();
        }
    }
    ngOnDestroy() {
        this._unsubscribeSubject.next();
        this._unsubscribeSubject.complete();
    }
    updateValues() {
        const secondsLeft = this._endingTime.diff(dayjs__WEBPACK_IMPORTED_MODULE_4__(), 'second');
        this._daysLeft = Math.floor(this._dayModulus(secondsLeft) / this._dayDivisor);
        this._hoursLeft = Math.floor(this._hourModulus(secondsLeft) / this._hourDivisor);
        this._minutesLeft = Math.floor(this._minuteModulus(secondsLeft) / this._minuteDivisor);
        this._secondsLeft = Math.floor(this._secondModulus(secondsLeft) / this._secondDivisor);
    }
}
CountdownTimerComponent.ɵfac = function CountdownTimerComponent_Factory(t) { return new (t || CountdownTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
CountdownTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountdownTimerComponent, selectors: [["app-countdown-timer"]], inputs: { end: "end", units: "units" }, decls: 5, vars: 4, consts: [[1, "countdown"], ["class", "time", 4, "ngIf"], [1, "time"], [1, "time-unit"], [1, "inner-time"], [1, "time-value"]], template: function CountdownTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownTimerComponent_ion_col_1_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CountdownTimerComponent_ion_col_2_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CountdownTimerComponent_ion_col_3_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CountdownTimerComponent_ion_col_4_Template, 6, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day" && ctx._endingUnit !== "day" || ctx._initialUnit === "hour" || ctx._endingUnit === "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day" && (ctx._endingUnit !== "day" && ctx._endingUnit !== "hour") || ctx._initialUnit === "hour" && ctx._endingUnit !== "hour" || ctx._initialUnit === "minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._endingUnit === "second");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"]], styles: ["[_nghost-%COMP%] {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n[_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: flex;\n  flex-direction: var(--countdown-time-flex-direction);\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n[_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n[fill=countdown][_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n[fill=time][_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n[fill=inner-time][_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFFQSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsNENBQUE7RUFFQSxjQUFBO0FBVkY7QUFZRTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSx1QkFBQTtFQUNBLGlCQUFBO0FBWEo7QUFjRTtFQUNFLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYko7QUFlSTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFiTjtBQWdCSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQk47QUFzQkU7RUFDRSwwQ0FBQTtFQUNBLDRDQUFBO0FBcEJKO0FBeUJFO0VBM0VBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBc0RGO0FBd0JFO0VBakZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBNkRGO0FBdUJFO0VBdkZBLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLHdDQUFBO0FBb0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24tdGltZXIvY291bnRkb3duLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZpbGwtY29udGFpbmVyKCl7XHJcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAtLWNvdW50ZG93bi1tYXJnaW46IDBweDtcclxuICAtLWNvdW50ZG93bi1wYWRkaW5nOiAwcHg7XHJcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcclxuICAtLWNvdW50ZG93bi10aW1lLXBhZGRpbmc6IDBweDtcclxuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogMnB4O1xyXG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogMHB4O1xyXG5cclxuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlcjogbm9uZTtcclxuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiBub25lO1xyXG5cclxuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogI0NDQztcclxuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiAjQ0NDO1xyXG5cclxuICAtLWNvdW50ZG93bi10aW1lLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIC5jb3VudGRvd24ge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1wYWRkaW5nKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnRpbWUge1xyXG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLXRpbWUtcGFkZGluZyk7XHJcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnRpbWUtdW5pdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHdpZHRoOiAyZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbWUtdmFsdWUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi12YWx1ZS1jb2xvcik7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxuXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgdHdvIGNoYXJhY3RlcnNcclxuICAgICAgLy8gQXMgY2ggKHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgJzAnKSB1bml0IGlzIG5vdCAxMDAlIHN1cHBvcnRlZCwgd2Ugd2lsbCB1c2UgZXggKGhlaWdodCBvZiB0aGUgJ3gnIGNoYXJhY3RlcikgYXMgYSBmYWxsYmFja1xyXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Nzcy91bml0cy12YWx1ZXMvXHJcbiAgICAgIG1pbi13aWR0aDogMi4yZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXIsIHRoYXQncyB3aHkgd2Ugc2V0IDIuMmV4XHJcbiAgICAgIG1pbi13aWR0aDogMi4xY2g7IC8vIGNoIGlzIHRoZSBvbmx5IGZvbnQgdW5pdCBiYXNlZCBvbiB0aGUgd2lkdGggb2YgY2hhcmFjdGVyc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlubmVyLXRpbWUge1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW4pO1xyXG4gICAgcGFkZGluZzogdmFyKC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZyk7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbZmlsbD1cImNvdW50ZG93blwiXSkge1xyXG4gIC5jb3VudGRvd24ge1xyXG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0KFtmaWxsPVwidGltZVwiXSkge1xyXG4gIC50aW1lIHtcclxuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdChbZmlsbD1cImlubmVyLXRpbWVcIl0pIHtcclxuICAuaW5uZXItdGltZSB7XHJcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countdown-timer',
                templateUrl: './countdown-timer.component.html',
                styleUrls: [
                    './countdown-timer.component.scss'
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { end: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], units: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "diig":
/*!*********************************************!*\
  !*** ./src/app/utils/seo/seo-data.model.ts ***!
  \*********************************************/
/*! exports provided: SeoDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoDataModel", function() { return SeoDataModel; });
class SeoDataModel {
}


/***/ }),

/***/ "fpyr":
/*!***************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckboxWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function() { return CheckboxWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");

// Reference to the @ionic/angular Components List:
// https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


const _c0 = ["*"];
class CheckboxWrapperComponent {
    constructor() { }
    ngAfterContentInit() {
        // ContentChild is set
        this.isChecked = this.checkbox.checked;
        // Subscribe to changes
        this.checkbox.ionChange.subscribe(changes => {
            this.isChecked = changes.detail.checked;
        });
    }
}
CheckboxWrapperComponent.ɵfac = function CheckboxWrapperComponent_Factory(t) { return new (t || CheckboxWrapperComponent)(); };
CheckboxWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxWrapperComponent, selectors: [["app-checkbox-wrapper"]], contentQueries: function CheckboxWrapperComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCheckbox"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
    } }, hostVars: 2, hostBindings: function CheckboxWrapperComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checkbox-checked", ctx.isChecked);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkbox-wrapper',
                templateUrl: './checkbox-wrapper.component.html',
                styleUrls: [
                    './checkbox-wrapper.component.scss'
                ]
            }]
    }], function () { return []; }, { checkbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCheckbox"]]
        }], isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.checkbox-checked']
        }] }); })();


/***/ }),

/***/ "gLxg":
/*!*******************************************************************!*\
  !*** ./src/app/components/rating-input/rating-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: RatingInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function() { return RatingInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





function RatingInputComponent_ion_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_ion_button_0_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.rate(i_r2 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.value === undefined ? r_r1 === 1 ? "star" : r_r1 === 2 ? "star-half" : "star-outline" : ctx_r0.value > i_r2 ? ctx_r0.value < i_r2 + 1 ? "star-half" : "star" : "star-outline");
} }
class RatingInputComponent {
    constructor() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = () => { }; // Noop function
    }
    ngOnInit() {
        const states = [];
        for (let i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    }
    get value() {
        return this.innerValue;
    }
    set value(val) {
        if (val !== this.innerValue) {
            this.innerValue = val;
            this.propagateChange(val);
        }
    }
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    rate(amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    }
}
RatingInputComponent.ɵfac = function RatingInputComponent_Factory(t) { return new (t || RatingInputComponent)(); };
RatingInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingInputComponent, selectors: [["app-rating-input"]], inputs: { max: "max", readOnly: "readOnly" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RatingInputComponent), multi: true }
        ])], decls: 1, vars: 1, consts: [["class", "rating-icon", "fill", "clear", "shape", "round", 3, "click", 4, "ngFor", "ngForOf"], ["fill", "clear", "shape", "round", 1, "rating-icon", 3, "click"], ["slot", "icon-only", 3, "name"]], template: function RatingInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingInputComponent_ion_button_0_Template, 2, 1, "ion-button", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], styles: ["app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctaW5wdXQvcmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVDO0VBQ0csc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDRixPQUFBO0VBQ0MseUJBQUE7QUFESCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLWlucHV0L3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yYXRpbmctaW5wdXQge1xyXG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tcmF0aW5nLWNvbG9yOiAjMDAwO1xyXG4gIC0tcmF0aW5nLXNpemU6IDMycHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuXHRpb24tYnV0dG9uLnJhdGluZy1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0tcmF0aW5nLWNvbG9yKTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1yYXRpbmctY29sb3IpO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdCAgd2lkdGg6IHZhcigtLXJhdGluZy1zaXplKTtcclxuXHR9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating-input',
                templateUrl: './rating-input.component.html',
                styleUrls: ['./rating-input.component.scss'],
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => RatingInputComponent), multi: true }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, { max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shell/shell.module */ "ZpN7");
/* harmony import */ var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-wrapper/checkbox-wrapper.component */ "fpyr");
/* harmony import */ var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-hide-password/show-hide-password.component */ "A0kb");
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./countdown-timer/countdown-timer.component */ "dAQS");
/* harmony import */ var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter-input/counter-input.component */ "lfmG");
/* harmony import */ var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating-input/rating-input.component */ "gLxg");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./google-map/google-map.component */ "aSMC");












class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ], _shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxWrapperComponent"],
        _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"],
        _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_7__["CountdownTimerComponent"],
        _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__["CounterInputComponent"],
        _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_9__["RatingInputComponent"],
        _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__["GoogleMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]], exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"],
        _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxWrapperComponent"],
        _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"],
        _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_7__["CountdownTimerComponent"],
        _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__["CounterInputComponent"],
        _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_9__["RatingInputComponent"],
        _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__["GoogleMapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
                ],
                declarations: [
                    _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxWrapperComponent"],
                    _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"],
                    _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_7__["CountdownTimerComponent"],
                    _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__["CounterInputComponent"],
                    _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_9__["RatingInputComponent"],
                    _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__["GoogleMapComponent"]
                ],
                exports: [
                    _shell_shell_module__WEBPACK_IMPORTED_MODULE_4__["ShellModule"],
                    _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxWrapperComponent"],
                    _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordComponent"],
                    _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_7__["CountdownTimerComponent"],
                    _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_8__["CounterInputComponent"],
                    _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_9__["RatingInputComponent"],
                    _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_10__["GoogleMapComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lfmG":
/*!*********************************************************************!*\
  !*** ./src/app/components/counter-input/counter-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: counterRangeValidator, CounterInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterRangeValidator", function() { return counterRangeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterInputComponent", function() { return CounterInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




function counterRangeValidator(minValue, maxValue) {
    return (c) => {
        const err = {
            rangeError: {
                given: c.value,
                min: minValue || 0,
                max: maxValue || 10
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
class CounterInputComponent {
    constructor() {
        // tslint:disable-next-line:no-input-rename
        this._counterValue = 0;
        this.propagateChange = () => { }; // Noop function
        this.validateFn = () => { }; // Noop function
    }
    get counterValue() {
        return this._counterValue;
    }
    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(val);
    }
    ngOnChanges(inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
        }
    }
    writeValue(value) {
        if (value) {
            this.counterValue = value;
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    increase() {
        this.counterValue++;
    }
    decrease() {
        this.counterValue--;
    }
    validate(c) {
        return this.validateFn(c);
    }
}
CounterInputComponent.ɵfac = function CounterInputComponent_Factory(t) { return new (t || CounterInputComponent)(); };
CounterInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterInputComponent, selectors: [["app-counter-input"]], inputs: { _counterValue: ["counterValue", "_counterValue"], counterRangeMax: ["max", "counterRangeMax"], counterRangeMin: ["min", "counterRangeMin"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CounterInputComponent), multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CounterInputComponent), multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 1, consts: [[1, "button-outer"], [1, "button-wrapper"], [1, "counter-icon", 3, "click"], ["slot", "icon-only", "name", "remove"], [1, "counter-value"], ["slot", "icon-only", "name", "add"]], template: function CounterInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterInputComponent_Template_ion_button_click_2_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterInputComponent_Template_ion_button_click_8_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._counterValue);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-color-activated: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  margin: 0px;\n}\napp-counter-input ion-button.counter-icon.button-solid {\n  --background: var(--counter-background);\n  --background-activated: var(--counter-color);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color-activated);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n  width: 2.2ch;\n  text-align: center;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQWlCRSxXQUFBO0FBaEJKO0FBQUk7RUFDRSx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEpBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBSUU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtBQUZKO0FBT0k7RUFDRSwwQkFBQTtBQUxOO0FBT007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUxSO0FBT1E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxWO0FBV0U7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0FBVEo7QUFXSTtFQUNFLGFBQUE7QUFUTjtBQWNRO0VBQ0UsNEpBQUE7QUFaVjtBQWdCTTtFQUVFLGlCQUFBO0FBZlI7QUFpQlE7RUFDRSw0SkFBQTtBQWZWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLWlucHV0L2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY291bnRlci1pbnB1dCB7XHJcbiAgLS1jb3VudGVyLWJhY2tncm91bmQ6ICMwMDA7XHJcbiAgLS1jb3VudGVyLWNvbG9yOiAjRkZGO1xyXG4gIC0tY291bnRlci1jb2xvci1hY3RpdmF0ZWQ6ICNGRkY7XHJcbiAgLS1jb3VudGVyLWJvcmRlci1jb2xvcjogIzAwMDtcclxuICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogNTAlO1xyXG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiA1MCU7XHJcbiAgLS1jb3VudGVyLXNpemU6IDMwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XHJcbiAgICAmLmJ1dHRvbi1zb2xpZCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY291bnRlci1iYWNrZ3JvdW5kKTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tY291bnRlci1jb2xvcik7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWNvdW50ZXItY29sb3IpO1xyXG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0tY291bnRlci1jb2xvci1hY3RpdmF0ZWQpO1xyXG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb3VudGVyLWJvcmRlci1jb2xvcik7XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1pbm5lcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtb3V0ZXIpO1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDNweDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gIC5jb3VudGVyLXZhbHVlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb3VudGVyLWNvbG9yKTtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMi4yY2g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJztcclxuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XHJcbiAgfVxyXG5cclxuICAmOm5vdChbYmFzaWNdKSB7XHJcbiAgICAvLyBGb3JjZSBlYWNoIGNvdW50ZXIgYnV0dG9uIHRvIGhhdmUgYSAxOjEgYXNwZWN0IHJhdGlvXHJcbiAgICAuYnV0dG9uLW91dGVyIHtcclxuICAgICAgd2lkdGg6IHZhcigtLWNvdW50ZXItc2l6ZSk7XHJcblxyXG4gICAgICAuYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG5cclxuICAgICAgICAuY291bnRlci1pY29uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2Jhc2ljXSB7XHJcbiAgICAtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcjogMTJweDtcclxuICAgIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiAwcHg7XHJcblxyXG4gICAgLmNvdW50ZXItdmFsdWUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tb3V0ZXIge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIC8vIFRvIGF2b2lkIGRvdWJsZSBib3JkZXJcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xyXG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-input',
                templateUrl: './counter-input.component.html',
                styleUrls: ['./counter-input.component.scss'],
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CounterInputComponent), multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CounterInputComponent), multi: true }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, { _counterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['counterValue']
        }], counterRangeMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['max']
        }], counterRangeMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['min']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        redirectTo: '/walkthrough',
        pathMatch: 'full'
    },
    {
        path: 'walkthrough',
        loadChildren: () => Promise.all(/*! import() | walkthrough-walkthrough-module */[__webpack_require__.e("default~categories-categories-module~contact-card-contact-card-module~walkthrough-walkthrough-module"), __webpack_require__.e("default~signup-signup-module~walkthrough-walkthrough-module"), __webpack_require__.e("walkthrough-walkthrough-module")]).then(__webpack_require__.bind(null, /*! ./walkthrough/walkthrough.module */ "fE2E")).then(m => m.WalkthroughPageModule)
    },
    {
        path: 'getting-started',
        loadChildren: () => __webpack_require__.e(/*! import() | getting-started-getting-started-module */ "getting-started-getting-started-module").then(__webpack_require__.bind(null, /*! ./getting-started/getting-started.module */ "Zcw4")).then(m => m.GettingStartedPageModule)
    },
    {
        path: 'auth',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth/login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'auth/signup',
        loadChildren: () => Promise.all(/*! import() | signup-signup-module */[__webpack_require__.e("default~signup-signup-module~walkthrough-walkthrough-module"), __webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "T9iC")).then(m => m.SignupPageModule)
    },
    {
        path: 'auth/forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "JgOp")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'app',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'contact-card',
        loadChildren: () => Promise.all(/*! import() | contact-card-contact-card-module */[__webpack_require__.e("default~categories-categories-module~contact-card-contact-card-module~walkthrough-walkthrough-module"), __webpack_require__.e("contact-card-contact-card-module")]).then(__webpack_require__.bind(null, /*! ./contact-card/contact-card.module */ "lgZj")).then(m => m.ContactCardPageModule)
    },
    {
        path: 'forms-and-validations',
        loadChildren: () => Promise.all(/*! import() | forms-validations-forms-validations-module */[__webpack_require__.e("common"), __webpack_require__.e("forms-validations-forms-validations-module")]).then(__webpack_require__.bind(null, /*! ./forms/validations/forms-validations.module */ "uumE")).then(m => m.FormsValidationsPageModule)
    },
    {
        path: 'forms-filters',
        loadChildren: () => __webpack_require__.e(/*! import() | forms-filters-forms-filters-module */ "forms-filters-forms-filters-module").then(__webpack_require__.bind(null, /*! ./forms/filters/forms-filters.module */ "F/Sz")).then(m => m.FormsFiltersPageModule)
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() | page-not-found-page-not-found-module */ "page-not-found-page-not-found-module").then(__webpack_require__.bind(null, /*! ./page-not-found/page-not-found.module */ "w7TL")).then(m => m.PageNotFoundModule)
    },
    {
        path: 'showcase',
        loadChildren: () => __webpack_require__.e(/*! import() | showcase-showcase-module */ "showcase-showcase-module").then(__webpack_require__.bind(null, /*! ./showcase/showcase.module */ "Zah/")).then(m => m.ShowcasePageModule)
    },
    {
        path: 'firebase',
        redirectTo: 'firebase/auth/sign-in',
        pathMatch: 'full'
    },
    {
        path: 'firebase/auth',
        loadChildren: () => Promise.all(/*! import() | firebase-auth-firebase-auth-module */[__webpack_require__.e("default~firebase-auth-firebase-auth-module~firebase-crud-firebase-crud-module"), __webpack_require__.e("firebase-auth-firebase-auth-module")]).then(__webpack_require__.bind(null, /*! ./firebase/auth/firebase-auth.module */ "duP/")).then(m => m.FirebaseAuthModule)
    },
    {
        path: 'firebase/crud',
        loadChildren: () => Promise.all(/*! import() | firebase-crud-firebase-crud-module */[__webpack_require__.e("default~firebase-auth-firebase-auth-module~firebase-crud-firebase-crud-module"), __webpack_require__.e("firebase-crud-firebase-crud-module")]).then(__webpack_require__.bind(null, /*! ./firebase/crud/firebase-crud.module */ "FZM/")).then(m => m.FirebaseCrudModule)
    },
    {
        path: 'maps',
        loadChildren: () => __webpack_require__.e(/*! import() | maps-maps-module */ "maps-maps-module").then(__webpack_require__.bind(null, /*! ./maps/maps.module */ "x04h")).then(m => m.MapsPageModule)
    },
    {
        path: 'video-playlist',
        loadChildren: () => __webpack_require__.e(/*! import() | video-playlist-video-playlist-module */ "video-playlist-video-playlist-module").then(__webpack_require__.bind(null, /*! ./video-playlist/video-playlist.module */ "v9/t")).then(m => m.VideoPlaylistPageModule)
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    },
    {
        path: 'tab4',
        loadChildren: () => __webpack_require__.e(/*! import() | tab4-tab4-module */ "tab4-tab4-module").then(__webpack_require__.bind(null, /*! ./tab4/tab4.module */ "1GDv")).then(m => m.Tab4PageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                // This value is required for server-side rendering to work.
                initialNavigation: 'enabled',
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        // This value is required for server-side rendering to work.
                        initialNavigation: 'enabled',
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yrgz":
/*!******************************************!*\
  !*** ./src/app/utils/seo/seo.service.ts ***!
  \******************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _seo_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seo-data.model */ "diig");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "a4Kx");












class SeoService {
    constructor(activatedRoute, router, meta, title, document, platformId, request, baseHref, platformLocation) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.meta = meta;
        this.title = title;
        this.document = document;
        this.platformId = platformId;
        this.request = request;
        this.baseHref = baseHref;
        this.platformLocation = platformLocation;
        this.canonicalUrl = 'https://YOUR-CANONICAL-URL.com';
        this._routerSubscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(route => route.data))
            .subscribe(event => {
            // tslint:disable-next-line:no-string-literal
            const routeData = event['data'];
            const currentRouteSeoData = new _seo_data_model__WEBPACK_IMPORTED_MODULE_5__["SeoDataModel"]();
            if (routeData && routeData.seo) {
                routeData.seo.subscribe((seoData) => {
                    currentRouteSeoData.title = seoData.title;
                    currentRouteSeoData.description = seoData.description;
                    currentRouteSeoData.keywords = seoData.keywords;
                    currentRouteSeoData.image = seoData.image;
                    this.setSeoMetaTags(currentRouteSeoData);
                });
            }
            else {
                // Set default SEO values here
                currentRouteSeoData.title = 'SoleD';
                currentRouteSeoData.description = 'Ionic 5 Full Starter App Template - by IonicThemes';
                currentRouteSeoData.keywords = '';
                currentRouteSeoData.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/imgs/logofacebook.png';
                this.setSeoMetaTags(currentRouteSeoData);
            }
            // Set Canonical URL
            // * Note: This is an advanced use case. If you want to set canonical URL un-comment the following line
            // this.updateCanonicalUrl(this.getCurrentUrl(this.platformLocation));
        });
    }
    setSeoMetaTags(seoData) {
        this.title.setTitle(seoData.title);
        this.meta.updateTag({ name: 'description', content: seoData.description }, 'name="description"');
        this.meta.updateTag({ name: 'keywords', content: seoData.keywords }, 'name="keywords"');
        this.meta.updateTag({ name: 'twitter:title', content: seoData.title }, 'name="twitter:title"');
        this.meta.updateTag({ name: 'twitter:description', content: seoData.description }, 'name="twitter:description"');
        this.meta.updateTag({ name: 'twitter:image', content: seoData.image }, 'name="twitter:image"');
        this.meta.updateTag({ name: 'DC.title', content: seoData.title }, 'name="DC.title"');
        this.meta.updateTag({ name: 'DC.description', content: seoData.description }, 'name="DC.description"');
        this.meta.updateTag({ property: 'og:title', content: seoData.title }, 'property="og:title"');
        this.meta.updateTag({ property: 'og:description', content: seoData.description }, 'property="og:description"');
        this.meta.updateTag({ property: 'og:image', content: seoData.image }, 'property="og:image"');
        // You can add more tags here if you need.
    }
    updateCanonicalUrl(url) {
        const head = this.document.getElementsByTagName('head')[0];
        let element = this.document.querySelector(`link[rel='canonical']`) || null;
        if (element == null) {
            element = this.document.createElement('link');
            head.appendChild(element);
        }
        element.setAttribute('rel', 'canonical');
        element.setAttribute('href', url);
    }
    getCurrentUrl(platformLocation) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            return this.canonicalUrl + platformLocation.location.pathname;
        }
        else {
            return this.canonicalUrl + this.baseHref + this.request['path'];
        }
    }
    ngOnDestroy() {
        this._routerSubscription.unsubscribe();
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__["REQUEST"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"])); };
SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: Request, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__["REQUEST"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"]]
            }] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] }]; }, null); })();


/***/ }),

/***/ "zK/y":
/*!**********************************************************!*\
  !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
  \**********************************************************/
/*! exports provided: TextShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShellComponent", function() { return TextShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");



class TextShellComponent {
    constructor() {
        // To debug shell styles, change configuration in the environment file
        this.debugMode = (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appShellConfig.debug) ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appShellConfig.debug : false;
        this.textLoaded = false;
    }
    set data(val) {
        if (!this.debugMode) {
            this._data = (val !== undefined && val !== null) ? val : '';
        }
        if (this._data && this._data !== '') {
            this.textLoaded = true;
        }
        else {
            this.textLoaded = false;
        }
    }
}
TextShellComponent.ɵfac = function TextShellComponent_Factory(t) { return new (t || TextShellComponent)(); };
TextShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextShellComponent, selectors: [["app-text-shell"]], hostVars: 2, hostBindings: function TextShellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-loaded", ctx.textLoaded);
    } }, inputs: { data: "data" }, decls: 2, vars: 1, template: function TextShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._data);
    } }, styles: ["[_nghost-%COMP%] {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n[_nghost-%COMP%]:not([animation]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 50% , var(--text-shell-background, #FFF) 50%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 77% , var(--text-shell-background, #FFF) 77%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 49% , var(--text-shell-background, #FFF) 49%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 50% , var(--text-shell-background, #FFF) 50%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n[animation=bouncing][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"1\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"2\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 37% , var(--text-shell-background, #FFF) 37%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"3\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"4\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"5\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 34% , var(--text-shell-background, #FFF) 34%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"6\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n\n[animation=gradient][_nghost-%COMP%] {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n[animation=gradient][_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][lines=\"1\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][lines=\"1\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][lines=\"2\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[animation=gradient][lines=\"2\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 38% , var(--text-shell-background, #FFF) 38%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[animation=gradient][lines=\"3\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[animation=gradient][lines=\"3\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 61% , var(--text-shell-background, #FFF) 61%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 40% , var(--text-shell-background, #FFF) 40%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[animation=gradient][lines=\"4\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[animation=gradient][lines=\"4\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 48% , var(--text-shell-background, #FFF) 48%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[animation=gradient][lines=\"5\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[animation=gradient][lines=\"5\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 86% , var(--text-shell-background, #FFF) 86%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[animation=gradient][lines=\"6\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[animation=gradient][lines=\"6\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 60% , var(--text-shell-background, #FFF) 60%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[animation=gradient].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n[animation=gradient].text-loaded[_nghost-%COMP%]::before, [animation=gradient].text-loaded[_nghost-%COMP%]::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvdGV4dC1zaGVsbC90ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9tYXNrZWQtbGluZXMtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtFQUdBLDRCQUFBO0FBUkY7O0FBWUE7RUNQSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGZUY7O0FBVUk7RUNiQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGc0JGOztBQUdJO0VDZ0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGNkJGOztBQUpJO0VDZ0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9DRjs7QUFYSTtFQ2dCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGMkNGOztBQWxCSTtFQ2dCQSx3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa0RGOztBQXpCSTtFQ2dCQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGeURGOztBQTNCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNkJKOztBQXhCQTtFR3pCSSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VEbkJGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhWRjs7QUd2REk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjs7QUcvREk7RUFDRTtJQUNFLHdEQUFBO0VIeUROO0VHdERJO0lBQ0UseURBQUE7RUh3RE47QUFDRjs7QUF4Q0k7RUcvQkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFRG5CRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIV0Y7O0FHNUVJO0VBQ0U7SUFDRSx3REFBQTtFSDhFTjtFRzNFSTtJQUNFLHlEQUFBO0VINkVOO0FBQ0Y7O0FBN0RJO0VHa0JBLHVWQUFBO0VBQ0EsZ1BBQUE7RUFDQSw4SUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhnQ0Y7O0FHaERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FHeERJO0VBQ0U7SUFDRSw0SUFBQTtFSGtETjtFRy9DSTtJQUNFLDhJQUFBO0VIaUROO0FBQ0Y7O0FBbEZJO0VHa0JBLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIcURGOztBR3JFSTtFQUNFO0lBQ0UsZ09BQUE7RUh1RU47RUdwRUk7SUFDRSxtT0FBQTtFSHNFTjtBQUNGOztBQXZHSTtFR2tCQSw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUgwRUY7O0FHMUZJO0VBQ0U7SUFDRSxvVEFBQTtFSDRGTjtFR3pGSTtJQUNFLHdUQUFBO0VIMkZOO0FBQ0Y7O0FBNUhJO0VHa0JBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSCtGRjs7QUcvR0k7RUFDRTtJQUNFLHdZQUFBO0VIaUhOO0VHOUdJO0lBQ0UsNllBQUE7RUhnSE47QUFDRjs7QUFqSkk7RUdrQkEsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIb0hGOztBR3BJSTtFQUNFO0lBQ0UsNGRBQUE7RUhzSU47RUduSUk7SUFDRSxrZUFBQTtFSHFJTjtBQUNGOztBQWpLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7VUFBQSxZQUFBO0FBa0tKOztBQTdKQTtFQUNFLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VFL0RBLDRHQUFBO0FGZ09GOztBQTFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQTJKSjs7QUF4SkU7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFoS0U7RUFDRTtJQUNFLDZCQUFBO0VBMEpKO0VBdkpFO0lBQ0UsNEJBQUE7RUF5Sko7QUFDRjs7QUFySkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VDeEZBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZnUUY7O0FBcEpJO0VFNUdGLDRHQUFBO0FGbVFGOztBQW5KTTtFQ3BHRiw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQ2ZGLDRHQUFBO0FGMFFGOztBQTlKSTtFRTVHRiw0R0FBQTtBRjZRRjs7QUE3Sk07RUN2RUYsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZvUkY7O0FBeEtJO0VFNUdGLDRHQUFBO0FGdVJGOztBQXZLTTtFQ3ZFRixrakJBQUE7RUFDQSxzY0FBQTtFQUNBLG1PQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY4UkY7O0FBbExJO0VFNUdGLDRHQUFBO0FGaVNGOztBQWpMTTtFQ3ZFRiw2d0JBQUE7RUFDQSw0cEJBQUE7RUFDQSx3VEFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGd1NGOztBQTVMSTtFRTVHRiw0R0FBQTtBRjJTRjs7QUEzTE07RUN2RUYsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRmtURjs7QUF0TUk7RUU1R0YsNEdBQUE7QUZxVEY7O0FBck1NO0VDdkVGLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY0VEY7O0FBdE1FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF3TUo7O0FBdE1JO0VBRUUsZ0JBQUE7RUFDQSxvQkFBQTtVQUFBLFlBQUE7QUF1TU4iLCJmaWxlIjoic3JjL2FwcC9zaGVsbC90ZXh0LXNoZWxsL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9taXhpbnMvYmFja2dyb3VuZC1oZWlnaHRcIjtcclxuQGltcG9ydCBcIi4vbWl4aW5zL21hc2tlZC1saW5lcy1iYWNrZ3JvdW5kXCI7XHJcbkBpbXBvcnQgXCIuL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kXCI7XHJcblxyXG4kbWF4LWxpbmVzLWNvdW50OiA2O1xyXG5cclxuOmhvc3Qge1xyXG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogI0VFRTtcclxuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyOiAzcHg7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kKTtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC8vIFRvIGZpeCAxcHggbGluZSBtaXNhbGlnbm1lbnQgaW4gY2hyb21lOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1jbGlwXHJcbiAgLy8gKEkgYWxzbyBub3RpY2VkIHRoYXQgaWYgSSBzZXQgdGhlIGNvbG9yIHRvIGEgc29saWQgY29sb3IgaW5zdGVhZCBvZiBoYXZpbmcgb3BhY2l0eSwgdGhlIGlzc3VlIGRvZXNuJ3QgaGFwcGVuKVxyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbi8vIERlZmF1bHQgc3R5bGVzLiBXaGVuIG5vIGFuaW1hdGlvbiBhdHRyaWJ1dGUgaXMgcHJvdmlkZWRcclxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpIHtcclxuICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcclxuICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcclxuXHJcbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgtbGluZXMtY291bnQge1xyXG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgkaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3VuY2luZyBsaW5lIGxvYWRpbmcgYW5pbWF0aW9uXHJcbjpob3N0KFthbmltYXRpb249XCJib3VuY2luZ1wiXSkge1xyXG4gIC8vIERlZmF1bHQgb25lIGxpbmUgdGV4dC1zaGVsbFxyXG4gIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoMSk7XHJcblxyXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcclxuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcclxuICAgICAgQGluY2x1ZGUgYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvLyAwIGlzIHRoZSBkZWZhdWx0IHZhbHVlIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTk2MzA0NC8xMTE2OTU5KVxyXG4gICAgYW5pbWF0aW9uOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQmFja2dyb3VuZCBncmFkaWVudCBiZW5lYXRoIG1hc2tlZCBsaW5lc1xyXG46aG9zdChbYW5pbWF0aW9uPVwiZ3JhZGllbnRcIl0pIHtcclxuICAtLXRleHQtc2hlbGwtYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6ICNFRUU7XHJcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcclxuXHJcblxyXG4gIC8vIENhbGN1bGF0ZSBkZWZhdWx0IGhlaWdodCBmb3IgMSBsaW5lXHJcbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgMSk7XHJcblxyXG4gIC8vIFRoZSBhbmltYXRpb24gdGhhdCBnb2VzIGJlbmVhdGggdGhlIG1hc2tzXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kKSAzMyUpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUJhY2tncm91bmQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGVCYWNrZ3JvdW5kIHtcclxuICAgIDAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxyXG4gICAgfVxyXG5cclxuICAgIDEwMCV7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoZSBtYXNrc1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXHJcbiAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcclxuICB9XHJcblxyXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcclxuICAgICZbbGluZXM9XCIjeyAkaSB9XCJdIHtcclxuICAgICAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaGVpZ2h0IGZvciAkaSBsaW5lc1xyXG4gICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWhlaWdodChtaW4taGVpZ2h0LCAkaSk7XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnRleHQtbG9hZGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBhbmltYXRpb246IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XHJcbkBpbXBvcnQgXCIuL2JhY2tncm91bmQtaGVpZ2h0XCI7XHJcblxyXG5AbWl4aW4gbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XHJcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcclxuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xyXG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcclxuICAkbWFzay1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcclxuICAkbGluZS1iZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kLCAjRkZGKTtcclxuICAkYmcteS1wb3M6IDBweDtcclxuICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oODUsIDk1KX07XHJcbiAgJGJnLWltYWdlOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJztcclxuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XHJcbiAgJGJnLXNpemU6ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XHJcblxyXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7JGJnLXBvc2l0aW9ufTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xyXG4gICAgICAvLyBBZGQgc2VwYXJhdG9yIGJldHdlZW4gbGluZXNcclxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICN7JGxpbmUtYmctY29sb3J9IDEwMCUsICN7JGxpbmUtYmctY29sb3J9IDEwMCUpKTtcclxuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxyXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1oZWlnaHQgdG8gb3VyIHktcG9zIHBvaW50ZXJcclxuICAgICAgJGJnLXktcG9zOiBjYWxjKCgjeyRsaW5lLWhlaWdodH0gKiAoI3skaX0gLSAxKSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRpfSAtIDIpKSk7XHJcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XHJcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1zcGFjaW5nKTtcclxuXHJcbiAgICAgIC8vIEFkZCBuZXcgbGluZVxyXG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIHNob3VsZCBiZSBuYXJyb3cgdGhhbiB0aGUgb3RoZXJzXHJcbiAgICAgIEBpZiAoJGkgPT0gJGxpbmVzKSB7XHJcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xyXG4gICAgICB9IEBlbHNlIHtcclxuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oNjAsIDgwKX07XHJcbiAgICAgIH1cclxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XHJcbiAgICAgIC8vIFRoaXMgbmV3IGxpbmUgc3RhcnRzIGJlbG93IHRoZSBwcnZpb3VzbHkgYWRkZWQgc2VwYXJhdG9yLFxyXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXHJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xyXG4gICAgICAkYmctcG9zaXRpb246IGFwcGVuZCgkYmctcG9zaXRpb24sICcwICcgKyAkYmcteS1wb3MpO1xyXG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAje3RvLXN0cmluZygkYmctaW1hZ2UsICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246ICN7dG8tc3RyaW5nKCRiZy1wb3NpdGlvbiwgJywgJyl9O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZSwgJywgJyl9O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XHJcbn1cclxuIiwiQG1peGluIGJhY2tncm91bmQtaGVpZ2h0KCRwcm9wZXJ0eSwgJGxpbmVzOiAxKSB7XHJcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcclxuICAkbGluZS1zcGFjaW5nOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtZ3V0dGVyLCAzcHgpO1xyXG5cclxuICAjeyRwcm9wZXJ0eX06IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICN7JGxpbmVzfSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRsaW5lc30gLSAxKSkpO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XHJcblxyXG5AbWl4aW4gYm91bmNpbmctbGluZXMtYmFja2dyb3VuZCgkbGluZXM6IDEpIHtcclxuICAkbGluZS1oZWlnaHQ6IHZhcigtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQsIDE2cHgpO1xyXG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XHJcbiAgJGJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtY29sb3IsICNDQ0MpO1xyXG4gICRtYXNrLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xyXG4gICRsaW5lLWJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xyXG4gICRiZy15LXBvczogMHB4O1xyXG4gICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg4NSwgOTUpfTtcclxuICAkYmctaW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknO1xyXG4gICRiZy1wb3NpdGlvbjogJzAgJyArICRiZy15LXBvcztcclxuICAkYmctc2l6ZTogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcclxuICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogJzg1JSAnICsgJGxpbmUtaGVpZ2h0O1xyXG4gICRiZy1zaXplLWFuaW1hdGlvbi10bzogJzEwMCUgJyArICRsaW5lLWhlaWdodDtcclxuXHJcbiAgQGlmICgkbGluZXMgPT0gMSkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3skYmctaW1hZ2V9O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGVMaW5lO1xyXG5cclxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxpbmUge1xyXG4gICAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7JGJnLXNpemUtYW5pbWF0aW9uLWZyb219O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZS1hbmltYXRpb24tdG99O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoICRsaW5lcyB7XHJcbiAgICAgIC8vIEFkZCBzZXBhcmF0b3IgYmV0d2VlbiBsaW5lc1xyXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSkpO1xyXG4gICAgICAvLyBUaGlzIGxpbmVhci1ncmFkaWVudCBhcyBzZXBhcmF0b3Igc3RhcnRzIGJlbG93IHRoZSBsYXN0IGxpbmUsXHJcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLWhlaWdodCB0byBvdXIgeS1wb3MgcG9pbnRlclxyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMikpKTtcclxuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcclxuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xyXG4gICAgICAvLyBzZXBhcmF0b3IgbGluZXMgaGF2ZSB0aGUgc2FtZSBpbml0aWFsIGFuZCBlbmQgc3RhdGUsIHRodXMgbm8gYW5pbWF0aW9uIG9jY3Vyc1xyXG4gICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XHJcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xyXG5cclxuICAgICAgLy8gQWRkIG5ldyBsaW5lXHJcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgc2hvdWxkIGJlIG5hcnJvdyB0aGFuIHRoZSBvdGhlcnNcclxuICAgICAgQGlmICgkaSA9PSAkbGluZXMpIHtcclxuICAgICAgICAkcmFuZC13aWR0aDogI3tyYW5kb21OdW0oMzAsIDUwKX07XHJcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzU1JSAnICsgJGxpbmUtaGVpZ2h0KTtcclxuICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDYwLCA4MCl9O1xyXG4gICAgICAgICRiZy1zaXplLWFuaW1hdGlvbi1mcm9tOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLWZyb20sICc3NSUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xyXG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcclxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtc3BhY2luZyB0byBvdXIgeS1wb3MgcG9pbnRlclxyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcclxuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcclxuICAgICAgJGJnLXNpemU6IGFwcGVuZCgkYmctc2l6ZSwgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICAgICRiZy1zaXplLWFuaW1hdGlvbi10bzogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi10bywgJzEwMCUgJyArICRsaW5lLWhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogI3t0by1zdHJpbmcoJGJnLWltYWdlLCAnLCAnKX07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUsICcsICcpfTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZU11bHRpTGluZTtcclxuXHJcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGVNdWx0aUxpbmUge1xyXG4gICAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnLCAnKX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAje3RvLXN0cmluZygkYmctc2l6ZS1hbmltYXRpb24tdG8sICcsICcpfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcclxuXHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-shell',
                templateUrl: './text-shell.component.html',
                styleUrls: ['./text-shell.component.scss']
            }]
    }], function () { return []; }, { textLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.text-loaded']
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.log(err));
});


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map