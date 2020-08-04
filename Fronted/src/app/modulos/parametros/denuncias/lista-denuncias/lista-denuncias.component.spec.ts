import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDenunciasComponent } from './lista-denuncias.component';

describe('ListaDenunciasComponent', () => {
  let component: ListaDenunciasComponent;
  let fixture: ComponentFixture<ListaDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
