import {db} from '@/libs/db'
import { vehiculo_aceitePayLoad } from '@/schemas/vehiculo_aceiteSchema'

const connection = await db.getConnection();
export async function registroVehiculo_aceite(data: vehiculo_aceitePayLoad) {
    
    await connection.execute(
        'INSERT INTO VEHICULO_SUMINISTRO_ACEITE (ID_ACEITE, ID_PLACA, FECHA) VALUES (?, ?, ?)',
        [
         data.id_aceite,
         data.id_placa,
         data.fecha
        ]
    );
}