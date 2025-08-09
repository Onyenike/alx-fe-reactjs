
import './App.css'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>
     </Routes> 
    </>
  )
}

export default App
