(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symptomstats-symptomstats-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/symptomstats/symptomstats.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/symptomstats/symptomstats.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSymptomstatsSymptomstatsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>Grafik Pemerikasaan Gejala</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div *ngFor=\"let stat of stats\" style=\"margin:10px\" class=\"bar\">\n\t\t<div class=\"text\">\n\t\t\t<b>{{ stat.symptom_name }}</b>\n\t\t\t<span style=\"float:right\">{{ stat.total }} / 10</span>\n\t\t</div>\n\t\t<div class=\"barBar\" style=\"background:grey\">\n\t\t\t<div style=\"background:blue; width:{{ stat.total/10*100 }}%\">&nbsp;</div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/symptomstats/symptomstats-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/symptomstats/symptomstats-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: SymptomstatsPageRoutingModule */

    /***/
    function srcAppSymptomstatsSymptomstatsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomstatsPageRoutingModule", function () {
        return SymptomstatsPageRoutingModule;
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


      var _symptomstats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./symptomstats.page */
      "./src/app/symptomstats/symptomstats.page.ts");

      var routes = [{
        path: '',
        component: _symptomstats_page__WEBPACK_IMPORTED_MODULE_3__["SymptomstatsPage"]
      }];

      var SymptomstatsPageRoutingModule = function SymptomstatsPageRoutingModule() {
        _classCallCheck(this, SymptomstatsPageRoutingModule);
      };

      SymptomstatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SymptomstatsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/symptomstats/symptomstats.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/symptomstats/symptomstats.module.ts ***!
      \*****************************************************/

    /*! exports provided: SymptomstatsPageModule */

    /***/
    function srcAppSymptomstatsSymptomstatsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomstatsPageModule", function () {
        return SymptomstatsPageModule;
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


      var _symptomstats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./symptomstats-routing.module */
      "./src/app/symptomstats/symptomstats-routing.module.ts");
      /* harmony import */


      var _symptomstats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./symptomstats.page */
      "./src/app/symptomstats/symptomstats.page.ts");

      var SymptomstatsPageModule = function SymptomstatsPageModule() {
        _classCallCheck(this, SymptomstatsPageModule);
      };

      SymptomstatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _symptomstats_routing_module__WEBPACK_IMPORTED_MODULE_5__["SymptomstatsPageRoutingModule"]],
        declarations: [_symptomstats_page__WEBPACK_IMPORTED_MODULE_6__["SymptomstatsPage"]]
      })], SymptomstatsPageModule);
      /***/
    },

    /***/
    "./src/app/symptomstats/symptomstats.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/symptomstats/symptomstats.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSymptomstatsSymptomstatsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5bXB0b21zdGF0cy9zeW1wdG9tc3RhdHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/symptomstats/symptomstats.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/symptomstats/symptomstats.page.ts ***!
      \***************************************************/

    /*! exports provided: SymptomstatsPage */

    /***/
    function srcAppSymptomstatsSymptomstatsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymptomstatsPage", function () {
        return SymptomstatsPage;
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

      var SymptomstatsPage = /*#__PURE__*/function () {
        function SymptomstatsPage(activatedRoute, http, toastController, router) {
          _classCallCheck(this, SymptomstatsPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.toastController = toastController;
          this.router = router;
          this.id = null;
          this.stats = [];
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

        _createClass(SymptomstatsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            this.getUser();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getStats();
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
          key: "getStats",
          value: function getStats() {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_6__["api_base_url"] + '/symptom/stats/' + this.id, {}, options).subscribe(function (resp) {
              _this.proccess(resp);
            }, function (err) {
              _this.showError(err);
            });
          }
        }, {
          key: "proccess",
          value: function proccess(resp) {
            this.stats = resp.data;
          }
        }, {
          key: "showError",
          value: function showError(err) {}
        }]);

        return SymptomstatsPage;
      }();

      SymptomstatsPage.ctorParameters = function () {
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

      SymptomstatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-symptomstats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./symptomstats.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/symptomstats/symptomstats.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./symptomstats.page.scss */
        "./src/app/symptomstats/symptomstats.page.scss"))["default"]]
      })], SymptomstatsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=symptomstats-symptomstats-module-es5.js.map