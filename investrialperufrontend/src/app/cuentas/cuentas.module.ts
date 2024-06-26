import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { CuentasPageRoutingModule } from './cuentas-routing.module'

import { CuentasPage } from './cuentas.page'
import { AccountListComponent } from './components/account-list/account-list.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CuentasPageRoutingModule,
  ],
  declarations: [CuentasPage, AccountListComponent],
})
export class CuentasPageModule {}
