import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
 

  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact  />} />
      </Routes>
      <Footer></Footer>

    </>
  )
}

export default App
