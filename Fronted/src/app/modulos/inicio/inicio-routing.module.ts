import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../inicio/login/login.component';
import {OlvidarComponent} from '../inicio/olvidar/olvidar.component';
import {RegistrarComponent} from '../inicio/registrar/registrar.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
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
