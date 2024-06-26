import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndashPage } from './indash.page';

const routes: Routes = [
  {
    path: '',
    component: IndashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndashPageRoutingModule {}
