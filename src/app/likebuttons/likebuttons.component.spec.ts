import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikebuttonsComponent } from './likebuttons.component';

describe('LikebuttonsComponent', () => {
  let component: LikebuttonsComponent;
  let fixture: ComponentFixture<LikebuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikebuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
