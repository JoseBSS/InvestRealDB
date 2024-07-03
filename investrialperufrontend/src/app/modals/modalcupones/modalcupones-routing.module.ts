import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcuponesPage } from './modalcupones.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcuponesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcuponesPageRoutingModule {}
