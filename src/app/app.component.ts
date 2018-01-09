import { Component } from '@angular/core';
import {Collegue} from "./shared/domain/collegue";
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  collegues:Collegue[];
  afficherAlert:boolean = false;
  msg:string = "";

  ngOnInit() {
    this.collegues = [];
    let thien = new Collegue("Thien-ban", "person.png", 100);
    this.collegues.push(thien);
    let clement = new Collegue("Clément", "clement.jpg", 100);
    this.collegues.push(clement);
    let melodie = new Collegue("Mélodie", "person.png", 100);
    this.collegues.push(melodie);
    let sandra = new Collegue("Sandra", "person.png", 100);
    this.collegues.push(sandra);
    let assia = new Collegue("Assia", "person.png", 100);
    this.collegues.push(assia);
    let alex = new Collegue("Alexandre", "person.png", 100);
    this.collegues.push(alex);
    let momo = new Collegue("Mohammed", "person.png", 100);
    this.collegues.push(momo);
    let yves = new Collegue("Yves", "person.png", 100);
    this.collegues.push(yves);

  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
    this.afficherAlert = true;

    if (!pseudo.value) {
      this.msg= `Le collègue doit avoir un pseudo.`;
    } else {
      this.collegues.push(new Collegue(pseudo.value, imageUrl.value));
      this.msg= `Le collègue ${pseudo.value} a été ajouté avec succès.`;
      (<HTMLInputElement>document.getElementById("pseudo")).value = '';
      (<HTMLInputElement>document.getElementById("image")).value = '';
    }

    setTimeout(() => {
      this.closeAlert();
    }, 2000);
    return false;
  }

  closeAlert() {
    this.afficherAlert = false;
  }

}
