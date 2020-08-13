import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioService } from '../servicios_de_inicio/inicio.service';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { Observable } from 'rxjs';
import {  ChangePasswordModel} from 'src/app/modelos/change-password.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  entity: String = 'usuarios';
  token: String;

  constructor(private http: HttpClient,
    private inicioService: InicioService) {
    this.token = this.inicioService.getToken();
  }

  /**
   * Get all records of area collection
   */
  getAllRecords(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  getRecordById(recordId: String): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }

  saveNewRecord(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
  getUserId(): String {
    let currentSession = this.getSession();
    return JSON.parse(currentSession).id;
  }

    /**
   * Get de un solo administrador
   */
  getusuario(recordId: String): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }

  ChangePassword(model: ChangePasswordModel): Observable<Boolean> {
    return this.http.post<Boolean>(`${ServiceConfig.BASE_URL}change-password`, model, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.getToken()}`
      })
    })
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

  editRecord(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id_usuario}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
        /**
   * Editar un usuario
   */
  editarusuario(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id_usuario}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  removeRecord(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
  
  

}
