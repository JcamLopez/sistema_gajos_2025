import {db} from '@/libs/db'
import { permisoPayLoad } from '@/schemas/permisoSchema'

const connection = await db.getConnection();
export async function registropermiso(data: permisoPayLoad) {
    
    await connection.execute(
        'INSERT INTO PERMISO (NOMBRE_PERMISO, ESTADO, DESCRIPCION) VALUES (?, ?. ?)',
        [
            data.nombre_permiso,
            1,
            data.descripcion
        ]
    );
}