import { PublicacionModel } from './publicacion.model';
import { AdminModel} from './admin.model';

export class DenunciaModel {
    id_denuncia?: String;
    archivo_prueba?: String;
    descripcion?: String;
    fecha?: String;
    publicacionid?: PublicacionModel;
    administradorId?: AdminModel
}