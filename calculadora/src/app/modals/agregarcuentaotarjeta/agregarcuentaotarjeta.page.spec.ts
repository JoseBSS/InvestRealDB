import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarcuentaotarjetaPage } from './agregarcuentaotarjeta.page';

describe('AgregarcuentaotarjetaPage', () => {
  let component: AgregarcuentaotarjetaPage;
  let fixture: ComponentFixture<AgregarcuentaotarjetaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcuentaotarjetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarcuentaotarjetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
