import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModaldeclarofondosPage } from './modaldeclarofondos.page';

describe('ModaldeclarofondosPage', () => {
  let component: ModaldeclarofondosPage;
  let fixture: ComponentFixture<ModaldeclarofondosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModaldeclarofondosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
