import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { ServiceConfig } from 'src/app/config/service.config';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {

  entity: String = 'publicaciones';
  token: String;
  filter: String = '?filter={"include":[{"relation":"usuario"}]}';
 descarga: String = '/files/{3}/{recordId}';
  constructor(private http: HttpClient) {
    
  }

  /**
   * Get all records of course collection
   */
  getAllRecords(): Observable<PublicacionModel[]> {
    return this.http.get<PublicacionModel[]>(`${ServiceConfig.BASE_URL}${this.entity}${this.filter}`);
  }
}
 
