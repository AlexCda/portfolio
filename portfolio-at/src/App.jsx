
import { Route, Routes } from 'react-router-dom'
import MainHeader from './components/Header/MainHeader'
import Navbar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import Footer from './components/Footer/Footer'
import FormationPage from './pages/FormationPage/FormationPage'

function App() {

  return (
    <>
      <MainHeader />
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path="/formation" element={<FormationPage />} />
        <Route path="/contact" element={ <ContactPage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
