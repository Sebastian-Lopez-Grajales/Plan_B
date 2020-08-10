import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaestroRoutingModule } from './maestro-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { ListaPublicacionesComponent } from './lista-publicaciones/lista-publicaciones.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SideMenuComponent,
    HomeComponent,
    ListaPublicacionesComponent
  ],
  imports: [
    BrowserModule,
    MaestroRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class MaestroModule { }
