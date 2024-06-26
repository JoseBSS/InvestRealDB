import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetapresentacionPage } from './tarjetapresentacion.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetapresentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetapresentacionPageRoutingModule {}
