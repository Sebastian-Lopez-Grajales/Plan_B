import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './administrador/eliminar-admin/eliminar-admin.component';
import { ListaAdminComponent } from './administrador/lista-admin/lista-admin.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [CrearAdminComponent, EditarAdminComponent, EliminarAdminComponent, ListaAdminComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
