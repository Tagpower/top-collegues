import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/services/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  message:string = "Aucun avis";
  type:string = 'secondary';

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.cs.vote.subscribe(vote => {
      switch (vote.avis) {
        case "aimer":
          this.message = `Vous aimez ${vote.collegue.pseudo} : +10 points`;
          this.type = 'primary';
          break;
        case "pasAimer":
          this.message = `Vous n'aimez pas ${vote.collegue.pseudo} : -5 points`;
          this.type = 'secondary';
          break;
        case "adorer":
          this.message = `Vous A-DO-REZ ${vote.collegue.pseudo} : +25 points <3`;
          this.type = 'success';
          break;
        case "detester":
          this.message = `Vous DÉ-TES-TEZ ${vote.collegue.pseudo} : -15 points !`;
          this.type = 'danger';
          break;
      }
    });
}

}
