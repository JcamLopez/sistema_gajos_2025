import {z} from 'zod';

export const suministroSchema = z.object({
    id_placa: z.string().regex(/^[A-Za-z]{3}[0-9]{3}$/, {message: "La placa debe tener 3 letras seguidas y 3 números seguidos (ej: ABC123)"}),
    id_combustible: z.int().min(1, {message: "Ingrese la ID del combustible"}),
    kilometraje: z.string().min(1, {message: "Ingrese el kilometraje"}),
    fecha_suministro: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {message: "La fecha debe tener el formato YYYY-MM-DD"}),
    galones: z.string().min(1, {message: "Ingrese la cantidad de galones"}),
    hora_suministro: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, {message: "La hora debe estar en formato HH:mm (ej: 08:30, 23:45)",}),

})

export type suministroPayLoad = z.infer<typeof suministroSchema>;