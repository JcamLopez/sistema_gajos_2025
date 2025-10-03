import {z} from 'zod';

export const vehiculoSchema = z.object({
    id_placa: z.string().regex(/^[A-Za-z]{3}[0-9]{3}$/, 
{message: "La placa debe tener 3 letras seguidas y 3 números seguidos (ej: ABC123)"}),
    modelo: z.string().min(1 , {message:"Debe ingresar el modelo del vehículo"}),
    marca_carro: z.string().min(1, {message:"Debe ingresar el modelo del vehículo"}),
})

export type vehiculoPayLoad = z.infer<typeof vehiculoSchema>;