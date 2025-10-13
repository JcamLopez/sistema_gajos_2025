import {db} from '@/libs/db'
import { mantenimientoPayLoad } from '@/schemas/mantenimientoSchema'

const connection = await db.getConnection();
export async function registromantenimiento(data: mantenimientoPayLoad) {
    
    await connection.execute(
        'INSERT INTO MANTENIMIENTO (ID_PLACA, DESCRIPCION) VALUES (?, ?)',
        [
            data.id_placa,
            data.descripcion
        ]
    );
}