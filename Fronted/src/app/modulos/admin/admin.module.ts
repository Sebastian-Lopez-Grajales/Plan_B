import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrearAdminComponent } from './crear-admin/crear-admin.component';
import { EditarAdminComponent } from './editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './eliminar-admin/eliminar-admin.component';
import { ListaAdminComponent } from './lista-admin/lista-admin.component';


@NgModule({
  declarations: [CrearAdminComponent, EditarAdminComponent, EliminarAdminComponent, ListaAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
