import {db} from '@/libs/db'

const connection = await db.getConnection();
export async function consultarVehiculo() {
     const [rows] = await db.query('SELECT ID_VEHICULO AS IP, PLACA AS P, MODELO AS M, MARCA_CARRO AS MC, ESTADO AS E FROM VEHICULO AS V ');
        const vehiculo = (rows as any[]).map((row) => ({
            ID_VEHICULO: row.IP,
            PLACA: row.P,
            MODELO: row.M,
            MARCA_CARRO: row.MC,
            ESTADO: row.E
        }));
        return vehiculo;
}