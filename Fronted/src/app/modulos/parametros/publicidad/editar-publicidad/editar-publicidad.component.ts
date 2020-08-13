import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ImagenModel } from 'src/app/modelos/imagen.model';
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


  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  adminList: AdminModel[];
  imagenList: ImagenModel[];


  constructor(
    private fb: FormBuilder,
    private service: ParametrosService,
    private router: Router,
    private adminService: AdminService,
    private parametrosService: ParametrosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRecordDataById();
    this.FilladminSelect();
    this.FormBuilding();
  }

  getRecordDataById() {
    let id = this.route.snapshot.params["id_publicidad"];
    this.service.getpublicidad(id).subscribe(
      data => {
        this.fgv.id_publicidad.setValue(data.id_publicidad);
        this.fgv.nombre.setValue(data.nombre);
        this.fgv.orden.setValue(data.orden);
        this.fgv.id_imagen.setValue(data.id_imagen);
        this.fgv.id_administrador.setValue(data.id_administrador);
      },
      err => {

      }
    );
  }

  FilladminSelect() {{}
    this.adminService.getadministradores().subscribe(
      data => {
        this.adminList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista de usuarios.");
      }
    );
  }





  FormBuilding() {
    this.fgValidator = this.fb.group({
      rol: ['', [Validators.required]],
      id_administrador: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      id_usuario: ['', [Validators.required]],
      codigo:['+57']
    });
  }

  editRecord() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getRecordData();
      console.log(model)
      this.service.editpublicidad(model).subscribe(
        data => {
          ShowNotificationMessage('Actualizacion Completa');
          this.router.navigate(['/admin/lista-admin']);
        },
        error => {
          ShowNotificationMessage('Error en la Actualizacion.');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getRecordData(): AdminModel {
    let model = new AdminModel();
    model.celular = `${this.fgv.codigo.value}${this.fgv.celular.value}`;
    model.clave = this.fgv.clave.value;
    model.correo = this.fgv.correo.value;
    model.id_administrador = this.fgv.id_administrador.value;
    model.id_usuario = this.fgv.id_usuario.value;
    model.rol=this.fgv.rol.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
