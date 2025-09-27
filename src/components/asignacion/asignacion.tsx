import Card from '@/components/ui/card/card'
import Stile from './asignacion.module.css'
import Select from '@/components/ui/select/selector'
import { SelectOption } from '@/types/ui/select'
import { useEffect, useState } from 'react'

export default function Asignacion() {
  const [trabajador, setTrabajador] = useState<SelectOption[]>([]);
  useEffect(() => {

    /*      obtenerTiposDeDocumento().then((dato) => {
             const opciones = dato.map((data) => ({
                 label: data.id,
                 value: data.id,
             }));
             setTipos(opciones)
         }); */


  }, [])



  return (
    <div>
      <Select label='' name='' options={trabajador}/>
    </div>
  )
}
