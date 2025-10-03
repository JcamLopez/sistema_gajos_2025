import { NextResponse } from 'next/server'
import { registroCorreccion } from '@/services/backend/correccionServices';
import { correccionSchema } from '@/schemas/correccionSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO CORRECCION -------------")
        console.log(body)
        const parsed = correccionSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroCorreccion(parsed.data)
        return NextResponse.json(
            { mensaje: "Correccion registrada con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /correccion', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}