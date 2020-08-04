import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPublicidadComponent } from './lista-publicidad.component';

describe('ListaPublicidadComponent', () => {
  let component: ListaPublicidadComponent;
  let fixture: ComponentFixture<ListaPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
