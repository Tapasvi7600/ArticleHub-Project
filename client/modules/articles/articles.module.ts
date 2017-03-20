import {NgModule}      from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {BusinessArticleComponent} from "./business/business.component";
import {PoliticsArticleComponent} from "./politics/politics.component";
import {SportsArticleComponent} from "./sports/sports.component";
import {TechnologyArticleComponent} from "./technology/technology.component";
import {CommentBoxModule} from "../popup/comment-box.module";
import {ArticleService} from "./shared/article.service";

const routes = [
    {
        path: 'business', component: BusinessArticleComponent,
    },
    {
        path: 'politics', component: PoliticsArticleComponent,
    },
    {
        path: 'sports', component: SportsArticleComponent,
    },
    {
        path: 'technology', component: TechnologyArticleComponent,
    },
    {
        path: '**', component: BusinessArticleComponent,
    },

];

@NgModule({
    imports: [FormsModule, CommonModule,CommentBoxModule],
    declarations: [BusinessArticleComponent,PoliticsArticleComponent,BusinessArticleComponent,SportsArticleComponent,TechnologyArticleComponent],
    exports: [],
    providers:[ArticleService]
})

export class ArticlesModule {
    static ROUTES: any = routes;
}

