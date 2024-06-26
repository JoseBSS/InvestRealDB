import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonapoliticaPage } from './personapolitica.page';

const routes: Routes = [
  {
    path: '',
    component: PersonapoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonapoliticaPageRoutingModule {}
