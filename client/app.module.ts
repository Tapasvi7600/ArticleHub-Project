import {NgModule, Component} from "@angular/core";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './modules/app-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http} from "@angular/http";
import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})

/**
 *@description Main component
 */
export class AppComponent {
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpModule,
        BrowserModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    exports: [],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
    }, {
        provide: LocationStrategy, useClass: HashLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}