import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Fronted';
  sesion:Boolean;
  
  constructor(private serviceusuario: InicioService,
     private router: Router ) { }

  ngOnInit(): void {
   let sesion=this.serviceusuario.getSession();
   if (!sesion){
      this.router.navigate(["/inicio/login-usuario"]);
   }


  }
}

