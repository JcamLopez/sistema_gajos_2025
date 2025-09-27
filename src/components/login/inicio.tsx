import Card from '@/components/ui/card/card'
import Input from '@/components/ui/input/campos'
import style from './login.module.css'



function Inicio() {
  return (
    <Card className={style.card}> 
      <img src="/img/Logo_gajos_blanco.jpg" alt="Logo"  className={style.logo}/>
       <div className={style.login}>
        <h1>iniciar sesion</h1>
       </div>
       <Input label='usuario' name='' placeholder='ingresa tu usuario'/>
       <Input label='contraseña' name='' type='password' placeholder='ingresa tu contraseña'/>
    </Card>
  )
}

export default Inicio
