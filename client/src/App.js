import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer">
          {/* Your Volunteer component */}
        </Route>
        <Route path="/audition">
          {/* Your Audition component */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/donate">
          {/* Your Donate component */}
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
