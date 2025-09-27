import {z} from 'zod';

export const vehiculoSchema = z.object({
    placa: z.string().regex(/^[A-Z]{1,3}\d{1,3}$/, {message: 'La placa debe tener entre 1 y 3 letras seguidas de 1 a 3 dígitos.'}),
    modelo: z.string().min(1, {message: "Introducir el modelo es obligatorio"}),
    marca_carro: z.string().min(1, {message: "Introducir la marca es obligatorio"}),
})

export type vehiculoPayLoad = z.infer<typeof vehiculoSchema>;