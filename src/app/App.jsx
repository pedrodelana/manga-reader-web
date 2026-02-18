import { useState } from 'react'
import './App.css'
import MangaList from '../busca'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ola</h1>
      <MangaList />
    </>
  )
}

export default App
