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
  userData = new BehaviorSubject<UsuarioModel>(new UsuarioModel());
  adminData = new BehaviorSubject<AdminModel>(new AdminModel());
  entity: String = 'usuarios';

  constructor(
    private http: HttpClient
  ) {
  }


  setUserDatausuario(value: UsuarioModel) {
    this.userData.next(value);
  }
  setUserDataadmin(value: AdminModel) {
    this.adminData.next(value);
  }


  /**
   * Verify credentials of an user to login
   * @param model Data to verify credentials
   */
  LoginUser(model: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}login-usuario`, model, {
      headers: new HttpHeaders({
      })
    })
  }

   /**
   * Verify credentials of an user to login
   * @param model Data to verify credentials
   */
  Loginadmin(model: AdminModel): Observable<AdminModel> {
    return this.http.post<AdminModel>(`${ServiceConfig.BASE_URL}login-admin`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  UserRegister(model: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}`, model, {
      headers: new HttpHeaders({

      })
    })
  }
   /**
   * Save data of new session
   * @param sessionData Object with user in session data
   */
  saveSession(sessionData: any): Boolean {
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
        this.setUserDatausuario(data);
        return true;
      }else{
        let data: AdminModel = {
          correo: sessionData.data.correo,
          token: sessionData.token,
          isLogged: true,
          rol: sessionData.data.rol
        };
        localStorage.setItem('session', JSON.stringify(data));
        this.setUserDataadmin(data);
        return true;

      }
      
    }
  }


  /**
   * Return the token string
   */
  getToken(): String {
    let currentSession = this.getSession();
    return JSON.parse(currentSession).token;
  }


  /**
   * Return data of session
   */
  getSession() {
    let currentSession = localStorage.getItem('session');
    //console.log(currentSession);
    return currentSession;
  }

  /**
   * Verify if a session is active
   */
  sessionExists(): Boolean {
    return (this.getSession()) ? true : false;
  }

  ResetPassword(model: ResetModel): Observable<Boolean> {
    return this.http.post<Boolean>(`${ServiceConfig.BASE_URL}password-reset`, model, {
      headers: new HttpHeaders({
      })
    })
  }
}
