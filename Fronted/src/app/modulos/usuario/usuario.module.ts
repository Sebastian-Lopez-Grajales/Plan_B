import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ResetearComponent } from './resetear/resetear.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarContactosComponent } from './contactos/eliminar-contactos/eliminar-contactos.component';
import { AgregarContactosComponent } from './contactos/agregar-contactos/agregar-contactos.component';
import { ListarContactosComponent } from './contactos/listar-contactos/listar-contactos.component';
import { EliminarMensajesComponent } from './mensajes/eliminar-mensajes/eliminar-mensajes.component';
import { ListarMensajesComponent } from './mensajes/listar-mensajes/listar-mensajes.component';
import { EditarComentariosComponent } from './comentarios/editar-comentarios/editar-comentarios.component';
import { ListarComentariosComponent } from './comentarios/listar-comentarios/listar-comentarios.component';
import { EliminarComentariosComponent } from './comentarios/eliminar-comentarios/eliminar-comentarios.component';


@NgModule({
  declarations: [ResetearComponent, EditarComponent, EliminarContactosComponent, AgregarContactosComponent, ListarContactosComponent, EliminarMensajesComponent, ListarMensajesComponent, EditarComentariosComponent, ListarComentariosComponent, EliminarComentariosComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
