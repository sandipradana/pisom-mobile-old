(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab5Tab5PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>\n\t\t\tLokasiku\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\t<ion-header collapse=\"condense\">\n\t\t<ion-toolbar>\n\t\t\t<ion-title size=\"large\">Tab 5</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<ion-card>\n\t\t<img src=\"https://akcdn.detik.net.id/community/media/visual/2020/04/15/9d858fec-6e1e-47c8-8d2f-544b9a48bc9a_169.jpeg?w=700&q=90\"/>\n\t</ion-card>\n\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card>\n\t\t\t\t\t<img src=\"https://akcdn.detik.net.id/community/media/visual/2020/04/15/9d858fec-6e1e-47c8-8d2f-544b9a48bc9a_169.jpeg?w=700&q=90\"/>\n          <ion-card-title>Lokasiku</ion-card-title>\n        </ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card>\n\t\t\t\t\t<img src=\"https://akcdn.detik.net.id/community/media/visual/2020/04/15/9d858fec-6e1e-47c8-8d2f-544b9a48bc9a_169.jpeg?w=700&q=90\"/>\n          <ion-card-title>RS Terdekat</ion-card-title>\n        </ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-card>\n\t\t\t\t\t<img src=\"https://akcdn.detik.net.id/community/media/visual/2020/04/15/9d858fec-6e1e-47c8-8d2f-544b9a48bc9a_169.jpeg?w=700&q=90\"/>\n          <ion-card-title>Zona Lokasi Sekitar</ion-card-title>\n        </ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab5/tab5-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab5PageRoutingModule */

    /***/
    function srcAppTab5Tab5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function () {
        return Tab5PageRoutingModule;
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


      var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab5.page */
      "./src/app/tab5/tab5.page.ts");

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
      }];

      var Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab5PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab5/tab5.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /*! exports provided: Tab5PageModule */

    /***/
    function srcAppTab5Tab5ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function () {
        return Tab5PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab5.page */
      "./src/app/tab5/tab5.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab5-routing.module */
      "./src/app/tab5/tab5-routing.module.ts");

      var Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]
        }]), _tab5_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab5PageRoutingModule"]],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
      })], Tab5PageModule);
      /***/
    },

    /***/
    "./src/app/tab5/tab5.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab5Tab5PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab5/tab5.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /*! exports provided: Tab5Page */

    /***/
    function srcAppTab5Tab5PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5Page", function () {
        return Tab5Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab5Page = function Tab5Page() {
        _classCallCheck(this, Tab5Page);
      };

      Tab5Page.ctorParameters = function () {
        return [];
      };

      Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab5.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab5.page.scss */
        "./src/app/tab5/tab5.page.scss"))["default"]]
      })], Tab5Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab5-tab5-module-es5.js.map