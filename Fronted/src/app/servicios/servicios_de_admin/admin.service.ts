import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { ServiceConfig } from '../../config/service.config';
import { AdminModel} from '../../modelos/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminData = new BehaviorSubject<AdminModel>(new AdminModel());
  entity: String = 'administradores';

  constructor(
    private http: HttpClient
  ) {
    this.verifyActiveSession();
  }

  verifyActiveSession() {
    let currentSession = this.getSession();
    console.log(currentSession);
    if (currentSession) {
      let adminData = JSON.parse(currentSession);
      this.setadminData(adminData);
    }
  }

  setadminData(value: AdminModel) {
    this.adminData.next(value);
  }

  getadminData() {
    return this.adminData.asObservable();
  }

  /**
   * Verify credentials of an user to login
   * @param model Data to verify credentials
   */
  LoginAdmin(model: AdminModel): Observable<AdminModel> {
    return this.http.post<AdminModel>(`${ServiceConfig.BASE_URL}loginAdmin`, model, {
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

  /**
   * Verify if the user in session has the roleId parameter
   * @param roleId role to verify
   */
  isAdminRol(roleId): Boolean {
    let currentSession = this.getSession();
    console.log(currentSession);
    console.log("roleId: " + roleId);
    console.log(JSON.parse(currentSession).rol == roleId);
    return JSON.parse(currentSession).rol == roleId;
  }

  /**
   * Return the token string
   */
  getToken(): String {
    let currentSession = this.getSession();
    return JSON.parse(currentSession).token;
  }

  getAdminId(): String {
    let currentSession = this.getSession();
    return JSON.parse(currentSession).id;
  }


  /**
   * close the current session
   */
  Logout() {
    localStorage.removeItem('session');
    this.setadminData(new AdminModel());
  }

}
