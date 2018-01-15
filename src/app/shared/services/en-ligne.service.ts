import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class EnLigneService {

  private isOnline = new BehaviorSubject<boolean>(navigator.onLine)
  public isOnlineObs = this.isOnline.asObservable();

  constructor() { 
    Observable.interval(5000).map(() => navigator.onLine)
      .subscribe(res => this.isOnline.next(res));
  }

}
