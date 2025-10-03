import {z} from 'zod';

export const tipoSchema = z.object({
    tipo_documento: z.string().min(1, {message:"Ingrese el tipo de documento"}),
})

export type tipoPayLoad = z.infer<typeof tipoSchema>;