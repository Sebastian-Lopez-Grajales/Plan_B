import { Component, OnInit } from '@angular/core';
import { DenunciaModel } from 'src/app/modelos/denuncia.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { NgxSpinnerService } from 'ngx-spinner';


declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-lista-denuncias',
  templateUrl: './lista-denuncias.component.html',
  styleUrls: ['./lista-denuncias.component.css']
})
export class ListaDenunciasComponent implements OnInit {

  
  page: number = 1;
  denunciaList: DenunciaModel[];
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
    this.service.getdenuncias().subscribe(
      records => {
        this.denunciaList = records;
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
    this.service.eliminardenuncia(this.removeRecordId).subscribe(
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


}
