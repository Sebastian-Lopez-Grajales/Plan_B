import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { AdminModel } from 'src/app/modelos/admin.model';
import { Router } from '@angular/router';
import { PublicidadModel } from 'src/app/modelos/publicidad.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-publicidad',
  templateUrl: './crear-publicidad.component.html',
  styleUrls: ['./crear-publicidad.component.css']
})
export class CrearPublicidadComponent implements OnInit {

  fgValidator: FormGroup;
  uploadForm: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  administradorList: AdminModel[];

  constructor(
    private fb: FormBuilder,
    private service: ParametrosService,
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.FormUploadBuilding();
    this.FormBuilding();
    this.rellenaradmin();
  }
  rellenaradmin() {
    this.adminService.getadministradores().subscribe(
      data => {
        this.administradorList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista .");
      }
    );
  }



  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required]],
      contenido: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      id_administrador: ['', [Validators.required]],

    });
  }

  crear() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.guardarpublicidad(model).subscribe(
        data => {
          ShowNotificationMessage('The record has been saved successfuly');
          this.router.navigate(['/parametros/lista-publicidad']);
        },
        error => {
          ShowNotificationMessage('Error registering record.');
        }
      );
    }
  }

  getRecordData(): PublicidadModel {
    let model = new PublicidadModel();
    model.contenido = this.fgv.contenido.value;
    model.fecha = this.fgv.fecha.value;
    model.id_administrador = this.fgv.id_administrador.value;
    model.nombre = this.fgv.nombre.value;

    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

  /** Upload file region */

  FormUploadBuilding() {
    this.uploadForm = this.fb.group({
      contenido: ['', [Validators.required]]
    });
  }

  get fgUpload() {
    return this.uploadForm.controls;
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('file', this.fgUpload.contenido.value);
    this.service.uploadImagepublicidad(formData).subscribe(
      data => {
        console.log("Filename. " + data);

        this.fgv.contenido.setValue(data.filename);
        ShowNotificationMessage("The image has been uploaded successfuly.");
      },
      err => {
        ShowNotificationMessage("Error uploading image.");
      }
    );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.fgUpload.contenido.setValue(f);
    }
  }
  
}
