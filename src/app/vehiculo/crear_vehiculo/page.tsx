import React from 'react'
import Vehiculo from '@/components/vehiculo/vehiculo'
import Style from './vehiculo.module.css'
export default function Page() {
  return (
    <div className={Style.contenedor}> 
      <Vehiculo/>
    </div>
  )
}
