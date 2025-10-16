import {db} from '@/libs/db'
import { vehiculo_llantaPayLoad } from '@/schemas/vehiculo_llantaSchema'

const connection = await db.getConnection();
export async function registroVehiculo_llanta(data: vehiculo_llantaPayLoad) {
    
    await connection.execute(
        'INSERT INTO VEHICULO_TIENE_LLANTA (ID_LLANTA, ID_PLACA) VALUES (?, ?)',
        [
         data.id_llanta,
         data.id_placa
        ]
    );
}