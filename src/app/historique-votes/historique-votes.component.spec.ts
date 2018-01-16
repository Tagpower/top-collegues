import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueVotesComponent } from './historique-votes.component';

describe('HistoriqueVotesComponent', () => {
  let component: HistoriqueVotesComponent;
  let fixture: ComponentFixture<HistoriqueVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
