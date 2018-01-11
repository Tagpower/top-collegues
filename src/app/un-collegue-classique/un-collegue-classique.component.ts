import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {CollegueService} from '../shared/services/collegue.service';
import { HttpClient } from '@angular/common/http/src/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-collegue-classique',
  templateUrl: './un-collegue-classique.component.html',
  styleUrls: ['./un-collegue-classique.component.css']

})

export class UnCollegueClassiqueComponent implements OnInit {

  @Input() collegue:Collegue

  constructor(private cs:CollegueService, public route:ActivatedRoute) { }

  ngOnInit() {
  }



}
