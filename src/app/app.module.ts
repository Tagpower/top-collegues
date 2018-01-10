import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { LikebuttonsComponent } from './likebuttons/likebuttons.component';
import { CollegueService } from './shared/services/collegue.service';

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    LikebuttonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    CollegueService
  ],
bootstrap: [AppComponent]
})

export class AppModule { }