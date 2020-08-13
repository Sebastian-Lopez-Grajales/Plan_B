import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  LoginadminComponent} from './login_admin/login_admin.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginusuarioComponent } from './login_usuario/login_usuario.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { FooterComponent } from './footer/footer.component';
import { OlvidarComponent } from './olvidar/olvidar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent,
     LoginusuarioComponent,
      RegistrarComponent, 
      FooterComponent, 
      OlvidarComponent,
      LoginadminComponent
    
    ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent
    
  ]
})
export class InicioModule { }
