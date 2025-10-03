import {z} from 'zod';

export const combustibleSchema = z.object({
    nombre_combustible:z.string().min(1 , {message:"Ingrese el nombre del combustible"})
})

export type combustiblePayLoad = z.infer<typeof combustibleSchema>;