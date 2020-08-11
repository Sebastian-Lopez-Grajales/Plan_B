import { AdminModel } from './admin.model';
import { MuroModel } from './muro.model';

export class PublicidadModel {
    id_publicidad?: String;
    nombre?: String;
    contenido?: String;
    fecha?: String;
    order?: number;
    id_administrador?: AdminModel;
    id_muro?: MuroModel

}