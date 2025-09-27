"use client";

import Card from '@/components/ui/card/card'
import Stile from './asignacion.module.css'
import Select from '@/components/ui/select/selector'
import { SelectOption } from '@/types/ui/select'
import { useEffect, useState } from 'react'
import { obtenerTrabajador } from '@/services/frontend/trabajadorServices'
import {obtenerVehiculo} from '@/services/frontend/VehiculoServices'
import { useForm } from 'react-hook-form';
import { trabajadorSchema, trabajadorPayLoad } from '@/schemas/trabajadorSchema'
import {AsignacionPayLoad, AsignacionSchema} from '@/schemas/trabajadorasignavehiculoSchema'
import { zodResolver } from "@hookform/resolvers/zod";


export default function Asignacion() {
  const [trabajador, setTrabajador] = useState<SelectOption[]>([]);
  const [marca, setMarca] = useState<SelectOption[]>([]);
  useEffect(() => {

    obtenerTrabajador().then((dato) => {
      const opciones = dato.map((data) => ({
        label: data.N1,
        value: data.N1,
      }));
      setTrabajador(opciones)
    }); 
obtenerVehiculo().then((dato) => {
      const opciones = dato.map((data) => ({
        label: data.MARCA_CARRO,
        value: data.MARCA_CARRO,
      }));
      setMarca(opciones)
    }); 

  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AsignacionPayLoad>({
    resolver: zodResolver(AsignacionSchema),
  });




  return (
    <Card className={Stile.Card}>
      <Select className={Stile.select_trabajador}
        label="TRABAJADOR"
        name="trabajador"
        options={trabajador}
        register={register('trabajador')}
      />


        <Select
        label="MARCA"
        name="marca"
        options={marca}
        register={register('marca')}



      />
    </Card>
  )
}