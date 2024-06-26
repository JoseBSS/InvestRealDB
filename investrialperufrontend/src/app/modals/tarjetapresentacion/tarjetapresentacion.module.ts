import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetapresentacionPageRoutingModule } from './tarjetapresentacion-routing.module';

import { TarjetapresentacionPage } from './tarjetapresentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetapresentacionPageRoutingModule
  ],
  declarations: [TarjetapresentacionPage]
})
export class TarjetapresentacionPageModule {}
