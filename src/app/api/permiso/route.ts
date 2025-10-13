import { NextResponse } from 'next/server'
import { registropermiso } from '@/services/backend/permisoServices';
import { permisoSchema } from '@/schemas/permisoSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO PERMISO -------------")
        console.log(body)
        const parsed = permisoSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registropermiso(parsed.data)
        return NextResponse.json(
            { mensaje: "Mantenimiento registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /permiso', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}