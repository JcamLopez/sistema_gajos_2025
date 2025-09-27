import { NextResponse } from 'next/server'
import { consultarVehiculo } from '@/services/backend/ConsultarVehiculoServices';

export async function GET() {
    try {
        console.log("------------- LISTA DE VEHICULOS -------------")
        const vehiculo = await consultarVehiculo();
        return NextResponse.json(vehiculo); 
    } catch (error) {
        console.error('Error en GET /vehiculo', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}