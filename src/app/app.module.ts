import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LikebuttonsComponent } from './likebuttons/likebuttons.component';
import { CollegueService } from './shared/services/collegue.service';
import { LesColleguesTableauComponent } from './les-collegues-tableau/les-collegues-tableau.component';
import { LesColleguesClassiqueComponent } from './les-collegues-classique/les-collegues-classique.component';
import { LesColleguesCarrouselComponent } from './les-collegues-carrousel/les-collegues-carrousel.component';
import { UnCollegueDetailComponent } from './un-collegue-detail/un-collegue-detail.component';
import { FilterComponent } from './filter/filter.component';
import { FilterByPseudoPipe } from './shared/pipe/filter-by-pseudo.pipe';
import { ScorePipe } from './shared/pipe/score.pipe';
import { EnLigneComponent } from './en-ligne/en-ligne.component';
import { EnLigneService } from './shared/services/en-ligne.service';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';

const appRoutes:Routes = [
  {path:"classique", component:LesColleguesClassiqueComponent},
  {path:"tableau", component:LesColleguesTableauComponent},
  {path:"carrousel", component:LesColleguesCarrouselComponent},
  {path:"detail/:pseudo", component:UnCollegueDetailComponent},
  {path:"**", redirectTo:"classique"}
];

@NgModule({
  declarations: [
    AppComponent,
    LikebuttonsComponent,
    LesColleguesClassiqueComponent,
    LesColleguesTableauComponent,
    LesColleguesCarrouselComponent,
    UnCollegueDetailComponent,
    FilterComponent,
    FilterByPseudoPipe,
    ScorePipe,
    EnLigneComponent,
    VotreDernierAvisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CollegueService,
    EnLigneService
  ],
bootstrap: [AppComponent]
})

export class AppModule { }