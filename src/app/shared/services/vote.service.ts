import { Injectable } from '@angular/core';
import {Vote} from '../domain/vote';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class VoteService {
  
  votesSubject: BehaviorSubject<Vote[]> = new BehaviorSubject([]);
  votes = this.votesSubject.asObservable();
  //idVote: number = 0;

  constructor(private http: HttpClient) {
    this.updateHistorique();
  }

  updateHistorique() {
    Observable.interval(5000)
      .subscribe(() => this.http.get<Vote[]>('http://localhost:8080/votes?since='/* + Math.max(...this.votesSubject.getValue().map(v => v.id)) */)
        .subscribe(votes => { this.votesSubject.next(votes);})
      )

  }

}
