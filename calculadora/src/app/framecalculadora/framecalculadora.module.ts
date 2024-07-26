import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FramecalculadoraPageRoutingModule } from './framecalculadora-routing.module';

import { FramecalculadoraPage } from './framecalculadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FramecalculadoraPageRoutingModule
  ],
  declarations: [FramecalculadoraPage]
})
export class FramecalculadoraPageModule {}
