import { UsuarioModel } from './usuario.model';
import { PublicacionModel } from './publicacion.model';

export class ComentarioModel {
    id_comentario?: String;
    texto?: String;
    fecha?: String;
    publicacion?: PublicacionModel;
    publicacionId?:String;
    usuario?:UsuarioModel;
    usuarioId?:String;

}