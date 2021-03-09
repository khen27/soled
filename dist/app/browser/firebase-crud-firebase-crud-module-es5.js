(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-crud-firebase-crud-module"], {
    /***/
    "5x/H":
    /*!***********************************************************!*\
      !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
      \***********************************************************/

    /*! no exports provided */

    /***/
    function xH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/firestore */
      "6Joi");
      /* harmony import */


      var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "FZM/":
    /*!*******************************************************!*\
      !*** ./src/app/firebase/crud/firebase-crud.module.ts ***!
      \*******************************************************/

    /*! exports provided: FirebaseCrudModule */

    /***/
    function FZM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseCrudModule", function () {
        return FirebaseCrudModule;
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


      var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var firebaseRoutes = [{
        path: '',
        children: [// /firebase/crud redirect
        {
          path: '',
          redirectTo: 'listing',
          pathMatch: 'full'
        }, {
          path: 'listing',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | crud-listing-firebase-listing-module */
            [__webpack_require__.e("default~crud-listing-firebase-listing-module~crud-user-firebase-user-details-module"), __webpack_require__.e("crud-listing-firebase-listing-module")]).then(__webpack_require__.bind(null,
            /*! ./../crud/listing/firebase-listing.module */
            "Y0ph")).then(function (m) {
              return m.FirebaseListingPageModule;
            });
          }
        }, {
          path: 'details/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | crud-user-firebase-user-details-module */
            [__webpack_require__.e("default~crud-listing-firebase-listing-module~crud-user-firebase-user-details-module"), __webpack_require__.e("crud-user-firebase-user-details-module")]).then(__webpack_require__.bind(null,
            /*! ./../crud/user/firebase-user-details.module */
            "ZexN")).then(function (m) {
              return m.FirebaseUserDetailsPageModule;
            });
          }
        }]
      }];

      var FirebaseCrudModule = function FirebaseCrudModule() {
        _classCallCheck(this, FirebaseCrudModule);
      };

      FirebaseCrudModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: FirebaseCrudModule
      });
      FirebaseCrudModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function FirebaseCrudModule_Factory(t) {
          return new (t || FirebaseCrudModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(firebaseRoutes), _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FirebaseCrudModule, {
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FirebaseCrudModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(firebaseRoutes), _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "I/3d":
    /*!************************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
      \************************************************************************************/

    /*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */

    /***/
    function I3d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestore", function () {
        return AngularFirestore;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function () {
        return AngularFirestoreCollection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function () {
        return AngularFirestoreCollectionGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function () {
        return AngularFirestoreDocument;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function () {
        return AngularFirestoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function () {
        return ENABLE_PERSISTENCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function () {
        return PERSISTENCE_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTINGS", function () {
        return SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "associateQuery", function () {
        return associateQuery;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineChange", function () {
        return combineChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "combineChanges", function () {
        return combineChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "docChanges", function () {
        return docChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function () {
        return fromCollectionRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromDocRef", function () {
        return fromDocRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromRef", function () {
        return fromRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortedChanges", function () {
        return sortedChanges;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateEventsArray", function () {
        return validateEventsArray;
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
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! firebase/firestore */
      "5x/H");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
      /**
       * @fileoverview added by tsickle
       * Generated from: observable/fromRef.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T, R
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function _fromRef(ref) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"];
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
        /**
        * @param {?} subscriber
        * @return {?}
        */
        function (subscriber) {
          /** @type {?} */
          var unsubscribe;

          if (scheduler != null) {
            scheduler.schedule(
            /**
            * @return {?}
            */
            function () {
              unsubscribe = ref.onSnapshot(subscriber);
            });
          } else {
            unsubscribe = ref.onSnapshot(subscriber);
          }

          return (
            /**
            * @return {?}
            */
            function () {
              if (unsubscribe != null) {
                unsubscribe();
              }
            }
          );
        });
      }
      /**
       * @template R
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromRef(ref, scheduler) {
        return _fromRef(ref, scheduler);
      }
      /**
       * @template T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromDocRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} payload
        * @return {?}
        */
        function (payload) {
          return {
            payload: payload,
            type: 'value'
          };
        }));
      }
      /**
       * @template T
       * @param {?} ref
       * @param {?=} scheduler
       * @return {?}
       */


      function fromCollectionRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} payload
        * @return {?}
        */
        function (payload) {
          return {
            payload: payload,
            type: 'query'
          };
        }));
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: collection/changes.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Return a stream of document changes on a query. These results are not in sort order but in
       * order of occurence.
       * @template T
       * @param {?} query
       * @param {?=} scheduler
       * @return {?}
       */


      function docChanges(query, scheduler) {
        return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} action
        * @return {?}
        */
        function (action) {
          return action.payload.docChanges().map(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return (
              /** @type {?} */
              {
                type: change.type,
                payload: change
              }
            );
          });
        }));
      }
      /**
       * Return a stream of document changes on a query. These results are in sort order.
       * @template T
       * @param {?} query
       * @param {?} events
       * @param {?=} scheduler
       * @return {?}
       */


      function sortedChanges(query, events, scheduler) {
        return fromCollectionRef(query, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes.payload.docChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
        /**
        * @param {?} current
        * @param {?} changes
        * @return {?}
        */
        function (current, changes) {
          return combineChanges(current, changes, events);
        }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              {
                type: c.type,
                payload: c
              }
            );
          });
        }));
      }
      /**
       * Combines the total result set from the current set of changes from an incoming set
       * of changes.
       * @template T
       * @param {?} current
       * @param {?} changes
       * @param {?} events
       * @return {?}
       */


      function combineChanges(current, changes, events) {
        changes.forEach(
        /**
        * @param {?} change
        * @return {?}
        */
        function (change) {
          // skip unwanted change types
          if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
          }
        });
        return current;
      }
      /**
       * Creates a new sorted array from a new change.
       * @template T
       * @param {?} combined
       * @param {?} change
       * @return {?}
       */


      function combineChange(combined, change) {
        switch (change.type) {
          case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {// Not sure why the duplicates are getting fired
            } else {
              combined.splice(change.newIndex, 0, change);
            }

            break;

          case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
              // When an item changes position we first remove it
              // and then add it's new position
              if (change.oldIndex !== change.newIndex) {
                combined.splice(change.oldIndex, 1);
                combined.splice(change.newIndex, 0, change);
              } else {
                combined.splice(change.newIndex, 1, change);
              }
            }

            break;

          case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
              combined.splice(change.oldIndex, 1);
            }

            break;
        }

        return combined;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: collection/collection.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?=} events
       * @return {?}
       */


      function validateEventsArray(events) {
        if (!events || events.length === 0) {
          events = ['added', 'removed', 'modified'];
        }

        return events;
      }
      /**
       * AngularFirestoreCollection service
       *
       * This class creates a reference to a Firestore Collection. A reference and a query are provided in
       * in the constructor. The query can be the unqueried reference if no query is desired.The class
       * is generic which gives you type safety for data update methods and data streaming.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const collectionRef = firebase.firestore.collection('stocks');
       * const query = collectionRef.where('price', '>', '0.01');
       * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
       *
       * // NOTE!: the updates are performed on the reference not the query
       * await fakeStock.add({ name: 'FAKE', price: 0.01 });
       *
       * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
       * fakeStock.valueChanges().subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreCollection = /*#__PURE__*/function () {
        /**
         * The constructor takes in a CollectionReference and Query to provide wrapper methods
         * for data operations and data streaming.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query. See the AssociatedRefence type for details
         * on this implication.
         * @param {?} ref
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollection(ref, query, afs) {
          _classCallCheck(this, AngularFirestoreCollection);

          this.ref = ref;
          this.query = query;
          this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */


        _createClass(AngularFirestoreCollection, [{
          key: "stateChanges",
          value: function stateChanges(events) {
            if (!events || events.length === 0) {
              return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }

            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return events.indexOf(change.type) > -1;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes.length > 0;
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Create a stream of changes as they occur it time. This method is similar to stateChanges()
           * but it collects each event in an array over time.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "auditTrail",
          value: function auditTrail(events) {
            return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
            /**
            * @param {?} current
            * @param {?} action
            * @return {?}
            */
            function (current, action) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(action));
            }, []));
          }
          /**
           * Create a stream of synchronized changes. This method keeps the local array in sorted
           * query order.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges(events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */

            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * @template K
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.payload.docs.map(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                if (options.idField) {
                  return (
                    /** @type {?} */
                    Object.assign(Object.assign({},
                    /** @type {?} */
                    a.data()), _defineProperty({}, options.idField, a.id))
                  );
                } else {
                  return a.data();
                }
              });
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Retrieve the results of the query once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
          /**
           * Add data to a collection reference.
           *
           * Note: Data operation methods are done on the reference not the query. This means
           * when you update data it is not updating data to the window of your query unless
           * the data fits the criteria of the query.
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "add",
          value: function add(data) {
            return this.ref.add(data);
          }
          /**
           * Create a reference to a single document in a collection.
           * @template T
           * @param {?=} path
           * @return {?}
           */

        }, {
          key: "doc",
          value: function doc(path) {
            return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
          }
        }]);

        return AngularFirestoreCollection;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: document/document.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * AngularFirestoreDocument service
       *
       * This class creates a reference to a Firestore Document. A reference is provided in
       * in the constructor. The class is generic which gives you type safety for data update
       * methods and data streaming.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
       * await fakeStock.set({ name: 'FAKE', price: 0.01 });
       * fakeStock.valueChanges().map(snap => {
       *   if(snap.exists) return snap.data();
       *   return null;
       * }).subscribe(value => console.log(value));
       * // OR! Transform using Observable.from() and the data is unwrapped for you
       * Observable.from(fakeStock).subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreDocument = /*#__PURE__*/function () {
        /**
         * The contstuctor takes in a DocumentReference to provide wrapper methods
         * for data operations, data streaming, and Symbol.observable.
         * @param {?} ref
         * @param {?} afs
         */
        function AngularFirestoreDocument(ref, afs) {
          _classCallCheck(this, AngularFirestoreDocument);

          this.ref = ref;
          this.afs = afs;
        }
        /**
         * Create or overwrite a single document.
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */


        _createClass(AngularFirestoreDocument, [{
          key: "set",
          value: function set(data, options) {
            return this.ref.set(data, options);
          }
          /**
           * Update some fields of a document without overwriting the entire document.
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "update",
          value: function update(data) {
            return this.ref.update(data);
          }
          /**
           * Delete a document.
           * @return {?}
           */

        }, {
          key: "delete",
          value: function _delete() {
            return this.ref["delete"]();
          }
          /**
           * Create a reference to a sub-collection given a path and an optional query
           * function.
           * @template R
           * @param {?} path
           * @param {?=} queryFn
           * @return {?}
           */

        }, {
          key: "collection",
          value: function collection(path, queryFn) {
            /** @type {?} */
            var collectionRef = this.ref.collection(path);

            var _associateQuery = associateQuery(collectionRef, queryFn),
                ref = _associateQuery.ref,
                query = _associateQuery.query;

            return new AngularFirestoreCollection(ref, query, this.afs);
          }
          /**
           * Listen to snapshot updates from the document.
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges() {
            /** @type {?} */
            var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
            return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * Listen to unwrapped snapshot updates from the document.
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} action
            * @return {?}
            */
            function (action) {
              return action.payload.data();
            }));
          }
          /**
           * Retrieve the document once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
        }]);

        return AngularFirestoreDocument;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: collection-group/collection-group.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * AngularFirestoreCollectionGroup service
       *
       * This class holds a reference to a Firestore Collection Group Query.
       *
       * This class uses Symbol.observable to transform into Observable using Observable.from().
       *
       * This class is rarely used directly and should be created from the AngularFirestore service.
       *
       * Example:
       *
       * const collectionGroup = firebase.firestore.collectionGroup('stocks');
       * const query = collectionRef.where('price', '>', '0.01');
       * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
       *
       * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
       * fakeStock.valueChanges().subscribe(value => console.log(value));
       * @template T
       */


      var AngularFirestoreCollectionGroup = /*#__PURE__*/function () {
        /**
         * The constructor takes in a CollectionGroupQuery to provide wrapper methods
         * for data operations and data streaming.
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollectionGroup(query, afs) {
          _classCallCheck(this, AngularFirestoreCollectionGroup);

          this.query = query;
          this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */


        _createClass(AngularFirestoreCollectionGroup, [{
          key: "stateChanges",
          value: function stateChanges(events) {
            if (!events || events.length === 0) {
              return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }

            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.filter(
              /**
              * @param {?} change
              * @return {?}
              */
              function (change) {
                return events.indexOf(change.type) > -1;
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /**
            * @param {?} changes
            * @return {?}
            */
            function (changes) {
              return changes.length > 0;
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Create a stream of changes as they occur it time. This method is similar to stateChanges()
           * but it collects each event in an array over time.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "auditTrail",
          value: function auditTrail(events) {
            return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(
            /**
            * @param {?} current
            * @param {?} action
            * @return {?}
            */
            function (current, action) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(action));
            }, []));
          }
          /**
           * Create a stream of synchronized changes. This method keeps the local array in sorted
           * query order.
           * @param {?=} events
           * @return {?}
           */

        }, {
          key: "snapshotChanges",
          value: function snapshotChanges(events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */

            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
          }
          /**
           * Listen to all documents in the collection and its possible query as an Observable.
           * @return {?}
           */

        }, {
          key: "valueChanges",
          value: function valueChanges() {
            /** @type {?} */
            var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
            return fromCollectionRefScheduled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
            /**
            * @param {?} actions
            * @return {?}
            */
            function (actions) {
              return actions.payload.docs.map(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                return a.data();
              });
            }), this.afs.keepUnstableUntilFirst);
          }
          /**
           * Retrieve the results of the query once.
           * @param {?=} options
           * @return {?}
           */

        }, {
          key: "get",
          value: function get(options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
          }
        }]);

        return AngularFirestoreCollectionGroup;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: firestore.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var atFirestore = __webpack_require__(
      /*! @firebase/firestore */
      "6Joi");
      /**
       * The value of this token determines whether or not the firestore will have persistance enabled
       * @type {?}
       */


      var ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
      /** @type {?} */

      var PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
      /** @type {?} */

      var SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
      /**
       * A utility methods for associating a collection reference with
       * a query.
       *
       * @param {?} collectionRef - A collection reference to query
       * @param {?=} queryFn - The callback to create a query
       *
       * Example:
       * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
       *  return ref.where('age', '<', 200);
       * });
       * @return {?}
       */

      function associateQuery(collectionRef) {
        var queryFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
        /**
        * @param {?} ref
        * @return {?}
        */
        function (ref) {
          return ref;
        };

        /** @type {?} */
        var query = queryFn(collectionRef);
        /** @type {?} */

        var ref = collectionRef;
        return {
          query: query,
          ref: ref
        };
      }
      /**
       * AngularFirestore Service
       *
       * This service is the main entry point for this feature module. It provides
       * an API for creating Collection and Reference services. These services can
       * then be used to do data updates and observable streams of the data.
       *
       * Example:
       *
       * import { Component } from '\@angular/core';
       * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
       * import { Observable } from 'rxjs/Observable';
       * import { from } from 'rxjs/observable';
       *
       * \@Component({
       *   selector: 'app-my-component',
       *   template: `
       *    <h2>Items for {{ (profile | async)?.name }}
       *    <ul>
       *       <li *ngFor="let item of items | async">{{ item.name }}</li>
       *    </ul>
       *    <div class="control-input">
       *       <input type="text" #itemname />
       *       <button (click)="addItem(itemname.value)">Add Item</button>
       *    </div>
       *   `
       * })
       * export class MyComponent implements OnInit {
       *
       *   // services for data operations and data streaming
       *   private readonly itemsRef: AngularFirestoreCollection<Item>;
       *   private readonly profileRef: AngularFirestoreDocument<Profile>;
       *
       *   // observables for template
       *   items: Observable<Item[]>;
       *   profile: Observable<Profile>;
       *
       *   // inject main service
       *   constructor(private readonly afs: AngularFirestore) {}
       *
       *   ngOnInit() {
       *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
       *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
       *     // this.items = from(this.itemsRef); // you can also do this with no mapping
       *
       *     this.profileRef = afs.doc('users/davideast');
       *     this.profile = this.profileRef.valueChanges();
       *   }
       *
       *   addItem(name: string) {
       *     const user = 'davideast';
       *     this.itemsRef.add({ name, user });
       *   }
       * }
       */


      var AngularFirestore = /*#__PURE__*/function () {
        /**
         * Each Feature of AngularFire has a FirebaseApp injected. This way we
         * don't rely on the main Firebase App instance and we can create named
         * apps and use multiple apps.
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} shouldEnablePersistence
         * @param {?} settings
         * @param {?} platformId
         * @param {?} zone
         * @param {?} persistenceSettings
         */
        function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, // tslint:disable-next-line:ban-types
        platformId, zone, persistenceSettings) {
          var _this = this;

          _classCallCheck(this, AngularFirestore);

          this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
          this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
          this.firestore = zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig); // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
            //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
            //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue

            if ('registerFirestore' in atFirestore) {
              /** @type {?} */
              atFirestore.registerFirestore(
              /** @type {?} */
              firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a);
            }
            /** @type {?} */


            var firestore = app.firestore();

            if (settings) {
              firestore.settings(settings);
            }

            return firestore;
          });

          if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
            // We need to try/catch here because not all enablePersistence() failures are caught
            // https://github.com/firebase/firebase-js-sdk/issues/608

            /** @type {?} */
            var enablePersistence =
            /**
            * @return {?}
            */
            function enablePersistence() {
              try {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this.firestore.enablePersistence(persistenceSettings || undefined).then(
                /**
                * @return {?}
                */
                function () {
                  return true;
                },
                /**
                * @return {?}
                */
                function () {
                  return false;
                }));
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
              }
            };

            this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
          } else {
            this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */


        _createClass(AngularFirestore, [{
          key: "collection",
          value: function collection(pathOrRef, queryFn) {
            /** @type {?} */
            var collectionRef;

            if (typeof pathOrRef === 'string') {
              collectionRef = this.firestore.collection(pathOrRef);
            } else {
              collectionRef = pathOrRef;
            }

            var _associateQuery2 = associateQuery(collectionRef, queryFn),
                ref = _associateQuery2.ref,
                query = _associateQuery2.query;
            /** @type {?} */


            var refInZone = this.schedulers.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return ref;
            });
            return new AngularFirestoreCollection(refInZone, query, this);
          }
          /**
           * Create a reference to a Firestore Collection Group based on a collectionId
           * and an optional query function to narrow the result
           * set.
           * @template T
           * @param {?} collectionId
           * @param {?=} queryGroupFn
           * @return {?}
           */

        }, {
          key: "collectionGroup",
          value: function collectionGroup(collectionId, queryGroupFn) {
            /** @type {?} */
            var queryFn = queryGroupFn ||
            /**
            * @param {?} ref
            * @return {?}
            */
            function (ref) {
              return ref;
            };
            /** @type {?} */


            var collectionGroup = this.firestore.collectionGroup(collectionId);
            return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
          }
          /**
           * @template T
           * @param {?} pathOrRef
           * @return {?}
           */

        }, {
          key: "doc",
          value: function doc(pathOrRef) {
            /** @type {?} */
            var ref;

            if (typeof pathOrRef === 'string') {
              ref = this.firestore.doc(pathOrRef);
            } else {
              ref = pathOrRef;
            }
            /** @type {?} */


            var refInZone = this.schedulers.ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return ref;
            });
            return new AngularFirestoreDocument(refInZone, this);
          }
          /**
           * Returns a generated Firestore Document Id.
           * @return {?}
           */

        }, {
          key: "createId",
          value: function createId() {
            return this.firestore.collection('_').doc().id;
          }
        }]);

        return AngularFirestore;
      }();

      AngularFirestore.ɵfac = function AngularFirestore_Factory(t) {
        return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8));
      };
      /** @nocollapse */


      AngularFirestore.ctorParameters = function () {
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
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [ENABLE_PERSISTENCE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SETTINGS]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [PERSISTENCE_SETTINGS]
          }]
        }];
      };
      /** @nocollapse */


      AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFirestore_Factory() {
          return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8));
        },
        token: AngularFirestore,
        providedIn: "any"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
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
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [ENABLE_PERSISTENCE]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [SETTINGS]
            }]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [PERSISTENCE_SETTINGS]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: firestore.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFirestoreModule = /*#__PURE__*/function () {
        function AngularFirestoreModule() {
          _classCallCheck(this, AngularFirestoreModule);
        }

        _createClass(AngularFirestoreModule, null, [{
          key: "enablePersistence",

          /**
           * Attempt to enable persistent storage, if possible
           * @param {?=} persistenceSettings
           * @return {?}
           */
          value: function enablePersistence(persistenceSettings) {
            return {
              ngModule: AngularFirestoreModule,
              providers: [{
                provide: ENABLE_PERSISTENCE,
                useValue: true
              }, {
                provide: PERSISTENCE_SETTINGS,
                useValue: persistenceSettings
              }]
            };
          }
        }]);

        return AngularFirestoreModule;
      }();

      AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFirestoreModule
      });
      AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFirestoreModule_Factory(t) {
          return new (t || AngularFirestoreModule)();
        },
        providers: [AngularFirestore]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFirestore]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: interfaces.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       * @template T
       */


      function DocumentSnapshotExists() {}

      if (false) {}
      /**
       * @record
       */


      function DocumentSnapshotDoesNotExist() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function QueryDocumentSnapshot() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function QuerySnapshot() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function DocumentChange() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function DocumentChangeAction() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function Action() {}

      if (false) {}
      /**
       * @record
       * @template T
       */


      function Reference() {}

      if (false) {}
      /**
       * A structure that provides an association between a reference
       * and a query on that reference. Note: Performing operations
       * on the reference can lead to confusing results with complicated
       * queries.
       *
       * Example:
       *
       * const query = ref.where('type', '==', 'Book').
       *                  .where('price', '>' 18.00)
       *                  .where('price', '<' 100.00)
       *                  .where('category', '==', 'Fiction')
       *                  .where('publisher', '==', 'BigPublisher')
       *
       * // This addition would not be a result of the query above
       * ref.add({
       *  type: 'Magazine',
       *  price: 4.99,
       *  category: 'Sports',
       *  publisher: 'SportsPublisher'
       * });
       * @record
       */


      function AssociatedReference() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-firestore.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-firestore.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=firebase-crud-firebase-crud-module-es5.js.map