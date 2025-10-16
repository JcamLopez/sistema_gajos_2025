import {db} from '@/libs/db'

const connection = await db.getConnection();
export async function consultarRolTienePermiso() {
     const [rows] = await db.query('SELECT ID_ROL_PERMISO AS IRP, ID_ROL AS IR, ID_PERMISO AS IP, ESTADO AS E FROM ROL_TIENE_PERMISO AS RTP');
        const RolTienePermiso = (rows as any[]).map((row) => ({
            ID_ROL_PERMISO: row.IRP,
            ID_ROL: row.IR,
            ID_PERMISO: row.IP,
            ESTADO: row.E
            
        }));
        return RolTienePermiso;
}