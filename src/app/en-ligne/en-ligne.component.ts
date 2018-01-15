import { Component, OnInit } from '@angular/core';
import { EnLigneService } from '../shared/services/en-ligne.service';

@Component({
  selector: 'app-en-ligne',
  templateUrl: './en-ligne.component.html',
  styleUrls: ['./en-ligne.component.css']
})
export class EnLigneComponent implements OnInit {

  online:boolean = true;
  statut:string;

  constructor(private service:EnLigneService) { }

  ngOnInit() {
    this.service.isOnlineObs.subscribe(online => {
      this.online = online;
      this.statut = online ? 'En ligne' : 'Hors ligne !';
    });

  }

}
