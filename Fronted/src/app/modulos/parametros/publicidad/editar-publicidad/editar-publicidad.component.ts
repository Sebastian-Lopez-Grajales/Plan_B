import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { PublicidadModel } from 'src/app/modelos/publicidad.model';



declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-publicidad',
  templateUrl: './editar-publicidad.component.html',
  styleUrls: ['./editar-publicidad.component.css']
})
export class EditarPublicidadComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  administradorList: AdminModel[];

  constructor(
    private fb: FormBuilder,
    private service: ParametrosService,
    private router: Router,
    private adminservice: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
    this.rellenaradmin();
    this.FormBuilding();
  }

  get() {
    let id = this.route.snapshot.params["id_publicidad"];
    this.service.getpublicidad(id).subscribe(
      data => {
        this.fgv.contenido.setValue(data.contenido);
        this.fgv.fecha.setValue(data.fecha);
        this.fgv.id_administrador.setValue(data.id_administrador);
        this.fgv.nombre.setValue(data.nombre);
  
      },
      err => {

      }
    );
  }

  rellenaradmin() {
    this.adminservice.getadministradores().subscribe(
      data => {
        this.administradorList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista de usuarios.");
      }
    );
  }
  FormBuilding() {
    this.fgValidator = this.fb.group({
      contenido: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      id_administrador: ['', [Validators.required]],
      nombre: ['', [Validators.required]],

    });
  }

  editar() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getRecordData();
      console.log(model)
      this.service.editpublicidad(model).subscribe(
        data => {
          ShowNotificationMessage('Actualizacion Completa');
          this.router.navigate(['/parametros/lista-publicidad']);
        },
        error => {
          ShowNotificationMessage('Error en la Actualizacion.');
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

 
}
