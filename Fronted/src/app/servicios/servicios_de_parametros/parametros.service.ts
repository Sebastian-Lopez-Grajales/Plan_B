import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioService } from '../servicios_de_inicio/inicio.service';
import { Observable } from 'rxjs';
import { PublicidadModel } from 'src/app/modelos/publicidad.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { PublicacionModel } from 'src/app/modelos/publicacion.model';
import { DenunciaModel } from 'src/app/modelos/denuncia.model';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  publicidades: String = 'publicidades';
  denuncias: String = 'denuncias';
  publicaciones: String = 'publicaciones';
  token: String;
  filterpublicidad: String = '?filter={"include":[{"relation":"publicidad"},{"relation":"publicidadMuro"},{"relation":"imagen"}]}';
  filterpublicacion: String = '?filter={"include":[{"relation":"Usuario"},{"relation":"Imagen"}]}';
  filterdenuncias: String = '?filter={"include":[{"relation":"Publicaion"},{"relation":"Administrador"}]}';


  constructor(private http: HttpClient,
    private inicioService: InicioService) {
    this.token = this.inicioService.getToken();
  }

  /**
   * Get de todas las publicidades
   */
  getpublicidades(): Observable<PublicidadModel[]> {
    return this.http.get<PublicidadModel[]>(`${ServiceConfig.BASE_URL}${this.publicidades}${this.filterpublicidad}`);
  }

    /**
   * Get de todas las publicaciones
   */
  getpublicaciones(): Observable<PublicacionModel[]> {
    return this.http.get<PublicacionModel[]>(`${ServiceConfig.BASE_URL}${this.publicaciones}${this.filterpublicacion}`);
  }

    /**
   * Get de todas las denuncias
   */
  getdenuncias(): Observable<DenunciaModel[]> {
    return this.http.get<DenunciaModel[]>(`${ServiceConfig.BASE_URL}${this.denuncias}${this.filterdenuncias}`);
  }

    /**
   * Get de una sola publicidad
   */
  getpublicidad(recordId: String): Observable<PublicidadModel> {
    return this.http.get<PublicidadModel>(`${ServiceConfig.BASE_URL}${this.publicidades}/${recordId}`);
  }

      /**
   * Get de una sola publicacion
   */
  getpublicacion(recordId: String): Observable<PublicacionModel> {
    return this.http.get<PublicacionModel>(`${ServiceConfig.BASE_URL}${this.publicaciones}/${recordId}`);
  }

        /**
   * Get de una sola denuncia
   */
  getdenuncia(recordId: String): Observable<DenunciaModel> {
    return this.http.get<DenunciaModel>(`${ServiceConfig.BASE_URL}${this.denuncias}/${recordId}`);
  }

        /**
   * Guardar una nueva publicidad
   */
  guardarpublicidad(record: PublicidadModel): Observable<PublicidadModel> {
    return this.http.post<PublicidadModel>(`${ServiceConfig.BASE_URL}${this.publicidades}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }


        /**
   * Guardar una nueva publicacion
   */
  guardarpublicacion(record: PublicacionModel): Observable<PublicacionModel> {
    return this.http.post<PublicacionModel>(`${ServiceConfig.BASE_URL}${this.publicaciones}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  
        /**
   * Guardar una nueva denuncia
   */
  guardardenuncia(record: DenunciaModel): Observable<DenunciaModel> {
    return this.http.post<DenunciaModel>(`${ServiceConfig.BASE_URL}${this.denuncias}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

        /**
   * Editar una publicidad
   */
  editpublicidad(record: PublicidadModel): Observable<PublicidadModel> {
    return this.http.put<PublicidadModel>(`${ServiceConfig.BASE_URL}${this.publicidades}/${record.id_publicidad}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

          /**
   * Editar una publicacion
   */
  editpublicacion(record: PublicacionModel): Observable<PublicacionModel> {
    return this.http.put<PublicacionModel>(`${ServiceConfig.BASE_URL}${this.publicaciones}/${record.id_publicacion}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
            /**
   * Editar una denuncia
   */
  editdenuncia(record: DenunciaModel): Observable<DenunciaModel> {
    return this.http.put<DenunciaModel>(`${ServiceConfig.BASE_URL}${this.denuncias}/${record.id_denuncia}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

            /**
   * Eliminar una publicidad
   */
  eliminarpublicidad(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.publicidades}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
              /**
   * Eliminar una publicacion
   */
  eliminarpublicacion(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.publicaciones}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

              /**
   * Eliminar una denuncia
   */
  eliminardenuncia(recordId: String): Observable<any> {
    return this.http.delete<any>(`${ServiceConfig.BASE_URL}${this.denuncias}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }


}
