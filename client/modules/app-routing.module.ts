import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {RootComponent} from '../components/layout/root.component';
import {HeaderComponent} from '../components/layout/header.component';
import {PagerService} from '../_services/index';
import {ArticlesModule} from "./articles/articles.module";
import {CommentBoxModule} from "./popup/comment-box.module";


var routes = [
    {
        path: 'article',
        component: RootComponent,
        children: [...ArticlesModule.ROUTES]
    },

    {path: '**', redirectTo: '/articles'},


];
@NgModule({
    declarations: [RootComponent, HeaderComponent],
    imports: [HttpModule, RouterModule.forRoot(routes),ArticlesModule,CommentBoxModule],
    exports: [RouterModule],
    providers: [PagerService]
})
export class AppRoutingModule {
}