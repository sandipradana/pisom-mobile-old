(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symptopmcheck-symptopmcheck-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/symptopmcheck/symptopmcheck.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/symptopmcheck/symptopmcheck.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSymptopmcheckSymptopmcheckPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>Cek Gejala</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let symptom of symptoms.symptom_check\" class=\"item-terpopuler\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col center size=\"1\">\n\t\t\t\t\t\t<ion-checkbox [(ngModel)]=\"symptom.status\" (click)=\"updateFlag(symptom.id, symptom.status)\"></ion-checkbox>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"11\" center>\n\t\t\t\t\t\t\t<b>{{ symptom.symptom.name  }}</b>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n  <ion-button color=\"danger\" expand=\"block\">Simpan</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/symptopmcheck/symptopmcheck-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/symptopmcheck/symptopmcheck-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SymptopmcheckPageRoutingModule */

    /***/
    function srcAppSymptopmcheckSymptopmcheckRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptopmcheckPageRoutingModule", function () {
        return SymptopmcheckPageRoutingModule;
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


      var _symptopmcheck_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./symptopmcheck.page */
      "./src/app/symptopmcheck/symptopmcheck.page.ts");

      var routes = [{
        path: '',
        component: _symptopmcheck_page__WEBPACK_IMPORTED_MODULE_3__["SymptopmcheckPage"]
      }];

      var SymptopmcheckPageRoutingModule = function SymptopmcheckPageRoutingModule() {
        _classCallCheck(this, SymptopmcheckPageRoutingModule);
      };

      SymptopmcheckPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SymptopmcheckPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/symptopmcheck/symptopmcheck.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/symptopmcheck/symptopmcheck.module.ts ***!
      \*******************************************************/

    /*! exports provided: SymptopmcheckPageModule */

    /***/
    function srcAppSymptopmcheckSymptopmcheckModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptopmcheckPageModule", function () {
        return SymptopmcheckPageModule;
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


      var _symptopmcheck_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./symptopmcheck-routing.module */
      "./src/app/symptopmcheck/symptopmcheck-routing.module.ts");
      /* harmony import */


      var _symptopmcheck_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./symptopmcheck.page */
      "./src/app/symptopmcheck/symptopmcheck.page.ts");

      var SymptopmcheckPageModule = function SymptopmcheckPageModule() {
        _classCallCheck(this, SymptopmcheckPageModule);
      };

      SymptopmcheckPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _symptopmcheck_routing_module__WEBPACK_IMPORTED_MODULE_5__["SymptopmcheckPageRoutingModule"]],
        declarations: [_symptopmcheck_page__WEBPACK_IMPORTED_MODULE_6__["SymptopmcheckPage"]]
      })], SymptopmcheckPageModule);
      /***/
    },

    /***/
    "./src/app/symptopmcheck/symptopmcheck.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/symptopmcheck/symptopmcheck.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSymptopmcheckSymptopmcheckPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-checkbox {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ltcHRvcG1jaGVjay9zeW1wdG9wbWNoZWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b3BtY2hlY2svc3ltcHRvcG1jaGVjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2hlY2tib3gge1xyXG4gICAgbWFyZ2luIDogMFxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/symptopmcheck/symptopmcheck.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/symptopmcheck/symptopmcheck.page.ts ***!
      \*****************************************************/

    /*! exports provided: SymptopmcheckPage */

    /***/
    function srcAppSymptopmcheckSymptopmcheckPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptopmcheckPage", function () {
        return SymptopmcheckPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var src_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/config */
      "./src/config.ts");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

      var SymptopmcheckPage = /*#__PURE__*/function () {
        function SymptopmcheckPage(activatedRoute, http, toastController, router) {
          _classCallCheck(this, SymptopmcheckPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.toastController = toastController;
          this.router = router;
          this.id = null;
          this.symptoms = {
            id: null,
            name: null,
            status: null,
            symptom_check: null
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

        _createClass(SymptopmcheckPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            this.getUser();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getJournal();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var ret;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Storage.get({
                        key: 'user'
                      });

                    case 2:
                      ret = _context.sent;
                      this.user = JSON.parse(ret.value);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getJournal",
          value: function getJournal() {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_6__["api_base_url"] + '/symptom/detail/' + this.id, {}, options).subscribe(function (resp) {
              _this.proccess(resp);
            }, function (err) {
              _this.showError(err);
            });
          }
        }, {
          key: "proccess",
          value: function proccess(resp) {
            this.symptoms = resp.data;
          }
        }, {
          key: "showError",
          value: function showError(err) {}
        }, {
          key: "updateFlag",
          value: function updateFlag(id, status) {
            var _this2 = this;

            if (status == 1) {
              status = 0;
            } else {
              status = 1;
            }

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_6__["api_base_url"] + '/symptom/update', {
              id: id,
              status: status
            }, options).subscribe(function (resp) {
              _this2.getJournal();
            }, function (err) {
              _this2.showError(err);
            });
          }
        }]);

        return SymptopmcheckPage;
      }();

      SymptopmcheckPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      SymptopmcheckPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-symptopmcheck',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./symptopmcheck.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/symptopmcheck/symptopmcheck.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./symptopmcheck.page.scss */
        "./src/app/symptopmcheck/symptopmcheck.page.scss"))["default"]]
      })], SymptopmcheckPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=symptopmcheck-symptopmcheck-module-es5.js.map