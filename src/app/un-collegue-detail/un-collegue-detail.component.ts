import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/services/collegue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-collegue-detail',
  templateUrl: './un-collegue-detail.component.html',
  styleUrls: ['./un-collegue-detail.component.css']
})
export class UnCollegueDetailComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor(private cs:CollegueService, private route:ActivatedRoute) { }

  ngOnInit() {
    if (!this.collegue) {
      this.cs
        .getCollegueByPseudo(this.route.snapshot.params['pseudo'])
        .subscribe(collegue => {
          this.collegue = collegue;
        });
    }
}

}
