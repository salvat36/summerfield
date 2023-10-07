import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/pageViews/pages/About'
import Home from './components/Home'
import Volunteer from './components/Volunteer'
import Audition from './components/pageViews/pages/Audition'
import Donate from './components/pageViews/pages/Donate'
import Contact from './components/pageViews/pages/Contact'
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
