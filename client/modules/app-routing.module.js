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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var root_component_1 = require('../components/layout/root.component');
var header_component_1 = require('../components/layout/header.component');
var index_1 = require('../_services/index');
var articles_module_1 = require("./articles/articles.module");
var comment_box_module_1 = require("./popup/comment-box.module");
var routes = [
    {
        path: 'article',
        component: root_component_1.RootComponent,
        children: articles_module_1.ArticlesModule.ROUTES.slice()
    },
    { path: '**', redirectTo: '/articles' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [root_component_1.RootComponent, header_component_1.HeaderComponent],
            imports: [http_1.HttpModule, router_1.RouterModule.forRoot(routes), articles_module_1.ArticlesModule, comment_box_module_1.CommentBoxModule],
            exports: [router_1.RouterModule],
            providers: [index_1.PagerService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map