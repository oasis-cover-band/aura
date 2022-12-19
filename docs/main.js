(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/bZJ":
/*!*******************************************!*\
  !*** ./src/app/farms/farm/farm.module.ts ***!
  \*******************************************/
/*! exports provided: FarmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmModule", function() { return FarmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _farm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farm.component */ "g6RT");




class FarmModule {
}
FarmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FarmModule });
FarmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FarmModule_Factory(t) { return new (t || FarmModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FarmModule, { declarations: [_farm_component__WEBPACK_IMPORTED_MODULE_2__["FarmComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_farm_component__WEBPACK_IMPORTED_MODULE_2__["FarmComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_farm_component__WEBPACK_IMPORTED_MODULE_2__["FarmComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _farm_component__WEBPACK_IMPORTED_MODULE_2__["FarmComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\aura\src\main.ts */"zUnb");


/***/ }),

/***/ "0f74":
/*!****************************************************************!*\
  !*** ./src/app/dynamic-info-services/notifications.service.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class NotificationsService {
    constructor() {
        this.notifications = [];
        this.length = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.notifications.length);
    }
    notify(data) {
        this.notifications.push(data);
        this.length.next(this.notifications.length);
        setTimeout(() => {
            if (this.length.getValue() > 0) {
                this.notifications.shift();
                this.length.next(this.notifications.length);
            }
        }, 5000);
    }
    close() {
        this.notifications.shift();
        this.length.next(this.notifications.length);
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Jgp":
/*!**********************************************************!*\
  !*** ./src/app/header/header-item/header-item.module.ts ***!
  \**********************************************************/
/*! exports provided: HeaderItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderItemModule", function() { return HeaderItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-item.component */ "z3pf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HeaderItemModule {
}
HeaderItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderItemModule });
HeaderItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderItemModule_Factory(t) { return new (t || HeaderItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderItemModule, { declarations: [_header_item_component__WEBPACK_IMPORTED_MODULE_2__["HeaderItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_header_item_component__WEBPACK_IMPORTED_MODULE_2__["HeaderItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_item_component__WEBPACK_IMPORTED_MODULE_2__["HeaderItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [
                    _header_item_component__WEBPACK_IMPORTED_MODULE_2__["HeaderItemComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3waB":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModule", function() { return InformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information.component */ "Fgt4");
/* harmony import */ var _notifications_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/notification/notification.module */ "kaMw");





class InformationModule {
}
InformationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InformationModule });
InformationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InformationModule_Factory(t) { return new (t || InformationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notifications_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InformationModule, { declarations: [_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notifications_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]], exports: [_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notifications_notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]
                ],
                exports: [
                    _information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "43Fg":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
/*! exports provided: WalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletModule", function() { return WalletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.component */ "EBTS");




class WalletModule {
}
WalletModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WalletModule });
WalletModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WalletModule_Factory(t) { return new (t || WalletModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WalletModule, { declarations: [_wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-info-services/notifications.service */ "0f74");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.component */ "xRHT");






function NotificationsComponent_app_notification_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notification", 2);
} if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", notification_r1)("index", index_r2);
} }
class NotificationsComponent {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
        this.notifications = this.notificationsService.notifications;
    }
    ngOnInit() {
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 2, vars: 1, consts: [[1, "wrapper"], [3, "data", "index", 4, "ngFor", "ngForOf"], [3, "data", "index"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationsComponent_app_notification_1_Template, 1, 2, "app-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  max-height: 0px;\n  min-height: 0px;\n  min-width: 100%;\n  max-width: 100%;\n  z-index: 9999999999999;\n  position: absolute;\n  top: 0px;\n  grid-template-areas: \"wrapper\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  pointer-events: visibleFill;\n  display: grid;\n  grid-template-areas: \"notification\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   app-notification[_ngcontent-%COMP%] {\n  grid-area: notification;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  z-index: 99999;\n  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQ0E7QUFESjtBQUVJO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQ0E7QUFEUjtBQUVRO0VBQ0ksdUJBQUE7QUFBWjtBQUVRO0VBQ0ksY0FBQTtFQUNBLG1EQUFBO0FBQVoiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBtYXgtaGVpZ2h0OjBweDtcclxuICAgIG1pbi1oZWlnaHQ6MHB4O1xyXG4gICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIHotaW5kZXg6OTk5OTk5OTk5OTk5OTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnd3JhcHBlcic7XHJcbiAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlRmlsbDtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAnbm90aWZpY2F0aW9uJztcclxuICAgICAgICBhcHAtbm90aWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOm5vdGlmaWNhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6OTk5OTk7XHJcbiAgICAgICAgICAgIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsMC41KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications',
                templateUrl: './notifications.component.html',
                styleUrls: ['./notifications.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]]
            }]
    }], function () { return [{ type: _dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] }]; }, null); })();


/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ "E21e");





const uri = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"](),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
        },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                        useFactory: createApollo,
                        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "87rV":
/*!******************************************!*\
  !*** ./src/app/farms/farms.component.ts ***!
  \******************************************/
/*! exports provided: FarmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmsComponent", function() { return FarmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _farm_farm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farm/farm.component */ "g6RT");








function FarmsComponent_app_farm_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-farm", 19);
} if (rf & 2) {
    const farm_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", farm_r2)("pid", index_r3)("@inOutAnimations", undefined);
} }
function FarmsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Farm Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "selected": a0 }; };
const _c1 = function (a0) { return { "hidden": a0 }; };
// tslint:disable:max-line-length
class FarmsComponent {
    constructor(web3, projectService) {
        this.web3 = web3;
        this.projectService = projectService;
        this.farms = this.web3.poolInfo;
        this.cellar = this.web3.cellar;
        this.project = this.projectService.project;
        this.allPools = false;
        this.masterPools = false;
        this.networkPools = false;
        this.vipPools = false;
        this.firstVipPool = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.firstSlice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.lastSlice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
    }
    ngOnInit() {
        this.searchForFirstVipPool();
    }
    turnAllOff() {
        this.allPools = false;
        this.masterPools = false;
        this.networkPools = false;
        this.vipPools = false;
    }
    toggleAllPools() {
        this.turnAllOff();
        this.allPools = true;
        this.setToAll();
    }
    toggleMasterPools() {
        this.turnAllOff();
        this.masterPools = true;
        this.setToMaster();
    }
    toggleNetworkPools() {
        this.turnAllOff();
        this.networkPools = true;
        this.setToNetwork();
    }
    toggleVipPools() {
        this.turnAllOff();
        this.vipPools = true;
        this.setToVip();
    }
    setToAll() {
        this.firstSlice.next(0);
        this.lastSlice.next(this.cellar.length.getValue());
    }
    setToMaster() {
        this.firstSlice.next(0);
        this.lastSlice.next(3); // ALWAYS 3 MASTER POOLS, TOKEN, TOKEN-NETWORK_CURRENCY LQIUIDITY, AND WRAPPED TOKEN-NETWORK_CURRENCY LQIUIDITY
    }
    setToNetwork() {
        this.searchForFirstVipPool();
        this.firstSlice.next(3); // ALWAYS 3 MASTER POOLS, TOKEN, TOKEN-NETWORK_CURRENCY LQIUIDITY, AND WRAPPED TOKEN-NETWORK_CURRENCY LQIUIDITY
        this.lastSlice.next(this.firstVipPool.getValue());
    }
    setToVip() {
        this.searchForFirstVipPool();
        this.firstSlice.next(this.firstVipPool.getValue());
        this.lastSlice.next(this.cellar.length.getValue());
    }
    searchForFirstVipPool() {
        if (this.firstVipPool.getValue() !== 0) {
            return;
        }
        this.farms.forEach((farm, index) => {
            if (this.firstVipPool.getValue() !== 0) {
                return;
            }
            if (farm.poolInfo.getValue().VIPpool === true) {
                this.firstVipPool.next(index);
                return;
            }
        });
    }
}
FarmsComponent.ɵfac = function FarmsComponent_Factory(t) { return new (t || FarmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"])); };
FarmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmsComponent, selectors: [["app-farms"]], decls: 48, vars: 50, consts: [[1, "top-bar"], ["id", "misc-0", 1, "medium-container", "split", "small"], [1, "medium-header", "small"], [1, "title"], [1, "value"], ["id", "misc-1", 1, "medium-container", "split", "small"], [1, "pools-selector"], ["id", "all-pools", 1, "pool-section", "after-info", "invert", 3, "ngClass", "click"], ["id", "all-pools", "src", "./assets/logos/pools/allpools.svg"], ["id", "master-pools", 1, "pool-section", "after-info", "invert", 3, "ngClass", "click"], ["id", "master-pools", "src", "./assets/logos/pools/auraflip.svg"], ["id", "network-pools", 1, "pool-section", "after-info", "invert", 3, "ngClass", "click"], ["id", "network-pools", "src", "./assets/logos/pools/aurabnb.svg"], ["id", "vip-pools", 1, "pool-section", "after-info", "invert", 3, "ngClass", "click"], ["id", "vip-pools", "src", "./assets/logos/pools/auraeos.svg"], [1, "wrapper", 3, "ngClass"], [3, "data", "pid", 4, "ngFor", "ngForOf"], ["class", "hidden", 4, "ngIf"], [1, "empty"], [3, "data", "pid"], [1, "hidden"], [1, "arrows"], [1, "material-icons"]], template: function FarmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rewards Since Start:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "# of Pools:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rewards This Epoch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Average Fees Per Block This Epoch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmsComponent_Template_div_click_33_listener() { return ctx.toggleAllPools(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmsComponent_Template_div_click_35_listener() { return ctx.toggleMasterPools(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmsComponent_Template_div_click_37_listener() { return ctx.toggleNetworkPools(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmsComponent_Template_div_click_39_listener() { return ctx.toggleVipPools(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FarmsComponent_app_farm_42_Template, 1, 3, "app-farm", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, FarmsComponent_div_46_Template, 12, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 14, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 16, ctx.cellar.cumulativeRewardsSinceStart) + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 18, ctx.cellar.rewardsInThisEpoch)) / 1000000000000000000), " ", ctx.project.tokenName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 22, ctx.cellar.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 26, ctx.cellar.rewardsInThisEpoch) / 1000000000000000000), " ", ctx.project.tokenName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 30, ctx.cellar.averageFeesPerBlockEpoch) / 1000000000000000000), " ", ctx.project.tokenName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.allPools === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx.masterPools === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx.networkPools === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx.vipPools === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c1, ctx.allPools === false && ctx.masterPools === false && ctx.networkPools === false && ctx.vipPools === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](43, 32, ctx.farms, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 36, ctx.firstSlice), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 38, ctx.lastSlice)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allPools === false && ctx.masterPools === false && ctx.networkPools === false && ctx.vipPools === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _farm_farm_component__WEBPACK_IMPORTED_MODULE_6__["FarmComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  grid-area: router-outlet;\n  display: grid;\n  justify-content: stretch;\n  align-content: start;\n  grid-template-rows: -webkit-max-content -webkit-max-content 1fr;\n  grid-template-rows: max-content max-content 1fr;\n  row-gap: 10px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   .naked[_ngcontent-%COMP%], .naked[_nghost-%COMP%], [_nghost-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   section.top-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 49.5% 49.5%;\n  column-gap: 10px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   section.top-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr;\n    column-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.top-bar[_ngcontent-%COMP%] {\n  row-gap: 10px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   section.wrapper.hidden[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: stretch;\n  justify-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 500px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   div.arrows[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: grid;\n  grid-template-areas: \". n1 n2 n3 n4 .\";\n  min-width: 100%;\n  grid-template-columns: 0.1fr 0.25fr 0.25fr 0.25fr 0.25fr 0.1fr;\n  justify-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   div.arrows[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  grid-area: n1;\n  transform: rotate(-35deg);\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   div.arrows[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  grid-area: n2;\n  transform: rotate(-25deg);\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   div.arrows[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  grid-area: n3;\n  transform: rotate(25deg);\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   div.arrows[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) {\n  grid-area: n4;\n  transform: rotate(35deg);\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  text-align: center;\n  justify-self: center;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.hidden[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   div.empty[_ngcontent-%COMP%] {\n  height: 300px;\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  justify-content: center;\n  justify-items: center;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section#all-pools[_ngcontent-%COMP%]:after {\n  content: \"All Pools\";\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section#master-pools[_ngcontent-%COMP%]:after {\n  content: \"Master Pools\";\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section#network-pools[_ngcontent-%COMP%]:after {\n  content: \"Network Pools\";\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section#vip-pools[_ngcontent-%COMP%]:after {\n  content: \"VIP Pools\";\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section[_ngcontent-%COMP%]:before {\n  transition: 0.4s;\n  opacity: 0;\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  left: -5px;\n  bottom: -5px;\n  grid-area: content;\n  background: #2ce4d8ff;\n  z-index: -1;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   div.pool-section.selected[_ngcontent-%COMP%]:before {\n  opacity: 1;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]   section.pools-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  max-height: 50px;\n  cursor: pointer;\n  position: relative;\n}\n@media (max-height: 600px) {\n  [_nghost-%COMP%]   section.top-bar[_ngcontent-%COMP%] {\n    font-size: 40%;\n  }\n}\n@media (max-height: 400px) {\n  [_nghost-%COMP%]   section.top-bar[_ngcontent-%COMP%] {\n    height: 0px;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhcm1zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbnRhaW5lcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUdBLCtEQUFBO0VBQUEsK0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQ05JO0VBQ0ksV0NIQTtBRldSO0FDTkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEUU47QUNQTTtFQUNJLDhCQUFBO0FEU1Y7QUNSVTtFQUNJLG1CQUFBO0FEVWQ7QUNSVTtFQUNJLGlCQUFBO0FEVWQ7QUNQTTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBRFNWO0FDUE07RUFDSSw4Q0FBQTtFQUFBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRFNWO0FDUlU7RUFDRSw4Q0FBQTtFQUFBLHNDQUFBO0FEVVo7QUNQTTtFQUNJO0lBQ0UsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RURTVjtFQ1JVO0lBQ0ksb0JBQUE7RURVZDtFQ1JVO0lBQ0ksb0JBQUE7RURVZDtBQUNGO0FDUE07RUExQ0Y7SUEyQ0ksMkJBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7RURVTjtBQUNGO0FDUkk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQU1BLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FES047QUNaTTtFQUpGO0lBS0ksK0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RURlTjtBQUNGO0FDWE07RUFDSSxrRUFBQTtFQUFBLGtEQUFBO0VBQ0EsdUJBQUE7RUFPQSxtQkFBQTtBRE9WO0FDYlU7RUFDSSxnQkFBQTtBRGVkO0FDZGM7RUFDSSxnQkFBQTtBRGdCbEI7QUNUUTtFQUNJLG1CQUFBO0FEV1o7QUNUZ0I7RUFDSSxxQkM1RVo7RUQ0RWdDLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBRXJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQzFGWjtBRnlHUjtBQ2RvQjtFQUNJLGNDcEZoQjtBRm9HUjtBQ1pZO0VBQ0ksaUJBQUE7RUFDQSxnQkNqR047RURtR00sZUFBQTtFQUlBLGdCQUFBO0VBU0EscUJDM0dSO0VEMkc0QixpQkFBQTtFQUNpRCxhQUFBO0VBQ0csNEJBQUE7RUFDeEUsb0VBQUE7RUFBc0UscURBQUE7RUFDdEUsbUhBQUE7RUFBcUgsVUFBQTtFQUNySCw2QkFBQTtFQUNBLG9DQUFBO0FET2hCO0FDekJnQjtFQUxKO0lBTVEsZUFBQTtFRDRCbEI7QUFDRjtBQzFCZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FENEJwQjtBQzFCZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FENEJwQjtBQ2xCWTtFQUNJLGVBQUE7QURvQmhCO0FDakJRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURtQlo7QUNqQlE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRG1CWjtBQ2xCWTtFQUNJLGVBQUE7QURvQmhCO0FDbkJnQjtFQUNJLGNDbklaO0FGd0pSO0FDbkJnQjtFQUNJLFdDOUlaO0FGbUtSO0FDbEJZO0VBQ0ksOEJBQUE7QURvQmhCO0FDbkJnQjtFQUNJLG1CQUFBO0FEcUJwQjtBQ25CZ0I7RUFDSSxpQkFBQTtBRHFCcEI7QUNqQmdCO0VBQ0ksZUFBQTtBRG1CcEI7QUNmUTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDJEQUFBO0VBQUEsMkNBQUE7RUFDQSxjQUFBO0FEaUJaO0FDaEJZO0VBQ0ksZUFBQTtFQUNBLGNDL0pSO0FGaUxSO0FDakJnQjtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRG1CcEI7QUNsQm9CO0VBQ0ksa0JBQUE7QURvQnhCO0FDakJnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QURtQnBCO0FDZG9CO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEZ0J4QjtBQ2Z3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRGlCNUI7QUNoQjRCO0VBQ0ksZUFBQTtBRGtCaEM7QUNmd0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURpQjVCO0FDVkk7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FEWVI7QUNWSTtFQUNJLHVDQUFBO0FEWVI7QUNWSTtFQUNJLGVBQUE7QURZUjtBQTFOSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUE0TlI7QUEzTlE7RUFMSjtJQU1RLHVCQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtFQThOVjtBQUNGO0FBNU5JO0VBQ0ksYUFBQTtBQThOUjtBQTVOSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUE4TlI7QUE3TlE7RUFDSSwwQkFBQTtBQStOWjtBQTdOUTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBK05aO0FBOU5ZO0VBQ0ksZUFBQTtBQWdPaEI7QUEvTmdCO0VBRko7SUFHUSxlQUFBO0VBa09sQjtBQUNGO0FBak9nQjtFQUxKO0lBTVEsZUFBQTtFQW9PbEI7QUFDRjtBQWxPWTtFQUNJLHFCRXZDUjtFRnVDNEIsaUJBQUE7RUFDaUQsYUFBQTtFQUNHLDRCQUFBO0VBQ3hFLG9FQUFBO0VBQXNFLHFEQUFBO0VBQ3RFLG1IQUFBO0VBQXFILFVBQUE7RUFDckgsNkJBQUE7RUFDQSxvQ0FBQTtBQXlPaEI7QUF2T1k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUNBO0VBQ0EsZUFBQTtFQUNBLDhEQUFBO0VBQ0EscUJBQUE7QUF3T2hCO0FBdk9nQjtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQXlPcEI7QUF2T2dCO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBeU9wQjtBQXZPZ0I7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7QUF5T3BCO0FBdk9nQjtFQUNJLGFBQUE7RUFDQSx3QkFBQTtBQXlPcEI7QUF0T1k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQXdPaEI7QUF2T2dCO0VBSko7SUFLUSxlQUFBO0VBME9sQjtBQUNGO0FBdE9JO0VBQ0ksYUFBQTtBQXdPUjtBQXRPSTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUF3T1I7QUF2T1E7RUFDSSxrQkFBQTtBQXlPWjtBQXZPZ0I7RUFDSSxvQkFBQTtBQXlPcEI7QUFyT2dCO0VBQ0ksdUJBQUE7QUF1T3BCO0FBbk9nQjtFQUNJLHdCQUFBO0FBcU9wQjtBQWpPZ0I7RUFDSSxvQkFBQTtBQW1PcEI7QUFoT1k7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkU5SEg7RUYrSEcsV0FBQTtFQUNBLG9CQUFBO0FBa09oQjtBQS9OZ0I7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFpT3BCO0FBN05nQjtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQStOcEI7QUEzTlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNk5aO0FBMU5JO0VBQ0k7SUFDSSxjQUFBO0VBNE5WO0FBQ0Y7QUExTkk7RUFDSTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQTROVjtBQUNGIiwiZmlsZSI6ImZhcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vY29udGFpbmVycy5zY3NzJztcclxuOmhvc3Qge1xyXG4gICAgZ3JpZC1hcmVhOnJvdXRlci1vdXRsZXQ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1jb250ZW50OnN0YXJ0O1xyXG4gICAgXHJcbiAgICBAaW5jbHVkZSBjb250YWluZXJzO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOm1heC1jb250ZW50IG1heC1jb250ZW50IDFmcjtcclxuICAgIHJvdy1nYXA6MTBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHNlY3Rpb24ud3JhcHBlciwgc2VjdGlvbi50b3AtYmFyLCBzZWN0aW9uLnBvb2xzLXNlbGVjdG9yIHtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDpzdGFydDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6NDkuNSUgNDkuNSU7XHJcbiAgICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjExMDBweCkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VjdGlvbi50b3AtYmFyIHtcclxuICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi5oaWRkZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzdHJldGNoO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGksIGgzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM5OGRjZmInLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYuYXJyb3dzIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgICAgICcuIG4xIG4yIG4zIG40IC4nO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMWZyIDAuMjVmciAwLjI1ZnIgMC4yNWZyIDAuMjVmciAwLjFmcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOm4xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTM1ZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTpuMjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC0yNWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6bjM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgyNWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6bjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2LmVtcHR5IHtcclxuICAgICAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLnBvb2xzLXNlbGVjdG9yIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICBkaXYucG9vbC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICYjYWxsLXBvb2xzIHtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBbGwgUG9vbHMnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNtYXN0ZXItcG9vbHMge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ01hc3RlciBQb29scydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmI25ldHdvcmstcG9vbHMge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ05ldHdvcmsgUG9vbHMnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiN2aXAtcG9vbHMge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1ZJUCBQb29scydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjAuMDtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDotNXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6LTVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6LTVweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTotNXB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRjb21wbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDotMTtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDo2MDBweCkge1xyXG4gICAgICAgIHNlY3Rpb24udG9wLWJhciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OjQwMHB4KSB7XHJcbiAgICAgICAgc2VjdGlvbi50b3AtYmFyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4vdGhlbWUuc2Nzcyc7XHJcbkBtaXhpbiBjb250YWluZXJze1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiRibGFjaztcclxuICAgIH1cclxuICAgIGRpdi5tZWRpdW0tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwLjI1KTtcclxuICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAmLnNwbGl0IHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0YXJ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLnVwLXVuZGVyIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDpzdGFydDtcclxuICAgICAgfVxyXG4gICAgICAmLmludmVyc2Uge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciBtYXgtY29udGVudDtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgJi5tdXNoeSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczptYXgtY29udGVudCAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTYwMHB4KSB7XHJcbiAgICAgICAgICAmLnNwbGl0LnNtYWxsIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDo0MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgcm93LWdhcDo1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5zbWFsbC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcjtcclxuICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDoxMTAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4yNSk7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgJi5tdXNoeSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnI7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICAmLmxhcmdlLWhlYWRlciwgJi5tZWRpdW0taGVhZGVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkcHJpbWFyeSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJGxpZ2h0IDAlLCAkcHJpbWFyeSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzg5ZGFmZicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMywgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIuNHJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbToycHggc29saWQgJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6NzUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuZXh0cmEtc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM5OGRjZmInLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmxhcmdlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1lZGl1bS1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczptYXgtY29udGVudCAxZnI7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAmLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmludmVyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNwbGl0IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNtYWxsLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDo1eDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAmLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFiZWwuZ3JheWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiRncmF5IWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgIH1cclxuICAgIC5uYWtlZCwgJi5uYWtlZCwgKi5uYWtlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMCkhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgKi5jbGlja2FibGUge1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG4gIH0iLCIkYmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5OiAjNWMyYTkyZmY7XHJcbiRwcmltYXJ5LW9wYXF1ZTogIzVjMmE5MjA5O1xyXG4kY29tcGxlbWVudDogIzJjZTRkOGZmO1xyXG4kcmVkOiAjZjYyYzRkO1xyXG4kZ3JlZW46ICMzY2JiM2M7XHJcbiRsaWdodDogI2ZmMmNmM2ZmO1xyXG4kZGFyazogIzVjMmE5MmZmO1xyXG4kd2hpdGU6ICNmZWZlZmU7XHJcbiRncmF5OiAjNWY1ZjVmOyJdfQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_2__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farms',
                templateUrl: './farms.component.html',
                styleUrls: ['./farms.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["inOutAnimations"]]
            }]
    }], function () { return [{ type: _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] }, { type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "ySb0");




class HomeComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.name = this.projectService.project.name;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 1, consts: [[1, "large"], [1, "wrapper"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logo", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple. Self-Perpetuated. Sustainable. Inflationless.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  justify-content: space-around;\n  align-content: center;\n  grid-template-columns: 200px 1fr;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%] {\n    grid-template-rows: -webkit-max-content -webkit-max-content;\n    grid-template-rows: max-content max-content;\n    grid-template-columns: 1fr;\n    justify-items: start;\n  }\n}\n[_nghost-%COMP%]   app-logo[_ngcontent-%COMP%] {\n  justify-self: center;\n}\n[_nghost-%COMP%]   div.wrapper[_ngcontent-%COMP%] {\n  align-self: center;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 8rem;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFFSTtFQU5KO0lBUUksMkRBQUE7SUFBQSwyQ0FBQTtJQUNBLDBCQUFBO0lBQ0Esb0JBQUE7RUFBRjtBQUNGO0FBQ0k7RUFDSSxvQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICAvLyBncmlkLWFyZWE6cm91dGVyLW91dGxldDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgICAgIFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczpzdGFydDtcclxuICAgIH1cclxuICAgIGFwcC1sb2dvIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGl2LndyYXBwZXIge1xyXG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTo4cmVtO1xyXG4gICAgfVxyXG4gICAgaDEsIGg1IHtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "AJc3":
/*!*******************************************************************!*\
  !*** ./src/app/system-notification/system-notification.module.ts ***!
  \*******************************************************************/
/*! exports provided: SystemNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemNotificationModule", function() { return SystemNotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _system_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-notification.component */ "H5GV");




class SystemNotificationModule {
}
SystemNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SystemNotificationModule });
SystemNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SystemNotificationModule_Factory(t) { return new (t || SystemNotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SystemNotificationModule, { declarations: [_system_notification_component__WEBPACK_IMPORTED_MODULE_2__["SystemNotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_system_notification_component__WEBPACK_IMPORTED_MODULE_2__["SystemNotificationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemNotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_system_notification_component__WEBPACK_IMPORTED_MODULE_2__["SystemNotificationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _system_notification_component__WEBPACK_IMPORTED_MODULE_2__["SystemNotificationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B0jb":
/*!*******************************************!*\
  !*** ./src/app/roadmap/roadmap.module.ts ***!
  \*******************************************/
/*! exports provided: RoadmapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapModule", function() { return RoadmapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roadmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadmap.component */ "u6LD");




class RoadmapModule {
}
RoadmapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoadmapModule });
RoadmapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoadmapModule_Factory(t) { return new (t || RoadmapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoadmapModule, { declarations: [_roadmap_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_roadmap_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_roadmap_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _roadmap_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "DnET":
/*!***************************************!*\
  !*** ./src/app/farms/farms.module.ts ***!
  \***************************************/
/*! exports provided: FarmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmsModule", function() { return FarmsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _farms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farms.component */ "87rV");
/* harmony import */ var _farm_farm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farm/farm.component */ "g6RT");
/* harmony import */ var _farm_farm_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./farm/farm.module */ "/bZJ");






class FarmsModule {
}
FarmsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FarmsModule });
FarmsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FarmsModule_Factory(t) { return new (t || FarmsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _farm_farm_module__WEBPACK_IMPORTED_MODULE_4__["FarmModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FarmsModule, { declarations: [_farms_component__WEBPACK_IMPORTED_MODULE_2__["FarmsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _farm_farm_module__WEBPACK_IMPORTED_MODULE_4__["FarmModule"]], exports: [_farm_farm_component__WEBPACK_IMPORTED_MODULE_3__["FarmComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_farms_component__WEBPACK_IMPORTED_MODULE_2__["FarmsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _farm_farm_module__WEBPACK_IMPORTED_MODULE_4__["FarmModule"]
                ],
                exports: [
                    _farm_farm_component__WEBPACK_IMPORTED_MODULE_3__["FarmComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "EBTS":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WalletComponent_section_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletComponent_section_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r10.user.address), 0, 5), "...", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r10.user.address), 37, 42), " ");
} }
function WalletComponent_section_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r11.user.address), 0, 5), "...", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r11.user.address), 37, 42), " ");
} }
function WalletComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_section_1_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.viewBalances(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_balance_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WalletComponent_section_1_span_5_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WalletComponent_section_1_span_6_Template, 6, 14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WalletComponent_section_1_span_7_Template, 6, 14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewingBalances);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.viewingBalances);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.viewingBalances);
} }
function WalletComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_section_3_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.connectWallet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Connect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WalletComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bnbBalance_r16 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.project.networkCurrency, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, bnbBalance_r16 / 1000000000000000000, "1.2-2"), " ");
} }
function WalletComponent_ng_container_8_section_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tokenSymbol_r25 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, tokenSymbol_r25, 0, 4), " ");
} }
function WalletComponent_ng_container_8_section_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userBalance_r26 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, userBalance_r26 / 1000000000000000000, "1.2-2"), " ");
} }
function WalletComponent_ng_container_8_section_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WalletComponent_ng_container_8_section_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WalletComponent_ng_container_8_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_ng_container_8_section_1_div_1_Template, 4, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WalletComponent_ng_container_8_section_1_div_3_Template, 4, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WalletComponent_ng_container_8_section_1_ng_template_5_Template, 1, 1, "ng-template", 5, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WalletComponent_ng_container_8_section_1_ng_template_7_Template, 1, 1, "ng-template", 5, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const poolItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, poolItem_r17.token.symbol))("ngIfElse", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, poolItem_r17.userBalance))("ngIfElse", _r23);
} }
function WalletComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_ng_container_8_section_1_Template, 9, 8, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.user.address) !== "");
} }
function WalletComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_section_9_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.showPoolTokens(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Show Balances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WalletComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_section_11_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.showPoolTokens(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hide Balances ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WalletComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_section_13_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WalletComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 29);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
class WalletComponent {
    constructor(web3, projectService) {
        this.web3 = web3;
        this.projectService = projectService;
        this.user = this.web3.user;
        this.opened = true;
        this.project = this.projectService.project;
        this.poolInfo = this.web3.poolInfo;
        this.viewingBalances = false;
        this.showingPoolTokensStyle = false;
        this.showingPoolTokens = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    connectWallet() {
        this.web3.connectWallet();
    }
    showPoolTokens() {
        this.showingPoolTokensStyle = !this.showingPoolTokensStyle;
        this.showingPoolTokens.emit(this.showingPoolTokensStyle);
    }
    viewBalances() {
        // this.showingPoolTokensStyle = true;
        // this.showingPoolTokens.emit(true);
        this.viewingBalances = !this.viewingBalances;
    }
    logout() {
        this.web3.logout();
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"])); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], hostVars: 4, hostBindings: function WalletComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("viewing", ctx.viewingBalances)("showing-pool", ctx.showingPoolTokensStyle);
    } }, outputs: { showingPoolTokens: "showingPoolTokens" }, decls: 17, vars: 21, consts: [[1, "balances"], ["class", "balance", "id", "wallet", 3, "click", 4, "ngIf"], ["class", "balance", "id", "bnb", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "balance pool-balance-switch", 3, "click", 4, "ngIf"], ["class", "greyed-bar balance"], ["greyed", ""], ["id", "wallet", 1, "balance", 3, "click"], ["id", "address"], [1, "material-icons"], ["id", "balance"], ["class", "mobile", 4, "ngIf"], ["class", "non-mobile", 4, "ngIf"], [4, "ngIf"], [1, "mobile"], [1, "non-mobile"], [1, "material-icons", "light"], ["id", "bnb", 1, "balance"], ["class", "balance pool-balance", 4, "ngIf"], [1, "balance", "pool-balance"], ["id", "address", 4, "ngIf", "ngIfElse"], ["id", "balance", 4, "ngIf", "ngIfElse"], ["greyeda", ""], ["greyedn", ""], ["id", "address", 1, "greyed-bar", "balance"], ["id", "balance", 1, "greyed-bar", "balance"], [1, "balance", "pool-balance-switch", 3, "click"], [1, "shiny"], [1, "small"], [1, "greyed-bar", "balance"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_section_1_Template, 8, 4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WalletComponent_section_3_Template, 7, 1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WalletComponent_section_5_Template, 8, 6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WalletComponent_ng_container_8_Template, 3, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WalletComponent_section_9_Template, 8, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WalletComponent_section_11_Template, 8, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WalletComponent_section_13_Template, 8, 1, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WalletComponent_ng_template_15_Template, 1, 1, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx.user.address) !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx.user.address) === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx.user.address) !== "" && ctx.showingPoolTokensStyle && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx.user.bnbBalance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.poolInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, ctx.user.address) && !ctx.showingPoolTokensStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 17, ctx.user.address) && ctx.showingPoolTokensStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, ctx.user.address) !== "" && !ctx.showingPoolTokensStyle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-areas: \". . .\" \". balances .\" \". . .\";\n  grid-template-columns: 5px 1fr 5px;\n  grid-template-rows: 0px 1fr 0px;\n  row-gap: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-content: start;\n  align-items: start;\n}\n[_nghost-%COMP%]   i.light[_ngcontent-%COMP%] {\n  color: #ff2cf3ff;\n}\n[_nghost-%COMP%]   span.mobile[_ngcontent-%COMP%] {\n  display: none !important;\n}\n[_nghost-%COMP%]   section.balances[_ngcontent-%COMP%] {\n  grid-area: balances;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  row-gap: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-items: start;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%] {\n  pointer-events: visible;\n  display: grid;\n  grid-template-areas: \". . . .\" \". address balance .\" \". . . .\";\n  grid-template-columns: 5px 45px 1fr 5px;\n  grid-template-rows: 10px -webkit-max-content 10px;\n  grid-template-rows: 10px max-content 10px;\n  column-gap: 2px;\n  cursor: pointer;\n  align-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 4px;\n}\n@media (max-height: 800px) {\n  [_nghost-%COMP%]   section.balance[_ngcontent-%COMP%] {\n    grid-template-rows: 2px 1fr 2px;\n  }\n}\n[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%]   div#address[_ngcontent-%COMP%] {\n  grid-area: address;\n}\n[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%]   div#address[_ngcontent-%COMP%]   span.shiny[_ngcontent-%COMP%] {\n  color: #ff2cf3ff;\n}\n[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%]   div#balance[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  min-height: 100%;\n  grid-area: balance;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  color: #fefefe;\n  border-radius: 4px;\n  text-align: center;\n}\n[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%]   div#balance[_ngcontent-%COMP%]   span.small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n[_nghost-%COMP%]   section.balance.pool-balance[_ngcontent-%COMP%] {\n  height: 0px;\n  opacity: 0;\n  transition: 0.4s;\n}\n.showing-pool[_nghost-%COMP%]   section.balance.pool-balance[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: max-content;\n  opacity: 1;\n}\n@media (max-width: 600px), (max-height: 800px) {\n  [_nghost-%COMP%] {\n    border-radius: 0px 0px 8px 8px;\n    overflow: hidden;\n  }\n  [_nghost-%COMP%]   section.balance[_ngcontent-%COMP%], [_nghost-%COMP%]   div.balance[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  [_nghost-%COMP%]   section#wallet[_ngcontent-%COMP%] {\n    display: grid !important;\n  }\n  .viewing[_nghost-%COMP%] {\n    z-index: 9999999999;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n    background: #000;\n  }\n  .viewing[_nghost-%COMP%]   section.balance[_ngcontent-%COMP%] {\n    display: grid !important;\n  }\n  [_nghost-%COMP%]   span.non-mobile[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  [_nghost-%COMP%]   span.mobile[_ngcontent-%COMP%] {\n    display: grid !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdhbGxldC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1EQUNBO0VBR0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLUTtFQUNJLGdCQ1RKO0FETVI7QUFNSTtFQUNJLHdCQUFBO0FBSlI7QUFNSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBSlI7QUFNSTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhEQUNBO0VBR0EsdUNBQUE7RUFDQSxpREFBQTtFQUFBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBUVE7RUFmSjtJQWdCUSwrQkFBQTtFQUxWO0FBQ0Y7QUFNUTtFQUNJLG9CQUFBO0FBSlo7QUFPWTtFQUNJLGtCQUFBO0FBTGhCO0FBT29CO0VBQ0ksZ0JDbkRoQjtBRDhDUjtBQVNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQzVEUjtFRDRENEIsaUJBQUE7RUFDaUQsYUFBQTtFQUNHLDRCQUFBO0VBQ3hFLG9FQUFBO0VBQXNFLHFEQUFBO0VBQ3RFLG1IQUFBO0VBQXFILFVBQUE7RUFDckgsY0MvRFI7RURnRVEsa0JBQUE7RUFDQSxrQkFBQTtBQUZoQjtBQUlvQjtFQUNJLGlCQUFBO0FBRnhCO0FBc0JRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXlCWTtFQUNJLDJCQUFBO0VBQUEsbUJBQUE7RUFDQSxVQUFBO0FBdkJoQjtBQTRCSTtFQTlHSjtJQStHUSw4QkFBQTtJQUNBLGdCQUFBO0VBekJOO0VBMEJNO0lBQ0Msd0JBQUE7RUF4QlA7RUEwQk07SUFDSSx3QkFBQTtFQXhCVjtFQTBCTTtJQUNJLG1CQUFBO0lBQ0EsK0JBQUE7SUFBQSw0QkFBQTtJQUFBLHVCQUFBO0lBQ0EsZ0JDM0hKO0VEbUdOO0VBeUJVO0lBQ0Msd0JBQUE7RUF2Qlg7RUEwQk07SUFDSSx3QkFBQTtFQXhCVjtFQTBCTTtJQUNJLHdCQUFBO0VBeEJWO0FBQ0YiLCJmaWxlIjoid2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiBiYWxhbmNlcyAuJ1xyXG4gICAgJy4gLiAuJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXB4IDFmciA1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBweCAxZnIgMHB4O1xyXG4gICAgcm93LWdhcDoxMHB4O1xyXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczpzdGFydDtcclxuICAgIGkge1xyXG4gICAgICAgICYubGlnaHQge1xyXG4gICAgICAgICAgICBjb2xvcjokbGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Bhbi5tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLmJhbGFuY2VzIHtcclxuICAgICAgICBncmlkLWFyZWE6YmFsYW5jZXM7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOm1heC1jb250ZW50O1xyXG4gICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6c3RhcnQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDpzdGFydDtcclxuICAgIH1cclxuICAgIHNlY3Rpb24uYmFsYW5jZSB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgJy4gLiAuIC4nXHJcbiAgICAgICAgJy4gYWRkcmVzcyBiYWxhbmNlIC4nXHJcbiAgICAgICAgJy4gLiAuIC4nO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXB4IDQ1cHggMWZyIDVweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcHggbWF4LWNvbnRlbnQgMTBweDtcclxuICAgICAgICBjb2x1bW4tZ2FwOjJweDtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC40KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6ODAwcHgpIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycHggMWZyIDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAmI2FkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOmFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAmLnNoaW55IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNiYWxhbmNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6YmFsYW5jZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM5OGRjZmInLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYjd2FsbGV0IHtcclxuICAgICAgICAgICAgLy8gZ3JpZC1hcmVhOndhbGxldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiNibmIge1xyXG4gICAgICAgICAgICAvLyBncmlkLWFyZWE6Ym5iO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmI2F1cmEge1xyXG4gICAgICAgICAgICAvLyBncmlkLWFyZWE6YXVyYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiNmbGlwd2JuYiB7XHJcbiAgICAgICAgICAgIC8vIGdyaWQtYXJlYTpmbGlwd2JuYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiN3ZmxpcHdibmIge1xyXG4gICAgICAgICAgICAvLyBncmlkLWFyZWE6d2ZsaXB3Ym5iO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnBvb2wtYmFsYW5jZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjowLjRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuc2hvd2luZy1wb29sIHtcclxuICAgICAgICBzZWN0aW9uLmJhbGFuY2Uge1xyXG4gICAgICAgICAgICAmLnBvb2wtYmFsYW5jZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6bWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBXSEVOIE9OIE1PQklMRVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpLCAobWF4LWhlaWdodDo4MDBweCkge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgc2VjdGlvbi5iYWxhbmNlLCBkaXYuYmFsYW5jZSB7XHJcbiAgICAgICAgIGRpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlY3Rpb24jd2FsbGV0IHtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi52aWV3aW5nIHtcclxuICAgICAgICAgICAgei1pbmRleDo5OTk5OTk5OTk5O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiRibGFjaztcclxuICAgICAgICAgICAgc2VjdGlvbi5iYWxhbmNlIHtcclxuICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZCFpbXBvcnRhbnQ7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5ub24tbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5tb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICM1YzJhOTJmZjtcclxuJHByaW1hcnktb3BhcXVlOiAjNWMyYTkyMDk7XHJcbiRjb21wbGVtZW50OiAjMmNlNGQ4ZmY7XHJcbiRyZWQ6ICNmNjJjNGQ7XHJcbiRncmVlbjogIzNjYmIzYztcclxuJGxpZ2h0OiAjZmYyY2YzZmY7XHJcbiRkYXJrOiAjNWMyYTkyZmY7XHJcbiR3aGl0ZTogI2ZlZmVmZTtcclxuJGdyYXk6ICM1ZjVmNWY7Il19 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet',
                templateUrl: './wallet.component.html',
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]],
                styleUrls: ['./wallet.component.scss']
            }]
    }], function () { return [{ type: _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }]; }, { viewingBalances: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.viewing']
        }], showingPoolTokensStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.showing-pool']
        }], showingPoolTokens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Fgt4":
/*!******************************************************!*\
  !*** ./src/app/information/information.component.ts ***!
  \******************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifications/notification/notification.component */ "xRHT");





function InformationComponent_app_notification_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notification", 3);
} if (rf & 2) {
    const projectInformationSection_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", projectInformationSection_r1)("static", true);
} }
class InformationComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.projectInformation = this.projectService.projectInformation;
    }
    ngOnInit() {
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], decls: 3, vars: 1, consts: [[1, "wrapper"], [3, "data", "static", 4, "ngFor", "ngForOf"], [1, "empty"], [3, "data", "static"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InformationComponent_app_notification_1_Template, 1, 2, "app-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectInformation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _notifications_notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]], styles: ["[_nghost-%COMP%] {\n  grid-area: router-outlet;\n  display: grid;\n  grid-template-areas: \". . .\" \". wrapper .\" \". . .\";\n  grid-template-columns: 0px 1fr 0px;\n  grid-template-rows: 0px 1fr 0px;\n  justify-content: space-around;\n  justify-items: center;\n  align-items: start;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  min-width: 100%;\n  grid-area: wrapper;\n  display: grid;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   app-notification[_ngcontent-%COMP%] {\n  grid-area: initial;\n}\n[_nghost-%COMP%]   div.empty[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQ0E7RUFHQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUZSO0FBR1E7RUFDSSxrQkFBQTtBQURaO0FBSUk7RUFDSSxpQkFBQTtBQUZSIiwiZmlsZSI6ImluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vY29udGFpbmVycy5zY3NzJztcclxuOmhvc3Qge1xyXG4gICAgZ3JpZC1hcmVhOnJvdXRlci1vdXRsZXQ7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJy4gLiAuJ1xyXG4gICAgJy4gd3JhcHBlciAuJ1xyXG4gICAgJy4gLiAuJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMHB4IDFmciAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MHB4IDFmciAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6c3RhcnQ7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIHNlY3Rpb24ud3JhcHBlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgZ3JpZC1hcmVhOndyYXBwZXI7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGFwcC1ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6aW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYuZW1wdHkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MzAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-information',
                templateUrl: './information.component.html',
                styleUrls: ['./information.component.scss']
            }]
    }], function () { return [{ type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "H5GV":
/*!**********************************************************************!*\
  !*** ./src/app/system-notification/system-notification.component.ts ***!
  \**********************************************************************/
/*! exports provided: SystemNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemNotificationComponent", function() { return SystemNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var _dynamic_info_services_now_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dynamic-info-services/now.service */ "unxH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SystemNotificationComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemNotificationComponent_section_0_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goClaim(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You have tokens to claim from the LGE. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SystemNotificationComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemNotificationComponent_section_5_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You must connect to ", ctx_r1.networkName, ". ");
} }
class SystemNotificationComponent {
    constructor(web3, nowService, router, project) {
        this.web3 = web3;
        this.nowService = nowService;
        this.router = router;
        this.project = project;
        this.tokensToClaim = this.web3.lge.user.contribution;
        this.ended = this.web3.lge.calculatedEnd;
        this.now = this.nowService.now;
        this.currentChain = this.web3.user.chainId;
        this.projectChain = this.project.project.chainId;
        this.networkName = this.project.project.networkName;
        this.opened = true;
    }
    ngOnInit() {
    }
    goClaim() {
        this.router.navigateByUrl('lge');
    }
    close() {
        this.opened = false;
    }
}
SystemNotificationComponent.ɵfac = function SystemNotificationComponent_Factory(t) { return new (t || SystemNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_now_service__WEBPACK_IMPORTED_MODULE_3__["NowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"])); };
SystemNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemNotificationComponent, selectors: [["app-system-notification"]], decls: 7, vars: 12, consts: [["class", "wrapper", 3, "click", 4, "ngIf"], [1, "wrapper", 3, "click"], [1, "medium-container", "inverse", "mushy"], [1, "material-icons"], [1, "message"]], template: function SystemNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SystemNotificationComponent_section_0_Template, 6, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SystemNotificationComponent_section_5_Template, 6, 2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.tokensToClaim) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.now) > _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.ended) * 1000 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.currentChain) === ctx.projectChain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx.currentChain) !== ctx.projectChain && ctx.opened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  min-width: 100%;\n  max-height: 100px;\n  min-height: 100px;\n  grid-area: router-outlet;\n  display: grid;\n  justify-content: space-around;\n  align-content: center;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  grid-template-areas: \"wrapper\";\n  pointer-events: none;\n  z-index: 999999998;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: all;\n  grid-area: wrapper;\n  background: #000;\n  display: grid;\n  grid-template-columns: 20px 1fr 20px;\n  grid-template-rows: 20px 1fr 20px;\n  grid-template-areas: \". . .\" \". container .\" \". . .\";\n  border-radius: 8px;\n  align-content: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   .naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  grid-area: container;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN5c3RlbS1ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWUuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250YWluZXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUlBLGtCQUFBO0FBSko7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JDdkJBO0VEd0JBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0RBQ0E7RUFHQSxrQkFBQTtFQWNBLHFCQUFBO0FBakJSO0FFMUJJO0VBQ0ksV0RIQTtBRCtCUjtBRTFCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUY0Qk47QUUzQk07RUFDSSw4QkFBQTtBRjZCVjtBRTVCVTtFQUNJLG1CQUFBO0FGOEJkO0FFNUJVO0VBQ0ksaUJBQUE7QUY4QmQ7QUUzQk07RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUY2QlY7QUUzQk07RUFDSSw4Q0FBQTtFQUFBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRjZCVjtBRTVCVTtFQUNFLDhDQUFBO0VBQUEsc0NBQUE7QUY4Qlo7QUUzQk07RUFDSTtJQUNFLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSxhQUFBO0VGNkJWO0VFNUJVO0lBQ0ksb0JBQUE7RUY4QmQ7RUU1QlU7SUFDSSxvQkFBQTtFRjhCZDtBQUNGO0FFM0JNO0VBMUNGO0lBMkNJLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSxZQUFBO0VGOEJOO0FBQ0Y7QUU1Qkk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQU1BLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGeUJOO0FFaENNO0VBSkY7SUFLSSwrQkFBQTtJQUNBLDBCQUFBO0lBQ0EsYUFBQTtFRm1DTjtBQUNGO0FFL0JNO0VBQ0ksa0VBQUE7RUFBQSxrREFBQTtFQUNBLHVCQUFBO0VBT0EsbUJBQUE7QUYyQlY7QUVqQ1U7RUFDSSxnQkFBQTtBRm1DZDtBRWxDYztFQUNJLGdCQUFBO0FGb0NsQjtBRTdCUTtFQUNJLG1CQUFBO0FGK0JaO0FFN0JnQjtFQUNJLHFCRDVFWjtFQzRFZ0MsaUJBQUE7RUFDOEMsYUFBQTtFQUNHLDRCQUFBO0VBQ3JFLG9FQUFBO0VBQW1FLHFEQUFBO0VBQ25FLG1IQUFBO0VBQXFILFVBQUE7RUFFckgsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdEMUZaO0FENkhSO0FFbENvQjtFQUNJLGNEcEZoQjtBRHdIUjtBRWhDWTtFQUNJLGlCQUFBO0VBQ0EsZ0JEakdOO0VDbUdNLGVBQUE7RUFJQSxnQkFBQTtFQVNBLHFCRDNHUjtFQzJHNEIsaUJBQUE7RUFDaUQsYUFBQTtFQUNHLDRCQUFBO0VBQ3hFLG9FQUFBO0VBQXNFLHFEQUFBO0VBQ3RFLG1IQUFBO0VBQXFILFVBQUE7RUFDckgsNkJBQUE7RUFDQSxvQ0FBQTtBRjJCaEI7QUU3Q2dCO0VBTEo7SUFNUSxlQUFBO0VGZ0RsQjtBQUNGO0FFOUNnQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUZnRHBCO0FFOUNnQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUZnRHBCO0FFdENZO0VBQ0ksZUFBQTtBRndDaEI7QUVyQ1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRnVDWjtBRXJDUTtFQUNJLGFBQUE7RUFDQSw4Q0FBQTtFQUFBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FGdUNaO0FFdENZO0VBQ0ksZUFBQTtBRndDaEI7QUV2Q2dCO0VBQ0ksY0RuSVo7QUQ0S1I7QUV2Q2dCO0VBQ0ksV0Q5SVo7QUR1TFI7QUV0Q1k7RUFDSSw4QkFBQTtBRndDaEI7QUV2Q2dCO0VBQ0ksbUJBQUE7QUZ5Q3BCO0FFdkNnQjtFQUNJLGlCQUFBO0FGeUNwQjtBRXJDZ0I7RUFDSSxlQUFBO0FGdUNwQjtBRW5DUTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDJEQUFBO0VBQUEsMkNBQUE7RUFDQSxjQUFBO0FGcUNaO0FFcENZO0VBQ0ksZUFBQTtFQUNBLGNEL0pSO0FEcU1SO0FFckNnQjtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBRnVDcEI7QUV0Q29CO0VBQ0ksa0JBQUE7QUZ3Q3hCO0FFckNnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUZ1Q3BCO0FFbENvQjtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRm9DeEI7QUVuQ3dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FGcUM1QjtBRXBDNEI7RUFDSSxlQUFBO0FGc0NoQztBRW5Dd0I7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUZxQzVCO0FFOUJJO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtBRmdDUjtBRTlCSTtFQUNJLHVDQUFBO0FGZ0NSO0FFOUJJO0VBQ0ksZUFBQTtBRmdDUjtBQXpOUTtFQUNJLGVBQUE7RUFDQSxxQkM1Qko7RUQ0QndCLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QUFnT1o7QUE5TlE7RUFDSSxvQkFBQTtBQWdPWiIsImZpbGUiOiJzeXN0ZW0tbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uL2NvbnRhaW5lcnMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgICBncmlkLWFyZWE6cm91dGVyLW91dGxldDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd3cmFwcGVyJztcclxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgICAqIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIHotaW5kZXg6OTk5OTk5OTk4O1xyXG4gICAgc2VjdGlvbi53cmFwcGVyIHtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czphbGw7XHJcbiAgICAgICAgQGluY2x1ZGUgY29udGFpbmVycztcclxuICAgICAgICBncmlkLWFyZWE6d3JhcHBlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiRibGFjaztcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciAyMHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjBweCAxZnIgMjBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICAnLiAuIC4nXHJcbiAgICAgICAgJy4gY29udGFpbmVyIC4nXHJcbiAgICAgICAgJy4gLiAuJztcclxuICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzg5ZGFmZicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2Lm1lZGl1bS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6Y29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG59IiwiJGJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeTogIzVjMmE5MmZmO1xyXG4kcHJpbWFyeS1vcGFxdWU6ICM1YzJhOTIwOTtcclxuJGNvbXBsZW1lbnQ6ICMyY2U0ZDhmZjtcclxuJHJlZDogI2Y2MmM0ZDtcclxuJGdyZWVuOiAjM2NiYjNjO1xyXG4kbGlnaHQ6ICNmZjJjZjNmZjtcclxuJGRhcms6ICM1YzJhOTJmZjtcclxuJHdoaXRlOiAjZmVmZWZlO1xyXG4kZ3JheTogIzVmNWY1ZjsiLCJAaW1wb3J0ICcuL3RoZW1lLnNjc3MnO1xyXG5AbWl4aW4gY29udGFpbmVyc3tcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICB9XHJcbiAgICBkaXYubWVkaXVtLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4yNSk7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgJi5zcGxpdCB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi51cC11bmRlciB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6c3RhcnQ7XHJcbiAgICAgIH1cclxuICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICYubXVzaHkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE2MDBweCkge1xyXG4gICAgICAgICAgJi5zcGxpdC5zbWFsbCB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgIHJvdy1nYXA6NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYuc21hbGwtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnI7XHJcbiAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTEwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuMjUpO1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICYubXVzaHkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyO1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgJi5sYXJnZS1oZWFkZXIsICYubWVkaXVtLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM4OWRhZmYnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMsIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyLjRyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRibGFjaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0Ojc1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6Mi4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmV4dHJhLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg5ZmZiMCcsIGVuZENvbG9yc3RyPScjOThkY2ZiJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5sYXJnZS1oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZWRpdW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zcGxpdCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zbWFsbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6NXg7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgJGxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLWdhcDo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVsLmdyYXllZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDokZ3JheSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICB9XHJcbiAgICAubmFrZWQsICYubmFrZWQsICoubmFrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDApIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICouY2xpY2thYmxlIHtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuICB9Il19 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system-notification',
                templateUrl: './system-notification.component.html',
                styleUrls: ['./system-notification.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]]
            }]
    }], function () { return [{ type: _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: _dynamic_info_services_now_service__WEBPACK_IMPORTED_MODULE_3__["NowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "H6Li":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "fECr");
/* harmony import */ var _header_item_header_item_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-item/header-item.module */ "2Jgp");
/* harmony import */ var _wallet_wallet_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wallet/wallet.module */ "43Fg");






class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _header_item_header_item_module__WEBPACK_IMPORTED_MODULE_3__["HeaderItemModule"],
            _wallet_wallet_module__WEBPACK_IMPORTED_MODULE_4__["WalletModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _header_item_header_item_module__WEBPACK_IMPORTED_MODULE_3__["HeaderItemModule"],
        _wallet_wallet_module__WEBPACK_IMPORTED_MODULE_4__["WalletModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _header_item_header_item_module__WEBPACK_IMPORTED_MODULE_3__["HeaderItemModule"],
                    _wallet_wallet_module__WEBPACK_IMPORTED_MODULE_4__["WalletModule"]
                ],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "IrDT":
/*!******************************************!*\
  !*** ./src/app/pipe/pipes/round.pipe.ts ***!
  \******************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RoundPipe {
    transform(value) {
        return Math.floor(value);
    }
}
RoundPipe.ɵfac = function RoundPipe_Factory(t) { return new (t || RoundPipe)(); };
RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "round", type: RoundPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoundPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'round'
            }]
    }], null, null); })();


/***/ }),

/***/ "J1Ni":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: routerAnimations, inOutAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimations", function() { return routerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inOutAnimations", function() { return inOutAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const routerAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100vw)' }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.55s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100vw)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.15s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.05s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100vw)', opacity: 1 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.55s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0vw)' }))
        ], { optional: true })
    ])
]);
const inOutAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('inOutAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "9vUh");



class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 1, vars: 0, template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["[_nghost-%COMP%] {\n  grid-area: router-outlet;\n  display: grid;\n  justify-content: space-around;\n  align-content: center;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFBQSwrQkFBQTtBQUNKIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBncmlkLWFyZWE6cm91dGVyLW91dGxldDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PpLr":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "fp1T");
/* harmony import */ var _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.module */ "vKQO");





class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]
                ],
                exports: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_chart_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-chart/dashboard-chart.component */ "W0I9");







function DashboardComponent_app_dashboard_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-chart", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.exchange.dayData));
} }
function DashboardComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Awaiting Exchange Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Volume ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const volume_r23 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(in ", ctx_r2.project.tokenName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, volume_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.project.tokenName);
} }
function DashboardComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Volume ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const volumeNetworkCurrency_r24 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(in W", ctx_r3.project.networkCurrency, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, volumeNetworkCurrency_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("w", ctx_r3.project.networkCurrency, "");
} }
function DashboardComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Volume ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const volumeUSD_r25 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, volumeUSD_r25));
} }
function DashboardComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function DashboardComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Rewards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rewardsSinceStart_r26 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(in ", ctx_r7.project.tokenName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, (rewardsSinceStart_r26 + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, ctx_r7.vault.rewardsInThisEpoch)) / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.project.tokenName);
} }
function DashboardComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Rewards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceInUSD_r27 = ctx.ngIf;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx_r8.vault.cumulativeRewardsSinceStart) + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx_r8.vault.rewardsInThisEpoch)) / 1000000000000000000 * priceInUSD_r27));
} }
function DashboardComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function DashboardComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Marketcap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(total)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceInUSD_r28 = ctx.ngIf;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx_r11.token.totalSupply) / 1000000000000000000 * priceInUSD_r28));
} }
function DashboardComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Marketcap ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(circulating)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceInUSD_r29 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx_r12.token.totalSupply) / 1000000000000000000 * priceInUSD_r29));
} }
function DashboardComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function DashboardComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Supply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(total)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const totalSupply_r30 = ctx.ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, totalSupply_r30 / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.project.tokenName);
} }
function DashboardComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Supply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(circulating)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const totalSupply_r31 = ctx.ngIf;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, totalSupply_r31 / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.project.tokenName);
} }
function DashboardComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function DashboardComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(in USD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceInUSD_r32 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, priceInUSD_r32 / 1000000000000000000));
} }
function DashboardComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceInNetworkCurrency_r33 = ctx.ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(in W", ctx_r20.project.networkCurrency, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, priceInNetworkCurrency_r33, "0.8-8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("w", ctx_r20.project.networkCurrency, "");
} }
function DashboardComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
class DashboardComponent {
    constructor(web3, projectService) {
        this.web3 = web3;
        this.projectService = projectService;
        this.exchange = this.web3.exchange;
        this.token = this.web3.token;
        this.vault = this.web3.cellar;
        this.project = this.projectService.project;
        this.priceInUSD = this.web3.apyCalculator.grapes.priceInUSD;
        this.priceInNetworkCurrency = this.web3.apyCalculator.grapes.priceInNetworkCurrency;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 55, vars: 50, consts: [[1, "wrapper", "naked"], ["id", "chart", 3, "data", 4, "ngIf"], ["id", "chart", 4, "ngIf"], ["id", "volume", 1, "wrapper-inner", "naked"], ["id", "stat-line-00-header", 1, "header"], ["id", "stat-line-00", 1, "big-container"], ["id", "total-volume", 1, "small-container"], ["class", "small-header value", 4, "ngIf", "ngIfElse"], ["class", "greyed-bar"], ["greyed", ""], ["id", "rewards", 1, "wrapper-inner", "naked"], ["id", "rewards-given", 1, "medium-container"], ["id", "tokenomics", 1, "wrapper-inner", "naked"], ["id", "stat-line-00", 1, "small-container", "naked"], ["id", "marketcap", 1, "medium-container"], ["id", "supply", 1, "medium-container"], ["id", "price", 1, "medium-container"], [1, "empty"], ["id", "chart", 3, "data"], ["id", "chart"], [1, "small-header", "value"], [1, "title"], [1, "value", "small"], [1, "greyed-bar"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_app_dashboard_chart_1_Template, 2, 3, "app-dashboard-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_section_3_Template, 2, 0, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_span_10_Template, 11, 6, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_span_12_Template, 11, 6, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_span_14_Template, 11, 4, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_ng_template_16_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardComponent_span_23_Template, 12, 8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DashboardComponent_span_25_Template, 13, 8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DashboardComponent_ng_template_27_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tokenomics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_span_34_Template, 12, 6, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DashboardComponent_span_36_Template, 12, 6, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DashboardComponent_ng_template_38_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DashboardComponent_span_41_Template, 11, 5, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_span_43_Template, 11, 5, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DashboardComponent_ng_template_45_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DashboardComponent_span_48_Template, 11, 4, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DashboardComponent_span_50_Template, 11, 7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DashboardComponent_ng_template_52_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 24, ctx.exchange.dayData) !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 26, ctx.exchange.dayData) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 28, ctx.exchange.volume))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 30, ctx.exchange.volumeNetworkCurrency))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 32, ctx.exchange.volumeUSD))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 34, ctx.vault.cumulativeRewardsSinceStart))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 36, ctx.priceInUSD))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 38, ctx.priceInUSD))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 40, ctx.priceInUSD))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 42, ctx.token.totalSupply))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 44, ctx.token.circulatingSupply))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 46, ctx.priceInUSD))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 48, ctx.priceInNetworkCurrency))("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _dashboard_chart_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_5__["DashboardChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  grid-area: router-outlet;\n  display: grid;\n  grid-template-areas: \". . .\" \". wrapper .\" \". . .\";\n  grid-template-columns: 0px 1fr 0px;\n  grid-template-rows: 0px 1fr 0px;\n  justify-content: space-around;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  grid-area: wrapper;\n  display: grid;\n  grid-template-areas: \". . .\" \". chart .\" \". volume .\" \". rewards .\" \". tokenomics .\" \". empty .\" \". . .\";\n  grid-template-columns: 20px 1fr 20px;\n  grid-template-rows: 10px -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content 300px 10px;\n  grid-template-rows: 10px max-content max-content max-content max-content 300px 10px;\n  row-gap: 10px;\n  column-gap: 10px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   app-dashboard-chart[_ngcontent-%COMP%] {\n  grid-area: chart;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   #tokenomics[_ngcontent-%COMP%] {\n  grid-area: tokenomics;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   #volume[_ngcontent-%COMP%] {\n  grid-area: volume;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   #rewards[_ngcontent-%COMP%] {\n  grid-area: rewards;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   #chart[_ngcontent-%COMP%] {\n  grid-area: chart;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.empty[_ngcontent-%COMP%] {\n  grid-area: empty;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   .naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper-inner[_ngcontent-%COMP%] {\n  grid-area: initial;\n  display: grid;\n  justify-content: stretch;\n  min-width: 100%;\n  justify-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb250YWluZXJzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUNBO0VBR0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdHQUNBO0VBT0Esb0NBQUE7RUFDQSxtSEFBQTtFQUFBLG1GQUFBO0VBbUJBLGFBQUE7RUFDQSxnQkFBQTtBQTNCUjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQVFRO0VBQ0kscUJBQUE7QUFOWjtBQVFRO0VBQ0ksaUJBQUE7QUFOWjtBQVFRO0VBQ0ksa0JBQUE7QUFOWjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQVFRO0VBQ0ksZ0JBQUE7QUFOWjtBQ3JDSTtFQUNJLFdDSEE7QUYwQ1I7QUNyQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEdUNOO0FDdENNO0VBQ0ksOEJBQUE7QUR3Q1Y7QUN2Q1U7RUFDSSxtQkFBQTtBRHlDZDtBQ3ZDVTtFQUNJLGlCQUFBO0FEeUNkO0FDdENNO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FEd0NWO0FDdENNO0VBQ0ksOENBQUE7RUFBQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUR3Q1Y7QUN2Q1U7RUFDRSw4Q0FBQTtFQUFBLHNDQUFBO0FEeUNaO0FDdENNO0VBQ0k7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsYUFBQTtFRHdDVjtFQ3ZDVTtJQUNJLG9CQUFBO0VEeUNkO0VDdkNVO0lBQ0ksb0JBQUE7RUR5Q2Q7QUFDRjtBQ3RDTTtFQTFDRjtJQTJDSSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtFRHlDTjtBQUNGO0FDdkNJO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFNQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRG9DTjtBQzNDTTtFQUpGO0lBS0ksK0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUQ4Q047QUFDRjtBQzFDTTtFQUNJLGtFQUFBO0VBQUEsa0RBQUE7RUFDQSx1QkFBQTtFQU9BLG1CQUFBO0FEc0NWO0FDNUNVO0VBQ0ksZ0JBQUE7QUQ4Q2Q7QUM3Q2M7RUFDSSxnQkFBQTtBRCtDbEI7QUN4Q1E7RUFDSSxtQkFBQTtBRDBDWjtBQ3hDZ0I7RUFDSSxxQkM1RVo7RUQ0RWdDLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBRXJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQzFGWjtBRndJUjtBQzdDb0I7RUFDSSxjQ3BGaEI7QUZtSVI7QUMzQ1k7RUFDSSxpQkFBQTtFQUNBLGdCQ2pHTjtFRG1HTSxlQUFBO0VBSUEsZ0JBQUE7RUFTQSxxQkMzR1I7RUQyRzRCLGlCQUFBO0VBQ2lELGFBQUE7RUFDRyw0QkFBQTtFQUN4RSxvRUFBQTtFQUFzRSxxREFBQTtFQUN0RSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QURzQ2hCO0FDeERnQjtFQUxKO0lBTVEsZUFBQTtFRDJEbEI7QUFDRjtBQ3pEZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEMkRwQjtBQ3pEZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEMkRwQjtBQ2pEWTtFQUNJLGVBQUE7QURtRGhCO0FDaERRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURrRFo7QUNoRFE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGtEWjtBQ2pEWTtFQUNJLGVBQUE7QURtRGhCO0FDbERnQjtFQUNJLGNDbklaO0FGdUxSO0FDbERnQjtFQUNJLFdDOUlaO0FGa01SO0FDakRZO0VBQ0ksOEJBQUE7QURtRGhCO0FDbERnQjtFQUNJLG1CQUFBO0FEb0RwQjtBQ2xEZ0I7RUFDSSxpQkFBQTtBRG9EcEI7QUNoRGdCO0VBQ0ksZUFBQTtBRGtEcEI7QUM5Q1E7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwyREFBQTtFQUFBLDJDQUFBO0VBQ0EsY0FBQTtBRGdEWjtBQy9DWTtFQUNJLGVBQUE7RUFDQSxjQy9KUjtBRmdOUjtBQ2hEZ0I7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURrRHBCO0FDakRvQjtFQUNJLGtCQUFBO0FEbUR4QjtBQ2hEZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FEa0RwQjtBQzdDb0I7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUQrQ3hCO0FDOUN3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRGdENUI7QUMvQzRCO0VBQ0ksZUFBQTtBRGlEaEM7QUM5Q3dCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEZ0Q1QjtBQ3pDSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUQyQ1I7QUN6Q0k7RUFDSSx1Q0FBQTtBRDJDUjtBQ3pDSTtFQUNJLGVBQUE7QUQyQ1I7QUFqTkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQW1OUiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jb250YWluZXJzLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBncmlkLWFyZWE6cm91dGVyLW91dGxldDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiB3cmFwcGVyIC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwcHggMWZyIDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czowcHggMWZyIDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwLjMpO1xyXG4gICAgICAgIGdyaWQtYXJlYTp3cmFwcGVyO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICcuIC4gLidcclxuICAgICAgICAnLiBjaGFydCAuJ1xyXG4gICAgICAgICcuIHZvbHVtZSAuJ1xyXG4gICAgICAgICcuIHJld2FyZHMgLidcclxuICAgICAgICAnLiB0b2tlbm9taWNzIC4nXHJcbiAgICAgICAgJy4gZW1wdHkgLidcclxuICAgICAgICAnLiAuIC4nO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnIgMjBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcHggbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMzAwcHggMTBweDtcclxuICAgICAgICBhcHAtZGFzaGJvYXJkLWNoYXJ0IHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmNoYXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdG9rZW5vbWljcyB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTp0b2tlbm9taWNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdm9sdW1lIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOnZvbHVtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3Jld2FyZHMge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6cmV3YXJkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2NoYXJ0IHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmNoYXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuZW1wdHkge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6ZW1wdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgY29udGFpbmVycztcclxuICAgIH1cclxuICAgIHNlY3Rpb24ud3JhcHBlci1pbm5lciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmluaXRpYWw7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzdHJldGNoO1xyXG4gICAgICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0ICcuL3RoZW1lLnNjc3MnO1xyXG5AbWl4aW4gY29udGFpbmVyc3tcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICB9XHJcbiAgICBkaXYubWVkaXVtLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4yNSk7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgJi5zcGxpdCB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi51cC11bmRlciB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6c3RhcnQ7XHJcbiAgICAgIH1cclxuICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICYubXVzaHkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE2MDBweCkge1xyXG4gICAgICAgICAgJi5zcGxpdC5zbWFsbCB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgIHJvdy1nYXA6NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYuc21hbGwtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnI7XHJcbiAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTEwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuMjUpO1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICYubXVzaHkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyO1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgJi5sYXJnZS1oZWFkZXIsICYubWVkaXVtLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM4OWRhZmYnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMsIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyLjRyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRibGFjaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0Ojc1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6Mi4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmV4dHJhLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg5ZmZiMCcsIGVuZENvbG9yc3RyPScjOThkY2ZiJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5sYXJnZS1oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZWRpdW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zcGxpdCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zbWFsbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6NXg7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgJGxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLWdhcDo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVsLmdyYXllZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDokZ3JheSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICB9XHJcbiAgICAubmFrZWQsICYubmFrZWQsICoubmFrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDApIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICouY2xpY2thYmxlIHtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuICB9IiwiJGJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeTogIzVjMmE5MmZmO1xyXG4kcHJpbWFyeS1vcGFxdWU6ICM1YzJhOTIwOTtcclxuJGNvbXBsZW1lbnQ6ICMyY2U0ZDhmZjtcclxuJHJlZDogI2Y2MmM0ZDtcclxuJGdyZWVuOiAjM2NiYjNjO1xyXG4kbGlnaHQ6ICNmZjJjZjNmZjtcclxuJGRhcms6ICM1YzJhOTJmZjtcclxuJHdoaXRlOiAjZmVmZWZlO1xyXG4kZ3JheTogIzVmNWY1ZjsiXX0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]]
            }]
    }], function () { return [{ type: _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "S7Rr":
/*!***************************************!*\
  !*** ./src/assets/abi/grapesabi.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LPTTokenClaimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LiquidityAddition\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"log\",\"type\":\"string\"}],\"name\":\"Log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"BNBContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Cellars\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LGECompleted_Timestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LPTperBNBUnit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Marketing\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"POOL_CreateLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"USER_ClaimWrappedLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"agreesToTermsOutlinedInLiquidityGenerationParticipationAgreement\",\"type\":\"bool\"}],\"name\":\"USER_PledgeLiquidity\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"USER_UNPledgeLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"__primarySetup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_Cellars\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_wLPT\",\"type\":\"address\"}],\"name\":\"__secondarySetup\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnFromLPT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"buyFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"calculateAmountAndFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"netAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractInitialized\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractStart_Timestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contributionPhase\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"emergencyDrain24hAfterLiquidityGenerationEventIsDone\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"emergencyPeriod\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"governanceLevels\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"individualCap\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initialSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationParticipationAgreement\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"noFeeList\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pancakeFactory\",\"outputs\":[{\"internalType\":\"contract IPancakeFactory\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pancakeLPT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pancakeRouter\",\"outputs\":[{\"internalType\":\"contract IPancakeRouter02\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"sellFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_buyFee\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_sellFee\",\"type\":\"uint256\"}],\"name\":\"setBuySellFees\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_Cellars\",\"type\":\"address\"}],\"name\":\"setCellars\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"_level\",\"type\":\"uint8\"}],\"name\":\"setGovernanceLevel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ratioBase100\",\"type\":\"uint256\"}],\"name\":\"setLPTBurnRatio\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_bool\",\"type\":\"bool\"}],\"name\":\"setNoFeeList\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_pancakeLPT\",\"type\":\"address\"}],\"name\":\"setPancakeLPT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ratioBase100\",\"type\":\"uint256\"}],\"name\":\"setPublicWrappingRatio\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_delayDays\",\"type\":\"uint256\"}],\"name\":\"setUnWrapLockTime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newWrapper\",\"type\":\"address\"}],\"name\":\"setwLPT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stackingPhase\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalBNBContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalCap\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalLPTTokensMinted\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"viewCellars\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"viewGovernanceLevel\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"viewLPT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"viewLPTBurnRatio\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"viewWrappedLPT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wLPT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var _dynamic_info_services_exchange_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-info-services/exchange.service */ "fXFg");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _system_notification_system_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-notification/system-notification.component */ "H5GV");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.component */ "4G6T");










class AppComponent {
    constructor(web3, exchangeService) {
        this.web3 = web3;
        this.exchangeService = exchangeService;
        this.title = 'aura';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_exchange_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-system-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-notifications");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerAnimations", _r0.isActivated ? _r0.activatedRoute : "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _system_notification_system_notification_component__WEBPACK_IMPORTED_MODULE_6__["SystemNotificationComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-area: angular-content;\n  max-height: 100vh;\n  min-height: 100vh;\n  max-width: 100vw;\n  min-width: 100vw;\n  grid-template-areas: \"main header\" \"main footer\";\n  grid-template-columns: 1fr 200px;\n  grid-template-rows: 1fr 200px;\n  color: #fefefe;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    grid-template-areas: \"header\" \"main\" \"footer\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 100px 1fr 100px;\n  }\n}\n@media (max-height: 800px) {\n  [_nghost-%COMP%] {\n    grid-template-areas: \"header\" \"main\" \"footer\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 50px 1fr 100px;\n  }\n}\n@media (max-height: 600px) {\n  [_nghost-%COMP%] {\n    grid-template-areas: \"header\" \"main\" \"footer\";\n    grid-template-columns: 1fr;\n    grid-template-rows: 50px 1fr 50px;\n  }\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  grid-area: main;\n  display: grid;\n  max-height: 100vh;\n  min-height: 100vh;\n  max-width: 100%;\n  min-width: 100%;\n  grid-template-areas: \". . .\" \". router-outlet .\" \". . .\";\n  overflow: hidden;\n  grid-template-columns: 10px 1fr 10px;\n  grid-template-rows: 10px 1fr 10px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   router-outlet[_ngcontent-%COMP%], [_nghost-%COMP%]   main[_ngcontent-%COMP%]   router-outlet[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  grid-area: router-outlet;\n}\n[_nghost-%COMP%]   app-header[_ngcontent-%COMP%] {\n  grid-area: header;\n}\n[_nghost-%COMP%]   app-footer[_ngcontent-%COMP%] {\n  grid-area: footer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFDQTtFQUVBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQ0xNO0FER1I7QUFHRTtFQWJGO0lBY0ksNkNBQ0E7SUFHQSwwQkFBQTtJQUNBLG1DQUFBO0VBSEY7QUFDRjtBQUlFO0VBckJGO0lBc0JJLDZDQUNBO0lBR0EsMEJBQUE7SUFDQSxrQ0FBQTtFQUpGO0FBQ0Y7QUFLRTtFQTdCRjtJQThCSSw2Q0FDQTtJQUdBLDBCQUFBO0lBQ0EsaUNBQUE7RUFMRjtBQUNGO0FBTUU7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdEQUNBO0VBR0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBUE47QUFRVTtFQUNJLHdCQUFBO0FBTmQ7QUFTRTtFQUNJLGlCQUFBO0FBUE47QUFTRTtFQUNJLGlCQUFBO0FBUE4iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYXBwL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtYXJlYTphbmd1bGFyLWNvbnRlbnQ7XHJcbiAgbWF4LWhlaWdodDoxMDB2aDtcclxuICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gIG1heC13aWR0aDoxMDB2dztcclxuICBtaW4td2lkdGg6MTAwdnc7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAnbWFpbiBoZWFkZXInXHJcbiAgJ21haW4gZm9vdGVyJztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDIwMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDIwMHB4O1xyXG4gIGNvbG9yOiR3aGl0ZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICdoZWFkZXInXHJcbiAgICAnbWFpbidcclxuICAgICdmb290ZXInO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDEwMHB4XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LWhlaWdodDo4MDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICdoZWFkZXInXHJcbiAgICAnbWFpbidcclxuICAgICdmb290ZXInO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnIgMTAwcHhcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtaGVpZ2h0OjYwMHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJ2hlYWRlcidcclxuICAgICdtYWluJ1xyXG4gICAgJ2Zvb3Rlcic7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA1MHB4XHJcbiAgfVxyXG4gIG1haW4ge1xyXG4gICAgICBncmlkLWFyZWE6bWFpbjtcclxuICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICBtYXgtaGVpZ2h0OjEwMHZoO1xyXG4gICAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICcuIC4gLidcclxuICAgICAgJy4gcm91dGVyLW91dGxldCAuJ1xyXG4gICAgICAnLiAuIC4nO1xyXG4gICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCAxZnIgMTBweDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHB4IDFmciAxMHB4O1xyXG4gICAgICAgICAgcm91dGVyLW91dGxldCwgcm91dGVyLW91dGxldCArICp7XHJcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOnJvdXRlci1vdXRsZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgfVxyXG4gIGFwcC1oZWFkZXIge1xyXG4gICAgICBncmlkLWFyZWE6aGVhZGVyO1xyXG4gIH1cclxuICBhcHAtZm9vdGVyIHtcclxuICAgICAgZ3JpZC1hcmVhOmZvb3RlcjtcclxuICB9XHJcbn0iLCIkYmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5OiAjNWMyYTkyZmY7XHJcbiRwcmltYXJ5LW9wYXF1ZTogIzVjMmE5MjA5O1xyXG4kY29tcGxlbWVudDogIzJjZTRkOGZmO1xyXG4kcmVkOiAjZjYyYzRkO1xyXG4kZ3JlZW46ICMzY2JiM2M7XHJcbiRsaWdodDogI2ZmMmNmM2ZmO1xyXG4kZGFyazogIzVjMmE5MmZmO1xyXG4kd2hpdGU6ICNmZWZlZmU7XHJcbiRncmF5OiAjNWY1ZjVmOyJdfQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["routerAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["routerAnimations"]],
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: _dynamic_info_services_exchange_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeService"] }]; }, null); })();


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_chart_dashboard_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-chart/dashboard-chart.module */ "wJni");





class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_chart_dashboard_chart_module__WEBPACK_IMPORTED_MODULE_3__["DashboardChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_chart_dashboard_chart_module__WEBPACK_IMPORTED_MODULE_3__["DashboardChartModule"]], exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_chart_dashboard_chart_module__WEBPACK_IMPORTED_MODULE_3__["DashboardChartModule"]
                ],
                exports: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "TWut":
/*!****************************************!*\
  !*** ./src/app/sale/sale.component.ts ***!
  \****************************************/
/*! exports provided: SaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleComponent", function() { return SaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var src_app_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/static-info-services/project.service */ "l1ht");
/* harmony import */ var _dynamic_info_services_now_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamic-info-services/now.service */ "unxH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipe/pipes/round.pipe */ "IrDT");








const _c0 = ["inputEle"];
function SaleComponent_section_0_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const LPTperBNBUnit_r24 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, LPTperBNBUnit_r24 / 1000000000000000000), " ", ctx_r4.project.lpTokenName, " per 1 ", ctx_r4.project.networkCurrency, "");
} }
function SaleComponent_section_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SaleComponent_section_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const started_r25 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, started_r25 * 1000, "dd/MM/yyyy hh:mm:ss a"));
} }
function SaleComponent_section_0_span_13_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ended_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ended_r26 * 1000, "dd/MM/yyyy hh:mm:ss a"));
} }
function SaleComponent_section_0_span_13_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Finished");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SaleComponent_section_0_span_13_label_3_Template, 3, 4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SaleComponent_section_0_span_13_label_4_Template, 2, 0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ended_r26 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ended_r26 !== 0 && ended_r26 !== "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ended_r26 === 0 || ended_r26 === "0");
} }
function SaleComponent_section_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const duration_r30 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, duration_r30 / 3600));
} }
function SaleComponent_section_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SaleComponent_section_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Raised");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const totalBNBContributed_r31 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, totalBNBContributed_r31 / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.project.networkCurrency);
} }
function SaleComponent_section_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Individual Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const individualCap_r32 = ctx.ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, individualCap_r32 / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.project.networkCurrency);
} }
function SaleComponent_section_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SaleComponent_section_0_div_26_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Contribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contribution_r37 = ctx.ngIf;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, contribution_r37 / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.project.networkCurrency);
} }
function SaleComponent_section_0_div_26_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Share %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contribution_r38 = ctx.ngIf;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, contribution_r38 / 1000000000000000000 / (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r34.data.totalBNBContributed) / 1000000000000000000) * 100), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.project.lpTokenName);
} }
function SaleComponent_section_0_div_26_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SaleComponent_section_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaleComponent_section_0_div_26_span_1_Template, 9, 5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SaleComponent_section_0_div_26_span_3_Template, 10, 7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_0_div_26_ng_template_5_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r16.data.user.contribution))("ngIfElse", _r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r16.data.user.contribution))("ngIfElse", _r35);
} }
function SaleComponent_section_0_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r17.inputPlaceholder);
} }
function SaleComponent_section_0_span_33_span_1_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_1_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Depositing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_1_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deposited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_1_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_1_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_1_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_1_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "working": a0, "failed": a1, "success": a2 }; };
function SaleComponent_section_0_span_33_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaleComponent_section_0_span_33_span_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r50.deposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SaleComponent_section_0_span_33_span_1_label_7_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SaleComponent_section_0_span_33_span_1_label_9_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SaleComponent_section_0_span_33_span_1_label_11_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SaleComponent_section_0_span_33_span_1_label_13_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SaleComponent_section_0_span_33_span_1_label_15_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SaleComponent_section_0_span_33_span_1_label_17_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SaleComponent_section_0_span_33_span_1_label_19_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](32, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r41.data.depositButton) === 1 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r41.data.depositButton) === 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx_r41.data.depositButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx_r41.data.depositButton) === 2 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 16, ctx_r41.data.depositButton) === 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx_r41.data.depositButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 20, ctx_r41.data.depositButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 22, ctx_r41.data.depositButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 24, ctx_r41.data.depositButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 26, ctx_r41.data.depositButton) === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 28, ctx_r41.data.depositButton) === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 30, ctx_r41.data.depositButton) === 10);
} }
function SaleComponent_section_0_span_33_span_8_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_8_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claiming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_8_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claimed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_8_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_8_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_0_span_33_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaleComponent_section_0_span_33_span_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r57.claim(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_0_span_33_span_8_label_5_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SaleComponent_section_0_span_33_span_8_label_7_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SaleComponent_section_0_span_33_span_8_label_9_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SaleComponent_section_0_span_33_span_8_label_11_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SaleComponent_section_0_span_33_span_8_label_13_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r42.data.claimButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r42.data.claimButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r42.data.claimButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx_r42.data.claimButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 14, ctx_r42.data.claimButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, ctx_r42.data.claimButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, ctx_r42.data.claimButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, ctx_r42.data.claimButton) === 10);
} }
function SaleComponent_section_0_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaleComponent_section_0_span_33_span_1_Template, 21, 36, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SaleComponent_section_0_span_33_span_8_Template, 15, 26, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contribution_r40 = ctx.ngIf;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.cancelled && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r18.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r18.now)) / 1000 > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r18.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx_r18.now) < 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx_r18.data.LPTperBNBUnit) < 1 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx_r18.wLPAddress) !== "0x0000000000000000000000000000000000000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.cancelled && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, ctx_r18.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, ctx_r18.now) < 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, ctx_r18.data.LPTperBNBUnit) > 1 && contribution_r40 > 1);
} }
function SaleComponent_section_0_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The LGE has been postponed. Please unpledge your ", ctx_r19.project.networkCurrency, ". ");
} }
function SaleComponent_section_0_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SaleComponent_section_0_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 35);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function SaleComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_0_label_5_Template, 3, 5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SaleComponent_section_0_ng_template_8_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SaleComponent_section_0_span_11_Template, 6, 5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SaleComponent_section_0_span_13_Template, 5, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SaleComponent_section_0_span_15_Template, 9, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SaleComponent_section_0_ng_template_17_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SaleComponent_section_0_span_20_Template, 9, 5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SaleComponent_section_0_span_22_Template, 9, 5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SaleComponent_section_0_ng_template_24_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SaleComponent_section_0_div_26_Template, 7, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SaleComponent_section_0_span_28_Template, 3, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SaleComponent_section_0_span_33_Template, 12, 21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SaleComponent_section_0_span_35_Template, 3, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SaleComponent_section_0_ng_template_36_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SaleComponent_section_0_ng_template_38_Template, 1, 1, "ng-template", 8, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.project.name, " LGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 17, ctx_r0.data.LPTperBNBUnit) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 19, ctx_r0.data.LPTperBNBUnit));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, ctx_r0.data.started))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, ctx_r0.data.ended))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, ctx_r0.data.duration))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 27, ctx_r0.data.totalBNBContributed))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 29, ctx_r0.data.individualCap))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 31, ctx_r0.data.user.contribution) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.cancelled && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 33, ctx_r0.data.LPTperBNBUnit) < 1 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 35, ctx_r0.wLPAddress) !== "0x0000000000000000000000000000000000000000" && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 37, ctx_r0.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 39, ctx_r0.now)) / 1000 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 41, ctx_r0.data.user.contribution))("ngIfElse", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cancelled);
} }
function SaleComponent_section_2_p_3_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_2_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_2_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_2_p_3_ng_container_2_ng_container_5_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SaleComponent_section_2_p_3_ng_container_2_ng_container_14_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SaleComponent_section_2_p_3_ng_container_2_ng_container_23_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SaleComponent_section_2_p_3_ng_container_2_ng_container_32_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" starts in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx_r63.now)) / 1000 / 86400), " day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, ctx_r63.now)) / 1000 / 86400 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx_r63.now)) / 1000 / 86400 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 24, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 26, ctx_r63.now)) / 1000 % 86400 / 3600), " hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 28, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 30, ctx_r63.now)) / 1000 % 86400 / 3600 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 32, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 34, ctx_r63.now)) / 1000 % 86400 / 3600 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 36, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 40, ctx_r63.now)) / 1000 % 86400 % 3600 / 60), " minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 42, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 44, ctx_r63.now)) / 1000 % 86400 % 3600 / 60 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 46, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 48, ctx_r63.now)) / 1000 % 86400 % 3600 / 60 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 50, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 52, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 54, ctx_r63.now)) / 1000 % 86400 % 3600 % 60), " second");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 56, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 58, ctx_r63.now)) / 1000 % 86400 % 3600 % 60 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 60, ctx_r63.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 62, ctx_r63.now)) / 1000 % 86400 % 3600 % 60 > 2);
} }
function SaleComponent_section_2_p_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" started on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r64.data.started) * 1000, "medium"), " ");
} }
function SaleComponent_section_2_p_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ended on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r65.data.ended) * 1000, "medium"), " ");
} }
function SaleComponent_section_2_p_3_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " is awaiting to be launched. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Press the button below! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_15_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_15_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_15_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_15_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SaleComponent_section_2_p_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_2_p_3_ng_container_15_ng_container_5_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SaleComponent_section_2_p_3_ng_container_15_ng_container_14_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SaleComponent_section_2_p_3_ng_container_15_ng_container_23_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SaleComponent_section_2_p_3_ng_container_15_ng_container_32_Template, 2, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ends in ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx_r67.now)) / 1000 / 86400), " day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, ctx_r67.now)) / 1000 / 86400 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx_r67.now)) / 1000 / 86400 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 24, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 26, ctx_r67.now)) / 1000 % 86400 / 3600), " hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 28, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 30, ctx_r67.now)) / 1000 % 86400 / 3600 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 32, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 34, ctx_r67.now)) / 1000 % 86400 / 3600 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 36, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 40, ctx_r67.now)) / 1000 % 86400 % 3600 / 60), " minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 42, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 44, ctx_r67.now)) / 1000 % 86400 % 3600 / 60 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 46, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 48, ctx_r67.now)) / 1000 % 86400 % 3600 / 60 > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 50, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 52, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 54, ctx_r67.now)) / 1000 % 86400 % 3600 % 60), " second");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 56, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 58, ctx_r67.now)) / 1000 % 86400 % 3600 % 60 < 1 || (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 60, ctx_r67.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 62, ctx_r67.now)) / 1000 % 86400 % 3600 % 60 > 2);
} }
function SaleComponent_section_2_p_3_button_18_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End LGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_2_p_3_button_18_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_2_p_3_button_18_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_2_p_3_button_18_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_2_p_3_button_18_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_2_p_3_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaleComponent_section_2_p_3_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r82.createLiquidity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SaleComponent_section_2_p_3_button_18_label_4_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SaleComponent_section_2_p_3_button_18_label_6_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SaleComponent_section_2_p_3_button_18_label_8_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SaleComponent_section_2_p_3_button_18_label_10_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SaleComponent_section_2_p_3_button_18_label_12_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r68.data.createLiquidityButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r68.data.createLiquidityButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r68.data.createLiquidityButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r68.data.createLiquidityButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 14, ctx_r68.data.createLiquidityButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx_r68.data.createLiquidityButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, ctx_r68.data.createLiquidityButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx_r68.data.createLiquidityButton) === 10);
} }
function SaleComponent_section_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The LGE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SaleComponent_section_2_p_3_ng_container_2_Template, 38, 64, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_2_p_3_ng_container_5_Template, 4, 6, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SaleComponent_section_2_p_3_ng_container_9_Template, 4, 6, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SaleComponent_section_2_p_3_ng_container_12_Template, 5, 0, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SaleComponent_section_2_p_3_ng_container_15_Template, 38, 64, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SaleComponent_section_2_p_3_button_18_Template, 14, 26, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const LPTperBNBUnit_r62 = ctx.ngIf;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx_r59.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, ctx_r59.now)) / 1000 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, ctx_r59.data.started) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, ctx_r59.now)) / 1000 < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, ctx_r59.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, ctx_r59.now)) / 1000 < 0 && LPTperBNBUnit_r62 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 21, ctx_r59.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, ctx_r59.now)) / 1000 < 0 && LPTperBNBUnit_r62 < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, ctx_r59.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 27, ctx_r59.now)) / 1000 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", LPTperBNBUnit_r62 < 1 && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, ctx_r59.data.calculatedEnd) * 1000 - _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 31, ctx_r59.now)) / 1000 < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" The LGE has raised ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 36, ctx_r59.data.totalBNBContributed) / 1000000000000000000, "1.2-2"), " ", ctx_r59.project.networkCurrency, ". ");
} }
function SaleComponent_section_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} }
function SaleComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SaleComponent_section_2_p_3_Template, 28, 38, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_2_ng_template_5_Template, 1, 0, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r1.data.LPTperBNBUnit))("ngIfElse", _r60);
} }
function SaleComponent_section_4_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unpledge ", ctx_r84.project.networkCurrency, "");
} }
function SaleComponent_section_4_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unpledging");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_4_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unpledged");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_4_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_4_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaleComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaleComponent_section_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.unpledgeLiquidity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SaleComponent_section_4_label_5_Template, 2, 1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SaleComponent_section_4_label_7_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SaleComponent_section_4_label_9_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SaleComponent_section_4_label_11_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SaleComponent_section_4_label_13_Template, 2, 0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r2.data.unpledgeLiqudityButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx_r2.data.unpledgeLiqudityButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r2.data.unpledgeLiqudityButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx_r2.data.unpledgeLiquidityButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 14, ctx_r2.data.unpledgeLiquidityButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, ctx_r2.data.unpledgeLiquidityButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, ctx_r2.data.unpledgeLiquidityButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 20, ctx_r2.data.unpledgeLiquidityButton) === 10);
} }
function SaleComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " LGE announcement coming soon. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
class SaleComponent {
    constructor(web3, projectService, nowService) {
        this.web3 = web3;
        this.projectService = projectService;
        this.nowService = nowService;
        this.data = this.web3.lge;
        this.token = this.web3.token;
        this.inputPlaceholder = 'Enter an amount to contribute.';
        this.claimButton = this.web3.lge.claimButton;
        this.depositButton = this.web3.lge.depositButton;
        this.createLiqiuidityButton = this.web3.lge.createLiquidityButton;
        this.now = this.nowService.now;
        this.current = new Date().getTime();
        this.project = this.projectService.project;
        this.cancelled = this.projectService.cancelled;
        this.wLPAddress = this.web3.liquidityToken.wLPAddress;
        this.data = this.web3.lge;
        this.token = this.web3.token;
    }
    ngOnInit() {
    }
    deposit() {
        const value = Number(Number(this.inputEle.nativeElement.value));
        this.web3.depositLGE(value, true);
    }
    claim() {
        this.web3.claimLGE();
    }
    createLiquidity() {
        this.web3.createLiquidity();
    }
    unpledgeLiquidity() {
        this.web3.unpledgeLiquidity();
    }
}
SaleComponent.ɵfac = function SaleComponent_Factory(t) { return new (t || SaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_now_service__WEBPACK_IMPORTED_MODULE_4__["NowService"])); };
SaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaleComponent, selectors: [["app-sale"]], viewQuery: function SaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEle = _t.first);
    } }, inputs: { data: "data", token: "token" }, decls: 9, vars: 12, consts: [["class", "wrapper", 4, "ngIf"], ["class", "misc", 4, "ngIf"], ["class", "misc empty", 4, "ngIf"], [1, "empty"], [1, "wrapper"], ["id", "name", 1, "large-header"], ["id", "price", 1, "large-header"], ["class", "value", 4, "ngIf"], ["class", "greyed-bar"], ["greyed", ""], ["id", "time", 1, "small-container"], ["class", "small-header", 4, "ngIf", "ngIfElse"], ["class", "small-header value", 4, "ngIf", "ngIfElse"], ["id", "global", 1, "medium-container"], ["class", "medium-container", "id", "your", 4, "ngIf"], ["class", "input", "id", "input", 4, "ngIf"], ["class", "large-header", "id", "buttons", 4, "ngIf", "ngIfElse"], ["class", "large-header", "id", "buttons", 4, "ngIf"], ["greyedButtons", ""], [1, "value"], [1, "greyed-bar"], [1, "small-header"], [1, "title"], [1, "small-header", "value"], ["id", "your", 1, "medium-container"], ["id", "input", 1, "input"], [3, "placeholder"], ["inputEle", ""], ["id", "buttons", 1, "large-header"], ["class", "button", "id", "deposit", 4, "ngIf"], ["class", "button", "id", "claim", 4, "ngIf"], ["id", "deposit", 1, "button"], [3, "ngClass", "click"], [4, "ngIf"], ["id", "claim", 1, "button"], [1, "greyed-bar", "grey-button"], [1, "misc"], [1, "material-icons"], [4, "ngIf", "ngIfElse"], ["class", "inverse", 3, "ngClass", "click", 4, "ngIf"], [1, "inverse", 3, "ngClass", "click"], [1, "inverse", 2, "min-width", "250px", 3, "ngClass", "click"], [1, "misc", "empty"]], template: function SaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SaleComponent_section_0_Template, 40, 43, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SaleComponent_section_2_Template, 7, 4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SaleComponent_section_4_Template, 15, 26, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SaleComponent_section_6_Template, 6, 1, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.wLPAddress) !== "0x0000000000000000000000000000000000000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.wLPAddress) !== "0x0000000000000000000000000000000000000000" && !ctx.cancelled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.wLPAddress) !== "0x0000000000000000000000000000000000000000" && ctx.cancelled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.wLPAddress) === "0x0000000000000000000000000000000000000000");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _pipe_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"]], styles: ["[_nghost-%COMP%] {\n  grid-area: router-outlet;\n  display: grid;\n  grid-template-areas: \". . . .\" \". wrapper misc .\" \". empty empty .\" \". . . .\";\n  grid-template-columns: 10px 0.6fr 0.4fr 10px;\n  grid-template-rows: 10px -webkit-max-content 300px 10px;\n  grid-template-rows: 10px max-content 300px 10px;\n  justify-content: space-around;\n  align-content: center;\n  justify-items: center;\n  row-gap: 10px;\n  column-gap: 10px;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  max-width: -webkit-min-content;\n  max-width: min-content;\n  min-width: 100%;\n  height: auto;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  grid-area: wrapper;\n  display: grid;\n  grid-template-areas: \". . .\" \". price .\" \". name .\" \". time .\" \". global .\" \". your .\" \". input .\" \". buttons .\" \". . .\";\n  grid-template-columns: 20px 1fr 20px;\n  grid-template-rows: 10px -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content 10px;\n  grid-template-rows: 10px max-content max-content max-content max-content max-content max-content max-content 10px;\n  row-gap: 10px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   .naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.grey-button[_ngcontent-%COMP%] {\n  grid-area: buttons;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#name[_ngcontent-%COMP%] {\n  grid-area: name;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#price[_ngcontent-%COMP%] {\n  grid-area: price;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#input[_ngcontent-%COMP%] {\n  grid-area: input;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#buttons[_ngcontent-%COMP%] {\n  grid-area: buttons;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#time[_ngcontent-%COMP%] {\n  grid-area: time;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#global[_ngcontent-%COMP%] {\n  grid-area: global;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#your[_ngcontent-%COMP%] {\n  grid-area: your;\n}\n[_nghost-%COMP%]   section.misc[_ngcontent-%COMP%] {\n  min-width: 100%;\n  grid-area: misc;\n  display: grid;\n  justify-content: space-around;\n  align-content: center;\n  justify-items: center;\n  background: #000;\n  border-radius: 8px;\n  row-gap: 10px;\n}\n[_nghost-%COMP%]   section.misc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 4rem;\n}\n[_nghost-%COMP%]   section.misc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 80%;\n  font-size: 1.4rem;\n  margin: 0px;\n  padding-bottom: 10px;\n  display: grid;\n  row-gap: 10px;\n}\n[_nghost-%COMP%]   section.misc.empty[_ngcontent-%COMP%] {\n  background: none !important;\n}\n[_nghost-%COMP%]   div.empty[_ngcontent-%COMP%] {\n  grid-area: empty;\n  min-height: 300px;\n  width: 100px;\n}\n@media (max-height: 700px), (max-width: 700px) {\n  [_nghost-%COMP%] {\n    align-content: start;\n  }\n}\n@media (min-width: 1200px) and (max-height: 300px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n    column-gap: 10px;\n    grid-template-areas: \". . . .\" \". price name .\" \". time global .\" \". input your .\" \". buttons buttons .\" \". . . .\";\n    grid-template-columns: 20px 1fr -webkit-max-content 20px;\n    grid-template-columns: 20px 1fr max-content 20px;\n    grid-template-rows: 10px -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content 10px;\n    grid-template-rows: 10px max-content max-content max-content max-content 10px;\n  }\n}\n@media (min-width: 1200px) and (max-height: 500px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n    column-gap: 10px;\n    grid-template-areas: \". . . . . . .\" \". price name time global your .\" \". input input input buttons buttons .\" \". . . . . . .\";\n    grid-template-columns: 20px -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content 1fr 20px;\n    grid-template-columns: 20px max-content max-content max-content max-content 1fr 20px;\n    grid-template-rows: 10px -webkit-max-content -webkit-max-content 10px;\n    grid-template-rows: 10px max-content max-content 10px;\n    font-size: 200%;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 1.2rem !important;\n  }\n}\n@media (max-width: 700px) and (min-height: 700px), (max-width: 400px) {\n  [_nghost-%COMP%] {\n    grid-template-areas: \". . .\" \". misc .\" \". wrapper .\" \". empty .\" \". . .\" !important;\n    grid-template-columns: 10px 1fr 10px;\n    grid-template-rows: 10px -webkit-max-content -webkit-max-content 300px 10px;\n    grid-template-rows: 10px max-content max-content 300px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNhbGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcY29udGFpbmVycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw2RUFDQTtFQUlBLDRDQUFBO0VBQ0EsdURBQUE7RUFBQSwrQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQStGQSxrQkFBQTtBQWxHSjtBQUlJO0VBQ0ksK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdIQUNBO0VBU0Esb0NBQUE7RUFDQSx5S0FBQTtFQUFBLGlIQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWFI7QUN6Qkk7RUFDSSxXQ0hBO0FGOEJSO0FDekJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRDJCTjtBQzFCTTtFQUNJLDhCQUFBO0FENEJWO0FDM0JVO0VBQ0ksbUJBQUE7QUQ2QmQ7QUMzQlU7RUFDSSxpQkFBQTtBRDZCZDtBQzFCTTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBRDRCVjtBQzFCTTtFQUNJLDhDQUFBO0VBQUEsc0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FENEJWO0FDM0JVO0VBQ0UsOENBQUE7RUFBQSxzQ0FBQTtBRDZCWjtBQzFCTTtFQUNJO0lBQ0UsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUQ0QlY7RUMzQlU7SUFDSSxvQkFBQTtFRDZCZDtFQzNCVTtJQUNJLG9CQUFBO0VENkJkO0FBQ0Y7QUMxQk07RUExQ0Y7SUEyQ0ksMkJBQUE7SUFDQSwwQkFBQTtJQUNBLFlBQUE7RUQ2Qk47QUFDRjtBQzNCSTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBTUEsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUR3Qk47QUMvQk07RUFKRjtJQUtJLCtCQUFBO0lBQ0EsMEJBQUE7SUFDQSxhQUFBO0VEa0NOO0FBQ0Y7QUM5Qk07RUFDSSxrRUFBQTtFQUFBLGtEQUFBO0VBQ0EsdUJBQUE7RUFPQSxtQkFBQTtBRDBCVjtBQ2hDVTtFQUNJLGdCQUFBO0FEa0NkO0FDakNjO0VBQ0ksZ0JBQUE7QURtQ2xCO0FDNUJRO0VBQ0ksbUJBQUE7QUQ4Qlo7QUM1QmdCO0VBQ0kscUJDNUVaO0VENEVnQyxpQkFBQTtFQUM4QyxhQUFBO0VBQ0csNEJBQUE7RUFDckUsb0VBQUE7RUFBbUUscURBQUE7RUFDbkUsbUhBQUE7RUFBcUgsVUFBQTtFQUVySCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0MxRlo7QUY0SFI7QUNqQ29CO0VBQ0ksY0NwRmhCO0FGdUhSO0FDL0JZO0VBQ0ksaUJBQUE7RUFDQSxnQkNqR047RURtR00sZUFBQTtFQUlBLGdCQUFBO0VBU0EscUJDM0dSO0VEMkc0QixpQkFBQTtFQUNpRCxhQUFBO0VBQ0csNEJBQUE7RUFDeEUsb0VBQUE7RUFBc0UscURBQUE7RUFDdEUsbUhBQUE7RUFBcUgsVUFBQTtFQUNySCw2QkFBQTtFQUNBLG9DQUFBO0FEMEJoQjtBQzVDZ0I7RUFMSjtJQU1RLGVBQUE7RUQrQ2xCO0FBQ0Y7QUM3Q2dCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBRCtDcEI7QUM3Q2dCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBRCtDcEI7QUNyQ1k7RUFDSSxlQUFBO0FEdUNoQjtBQ3BDUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEc0NaO0FDcENRO0VBQ0ksYUFBQTtFQUNBLDhDQUFBO0VBQUEsc0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURzQ1o7QUNyQ1k7RUFDSSxlQUFBO0FEdUNoQjtBQ3RDZ0I7RUFDSSxjQ25JWjtBRjJLUjtBQ3RDZ0I7RUFDSSxXQzlJWjtBRnNMUjtBQ3JDWTtFQUNJLDhCQUFBO0FEdUNoQjtBQ3RDZ0I7RUFDSSxtQkFBQTtBRHdDcEI7QUN0Q2dCO0VBQ0ksaUJBQUE7QUR3Q3BCO0FDcENnQjtFQUNJLGVBQUE7QURzQ3BCO0FDbENRO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkRBQUE7RUFBQSwyQ0FBQTtFQUNBLGNBQUE7QURvQ1o7QUNuQ1k7RUFDSSxlQUFBO0VBQ0EsY0MvSlI7QUZvTVI7QUNwQ2dCO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEc0NwQjtBQ3JDb0I7RUFDSSxrQkFBQTtBRHVDeEI7QUNwQ2dCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBRHNDcEI7QUNqQ29CO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEbUN4QjtBQ2xDd0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURvQzVCO0FDbkM0QjtFQUNJLGVBQUE7QURxQ2hDO0FDbEN3QjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBRG9DNUI7QUM3Qkk7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FEK0JSO0FDN0JJO0VBQ0ksdUNBQUE7QUQrQlI7QUM3Qkk7RUFDSSxlQUFBO0FEK0JSO0FBaE5RO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWtOWjtBQS9NWTtFQUNJLGVBQUE7QUFpTmhCO0FBL01ZO0VBQ0ksZ0JBQUE7QUFpTmhCO0FBL01ZO0VBQ0ksZ0JBQUE7QUFpTmhCO0FBL01ZO0VBQ0ksa0JBQUE7QUFpTmhCO0FBN01ZO0VBQ0ksZUFBQTtBQStNaEI7QUE3TVk7RUFDSSxpQkFBQTtBQStNaEI7QUE3TVk7RUFDSSxlQUFBO0FBK01oQjtBQTNNSTtFQUNJLGVBQUE7RUFXQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCRXZGQTtFRndGQSxrQkFBQTtFQUNBLGFBQUE7QUFtTVI7QUFwTlE7RUFDSSxxQkVuRUo7RUZtRXdCLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBMk5aO0FBak5RO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFtTlo7QUFqTlE7RUFDSSwyQkFBQTtBQW1OWjtBQWhOSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBa05SO0FBaE5JO0VBMUdKO0lBMkdRLG9CQUFBO0VBbU5OO0FBQ0Y7QUFoTkk7RUFDSTtJQUNJLGdCQUFBO0lBQ0Esa0hBQ0E7SUFNQSx3REFBQTtJQUFBLGdEQUFBO0lBQ0EsNkdBQUE7SUFBQSw2RUFBQTtFQTRNVjtBQUNGO0FBMU1JO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLDhIQUNBO0lBSUEsb0hBQUE7SUFBQSxvRkFBQTtJQUNBLHFFQUFBO0lBQUEscURBQUE7SUFDQSxlQUFBO0VBd01WO0VBdk1VO0lBQ0ksNEJBQUE7RUF5TWQ7QUFDRjtBQXRNSTtFQTdJSjtJQThJUSxvRkFDQTtJQUtBLG9DQUFBO0lBQ0EsMkVBQUE7SUFBQSwyREFBQTtFQW9NTjtBQUNGIiwiZmlsZSI6InNhbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jb250YWluZXJzLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBncmlkLWFyZWE6cm91dGVyLW91dGxldDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4gLidcclxuICAgICcuIHdyYXBwZXIgbWlzYyAuJ1xyXG4gICAgJy4gZW1wdHkgZW1wdHkgLidcclxuICAgICcuIC4gLiAuJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCAwLjZmciAwLjRmciAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjEwcHggbWF4LWNvbnRlbnQgMzAwcHggMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICAgIHJvdy1nYXA6MTBweDtcclxuICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgIHNlY3Rpb24ud3JhcHBlciB7XHJcbiAgICAgICAgbWF4LWhlaWdodDpmaXQtY29udGVudDtcclxuICAgICAgICBtYXgtd2lkdGg6bWluLWNvbnRlbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuMyk7XHJcbiAgICAgICAgZ3JpZC1hcmVhOndyYXBwZXI7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgJy4gLiAuJ1xyXG4gICAgICAgICcuIHByaWNlIC4nXHJcbiAgICAgICAgJy4gbmFtZSAuJ1xyXG4gICAgICAgICcuIHRpbWUgLidcclxuICAgICAgICAnLiBnbG9iYWwgLidcclxuICAgICAgICAnLiB5b3VyIC4nXHJcbiAgICAgICAgJy4gaW5wdXQgLidcclxuICAgICAgICAnLiBidXR0b25zIC4nXHJcbiAgICAgICAgJy4gLiAuJztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MjBweCAxZnIgMjBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcHggbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMTBweDtcclxuICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICBAaW5jbHVkZSBjb250YWluZXJzO1xyXG4gICAgICAgIGRpdi5ncmV5LWJ1dHRvbntcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmJ1dHRvbnM7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAmI25hbWUge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNwcmljZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6cHJpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6aW5wdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNidXR0b25zIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTpidXR0b25zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICYjdGltZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6dGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmI2dsb2JhbCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6Z2xvYmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYjeW91ciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6eW91cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlY3Rpb24ubWlzYyB7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzg5ZGFmZicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyaWQtYXJlYTptaXNjO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiRibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDo4MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmVtcHR5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDpub25lIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYuZW1wdHkge1xyXG4gICAgICAgIGdyaWQtYXJlYTplbXB0eTtcclxuICAgICAgICBtaW4taGVpZ2h0OjMwMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OjcwMHB4KSwgKG1heC13aWR0aDo3MDBweCkge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6c3RhcnQ7XHJcbiAgICB9XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KSBhbmQgKG1heC1oZWlnaHQ6MzAwcHgpIHtcclxuICAgICAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICcuIC4gLiAuJ1xyXG4gICAgICAgICAgICAnLiBwcmljZSBuYW1lIC4nXHJcbiAgICAgICAgICAgICcuIHRpbWUgZ2xvYmFsIC4nXHJcbiAgICAgICAgICAgICcuIGlucHV0IHlvdXIgLidcclxuICAgICAgICAgICAgJy4gYnV0dG9ucyBidXR0b25zIC4nXHJcbiAgICAgICAgICAgICcuIC4gLiAuJztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIwcHggMWZyIG1heC1jb250ZW50IDIwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTBweCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCkgYW5kIChtYXgtaGVpZ2h0OjUwMHB4KSB7XHJcbiAgICAgICAgc2VjdGlvbi53cmFwcGVyIHtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICAgICAnLiAuIC4gLiAuIC4gLidcclxuICAgICAgICAgICAgJy4gcHJpY2UgbmFtZSB0aW1lIGdsb2JhbCB5b3VyIC4nXHJcbiAgICAgICAgICAgICcuIGlucHV0IGlucHV0IGlucHV0IGJ1dHRvbnMgYnV0dG9ucyAuJ1xyXG4gICAgICAgICAgICAnLiAuIC4gLiAuIC4gLic7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoyMHB4IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IDFmciAyMHB4O1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcHggbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIwMCU7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjJyZW0haW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzAwcHgpIGFuZCAobWluLWhlaWdodDo3MDBweCksIChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICcuIC4gLidcclxuICAgICAgICAnLiBtaXNjIC4nXHJcbiAgICAgICAgJy4gd3JhcHBlciAuJ1xyXG4gICAgICAgICcuIGVtcHR5IC4nXHJcbiAgICAgICAgJy4gLiAuJyFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4IDFmciAxMHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxMHB4IG1heC1jb250ZW50IG1heC1jb250ZW50IDMwMHB4IDEwcHg7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0ICcuL3RoZW1lLnNjc3MnO1xyXG5AbWl4aW4gY29udGFpbmVyc3tcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICB9XHJcbiAgICBkaXYubWVkaXVtLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4yNSk7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgJi5zcGxpdCB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi51cC11bmRlciB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6c3RhcnQ7XHJcbiAgICAgIH1cclxuICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICYubXVzaHkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjE2MDBweCkge1xyXG4gICAgICAgICAgJi5zcGxpdC5zbWFsbCB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NDAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgIHJvdy1nYXA6NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYuc21hbGwtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnI7XHJcbiAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTEwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuMjUpO1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICYubXVzaHkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyO1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgJi5sYXJnZS1oZWFkZXIsICYubWVkaXVtLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM4OWRhZmYnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMsIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyLjRyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRibGFjaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjo1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0Ojc1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6Mi4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmV4dHJhLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg5ZmZiMCcsIGVuZENvbG9yc3RyPScjOThkY2ZiJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5sYXJnZS1oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5tZWRpdW0taGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zcGxpdCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zbWFsbC1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6NXg7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgJGxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RyZXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLWdhcDo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVsLmdyYXllZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDokZ3JheSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICB9XHJcbiAgICAubmFrZWQsICYubmFrZWQsICoubmFrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDApIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICouY2xpY2thYmxlIHtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuICB9IiwiJGJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeTogIzVjMmE5MmZmO1xyXG4kcHJpbWFyeS1vcGFxdWU6ICM1YzJhOTIwOTtcclxuJGNvbXBsZW1lbnQ6ICMyY2U0ZDhmZjtcclxuJHJlZDogI2Y2MmM0ZDtcclxuJGdyZWVuOiAjM2NiYjNjO1xyXG4kbGlnaHQ6ICNmZjJjZjNmZjtcclxuJGRhcms6ICM1YzJhOTJmZjtcclxuJHdoaXRlOiAjZmVmZWZlO1xyXG4kZ3JheTogIzVmNWY1ZjsiXX0= */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sale',
                templateUrl: './sale.component.html',
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]],
                styleUrls: ['./sale.component.scss']
            }]
    }], function () { return [{ type: src_app_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _dynamic_info_services_now_service__WEBPACK_IMPORTED_MODULE_4__["NowService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputEle', { static: false }]
        }] }); })();


/***/ }),

/***/ "UOdp":
/*!*************************************!*\
  !*** ./src/app/sale/sale.module.ts ***!
  \*************************************/
/*! exports provided: SaleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleModule", function() { return SaleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale.component */ "TWut");
/* harmony import */ var _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.module */ "vKQO");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipe/pipe.module */ "sNRQ");







class SaleModule {
}
SaleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SaleModule });
SaleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SaleModule_Factory(t) { return new (t || SaleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"],
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__["PipeModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SaleModule, { declarations: [_sale_component__WEBPACK_IMPORTED_MODULE_2__["SaleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"], _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__["PipeModule"]], exports: [_sale_component__WEBPACK_IMPORTED_MODULE_2__["SaleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sale_component__WEBPACK_IMPORTED_MODULE_2__["SaleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"],
                    _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_4__["PipeModule"].forRoot()
                ],
                exports: [
                    _sale_component__WEBPACK_IMPORTED_MODULE_2__["SaleComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Vj25":
/*!*****************************************!*\
  !*** ./src/assets/abi/exchangeabi.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeToSetter\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token0\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token1\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pair\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"PairCreated\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"allPairs\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"allPairsLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenB\",\"type\":\"address\"}],\"name\":\"createPair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"pair\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"feeTo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"feeToSetter\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getPair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeTo\",\"type\":\"address\"}],\"name\":\"setFeeTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeToSetter\",\"type\":\"address\"}],\"name\":\"setFeeToSetter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "W0I9":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-chart/dashboard-chart.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardChartComponent", function() { return DashboardChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DashboardChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chart", ctx_r0.chart);
} }
class DashboardChartComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.chart = undefined;
    }
    ngOnInit() {
        this.tempData = this.data;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                backgroundColor: '#2c2c2c',
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'],
                labels: {
                    style: {
                        color: '#fefefe'
                    }
                }
            },
            yAxis: {
                title: {
                    align: null
                },
                labels: {
                    style: {
                        color: '#fefefe'
                    }
                },
                type: 'logarithmic'
            },
            legend: {
                itemStyle: {
                    color: '#fefefe'
                },
                itemHoverStyle: {
                    color: 'grey'
                }
            },
            series: [
                {
                    name: 'Daily Volume (' + this.projectService.project.tokenName + ')',
                    data: [Number(this.data[6].dailyVolumeToken), Number(this.data[5].dailyVolumeToken), Number(this.data[4].dailyVolumeToken),
                        Number(this.data[3].dailyVolumeToken), Number(this.data[2].dailyVolumeToken), Number(this.data[1].dailyVolumeToken), Number(this.data[0].dailyVolumeToken)],
                    type: 'column',
                    color: '#5c2a92ff'
                },
                {
                    name: 'Daily Volume (W' + this.projectService.project.networkCurrency + ')',
                    data: [Number(this.data[6].dailyVolumeETH), Number(this.data[5].dailyVolumeETH), Number(this.data[4].dailyVolumeETH),
                        Number(this.data[3].dailyVolumeETH), Number(this.data[2].dailyVolumeETH), Number(this.data[1].dailyVolumeETH), Number(this.data[0].dailyVolumeETH)],
                    type: 'column',
                    color: '#72B7D6'
                },
                {
                    name: 'Daily Volume (USD)',
                    data: [Number(this.data[6].dailyVolumeUSD), Number(this.data[5].dailyVolumeUSD), Number(this.data[4].dailyVolumeUSD),
                        Number(this.data[3].dailyVolumeUSD), Number(this.data[2].dailyVolumeUSD), Number(this.data[1].dailyVolumeUSD), Number(this.data[0].dailyVolumeUSD)],
                    type: 'column',
                    color: '#3cbb3c'
                },
                {
                    name: this.projectService.project.tokenName + ' Price (USD)',
                    data: [Number(this.data[6].priceUSD), Number(this.data[5].priceUSD), Number(this.data[4].priceUSD),
                        Number(this.data[3].priceUSD), Number(this.data[2].priceUSD), Number(this.data[1].priceUSD), Number(this.data[0].priceUSD)],
                    type: 'spline',
                    color: '#278027'
                },
                {
                    name: this.projectService.project.tokenName + ' Liquidity (USD)',
                    data: [Number(this.data[6].totalLiquidityUSD), Number(this.data[5].totalLiquidityUSD), Number(this.data[4].totalLiquidityUSD),
                        Number(this.data[3].totalLiquidityUSD), Number(this.data[2].totalLiquidityUSD), Number(this.data[1].totalLiquidityUSD), Number(this.data[0].totalLiquidityUSD)],
                    type: 'line',
                    color: '#52fc52'
                },
            ]
        });
    }
}
DashboardChartComponent.ɵfac = function DashboardChartComponent_Factory(t) { return new (t || DashboardChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
DashboardChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardChartComponent, selectors: [["app-dashboard-chart"]], inputs: { data: "data" }, decls: 1, vars: 1, consts: [[3, "chart", 4, "ngIf"], [3, "chart"]], template: function DashboardChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardChartComponent_div_0_Template, 1, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chart !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["ChartDirective"]], styles: ["[_nghost-%COMP%] {\n  border-radius: 8px;\n  max-width: 100%;\n  display: grid;\n  background: #000;\n  grid-template-areas: \". . .\" \". chart .\" \". . .\";\n  grid-template-columns: 10px 1fr 10px;\n  grid-template-rows: 10px 1fr 10px;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  grid-area: chart;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQtY2hhcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JDTEk7RURNSixnREFDQTtFQUdBLG9DQUFBO0VBQ0EsaUNBQUE7QUFISjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRlIiLCJmaWxlIjoiZGFzaGJvYXJkLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdGhlbWUuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiRibGFjaztcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiBjaGFydCAuJ1xyXG4gICAgJy4gLiAuJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCAxZnIgMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTBweCAxZnIgMTBweDtcclxuICAgIGRpdiB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmNoYXJ0O1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgIH1cclxufSIsIiRibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICM1YzJhOTJmZjtcclxuJHByaW1hcnktb3BhcXVlOiAjNWMyYTkyMDk7XHJcbiRjb21wbGVtZW50OiAjMmNlNGQ4ZmY7XHJcbiRyZWQ6ICNmNjJjNGQ7XHJcbiRncmVlbjogIzNjYmIzYztcclxuJGxpZ2h0OiAjZmYyY2YzZmY7XHJcbiRkYXJrOiAjNWMyYTkyZmY7XHJcbiR3aGl0ZTogI2ZlZmVmZTtcclxuJGdyYXk6ICM1ZjVmNWY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-chart',
                templateUrl: './dashboard-chart.component.html',
                styleUrls: ['./dashboard-chart.component.scss']
            }]
    }], function () { return [{ type: src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WMCE":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.component */ "JhD/");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _roadmap_roadmap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roadmap/roadmap.module */ "B0jb");






class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
            _roadmap_roadmap_module__WEBPACK_IMPORTED_MODULE_4__["RoadmapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
        _roadmap_roadmap_module__WEBPACK_IMPORTED_MODULE_4__["RoadmapModule"]], exports: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                    _roadmap_roadmap_module__WEBPACK_IMPORTED_MODULE_4__["RoadmapModule"]
                ],
                exports: [
                    _landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YzOA":
/*!*******************************************!*\
  !*** ./src/assets/abi/grapeswineabi.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_GRAPES\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"log\",\"type\":\"string\"}],\"name\":\"Log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"GRAPES\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LPT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ratioBase100\",\"type\":\"uint256\"}],\"name\":\"setPublicWrappingRatio\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"delayDays\",\"type\":\"uint256\"}],\"name\":\"setUnWrapLockTime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"unWrapLPT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unWrapLockTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"viewPublicWrappingRatio\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"viewUnWrapLockTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"wTransfer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"wrapLPT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.module */ "H6Li");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.module */ "PpLr");
/* harmony import */ var _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.module */ "wMrW");
/* harmony import */ var _system_notification_system_notification_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-notification/system-notification.module */ "AJc3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












// import { RoundPipe } from './pipes/round.pipe';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _system_notification_system_notification_module__WEBPACK_IMPORTED_MODULE_9__["SystemNotificationModule"],
            _graphql_module__WEBPACK_IMPORTED_MODULE_3__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
        _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _system_notification_system_notification_module__WEBPACK_IMPORTED_MODULE_9__["SystemNotificationModule"],
        _graphql_module__WEBPACK_IMPORTED_MODULE_3__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                    _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                    _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _system_notification_system_notification_module__WEBPACK_IMPORTED_MODULE_9__["SystemNotificationModule"],
                    _graphql_module__WEBPACK_IMPORTED_MODULE_3__["GraphQLModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c0Xg":
/*!*********************************************!*\
  !*** ./src/assets/abi/grapescellarabi.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_GRAPES\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"EmergencyWithdraw\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"GRAPES\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"VIPLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_BEP20address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"_widthdrawAnyToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_poolName\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_stakedToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_allocPoint\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_partialWithdraw\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_VIPpool\",\"type\":\"bool\"}],\"name\":\"addPool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"averageFeesPerBlockEpoch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"averagePerBlock\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"averageFeesPerBlockSinceStart\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"averagePerBlock\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_new\",\"type\":\"address\"}],\"name\":\"chgEstateAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractStartBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cumulativeRewardsSinceStart\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"epoch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"epochCalculationStartBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"epochRewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"estatesFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"}],\"name\":\"exit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initBSCPools\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initMasterPools\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initVIPPools\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initializeVault\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"isNonWithdrawbleByAdmins\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"massUpdatePools\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"pendingGRAPES\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pendingRewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pendingTreasuryRewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolInfo\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"poolName\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"stakedToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allocPoint\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"accGRAPESPerShare\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"partialWithdraw\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"VIPpool\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"poolLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardsInThisEpoch\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newFee\",\"type\":\"uint256\"}],\"name\":\"setEstateFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_partialWithdraw\",\"type\":\"bool\"}],\"name\":\"setPartialWithdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_allocPoint\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_withUpdate\",\"type\":\"bool\"}],\"name\":\"setPool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newLimit\",\"type\":\"uint256\"}],\"name\":\"setVIPLimit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startNewEpoch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"teamEstates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAllocPoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"transferTreasuryFees\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"updateRewards\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rewardPaid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"viewGovernanceLevel\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.module */ "vKQO");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _logo_logo_module__WEBPACK_IMPORTED_MODULE_3__["LogoModule"]
                ],
                exports: [
                    _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "d9RS":
/*!*******************************************!*\
  !*** ./src/app/wrapper/wrapper.module.ts ***!
  \*******************************************/
/*! exports provided: WrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperModule", function() { return WrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper.component */ "mK86");




class WrapperModule {
}
WrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WrapperModule });
WrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WrapperModule_Factory(t) { return new (t || WrapperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WrapperModule, { declarations: [_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _static_info_services_header_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-info-services/header-items.service */ "lRPw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wallet/wallet.component */ "EBTS");
/* harmony import */ var _header_item_header_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-item/header-item.component */ "z3pf");







function HeaderComponent_div_1_app_header_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-item", 7);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r2);
} }
const _c0 = function (a0) { return { "opened": a0 }; };
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_app_header_item_1_Template, 1, 1, "app-header-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.menuOpen === true))("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.headerItems);
} }
class HeaderComponent {
    constructor(headerItemsService) {
        this.headerItemsService = headerItemsService;
        this.headerItems = this.headerItemsService.headerItems;
        this.menuOpen = false;
        this.showingPoolTokens = false;
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    setShowingPoolTokens(status) {
        this.showingPoolTokens = status;
        this.menuOpen = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_header_items_service__WEBPACK_IMPORTED_MODULE_2__["HeaderItemsService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 5, consts: [[1, "wrapper"], ["class", "header-items-wrapper menu", 3, "ngClass", 4, "ngIf"], [1, "header-items-wrapper", "button"], [1, "material-icons", 3, "click"], [3, "ngClass", "showingPoolTokens"], [1, "header-items-wrapper", "menu", 3, "ngClass"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_3_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-wallet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showingPoolTokens", function HeaderComponent_Template_app_wallet_showingPoolTokens_5_listener($event) { return ctx.setShowingPoolTokens($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpen === true || ctx.showingPoolTokens === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.menuOpen === true));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _header_item_header_item_component__WEBPACK_IMPORTED_MODULE_5__["HeaderItemComponent"]], styles: ["[_nghost-%COMP%] {\n  grid-area: header;\n  background: #000;\n  display: grid;\n  grid-template-areas: \". . .\" \". content .\" \". . .\";\n  grid-template-columns: 10px 1fr 10px;\n  grid-template-rows: 10px 1fr 10px;\n  z-index: 9999999999998;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  grid-area: content;\n  display: grid;\n  justify-content: stretch;\n  align-content: start;\n  row-gap: 5px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  row-gap: 10px;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  pointer-events: all;\n  cursor: pointer;\n}\n@media (max-width: 600px), (max-height: 800px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.menu[_ngcontent-%COMP%] {\n    width: 0px;\n    height: 0px;\n    overflow: hidden;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%] {\n    display: grid;\n    z-index: 1000000;\n    pointer-events: all;\n    cursor: pointer;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    background: #ff2cf3ff;\n    \n    \n    \n    background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n    \n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: 0.4s;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    pointer-events: none;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    text-shadow: 0px 0px 5px #ff2cf3ff;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.opened.menu[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    min-height: 100%;\n    display: grid !important;\n    transform: translateX(-10px);\n    background: #000;\n    padding: 5px;\n    border-radius: 0px 0px 4px 0px;\n    overflow-y: scroll;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   app-wallet[_ngcontent-%COMP%] {\n  align-self: end;\n  transition: 0.4s;\n}\n@media (max-width: 600px), (max-height: 800px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   app-wallet.opened[_ngcontent-%COMP%] {\n    transition: 0s;\n    opacity: 0;\n    transform: scale(0);\n    overflow: hidden;\n  }\n}\n@media (max-width: 600px), (max-height: 800px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n    grid-auto-flow: column;\n    column-gap: 5px;\n    max-height: 100px;\n    grid-template-areas: \"menu wallet button\";\n    grid-template-columns: 0px 1fr -webkit-max-content;\n    grid-template-columns: 0px 1fr max-content;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.menu[_ngcontent-%COMP%] {\n    grid-area: menu;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.header-items-wrapper.button[_ngcontent-%COMP%] {\n    grid-area: button;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   app-wallet[_ngcontent-%COMP%] {\n    grid-area: wallet;\n  }\n}\n@media (max-height: 800px) {\n  [_nghost-%COMP%] {\n    grid-template-rows: 0px 1fr 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxnQkNISTtFRElKLGFBQUE7RUFDQSxrREFDQTtFQUdBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQUhKO0FBSUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUZSO0FBR1E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQVFBLGdCQUFBO0FBUlo7QUFDWTtFQUNJLGFBQUE7QUFDaEI7QUFBZ0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFFcEI7QUFFWTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQUFsQjtFQUVjO0lBQ0ksYUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFlQSxlQUFBO0VBZGxCO0VBQWtCO0lBQ0ksZUFBQTtJQUNBLHFCQ25DaEI7SURtQ29DLGlCQUFBO0lBQ2lELGFBQUE7SUFDRyw0QkFBQTtJQUN4RSxvRUFBQTtJQUFzRSxxREFBQTtJQUN0RSxtSEFBQTtJQUFxSCxVQUFBO0lBQ3JILDZCQUFBO0lBQ0Esb0NBQUE7SUFDQSxnQkFBQTtFQU90QjtFQUxrQjtJQUNJLG9CQUFBO0VBT3RCO0VBSHNCO0lBQ0ksa0NBQUE7RUFLMUI7RUFBa0I7SUFDSSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHdCQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQkNuRWhCO0lEb0VnQixZQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtFQUV0QjtBQUNGO0FBRVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUNZO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFDbEI7QUFDRjtBQUVRO0VBM0VKO0lBNEVRLHNCQUFBO0lBRUEsZUFBQTtJQUNBLGlCQUFBO0lBQ0EseUNBQUE7SUFDQSxrREFBQTtJQUFBLDBDQUFBO0VBQVY7RUFDVTtJQUNJLGVBQUE7RUFDZDtFQUNVO0lBQ0ksaUJBQUE7RUFDZDtFQUNVO0lBQ0ksaUJBQUE7RUFDZDtBQUNGO0FBRUk7RUF4R0o7SUF5R1EsK0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBncmlkLWFyZWE6aGVhZGVyO1xyXG4gICAgYmFja2dyb3VuZDokYmxhY2s7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJy4gLiAuJ1xyXG4gICAgJy4gY29udGVudCAuJ1xyXG4gICAgJy4gLiAuJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCAxZnIgMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTBweCAxZnIgMTBweDtcclxuICAgIHotaW5kZXg6OTk5OTk5OTk5OTk5ODtcclxuICAgIHNlY3Rpb24ud3JhcHBlciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuICAgICAgICByb3ctZ2FwOjVweDtcclxuICAgICAgICBkaXYuaGVhZGVyLWl0ZW1zLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICAgICAgJi5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSwgKG1heC1oZWlnaHQ6ODAwcHgpIHtcclxuICAgICAgICAgICAgICAgICYubWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6M3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg5ZmZiMCcsIGVuZENvbG9yc3RyPScjOThkY2ZiJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDVweCAkbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLm9wZW5lZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6Zml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czowcHggMHB4IDRweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcHAtd2FsbGV0IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjplbmQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246MC40cztcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpLCAobWF4LWhlaWdodDo4MDBweCkge1xyXG4gICAgICAgICAgICAgICAgJi5vcGVuZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MHM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpLCAobWF4LWhlaWdodDo4MDBweCkge1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAvLyBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjVweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDoxMDBweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ21lbnUgd2FsbGV0IGJ1dHRvbic7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMHB4IDFmciBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgZGl2LmhlYWRlci1pdGVtcy13cmFwcGVyLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOm1lbnU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2LmhlYWRlci1pdGVtcy13cmFwcGVyLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6YnV0dG9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC13YWxsZXQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOndhbGxldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDo4MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMHB4IDFmciAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIiRibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICM1YzJhOTJmZjtcclxuJHByaW1hcnktb3BhcXVlOiAjNWMyYTkyMDk7XHJcbiRjb21wbGVtZW50OiAjMmNlNGQ4ZmY7XHJcbiRyZWQ6ICNmNjJjNGQ7XHJcbiRncmVlbjogIzNjYmIzYztcclxuJGxpZ2h0OiAjZmYyY2YzZmY7XHJcbiRkYXJrOiAjNWMyYTkyZmY7XHJcbiR3aGl0ZTogI2ZlZmVmZTtcclxuJGdyYXk6ICM1ZjVmNWY7Il19 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]]
            }]
    }], function () { return [{ type: _static_info_services_header_items_service__WEBPACK_IMPORTED_MODULE_2__["HeaderItemsService"] }]; }, null); })();


/***/ }),

/***/ "fXFg":
/*!***********************************************************!*\
  !*** ./src/app/dynamic-info-services/exchange.service.ts ***!
  \***********************************************************/
/*! exports provided: ExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return ExchangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "r5tf");





class ExchangeService {
    constructor(apollo, web3) {
        this.apollo = apollo;
        this.web3 = web3;
        this.networkCurrencyPriceUSD = this.web3.apyCalculator.networkCurrency.price;
        this.grapesContractAddress = this.web3.grapesContractAddress;
        setInterval(() => {
            this.apollo
                .watchQuery({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a `
        {
            token(id: "${this.grapesContractAddress}" ) {
                id
                derivedETH
                name
                pairBase (first: 20, orderBy: volumeUSD, orderDirection: desc)  {
                  volumeToken1
                  volumeToken0
                  volumeUSD
                }
                tokenDayData (first: 10, orderBy: date, orderDirection: desc) {
                  date
                  priceUSD
                  totalLiquidityToken
                  totalLiquidityUSD
                  totalLiquidityETH
                  dailyVolumeETH
                  dailyVolumeToken
                  dailyVolumeUSD
                }
            },
        }
        `,
            })
                .valueChanges.subscribe((result) => {
                if (result.data.token !== null) {
                    this.web3.exchange.dayData.next(result.data.token.tokenDayData);
                    this.web3.exchange.volume.next(Number(result.data.token.pairBase[0].volumeToken0));
                    this.web3.exchange.volumeNetworkCurrency.next(Number(result.data.token.pairBase[0].volumeToken1));
                    // tslint:disable-next-line:max-line-length
                    this.web3.exchange.volumeUSD.next(Number(Math.floor(result.data.token.pairBase[0].volumeToken1 * this.networkCurrencyPriceUSD.getValue())));
                    this.web3.exchange.price.next(Number(result.data.token.derivedETH));
                    this.web3.exchange.priceUSD.next(Number(result.data.token.derivedETH) * this.networkCurrencyPriceUSD.getValue());
                }
            });
        }, 10000);
    }
}
ExchangeService.ɵfac = function ExchangeService_Factory(t) { return new (t || ExchangeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"])); };
ExchangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExchangeService, factory: ExchangeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExchangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "ySb0");




class FooterComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.socials = this.projectService.project.socials;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 3, consts: [[1, "wrapper"], [1, "socials"], ["id", "telegram", "target", "_blank", 1, "icon", "after-info", "social", 3, "href"], [1, "material-icons"], ["id", "medium", "target", "_blank", 1, "icon", "after-info", "social", 3, "href"], ["id", "github", "target", "_blank", 1, "icon", "after-info", "social", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "auto_stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socials.telegram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socials.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socials.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]], styles: ["[_nghost-%COMP%] {\n  grid-area: footer;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  display: grid;\n  grid-template-areas: \". . .\" \". content .\" \". . .\";\n  grid-template-columns: 2.5px 1fr 2.5px;\n  grid-template-rows: 2.5px 1fr 2.5px;\n  color: #000;\n  max-height: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  grid-area: content;\n  display: grid;\n  justify-content: space-around;\n  align-content: space-around;\n  align-items: center;\n  text-align: center;\n}\n@media (max-height: 600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n    grid-auto-flow: column;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.paragraphs[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.paragraphs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.socials[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  column-gap: 5px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.socials[_ngcontent-%COMP%]   a#github[_ngcontent-%COMP%]:after {\n  content: \"Github\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.socials[_ngcontent-%COMP%]   a#telegram[_ngcontent-%COMP%]:after {\n  content: \"Telegram\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.socials[_ngcontent-%COMP%]   a#medium[_ngcontent-%COMP%]:after {\n  content: \"Medium\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDWSxxQkNHUjtFREg0QixpQkFBQTtFQUNpRCxhQUFBO0VBQ0csNEJBQUE7RUFDeEUsb0VBQUE7RUFBc0UscURBQUE7RUFDdEUsbUhBQUE7RUFBcUgsVUFBQTtFQUNqSSxhQUFBO0VBQ0Esa0RBQ0E7RUFHQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsV0NmSTtFRGdCSixnQkFBQTtBQUVKO0FBREk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdSO0FBRlE7RUFQSjtJQVFRLHNCQUFBO0VBS1Y7QUFDRjtBQUpRO0VBQ0ksZUFBQTtBQU1aO0FBTFk7RUFDSSxlQUFBO0FBT2hCO0FBSlE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQU1aO0FBSG9CO0VBQ0ksaUJBQUE7QUFLeEI7QUFEb0I7RUFDSSxtQkFBQTtBQUd4QjtBQUNvQjtFQUNJLGlCQUFBO0FBQ3hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBncmlkLWFyZWE6Zm9vdGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzk4ZGNmYicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiBjb250ZW50IC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVweCAxZnIgMi41cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIuNXB4IDFmciAyLjVweDtcclxuICAgIGNvbG9yOiRibGFjaztcclxuICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIHNlY3Rpb24ud3JhcHBlciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDo2MDBweCkge1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYucGFyYWdyYXBocyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4uc29jaWFscyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6NXB4O1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICYjZ2l0aHViIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDonR2l0aHViJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmI3RlbGVncmFtIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDonVGVsZWdyYW0nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYjbWVkaXVtIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDonTWVkaXVtJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkYmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5OiAjNWMyYTkyZmY7XHJcbiRwcmltYXJ5LW9wYXF1ZTogIzVjMmE5MjA5O1xyXG4kY29tcGxlbWVudDogIzJjZTRkOGZmO1xyXG4kcmVkOiAjZjYyYzRkO1xyXG4kZ3JlZW46ICMzY2JiM2M7XHJcbiRsaWdodDogI2ZmMmNmM2ZmO1xyXG4kZGFyazogIzVjMmE5MmZmO1xyXG4kd2hpdGU6ICNmZWZlZmU7XHJcbiRncmF5OiAjNWY1ZjVmOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "g6RT":
/*!**********************************************!*\
  !*** ./src/app/farms/farm/farm.component.ts ***!
  \**********************************************/
/*! exports provided: FarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmComponent", function() { return FarmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/animations */ "J1Ni");
/* harmony import */ var src_app_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dynamic-info-services/notifications.service */ "0f74");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["inputEle"];
function FarmComponent_section_0_span_4_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poolInfo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](poolInfo_r23.poolName);
} }
function FarmComponent_section_0_span_4_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poolInfo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](poolInfo_r23.poolName);
} }
function FarmComponent_section_0_span_4_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poolInfo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](poolInfo_r23.poolName);
} }
function FarmComponent_section_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_0_span_4_h3_1_Template, 2, 1, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FarmComponent_section_0_span_4_h3_2_Template, 2, 1, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmComponent_section_0_span_4_h3_3_Template, 2, 1, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poolInfo_r23 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", poolInfo_r23.poolName.length <= 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", poolInfo_r23.poolName.length > 15 && poolInfo_r23.poolName.length <= 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", poolInfo_r23.poolName.length > 25);
} }
function FarmComponent_section_0_span_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r31.project.exchangeAddress + "#/add/BNB/" + ctx_r31.project.contracts.tokenAddress, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FarmComponent_section_0_span_6_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_span_6_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.goWrapper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "wrap_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_span_6_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "swap_horizontal_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tokenAddress_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r33.project.exchangeAddress + "#/swap?outputCurrency=" + tokenAddress_r30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FarmComponent_section_0_span_6_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "swap_horizontal_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r34.project.exchangeAddress + "#/swap?outputCurrency=" + ctx_r34.project.contracts.tokenAddress, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FarmComponent_section_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_0_span_6_a_1_Template, 3, 1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FarmComponent_section_0_span_6_a_2_Template, 3, 0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmComponent_section_0_span_6_a_3_Template, 3, 1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FarmComponent_section_0_span_6_a_4_Template, 3, 1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tokenAddress_r30 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pid === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pid === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pid !== 2 && ctx_r3.pid !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pid === 2 || ctx_r3.pid === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.project.blockExplorerAddress + "/token/" + tokenAddress_r30 + "?a=" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r3.user.address), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FarmComponent_section_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function FarmComponent_section_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stake ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", get ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r38 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.project.blockExplorerAddress + "/token/" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r6.data.token.address) + "?a=" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx_r6.user.address), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.project.blockExplorerAddress + "/token/" + ctx_r6.project.contracts.tokenAddress + "?a=" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r6.user.address), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.project.tokenName);
} }
function FarmComponent_section_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total Value Locked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tvl_r39 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, tvl_r39, "USD"));
} }
function FarmComponent_section_0_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
const _c1 = function (a0, a1) { return { "small": a0, "extra-small": a1 }; };
function FarmComponent_section_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "APE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ape_r40 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, ape_r40 > 100000000, ape_r40 > 1000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ape_r40), "%");
} }
function FarmComponent_section_0_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poolInfo_r41 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, poolInfo_r41.allocPoint), "x");
} }
function FarmComponent_section_0_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function FarmComponent_section_0_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_span_28_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.setMaxBalance(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userBalance_r42 = ctx.ngIf;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, userBalance_r42 / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, ctx_r14.data.token.symbol), 0, 4));
} }
function FarmComponent_section_0_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_span_30_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.setMaxDeposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deposits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userPoolInfo_r45 = ctx.ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, userPoolInfo_r45.amount / 1000000000000000000));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, ctx_r15.data.token.symbol), 0, 4));
} }
function FarmComponent_section_0_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pendingGrapes_r48 = ctx.ngIf;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, pendingGrapes_r48 / 1000000000000000000, "1.10-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.project.tokenName);
} }
function FarmComponent_section_0_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function FarmComponent_section_0_span_36_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 50, 51);
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r49.inputPlaceholder);
} }
function FarmComponent_section_0_span_36_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function FarmComponent_section_0_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_0_span_36_input_1_Template, 2, 1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmComponent_section_0_span_36_ng_template_3_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r19.data.userBalance))("ngIfElse", _r50);
} }
function FarmComponent_section_0_div_37_span_1_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_1_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Depositing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_1_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deposited");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_1_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_1_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_1_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_1_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1, a2) { return { "working": a0, "failed": a1, "success": a2 }; };
function FarmComponent_section_0_div_37_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_div_37_span_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r67.deposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FarmComponent_section_0_div_37_span_1_label_7_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FarmComponent_section_0_div_37_span_1_label_9_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FarmComponent_section_0_div_37_span_1_label_11_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FarmComponent_section_0_div_37_span_1_label_13_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FarmComponent_section_0_div_37_span_1_label_15_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FarmComponent_section_0_div_37_span_1_label_17_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FarmComponent_section_0_div_37_span_1_label_19_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](32, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r54.data.depositButton) === 1 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r54.data.depositButton) === 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx_r54.data.depositButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx_r54.data.depositButton) === 2 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 16, ctx_r54.data.depositButton) === 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx_r54.data.depositButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 20, ctx_r54.data.depositButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 22, ctx_r54.data.depositButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 24, ctx_r54.data.depositButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 26, ctx_r54.data.depositButton) === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 28, ctx_r54.data.depositButton) === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 30, ctx_r54.data.depositButton) === 10);
} }
function FarmComponent_section_0_div_37_span_3_button_1_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_1_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdrawing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_1_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdrawn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_1_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_1_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_div_37_span_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r77.withdraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FarmComponent_section_0_div_37_span_3_button_1_label_4_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FarmComponent_section_0_div_37_span_3_button_1_label_6_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FarmComponent_section_0_div_37_span_3_button_1_label_8_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FarmComponent_section_0_div_37_span_3_button_1_label_10_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FarmComponent_section_0_div_37_span_3_button_1_label_12_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r70.data.withdrawButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r70.data.withdrawButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r70.data.withdrawButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r70.data.withdrawButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 14, ctx_r70.data.withdrawButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx_r70.data.withdrawButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, ctx_r70.data.withdrawButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx_r70.data.withdrawButton) === 10);
} }
function FarmComponent_section_0_div_37_span_3_button_3_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_3_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdrawing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_3_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Withdrawn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_3_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_3_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_div_37_span_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r84.partialWithdrawWaiver(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FarmComponent_section_0_div_37_span_3_button_3_label_4_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FarmComponent_section_0_div_37_span_3_button_3_label_6_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FarmComponent_section_0_div_37_span_3_button_3_label_8_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FarmComponent_section_0_div_37_span_3_button_3_label_10_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FarmComponent_section_0_div_37_span_3_button_3_label_12_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r71.data.withdrawButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r71.data.withdrawButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r71.data.withdrawButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r71.data.withdrawButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 14, ctx_r71.data.withdrawButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx_r71.data.withdrawButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, ctx_r71.data.withdrawButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx_r71.data.withdrawButton) === 10);
} }
function FarmComponent_section_0_div_37_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_0_div_37_span_3_button_1_Template, 14, 26, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmComponent_section_0_div_37_span_3_button_3_Template, 14, 26, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r55.data.poolInfo).partialWithdraw === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r55.data.poolInfo).partialWithdraw === false);
} }
function FarmComponent_section_0_div_37_span_5_button_1_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_1_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claiming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_1_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claimed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_1_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_1_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_div_37_span_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r94.claim(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FarmComponent_section_0_div_37_span_5_button_1_label_4_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FarmComponent_section_0_div_37_span_5_button_1_label_6_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FarmComponent_section_0_div_37_span_5_button_1_label_8_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FarmComponent_section_0_div_37_span_5_button_1_label_10_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FarmComponent_section_0_div_37_span_5_button_1_label_12_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r87.data.claimButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r87.data.claimButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r87.data.claimButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r87.data.claimButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 14, ctx_r87.data.claimButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx_r87.data.claimButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, ctx_r87.data.claimButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx_r87.data.claimButton) === 10);
} }
function FarmComponent_section_0_div_37_span_5_button_3_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_3_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claiming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_3_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claimed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_3_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_3_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_0_div_37_span_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_div_37_span_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r101.partialWithdrawWaiver(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FarmComponent_section_0_div_37_span_5_button_3_label_4_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FarmComponent_section_0_div_37_span_5_button_3_label_6_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FarmComponent_section_0_div_37_span_5_button_3_label_8_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FarmComponent_section_0_div_37_span_5_button_3_label_10_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FarmComponent_section_0_div_37_span_5_button_3_label_12_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r88.data.claimButton) === 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r88.data.claimButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r88.data.claimButton) === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, ctx_r88.data.claimButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 14, ctx_r88.data.claimButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx_r88.data.claimButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, ctx_r88.data.claimButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx_r88.data.claimButton) === 10);
} }
function FarmComponent_section_0_div_37_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_0_div_37_span_5_button_1_Template, 14, 26, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmComponent_section_0_div_37_span_5_button_3_Template, 14, 26, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r56.data.poolInfo).partialWithdraw === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r56.data.poolInfo).partialWithdraw === false);
} }
function FarmComponent_section_0_div_37_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function FarmComponent_section_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_0_div_37_span_1_Template, 21, 36, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FarmComponent_section_0_div_37_span_3_Template, 5, 6, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FarmComponent_section_0_div_37_span_5_Template, 5, 6, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FarmComponent_section_0_div_37_ng_template_7_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx_r20.data.userBalance))("ngIfElse", _r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx_r20.data.userBalance))("ngIfElse", _r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, ctx_r20.data.userBalance))("ngIfElse", _r57);
} }
function FarmComponent_section_0_label_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function FarmComponent_section_0_label_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
const _c3 = function (a0, a1) { return { "super-apy": a0, "vip-pool": a1 }; };
function FarmComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FarmComponent_section_0_span_4_Template, 4, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FarmComponent_section_0_span_6_Template, 9, 7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FarmComponent_section_0_ng_template_8_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FarmComponent_section_0_span_14_Template, 12, 10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FarmComponent_section_0_span_16_Template, 6, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FarmComponent_section_0_ng_template_18_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FarmComponent_section_0_span_21_Template, 6, 7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FarmComponent_section_0_span_23_Template, 4, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FarmComponent_section_0_ng_template_25_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FarmComponent_section_0_span_28_Template, 11, 10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FarmComponent_section_0_span_30_Template, 11, 10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FarmComponent_section_0_span_32_Template, 9, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FarmComponent_section_0_ng_template_34_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FarmComponent_section_0_span_36_Template, 5, 5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FarmComponent_section_0_div_37_Template, 9, 13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_0_Template_span_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.showMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FarmComponent_section_0_label_39_Template, 4, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FarmComponent_section_0_label_40_Template, 4, 1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 25, ctx_r0.data.poolInfo).allocPoint >= 10000, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 27, ctx_r0.data.poolInfo).VIPpool === true))("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 29, ctx_r0.data.poolInfo))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 31, ctx_r0.data.token.address))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 33, ctx_r0.data.token.symbol))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 35, ctx_r0.data.tvl))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 37, ctx_r0.data.ape))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 39, ctx_r0.data.poolInfo))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 41, ctx_r0.data.userBalance))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 43, ctx_r0.data.userPoolInfo))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 45, ctx_r0.data.pendingGrapes))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showingMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showingMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showingMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showingMore);
} }
function FarmComponent_section_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This pool does not allow for partial withdrawals. If you'd like to withdraw 100% of your deposit, please confirm below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FarmComponent_section_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This pool does not allow for claiming rewards without doing a full withdrawal. If you'd like to claim your rewards, and fully withdraw your deposit, please confirm below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FarmComponent_section_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r109.withdrawAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Withdraw ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r111.claimAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FarmComponent_section_1_ng_container_5_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FarmComponent_section_1_ng_container_6_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FarmComponent_section_1_button_7_Template, 3, 0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FarmComponent_section_1_button_8_Template, 3, 0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmComponent_section_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.cancelDisclaimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r1.data.poolInfo).poolName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.partialWithdrawDisclaimer === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.partialWithdrawDisclaimer === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.partialWithdrawDisclaimer === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.partialWithdrawDisclaimer === 2);
} }
class FarmComponent {
    constructor(web3, projectService, router, notificationsService) {
        this.web3 = web3;
        this.projectService = projectService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.pid = 0;
        this.data = this.web3.poolInfo[this.pid];
        this.inputPlaceholder = 'Enter an amount to deposit or withdraw.';
        this.claimButton = this.web3.poolInfo[this.pid].claimButton;
        this.withdrawButton = this.web3.poolInfo[this.pid].withdrawButton;
        this.depositButton = this.web3.poolInfo[this.pid].depositButton;
        this.project = this.projectService.project;
        this.user = this.web3.user;
        this.partialWithdrawDisclaimer = 0;
        this.showingMore = false;
    }
    ngOnInit() {
    }
    getData() {
        this.data = this.web3.poolInfo[this.pid];
    }
    deposit() {
        const value = Number(Number(this.inputEle.nativeElement.value));
        if (value === 0) {
            this.web3.poolInfo[this.pid].depositButton.next(3);
            this.notificationsService.notify({
                title: 'Deposit Error',
                icon: 'alarm',
                text: 'There was an error depositing your tokens to the pool named ' + this.data.poolInfo.getValue().poolName + '.',
                date: new Date()
            });
            setTimeout(() => {
                this.web3.poolInfo[this.pid].depositButton.next(0);
            }, 2500);
            return;
        }
        this.web3.deposit(this.pid, value);
    }
    withdraw() {
        const value = Number(Number(this.inputEle.nativeElement.value));
        if (value === 0) {
            this.web3.poolInfo[this.pid].withdrawButton.next(3);
            this.notificationsService.notify({
                title: 'Withdraw Error',
                icon: 'alarm',
                text: 'There was an error withdrawing your tokens from the pool named ' + this.data.poolInfo.getValue().poolName + '.',
                date: new Date()
            });
            setTimeout(() => {
                this.web3.poolInfo[this.pid].withdrawButton.next(0);
            }, 2500);
            return;
        }
        this.web3.withdraw(this.pid, value);
    }
    withdrawAll() {
        const value = Number(Number(this.data.userPoolInfo.getValue().amount));
        this.web3.withdrawAll(this.pid, value);
        this.partialWithdrawDisclaimer = 0;
    }
    partialWithdrawWaiver(claimOrWithdraw) {
        this.partialWithdrawDisclaimer = claimOrWithdraw;
    }
    cancelDisclaimer() {
        this.partialWithdrawDisclaimer = 0;
    }
    claim() {
        this.web3.claim(this.pid);
    }
    claimAll() {
        const value = Number(Number(this.data.userPoolInfo.getValue().amount));
        this.web3.claimAll(this.pid, value);
        this.partialWithdrawDisclaimer = 0;
    }
    showMore() {
        this.showingMore = !this.showingMore;
    }
    goWrapper() {
        this.router.navigateByUrl('wrapper');
    }
    setMaxDeposit() {
        this.inputEle.nativeElement.value = ((this.data.userPoolInfo.getValue().amount / 1e18));
    }
    setMaxBalance() {
        this.inputEle.nativeElement.value = ((this.data.userBalance.getValue() / 1e18));
    }
}
FarmComponent.ɵfac = function FarmComponent_Factory(t) { return new (t || FarmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"])); };
FarmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmComponent, selectors: [["app-farm"]], viewQuery: function FarmComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEle = _t.first);
    } }, inputs: { pid: "pid", data: "data" }, decls: 2, vars: 2, consts: [["class", "wrapper", 3, "ngClass", 4, "ngIf"], ["class", "disclaimer", 4, "ngIf"], [1, "wrapper", 3, "ngClass"], ["id", "name", 1, "medium-container", "inverse", "naked"], ["class", "large-header", 4, "ngIf", "ngIfElse"], ["class", "small-container", 4, "ngIf", "ngIfElse"], ["class", "greyed-bar"], ["greyed", ""], ["id", "info", 1, "small-container", "mushy", "naked"], [1, "small-header"], [1, "material-icons"], ["class", "small-header", 4, "ngIf", "ngIfElse"], ["id", "apy", 1, "medium-container", "split", "naked"], ["class", "medium-header", "id", "ape", 4, "ngIf", "ngIfElse"], ["class", "medium-header", 4, "ngIf", "ngIfElse"], ["id", "misc", 1, "small-container"], ["class", "small-header value clickable", 3, "click", 4, "ngIf", "ngIfElse"], ["class", "small-header value", 4, "ngIf", "ngIfElse"], ["class", "input", "id", "input", 4, "ngIf"], ["class", "small-container", "id", "buttons", 4, "ngIf"], ["id", "show", 1, "large-header", 3, "click"], ["class", "show extra", 4, "ngIf"], [1, "large-header"], [4, "ngIf"], ["class", "small", 4, "ngIf"], ["class", "extra-small", 4, "ngIf"], [1, "small"], [1, "extra-small"], [1, "small-container"], ["class", "icon after-info invert short", "id", "pool", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "icon after-info invert short", "id", "wrap", 3, "click", 4, "ngIf"], ["class", "icon after-info invert short", "id", "swap", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "check", "target", "_blank", 1, "icon", "after-info", "invert", "short", 3, "href"], ["id", "pool", "target", "_blank", 1, "icon", "after-info", "invert", "short", 3, "href"], ["id", "wrap", 1, "icon", "after-info", "invert", "short", 3, "click"], ["id", "swap", "target", "_blank", 1, "icon", "after-info", "invert", "short", 3, "href"], [1, "greyed-bar"], ["id", "block-check", "target", "_blank", "target", "_blank", 1, "after-info", 3, "href"], ["id", "block-check", "target", "_blank", 1, "after-info", 3, "href"], [1, "title"], [1, "value"], ["id", "ape", 1, "medium-header"], [1, "value", 3, "ngClass"], [1, "medium-header"], [1, "small-header", "value", "clickable", 3, "click"], [1, "title", "clickable"], [1, "value", "small", "clickable"], [1, "small-header", "value"], ["id", "input", 1, "input"], [3, "placeholder", 4, "ngIf", "ngIfElse"], [3, "placeholder"], ["inputEle", ""], ["id", "buttons", 1, "small-container"], ["class", "button", "id", "deposit", 4, "ngIf", "ngIfElse"], ["class", "button", "id", "withdraw", 4, "ngIf", "ngIfElse"], ["class", "button", "id", "claim", 4, "ngIf", "ngIfElse"], ["id", "deposit", 1, "button"], [3, "ngClass", "click"], ["id", "withdraw", 1, "button"], [3, "ngClass", "click", 4, "ngIf"], ["id", "claim", 1, "button"], [1, "show", "extra"], [1, "disclaimer"], [3, "click", 4, "ngIf"], [3, "click"]], template: function FarmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FarmComponent_section_0_Template, 41, 50, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmComponent_section_1_Template, 12, 8, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data && ctx.partialWithdrawDisclaimer === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.partialWithdrawDisclaimer === 1 || ctx.partialWithdrawDisclaimer === 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-areas: \". . .\" \". wrapper .\" \". . .\";\n  grid-template-columns: 10px 1fr 10px;\n  grid-template-rows: 10px 1fr 10px;\n  position: relative;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  grid-area: wrapper;\n  display: grid;\n  grid-template-areas: \". . .\" \". apy .\" \". name .\" \". info .\" \". show .\" \". misc .\" \". input .\" \". buttons .\" \". . .\";\n  grid-template-columns: 20px 1fr 20px;\n  grid-template-rows: 10px -webkit-max-content 1fr -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content 10px;\n  grid-template-rows: 10px max-content 1fr max-content max-content max-content max-content max-content 10px;\n  row-gap: 10px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   .naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#input[_ngcontent-%COMP%] {\n  grid-area: input;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#show[_ngcontent-%COMP%] {\n  grid-area: show;\n  align-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#show[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  align-self: center;\n  display: grid;\n  align-items: center;\n  justify-self: stat;\n  grid-auto-flow: column;\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n  background: rgba(0, 0, 0, 0.3);\n  color: #ff2cf3ff;\n  border-radius: 4px;\n  transition: 0.4s;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#show[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#show[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.6);\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a#pool[_ngcontent-%COMP%]:after {\n  content: \"Add Liquidity\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a#swap[_ngcontent-%COMP%]:after {\n  content: \"Buy Tokens\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a#check[_ngcontent-%COMP%]:after {\n  content: \"View Token Code\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a#block-check[_ngcontent-%COMP%] {\n  position: relative;\n  color: #ff2cf3ff;\n  font-weight: 900;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a#block-check[_ngcontent-%COMP%]:after {\n  content: \"View On Block Explorer\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a#wrap[_ngcontent-%COMP%]:after {\n  content: \"Wrap Liquidity\";\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#name[_ngcontent-%COMP%] {\n  grid-area: name;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#info[_ngcontent-%COMP%] {\n  grid-area: info;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#apy[_ngcontent-%COMP%] {\n  grid-area: apy;\n  grid-template-columns: 1fr -webkit-min-content;\n  grid-template-columns: 1fr min-content;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#apy[_ngcontent-%COMP%]   span#ape[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#apy[_ngcontent-%COMP%]   span#ape[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#apy[_ngcontent-%COMP%]   span#ape[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 900;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#apy[_ngcontent-%COMP%]   span#ape[_ngcontent-%COMP%]   label.value.extra-small[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 900;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#misc[_ngcontent-%COMP%] {\n  grid-area: misc;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div#buttons[_ngcontent-%COMP%] {\n  grid-area: buttons;\n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px aqua, -5px -5px 5px pink, 5px -5px 5px yellowgreen, -5px 5px 5px limegreen;\n  animation: rainbow 6s infinite ease-in-out;\n}\n@keyframes rainbow {\n  25% {\n    box-shadow: 0px 5px 10px limegreen, -5px -5px 10px aqua, 5px -5px 10px pink, -5px 5px 10px yellowgreen;\n  }\n  50% {\n    box-shadow: 0px 5px 10px yellowgreen, -5px -5px 10px limegreen, 5px -5px 10px aqua, -5px 5px 10px pink;\n  }\n  75% {\n    box-shadow: 0px 5px 10px pink, -5px -5px 10px yellowgreen, 5px -5px 10px limegreen, -5px 5px 10px aqua;\n  }\n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  \n  background: #dd2100;\n  \n  \n  \n  background: linear-gradient(to bottom, aqua 0%, pink 42%, yellowgreen 63%, limegreen 100%);\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   div#info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  \n  background: #dd2100;\n  \n  \n  \n  background: linear-gradient(to bottom, aqua 0%, pink 42%, yellowgreen 63%, limegreen 100%);\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  \n  background: #dd2100;\n  \n  \n  \n  background: linear-gradient(to bottom, aqua 0%, pink 42%, yellowgreen 63%, limegreen 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#32cd32\",GradientType=0 );\n  \n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.large-header#show[_ngcontent-%COMP%]   label.show.extra[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.medium-header#show[_ngcontent-%COMP%]   label.show.extra[_ngcontent-%COMP%] {\n  \n  background: #dd2100;\n  \n  \n  \n  background: linear-gradient(to bottom, aqua 0%, pink 42%, yellowgreen 63%, limegreen 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#32cd32\",GradientType=0 );\n  \n  color: #000;\n  box-shadow: 0px 0px 0px #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.large-header#show[_ngcontent-%COMP%]   label.show.extra[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.medium-header#show[_ngcontent-%COMP%]   label.show.extra[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 5px 10px aqua, -5px -5px 10px pink, 5px -5px 10px yellowgreen, -5px 5px 10px limegreen;\n}\n[_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.super-apy[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  \n  background: #dd2100;\n  \n  \n  \n  background: linear-gradient(to bottom, aqua 0%, pink 42%, yellowgreen 63%, limegreen 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffff\", endColorstr=\"#32cd32\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper.vip-pool[_ngcontent-%COMP%] {\n  background: #5c2a9209;\n  box-shadow: 0px 0px 10px #2ce4d8ff;\n}\n[_nghost-%COMP%]   section.disclaimer[_ngcontent-%COMP%] {\n  grid-area: wrapper;\n  display: grid;\n  row-gap: 10px;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.disclaimer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXJtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxjb250YWluZXJzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esa0RBQ0E7RUFHQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0hBQ0E7RUFTQSxvQ0FBQTtFQUNBLHlKQUFBO0VBQUEseUdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFYUjtBQ2pCSTtFQUNJLFdDSEE7QUZzQlI7QUNqQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEbUJOO0FDbEJNO0VBQ0ksOEJBQUE7QURvQlY7QUNuQlU7RUFDSSxtQkFBQTtBRHFCZDtBQ25CVTtFQUNJLGlCQUFBO0FEcUJkO0FDbEJNO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FEb0JWO0FDbEJNO0VBQ0ksOENBQUE7RUFBQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURvQlY7QUNuQlU7RUFDRSw4Q0FBQTtFQUFBLHNDQUFBO0FEcUJaO0FDbEJNO0VBQ0k7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsYUFBQTtFRG9CVjtFQ25CVTtJQUNJLG9CQUFBO0VEcUJkO0VDbkJVO0lBQ0ksb0JBQUE7RURxQmQ7QUFDRjtBQ2xCTTtFQTFDRjtJQTJDSSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtFRHFCTjtBQUNGO0FDbkJJO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFNQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRGdCTjtBQ3ZCTTtFQUpGO0lBS0ksK0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUQwQk47QUFDRjtBQ3RCTTtFQUNJLGtFQUFBO0VBQUEsa0RBQUE7RUFDQSx1QkFBQTtFQU9BLG1CQUFBO0FEa0JWO0FDeEJVO0VBQ0ksZ0JBQUE7QUQwQmQ7QUN6QmM7RUFDSSxnQkFBQTtBRDJCbEI7QUNwQlE7RUFDSSxtQkFBQTtBRHNCWjtBQ3BCZ0I7RUFDSSxxQkM1RVo7RUQ0RWdDLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBRXJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQzFGWjtBRm9IUjtBQ3pCb0I7RUFDSSxjQ3BGaEI7QUYrR1I7QUN2Qlk7RUFDSSxpQkFBQTtFQUNBLGdCQ2pHTjtFRG1HTSxlQUFBO0VBSUEsZ0JBQUE7RUFTQSxxQkMzR1I7RUQyRzRCLGlCQUFBO0VBQ2lELGFBQUE7RUFDRyw0QkFBQTtFQUN4RSxvRUFBQTtFQUFzRSxxREFBQTtFQUN0RSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QURrQmhCO0FDcENnQjtFQUxKO0lBTVEsZUFBQTtFRHVDbEI7QUFDRjtBQ3JDZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEdUNwQjtBQ3JDZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEdUNwQjtBQzdCWTtFQUNJLGVBQUE7QUQrQmhCO0FDNUJRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUQ4Qlo7QUM1QlE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRDhCWjtBQzdCWTtFQUNJLGVBQUE7QUQrQmhCO0FDOUJnQjtFQUNJLGNDbklaO0FGbUtSO0FDOUJnQjtFQUNJLFdDOUlaO0FGOEtSO0FDN0JZO0VBQ0ksOEJBQUE7QUQrQmhCO0FDOUJnQjtFQUNJLG1CQUFBO0FEZ0NwQjtBQzlCZ0I7RUFDSSxpQkFBQTtBRGdDcEI7QUM1QmdCO0VBQ0ksZUFBQTtBRDhCcEI7QUMxQlE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwyREFBQTtFQUFBLDJDQUFBO0VBQ0EsY0FBQTtBRDRCWjtBQzNCWTtFQUNJLGVBQUE7RUFDQSxjQy9KUjtBRjRMUjtBQzVCZ0I7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUQ4QnBCO0FDN0JvQjtFQUNJLGtCQUFBO0FEK0J4QjtBQzVCZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FEOEJwQjtBQ3pCb0I7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUQyQnhCO0FDMUJ3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRDRCNUI7QUMzQjRCO0VBQ0ksZUFBQTtBRDZCaEM7QUMxQndCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FENEI1QjtBQ3JCSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUR1QlI7QUNyQkk7RUFDSSx1Q0FBQTtBRHVCUjtBQ3JCSTtFQUNJLGVBQUE7QUR1QlI7QUEvTVk7RUFDSSxnQkFBQTtBQWlOaEI7QUEvTVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFpTmhCO0FBaE5nQjtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhEQUFBO0VBQUEsOENBQUE7RUFDQSw4QkFBQTtFQUNBLGdCRXpDWjtFRjBDWSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFrTnBCO0FBak5vQjtFQUNJLG9CQUFBO0FBbU54QjtBQWpOb0I7RUFDSSw4QkFBQTtBQW1OeEI7QUE5TVE7RUFDSSxlQUFBO0FBZ05aO0FBOU1nQjtFQUNJLHdCQUFBO0FBZ05wQjtBQTVNZ0I7RUFDSSxxQkFBQTtBQThNcEI7QUExTWdCO0VBQ0ksMEJBQUE7QUE0TXBCO0FBek1ZO0VBQ0ksa0JBQUE7RUFDQSxnQkUzRVI7RUY0RVEsZ0JBQUE7QUEyTWhCO0FBMU1nQjtFQUNJLGlDQUFBO0FBNE1wQjtBQXhNZ0I7RUFDSSx5QkFBQTtBQTBNcEI7QUF2TVk7RUFDSSxxQkV2RlI7RUZ1RjRCLGlCQUFBO0VBQ2lELGFBQUE7RUFDRyw0QkFBQTtFQUN4RSxvRUFBQTtFQUFzRSxxREFBQTtFQUN0RSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QUE4TWhCO0FBMU1ZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUE0TWhCO0FBMU1ZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUE0TWhCO0FBM01nQjtFQUNJLHFCRXpHWjtFRnlHZ0MsaUJBQUE7RUFDOEMsYUFBQTtFQUNHLDRCQUFBO0VBQ3JFLG9FQUFBO0VBQW1FLHFEQUFBO0VBQ25FLG1IQUFBO0VBQXFILFVBQUE7RUFDckgsNkJBQUE7RUFDQSxvQ0FBQTtBQWtOcEI7QUFoTmdCO0VBQ0ksaUJBQUE7QUFrTnBCO0FBL01ZO0VBQ0ksY0FBQTtFQUNBLDhDQUFBO0VBQUEsc0NBQUE7QUFpTmhCO0FBL01vQjtFQUNJLGlCQUFBO0FBaU54QjtBQS9Nb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlOeEI7QUFoTndCO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWtONUI7QUFoTndCO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWtONUI7QUE3TVk7RUFDSSxlQUFBO0FBK01oQjtBQTdNWTtFQUNJLGtCQUFBO0FBK01oQjtBQTVNUTtFQUVJLGtHQUFBO0VBQ0EsMENBQUE7QUE2TVo7QUE1TVk7RUFDSTtJQUNJLHNHQUFBO0VBOE1sQjtFQTVNYztJQUNJLHNHQUFBO0VBOE1sQjtFQTVNYztJQUNJLHNHQUFBO0VBOE1sQjtBQUNGO0FBM01nQjtFQUFHLHlKQUFBO0VBQ0MsbUJBQUE7RUFBcUIsaUJBQUE7RUFDdUUsYUFBQTtFQUNHLDRCQUFBO0VBQy9GLDBGQUFBO0VBQThGLHFEQUFBO0VBQTBFLDZCQUFBO0VBQ3hLLG9DQUFBO0FBbU5wQjtBQTdNb0I7RUFBRyx5SkFBQTtFQUNDLG1CQUFBO0VBQXFCLGlCQUFBO0VBQ3VFLGFBQUE7RUFDRyw0QkFBQTtFQUMvRiwwRkFBQTtFQUE4RixxREFBQTtFQUEwRSw2QkFBQTtFQUN4SyxvQ0FBQTtBQXFOeEI7QUE3TXdCO0VBQVMseUpBQUE7RUFDTCxtQkFBQTtFQUFxQixpQkFBQTtFQUN1RSxhQUFBO0VBQ0csNEJBQUE7RUFDL0YsMEZBQUE7RUFBOEYscURBQUE7RUFDOUYsbUhBQUE7RUFBcUgsVUFBQTtBQXFOako7QUEvTTRCO0VBQWMseUpBQUE7RUFDVixtQkFBQTtFQUFxQixpQkFBQTtFQUN1RSxhQUFBO0VBQ0csNEJBQUE7RUFDL0YsMEZBQUE7RUFBOEYscURBQUE7RUFDOUYsbUhBQUE7RUFBcUgsVUFBQTtFQUNySCxXRWpOeEI7RUZrTndCLCtCQUFBO0FBdU5oQztBQXROZ0M7RUFDSSxzR0FBQTtBQXdOcEM7QUFuTm9CO0VBQU8seUpBQUE7RUFDSCxtQkFBQTtFQUFxQixpQkFBQTtFQUN1RSxhQUFBO0VBQ0csNEJBQUE7RUFDL0YsMEZBQUE7RUFBOEYscURBQUE7RUFDOUYsbUhBQUE7RUFBcUgsVUFBQTtFQUEyQiw2QkFBQTtFQUNoSixvQ0FBQTtBQTROeEI7QUF2TlE7RUFDSSxxQkVuT0s7RUZvT0wsa0NBQUE7QUF5Tlo7QUF0Tkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUF3TlI7QUF2TlE7RUFDSSxZQUFBO0FBeU5aIiwiZmlsZSI6ImZhcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb250YWluZXJzLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJy4gLiAuJ1xyXG4gICAgJy4gd3JhcHBlciAuJ1xyXG4gICAgJy4gLiAuJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTBweCAxZnIgMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxMHB4IDFmciAxMHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4zKTtcclxuICAgICAgICBncmlkLWFyZWE6d3JhcHBlcjtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAnLiAuIC4nXHJcbiAgICAgICAgJy4gYXB5IC4nXHJcbiAgICAgICAgJy4gbmFtZSAuJ1xyXG4gICAgICAgICcuIGluZm8gLidcclxuICAgICAgICAnLiBzaG93IC4nXHJcbiAgICAgICAgJy4gbWlzYyAuJ1xyXG4gICAgICAgICcuIGlucHV0IC4nXHJcbiAgICAgICAgJy4gYnV0dG9ucyAuJ1xyXG4gICAgICAgICcuIC4gLic7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjIwcHggMWZyIDIwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHB4IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCAxMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvbnRhaW5lcnM7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICYjaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOmlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYjc2hvdyB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6c2hvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhdDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjowLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgJiNwb29sIHtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgTGlxdWlkaXR5JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmI3N3YXAge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0J1eSBUb2tlbnMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYjY2hlY2sge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1ZpZXcgVG9rZW4gQ29kZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNibG9jay1jaGVjayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRsaWdodDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdWaWV3IE9uIEJsb2NrIEV4cGxvcmVyJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmI3dyYXAge1xyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1dyYXAgTGlxdWlkaXR5JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM5OGRjZmInLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAmI25hbWUge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOm5hbWU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNpbmZvIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTppbmZvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM4OWRhZmYnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmI2FweSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6YXB5O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciBtaW4tY29udGVudDtcclxuICAgICAgICAgICAgICAgIHNwYW4jYXBlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmV4dHJhLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiNtaXNjIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTptaXNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYjYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6YnV0dG9ucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnN1cGVyLWFweSB7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6JGJsYWNrOyAgLy8gbG9va3MgYmV0dGVyIHdpdGhvdXRcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggYXF1YSwgLTVweCAtNXB4IDVweCBwaW5rLCA1cHggLTVweCA1cHggeWVsbG93Z3JlZW4sIC01cHggNXB4IDVweCBsaW1lZ3JlZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcmFpbmJvdyA2cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgQGtleWZyYW1lcyByYWluYm93IHtcclxuICAgICAgICAgICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IGxpbWVncmVlbiwgLTVweCAtNXB4IDEwcHggYXF1YSwgNXB4IC01cHggMTBweCBwaW5rLCAtNXB4IDVweCAxMHB4IHllbGxvd2dyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggeWVsbG93Z3JlZW4sIC01cHggLTVweCAxMHB4IGxpbWVncmVlbiwgNXB4IC01cHggMTBweCBhcXVhLCAtNXB4IDVweCAxMHB4IHBpbms7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA3NSUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCBwaW5rLCAtNXB4IC01cHggMTBweCB5ZWxsb3dncmVlbiwgNXB4IC01cHggMTBweCBsaW1lZ3JlZW4sIC01cHggNXB4IDEwcHggYXF1YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGkgey8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jZGQyMTAwKzAsYzRjZTAwKzEyLDAwYjc5ZiszMywwZTAwYTgrNTcsOWIwMDk4Kzc4LGUwMDAwZSsxMDAgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGQyMTAwOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICBhcXVhIDAlLCBwaW5rIDQyJSwgeWVsbG93Z3JlZW4gNjMlLCBsaW1lZ3JlZW4gMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgYXF1YSAwJSwgcGluayA0MiUsIHllbGxvd2dyZWVuIDYzJSwgbGltZWdyZWVuIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAgYXF1YSAwJSwgcGluayA0MiUsIHllbGxvd2dyZWVuIDYzJSwgbGltZWdyZWVuIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi8gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAmI2luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGkgey8qIFBlcm1hbGluayAtIHVzZSB0byBlZGl0IGFuZCBzaGFyZSB0aGlzIGdyYWRpZW50OiBodHRwczovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jZGQyMTAwKzAsYzRjZTAwKzEyLDAwYjc5ZiszMywwZTAwYTgrNTcsOWIwMDk4Kzc4LGUwMDAwZSsxMDAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkMjEwMDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIGFxdWEgMCUsIHBpbmsgNDIlLCB5ZWxsb3dncmVlbiA2MyUsIGxpbWVncmVlbiAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgYXF1YSAwJSwgcGluayA0MiUsIHllbGxvd2dyZWVuIDYzJSwgbGltZWdyZWVuIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgIGFxdWEgMCUsIHBpbmsgNDIlLCB5ZWxsb3dncmVlbiA2MyUsIGxpbWVncmVlbiAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICYubGFyZ2UtaGVhZGVyLCAmLm1lZGl1bS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi52YWx1ZSB7LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHBzOi8vY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyNkZDIxMDArMCxjNGNlMDArMTIsMDBiNzlmKzMzLDBlMDBhOCs1Nyw5YjAwOTgrNzgsZTAwMDBlKzEwMCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkMjEwMDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICBhcXVhIDAlLCBwaW5rIDQyJSwgeWVsbG93Z3JlZW4gNjMlLCBsaW1lZ3JlZW4gMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICBhcXVhIDAlLCBwaW5rIDQyJSwgeWVsbG93Z3JlZW4gNjMlLCBsaW1lZ3JlZW4gMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgIGFxdWEgMCUsIHBpbmsgNDIlLCB5ZWxsb3dncmVlbiA2MyUsIGxpbWVncmVlbiAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwZmZmZicsIGVuZENvbG9yc3RyPScjMzJjZDMyJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJiNzaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5zaG93LmV4dHJhIHsvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cHM6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvI2RkMjEwMCswLGM0Y2UwMCsxMiwwMGI3OWYrMzMsMGUwMGE4KzU3LDliMDA5OCs3OCxlMDAwMGUrMTAwICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkMjEwMDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgYXF1YSAwJSwgcGluayA0MiUsIHllbGxvd2dyZWVuIDYzJSwgbGltZWdyZWVuIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIGFxdWEgMCUsIHBpbmsgNDIlLCB5ZWxsb3dncmVlbiA2MyUsIGxpbWVncmVlbiAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgIGFxdWEgMCUsIHBpbmsgNDIlLCB5ZWxsb3dncmVlbiA2MyUsIGxpbWVncmVlbiAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMGZmZmYnLCBlbmRDb2xvcnN0cj0nIzMyY2QzMicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggYXF1YSwgLTVweCAtNXB4IDEwcHggcGluaywgNXB4IC01cHggMTBweCB5ZWxsb3dncmVlbiwgLTVweCA1cHggMTBweCBsaW1lZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgzLGg0IHsvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cHM6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvI2RkMjEwMCswLGM0Y2UwMCsxMiwwMGI3OWYrMzMsMGUwMGE4KzU3LDliMDA5OCs3OCxlMDAwMGUrMTAwICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZDIxMDA7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICBhcXVhIDAlLCBwaW5rIDQyJSwgeWVsbG93Z3JlZW4gNjMlLCBsaW1lZ3JlZW4gMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIGFxdWEgMCUsIHBpbmsgNDIlLCB5ZWxsb3dncmVlbiA2MyUsIGxpbWVncmVlbiAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICBhcXVhIDAlLCBwaW5rIDQyJSwgeWVsbG93Z3JlZW4gNjMlLCBsaW1lZ3JlZW4gMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwZmZmZicsIGVuZENvbG9yc3RyPScjMzJjZDMyJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqLyAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnZpcC1wb29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDokcHJpbWFyeS1vcGFxdWU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkY29tcGxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLmRpc2NsYWltZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTp3cmFwcGVyO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDpzdGFydDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjpub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4vdGhlbWUuc2Nzcyc7XHJcbkBtaXhpbiBjb250YWluZXJze1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiRibGFjaztcclxuICAgIH1cclxuICAgIGRpdi5tZWRpdW0tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcclxuICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwLjI1KTtcclxuICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAmLnNwbGl0IHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0YXJ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLnVwLXVuZGVyIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDpzdGFydDtcclxuICAgICAgfVxyXG4gICAgICAmLmludmVyc2Uge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciBtYXgtY29udGVudDtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgJi5tdXNoeSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczptYXgtY29udGVudCAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTYwMHB4KSB7XHJcbiAgICAgICAgICAmLnNwbGl0LnNtYWxsIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDo0MDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnI7XHJcbiAgICAgICAgcm93LWdhcDo1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5zbWFsbC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmcjtcclxuICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDoxMTAwcHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICByb3ctZ2FwOjEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMC4yNSk7XHJcbiAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcclxuICAgICAgJi5tdXNoeSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnI7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICAmLmxhcmdlLWhlYWRlciwgJi5tZWRpdW0taGVhZGVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkcHJpbWFyeSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJGxpZ2h0IDAlLCAkcHJpbWFyeSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzg5ZGFmZicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5pbnZlcnNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMywgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIuNHJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbToycHggc29saWQgJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6NzUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuZXh0cmEtc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM5OGRjZmInLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmxhcmdlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1lZGl1bS1oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczptYXgtY29udGVudCAxZnI7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6MTBweDtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgICAgICAmLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmludmVyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNwbGl0IHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICAgICAgICAgICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNtYWxsLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDo1eDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAmLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpzdHJldGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOmVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFiZWwuZ3JheWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiRncmF5IWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjZweDtcclxuICAgIH1cclxuICAgIC5uYWtlZCwgJi5uYWtlZCwgKi5uYWtlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsMCkhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgKi5jbGlja2FibGUge1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG4gIH0iLCIkYmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5OiAjNWMyYTkyZmY7XHJcbiRwcmltYXJ5LW9wYXF1ZTogIzVjMmE5MjA5O1xyXG4kY29tcGxlbWVudDogIzJjZTRkOGZmO1xyXG4kcmVkOiAjZjYyYzRkO1xyXG4kZ3JlZW46ICMzY2JiM2M7XHJcbiRsaWdodDogI2ZmMmNmM2ZmO1xyXG4kZGFyazogIzVjMmE5MmZmO1xyXG4kd2hpdGU6ICNmZWZlZmU7XHJcbiRncmF5OiAjNWY1ZjVmOyJdfQ== */"], data: { animation: [src_app_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farm',
                templateUrl: './farm.component.html',
                animations: [src_app_animations__WEBPACK_IMPORTED_MODULE_1__["inOutAnimations"]],
                styleUrls: ['./farm.component.scss']
            }]
    }], function () { return [{ type: src_app_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: src_app_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] }]; }, { pid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputEle', { static: false }]
        }] }); })();


/***/ }),

/***/ "kaMw":
/*!*******************************************************************!*\
  !*** ./src/app/notifications/notification/notification.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.component */ "xRHT");




class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "l1ht":
/*!*********************************************************!*\
  !*** ./src/app/static-info-services/project.service.ts ***!
  \*********************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// tslint:disable:max-line-length
class ProjectService {
    constructor() {
        this.cancelled = true;
        this.project = {
            contracts: {
                tokenAddress: '0x70D1240B21BeFe1118a7F0fCe40c6013DbFF81a2',
                cellarAddress: '0xa2b20C0F41FD5B9c1658E78134Ec0F7d46c7a1bF',
                stableCoinAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                wrappedNetworkCurrencyAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
                exchangeFactoryAddress: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
                // exchangeFactoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // ETH (UNISWAP) MAINNET
                exchangeRouterAddress: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
            },
            name: 'Vineyard',
            tokenName: '🍇',
            lpTokenName: '🍷',
            tokenFullName: 'GRAPES',
            lpTokenFullName: 'WINE',
            exchangeLPTokenName: 'CAKE',
            vaultName: 'Cellar',
            networkCurrency: 'BNB',
            chainId: 56,
            // chainId: 97, // BSC TESTNET
            networkName: 'Binance Smart Chain',
            rpcNetwork: 'https://bsc-dataseed.binance.org/',
            // rpcNetwork: 'https://data-seed-prebsc-2-s3.binance.org:8545/', // BSC TESTNET
            blockExplorer: 'BscScan',
            blockExplorerAddress: 'https://bscscan.com',
            // blockExplorerAddress: 'https://testnet.bscscan.com', // BSC TESTNET
            exchangeAddress: 'https://exchange.pancakeswap.finance/',
            socials: {
                telegram: '',
                medium: '',
                github: ''
            }
        };
        this.pageInformation = {};
        this.projectInformation = [
            {
                title: `What is ` + this.project.name + `?`,
                icon: 'accessibility',
                text: `` + this.project.name + ` is a protocol based on the highly successful Ethereum project, cVault Finance (CORE).`,
                date: new Date()
            },
            {
                title: `What are ` + this.project.tokenFullName + `?`,
                icon: 'accessibility',
                text: `` + this.project.tokenName + ` is a deflationary protocol token that serves as a reward for farmers and stakers using the inflationless ` + this.project.tokenName + ` ` + this.project.vaultName +
                    `.`,
                date: new Date()
            },
            {
                title: `What is ` + this.project.lpTokenFullName + `?`,
                icon: 'accessibility',
                text: `` + this.project.lpTokenName + ` is a wrapping token that contains a 1:1 ratio of ` + this.project.exchangeLPTokenName +
                    ` LP tokens.

  ` + this.project.lpTokenName + ` has an unwrapping timer, meaning once it has been wrapped, it can't be unwrapped for a specific amount of time.

  There is a fee for unwrapping your ` + this.project.lpTokenName + `. This fee is offset if you plan on farming for some time, due to ` + this.project.lpTokenName + ` pools providing higher yields than ` + this.project.exchangeLPTokenName +
                    ` LP token pools.`,
                date: new Date()
            },
            {
                title: `How does ` + this.project.name + ` make everyone money?`,
                icon: 'monetization_on',
                text: `` + this.project.name + ` provides token holders with an inflationless method of earning rewards for placing their tokens in the ` + this.project.tokenName + ` ` + this.project.vaultName + `.

  ` + this.project.name + ` also creates an ever-increasing price floor, increasing ` + this.project.tokenName + `'s price consistently overtime.

  ` + this.project.name + ` is the backbone of a much larger ecosystem, with each project providing unique utility to BSC.`,
                date: new Date()
            },
            {
                title: `What is a price floor? How does it work?`,
                icon: 'layers',
                text: `We are introducing the concept of unwrapping wrapped ` + this.project.tokenName + `-W` + this.project.networkCurrency + ` ` + this.project.exchangeLPTokenName + ` LP (` + this.project.lpTokenName + `)

  A fee is taken from the tokens being unwrapped, this fee is permanently locked, creating an ever increasing price floor.

  This fee that gets permanently locked, resulting in a price floor, increases the value of ` + this.project.tokenName + ` consistently over time.`,
                date: new Date()
            },
            {
                title: `What is farming? How does it work?`,
                icon: 'agriculture',
                text: `For example: ` + this.project.tokenName + ` holders, ` + this.project.tokenName + `-W` + this.project.networkCurrency + ` ` + this.project.exchangeLPTokenName + ` liquidity providers, or ` + this.project.lpTokenName + ` holders may provide their tokens to the ` + this.project.tokenName + ` ` + this.project.vaultName + `, in a process known as "farming", or "staking".

  These "farmers" and "stakers" are then rewarded for locking up their tokens. Their tokens are not permanently locked. They earn rewards for every second their tokens are placed in the ` + this.project.tokenName + ` ` + this.project.vaultName + `.

  The protocol does not need to mint new tokens to reward farmers. The protocol is designed to provide an inflationless, sustainable and safe method of generating yield through taxing a portion of each trade, and providing it to those currently farming.`,
                date: new Date()
            },
            {
                title: `Is anything else coming to ` + this.project.name + `?`,
                icon: 'add_circle',
                text: `Similarly to cVault Finance, we are building a series of 'Automated Strategy ` + this.project.vaultName + `s' which will execute second-layer profit generating strategies.

  Though on the ` + this.project.networkName + ` this causes a hurdle due to the lack of safe and reputable protocols. Our first ` + this.project.vaultName + ` will interact with Pancakeswap, with community voting to guide the team towards integrating more projects.`,
                date: new Date()
            },
            {
                title: `What makes ` + this.project.name + ` great?`,
                icon: 'code',
                text: `By adopting all of CORE's values that make it such a successful DeFi project, and improving upon parts of the protocol, ` + this.project.name + ` is looking to improve upon an already functional and successful product.

  Simply put, by porting to ` + this.project.networkName + `, ` + this.project.name + ` is already improving upon the mechanics of CORE. We will be the first team to move the cVault Finance team's revolutionary protocol to the ` + this.project.networkName + `.

  This is only a start to the changes we're making.

  You will be able to unwrap liquidity after a set time! No longer will you be worried about having permanently wrapped liquidity tokens. ` + this.project.lpTokenName + ` tokens give you just that, piece of mind.

  There will be VIP pools, where you must stake a certain amount of ` + this.project.tokenName + ` to participate in the farming of these pools.`,
                date: new Date()
            },
            {
                title: `Who is behind ` + this.project.name + `?`,
                icon: 'adb',
                text: `We are a team of successful mobile developers, web developers, software engineers, traders and mathematicians who have been in the cryptocurrency space since 2015. We are forming a brand around ` + this.project.name + `, with plans to continue developing fairly launched, safe and profitable projects to contribute to ` + this.project.name + `.

  The majority of our team wishes to remain anonymous due to not owning their Intellectual Property Rights. This means that their respective companies would own any code they are to write.`,
                date: new Date()
            },
            {
                title: `What is next for the ` + this.project.name + ` team?`,
                icon: 'sports_kabaddi',
                text: `Our primary focus is and will always be ` + this.project.name + `. We will be developing fairly launched projects to contribute to ` + this.project.name + `'s volume and to expand on it's use cases.

  Holders and farmers of ` + this.project.tokenName + ` will be able to participate in any launch before everyone else, in addition to benefitting the most from the platform.`,
                date: new Date()
            }
        ];
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lRPw":
/*!**************************************************************!*\
  !*** ./src/app/static-info-services/header-items.service.ts ***!
  \**************************************************************/
/*! exports provided: HeaderItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderItemsService", function() { return HeaderItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderItemsService {
    constructor() {
        this.headerItems = [
            {
                link: '',
                name: 'Home',
                icon: 'home'
            },
            {
                link: 'farms',
                name: 'Farming & Staking',
                icon: 'agriculture'
            },
            {
                link: 'lge',
                name: 'LGE',
                icon: 'card_giftcard'
            },
            {
                link: 'wrapper',
                name: 'Wrapper',
                icon: 'wrap_text'
            },
            {
                link: 'dashboard',
                name: 'Dashboard',
                icon: 'stacked_bar_chart'
            },
            {
                link: 'information',
                name: 'Information',
                icon: 'info'
            },
        ];
    }
}
HeaderItemsService.ɵfac = function HeaderItemsService_Factory(t) { return new (t || HeaderItemsService)(); };
HeaderItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderItemsService, factory: HeaderItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mK86":
/*!**********************************************!*\
  !*** ./src/app/wrapper/wrapper.component.ts ***!
  \**********************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "J1Ni");
/* harmony import */ var _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dynamic-info-services/web3.service */ "r5tf");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["inputEle"];
function WrapperComponent_section_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wrap ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r2.liquidityToken.lpSymbol), "");
} }
function WrapperComponent_section_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lpBalance_r15 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, lpBalance_r15 / 1000000000000000000, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r3.liquidityToken.lpSymbol), "");
} }
function WrapperComponent_section_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WrapperComponent_section_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unwrap ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r6.liquidityToken.wLPSymbol), "");
} }
function WrapperComponent_section_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wLPBalance_r17 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, wLPBalance_r17 / 1000000000000000000, "1.2-2"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r7.liquidityToken.wLPSymbol), "");
} }
function WrapperComponent_section_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WrapperComponent_section_0_input_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r10.inputPlaceholder))("@inOutAnimations", undefined);
} }
function WrapperComponent_section_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@inOutAnimations", undefined);
} }
function WrapperComponent_section_0_span_21_button_1_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_1_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_1_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wrapped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_1_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_1_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_1_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_1_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "working": a0, "failed": a1, "success": a2 }; };
function WrapperComponent_section_0_span_21_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WrapperComponent_section_0_span_21_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.wrap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WrapperComponent_section_0_span_21_button_1_label_6_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WrapperComponent_section_0_span_21_button_1_label_8_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WrapperComponent_section_0_span_21_button_1_label_10_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WrapperComponent_section_0_span_21_button_1_label_12_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WrapperComponent_section_0_span_21_button_1_label_14_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WrapperComponent_section_0_span_21_button_1_label_16_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WrapperComponent_section_0_span_21_button_1_label_18_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](32, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r21.wrapButton) === 1 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, ctx_r21.wrapButton) === 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx_r21.wrapButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx_r21.wrapButton) === 2 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 16, ctx_r21.wrapButton) === 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, ctx_r21.wrapButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx_r21.wrapButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, ctx_r21.wrapButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 24, ctx_r21.wrapButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 26, ctx_r21.wrapButton) === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 28, ctx_r21.wrapButton) === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 30, ctx_r21.wrapButton) === 10);
} }
function WrapperComponent_section_0_span_21_button_2_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unwrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unwrapping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unwrapped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approving");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm/Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WrapperComponent_section_0_span_21_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WrapperComponent_section_0_span_21_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.unwrap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WrapperComponent_section_0_span_21_button_2_label_6_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WrapperComponent_section_0_span_21_button_2_label_8_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WrapperComponent_section_0_span_21_button_2_label_10_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WrapperComponent_section_0_span_21_button_2_label_12_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WrapperComponent_section_0_span_21_button_2_label_14_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WrapperComponent_section_0_span_21_button_2_label_16_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WrapperComponent_section_0_span_21_button_2_label_18_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](32, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r22.unwrapButton) === 1 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, ctx_r22.unwrapButton) === 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx_r22.unwrapButton) === 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx_r22.unwrapButton) === 2 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 16, ctx_r22.unwrapButton) === 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, ctx_r22.unwrapButton) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, ctx_r22.unwrapButton) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, ctx_r22.unwrapButton) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 24, ctx_r22.unwrapButton) === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 26, ctx_r22.unwrapButton) === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 28, ctx_r22.unwrapButton) === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 30, ctx_r22.unwrapButton) === 10);
} }
function WrapperComponent_section_0_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WrapperComponent_section_0_span_21_button_1_Template, 20, 36, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WrapperComponent_section_0_span_21_button_2_Template, 20, 36, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.mode.wBNB.wrap === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.mode.wBNB.unwrap === true);
} }
const _c2 = function (a0) { return { "selected": a0 }; };
function WrapperComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WrapperComponent_section_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.bringWrap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WrapperComponent_section_0_span_3_Template, 4, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WrapperComponent_section_0_span_5_Template, 5, 8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WrapperComponent_section_0_ng_template_7_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WrapperComponent_section_0_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.bringUnwrap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WrapperComponent_section_0_span_10_Template, 4, 4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WrapperComponent_section_0_span_12_Template, 5, 8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WrapperComponent_section_0_ng_template_14_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WrapperComponent_section_0_input_17_Template, 3, 4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WrapperComponent_section_0_ng_template_19_Template, 1, 1, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WrapperComponent_section_0_span_21_Template, 3, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, ctx_r0.mode.wBNB.wrap === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, ctx_r0.user.lpBalance))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 15, ctx_r0.user.lpBalance))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c2, ctx_r0.mode.wBNB.unwrap === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, ctx_r0.user.wLPBalance))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 19, ctx_r0.user.wLPBalance))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, ctx_r0.user.lpBalance))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 23, ctx_r0.user.lpBalance));
} }
function WrapperComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " LGE announcement coming soon. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WrapperComponent {
    constructor(web3, projectService) {
        this.web3 = web3;
        this.projectService = projectService;
        this.mode = {
            wBNB: {
                wrap: true,
                unwrap: false
            }
        };
        this.user = this.web3.user;
        this.inputPlaceholder = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Enter an amount to wrap or unwrap.');
        this.wrapButton = this.web3.wrapper.wrapButton;
        this.unwrapButton = this.web3.wrapper.unwrapButton;
        this.project = this.projectService.project;
        this.liquidityToken = this.web3.liquidityToken;
    }
    ngOnInit() {
    }
    bringWrap() {
        this.mode.wBNB.unwrap = false;
        this.mode.wBNB.wrap = true;
    }
    bringUnwrap() {
        this.mode.wBNB.wrap = false;
        this.mode.wBNB.unwrap = true;
    }
    wrap() {
        const value = Number(Number(this.inputEle.nativeElement.value));
        this.web3.wrapFlip(value);
    }
    unwrap() {
        const value = Number(Number(this.inputEle.nativeElement.value));
        this.web3.unwrapFlip(value);
    }
}
WrapperComponent.ɵfac = function WrapperComponent_Factory(t) { return new (t || WrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"])); };
WrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperComponent, selectors: [["app-wrapper"]], viewQuery: function WrapperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEle = _t.first);
    } }, decls: 4, vars: 6, consts: [["class", "wrapper", 4, "ngIf"], ["class", "wrapper empty", 4, "ngIf"], [1, "wrapper"], ["id", "wbnb", 1, "wrapping-item"], ["id", "wrap", 1, "medium-container", "up-under", "naked", 3, "ngClass", "click"], ["class", "medium-header", 4, "ngIf", "ngIfElse"], ["class", "greyed-bar"], ["greyed", ""], ["id", "unwrap", 1, "medium-container", "up-under", "naked", 3, "ngClass", "click"], ["id", "input", 1, "input"], [3, "placeholder", 4, "ngIf", "ngIfElse"], ["class", "button", "id", "wrap-unwrap", 4, "ngIf"], [1, "empty"], [1, "medium-header"], [1, "title"], [1, "value"], [1, "greyed-bar"], [3, "placeholder"], ["inputEle", ""], ["id", "wrap-unwrap", 1, "button"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], [4, "ngIf"], [1, "wrapper", "empty"]], template: function WrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WrapperComponent_section_0_Template, 24, 29, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WrapperComponent_section_2_Template, 5, 0, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.liquidityToken.wLPAddress) !== "0x0000000000000000000000000000000000000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.liquidityToken.wLPAddress) === "0x0000000000000000000000000000000000000000");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  grid-area: router-outlet;\n  display: grid;\n  grid-template-areas: \". . .\" \". wrapper .\" \". . .\";\n  grid-template-columns: 0px 1fr 0px;\n  grid-template-rows: 0px 1fr 0px;\n  justify-content: space-around;\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  height: auto;\n  grid-area: wrapper;\n  display: grid;\n  grid-template-areas: \". . .\" \". wrapping .\" \". empty .\" \". . .\";\n  grid-template-columns: 10px 1fr 10px;\n  grid-template-rows: 10px 1fr 300px 10px;\n  align-items: center;\n  justify-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.empty[_ngcontent-%COMP%] {\n  grid-area: empty;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n    align-items: start;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  grid-area: wrapping;\n  display: grid;\n  grid-template-areas: \". . . .\" \". wrap unwrap .\" \". input input .\" \". button button .\" \". . . .\";\n  grid-template-columns: 20px 0.5fr 0.5fr 20px;\n  grid-template-rows: 10px -webkit-max-content -webkit-max-content -webkit-max-content 10px;\n  grid-template-rows: 10px max-content max-content max-content 10px;\n  row-gap: 10px;\n  justify-content: center;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  row-gap: 5px;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%] {\n    grid-template-areas: \". . .\" \". wrap .\" \". unwrap .\" \". input .\" \". button .\" \". . .\";\n    grid-template-columns: 20px 1fr 20px;\n    grid-template-rows: 10px -webkit-max-content -webkit-max-content -webkit-max-content -webkit-max-content 10px;\n    grid-template-rows: 10px max-content max-content max-content max-content 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   .naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item.naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span#input[_ngcontent-%COMP%] {\n  grid-area: input;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   span.button[_ngcontent-%COMP%] {\n  grid-area: button;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#wrap[_ngcontent-%COMP%] {\n  grid-area: wrap;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#unwrap[_ngcontent-%COMP%] {\n  grid-area: unwrap;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#unwrap[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#wrap[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.4s;\n  transform: scale(0.8);\n  filter: brightness(0.8);\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#unwrap[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#wrap[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#unwrap.selected[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.wrapping-item[_ngcontent-%COMP%]   div#wrap.selected[_ngcontent-%COMP%] {\n  transform: scale(1);\n  filter: brightness(1);\n}\n[_nghost-%COMP%]   section.wrapper.empty[_ngcontent-%COMP%] {\n  grid-template-areas: \"ps\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n[_nghost-%COMP%]   section.wrapper.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-area: ps;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcY29udGFpbmVycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrREFDQTtFQUdBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0RBQ0E7RUFJQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQU5SO0FBT1E7RUFDSSxnQkFBQTtBQUxaO0FBT1E7RUFuQko7SUFvQlEsa0JBQUE7RUFKVjtBQUNGO0FBS1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdHQUNBO0VBS0EsNENBQUE7RUFDQSx5RkFBQTtFQUFBLGlFQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFSWjtBQVNZO0VBQ0ksWUFBQTtBQVBoQjtBQVNZO0VBdEJKO0lBdUJRLHFGQUNBO0lBTUEsb0NBQUE7SUFDQSw2R0FBQTtJQUFBLDZFQUFBO0VBWmQ7QUFDRjtBQ3BESTtFQUNJLFdDSEE7QUZ5RFI7QUNwREk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEc0ROO0FDckRNO0VBQ0ksOEJBQUE7QUR1RFY7QUN0RFU7RUFDSSxtQkFBQTtBRHdEZDtBQ3REVTtFQUNJLGlCQUFBO0FEd0RkO0FDckRNO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FEdURWO0FDckRNO0VBQ0ksOENBQUE7RUFBQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUR1RFY7QUN0RFU7RUFDRSw4Q0FBQTtFQUFBLHNDQUFBO0FEd0RaO0FDckRNO0VBQ0k7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsYUFBQTtFRHVEVjtFQ3REVTtJQUNJLG9CQUFBO0VEd0RkO0VDdERVO0lBQ0ksb0JBQUE7RUR3RGQ7QUFDRjtBQ3JETTtFQTFDRjtJQTJDSSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtFRHdETjtBQUNGO0FDdERJO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFNQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRG1ETjtBQzFETTtFQUpGO0lBS0ksK0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUQ2RE47QUFDRjtBQ3pETTtFQUNJLGtFQUFBO0VBQUEsa0RBQUE7RUFDQSx1QkFBQTtFQU9BLG1CQUFBO0FEcURWO0FDM0RVO0VBQ0ksZ0JBQUE7QUQ2RGQ7QUM1RGM7RUFDSSxnQkFBQTtBRDhEbEI7QUN2RFE7RUFDSSxtQkFBQTtBRHlEWjtBQ3ZEZ0I7RUFDSSxxQkM1RVo7RUQ0RWdDLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBRXJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQzFGWjtBRnVKUjtBQzVEb0I7RUFDSSxjQ3BGaEI7QUZrSlI7QUMxRFk7RUFDSSxpQkFBQTtFQUNBLGdCQ2pHTjtFRG1HTSxlQUFBO0VBSUEsZ0JBQUE7RUFTQSxxQkMzR1I7RUQyRzRCLGlCQUFBO0VBQ2lELGFBQUE7RUFDRyw0QkFBQTtFQUN4RSxvRUFBQTtFQUFzRSxxREFBQTtFQUN0RSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QURxRGhCO0FDdkVnQjtFQUxKO0lBTVEsZUFBQTtFRDBFbEI7QUFDRjtBQ3hFZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEMEVwQjtBQ3hFZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FEMEVwQjtBQ2hFWTtFQUNJLGVBQUE7QURrRWhCO0FDL0RRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURpRVo7QUMvRFE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRGlFWjtBQ2hFWTtFQUNJLGVBQUE7QURrRWhCO0FDakVnQjtFQUNJLGNDbklaO0FGc01SO0FDakVnQjtFQUNJLFdDOUlaO0FGaU5SO0FDaEVZO0VBQ0ksOEJBQUE7QURrRWhCO0FDakVnQjtFQUNJLG1CQUFBO0FEbUVwQjtBQ2pFZ0I7RUFDSSxpQkFBQTtBRG1FcEI7QUMvRGdCO0VBQ0ksZUFBQTtBRGlFcEI7QUM3RFE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwyREFBQTtFQUFBLDJDQUFBO0VBQ0EsY0FBQTtBRCtEWjtBQzlEWTtFQUNJLGVBQUE7RUFDQSxjQy9KUjtBRitOUjtBQy9EZ0I7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QURpRXBCO0FDaEVvQjtFQUNJLGtCQUFBO0FEa0V4QjtBQy9EZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FEaUVwQjtBQzVEb0I7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUQ4RHhCO0FDN0R3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRCtENUI7QUM5RDRCO0VBQ0ksZUFBQTtBRGdFaEM7QUM3RHdCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEK0Q1QjtBQ3hESTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUQwRFI7QUN4REk7RUFDSSx1Q0FBQTtBRDBEUjtBQ3hESTtFQUNJLGVBQUE7QUQwRFI7QUE5TWdCO0VBQ0ksZ0JBQUE7QUFnTnBCO0FBOU1nQjtFQUNJLGlCQUFBO0FBZ05wQjtBQTVNZ0I7RUFDSSxlQUFBO0FBOE1wQjtBQTVNZ0I7RUFDSSxpQkFBQTtBQThNcEI7QUE1TWdCO0VBQ0ksZUFBQTtFQUlBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQTJNcEI7QUFoTm9CO0VBQ0ksb0JBQUE7QUFrTnhCO0FBN01vQjtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUErTXhCO0FBMU1RO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBNE1aO0FBM01ZO0VBQ0ksYUFBQTtBQTZNaEIiLCJmaWxlIjoid3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2NvbnRhaW5lcnMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICAgIGdyaWQtYXJlYTpyb3V0ZXItb3V0bGV0O1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcuIC4gLidcclxuICAgICcuIHdyYXBwZXIgLidcclxuICAgICcuIC4gLic7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDBweCAxZnIgMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjBweCAxZnIgMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgIHNlY3Rpb24ud3JhcHBlciB7XHJcbiAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIGdyaWQtYXJlYTp3cmFwcGVyO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICcuIC4gLidcclxuICAgICAgICAnLiB3cmFwcGluZyAuJ1xyXG4gICAgICAgICcuIGVtcHR5IC4nXHJcbiAgICAgICAgJy4gLiAuJztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcHggMWZyIDEwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjEwcHggMWZyIDMwMHB4IDEwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xyXG4gICAgICAgIGRpdi5lbXB0eSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTplbXB0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6c3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi53cmFwcGluZy1pdGVte1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwLjMpO1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6d3JhcHBpbmc7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgJy4gLiAuIC4nXHJcbiAgICAgICAgICAgICcuIHdyYXAgdW53cmFwIC4nXHJcbiAgICAgICAgICAgICcuIGlucHV0IGlucHV0IC4nXHJcbiAgICAgICAgICAgICcuIGJ1dHRvbiBidXR0b24gLidcclxuICAgICAgICAgICAgJy4gLiAuIC4nO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MjBweCAwLjVmciAwLjVmciAyMHB4O1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcHggbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMTBweDtcclxuICAgICAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcclxuICAgICAgICAgICAgZGl2Lm1lZGl1bS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcm93LWdhcDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgICAgICAnLiAuIC4nXHJcbiAgICAgICAgICAgICAgICAnLiB3cmFwIC4nXHJcbiAgICAgICAgICAgICAgICAnLiB1bndyYXAgLidcclxuICAgICAgICAgICAgICAgICcuIGlucHV0IC4nXHJcbiAgICAgICAgICAgICAgICAnLiBidXR0b24gLidcclxuICAgICAgICAgICAgICAgICcuIC4gLic7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MjBweCAxZnIgMjBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTBweCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGNvbnRhaW5lcnM7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgJiNpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOmlucHV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTpidXR0b247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICYjd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOndyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmI3Vud3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOnVud3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYjdW53cmFwLCAmI3dyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjowLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjpicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOmJyaWdodG5lc3MoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZW1wdHkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncHMnO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOnBzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi90aGVtZS5zY3NzJztcclxuQG1peGluIGNvbnRhaW5lcnN7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lZGl1bS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuMjUpO1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICYuc3BsaXQge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYudXAtdW5kZXIge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OnN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIG1heC1jb250ZW50O1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAmLm11c2h5IHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1heC1jb250ZW50IDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpIHtcclxuICAgICAgICAgICYuc3BsaXQuc21hbGwge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICByb3ctZ2FwOjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2LnNtYWxsLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyO1xyXG4gICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjExMDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgfVxyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwLjI1KTtcclxuICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAmLm11c2h5IHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmcjtcclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgICYubGFyZ2UtaGVhZGVyLCAmLm1lZGl1bS1oZWFkZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkcHJpbWFyeSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg5ZmZiMCcsIGVuZENvbG9yc3RyPScjODlkYWZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAmLmludmVyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzLCBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6Mi40cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46NXB4IDBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDo3NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5leHRyYS1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzk4ZGNmYicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubGFyZ2UtaGVhZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWVkaXVtLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1heC1jb250ZW50IDFmcjtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc3BsaXQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc21hbGwtaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjV4O1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRsaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0cmV0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0cmV0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbC5ncmF5ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6JGdyYXkhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgfVxyXG4gICAgLm5ha2VkLCAmLm5ha2VkLCAqLm5ha2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwKSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAqLmNsaWNrYWJsZSB7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfSIsIiRibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICM1YzJhOTJmZjtcclxuJHByaW1hcnktb3BhcXVlOiAjNWMyYTkyMDk7XHJcbiRjb21wbGVtZW50OiAjMmNlNGQ4ZmY7XHJcbiRyZWQ6ICNmNjJjNGQ7XHJcbiRncmVlbjogIzNjYmIzYztcclxuJGxpZ2h0OiAjZmYyY2YzZmY7XHJcbiRkYXJrOiAjNWMyYTkyZmY7XHJcbiR3aGl0ZTogI2ZlZmVmZTtcclxuJGdyYXk6ICM1ZjVmNWY7Il19 */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_2__["inOutAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wrapper',
                templateUrl: './wrapper.component.html',
                styleUrls: ['./wrapper.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["inOutAnimations"]]
            }]
    }], function () { return [{ type: _dynamic_info_services_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] }, { type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }]; }, { inputEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputEle', { static: false }]
        }] }); })();


/***/ }),

/***/ "r5tf":
/*!*******************************************************!*\
  !*** ./src/app/dynamic-info-services/web3.service.ts ***!
  \*******************************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "meUc");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.service */ "0f74");
/* harmony import */ var _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static-info-services/project.service */ "l1ht");







const grapesAbi = __webpack_require__(/*! ../../assets/abi/grapesabi.json */ "S7Rr");
const stableCoinAbi = __webpack_require__(/*! ../../assets/abi/grapesabi.json */ "S7Rr");
const wrappedNetworkCurrencyAbi = __webpack_require__(/*! ../../assets/abi/grapesabi.json */ "S7Rr");
const grapesLPAbi = __webpack_require__(/*! ../../assets/abi/grapesabi.json */ "S7Rr");
const grapesWLPAbi = __webpack_require__(/*! ../../assets/abi/grapeswineabi.json */ "YzOA");
const grapesCellarAbi = __webpack_require__(/*! ../../assets/abi/grapescellarabi.json */ "c0Xg");
const exchangeAbi = __webpack_require__(/*! ../../assets/abi/exchangeabi.json */ "Vj25");
// tslint:disable:max-line-length
class Web3Service {
    constructor(notificationsService, projectService) {
        this.notificationsService = notificationsService;
        this.projectService = projectService;
        this.grapesContractAddress = this.projectService.project.contracts.tokenAddress;
        this.grapesCellarContractAddress = this.projectService.project.contracts.cellarAddress;
        this.stableCoinContractAddress = this.projectService.project.contracts.stableCoinAddress;
        this.exchangeFactoryContractAddress = this.projectService.project.contracts.exchangeFactoryAddress;
        this.exchangeRouterContractAddress = this.projectService.project.contracts.exchangeRouterAddress;
        this.wrappedNetworkCurrencyContractAddress = this.projectService.project.contracts.wrappedNetworkCurrencyAddress;
        this.stableCoinWrappedNetworkCurrencyPairAddress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.grapesWrappedNetworkCurrencyPairAddress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        // USED TO STOP GATHERING INFORMATION FROM BLOCKCHAIN
        this.exitInterval = undefined;
        // EXTERNAL
        // // EXCHANGE VARIABLES
        this.exchange = {
            dayData: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            price: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            priceUSD: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            volume: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            volumeUSD: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            volumeNetworkCurrency: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
        };
        // // INTERNAL
        // USER VARIABLES
        this.user = {
            address: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            grapesBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            bnbBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            lpBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            wLPBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            chainId: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
        };
        // TOKEN VARIABLES
        this.token = {
            name: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            symbol: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            decimals: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            totalSupply: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            circulatingSupply: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            buyFee: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            sellFee: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            poolId: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
        };
        // LIQUIDITY TOKEN VARIABLES
        this.liquidityToken = {
            wLPContract: undefined,
            lpContract: undefined,
            wLPAddress: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            lpAddress: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            wLPName: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            lpName: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            wLPSymbol: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            lpSymbol: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
            wLPDecimals: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            lpDecimals: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            wLPTotalSupply: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            lpTotalSupply: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            wLPPoolId: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            lpPoolId: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
        };
        // WRAPPED VARIABLES
        this.wrapper = {
            unwrapAllowance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            wrapAllowance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            unwrapButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            wrapButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
        };
        // LGE VARIABLES
        this.lge = {
            user: {
                contribution: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
            },
            started: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            ended: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            duration: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            calculatedEnd: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            LPTperBNBUnit: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            individualCap: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            initialSupply: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            totalLPTMinted: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            totalBNBContributed: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            LPTBurnRatio: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            depositButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            claimButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            createLiquidityButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            unpledgeLiquidityButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
        };
        // VAULT VARIABLES
        this.cellar = {
            cumulativeRewardsSinceStart: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            averageFeesPerBlockSinceStart: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            averageFeesPerBlockEpoch: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            rewardsInThisEpoch: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            epoch: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            length: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            totalPoolWeights: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
        };
        // POOL TOKENS VARIABLES
        this.poolInfo = [
            {
                token: {
                    name: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                    address: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                    contract: undefined,
                    decimals: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    symbol: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                },
                ape: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](30),
                tvl: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](42000000),
                poolTokenBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                priceInUSD: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                priceInNetworkCurrency: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                claimButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                depositButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                withdrawButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                tokenApproval: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                tokenRewards: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                pendingGrapes: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                userPoolInfo: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
                    amount: 0,
                    rewardPaid: 0
                }),
                poolInfo: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
                    poolName: '',
                    stakedToken: '',
                    allocPoint: 0,
                    accGRAPESPerShare: 0,
                    VIPpool: false,
                    partialWithdraw: false
                }),
                pairInfo: {
                    pairAddress: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                    networkCurrencyPairBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    tokenPairBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
                },
                userBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
            }
        ];
        // APY CALCULATOR VARIABLES
        this.apyCalculator = {
            grapes: {
                priceInUSD: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                priceInNetworkCurrency: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                pairBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
            },
            networkCurrency: {
                price: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                pairBalanceGrapes: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                pairBalanceStableCoin: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
            },
            stableCoin: {
                pairBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
            },
        };
        this.connectWallet();
    }
    getChainId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.web3.eth.getChainId().then(result => {
                this.user.chainId.next(result);
            });
        });
    }
    getInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user.address.getValue() === '') {
                this.logout();
                return;
            }
            this.getChainId();
            this.getTokenInfo();
            this.getUserInfo();
            if (this.liquidityToken.wLPAddress.getValue() !== '0x0000000000000000000000000000000000000000') { // IF LGE HAS STARTED
                yield this.getLGEInfo();
                yield this.getWrapperApprovals();
                yield this.getLPTokensInfo();
                if (this.lge.LPTperBNBUnit.getValue() !== 0 && this.lge.LPTperBNBUnit.getValue() !== Number('0')) { // IF LGE HAS FINISHED
                    yield this.getPrices();
                }
                yield this.getAllPoolInfo().then(afterGetAllPoolInfo => {
                    this.poolInfo.forEach((element, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.setContract(index).then((afterSetting) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.getPoolTokenContractInfo(index);
                        }));
                    }));
                });
            }
        });
    }
    getPrices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.getGrapesNetworkCurrencyPairAddress().then((afterGrapesNetworkCurrencyPairAddress) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.getStableCoinNetworkCurrencyPairAddress().then((afterStableCoinNetworkCurrencyPairAddress) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.getNetworkCurrencyPrice().then((afterNetworkCurrencyPrice) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.getGrapesPriceInNetworkCurrency().then((afterGrapesPriceInNetworkCurrency) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.getGrapesPriceInUSD().then((afterGrapesPriceInUSD) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            }));
                        }));
                    }));
                }));
            }));
        });
    }
    getGrapesNetworkCurrencyPairAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.exchangeFactoryContract.methods.getPair(this.grapesContractAddress, this.wrappedNetworkCurrencyContractAddress).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.grapesWrappedNetworkCurrencyPairAddress.next(result);
            }));
        });
    }
    getStableCoinNetworkCurrencyPairAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.exchangeFactoryContract.methods.getPair(this.stableCoinContractAddress, this.wrappedNetworkCurrencyContractAddress).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.stableCoinWrappedNetworkCurrencyPairAddress.next(result);
            }));
        });
    }
    getNetworkCurrencyPrice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.stableCoinContract.methods.balanceOf(this.stableCoinWrappedNetworkCurrencyPairAddress.getValue()).call().then((resultStable) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.apyCalculator.stableCoin.pairBalance.next(resultStable);
                yield this.wrappedNetworkCurrencyContract.methods.balanceOf(this.stableCoinWrappedNetworkCurrencyPairAddress.getValue()).call().then((resultNetwork) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.apyCalculator.networkCurrency.pairBalanceStableCoin.next(resultNetwork);
                    yield this.apyCalculator.networkCurrency.price.next(this.apyCalculator.stableCoin.pairBalance.getValue() / this.apyCalculator.networkCurrency.pairBalanceStableCoin.getValue());
                }));
            }));
        });
    }
    getGrapesPriceInNetworkCurrency() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.balanceOf(this.grapesWrappedNetworkCurrencyPairAddress.getValue()).call().then((resultGrapes) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.apyCalculator.grapes.pairBalance.next(resultGrapes);
                yield this.wrappedNetworkCurrencyContract.methods.balanceOf(this.grapesWrappedNetworkCurrencyPairAddress.getValue()).call().then((resultNetwork) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.apyCalculator.networkCurrency.pairBalanceGrapes.next(resultNetwork);
                    yield this.apyCalculator.grapes.priceInNetworkCurrency.next(this.apyCalculator.networkCurrency.pairBalanceGrapes.getValue() / this.apyCalculator.grapes.pairBalance.getValue());
                }));
            }));
        });
    }
    getGrapesPriceInUSD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.apyCalculator.grapes.priceInUSD.next(this.apyCalculator.grapes.priceInNetworkCurrency.getValue() * this.apyCalculator.networkCurrency.price.getValue());
        });
    }
    connectWallet() {
        this.notificationsService.notify({
            title: 'Logging In',
            icon: 'alarm',
            text: 'You are attempting to login.',
            date: new Date()
        });
        this.tryProvider().then(tryProviderResult => {
            this.loginProcedure();
        });
    }
    logout() {
        this.stopGatheringInfo();
        this.web3.setProvider(null);
        this.clearUser();
        this.notificationsService.notify({
            title: 'Logged Out',
            icon: 'alarm',
            text: 'You have successfully logged out.',
            date: new Date()
        });
    }
    clearUser() {
        this.user.address.next('');
        this.user.grapesBalance.next(0);
        this.user.bnbBalance.next(0);
        this.user.lpBalance.next(0);
        this.user.wLPBalance.next(0);
    }
    tryProvider() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider);
            if (web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider) {
                this.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider);
            }
            else {
                this.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(window.ethereum);
            }
            if (!this.web3.givenProvider && !this.web3.currentProvider) {
                this.web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(this.projectService.project.rpcNetwork);
            }
            this.getChainId();
            yield this.setContracts();
        });
    }
    loginProcedure() {
        try {
            this.requestAccounts();
            window.ethereum.on('accountsChanged', (userAddresses) => {
                this.user.address.next(userAddresses[0]);
                this.web3.eth.defaultAccount = userAddresses[0];
                this.notificationsService.notify({
                    title: 'Account Changed',
                    icon: 'alarm',
                    text: 'Please verify this account is connected to the application.',
                    date: new Date()
                });
            });
        }
        catch (error) {
            this.notificationsService.notify({
                title: 'Login Error',
                icon: 'alarm',
                text: 'There was an error logging you in.',
                date: new Date()
            });
        }
    }
    requestAccounts() {
        this.web3.eth.requestAccounts().then(userAddresses => {
            this.web3.eth.defaultAccount = userAddresses[0];
            this.user.address.next(userAddresses[0]);
            this.notificationsService.notify({
                title: 'Logged In',
                icon: 'alarm',
                text: 'You have successfully logged in.',
                date: new Date()
            });
        });
    }
    getPoolTokenContractInfo(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.poolInfo[poolId].token.contract === undefined || this.poolInfo[poolId].token.address.getValue() === '') {
                return;
            }
            yield this.getUserBalance(poolId);
            yield this.getPoolTokenName(poolId);
            yield this.getPoolTokenDecimals(poolId);
            yield this.getPoolTokenSymbol(poolId);
            yield this.getPoolTokenApproval(poolId);
            if (this.apyCalculator.stableCoin.pairBalance.getValue() !== 0 && this.apyCalculator.networkCurrency.pairBalanceStableCoin.getValue() !== 0) {
                yield this.getAllPoolWeights();
                yield this.getPoolTokenPrices(poolId);
                yield this.getPoolTokenCellarBalance(poolId);
                yield this.getTokenCirculatingSupply();
            }
        });
    }
    getUserBalance(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.balanceOf(this.user.address.getValue()).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.poolInfo[poolId].userBalance.next(result);
            }));
        });
    }
    getPoolTokenName(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.name().call().then(result => {
                this.poolInfo[poolId].token.name.next(result);
            });
        });
    }
    getPoolTokenDecimals(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.decimals().call().then(result => {
                this.poolInfo[poolId].token.decimals.next(result);
            });
        });
    }
    getPoolTokenSymbol(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.symbol().call().then(result => {
                this.poolInfo[poolId].token.symbol.next(result);
            });
        });
    }
    getPoolTokenApproval(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.allowance(this.user.address.getValue(), this.grapesCellarContractAddress).call().then(result => {
                this.poolInfo[poolId].tokenApproval.next(result);
            });
        });
    }
    getPoolTokenPrices(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.getPoolTokenNetworkCurrencyPairAddress(poolId).then((afterPoolTokenNetworkCurrencyPairAddress) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.getPoolTokenPriceInNetworkCurrency(poolId, this.poolInfo[poolId].pairInfo.pairAddress.getValue()).then((afterPoolTokenPriceInNetworkCurrency) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.getPoolTokenPriceInUSD(poolId).then((afterPoolTokenPriceInUSD) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    }));
                }));
            }));
        });
    }
    getPoolTokenCellarBalance(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.balanceOf(this.grapesCellarContractAddress).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.poolInfo[poolId].poolTokenBalance.next(result);
                yield this.poolInfo[poolId].tvl.next((this.poolInfo[poolId].poolTokenBalance.getValue() / 1e18) * (this.poolInfo[poolId].priceInUSD.getValue() / 1e18));
                if (this.poolInfo[poolId].tvl.getValue() === 0) {
                    yield this.poolInfo[poolId].tvl.next(1);
                }
                this.poolInfo[poolId].ape.next(((this.poolInfo[poolId].poolInfo.getValue().allocPoint / this.cellar.totalPoolWeights.getValue())
                    *
                        ((this.cellar.rewardsInThisEpoch.getValue() / 1e18) * this.apyCalculator.grapes.priceInUSD.getValue()))
                    /
                        this.poolInfo[poolId].tvl.getValue());
            }));
        });
    }
    getPoolTokenNetworkCurrencyPairAddress(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.exchangeFactoryContract.methods.getPair(this.poolInfo[poolId].token.address.getValue(), this.wrappedNetworkCurrencyContractAddress).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.poolInfo[poolId].pairInfo.pairAddress.next(result);
            }));
        });
    }
    getPoolTokenPriceInNetworkCurrency(poolId, pairAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].token.contract.methods.balanceOf(pairAddress).call().then((resultToken) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.poolInfo[poolId].pairInfo.tokenPairBalance.next(resultToken);
                yield this.wrappedNetworkCurrencyContract.methods.balanceOf(pairAddress).call().then((resultNetwork) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.poolInfo[poolId].pairInfo.networkCurrencyPairBalance.next(resultNetwork);
                    yield this.poolInfo[poolId].priceInNetworkCurrency.next(this.poolInfo[poolId].pairInfo.tokenPairBalance.getValue() / this.poolInfo[poolId].pairInfo.networkCurrencyPairBalance.getValue());
                }));
            }));
        });
    }
    getPoolTokenPriceInUSD(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.poolInfo[poolId].priceInUSD.next(this.poolInfo[poolId].priceInNetworkCurrency.getValue() * this.apyCalculator.networkCurrency.price.getValue());
        });
    }
    approve(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo[poolId].depositButton.next(10);
            return yield this.poolInfo[poolId].token.contract.methods.approve(this.grapesCellarContractAddress, BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.poolInfo[poolId].depositButton.next(4);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.poolInfo[poolId].depositButton.next(5);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].token.symbol.getValue() + ' Approved',
                    icon: 'alarm',
                    text: 'You have successfully approved your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].depositButton.next(10);
                }, 2500);
            })
                .on('error', (error) => {
                this.poolInfo[poolId].depositButton.next(3);
                this.notificationsService.notify({
                    title: 'Approval Error',
                    icon: 'alarm',
                    text: 'There was an error approving your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].depositButton.next(0);
                }, 2500);
            });
        });
    }
    deposit(poolId, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo[poolId].depositButton.next(10);
            if (BigInt(this.poolInfo[poolId].tokenApproval.getValue()) < 1) {
                return yield this.approve(poolId).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.grapesCellarContract.methods.deposit(poolId, BigInt(Math.floor(amount * 1e18)))
                        .send({ from: this.user.address.getValue() })
                        .on('transactionHash', (transactionHash) => {
                        this.poolInfo[poolId].depositButton.next(1);
                    })
                        .on('confirmation', (confirmation) => {
                        if (confirmation) {
                        }
                    }).on('receipt', (receipt) => {
                        this.poolInfo[poolId].depositButton.next(2);
                        this.notificationsService.notify({
                            title: 'Deposited to ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '',
                            icon: 'alarm',
                            text: 'You have successfully deposited your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                            date: new Date()
                        });
                        setTimeout(() => {
                            this.poolInfo[poolId].depositButton.next(0);
                        }, 2500);
                    })
                        .on('error', (error) => {
                        this.poolInfo[poolId].depositButton.next(3);
                        this.notificationsService.notify({
                            title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Deposit Error',
                            icon: 'alarm',
                            text: 'There was an error depositing your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                            date: new Date()
                        });
                        setTimeout(() => {
                            this.poolInfo[poolId].depositButton.next(0);
                        }, 2500);
                    });
                }));
            }
            else {
                return yield this.grapesCellarContract.methods.deposit(poolId, BigInt(Math.floor(amount * 1e18)))
                    .send({ from: this.user.address.getValue() })
                    .on('transactionHash', (transactionHash) => {
                    this.poolInfo[poolId].depositButton.next(1);
                })
                    .on('confirmation', (confirmation) => {
                    if (confirmation) {
                    }
                }).on('receipt', (receipt) => {
                    this.poolInfo[poolId].depositButton.next(2);
                    this.notificationsService.notify({
                        title: 'Deposited to ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '',
                        icon: 'alarm',
                        text: 'You have successfully deposited your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                        date: new Date()
                    });
                    setTimeout(() => {
                        this.poolInfo[poolId].depositButton.next(0);
                    }, 2500);
                })
                    .on('error', (error) => {
                    this.poolInfo[poolId].depositButton.next(3);
                    this.notificationsService.notify({
                        title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Deposit Error',
                        icon: 'alarm',
                        text: 'There was an error depositing your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens to the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                        date: new Date()
                    });
                    setTimeout(() => {
                        this.poolInfo[poolId].depositButton.next(0);
                    }, 2500);
                });
            }
        });
    }
    withdraw(poolId, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo[poolId].withdrawButton.next(10);
            return yield this.grapesCellarContract.methods.withdraw(poolId, BigInt(Math.floor(amount * 1e18))).send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.poolInfo[poolId].withdrawButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.poolInfo[poolId].withdrawButton.next(2);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Withdrawl',
                    icon: 'alarm',
                    text: 'You have successfully withdrawn your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].withdrawButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.poolInfo[poolId].withdrawButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Withdrawl Error',
                    icon: 'alarm',
                    text: 'There was an error withdrawing your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].withdrawButton.next(0);
                }, 2500);
            });
        });
    }
    withdrawAll(poolId, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo[poolId].withdrawButton.next(10);
            return yield this.grapesCellarContract.methods.withdraw(poolId, BigInt(amount)).send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.poolInfo[poolId].withdrawButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.poolInfo[poolId].withdrawButton.next(2);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Withdrawl',
                    icon: 'alarm',
                    text: 'You have successfully withdrawn your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].withdrawButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.poolInfo[poolId].withdrawButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Withdrawl Error',
                    icon: 'alarm',
                    text: 'There was an error withdrawing your ' + this.poolInfo[poolId].token.symbol.getValue() + ' tokens from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].withdrawButton.next(0);
                }, 2500);
            });
        });
    }
    claim(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo[poolId].claimButton.next(10);
            return yield this.grapesCellarContract.methods.withdraw(poolId, 0)
                .send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.poolInfo[poolId].claimButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.poolInfo[poolId].claimButton.next(2);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Rewards Claimed',
                    icon: 'alarm',
                    text: 'You have successfully claimed your ' + this.projectService.project.tokenName + ' rewards from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].claimButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.poolInfo[poolId].claimButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Claim Error',
                    icon: 'alarm',
                    text: 'There was an error claiming your ' + this.projectService.project.tokenName + ' rewards from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].claimButton.next(0);
                }, 2500);
            });
        });
    }
    claimAll(poolId, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo[poolId].claimButton.next(10);
            return yield this.grapesCellarContract.methods.withdraw(poolId, BigInt(amount)).send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.poolInfo[poolId].claimButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.poolInfo[poolId].claimButton.next(2);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Rewards Claimed',
                    icon: 'alarm',
                    text: 'You have successfully claimed your ' + this.projectService.project.tokenName + ' rewards from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].claimButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.poolInfo[poolId].claimButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.poolInfo[poolId].poolInfo.getValue().poolName + ' Claim Error',
                    icon: 'alarm',
                    text: 'There was an error claiming your ' + this.projectService.project.tokenName + ' rewards from the pool named ' + this.poolInfo[poolId].poolInfo.getValue().poolName + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.poolInfo[poolId].claimButton.next(0);
                }, 2500);
            });
        });
    }
    getCumulativeRewardsSinceStart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.cumulativeRewardsSinceStart().call().then(result => {
                this.cellar.cumulativeRewardsSinceStart.next(result);
            });
        });
    }
    getAverageFeesPerBlockSinceStart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.averageFeesPerBlockSinceStart().call().then(result => {
                this.cellar.averageFeesPerBlockSinceStart.next(result);
            });
        });
    }
    getAverageFeesPerBlockEpoch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.averageFeesPerBlockEpoch().call().then(result => {
                this.cellar.averageFeesPerBlockEpoch.next(result);
            });
        });
    }
    getRewardsInThisEpoch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.rewardsInThisEpoch().call().then(result => {
                this.cellar.rewardsInThisEpoch.next(result);
            });
        });
    }
    getEpoch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.epoch().call().then(result => {
                this.cellar.epoch.next(result);
            });
        });
    }
    getUserInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getUserBNBBalance();
            this.getUserGrapesBalance();
        });
    }
    getAllPoolInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCumulativeRewardsSinceStart();
            yield this.getAverageFeesPerBlockSinceStart();
            yield this.getAverageFeesPerBlockEpoch();
            yield this.getRewardsInThisEpoch();
            return yield this.poolInfo.forEach((element, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.getAllUserPoolInfo(index);
            }));
        });
    }
    getPoolLength() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.poolLength().call().then(result => {
                this.cellar.length.next(result);
            });
        });
    }
    getAllUserPoolInfo(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user.address.getValue() === '') {
                return;
            }
            this.getUserPoolInfo(poolId);
            this.getPendingGrapes(poolId);
            this.getPoolInfo(poolId);
        });
    }
    getUserPoolInfo(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.userInfo(poolId, this.user.address.getValue()).call().then(result => {
                this.poolInfo[poolId].userPoolInfo.next(result);
            });
        });
    }
    getPendingGrapes(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.pendingGRAPES(poolId, this.user.address.getValue()).call().then(result => {
                this.poolInfo[poolId].pendingGrapes.next(result);
            });
        });
    }
    getPoolInfo(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesCellarContract.methods.poolInfo(poolId).call().then(result => {
                this.poolInfo[poolId].poolInfo.next(result);
            });
        });
    }
    getAllPoolWeights() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cellar.totalPoolWeights.next(0);
            let temp = Number(0);
            return yield this.poolInfo.forEach((pool, index) => {
                temp += Number(pool.poolInfo.getValue().allocPoint);
                this.cellar.totalPoolWeights.next(temp);
            });
        });
    }
    // LGE VALUES
    getLGEInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getBNBContributed();
            this.getLPTperBNBUnit();
            this.getTotalBNBContributed();
            this.getLGEEnd();
            this.getLGEStart();
            this.getLGECalculatedEnd();
            this.getLGEDuration();
            this.getIndividualCap();
            this.getInitialSupply();
            this.getTotalLPTMinted();
        });
    }
    getBNBContributed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.BNBContributed(this.user.address.getValue()).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.user.contribution.next(result);
            }));
        });
    }
    getLPTperBNBUnit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.LPTperBNBUnit().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.LPTperBNBUnit.next(result);
            }));
        });
    }
    getLGEEnd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.LGECompleted_Timestamp().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.ended.next(result);
            }));
        });
    }
    getLGEStart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.contractStart_Timestamp().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.started.next(result);
            }));
        });
    }
    getLGECalculatedEnd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.contractStart_Timestamp().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.grapesContract.methods.contributionPhase().call().then((resultZ) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.lge.calculatedEnd.next(Number(result) + Number(resultZ));
                }));
            }));
        });
    }
    getLGEDuration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.contributionPhase().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.duration.next(result);
            }));
        });
    }
    getIndividualCap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.individualCap().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.individualCap.next(result);
            }));
        });
    }
    getInitialSupply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.initialSupply().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.initialSupply.next(result);
            }));
        });
    }
    getTotalLPTMinted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.totalLPTTokensMinted().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.totalLPTMinted.next(result);
            }));
        });
    }
    getTotalBNBContributed() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.totalBNBContributed().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.lge.totalBNBContributed.next(result);
            }));
        });
    }
    unpledgeLiquidity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lge.unpledgeLiquidityButton.next(10);
            return yield this.grapesContract.methods.USER_UNPledgeLiquidity().send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.lge.unpledgeLiquidityButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.lge.unpledgeLiquidityButton.next(2);
                this.notificationsService.notify({
                    title: '' + this.projectService.project.networkCurrency + ' Unpledged',
                    icon: 'alarm',
                    text: 'You have successfully unpledged your ' + this.projectService.project.networkCurrency + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.unpledgeLiquidityButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.lge.unpledgeLiquidityButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.projectService.project.networkCurrency + ' Unpledge Error',
                    icon: 'alarm',
                    text: 'Your ' + this.projectService.project.networkCurrency + ' has not been unpledged.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.unpledgeLiquidityButton.next(0);
                }, 2500);
            });
        });
    }
    createLiquidity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lge.createLiquidityButton.next(10);
            return yield this.grapesContract.methods.POOL_CreateLiquidity().send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.lge.createLiquidityButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.lge.createLiquidityButton.next(2);
                this.notificationsService.notify({
                    title: 'LGE Liquidity Created',
                    icon: 'alarm',
                    text: 'Congratulations! You have successfully launched ' + this.projectService.project.name + '.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.createLiquidityButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.lge.createLiquidityButton.next(3);
                this.notificationsService.notify({
                    title: 'LGE Liquidity Error',
                    icon: 'alarm',
                    text: 'There was an error. Someone may have launched before you, or the LGE has not ended.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.createLiquidityButton.next(0);
                }, 2500);
            });
        });
    }
    claimLGE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lge.claimButton.next(10);
            return yield this.grapesContract.methods.USER_ClaimWrappedLiquidity().send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.lge.claimButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.lge.claimButton.next(2);
                this.notificationsService.notify({
                    title: 'Tokens Received from LGE',
                    icon: 'alarm',
                    text: 'You have received your LGE ' + this.liquidityToken.wLPSymbol.getValue() + ' tokens. Check your balance.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.claimButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.lge.claimButton.next(3);
                this.notificationsService.notify({
                    title: 'LGE Error',
                    icon: 'alarm',
                    text: 'There was an error claiming your LGE ' + this.liquidityToken.wLPSymbol.getValue() + ' tokens.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.claimButton.next(0);
                }, 2500);
            });
        });
    }
    depositLGE(amount, tos) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.lge.depositButton.next(10);
            return yield this.grapesContract.methods.USER_PledgeLiquidity(tos).send({
                from: this.user.address.getValue(),
                to: this.grapesContract,
                value: Math.floor(amount * 1e18)
            })
                .on('transactionHash', (transactionHash) => {
                this.lge.depositButton.next(1);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.lge.depositButton.next(2);
                this.notificationsService.notify({
                    title: '' + this.projectService.project.networkCurrency + ' Deposited to LGE',
                    icon: 'alarm',
                    text: 'Your ' + this.projectService.project.networkCurrency + ' LGE contribution has been received successfully.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.lge.depositButton.next(0);
                }, 2500);
            })
                .on('error', (error) => {
                this.lge.depositButton.next(2);
                this.notificationsService.notify({
                    title: 'LGE Error',
                    icon: 'alarm',
                    text: 'There was an error receiving your ' + this.projectService.project.networkCurrency + ' LGE deposit.',
                    date: new Date()
                });
                this.lge.depositButton.next(3);
                setTimeout(() => {
                    this.lge.depositButton.next(0);
                }, 2500);
            });
        });
    }
    setContracts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.setGrapesContract().then((setGrapesResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.setCellarContract().then((setCellarResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.getPoolLength().then((getPoolLengthResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.getAllPoolInfo().then((getAllPoolInfoResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.setPoolTokenContracts().then((setPoolTokenContractsResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                yield this.getLPContracts().then((getLPResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield this.setLPContracts().then((setLPResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        yield this.setSecondaryContracts().then(setSecondaryResult => {
                                            if (this.exitInterval === undefined) {
                                                this.exitInterval = setInterval(() => {
                                                    this.getInfo();
                                                }, 5000);
                                            }
                                        });
                                    }));
                                }));
                            }));
                        }));
                    }));
                }));
            }));
        });
    }
    stopGatheringInfo() {
        clearInterval(this.exitInterval);
        this.exitInterval = undefined;
    }
    // ================== //
    // USER BALANCES      //
    // ================== //
    getUserBNBBalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.web3.eth.getBalance(this.user.address.getValue()).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user.bnbBalance.next(Number(result));
            }));
        });
    }
    getUserGrapesBalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.balanceOf(this.user.address.getValue()).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user.grapesBalance.next(result);
            }));
        });
    }
    // ================== //
    // TOKEN INFO         //
    // ================== //
    getTokenInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getTokenName();
            this.getTokenSymbol();
            this.getTokenDecimals();
            this.getTokenTotalSupply();
            this.getTokenBuyFee();
            this.getTokenSellFee();
        });
    }
    getTokenName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.name().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token.name.next(result);
            }));
        });
    }
    getTokenSymbol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.symbol().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token.symbol.next(result);
            }));
        });
    }
    getTokenDecimals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.decimals().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token.decimals.next(result);
            }));
        });
    }
    getTokenTotalSupply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.totalSupply().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token.totalSupply.next(result);
            }));
        });
    }
    getTokenBuyFee() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.buyFee().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token.buyFee.next(result);
            }));
        });
    }
    getTokenSellFee() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.sellFee().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.token.sellFee.next(result);
            }));
        });
    }
    getTokenCirculatingSupply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.token.circulatingSupply.next((this.token.totalSupply.getValue() - this.apyCalculator.grapes.pairBalance.getValue()) - this.poolInfo[this.token.poolId.getValue()].poolTokenBalance.getValue());
        });
    }
    // ================== //
    // LP TOKENS INFO   //
    // ================== //
    // THIS IS CALLED LATER DUE TO THE LP TOKENS' INFORMATION BEING PULLED FROM TOKEN CONTRACT ITSELF
    getLPTokensInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getUserLPTokenBalances();
            this.getLPTokensTotalSupplies();
            this.getLPTokensDecimals();
            this.getLPTokensNames();
            this.getLPTokensSymbols();
        });
    }
    getLPTokensTotalSupplies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getLPTokenTotalSupply();
            this.getWLPTokenTotalSupply();
        });
    }
    getLPTokensDecimals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getLPTokenDecimals();
            this.getWLPTokenDecimals();
        });
    }
    getLPTokensNames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getLPTokenName();
            this.getWLPTokenName();
        });
    }
    getLPTokensSymbols() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getLPTokenSymbol();
            this.getWLPTokenSymbol();
        });
    }
    getUserLPTokenBalances() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getUserLPBalance();
            this.getUserWLPBalance();
        });
    }
    getUserLPBalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.lpContract.methods.balanceOf(this.user.address.getValue()).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user.lpBalance.next(result);
            }));
        });
    }
    getLPTokenName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.lpContract.methods.name().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.lpName.next(result);
            }));
        });
    }
    getLPTokenSymbol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.lpContract.methods.symbol().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.lpSymbol.next(result);
            }));
        });
    }
    getLPTokenDecimals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.lpContract.methods.decimals().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.lpDecimals.next(result);
            }));
        });
    }
    getLPTokenTotalSupply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.lpContract.methods.totalSupply().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.lpTotalSupply.next(result);
            }));
        });
    }
    getUserWLPBalance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.wLPContract.methods.balanceOf(this.user.address.getValue()).call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.user.wLPBalance.next(result);
            }));
        });
    }
    getWLPTokenName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.wLPContract.methods.name().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.wLPName.next(result);
            }));
        });
    }
    getWLPTokenSymbol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.wLPContract.methods.symbol().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.wLPSymbol.next(result);
            }));
        });
    }
    getWLPTokenDecimals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.wLPContract.methods.decimals().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.wLPDecimals.next(result);
            }));
        });
    }
    getWLPTokenTotalSupply() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.wLPContract.methods.totalSupply().call().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.liquidityToken.wLPTotalSupply.next(result);
            }));
        });
    }
    getWrapperApprovals() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getWrapperWrapApproval();
            this.getWrapperUnwrapApproval();
        });
    }
    getWrapperWrapApproval() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.lpContract.methods.allowance(this.user.address.getValue(), this.liquidityToken.wLPAddress.getValue()).call().then(result => {
                this.wrapper.wrapAllowance.next(result);
            });
        });
    }
    getWrapperUnwrapApproval() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.liquidityToken.wLPContract.methods.allowance(this.user.address.getValue(), this.liquidityToken.wLPAddress.getValue()).call().then(result => {
                this.wrapper.unwrapAllowance.next(result);
            });
        });
    }
    approveWrapperWrap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.wrapper.wrapButton.next(10);
            return yield this.liquidityToken.lpContract.methods.approve(this.liquidityToken.wLPAddress.getValue(), BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.wrapper.wrapButton.next(4);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.wrapper.wrapButton.next(5);
                this.notificationsService.notify({
                    title: '' + this.liquidityToken.lpSymbol.getValue() + ' Approved to Wrapper',
                    icon: 'alarm',
                    text: 'You have successfully approved your ' + this.liquidityToken.lpSymbol.getValue() + ' LP tokens to the wrapper.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.wrapper.wrapButton.next(10);
                }, 2500);
            })
                .on('error', (error) => {
                this.wrapper.wrapButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.liquidityToken.lpSymbol.getValue() + ' Wrapper Approval Error',
                    icon: 'alarm',
                    text: 'There was an error approving your ' + this.liquidityToken.lpSymbol.getValue() + ' LP tokens to the wrapper.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.wrapper.wrapButton.next(0);
                }, 2500);
            });
        });
    }
    approveWrapperUnwrap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.wrapper.unwrapButton.next(10);
            return yield this.liquidityToken.wLPContract.methods.approve(this.liquidityToken.wLPAddress.getValue(), BigInt(999999999999999999999999)).send({ from: this.user.address.getValue() })
                .on('transactionHash', (transactionHash) => {
                this.wrapper.unwrapButton.next(4);
            })
                .on('confirmation', (confirmation) => {
                if (confirmation) {
                }
            }).on('receipt', (receipt) => {
                this.wrapper.unwrapButton.next(5);
                this.notificationsService.notify({
                    title: '' + this.liquidityToken.wLPSymbol.getValue() + ' Approved to Unwrapper',
                    icon: 'alarm',
                    text: 'You have successfully approved your wrapped ' + this.liquidityToken.wLPSymbol.getValue() + ' LP tokens to the wrapper.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.wrapper.unwrapButton.next(10);
                }, 2500);
            })
                .on('error', (error) => {
                this.wrapper.unwrapButton.next(3);
                this.notificationsService.notify({
                    title: '' + this.liquidityToken.wLPSymbol.getValue() + ' Unwrapper Approval Error',
                    icon: 'alarm',
                    text: 'There was an error approving your wrapped ' + this.liquidityToken.wLPSymbol.getValue() + ' LP tokens to the wrapper.',
                    date: new Date()
                });
                setTimeout(() => {
                    this.wrapper.unwrapButton.next(0);
                }, 2500);
            });
        });
    }
    wrapFlip(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.wrapper.wrapButton.next(10);
            if (BigInt(this.wrapper.wrapAllowance.getValue()) < 1) {
                return yield this.approveWrapperWrap().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.liquidityToken.wLPContract.methods.wrapLPT(BigInt(Math.floor(amount * 1e18))).send({
                        from: this.user.address.getValue(),
                    })
                        .on('transactionHash', (transactionHash) => {
                        this.wrapper.wrapButton.next(1);
                    })
                        .on('confirmation', (confirmation) => {
                        if (confirmation) {
                        }
                    }).on('receipt', (receipt) => {
                        this.wrapper.wrapButton.next(2);
                        this.notificationsService.notify({
                            title: '' + this.liquidityToken.lpSymbol.getValue() + 'Wrap Successful',
                            icon: 'alarm',
                            text: 'Your ' + this.liquidityToken.lpSymbol.getValue() + ' LP tokens have been wrapped successfully.',
                            date: new Date()
                        });
                        setTimeout(() => {
                            this.wrapper.wrapButton.next(0);
                        }, 2500);
                    })
                        .on('error', (error) => {
                        this.wrapper.wrapButton.next(2);
                        this.notificationsService.notify({
                            title: '' + this.liquidityToken.lpSymbol.getValue() + 'Wrap Error',
                            icon: 'alarm',
                            text: 'There was an error wrapping your ' + this.liquidityToken.lpSymbol.getValue() + ' LP tokens.',
                            date: new Date()
                        });
                    });
                }));
            }
            else {
                return yield this.liquidityToken.wLPContract.methods.wrapLPT(BigInt(Math.floor(amount * 1e18))).send({
                    from: this.user.address.getValue(),
                })
                    .on('transactionHash', (transactionHash) => {
                    this.wrapper.wrapButton.next(1);
                })
                    .on('confirmation', (confirmation) => {
                    if (confirmation) {
                    }
                }).on('receipt', (receipt) => {
                    this.wrapper.wrapButton.next(2);
                    this.notificationsService.notify({
                        title: '' + this.liquidityToken.lpSymbol.getValue() + 'Wrap Successful',
                        icon: 'alarm',
                        text: 'Your ' + this.liquidityToken.lpSymbol.getValue() + ' LP tokens have been wrapped successfully.',
                        date: new Date()
                    });
                    setTimeout(() => {
                        this.wrapper.wrapButton.next(0);
                    }, 2500);
                })
                    .on('error', (error) => {
                    this.wrapper.wrapButton.next(2);
                    this.notificationsService.notify({
                        title: '' + this.liquidityToken.lpSymbol.getValue() + 'Unwrap Error',
                        icon: 'alarm',
                        text: 'There was an error wrapping your ' + this.liquidityToken.lpSymbol.getValue() + ' LP tokens.',
                        date: new Date()
                    });
                    this.wrapper.wrapButton.next(3);
                    setTimeout(() => {
                        this.wrapper.wrapButton.next(0);
                    }, 2500);
                });
            }
        });
    }
    unwrapFlip(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.wrapper.unwrapButton.next(10);
            if (BigInt(this.wrapper.unwrapAllowance.getValue()) < 1) {
                return yield this.approveWrapperUnwrap().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.liquidityToken.wLPContract.methods.unWrapLPT(BigInt(Math.floor(amount * 1e18))).send({
                        from: this.user.address.getValue(),
                    })
                        .on('transactionHash', (transactionHash) => {
                        this.wrapper.unwrapButton.next(1);
                    })
                        .on('confirmation', (confirmation) => {
                        if (confirmation) {
                        }
                    }).on('receipt', (receipt) => {
                        this.wrapper.unwrapButton.next(2);
                        this.notificationsService.notify({
                            title: '' + this.liquidityToken.wLPSymbol.getValue() + 'Unwrap Successful',
                            icon: 'alarm',
                            text: 'Your ' + this.liquidityToken.wLPSymbol.getValue() + ' wrapped LP tokens have been unwrapped successfully.',
                            date: new Date()
                        });
                        setTimeout(() => {
                            this.wrapper.unwrapButton.next(0);
                        }, 2500);
                    })
                        .on('error', (error) => {
                        this.wrapper.unwrapButton.next(2);
                        this.notificationsService.notify({
                            title: '' + this.liquidityToken.wLPSymbol.getValue() + 'Unwrap Error',
                            icon: 'alarm',
                            text: 'There was an error unwrapping your ' + this.liquidityToken.wLPSymbol.getValue() + ' wrapped LP tokens.',
                            date: new Date()
                        });
                        this.wrapper.unwrapButton.next(3);
                        setTimeout(() => {
                            this.wrapper.unwrapButton.next(0);
                        }, 2500);
                    });
                }));
            }
            else {
                return yield this.liquidityToken.wLPContract.methods.unWrapLPT(BigInt(Math.floor(amount * 1e18))).send({
                    from: this.user.address.getValue(),
                })
                    .on('transactionHash', (transactionHash) => {
                    this.wrapper.unwrapButton.next(1);
                })
                    .on('confirmation', (confirmation) => {
                    if (confirmation) {
                    }
                }).on('receipt', (receipt) => {
                    this.wrapper.unwrapButton.next(2);
                    this.notificationsService.notify({
                        title: '' + this.liquidityToken.wLPSymbol.getValue() + 'Unwrap Successful',
                        icon: 'alarm',
                        text: 'Your ' + this.liquidityToken.wLPSymbol.getValue() + ' wrapped LP tokens have been unwrapped successfully.',
                        date: new Date()
                    });
                    setTimeout(() => {
                        this.wrapper.unwrapButton.next(0);
                    }, 2500);
                })
                    .on('error', (error) => {
                    this.wrapper.unwrapButton.next(2);
                    this.notificationsService.notify({
                        title: '' + this.liquidityToken.wLPSymbol.getValue() + 'Unwrap Error',
                        icon: 'alarm',
                        text: 'There was an error unwrapping your ' + this.liquidityToken.wLPSymbol.getValue() + ' wrapped LP tokens.',
                        date: new Date()
                    });
                    this.wrapper.unwrapButton.next(3);
                    setTimeout(() => {
                        this.wrapper.unwrapButton.next(0);
                    }, 2500);
                });
            }
        });
    }
    // ================== //
    // CONTRACTS          //
    // ================== //
    setPoolTokenContracts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.poolInfo.length = this.cellar.length.getValue();
            for (let index = 0; index < this.poolInfo.length; index++) {
                this.poolInfo[index] = {
                    token: {
                        name: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                        address: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                        contract: undefined,
                        decimals: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                        symbol: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                    },
                    ape: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](30),
                    tvl: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](4200000),
                    poolTokenBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    priceInUSD: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    priceInNetworkCurrency: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    claimButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    depositButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    withdrawButton: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    tokenApproval: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    tokenRewards: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    pendingGrapes: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                    userPoolInfo: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
                        amount: 0,
                        rewardPaid: 0
                    }),
                    poolInfo: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
                        poolName: '',
                        stakedToken: '',
                        allocPoint: 0,
                        accGRAPESPerShare: 0,
                        VIPpool: false,
                        partialWithdraw: false
                    }),
                    pairInfo: {
                        pairAddress: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](''),
                        networkCurrencyPairBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0),
                        tokenPairBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
                    },
                    userBalance: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0)
                };
            }
        });
    }
    setContract(poolId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.poolInfo[poolId].poolInfo.getValue().stakedToken === this.grapesContractAddress) {
                this.token.poolId.next(poolId);
            }
            if (this.poolInfo[poolId].poolInfo.getValue().stakedToken === this.liquidityToken.wLPAddress.getValue()) {
                this.liquidityToken.wLPPoolId.next(poolId);
            }
            if (this.poolInfo[poolId].poolInfo.getValue().stakedToken === this.liquidityToken.lpAddress.getValue()) {
                this.liquidityToken.lpPoolId.next(poolId);
            }
            yield this.poolInfo[poolId].token.address.next(this.poolInfo[poolId].poolInfo.getValue().stakedToken);
            return this.poolInfo[poolId].token.contract = yield new this.web3.eth.Contract(grapesAbi, this.poolInfo[poolId].poolInfo.getValue().stakedToken);
        });
    }
    getLPContracts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getLPContract();
            return yield this.getWLPContract();
        });
    }
    setLPContracts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setLPContract();
            return yield this.setWLPContract();
        });
    }
    setSecondaryContracts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setStableCoinContract();
            yield this.setWrappedNetworkCurrencyContract();
            return yield this.setExchangeFactoryContract();
        });
    }
    setGrapesContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.grapesContract = yield new this.web3.eth.Contract(grapesAbi, this.grapesContractAddress);
        });
    }
    setStableCoinContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.stableCoinContract = yield new this.web3.eth.Contract(stableCoinAbi, this.stableCoinContractAddress);
        });
    }
    setWrappedNetworkCurrencyContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.wrappedNetworkCurrencyContract = yield new this.web3.eth.Contract(wrappedNetworkCurrencyAbi, this.wrappedNetworkCurrencyContractAddress);
        });
    }
    setExchangeFactoryContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.exchangeFactoryContract = yield new this.web3.eth.Contract(exchangeAbi, this.exchangeFactoryContractAddress);
        });
    }
    setCellarContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.grapesCellarContract = yield new this.web3.eth.Contract(grapesCellarAbi, this.grapesCellarContractAddress);
        });
    }
    getLPContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.viewLPT().call().then(result => {
                this.liquidityToken.lpAddress.next(result);
            });
        });
    }
    setLPContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.liquidityToken.lpAddress.getValue() !== '0x0000000000000000000000000000000000000000') { // IF LGE HAS STARTED
                return this.liquidityToken.lpContract = yield new this.web3.eth.Contract(grapesLPAbi, this.liquidityToken.lpAddress.getValue());
            }
            else {
                const clearedInterval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.getLPContract();
                    if (this.liquidityToken.lpAddress.getValue() !== '0x0000000000000000000000000000000000000000') { // IF LGE HAS STARTED
                        this.liquidityToken.lpContract = yield new this.web3.eth.Contract(grapesLPAbi, this.liquidityToken.lpAddress.getValue());
                        return clearInterval(clearedInterval);
                    }
                }), 5000);
            }
        });
    }
    getWLPContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.grapesContract.methods.viewWrappedLPT().call().then(result => {
                this.liquidityToken.wLPAddress.next(result);
            });
        });
    }
    setWLPContract() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.liquidityToken.wLPAddress.getValue() !== '0x0000000000000000000000000000000000000000') { // IF LGE HAS STARTED
                return this.liquidityToken.wLPContract = yield new this.web3.eth.Contract(grapesWLPAbi, this.liquidityToken.wLPAddress.getValue());
            }
            else {
                const clearedInterval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.getWLPContract();
                    if (this.liquidityToken.wLPAddress.getValue() !== '0x0000000000000000000000000000000000000000') { // IF LGE HAS STARTED
                        this.liquidityToken.wLPContract = yield new this.web3.eth.Contract(grapesWLPAbi, this.liquidityToken.wLPAddress.getValue());
                        return clearInterval(clearedInterval);
                    }
                }), 5000);
            }
        });
    }
}
Web3Service.ɵfac = function Web3Service_Factory(t) { return new (t || Web3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_static_info_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"])); };
Web3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Web3Service, factory: Web3Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Web3Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }, { type: _static_info_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "sNRQ":
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pipes_round_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/round.pipe */ "IrDT");



class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
}
PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipeModule });
PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipeModule_Factory(t) { return new (t || PipeModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_1__["RoundPipe"]], exports: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_1__["RoundPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_1__["RoundPipe"]],
                exports: [_pipes_round_pipe__WEBPACK_IMPORTED_MODULE_1__["RoundPipe"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "u6LD":
/*!**********************************************!*\
  !*** ./src/app/roadmap/roadmap.component.ts ***!
  \**********************************************/
/*! exports provided: RoadmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapComponent", function() { return RoadmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RoadmapComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoadmapComponent.ɵfac = function RoadmapComponent_Factory(t) { return new (t || RoadmapComponent)(); };
RoadmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapComponent, selectors: [["app-roadmap"]], decls: 9, vars: 0, consts: [[1, "item"]], template: function RoadmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: grid;\n  justify-content: space-around;\n  align-content: center;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  -webkit-text-decoration: underline solid #5c2a92ff;\n          text-decoration: underline solid #5c2a92ff;\n}\n[_nghost-%COMP%]   div.empty[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJvYWRtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQURKO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0FBQVIiLCJmaWxlIjoicm9hZG1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICAvLyBncmlkLWFyZWE6cm91dGVyLW91dGxldDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaDEsIGg1IHtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgc29saWQgJHByaW1hcnk7XHJcbiAgICB9XHJcbiAgICBkaXYuZW1wdHkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MzAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap',
                templateUrl: './roadmap.component.html',
                styleUrls: ['./roadmap.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "unxH":
/*!******************************************************!*\
  !*** ./src/app/dynamic-info-services/now.service.ts ***!
  \******************************************************/
/*! exports provided: NowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NowService", function() { return NowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class NowService {
    constructor() {
        this.now = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Date().getTime() / 1000);
        setInterval(() => {
            this.now.next(new Date().getTime());
        }, 1000);
    }
}
NowService.ɵfac = function NowService_Factory(t) { return new (t || NowService)(); };
NowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NowService, factory: NowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vKQO":
/*!*************************************!*\
  !*** ./src/app/logo/logo.module.ts ***!
  \*************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.component */ "ySb0");




class LogoModule {
}
LogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogoModule });
LogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogoModule_Factory(t) { return new (t || LogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoModule, { declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _landing_landing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.module */ "WMCE");
/* harmony import */ var _sale_sale_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale/sale.module */ "UOdp");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sale/sale.component */ "TWut");
/* harmony import */ var _farms_farms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farms/farms.component */ "87rV");
/* harmony import */ var _farms_farms_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./farms/farms.module */ "DnET");
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "mK86");
/* harmony import */ var _wrapper_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrapper/wrapper.module */ "d9RS");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "TDBs");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./information/information.component */ "Fgt4");
/* harmony import */ var _information_information_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./information/information.module */ "3waB");
















const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'farms', component: _farms_farms_component__WEBPACK_IMPORTED_MODULE_6__["FarmsComponent"] },
    { path: 'lge', component: _sale_sale_component__WEBPACK_IMPORTED_MODULE_5__["SaleComponent"] },
    { path: 'wrapper', component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["WrapperComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
    { path: 'information', component: _information_information_component__WEBPACK_IMPORTED_MODULE_12__["InformationComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _landing_landing_module__WEBPACK_IMPORTED_MODULE_3__["LandingModule"],
            _sale_sale_module__WEBPACK_IMPORTED_MODULE_4__["SaleModule"],
            _farms_farms_module__WEBPACK_IMPORTED_MODULE_7__["FarmsModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"],
            _information_information_module__WEBPACK_IMPORTED_MODULE_13__["InformationModule"],
            _wrapper_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["WrapperModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false, initialNavigation: 'enabledNonBlocking' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_landing_landing_module__WEBPACK_IMPORTED_MODULE_3__["LandingModule"],
        _sale_sale_module__WEBPACK_IMPORTED_MODULE_4__["SaleModule"],
        _farms_farms_module__WEBPACK_IMPORTED_MODULE_7__["FarmsModule"],
        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"],
        _information_information_module__WEBPACK_IMPORTED_MODULE_13__["InformationModule"],
        _wrapper_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["WrapperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _landing_landing_module__WEBPACK_IMPORTED_MODULE_3__["LandingModule"],
                    _sale_sale_module__WEBPACK_IMPORTED_MODULE_4__["SaleModule"],
                    _farms_farms_module__WEBPACK_IMPORTED_MODULE_7__["FarmsModule"],
                    _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"],
                    _information_information_module__WEBPACK_IMPORTED_MODULE_13__["InformationModule"],
                    _wrapper_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["WrapperModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false, initialNavigation: 'enabledNonBlocking' }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wJni":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-chart/dashboard-chart.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardChartModule", function() { return DashboardChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-chart.component */ "W0I9");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");





class DashboardChartModule {
}
DashboardChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardChartModule });
DashboardChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardChartModule_Factory(t) { return new (t || DashboardChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardChartModule, { declarations: [_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]], exports: [_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_chart_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"]
                ],
                exports: [
                    _dashboard_chart_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wMrW":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component */ "4G6T");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification.module */ "kaMw");





class NotificationsModule {
}
NotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationsModule, { declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]], exports: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notification_notification_module__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"]
                ],
                exports: [
                    _notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xRHT":
/*!**********************************************************************!*\
  !*** ./src/app/notifications/notification/notification.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dynamic-info-services/notifications.service */ "0f74");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NotificationComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.data.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.index + 1, " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r0.notificationsLength), " ");
} }
const _c0 = function (a0) { return { "break-spaces": a0 }; };
class NotificationComponent {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
        this.data = {
            title: 'Approve Successful',
            icon: 'alarm',
            text: `You have successfully approved your tokens to pool.`,
            date: new Date()
        };
        this.index = 0;
        this.static = false;
        this.notificationsLength = this.notificationsService.length;
    }
    ngOnInit() {
    }
    close() {
        this.notificationsService.close();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], inputs: { data: "data", index: "index", static: "static" }, decls: 10, vars: 7, consts: [[1, "wrapper", 3, "click"], ["id", "title", 1, "large-header"], ["id", "text", 1, "medium-header"], [1, "material-icons"], [1, "text", 3, "ngClass"], ["class", "medium-header split", "id", "date", 4, "ngIf"], ["id", "date", 1, "medium-header", "split"], [1, "date"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationComponent_Template_section_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NotificationComponent_span_9_Template, 7, 7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.static === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.static);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  grid-area: notification;\n  display: grid;\n  grid-template-areas: \". . .\" \". wrapper .\" \". . .\";\n  grid-template-columns: 10px 1fr 10px;\n  grid-template-rows: 10px 1fr 10px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 20px;\n  background: #000;\n  grid-area: wrapper;\n  display: grid;\n  grid-template-areas: \". . .\" \". title .\" \". text .\" \". date .\" \". . .\";\n  grid-template-columns: 20px 1fr 20px;\n  grid-template-rows: 10px -webkit-max-content -webkit-max-content -webkit-max-content 10px;\n  grid-template-rows: 10px max-content max-content max-content 10px;\n  row-gap: 10px;\n  justify-content: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.up-under[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-content: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr -webkit-max-content;\n  grid-template-columns: 1fr max-content;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.inverse.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n}\n@media (max-width: 1600px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    justify-self: center;\n  }\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container.split.small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n    justify-self: center;\n  }\n}\n@media (max-width: 400px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.medium-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 5px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 10px;\n  background: rgba(0, 0, 0, 0.25);\n  padding: 5px;\n  border-radius: 8px;\n}\n@media (max-width: 1100px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    row-gap: 10px;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%] {\n  grid-template-columns: -webkit-max-content 1fr -webkit-max-content;\n  grid-template-columns: max-content 1fr max-content;\n  grid-template-rows: 1fr;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   div.small-container.mushy[_ngcontent-%COMP%]:nth-child(2)   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  border-radius: 30px;\n  padding: 5px 10px;\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.value.inverse[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  color: #5c2a92ff;\n  margin: 5px 0px;\n  text-align: left;\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n@media (max-height: 750px) {\n  [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.small[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h3.extra-small[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4.extra-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.large-header[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n  min-width: 100%;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  column-gap: 10px;\n  align-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header[_ngcontent-%COMP%]   label.inverse[_ngcontent-%COMP%] {\n  color: #000;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n  justify-self: start;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.split[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.medium-header.small[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  column-gap: 5x;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fefefe;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ff2cf3ff;\n  text-align: left;\n  justify-self: stretch;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  text-align: right;\n  justify-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  text-align: right;\n  justify-self: stretch;\n  column-gap: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value.small[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span.small-header.value[_ngcontent-%COMP%]   label.value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  text-align: center;\n  font-size: 1rem;\n  align-self: end;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   label.grayed[_ngcontent-%COMP%] {\n  background: #5f5f5f !important;\n  border-radius: 6px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   .naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper.naked[_ngcontent-%COMP%], [_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.naked[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#title[_ngcontent-%COMP%] {\n  grid-area: title;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #5c2a92ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#89daff\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#text[_ngcontent-%COMP%] {\n  grid-area: text;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#text[_ngcontent-%COMP%]   p.break-spaces[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   span#date[_ngcontent-%COMP%] {\n  grid-area: date;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhaW5lcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUNBO0VBR0Esb0NBQUE7RUFDQSxpQ0FBQTtBQUhKO0FBSUk7RUFDSSxlQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkNoQkE7RURpQkEsa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0VBQ0E7RUFLQSxvQ0FBQTtFQUNBLHlGQUFBO0VBQUEsaUVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFWUjtBQU5RO0VBQ0ksb0JBQUE7QUFRWjtBRW5CSTtFQUNJLFdESEE7QUR3QlI7QUVuQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGcUJOO0FFcEJNO0VBQ0ksOEJBQUE7QUZzQlY7QUVyQlU7RUFDSSxtQkFBQTtBRnVCZDtBRXJCVTtFQUNJLGlCQUFBO0FGdUJkO0FFcEJNO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FGc0JWO0FFcEJNO0VBQ0ksOENBQUE7RUFBQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUZzQlY7QUVyQlU7RUFDRSw4Q0FBQTtFQUFBLHNDQUFBO0FGdUJaO0FFcEJNO0VBQ0k7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsYUFBQTtFRnNCVjtFRXJCVTtJQUNJLG9CQUFBO0VGdUJkO0VFckJVO0lBQ0ksb0JBQUE7RUZ1QmQ7QUFDRjtBRXBCTTtFQTFDRjtJQTJDSSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsWUFBQTtFRnVCTjtBQUNGO0FFckJJO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFNQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRmtCTjtBRXpCTTtFQUpGO0lBS0ksK0JBQUE7SUFDQSwwQkFBQTtJQUNBLGFBQUE7RUY0Qk47QUFDRjtBRXhCTTtFQUNJLGtFQUFBO0VBQUEsa0RBQUE7RUFDQSx1QkFBQTtFQU9BLG1CQUFBO0FGb0JWO0FFMUJVO0VBQ0ksZ0JBQUE7QUY0QmQ7QUUzQmM7RUFDSSxnQkFBQTtBRjZCbEI7QUV0QlE7RUFDSSxtQkFBQTtBRndCWjtBRXRCZ0I7RUFDSSxxQkQ1RVo7RUM0RWdDLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBRXJILG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXRDFGWjtBRHNIUjtBRTNCb0I7RUFDSSxjRHBGaEI7QURpSFI7QUV6Qlk7RUFDSSxpQkFBQTtFQUNBLGdCRGpHTjtFQ21HTSxlQUFBO0VBSUEsZ0JBQUE7RUFTQSxxQkQzR1I7RUMyRzRCLGlCQUFBO0VBQ2lELGFBQUE7RUFDRyw0QkFBQTtFQUN4RSxvRUFBQTtFQUFzRSxxREFBQTtFQUN0RSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QUZvQmhCO0FFdENnQjtFQUxKO0lBTVEsZUFBQTtFRnlDbEI7QUFDRjtBRXZDZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FGeUNwQjtBRXZDZ0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FGeUNwQjtBRS9CWTtFQUNJLGVBQUE7QUZpQ2hCO0FFOUJRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUZnQ1o7QUU5QlE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBRmdDWjtBRS9CWTtFQUNJLGVBQUE7QUZpQ2hCO0FFaENnQjtFQUNJLGNEbklaO0FEcUtSO0FFaENnQjtFQUNJLFdEOUlaO0FEZ0xSO0FFL0JZO0VBQ0ksOEJBQUE7QUZpQ2hCO0FFaENnQjtFQUNJLG1CQUFBO0FGa0NwQjtBRWhDZ0I7RUFDSSxpQkFBQTtBRmtDcEI7QUU5QmdCO0VBQ0ksZUFBQTtBRmdDcEI7QUU1QlE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwyREFBQTtFQUFBLDJDQUFBO0VBQ0EsY0FBQTtBRjhCWjtBRTdCWTtFQUNJLGVBQUE7RUFDQSxjRC9KUjtBRDhMUjtBRTlCZ0I7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUZnQ3BCO0FFL0JvQjtFQUNJLGtCQUFBO0FGaUN4QjtBRTlCZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FGZ0NwQjtBRTNCb0I7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUY2QnhCO0FFNUJ3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRjhCNUI7QUU3QjRCO0VBQ0ksZUFBQTtBRitCaEM7QUU1QndCO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FGOEI1QjtBRXZCSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUZ5QlI7QUV2Qkk7RUFDSSx1Q0FBQTtBRnlCUjtBRXZCSTtFQUNJLGVBQUE7QUZ5QlI7QUFwTlE7RUFDQyxXQUFBO0FBc05UO0FBcE5RO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQXNOWjtBQXJOWTtFQUNJLGdCQUFBO0FBdU5oQjtBQXROZ0I7RUFDSSxxQkNqQ1o7RURpQ2dDLGlCQUFBO0VBQzhDLGFBQUE7RUFDRyw0QkFBQTtFQUNyRSxvRUFBQTtFQUFtRSxxREFBQTtFQUNuRSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QUE2TnBCO0FBMU5ZO0VBQ0ksZUFBQTtBQTROaEI7QUEzTmdCO0VBQ0kseUJBQUE7QUE2TnBCO0FBMU5ZO0VBQ0ksZUFBQTtBQTROaEIiLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29udGFpbmVycy5zY3NzJztcclxuOmhvc3Qge1xyXG4gICAgZ3JpZC1hcmVhOm5vdGlmaWNhdGlvbjtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiB3cmFwcGVyIC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4IDFmciAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjEwcHggMWZyIDEwcHg7XHJcbiAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDokYmxhY2s7XHJcbiAgICAgICAgZ3JpZC1hcmVhOndyYXBwZXI7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgJy4gLiAuJ1xyXG4gICAgICAgICcuIHRpdGxlIC4nXHJcbiAgICAgICAgJy4gdGV4dCAuJ1xyXG4gICAgICAgICcuIGRhdGUgLidcclxuICAgICAgICAnLiAuIC4nO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoyMHB4IDFmciAyMHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTBweCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCAxMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvbnRhaW5lcnM7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgJiN0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6dGl0bGU7XHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJHByaW1hcnkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM4OWRhZmYnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYjdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6dGV4dDtcclxuICAgICAgICAgICAgICAgIHAuYnJlYWstc3BhY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYjZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6ZGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICM1YzJhOTJmZjtcclxuJHByaW1hcnktb3BhcXVlOiAjNWMyYTkyMDk7XHJcbiRjb21wbGVtZW50OiAjMmNlNGQ4ZmY7XHJcbiRyZWQ6ICNmNjJjNGQ7XHJcbiRncmVlbjogIzNjYmIzYztcclxuJGxpZ2h0OiAjZmYyY2YzZmY7XHJcbiRkYXJrOiAjNWMyYTkyZmY7XHJcbiR3aGl0ZTogI2ZlZmVmZTtcclxuJGdyYXk6ICM1ZjVmNWY7IiwiQGltcG9ydCAnLi90aGVtZS5zY3NzJztcclxuQG1peGluIGNvbnRhaW5lcnN7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgfVxyXG4gICAgZGl2Lm1lZGl1bS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1xyXG4gICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDAuMjUpO1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICYuc3BsaXQge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYudXAtdW5kZXIge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OnN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIG1heC1jb250ZW50O1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAmLm11c2h5IHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1heC1jb250ZW50IDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDoxNjAwcHgpIHtcclxuICAgICAgICAgICYuc3BsaXQuc21hbGwge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmcjtcclxuICAgICAgICByb3ctZ2FwOjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2LnNtYWxsLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyO1xyXG4gICAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjExMDBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgIHJvdy1nYXA6MTBweDtcclxuICAgICAgfVxyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwLjI1KTtcclxuICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAmLm11c2h5IHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmcjtcclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgICYubGFyZ2UtaGVhZGVyLCAmLm1lZGl1bS1oZWFkZXIge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDsgLyogT2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJGxpZ2h0IDAlLCAkcHJpbWFyeSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAkbGlnaHQgMCUsICRwcmltYXJ5IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg5ZmZiMCcsIGVuZENvbG9yc3RyPScjODlkYWZmJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAmLmludmVyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjokd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzLCBoNCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6Mi40cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46NXB4IDBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDo3NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgJi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5leHRyYS1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0OyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICRsaWdodCAwJSwgJGNvbXBsZW1lbnQgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4OWZmYjAnLCBlbmRDb2xvcnN0cj0nIzk4ZGNmYicsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubGFyZ2UtaGVhZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWVkaXVtLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOm1heC1jb250ZW50IDFmcjtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuaW52ZXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc3BsaXQge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc21hbGwtaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOjV4O1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICRsaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0cmV0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0cmV0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6ZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjplbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbC5ncmF5ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6JGdyYXkhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgfVxyXG4gICAgLm5ha2VkLCAmLm5ha2VkLCAqLm5ha2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwwKSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAqLmNsaWNrYWJsZSB7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.scss']
            }]
    }], function () { return [{ type: src_app_dynamic_info_services_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], static: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ySb0":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 1, vars: 0, consts: [["src", "./assets/logos/logo.svg"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  align-content: center;\n  align-items: center;\n  max-height: 100%;\n  max-width: 100%;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 50px;\n  max-width: 50px;\n  min-height: 50px;\n  min-width: 50px;\n}\n.large[_nghost-%COMP%] {\n  min-width: 200px;\n  min-height: 200px;\n}\n.large[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 200px;\n  min-height: 200px;\n  max-width: 200px;\n  max-height: 200px;\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQURZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUdoQiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6NTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6NTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOjUwcHg7XHJcbiAgICB9XHJcbiAgICAmLmxhcmdlIHtcclxuICAgICAgICBtaW4td2lkdGg6MjAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDoyMDBweDtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "z3pf":
/*!*************************************************************!*\
  !*** ./src/app/header/header-item/header-item.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderItemComponent", function() { return HeaderItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class HeaderItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderItemComponent.ɵfac = function HeaderItemComponent_Factory(t) { return new (t || HeaderItemComponent)(); };
HeaderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderItemComponent, selectors: [["app-header-item"]], inputs: { data: "data" }, decls: 5, vars: 5, consts: [["routerLinkActive", "active", "skipLocationChange", "true", 1, "wrapper", 3, "routerLink", "routerLinkActiveOptions"], [1, "material-icons"]], template: function HeaderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.data.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  display: grid;\n  grid-template-areas: \". . .\" \". content .\" \". . .\";\n  grid-template-columns: 5px 1fr 5px;\n  grid-template-rows: 5px 1fr 5px;\n  transition: 0.4s;\n  border-radius: 4px;\n  border-left: 2px solid #5c2a92ff;\n  border-right: 2px solid #2ce4d8ff;\n  border-bottom: 2px solid #ff2cf3ff;\n  border-top: 2px solid #5c2a92ff;\n}\n[_nghost-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.25);\n  border-left: 2px solid #2ce4d8ff;\n  border-right: 2px solid #5c2a92ff;\n  text-shadow: 0px 0px 5px #ff2cf3ff;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%] {\n  grid-area: content;\n  display: grid;\n  justify-content: space-around;\n  align-content: center;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.4s;\n  outline: none !important;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   section.wrapper.active[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 2.5px #ff2cf3ff;\n}\n[_nghost-%COMP%]   section.wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #ff2cf3ff;\n  \n  \n  \n  background: linear-gradient(to bottom, #ff2cf3ff 0%, #2ce4d8ff 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#89ffb0\", endColorstr=\"#98dcfb\",GradientType=0 );\n  \n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUNBO0VBR0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtBQUhKO0FBSUk7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQUZSO0FBSUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFJQSx3QkFBQTtBQUxSO0FBRVE7RUFDSSxvQkFBQTtBQUFaO0FBR1E7RUFDSSxvQ0FBQTtBQURaO0FBR1E7RUFDSSxxQkNoQ0o7RURnQ3dCLGlCQUFBO0VBQ2lELGFBQUE7RUFDRyw0QkFBQTtFQUN4RSxvRUFBQTtFQUFzRSxxREFBQTtFQUN0RSxtSEFBQTtFQUFxSCxVQUFBO0VBQ3JILDZCQUFBO0VBQ0Esb0NBQUE7QUFJWiIsImZpbGUiOiJoZWFkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3RoZW1lLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiBjb250ZW50IC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cHggMWZyIDVweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXB4IDFmciA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgIGJvcmRlci1yaWdodDoycHggc29saWQgJGNvbXBsZW1lbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAkbGlnaHQ7XHJcbiAgICBib3JkZXItdG9wOjJweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjI1KTtcclxuICAgICAgICBib3JkZXItbGVmdDoycHggc29saWQgJGNvbXBsZW1lbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzowcHggMHB4IDVweCAkbGlnaHQ7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLndyYXBwZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTpjb250ZW50O1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjowLjRzO1xyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRsaW5lOm5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6MHB4IDBweCAyLjVweCAkbGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAkbGlnaHQgMCUsICRjb21wbGVtZW50IDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgJGxpZ2h0IDAlLCAkY29tcGxlbWVudCAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODlmZmIwJywgZW5kQ29sb3JzdHI9JyM5OGRjZmInLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIkYmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5OiAjNWMyYTkyZmY7XHJcbiRwcmltYXJ5LW9wYXF1ZTogIzVjMmE5MjA5O1xyXG4kY29tcGxlbWVudDogIzJjZTRkOGZmO1xyXG4kcmVkOiAjZjYyYzRkO1xyXG4kZ3JlZW46ICMzY2JiM2M7XHJcbiRsaWdodDogI2ZmMmNmM2ZmO1xyXG4kZGFyazogIzVjMmE5MmZmO1xyXG4kd2hpdGU6ICNmZWZlZmU7XHJcbiRncmF5OiAjNWY1ZjVmOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-item',
                templateUrl: './header-item.component.html',
                styleUrls: ['./header-item.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map