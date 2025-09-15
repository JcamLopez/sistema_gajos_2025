import estilo from './style.module.css'
import Formulario from '@/components/user/usuario'
function Page() {
  return (
    <div className={estilo.container}> 
      <Formulario/>
    </div>
  )
}

export default Page
