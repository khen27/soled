(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-auth-firebase-auth-module"],{

/***/ "0zuk":
/*!******************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/facades.js ***!
  \******************************************************************/
/*! exports provided: cfaSignIn, cfaSignInGoogle, cfaSignInTwitter, cfaSignInFacebook, cfaSignInPhone, cfaSignInPhoneOnCodeSent, cfaSignInPhoneOnCodeReceived, cfaSignOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignIn", function() { return cfaSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignInGoogle", function() { return cfaSignInGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignInTwitter", function() { return cfaSignInTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignInFacebook", function() { return cfaSignInFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignInPhone", function() { return cfaSignInPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeSent", function() { return cfaSignInPhoneOnCodeSent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeReceived", function() { return cfaSignInPhoneOnCodeReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfaSignOut", function() { return cfaSignOut; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web */ "LRWT");





const plugin = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].CapacitorFirebaseAuth;
if (_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Capacitor"].platform === 'web') {
    Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(_web__WEBPACK_IMPORTED_MODULE_4__["CapacitorFirebaseAuth"]);
}
/**
 * Call the sign in method on native layer and sign in on web layer with retrieved credentials.
 * @param providerId The provider identification.
 * @param data The provider additional information (optional).
 */
const cfaSignIn = (providerId, data) => {
    const googleProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider().providerId;
    const facebookProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider().providerId;
    const twitterProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider().providerId;
    const phoneProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider().providerId;
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error(`The '${providerId}' provider was not supported`));
    }
};
/**
 * Call the Google sign in method on native layer and sign in on web layer with retrieved credentials.
 */
const cfaSignInGoogle = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        // get the provider id
        const providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider.PROVIDER_ID;
        // native sign in
        plugin.signIn({ providerId }).then((result) => {
            // create the credentials
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider.credential(result.idToken);
            // web sign in
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential)
                .then((userCredential) => {
                observer.next(userCredential.user);
                observer.complete();
            })
                .catch((reject) => {
                observer.error(reject);
            });
        }).catch(reject => {
            observer.error(reject);
        });
    });
};
/**
 * Call the Twitter sign in method on native and sign in on web layer with retrieved credentials.
 */
const cfaSignInTwitter = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        // get the provider id
        const providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider.PROVIDER_ID;
        // native sign in
        plugin.signIn({ providerId }).then((result) => {
            // create the credentials
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider.credential(result.idToken, result.secret);
            // web sign in
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential)
                .then((userCredential) => {
                observer.next(userCredential.user);
                observer.complete();
            })
                .catch((reject) => observer.error(reject));
        }).catch(reject => observer.error(reject));
    });
};
/**
 * Call the Facebook sign in method on native and sign in on web layer with retrieved credentials.
 */
const cfaSignInFacebook = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        // get the provider id
        const providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider.PROVIDER_ID;
        // native sign in
        plugin.signIn({ providerId }).then((result) => {
            // create the credentials
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider.credential(result.idToken);
            // web sign in
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential)
                .then((userCredential) => {
                observer.next(userCredential.user);
                observer.complete();
            })
                .catch((reject) => observer.error(reject));
        }).catch(reject => observer.error(reject));
    });
};
/**
 * Call the Phone verification sign in, handling send and retrieve to code on native, but only sign in on web with retrieved credentials.
 * @param phone The user phone number.
 * @param verificationCode The verification code sent by SMS (optional).
 */
const cfaSignInPhone = (phone, verificationCode) => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        // get the provider id
        const providerId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider.PROVIDER_ID;
        plugin.signIn({ providerId, data: { phone, verificationCode } }).then((result) => {
            // if there is no verification code
            if (!result.verificationCode) {
                return observer.complete();
            }
            // create the credentials
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider.credential(result.verificationId, result.verificationCode);
            // web sign in
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signInWithCredential(credential)
                .then((userCredential) => {
                observer.next(userCredential.user);
                observer.complete();
            })
                .catch((reject) => observer.error(reject));
        }).catch(reject => observer.error(reject));
    });
};
/**
 * Observable of one notification of <code>On Code Sent</code>event from Phone Verification process.
 */
const cfaSignInPhoneOnCodeSent = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        // @ts-ignore
        return plugin.addListener('cfaSignInPhoneOnCodeSent', (event) => {
            observer.next(event.verificationId);
            observer.complete();
        });
    });
};
/**
 * Observable of one notification of <code>On Code Received</code> event from Phone Verification process.
 */
const cfaSignInPhoneOnCodeReceived = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        // @ts-ignore
        return plugin.addListener('cfaSignInPhoneOnCodeReceived', (event) => {
            observer.next(event);
            observer.complete();
        });
    });
};
/**
 * Call Google sign out method on native and web layers.
 */
const cfaSignOut = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
        plugin.signOut({}).then(() => {
            // web sign out
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["app"]().auth().signOut()
                .then(() => {
                observer.next();
                observer.complete();
            })
                .catch((reject) => observer.error(reject));
        });
    });
};
//# sourceMappingURL=facades.js.map

/***/ }),

/***/ "6nsN":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "LOEa");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "7cWe":
/*!**************************************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/facebook.provider.js ***!
  \**************************************************************************************/
/*! exports provided: facebookSignInWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookSignInWeb", function() { return facebookSignInWeb; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions */ "o6qA");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const facebookSignInWeb = () => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].FacebookAuthProvider();
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().useDeviceLanguage();
    const userCredential = yield firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithPopup(provider);
    const { credential } = userCredential;
    return new _definitions__WEBPACK_IMPORTED_MODULE_2__["FacebookSignInResult"](credential.accessToken);
});
//# sourceMappingURL=facebook.provider.js.map

/***/ }),

/***/ "9874":
/*!***********************************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/phone.provider.js ***!
  \***********************************************************************************/
/*! exports provided: phoneSignInWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneSignInWeb", function() { return phoneSignInWeb; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "6nsN");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const phoneSignInWeb = (options) => __awaiter(void 0, void 0, void 0, function* () {
    // const provider = new firebase.auth.PhoneAuthProvider();
    return Promise.reject(`The '${options.providerId}' provider was not implemented for web yet`);
});
//# sourceMappingURL=phone.provider.js.map

/***/ }),

/***/ "E+18":
/*!*************************************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/twitter.provider.js ***!
  \*************************************************************************************/
/*! exports provided: twitterSignInWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterSignInWeb", function() { return twitterSignInWeb; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions */ "o6qA");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const twitterSignInWeb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].TwitterAuthProvider();
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().useDeviceLanguage();
        const userCredential = yield firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithPopup(provider);
        const { credential } = userCredential;
        return new _definitions__WEBPACK_IMPORTED_MODULE_2__["TwitterSignInResult"](credential.accessToken, credential.secret);
    }
    catch (e) {
        return Promise.reject(e);
    }
});
//# sourceMappingURL=twitter.provider.js.map

/***/ }),

/***/ "LRWT":
/*!**************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/web.js ***!
  \**************************************************************/
/*! exports provided: CapacitorFirebaseAuthWeb, CapacitorFirebaseAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuthWeb", function() { return CapacitorFirebaseAuthWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuth", function() { return CapacitorFirebaseAuth; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _providers_facebook_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/facebook.provider */ "7cWe");
/* harmony import */ var _providers_google_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/google.provider */ "mIOL");
/* harmony import */ var _providers_phone_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/phone.provider */ "9874");
/* harmony import */ var _providers_twitter_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/twitter.provider */ "E+18");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class CapacitorFirebaseAuthWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'CapacitorFirebaseAuth',
            platforms: ['web']
        });
    }
    signIn(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const googleProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider().providerId;
            const facebookProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider().providerId;
            const twitterProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider().providerId;
            const phoneProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].PhoneAuthProvider().providerId;
            switch (options.providerId) {
                case googleProvider:
                    return Object(_providers_google_provider__WEBPACK_IMPORTED_MODULE_4__["googleSignInWeb"])(options);
                case twitterProvider:
                    return Object(_providers_twitter_provider__WEBPACK_IMPORTED_MODULE_6__["twitterSignInWeb"])(options);
                case facebookProvider:
                    return Object(_providers_facebook_provider__WEBPACK_IMPORTED_MODULE_3__["facebookSignInWeb"])(options);
                case phoneProvider:
                    return Object(_providers_phone_provider__WEBPACK_IMPORTED_MODULE_5__["phoneSignInWeb"])(options);
            }
            return Promise.reject(`The '${options.providerId}' provider was not supported`);
        });
    }
    signOut(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(options);
            return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        });
    }
}
const CapacitorFirebaseAuth = new CapacitorFirebaseAuthWeb();

// Register as a web plugin
Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(CapacitorFirebaseAuth);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "T7tK":
/*!********************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.service.ts ***!
  \********************************************************/
/*! exports provided: FirebaseAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function() { return FirebaseAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");
/* harmony import */ var _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/firebase-profile.model */ "Uz1e");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! capacitor-firebase-auth */ "wqjM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");













class FirebaseAuthService {
    constructor(angularFire, platform, platformId) {
        this.angularFire = angularFire;
        this.platform = platform;
        this.platformId = platformId;
        this.redirectResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformBrowser"])(this.platformId)) {
            this.angularFire.onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in.
                    this.currentUser = user;
                }
                else {
                    // No user is signed in.
                    this.currentUser = null;
                }
            });
            if (!this.platform.is('capacitor')) {
                // when using signInWithRedirect, this listens for the redirect results
                this.angularFire.getRedirectResult()
                    .then((result) => {
                    // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
                    if (result.user) {
                        this.userProviderAdditionalInfo = result.additionalUserInfo.profile;
                        this.redirectResult.next(result);
                    }
                }, (error) => {
                    this.redirectResult.next({ error: error.code });
                });
            }
        }
    }
    getRedirectResult() {
        return this.redirectResult.asObservable();
    }
    getPhotoURL(signInProviderId, photoURL) {
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
    signOut() {
        if (this.platform.is('capacitor')) {
            return Object(capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__["cfaSignOut"])();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signOut());
        }
    }
    signInWithEmail(email, password) {
        return this.angularFire.signInWithEmailAndPassword(email, password);
    }
    signUpWithEmail(email, password) {
        return this.angularFire.createUserWithEmailAndPassword(email, password);
    }
    socialSignIn(providerName, scopes) {
        if (this.platform.is('capacitor')) {
            return Object(capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_8__["cfaSignIn"])(providerName);
        }
        else {
            const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].OAuthProvider(providerName);
            if (scopes) {
                scopes.forEach(scope => {
                    provider.addScope(scope);
                });
            }
            if (this.platform.is('desktop')) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signInWithPopup(provider));
            }
            else {
                // web but not desktop, for example mobile PWA
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.angularFire.signInWithRedirect(provider));
            }
        }
    }
    signInWithFacebook() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider.providerId);
    }
    signInWithGoogle() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].GoogleAuthProvider();
        const scopes = ['profile', 'email'];
        return this.socialSignIn(provider.providerId, scopes);
    }
    signInWithTwitter() {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider.providerId);
    }
    getProfileDataSource() {
        // we need to do this differentiation because there is a bug in
        // platform capacitor ios when executing this.angularFire.user
        if (this.platform.is('capacitor')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.setUserModelForProfile());
        }
        else {
            return this.angularFire.user
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((user) => user != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
                return this.setUserModelForProfile();
            }));
        }
    }
    setUserModelForProfile() {
        const userModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseProfileModel"]();
        const provierData = this.currentUser.providerData[0];
        const userData = this.userProviderAdditionalInfo ? this.userProviderAdditionalInfo : provierData;
        userModel.image = this.getPhotoURL(provierData.providerId, provierData.photoURL);
        userModel.name = userData.name || userData.displayName || 'What\'s your name?';
        userModel.role = 'How would you describe yourself?';
        userModel.description = userData.description || 'Anything else you would like to share with the world?';
        userModel.phoneNumber = userData.phoneNumber || 'Is there a number where I can reach you?';
        userModel.email = userData.email || 'Where can I send you emails?';
        userModel.provider = (provierData.providerId !== 'password') ? provierData.providerId : 'Credentials';
        return userModel;
    }
    getProfileStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _profile_firebase_profile_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseProfileModel"]();
        this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.profileDataStore.load(dataSource);
        return this.profileDataStore;
    }
}
FirebaseAuthService.ɵfac = function FirebaseAuthService_Factory(t) { return new (t || FirebaseAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
FirebaseAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseAuthService, factory: FirebaseAuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "UbJi":
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js ***!
  \*******************************************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return AngularFireAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return AngularFireAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * Generated from: auth.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// WARNING: interface has both a type and a value, skipping emit

class AngularFireAuth {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        /** @type {?} */
        const schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        /** @type {?} */
        const keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        /** @type {?} */
        const auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @return {?}
         */
        () => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! firebase/auth */ "6nsN")))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @return {?}
         */
        () => Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} app
         * @return {?}
         */
        app => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => app.auth())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: false }));
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
            this.authState = this.user = this.idToken = this.idTokenResult = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        else {
            // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
            //       (e.g, `import { auth } from 'firebase/app'`) are getting an undefined auth object unexpectedly
            //       as we're completely lazy. Let's eagerly load the Auth SDK here.
            //       There could potentially be race conditions still... but this greatly decreases the odds while
            //       we reevaluate the API.
            /** @type {?} */
            const _ = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe();
            this.authState = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
             * @param {?} auth
             * @return {?}
             */
            auth => auth.getRedirectResult().then((/**
             * @return {?}
             */
            () => auth)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
             * @param {?} auth
             * @return {?}
             */
            auth => zone.runOutsideAngular((/**
             * @return {?}
             */
            () => new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](auth.onAuthStateChanged.bind(auth)))))), keepUnstableUntilFirst);
            this.user = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
             * @param {?} auth
             * @return {?}
             */
            auth => auth.getRedirectResult().then((/**
             * @return {?}
             */
            () => auth)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
             * @param {?} auth
             * @return {?}
             */
            auth => zone.runOutsideAngular((/**
             * @return {?}
             */
            () => new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](auth.onIdTokenChanged.bind(auth)))))), keepUnstableUntilFirst);
            this.idToken = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
             * @param {?} user
             * @return {?}
             */
            user => user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdToken()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null))));
            this.idTokenResult = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
             * @param {?} user
             * @return {?}
             */
            user => user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdTokenResult()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null))));
        }
        return Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlazySDKProxy"])(this, auth, zone);
    }
}
AngularFireAuth.ɵfac = function AngularFireAuth_Factory(t) { return new (t || AngularFireAuth)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
/** @nocollapse */
AngularFireAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/** @nocollapse */ AngularFireAuth.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: AngularFireAuth, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuth, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: auth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthModule {
}
AngularFireAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFireAuthModule });
AngularFireAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFireAuthModule_Factory(t) { return new (t || AngularFireAuthModule)(); }, providers: [AngularFireAuth] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFireAuth]
            }]
    }], null, null); })();

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

/***/ }),

/***/ "Uz1e":
/*!*****************************************************************!*\
  !*** ./src/app/firebase/auth/profile/firebase-profile.model.ts ***!
  \*****************************************************************/
/*! exports provided: FirebaseProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseProfileModel", function() { return FirebaseProfileModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/data-store */ "f/Ol");

class FirebaseProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "VhLB":
/*!********************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/operators.js ***!
  \********************************************************************/
/*! exports provided: mapUserToUserInfo, mapUserCredentialToUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapUserToUserInfo", function() { return mapUserToUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapUserCredentialToUserInfo", function() { return mapUserCredentialToUserInfo; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


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
const mapUserToUserInfo = () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((user) => {
    if (user) {
        const { uid, providerId, displayName, photoURL, phoneNumber, email } = user;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ uid, providerId, displayName, photoURL, phoneNumber, email });
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(user);
}));
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
const mapUserCredentialToUserInfo = () => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(({ userCredential }) => {
    if (!!userCredential) {
        const { uid, providerId, displayName, photoURL, phoneNumber, email } = userCredential.user;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ uid, providerId, displayName, photoURL, phoneNumber, email });
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
}));
//# sourceMappingURL=operators.js.map

/***/ }),

/***/ "duP/":
/*!*******************************************************!*\
  !*** ./src/app/firebase/auth/firebase-auth.module.ts ***!
  \*******************************************************/
/*! exports provided: FirebaseAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseAuthModule", function() { return FirebaseAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase-auth.service */ "T7tK");












const routes = [
    {
        path: '',
        children: [
            // /firebase/auth redirect
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full',
            },
            {
                path: 'sign-in',
                loadChildren: () => Promise.all(/*! import() | sign-in-firebase-sign-in-module */[__webpack_require__.e("common"), __webpack_require__.e("sign-in-firebase-sign-in-module")]).then(__webpack_require__.bind(null, /*! ./sign-in/firebase-sign-in.module */ "ROOv")).then(m => m.FirebaseSignInPageModule)
            },
            {
                path: 'sign-up',
                loadChildren: () => Promise.all(/*! import() | sign-up-firebase-sign-up-module */[__webpack_require__.e("common"), __webpack_require__.e("sign-up-firebase-sign-up-module")]).then(__webpack_require__.bind(null, /*! ./sign-up/firebase-sign-up.module */ "RMgo")).then(m => m.FirebaseSignUpPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-firebase-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-firebase-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/firebase-profile.module */ "iNMq")).then(m => m.FirebaseProfilePageModule)
            }
        ]
    }
];
class FirebaseAuthModule {
}
FirebaseAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FirebaseAuthModule });
FirebaseAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FirebaseAuthModule_Factory(t) { return new (t || FirebaseAuthModule)(); }, providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FirebaseAuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseAuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"]
                ],
                providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f/Ol":
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/*! exports provided: ShellModel, DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModel", function() { return ShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the environment.prod file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appShellConfig.networkDelay) ? _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appShellConfig.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable, networkDelay) {
        // tslint:disable-next-line:no-shadowed-variable
        const delay = (typeof networkDelay === 'number') ? networkDelay : this.networkDelay;
        let processedDataSource;
        // If no network delay, then don't show shell
        if (delay === 0) {
            processedDataSource = dataSourceObservable;
        }
        else {
            processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
        }
        processedDataSource
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}


/***/ }),

/***/ "mIOL":
/*!************************************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/providers/google.provider.js ***!
  \************************************************************************************/
/*! exports provided: googleSignInWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSignInWeb", function() { return googleSignInWeb; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions */ "o6qA");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const googleSignInWeb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider();
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().useDeviceLanguage();
        const userCredential = yield firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithPopup(provider);
        const { credential } = userCredential;
        return new _definitions__WEBPACK_IMPORTED_MODULE_2__["GoogleSignInResult"](credential.idToken);
    }
    catch (e) {
        return Promise.reject(e);
    }
});
//# sourceMappingURL=google.provider.js.map

/***/ }),

/***/ "o6qA":
/*!**********************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/definitions.js ***!
  \**********************************************************************/
/*! exports provided: GoogleSignInResult, TwitterSignInResult, FacebookSignInResult, PhoneSignInResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSignInResult", function() { return GoogleSignInResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterSignInResult", function() { return TwitterSignInResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookSignInResult", function() { return FacebookSignInResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneSignInResult", function() { return PhoneSignInResult; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "6nsN");


class GoogleSignInResult {
    constructor(idToken) {
        this.idToken = idToken;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID;
    }
}
class TwitterSignInResult {
    constructor(idToken, secret) {
        this.idToken = idToken;
        this.secret = secret;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].TwitterAuthProvider.PROVIDER_ID;
    }
}
class FacebookSignInResult {
    constructor(idToken) {
        this.idToken = idToken;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].FacebookAuthProvider.PROVIDER_ID;
    }
}
class PhoneSignInResult {
    constructor(verificationId, verificationCode) {
        this.verificationId = verificationId;
        this.verificationCode = verificationCode;
        this.providerId = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID;
    }
}
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "wqjM":
/*!****************************************************************!*\
  !*** ./node_modules/capacitor-firebase-auth/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: GoogleSignInResult, TwitterSignInResult, FacebookSignInResult, PhoneSignInResult, cfaSignIn, cfaSignInGoogle, cfaSignInTwitter, cfaSignInFacebook, cfaSignInPhone, cfaSignInPhoneOnCodeSent, cfaSignInPhoneOnCodeReceived, cfaSignOut, mapUserToUserInfo, mapUserCredentialToUserInfo, CapacitorFirebaseAuthWeb, CapacitorFirebaseAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "o6qA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleSignInResult", function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__["GoogleSignInResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterSignInResult", function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__["TwitterSignInResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookSignInResult", function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__["FacebookSignInResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneSignInResult", function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__["PhoneSignInResult"]; });

/* harmony import */ var _facades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facades */ "0zuk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignIn", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignInGoogle", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInGoogle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignInTwitter", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInTwitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignInFacebook", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInFacebook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignInPhone", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInPhone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeSent", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInPhoneOnCodeSent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignInPhoneOnCodeReceived", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignInPhoneOnCodeReceived"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cfaSignOut", function() { return _facades__WEBPACK_IMPORTED_MODULE_1__["cfaSignOut"]; });

/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators */ "VhLB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapUserToUserInfo", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["mapUserToUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapUserCredentialToUserInfo", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__["mapUserCredentialToUserInfo"]; });

/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web */ "LRWT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuthWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_3__["CapacitorFirebaseAuthWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapacitorFirebaseAuth", function() { return _web__WEBPACK_IMPORTED_MODULE_3__["CapacitorFirebaseAuth"]; });





//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=firebase-auth-firebase-auth-module-es2015.js.map