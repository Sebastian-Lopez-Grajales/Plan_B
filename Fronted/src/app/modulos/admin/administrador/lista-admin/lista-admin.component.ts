import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/app/modelos/admin.model';
import { FormsConfig } from 'src/app/config/forms-config';
import {  AdminService} from '../../../../servicios/servicios_de_admin/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfirmationModal: any;
declare const closeModal: any;

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {

  page: number = 1;
  adminList: AdminModel[];
  removeRecordId: String = '';
  itemsPageAmount: number = FormsConfig.ITEMS_PER_PAGE;

  constructor(private service: AdminService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
        /** spinner starts on init */
        this.spinner.show();
        this.getadminlist();
  }
  getadminlist() {
    this.service.getadministradores().subscribe(
      records => {
        this.adminList = records;
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

  eliminaradmin() {
    this.service.eliminaradmnistrador(this.removeRecordId).subscribe(
      data => {
        closeModal("removeConfirmationModal");
        ShowNotificationMessage('Eliminacion Completa.');
        this.getadminlist();
      },
      error => {
        ShowNotificationMessage('Error en la eliminacion.');
      }
    );
  }

}
