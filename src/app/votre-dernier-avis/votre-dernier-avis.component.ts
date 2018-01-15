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
    this.cs.avis.subscribe(avis => {
      //console.log(avis);
      this.message = avis;
      if (avis.includes("aimez pas")) {
        this.type = 'secondary';
      } else if(avis.includes("aimez")) {
        this.type = 'primary';
      } else if (avis.includes("A-DO-REZ")) {
        this.type = 'success';
      } else if (avis.includes("DÉ-TES-TEZ"){
        this.type = 'danger';
      }
    });
}

}
