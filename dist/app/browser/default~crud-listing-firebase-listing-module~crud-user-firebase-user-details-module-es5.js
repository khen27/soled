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

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~crud-listing-firebase-listing-module~crud-user-firebase-user-details-module"], {
    /***/
    "S2dq":
    /*!*********************************************************************!*\
      !*** ./src/app/firebase/crud/user/select-image/user-image.model.ts ***!
      \*********************************************************************/

    /*! exports provided: UserImageModel */

    /***/
    function S2dq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserImageModel", function () {
        return UserImageModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shell/data-store */
      "f/Ol");

      var UserImageModel = /*#__PURE__*/function (_shell_data_store__WE) {
        _inherits(UserImageModel, _shell_data_store__WE);

        var _super = _createSuper(UserImageModel);

        function UserImageModel() {
          _classCallCheck(this, UserImageModel);

          return _super.call(this);
        }

        return UserImageModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "X1WR":
    /*!*****************************************************************!*\
      !*** ./src/app/firebase/crud/listing/firebase-listing.model.ts ***!
      \*****************************************************************/

    /*! exports provided: FirebaseListingItemModel */

    /***/
    function X1WR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseListingItemModel", function () {
        return FirebaseListingItemModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shell/data-store */
      "f/Ol");

      var FirebaseListingItemModel = /*#__PURE__*/function (_shell_data_store__WE2) {
        _inherits(FirebaseListingItemModel, _shell_data_store__WE2);

        var _super2 = _createSuper(FirebaseListingItemModel);

        function FirebaseListingItemModel() {
          _classCallCheck(this, FirebaseListingItemModel);

          return _super2.call(this);
        }

        return FirebaseListingItemModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);
      /***/

    },

    /***/
    "atpo":
    /*!*************************************************************************!*\
      !*** ./src/app/firebase/crud/user/create/firebase-create-user.modal.ts ***!
      \*************************************************************************/

    /*! exports provided: FirebaseCreateUserModal */

    /***/
    function atpo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseCreateUserModal", function () {
        return FirebaseCreateUserModal;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../validators/checkbox-checked.validator */
      "ypRl");
      /* harmony import */


      var _firebase_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../firebase-user.model */
      "pXCI");
      /* harmony import */


      var _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../select-image/select-user-image.modal */
      "j7gE");
      /* harmony import */


      var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../firebase-crud.service */
      "izws");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FirebaseCreateUserModal_ion_item_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-checkbox", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.skills[i_r2].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r2);
        }
      }

      var _c0 = function _c0() {
        return {
          w: 1,
          h: 1
        };
      };

      var FirebaseCreateUserModal = /*#__PURE__*/function () {
        function FirebaseCreateUserModal(modalController, firebaseCrudService) {
          _classCallCheck(this, FirebaseCreateUserModal);

          this.modalController = modalController;
          this.firebaseCrudService = firebaseCrudService;
          this.userData = new _firebase_user_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseUserModel"]();
          this.skills = [];
        }

        _createClass(FirebaseCreateUserModal, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // default image
            this.userData.avatar = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
            this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_5__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)),
              spanish: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
              english: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
              french: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
            });
            this.firebaseCrudService.getSkills().subscribe(function (skills) {
              _this.skills = skills; // create skill checkboxes

              _this.skills.map(function () {
                _this.createUserForm.controls.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
              });
            });
          }
        }, {
          key: "changeLangValue",
          value: function changeLangValue(value) {
            switch (true) {
              case value <= 3:
                return 'Novice';

              case value > 3 && value <= 6:
                return 'Competent';

              case value > 6:
                return 'Expert';
            }
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss();
          }
        }, {
          key: "createUser",
          value: function createUser() {
            var _this2 = this;

            this.userData.name = this.createUserForm.value.name;
            this.userData.lastname = this.createUserForm.value.lastname;
            this.userData.birthdate = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.createUserForm.value.birthdate).unix(); // save it in timestamp

            this.userData.phone = this.createUserForm.value.phone;
            this.userData.email = this.createUserForm.value.email;
            this.userData.languages.spanish = this.createUserForm.value.spanish;
            this.userData.languages.english = this.createUserForm.value.english;
            this.userData.languages.french = this.createUserForm.value.french; // get the ids of the selected skills

            var selectedSkills = [];
            this.createUserForm.value.skills.map(function (value, index) {
              if (value) {
                selectedSkills.push(_this2.skills[index].id);
              }
            });
            this.userData.skills = selectedSkills;
            this.firebaseCrudService.createUser(this.userData).then(function () {
              _this2.dismissModal();
            });
          }
        }, {
          key: "changeUserImage",
          value: function changeUserImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = this.modalController;
                      _context.t1 = _select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_7__["SelectUserImageModal"];
                      _context.next = 4;
                      return this.modalController.getTop();

                    case 4:
                      _context.t2 = _context.sent;
                      _context.t3 = {
                        component: _context.t1,
                        swipeToClose: true,
                        presentingElement: _context.t2
                      };
                      _context.next = 8;
                      return _context.t0.create.call(_context.t0, _context.t3);

                    case 8:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (avatar) {
                        if (avatar.data != null) {
                          _this3.userData.avatar = avatar.data.link;
                        }
                      });
                      _context.next = 12;
                      return modal.present();

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "skillsFormArray",
          get: function get() {
            return this.createUserForm.get('skills');
          }
        }]);

        return FirebaseCreateUserModal;
      }();

      FirebaseCreateUserModal.ɵfac = function FirebaseCreateUserModal_Factory(t) {
        return new (t || FirebaseCreateUserModal)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_firebase_crud_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseCrudService"]));
      };

      FirebaseCreateUserModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FirebaseCreateUserModal,
        selectors: [["app-firebase-create-user"]],
        decls: 77,
        vars: 11,
        consts: [[1, "create-user-form", "ion-page", 3, "formGroup", "ngSubmit"], ["color", "primary"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "create-user-content"], [1, "select-user-image-row"], ["size", "5", 1, "user-image-col"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "display", "src", "alt"], ["color", "secondary", 1, "change-image-btn", 3, "click"], ["slot", "icon-only", "name", "camera", 1, "btn-icon"], [1, "user-details-fields", "fields-section"], ["lines", "full", 1, "inputs-list"], [1, "input-item"], ["color", "secondary", "position", "floating"], ["type", "text", "formControlName", "name", "required", ""], ["type", "text", "formControlName", "lastname", "required", ""], ["display-format", "DD/MM/YYYY", "picker-format", "DD MMMM YYYY", "formControlName", "birthdate", "required", ""], ["type", "tel", "formControlName", "phone", "required", ""], ["type", "email", "formControlName", "email", "required", ""], [1, "user-experience-fields", "fields-section"], [1, "section-header"], [1, "checkbox-tags", "rounded-checkbox-tags"], ["formArrayName", "skills", "lines", "none", "class", "checkbox-tag rounded-tag", 4, "ngFor", "ngForOf"], [1, "user-languages-fields", "fields-section"], [1, "range-item-row"], ["size", "12"], [1, "range-header"], [1, "range-label"], [1, "range-value"], ["formControlName", "english", "color", "secondary", "min", "1", "max", "10", "step", "1", 1, "range-control"], ["formControlName", "spanish", "color", "secondary", "min", "1", "max", "10", "step", "1", 1, "range-control"], ["formControlName", "french", "color", "secondary", "min", "1", "max", "10", "step", "1", 1, "range-control"], [1, "form-actions-wrapper"], ["expand", "block", "color", "secondary", "type", "submit", "fill", "solid", 1, "submit-btn", 3, "disabled"], ["formArrayName", "skills", "lines", "none", 1, "checkbox-tag", "rounded-tag"], [1, "tag-label"], [3, "formControlName"]],
        template: function FirebaseCreateUserModal_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FirebaseCreateUserModal_Template_form_ngSubmit_0_listener() {
              return ctx.createUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirebaseCreateUserModal_Template_ion_button_click_4_listener() {
              return ctx.dismissModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "New User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-aspect-ratio", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-image-shell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirebaseCreateUserModal_Template_ion_button_click_13_listener() {
              return ctx.changeUserImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-list", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Date of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-datetime", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Phone number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ion-input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "section", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Experience in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-row", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, FirebaseCreateUserModal_ion_item_41_Template, 4, 2, "ion-item", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-row", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "ion-range", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-row", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Spanish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ion-range", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-row", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "French");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "ion-range", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-row", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "CREATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createUserForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("display", "cover")("src", ctx.userData.avatar)("alt", "user image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skillsFormArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.changeLangValue(ctx.createUserForm.controls.english.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.changeLangValue(ctx.createUserForm.controls.spanish.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.changeLangValue(ctx.createUserForm.controls.french.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.createUserForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_10__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-background-shade: var(--app-background-shade);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n  background-color: var(--page-background-shade);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%] {\n  padding: 0px calc(var(--page-margin) - var(--page-tags-gutter));\n  --checkbox-tag-color: #000;\n  --checkbox-tag-background: #FFF;\n  --checkbox-tag-active-color: #FFF;\n  --checkbox-tag-active-background: #000;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --inner-padding-start: 8px;\n  --ion-item-background: var(--checkbox-tag-background);\n  --ion-item-color: var(--checkbox-tag-color);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.rounded-tag[_ngcontent-%COMP%] {\n  --border-radius: 2.2rem;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%] {\n  --ion-item-background: var(--checkbox-tag-active-background);\n  --ion-item-color: var(--checkbox-tag-active-color);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-interactive-disabled[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-align: center;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 0px;\n  --border-width: 0px;\n  height: 0px;\n  --color-checked: transparent;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  padding: 0px var(--page-tags-gutter);\n  margin: var(--page-tags-gutter) 0px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag[_ngcontent-%COMP%] {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: var(--ion-color-medium-shade);\n  --checkbox-tag-color: var(--ion-color-medium-shade);\n  --checkbox-tag-background: var(--ion-color-lightest);\n  --checkbox-tag-active-color: var(--ion-color-lightest);\n  --checkbox-tag-active-background: var(--ion-color-darkest);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-experience-fields[_ngcontent-%COMP%]   .checkbox-tags.rounded-checkbox-tags[_ngcontent-%COMP%]   .checkbox-tag.item-checkbox-checked[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-darkest);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding-top: var(--page-margin);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  -webkit-padding-end: var(--page-margin);\n          padding-inline-end: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium-shade);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-languages-fields[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-medium-shade);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.form-actions-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIubW9kYWwuc2NzcyIsInNyYy90aGVtZS9taXhpbnMvaW5wdXRzL2NoZWNrYm94LXRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUVBLG9EQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0FBRkY7O0FBSUU7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOENBQUE7QUFISjs7QUFLSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFITjs7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUFIUjs7QUFPSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU5OOztBQVFNO0VBQ0UsZUFBQTtBQU5SOztBQVdFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQVRKOztBQVdJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFUTjs7QUFjSTtFQUNFLCtCQUFBO0FBWk47O0FBZUk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQWJOOztBQWtCSTtFQUNFLCtEQUFBO0VDeEVKLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FEeURGOztBQ3ZEQztFQUVDLG9CQUFBO0VBQ0Usd0JBQUE7RUFDRiwwQkFBQTtFQUNBLHFEQUFBO0VBQ0UsMkNBQUE7QUR3REo7O0FDdERJO0VBQ0QsdUJBQUE7QUR3REg7O0FDckRFO0VBQ0ksNERBQUE7RUFDQSxrREFBQTtBRHVETjs7QUNwREk7RUFDRSxZQUFBO0FEc0ROOztBQ3BETTtFQUVFLFVBQUE7QURxRFI7O0FDakRFO0VBQ0MsV0FBQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QURtRE47O0FDaERFO0VBQ0MsV0FBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSw0QkFBQTtBRGdESDs7QUFsQk07RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0FBb0JSOztBQWhCTTtFQUNFLDJDQUFBO0FBa0JSOztBQWhCUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLDBEQUFBO0FBa0JWOztBQWhCVTtFQUNFLHdDQUFBO0FBa0JaOztBQVhFO0VBQ0UsbUJBQUE7QUFhSjs7QUFYSTtFQUNFLDhCQUFBO0VBRUEsK0JBQUE7RUFDQSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsdUNBQUE7VUFBQSxzQ0FBQTtFQUVBLHlEQUFBO0FBV047O0FBVE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQVdSOztBQVRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQVdWOztBQVJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQVVWOztBQU5NO0VBRUUsK0NBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBTVI7O0FBQUE7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FBRUY7O0FBQUU7RUFDRSxXQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvY3JlYXRlL3N0eWxlcy9maXJlYmFzZS1jcmVhdGUtdXNlci5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcclxuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xyXG5cclxuICAtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZTogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xyXG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xyXG59XHJcblxyXG4uY3JlYXRlLXVzZXItY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICAuc2VsZWN0LXVzZXItaW1hZ2Utcm93IHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xyXG5cclxuICAgIC51c2VyLWltYWdlLWNvbCB7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIC51c2VyLWltYWdlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGFuZ2UtaW1hZ2UtYnRuIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICB3aWR0aDogNGNoO1xyXG4gICAgICBoZWlnaHQ6IDRjaDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAuYnRuLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpZWxkcy1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHNvbGlkIHZhcigtLXBhZ2UtYmFja2dyb3VuZC1zaGFkZSk7XHJcblxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlci1kZXRhaWxzLWZpZWxkcyB7XHJcbiAgICAuaW5wdXRzLWxpc3Qge1xyXG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyLWV4cGVyaWVuY2UtZmllbGRzIHtcclxuICAgIC5jaGVja2JveC10YWdzIHtcclxuICAgICAgcGFkZGluZzogMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS10YWdzLWd1dHRlcikpO1xyXG5cclxuICAgICAgQGluY2x1ZGUgY2hlY2tib3gtdGFnKCk7XHJcblxyXG4gICAgICAuY2hlY2tib3gtdGFnIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKSAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBhIGRlZXBlciBzZWxlY3RvciB0byBvdmVycmlkZSBkZWZhdWx0IGNvbG9yc1xyXG4gICAgICAmLnJvdW5kZWQtY2hlY2tib3gtdGFncyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuXHJcbiAgICAgICAgLmNoZWNrYm94LXRhZyB7XHJcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgLS1jaGVja2JveC10YWctY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcclxuICAgICAgICAgIC0tY2hlY2tib3gtdGFnLWFjdGl2ZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XHJcblxyXG4gICAgICAgICAgJi5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXItbGFuZ3VhZ2VzLWZpZWxkcyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG5cclxuICAgIC5yYW5nZS1pdGVtLXJvdyB7XHJcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xyXG4gICAgICAvLyBib3gtc2hhZG93IGF0IHRoZSB0b3BcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggIHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcclxuXHJcbiAgICAgIC5yYW5nZS1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgICAgICAucmFuZ2UtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yYW5nZS1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJhbmdlLWNvbnRyb2wge1xyXG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZSBwaW4gY29sb3JcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcblxyXG4gIC5zdWJtaXQtYnRuIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gY2hlY2tib3gtdGFnKCkge1xyXG4gIC8vIERlZmF1bHQgdmFsdWVzXHJcbiAgLS1jaGVja2JveC10YWctY29sb3I6ICMwMDA7XHJcbiAgLS1jaGVja2JveC10YWctYmFja2dyb3VuZDogI0ZGRjtcclxuICAtLWNoZWNrYm94LXRhZy1hY3RpdmUtY29sb3I6ICNGRkY7XHJcbiAgLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQ6ICMwMDA7XHJcblxyXG5cdC5jaGVja2JveC10YWcge1xyXG4gICAgLy8gUmVzZXQgdmFsdWVzIGZyb20gSW9uaWMgKGlvbi1pdGVtKSBzdHlsZXNcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcblx0XHQtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LXRhZy1iYWNrZ3JvdW5kKTtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6IHZhcigtLWNoZWNrYm94LXRhZy1jb2xvcik7XHJcblxyXG4gICAgJi5yb3VuZGVkLXRhZyB7XHJcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMi4ycmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYuaXRlbS1jaGVja2JveC1jaGVja2VkIHtcclxuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWJhY2tncm91bmQpO1xyXG4gICAgICAtLWlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jaGVja2JveC10YWctYWN0aXZlLWNvbG9yKTtcclxuXHRcdH1cclxuXHJcbiAgICAmLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICAgICAudGFnLWxhYmVsIHtcclxuICAgICAgICAvLyBPdmVycmlkZSBJb25pYyBkZWZhdWx0IHN0eWxlXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRcdC50YWctbGFiZWwge1xyXG5cdFx0XHRtYXJnaW46IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tY2hlY2tib3gge1xyXG5cdFx0XHRtYXJnaW46IDBweDtcclxuXHRcdFx0Ly8gVG8gaGlkZSB0aGUgLmNoZWNrYm94LWljb25cclxuXHRcdFx0d2lkdGg6IDBweDtcclxuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDBweDtcclxuXHRcdFx0aGVpZ2h0OiAwcHg7XHJcblx0XHRcdC8vIFdlIGNhbnQgc2V0IHdpZHRoIGFuZCBoZWlnaHQgZm9yIC5jaGVja2JveC1pY29uIC5jaGVja2JveC1pbm5lciwgc28gbGV0cyBoaWRlIGl0IGNoYW5naW5nIGl0cyBjb2xvclxyXG5cdFx0XHQtLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL2NyZWF0ZS9zdHlsZXMvZmlyZWJhc2UtY3JlYXRlLXVzZXIuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvY3JlYXRlL3N0eWxlcy9maXJlYmFzZS1jcmVhdGUtdXNlci5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseCreateUserModal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-firebase-create-user',
            templateUrl: './firebase-create-user.modal.html',
            styleUrls: ['./styles/firebase-create-user.modal.scss', './styles/firebase-create-user.shell.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
          }, {
            type: _firebase_crud_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseCrudService"]
          }];
        }, null);
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
            var _this4 = this;

            // tslint:disable-next-line:no-shadowed-variable
            var delay = typeof networkDelay === 'number' ? networkDelay : this.networkDelay;
            var processedDataSource; // If no network delay, then don't show shell

            if (delay === 0) {
              processedDataSource = dataSourceObservable;
            } else {
              processedDataSource = DataStore.AppendShell(dataSourceObservable, this.shellModel, delay);
            }

            processedDataSource.subscribe(function (dataValue) {
              _this4.timeline.next(dataValue);
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
    "izws":
    /*!********************************************************!*\
      !*** ./src/app/firebase/crud/firebase-crud.service.ts ***!
      \********************************************************/

    /*! exports provided: FirebaseCrudService */

    /***/
    function izws(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseCrudService", function () {
        return FirebaseCrudService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shell/data-store */
      "f/Ol");
      /* harmony import */


      var _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../crud/listing/firebase-listing.model */
      "X1WR");
      /* harmony import */


      var _crud_user_firebase_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../crud/user/firebase-user.model */
      "pXCI");
      /* harmony import */


      var _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../crud/user/select-image/user-image.model */
      "S2dq");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var FirebaseCrudService = /*#__PURE__*/function () {
        function FirebaseCrudService(platformId, transferStateHelper, afs) {
          _classCallCheck(this, FirebaseCrudService);

          this.platformId = platformId;
          this.transferStateHelper = transferStateHelper;
          this.afs = afs;
        }
        /*
          Firebase User Listing Page
        */


        _createClass(FirebaseCrudService, [{
          key: "getListingDataSource",
          value: function getListingDataSource() {
            var _this5 = this;

            var rawDataSource = this.afs.collection('users').valueChanges({
              idField: 'id'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (user) {
                var age = _this5.calcUserAge(user.birthdate);

                return Object.assign({
                  age: age
                }, user);
              });
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState('firebase-listing-state', rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getListingStore",
          value: function getListingStore(dataSource) {
            // Use cache if available
            if (!this.listingDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = [new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"]()];
              this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
              // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.listingDataStore.load(dataSource, 0);
              } else {
                // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.listingDataStore.load(dataSource);
              }
            }

            return this.listingDataStore;
          } // Filter users by age

        }, {
          key: "searchUsersByAge",
          value: function searchUsersByAge(lower, upper) {
            var _this6 = this;

            // we save the dateOfBirth in our DB so we need to calc the min and max dates valid for this query
            var minDate = dayjs__WEBPACK_IMPORTED_MODULE_4__(Date.now()).subtract(upper, 'year').unix();
            var maxDate = dayjs__WEBPACK_IMPORTED_MODULE_4__(Date.now()).subtract(lower, 'year').unix();
            var listingCollection = this.afs.collection('users', function (ref) {
              return ref.orderBy('birthdate').startAt(minDate).endAt(maxDate);
            });
            return listingCollection.valueChanges({
              idField: 'id'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (user) {
                var age = _this6.calcUserAge(user.birthdate);

                return Object.assign({
                  age: age
                }, user);
              });
            }));
          }
          /*
            Firebase User Details Page
          */
          // Concat the userData with the details of the userSkills (from the skills collection)

        }, {
          key: "getCombinedUserDataSource",
          value: function getCombinedUserDataSource(userId) {
            var _this7 = this;

            var rawDataSource = this.getUser(userId).pipe( // Transformation operator: Map each source value (user) to an Observable (combineDataSources | throwError) which
            // is merged in the output Observable
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (user) {
              if (user && user.skills) {
                // Map each skill id and get the skill data as an Observable
                var userSkillsObservables = user.skills.map(function (skill) {
                  return _this7.getSkill(skill).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
                }); // Combination operator: Take the most recent value from both input sources (of(user) & forkJoin(userSkillsObservables)),
                // and transform those emitted values into one value ([userDetails, userSkills])

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(userSkillsObservables)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      userDetails = _ref4[0],
                      userSkills = _ref4[1];

                  // Spread operator (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
                  return Object.assign(Object.assign({}, userDetails), {
                    skills: userSkills
                  });
                }));
              } else {
                // Throw error
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('User does not have any skills.');
              }
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState("firebase-user-".concat(userId, "-state"), rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getCombinedUserStore",
          value: function getCombinedUserStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _crud_user_firebase_user_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseCombinedUserModel"]();
            this.combinedUserDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
              // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
              this.combinedUserDataStore.load(dataSource, 0);
            } else {
              // On browser transitions
              // Trigger the loading mechanism (with shell)
              this.combinedUserDataStore.load(dataSource);
            }

            return this.combinedUserDataStore;
          } // tslint:disable-next-line:max-line-length

        }, {
          key: "getRelatedUsersDataSource",
          value: function getRelatedUsersDataSource(combinedUserDataSource, userId) {
            var _this8 = this;

            var rawDataSource = combinedUserDataSource.pipe( // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (user) {
              return !user.isShell;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (user) {
              if (user && user.skills) {
                // Get all users with at least 1 skill in common
                var relatedUsersObservable = _this8.getUsersWithSameSkill(user.id, user.skills);

                return relatedUsersObservable;
              } else {
                // Throw error
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Could not get related user');
              }
            })); // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
            // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
            // duplicate http requests.

            var cachedDataSource = this.transferStateHelper.checkDataSourceState("firebase-user-".concat(userId, "-related-users-state"), rawDataSource);
            return cachedDataSource;
          }
        }, {
          key: "getRelatedUsersStore",
          value: function getRelatedUsersStore(dataSource) {
            // Initialize the model specifying that it is a shell model
            var shellModel = [new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"](), new _crud_listing_firebase_listing_model__WEBPACK_IMPORTED_MODULE_6__["FirebaseListingItemModel"]()];
            this.relatedUsersDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
              // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
              this.relatedUsersDataStore.load(dataSource, 0);
            } else {
              // On browser transitions
              // Trigger the loading mechanism (with shell)
              this.relatedUsersDataStore.load(dataSource);
            }

            return this.relatedUsersDataStore;
          }
          /*
            Firebase Create User Modal
          */

        }, {
          key: "createUser",
          value: function createUser(userData) {
            return this.afs.collection('users').add(Object.assign({}, userData));
          }
          /*
            Firebase Update User Modal
          */

        }, {
          key: "updateUser",
          value: function updateUser(userData) {
            return this.afs.collection('users').doc(userData.id).set(userData);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(userKey) {
            return this.afs.collection('users').doc(userKey)["delete"]();
          }
          /*
            Firebase Select User Image Modal
          */

        }, {
          key: "getAvatarsDataSource",
          value: function getAvatarsDataSource() {
            return this.afs.collection('avatars').valueChanges();
          }
        }, {
          key: "getAvatarsStore",
          value: function getAvatarsStore(dataSource) {
            // Use cache if available
            if (!this.avatarsDataStore) {
              // Initialize the model specifying that it is a shell model
              var shellModel = [new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_8__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_8__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_8__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_8__["UserImageModel"](), new _crud_user_select_image_user_image_model__WEBPACK_IMPORTED_MODULE_8__["UserImageModel"]()];
              this.avatarsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

              this.avatarsDataStore.load(dataSource);
            }

            return this.avatarsDataStore;
          }
          /*
            FireStore utility methods
          */
          // Get list of all available Skills (used in the create and update modals)

        }, {
          key: "getSkills",
          value: function getSkills() {
            return this.afs.collection('skills').valueChanges({
              idField: 'id'
            });
          } // Get data of a specific Skill

        }, {
          key: "getSkill",
          value: function getSkill(skillId) {
            return this.afs.doc('skills/' + skillId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) {
              var data = a.payload.data();
              var id = a.payload.id;
              return Object.assign({
                id: id
              }, data);
            }));
          } // Get data of a specific User

        }, {
          key: "getUser",
          value: function getUser(userId) {
            var _this9 = this;

            return this.afs.doc('users/' + userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) {
              var userData = a.payload.data();
              var id = a.payload.id;
              var age = userData ? _this9.calcUserAge(userData.birthdate) : 0;
              return Object.assign({
                id: id,
                age: age
              }, userData);
            }));
          } // Get all users who share at least 1 skill of the user's 'skills' list

        }, {
          key: "getUsersWithSameSkill",
          value: function getUsersWithSameSkill(userId, skills) {
            var _this10 = this;

            // Get the users who have at least 1 skill in common
            // Because firestore doesn't have a logical 'OR' operator we need to create multiple queries, one for each skill from the 'skills' list
            var queries = skills.map(function (skill) {
              return _this10.afs.collection('users', function (ref) {
                return ref.where('skills', 'array-contains', skill.id);
              }).valueChanges({
                idField: 'id'
              });
            }); // Combine all these queries

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(queries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (relatedUsers) {
              var _ref5;

              // Flatten the array of arrays of FirebaseListingItemModel
              var flattenedRelatedUsers = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(relatedUsers)); // Removes duplicates from the array of FirebaseListingItemModel objects.
              // Also remove the original user (userId)


              var filteredRelatedUsers = flattenedRelatedUsers.reduce(function (accumulatedUsers, user) {
                if (accumulatedUsers.findIndex(function (accumulatedUser) {
                  return accumulatedUser.id === user.id;
                }) < 0 && user.id !== userId) {
                  return [].concat(_toConsumableArray(accumulatedUsers), [user]);
                } else {
                  // If the user doesn't pass the test, then don't add it to the filtered users array
                  return accumulatedUsers;
                }
              }, []);
              return filteredRelatedUsers;
            }));
          }
        }, {
          key: "calcUserAge",
          value: function calcUserAge(dateOfBirth) {
            return dayjs__WEBPACK_IMPORTED_MODULE_4__(Date.now()).diff(dayjs__WEBPACK_IMPORTED_MODULE_4__["unix"](dateOfBirth), 'year');
          }
        }]);

        return FirebaseCrudService;
      }();

      FirebaseCrudService.ɵfac = function FirebaseCrudService_Factory(t) {
        return new (t || FirebaseCrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_9__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      FirebaseCrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FirebaseCrudService,
        factory: FirebaseCrudService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseCrudService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_9__["TransferStateHelper"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "j7gE":
    /*!****************************************************************************!*\
      !*** ./src/app/firebase/crud/user/select-image/select-user-image.modal.ts ***!
      \****************************************************************************/

    /*! exports provided: SelectUserImageModal */

    /***/
    function j7gE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectUserImageModal", function () {
        return SelectUserImageModal;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../firebase-crud.service */
      "izws");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");

      var _c0 = function _c0() {
        return {
          w: 1,
          h: 1
        };
      };

      function SelectUserImageModal_ion_col_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-image-shell", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectUserImageModal_ion_col_9_Template_app_image_shell_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var avatar_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.dismissModal(avatar_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aspect-ratio", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var avatar_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", avatar_r1.link)("alt", "avatar image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      }

      var SelectUserImageModal = /*#__PURE__*/function () {
        function SelectUserImageModal(modalController, firebaseCrudService) {
          _classCallCheck(this, SelectUserImageModal);

          this.modalController = modalController;
          this.firebaseCrudService = firebaseCrudService;
        }

        _createClass(SelectUserImageModal, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var dataSource = this.firebaseCrudService.getAvatarsDataSource();
            var dataStore = this.firebaseCrudService.getAvatarsStore(dataSource);
            dataStore.state.subscribe(function (state) {
              _this11.avatars = state;
            }, function (error) {});
          }
        }, {
          key: "dismissModal",
          value: function dismissModal(avatar) {
            this.modalController.dismiss(avatar);
          }
        }, {
          key: "isShell",
          get: function get() {
            return this.avatars && this.avatars.isShell ? true : false;
          }
        }]);

        return SelectUserImageModal;
      }();

      SelectUserImageModal.ɵfac = function SelectUserImageModal_Factory(t) {
        return new (t || SelectUserImageModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseCrudService"]));
      };

      SelectUserImageModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectUserImageModal,
        selectors: [["app-select-user-image"]],
        hostVars: 2,
        hostBindings: function SelectUserImageModal_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-shell", ctx.isShell);
          }
        },
        decls: 10,
        vars: 1,
        consts: [["color", "primary"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "select-image-content"], [1, "images-wrapper"], ["size", "4", "class", "image-item", 4, "ngFor", "ngForOf"], ["size", "4", 1, "image-item"], ["animation", "spinner", 1, "user-image", 3, "display", "src", "alt", "click"], [3, "ratio"]],
        template: function SelectUserImageModal_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectUserImageModal_Template_ion_button_click_3_listener() {
              return ctx.dismissModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select an Avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectUserImageModal_ion_col_9_Template, 3, 5, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.avatars);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_4__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_5__["AspectRatioComponent"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.select-image-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.select-image-content[_ngcontent-%COMP%]   .images-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2UubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBR0U7RUFDRSx1REFBQTtFQUVBLHFDQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvc2VsZWN0LWltYWdlL3N0eWxlcy9zZWxlY3QtdXNlci1pbWFnZS5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gQ3VzdG9tIHZhcmlhYmxlc1xyXG4vLyAvLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcclxuOmhvc3Qge1xyXG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XHJcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLnNlbGVjdC1pbWFnZS1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XHJcblxyXG4gIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG5cclxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvY3J1ZC91c2VyL3NlbGVjdC1pbWFnZS9zdHlsZXMvc2VsZWN0LXVzZXItaW1hZ2Uuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS9jcnVkL3VzZXIvc2VsZWN0LWltYWdlL3N0eWxlcy9zZWxlY3QtdXNlci1pbWFnZS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xyXG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectUserImageModal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-select-user-image',
            templateUrl: './select-user-image.modal.html',
            styleUrls: ['./styles/select-user-image.modal.scss', './styles/select-user-image.shell.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
          }, {
            type: _firebase_crud_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseCrudService"]
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
    "k8ID":
    /*!**************************************************************!*\
      !*** ./src/app/firebase/crud/firebase-crud-shared.module.ts ***!
      \**************************************************************/

    /*! exports provided: FirebaseCrudSharedModule */

    /***/
    function k8ID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseCrudSharedModule", function () {
        return FirebaseCrudSharedModule;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user/create/firebase-create-user.modal */
      "atpo");
      /* harmony import */


      var _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user/select-image/select-user-image.modal */
      "j7gE");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var FirebaseCrudSharedModule = function FirebaseCrudSharedModule() {
        _classCallCheck(this, FirebaseCrudSharedModule);
      };

      FirebaseCrudSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: FirebaseCrudSharedModule
      });
      FirebaseCrudSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function FirebaseCrudSharedModule_Factory(t) {
          return new (t || FirebaseCrudSharedModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FirebaseCrudSharedModule, {
          declarations: [_user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_4__["FirebaseCreateUserModal"], _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_5__["SelectUserImageModal"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          exports: [_user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_5__["SelectUserImageModal"], _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_4__["FirebaseCreateUserModal"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirebaseCrudSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
            declarations: [_user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_4__["FirebaseCreateUserModal"], _user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_5__["SelectUserImageModal"]],
            exports: [_user_select_image_select_user_image_modal__WEBPACK_IMPORTED_MODULE_5__["SelectUserImageModal"], _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_4__["FirebaseCreateUserModal"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "pXCI":
    /*!***********************************************************!*\
      !*** ./src/app/firebase/crud/user/firebase-user.model.ts ***!
      \***********************************************************/

    /*! exports provided: FirebaseSkillModel, FirebaseUserModel, FirebaseCombinedUserModel */

    /***/
    function pXCI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseSkillModel", function () {
        return FirebaseSkillModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function () {
        return FirebaseUserModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseCombinedUserModel", function () {
        return FirebaseCombinedUserModel;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shell/data-store */
      "f/Ol");

      var FirebaseSkillModel = /*#__PURE__*/function (_shell_data_store__WE3) {
        _inherits(FirebaseSkillModel, _shell_data_store__WE3);

        var _super3 = _createSuper(FirebaseSkillModel);

        function FirebaseSkillModel() {
          _classCallCheck(this, FirebaseSkillModel);

          return _super3.call(this);
        }

        return FirebaseSkillModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var FirebaseUserModel = /*#__PURE__*/function (_shell_data_store__WE4) {
        _inherits(FirebaseUserModel, _shell_data_store__WE4);

        var _super4 = _createSuper(FirebaseUserModel);

        function FirebaseUserModel() {
          var _this12;

          _classCallCheck(this, FirebaseUserModel);

          _this12 = _super4.call(this);
          _this12.skills = ['', '', ''];
          _this12.languages = {
            spanish: 0,
            english: 0,
            french: 0
          };
          return _this12;
        }

        return FirebaseUserModel;
      }(_shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"]);

      var FirebaseCombinedUserModel = /*#__PURE__*/function (_FirebaseUserModel) {
        _inherits(FirebaseCombinedUserModel, _FirebaseUserModel);

        var _super5 = _createSuper(FirebaseCombinedUserModel);

        function FirebaseCombinedUserModel() {
          var _this13;

          _classCallCheck(this, FirebaseCombinedUserModel);

          _this13 = _super5.call(this);
          _this13.skills = [new FirebaseSkillModel(), new FirebaseSkillModel(), new FirebaseSkillModel()];
          return _this13;
        }

        return FirebaseCombinedUserModel;
      }(FirebaseUserModel);
      /***/

    },

    /***/
    "ypRl":
    /*!**********************************************************!*\
      !*** ./src/app/validators/checkbox-checked.validator.ts ***!
      \**********************************************************/

    /*! exports provided: CheckboxCheckedValidator */

    /***/
    function ypRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function () {
        return CheckboxCheckedValidator;
      });

      var CheckboxCheckedValidator = /*#__PURE__*/function () {
        function CheckboxCheckedValidator() {
          _classCallCheck(this, CheckboxCheckedValidator);
        }

        _createClass(CheckboxCheckedValidator, null, [{
          key: "minSelectedCheckboxes",
          value: function minSelectedCheckboxes(min) {
            var validator = function validator(formArray) {
              var totalSelected = formArray.controls // get a list of checkbox values (boolean)
              .map(function (control) {
                return control.value;
              }) // total up the number of checked checkboxes
              .reduce(function (prev, next) {
                return next ? prev + next : prev;
              }, 0); // if the total is not greater than the minimum, return the error message

              return totalSelected >= min ? null : {
                required: true
              };
            };

            return validator;
          }
        }]);

        return CheckboxCheckedValidator;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~crud-listing-firebase-listing-module~crud-user-firebase-user-details-module-es5.js.map