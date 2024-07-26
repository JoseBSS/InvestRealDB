import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FramecalculadoraPage } from './framecalculadora.page';

describe('FramecalculadoraPage', () => {
  let component: FramecalculadoraPage;
  let fixture: ComponentFixture<FramecalculadoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FramecalculadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
