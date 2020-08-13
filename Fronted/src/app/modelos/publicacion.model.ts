import { UsuarioModel } from './usuario.model';

export class PublicacionModel {
    id_publicacion?: String;
    nombre?:String;
    texto?: String;
    me_gusta?: number;
    no_gusta?: number;
    fecha?: String;
    imagen?:String;
    usuario?: UsuarioModel;
    usuarioId?:String;

}