import { Component, OnInit } from '@angular/core';
import { VoteService } from '../shared/services/vote.service';
import { Vote } from '../shared/domain/vote';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  votes:Observable<Vote[]>

  constructor(private vs:VoteService) { }

  ngOnInit() {
    this.votes = this.vs.votes;
  }

}
