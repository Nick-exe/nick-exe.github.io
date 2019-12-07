(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular/angular.component.html":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Hello this is Dominic Essien's cv\r\n</p>\r\n<p>  You can see what i was trying to achieve with this but due to work constraints i haven't been able to complete this project. Please bear with me.\r\n  </p>\r\n\r\n<p>Framework: angular</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/angular/angular.component.scss":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXIvYW5ndWxhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularComponent = /** @class */ (function () {
    function AngularComponent() {
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.scss */ "./src/app/angular/angular.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_4__["AngularComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container  (backdropClick)=\"close()\">\r\n  <mat-sidenav #sidenav fixedInViewport=\"true\" fixedTopGap=\"120\" [(opened)]=\"menuOpened\">Sidenav</mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<!-- footer -->\r\n<app-nav (menuToggle)=\"displayMenu($event)\"></app-nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n  height: 100%; }\n\nmat-sidenav {\n  background-color: rgba(29, 29, 29, 0.8);\n  width: 70vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkZWxsXFxEZXNrdG9wXFxCZXRhIEFuZ3VsYXJcXE15Q1Yvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQVcsRUFDWjs7QUFNRDtFQUNFLHdDQUF1QztFQUN2QyxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiwgbWF0LXNpZGVuYXYtY29udGVudHtcclxuXHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDI5LCAyOSwgMC44KTtcclxuICB3aWR0aDogNzB2dztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myCV';
        this.menuOpened = false;
    }
    AppComponent.prototype.displayMenu = function (value) {
        if (value === 'toggle') {
            this.menuOpened = !this.menuOpened;
        }
    };
    AppComponent.prototype.close = function () {
        this.sidenav.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ionic_ionic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic/ionic.component */ "./src/app/ionic/ionic.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _ionic_ionic_component__WEBPACK_IMPORTED_MODULE_7__["IonicComponent"],
                _angular_angular_component__WEBPACK_IMPORTED_MODULE_8__["AngularComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/page-data.ts":
/*!***********************************!*\
  !*** ./src/app/data/page-data.ts ***!
  \***********************************/
/*! exports provided: PAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES", function() { return PAGES; });
var PAGES = [
    {
        name: 'Angular',
        url: 'angular',
        img: 'assets/imgs/folder-assets/folder-full.png'
    },
    {
        name: 'Photoshop',
        url: 'photoshop',
        img: 'assets/imgs/folder-assets/folder-full.png'
    },
    {
        name: 'Ionic',
        url: 'ionic',
        img: 'assets/imgs/folder-assets/folder-full.png'
    },
    {
        name: 'IOT',
        url: 'iot',
        img: 'assets/imgs/folder-assets/folder-full.png'
    },
    {
        name: 'Hobbies',
        url: 'hobies',
        img: 'assets/imgs/folder-assets/folder-full.png'
    },
    {
        name: 'Angular',
        url: 'angular',
        img: 'assets/imgs/folder-assets/folder-full.png'
    },
];


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <div class=\"folder-container\">\r\n    <a (dblclick)=\"doubleClick($event)\" *ngFor=\"let page of pages\">\r\n      <div tabindex=\"-1\" class=\"folder folder1\" >\r\n        <!-- <button (dblclick)=\"doubleClick($event)\" class=\"button\">Navigate</button> -->\r\n        <img class=\"desktop-icon\" src=\"{{page.img}}\" alt=\"\">\r\n        <p class=\"folder-name\">{{page.name}}</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n  <!-- <button mat-raised-button>Hello World</button> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  width: 100%;\n  height: 100vh;\n  background-image: url('windows-bg.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.folder-container {\n  display: grid;\n  grid-template-columns: repeat(4, 100px);\n  grid-auto-rows: 120px;\n  grid-row-gap: 18px; }\n\n.folder {\n  width: 80px;\n  margin: 10px;\n  min-height: 90px;\n  text-align: center;\n  position: relative; }\n\n.folder:focus {\n    outline: none;\n    border: 1px solid #ece9e9;\n    background: rgba(0, 0, 0, 0.2); }\n\n.desktop-icon {\n  width: 60px;\n  height: 80px; }\n\n.folder-name {\n  font-size: .8em;\n  color: #fff;\n  top: 0;\n  margin-top: -5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGRlbGxcXERlc2t0b3BcXEJldGEgQW5ndWxhclxcTXlDVi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0NBQXlEO0VBQ3pELDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsY0FBYTtFQUViLHdDQUF1QztFQUN2QyxzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ25COztBQU9EO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQVFuQjs7QUFiRDtJQVFJLGNBQWE7SUFDYiwwQkFBb0M7SUFFcEMsK0JBQTRCLEVBQzdCOztBQUlIO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLE9BQU07RUFDTixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3Mvd2luZG93cy1iZy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5mb2xkZXItY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDsgb3JcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDBweCk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IDEyMHB4O1xyXG4gIGdyaWQtcm93LWdhcDogMThweDtcclxufVxyXG5cclxuLy8gLmxpbmt7XHJcbi8vICAgYm9yZGVyOiAzcHggc29saWQgIzMzMztcclxuLy8gICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG4vLyB9XHJcblxyXG4uZm9sZGVye1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNiwgMjMzLCAyMzMpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC45KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmRlc2t0b3AtaWNvbntcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5mb2xkZXItbmFtZXtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IC01JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_page_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/page-data */ "./src/app/data/page-data.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.pages = _data_page_data__WEBPACK_IMPORTED_MODULE_3__["PAGES"];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.doubleClick = function (event) {
        console.log(event);
        this.router.navigateByUrl('angular');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ionic/ionic.component.html":
/*!********************************************!*\
  !*** ./src/app/ionic/ionic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Hello this is Dominic Essien's cv\r\n  </p>\r\n  <p>  You can see what i was trying to achieve with this but due to work constraints i haven't been able to complete this project. Please bear with me.\r\n    </p>\r\n\r\n  <p>Framework: angular</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/ionic/ionic.component.scss":
/*!********************************************!*\
  !*** ./src/app/ionic/ionic.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvbmljL2lvbmljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ionic/ionic.component.ts":
/*!******************************************!*\
  !*** ./src/app/ionic/ionic.component.ts ***!
  \******************************************/
/*! exports provided: IonicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponent", function() { return IonicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IonicComponent = /** @class */ (function () {
    function IonicComponent() {
    }
    IonicComponent.prototype.ngOnInit = function () {
    };
    IonicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ionic',
            template: __webpack_require__(/*! ./ionic.component.html */ "./src/app/ionic/ionic.component.html"),
            styles: [__webpack_require__(/*! ./ionic.component.scss */ "./src/app/ionic/ionic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IonicComponent);
    return IonicComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [MaterialComponents],
            exports: [MaterialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myFooter\">\r\n    <div class=\"container\">\r\n        <div (click)=\"toggleMenu()\" class=\"icon\">\r\n          <div id=\"windows\"></div>\r\n        </div>\r\n       <div class=\"far-right\">\r\n        <div class=\"icon\">\r\n          <div id=\"volume\"></div>\r\n        </div>\r\n        <div class=\"icon\">\r\n          <div id=\"wifi\"></div>\r\n        </div>\r\n        <div class=\"icon\">\r\n          <div id=\"battery\"></div>\r\n        </div>\r\n        <div id=\"time-container\">\r\n          <p id=\"time\">{{currentTime}}</p>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myFooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 60px;\n  z-index: 1000; }\n\n.container {\n  background: rgba(0, 0, 0, 0.94);\n  height: 50px; }\n\n.icon {\n  display: inline-block;\n  padding: 10px;\n  width: 25px; }\n\n.icon:hover {\n    background: rgba(48, 47, 47, 0.94); }\n\n.far-right {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  margin-right: 70px; }\n\n#time-container {\n  text-align: center;\n  width: 50px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  cursor: default;\n  text-align: center; }\n\n#time-container:hover {\n    background: rgba(48, 47, 47, 0.94); }\n\n#time {\n  color: #fff;\n  font-size: .8em;\n  padding: 0;\n  margin-top: 13px; }\n\n#windows {\n  height: 25px;\n  width: 25px;\n  background-image: url('windows2.png');\n  background-position: center;\n  background-size: 100%; }\n\n#windows:hover {\n    background-image: url('windows1.png');\n    background-position: center;\n    background-size: 100%; }\n\n#battery {\n  height: 25px;\n  width: 25px;\n  background-image: url('nav-battery2.png');\n  background-position: center;\n  background-size: 100%; }\n\n#wifi {\n  height: 25px;\n  width: 25px;\n  background-image: url('nav-wifi2.png');\n  background-position: center;\n  background-size: 100%; }\n\n#volume {\n  height: 25px;\n  width: 25px;\n  background-image: url('nav-volume2.png');\n  background-position: center;\n  background-size: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcZGVsbFxcRGVza3RvcFxcQmV0YSBBbmd1bGFyXFxNeUNWL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2Q7O0FBRUQ7RUFDSSxnQ0FBK0I7RUFDL0IsYUFBWSxFQUNmOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLGNBQWE7RUFFYixZQUFVLEVBS1g7O0FBVEQ7SUFPSSxtQ0FBa0MsRUFDbkM7O0FBR0g7RUFDRSxzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFFbEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsbUJBQWtCLEVBS25COztBQWJEO0lBV0ksbUNBQWtDLEVBQ25DOztBQUdIO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGlCQUFnQixFQUNqQjs7QUFJRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsc0NBQXVEO0VBQ3ZELDRCQUEyQjtFQUMzQixzQkFBcUIsRUFPdEI7O0FBWkQ7SUFRSSxzQ0FBdUQ7SUFDdkQsNEJBQTJCO0lBQzNCLHNCQUFxQixFQUN0Qjs7QUFHSDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsMENBQTJEO0VBQzNELDRCQUEyQjtFQUMzQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLHVDQUF3RDtFQUN4RCw0QkFBMkI7RUFDM0Isc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCx5Q0FBMEQ7RUFDMUQsNEJBQTJCO0VBQzNCLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlGb290ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaWNvbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOjI1cHg7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ4LCA0NywgNDcsIDAuOTQpO1xyXG4gIH1cclxufVxyXG5cclxuLmZhci1yaWdodHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNzBweDtcclxufVxyXG5cclxuI3RpbWUtY29udGFpbmVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDgsIDQ3LCA0NywgMC45NCk7XHJcbiAgfVxyXG59XHJcblxyXG4jdGltZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IC44ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGljb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4jd2luZG93c3tcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy93aW5kb3dzMi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy93aW5kb3dzMS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbiNiYXR0ZXJ5e1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL25hdi1iYXR0ZXJ5Mi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4jd2lmaXtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9uYXYtd2lmaTIucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuI3ZvbHVtZXtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9uYXYtdm9sdW1lMi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.getClockTime();
        }, 1000);
    };
    NavComponent.prototype.toggleMenu = function () {
        this.menuToggle.emit('toggle');
    };
    NavComponent.prototype.getClockTime = function () {
        var timeNow = new Date();
        var hour = timeNow.getHours();
        var minute = timeNow.getMinutes();
        this.currentTime = hour + ":" + minute;
        // console.log(this.currentTime);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "menuToggle", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dell\Desktop\Beta Angular\MyCV\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map