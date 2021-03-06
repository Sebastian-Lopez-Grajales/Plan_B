import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMensajesComponent } from './listar-mensajes.component';

describe('ListarMensajesComponent', () => {
  let component: ListarMensajesComponent;
  let fixture: ComponentFixture<ListarMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
