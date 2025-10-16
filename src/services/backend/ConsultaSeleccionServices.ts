import {db} from '@/libs/db'

const connection = await db.getConnection();
export async function consultarSeleccion() {
     const [rows] = await db.query('SELECT DOCUMENTO AS D, ID_PLACA AS IP, KILOMETRAJE_INICIAL AS KI, KILOMETRAJE_FINAL AS KF, FECHA_INICIO AS FI, FECHA_FINAL AS FF, HORA_INICIO AS HI, HORA_FINAL AS HF, NOVEDADES AS N FROM SELECCION AS S');
        const seleccion = (rows as any[]).map((row) => ({
            DOCUMENTO: row.D,
            ID_PLACA: row.IP,
            KILOMETRAJE_INICIAL: row.KI,
            KILOMETRAJE_FINAL: row.KF,
            FECHA_INICIO: row.FI,
            FECHA_FINAL: row.FF,
            HORA_INICIO: row.HI,
            HORA_FINAL: row.HF,
            NOVEDADES: row.N
            
        }));
        return seleccion;
}