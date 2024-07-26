import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  
  {
    path: 'framecalculadora',
    loadChildren: () => import('./framecalculadora/framecalculadora.module').then( m => m.FramecalculadoraPageModule)
  },
  {
    path: '',
    redirectTo: 'framecalculadora',
    pathMatch: 'full'
  },

  //empieza el codigo de las pestañas

  {
    path: 'tarjetapresentacion',
    loadChildren: () => import('./modals/tarjetapresentacion/tarjetapresentacion.module').then( m => m.TarjetapresentacionPageModule)
  },
 
  {
    path: 'erroresformularios',
    loadChildren: () => import('./modals/erroresformularios/erroresformularios.module').then( m => m.ErroresformulariosPageModule)
  },
  {
    path: 'agregarcuentaotarjeta',
    loadChildren: () => import('./modals/agregarcuentaotarjeta/agregarcuentaotarjeta.module').then( m => m.AgregarcuentaotarjetaPageModule)
  },

  {
    path: 'visualizadorimagenes',
    loadChildren: () => import('./modals/visualizadorimagenes/visualizadorimagenes.module').then( m => m.VisualizadorimagenesPageModule)
  },
  {
    path: 'personapolitica',
    loadChildren: () => import('./modals/personapolitica/personapolitica.module').then( m => m.PersonapoliticaPageModule)
  },
  {
    path: 'usereditartarjetaocuenta',
    loadChildren: () => import('./modals/usereditartarjetaocuenta/usereditartarjetaocuenta.module').then( m => m.UsereditartarjetaocuentaPageModule)
  },
  {
    path: 'modalcupones',
    loadChildren: () => import('./modals/modalcupones/modalcupones.module').then( m => m.ModalcuponesPageModule)
  },
  {
    path: 'modalcrearmoderador',
    loadChildren: () => import('./modals/modalcrearmoderador/modalcrearmoderador.module').then( m => m.ModalcrearmoderadorPageModule)
  },

  {
    path: 'modaldeclarofondos',
    loadChildren: () => import('./modals/modaldeclarofondos/modaldeclarofondos.module').then( m => m.ModaldeclarofondosPageModule)
  },
  {
    path: 'framecalculadora',
    loadChildren: () => import('./framecalculadora/framecalculadora.module').then( m => m.FramecalculadoraPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
