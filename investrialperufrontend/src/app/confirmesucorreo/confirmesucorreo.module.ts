import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmesucorreoPageRoutingModule } from './confirmesucorreo-routing.module';

import { ConfirmesucorreoPage } from './confirmesucorreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmesucorreoPageRoutingModule
  ],
  declarations: [ConfirmesucorreoPage]
})
export class ConfirmesucorreoPageModule {}
