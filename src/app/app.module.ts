import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 1

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { LikebuttonsComponent } from './likebuttons/likebuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    LikebuttonsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }