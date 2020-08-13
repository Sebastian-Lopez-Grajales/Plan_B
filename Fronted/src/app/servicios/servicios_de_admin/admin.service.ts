import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioService } from '../servicios_de_inicio/inicio.service';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { UsuarioModule } from 'src/app/modulos/usuario/usuario.module';
import { UsuarioModel } from 'src/app/modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  administradores: String = 'administradores';
  usuarios: String = 'usuarios';
  token: String;
  filteradministrador: String = '?filter={"include":[{"relation":"administrador"}]}';
  filterusuario: String = '?filter={"include":[{"relation":"administradores"}]}';


  constructor(private http: HttpClient,
    private inicioService: InicioService) {
    this.token = this.inicioService.getToken();
  }

  /**
   * Get de todos los administradores
   */
  getadministradores(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(`${ServiceConfig.BASE_URL}${this.administradores}${this.filteradministrador}`);
  }

   /**
   * Get de todos los usuarios
   */
  getusuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${ServiceConfig.BASE_URL}${this.usuarios}${this.filterusuario}`);
  } 

 
  /**
   * Get de un solo administrador
   */
  getadministrador(recordId: String): Observable<AdminModel> {
    return this.http.get<AdminModel>(`${ServiceConfig.BASE_URL}${this.administradores}/${recordId}`);
  }
    /**
   * Get de un solo usuario
   */
  getusuario(recordId: String): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.usuarios}/${recordId}`);
  }

    /**
   * Guardar un nuevo administrador
   */
  guardaradministrador(record: AdminModel): Observable<AdminModel> {
    return this.http.post<AdminModel>(`${ServiceConfig.BASE_URL}${this.administradores}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
      /**
   * Guardar un nuevo usuario
   */
  guardarusuario(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.usuarios}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
    /**
   * Editar un administrador
   */
  editaradministrador(record: AdminModel): Observable<AdminModel> {
    return this.http.put<AdminModel>(`${ServiceConfig.BASE_URL}${this.administradores}/${record.id_administrador}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
      /**
   * Editar un usuario
   */
  editarusuario(record: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.usuarios}/${record.id_usuario}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }


    /**
   * eliminar un administrador
   */
  eliminaradmnistrador(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.administradores}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

      /**
   * eliminar un usuario
   */
  eliminarusuario(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.usuarios}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
