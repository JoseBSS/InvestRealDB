import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { MisoperacionesPageRoutingModule } from './misoperaciones-routing.module'

import { MisoperacionesPage } from './misoperaciones.page'
import { OperationListComponent } from './components/operation-list/operation-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisoperacionesPageRoutingModule,
  ],
  declarations: [MisoperacionesPage, OperationListComponent],
})
export class MisoperacionesPageModule {}
