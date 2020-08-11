import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isLogged: Boolean=true;
  rol: number=3 ;
  subscription: Subscription;


  constructor(private serviceusuario: InicioService,
     ) { }

  ngOnInit(): void {
    /**
     *     this.subscription = this.serviceusuario.getUserData().subscribe(data => {
      this.isLogged = data.isLogged;
      this.rol = data.rol;
      console.log("ROle: " + this.rol);
      console.log("Data: ");
      console.log(data);
    });
  

     */

  }
}
