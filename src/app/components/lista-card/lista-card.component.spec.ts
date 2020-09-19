import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCardComponent } from './lista-card.component';

describe('ListaCardComponent', () => {
  let component: ListaCardComponent;
  let fixture: ComponentFixture<ListaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
