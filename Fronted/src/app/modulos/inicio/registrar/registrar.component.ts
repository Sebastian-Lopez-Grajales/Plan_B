import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../../../modelos/usuario.model';
import { InicioService } from '../../../servicios/servicios_de_inicio/inicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsConfig } from 'src/app/config/forms-config';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

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

      p_nombre: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      s_nombre: ['', [ Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      p_apellido: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      s_apellido: ['', [ Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      n_usuario: ['', [ Validators.required,Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      correo: ['', [Validators.required, Validators.email]],
      ciudad: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      nacimiento: [''],
      genero: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      
    });
  }
  UsuarioModelRegister() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Invalido');
    } else {
      let model = this.getUsuarioModelData();
      console.log(model);
      this.service.UserRegister(model).subscribe(data => {
        console.log(data);
        if (data) {
          ShowNotificationMessage('Registro exitoso, la contraseña esta en el correo electronico proporcionado.');
          this.router.navigate(['/inicio/login-usuario']);
        } else {
          ShowNotificationMessage('Error en el proceso.');
        }
      });
    }
  }

  /**
   * Build a model instance to send it
   */
  getUsuarioModelData(): UsuarioModel {
    let model = new UsuarioModel();
    model.primer_nombre = this.fgv.p_nombre.value;
    model.segundo_nombre = this.fgv.s_nombre.value;
    model.primer_apellido = this.fgv.p_apellido.value;
    model.segundo_apellido = this.fgv.s_apellido.value;
    model.nombre_usuario = this.fgv.n_usuario.value;
    model.correo = this.fgv.correo.value;
    model.ciudad = this.fgv.ciudad.value;
    model.celular=this.fgv.celular.value;
    model.nacimiento=this.fgv.nacimiento.value;
    model.genero=this.fgv.genero.value;
    model.rol=0
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
