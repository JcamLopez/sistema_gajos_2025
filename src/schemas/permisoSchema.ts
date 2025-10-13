import {z} from 'zod';

export const permisoSchema = z.object({
    nombre_permiso: z.string().min(1 , {message: "Ingrese el nombre del permiso"}),
    estado: z.boolean(),
    descripcion: z.string().min(1, {message: "Ingrese la descripción del permiso"})

})

export type permisoPayLoad = z.infer<typeof permisoSchema>;