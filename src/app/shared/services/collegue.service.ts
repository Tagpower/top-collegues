import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CollegueService {
  
  colleguesSubject:BehaviorSubject<Collegue[]> = new BehaviorSubject([]);


  limiteSubject:BehaviorSubject<number> = new BehaviorSubject(100);
  filtreSubject:BehaviorSubject<string> = new BehaviorSubject("");
  avisSubject: BehaviorSubject<string> = new BehaviorSubject("Aucun avis");
  public avis = this.avisSubject.asObservable();

  constructor(private http:HttpClient) { 
    this.refresh()
  }

  // listerCollegues():Promise<Collegue[]> {
  // // récupérer la liste des collègues côté serveur
  //   const listeCollegues:Promise<Collegue[]> = this.http.get<Collegue[]>("http://localhost:8080/collegues").toPromise();
  //   return listeCollegues;
  // }

  // listerCollegues():Observable<Collegue[]> {
  //   return this.http.get<Collegue[]>("http://localhost:8080/collegues").do(col => this.colleguesSubject.next(col)); 
  // }

  listerCollegues():Observable<Collegue[]> {
    return this.colleguesSubject.asObservable();
  }

  refresh() {
    this.http.get<Collegue[]>("http://localhost:8080/collegues").subscribe(col => this.colleguesSubject.next(col));
  }

  // sauvegarder(newCollegue:Collegue):Promise<Collegue> {
  //   const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
  //   const promise:Promise<Collegue> = this.http.post<Collegue>("http://localhost:8080/collegues", JSON.stringify(newCollegue), httpOptions).toPromise();
  //   return promise;
  // }

  sauvegarder(newCollegue:Collegue):void {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    this.http.post<Collegue[]>("http://localhost:8080/collegues", JSON.stringify(newCollegue), httpOptions).subscribe(
      col => this.colleguesSubject.next(col)
    );
    //return newCollegue;
  }

  getCollegueByPseudo(pseudo: String): Observable<Collegue> {
    return this.listerCollegues().map(collegues => {
      return collegues.find(col => col.pseudo === pseudo);
    });
  }

  aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {

    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    return Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo , {"action":"aimer"}, httpOptions))
    .do(col => this.avisSubject.next(`Vous aimez ${col.pseudo} : +10 points`));
  }

  pasAimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    return Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo , {"action":"pasAimer"}, httpOptions))
    .do(col => this.avisSubject.next(`Vous n'aimez pas ${col.pseudo} : -5 points`));
  }

  adorerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    return Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo , {"action":"adorer"}, httpOptions))
    .do(col => this.avisSubject.next(`Vous A-DO-REZ ${col.pseudo} : +25 points <3`)); //❤
  }

  detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    return Observable.from(this.http.patch<Collegue>('http://localhost:8080/collegues/' + unCollegue.pseudo , {"action":"detester"}, httpOptions))
    .do(col => this.avisSubject.next(`Vous DÉ-TES-TEZ ${col.pseudo} : -15 points !`));;
  }

  //Filtres
  getLimiteObservable() {
    return this.limiteSubject.asObservable();
  }

  setLimite(value) {
    this.limiteSubject.next(value);
  }

  getFiltreObservable() {
    return this.filtreSubject.asObservable();
  }

  setFiltre(value) {
    this.filtreSubject.next(value);
  }
  

}