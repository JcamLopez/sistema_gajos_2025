import {db} from '@/libs/db'
import { rolPayLoad } from '@/schemas/rolSchema'

const connection = await db.getConnection();
export async function registroRol(data: rolPayLoad) {
    
    await connection.execute(
        'INSERT INTO ROL (NOMBRE_ROL, DESCRIPCION, ESTADO) VALUES (?, ?, ?)',
        [
            data.nombre_rol,
            data.descripcion,
            1
        ]
    );
}