import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalmostraropcionesPage } from './modalmostraropciones.page';

describe('ModalmostraropcionesPage', () => {
  let component: ModalmostraropcionesPage;
  let fixture: ComponentFixture<ModalmostraropcionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalmostraropcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
