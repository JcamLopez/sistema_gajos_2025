import { NextResponse } from 'next/server'
import { registroVehiculo } from '@/services/backend/vehiculoServices';
import { vehiculoSchema } from '@/schemas/vehiculoSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO VEHICULO -------------")
        console.log(body)
        const parsed = vehiculoSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroVehiculo(parsed.data)
        return NextResponse.json(
            { mensaje: "Vehiculo registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /vehiculo', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}