import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisbeneficiosPage } from './misbeneficios.page';

const routes: Routes = [
  {
    path: '',
    component: MisbeneficiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisbeneficiosPageRoutingModule {}
