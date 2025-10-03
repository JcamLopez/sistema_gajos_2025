import {db} from '@/libs/db'

const connection = await db.getConnection();
export async function consultarTrabajador() {
     const [rows] = await db.query('SELECT DOCUMENTO AS D, N1, N2, AP1, AP2, ESTADO AS E FROM TRABAJADOR AS T ');
        const trabajador = (rows as any[]).map((row) => ({
            id: row.D,
            N1: row.N1,
            N2: row.N2,
            A1: row.AP1,
            A2: row.AP2,
            E: row.E
        }));
        return trabajador;
}