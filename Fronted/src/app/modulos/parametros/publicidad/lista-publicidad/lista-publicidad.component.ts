import { Component, OnInit } from '@angular/core';
import { PublicidadModel } from 'src/app/modelos/publicidad.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from 'ngx-spinner';
import {  ParametrosService} from '../../../../servicios/servicios_de_parametros/parametros.service';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-lista-publicidad',
  templateUrl: './lista-publicidad.component.html',
  styleUrls: ['./lista-publicidad.component.css']
})
export class ListaPublicidadComponent implements OnInit {

  page: number = 1;
  recordList: PublicidadModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;

  constructor(private service: ParametrosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
        /** spinner starts on init */
        this.spinner.show();
        this.getRecordList();
  }
  getRecordList() {
    this.service.getpublicidades().subscribe(
      records => {
        this.recordList = records;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
      },
      error => {
        ShowNotificationMessage("There is a problem with backend communication.");
      }
    );
  }

  RemoveRecordConfirmation(id) {
    this.removeRecordId = id;
    ShowRemoveConfirmationModal();
  }

  RemoveRecord() {
    this.service.eliminarpublicidad(this.removeRecordId).subscribe(
      data => {
        closeModal("removeConfirmationModal");
        ShowNotificationMessage('Record has been removed successfuly.');
        this.getRecordList();
      },
      error => {
        ShowNotificationMessage('Error removing record.');
      }
    );
  }
}
