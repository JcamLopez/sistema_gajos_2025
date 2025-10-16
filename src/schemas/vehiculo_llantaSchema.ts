import {z} from 'zod';

export const vehiculo_llantaSchema = z.object({
    id_llanta: z.int().min(1),
    id_placa: z.string().regex(/^[A-Za-z]{3}[0-9]{3}$/, {message: "La placa debe tener 3 letras seguidas y 3 números seguidos (ej: ABC123)"})
})

export type vehiculo_llantaPayLoad = z.infer<typeof vehiculo_llantaSchema>;