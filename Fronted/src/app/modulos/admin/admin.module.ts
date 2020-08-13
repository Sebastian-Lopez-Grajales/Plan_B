import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminRoutingModule } from './admin-routing.module';
import { CrearAdminComponent } from './administrador/crear-admin/crear-admin.component';
import { EditarAdminComponent } from './administrador/editar-admin/editar-admin.component';
import { EliminarAdminComponent } from './administrador/eliminar-admin/eliminar-admin.component';
import { ListaAdminComponent } from './administrador/lista-admin/lista-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CrearAdminComponent,
     EditarAdminComponent,
      EliminarAdminComponent, 
      ListaAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class AdminModule { }
