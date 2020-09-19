import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacaoComponent } from './habitacao.component';

describe('HabitacaoComponent', () => {
  let component: HabitacaoComponent;
  let fixture: ComponentFixture<HabitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
