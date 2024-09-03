import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalmostraropcionesPageRoutingModule } from './modalmostraropciones-routing.module';

import { ModalmostraropcionesPage } from './modalmostraropciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalmostraropcionesPageRoutingModule
  ],
  declarations: [ModalmostraropcionesPage]
})
export class ModalmostraropcionesPageModule {}
