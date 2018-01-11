import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';

@Component({
  selector: 'app-les-collegues-classique',
  templateUrl: './les-collegues-classique.component.html',
  styleUrls: ['./les-collegues-classique.component.css']
})
export class LesColleguesClassiqueComponent implements OnInit {

  collegues:Collegue[]
  //cs:CollegueService;

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.collegues = [];
    this.cs.listerCollegues().then(col => col.forEach(c => {this.collegues.push(new Collegue(c.pseudo, c.image, c.score)); console.log(c)}),
                                   function(message) {throw message;}
                                  );
  }

}
