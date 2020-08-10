import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginusuarioComponent} from './login_usuario/login_usuario.component';
import {LoginadminComponent} from './login_admin/login_admin.component';
import {OlvidarComponent} from '../inicio/olvidar/olvidar.component';
import {RegistrarComponent} from '../inicio/registrar/registrar.component';
const routes: Routes = [
  {
    path: 'login-usuario',
    component: LoginusuarioComponent
  },
  {
    path: 'login-admin',
    component: LoginadminComponent
  },
  {
    path: 'olvidar',
    component: OlvidarComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'maestro',
    loadChildren: () => import('../maestro/maestro.module').then(m  => m.MaestroModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
