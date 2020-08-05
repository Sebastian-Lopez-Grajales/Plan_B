import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAdminComponent } from './eliminar-admin.component';

describe('EliminarAdminComponent', () => {
  let component: EliminarAdminComponent;
  let fixture: ComponentFixture<EliminarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
