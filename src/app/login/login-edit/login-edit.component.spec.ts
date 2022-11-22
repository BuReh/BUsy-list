import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEditComponent } from './login-edit.component';

describe('LoginEditComponent', () => {
  let component: LoginEditComponent;
  let fixture: ComponentFixture<LoginEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
