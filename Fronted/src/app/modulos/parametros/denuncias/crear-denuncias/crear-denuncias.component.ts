import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { DenunciaModel } from 'src/app/modelos/denuncia.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-denuncias',
  templateUrl: './crear-denuncias.component.html',
  styleUrls: ['./crear-denuncias.component.css']
})
export class CrearDenunciasComponent implements OnInit {

  fgValidator: FormGroup;
  uploadForm: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  publicacionList: PublicacionModel[];
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
    this.rellenarpublicacion();
  }
  rellenaradmin() {
    this.adminService.getadministradores().subscribe(
      data => {
        this.administradorList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista de usuarios.");
      }
    );
  }

  rellenarpublicacion() {
    this.service.getpublicaciones().subscribe(
      data => {
        this.publicacionList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista de usuarios.");
      }
    );
  }


  FormBuilding() {
    this.fgValidator = this.fb.group({
      archivo_prueba: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required, Validators.email]],
      administradorId: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      publicacionId: ['', [Validators.required]],
      titulo:['',[Validators.required]],
      resuelto:['',[Validators.required]]
    });
  }

  crear() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.guardardenuncia(model).subscribe(
        data => {
          ShowNotificationMessage('The record has been saved successfuly');
          this.router.navigate(['/courses/course-list']);
        },
        error => {
          ShowNotificationMessage('Error registering record.');
        }
      );
    }
  }

  getRecordData(): DenunciaModel {
    let model = new DenunciaModel();
    model.administradorId = this.fgv.administradorId.value;
    model.archivo_prueba = this.fgv.archivo_prueba.value;
    model.descripcion = this.fgv.descripcion.value;
    model.fecha = this.fgv.fecha.value;
    model.publicacionId = this.fgv.publicacionId.value;
    model.titulo=this.fgv.titulo.value;
    model.resuelto=this.fgv.resuelto.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

  /** Upload file region */

  FormUploadBuilding() {
    this.uploadForm = this.fb.group({
      file: ['', [Validators.required]]
    });
  }

  get fgUpload() {
    return this.uploadForm.controls;
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('file', this.fgUpload.file.value);
    this.service.uploadImage(formData).subscribe(
      data => {
        console.log("Filename. " + data);

        this.fgv.archivo_prueba.setValue(data.filename);
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
      this.fgUpload.file.setValue(f);
    }
  }
}
