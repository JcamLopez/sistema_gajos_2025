import {z} from 'zod';

export const usuarioSchema = z.object({
    usuario: z.string().min(1, {message: "Introducir el modelo es obligatorio"}),
    contraseña: z.string().min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
        .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
        .regex(/[0-9]/, "Debe contener al menos un número"),
})

export type usuarioPayLoad = z.infer<typeof usuarioSchema>;