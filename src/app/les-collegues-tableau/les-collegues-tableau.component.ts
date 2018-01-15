import { Component, OnInit } from '@angular/core';
import { Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-les-collegues-tableau',
  templateUrl: './les-collegues-tableau.component.html',
  styleUrls: ['./les-collegues-tableau.component.css']
})
export class LesColleguesTableauComponent implements OnInit {

  collegues:Observable<Collegue[]>
  limite:number;
  filtre:string

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.collegues = this.cs.listerCollegues();
    this.cs.getLimiteObservable().subscribe(valeurLimite => (this.limite = valeurLimite));
    this.cs.getFiltreObservable().subscribe(valeurFiltre => (this.filtre = valeurFiltre));
                              
  }



}
