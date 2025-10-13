import {db} from '@/libs/db'
import { llantaPayLoad } from '@/schemas/llantaSchema'

const connection = await db.getConnection();
export async function registrollanta(data: llantaPayLoad) {
    
    await connection.execute(
        'INSERT INTO LLANTA (TIPO_LLANTA, DESCRIPCION) VALUES (?, ?)',
        [
            data.tipo_llanta,
            data.descripcion
        ]
    );
}