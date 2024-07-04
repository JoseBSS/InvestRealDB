import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomemoderadorPage } from './homemoderador.page';

describe('HomemoderadorPage', () => {
  let component: HomemoderadorPage;
  let fixture: ComponentFixture<HomemoderadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomemoderadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
