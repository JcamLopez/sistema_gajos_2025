import { NextResponse } from 'next/server'
import { registroSuministro } from '@/services/backend/suministroServices';
import { suministroSchema } from '@/schemas/suministroSchema';
import registro from '@/components/usuario/registro';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO SUMINISTRO -------------")
        console.log(body)
        const parsed = suministroSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registroSuministro(parsed.data)
        return NextResponse.json(
            { mensaje: "Suministro registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /suministro', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}