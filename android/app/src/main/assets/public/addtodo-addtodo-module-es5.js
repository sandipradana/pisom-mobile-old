(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtodo-addtodo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/addtodo/addtodo.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addtodo/addtodo.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddtodoAddtodoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>Tambah Kegiatan</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\tKategori\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-select [(ngModel)]=\"category\" placeholder=\"Pilih Kategory Kegiatan\" (ionChange)=\"getSubCategories()\">\n\t\t\t\t\t<ion-select-option *ngFor=\"let category of categories\" (ionSelect)=\"setCategory(category.id)\" value=\"{{ category.id }}\">{{ category.name }}</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t&nbsp;\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-select [(ngModel)]=\"sub_category\" placeholder=\"Pilih Kegiatan\">\n\t\t\t\t\t<ion-select-option *ngFor=\"let sub_category of sub_categories\" (ionSelect)=\"setSubCategory(sub_category.id)\" value=\"{{ sub_category.id }}\">{{ sub_category.name }}</ion-select-option>\n\t\t\t\t</ion-select>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<hr/>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\tLainnya\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-toggle [(ngModel)]=\"sub_category_other\"></ion-toggle>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row *ngIf=\"sub_category_other\">\n\t\t\t<ion-col>\n\t\t\t\t&nbsp;\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input [(ngModel)]=\"sub_category_other_input\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t&nbsp;\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button color=\"danger\" (click)=\"addTodo()\">Simpan</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/addtodo/addtodo-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/addtodo/addtodo-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AddtodoPageRoutingModule */

    /***/
    function srcAppAddtodoAddtodoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddtodoPageRoutingModule", function () {
        return AddtodoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _addtodo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addtodo.page */
      "./src/app/addtodo/addtodo.page.ts");

      var routes = [{
        path: '',
        component: _addtodo_page__WEBPACK_IMPORTED_MODULE_3__["AddtodoPage"]
      }];

      var AddtodoPageRoutingModule = function AddtodoPageRoutingModule() {
        _classCallCheck(this, AddtodoPageRoutingModule);
      };

      AddtodoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddtodoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/addtodo/addtodo.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/addtodo/addtodo.module.ts ***!
      \*******************************************/

    /*! exports provided: AddtodoPageModule */

    /***/
    function srcAppAddtodoAddtodoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddtodoPageModule", function () {
        return AddtodoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _addtodo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addtodo-routing.module */
      "./src/app/addtodo/addtodo-routing.module.ts");
      /* harmony import */


      var _addtodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addtodo.page */
      "./src/app/addtodo/addtodo.page.ts");

      var AddtodoPageModule = function AddtodoPageModule() {
        _classCallCheck(this, AddtodoPageModule);
      };

      AddtodoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addtodo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddtodoPageRoutingModule"]],
        declarations: [_addtodo_page__WEBPACK_IMPORTED_MODULE_6__["AddtodoPage"]]
      })], AddtodoPageModule);
      /***/
    },

    /***/
    "./src/app/addtodo/addtodo.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/addtodo/addtodo.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddtodoAddtodoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRvZG8vYWRkdG9kby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/addtodo/addtodo.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/addtodo/addtodo.page.ts ***!
      \*****************************************/

    /*! exports provided: AddtodoPage */

    /***/
    function srcAppAddtodoAddtodoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddtodoPage", function () {
        return AddtodoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/config */
      "./src/config.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

      var AddtodoPage = /*#__PURE__*/function () {
        function AddtodoPage(activatedRoute, http, toastController, router) {
          _classCallCheck(this, AddtodoPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.toastController = toastController;
          this.router = router;
          this.id = null;
          this.user = {
            id: null,
            name: null,
            email: null,
            password: null,
            phone: null,
            api_token: null,
            date_of_birth: null,
            gender: null,
            hospital_id: null
          };
        }

        _createClass(AddtodoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            this.getUser();
            this.getCategories();
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer 123"
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/todo/category', {}, options).subscribe(function (resp) {
              _this.proccess(resp);
            }, function (err) {
              _this.showError(err);
            });
          }
        }, {
          key: "getSubCategories",
          value: function getSubCategories() {
            var _this2 = this;

            console.log(this.category);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer 123"
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/todo/sub-category', {
              todo_category_id: this.category
            }, options).subscribe(function (resp) {
              _this2.proccess_sub(resp);
            }, function (err) {
              _this2.showError(err);
            });
          }
        }, {
          key: "proccess",
          value: function proccess(resp) {
            this.categories = resp.data;
          }
        }, {
          key: "proccess_sub",
          value: function proccess_sub(resp) {
            this.sub_categories = resp.data;
          }
        }, {
          key: "setCategory",
          value: function setCategory(id) {//alert(id)
          }
        }, {
          key: "showError",
          value: function showError(err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: err,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addTodo",
          value: function addTodo() {
            var _this3 = this;

            if (this.category == undefined) {
              this.showError("Harus pilih kategori");
              return;
            }

            if (this.sub_category_other == undefined && this.sub_category == undefined) {
              this.showError("Harus pilih sub kategori");
              return;
            }

            if (this.sub_category_other != undefined && this.sub_category_other_input == undefined) {
              this.showError("Harus isi sub kategori lainnya");
              return;
            }

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/todo/add', {
              id: this.id,
              category_id: this.category,
              sub_category_id: this.sub_category,
              sub_category_other: this.sub_category_other,
              sub_category_other_input: this.sub_category_other_input
            }, options).subscribe(function (resp) {
              _this3.proccess_todo(resp);
            }, function (err) {
              _this3.showError(err);
            });
          }
        }, {
          key: "proccess_todo",
          value: function proccess_todo(resp) {
            this.router.navigate(['/journaldetail', this.id]);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var ret;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Storage.get({
                        key: 'user'
                      });

                    case 2:
                      ret = _context2.sent;
                      this.user = JSON.parse(ret.value);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AddtodoPage;
      }();

      AddtodoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AddtodoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtodo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addtodo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/addtodo/addtodo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addtodo.page.scss */
        "./src/app/addtodo/addtodo.page.scss"))["default"]]
      })], AddtodoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addtodo-addtodo-module-es5.js.map