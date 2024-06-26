import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaycontactoPageRoutingModule } from './ayudaycontacto-routing.module';

import { AyudaycontactoPage } from './ayudaycontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaycontactoPageRoutingModule
  ],
  declarations: [AyudaycontactoPage]
})
export class AyudaycontactoPageModule {}
