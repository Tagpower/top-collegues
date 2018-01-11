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

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.collegues = [];
    this.cs.listerCollegues().then(col => col.forEach(c => {this.collegues.push(new Collegue(c.pseudo, c.image, c.score)); console.log(c)}),
                                   function(message) {throw message;}
                                  );
  }



}
