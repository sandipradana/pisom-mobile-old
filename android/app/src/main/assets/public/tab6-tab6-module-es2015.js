(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab6-tab6-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>\n\t\t\tProfil\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\t<div *ngIf=\"user.id != null\">\n\t\t<ion-header collapse=\"condense\">\n\t\t\t<ion-toolbar>\n\t\t\t\t<ion-title size=\"large\">Profil</ion-title>\n\t\t\t</ion-toolbar>\n\t\t</ion-header>\n\n\t\t<center>\n\t\t\t<img width=\"150px\" height=\"150px\" style=\"margin-top: 10px;\" src=\"assets/logo.png\"/>\n\t\t</center>\n\n\t\t<ion-list>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">ID</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">PISOM-{{ user.id }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Nama</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.name }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Alamat</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.address }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Jenis Kelamin</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.gender }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Tanggal Lahir</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.date_of_birth }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Umur</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.age }}\n\t\t\t\t\t\t\t\ttahun</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\n\t\t<ion-title class=\"ion-padding\">Riwayat test</ion-title>\n\n\t\t<ion-list>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Tanggal Test</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.test.date }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Jenis Tes</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ user.test.type.name }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Hasil</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ (user.test.result == 2 ? \"Positif\" : \"Negatif\") }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Derajat</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">{{ (user.test.result == 1 ? \"OTG\" : \"Ringan\") }}</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t<ion-col size=\"4\">Isolasi</ion-col>\n\t\t\t\t\t\t\t<ion-col size=\"8\">13-12-2020 - 20-12-2020</ion-col>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</ion-grid>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t\t<ion-button (click)=\"logout()\" class=\"ion-padding\" expand=\"block\" color=\"danger\">Keluar</ion-button>\n\t\t<div class=\"ion-padding-end\">&nbsp;</div>\n\t\t<div class=\"ion-padding-end\">&nbsp;</div>\n\t\t<div class=\"ion-padding-end\">&nbsp;</div>\n\t\t<div class=\"ion-padding-end\">&nbsp;</div>\n\t\t<div class=\"ion-padding-end\">&nbsp;</div>\n\t</div>\n\t<app-explore-container code=\"401\" message=\"Harap\" *ngIf=\"user.id == null\"></app-explore-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab6/tab6-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab6/tab6-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab6PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageRoutingModule", function() { return Tab6PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab6.page */ "./src/app/tab6/tab6.page.ts");




const routes = [
    {
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_3__["Tab6Page"],
    }
];
let Tab6PageRoutingModule = class Tab6PageRoutingModule {
};
Tab6PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab6PageRoutingModule);



/***/ }),

/***/ "./src/app/tab6/tab6.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab6/tab6.module.ts ***!
  \*************************************/
/*! exports provided: Tab6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageModule", function() { return Tab6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab6.page */ "./src/app/tab6/tab6.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab6_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab6-routing.module */ "./src/app/tab6/tab6-routing.module.ts");









let Tab6PageModule = class Tab6PageModule {
};
Tab6PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab6_page__WEBPACK_IMPORTED_MODULE_6__["Tab6Page"] }]),
            _tab6_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab6PageRoutingModule"],
        ],
        declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_6__["Tab6Page"]]
    })
], Tab6PageModule);



/***/ }),

/***/ "./src/app/tab6/tab6.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab6/tab6.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjYvdGFiNi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab6/tab6.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab6/tab6.page.ts ***!
  \***********************************/
/*! exports provided: Tab6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6Page", function() { return Tab6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let Tab6Page = class Tab6Page {
    constructor(router) {
        this.router = router;
        this._user = {
            id: null,
            name: null,
            email: null,
            password: null,
            phone: null,
            api_token: null,
            date_of_birth: null,
            gender: null,
            hospital_id: null,
            test: {
                date: null,
                result: null,
                type: {
                    name: null
                }
            }
        };
        this.user = this._user;
        this.getUser();
    }
    ionViewWillEnter() {
        this.getUser();
    }
    ionViewDidLoad() {
        this.getUser();
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var ret = yield Storage.get({ key: 'user' });
            if (ret.value != null) {
                this.user = JSON.parse(ret.value);
            }
            else {
                this.user = this._user;
            }
        });
    }
    isLogin() {
        if (this.user.id != null) {
            return true;
        }
        return false;
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key: 'user' });
            this.user = this._user;
        });
    }
};
Tab6Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Tab6Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab6',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab6.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab6/tab6.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab6.page.scss */ "./src/app/tab6/tab6.page.scss")).default]
    })
], Tab6Page);



/***/ })

}]);
//# sourceMappingURL=tab6-tab6-module-es2015.js.map