import './App.css'
import Navbar from './components/individualComponents/components/Navbar'
import Footer from './components/individualComponents/components/Footer'
import About from './components/pages/pages/About'
import Home from './components/pages/pages/Home'
import Volunteer from './components/pages/pages/Volunteer'
import Audition from './components/pages/pages/Audition'
import Donate from './components/pages/pages/Donate'
import Contact from './components/pages/pages/Contact'
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
