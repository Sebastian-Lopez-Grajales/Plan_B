import { PublicacionModel } from './publicacion.model';
import { AdminModel} from './admin.model';


export class DenunciaModel {
    id_denuncia?: String;
    archivo_prueba?: String;
    titulo?:String;
    descripcion?: String;
    fecha?: String;
    publicacion?:PublicacionModel;
    publicacionId?:String;
    administrador?:AdminModel;
    administradorId?:String;
    resuelto?:String;
}