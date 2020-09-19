import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUrbanoComponent } from './plan-urbano.component';

describe('PlanUrbanoComponent', () => {
  let component: PlanUrbanoComponent;
  let fixture: ComponentFixture<PlanUrbanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanUrbanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanUrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
