import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Register from './Register'
import About from './About'
import Services from './Services'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
