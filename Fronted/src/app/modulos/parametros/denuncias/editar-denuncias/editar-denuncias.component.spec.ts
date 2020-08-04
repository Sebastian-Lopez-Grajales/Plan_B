import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDenunciasComponent } from './editar-denuncias.component';

describe('EditarDenunciasComponent', () => {
  let component: EditarDenunciasComponent;
  let fixture: ComponentFixture<EditarDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
