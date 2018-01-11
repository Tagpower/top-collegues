import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {CollegueService} from '../shared/services/collegue.service';
import { HttpClient } from '@angular/common/http/src/client';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css'],

})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue
 // score:HTMLElement;
  state = 'normal';

  constructor(private cs:CollegueService) { }

  ngOnInit() {
  }

  reaction(event) {

    let updateScore = ((collegue) => {
      this.collegue['score'] = collegue['score'];
    });
    
    if (event === 'like') {
      this.cs.aimerUnCollegue(this.collegue).then(updateScore,  function(reject) {

      });
    } else if (event === 'dislike') {
      this.cs.pasAimerUnCollegue(this.collegue).then(updateScore,  function(reject) {

      });
      //this.collegue.score -= 5;
    } else if (event === 'super-like') {
      this.cs.adorerUnCollegue(this.collegue).then(updateScore,  function(reject) {

      });
    } else if (event === 'super-dislike') {
      this.cs.detesterUnCollegue(this.collegue).then(updateScore,  function(reject) {

      });
    }
    this.state = event;
    setTimeout(() => {
      this.state = 'normal';
    }, 100);
  }



}
