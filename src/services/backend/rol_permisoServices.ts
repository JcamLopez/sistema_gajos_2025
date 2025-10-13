import {db} from '@/libs/db'
import { rol_permisoPayLoad } from '@/schemas/rol_permisoSchema'

const connection = await db.getConnection();
export async function registrorol_permiso(data: rol_permisoPayLoad) {
    
    await connection.execute(
        'INSERT INTO ROL_TIENE_PERMISO (ID_ROL, ID_PERMISO, ESTADO) VALUES (?, ?. ?)',
        [
            data.id_rol,
            data.id_permiso,
            1
        ]
    );
}