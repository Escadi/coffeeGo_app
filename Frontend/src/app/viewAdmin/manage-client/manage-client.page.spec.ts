import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageClientPage } from './manage-client.page';

describe('ManageClientPage', () => {
  let component: ManageClientPage;
  let fixture: ComponentFixture<ManageClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
