import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioService } from '../servicios_de_inicio/inicio.service';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { Observable } from 'rxjs';

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

  editRecord(record: UsuarioModel): Observable<UsuarioModel> {
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
