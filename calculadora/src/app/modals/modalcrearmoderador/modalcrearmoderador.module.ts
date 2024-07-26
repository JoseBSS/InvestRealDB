import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcrearmoderadorPageRoutingModule } from './modalcrearmoderador-routing.module';

import { ModalcrearmoderadorPage } from './modalcrearmoderador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcrearmoderadorPageRoutingModule
  ],
  declarations: [ModalcrearmoderadorPage]
})
export class ModalcrearmoderadorPageModule {}
