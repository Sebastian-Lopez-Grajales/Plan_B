import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaDenunciasComponent} from '../parametros/denuncias/lista-denuncias/lista-denuncias.component';
import { ListaPublicidadComponent } from '../parametros/publicidad/lista-publicidad/lista-publicidad.component';
import { CrearDenunciasComponent } from './denuncias/crear-denuncias/crear-denuncias.component';
import { EditarDenunciasComponent } from './denuncias/editar-denuncias/editar-denuncias.component';
import { CrearPublicidadComponent } from './publicidad/crear-publicidad/crear-publicidad.component';
import { EditarPublicidadComponent } from './publicidad/editar-publicidad/editar-publicidad.component';
import { ListaPublicacionesComponent } from './publicaciones/lista-publicaciones/lista-publicaciones.component';
import { CrearPublicacionesComponent } from './publicaciones/crear-publicaciones/crear-publicaciones.component';
import { EditarPublicacionesComponent } from './publicaciones/editar-publicaciones/editar-publicaciones.component';
import { ParametrosGuard } from 'src/app/guardias/parametros/parametros.guard';



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
    path: 'editar-denuncia/:id_denuncia',
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
    path: 'editar-publicidad/:id_publicidad',
    component: EditarPublicidadComponent
  },

  {
    path: 'lista-publicacion',
    component: ListaPublicacionesComponent
  },
  {
    path: 'crear-publicacion/:id_usuario',
    component: CrearPublicacionesComponent
  },
  {
    path: 'editar-publicacion/:id_publicacion',
    component: EditarPublicacionesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
