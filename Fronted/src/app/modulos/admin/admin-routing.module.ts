import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaAdminComponent } from '../admin/administrador/lista-admin/lista-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';



const routes: Routes = [
  {
    path: 'lista-admin',
    component: ListaAdminComponent
  },
  {
    path: 'editar-admin/:id_administrador',
    component: EditarAdminComponent
  },
  {
    path: 'crear-admin',
    component: CrearAdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
