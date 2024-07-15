import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldeclarofondosPageRoutingModule } from './modaldeclarofondos-routing.module';

import { ModaldeclarofondosPage } from './modaldeclarofondos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldeclarofondosPageRoutingModule
  ],
  declarations: [ModaldeclarofondosPage]
})
export class ModaldeclarofondosPageModule {}
