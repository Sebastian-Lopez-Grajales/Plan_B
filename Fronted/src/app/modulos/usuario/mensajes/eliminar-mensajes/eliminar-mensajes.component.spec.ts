import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMensajesComponent } from './eliminar-mensajes.component';

describe('EliminarMensajesComponent', () => {
  let component: EliminarMensajesComponent;
  let fixture: ComponentFixture<EliminarMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
