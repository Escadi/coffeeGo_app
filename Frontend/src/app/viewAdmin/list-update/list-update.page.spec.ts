import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUpdatePage } from './list-update.page';

describe('ListUpdatePage', () => {
  let component: ListUpdatePage;
  let fixture: ComponentFixture<ListUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
