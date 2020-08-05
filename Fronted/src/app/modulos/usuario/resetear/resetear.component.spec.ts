import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetearComponent } from './resetear.component';

describe('ResetearComponent', () => {
  let component: ResetearComponent;
  let fixture: ComponentFixture<ResetearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
