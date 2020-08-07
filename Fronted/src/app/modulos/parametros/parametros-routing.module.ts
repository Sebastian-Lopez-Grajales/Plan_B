import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaDenunciasComponent} from '../parametros/denuncias/lista-denuncias/lista-denuncias.component';
import { ListaPublicidadComponent } from '../parametros/publicidad/lista-publicidad/lista-publicidad.component';
import { ListaPublicacionesComponent } from '../parametros/publicaciones/lista-publicaciones/lista-publicaciones.component';

const routes: Routes = [

  {
    path: 'lista-denuncia',
    component: ListaDenunciasComponent
  },

  {
    path: 'lista-publicidad',
    component: ListaPublicidadComponent
  },
  {
    path: 'lista-publicacion',
    component: ListaPublicacionesComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
