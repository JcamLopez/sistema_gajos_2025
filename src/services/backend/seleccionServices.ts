import {db} from '@/libs/db'
import { seleccionPayLoad } from '@/schemas/seleccionSchema'

const connection = await db.getConnection();
export async function registroSeleccion(data: seleccionPayLoad) {
    
    await connection.execute(
        'INSERT INTO SELECCION (DOCUMENTO, ID_PLACA, KILOMETRAJE_INICIAL, KILOMETRAJE_FINAL, FECHA_INICIO, FECHA_FINAL, HORA_INICIO, HORA_FINAL, NOVEDADES) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            data.documento,
            data.id_placa,
            data.km_inicial,
            data.km_final,
            data.fecha_inicial,
            data.fecha_final,
            data.hora_inicio,
            data.hora_fin,
            data.novedades
        ]
    );
}