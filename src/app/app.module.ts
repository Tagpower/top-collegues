import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LesColleguesClassiqueComponent } from './les-collegues-classique/les-collegues-classique.component';
import { LikebuttonsComponent } from './likebuttons/likebuttons.component';
import { CollegueService } from './shared/services/collegue.service';
import { LesColleguesTableauComponent } from './les-collegues-tableau/les-collegues-tableau.component';
import { UnCollegueClassiqueComponent } from './un-collegue-classique/un-collegue-classique.component';

const appRoutes:Routes = [
  {path:"classique", component:LesColleguesClassiqueComponent},
  {path:"tableau", component:LesColleguesTableauComponent},
  // {path:"carrousel", component:UnCollegueCarrouselComponent},
  // {path:"detail/{pseudo}", component:UnCollegueDetailComponent},
  {path:"**", redirectTo:"classique"}
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueClassiqueComponent,
    LikebuttonsComponent,
    LesColleguesClassiqueComponent,
    LesColleguesTableauComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CollegueService
  ],
bootstrap: [AppComponent]
})

export class AppModule { }