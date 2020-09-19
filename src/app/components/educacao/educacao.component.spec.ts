import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoComponent } from './educacao.component';

describe('EducacaoComponent', () => {
  let component: EducacaoComponent;
  let fixture: ComponentFixture<EducacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
