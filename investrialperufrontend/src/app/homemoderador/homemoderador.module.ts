import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemoderadorPageRoutingModule } from './homemoderador-routing.module';

import { HomemoderadorPage } from './homemoderador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemoderadorPageRoutingModule
  ],
  declarations: [HomemoderadorPage]
})
export class HomemoderadorPageModule {}
