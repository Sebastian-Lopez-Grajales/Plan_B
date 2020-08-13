import { AdminModel } from './admin.model';
import { ImagenModel } from './imagen.model';

export class PublicidadModel {
    id_publicidad?: String;
    nombre?: String;
    contenido?: String;
    fecha?: String;
    orden?: number;
    id_administrador?: String;
    id_muro?:String;
    id_imagen?:String;
    imagen?: ImagenModel;
    publicidad?: AdminModel;
    


}