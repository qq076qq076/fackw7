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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"starting; else elseTemplate\">\r\n  <div class=\"start-anim\">\r\n    <div class=\"gif\">\r\n      <img src=\"assets/images/start.gif\" />\r\n      <h3>正在啟動 Windows</h3>\r\n    </div>\r\n    <p class=\"copyright\">© Microsoft Corporation</p>\r\n  </div>\r\n</ng-container>\r\n<ng-template #elseTemplate>\r\n  <div class=\"container\">\r\n    <div class=\"desktop\">\r\n      <app-folder></app-folder>\r\n    </div>\r\n    <app-toolbar></app-toolbar>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-anim {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: black;\n  color: white;\n  cursor: none; }\n  .start-anim .gif {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n  .start-anim .copyright {\n    font-size: 15px;\n    justify-self: end; }\n  .container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: url(/assets/images/background.jpg) center center/cover no-repeat fixed; }\n  .desktop {\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RcXGZha2V3Ny9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFUaEI7SUFZUSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUFoQi9CO0lBb0JRLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrRkFBb0YsRUFBQTtFQUd4RjtFQUNJLE9BQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1hbmltIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IG5vbmU7XHJcblxyXG4gICAgLmdpZiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29weXJpZ2h0IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcpIGNlbnRlciBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgZml4ZWQ7XHJcbn1cclxuXHJcbi5kZXNrdG9wIHtcclxuICAgIGZsZXg6IDE7XHJcbn0iXX0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'start';
        this.starting = false;
        setTimeout(function () {
            _this.starting = false;
        }, 4800);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/toolbar/toolbar.component */ "./src/app/component/toolbar/toolbar.component.ts");
/* harmony import */ var _component_programs_programs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/programs/programs.component */ "./src/app/component/programs/programs.component.ts");
/* harmony import */ var _component_windows_windows_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/windows/windows.component */ "./src/app/component/windows/windows.component.ts");
/* harmony import */ var _application_folder_folder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/folder/folder.component */ "./src/app/application/folder/folder.component.ts");
/* harmony import */ var _component_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/arrow/arrow.component */ "./src/app/component/arrow/arrow.component.ts");
/* harmony import */ var _application_notepad_notepad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application/notepad/notepad.component */ "./src/app/application/notepad/notepad.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                _component_programs_programs_component__WEBPACK_IMPORTED_MODULE_6__["ProgramsComponent"],
                _component_windows_windows_component__WEBPACK_IMPORTED_MODULE_7__["WindowsComponent"],
                _application_folder_folder_component__WEBPACK_IMPORTED_MODULE_8__["FolderComponent"],
                _component_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_9__["ArrowComponent"],
                _application_notepad_notepad_component__WEBPACK_IMPORTED_MODULE_10__["NotepadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/folder/folder.component.html":
/*!**********************************************************!*\
  !*** ./src/app/application/folder/folder.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-windows minWidth=\"630\"\r\n             minHeight=\"450\">\r\n  <div class=\"url-bar\">\r\n    <app-arrow (click)=\"toLast()\"></app-arrow>\r\n    <app-arrow class=\"next\"></app-arrow>\r\n    <div *ngIf=\"!focusePath\"\r\n         class=\"url-show\"\r\n         (dblclick)=\"focusePath = true\">\r\n      <img [src]=\"currentFolder.icon\">\r\n      <div *ngFor=\"let path of getUrlList()\"\r\n           class=\"path\">\r\n        {{path}}\r\n      </div>\r\n    </div>\r\n    <input *ngIf=\"focusePath\"\r\n           type=\"text\"\r\n           class=\"url-text\"\r\n           [(ngModel)]=\"pathInput\"\r\n           (keyup.enter)=\"searchPath()\"\r\n           (click)=\"stopPropagation($event)\" />\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"map\">\r\n      <div class=\"block\">\r\n        <div class=\"list\"\r\n             (dblclick)=\"toggle(computer)\"\r\n             [ngClass]=\"{'active': currentFolder === computer}\">\r\n          <img [src]=\"computer.icon\" />\r\n          <p class=\"name\">{{computer.name}}</p>\r\n        </div>\r\n        <ul>\r\n          <li *ngFor=\"let directory of computer.directory\"\r\n              [ngClass]=\"{'active': currentFolder === directory}\"\r\n              (dblclick)=\"toggle(directory)\"\r\n              class=\"list\">\r\n            <img [src]=\"directory.icon\" />\r\n            <p class=\"name\">{{directory.name}}</p>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"currentFolder.directory.length>0; else elseTemplate\">\r\n      <div class=\"app active\"\r\n           [ngClass]=\"{'active': active===folder}\"\r\n           (click)=\"active=folder\"\r\n           (dblclick)=\"toggle(folder)\"\r\n           *ngFor=\"let folder of currentFolder.directory\">\r\n        <img [src]=\"folder.icon\" />\r\n        <p class=\"name\">{{folder.name}}</p>\r\n      </div>\r\n    </ng-container>\r\n    <ng-template #elseTemplate>\r\n      <div class=\"empty\">\r\n        這個資料夾是空的\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</app-windows>\r\n"

/***/ }),

/***/ "./src/app/application/folder/folder.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/application/folder/folder.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".url-bar {\n  display: flex;\n  margin: 5px 0; }\n  .url-bar .url-show {\n    flex: 1;\n    height: 20px;\n    background: #ffffff;\n    border: 1px solid transparent;\n    border-width: 1px;\n    -o-border-image: linear-gradient(to bottom, #7a8087, #c6ccd2);\n       border-image: linear-gradient(to bottom, #7a8087, #c6ccd2);\n    border-image-slice: 1;\n    padding: 0 3px;\n    font-size: 12px;\n    display: flex; }\n  .url-bar .url-show img {\n      height: 20px;\n      width: 20px; }\n  .url-bar .url-show .path {\n      margin-left: 5px;\n      position: relative;\n      display: flex;\n      align-items: center; }\n  .url-bar .url-show .path::after {\n        content: '';\n        margin-left: 5px;\n        border-width: 3px;\n        border-color: transparent transparent transparent #000105;\n        border-style: solid; }\n  .url-bar .url-text {\n    flex: 1;\n    height: 20px;\n    border: 1px solid transparent;\n    border-width: 1px;\n    -o-border-image: linear-gradient(to bottom, #7a8087, #c6ccd2);\n       border-image: linear-gradient(to bottom, #7a8087, #c6ccd2);\n    border-image-slice: 1;\n    outline: none;\n    padding: 0 5px; }\n  .content {\n  width: 100%;\n  flex: 1;\n  background: #fcfcfc;\n  border-top: 1px solid #B8BEC7;\n  display: flex; }\n  .content .map {\n    width: 250px;\n    height: 100%;\n    border-right: 2px solid #E1E5EB;\n    padding: 8px 0;\n    box-sizing: border-box; }\n  .content .map ul {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n  .content .map ul .list {\n        padding-left: 25px; }\n  .content .map .active {\n      background: rgba(56, 125, 255, 0.3);\n      border: 1px solid rgba(0, 88, 255, 0.52); }\n  .content .app {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100px;\n    min-height: 85px;\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n    margin: 5px;\n    padding: 5px;\n    border-radius: 4px;\n    border: 1px solid transparent; }\n  .content .app img {\n      width: 50px; }\n  .content .app .name {\n      text-align: center; }\n  .content .app.active {\n      background: rgba(56, 125, 255, 0.3);\n      border: 1px solid rgba(0, 88, 255, 0.52); }\n  .content .empty {\n    width: 100%;\n    text-align: center;\n    margin: 10px 0;\n    font-size: 12px; }\n  .list {\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 2px;\n  padding: 0 15px;\n  border-radius: 3px; }\n  .list img {\n    width: 20px;\n    height: 20px; }\n  .list .name {\n    margin-left: 5px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n    flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vZm9sZGVyL0Q6XFxwcm9qZWN0XFxmYWtldzcvc3JjXFxhcHBcXGFwcGxpY2F0aW9uXFxmb2xkZXJcXGZvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFGakI7SUFLUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDZEQUEwRDtPQUExRCwwREFBMEQ7SUFDMUQscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYSxFQUFBO0VBZHJCO01BaUJZLFlBQVk7TUFDWixXQUFXLEVBQUE7RUFsQnZCO01Bc0JZLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBekIvQjtRQTRCZ0IsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIseURBQXlEO1FBQ3pELG1CQUFtQixFQUFBO0VBaENuQztJQXNDUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsNkRBQTBEO09BQTFELDBEQUEwRDtJQUMxRCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGNBQWMsRUFBQTtFQUl0QjtFQUNJLFdBQVc7RUFDWCxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixhQUFhLEVBQUE7RUFMakI7SUFRUSxZQUFZO0lBQ1osWUFBWTtJQUNaLCtCQUErQjtJQUMvQixjQUFjO0lBQ2Qsc0JBQXNCLEVBQUE7RUFaOUI7TUFlWSxnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLFNBQVMsRUFBQTtFQWpCckI7UUFvQmdCLGtCQUFrQixFQUFBO0VBcEJsQztNQXlCWSxtQ0FBbUM7TUFDbkMsd0NBQXdDLEVBQUE7RUExQnBEO0lBK0JRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCLEVBQUE7RUF4Q3JDO01BMkNZLFdBQVcsRUFBQTtFQTNDdkI7TUErQ1ksa0JBQWtCLEVBQUE7RUEvQzlCO01BbURZLG1DQUFtQztNQUNuQyx3Q0FBd0MsRUFBQTtFQXBEcEQ7SUF5RFEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBTHRCO0lBUVEsV0FBVztJQUNYLFlBQVksRUFBQTtFQVRwQjtJQWFRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vZm9sZGVyL2ZvbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cmwtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG5cclxuICAgIC51cmwtc2hvdyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3YTgwODcsICNjNmNjZDIpO1xyXG4gICAgICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICAgICAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXRoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDAxMDU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51cmwtdGV4dCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjN2E4MDg3LCAjYzZjY2QyKTtcclxuICAgICAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQjhCRUM3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAubWFwIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNFMUU1RUI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU2LCAxMjUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4OCwgMjU1LCAwLjUyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU2LCAxMjUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCA4OCwgMjU1LCAwLjUyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcHR5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/application/folder/folder.component.ts":
/*!********************************************************!*\
  !*** ./src/app/application/folder/folder.component.ts ***!
  \********************************************************/
/*! exports provided: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderComponent", function() { return FolderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder */ "./src/app/application/folder/folder.ts");



var FolderComponent = /** @class */ (function () {
    function FolderComponent() {
        this.focusePath = false;
        this.emptyFolder = {
            path: '',
            name: '',
            icon: '',
            directory: []
        };
        this.computer = _folder__WEBPACK_IMPORTED_MODULE_2__["Computer"];
        this.currentFolder = _folder__WEBPACK_IMPORTED_MODULE_2__["Computer"];
        this.pathInput = this.currentFolder.path;
    }
    FolderComponent.prototype.ngOnInit = function () {
    };
    FolderComponent.prototype.getUrlList = function () {
        return this.currentFolder.path.split('\\').filter(function (item) { return item; });
    };
    FolderComponent.prototype.searchPath = function () {
        this.focusePath = false;
        var folder = this.deepSearch(this.pathInput);
        this.currentFolder = folder || this.emptyFolder;
    };
    FolderComponent.prototype.getByPath = function () {
    };
    FolderComponent.prototype.toggle = function (folder) {
        this.currentFolder = folder;
        this.pathInput = folder.path;
    };
    FolderComponent.prototype.toLast = function () {
        var pathList = this.currentFolder.path.split('\\');
        pathList.pop();
        var folder = this.deepSearch(pathList.join('\\'));
        if (folder) {
            this.currentFolder = folder;
        }
        else {
            this.currentFolder = _folder__WEBPACK_IMPORTED_MODULE_2__["Computer"];
        }
    };
    FolderComponent.prototype.searchFolder = function () {
    };
    FolderComponent.prototype.deepSearch = function (path, folderList) {
        if (folderList === void 0) { folderList = _folder__WEBPACK_IMPORTED_MODULE_2__["FolderMap"]; }
        for (var _i = 0, folderList_1 = folderList; _i < folderList_1.length; _i++) {
            var folder = folderList_1[_i];
            if (path === folder.path) {
                return folder;
            }
            else if (path.indexOf(folder.path) !== -1) {
                return this.deepSearch(path, folder.directory);
            }
            else {
                return null;
            }
        }
    };
    FolderComponent.prototype.stopPropagation = function (e) {
        e.stopPropagation();
    };
    FolderComponent.prototype.setUnFocus = function () {
        if (this.focusePath) {
            this.focusePath = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FolderComponent.prototype, "setUnFocus", null);
    FolderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-folder',
            template: __webpack_require__(/*! ./folder.component.html */ "./src/app/application/folder/folder.component.html"),
            styles: [__webpack_require__(/*! ./folder.component.scss */ "./src/app/application/folder/folder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FolderComponent);
    return FolderComponent;
}());



/***/ }),

/***/ "./src/app/application/folder/folder.ts":
/*!**********************************************!*\
  !*** ./src/app/application/folder/folder.ts ***!
  \**********************************************/
/*! exports provided: ProgramFiles, UserFolder, C, D, Computer, FolderMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramFiles", function() { return ProgramFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFolder", function() { return UserFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Computer", function() { return Computer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderMap", function() { return FolderMap; });
var ProgramFiles = {
    path: '電腦\\本機磁碟(C:)\\Program Files',
    name: 'Program Files',
    icon: 'assets/images/folder.ico',
    directory: []
};
var UserFolder = {
    path: '電腦\\本機磁碟(C:)\\使用者',
    name: '使用者',
    icon: 'assets/images/user folder.ico',
    directory: []
};
var C = {
    name: '本機磁碟(C:)',
    path: '電腦\\本機磁碟(C:)',
    icon: 'assets/images/d.ico',
    directory: [
        ProgramFiles,
        UserFolder,
    ],
};
var D = {
    path: '電腦\\固態硬碟(D:)',
    name: '固態硬碟(D:)',
    icon: 'assets/images/d.ico',
    directory: []
};
var Computer = {
    path: '電腦',
    name: '電腦',
    icon: 'assets/images/computer.ico',
    directory: [
        C,
        D
    ],
};
var FolderMap = [
    Computer
];


/***/ }),

/***/ "./src/app/application/notepad/notepad.component.html":
/*!************************************************************!*\
  !*** ./src/app/application/notepad/notepad.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  notepad works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/application/notepad/notepad.component.scss":
/*!************************************************************!*\
  !*** ./src/app/application/notepad/notepad.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL25vdGVwYWQvbm90ZXBhZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/application/notepad/notepad.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/application/notepad/notepad.component.ts ***!
  \**********************************************************/
/*! exports provided: NotepadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadComponent", function() { return NotepadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotepadComponent = /** @class */ (function () {
    function NotepadComponent() {
    }
    NotepadComponent.prototype.ngOnInit = function () {
    };
    NotepadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notepad',
            template: __webpack_require__(/*! ./notepad.component.html */ "./src/app/application/notepad/notepad.component.html"),
            styles: [__webpack_require__(/*! ./notepad.component.scss */ "./src/app/application/notepad/notepad.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotepadComponent);
    return NotepadComponent;
}());



/***/ }),

/***/ "./src/app/component/arrow/arrow.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/arrow/arrow.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div></div>\r\n<div></div>\r\n<div></div>"

/***/ }),

/***/ "./src/app/component/arrow/arrow.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/arrow/arrow.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1px solid #a4adbc;\n  background: linear-gradient(to bottom, #9ca8d8, #143386 75%, #7aecfd);\n  box-shadow: 0 3px 2px #bed0e7 inset; }\n  :host.next div:first-child {\n    -webkit-transform: rotate(35deg) translate(2px, -1px);\n            transform: rotate(35deg) translate(2px, -1px); }\n  :host.next div:last-child {\n    -webkit-transform: rotate(-35deg) translate(2px, 1px);\n            transform: rotate(-35deg) translate(2px, 1px); }\n  :host[disable='true'] {\n    background: linear-gradient(to bottom, #ecf1f5, #beccd8 75%, #dde5f2); }\n  :host div:first-child {\n    width: 7px;\n    background: #fefbef;\n    height: 2px;\n    border-radius: 5px;\n    -webkit-transform: rotate(-35deg) translate(-2px, -1px);\n            transform: rotate(-35deg) translate(-2px, -1px); }\n  :host div:nth-child(2) {\n    width: 10px;\n    background: #fefbef;\n    height: 2px;\n    border-radius: 5px; }\n  :host div:last-child {\n    width: 7px;\n    background: #fefbef;\n    height: 2px;\n    border-radius: 5px;\n    -webkit-transform: rotate(35deg) translate(-2px, 1px);\n            transform: rotate(35deg) translate(-2px, 1px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fycm93L0Q6XFxwcm9qZWN0XFxmYWtldzcvc3JjXFxhcHBcXGNvbXBvbmVudFxcYXJyb3dcXGFycm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxRUFBcUU7RUFDckUsbUNBQW1DLEVBQUE7RUFWdkM7SUFjWSxxREFBNkM7WUFBN0MsNkNBQTZDLEVBQUE7RUFkekQ7SUFrQlkscURBQTZDO1lBQTdDLDZDQUE2QyxFQUFBO0VBbEJ6RDtJQXVCUSxxRUFBcUUsRUFBQTtFQXZCN0U7SUEyQlEsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVEQUErQztZQUEvQywrQ0FBK0MsRUFBQTtFQS9CdkQ7SUFtQ1EsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUF0QzFCO0lBMENRLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxREFBNkM7WUFBN0MsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYXJyb3cvYXJyb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E0YWRiYztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM5Y2E4ZDgsICMxNDMzODYgNzUlLCAjN2FlY2ZkKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDJweCAjYmVkMGU3IGluc2V0O1xyXG5cclxuICAgICYubmV4dCB7XHJcbiAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpIHRyYW5zbGF0ZSgycHgsIC0xcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpIHRyYW5zbGF0ZSgycHgsIDFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZbZGlzYWJsZT0ndHJ1ZSddIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWNmMWY1LCAjYmVjY2Q4IDc1JSwgI2RkZTVmMik7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWZiZWY7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWZiZWY7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWZiZWY7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1ZGVnKSB0cmFuc2xhdGUoLTJweCwgMXB4KTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/arrow/arrow.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/arrow/arrow.component.ts ***!
  \****************************************************/
/*! exports provided: ArrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowComponent", function() { return ArrowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArrowComponent = /** @class */ (function () {
    function ArrowComponent() {
    }
    ArrowComponent.prototype.ngOnInit = function () {
    };
    ArrowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arrow',
            template: __webpack_require__(/*! ./arrow.component.html */ "./src/app/component/arrow/arrow.component.html"),
            styles: [__webpack_require__(/*! ./arrow.component.scss */ "./src/app/component/arrow/arrow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArrowComponent);
    return ArrowComponent;
}());



/***/ }),

/***/ "./src/app/component/programs/programs.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/programs/programs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mask\"\n     (click)=\"close()\"></div>\n<div class=\"programs-list\">\n  <ul>\n    <li *ngFor=\"let item of appList\">\n      <img [src]=\"item.img\">\n      <p class=\"name\"> {{item.name}}</p>\n    </li>\n  </ul>\n</div>\n<div class=\"default-item\">\n  <ul>\n    <li *ngFor=\"let item of rightList\">\n      <p class=\"name\"> {{item.name}}</p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/component/programs/programs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/programs/programs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  display: none;\n  width: 413px;\n  height: 578px;\n  border-radius: 6px;\n  bottom: 42px;\n  left: 0;\n  padding: 7px;\n  box-sizing: border-box;\n  background: linear-gradient(to bottom, #90a2b9 0%, #434D57 30%, #434D57 70%, #a5bedb);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  :host.open {\n    display: flex; }\n  :host .mask {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    bottom: -40px;\n    left: 0;\n    z-index: 99; }\n  :host .programs-list {\n    z-index: 100;\n    width: 251px;\n    background: white;\n    border-radius: 3px;\n    border: 1px solid #7b8691;\n    padding: 1px; }\n  :host .programs-list ul {\n      list-style: none;\n      margin: 0;\n      padding: 0; }\n  :host .programs-list ul li {\n        height: 38px;\n        padding: 0;\n        display: flex;\n        align-items: center;\n        margin: 1px 0;\n        box-sizing: border-box;\n        border: 1px solid transparent; }\n  :host .programs-list ul li:hover {\n          border: 1px solid #A5B2B8;\n          background: linear-gradient(to bottom, #DDEBFD, #C3DDFF); }\n  :host .programs-list ul li img {\n          width: 32px;\n          height: 32px;\n          margin: 0 2px; }\n  :host .programs-list ul li .name {\n          margin-left: 5px; }\n  :host .default-item {\n    z-index: 100;\n    flex: 1; }\n  :host .default-item ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      color: white;\n      padding: 0 5px;\n      padding-top: 90px;\n      font-size: 13px; }\n  :host .default-item ul li {\n        padding: 0 5px;\n        height: 29px;\n        margin: 1px 0;\n        display: flex;\n        align-items: center;\n        border: 1px solid transparent; }\n  :host .default-item ul li:hover {\n          border: 1px solid #41464D;\n          background: linear-gradient(to bottom, #A9AEB4, #616A73 45%, #434D57 50%, #5F6871);\n          border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2dyYW1zL0Q6XFxwcm9qZWN0XFxmYWtldzcvc3JjXFxhcHBcXGNvbXBvbmVudFxccHJvZ3JhbXNcXHByb2dyYW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztFQUNQLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIscUZBS3VCO0VBQ3ZCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBO0VBaEJyQjtJQW1CUSxhQUFhLEVBQUE7RUFuQnJCO0lBdUJRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixPQUFPO0lBQ1AsV0FBVyxFQUFBO0VBNUJuQjtJQWdDUSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQW9DO0lBQ3BDLFlBQVksRUFBQTtFQXJDcEI7TUF3Q1ksZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxVQUFVLEVBQUE7RUExQ3RCO1FBNkNnQixZQUFZO1FBQ1osVUFBVTtRQUNWLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw2QkFBNkIsRUFBQTtFQW5EN0M7VUFzRG9CLHlCQUF5QjtVQUN6Qix3REFBd0QsRUFBQTtFQXZENUU7VUEyRG9CLFdBQVc7VUFDWCxZQUFZO1VBQ1osYUFBYSxFQUFBO0VBN0RqQztVQWlFb0IsZ0JBQWdCLEVBQUE7RUFqRXBDO0lBd0VRLFlBQVk7SUFDWixPQUFPLEVBQUE7RUF6RWY7TUE0RVksZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxVQUFVO01BQ1YsWUFBWTtNQUNaLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBbEYzQjtRQXFGZ0IsY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkIsRUFBQTtFQTFGN0M7VUE2Rm9CLHlCQUF5QjtVQUN6QixrRkFBa0Y7VUFDbEYsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcHJvZ3JhbXMvcHJvZ3JhbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDQxM3B4O1xyXG4gICAgaGVpZ2h0OiA1NzhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvdHRvbTogNDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLFxyXG4gICAgICAgIHJnYigxNDQsIDE2MiwgMTg1KSAwJSxcclxuICAgICAgICAjNDM0RDU3IDMwJSxcclxuICAgICAgICAjNDM0RDU3IDcwJSxcclxuICAgICAgICByZ2IoMTY1LCAxOTAsIDIxOSkpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXNrIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYm90dG9tOiAtNDBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9ncmFtcy1saXN0IHtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgd2lkdGg6IDI1MXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTIzLCAxMzQsIDE0NSk7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0E1QjJCODtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRERFQkZELCAjQzNEREZGKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0LWl0ZW0ge1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcHggMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQxNDY0RDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQTlBRUI0LCAjNjE2QTczIDQ1JSwgIzQzNEQ1NyA1MCUsICM1RjY4NzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/component/programs/programs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/programs/programs.component.ts ***!
  \**********************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/application/application.service */ "./src/app/service/application/application.service.ts");



var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.toggleProgrames = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.appList = [];
        this.rightList = [
            {
                name: 'Guest',
            },
            {
                name: '文件',
            },
            {
                name: '圖片',
            },
            {
                name: '音樂',
            },
            {
                name: '電腦',
            },
        ];
        appService.getApplication().subscribe(function (appList) {
            _this.appList = appList;
        });
    }
    Object.defineProperty(ProgramsComponent.prototype, "isOpen", {
        set: function (open) {
            this.open = open;
        },
        enumerable: true,
        configurable: true
    });
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    ProgramsComponent.prototype.close = function () {
        this.toggleProgrames.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProgramsComponent.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgramsComponent.prototype, "toggleProgrames", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ProgramsComponent.prototype, "isOpen", null);
    ProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programs',
            template: __webpack_require__(/*! ./programs.component.html */ "./src/app/component/programs/programs.component.html"),
            styles: [__webpack_require__(/*! ./programs.component.scss */ "./src/app/component/programs/programs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "./src/app/component/toolbar/toolbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/toolbar/toolbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"start\">\r\n  <i (click)=\"toggleProgrames()\" [ngClass]=\"{'open':openPrograms}\"></i>\r\n  <app-programs [isOpen]=\"openPrograms\" (toggleProgrames)=\"toggleProgrames()\"></app-programs>\r\n</div>\r\n<div class=\"tool-list\">\r\n  <div class=\"icon\" *ngFor=\"let item of appList\" (click)=\"toggleApp(item)\" [ngClass]=\"{'open': item.isOpen}\">\r\n    <img [src]=\"item.img\" />\r\n  </div>\r\n</div>\r\n<!-- <div class=\"small-icon\">\r\n</div> -->\r\n<div class=\"date-time\">\r\n  <p>下午 03:42</p>\r\n  <p>2019/4/11</p>\r\n</div>\r\n<div class=\"show-desktop\">\r\n  <i></i>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/toolbar/toolbar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/toolbar/toolbar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 40px;\n  background: linear-gradient(to top, rgba(51, 117, 191, 0.7) 95%, #CAD9EA);\n  border-top: 1px solid #434D58;\n  display: flex; }\n  :host .start {\n    position: relative;\n    padding: 1px 9px;\n    display: flex;\n    align-items: center;\n    background: rgba(45, 37, 37, 0.3); }\n  :host .start i {\n      display: block;\n      width: 38px;\n      height: 38px;\n      background: url(/assets/images/start-icon.png) center no-repeat;\n      background-position-y: -9px;\n      border-radius: 50%; }\n  :host .start i:hover, :host .start i.open {\n        background-position-y: -63px; }\n  :host .start i:active {\n        background-position-y: -117px; }\n  :host .tool-list {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n    padding: 0 2px;\n    background: linear-gradient(to right, rgba(45, 37, 37, 0.3), rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0) 98%, rgba(45, 37, 37, 0.3)); }\n  :host .tool-list .icon {\n      width: 58px;\n      border-bottom: none;\n      border: 1px solid rgba(0, 0, 0, 0);\n      height: calc(100% - 1px);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 3px;\n      position: relative;\n      margin: -1px 1px 0; }\n  :host .tool-list .icon img {\n        height: 78%;\n        z-index: 5; }\n  :host .tool-list .icon::before {\n        content: '';\n        display: block;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        border-radius: 3px; }\n  :host .tool-list .icon::after {\n        content: '';\n        display: block;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        box-sizing: border-box;\n        border-radius: 3px;\n        border: 1px solid rgba(0, 0, 0, 0); }\n  :host .tool-list .icon:hover {\n        border: 1px solid transparent;\n        -o-border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(45, 37, 37, 0.3) 25%, rgba(45, 37, 37, 0.3) 75%, rgba(255, 255, 255, 0));\n           border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(45, 37, 37, 0.3) 25%, rgba(45, 37, 37, 0.3) 75%, rgba(255, 255, 255, 0));\n        border-image-slice: 1; }\n  :host .tool-list .icon:active {\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(45, 37, 37, 0.4) 50%, rgba(255, 255, 255, 0)); }\n  :host .tool-list .icon:focus {\n        outline: none; }\n  :host .tool-list .icon.open::before {\n        background: linear-gradient(163deg, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0) 45%); }\n  :host .tool-list .icon.open::after {\n        border: 1px solid rgba(230, 239, 249, 0.5); }\n  :host .tool-list .icon.open:hover::before, :host .tool-list .icon.open.focus {\n        background: rgba(255, 255, 255, 0.9); }\n  :host .small-icon {\n    width: 253px;\n    background: rgba(45, 37, 37, 0.3); }\n  :host .date-time {\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    width: 78px;\n    color: white;\n    background: rgba(45, 37, 37, 0.3); }\n  :host .date-time > p {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 50%; }\n  :host .show-desktop {\n    width: 11px;\n    border-left: 1px solid #434D58;\n    background: rgba(45, 37, 37, 0.3); }\n  :host .show-desktop i {\n      display: block;\n      border: 1px solid #CAD9EA;\n      border-right: none;\n      width: 100%;\n      height: 100%;\n      box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Rvb2xiYXIvRDpcXHByb2plY3RcXGZha2V3Ny9zcmNcXGFwcFxcY29tcG9uZW50XFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLHlFQUF5RTtFQUN6RSw2QkFBNkI7RUFDN0IsYUFBYSxFQUFBO0VBSmpCO0lBT1Esa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQyxFQUFBO0VBWHpDO01BY1ksY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osK0RBQStEO01BQy9ELDJCQUEyQjtNQUMzQixrQkFBa0IsRUFBQTtFQW5COUI7UUF1QmdCLDRCQUE0QixFQUFBO0VBdkI1QztRQTJCZ0IsNkJBQTZCLEVBQUE7RUEzQjdDO0lBaUNRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGNBQWM7SUFDZCw4SEFBOEgsRUFBQTtFQXJDdEk7TUF3Q1ksV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQ0FBa0M7TUFDbEMsd0JBQXdCO01BQ3hCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsa0JBQWtCLEVBQUE7RUFqRDlCO1FBb0RnQixXQUFXO1FBQ1gsVUFBVSxFQUFBO0VBckQxQjtRQXlEZ0IsV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBQTtFQTlEbEM7UUFrRWdCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixrQ0FBa0MsRUFBQTtFQXpFbEQ7UUE4RWdCLDZCQUE2QjtRQUM3QixvSkFBaUo7V0FBakosaUpBQWlKO1FBQ2pKLHFCQUFxQixFQUFBO0VBaEZyQztRQW9GZ0Isb0hBQW9ILEVBQUE7RUFwRnBJO1FBd0ZnQixhQUFhLEVBQUE7RUF4RjdCO1FBOEZvQixtRkFBbUYsRUFBQTtFQTlGdkc7UUFrR29CLDBDQUEwQyxFQUFBO0VBbEc5RDtRQXVHb0Isb0NBQW9DLEVBQUE7RUF2R3hEO0lBK0dRLFlBQVk7SUFDWixpQ0FBaUMsRUFBQTtFQWhIekM7SUFvSFEsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUMsRUFBQTtFQXpIekM7TUE0SFksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsV0FBVyxFQUFBO0VBL0h2QjtJQW9JUSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlDQUFpQyxFQUFBO0VBdEl6QztNQXlJWSxjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoNTEsIDExNywgMTkxLCAwLjcpIDk1JSwgI0NBRDlFQSk7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNEQ1ODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnN0YXJ0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDlweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0NSwgMzcsIDM3LCAwLjMpO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9zdGFydC1pY29uLnBuZykgY2VudGVyIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtOXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtNjNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvb2wtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZzogMCAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQ1LCAzNywgMzcsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkgMiUsIHJnYmEoMCwgMCwgMCwgMCkgOTglLCByZ2JhKDQ1LCAzNywgMzcsIDAuMykpO1xyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDFweCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMXB4IDFweCAwO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzglO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5rKS5pyJ5YW26aSY54uA5oWLXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoNDUsIDM3LCAzNywgMC4zKSAyNSUsIHJnYmEoNDUsIDM3LCAzNywgMC4zKSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDQ1LCAzNywgMzcsIDAuNCkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+W3sumWi+WVn+eahOeLgOaFi1xyXG4gICAgICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHJnYmEoMCwgMCwgMCwgMCkgNDUlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzAsIDIzOSwgMjQ5LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICYuZm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNtYWxsLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNTNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAzNywgMzcsIDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGUtdGltZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB3aWR0aDogNzhweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0NSwgMzcsIDM3LCAwLjMpO1xyXG5cclxuICAgICAgICA+cCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3ctZGVza3RvcCB7XHJcbiAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDM0RDU4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDM3LCAzNywgMC4zKTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FEOUVBO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/toolbar/toolbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/toolbar/toolbar.component.ts ***!
  \********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_application_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/application/application.service */ "./src/app/service/application/application.service.ts");



var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.appList = [];
        this.openPrograms = false;
        appService.getApplication().subscribe(function (appList) {
            _this.appList = appList;
        });
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.toggleApp = function (app) {
        console.log(app);
        this.appService.clickApp(app);
    };
    ToolbarComponent.prototype.toggleProgrames = function () {
        this.openPrograms = !this.openPrograms;
        console.log(this.openPrograms);
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/component/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/component/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_application_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/component/windows/windows.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/windows/windows.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     [ngClass]=\"{'unselect': isResizing || isDragging}\"\r\n     (mousemove)=\"preventDefault($event)\">\r\n  <div class=\"title\">\r\n    <div class=\"drag\"\r\n      (mousedown)=\"startDrag($event)\"\r\n    >\r\n      <img [src]=\"logo\">\r\n      {{name}}\r\n    </div>\r\n    <div class=\"btn btn_small\" [ngClass]=\"{'focuse': isFocuse}\"></div>\r\n    <div class=\"btn btn_large\" [ngClass]=\"{'focuse': isFocuse}\"></div>\r\n    <div class=\"btn btn_close\" [ngClass]=\"{'focuse': isFocuse}\">\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n      <div></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/windows/windows.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/windows/windows.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  border: 1px solid #8b8c8f;\n  border-radius: 6px;\n  background: #d8e4f3;\n  background: linear-gradient(to bottom, #9EB2CD, #C4CEED 3%);\n  padding: 5px;\n  position: absolute;\n  box-sizing: border-box; }\n  :host .container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column; }\n  :host .container .btn {\n      width: 28px;\n      height: 14px;\n      border-radius: 2px;\n      border: 1px solid #6c88a5;\n      margin: 0 1px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: relative;\n      padding: 3px 0;\n      box-sizing: border-box; }\n  :host .container .btn_small {\n      background: transparent; }\n  :host .container .btn_small.focuse {\n        background: linear-gradient(to bottom, #C9DCF0 35%, #A3B8D0 50%, #AEC4DD 100%); }\n  :host .container .btn_small.focuse:hover {\n          background: linear-gradient(to bottom, #A0D1F6 35%, #2E77A9 50%, #37B3DC 100%); }\n  :host .container .btn_small.focuse:active {\n          background: linear-gradient(to bottom, #6C889D 35%, #203E59 50%, #36C0BB 100%); }\n  :host .container .btn_small::before {\n        content: '';\n        box-sizing: border-box;\n        border: 1px solid rgba(255, 255, 255, 0.5);\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0; }\n  :host .container .btn_small::after {\n        content: '';\n        width: 8px;\n        height: 2px;\n        border: 1px solid #637181;\n        background: #E6DBDB;\n        align-self: flex-end; }\n  :host .container .btn_large {\n      background: transparent; }\n  :host .container .btn_large.focuse {\n        background: linear-gradient(to bottom, #C9DCF0 35%, #A3B8D0 50%, #AEC4DD 100%); }\n  :host .container .btn_large.focuse:hover {\n          background: linear-gradient(to bottom, #A0D1F6 35%, #2E77A9 50%, #37B3DC 100%); }\n  :host .container .btn_large.focuse:active {\n          background: linear-gradient(to bottom, #6C889D 35%, #203E59 50%, #36C0BB 100%); }\n  :host .container .btn_large::before {\n        content: '';\n        width: 5px;\n        height: 2px;\n        border: 2px solid #E6DBDB;\n        border-radius: 1px;\n        box-shadow: 0 0 0 1px #818D9C,\r 0 0 0 1px #818D9C inset; }\n  :host .container .btn_close {\n      background: transparent; }\n  :host .container .btn_close.focuse {\n        background: linear-gradient(to bottom, #F1B9B7 35%, #AF4E39 50%, #CA7C65 100%); }\n  :host .container .btn_close.focuse:hover {\n          background: linear-gradient(to bottom, #F2CCC2 35%, #D74E22 50%, #DC6C3A 100%); }\n  :host .container .btn_close.focuse:active {\n          background: linear-gradient(to bottom, #C19C85 35%, #782002 50%, #DBB273 100%); }\n  :host .container .btn_close div:nth-child(1) {\n        position: absolute;\n        width: 10px;\n        height: 2px;\n        box-shadow: 0 0 0 1px #637181;\n        position: absolute;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n  :host .container .btn_close div:nth-child(2) {\n        position: absolute;\n        width: 10px;\n        height: 2px;\n        box-shadow: 0 0 0 1px #637181;\n        position: absolute;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n  :host .container .btn_close div:nth-child(3) {\n        width: 10px;\n        height: 2px;\n        background: #E6DBDB;\n        position: absolute;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n  :host .container .btn_close div:nth-child(4) {\n        width: 10px;\n        height: 2px;\n        background: #E6DBDB;\n        position: absolute;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n  :host .container.unselect {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  :host .container .title {\n      height: 20px;\n      display: flex;\n      font-size: 12px;\n      color: #7c8694;\n      display: flex;\n      align-items: center; }\n  :host .container .title .drag {\n        display: flex;\n        flex: 1;\n        height: 100%; }\n  :host .container .title .drag img {\n          max-width: 12px;\n          max-height: 12px;\n          margin: 0 2px; }\n  :host .container .content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3dpbmRvd3MvRDpcXHByb2plY3RcXGZha2V3Ny9zcmNcXGFwcFxcY29tcG9uZW50XFx3aW5kb3dzXFx3aW5kb3dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvd2luZG93cy93aW5kb3dzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJEQUEyRDtFQUMzRCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBO0VBUjFCO0lBV1EsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFkOUI7TUFpQlksV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLHNCQUFzQixFQUFBO0VBM0JsQztNQStCWSx1QkFBdUIsRUFBQTtFQS9CbkM7UUFrQ2dCLDhFQUE4RSxFQUFBO0VBbEM5RjtVQXFDb0IsOEVBQThFLEVBQUE7RUFyQ2xHO1VBeUNvQiw4RUFBOEUsRUFBQTtFQXpDbEc7UUE4Q2dCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsMENBQTBDO1FBQzFDLFdBQVc7UUFDWCxZQUFZO1FBRVosa0JBQWtCO1FBQ2xCLE1BQU0sRUFBQTtFQXJEdEI7UUF5RGdCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsb0JBQW9CLEVBQUE7RUE5RHBDO01BbUVZLHVCQUF1QixFQUFBO0VBbkVuQztRQXNFZ0IsOEVBQThFLEVBQUE7RUF0RTlGO1VBeUVvQiw4RUFBOEUsRUFBQTtFQXpFbEc7VUE2RW9CLDhFQUE4RSxFQUFBO0VBN0VsRztRQWtGZ0IsV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQix1REFLUixFQUFBO0VDM0JKO01EakVKLHVCQTRGUSxFQUFBO0VDekJGO1FEbkVOLDhFQWtHd0IsRUFBQTtFQzdCaEI7VURyRVIsOEVBc0d5QixFQUFBO0VDL0JqQjtVRHZFUiw4RUE2RytCLEVBQUE7RUNwQ3pCO1FEc0NjLGtCQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVU7UUFDViw2QkFBa0I7UUFDbEIsa0JBQVc7UUFuSC9CLGdDQTRGUTtnQkE1RlIsd0JBNEZRLEVBZUk7RUMzQk47UUR3Q2Msa0JBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVTtRQUNWLDZCQUFrQjtRQUNsQixrQkFBVztRQTVIL0IsaUNBNEZrQjtnQkE1RmxCLHlCQTRGa0IsRUFlTjtFQ3BCTjtRRDBDYyxXQUFXO1FBRVgsV0FBVTtRQUNWLG1CQUFrQjtRQUNsQixrQkFBVztRQXJJL0IsZ0NBNEZRO2dCQTVGUix3QkE0RlEsRUFlSTtFQ2ROO1FENkNjLFdBQVc7UUFDWCxXQUFVO1FBQ1YsbUJBQWtCO1FBQ2xCLGtCQUFXO1FBN0kvQixpQ0FrSm1CO2dCQWxKbkIseUJBa0ptQixFQUFBO0VDL0NmO01EbkdKLHlCQXNKUTtTQXRKUixzQkFzSlE7VUF0SlIscUJBc0pRO2NBdEpSLGlCQXNKUSxFQUFBO0VDakRKO01EbURRLFlBQVM7TUFDVCxhQUFXO01BQ1gsZUFBYztNQUNkLGNBQWE7TUFDYixhQUFhO01BNUp6QixtQkFzSlEsRUFBQTtFQzFDRjtRRG9EVSxhQUFPO1FBQ1AsT0FBTTtRQWpLdEIsWUFVSSxFQUFBO0VDc0dJO1VEcURZLGVBQVk7VUFDWixnQkFDSDtVQTdKYixhQWtLSSxFQUFBO0VDeERKO01EMERRLFdBQVE7TUFDUixZQUFTO01BQ1QsYUFBQTtNQ3hETixzQkFBc0IsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC93aW5kb3dzL3dpbmRvd3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjhjOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhlNGYzO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzlFQjJDRCwgI0M0Q0VFRCAzJSk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Yzg4YTU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0bl9zbWFsbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgJi5mb2N1c2Uge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0M5RENGMCAzNSUsICNBM0I4RDAgNTAlLCAjQUVDNEREIDEwMCUpO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNBMEQxRjYgMzUlLCAjMkU3N0E5IDUwJSwgIzM3QjNEQyAxMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZDODg5RCAzNSUsICMyMDNFNTkgNTAlLCAjMzZDMEJCIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MzcxODE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTZEQkRCO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG5fbGFyZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICYuZm9jdXNlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNDOURDRjAgMzUlLCAjQTNCOEQwIDUwJSwgI0FFQzRERCAxMDAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQTBEMUY2IDM1JSwgIzJFNzdBOSA1MCUsICMzN0IzREMgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2Qzg4OUQgMzUlLCAjMjAzRTU5IDUwJSwgIzM2QzBCQiAxMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0U2REJEQjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjODE4RDlDLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwIDFweCAjODE4RDlDIGluc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuX2Nsb3NlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAmLmZvY3VzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjFCOUI3IDM1JSwgI0FGNEUzOSA1MCUsICNDQTdDNjUgMTAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0YyQ0NDMiAzNSUsICNENzRFMjIgNTAlLCAjREM2QzNBIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQzE5Qzg1IDM1JSwgIzc4MjAwMiA1MCUsICNEQkIyNzMgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzYzNzE4MTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM2MzcxODE7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTZEQkRCO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNkRCREI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudW5zZWxlY3Qge1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzdjODY5NDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5kcmFnIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiOGM4ZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZDhlNGYzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOUVCMkNELCAjQzRDRUVEIDMlKTtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgOmhvc3QgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIDpob3N0IC5jb250YWluZXIgLmJ0biB7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Yzg4YTU7XG4gICAgICBtYXJnaW46IDAgMXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDNweCAwO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9zbWFsbCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAgICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX3NtYWxsLmZvY3VzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNDOURDRjAgMzUlLCAjQTNCOEQwIDUwJSwgI0FFQzRERCAxMDAlKTsgfVxuICAgICAgICA6aG9zdCAuY29udGFpbmVyIC5idG5fc21hbGwuZm9jdXNlOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQTBEMUY2IDM1JSwgIzJFNzdBOSA1MCUsICMzN0IzREMgMTAwJSk7IH1cbiAgICAgICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX3NtYWxsLmZvY3VzZTphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2Qzg4OUQgMzUlLCAjMjAzRTU5IDUwJSwgIzM2QzBCQiAxMDAlKTsgfVxuICAgICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX3NtYWxsOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDsgfVxuICAgICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX3NtYWxsOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzYzNzE4MTtcbiAgICAgICAgYmFja2dyb3VuZDogI0U2REJEQjtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cbiAgICA6aG9zdCAuY29udGFpbmVyIC5idG5fbGFyZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9sYXJnZS5mb2N1c2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQzlEQ0YwIDM1JSwgI0EzQjhEMCA1MCUsICNBRUM0REQgMTAwJSk7IH1cbiAgICAgICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX2xhcmdlLmZvY3VzZTpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0EwRDFGNiAzNSUsICMyRTc3QTkgNTAlLCAjMzdCM0RDIDEwMCUpOyB9XG4gICAgICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9sYXJnZS5mb2N1c2U6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkM4ODlEIDM1JSwgIzIwM0U1OSA1MCUsICMzNkMwQkIgMTAwJSk7IH1cbiAgICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9sYXJnZTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTZEQkRCO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjODE4RDlDLFxyIDAgMCAwIDFweCAjODE4RDlDIGluc2V0OyB9XG4gICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX2Nsb3NlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgICA6aG9zdCAuY29udGFpbmVyIC5idG5fY2xvc2UuZm9jdXNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0YxQjlCNyAzNSUsICNBRjRFMzkgNTAlLCAjQ0E3QzY1IDEwMCUpOyB9XG4gICAgICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9jbG9zZS5mb2N1c2U6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGMkNDQzIgMzUlLCAjRDc0RTIyIDUwJSwgI0RDNkMzQSAxMDAlKTsgfVxuICAgICAgICA6aG9zdCAuY29udGFpbmVyIC5idG5fY2xvc2UuZm9jdXNlOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0MxOUM4NSAzNSUsICM3ODIwMDIgNTAlLCAjREJCMjczIDEwMCUpOyB9XG4gICAgICA6aG9zdCAuY29udGFpbmVyIC5idG5fY2xvc2UgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzYzNzE4MTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cbiAgICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9jbG9zZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjNjM3MTgxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cbiAgICAgIDpob3N0IC5jb250YWluZXIgLmJ0bl9jbG9zZSBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTZEQkRCO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxuICAgICAgOmhvc3QgLmNvbnRhaW5lciAuYnRuX2Nsb3NlIGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFNkRCREI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxuICAgIDpob3N0IC5jb250YWluZXIudW5zZWxlY3Qge1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICA6aG9zdCAuY29udGFpbmVyIC50aXRsZSB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM3Yzg2OTQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgOmhvc3QgLmNvbnRhaW5lciAudGl0bGUgLmRyYWcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgICAgOmhvc3QgLmNvbnRhaW5lciAudGl0bGUgLmRyYWcgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEycHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTJweDtcbiAgICAgICAgICBtYXJnaW46IDAgMnB4OyB9XG4gICAgOmhvc3QgLmNvbnRhaW5lciAuY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/component/windows/windows.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/windows/windows.component.ts ***!
  \********************************************************/
/*! exports provided: WindowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsComponent", function() { return WindowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/type/drag-direction/drag-direction */ "./src/app/type/drag-direction/drag-direction.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var WindowsComponent = /** @class */ (function () {
    function WindowsComponent(elementRef, sanitizer) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.name = '';
        this.logo = '';
        this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Default;
        this.boundary = 15;
        this.lastX = 0;
        this.lastY = 0;
        this.myTop = 50;
        this.myLeft = 50;
        this.isResizing = false;
        this.isDragging = false;
        this.isFocuse = true;
    }
    Object.defineProperty(WindowsComponent.prototype, "minWidth", {
        set: function (value) {
            var num = (typeof value === 'string') ? parseInt(value, 10) : value;
            this._minWidth = num || 200;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsComponent.prototype, "minHeight", {
        set: function (value) {
            var num = (typeof value === 'string') ? parseInt(value, 10) : value;
            this._minHeight = num || 200;
        },
        enumerable: true,
        configurable: true
    });
    ;
    WindowsComponent.prototype.ngOnInit = function () {
        this.myWidth = this._minWidth;
        this.myHeight = this._minHeight;
    };
    Object.defineProperty(WindowsComponent.prototype, "style", {
        get: function () {
            var cursor = this.direction.cursor;
            var top = this.myTop ? this.myTop + 'px' : 'auto';
            var height = this.myHeight ? this.myHeight + 'px' : 'auto';
            var left = this.myLeft ? this.myLeft + 'px' : 'auto';
            var width = this.myWidth ? this.myWidth + 'px' : 'auto';
            return this.sanitizer.bypassSecurityTrustStyle("cursor: " + cursor + ";top: " + top + "; height: " + height + ";left: " + left + ";width: " + width);
        },
        enumerable: true,
        configurable: true
    });
    WindowsComponent.prototype.onmouseover = function (e) {
        var width = this.elementRef.nativeElement.offsetWidth;
        var height = this.elementRef.nativeElement.offsetHeight;
        var cursorX = Math.min(Math.max(e.offsetX, 0), width);
        var cursorY = Math.min(Math.max(e.offsetY, 0), height);
        if (this.isResizing) {
            return false;
        }
        if (cursorX < this.boundary) {
            if (cursorY < this.boundary) {
                this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].LeftTop;
            }
            else if (height - cursorY < this.boundary) {
                this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].LeftBottom;
            }
            else {
                this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Left;
            }
        }
        else if (width - cursorX < this.boundary) {
            if (cursorY < this.boundary) {
                this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].RightTop;
            }
            else if (height - cursorY < this.boundary) {
                this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].RightBottom;
            }
            else {
                this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Right;
            }
        }
        else {
            this.direction = (cursorY < this.boundary) ? src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Top : src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Bottom;
        }
    };
    WindowsComponent.prototype.resizeStart = function (e) {
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.isResizing = true;
    };
    WindowsComponent.prototype.resize = function (e) {
        var x = e.clientX - this.lastX;
        var y = e.clientY - this.lastY;
        if (this.isResizing) {
            this.resizeing(x, y);
        }
        if (this.isDragging) {
            this.dragging(x, y);
        }
        this.lastX = e.clientX;
        this.lastY = e.clientY;
    };
    WindowsComponent.prototype.resizeStop = function () {
        this.isResizing = false;
        this.isDragging = false;
    };
    WindowsComponent.prototype.preventDefault = function (e) {
        if (!this.isResizing) {
            this.direction = src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Default;
            e.stopPropagation();
        }
    };
    WindowsComponent.prototype.setX = function (left, width) {
        var maxRight = this.elementRef.nativeElement.closest('div.desktop').offsetWidth;
        var canSetLeft = this.myLeft + left > 0 && this.myLeft + left + this.myWidth < maxRight;
        var canSetWidth = this.myWidth + width > this._minWidth && this.myWidth + this.myLeft + width < maxRight;
        if (canSetLeft && canSetWidth) {
            this.myLeft += left;
            this.myWidth += width;
        }
    };
    WindowsComponent.prototype.setY = function (top, height) {
        var maxBottom = this.elementRef.nativeElement.closest('div.desktop').offsetHeight;
        var canSetTop = this.myTop + top > 0 && this.myTop + top + this.myHeight < maxBottom;
        var canSetHeight = this.myHeight + height > this._minHeight && this.myHeight + this.myTop + height < maxBottom;
        if (canSetTop && canSetHeight) {
            this.myTop += top;
            this.myHeight += height;
        }
    };
    WindowsComponent.prototype.startDrag = function (e) {
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.isDragging = true;
    };
    WindowsComponent.prototype.resizeing = function (x, y) {
        switch (this.direction) {
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].LeftTop:
                this.setY(y, -y);
                this.setX(x, -x);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].LeftBottom:
                this.setX(x, -x);
                this.setY(0, y);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Left:
                this.setX(x, -x);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].RightTop:
                this.setX(0, x);
                this.setY(y, -y);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].RightBottom:
                this.setX(0, x);
                this.setY(0, y);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Right:
                this.setX(0, x);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Top:
                this.setY(y, -y);
                break;
            case src_app_type_drag_direction_drag_direction__WEBPACK_IMPORTED_MODULE_2__["DragDirection"].Bottom:
                this.setY(0, y);
                break;
        }
    };
    WindowsComponent.prototype.dragging = function (x, y) {
        this.setX(x, 0);
        this.setY(y, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WindowsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WindowsComponent.prototype, "logo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], WindowsComponent.prototype, "minWidth", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], WindowsComponent.prototype, "minHeight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowsComponent.prototype, "style", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], WindowsComponent.prototype, "onmouseover", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], WindowsComponent.prototype, "resizeStart", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], WindowsComponent.prototype, "resize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], WindowsComponent.prototype, "resizeStop", null);
    WindowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-windows',
            template: __webpack_require__(/*! ./windows.component.html */ "./src/app/component/windows/windows.component.html"),
            styles: [__webpack_require__(/*! ./windows.component.scss */ "./src/app/component/windows/windows.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], WindowsComponent);
    return WindowsComponent;
}());



/***/ }),

/***/ "./src/app/service/application/application.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/application/application.service.ts ***!
  \************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ApplicationService = /** @class */ (function () {
    function ApplicationService() {
        this.applicationList = [
            {
                name: 'ie',
                img: 'assets/images/ie-icon.png',
                isOpen: false,
            },
            {
                name: 'player',
                img: 'assets/images/player-icon.png',
                isOpen: false,
            },
            {
                name: 'chrome',
                img: 'assets/images/chrome-icon.png',
                isOpen: false,
            },
            {
                name: 'line',
                img: 'assets/images/line-icon.png',
                isOpen: false,
            },
        ];
        this.applicationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.applicationList);
    }
    ApplicationService.prototype.getApplication = function () {
        return this.applicationSubject;
    };
    ApplicationService.prototype.clickApp = function (app) {
        var index = this.applicationList.findIndex(function (appIteem) { return appIteem.name === app.name; });
        this.applicationList[index].isOpen = !this.applicationList[index].isOpen;
        this.applicationSubject.next(this.applicationList);
    };
    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/type/drag-direction/drag-direction.ts":
/*!*******************************************************!*\
  !*** ./src/app/type/drag-direction/drag-direction.ts ***!
  \*******************************************************/
/*! exports provided: DragDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDirection", function() { return DragDirection; });
var DragDirection = /** @class */ (function () {
    function DragDirection(type, cursor) {
        this.type = type;
        this.cursor = cursor;
    }
    DragDirection.Default = new DragDirection(0, 'default');
    DragDirection.LeftTop = new DragDirection(1, 'nw-resize');
    DragDirection.LeftBottom = new DragDirection(2, 'ne-resize');
    DragDirection.Left = new DragDirection(3, 'w-resize');
    DragDirection.RightTop = new DragDirection(4, 'ne-resize');
    DragDirection.RightBottom = new DragDirection(5, 'nw-resize');
    DragDirection.Right = new DragDirection(6, 'w-resize');
    DragDirection.Top = new DragDirection(7, 's-resize');
    DragDirection.Bottom = new DragDirection(8, 's-resize');
    DragDirection.List = [
        DragDirection.Default,
        DragDirection.LeftTop,
        DragDirection.LeftBottom,
        DragDirection.Left,
        DragDirection.RightTop,
        DragDirection.RightBottom,
        DragDirection.Right,
        DragDirection.Top,
        DragDirection.Bottom,
    ];
    DragDirection.findByType = function (type) {
        return DragDirection.List.find(function (item) { return item.type === type; });
    };
    return DragDirection;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\fakew7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map