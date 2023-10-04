import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  );
}

export default App;
