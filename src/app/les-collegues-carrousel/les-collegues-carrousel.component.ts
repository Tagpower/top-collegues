import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-les-collegues-carrousel',
  templateUrl: './les-collegues-carrousel.component.html',
  styleUrls: ['./les-collegues-carrousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class LesColleguesCarrouselComponent implements OnInit {

  collegues:Collegue[];
  limite:number;
  filtre:string;

  constructor(private cs:CollegueService, config:NgbCarouselConfig) { 
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    console.log(config)
  }

  ngOnInit() {
    this.collegues = [];
    this.cs.listerCollegues().then(col => col.forEach(c => {this.collegues.push(new Collegue(c.pseudo, c.image, c.score))}),
                                   function(message) {throw message;}
                                  );
                                  this.cs.getLimiteObservable().subscribe(valeurLimite => (this.limite = valeurLimite));
                                  this.cs.getFiltreObservable().subscribe(valeurFiltre => (this.filtre = valeurFiltre));
  }

}
