import { Component, OnInit } from '@angular/core';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-editar-publicaciones',
  templateUrl: './editar-publicaciones.component.html',
  styleUrls: ['./editar-publicaciones.component.css']
})
export class EditarPublicacionesComponent implements OnInit {


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
