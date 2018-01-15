import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-les-collegues-carrousel',
  templateUrl: './les-collegues-carrousel.component.html',
  styleUrls: ['./les-collegues-carrousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class LesColleguesCarrouselComponent implements OnInit {

  collegues:Observable<Collegue[]>;
  limite:number;
  filtre:string;

  constructor(private cs:CollegueService, config:NgbCarouselConfig) { 
    config.interval = 0;
    config.wrap = true;
    config.keyboard = true;
    console.log(config)
  }

  ngOnInit() {
    this.collegues = this.cs.listerCollegues();
    this.cs.getLimiteObservable().subscribe(valeurLimite => (this.limite = valeurLimite));
    this.cs.getFiltreObservable().subscribe(valeurFiltre => (this.filtre = valeurFiltre));
  }

}
