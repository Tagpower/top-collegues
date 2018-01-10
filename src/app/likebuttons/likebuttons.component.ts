import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-likebuttons',
  templateUrl: './likebuttons.component.html',
  styleUrls: ['./likebuttons.component.css']
})
export class LikebuttonsComponent implements OnInit {

  @Output() reaction:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  jaime() {
    this.reaction.emit('like');
  }

  jaimepas() {
    this.reaction.emit('dislike');
  }

  jadore() {
    this.reaction.emit('super-like');
  }

  jedeteste() {
    this.reaction.emit('super-dislike');
  }

}
