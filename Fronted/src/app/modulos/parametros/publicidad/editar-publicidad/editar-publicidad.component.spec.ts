import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPublicidadComponent } from './editar-publicidad.component';

describe('EditarPublicidadComponent', () => {
  let component: EditarPublicidadComponent;
  let fixture: ComponentFixture<EditarPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
