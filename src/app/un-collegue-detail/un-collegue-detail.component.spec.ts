import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueDetailComponent } from './un-collegue-detail.component';

describe('UnCollegueDetailComponent', () => {
  let component: UnCollegueDetailComponent;
  let fixture: ComponentFixture<UnCollegueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
