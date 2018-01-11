import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollegueService } from '../shared/services/collegue.service';
import {Collegue} from '../shared/domain/collegue';

@Component({
  selector: 'app-likebuttons',
  templateUrl: './likebuttons.component.html',
  styleUrls: ['./likebuttons.component.css']
})
export class LikebuttonsComponent implements OnInit {

  @Input() collegue:Collegue;
  @Output() reaction:EventEmitter<string> = new EventEmitter();


  constructor(private cs:CollegueService) { }

  ngOnInit() {
  }


  jaime() {
   // this.reaction.emit('like');
   this.cs.aimerUnCollegue(this.collegue).then(((collegue) => {
    this.collegue['score'] = collegue['score'];
    }),  function(reject) {});
  }

  jaimepas() {
    //this.reaction.emit('dislike');
    this.cs.pasAimerUnCollegue(this.collegue).then(((collegue) => {
      this.collegue['score'] = collegue['score'];
      }),  function(reject) {});
  }

  jadore() {
    //this.reaction.emit('super-like');  
     this.cs.adorerUnCollegue(this.collegue).then(((collegue) => {
      this.collegue['score'] = collegue['score'];
      }),  function(reject) {});
  }

  jedeteste() {
    //this.reaction.emit('super-dislike');
    this.cs.detesterUnCollegue(this.collegue).then(((collegue) => {
      this.collegue['score'] = collegue['score'];
      }),  function(reject) {});
  }

}
