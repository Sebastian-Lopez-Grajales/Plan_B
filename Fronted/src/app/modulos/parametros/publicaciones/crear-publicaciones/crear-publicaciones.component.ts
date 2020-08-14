import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { UsuarioService } from '../../../../servicios/servicios_de_usuario/usuario.service';


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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormUploadBuilding();
    this.FormBuilding();
    this.get();
  }

  get() {
    let id = this.route.snapshot.params["id_usuario"];
    this.usuarioservice.getRecordById(id).subscribe(
      data => {
        this.fgv.usuarioId.setValue(data.id_usuario);
        
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
      usuarioId: ['', ],
      me_gusta: [0, ],
      no_gusta: [0, ],
  
  
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
          this.router.navigate(['/parametros/lista-publicidad']);
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
    model.me_gusta = this.fgv.me_gusta.value;
    model.no_gusta = this.fgv.no_gusta.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

  
  FormUploadBuilding() {
    this.uploadForm = this.fb.group({
      imagen: ['', [Validators.required]]
    });
  }

  get fgUpload() {
    return this.uploadForm.controls;
  }

  UploadImage() {
    const formData = new FormData();
    formData.append('file', this.fgUpload.imagen.value);
    this.service.uploadImagepublicacion(formData).subscribe(
      data => {
        console.log("Filename. " + data);

        this.fgv.imagen.setValue(data.filename);
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
      this.fgUpload.imagen.setValue(f);
    }
  }
}
