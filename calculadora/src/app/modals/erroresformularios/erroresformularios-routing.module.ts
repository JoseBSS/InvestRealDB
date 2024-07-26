import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErroresformulariosPage } from './erroresformularios.page';

const routes: Routes = [
  {
    path: '',
    component: ErroresformulariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErroresformulariosPageRoutingModule {}
