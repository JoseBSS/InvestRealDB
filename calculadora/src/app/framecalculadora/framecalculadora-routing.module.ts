import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FramecalculadoraPage } from './framecalculadora.page';

const routes: Routes = [
  {
    path: '',
    component: FramecalculadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FramecalculadoraPageRoutingModule {}
