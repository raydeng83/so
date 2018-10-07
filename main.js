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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n  padding: 10px 50px 10px 50px;\r\n  min-height: 600px;\r\n}\r\n\r\n.footer {\r\n  /*position: absolute;*/\r\n  bottom: 30px;\r\n  width: 100%;\r\n  /*height: 60px;*/\r\n  line-height: 60px;\r\n  margin-top: 30px;\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n  .container {\r\n    padding: 10px 5px 10px 5px;\r\n    margin-left: 10px;\r\n  }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-title-bar></app-title-bar>\n<div class=\"main-container\">\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"footer\">\n<app-footer></app-footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'anquanjuzi';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_articles_oct_2018_art1_art1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/articles/oct-2018/art1/art1.component */ "./src/app/components/articles/oct-2018/art1/art1.component.ts");
/* harmony import */ var _pipes_string_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/string-filter.pipe */ "./src/app/pipes/string-filter.pipe.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_articles_oct_2018_art2_art2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/articles/oct-2018/art2/art2.component */ "./src/app/components/articles/oct-2018/art2/art2.component.ts");
/* harmony import */ var _components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/title-bar/title-bar.component */ "./src/app/components/title-bar/title-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/subjects/subjects.component */ "./src/app/components/subjects/subjects.component.ts");
/* harmony import */ var _components_articles_oct_2018_art3_art3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/articles/oct-2018/art3/art3.component */ "./src/app/components/articles/oct-2018/art3/art3.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth1_oauth1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/subjects/oauth/oauth1/oauth1.component */ "./src/app/components/subjects/oauth/oauth1/oauth1.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/subjects/oauth/oauth.component */ "./src/app/components/subjects/oauth/oauth.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/subjects/oauth/oauth2/oauth2.component */ "./src/app/components/subjects/oauth/oauth2/oauth2.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth3_oauth3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/subjects/oauth/oauth3/oauth3.component */ "./src/app/components/subjects/oauth/oauth3/oauth3.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth4_oauth4_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/subjects/oauth/oauth4/oauth4.component */ "./src/app/components/subjects/oauth/oauth4/oauth4.component.ts");
/* harmony import */ var _components_articles_oct_2018_art4_art4_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/articles/oct-2018/art4/art4.component */ "./src/app/components/articles/oct-2018/art4/art4.component.ts");
/* harmony import */ var _components_articles_oct_2018_art5_art5_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/articles/oct-2018/art5/art5.component */ "./src/app/components/articles/oct-2018/art5/art5.component.ts");
/* harmony import */ var _components_art_ranking_art_ranking_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/art-ranking/art-ranking.component */ "./src/app/components/art-ranking/art-ranking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_articles_oct_2018_art1_art1_component__WEBPACK_IMPORTED_MODULE_6__["Art1Component"],
                _pipes_string_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["StringFilterPipe"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _components_articles_oct_2018_art2_art2_component__WEBPACK_IMPORTED_MODULE_10__["Art2Component"],
                _components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_11__["TitleBarComponent"],
                _components_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_13__["SubjectsComponent"],
                _components_articles_oct_2018_art3_art3_component__WEBPACK_IMPORTED_MODULE_14__["Art3Component"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_subjects_oauth_oauth1_oauth1_component__WEBPACK_IMPORTED_MODULE_16__["Oauth1Component"],
                _components_subjects_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_17__["OauthComponent"],
                _components_subjects_oauth_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_18__["Oauth2Component"],
                _components_subjects_oauth_oauth3_oauth3_component__WEBPACK_IMPORTED_MODULE_19__["Oauth3Component"],
                _components_subjects_oauth_oauth4_oauth4_component__WEBPACK_IMPORTED_MODULE_20__["Oauth4Component"],
                _components_articles_oct_2018_art4_art4_component__WEBPACK_IMPORTED_MODULE_21__["Art4Component"],
                _components_articles_oct_2018_art5_art5_component__WEBPACK_IMPORTED_MODULE_22__["Art5Component"],
                _components_art_ranking_art_ranking_component__WEBPACK_IMPORTED_MODULE_23__["ArtRankingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_articles_oct_2018_art1_art1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/articles/oct-2018/art1/art1.component */ "./src/app/components/articles/oct-2018/art1/art1.component.ts");
/* harmony import */ var _components_articles_oct_2018_art2_art2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/articles/oct-2018/art2/art2.component */ "./src/app/components/articles/oct-2018/art2/art2.component.ts");
/* harmony import */ var _components_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/subjects/subjects.component */ "./src/app/components/subjects/subjects.component.ts");
/* harmony import */ var _components_articles_oct_2018_art3_art3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/articles/oct-2018/art3/art3.component */ "./src/app/components/articles/oct-2018/art3/art3.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/subjects/oauth/oauth.component */ "./src/app/components/subjects/oauth/oauth.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth1_oauth1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/subjects/oauth/oauth1/oauth1.component */ "./src/app/components/subjects/oauth/oauth1/oauth1.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/subjects/oauth/oauth2/oauth2.component */ "./src/app/components/subjects/oauth/oauth2/oauth2.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth3_oauth3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/subjects/oauth/oauth3/oauth3.component */ "./src/app/components/subjects/oauth/oauth3/oauth3.component.ts");
/* harmony import */ var _components_subjects_oauth_oauth4_oauth4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/subjects/oauth/oauth4/oauth4.component */ "./src/app/components/subjects/oauth/oauth4/oauth4.component.ts");
/* harmony import */ var _components_articles_oct_2018_art4_art4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/articles/oct-2018/art4/art4.component */ "./src/app/components/articles/oct-2018/art4/art4.component.ts");
/* harmony import */ var _components_articles_oct_2018_art5_art5_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/articles/oct-2018/art5/art5.component */ "./src/app/components/articles/oct-2018/art5/art5.component.ts");













var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'subjects',
        component: _components_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_4__["SubjectsComponent"]
    },
    {
        path: 'subjects/oauth',
        component: _components_subjects_oauth_oauth_component__WEBPACK_IMPORTED_MODULE_6__["OauthComponent"]
    },
    {
        path: 'subjects/oauth/art1',
        component: _components_subjects_oauth_oauth1_oauth1_component__WEBPACK_IMPORTED_MODULE_7__["Oauth1Component"]
    },
    {
        path: 'subjects/oauth/art2',
        component: _components_subjects_oauth_oauth2_oauth2_component__WEBPACK_IMPORTED_MODULE_8__["Oauth2Component"]
    },
    {
        path: 'subjects/oauth/art3',
        component: _components_subjects_oauth_oauth3_oauth3_component__WEBPACK_IMPORTED_MODULE_9__["Oauth3Component"]
    },
    {
        path: 'subjects/oauth/art4',
        component: _components_subjects_oauth_oauth4_oauth4_component__WEBPACK_IMPORTED_MODULE_10__["Oauth4Component"]
    },
    {
        path: 'art1',
        component: _components_articles_oct_2018_art1_art1_component__WEBPACK_IMPORTED_MODULE_2__["Art1Component"]
    },
    {
        path: 'art2',
        component: _components_articles_oct_2018_art2_art2_component__WEBPACK_IMPORTED_MODULE_3__["Art2Component"]
    },
    {
        path: 'art3',
        component: _components_articles_oct_2018_art3_art3_component__WEBPACK_IMPORTED_MODULE_5__["Art3Component"]
    },
    {
        path: 'art4',
        component: _components_articles_oct_2018_art4_art4_component__WEBPACK_IMPORTED_MODULE_11__["Art4Component"]
    },
    {
        path: 'art5',
        component: _components_articles_oct_2018_art5_art5_component__WEBPACK_IMPORTED_MODULE_12__["Art5Component"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/components/art-ranking/art-ranking.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/art-ranking/art-ranking.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/art-ranking/art-ranking.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/art-ranking/art-ranking.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>\n  热文排行榜\n</h5>\n<br>\n<li class=\"list-group-item\"\n    *ngFor=\"let art of articleList | paginate: config;\">\n\n              <span style=\"cursor: pointer;\" class=\"art-title\" routerLink=\"/{{art.path}}\"\n                    routerLinkActive=\"active\">{{art.title}}\n              </span>\n</li>\n"

/***/ }),

/***/ "./src/app/components/art-ranking/art-ranking.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/art-ranking/art-ranking.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArtRankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtRankingComponent", function() { return ArtRankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/article */ "./src/app/models/article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtRankingComponent = /** @class */ (function () {
    function ArtRankingComponent() {
        this.filter = '';
        this.maxSize = 6;
        this.directionLinks = true;
        this.autoHide = true;
        this.responsive = true;
        this.config = {
            id: 'advanced',
            itemsPerPage: 16,
            currentPage: 1
        };
        this.p = 1;
        this.labels = {
            previousLabel: 'Previous',
            nextLabel: 'Next',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
        this.articleList = [];
    }
    ArtRankingComponent.prototype.ngOnInit = function () {
        var art5 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art5.date = new Date('10/05/2018');
        art5.title = '亚太地区的身份和访问管理市场到2024年的复合年增长率达到15％+';
        art5.path = 'art5';
        this.articleList.push(art5);
        var art4 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art4.date = new Date('10/04/2018');
        art4.title = '身份管理的12个趋势';
        art4.path = 'art4';
        this.articleList.push(art4);
        var art3 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art3.date = new Date('10/03/2018');
        art3.title = '什么是身份即服务？ IDaaS解释';
        art3.path = 'art3';
        this.articleList.push(art3);
        var art2 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art2.date = new Date('10/02/2018');
        art2.title = '最好的IAM软件：评选十大产品';
        art2.path = 'art2';
        this.articleList.push(art2);
        var art1 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art1.date = new Date('10/01/2018');
        art1.title = '什么是身份验证访问管理（IAM）？身份访问管理解释';
        art1.path = 'art1';
        this.articleList.push(art1);
    };
    ArtRankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-art-ranking',
            template: __webpack_require__(/*! ./art-ranking.component.html */ "./src/app/components/art-ranking/art-ranking.component.html"),
            styles: [__webpack_require__(/*! ./art-ranking.component.css */ "./src/app/components/art-ranking/art-ranking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtRankingComponent);
    return ArtRankingComponent;
}());



/***/ }),

/***/ "./src/app/components/articles/oct-2018/art1/art1.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art1/art1.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art1/art1.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art1/art1.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>什么是IAM？身份和访问管理</h1>\n    <h2>IAM定义</h2>\n    <p>\n      企业IT中的身份和访问管理（IAM）是关于如何定义和管理各个网络用户的角色和访问权限以及用户被授予（或拒绝）这些权限的情况。这些用户可能是客户（客户身份管理）或员工（员工身份管理）。IAM系统的核心目标是为每一个用户建立数字身份。一旦建立了数字身份，就必须对数字身份的访问周期进行维护，修改和监控。</p>\n    <p>根据著名企业身份和访问管理提供商Okta的高级副总裁兼首席安全官Yassir\n      Abousselham的说法，身份管理的首要目标是“在适当的环境中向正确的员工授予相应企业资产的访问权限。这个过程包含从员工加入企业，企业授予相应的权限，到员工离职时根据需要注销该员工的身份。”\n      IAM系统为管理员提供了更改用户角色，跟踪用户活动，创建有关这些活动的报告以及持续实施策略的工具和技术。 这些系统旨在提供管理整个企业用户访问的方法，并确保遵守公司政策和政府法规。</p>\n    <h2>IAM工具</h2>\n    <p>根据Forrester Research在“2017年第4季度的技术潮流：身份和访问管理”（Tech Tide: Identity and Access Management, Q4\n      2017）中的报告指出了六种IAM核心技术，这些技术成熟度低，但当前业务价值很高。</p>\n    <p><strong>API安全（API Security）</strong>\n      使IAM可用于B2B商务，云集成以及基于微服务的IAM架构。Forrester认为API安全解决方案用于移动应用程序之间的单点登录（SSO）或用户管理的访问。 这会让安全团队更容易管理物联网设备授权和个人身份识别。</p>\n    <p><strong>客户身份和访问管理（CIAM）</strong>允许“对用户进行全面管理和认证;自助服务和配置文件管理;以及与CRM，ERP和其他客户管理系统和数据库的集成”。</p>\n    <p><strong>身份分析（IA）</strong>将允许安全团队使用机器学习和其他统计算法来检测和阻止风险身份行为。</p>\n    <p><strong>身份即服务（IDaaS）</strong>包括“软件即服务（SaaS）解决方案” 提供从门户到Web应用程序和本机移动应用程序的SSO，以及用户帐户配置和访问请求管理。</p>\n    <p><strong>身份管理和治理（IMG）</strong>提供自动化并以一种可重复的方式来管理身份生命周期。 如果企业有合规限制，这一点会变得很重要。</p>\n    <p><strong>基于风险的身份验证（RBA）</strong>解决方案“在用户session和身份验证的环境中形成风险评分。然后，公司可以为高风险用户提供多因子验证，并允许低风险用户使用单一因素进行身份验证（例如，用户名加密码）。\n    </p>\n    <p>不管是属于哪个类别，IAM系统必须灵活性和完整性，以适应当今计算环境的复杂性。 其中一个原因是：身份和访问管理提供商One Identity的产品管理高级主管杰克逊·肖（Jackson\n      Shaw）表示，企业的计算环境过去主要是内部部署，身份管理系统在本地工作时对用户进行身份验证和跟踪。 “房屋周围曾经有过安全围栏，”肖说。 “今天，那个围栏不再存在了。”</p>\n    <p>因此，今天的身份管理系统应该使管理员能够轻松管理各种用户的访问权限，包括现场员工和国际承包商; 混合计算环境，包括内部部署计算，软件即服务（SaaS）应用程序以及影子IT和BYOD用户;\n      和计算架构，包括UNIX，Windows，Macintosh，iOS，Android甚至物联网（IoT）设备。</p>\n    <p>最终，身份和访问管理系统应该能够“在整个企业内以一致和可扩展的方式集中管理用户”，Abousselham说。</p>\n    <p>近年来，身份即服务（IDaaS）已发展为在订阅的基础上通过云提供的第三方托管服务，为客户的内部部署和基于云的系统提供身份管理。</p>\n    <h2>我们为什么需要IAM？</h2>\n    <p>被泄露的用户数据通常充当组织网络及其信息资产的入口点。 企业使用身份管理来保护其信息资产免受勒索软件，犯罪黑客攻击，网络钓鱼和其他恶意软件攻击的威胁。 Cybersecurity Ventures预测\n      ，今年全球勒索软件损害成本预计将超过50亿美元，比2016年增长15％。</p>\n    <p>在许多组织中，用户有时拥有比必要更多的访问权限。 强大的IAM系统可以通过确保在整个组织中一致地应用用户访问规则和策略来添加重要的保护层。</p>\n    <p>身份和访问管理系统可以提高业务生产力。 系统的集中管理功能可以降低保护用户凭据和访问的复杂性和成本。\n      与此同时，身份管理系统使工作人员能够在各种环境中提高工作效率（同时保持安全），无论他们是在家中，办公室还是在路上工作。</p>\n    <h2>IAM对于合规管理的意义</h2>\n    <p>许多政府要求企业关注身份管理。 Sarbanes-Oxley，Gramm-Leach-Bliley和HIPAA等法规要求组织负责控制对客户和员工信息的访问。 身份管理系统可以帮助组织遵守这些法规。</p>\n    <p>通用数据保护法规 （GDPR）是一项更新的法规，需要强大的安全性和用户访问控制。 GDPR要求组织保护欧盟公民的个人数据和隐私。 自2018年5月起，GDPR影响在欧盟国家开展业务和/或以欧洲公民为客户的每家公司。</p>\n    <p>2017年3月1日，纽约州金融服务部（NYDFS） 新的网络安全法规生效。 该法规规定了在纽约运营的金融服务公司的安全运营的许多要求，包括监控授权用户的活动和维护审计日志的需要 - 这是身份管理系统通常所做的事情。</p>\n    <p>通过自动化为企业网络和数据提供安全用户访问的许多方面，身份管理系统可以减轻IT中普通但重要的任务，并帮助他们遵守政府法规。 这些都是至关重要的好处，因为今天，每个IT职位都是安全职位; 全球网络安全工作人员短缺;\n      不遵守相关法规的处罚可能使组织损失数百万甚至数十亿美元。</p>\n    <h2>IAM系统有哪些好处</h2>\n    <p>实施身份和访问管理以及相关的最佳实践可以通过多种方式为您提供显著的竞争优势。 如今，大多数企业需要让组织外的用户访问内部系统。 向客户，合作伙伴，供应商，承包商以及员工开放网络可以提高效率并降低运营成本。</p>\n    <p>身份管理系统可以允许公司在不影响安全性的情况下，横跨多种本地应用程序，移动应用程序和SaaS工具扩展对其信息系统的访问。\n      通过提供对外部人员的更多访问，您可以促进整个组织的协作，提高生产力，员工满意度，研发和最终的收入。</p>\n    <p>身份管理可以减少IT支持团队关于密码重置的帮助台呼叫次数。 身份管理系统允许管理员自动执行这些以及其他耗时且昂贵的任务。</p>\n    <p>身份管理系统可以是安全网络的基石，因为管理用户身份是访问控制图片的基本部分。 身份管理系统几乎都要求公司定义其访问策略，特别是概述谁可以访问哪些数据资源以及他们可以访问哪些条件。</p>\n    <p>因此，管理良好的身份意味着更好地控制用户访问，从而降低内部和外部漏洞的风险。 这很重要，因为随着外部威胁的威胁不断增加，内部攻击都非常频繁。根据IBM 2016年网络安全情报指数\n      ，大约60％的数据泄露是由组织自己的员工造成的。 其中，75％是恶意的; 25％是偶然的。</p>\n    <p>如前所述，IAM系统可以通过提供实施全面的安全，审计和访问策略的工具来加强法规遵从性。 现在，许多系统都提供旨在确保组织符合要求的功能。</p>\n    <h2>IAM如何运作</h2>\n    <p>在过去的几年中，典型的身份管理系统包括四个基本要素：系统用于定义个人用户的个人数据目录（将其视为身份存储库）; 一组用于添加，修改和删除数据的工具（与访问生命周期管理相关）; 一个管理用户访问的系统（执行安全策略和访问权限）;\n      和审计和报告系统（以验证您的系统上发生了什么）。</p>\n    <p>调节用户访问传统上涉及许多用于验证用户身份的验证方法，包括密码，数字证书，令牌和智能卡。 硬件令牌和信用卡大小的智能卡作为双因素身份验证中的一个组件，它将您知道的内容（密码）与您拥有的内容（令牌或卡）结合起来，以验证您的身份。\n      智能卡带有嵌入式集成电路芯片，可以是安全的微控制器，也可以是具有内部存储器或单独存储芯片的等效智能。 软件令牌可以存在于具有存储功能的任何设备上，从USB驱动器到手机，于2005年出现。</p>\n    <p>在当今复杂的计算环境中，随着安全威胁的加剧，强大的用户名和密码不会再削减它。 如今，身份管理系统通常包含生物识别，机器学习和人工智能以及基于风险的身份验证等元素。</p>\n    <p>在用户级别，最近的用户身份验证方法有助于更好地保护身份。 例如，支持Touch ID的iPhone的普及使许多人熟悉使用他们的指纹作为认证方法。 较新的Windows\n      10计算机提供指纹传感器或虹膜扫描以进行生物识别用户身份验证。下一部iPhone将于今年晚些时候推出，传闻其中包括虹膜扫描或面部识别，以对用户进行身份验证，而非指纹扫描。</p>\n    <h2>转向多因素身份验证</h2>\n    <p>Abousselham说，有些组织正在从双因素身份转变为三因素身份验证，结合了你所知道的东西（你的密码），你拥有的东西（智能手机），以及你所拥有的东西（面部识别，虹膜扫描或指纹传感器）。\n      “当你从两个因素变为三个时，你可以更加确信你正在与正确的用户打交道，”他说。</p>\n    <p>在管理层，由于上下文感知网络访问控制和基于风险的身份验证（RBA）等技术，今天的身份管理系统提供了更高级的用户审计和报告。</p>\n    <p>上下文感知网络访问控制是基于策略的。 Okta的产品总监Joe Diamond表示，它预先确定了一个基于各种属性的事件及其结果。 例如，如果IP地址未列入白名单，则可能会阻止该IP地址。\n      或者，如果没有表明设备已被管理的证书，则上下文感知网络访问控制可能会升级身份验证过程。</p>\n    <p>相比之下，RBA更具动态性，并且通常由某种程度的AI启用。 随着RBA，“你开始开放风险评分和机器学习到认证事件，”Diamond说。</p>\n    <p>基于风险的身份验证根据当前风险配置文件动态地对身份验证过程应用各种严格级别。 风险越高，认证过程对用户的限制越严格。 在用户可以访问公司的信息资源之前，用户的地理位置或IP地址的更改可能会触发其他身份验证要求。</p>\n    <h2>什么是联合身份管理？</h2>\n    <p>联合身份管理允许您与可信赖的合作伙伴共享数字身份证。 它是一种身份验证共享机制，允许用户使用相同的用户名，密码或其他ID来访问多个网络。</p>\n    <p>单点登录（SSO）是联合ID管理的重要组成部分。 单点登录标准允许在一个网络，网站或应用程序上验证其身份的人员在移动到另一个网络，网站或应用程序时进行身份验证。\n      该模型仅适用于合作组织（称为可信赖的合作伙伴），它们基本上为彼此的用户提供保证。</p>\n    <h2>IAM平台是否基于开放标准？</h2>\n    <p>通常使用安全声明标记语言（SAML）发送受信任伙伴之间的授权消息。 该开放规范定义了用于在安全机构之间交换安全断言的XML框架。 SAML在提供身份验证和授权服务的不同供应商平台之间实现互操作性。</p>\n    <p>但是，SAML不是唯一的开放标准身份协议。 其他包括OpenID，WS-Trust（Web服务信任的简称）和WS-Federation（由Microsoft和IBM提供企业支持）和OAuth\n      （发音为“Oh-Auth”），它允许第三方使用用户的帐户信息。 Facebook等方面的服务，不会泄露密码。</p>\n    <h2>实施IAM有哪些挑战或风险？</h2>\n    <p>成功实施身份和访问管理需要跨部门进行预先考虑和协作。 在项目开始之前建立有凝聚力的身份管理战略 - 明确目标，利益相关者支持，定义业务流程的公司 - 可能是最成功的。\n      Shaw说，身份管理最有效“当你拥有人力资源，IT，安全和其他部门时”。</p>\n    <p>通常，身份信息可能来自多个存储库，例如Microsoft Active Directory（AD）或人力资源应用程序。 身份管理系统必须能够在所有这些系统中同步用户身份信息，从而提供单一的事实来源。</p>\n    <p>鉴于当今IT人员短缺，身份和访问管理系统必须使组织能够自动且实时地管理不同情况和计算环境中的各种用户。 手动调整数百或数千用户的访问权限和控制是不可行的。</p>\n    <p>例如，为离职员工取消配置访问权限可能会陷入困境，尤其是在手动完成时，这种情况经常发生。 报告员工离开公司，然后自动取消对他或她使用的所有应用程序，服务和硬件的访问权限，需要一个自动化，全面的身份管理解决方案。</p>\n    <p>Abousselham说，身份验证还必须易于用户执行，IT必须易于部署，最重要的是它必须是安全的。\n      这解释了为什么移动设备“成为用户身份验证的中心”，他补充说，“因为智能手机可以提供用户当前的地理位置，IP地址和其他可用于身份验证的信息。”</p>\n    <p>值得记住的一个风险是：集中操作为黑客和黑客提供了诱人的目标。 通过在所有公司的身份管理活动上添加仪表板，这些系统可以比管理员更多地降低复杂性。 一旦受到攻击，他们就可以允许入侵者创建具有广泛权限的ID并访问许多资源。</p>\n    <h2>我应该知道哪些IAM术语？</h2>\n    <ul>\n      <li><strong>访问管理</strong>：访问管理是指用于控制和监视网络访问的过程和技术。 访问管理功能（如身份验证，授权，信任和安全审核）是内部部署和基于云的系统的顶级ID管理系统的重要组成部分。</li>\n      <li><strong>Active Directory（AD）</strong>： Microsoft开发了AD作为Windows域网络的用户身份目录服务。 虽然是专有的，但AD包含在Windows\n        Server操作系统中，因此得到了广泛部署。\n      </li>\n      <li><strong>生物识别身份验证</strong>：用于验证依赖于用户独特特征的用户的安全流程。 生物认证技术包括指纹传感器，虹膜和视网膜扫描以及面部识别。</li>\n      <li><strong>上下文感知网络访问控制</strong>：上下文感知网络访问控制是基于策略的方法，其根据寻求访问的用户的当前上下文来准许对网络资源的访问。 例如，尝试从未列入白名单的IP地址进行身份验证的用户将被阻止。\n      </li>\n      <li><strong>凭据</strong>：用户用于访问网络的标识符，例如用户密码，公钥基础结构（PKI）证书或生物识别信息（指纹，虹膜扫描）。</li>\n      <li><strong>取消配置</strong>：从ID存储库中删除标识并终止访问权限的过程。</li>\n      <li><strong>数字身份</strong>：身份证本身，包括用户描述和他/她/访问权限。 （“它的”因为端点，例如笔记本电脑或智能手机，可以拥有自己的数字身份。）</li>\n      <li><strong>权利</strong>：指定经过身份验证的安全主体的访问权限和特权的属性集。</li>\n      <li><strong>身份即服务（IDaaS）</strong>：基于云的IDaaS为驻留在本地和/或云中的组织系统提供身份和访问管理功能。</li>\n      <li><strong>身份生命周期管理</strong>：与访问生命周期管理类似，该术语是指用于维护和更新数字身份的整套流程和技术。 身份生命周期管理包括身份同步，供应，取消供应以及用户属性，凭据和权利的持续管理。</li>\n      <li><strong>身份同步</strong>：确保多个身份存储（例如，获取的结果）包含给定数字ID的一致数据的过程。</li>\n      <li><strong>轻量级目录访问协议（LDAP）</strong>： LDAP是基于开放标准的协议，用于管理和访问分布式目录服务，例如Microsoft的AD</li>\n      <li><strong>多重身份验证（MFA）</strong>： MFA是指对网络或系统进行身份验证时不仅需要单个因素（如用户名和密码）。\n        还需要至少一个附加步骤，例如接收通过SMS发送到智能电话的代码，插入智能卡或USB棒，或满足生物认证要求，例如指纹扫描。\n      </li>\n      <li><strong>密码重置</strong>：在此上下文中，它是ID管理系统的一项功能，允许用户重新建立自己的密码，减轻作业管理员的负担并减少支持呼叫。 用户通常通过浏览器访问重置应用程序。\n        应用程序要求提供一个秘密字或一组问题来验证用户的身份。\n      </li>\n      <li>**特权帐户管理 **：此术语是指根据用户的权限管理和审核帐户和数据访问。一般而言，由于其工作或职能，特权用户已被授予对系统的管理访问权限。 例如，特权用户可以设置和删除用户帐户和角色。\n        供应：创建身份，定义其访问权限并将其添加到ID存储库的过程。\n      </li>\n      <li><strong>基于风险的身份验证（RBA）</strong>：基于风险的身份验证根据用户在尝试身份验证时的情况动态调整身份验证要求。\n        例如，当用户尝试从之前未与之关联的地理位置或IP地址进行身份验证时，这些用户可能会面临其他身份验证要求。\n      </li>\n      <li><strong>安全主体</strong>：具有一个或多个凭据的数字身份，可以通过身份验证和授权与网络进行交互。</li>\n      <li><strong>单点登录 （SSO）</strong>：一种用于多个相关但独立系统的访问控制。 使用单个用户名和密码，用户无需使用不同的凭据即可访问一个或多个系统。</li>\n      <li><strong>用户行为分析（UBA）</strong>： UBA技术检查用户行为模式，并自动应用算法和分析来检测可能表明潜在安全威胁的重要异常。 UBA与其他安全技术不同，后者专注于跟踪设备或安全事件。\n        UBA有时也与实体行为分析组合在一起，称为UEBA。\n      </li>\n    </ul>\n\n  </div>\n</div>\n<br>\n<div style=\" font-style: italic;\">原文链接在<a target=\"_blank\"\n                                          href=\"https://www.csoonline.com/article/2120384/identity-management/what-is-iam-identity-and-access-management-explained.html\">这里</a>\n</div>\n<div style=\" font-style: italic;\">2018年10月1日，由<a href=\"http://www.anquanjuzi.com\">安全桔子</a>整理发布</div>\n"

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art1/art1.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art1/art1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Art1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Art1Component", function() { return Art1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Art1Component = /** @class */ (function () {
    function Art1Component() {
    }
    Art1Component.prototype.ngOnInit = function () {
    };
    Art1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-art1',
            template: __webpack_require__(/*! ./art1.component.html */ "./src/app/components/articles/oct-2018/art1/art1.component.html"),
            styles: [__webpack_require__(/*! ./art1.component.css */ "./src/app/components/articles/oct-2018/art1/art1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Art1Component);
    return Art1Component;
}());



/***/ }),

/***/ "./src/app/components/articles/oct-2018/art2/art2.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art2/art2.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art2/art2.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art2/art2.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>最好的IAM软件：评选十大产品</h1>\n    <h6><em>根据IT专业人员的反馈，这些是最佳的身份和访问管理产品。</em></h6>\n    <p>公司最大的资产是什么？ 可以把它分成两组：</p>\n    <ol>\n      <li><strong>人员</strong> ，包括富有成效的员工，忠诚的客户和高效的合作伙伴。</li>\n      <li><strong>数据</strong> ，包括有关客户，产品，流程和知识产权的信息。</li>\n    </ol>\n    <p>但是，在这个过程中如果无法保护谁正在访问哪些信息，那么人员和数据的混合可能会给IT公司带来挑战。 如今，更多的团队，包括内部员工、供应商和客户，正在从不同的平台和多种设备访问更多数据。\n      如果不保护这些信息，那么公司将面临与数据安全性，合规性或组织效率相关的风险。</p>\n    <h2>数据安全始于家庭（与人类一起）</h2>\n    <p>如果使用弱密码，访问不应该访问的数据或者不遵守合规性要求，即使是善意的员工也会构成威胁。 当然，IT部门并非没有错。 许多人未能部署单点登录和多因素身份验证等功能，以确保更好，更安全的体验。</p>\n    <p><strong>身份和访问管理（IAM）</strong> 。 IAM平台旨在确保内部部署，云和混合系统在适当的时间为正确的角色和个人提供适当的访问。\n      混合使用物联网等技术以及严格的合规要求（如GDPR和IAM）是安全策略的关键任务要素。 事实上，GDPR的影响导致了客户识别和访问管理（CIAM）这一术语的使用。</p>\n    <h2>IAM的目标是什么？</h2>\n    <p>IAM产品和服务旨在确保授权的员工，合作伙伴和客户拥有适当的资源访问权限。 IAM有助于确保入职，离职，管理角色，身份验证，访问管理等流程自动化，可扩展且有效。</p>\n    <p>除单点登录和多因素身份验证外，IAM软件还通常提供帐户管理，合规性管理，密码管理，角色管理，用户活动监控和用户配置等功能。</p>\n    <p>好消息是，您有许多选项来管理身份和访问您的资源。 事实上， IT Central\n      Station在其“身份和访问管理买方指南和评论”报告中确定了66家供应商，从单纯IAM提供商到提供IAM作为其安全平台一部分的大型供应商。</p>\n    <p>根据IT user reviews的报告，IT Central Station基于以下的评估标准挑选出了前10个产品：视图数量，产品与其他产品的比较次数，IT Central Station特定产品的评论总数，IT\n      Central Station上的粉丝数量和基于评论的平均评分。</p>\n    <p>根据IT Central Station，以下是基于该标准的十大身份和访问管理产品（按字母顺序排列）：</p>\n    <ul>\n      <li>CA Identity Manager (CA IAM)</li>\n      <li>Cisco Identity Services Engine</li>\n      <li>CyberArk Privileged Account Security</li>\n      <li>ForgeRock</li>\n      <li>IBM Tivoli Access Manager</li>\n      <li>Keeper</li>\n      <li>OneLogin</li>\n      <li>Oracle Identity Manager (Oracle IAM)</li>\n      <li>Quest One Identity Manager</li>\n      <li>SailPoint IdentityIQ</li>\n    </ul>\n  </div>\n</div>\n<br>\n<div style=\" font-style: italic;\">原文链接在<a target=\"_blank\"\n                                          href=\"https://www.csoonline.com/article/3301196/security/the-best-iam-software-rating-the-top-10-products.html\">这里</a>\n</div>\n<div style=\" font-style: italic;\">2018年10月2日，由<a href=\"http://www.anquanjuzi.com\">安全桔子</a>整理发布</div>\n\n"

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art2/art2.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art2/art2.component.ts ***!
  \*********************************************************************/
/*! exports provided: Art2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Art2Component", function() { return Art2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Art2Component = /** @class */ (function () {
    function Art2Component() {
    }
    Art2Component.prototype.ngOnInit = function () {
    };
    Art2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-art2',
            template: __webpack_require__(/*! ./art2.component.html */ "./src/app/components/articles/oct-2018/art2/art2.component.html"),
            styles: [__webpack_require__(/*! ./art2.component.css */ "./src/app/components/articles/oct-2018/art2/art2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Art2Component);
    return Art2Component;
}());



/***/ }),

/***/ "./src/app/components/articles/oct-2018/art3/art3.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art3/art3.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art3/art3.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art3/art3.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>什么是身份即服务？ IDaaS(Idenitty as a Service)解释</h1>\n    <p><img class=\"img-fluid\" src=\"../../../../../assets/images/articles/2018-10/art3-1.png\"/></p>\n    <p>云计算为管理用户身份和访问权限带来了前所未有的新要求。 企业中使用的基于云的应用程序的平均数量介于900到1200种不同的服务之间。\n      如果每个服务都需要自己的一组登录账号，则用户本身会使用简单的容易受到攻击的密码，并且也有可能完全避免使用该服务。 为了管理越来越多的在线服务或内部网络应用程序的身份验证，组织需要为用户管理他们的身份和验证。\n      单点登录（SSO）等功能对于改善最终用户体验以及为企业网络中使用的所有基于云的服务启用透明身份验证过程至关重要。</p>\n    <p><strong>身份即服务（IDaaS）</strong>允许组织实现这些目标，因为它们致力于改善组织的安全状况，同时使员工更容易利用其可支配的大量云服务。</p>\n    <p><strong><em>身份即服务</em></strong> 被描述为由第三方云供应商管理和托管的身份验证基础架构，以提供身份和访问管理服务。 IDaaS超越了SSO，涵盖了更广泛的身份统一和管理（IGA, Identity\n      Governance and Administration），云和网络IT服务的访问管理和智能功能。\n      与可在内部设计和管理策略框架和技术基础架构的传统身份和访问管理（IAM）系统相比，IDaaS使组织能够利用先进的IAM功能，而无需处理复杂而严格的底层基础架构，策略和实践，和随之而来的保持合规性和高标准的安全性。\n      除了在越来越多的应用程序中管理员工访问权限之外，企业还需要了解服务的使用时间，地点和方式。 在SaaS驱动的企业IT部门中，这是一个更大的挑战，在这个部门中，员工采用影子IT（Shadow\n      IT）实践来访问基于云的服务，而无需内部IT部门的正式批准，导致了更大的安全隐患。 为了解决这些问题，组织可以通过IDaaS产品提供的有效IAM功能，在不影响安全性的情况下促进必要的云应用程序的使用。</p>\n    <h2>身份即服务的关键组成部分和功能</h2>\n    <p>IDaaS解决方案提供一系列不同供应商和细分市场的特性和功能。 构成身份即服务产品的最常见组件包括：</p>\n    <ul>\n      <li>\n        <p><strong>基于云的多租户架构</strong>： IDaaS供应商通常运营多租户云架构来提供服务。 借助多租户服务交付模型，供应商可以为不同的客户即时发布更新，安全修复和性能改进。\n          因此，客户可以增强其有效管理访问配置供应和治理的能力。 借助基于云的产品，企业可以扩展IDaaS解决方案的使用范围，以满足工作场所不断变化的IAM需求，同时只需支付所消耗的服务费用并节省初始资本支出。</p>\n      </li>\n      <li>\n        <p><strong>密码管理和认证</strong>：作为身份和访问管理的基本要求，IDaaS服务包含所有必要的身份验证和密码管理方法。\n          其中包括通过密码进行多因子用户身份验证，数字访问卡或生物识别等功能，这些功能可在用户设备和访问点之间动态维护。 对于最终用户，这些机制应该是简单的并且有助于提高在访问敏感业务信息，资源或场所时的安全意识。</p>\n      </li>\n      <li>\n        <p><strong>单点登录和联合</strong>：在与IDaaS相关的其他关键IAM特性和功能中，该服务通常旨在最大限度地提高最终用户体验，同时按照预期保持公司网络的安全性和可用性。\n          借助SSO功能，可以鼓励用户使用最安全的密码组合，而无需记住他们每天访问常规IT服务。 同样，IDaaS系统的联合功能（Federation）允许组织管理超出内部IT部门控制的第三方云服务的安全身份验证。</p>\n      </li>\n      <li>\n        <p><strong>自动审批工作流程</strong>：自动审批工作流程使IT部门能够快速有效地管理多个应用程序和控制同步访问权限。\n          这些工具通常提供基于GUI的配置功能，使IT管理员可以更轻松地管理配置并遵循系统的治理框架，以降低与IAM功能相关的风险和成本。</p>\n      </li>\n      <li>\n        <p><strong>分析和智能</strong>：高级IDaaS产品包括分析和智能功能，可在用户，角色和职责，工作职能，应用程序和数据使用之间的多方面关系中报告访问权限的使用。\n          此信息以容易识别的格式提供，允许组织识别异常情况，例如前雇员的活动帐户或特定类型的劳动力细分的使用模式。</p>\n      </li>\n      <li>\n        <p><strong>可配置的IAM实施模板</strong>：组织可以利用为多个客户提供IAM实施的供应商，并设计出最适合各种客户的易于配置的模板。\n          灵活的配置工作流程不需要手动编写脚本，允许IDaaS客户遵循可重复的IAM流程，这些流程可以有效地工作并在不断增长的用户群中扩展。\n          最佳的IDaaS解决方案允许组织以最小的定制要求执行IAM流程，以便保持系统的简单性，可扩展性和可替换性。</p>\n      </li>\n      <li>\n        <p><strong>治理，风险和合规性</strong>：组织可以通过利用IDaaS系统的自动化和智能功能来管理治理，风险和合规性。 该技术允许组织实施治理策略和框架，以降低安全性和合规性风险。\n          例如，组织可以定义和自动化特定于应用程序的流程，以根据合规性敏感性了解访问和使用模式。 同样，真实的身份验证过程和访问权限应与不断变化的组织策略保持一致，这些策略会根据不同的市场环境，地理位置和合规性规则而变化。</p>\n      </li>\n    </ul>\n    <p>身份账号盗窃已成为企业日益增长的安全挑战。 身份盗窃资源中心（ITRC）发现，\n      超过91％的身份盗窃攻击在2017年危及公司数据库。随着GDPR，HIPAA等形式引入严格的全球合规性规定，组织被迫采取额外措施保护内部劳动力，承包商和组织外最终用户的用户帐户的措施。\n      因此，需要基于应用到应用的身份和访问管理功能，以确保针对与采用云服务相关的日益增长的风险的强大安全态势。</p>\n  </div>\n</div>\n<br>\n<div style=\" font-style: italic;\">原文<a target=\"_blank\"\n                                       href=\"https://www.bmc.com/blogs/identity-as-a-service-idaas/\">链接</a></div>\n<br>\n<div style=\" font-style: italic;\">2018年10月3日，由<a href=\"http://www.anquanjuzi.com\">安全桔子</a>整理发布</div>\n"

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art3/art3.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art3/art3.component.ts ***!
  \*********************************************************************/
/*! exports provided: Art3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Art3Component", function() { return Art3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Art3Component = /** @class */ (function () {
    function Art3Component() {
    }
    Art3Component.prototype.ngOnInit = function () {
    };
    Art3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-art3',
            template: __webpack_require__(/*! ./art3.component.html */ "./src/app/components/articles/oct-2018/art3/art3.component.html"),
            styles: [__webpack_require__(/*! ./art3.component.css */ "./src/app/components/articles/oct-2018/art3/art3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Art3Component);
    return Art3Component;
}());



/***/ }),

/***/ "./src/app/components/articles/oct-2018/art4/art4.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art4/art4.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art4/art4.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art4/art4.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>身份管理的12个趋势</h1>\n    <p><img class=\"img-fluid\" src=\"../../../../../assets/images/articles/2018-10/art4-1.png\"/></p>\n    <p><em>在2018年，身份和访问管理（IAM）在确保组织拥有强大的网络安全实践方面发挥了至关重要的作用。 从缓解内部威胁到建立适当的网络卫生，IAM的重要性不再受到质疑。</em></p>\n    <p><em>我们的创始人兼首席执行官Robert Herjavec认为，“身份是他们自己的太阳系......它是自己的星系”。 由于用户（即员工）是“互动的”，企业在访问控制，特权访问和身份治理方面面临挑战。</em></p>\n    <p>随着IAM公司试图将“身份背景”扩展到网络安全市场的所有方面，身份正在成为“自己的太阳系”。</p>\n    <p>\n      上周RSA会议上有关于身份的会议数量在以不成比例的方式增加，而且更多的公司在身份和访问管理（IAM）的框架下用“身份管理”，“身份环境”等术语轻推自己的方式。特权访问管理，“隐私”，“行为生物识别”，“生物识别平台”和“以人为本的安全”在他们的摊位上大量涌现。 </p>\n    <p>如果网络安全市场是一个全球性的市场，每个细分市场都会占据一席之地 - 一个用于端点安全的大陆，一个威胁情报的群岛 - 身份和访问管理在哪里适合？</p>\n    <p>“身份是自己的太阳系，”全球IT安全公司Herjavec Group的首席执行官兼鲨鱼坦克投资人Robert Herjavec说。 “它自己的星系。”</p>\n    <p>“用户的问题在于他们是互动的，”他解释道。\n      身份管理对企业来说是一个挑战的原因是因为用户被雇用，被解雇，获得促销，访问敏感文件系统，共享机密数据，发送带有潜在机密信息的电子邮件，尝试访问我们无法访问的数据，尝试做我们不应该做的事情。 “一劳永逸”对我们不起作用。</p>\n    <p>幸运的是，好的IAM变得越来越容易。\n      Herjavec指出了像Sailpoint和Saviynt这样的身份治理工具以及像Cyber​​Ark这样的特权访问管理工具，他说现在“它们不仅可以管理，而且从价格角度来看基本上是可以消费的”。</p>\n    <p>这些变化并不是突然产生的，市场对IAM的需求一直很高，但最近的违规行为（Equifax），新的合规性压力（GDPR）和隐私披露（Cambridge Analytica / Facebook）增加了身份安全和治理等方面的压力。\n      正如Ping Identity的高级技术架构师Sarah Squire所说，“Facebook的安全团队非常棒 - 这是糟糕的治理。 Equifax的安全性很差。”</p>\n    <p>什么力量正在形成这个身份星系(Identity Galaxy)的形状？ 继续阅读更多内容。</p>\n    <h2>基于知识的身份验证（KBA，Knowledge-based Authentication）已经死亡</h2>\n    <p>在Equifax遭到破坏并且Alteryx泄露（暴露了Experian数据）之后，许多组织使用的基于知识的身份验证（KBA）系统受到了损害。\n      为什么要求客户通过确认他们的前雇主，地址或母亲的生日来验证他们的身份，当攻击者也知道所有这些信息时 - 以及他们订阅的杂志以及他们是否在后院有一个游泳池？</p>\n    <h2>GDPR为个人拥有自己的身份提供所有权</h2>\n    <p>织已经习惯于表现得好像数据库中的任何名称都是属于他们的名称 - 收集，存储，传输，购买和销售个人的个人身份信息而相对不受惩罚。 欧盟的通用数据保护法规（GDPR）改变了这一切 - 它增强了组织对身份治理的需求。</p>\n    <p>GDPR要求组织在收集或分享其个人信息时随时获得个人的明确许可 - 自动修改的框不够明确 - 个人必须能够随时轻松撤销该许可。 个人有“被遗忘的权利”。 此外，必须保留在数据流动的任何地方使用此身份信息的记录。</p>\n    <p>GDPR适用于任何地方的任何欧盟公民数据，因此它影响到全球各地的公司，并且它适用于组织的客户及其员工，因此它将对其治理和内部和外部身份的安全性产生影响。\n      ForgeRock专门为外部用户提供IAM，为其产品添加了GDPR仪表板。</p>\n    <p>GDPR的法案执行将于5月25日开始（自该法案正式实施以来的两年宽限期之后）。 这些行动包括但不限于2000万欧元的罚款或年收入的4％，以较高者为准。</p>\n    <p>“GDPR真的是开创性的，”Herjavec说。 与PCI一样，它将推动整个行业发展，但与PCI不同，它会影响所有行业。 他说，他“100％肯定”加拿大和美国将拥有自己的版本。</p>\n    <h2>通过隐私增加可验证索赔的需求</h2>\n    <p>Squire提供了其他一些例子，说明世界需要哪些方式让个人在保持隐私的同时提供有关自己的经过验证的声明。</p>\n    <p>有一些旧的用例可以重新制作。 例如，酒吧的保镖可以验证某人是否具有合法的饮酒年龄，而无需知道他们的姓名 - 政府机构是否可以在不知道该人何时何地饮酒的情况下验证该信息？</p>\n    <p>更重要的是，社交媒体和新闻网站是否可以利用它来打击用于影响选举的虚假宣传活动？ 例如，该网站是否可以验证某人是注册选民或某个国家的居民？</p>\n    <p>从技术上讲，这些东西都在触手可及，Squire说。 “这就是改变了，”Ping Identity的高级技术架构师Sarah Squire说，他拿着智能手机。 “这些可以存储私钥。” 她说，现在的限制是监管。</p>\n    <h2>身份治理扩展到云端</h2>\n    <p>身份治理提供商SailPoint的首席执行官兼联合创始人Mark McClain说：“治理的世界是关于谁可以访问什么，谁应该访问什么，他们是否正确使用它。” “大多数客户都远离前两个，他们甚至不应该担心第三个。”</p>\n    <p>SailPoint和其他身份管理和管理（IGA）解决方案提供商正在通过为安全专业人员提供更加用户友好的基于云的管理工具来加速这一过程。\n      然而，在后端，云服务只会使治理问题复杂化，除了内部部署资源之外，用户越来越多地访问越来越多的帐户。</p>\n    <p>Saviynt是专门针对云计算的IGA解决方案，并表示它是“开创性的IGA 2.0”。 其他一些人，比如Sailpoint和One Identity，则通过云迁移来支持客户。</p>\n    <p>One Identity产品管理高级主管杰克逊·肖（Jackson Shaw）表示，“在本地软件上会有很长的篇幅，”他指出了它对工业控制系统环境的重要性。\n      “未来几年，云将成为一个巨大的复杂因素......这确实使治理变得复杂化。</p>\n    <h2>身份即服务的演变</h2>\n    <p>随着IAM管理进入云计算，身份即服务正在变得真实。 一些治理提供商正在成为满足您所有身份需求的全栈一站式服务，并且在3月份，Google发布了完整的“身份即服务”产品，该产品使用开放标准：云身份。</p>\n    <p>在一篇博客中，Cloud Identity的高级产品经理Vidya Nagarajan写道：“今天，[用户]需要在任何地方自由工作，并了解这些背景 - 他们需要做什么，在哪里，用什么设备 - 应该是什么指导企业访问。“</p>\n    <p>Cloud Identity的服务列表非常广泛。 写了Nagarajan：</p>\n    <p>“Cloud Identity的单点登录支持SAML 2.0和OpenID，可与数百个开箱即用的应用程序配合使用，包括Salesforce，SAP SuccessFactors和Box以及Docs或Drive等G\n      Suite应用程序。对于使用GCP资源的组织，Cloud Identity提供了额外的控制，用于管理混合内部部署和云基础架构中的用户和组。</p>\n    <p>“Cloud\n      Identity包括针对Android和iOS的强大移动设备管理，其中包括自动为用户启用帐户擦除和密码执行等许多功能。管理员可以使用一个集成控制台来实现屏幕锁定，查找设备，实施两步验证和防网络钓鱼安全性密钥，并管理Chrome浏览器的使用情况。他们还可以获取安全报告和分析，例如可疑登录，用户活动报告和审核，以及登录第三方应用，网站和扩展程序。“</p>\n    <h2>每个人的生物识别技术为用户提供了良好的安全性</h2>\n    <p>“我一直坚信，易用性每次都会胜过安全，”One Identity's Shaw说。 “但直到最近，我们还没有一个可以改变密码的做市商”。</p>\n    <p>智能手机和其他移动设备现在默认内置多种生物识别身份验证方法。 将其添加到新的WebAuthn标准中，在线生物识别安全性作为在线强认证的低摩擦方法变得更加可行。 4月10日，FIDO联盟和W3C宣布了Web身份标准，S\n      Identity称之为“绝对精彩”的WebAuthn标准，使在线服务提供商能够通过网络浏览器提供FIDO身份验证。 谷歌，Mozilla，微软和Opera都在加入。</p>\n    <p>基于FIDO的生物识别身份验证增强了安全Web访问，因为它为每个站点使用唯一的加密凭据，消除了从一个站点窃取的密码可以在另一个站点上使用的风险。</p>\n    <p>生物识别设备的激增也促使公司帮助将所有这些设备组合在一起。 Veridium是ForgeRock和Ping\n      Identity等主要IAM公司的合作伙伴，它创建了一个横向生物识别平台，使这些公司的客户可以插入他们想要的任何生物识别身份验证方法 - 无论是指纹，面部识别还是Veridium自己的四指非接触式行为生物识别技术。</p>\n    <p>Veridium首席执行官詹姆斯斯特里克兰德说：“我认为让人们坚持使用一种生物识别技术将是愚蠢的。” 他说他只是想让身份管理变得更容易。 “我看到它有多痛苦。我不想要另一次十字军东征。”</p>\n    <p>尽管如此，在Veridium最近的一项调查中 ，34％的受访者“非常有信心”只有密码可以充分保护数据。</p>\n    <p>“我认为我的孙子[去年出生]将在密码之前退休，”肖说。</p>\n    <h2>特权升级推动PAM</h2>\n    <p>特权升级已经成为针对性攻击的一部分，甚至是针对性的攻击。 解决这个问题的一种方法是密切控制特权内部人员的访问和活动，因为毕竟，一旦攻击者拥有这些凭据，他们本质上就是一个内部人员。</p>\n    <p>特权访问管理（PAM）专门用于管理最特权用户的访问凭据。 沿着PAM解决方案，如Cyber​​Ark，新的云原生PAM解决方案进入市场，如OnionID和Remediant。</p>\n    <p>Cyber​​Ark也试图限制泄露管理员凭据的问题。 该公司去年以4200万美元的价格收购了Conjur，以帮助开发人员快速推送应用程序，而无需使用硬编码凭证和SSH密钥。</p>\n    <h2>非结构化数据问题导致IAM重叠与数据治理，UEBA</h2>\n    <p>Varonis （不是身份管理公司） 最近的研究发现，三分之一的内部用户是“幽灵用户” - 不活跃，但已启用 - 并且30％的公司将超过1,000个敏感文件夹留给所有员工。</p>\n    <p>正如SailPoint的McClain所说，IAM行业主要专注于访问应用程序。 但是由于文件系统暴露了这么多，Gartner预测，到2022年，80％的数据都将是非结构化的，因此专注于应用程序访问并不够好。\n      SailPoint是一家身份治理公司，其目标也是解决这个问题，这会导致与Varonis等数据安全/治理公司以及像Forcepoint这样的用户和实体行为分析提供商重叠，后者将自己称为“以人为本的安全”公司。</p>\n    <p>“你需要统一的图片，记录系统，天空中的神奇电子表格，”麦克莱恩说。 “Everwhere [一个用户]拥有一个ID，她的权限，她的权利。她想要的状态和她的实际状态需要同步。”</p>\n    <h2>用于持续验证的风险自适应身份和行为生物特征识别</h2>\n    <p>越来越多的公司正在使用行为生物识别技术来解决合法登录后发生的攻击问题。 像BioCatch这样的公司正在应用这项技术来防止会话劫持在线打击欺诈。\n      其他人正在使用行为生物识别来检测公司网络内部用户的异常行为以对抗横向移动。</p>\n    <p>“[事件响应]多年来一直失败，因为继发感染的证据表明，”Carbon Black首席网络安全官汤姆凯勒曼说。 “动态自适应身份验证就是答案。用户设备和网络必须挑战生物识别标识挑战响应的关键 -\n      例如，采取自拍并捡起你的鼻子。”</p>\n    <p>Kellermann指出ID Data Web是这种自适应身份安全产品的一个例子，该产品使用多个来源来验证身份是否准确，然后提供持续的身份验证 - 仅在检测到风险时请求挑战和响应。</p>\n    <p>BioCatch构建用户的配置文件，其中包含有关其生物特征行为的数据 - 但不包括其身份。 它可以检测异常行为（例如，在导航中），从而在进行欺诈性资金转移之前关闭机器人或攻击者。</p>\n    <p>这些风险自适应的“升级”认证工具也被吹捧为减少摩擦的方法 - 除非检测到风险，否则用户可能根本不必经历登录过程。</p>\n    <p>Squire谈到了“零登录”的目标 - 你拿着手机的方式非常明显，如果行为生物识别技术选择了它并自动验证你而不停下来要求你扫描你的脸或指纹。</p>\n    <h2>物联网推动机器身份的边缘</h2>\n    <p>“[身份管理]将使IoT失败，”IBM Resilient首席技术官兼哈佛大学伯克曼克莱因互联网与社会中心研究员Bruce Schneier说。</p>\n    <p>Schneier表示，物联网极大地扩展了要管理的机器身份数量，并使常规消费者负责设置，管理和保护这些机器身份以及这些机器彼此之间的通信方式。\n      随着更多设备连接到互联网，以个人智能手机作为解锁所有内容的钥匙的中心辐射方法最终将无法扩展。</p>\n    <p>Schneier表示，身份管理公司正在大踏步前进，但是，“他们正在解决昨天的问题。而我们还没有解决这些问题。”</p>\n    <p>SailPoint的McClain承认机器，机器人和物联网设备现在都需要访问计算和数据资源，并且还必须属于身份治理的范畴。</p>\n    <h2>基于区块链的数字身份</h2>\n    <p>Blockchain这样的分布式账本平台被广泛用于提供数字身份。 在业务方面，SecureKey建立在IBM Blockchain之上，是加拿大第一个专门针对受监管行业的数字身份网络。\n      Shocard是面向企业的区块链驱动的IAM和SSO解决方案。</p>\n    <p>Evernym是一个信用合作社的数字身份平台，它不是建立在区块链上，而是建立在开源分布式账本平台Sovrin之上。 （Sovrin是为“可证实的主张”的自我主权，分散交换而建立的。）</p>\n    <p>埃森哲和微软联手打造了一个基于区块链的身份基础设施，用于联合国努力为全球100多万人提供法律身份识别，没有像难民这样的官方身份证件。</p>\n    <p>在上周的RSA会议上，美国国土安全部的科技部门演示了Verified.Me，这是一种身份管理工具，使用区块链将登录功能与属性传递分开。</p>\n  </div>\n</div>\n<br>\n\n<div style=\" font-style: italic;\">原文<a target=\"_blank\"\n                                       href=\"https://www.herjavecgroup.com/dark-reading-12-trends-shaping-identity-management/\">链接</a>\n</div>\n<br>\n<div style=\" font-style: italic;\">2018年10月4日，由<a href=\"http://www.anquanjuzi.com\">安全桔子</a>整理发布</div>\n"

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art4/art4.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art4/art4.component.ts ***!
  \*********************************************************************/
/*! exports provided: Art4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Art4Component", function() { return Art4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Art4Component = /** @class */ (function () {
    function Art4Component() {
    }
    Art4Component.prototype.ngOnInit = function () {
    };
    Art4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-art4',
            template: __webpack_require__(/*! ./art4.component.html */ "./src/app/components/articles/oct-2018/art4/art4.component.html"),
            styles: [__webpack_require__(/*! ./art4.component.css */ "./src/app/components/articles/oct-2018/art4/art4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Art4Component);
    return Art4Component;
}());



/***/ }),

/***/ "./src/app/components/articles/oct-2018/art5/art5.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art5/art5.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art5/art5.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art5/art5.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>亚太地区的身份和访问管理市场到2024年的复合年增长率达到15％+</h1>\n    <p>2018年10月4日（根据COMTEX的Heraldkeeper） - 随着智能手机，基于云的解决方案，大量开发以及<strong>BYOD</strong>（Bring Your Own\n      Device）的普及，亚太地区的身份和访问管理市场需求将受到极大的推动。2013年的物联网采用率约为12％，2017年达到约36％。此外，由于该地区展示了巨大的增长潜力，在IAM市场运营的各家公司正在扩大其在该地区的业务，以获得更高的客户群。\n    </p>\n    <p>由于IAM解决方案在该地区的银行金融保险（<strong>BFSI</strong>，Banking, Financial services and\n      Insurance），医疗保健，电信和公用事业等不同领域的重要性，预计北美将主导市场。 此外，随着智能手机使用量的增加，物联网和云计算技术的技术进步也推动了身份和访问管理市场的增长。</p>\n    <p>\n      BFSI部门的身份和访问管理市场正在以最快的速度增长，因为银行和金融机构携带敏感的客户信息，确保极其安全的环境，因为任何类型的安全漏洞都可能成本高昂且具有破坏性。为了提高IAM安全性，BFSI行业通过将多因素身份验证集成到其网络用户帐户中来采用高效流程。\n      由于移动银行业务的普及，采取了各种措施来保护在线交易。 指纹激活支付系统正在智能手机中安装，以保护网上银行。</p>\n    <p>到2024年，全球身份和访问管理（IAM）市场预计将超过<strong>189亿美元</strong>。IAM产品提供基于角色的访问控制，允许系统管理员根据组织内员工的角色来管理对网络的访问。\n      它主要侧重于确保合作伙伴，员工和客户可以安全，简单地访问应用程序，而不会影响安全性。 与企业安装IAM系统相关的主要好处包括减少数据泄露，集中访问控制，降低IT成本和改善用户体验。</p>\n    <p>BYOD等连接设备的发展趋势正在迅速增加，提高了生产力，降低了组织的硬件成本，提高了员工满意度。 此外，移动普及率的提高，员工移动软件需求的增加以及移动服务管理的日益突出也推动了对IAM解决方案的需求。\n      员工，合作伙伴和承包商将个人设备带到工作场所以与公司网络连接。 大约70％的组织采用了BYOD趋势，预计将超过预测时间表。 然而，互联技术的日益普及也导致了网络犯罪威胁的增加。\n      这需要部署有效的IAM解决方案，以防止对公司数据的未授权访问，从而加速身份和访问管理市场的增长。</p>\n    <p>供应解决方案在身份和访问管理市场占据主导地位，并在2017年占据了约40.7％的市场份额。该解决方案为员工，客户和其他利益相关者提供增强的IAM功能，以管理各种计算资源的供应和取消供应。\n      对可靠配置解决方案不断增长的需求以及风险缓解和安全性的日益增加的牵引力也对身份和访问管理市场的增长产生了积极影响。 在各种工业应用中采用供应解决方案，以支持数字身份创建，验证，批准，变更，终止，传播和通信。</p>\n    <p>在身份和访问管理市场运营的公司正在投入资金进行战略合作伙伴关系和合作，并开发创新解决方案，从而在市场中获得竞争优势。 在IAM市场运营的一些主要供应商是戴尔电脑，ForgeRock，Gemalto，IBM，HID Global\n      Corporation，iWelcome，微软，Net IQ，Okta，Inc，Ping Identity和SailPoint Technologies Holdings，Inc。</p>\n  </div>\n</div>\n<br>\n<div style=\" font-style: italic;\">原文<a target=\"_blank\"\n                                       href=\"https://www.marketwatch.com/press-release/identity-and-access-management-market-in-asia-pacific-to-witness-15-cagr-till-2024-2018-10-04\">链接</a>\n</div>\n<br>\n<div style=\" font-style: italic;\">2018年10月5日，由<a href=\"http://www.anquanjuzi.com\">安全桔子</a>整理发布</div>\n"

/***/ }),

/***/ "./src/app/components/articles/oct-2018/art5/art5.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/articles/oct-2018/art5/art5.component.ts ***!
  \*********************************************************************/
/*! exports provided: Art5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Art5Component", function() { return Art5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Art5Component = /** @class */ (function () {
    function Art5Component() {
    }
    Art5Component.prototype.ngOnInit = function () {
    };
    Art5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-art5',
            template: __webpack_require__(/*! ./art5.component.html */ "./src/app/components/articles/oct-2018/art5/art5.component.html"),
            styles: [__webpack_require__(/*! ./art5.component.css */ "./src/app/components/articles/oct-2018/art5/art5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Art5Component);
    return Art5Component;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer>\n  <hr>\n  <div>\n    <div class=\"text-center\">\n\n      <div>\n        <strong>Email: </strong>\n        <span>contact@anquanjuzi.com</span>\n      </div>\n      © 2018 <a href=\"http://www.anquanjuzi.com\">安全桔子</a>\n    </div>\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover {\r\n  background: rgba(0,0,0,0);\r\n  color: #3a7999;\r\n}\r\n\r\np {\r\n  margin: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <ul class=\"list-group\" style=\"margin-left: 25px; margin-right: 25px;\">\n        <h3>最新文章</h3>\n        <br>\n        <li class=\"list-group-item\" style=\"margin-top: 15px; margin-bottom: 15px;\"\n            *ngFor=\"let art of articleList | paginate: config;\">\n\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"text-center\">\n                <img class=\"img-fluid \" style=\"height: 200px;\"\n                     src={{art.imageUrl}}/>\n              </div>\n            </div>\n            <div class=\"col-8\">\n              <h5 style=\"cursor: pointer;\" class=\"art-title\" routerLink=\"/{{art.path}}\"\n                  routerLinkActive=\"active\">{{art.title}}\n              </h5>\n              <h6>{{art.date | date :'yyyy-MM-dd'}}</h6>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-4\">\n      <app-art-ranking></app-art-ranking>\n    </div>\n  </div>\n\n\n  <pagination-controls style=\"font-size: medium;\" [id]=\"config.id\"\n                       [maxSize]=\"maxSize\"\n                       [directionLinks]=\"directionLinks\"\n                       [autoHide]=\"autoHide\"\n                       [responsive]=\"responsive\"\n                       [previousLabel]=\"labels.previousLabel\"\n                       [nextLabel]=\"labels.nextLabel\"\n                       [screenReaderPaginationLabel]=\"labels.screenReaderPaginationLabel\"\n                       [screenReaderPageLabel]=\"labels.screenReaderPageLabel\"\n                       [screenReaderCurrentLabel]=\"labels.screenReaderCurrentLabel\"\n                       (pageChange)=\"onPageChange($event)\"></pagination-controls>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/article */ "./src/app/models/article.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.filter = '';
        this.maxSize = 6;
        this.directionLinks = true;
        this.autoHide = true;
        this.responsive = true;
        this.config = {
            id: 'advanced',
            itemsPerPage: 16,
            currentPage: 1
        };
        this.p = 1;
        this.labels = {
            previousLabel: 'Previous',
            nextLabel: 'Next',
            screenReaderPaginationLabel: 'Pagination',
            screenReaderPageLabel: 'page',
            screenReaderCurrentLabel: "You're on page"
        };
        this.articleList = [];
    }
    HomeComponent.prototype.onPageChange = function (event) {
    };
    HomeComponent.prototype.ngOnInit = function () {
        var art5 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art5.date = new Date('10/05/2018');
        art5.title = '亚太地区的身份和访问管理市场到2024年的复合年增长率达到15％+';
        art5.path = 'art5';
        art5.imageUrl = '../../../../../assets/images/articles/2018-10/art5-1.png';
        this.articleList.push(art5);
        var art4 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art4.date = new Date('10/04/2018');
        art4.title = '身份管理的12个趋势';
        art4.path = 'art4';
        art4.imageUrl = '../../../../../assets/images/articles/2018-10/art4-1.png';
        this.articleList.push(art4);
        var art3 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art3.date = new Date('10/03/2018');
        art3.title = '什么是身份即服务？ IDaaS解释';
        art3.path = 'art3';
        art3.imageUrl = '../../../../../assets/images/articles/2018-10/art3-1.png';
        this.articleList.push(art3);
        var art2 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art2.date = new Date('10/02/2018');
        art2.title = '最好的IAM软件：评选十大产品';
        art2.path = 'art2';
        art2.imageUrl = '../../../../../assets/images/articles/2018-10/art2-1.png';
        this.articleList.push(art2);
        var art1 = new _models_article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        art1.date = new Date('10/01/2018');
        art1.title = '什么是身份验证访问管理（IAM）？身份访问管理解释';
        art1.path = 'art1';
        art1.imageUrl = '../../../../../assets/images/articles/2018-10/art1-1.png';
        this.articleList.push(art1);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover {\r\n  background: rgba(0,0,0,0);\r\n  color: #3a7999;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>技术专题</h3>\n<br>\n<hr>\n<h4 class=\"card-title\">OAuth授权框架</h4>\n\n<div class=\"card\" >\n  <div class=\"card-body\">\n    <ul class=\"list-group\" style=\"margin-left: 25px;\">\n      <li>\n        <span routerLink=\"/subjects/oauth/art1\" routerLinkActive=\"active\" style=\"cursor: pointer;\" class=\"card-text\">1. 简介</span>\n      </li>\n      <li>\n        <span routerLink=\"/subjects/oauth/art2\" routerLinkActive=\"active\" style=\"cursor: pointer;\" class=\"card-text\">2. 授权许可</span>\n      </li>\n      <li>\n        <span routerLink=\"/subjects/oauth/art3\" routerLinkActive=\"active\" style=\"cursor: pointer;\" class=\"card-text\">3. 访问令牌和刷新令牌</span>\n      </li>\n      <li>\n        <span routerLink=\"/subjects/oauth/art4\" routerLinkActive=\"active\" style=\"cursor: pointer;\" class=\"card-text\">4. 客户端注册</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth.component.ts ***!
  \**************************************************************/
/*! exports provided: OauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthComponent", function() { return OauthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OauthComponent = /** @class */ (function () {
    function OauthComponent() {
    }
    OauthComponent.prototype.ngOnInit = function () {
    };
    OauthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oauth',
            template: __webpack_require__(/*! ./oauth.component.html */ "./src/app/components/subjects/oauth/oauth.component.html"),
            styles: [__webpack_require__(/*! ./oauth.component.css */ "./src/app/components/subjects/oauth/oauth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OauthComponent);
    return OauthComponent;
}());



/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth1/oauth1.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth1/oauth1.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth1/oauth1.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth1/oauth1.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>OAuth 2.0授权框架 – 1. 简介</h1>\n    <p>OAuth2.0授权框架允许第三方应用获取对HTTP服务的有限的访问权限，既可以以资源所有者（resource owner）名义在资源所有者和HTTP服务之间进行允许的交互，也可以允许第三方应用以自己的名义进行访问。</p>\n    <h2>1. 传统授权模式</h2>\n    <p>在传统的客户端-服务器身份验证模式中，客户端请求服务器上访问受限的资源，受保护的资源（protected resource）时，需要使用资源所有者的凭据在服务器上进行身份验证。\n      资源所有者为了给第三方应用提供受限资源的访问权限，需要与第三方共享它的凭据。</p>\n    <pre><code> +--------+                               +---------------+\n |        |                               |   资源所有者　  |\n |        |                               |               |\n |        |&lt;-(A)-- 共享凭证　　-------------|               |\n | 第三方  |                               +---------------+\n |　应用   |--(B)--+\n |        |       |\n |        |   存储凭证\n |        |       |                       +---------------+\n |        |&lt;------+                       |   资源服务器　  |\n |        |                               |               |\n |        |--(C)-- 请求访问资源  ----------&gt;|               |\n |        |--(D)-- 许可访问资源  ----------&gt;|               |\n +--------+                               +---------------+\n\n\n             图1：传统授权模式\n</code></pre>\n\n    <ul>\n      <li>（A）客户端从资源所有者处获得凭据，通常是明文密码。</li>\n      <li>（B）客户端将收到的凭据存储在本地。</li>\n      <li>（C）客户端使用此凭据在服务器上进行身份验证。</li>\n      <li>（D）服务器验证此凭据，通常是进行密码身份认证，如有效则处理该请求。</li>\n    </ul>\n    <h3>问题和局限</h3>\n    <p>第三方应用需要存储资源所有者的凭据。\n      服务器需要支持密码身份认证\n      资源所有者的凭据对应过于宽泛，没有时效，不能分割的访问权限。\n      资源所有者不能撤销某个第三方的访问权限而不影响其它第三方，除非更改密码\n      任意第三方应用的非法侵入将间接导致该凭据所保护资源的侵入。</p>\n    <h2>2. OAuth授权模式</h2>\n    <p>为了解决这些问题，OAuth引入了授权层，并且区分离开了资源所有者角色和客户端角色。在OAuth中，资源服务器托管着资源所有者的受保护资源。客户端对资源的访问请求将被授予一组不同于资源所有者的凭据，即访问令牌(access\n      token)。这是一组代表特点作用域，生命周期及其他访问属性的字符串。访问令牌由资源所有者认可的授权服务器(authorization server)颁发给第三方。</p>\n    <p>\n      例如，终端用户（资源所有者）可以许可一个打印服务（客户端）访问其存储在图片分享网站（资源服务器）上的非公开图片（受保护资源）。他不需要提供自己的用户名和密码给该打印服务。而是，他直接与该图片网站信任的服务器（授权服务器）进行身份验证，后者再颁发具体的委托凭据（访问令牌）给该打印服务。</p>\n    <h3>2.1. 角色定义</h3>\n    <p>OAuth定义了四种角色：</p>\n    <p><strong>资源所有者(resource owner，RO)</strong>\n      能够许可对受保护资源的访问权限的实体。当资源所有者是个人时，它被称为最终用户(end-user)。</p>\n    <p><strong>资源服务器(resource server, RS)</strong>\n      托管受保护资源的服务器，能够接收和响应使用访问令牌对受保护资源的请求。</p>\n    <p><strong>客户端(client)</strong>\n      凭借资源所有者的授权,代表资源所有者发起对受保护资源的请求的应用程序。</p>\n    <p><strong>授权服务器(authorization server, AS)</strong> 在成功验证资源所有者且获得授权后,颁发访问令牌给客户端的服务器。\n      授权服务器和资源服务器可以是同一台服务器，也可以是分离的不同服务器。授权服务器可以对应一台，或者多台资源服务器。</p>\n    <h3>2.2. 协议流程</h3>\n    <pre><code> +--------+                               +---------------+\n |        |--(A)-- 请求授权　　------------&gt;|   资源所有者　  |\n |        |                               |               |\n |        |&lt;-(B)-- 许可授权　　-------------|               |\n |        |                               +---------------+\n |        |\n |        |                               +---------------+\n |        |--(C)-- 请求访问令牌             |   授权服务器　  |\n | 客户端  |        (出示授权许可)----------&gt;|               |\n |        |                               |               |\n |        |&lt;-(D)-- 颁发访问令牌 ------------|               |\n |        |                               +---------------+\n |        |\n |        |                               +---------------+\n |        |--(E)-- 请求访问资源             |   资源服务器　  |\n |        |        (出示访问令牌)----------&gt;|               |\n |        |                               |               |\n |        |&lt;-(F)-- 许可访问资源 ------------|               |\n +--------+                               +---------------+\n\n\n\n                图2：OAuth 2.0 抽象协议流程\n</code></pre>\n\n    <ul>\n      <li>（A）客户端从资源所有者处请求授权。授权请求可以直接向资源所有者发起（如图所示），也可以通过授权服务器作为中介间接发起。后者是更可取的方法。</li>\n      <li>（B）客户端收到授权许可，这是一个代表资源所有者授权的凭据。该凭据使用本规范中定义的四种许可类型之一表示。</li>\n      <li>（C）客户端通过身份认证并出示授权许向授权服务器请求访问令牌。</li>\n      <li>（D）授权服务器验证客户端身份并验证授权许可，若有效则颁发访问令牌。</li>\n      <li>（E）客户端从资源服务器请求受保护资源并出示访问令牌进行身份验证。</li>\n      <li>（F）资源服务器验证访问令牌，若有效则处理该请求。</li>\n    </ul>\n    <h2>参考资料</h2>\n    <ol>\n      <li>RFC6749 – The OAuth 2.0 Authorization Framework</li>\n      <li>OAuth 2.0 授权框架</li>\n    </ol>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth1/oauth1.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth1/oauth1.component.ts ***!
  \**********************************************************************/
/*! exports provided: Oauth1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth1Component", function() { return Oauth1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Oauth1Component = /** @class */ (function () {
    function Oauth1Component() {
    }
    Oauth1Component.prototype.ngOnInit = function () {
    };
    Oauth1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oauth1',
            template: __webpack_require__(/*! ./oauth1.component.html */ "./src/app/components/subjects/oauth/oauth1/oauth1.component.html"),
            styles: [__webpack_require__(/*! ./oauth1.component.css */ "./src/app/components/subjects/oauth/oauth1/oauth1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Oauth1Component);
    return Oauth1Component;
}());



/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth2/oauth2.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth2/oauth2.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover {\r\n  background: rgba(0,0,0,0);\r\n  color: #3a7999;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth2/oauth2.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth2/oauth2.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>OAuth 2.0授权框架 – 2. 授权许可</h1>\n    <p>授权许可(Authorization Grant)是一个代表资源所有者授权（访问受保护资源）的凭据，客户端用它来获取访问令牌。</p>\n    <p>本规范定义了以下四种许可类型：</p>\n    <ul>\n      <li>授权码(authorization code)</li>\n      <li>隐式许可(implicit)</li>\n      <li>资源所有者密码凭据(resource owner password credentials)</li>\n      <li>客户端凭据(client credentials)</li>\n    </ul>\n    <p>用户也可根据扩展机制自定义许可类型</p>\n    <h2>1. 授权码</h2>\n    <p>授权码通过使用授权服务器做为客户端与资源所有者的中介而获得。</p>\n    <p>客户端不是直接从资源所有者请求授权，而是引导资源所有者至授权服务器，授权服务器之后引导资源所有者带着授权码回到客户端。在引导资源所有者携带授权码返回客户端前，授权服务器会鉴定资源所有者身份并获得其授权。</p>\n    <pre><code>     +--------+                               +---------------+\n     |        |--(A)-- 重定向至授权服务器  -----&gt;|   资源所有者　  |\n     |        |                         　　　 |               |\n     |        |&lt;-(D)-- 颁发授权码　-------------|               |\n     |        |                               +---------------+\n     |        |                                    |     ∧\n     |        |                                    |     |\n     |        |                                    |     |\n     |        |                            　(B)身份认证　 |\n     |        |                                    |   (C)重定向至客户端\n     |        |                                    |     |\n     |        |                                    |     |\n     | 客户端  |                                    ∨     |\n     |        |                               +---------------+\n     |        |--(E)-- 请求访问令牌             |   授权服务器　  |\n     |        |        (出示授权码)　----------&gt;|               |\n     |        |                               |               |\n     |        |&lt;-(F)-- 颁发访问令牌 ------------|               |\n     |        |                               +---------------+\n     |        |\n     |        |                               +---------------+\n     |        |--(G)-- 请求访问资源             |   资源服务器　  |\n     |        |        (出示访问令牌)----------&gt;|               |\n     |        |                               |               |\n     |        |&lt;-(H)-- 许可访问资源 ------------|               |\n     +--------+                               +---------------+\n\n\n\n                    图3：OAuth 2.0 授权码流程\n</code></pre>\n\n    <ul>\n      <li>（A）客户端引导资源所有者至授权服务器</li>\n      <li>（B）资源所有者与授权服务器进行身份验证</li>\n      <li>（C）若有效，授权服务器引导资源所有者返回客户端</li>\n      <li>（D）客户端收到授权码</li>\n      <li>（E）客户端通过身份认证并出示授权码授权服务器请求访问令牌。</li>\n      <li>（F）授权服务器验证客户端身份并验证授权许可，若有效则颁发访问令牌。</li>\n      <li>（G）客户端从资源服务器请求受保护资源并出示访问令牌进行身份验证。</li>\n      <li>（H）资源服务器验证访问令牌，若有效则处理该请求。</li>\n    </ul>\n    <h3>安全益处</h3>\n    <ul>\n      <li>验证客户端身份的能力（步骤E）</li>\n      <li>授权服务器直接向客户端传输访问令牌的传输而非通过资源所有者的用户代理来传送它而潜在暴露给他人（包括资源所有者）（步骤F）</li>\n      <li>由于资源所有者只与授权服务器进行身份验证，所以资源所有者的凭据不需要与客户端分享 (步骤B)</li>\n    </ul>\n    <h2>2. 隐式许可</h2>\n    <p>隐式许可是为在浏览器中实现的客户端而优化的一种简化的授权码流程。</p>\n    <p>在隐式许可流程中，不再给客户端颁发授权码，取而代之的是客户端直接被颁发一个访问令牌。这种许可类型是隐式的，因为没有中间凭据（如授权码）被颁发（之后用于获取访问令牌）。</p>\n    <pre><code>     +--------+                               +---------------+\n     |        |--(A)-- 重定向至授权服务器  -----&gt;|   资源所有者　  |\n     |        |                         　　　 |               |\n     |        |&lt;-(D)-- 颁发访问令牌 ------------|               |\n     |        |                               +---------------+\n     |        |                                    |     ∧\n     |        |                                    |     |\n     |        |                                    |     |\n     |        |                            　(B)身份认证　 |\n     |        |                                    |   (C)重定向至客户端\n     |        |                                    |     （颁发访问令牌）\n     | 浏览器  |                                    |     |\n     | 客户端  |                                    ∨     |\n     |        |                               +---------------+\n     |        |                         　　　 |   授权服务器　  |\n     |        |                         　　　 |               |\n     |        |                               |               |\n     |        |                               |               |\n     |        |                               +---------------+\n     |        |\n     |        |                               +---------------+\n     |        |--(E)-- 请求访问资源             |   资源服务器　  |\n     |        |        (出示访问令牌)----------&gt;|               |\n     |        |                               |               |\n     |        |&lt;-(F)-- 许可访问资源 ------------|               |\n     +--------+                               +---------------+\n\n\n\n                    图4：OAuth 2.0 隐式许可流程\n</code></pre>\n\n    <ul>\n      <li>（A）浏览器客户端引导资源所有者至授权服务器</li>\n      <li>（B）资源所有者与授权服务器进行身份验证</li>\n      <li>（C）若有效，授权服务器颁发访问令牌，引导资源所有者返回客户端</li>\n      <li>（D）客户端收到访问令牌</li>\n      <li>（G）客户端从资源服务器请求受保护资源并出示访问令牌进行身份验证。</li>\n      <li>（H）资源服务器验证访问令牌，若有效则处理该请求。</li>\n    </ul>\n    <h3>安全益处</h3>\n    <ul>\n      <li>隐式许可减少了获取访问令牌所需的往返数量，从而提高了客户端的响应速度和效率。</li>\n    </ul>\n    <h3>安全影响</h3>\n    <ul>\n      <li>授权服务器不对客户端进行身份验证。</li>\n      <li>授权服务器通过资源所有者或其用户代理间接向客户端传输访问令牌，因此访问令牌可能会暴露给资源所有者，或者对资源所有者的用户代理有访问权限的其他应用程序。</li>\n    </ul>\n    <h2>3. 资源所有者密码凭据</h2>\n    <p>资源所有者密码凭据（即用户名和密码），可以直接作为获取访问令牌的授权许可。</p>\n    <p>这种凭据只能应该当资源所有者和客户端之间具有高度信任时（例如，客户端是设备的操作系统的一部分，或者是一个高度特权应用程序），以及当其他授权许可类型（例如授权码）不可用时被使用。</p>\n    <pre><code>     +--------+                               +---------------+\n     |        |                         　　　 |   资源所有者　  |\n     |        |                         　　　 |               |\n     |        |&lt;-(A)-- 共享密码凭据 ------------|               |\n     |        |                               +---------------+\n     |        |\n     |        |                               +---------------+\n     | 客户端  |--(B)-- 请求访问令牌             |   授权服务器　  |\n     |        |        (出示密码凭据)----------&gt;|               |\n     |        |                               |               |\n     |        |&lt;-(C)-- 颁发访问令牌 ------------|               |\n     |        |                               +---------------+\n     |        |\n     |        |                               +---------------+\n     |        |--(D)-- 请求访问资源             |   资源服务器　  |\n     |        |        (出示访问令牌)----------&gt;|               |\n     |        |                               |               |\n     |        |&lt;-(E)-- 许可访问资源 ------------|               |\n     +--------+                               +---------------+\n\n\n\n                    图5：OAuth 2.0 资源所有者密码凭据许可流程\n</code></pre>\n\n    <ul>\n      <li>（A）客户端从资源所有者处获得密码凭据</li>\n      <li>（B）客户端向授权服务器请求访问令牌并出示资源所有者的密码凭据</li>\n      <li>（C）授权服务器验证该密码凭据，若有效则颁发访问令牌</li>\n      <li>（D）客户端向资源服务器请求受保护资源并出示访问令牌进行身份验证</li>\n      <li>（E）资源服务器验证访问令牌，若有效则处理该请求</li>\n    </ul>\n    <p>客户端对资源所有者的密码凭据有直接的访问权限（步骤E），相似于传统授权模式中（步骤A）客户端从资源所有者处获得凭据。\n      不同的是，在本授权类型中，资源所有者凭据仅被用于一次访问令牌请求。交换到的长期有效的访问令牌（long-lived access token）或刷新令牌(refresh\n      token)，可以有效避免客户端存储资源所有者凭据的需求。</p>\n    <h3>安全影响</h3>\n    <ul>\n      <li>资源所有者与客户端共享密码凭据，这正是OAuth所要解决的问题之一。因此，该凭据类型的使用具有一定的局限性，需要同时满足以下两个条件</li>\n      <li>当资源所有者和客户端之间具有高度信任</li>\n      <li>当其他授权许可类型不可用</li>\n    </ul>\n    <h2>4. 客户端凭据</h2>\n    <p>客户端凭据可以被用作为一种授权许可，其适用范围限于以下两种情况</p>\n    <ul>\n      <li>客户端访问自己的受保护资源。换句话说，客户端同时也是资源所有者</li>\n      <li>客户端访问事先与授权服务器商定的受保护资源</li>\n    </ul>\n    <blockquote>\n<pre><code> +-----------+\n |           |                               +---------------+\n |   客户端   |--(A)-- 请求访问令牌             |   授权服务器　  |\n |　/资源所有者|       　(出示客户端凭据)　------&gt;|               |\n |           |                               |               |\n |           |&lt;-(B)-- 颁发访问令牌 ------------|               |\n |           |                               +---------------+\n |           |\n |           |                               +---------------+\n |           |--(C)-- 请求访问资源             |   资源服务器　  |\n |           |        (出示访问令牌)----------&gt;|               |\n |           |                               |               |\n |           |&lt;-(D)-- 许可访问资源 ------------|               |\n +-----------+                               +---------------+\n\n\n                图6：OAuth 2.0 客户端凭据许可流程\n</code></pre>\n\n    </blockquote>\n    <ul>\n      <li>（A）客户端向授权服务器请求访问令牌并出示客户端凭据</li>\n      <li>（B）授权服务器验证该密码凭据，若有效则颁发访问令牌</li>\n      <li>（C）客户端向资源服务器请求受保护资源并出示访问令牌进行身份验证</li>\n      <li>（D）资源服务器验证访问令牌，若有效则处理该请求</li>\n    </ul>\n    <h2>参考资料</h2>\n    <ol>\n      <li>RFC6749 – The OAuth 2.0 Authorization Framework</li>\n      <li>OAuth 2.0 授权框架</li>\n      <li>ForgeRock – OAuth 2.0 Guide</li>\n    </ol>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth2/oauth2.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth2/oauth2.component.ts ***!
  \**********************************************************************/
/*! exports provided: Oauth2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth2Component", function() { return Oauth2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Oauth2Component = /** @class */ (function () {
    function Oauth2Component() {
    }
    Oauth2Component.prototype.ngOnInit = function () {
    };
    Oauth2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oauth2',
            template: __webpack_require__(/*! ./oauth2.component.html */ "./src/app/components/subjects/oauth/oauth2/oauth2.component.html"),
            styles: [__webpack_require__(/*! ./oauth2.component.css */ "./src/app/components/subjects/oauth/oauth2/oauth2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Oauth2Component);
    return Oauth2Component;
}());



/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth3/oauth3.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth3/oauth3.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth3/oauth3.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth3/oauth3.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>OAuth 2.0授权框架 – 3. 访问令牌和刷新令牌</h1>\n    <h2>访问令牌 (Access Token)</h2>\n    <p>访问令牌是用于访问受保护资源的凭据。访问令牌是一个字符串，它代表了客户端获得的授权。该字符串通常对于客户端是不透明的。令牌代表了有具体范围以及期限的访问权限，由资源所有者许可，并由资源服务器和授权服务器实施。</p>\n    <p>令牌可以表示一个用于检索授权信息的标识符，或者可以自包含授权信息（即令牌字符串由数据和签名组成）。客户端使用令牌时，有可能被要求提供额外的身份验证凭据。</p>\n    <p>访问令牌提供了一个抽象层，用单一的资源服务器能理解的令牌代替不同的授权结构。这种抽象使得颁发访问令牌比颁发用于获取令牌的授权许可更受限制，同时消除了资源服务器理解各种各样身份认证方法的需要。</p>\n    <p>基于资源服务器的安全要求，访问令牌可以有不同的格式、结构及采用的方法（如，加密属性）。访问令牌的属性和用于访问受保护资源的方法在RFC6750规范中定义。</p>\n    <h2>刷新令牌 (Refresh Token)</h2>\n    <p>\n      刷新令牌是用于获取访问令牌的凭据。刷新令牌由授权服务器颁发给客户端，用于在当前访问令牌失效或过期时，获取一个新的访问令牌，或者获得相等或更窄范围的额外的访问令牌（访问令牌可能具有比资源所有者所授权的更短的生命周期和更少的权限）。颁发刷新令牌是可选的，由授权服务器决定。如果授权服务器颁发刷新令牌，在颁发访问令牌时它被包含在内。</p>\n    <p>刷新令牌是一个代表由资源所有者给客户端许可的授权的字符串。该字符串通常对于客户端是不透明的。该令牌表示一个用于检索授权信息的标识符。不同于访问令牌，刷新令牌设计只与授权服务器使用，并不会发送到资源服务器。</p>\n    <pre><code> +--------+                                                        +---------------+\n |        |--(A)-- 请求访问令牌(出示授权许可)-------------------------&gt;|               |\n |        |                                                        |               |\n |        |&lt;-(B)-- 颁发访问令牌 &amp;　刷新令牌　--------------------------|               |\n |        |                                                        |               |\n |        |                                                        |               |\n |        |                                                        |               |\n |        |--(C)-- 请求访问资源             +----------+             |   授权服务器　  |\n | 客户端  |        (出示访问令牌)----------&gt;|          |             |               |\n |        |                               |          |             |               |\n |        |&lt;-(D)-- 许可访问资源 ------------|          |             |               |\n |        |                               |          |             |               |\n |        |                               |资源服务器　|             |               |\n |        |                               |          |             |               |\n |        |--(E)-- 请求访问资源             |          |             |               |\n |        |      　(出示过期访问令牌)-------&gt;|          |             |               |\n |        |                               |          |             |               |\n |        |&lt;-(F)-- 返回无效令牌错误　--------|          |             |               |\n |        |                               +----------+             |               |\n |        |                                                        |               |\n |        |--(G)-- 请求访问令牌(出示刷新令牌)-------------------------&gt;|               |\n |        |                                                        |               |\n |        |                                                        |               |\n |        |&lt;-(H)-- 颁发访问令牌    ----------------------------------|               |\n |        |                                                        |               |\n +--------+                                                        +---------------+\n\n                                图7：刷新过期的访问令牌\n</code></pre>\n\n    <ul>\n      <li>（A）客户端向授权服务器请求访问令牌并出示资源所有者的密码凭据</li>\n      <li>（B）授权服务器对客户端进行身份验证并验证授权许可，若有效则颁发访问令牌和刷新令牌</li>\n      <li>（C）客户端向资源服务器请求受保护资源并出示访问令牌进行身份验证</li>\n      <li>（D）资源服务器验证访问令牌，若有效则处理该请求</li>\n      <li>（E）如果客户端知道访问令牌已过期，跳到步骤G，否则它将请求访问资源并出示已过期的访问令牌</li>\n      <li>（F）由于访问令牌是无效的，资源服务器返回无效令牌错误。</li>\n      <li>（G）客户端通过与授权服务器进行身份验证并出示刷新令牌，请求一个新的访问令牌。</li>\n      <li>（H）授权服务器对客户端进行身份验证并验证刷新令牌，若有效则颁发一个新的访问令牌和一个新的刷新令牌（可选）</li>\n    </ul>\n    <h2>参考资料</h2>\n    <ol>\n      <li>RFC6749 – The OAuth 2.0 Authorization Framework</li>\n      <li>OAuth 2.0 授权框架</li>\n    </ol>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth3/oauth3.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth3/oauth3.component.ts ***!
  \**********************************************************************/
/*! exports provided: Oauth3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth3Component", function() { return Oauth3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Oauth3Component = /** @class */ (function () {
    function Oauth3Component() {
    }
    Oauth3Component.prototype.ngOnInit = function () {
    };
    Oauth3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oauth3',
            template: __webpack_require__(/*! ./oauth3.component.html */ "./src/app/components/subjects/oauth/oauth3/oauth3.component.html"),
            styles: [__webpack_require__(/*! ./oauth3.component.css */ "./src/app/components/subjects/oauth/oauth3/oauth3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Oauth3Component);
    return Oauth3Component;
}());



/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth4/oauth4.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth4/oauth4.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth4/oauth4.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth4/oauth4.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h1>OAuth 2.0授权框架 – 4. 客户端注册</h1>\n    <h2>客户端注册 (Client Registration)</h2>\n    <p>在协议开始前，客户端要和授权服务器进行注册，通常会涉及到最终用户与HTML注册表单的交互。</p>\n    <p>客户端注册不要求客户端与授权服务器之间的直接交互。在授权服务器支持时，注册可以依靠其他方式来建立信任关系并获取客户端的属性（如重定向URI、客户端类型）。</p>\n    <p>当注册客户端时，客户端开发者应该：</p>\n    <ul>\n      <li>指定客户端类型</li>\n      <li>提供客户端重定向URI</li>\n      <li>包含授权服务器要求的任何其他信息（如，应用名称、网址、描述、Logo图片、接受法律条款等）</li>\n    </ul>\n    <h2>客户端类型</h2>\n    <p>根据客户端与授权服务器进行安全地验证的能力（即维护客户端凭据机密性的能力），OAuth定义了两种客户端类型：</p>\n    <h3>机密客户端 (confidential)</h3>\n    <ul>\n      <li>能够维持其凭据机密性（如客户端执行在具有对客户端凭据有限访问权限的安全的服务器上），或者能够使用其他方式保证客户端身份验证的安全性。</li>\n    </ul>\n    <h3>公开客户端 (public)</h3>\n    <ul>\n      <li>不能够维持其凭据的机密性（如客户端执行在由资源所有者使用的设备上，例如已安装的本地应用程序或基于Web浏览器的应用），且不能通过其他方式保证客户端身份验证的安全性。</li>\n    </ul>\n    <p><strong>客户端类型的选择基于授权服务器的安全身份认证定义以及其对客户端凭据可接受的暴露程度。授权服务器不应该对客户端类型做假设。</strong></p>\n    <p>\n      客户端可以以分布式的组件集合实现，每一个组件具有不同的客户端类型和安全上下文（例如，一个同时具有机密的基于服务器的组件和公开的基于浏览器的组件的分布式客户端）。如果授权服务器不提供对这类客户端的支持，或不提供其注册方面的指导，客户端应该注册每个组件为一个单独的客户端。\n      本规范围绕下列客户端配置设计：</p>\n    <h3>Web应用程序 （web application）</h3>\n    <ul>\n      <li>\n        Web应用是一个运行在Web服务器上的机密客户端。资源所有者通过其使用的设备上的用户代理里渲染的HTML用户界面访问客户端。客户端凭据以及向客户端颁发的任何访问令牌都存储在Web服务器上且不会暴露给资源所有者或者被资源所有者可访问。\n      </li>\n    </ul>\n    <h3>基于用户代理的应用 （user-agent-based application）</h3>\n    <ul>\n      <li>\n        基于用户代理的应用是一个公开客户端，客户端的代码从Web服务器下载，并在资源所有者使用的设备上的用户代理（如Web浏览器）中执行。协议数据和凭据对于资源所有者是可轻易访问的。由于这些应用驻留在用户代理内，在请求授权时它们可以无缝地使用用户代理的功能。\n      </li>\n    </ul>\n    <h3>本机应用程序 （native application）</h3>\n    <ul>\n      <li>本机应用是一个安装、运行在资源所有者使用的设备上的公开客户端。协议数据和凭据对于资源所有者是可访问的。</li>\n    </ul>\n    <h2>客户端标识 （Client Identifier）</h2>\n    <ul>\n      <li>由授权服务器颁发给已注册客户端的一个代表客户端注册信息的唯一字符串。客户端标识不是一个秘密，它暴露给资源所有者并且不能单独用于客户端身份验证。客户端标识对于授权服务器是唯一的。</li>\n    </ul>\n    <h2>客户端身份验证 （Client Authentication）</h2>\n    <p>\n      如果机密客户端和授权服务器建立了适合于授权服务器的安全性要求的客户端身份验证方法，授权服务器便可以接受符合其安全要求的任何形式的客户端身份验证。机密客户端通常颁发一组客户端凭据用于与授权服务器进行身份验证（例如，密码、公/私钥对）。</p>\n    <p>授权服务器可以与公共客户端建立客户端身份验证方法。然而，授权服务器不能依靠公共客户端身份验证达到识别客户端的目的。</p>\n    <p>客户端在每次请求中不能使用一个以上的身份验证方法。</p>\n    <h3>客户端密码</h3>\n    <p>拥有客户端密码的客户端可以使用HTTP基本身份验证方案（HTTP Basic authentication\n      scheme，定义于RFC2617）与授权服务器进行身份验证。客户端标识使用“application/x-www-form-urlencoded”算法编码，编码后的值用作用户名；客户端密码使用相同的算法编码并用作密码。授权服务器必须支持HTTP基本身份验证方案，用于验证客户端的身份。</p>\n    <p>当使用密码身份验证发送请求时，授权服务器必须要求使用TLS。</p>\n    <h2>参考资料</h2>\n    <ol>\n      <li>RFC6749 – The OAuth 2.0 Authorization Framework</li>\n      <li>OAuth 2.0 授权框架</li>\n    </ol>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subjects/oauth/oauth4/oauth4.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/subjects/oauth/oauth4/oauth4.component.ts ***!
  \**********************************************************************/
/*! exports provided: Oauth4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth4Component", function() { return Oauth4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Oauth4Component = /** @class */ (function () {
    function Oauth4Component() {
    }
    Oauth4Component.prototype.ngOnInit = function () {
    };
    Oauth4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oauth4',
            template: __webpack_require__(/*! ./oauth4.component.html */ "./src/app/components/subjects/oauth/oauth4/oauth4.component.html"),
            styles: [__webpack_require__(/*! ./oauth4.component.css */ "./src/app/components/subjects/oauth/oauth4/oauth4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Oauth4Component);
    return Oauth4Component;
}());



/***/ }),

/***/ "./src/app/components/subjects/subjects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/subjects/subjects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li:hover {\r\n  background: rgba(0,0,0,0);\r\n  color: #3a7999;\r\n}\r\n\r\n.card {\r\n  margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/subjects/subjects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/subjects/subjects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>技术专题</h3>\n<br>\n<div class=\"card\" >\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">领域</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">身份和访问管理的不同领域</h6>\n\n    <ul class=\"list-group\" style=\"margin-left: 25px;\">\n      <li >\n        <span style=\"cursor: pointer;\" class=\"card-text\" >文章1</span>\n      </li>\n      <li >\n        <span style=\"cursor: pointer;\" class=\"card-text\" >文章2</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"card\" >\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">框架</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">关于不同的框架</h6>\n\n    <ul class=\"list-group\" style=\"margin-left: 25px;\">\n      <li >\n        <span routerLink=\"/subjects/oauth\" routerLinkActive=\"active\" style=\"cursor: pointer;\" class=\"card-text\" >OAuth框架</span>\n      </li>\n      <li >\n        <span style=\"cursor: pointer;\" class=\"card-text\" >文章2</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"card\" >\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">产品</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">产品和功能介绍</h6>\n\n    <ul class=\"list-group\" style=\"margin-left: 25px;\">\n      <li >\n        <span style=\"cursor: pointer;\" class=\"card-text\" >文章1</span>\n      </li>\n      <li >\n        <span style=\"cursor: pointer;\" class=\"card-text\" >文章2</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/subjects/subjects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/subjects/subjects.component.ts ***!
  \***********************************************************/
/*! exports provided: SubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function() { return SubjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubjectsComponent = /** @class */ (function () {
    function SubjectsComponent() {
    }
    SubjectsComponent.prototype.ngOnInit = function () {
    };
    SubjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subjects',
            template: __webpack_require__(/*! ./subjects.component.html */ "./src/app/components/subjects/subjects.component.html"),
            styles: [__webpack_require__(/*! ./subjects.component.css */ "./src/app/components/subjects/subjects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubjectsComponent);
    return SubjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/title-bar/title-bar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/title-bar/title-bar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/title-bar/title-bar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/title-bar/title-bar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-transparent\">\n  <img style=\"width: 70px;\" class=\"img-fluid\" src=\"../../../assets/images/logo.png\">&nbsp;\n  <a class=\"navbar-brand\" href=\"#\">安全桔子</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">首页</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/subjects\" routerLinkActive=\"active\">技术专题</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">关于</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">联系方式</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<hr>\n"

/***/ }),

/***/ "./src/app/components/title-bar/title-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/title-bar/title-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: TitleBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBarComponent", function() { return TitleBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleBarComponent = /** @class */ (function () {
    function TitleBarComponent() {
    }
    TitleBarComponent.prototype.ngOnInit = function () {
    };
    TitleBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-bar',
            template: __webpack_require__(/*! ./title-bar.component.html */ "./src/app/components/title-bar/title-bar.component.html"),
            styles: [__webpack_require__(/*! ./title-bar.component.css */ "./src/app/components/title-bar/title-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleBarComponent);
    return TitleBarComponent;
}());



/***/ }),

/***/ "./src/app/models/article.ts":
/*!***********************************!*\
  !*** ./src/app/models/article.ts ***!
  \***********************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/pipes/string-filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/string-filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: StringFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFilterPipe", function() { return StringFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringFilterPipe = /** @class */ (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (value, args) {
        return null;
    };
    StringFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\anquanjuzi\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map