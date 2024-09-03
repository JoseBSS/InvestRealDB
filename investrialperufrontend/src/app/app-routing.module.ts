import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndashPage } from './indash/indash.page';

const routes: Routes = [


  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  //empieza el codigo de las pestañas
  {
    path: 'indash',
    loadChildren: () => import('./indash/indash.module').then( m => m.IndashPageModule)
  },

  {
    path: 'indash',
    component: IndashPage,
    children: [
   

      {
        path: 'operacion',
        loadChildren: () => import('./operacion/operacion.module').then( m => m.OperacionPageModule)
      },
      {
        path: 'misoperaciones',
        loadChildren: () => import('./misoperaciones/misoperaciones.module').then( m => m.MisoperacionesPageModule)
      },
      {
        path: 'cuentas',
        loadChildren: () => import('./cuentas/cuentas.module').then( m => m.CuentasPageModule)
      },
      {
        path: 'misbeneficios',
        loadChildren: () => import('./misbeneficios/misbeneficios.module').then( m => m.MisbeneficiosPageModule)
      },
      {
        path: 'ayudaycontacto',
        loadChildren: () => import('./ayudaycontacto/ayudaycontacto.module').then( m => m.AyudaycontactoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'preguntasfrecuentes',
        loadChildren: () => import('./preguntasfrecuentes/preguntasfrecuentes.module').then( m => m.PreguntasfrecuentesPageModule)
      },

    ]
  },
  {
    path: 'tarjetapresentacion',
    loadChildren: () => import('./modals/tarjetapresentacion/tarjetapresentacion.module').then( m => m.TarjetapresentacionPageModule)
  },
  {
    path: 'confirmesucorreo',
    loadChildren: () => import('./confirmesucorreo/confirmesucorreo.module').then( m => m.ConfirmesucorreoPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
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
    path: 'homeadmin',
    loadChildren: () => import('./homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
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
    path: 'homemoderador',
    loadChildren: () => import('./homemoderador/homemoderador.module').then( m => m.HomemoderadorPageModule)
  },
  {
    path: 'modaldeclarofondos',
    loadChildren: () => import('./modals/modaldeclarofondos/modaldeclarofondos.module').then( m => m.ModaldeclarofondosPageModule)
  },
  {
    path: 'modalmostraropciones',
    loadChildren: () => import('./modals/modalmostraropciones/modalmostraropciones.module').then( m => m.ModalmostraropcionesPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
