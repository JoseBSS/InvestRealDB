import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalcuponesPage } from './modalcupones.page';

describe('ModalcuponesPage', () => {
  let component: ModalcuponesPage;
  let fixture: ComponentFixture<ModalcuponesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalcuponesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
