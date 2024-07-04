import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemoderadorPage } from './homemoderador.page';

const routes: Routes = [
  {
    path: '',
    component: HomemoderadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemoderadorPageRoutingModule {}
