import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaDenunciasComponent} from '../parametros/denuncias/lista-denuncias/lista-denuncias.component';
import { ListaPublicidadComponent } from '../parametros/publicidad/lista-publicidad/lista-publicidad.component';

const routes: Routes = [

  {
    path: 'lista-denuncias',
    component: ListaDenunciasComponent
  },

  {
    path: 'lista-publicidad',
    component: ListaPublicidadComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
