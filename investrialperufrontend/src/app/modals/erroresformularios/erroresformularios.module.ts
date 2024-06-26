import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErroresformulariosPageRoutingModule } from './erroresformularios-routing.module';

import { ErroresformulariosPage } from './erroresformularios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErroresformulariosPageRoutingModule
  ],
  declarations: [ErroresformulariosPage]
})
export class ErroresformulariosPageModule {}
