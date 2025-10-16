import { NextResponse } from 'next/server'
import { registroVehiculo_llanta } from '@/services/backend/vehiculo_llantaServices';
import { vehiculo_llantaSchema } from '@/schemas/vehiculo_llantaSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO VEHICULO TIENE LLANTA -------------")
        console.log(body)
        const parsed = vehiculo_llantaSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroVehiculo_llanta(parsed.data)
        return NextResponse.json(
            { mensaje: "Vehiculo registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /vehiculo tiene llanta', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}