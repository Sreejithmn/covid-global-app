import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaSummaryComponent } from './india-summary.component';

describe('IndiaSummaryComponent', () => {
  let component: IndiaSummaryComponent;
  let fixture: ComponentFixture<IndiaSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
