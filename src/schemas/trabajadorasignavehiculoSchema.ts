
import {z} from 'zod';

export const vehiculoSchema = z.object({
    trabajador: z.string().min(1, {message: "El documento es obligatorio"}),
   
    vehiculo: z.string().min(1, {message: "El primer nombre es obligatorio"}),
 
})

export type trabajadorPayLoad = z.infer<typeof vehiculoSchema>;