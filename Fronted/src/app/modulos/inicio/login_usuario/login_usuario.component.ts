import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';
import { FormsConfig } from '../../../config/forms-config';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import MD5 from 'crypto-js/md5';

declare const ShowNotificationMessage: any;
@Component({
  selector: 'app-login-usuario',
  templateUrl: './login_usuario.component.html',
  styleUrls: ['./login_usuario.component.css']
})
export class LoginusuarioComponent implements OnInit {

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
      nombre_usuario: ['', [Validators.required, Validators.minLength(this.document_min_length)]],
      clave: ['', [Validators.required]]
    });
  }

  LoginUser() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form.');
    } else {
      let model = this.getLoginData();
      this.service.LoginUser(model).subscribe(
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
  getLoginData(): UsuarioModel {
    let model = new UsuarioModel();
    model.nombre_usuario = this.fgv.nombre_usuario.value;
    model.clave = MD5(this.fgv.clave.value).toString();
    console.log(model);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
