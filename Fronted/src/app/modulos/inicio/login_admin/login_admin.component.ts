import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsConfig } from '../../../config/forms-config';
import { AdminModel } from 'src/app/modelos/admin.model';
import MD5 from 'crypto-js/md5';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';

declare const ShowNotificationMessage: any;
@Component({
  selector: 'app-login-admin',
  templateUrl: './login_admin.component.html',
  styleUrls: ['./login_admin.component.css']
})
export class LoginadminComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: InicioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]]
    });
  }

  LoginUseradmin() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Invalido.');
    } else {
      let model = this.getLoginData();
      this.service.Loginadmin(model).subscribe(
        data => {
          ShowNotificationMessage('Bienvenido.');
          let res = this.service.guardarsesion(data);
          this.router.navigate(["/maestro/home"]);
        },
        err => {
          ShowNotificationMessage('Usuario o Contraseña Invalido...');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getLoginData(): AdminModel {
    let model = new AdminModel();
    model.correo = this.fgv.correo.value;
    model.clave = MD5(this.fgv.clave.value).toString();
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
