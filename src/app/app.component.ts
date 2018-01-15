import { Component } from '@angular/core';
import {Collegue} from "./shared/domain/collegue";
import {CollegueService} from './shared/services/collegue.service';
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

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.collegues = [];
    this.cs.listerCollegues().subscribe(col => col.forEach(c => {console.log(c); this.collegues.push(new Collegue(c.pseudo, c.image, c.score));}),
                                   function(message) {throw message;}
                                  );
  }

  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
    this.afficherAlert = true;
    
    if (!pseudo.value) {
      this.msg= `Le collègue doit avoir un pseudo.`;
    } else {
      let newCollegue = new Collegue(pseudo.value, imageUrl.value);
      // this.cs.sauvegarder(newCollegue).subscribe((list) => {
      //   if (!list) {
      //     this.msg= `Il existe déjà un collègue dont le pseudo est ${pseudo.value}.`;
      //   } else {
      //     this.collegues.push(newCollegue);
      //     this.msg= `Le collègue ${pseudo.value} a été ajouté avec succès.`;
      //   }
      //   pseudo.value = '';
      //   imageUrl.value = '';  
      // }, function(message) {
      //   throw message;
      // });
      if (this.collegues.find(col => col.pseudo == pseudo.value)) {
        //console.log(this.cs.getCollegueByPseudo(pseudo.value).subscribe(a => a.pseudo));
        this.msg= `Il existe déjà un collègue dont le pseudo est ${pseudo.value}.`;
      } else {
        this.cs.sauvegarder(newCollegue);
        //this.collegues.push(newCollegue);
        this.msg= `Le collègue ${pseudo.value} a été ajouté avec succès.`;
        pseudo.value = '';
        imageUrl.value = '';  
      }
    }

    setTimeout(() => {
      this.closeAlert();
      return false;
    }, 2000);
  }

  closeAlert() {
    this.msg = '';
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
