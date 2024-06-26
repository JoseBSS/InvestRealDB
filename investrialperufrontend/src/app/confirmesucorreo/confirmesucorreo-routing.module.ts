import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmesucorreoPage } from './confirmesucorreo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmesucorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmesucorreoPageRoutingModule {}
