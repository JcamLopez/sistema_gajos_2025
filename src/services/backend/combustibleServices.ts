import {db} from '@/libs/db'
import { combustiblePayLoad } from '@/schemas/combustibleSchema'

const connection = await db.getConnection();
export async function registroCombustible(data: combustiblePayLoad) {
    
    await connection.execute(
        'INSERT INTO COMBUSTIBLE (ESTADO, NOMBRE_COMBUSTIBLE) VALUES (?, ?)',
        [
            1,
            data.nombre_combustible
        ]
    );
}