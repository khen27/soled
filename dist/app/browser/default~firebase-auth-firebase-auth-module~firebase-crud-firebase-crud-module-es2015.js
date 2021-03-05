(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~firebase-auth-firebase-auth-module~firebase-crud-firebase-crud-module"],{

/***/ "Wcq6":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firebase = __webpack_require__(/*! @firebase/app */ "wj3C");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

var name = "firebase";
var version = "7.21.1";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase__default['default'].registerVersion(name, version, 'app');

module.exports = firebase__default['default'];
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "spgP":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js ***!
  \**************************************************************************/
/*! exports provided: AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS, FirebaseApp, VERSION, ɵAngularFireSchedulers, ɵBlockUntilFirstOperator, ɵZoneScheduler, ɵfirebaseAppFactory, ɵkeepUnstableUntilFirstFactory, ɵlazySDKProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireModule", function() { return AngularFireModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_APP_NAME", function() { return FIREBASE_APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_OPTIONS", function() { return FIREBASE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseApp", function() { return FirebaseApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAngularFireSchedulers", function() { return ɵAngularFireSchedulers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵBlockUntilFirstOperator", function() { return ɵBlockUntilFirstOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵZoneScheduler", function() { return ɵZoneScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵfirebaseAppFactory", function() { return ɵfirebaseAppFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵkeepUnstableUntilFirstFactory", function() { return ɵkeepUnstableUntilFirstFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵlazySDKProxy", function() { return ɵlazySDKProxy; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Wcq6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @fileoverview added by tsickle
 * Generated from: angularfire2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */

function noop() {
}
/**
 * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
 */
// tslint:disable-next-line:class-name
class ɵZoneScheduler {
    /**
     * @param {?} zone
     * @param {?=} delegate
     */
    constructor(zone, delegate = rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]) {
        this.zone = zone;
        this.delegate = delegate;
    }
    /**
     * @return {?}
     */
    now() {
        return this.delegate.now();
    }
    /**
     * @param {?} work
     * @param {?=} delay
     * @param {?=} state
     * @return {?}
     */
    schedule(work, delay, state) {
        /** @type {?} */
        const targetZone = this.zone;
        // Wrap the specified work function to make sure that if nested scheduling takes place the
        // work is executed in the correct zone
        /** @type {?} */
        const workInZone = (/**
         * @this {?}
         * @param {?} state
         * @return {?}
         */
        function (state) {
            targetZone.runGuarded((/**
             * @return {?}
             */
            () => {
                work.apply(this, [state]);
            }));
        });
        // Scheduling itself needs to be run in zone to ensure setInterval calls for async scheduling are done
        // inside the correct zone. This scheduler needs to schedule asynchronously always to ensure that
        // firebase emissions are never synchronous. Specifying a delay causes issues with the queueScheduler delegate.
        return this.delegate.schedule(workInZone, delay, state);
    }
}
if (false) {}
// tslint:disable-next-line:class-name
/**
 * @template T
 */
class ɵBlockUntilFirstOperator {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        this.task = null;
    }
    /**
     * @param {?} subscriber
     * @param {?} source
     * @return {?}
     */
    call(subscriber, source) {
        /** @type {?} */
        const unscheduleTask = this.unscheduleTask.bind(this);
        this.task = this.zone.run((/**
         * @return {?}
         */
        () => Zone.current.scheduleMacroTask('firebaseZoneBlock', noop, {}, noop, noop)));
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])({ next: unscheduleTask, complete: unscheduleTask, error: unscheduleTask })).subscribe(subscriber).add(unscheduleTask);
    }
    /**
     * @private
     * @return {?}
     */
    unscheduleTask() {
        // maybe this is a race condition, invoke in a timeout
        // hold for 10ms while I try to figure out what is going on
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.task != null && this.task.state === 'scheduled') {
                this.task.invoke();
                this.task = null;
            }
        }), 10);
    }
}
if (false) {}
// tslint:disable-next-line:class-name
class ɵAngularFireSchedulers {
    /**
     * @param {?} ngZone
     */
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.outsideAngular = ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => new ɵZoneScheduler(Zone.current)));
        this.insideAngular = ngZone.run((/**
         * @return {?}
         */
        () => new ɵZoneScheduler(Zone.current, rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"])));
    }
}
if (false) {}
/**
 * Operator to block the zone until the first value has been emitted or the observable
 * has completed/errored. This is used to make sure that universal waits until the first
 * value from firebase but doesn't block the zone forever since the firebase subscription
 * is still alive.
 * @param {?} schedulers
 * @return {?}
 */
function ɵkeepUnstableUntilFirstFactory(schedulers) {
    return (/**
     * @template T
     * @param {?} obs$
     * @return {?}
     */
    function keepUnstableUntilFirst(obs$) {
        obs$ = obs$.lift(new ɵBlockUntilFirstOperator(schedulers.ngZone));
        return obs$.pipe(
        // Run the subscribe body outside of Angular (e.g. calling Firebase SDK to add a listener to a change event)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["subscribeOn"])(schedulers.outsideAngular), 
        // Run operators inside the angular zone (e.g. side effects via tap())
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(schedulers.insideAngular)
        // INVESTIGATE https://github.com/angular/angularfire/pull/2315
        // share()
        );
    });
}
// DEBUG quick debugger function for inline logging that typescript doesn't complain about
//       wrote it for debugging the ɵlazySDKProxy, commenting out for now; should consider exposing a
//       verbose mode for AngularFire in a future release that uses something like this in multiple places
//       usage: () => log('something') || returnValue
// const log = (...args: any[]): false => { console.log(...args); return false }
// The problem here are things like ngOnDestroy are missing, then triggering the service
// rather than dig too far; I'm capturing these as I go.
/** @type {?} */
const noopFunctions = ['ngOnDestroy'];
// INVESTIGATE should we make the Proxy revokable and do some cleanup?
//             right now it's fairly simple but I'm sure this will grow in complexity
/** @type {?} */
const ɵlazySDKProxy = (/**
 * @param {?} klass
 * @param {?} observable
 * @param {?} zone
 * @return {?}
 */
(klass, observable, zone) => {
    return new Proxy(klass, {
        get: (/**
         * @param {?} _
         * @param {?} name
         * @return {?}
         */
        (_, name) => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (klass[name]) {
                return klass[name];
            }
            if (noopFunctions.includes(name)) {
                return (/**
                 * @return {?}
                 */
                () => {
                });
            }
            /** @type {?} */
            const promise = observable.toPromise().then((/**
             * @param {?} mod
             * @return {?}
             */
            mod => {
                /** @type {?} */
                const ret = mod && mod[name];
                // TODO move to proper type guards
                if (typeof ret === 'function') {
                    return ret.bind(mod);
                }
                else if (ret && ret.then) {
                    return ret.then((/**
                     * @param {?} res
                     * @return {?}
                     */
                    (res) => zone.run((/**
                     * @return {?}
                     */
                    () => res))));
                }
                else {
                    return zone.run((/**
                     * @return {?}
                     */
                    () => ret));
                }
            }));
            // recurse the proxy
            return new Proxy((/**
             * @return {?}
             */
            () => undefined), {
                get: (/**
                 * @param {?} _
                 * @param {?} name
                 * @return {?}
                 */
                (_, name) => promise[name]),
                // TODO handle callbacks as transparently as I can
                apply: (/**
                 * @param {?} self
                 * @param {?} _
                 * @param {?} args
                 * @return {?}
                 */
                (self, _, args) => promise.then((/**
                 * @param {?} it
                 * @return {?}
                 */
                it => it && it(...args))))
            });
        })))
    });
});

/**
 * @fileoverview added by tsickle
 * Generated from: firebase.app.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function FirebaseOptions() { }
/**
 * @record
 */
function FirebaseAppConfig() { }
/** @type {?} */
const FIREBASE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.options');
/** @type {?} */
const FIREBASE_APP_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('angularfire2.app.nameOrConfig');
// Have to implement as we need to return a class from the provider, we should consider exporting
// this in the firebase/app types as this is our highest risk of breaks
class FirebaseApp {
}
if (false) {}
/** @type {?} */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Version"]('6.0.3');
/**
 * @param {?} options
 * @param {?} zone
 * @param {?=} nameOrConfig
 * @return {?}
 */
function ɵfirebaseAppFactory(options, zone, nameOrConfig) {
    /** @type {?} */
    const name = typeof nameOrConfig === 'string' && nameOrConfig || '[DEFAULT]';
    /** @type {?} */
    const config = typeof nameOrConfig === 'object' && nameOrConfig || {};
    config.name = config.name || name;
    // Added any due to some inconsistency between @firebase/app and firebase types
    /** @type {?} */
    const existingApp = (/** @type {?} */ (firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.apps.filter((/**
     * @param {?} app
     * @return {?}
     */
    app => app && app.name === config.name))[0]));
    // We support FirebaseConfig, initializeApp's public type only accepts string; need to cast as any
    // Could be solved with https://github.com/firebase/firebase-js-sdk/pull/1206
    return (/** @type {?} */ ((existingApp || zone.runOutsideAngular((/**
     * @return {?}
     */
    () => firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.initializeApp(options, (/** @type {?} */ (config))))))));
}
/** @type {?} */
const FIREBASE_APP_PROVIDER = {
    provide: FirebaseApp,
    useFactory: ɵfirebaseAppFactory,
    deps: [
        FIREBASE_OPTIONS,
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), FIREBASE_APP_NAME]
    ]
};
class AngularFireModule {
    // tslint:disable-next-line:ban-types
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerVersion('angularfire', VERSION.full, platformId.toString());
        firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerVersion('angular', _angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].full);
    }
    /**
     * @param {?} options
     * @param {?=} nameOrConfig
     * @return {?}
     */
    static initializeApp(options, nameOrConfig) {
        return {
            ngModule: AngularFireModule,
            providers: [
                { provide: FIREBASE_OPTIONS, useValue: options },
                { provide: FIREBASE_APP_NAME, useValue: nameOrConfig }
            ]
        };
    }
}
AngularFireModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AngularFireModule });
AngularFireModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AngularFireModule_Factory(t) { return new (t || AngularFireModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])); }, providers: [FIREBASE_APP_PROVIDER] });
/** @nocollapse */
AngularFireModule.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularFireModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                providers: [FIREBASE_APP_PROVIDER]
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire.js.map

/***/ })

}]);
//# sourceMappingURL=default~firebase-auth-firebase-auth-module~firebase-crud-firebase-crud-module-es2015.js.map