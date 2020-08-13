import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaDenunciasComponent} from '../parametros/denuncias/lista-denuncias/lista-denuncias.component';
import { ListaPublicidadComponent } from '../parametros/publicidad/lista-publicidad/lista-publicidad.component';
import { CrearDenunciasComponent } from './denuncias/crear-denuncias/crear-denuncias.component';
import { EditarDenunciasComponent } from './denuncias/editar-denuncias/editar-denuncias.component';
import { CrearPublicidadComponent } from './publicidad/crear-publicidad/crear-publicidad.component';
import { EditarPublicidadComponent } from './publicidad/editar-publicidad/editar-publicidad.component';

const routes: Routes = [

  {
    path: 'lista-denuncia',
    component: ListaDenunciasComponent
  },
  {
    path: 'crear-denuncia',
    component: CrearDenunciasComponent
  },
  {
    path: 'editar-denuncia',
    component: EditarDenunciasComponent
  },
  

  {
    path: 'lista-publicidad',
    component: ListaPublicidadComponent
  },
  {
    path: 'crear-publicidad',
    component: CrearPublicidadComponent
  },
  {
    path: 'editar-publicidad',
    component: EditarPublicidadComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
