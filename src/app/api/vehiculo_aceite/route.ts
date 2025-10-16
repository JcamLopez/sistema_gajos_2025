import { NextResponse } from 'next/server'
import { registroVehiculo_aceite } from '@/services/backend/vehiculo_aceiteServices';
import { vehiculo_aceiteSchema } from '@/schemas/vehiculo_aceiteSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO VEHICULO SUMINISTRO ACEITE -------------")
        console.log(body)
        const parsed = vehiculo_aceiteSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroVehiculo_aceite(parsed.data)
        return NextResponse.json(
            { mensaje: "Vehiculo registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /vehiculo tiene aceite', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}