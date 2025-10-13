import {z} from 'zod';

export const llantaSchema = z.object({
    tipo_llanta: z.string().min(1 , {message:"Ingrese el tipo de llanta"}),
    descripcion: z.string().min(1, {message:"Ingrese la descripción de la llanta"})
})

export type llantaPayLoad = z.infer<typeof llantaSchema>;