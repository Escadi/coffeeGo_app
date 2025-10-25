import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabClientPage } from './tab-client.page';

describe('TabClientPage', () => {
  let component: TabClientPage;
  let fixture: ComponentFixture<TabClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
