import { NextResponse } from 'next/server'
import { registroTrabajador } from '@/services/backend/trabajadorServices';
import { trabajadorSchema } from '@/schemas/trabajadorSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRADO -------------")
        console.log(body)
        const parsed = trabajadorSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroTrabajador(parsed.data)
        return NextResponse.json(
            { mensaje: "Trabajador registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /trabajador', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}