import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-publicidad',
  templateUrl: './editar-publicidad.component.html',
  styleUrls: ['./editar-publicidad.component.css']
})
export class EditarPublicidadComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
  
  }

 
}
