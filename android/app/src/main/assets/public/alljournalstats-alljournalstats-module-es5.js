(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alljournalstats-alljournalstats-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/alljournalstats/alljournalstats.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alljournalstats/alljournalstats.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAlljournalstatsAlljournalstatsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>alljournalstats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/alljournalstats/alljournalstats-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/alljournalstats/alljournalstats-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AlljournalstatsPageRoutingModule */

    /***/
    function srcAppAlljournalstatsAlljournalstatsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlljournalstatsPageRoutingModule", function () {
        return AlljournalstatsPageRoutingModule;
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


      var _alljournalstats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alljournalstats.page */
      "./src/app/alljournalstats/alljournalstats.page.ts");

      var routes = [{
        path: '',
        component: _alljournalstats_page__WEBPACK_IMPORTED_MODULE_3__["AlljournalstatsPage"]
      }];

      var AlljournalstatsPageRoutingModule = function AlljournalstatsPageRoutingModule() {
        _classCallCheck(this, AlljournalstatsPageRoutingModule);
      };

      AlljournalstatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AlljournalstatsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/alljournalstats/alljournalstats.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/alljournalstats/alljournalstats.module.ts ***!
      \***********************************************************/

    /*! exports provided: AlljournalstatsPageModule */

    /***/
    function srcAppAlljournalstatsAlljournalstatsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlljournalstatsPageModule", function () {
        return AlljournalstatsPageModule;
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


      var _alljournalstats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alljournalstats-routing.module */
      "./src/app/alljournalstats/alljournalstats-routing.module.ts");
      /* harmony import */


      var _alljournalstats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alljournalstats.page */
      "./src/app/alljournalstats/alljournalstats.page.ts");

      var AlljournalstatsPageModule = function AlljournalstatsPageModule() {
        _classCallCheck(this, AlljournalstatsPageModule);
      };

      AlljournalstatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alljournalstats_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlljournalstatsPageRoutingModule"]],
        declarations: [_alljournalstats_page__WEBPACK_IMPORTED_MODULE_6__["AlljournalstatsPage"]]
      })], AlljournalstatsPageModule);
      /***/
    },

    /***/
    "./src/app/alljournalstats/alljournalstats.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/alljournalstats/alljournalstats.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAlljournalstatsAlljournalstatsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGpvdXJuYWxzdGF0cy9hbGxqb3VybmFsc3RhdHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/alljournalstats/alljournalstats.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/alljournalstats/alljournalstats.page.ts ***!
      \*********************************************************/

    /*! exports provided: AlljournalstatsPage */

    /***/
    function srcAppAlljournalstatsAlljournalstatsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlljournalstatsPage", function () {
        return AlljournalstatsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AlljournalstatsPage = /*#__PURE__*/function () {
        function AlljournalstatsPage() {
          _classCallCheck(this, AlljournalstatsPage);
        }

        _createClass(AlljournalstatsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AlljournalstatsPage;
      }();

      AlljournalstatsPage.ctorParameters = function () {
        return [];
      };

      AlljournalstatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alljournalstats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./alljournalstats.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/alljournalstats/alljournalstats.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./alljournalstats.page.scss */
        "./src/app/alljournalstats/alljournalstats.page.scss"))["default"]]
      })], AlljournalstatsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=alljournalstats-alljournalstats-module-es5.js.map