import {db} from '@/libs/db'
import { tipoPayLoad } from '@/schemas/tipodocumentoSchema'

const connection = await db.getConnection();
export async function registroTipo(data: tipoPayLoad) {
    
    await connection.execute(
        'INSERT INTO TIPO_DOCUMENTO (TIPO_DOCUMENTO, ESTADO) VALUES (?, ?)',
        [
           data.tipo_documento,
           1
        ]
    );
}