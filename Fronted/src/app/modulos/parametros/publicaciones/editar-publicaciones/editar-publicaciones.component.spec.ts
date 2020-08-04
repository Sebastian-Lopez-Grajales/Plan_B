import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPublicacionesComponent } from './editar-publicaciones.component';

describe('EditarPublicacionesComponent', () => {
  let component: EditarPublicacionesComponent;
  let fixture: ComponentFixture<EditarPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
