import {db} from '@/libs/db'
import { aceitePayLoad } from '@/schemas/aceiteSchema'

const connection = await db.getConnection();
export async function registroAceite(data: aceitePayLoad) {
    
    await connection.execute(
        'INSERT INTO ACEITE (TIPO_ACEITE, FECHA, DESCRIPCION) VALUES (?, ?, ?)',
        [
            data.tipo_aceite,
            data.fecha,
            data.descripcion,
        ]
    );
}