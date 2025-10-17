import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUsersPage } from './login-users.page';

describe('LoginUsersPage', () => {
  let component: LoginUsersPage;
  let fixture: ComponentFixture<LoginUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
