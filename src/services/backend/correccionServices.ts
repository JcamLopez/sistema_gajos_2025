import {db} from '@/libs/db'
import { correccionPayLoad } from '@/schemas/correccionSchema'

const connection = await db.getConnection();
export async function registroCorreccion(data: correccionPayLoad) {
    
    await connection.execute(
        'INSERT INTO CORRECCION (ID_PLACA, DESCRIPCION, UBICACION) VALUES (?, ?, ?)',
        [
            data.id_placa,
            data.descripcion,
            data.ubicacion
        ]
    );
}