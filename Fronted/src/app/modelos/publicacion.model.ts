import { MuroModel } from './muro.model';
import {DenunciaModel } from './denuncia.model';
import { UsuarioModel } from './usuario.model';
import { ComentarioModel } from './comentario.model';

export class PublicacionModel {
    id_publicacion?: String;
    texto?: String;
    me_gusta?: number;
    no_gusta?: number;
    compartido: number;
    fecha?: String;
    usuarioId?: UsuarioModel;
    muroId?: MuroModel;
    denuncias?: DenunciaModel;
    comentarios?: ComentarioModel

}