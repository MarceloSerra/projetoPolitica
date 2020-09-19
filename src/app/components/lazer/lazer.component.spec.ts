import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazerComponent } from './lazer.component';

describe('LazerComponent', () => {
  let component: LazerComponent;
  let fixture: ComponentFixture<LazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
