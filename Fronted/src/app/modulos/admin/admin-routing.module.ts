import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaAdminComponent } from '../admin/administrador/lista-admin/lista-admin.component';
import {LoginComponent } from '../admin/login/login.component';


const routes: Routes = [
  {
    path: 'lista-admin',
    component: ListaAdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
