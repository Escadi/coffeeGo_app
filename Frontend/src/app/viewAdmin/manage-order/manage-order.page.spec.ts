import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageOrderPage } from './manage-order.page';

describe('ManageOrderPage', () => {
  let component: ManageOrderPage;
  let fixture: ComponentFixture<ManageOrderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
