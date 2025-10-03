import { NextResponse } from 'next/server'
import { registroRol } from '@/services/backend/rolServices';
import { rolSchema } from '@/schemas/rolSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO ROL -------------")
        console.log(body)
        const parsed = rolSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroRol(parsed.data)
        return NextResponse.json(
            { mensaje: "Rol registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /rol', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}