import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue
  state = 'normal';

  constructor() { }

  ngOnInit() {
  }

  reaction(event) {
    if (event === 'like') {
      this.collegue.score += 10;
    } else if (event === 'dislike') {
      this.collegue.score -= 5;
    } else if (event === 'super-like') {
      this.collegue.score += 25;
    } else if (event === 'super-dislike') {
      this.collegue.score -= 15;
    }
    this.state = event;
    setTimeout(() => {
      this.state = 'normal';
    }, 100);
}

}
