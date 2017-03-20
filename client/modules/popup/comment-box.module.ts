import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommentPopup} from "./popup.component";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ BrowserModule,BootstrapModalModule,FormsModule],
    declarations: [ CommentPopup ],
    exports:      [CommentPopup],
    entryComponents:[CommentPopup]
})

export class CommentBoxModule { }