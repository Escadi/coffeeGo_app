import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaristaProfilePage } from './barista-profile.page';

describe('BaristaProfilePage', () => {
  let component: BaristaProfilePage;
  let fixture: ComponentFixture<BaristaProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
