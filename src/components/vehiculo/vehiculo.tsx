import Card from '@/components/ui/card/card'
import Input from '@/components/ui/input/campos'
import Estilo from './vehiculo.module.css'
export default function Vehiculo() {
  return (
    <Card className={Estilo.card}>
  
      <form action="" className={Estilo.formGrid}>
      <h1>vehiculo</h1>
     
     <Input label='Modelo de el vehiculo' name='mov' placeholder='coloca el modelo de el vehiculo'/>
     <Input label='Marca de el vehiculo' name='mav' placeholder='coloca la marca de el vehiculo'/>

      </form>
    </Card>

  )
}
