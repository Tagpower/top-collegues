import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-les-collegues-classique',
  templateUrl: './les-collegues-classique.component.html',
  styleUrls: ['./les-collegues-classique.component.css']
})
export class LesColleguesClassiqueComponent implements OnInit {

  collegues:Observable<Collegue[]>
  limite:number;
  filtre:string;

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.collegues = this.cs.listerCollegues();
    this.cs.getLimiteObservable().subscribe(valeurLimite => (this.limite = valeurLimite));
    this.cs.getFiltreObservable().subscribe(valeurFiltre => (this.filtre = valeurFiltre));
  }
  

}
