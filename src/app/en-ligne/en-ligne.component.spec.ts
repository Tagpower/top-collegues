import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLigneComponent } from './en-ligne.component';

describe('EnLigneComponent', () => {
  let component: EnLigneComponent;
  let fixture: ComponentFixture<EnLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
