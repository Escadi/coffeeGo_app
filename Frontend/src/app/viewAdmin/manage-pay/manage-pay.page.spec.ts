import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagePayPage } from './manage-pay.page';

describe('ManagePayPage', () => {
  let component: ManagePayPage;
  let fixture: ComponentFixture<ManagePayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
