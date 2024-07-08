import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const {imageUrl} = useCatImage({fact})

  const handleCLick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleCLick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>

    </main>
  )
}