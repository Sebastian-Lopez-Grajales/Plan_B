import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';
import { Router } from '@angular/router';
import { ResetModel } from 'src/app/modelos/reset.model';


declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-olvidar',
  templateUrl: './olvidar.component.html',
  styleUrls: ['./olvidar.component.css']
})
export class OlvidarComponent implements OnInit {

  fgValidator: FormGroup;
  document_min_length: number = FormsConfig.MIN_LENGTH;

  constructor(
    private fb: FormBuilder,
    private service: InicioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      nombre_usuario: ['', [Validators.required, Validators.minLength(this.document_min_length)]],
      tipo: ['', [Validators.required]]
    });
  }

  ResetPassword() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Invalido.');
    } else {
      let model = this.getResetPasswordData();
      console.log(model);
      this.service.claveolvidada(model).subscribe(
        data => {
          ShowNotificationMessage('Contraseña reestablecida, la nueva contraseña esta en tu bandeja.');
          this.router.navigate(["inicio/login-usuario"]);
        },
        err => {
          console.log(this.getResetPasswordData);
          ShowNotificationMessage('Error en el proceso.');
        }
      );
    }
  }

  /**
   * Build a model instance to send it
   */
  getResetPasswordData(): ResetModel {
    let model = new ResetModel();
    model.nombre_usuario = this.fgv.nombre_usuario.value;
    model.tipo = parseInt(this.fgv.tipo.value);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
