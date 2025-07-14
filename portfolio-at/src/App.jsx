
import { Route, Routes } from 'react-router-dom'
import MainHeader from './components/Header/MainHeader'
import Navbar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <>
      <MainHeader />
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
    </>
  )
}

export default App
