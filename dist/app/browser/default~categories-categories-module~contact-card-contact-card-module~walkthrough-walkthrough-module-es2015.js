(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~categories-categories-module~contact-card-contact-card-module~walkthrough-walkthrough-module"],{

/***/ "OwEV":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/web.js ***!
  \**************************************************************************/
/*! exports provided: FacebookLoginWeb, FacebookLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginWeb", function() { return FacebookLoginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLogin", function() { return FacebookLogin; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class FacebookLoginWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'FacebookLogin',
            platforms: ['web'],
        });
    }
    login(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('FacebookLoginWeb.login', options);
            return new Promise((resolve, reject) => {
                FB.login(response => {
                    console.debug('FB.login', response);
                    if (response.status === 'connected') {
                        resolve({
                            accessToken: {
                                token: response.authResponse.accessToken,
                            },
                        });
                    }
                    else {
                        reject({
                            accessToken: {
                                token: null,
                            },
                        });
                    }
                }, { scope: options.permissions.join(',') });
            });
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                FB.logout(() => resolve());
            });
        });
    }
    getCurrentAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                FB.getLoginStatus(response => {
                    if (response.status === 'connected') {
                        const result = {
                            accessToken: {
                                applicationId: null,
                                declinedPermissions: [],
                                expires: null,
                                isExpired: null,
                                lastRefresh: null,
                                permissions: [],
                                token: response.authResponse.accessToken,
                                userId: response.authResponse.userID,
                            },
                        };
                        resolve(result);
                    }
                    else {
                        reject({
                            accessToken: {
                                token: null,
                            },
                        });
                    }
                });
            });
        });
    }
    getProfile(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fields = options.fields.join(',');
            return new Promise((resolve, reject) => {
                FB.api('/me', { fields }, response => {
                    if (response.error) {
                        reject(response.error.message);
                        return;
                    }
                    resolve(response);
                });
            });
        });
    }
}
const FacebookLogin = new FacebookLoginWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(FacebookLogin);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "n93f":
/*!**********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/definitions.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "olL3":
/*!**********************************************!*\
  !*** ./src/app/facebook-provider.service.ts ***!
  \**********************************************/
/*! exports provided: FacebookProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookProviderService", function() { return FacebookProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/facebook-login */ "phR/");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["registerWebPlugin"])(_capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLogin"]);
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
class FacebookProviderService {
    constructor(http) {
        this.http = http;
        this.user = null;
        this.token = null;
        this.setupFbLogin();
    }
    setupFbLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["isPlatform"])('desktop')) {
                this.fbLogin = _capacitor_community_facebook_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLogin"];
            }
            else {
                // Use the native imlementation inside a real app!
                const { FacebookLogin } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
                this.fbLogin = FacebookLogin;
            }
        });
    }
    FacebookLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Test 1: FacebookLogin() Starting");
            const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
            const result = yield this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
            console.log("Test 2: result(from fbLogin.login) != undefined ? (true) ", (result != undefined));
            if (result.accessToken && result.accessToken.userId) {
                this.token = result.accessToken;
                this.loadUserData();
            }
            else if (result.accessToken && !result.accessToken.userId) {
                console.log("Test 3: I'm on the web");
                // Web only gets the token but not the user ID
                // Directly call get token to retrieve it now
                yield this.getCurrentToken();
            }
            else {
                // Login failed
                return false;
            }
            console.log("Test 9: Completing login. I don't believe Test 8 will have run yet, so user below is still undefined huh?");
            console.log('facebook signup, user: ', this.user);
            Storage.set({
                key: 'facebookCredentials',
                value: JSON.stringify({
                    token: this.token.token,
                    userId: this.token.userId
                })
            });
            //this.router.navigate(['app/categories']);
            return true;
        });
    }
    getCurrentToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Test 4: getCurrentToken() Starting");
            const result = yield this.fbLogin.getCurrentAccessToken();
            console.log("Test 5: result(from fbLogin.GetCurrentAccessToken() != undefined ? (true) ", (result != undefined));
            if (result.accessToken) {
                this.token = result.accessToken;
                yield this.loadUserData();
                console.log("Test 7***: this.http.get(url).subscribe(callback) is run outside of this stack I'm guessing");
            }
            else {
                // Not logged in.
            }
        });
    }
    loadUserData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Test 6: loadUserData() Starting");
            console.log("Test 7: token = ", this.token);
            const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
            const res = yield this.http.get(url).toPromise(); //.then(res => {
            console.log("Test 8***: doing the callback outside of the observable");
            console.log('user: ', res);
            this.user = res;
        });
    }
    FacebookLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = null;
            this.token = null;
            Storage.remove({ key: 'facebookCredentials' });
            yield this.fbLogin.logout().catch((error) => {
                console.log("No access token, kick user");
            });
        });
    }
    // Return a copy of the Facebook data to caller for information like user name, email, picture, etc..
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user != null) {
                return this.user;
            }
            let res = yield this.isActiveUser();
            if (res) {
                return this.user;
            }
            return null;
        });
    }
    isActiveUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: 'facebookCredentials' });
            const creds = JSON.parse(ret.value);
            if (creds == null) {
                return false;
            }
            const url = `https://graph.facebook.com/${creds.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${creds.token}`;
            const res = yield this.http.get(url).toPromise().catch((error) => {
                console.log("Failed to load Facebook data, error: ", error);
                Storage.remove({ key: 'facebookCredentials' });
                return null;
            });
            if (res == null) {
                return false;
            }
            console.log("res (from isActiveuser()): ", res);
            this.user = res;
            return true;
        });
    }
}
FacebookProviderService.ɵfac = function FacebookProviderService_Factory(t) { return new (t || FacebookProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
FacebookProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FacebookProviderService, factory: FacebookProviderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FacebookProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "phR/":
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/facebook-login/dist/esm/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "n93f");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_definitions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _definitions__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ "OwEV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookLogin", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["FacebookLogin"]; });



//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=default~categories-categories-module~contact-card-contact-card-module~walkthrough-walkthrough-module-es2015.js.map