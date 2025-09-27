import {db} from '@/libs/db'
import { vehiculoPayLoad } from '@/schemas/vehiculoSchema'

const connection = await db.getConnection();
export async function registroVehiculo(data: vehiculoPayLoad) {
    
    await connection.execute(
        'INSERT INTO VEHICULO(MODELO, MARCA_CARRO, ESTADO) VALUES (?, ?, ?)',
        [
            data.modelo,
            data.marca_carro,
            1
        ]
    );
}