import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesColleguesClassiqueComponent } from './les-collegues-classique.component';

describe('LesColleguesClassiqueComponent', () => {
  let component: LesColleguesClassiqueComponent;
  let fixture: ComponentFixture<LesColleguesClassiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesColleguesClassiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesColleguesClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
