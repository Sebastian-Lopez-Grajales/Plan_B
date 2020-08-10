import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginusuarioComponent } from './login_usuario.component';

describe('LoginusuarioComponent', () => {
  let component: LoginusuarioComponent;
  let fixture: ComponentFixture<LoginusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
