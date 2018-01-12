import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegueService } from '../shared/services/collegue.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  i:number;
  @Output() change:EventEmitter<string> = new EventEmitter<string>();

  constructor(private cs:CollegueService, private router:Router) {}

  ngOnInit() {

  }

}
