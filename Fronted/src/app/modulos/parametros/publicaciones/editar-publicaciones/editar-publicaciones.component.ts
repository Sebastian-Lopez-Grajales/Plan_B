import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router, ActivatedRoute } from '@angular/router';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-publicaciones',
  templateUrl: './editar-publicaciones.component.html',
  styleUrls: ['./editar-publicaciones.component.css']
})
export class EditarPublicacionesComponent implements OnInit {


  
  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  publicacionList: PublicacionModel[];

  constructor(
    private fb: FormBuilder,
    private service: ParametrosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
    this.rellenarpubli();
    this.FormBuilding();
  }

  get() {
    let id = this.route.snapshot.params["id_publicacion"];
    this.service.getpublicacion(id).subscribe(
      data => {
        this.fgv.fecha.setValue(data.fecha);
        this.fgv.imagen.setValue(data.imagen);
        this.fgv.nombre.setValue(data.nombre);
        this.fgv.texto.setValue(data.texto);
        this.fgv.usuarioId.setValue(data.usuarioId);
      },
      err => {

      }
    );
  }

  rellenarpubli() {
    this.service.getpublicaciones().subscribe(
      data => {
        this.publicacionList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista.");
      }
    );
  }



  FormBuilding() {
    this.fgValidator = this.fb.group({
      imagen: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });
  }

  editar() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getRecordData();
      console.log(model)
      this.service.editpublicacion(model).subscribe(
        data => {
          ShowNotificationMessage('Actualizacion Completa');
          this.router.navigate(['/denuncia/lista-denuncia']);
        },
        error => {
          ShowNotificationMessage('Error en la Actualizacion.');
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

}
