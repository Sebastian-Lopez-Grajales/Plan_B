import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaAdminComponent } from '../admin/administrador/lista-admin/lista-admin.component';



const routes: Routes = [
  {
    path: 'lista-admin',
    component: ListaAdminComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
