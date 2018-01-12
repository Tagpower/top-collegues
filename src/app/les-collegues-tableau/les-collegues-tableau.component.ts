import { Component, OnInit } from '@angular/core';
import { Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';

@Component({
  selector: 'app-les-collegues-tableau',
  templateUrl: './les-collegues-tableau.component.html',
  styleUrls: ['./les-collegues-tableau.component.css']
})
export class LesColleguesTableauComponent implements OnInit {

  collegues:Collegue[]
  limite:number;
  filtre:string

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.collegues = [];
    this.cs.listerCollegues().then(col => col.forEach(c => {this.collegues.push(new Collegue(c.pseudo, c.image, c.score))}),
                                   function(message) {throw message;}
                                  );
    this.cs.getLimiteObservable().subscribe(valeurLimite => (this.limite = valeurLimite));
    this.cs.getFiltreObservable().subscribe(valeurFiltre => (this.filtre = valeurFiltre));
                              
  }



}
