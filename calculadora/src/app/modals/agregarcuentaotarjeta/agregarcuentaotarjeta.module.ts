import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarcuentaotarjetaPageRoutingModule } from './agregarcuentaotarjeta-routing.module';

import { AgregarcuentaotarjetaPage } from './agregarcuentaotarjeta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarcuentaotarjetaPageRoutingModule
  ],
  declarations: [AgregarcuentaotarjetaPage]
})
export class AgregarcuentaotarjetaPageModule {}
