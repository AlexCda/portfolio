import { useState } from 'react'
import './App.css'
import MainHeader from './components/Header/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader/>
    </>
  )
}

export default App
