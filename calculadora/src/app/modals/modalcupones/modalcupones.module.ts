import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcuponesPageRoutingModule } from './modalcupones-routing.module';

import { ModalcuponesPage } from './modalcupones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcuponesPageRoutingModule
  ],
  declarations: [ModalcuponesPage]
})
export class ModalcuponesPageModule {}
