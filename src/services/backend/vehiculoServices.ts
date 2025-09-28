import {db} from '@/libs/db'
import { vehiculoPayLoad } from '@/schemas/vehiculoSchema'

const connection = await db.getConnection();
export async function registroVehiculo(data: vehiculoPayLoad) {
    
    await connection.execute(
        'INSERT INTO VEHICULO(PLACA, MODELO, MARCA_CARRO, ESTADO) VALUES (?, ?, ?, ?)',
        [
            data.placa,
            data.modelo,
            data.marca_carro,
            1
        ]
    );
}