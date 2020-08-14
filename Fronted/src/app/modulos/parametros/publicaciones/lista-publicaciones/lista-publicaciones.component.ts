import { Component, OnInit } from '@angular/core';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-lista-publicaciones',
  templateUrl: './lista-publicaciones.component.html',
  styleUrls: ['./lista-publicaciones.component.css']
})
export class ListaPublicacionesComponent implements OnInit {
  
  page: number = 1;
  publiList: PublicacionModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;

  constructor(private service: ParametrosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
        /** spinner starts on init */
        this.spinner.show();
        this.getlist();
  }
  getlist() {
    this.service.getpublicaciones().subscribe(
      records => {
        this.publiList = records;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
      },
      error => {
        ShowNotificationMessage("Problema en el servidor.");
      }
    );
  }

  RemoveRecordConfirmation(id) {
    this.removeRecordId = id;
    ShowRemoveConfirmationModal();
  }

  eliminar() {
    this.service.eliminarpublicacion(this.removeRecordId).subscribe(
      data => {
        closeModal("removeConfirmationModal");
        ShowNotificationMessage('Eliminacion Completa.');
        this.getlist();
      },
      error => {
        ShowNotificationMessage('Error en la eliminacion.');
      }
    );
  }

  /**descargarImagepublicacion(formData): Observable<CargaModel> {
    return this.http.post<CargaModel>(`${ServiceConfig.BASE_URL}PublicacionImagen`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }**/


}
