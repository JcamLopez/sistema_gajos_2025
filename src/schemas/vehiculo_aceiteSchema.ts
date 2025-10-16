import {z} from 'zod';

export const vehiculo_aceiteSchema = z.object({
    id_aceite: z.int().min(1 , {message:"Ingrese la ID del aceite"}),
    id_placa: z.string().regex(/^[A-Za-z]{3}[0-9]{3}$/, {message: "La placa debe tener 3 letras seguidas y 3 números seguidos (ej: ABC123)"}),
    fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {message: "La fecha debe tener el formato YYYY-MM-DD"}),
})

export type vehiculo_aceitePayLoad = z.infer<typeof vehiculo_aceiteSchema>;