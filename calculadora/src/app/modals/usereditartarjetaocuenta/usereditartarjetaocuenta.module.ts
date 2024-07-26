import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsereditartarjetaocuentaPageRoutingModule } from './usereditartarjetaocuenta-routing.module';

import { UsereditartarjetaocuentaPage } from './usereditartarjetaocuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsereditartarjetaocuentaPageRoutingModule
  ],
  declarations: [UsereditartarjetaocuentaPage]
})
export class UsereditartarjetaocuentaPageModule {}
