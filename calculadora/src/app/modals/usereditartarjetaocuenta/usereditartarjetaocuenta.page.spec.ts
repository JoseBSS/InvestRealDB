import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsereditartarjetaocuentaPage } from './usereditartarjetaocuenta.page';

describe('UsereditartarjetaocuentaPage', () => {
  let component: UsereditartarjetaocuentaPage;
  let fixture: ComponentFixture<UsereditartarjetaocuentaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereditartarjetaocuentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsereditartarjetaocuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
