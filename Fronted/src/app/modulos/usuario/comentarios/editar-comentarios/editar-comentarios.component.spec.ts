import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComentariosComponent } from './editar-comentarios.component';

describe('EditarComentariosComponent', () => {
  let component: EditarComentariosComponent;
  let fixture: ComponentFixture<EditarComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
