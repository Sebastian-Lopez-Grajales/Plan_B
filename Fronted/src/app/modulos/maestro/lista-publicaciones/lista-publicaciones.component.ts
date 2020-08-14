import { Component, OnInit } from '@angular/core';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { MaestroService } from '../../../servicios/servicios_de_maestro/maestro.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-lista-publicaciones',
  templateUrl: './lista-publicaciones.component.html',
  styleUrls: ['./lista-publicaciones.component.css']
})
export class ListaPublicacionesComponent implements OnInit {

  publicacionesList: PublicacionModel[];

  constructor(private service: MaestroService) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  /**
   * Get all records of courses to show them into home
   */
  getAllCourses() {
    this.service.getAllRecords().subscribe(
      data => {
        this.publicacionesList = data;
      },
      err => {
        ShowNotificationMessage("Error en la carga.");
      }
    );
  }


}
