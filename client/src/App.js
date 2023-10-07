import './App.css'
import Navbar from './components/individualComponents/components/Navbar'
import Footer from './components/individualComponents/components/Footer'
import About from './components/pages/Pages/About'
import Home from './components/pages/Pages/Home'
import Volunteer from './components/pages/Pages/Volunteer'
import Audition from './components/pages/Pages/Audition'
import Donate from './components/pages/Pages/Donate'
import Contact from './components/pages/Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/audition" element={<Audition />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
