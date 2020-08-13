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
    component: ListaDenunciasComponent,
    canActivate: [ParametrosGuard]
  },
  {
    path: 'crear-denuncia',
    component: CrearDenunciasComponent,
    canActivate: [ParametrosGuard]
  },
  {
    path: 'editar-denuncia/:id_denuncia',
    component: EditarDenunciasComponent,
    canActivate: [ParametrosGuard]
  },
  

  {
    path: 'lista-publicidad',
    component: ListaPublicidadComponent,
    canActivate: [ParametrosGuard]
  },
  {
    path: 'crear-publicidad',
    component: CrearPublicidadComponent,
    canActivate: [ParametrosGuard]
  },
  {
    path: 'editar-publicidad/:id_publicidad',
    component: EditarPublicidadComponent,
    canActivate: [ParametrosGuard]
  },

  {
    path: 'lista-publicacion',
    component: ListaPublicacionesComponent,
    canActivate: [ParametrosGuard]
  },
  {
    path: 'crear-publicacion/:id_usuario',
    component: CrearPublicacionesComponent,
    canActivate: [ParametrosGuard]
  },
  {
    path: 'editar-publicacion/:id_publicacion',
    component: EditarPublicacionesComponent,
    canActivate: [ParametrosGuard]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
