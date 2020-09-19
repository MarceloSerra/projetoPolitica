import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilidadeAcessibilidadeComponent } from './mobilidade-acessibilidade.component';

describe('MobilidadeAcessibilidadeComponent', () => {
  let component: MobilidadeAcessibilidadeComponent;
  let fixture: ComponentFixture<MobilidadeAcessibilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilidadeAcessibilidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilidadeAcessibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
