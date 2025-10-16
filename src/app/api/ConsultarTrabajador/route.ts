import { NextResponse } from 'next/server'
import { consultarTrabajador } from '@/services/backend/ConsultaTrabajadorServices';

export async function GET() {
    try {
        console.log("------------- LISTA DE TRABAJADORES -------------")
        const trabajador = await consultarTrabajador();
        return NextResponse.json(trabajador); 
    } catch (error) {
        console.error('Error en GET /trabajador', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}