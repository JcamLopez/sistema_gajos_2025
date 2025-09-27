import Asignacion from '@/components/asignacion/asignacion'
import Estilo from './asignacion.module.css'


export default function Page() {
  return (
    <div className={Estilo.contenedor}>
      <Asignacion/>
    </div>
  )
}
