import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesColleguesCarrouselComponent } from './les-collegues-carrousel.component';

describe('LesColleguesCarrouselComponent', () => {
  let component: LesColleguesCarrouselComponent;
  let fixture: ComponentFixture<LesColleguesCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesColleguesCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesColleguesCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
