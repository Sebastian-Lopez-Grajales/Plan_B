import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearDenunciasComponent } from './denuncias/crear-denuncias/crear-denuncias.component';
import { EditarDenunciasComponent } from './denuncias/editar-denuncias/editar-denuncias.component';
import { ListaDenunciasComponent } from './denuncias/lista-denuncias/lista-denuncias.component';
import { ListaPublicidadComponent } from './publicidad/lista-publicidad/lista-publicidad.component';
import { EditarPublicidadComponent } from './publicidad/editar-publicidad/editar-publicidad.component';
import { CrearPublicidadComponent } from './publicidad/crear-publicidad/crear-publicidad.component';
import { CrearPublicacionesComponent } from './publicaciones/crear-publicaciones/crear-publicaciones.component';
import { ListaPublicacionesComponent } from './publicaciones/lista-publicaciones/lista-publicaciones.component';
import { EditarPublicacionesComponent } from './publicaciones/editar-publicaciones/editar-publicaciones.component';


@NgModule({
  declarations: [CrearDenunciasComponent, EditarDenunciasComponent, ListaDenunciasComponent, ListaPublicidadComponent, EditarPublicidadComponent, CrearPublicidadComponent, CrearPublicacionesComponent, ListaPublicacionesComponent, EditarPublicacionesComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
