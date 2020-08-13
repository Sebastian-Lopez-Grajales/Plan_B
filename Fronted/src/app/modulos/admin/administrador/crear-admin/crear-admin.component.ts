import { Component, OnInit } from '@angular/core';
import MD5 from 'crypto-js/md5';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { AdminModel } from 'src/app/modelos/admin.model';

declare const ShowNotificationMessage: any;
@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {

  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  usuarioList: UsuarioModel[];

  constructor(
    private fb: FormBuilder,
    private adminservice: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rellenarusuarios();
    this.FormBuilding();
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
      clave: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      id_usuario: ['', [Validators.required]],
      codigo:['+57']
    });
  }

  guardaradmin() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getRecordData();
      model.clave = MD5(model.clave).toString();
      console.log(model)
      this.adminservice.guardaradministrador(model).subscribe(
        data => {
          ShowNotificationMessage(' Agregado Correctamente');
          this.router.navigate(['/admin/lista-admin']);
        },
        error => {
          ShowNotificationMessage('Error en la Creacion.');
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
    model.id_usuario = this.fgv.id_usuario.value;
    model.clave = MD5(this.fgv.clave.value).toString();
    model.rol=this.fgv.rol.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
