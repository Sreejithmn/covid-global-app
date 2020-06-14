import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaTableComponent } from './india-table.component';

describe('IndiaTableComponent', () => {
  let component: IndiaTableComponent;
  let fixture: ComponentFixture<IndiaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
