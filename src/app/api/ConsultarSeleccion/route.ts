import { NextResponse } from 'next/server'
import { consultarSeleccion} from '@/services/backend/ConsultaSeleccionServices';

export async function GET() {
    try {
        console.log("------------- LISTA DE SELECCION -------------")
        const trabajador = await consultarSeleccion();
        return NextResponse.json(trabajador); 
    } catch (error) {
        console.error('Error en GET /seleccion', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}