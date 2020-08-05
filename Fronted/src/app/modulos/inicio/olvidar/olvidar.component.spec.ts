import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarComponent } from './olvidar.component';

describe('OlvidarComponent', () => {
  let component: OlvidarComponent;
  let fixture: ComponentFixture<OlvidarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
