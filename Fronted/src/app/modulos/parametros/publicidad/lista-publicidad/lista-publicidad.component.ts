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


  constructor(private service: ParametrosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
       
  }
  
}
