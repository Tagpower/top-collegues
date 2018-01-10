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
  state = 'normal';

  constructor(private cs:CollegueService) { }

  ngOnInit() {
  }

  reaction(event) {
    if (event === 'like') {
      //this.collegue.score += 10;
      this.cs.aimerUnCollegue(this.collegue).then(function(aaa) {
        console.log("aaa");
        console.log(aaa);
      },  function(bbb) {
        console.log("bbb")
        console.log(bbb);
      });
    } else if (event === 'dislike') {
      this.cs.detesterUnCollegue(this.collegue);
      //this.collegue.score -= 5;
    } else if (event === 'super-like') {
      //this.collegue.score += 25;
    } else if (event === 'super-dislike') {
      //this.collegue.score -= 15;
    }
    this.state = event;
    setTimeout(() => {
      this.state = 'normal';
    }, 100);
}

}
