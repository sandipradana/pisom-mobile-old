(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>\n\t\t\tPISOM\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\t<ion-header collapse=\"condense\">\n\t\t<ion-toolbar>\n\t\t\t<ion-title size=\"large\">Tab 1</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<ion-slides pager=\"true\" paginationtype=\"bullets\" autoplay=\"2000\">\n\t\t<ion-slide *ngFor=\"let news of featuredNews\" (click)=\"goToNewsDetail(news['id'])\">\n\t\t\t<img class=\"object-fit_cover\" src=\"{{ news['thumbnail'] }}\"/>\n\t\t\t<div class=\"gradient\"></div>\n\t\t\t<div class=\"headline-title\">\n\t\t\t\t<span ion-text text-wrap color=\"light\">{{ news['title'] }}</span>\n\t\t\t</div>\n\t\t</ion-slide>\n\t</ion-slides>\n\n\t<!-- <ion-title class=\"ion-padding\">Statistik Covid19</ion-title> -->\n\n\t<!--  <ion-row>\n\t\t<ion-col size=\"4\">\n\t\t\t<ion-card color=\"danger\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>Positif</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.positif }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t\t<ion-col size=\"4\">\n\t\t\t<ion-card color=\"success\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>Sembuh</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.sembuh }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t\t<ion-col size=\"4\">\n\t\t\t<ion-card color=\"warning\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>Meninggal</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.meninggal }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t</ion-row> -->\n\n\t<!-- <ion-row>\n\t\t<ion-col size=\"3\">\n\t\t\t<ion-card color=\"medium\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>ODP</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.odp }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t\t<ion-col size=\"3\">\n\t\t\t<ion-card color=\"medium\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>PDP</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.pdp }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t\t<ion-col size=\"3\">\n\t\t\t<ion-card color=\"medium\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>Isolasi</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.isolasi }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t\t<ion-col size=\"3\">\n\t\t\t<ion-card color=\"medium\">\n\t\t\t\t<ion-card-header>\n\t\t\t\t\t<ion-card-subtitle>Karantina</ion-card-subtitle>\n\t\t\t\t\t<ion-card-title>{{ statistics.karantina }}</ion-card-title>\n\t\t\t\t</ion-card-header>\n\t\t\t</ion-card>\n\t\t</ion-col>\n\t</ion-row> -->\n\n\t<ion-title class=\"ion-padding\">Berita</ion-title>\n\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let news of latestNews\" class=\"item-terpopuler\" (click)=\"goToNewsDetail(news['id'])\">\n\t\t\t<img item-start class=\"newsImage\" src=\"{{ news['thumbnail'] }}\"/>\n\t\t\t<ion-text>\n\t\t\t\t<div class=\"newsTitle\">{{ news['title'] }}</div>\n\t\t\t\t<div class=\"newsDate\">{{ news['date'] }}</div>\n\t\t\t</ion-text>\n\t\t</ion-item>\n\t</ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 300px !important;\n}\n\nion-card {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.object-fit_cover {\n  width: 100%;\n  height: 100%;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.slide-zoom {\n  height: 100%;\n}\n\n.gradient {\n  height: 220px;\n  width: 100%;\n  background-image: linear-gradient(to bottom, transparent, black);\n  opacity: 0.7;\n  position: absolute;\n  bottom: 0%;\n  z-index: 2;\n}\n\n.headline-title {\n  width: 100%;\n  position: absolute;\n  bottom: 7%;\n  z-index: 3;\n  text-align: left;\n  padding: 10px;\n  color: white;\n}\n\n.header-title {\n  color: white;\n  height: 30px;\n  width: 150px;\n  padding-top: 5px;\n  padding-left: 10px;\n  vertical-align: middle;\n  /* padding: 10px; */\n}\n\n.newsTitle {\n  font-size: 1rem;\n}\n\n.newsDate {\n  margin-top: 10px;\n}\n\n.newsImage {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 20px;\n  width: 85px;\n  height: 85px;\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  border-radius: 5px;\n}\n\nion-item:last-child {\n  --inner-border-width: 0;\n}\n\n.imageLink ion-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  --inner-border-width: 0;\n}\n\n.figure {\n  border: 1px solid rgba(0, 0, 0, 0.13);\n  margin-top: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.figure img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdFQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ1EsWUFBQTtBQUNaOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFPQTtFQUNJLGVBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0tBQUEsNEJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksdUJBQUE7QUFKSjs7QUFRSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxSOztBQVNBO0VBQ0kscUNBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFTSTtFQUNJLFdBQUE7QUFQUiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzICB7ICAgICAgICBcclxuICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDsgICAgICAgIFxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub2JqZWN0LWZpdF9jb3ZlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgICAgXHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uc2xpZGUtem9vbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmFkaWVudCB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCBibGFjayk7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAlOyAgICAgICBcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oZWFkbGluZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNyU7ICAgICBcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUgeyAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC8vIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMjBkZWcpO1xyXG4gICAgLy8gdHJhbnNmb3JtOiBza2V3KDIwZGVnKTtcclxufVxyXG4gXHJcbiBcclxuLm5ld3NUaXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLm5ld3NEYXRle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm5ld3NJbWFnZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gfVxyXG4gXHJcbmlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5pbWFnZUxpbmsge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpZ3VyZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");





let Tab1Page = class Tab1Page {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.statistics = { positif: 0, sembuh: 0, meninggal: 0, odp: 0, pdp: 0, isolasi: 0 };
        this.getFeaturedNews();
        this.getStatistics();
        this.getLatestNews();
    }
    getFeaturedNews() {
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/news/featured', {}).subscribe(data => {
            this.proccessFeaturedNews(data);
        }, err => {
            this.showError();
        });
    }
    getStatistics() {
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/home/statistics', {}).subscribe(data => {
            this.proccessStatistics(data);
        }, err => {
            this.showError();
        });
    }
    getLatestNews() {
        this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/news/latest', {}).subscribe(data => {
            this.proccessLatestNews(data);
        }, err => {
            this.showError();
        });
    }
    proccessFeaturedNews(data) {
        this.featuredNews = data.data;
    }
    proccessStatistics(data) {
        this.statistics = data.data;
    }
    proccessLatestNews(data) {
        this.latestNews = data.data;
    }
    showError() {
    }
    goToNewsDetail(id) {
        this.router.navigate(['/newsdetail', id]);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map