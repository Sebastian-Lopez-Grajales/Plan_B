import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { ServiceConfig } from '../../config/service.config';
import { UsuarioModel} from '../../modelos/usuario.model';
import { AdminModel } from 'src/app/modelos/admin.model';
import {  ResetModel} from 'src/app/modelos/reset.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  usuarioData = new BehaviorSubject<UsuarioModel>(new UsuarioModel());
  adminData = new BehaviorSubject<AdminModel>(new AdminModel());
  usuarios: String = 'usuarios';

  constructor(
    private http: HttpClient
  ) {
  }


  /**
   * Verify if the user in session has the roleId parameter
   * @param roleId role to verify
   */
  issuper(roleId): Boolean {
    let currentSession = this.getsesion();
    return JSON.parse(currentSession).rol == roleId;
  }

  isuser(roleId): Boolean {
    let currentSession = this.getsesion();
    return JSON.parse(currentSession).rol >= roleId;
  }

  isadmin(roleId): Boolean {
    let currentSession = this.getsesion();
    return JSON.parse(currentSession).rol >= roleId;
  }

  /**
   * modificar usuario almacenado
   */
  setusuarioData(value: UsuarioModel) {
    this.usuarioData.next(value);
  }

    /**
   * modificar admin almacenado
   */
  setadminData(value: AdminModel) {
    this.adminData.next(value);
  }


  /**
   * verifica credenciales usuario para entrar
   * @param model 
   */
  LoginUsuario(model: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}login-usuario`, model, {
      headers: new HttpHeaders({
      })
    })
  }

   /**
   * verifica credenciales admin para entrar
   * @param model 
   */
  Loginadmin(model: AdminModel): Observable<AdminModel> {
    return this.http.post<AdminModel>(`${ServiceConfig.BASE_URL}login-admin`, model, {
      headers: new HttpHeaders({
      })
    })
  }


    /**
   * permite crear un usuario nuevo
   */
  Registrarusuario(model: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.usuarios}`, model, {
      headers: new HttpHeaders({

      })
    })
  }

   /**
   * Guarda info de nueva sesion
   * 
   */
  guardarsesion(sessionData: any): Boolean {
    console.log(sessionData);
    let currentSession = localStorage.getItem('session');
    if (currentSession) {
      console.log("Already exist")
      return false;
    } else {
      if (sessionData.data.rol==0){
        let data: UsuarioModel = {
          id_usuario: sessionData.data.id_usuario,
          nombre_usuario: sessionData.data.nombre_usuario,
          token: sessionData.token,
          isLogged: true,
          rol: sessionData.data.rol
        };
        localStorage.setItem('session', JSON.stringify(data));
        this.setusuarioData(data);
        return true;
      }else{
        let data: AdminModel = {
          correo: sessionData.data.correo,
          token: sessionData.token,
          isLogged: true,
          rol: sessionData.data.rol
        };
        localStorage.setItem('session', JSON.stringify(data));
        this.setadminData(data);
        return true;

      }
      
    }
  }


  /**
   * Regresa el token guardado
   */
  getToken(): String {
    let currentSession = this.getsesion();
    return JSON.parse(currentSession).token;
  }


  /**
   * Return info de sesion guardada
   */
  getsesion() {
    let currentSession = localStorage.getItem('session');
    //console.log(currentSession);
    return currentSession;
  }

  /**
   * verifica si hay o no sesion
   */
  sessionExists(): Boolean {
    return (this.getsesion()) ? true : false;
  }

    /**
   * resetea clave olvidada
   */
  claveolvidada(model: ResetModel): Observable<Boolean> {
    return this.http.post<Boolean>(`${ServiceConfig.BASE_URL}password-reset`, model, {
      headers: new HttpHeaders({
      })
    })
  }

      /**
   * close the current session
   */
  Logout() {
    localStorage.removeItem('session');
    this.setusuarioData(new UsuarioModel());
    this.setadminData(new AdminModel());
  }

  getUserData() {
    return this.usuarioData.asObservable();
  }

  getadminData() {
    return this.adminData.asObservable();
  }
}
