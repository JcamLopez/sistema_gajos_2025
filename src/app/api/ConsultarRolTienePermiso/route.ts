import { NextResponse } from 'next/server'
import { consultarRolTienePermiso } from '@/services/backend/ConsultaRolTienePermisoService';

export async function GET() {
    try {
        console.log("------------- LISTA DE ROL-PERMISO -------------")
        const trabajador = await consultarRolTienePermiso();
        return NextResponse.json(trabajador); 
    } catch (error) {
        console.error('Error en GET /Rol permiso', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}