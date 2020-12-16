(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsdetail-newsdetail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/newsdetail/newsdetail.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newsdetail/newsdetail.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNewsdetailNewsdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Kembali</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-text>\n\t\t<div class=\"pageTitle\">{{ news.title }}</div>\n\t\t<div class=\"pageDate\">{{ news.date }}</div>\n\t</ion-text>\n\t<div class=\"pageImageContainer\">\n\t\t<img class=\"pageImage\" src=\"{{ news.thumbnail }}\" />\n\t</div>\n\t<ion-text>\n\t  <div class=\"pageBody ion-padding\" >{{ news.content  }}</div>\n\t</ion-text>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/newsdetail/newsdetail-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/newsdetail/newsdetail-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: NewsdetailPageRoutingModule */

    /***/
    function srcAppNewsdetailNewsdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsdetailPageRoutingModule", function () {
        return NewsdetailPageRoutingModule;
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


      var _newsdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newsdetail.page */
      "./src/app/newsdetail/newsdetail.page.ts");

      var routes = [{
        path: '',
        component: _newsdetail_page__WEBPACK_IMPORTED_MODULE_3__["NewsdetailPage"]
      }];

      var NewsdetailPageRoutingModule = function NewsdetailPageRoutingModule() {
        _classCallCheck(this, NewsdetailPageRoutingModule);
      };

      NewsdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewsdetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/newsdetail/newsdetail.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/newsdetail/newsdetail.module.ts ***!
      \*************************************************/

    /*! exports provided: NewsdetailPageModule */

    /***/
    function srcAppNewsdetailNewsdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsdetailPageModule", function () {
        return NewsdetailPageModule;
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


      var _newsdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newsdetail-routing.module */
      "./src/app/newsdetail/newsdetail-routing.module.ts");
      /* harmony import */


      var _newsdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newsdetail.page */
      "./src/app/newsdetail/newsdetail.page.ts");

      var NewsdetailPageModule = function NewsdetailPageModule() {
        _classCallCheck(this, NewsdetailPageModule);
      };

      NewsdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newsdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsdetailPageRoutingModule"]],
        declarations: [_newsdetail_page__WEBPACK_IMPORTED_MODULE_6__["NewsdetailPage"]]
      })], NewsdetailPageModule);
      /***/
    },

    /***/
    "./src/app/newsdetail/newsdetail.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/newsdetail/newsdetail.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNewsdetailNewsdetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pageTitle {\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-size: 1.6rem;\n}\n\n.pageDate {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pageImageContainer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.pageImageContainer .pageImage {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.pageBody {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-align: justify;\n  text-justify: inter-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c2RldGFpbC9uZXdzZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUNDO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBSUE7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFERCIsImZpbGUiOiJzcmMvYXBwL25ld3NkZXRhaWwvbmV3c2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVRpdGxlIHtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuLnBhZ2VEYXRlIHtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2VJbWFnZUNvbnRhaW5lciB7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG5cdC5wYWdlSW1hZ2Uge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbi5wYWdlQm9keSB7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxuXHR0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/newsdetail/newsdetail.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/newsdetail/newsdetail.page.ts ***!
      \***********************************************/

    /*! exports provided: NewsdetailPage */

    /***/
    function srcAppNewsdetailNewsdetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsdetailPage", function () {
        return NewsdetailPage;
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


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../config */
      "./src/config.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var NewsdetailPage = /*#__PURE__*/function () {
        function NewsdetailPage(activatedRoute, http, router) {
          _classCallCheck(this, NewsdetailPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.router = router;
          this.id = null;
          this.news = {
            title: null,
            date: null,
            thumbnail: null,
            body: null
          };
        }

        _createClass(NewsdetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            this.getNews();
          }
        }, {
          key: "getNews",
          value: function getNews() {
            var _this = this;

            this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["api_base_url"] + '/news/detail/' + this.id, {}).subscribe(function (resp) {
              _this.proccessNews(resp);
            }, function (err) {
              _this.showError();
            });
          }
        }, {
          key: "showError",
          value: function showError() {}
        }, {
          key: "proccessNews",
          value: function proccessNews(resp) {
            this.news = resp.data;
          }
        }]);

        return NewsdetailPage;
      }();

      NewsdetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NewsdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newsdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./newsdetail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/newsdetail/newsdetail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./newsdetail.page.scss */
        "./src/app/newsdetail/newsdetail.page.scss"))["default"]]
      })], NewsdetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=newsdetail-newsdetail-module-es5.js.map