import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from '../../../modelos/usuario/usuario.model';
import { InicioService } from '../../../servicios/servicios_de_inicio/inicio.service';
import { ActivatedRoute, Router } from '@angular/router';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

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

      p_nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(33)]],
      s_nombre: ['', [ Validators.minLength(2), Validators.maxLength(33)]],
      p_apellido: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(33)]],
      s_apellido: ['', [ Validators.minLength(2), Validators.maxLength(33)]],
      n_usuario: ['', [ Validators.required,Validators.minLength(6), Validators.maxLength(18)]],
      correo: ['', [Validators.required, Validators.email]],
      ciudad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(33)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      nacimiento: [''],
      genero: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(13)]],
      
    });
  }
  UsuarioModelRegister() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Invalid Form');
    } else {
      let model = this.getUsuarioModelData();
      console.log(model);
      this.service.UserRegister(model).subscribe(data => {
        console.log(data);
        if (data) {
          ShowNotificationMessage('Registration has been successful. You cand found the password in your mail inbox.');
          this.router.navigate(['/inicio/login']);
        } else {
          ShowNotificationMessage('Error registering data.');
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
    model.genero=this.fgv.genero.value
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
