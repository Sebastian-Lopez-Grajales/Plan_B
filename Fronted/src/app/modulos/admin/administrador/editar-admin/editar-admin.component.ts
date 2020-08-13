import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { AdminModel } from 'src/app/modelos/admin.model';
import MD5 from 'crypto-js/md5';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.css']
})
export class EditarAdminComponent implements OnInit {


  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  usuarioList: UsuarioModel[];

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private router: Router,
    private adminservice: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getadmin();
    this.rellenarusuarios();
    this.FormBuilding();
  }

  getadmin() {
    let id = this.route.snapshot.params["id_administrador"];
    this.service.getadministrador(id).subscribe(
      data => {
        this.fgv.id_administrador.setValue(data.id_administrador);
        this.fgv.rol.setValue(data.rol);
        this.fgv.correo.setValue(data.correo);
        this.fgv.clave.setValue(data.clave);
        this.fgv.celular.setValue(data.celular);
        this.fgv.id_usuario.setValue(data.id_usuario);
      },
      err => {

      }
    );
  }

  rellenarusuarios() {
    this.adminservice.getusuarios().subscribe(
      data => {
        this.usuarioList = data;
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

  editaradmin() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getRecordData();
      model.clave = MD5(model.clave).toString();
      console.log(model)
      this.service.editaradministrador(model).subscribe(
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


  getRecordData(): AdminModel {
    let model = new AdminModel();
    model.celular = `${this.fgv.codigo.value}${this.fgv.celular.value}`;
    model.clave = this.fgv.clave.value;
    model.correo = this.fgv.correo.value;
    model.id_administrador = this.fgv.id_administrador.value;
    model.id_usuario = this.fgv.id_usuario.value;
    model.clave = MD5(this.fgv.clave.value).toString();
    model.rol=this.fgv.rol.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
