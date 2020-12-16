(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publicjournaldetail-publicjournaldetail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/publicjournaldetail/publicjournaldetail.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publicjournaldetail/publicjournaldetail.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPublicjournaldetailPublicjournaldetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>{{ journals.name }}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let journal of journals.todos\" class=\"item-terpopuler\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"11\">\n\t\t\t\t\t\t<div *ngIf=\"journal.todo_category_id == 1\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<b>{{ journal.type.name }}</b>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>{{ journal.type.description }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"journal.todo_category_id != 1\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<b>{{ journal.category.name  }}</b>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"journal.data; else typename\">{{ journal.data  }}</div>\n\t\t\t\t\t\t\t<ng-template #typename>\n\t\t\t\t\t\t\t\t{{ journal.type.name  }}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"1\">\n\t\t\t\t\t\t<ion-badge color=\"medium\" *ngIf=\"journal.status == 0\">&nbsp;&nbsp;&nbsp;</ion-badge>\n\t\t\t\t\t\t<ion-badge color=\"success\" *ngIf=\"journal.status == 1\">&nbsp;&nbsp;&nbsp;</ion-badge>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/publicjournaldetail/publicjournaldetail-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/publicjournaldetail/publicjournaldetail-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: PublicjournaldetailPageRoutingModule */

    /***/
    function srcAppPublicjournaldetailPublicjournaldetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicjournaldetailPageRoutingModule", function () {
        return PublicjournaldetailPageRoutingModule;
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


      var _publicjournaldetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publicjournaldetail.page */
      "./src/app/publicjournaldetail/publicjournaldetail.page.ts");

      var routes = [{
        path: '',
        component: _publicjournaldetail_page__WEBPACK_IMPORTED_MODULE_3__["PublicjournaldetailPage"]
      }];

      var PublicjournaldetailPageRoutingModule = function PublicjournaldetailPageRoutingModule() {
        _classCallCheck(this, PublicjournaldetailPageRoutingModule);
      };

      PublicjournaldetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PublicjournaldetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/publicjournaldetail/publicjournaldetail.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/publicjournaldetail/publicjournaldetail.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PublicjournaldetailPageModule */

    /***/
    function srcAppPublicjournaldetailPublicjournaldetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicjournaldetailPageModule", function () {
        return PublicjournaldetailPageModule;
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


      var _publicjournaldetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./publicjournaldetail-routing.module */
      "./src/app/publicjournaldetail/publicjournaldetail-routing.module.ts");
      /* harmony import */


      var _publicjournaldetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./publicjournaldetail.page */
      "./src/app/publicjournaldetail/publicjournaldetail.page.ts");

      var PublicjournaldetailPageModule = function PublicjournaldetailPageModule() {
        _classCallCheck(this, PublicjournaldetailPageModule);
      };

      PublicjournaldetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _publicjournaldetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicjournaldetailPageRoutingModule"]],
        declarations: [_publicjournaldetail_page__WEBPACK_IMPORTED_MODULE_6__["PublicjournaldetailPage"]]
      })], PublicjournaldetailPageModule);
      /***/
    },

    /***/
    "./src/app/publicjournaldetail/publicjournaldetail.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/publicjournaldetail/publicjournaldetail.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPublicjournaldetailPublicjournaldetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2pvdXJuYWxkZXRhaWwvcHVibGljam91cm5hbGRldGFpbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/publicjournaldetail/publicjournaldetail.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/publicjournaldetail/publicjournaldetail.page.ts ***!
      \*****************************************************************/

    /*! exports provided: PublicjournaldetailPage */

    /***/
    function srcAppPublicjournaldetailPublicjournaldetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicjournaldetailPage", function () {
        return PublicjournaldetailPage;
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

      var PublicjournaldetailPage = /*#__PURE__*/function () {
        function PublicjournaldetailPage(activatedRoute, http, toastController, router) {
          _classCallCheck(this, PublicjournaldetailPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.toastController = toastController;
          this.router = router;
          this.id = null;
          this.journals = {
            id: null,
            name: null,
            date: null,
            journal_id: null,
            status: null,
            todos: []
          };
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

        _createClass(PublicjournaldetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            this.getUser();
          }
        }, {
          key: "getJournal",
          value: function getJournal() {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/journal/public-detail/' + this.id, {}, options).subscribe(function (resp) {
              _this.proccess(resp);
            }, function (err) {
              _this.showError(err);
            });
          }
        }, {
          key: "proccess",
          value: function proccess(resp) {
            this.journals = resp.data;
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
          key: "goToAddTodo",
          value: function goToAddTodo() {
            this.router.navigate(['/addtodo', this.id]);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getJournal();
          }
        }, {
          key: "updateFlag",
          value: function updateFlag(id, status) {
            var _this2 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/todo/update/', {
              id: id,
              status: status
            }, options).subscribe(function (resp) {
              _this2.getJournal();
            }, function (err) {
              _this2.showError(err);
            });
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

        return PublicjournaldetailPage;
      }();

      PublicjournaldetailPage.ctorParameters = function () {
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

      PublicjournaldetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicjournaldetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./publicjournaldetail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/publicjournaldetail/publicjournaldetail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./publicjournaldetail.page.scss */
        "./src/app/publicjournaldetail/publicjournaldetail.page.scss"))["default"]]
      })], PublicjournaldetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=publicjournaldetail-publicjournaldetail-module-es5.js.map