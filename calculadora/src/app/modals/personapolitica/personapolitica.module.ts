import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonapoliticaPageRoutingModule } from './personapolitica-routing.module';

import { PersonapoliticaPage } from './personapolitica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonapoliticaPageRoutingModule
  ],
  declarations: [PersonapoliticaPage]
})
export class PersonapoliticaPageModule {}
