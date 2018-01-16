import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollegueService } from '../shared/services/collegue.service';
import {Collegue} from '../shared/domain/collegue';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-likebuttons',
  templateUrl: './likebuttons.component.html',
  styleUrls: ['./likebuttons.component.css']
})
export class LikebuttonsComponent implements OnInit {

  @Input() collegue:Collegue;
  @Output() reaction:EventEmitter<string> = new EventEmitter();
  closeResult:string;

  constructor(private cs:CollegueService, private modalService: NgbModal) { }

  ngOnInit() {
  }


  jaime() {
   // this.reaction.emit('like');
   this.cs.aimerUnCollegue(this.collegue).subscribe(((collegue) => {
    this.collegue['score'] = collegue['score'];
    }));
  }

  jaimepas() {
    //this.reaction.emit('dislike');
    this.cs.pasAimerUnCollegue(this.collegue).subscribe(((collegue) => {
      this.collegue['score'] = collegue['score'];
      }));
  }

  jadore() {
    //this.reaction.emit('super-like');  
     this.cs.adorerUnCollegue(this.collegue).subscribe(((collegue) => {
      this.collegue['score'] = collegue['score'];
      }));
  }

  jedeteste() {
    //this.reaction.emit('super-dislike');
    this.cs.detesterUnCollegue(this.collegue).subscribe(((collegue) => {
      this.collegue['score'] = collegue['score'];
      }));
  }

  openModal(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('bbb')
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  laisserCommentaire(commentaire) {
    
    console.log(commentaire, this.collegue);
  }

}
