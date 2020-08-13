import { AdminModel } from './admin.model';

export class UsuarioModel {
    id_usuario?: String;
    primer_nombre?: String;
    segundo_nombre?: String;
    primer_apellido?: String;
    segundo_apellido?: String;
    nombre_usuario?: String;
    rol?: number;
    correo?: String;
    clave?: String;
    ciudad?: String;
    celular?: String;
    nacimiento?: String;
    foto?: String;
    genero?: String;
    administrador?: AdminModel;
    administradorId?:String;
    isLogged?: Boolean;
    token?: String;
}
