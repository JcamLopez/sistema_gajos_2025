import {z} from 'zod';

export const trabajadorSchema = z.object({
    documento: z.string().min(1, {message: "El documento es obligatorio"}),
    id_tipo: z.int(),
    n1: z.string().min(1, {message: "El primer nombre es obligatorio"}),
    n2: z.string().optional(),
    a1: z.string().min(1, {message: "El primer apellido es obligatorio"}),
    a2: z.string().min(1, {message: "El segundo apellido es obligatorio"})
})

export type trabajadorPayLoad = z.infer<typeof trabajadorSchema>;