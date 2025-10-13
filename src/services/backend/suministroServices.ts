import {db} from '@/libs/db'
import { suministroPayLoad } from '@/schemas/suministroSchema'

const connection = await db.getConnection();
export async function registroSuministro(data: suministroPayLoad) {
    
    await connection.execute(
        'INSERT INTO SUMINISTRAR (ID_PLACA, ID_COMBUSTIBLE, KILOMETRAJE, FECHA_SUMINISTRO, GALONES, HORA_SUMINISTRO) VALUES (?, ?, ?, ?, ?, ?)',
        [
            data.id_placa,
            data.id_combustible,
            data.kilometraje,
            data.fecha_suministro,
            data.galones,
            data.hora_suministro
        ]
    );
}