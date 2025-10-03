import {db} from '@/libs/db'
import { trabajadorPayLoad } from '@/schemas/trabajadorSchema'

const connection = await db.getConnection();
export async function registroTrabajador(data: trabajadorPayLoad) {
    
    await connection.execute(
        'INSERT INTO TRABAJADOR (DOCUMENTO, ID_TIPO, ID_ROL, N1, N2, AP1, AP2, ESTADO) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
         data.documento,
         data.id_tipo,
         data.id_rol,
         data.n1,
         data.n2,
         data.a1,
         data.a2,
         1
        ]
    );
}