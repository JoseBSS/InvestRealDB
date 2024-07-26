import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcrearmoderadorPage } from './modalcrearmoderador.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcrearmoderadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcrearmoderadorPageRoutingModule {}
