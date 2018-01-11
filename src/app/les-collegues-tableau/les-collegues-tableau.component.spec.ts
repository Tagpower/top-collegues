import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesColleguesTableauComponent } from './les-collegues-tableau.component';

describe('LesColleguesTableauComponent', () => {
  let component: LesColleguesTableauComponent;
  let fixture: ComponentFixture<LesColleguesTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesColleguesTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesColleguesTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
