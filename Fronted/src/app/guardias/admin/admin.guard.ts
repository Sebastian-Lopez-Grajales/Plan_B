import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/servicios/servicios_de_admin/admin.service';
import { InicioService } from 'src/app/servicios/servicios_de_inicio/inicio.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(private service: InicioService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.sessionExists() && this.service.issuper(3)) {
        return true;
      } else {
        this.router.navigate(["/inicio/login-usuario"]);
        return false;
      }
  }
  
}
