import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaldeclarofondosPage } from './modaldeclarofondos.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldeclarofondosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaldeclarofondosPageRoutingModule {}
