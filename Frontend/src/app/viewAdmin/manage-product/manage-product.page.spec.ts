import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageProductPage } from './manage-product.page';

describe('ManageProductPage', () => {
  let component: ManageProductPage;
  let fixture: ComponentFixture<ManageProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
