import { UsuarioModel } from './usuario.model';
import { PublicacionModel } from './publicacion.model';
import { ImagenModel } from './imagen.model';

export class ComentarioModel {
    id_comentario?: String;
    texto?: String;
    me_gusta?: number;
    no_gusta?: number;
    fecha?: String;
    usuarioId?: UsuarioModel;
    publicacionId?: PublicacionModel;
    imagenId?: ImagenModel


}