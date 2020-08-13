import { PublicidadModel } from './publicidad.model';
import { UsuarioModel } from './usuario.model';
import { DenunciaModel } from './denuncia.model';

export class AdminModel {
    clave?: String;
    correo?: String;
    id_administrador?: String;
    rol?: number;
    isLogged?: Boolean ;
    token?: String;
    administrador?:UsuarioModel;
    id_usuario?: String;
    celular?:String

}
