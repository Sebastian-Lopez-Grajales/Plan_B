import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioService } from '../servicios_de_inicio/inicio.service';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/modelos/admin.model';
import { ServiceConfig } from 'src/app/config/service.config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  entity: String = 'administradores';
  token: String;
  filter: String = '?filter={"include":[{"relation":"publicidades"},{"relation":"id_usuario"},{"relation":"denuncias"}]}';

  constructor(private http: HttpClient,
    private securityService: InicioService) {
    this.token = this.securityService.getToken();
  }

  /**
   * Get all records of course collection
   */
  getAllRecords(): Observable<AdminModel[]> {
    return this.http.get<AdminModel[]>(`${ServiceConfig.BASE_URL}${this.entity}${this.filter}`);
  }

  getRecordById(recordId: String): Observable<AdminModel> {
    return this.http.get<AdminModel>(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`);
  }

  saveNewRecord(record: AdminModel): Observable<AdminModel> {
    return this.http.post<AdminModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  editRecord(record: AdminModel): Observable<AdminModel> {
    return this.http.put<AdminModel>(`${ServiceConfig.BASE_URL}${this.entity}/${record.id_administrador}`, record, {
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
