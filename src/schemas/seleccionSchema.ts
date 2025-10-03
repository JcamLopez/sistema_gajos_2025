import {z} from 'zod';

export const seleccionSchema = z.object({
    documento: z.string().min(1, {message: "El documento es obligatorio"}).max(10, {message: "El documento debe tener máximo 10 dígitos"}),
    id_placa: z.string().regex(/^[A-Za-z]{3}[0-9]{3}$/, {message: "La placa debe tener 3 letras seguidas y 3 números seguidos (ej: ABC123)"}),
    km_inicial: z.number().min(1, {message: "Debe ingresar el kilometraje"}),
    km_final: z.number().min(1, {message: "Debe ingresar el kilometraje"}),
    fecha_inicial: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {message: "La fecha debe tener el formato YYYY-MM-DD"}),
    fecha_final: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {message: "La fecha debe tener el formato YYYY-MM-DD"}),
    hora_inicio: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, {message: "La hora debe estar en formato HH:mm (ej: 08:30, 23:45)",}),
    hora_fin: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, {message: "La hora debe estar en formato HH:mm (ej: 08:30, 23:45)",}),
    novedades: z.string().optional(),
})

export type seleccionPayLoad = z.infer<typeof seleccionSchema>;