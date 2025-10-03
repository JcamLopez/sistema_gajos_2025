import { NextResponse } from 'next/server'
import { registroTipo } from '@/services/backend/tipodocumentoServices';
import { tipoSchema } from '@/schemas/tipodocumentoSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO TIPO -------------")
        console.log(body)
        const parsed = tipoSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroTipo(parsed.data)
        return NextResponse.json(
            { mensaje: "Tipo de documento registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /tipo de documento', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}