import {z} from 'zod';

export const rolSchema = z.object({
    nombre_rol:z.string().min(1,{message:"Ingrese el nombre del rol"}),
    descripcion:z.string().min(1,{message:"Ingrese la descripción del rol"}),
})

export type rolPayLoad = z.infer<typeof rolSchema>;