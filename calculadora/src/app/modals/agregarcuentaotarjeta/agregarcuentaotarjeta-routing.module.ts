import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarcuentaotarjetaPage } from './agregarcuentaotarjeta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarcuentaotarjetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarcuentaotarjetaPageRoutingModule {}
