import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then(i => i.InicioModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  {
    path: 'parametros',
    loadChildren: () => import('../parametros/parametros.module').then(p => p.ParametrosModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(a => a.AdminModule),
  },

  {
    path: 'usuario',
    loadChildren: () => import('../usuario/usuario.module').then(u => u.UsuarioModule)
  },

  {
    path: '**',
    redirectTo: '/home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MaestroRoutingModule { }
