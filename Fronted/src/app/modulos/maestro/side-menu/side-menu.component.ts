import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';




@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLogged: Boolean;
  rol: number ;
  subscription1: Subscription;
  subscription2: Subscription;

  constructor(private serviceusuario: InicioService,
     private serviceadmin: AdminService ) { }

  ngOnInit(): void {
    this.subscription1 = this.serviceusuario.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
      this.rol = data.rol;
      console.log("ROle: " + this.rol);
      console.log("Data: ");
      console.log(data);
    });

    this.subscription2 = this.serviceadmin.getadminData().subscribe(data => {
      this.isLogged = data.isLogged;
      this.rol = data.rol;
      console.log("ROle: " + this.rol);
      console.log("Data: ");
      console.log(data);
    });
  }

}
