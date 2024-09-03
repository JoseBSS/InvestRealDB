import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalmostraropcionesPage } from './modalmostraropciones.page';

const routes: Routes = [
  {
    path: '',
    component: ModalmostraropcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalmostraropcionesPageRoutingModule {}
