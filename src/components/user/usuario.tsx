import Card from '@/components/ui/card/card'
import Input from '@/components/ui/input/campos'
import estilos from './user.module.css'
function Usuario() {
  return (
    <Card className={estilos.card}>
      <div className={estilos.contenedor_fotos}>
        <img src="/img/Logo_gajos.jpg" alt="Logo" className={estilos.logo} />
      </div>
       
      <form action="" className={estilos.formGrid}>
     <h1>REGISTRO</h1>
     <Input label='Primer nombre' name='n1' placeholder='Primer nombre'/>
     <Input label='Segundo nombre' name='n2' placeholder='Segundo nombre'/>
     <Input label='Primer apellido' name='ap1' placeholder='Primer apellido'/>
     <Input label='Segundo apellido' name='ap2' placeholder='Segundo nombre'/>
     <Input label='Tipo de documento' name='td1' placeholder='Tipo de documento'/>
     <Input label='Numero de documento' name='nd1' placeholder='n° de documento'/>
      </form>
      
    </Card>

  )
}

export default Usuario
