import { NextResponse } from 'next/server'
import { registroSeleccion } from '@/services/backend/seleccionServices';
import { seleccionSchema } from '@/schemas/seleccionSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO SELECCION -------------")
        console.log(body)
        const parsed = seleccionSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroSeleccion(parsed.data)
        return NextResponse.json(
            { mensaje: "Seleccion registrada con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /seleccion', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}