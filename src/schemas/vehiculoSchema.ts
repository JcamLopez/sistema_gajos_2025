import {z} from 'zod';

export const vehiculoSchema = z.object({
    modelo: z.string().min(1, {message: "Introducir el modelo es obligatorio"}),
    marca_carro: z.string().min(1, {message: "Introducir la marca es obligatorio"}),
})

export type vehiculoPayLoad = z.infer<typeof vehiculoSchema>;