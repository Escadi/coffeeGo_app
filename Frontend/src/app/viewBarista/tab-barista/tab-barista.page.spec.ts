import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabBaristaPage } from './tab-barista.page';

describe('TabBaristaPage', () => {
  let component: TabBaristaPage;
  let fixture: ComponentFixture<TabBaristaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBaristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
