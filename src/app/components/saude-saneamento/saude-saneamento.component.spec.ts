import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeSaneamentoComponent } from './saude-saneamento.component';

describe('SaudeSaneamentoComponent', () => {
  let component: SaudeSaneamentoComponent;
  let fixture: ComponentFixture<SaudeSaneamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeSaneamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudeSaneamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
