(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publicjournal-publicjournal-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/publicjournal/publicjournal.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publicjournal/publicjournal.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPublicjournalPublicjournalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>Public Journal</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\t<ion-header collapse=\"condense\">\n\t\t<ion-toolbar>\n\t\t\t<ion-title size=\"large\">Tab 2</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let journal of journals\" class=\"item-terpopuler\" (click)=\"goToJournalDetail(journal['id'])\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"11\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<b>{{ journal['name'] }}</b>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>{{ journal['date'] }}</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"1\">\n\t\t\t\t\t\t<ion-badge color=\"medium\" *ngIf=\"journal.todo_status == 0\">&nbsp;&nbsp;&nbsp;</ion-badge>\n\t\t\t\t\t\t<ion-badge color=\"success\" *ngIf=\"journal.todo_status == 1\">&nbsp;&nbsp;&nbsp;</ion-badge>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n\t<ion-button expand=\"full\" color=\"danger\" (click)=\"goToJournalStats()\">Grafik</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/publicjournal/publicjournal-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/publicjournal/publicjournal-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PublicjournalPageRoutingModule */

    /***/
    function srcAppPublicjournalPublicjournalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicjournalPageRoutingModule", function () {
        return PublicjournalPageRoutingModule;
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


      var _publicjournal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publicjournal.page */
      "./src/app/publicjournal/publicjournal.page.ts");

      var routes = [{
        path: '',
        component: _publicjournal_page__WEBPACK_IMPORTED_MODULE_3__["PublicjournalPage"]
      }];

      var PublicjournalPageRoutingModule = function PublicjournalPageRoutingModule() {
        _classCallCheck(this, PublicjournalPageRoutingModule);
      };

      PublicjournalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PublicjournalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/publicjournal/publicjournal.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/publicjournal/publicjournal.module.ts ***!
      \*******************************************************/

    /*! exports provided: PublicjournalPageModule */

    /***/
    function srcAppPublicjournalPublicjournalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicjournalPageModule", function () {
        return PublicjournalPageModule;
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


      var _publicjournal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./publicjournal-routing.module */
      "./src/app/publicjournal/publicjournal-routing.module.ts");
      /* harmony import */


      var _publicjournal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./publicjournal.page */
      "./src/app/publicjournal/publicjournal.page.ts");

      var PublicjournalPageModule = function PublicjournalPageModule() {
        _classCallCheck(this, PublicjournalPageModule);
      };

      PublicjournalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _publicjournal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicjournalPageRoutingModule"]],
        declarations: [_publicjournal_page__WEBPACK_IMPORTED_MODULE_6__["PublicjournalPage"]]
      })], PublicjournalPageModule);
      /***/
    },

    /***/
    "./src/app/publicjournal/publicjournal.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/publicjournal/publicjournal.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPublicjournalPublicjournalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2pvdXJuYWwvcHVibGljam91cm5hbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/publicjournal/publicjournal.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/publicjournal/publicjournal.page.ts ***!
      \*****************************************************/

    /*! exports provided: PublicjournalPage */

    /***/
    function srcAppPublicjournalPublicjournalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicjournalPage", function () {
        return PublicjournalPage;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/config */
      "./src/config.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

      var PublicjournalPage = /*#__PURE__*/function () {
        function PublicjournalPage(activatedRoute, http, toastController, router) {
          _classCallCheck(this, PublicjournalPage);

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

        _createClass(PublicjournalPage, [{
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
          key: "getJournal",
          value: function getJournal() {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.user.api_token
            });
            var options = {
              headers: headers
            };
            this.http.post(src_config__WEBPACK_IMPORTED_MODULE_3__["api_base_url"] + '/journal/public-single/' + this.id, {}, options).subscribe(function (data) {
              _this.proccessJournal(data);
            }, function (err) {
              _this.showError(err);
            });
          }
        }, {
          key: "proccessJournal",
          value: function proccessJournal(data) {
            this.journals = data.data;
          }
        }, {
          key: "showError",
          value: function showError(err) {
            console.log(err);
          }
        }, {
          key: "goToJournalDetail",
          value: function goToJournalDetail(id) {
            this.router.navigate(['/publicjournaldetail', id]);
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
          key: "goToJournalStats",
          value: function goToJournalStats() {
            var journal_id = 0;

            for (var index = 0; index < this.journals.length; ++index) {
              journal_id = this.journals[index].journal_id;
            }

            this.router.navigate(['/journalstats', journal_id]);
          }
        }]);

        return PublicjournalPage;
      }();

      PublicjournalPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PublicjournalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicjournal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./publicjournal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/publicjournal/publicjournal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./publicjournal.page.scss */
        "./src/app/publicjournal/publicjournal.page.scss"))["default"]]
      })], PublicjournalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=publicjournal-publicjournal-module-es5.js.map