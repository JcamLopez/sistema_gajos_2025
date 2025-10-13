import {z} from 'zod';

export const rol_permisoSchema = z.object({
    id_rol: z.int().min(1 , {message:"Ingrese la ID del rol"}),
    id_permiso: z.int().min(1, {message:"Ingrese la ID del permiso"}),
    estado: z.boolean()
})

export type rol_permisoPayLoad = z.infer<typeof rol_permisoSchema>;