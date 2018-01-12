import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject}from "rxjs";

@Injectable()
export class CollegueService {

  limiteSubject:BehaviorSubject<number> = new BehaviorSubject(100);
  filtreSubject:BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private http:HttpClient) { }

  listerCollegues():Promise<Collegue[]> {
  // récupérer la liste des collègues côté serveur
    const listeCollegues:Promise<Collegue[]> = this.http.get<Collegue[]>("http://localhost:8080/collegues").toPromise();
    return listeCollegues;
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    const promise:Promise<Collegue> = this.http.post<Collegue>("http://localhost:8080/collegues", JSON.stringify(newCollegue), httpOptions).toPromise();
    return promise;
  }

  getCollegueByPseudo(pseudo: String): Promise<Collegue> {
    return this.listerCollegues().then(collegues => {
      return collegues.find(col => col.pseudo === pseudo);
    });
  }

  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    const promise:Promise<Collegue> = this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.pseudo}` , {"action":"aimer"}, httpOptions).toPromise();
    return promise;
  }

  pasAimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    const promise:Promise<Collegue> = this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.pseudo}` , {"action":"pasAimer"}, httpOptions).toPromise();
    return promise;
  }

  adorerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    const promise:Promise<Collegue> = this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.pseudo}` , {"action":"adorer"}, httpOptions).toPromise();
    return promise;
  }

  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    const httpOptions = {headers:new HttpHeaders({"Content-Type":"application/json"})};
    const promise:Promise<Collegue> = this.http.patch<Collegue>(`http://localhost:8080/collegues/${unCollegue.pseudo}` , {"action":"detester"}, httpOptions).toPromise();
    return promise;  
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