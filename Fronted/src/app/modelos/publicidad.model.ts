import { AdminModel } from './admin.model';

export class PublicidadModel {
    id_publicidad?: String;
    nombre?: String;
    contenido?: String;
    fecha?: String;
    orden?: number;
    id_administrador?: String;
    publicidad?: AdminModel;
    
}