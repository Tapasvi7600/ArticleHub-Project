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
var forms_1 = require("@angular/forms");
var common_1 = require('@angular/common');
var business_component_1 = require("./business/business.component");
var politics_component_1 = require("./politics/politics.component");
var sports_component_1 = require("./sports/sports.component");
var technology_component_1 = require("./technology/technology.component");
var comment_box_module_1 = require("../popup/comment-box.module");
var article_service_1 = require("./shared/article.service");
var routes = [
    {
        path: 'business', component: business_component_1.BusinessArticleComponent,
    },
    {
        path: 'politics', component: politics_component_1.PoliticsArticleComponent,
    },
    {
        path: 'sports', component: sports_component_1.SportsArticleComponent,
    },
    {
        path: 'technology', component: technology_component_1.TechnologyArticleComponent,
    },
    {
        path: '**', component: business_component_1.BusinessArticleComponent,
    },
];
var ArticlesModule = (function () {
    function ArticlesModule() {
    }
    ArticlesModule.ROUTES = routes;
    ArticlesModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, comment_box_module_1.CommentBoxModule],
            declarations: [business_component_1.BusinessArticleComponent, politics_component_1.PoliticsArticleComponent, business_component_1.BusinessArticleComponent, sports_component_1.SportsArticleComponent, technology_component_1.TechnologyArticleComponent],
            exports: [],
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesModule);
    return ArticlesModule;
}());
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map