import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaycontactoPage } from './ayudaycontacto.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaycontactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaycontactoPageRoutingModule {}
