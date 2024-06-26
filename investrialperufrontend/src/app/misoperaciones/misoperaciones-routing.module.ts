import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisoperacionesPage } from './misoperaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisoperacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisoperacionesPageRoutingModule {}
