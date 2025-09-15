import Card from '@/components/ui/card/card'
import Input from '@/components/ui/input/campos'
import estilos from './user.module.css'
function Usuario() {
  return (

    <Card className={estilos.card}>
      <form action="" className={estilos.formGrid}>
        <h1>esta es mi Card</h1>
     <Input label='primer nombre' name='n1' placeholder='primer nombre'/>
     <Input label='segundo nombre' name='n2' placeholder='segundo nombre'/>
     <Input label='tipo documento' name='n3' placeholder=''/>
     <Input label='segundo nombre' name='n1' placeholder='segundo nombre'/>
      </form>
      
    </Card>
  )
}

export default Usuario
