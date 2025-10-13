import {z} from 'zod';

export const mantenimientoSchema = z.object({
    id_placa: z.string().regex(/^[A-Za-z]{3}[0-9]{3}$/, {message: "La placa debe tener 3 letras seguidas y 3 números seguidos (ej: ABC123)"}),
    descripcion: z.string().min(1, {message:"Ingrese la descripción de la llanta"})
})

export type mantenimientoPayLoad = z.infer<typeof mantenimientoSchema>;