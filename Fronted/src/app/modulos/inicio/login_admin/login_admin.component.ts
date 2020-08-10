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
  document_min_length: number = FormsConfig.MIN_LENGTH;
  document_max_length: number = FormsConfig.MAX_LENGTH;

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
      ShowNotificationMessage('Invalid Form.');
    } else {
      let model = this.getLoginData();
      this.service.Loginadmin(model).subscribe(
        data => {
          ShowNotificationMessage('Welcome.');
          let res = this.service.saveSession(data);
          this.router.navigate(["/maestro/home"]);
        },
        err => {
          ShowNotificationMessage('Invalid data, please enter a correct user and password.');
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
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
