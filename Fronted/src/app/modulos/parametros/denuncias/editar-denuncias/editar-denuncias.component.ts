import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ParametrosService } from 'src/app/servicios/servicios_de_parametros/parametros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { DenunciaModel } from 'src/app/modelos/denuncia.model';


declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-denuncias',
  templateUrl: './editar-denuncias.component.html',
  styleUrls: ['./editar-denuncias.component.css']
})
export class EditarDenunciasComponent implements OnInit {


  fgValidator: FormGroup;
  minLengthName: number = FormsConfig.MIN_LENGTH;
  maxLengthCode: number = FormsConfig.MAX_LENGTH;
  publicacionList: PublicacionModel[];
  administradorList: AdminModel[];

  constructor(
    private fb: FormBuilder,
    private service: ParametrosService,
    private router: Router,
    private adminservice: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.get();
    this.rellenaradmin();
    this.rellenarpublicacion();
    this.FormBuilding();
  }

  get() {
    let id = this.route.snapshot.params["id_denuncia"];
    this.service.getdenuncia(id).subscribe(
      data => {
        this.fgv.id_denuncia.setValue(data.id_denuncia);
        this.fgv.archivo_prueba.setValue(data.archivo_prueba);
        this.fgv.descripcion.setValue(data.descripcion);
        this.fgv.fecha.setValue(data.fecha);
        this.fgv.administradorId.setValue(data.administradorId);
        this.fgv.publicacionId.setValue(data.publicacionId);
        this.fgv.titulo.setValue(data.titulo);
        this.fgv.resuelto.setValue(data.resuelto);
      },
      err => {

      }
    );
  }

  rellenaradmin() {
    this.adminservice.getadministradores().subscribe(
      data => {
        this.administradorList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista de usuarios.");
      }
    );
  }

  rellenarpublicacion() {
    this.service.getpublicaciones().subscribe(
      data => {
        this.publicacionList = data;
      },
      error => {
        ShowNotificationMessage("Error cargando lista de usuarios.");
      }
    );
  }


  FormBuilding() {
    this.fgValidator = this.fb.group({
      archivo_prueba: ['', [Validators.required]],
      id_denuncia: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required, Validators.email]],
      administradorId: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      publicacionId: ['', [Validators.required]],
      titulo:['',[Validators.required]],
      resuelto:['',[Validators.required]]
    });
  }

  editar() {
    if (this.fgValidator.invalid) {
      ShowNotificationMessage('Formulario Ivalido');
    } else {
      let model = this.getRecordData();
      console.log(model)
      this.service.editdenuncia(model).subscribe(
        data => {
          ShowNotificationMessage('Actualizacion Completa');
          this.router.navigate(['/denuncia/lista-denuncia']);
        },
        error => {
          ShowNotificationMessage('Error en la Actualizacion.');
        }
      );
    }
  }


  getRecordData(): DenunciaModel {
    let model = new DenunciaModel();
    model.administradorId = this.fgv.administradorId.value;
    model.archivo_prueba = this.fgv.archivo_prueba.value;
    model.descripcion = this.fgv.descripcion.value;
    model.fecha = this.fgv.fecha.value;
    model.id_denuncia = this.fgv.id_denuncia.value;
    model.publicacionId = this.fgv.publicacionId.value;
    model.titulo=this.fgv.titulo.value;
    model.resuelto=this.fgv.resuelto.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }
}
