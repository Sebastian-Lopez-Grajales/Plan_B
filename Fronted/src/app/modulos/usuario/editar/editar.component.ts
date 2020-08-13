import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { UsuarioService } from 'src/app/servicios/servicios_de_usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/modelos/usuario.model';

declare const ShowNotificationMessage: any;


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  fgValidator: FormGroup;
  document_min_length: number = FormsConfig.MIN_LENGTH;
  document_max_length: number = FormsConfig.MAX_LENGTH;

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getuser();
    this.FormBuilding();
  }

  getuser() {
    let id = this.route.snapshot.params["id_usuario"];
    this.service.getusuario(id).subscribe(
      data => {
        this.fgv.primer_apellido.setValue(data.primer_apellido);
        this.fgv.primer_nombre.setValue(data.primer_nombre);
        this.fgv.segundo_apellido.setValue(data.segundo_apellido);
        this.fgv.segundo_nombre.setValue(data.segundo_nombre);
        this.fgv.genero.setValue(data.genero);
        this.fgv.nacimiento.setValue(data.nacimiento);
        this.fgv.celular.setValue(data.celular);
        this.fgv.ciudad.setValue(data.ciudad);
        this.fgv.correo.setValue(data.correo);
        this.fgv.nombre_usuario.setValue(data.nombre_usuario);
 
        
      },
      err => {

      }
    );
  }

  
  FormBuilding() {
    this.fgValidator = this.fb.group({

      primer_nombre: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      segundo_nombre: ['', [ Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      primer_apellido: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      segundo_apellido: ['', [ Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      nombre_usuario: ['', [ Validators.required,Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      correo: ['', [Validators.required, Validators.email]],
      ciudad: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      nacimiento: [''],
      codigo: ['+57'],
      genero: ['', [Validators.required, Validators.minLength(this.document_min_length), Validators.maxLength(this.document_max_length)]],
      foto: ['', [Validators.required]],
    });
  }

  editar() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getUsuarioModelData();
      console.log(model)
      this.service.editarusuario(model).subscribe(
        data => {
          ShowNotificationMessage('Actualizacion Completa');
          this.router.navigate(['/maestro/home']);
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
  getUsuarioModelData(): UsuarioModel {
    let model = new UsuarioModel();
    model.primer_nombre = this.fgv.primer_nombre.value;
    model.segundo_nombre = this.fgv.segundo_nombre.value;
    model.primer_apellido = this.fgv.primer_apellido.value;
    model.segundo_apellido = this.fgv.segundo_apellido.value;
    model.nombre_usuario = this.fgv.nombre_usuario.value;
    model.correo = this.fgv.correo.value;
    model.ciudad = this.fgv.ciudad.value;
    model.celular=`${this.fgv.codigo.value}${this.fgv.celular.value}`;
    model.nacimiento=this.fgv.nacimiento.value;
    model.genero=this.fgv.genero.value;
    model.rol=0;
    model.foto=this.fgv.foto.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
