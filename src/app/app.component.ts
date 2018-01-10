import { Component } from '@angular/core';
import {Collegue} from "./shared/domain/collegue";
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';

const LOCAL_PATH_PREFIX = "../../assets/img/"

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
    let thien = new Collegue("Thien-ban", LOCAL_PATH_PREFIX+"musk.jpg", 100);
    this.collegues.push(thien);
    let clement = new Collegue("Clément", LOCAL_PATH_PREFIX+"clement.jpg", 100);
    this.collegues.push(clement);
    let melodie = new Collegue("Mélodie", LOCAL_PATH_PREFIX+"chloe2.jpg", 100);
    this.collegues.push(melodie);
    let sandra = new Collegue("Sandra", LOCAL_PATH_PREFIX+"cat.jpg", 100);
    this.collegues.push(sandra);
    let assia = new Collegue("Assia", LOCAL_PATH_PREFIX+"max.jpg", 100);
    this.collegues.push(assia);
    let alex = new Collegue("Alexandre", LOCAL_PATH_PREFIX+"olga.jpg", 100);
    this.collegues.push(alex);
    let momo = new Collegue("Mohammed", LOCAL_PATH_PREFIX+"beer.png", 100);
    this.collegues.push(momo);
    let yves = new Collegue("Yves", LOCAL_PATH_PREFIX+"yves.jpeg", 100);
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

  sortCollegues() {
    this.collegues.sort(function(a, b) {
      if (a.score < b.score) {
        return -1;
      } else if (a.score > b.score){
        return 1;
      } else {
        return 0;
      }
    })
  }

}
