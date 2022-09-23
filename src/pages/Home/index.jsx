import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Fulano" time="17:50:25"/>
      <Card name="Ciclano" time="18:53:06"/>
      <Card name="Beltrano" time="19:13:23"/>
    </div>
  )
}
