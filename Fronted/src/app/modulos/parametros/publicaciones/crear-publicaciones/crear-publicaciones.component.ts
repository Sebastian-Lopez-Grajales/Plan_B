import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-crear-publicaciones',
  templateUrl: './crear-publicaciones.component.html',
  styleUrls: ['./crear-publicaciones.component.css']
})
export class CrearPublicacionesComponent implements OnInit {


  fgValidator: FormGroup;
  uploadForm: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  admint: AdminModel;
  

  constructor(
    private fb: FormBuilder,
    private usuarioservice: UsuarioService,
    private service: ParametrosService,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.FormUploadBuilding();
    this.FormBuilding();
    this.get();
  }

  get() {
    let id = this.route.snapshot.params["id_usuario"];
    this.service.getusuario(id).subscribe(
      data => {
        this.fgv.nombre_usuario.setValue(data.nombre_usuario);
        
      },
      err => {

      }
    );
  }
  


  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      usuarioId: ['', [Validators.required]],
  
    });
  }

  crear() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getRecordData();
      this.service.guardarpublicacion(model).subscribe(
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

  getRecordData(): PublicacionModel {
    let model = new PublicacionModel();
    model.fecha = this.fgv.fecha.value;
    model.imagen = this.fgv.imagen.value;
    model.nombre = this.fgv.nombre.value;
    model.texto = this.fgv.texto.value;
    model.usuarioId = this.fgv.usuarioId.value;
  
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
