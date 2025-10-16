import {db} from '@/libs/db'

const connection = await db.getConnection();
export async function consultarTrabajador() {
     const [rows] = await db.query('SELECT DOCUMENTO AS D, ID_TIPO AS IT, ID_ROL AS IR, N1, N2, AP1, AP2, ESTADO AS E FROM TRABAJADOR AS T');
        const trabajador = (rows as any[]).map((row) => ({
            DOCUMENTO: row.D,
            ID_TIPO: row.IT,
            ID_ROL: row.IR,
            PRIMER_NOMBRE: row.N1,
            SEGUNDO_NOMBRE: row.N2,
            PRIMER_APELLIDO: row.AP1,
            SEGUNDO_APELLIDO: row.AP2,
            ESTADO: row.E
        }));
        return trabajador;
}