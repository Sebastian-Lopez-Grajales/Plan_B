import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResetearComponent } from '../usuario/resetear/resetear.component';
import {EditarComponent } from '../usuario/editar/editar.component';
import { ListarContactosComponent} from '../usuario/contactos/listar-contactos/listar-contactos.component';
import { ListarMensajesComponent} from '../usuario/mensajes/listar-mensajes/listar-mensajes.component';
import { ListarComentariosComponent} from '../usuario/comentarios/listar-comentarios/listar-comentarios.component';
const routes: Routes = [

{
  path: 'resetear',
  component : ResetearComponent
},
{
  path: 'editar',
  component : EditarComponent
},
{
  path: 'lista-contacto',
  component : ListarContactosComponent
},
{
  path: 'lista-mensaje',
  component : ListarMensajesComponent
},
{
  path: 'lista-comentario',
  component : ListarComentariosComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
