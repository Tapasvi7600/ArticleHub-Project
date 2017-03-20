"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var popup_component_1 = require("./popup.component");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var forms_1 = require("@angular/forms");
var CommentBoxModule = (function () {
    function CommentBoxModule() {
    }
    CommentBoxModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, bootstrap_1.BootstrapModalModule, forms_1.FormsModule],
            declarations: [popup_component_1.CommentPopup],
            exports: [popup_component_1.CommentPopup],
            entryComponents: [popup_component_1.CommentPopup]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentBoxModule);
    return CommentBoxModule;
}());
exports.CommentBoxModule = CommentBoxModule;
//# sourceMappingURL=comment-box.module.js.map