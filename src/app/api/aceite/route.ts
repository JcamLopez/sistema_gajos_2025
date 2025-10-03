import { NextResponse } from 'next/server'
import { registroAceite } from '@/services/backend/aceiteServices';
import { aceiteSchema } from '@/schemas/aceiteSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO ACEITE -------------")
        console.log(body)
        const parsed = aceiteSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroAceite(parsed.data)
        return NextResponse.json(
            { mensaje: "Aceite registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /aceite', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}