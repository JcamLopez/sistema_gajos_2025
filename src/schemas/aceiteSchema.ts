import {z} from 'zod';

export const aceiteSchema = z.object({
    tipo_aceite:z.string().min(1 , {message:"Ingrese el tipo de aceite"}),
    fecha:z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {message: "La fecha debe tener el formato YYYY-MM-DD"}),
    descripcion:z.string().min(1, {message:"Ingrese la descripción del aceite"})
})

export type aceitePayLoad = z.infer<typeof aceiteSchema>;