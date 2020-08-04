import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDenunciasComponent } from './crear-denuncias.component';

describe('CrearDenunciasComponent', () => {
  let component: CrearDenunciasComponent;
  let fixture: ComponentFixture<CrearDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
