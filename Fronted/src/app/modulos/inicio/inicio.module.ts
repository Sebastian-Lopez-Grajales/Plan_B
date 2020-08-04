import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavbarComponent, LoginComponent, RegistrarComponent, FooterComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
