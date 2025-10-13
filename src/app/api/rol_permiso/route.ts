import { NextResponse } from 'next/server'
import { registrorol_permiso } from '@/services/backend/rol_permisoServices';
import { rol_permisoSchema } from '@/schemas/rol_permisoSchema';

export async function POST(req:Request) {
    try {
        const body = await req.json();
        console.log("------------- REGISTRO ROL_PERMISO -------------")
        console.log(body)
        const parsed = rol_permisoSchema.safeParse(body);
       if (!parsed.success) {
            return NextResponse.json(
                { error: 'Error al registrar, verifique la información', detalles: parsed.error.format() },
                { status: 400 }
            );
       }
    registrorol_permiso(parsed.data)
        return NextResponse.json(
            { mensaje: "ROL_PERMISO registrado con éxito." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en POST /rol_permiso', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}