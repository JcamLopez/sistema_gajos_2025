import { NextResponse } from 'next/server'
import { registroCombustible } from '@/services/backend/combustibleServices';
import { combustibleSchema } from '@/schemas/combustibleSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO COMBUSTIBLE -------------")
        console.log(body)
        const parsed = combustibleSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroCombustible(parsed.data)
        return NextResponse.json(
            { mensaje: "Combustible registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /combustible', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}