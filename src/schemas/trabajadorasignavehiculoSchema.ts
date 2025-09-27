
import {z} from 'zod';

export const AsignacionSchema = z.object({
    trabajador: z.string().min(1, {message: "El documento es obligatorio"}),
   
    vehiculo: z.string().min(1, {message: "El primer nombre es obligatorio"}),

    marca: z.string().min(1, {message: "la marca es obligatoria"}),
 
})

export type AsignacionPayLoad = z.infer<typeof AsignacionSchema>;