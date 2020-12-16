(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["journaldetail-journaldetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/journaldetail/journaldetail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/journaldetail/journaldetail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-title>{{ journals.name }}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let journal of journals.todos\" class=\"item-terpopuler\">\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"11\">\n\t\t\t\t\t\t<div *ngIf=\"journal.todo_category_id == 1\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<b>{{ journal.type.name }}</b>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>{{ journal.type.description }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"journal.todo_category_id != 1\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<b>{{ journal.category.name  }}</b>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"journal.data; else typename\">{{ journal.data  }}</div>\n\t\t\t\t\t\t\t<ng-template #typename>\n\t\t\t\t\t\t\t\t{{ journal.type.name  }}\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"1\">\n\t\t\t\t\t\t<ion-badge color=\"medium\" *ngIf=\"journal.status == 0\" (click)=\"updateFlag(journal.id, 1)\">&nbsp;&nbsp;&nbsp;</ion-badge>\n\t\t\t\t\t\t<ion-badge color=\"success\" *ngIf=\"journal.status == 1\" (click)=\"updateFlag(journal.id, 0)\">&nbsp;&nbsp;&nbsp;</ion-badge>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n\t<br/>\n\t<br/>\n\t<br/>\n\t<br/>\n\t<br/>\n\t<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"goToAddTodo()\">\n\t\t<ion-fab-button color=\"danger\">\n\t\t\t<ion-icon name=\"add-outline\"></ion-icon>\n\t\t</ion-fab-button>\n\t</ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/journaldetail/journaldetail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/journaldetail/journaldetail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: JournaldetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournaldetailPageRoutingModule", function() { return JournaldetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _journaldetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journaldetail.page */ "./src/app/journaldetail/journaldetail.page.ts");




const routes = [
    {
        path: '',
        component: _journaldetail_page__WEBPACK_IMPORTED_MODULE_3__["JournaldetailPage"]
    }
];
let JournaldetailPageRoutingModule = class JournaldetailPageRoutingModule {
};
JournaldetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JournaldetailPageRoutingModule);



/***/ }),

/***/ "./src/app/journaldetail/journaldetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/journaldetail/journaldetail.module.ts ***!
  \*******************************************************/
/*! exports provided: JournaldetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournaldetailPageModule", function() { return JournaldetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _journaldetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./journaldetail-routing.module */ "./src/app/journaldetail/journaldetail-routing.module.ts");
/* harmony import */ var _journaldetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./journaldetail.page */ "./src/app/journaldetail/journaldetail.page.ts");







let JournaldetailPageModule = class JournaldetailPageModule {
};
JournaldetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _journaldetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["JournaldetailPageRoutingModule"]
        ],
        declarations: [_journaldetail_page__WEBPACK_IMPORTED_MODULE_6__["JournaldetailPage"]]
    })
], JournaldetailPageModule);



/***/ }),

/***/ "./src/app/journaldetail/journaldetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/journaldetail/journaldetail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuYWxkZXRhaWwvam91cm5hbGRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/journaldetail/journaldetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/journaldetail/journaldetail.page.ts ***!
  \*****************************************************/
/*! exports provided: JournaldetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournaldetailPage", function() { return JournaldetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let JournaldetailPage = class JournaldetailPage {
    constructor(activatedRoute, http, toastController, router) {
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
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getUser();
    }
    getJournal() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.user.api_token
        });
        let options = { headers: headers };
        this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/journal/detail/' + this.id, {}, options).subscribe(resp => {
            this.proccess(resp);
        }, err => {
            this.showError(err);
        });
    }
    proccess(resp) {
        this.journals = resp.data;
    }
    showError(err) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: err,
                duration: 2000
            });
            toast.present();
        });
    }
    goToAddTodo() {
        this.router.navigate(['/addtodo', this.id]);
    }
    ionViewWillEnter() {
        this.getJournal();
    }
    updateFlag(id, status) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.user.api_token
        });
        let options = { headers: headers };
        this.http.post(src_config__WEBPACK_IMPORTED_MODULE_4__["api_base_url"] + '/todo/update/', { id: id, status: status }, options).subscribe(resp => {
            this.getJournal();
        }, err => {
            this.showError(err);
        });
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: 'user' });
            this.user = JSON.parse(ret.value);
        });
    }
};
JournaldetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
JournaldetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-journaldetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./journaldetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/journaldetail/journaldetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./journaldetail.page.scss */ "./src/app/journaldetail/journaldetail.page.scss")).default]
    })
], JournaldetailPage);



/***/ })

}]);
//# sourceMappingURL=journaldetail-journaldetail-module-es2015.js.map