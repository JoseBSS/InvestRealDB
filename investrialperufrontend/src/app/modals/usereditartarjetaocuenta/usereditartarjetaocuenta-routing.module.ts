import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsereditartarjetaocuentaPage } from './usereditartarjetaocuenta.page';

const routes: Routes = [
  {
    path: '',
    component: UsereditartarjetaocuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsereditartarjetaocuentaPageRoutingModule {}
