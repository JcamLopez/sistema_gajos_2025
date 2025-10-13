import { NextResponse } from 'next/server'
import { registrollanta } from '@/services/backend/llantaServices';
import { llantaSchema } from '@/schemas/llantaSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO LLANTA -------------")
        console.log(body)
        const parsed = llantaSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registrollanta(parsed.data)
        return NextResponse.json(
            { mensaje: "Llanta registrada con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /llanta', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}