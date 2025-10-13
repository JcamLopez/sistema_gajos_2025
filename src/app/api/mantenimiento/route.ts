import { NextResponse } from 'next/server'
import { registromantenimiento } from '@/services/backend/mantenimientoServices';
import { mantenimientoSchema } from '@/schemas/mantenimientoSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO MANTENIMIENTO -------------")
        console.log(body)
        const parsed = mantenimientoSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registromantenimiento(parsed.data)
        return NextResponse.json(
            { mensaje: "Mantenimiento registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /mantenimiento', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}