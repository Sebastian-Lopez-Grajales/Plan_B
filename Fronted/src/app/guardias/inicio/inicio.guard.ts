import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';


@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {

  constructor(private servicio_usuario: InicioService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.servicio_usuario.sessionExists()) {
        this.router.navigate(["/home"]);
        return false;
      } else {
        return true;
      }
  }
  
}
