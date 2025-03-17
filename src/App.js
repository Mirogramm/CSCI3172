import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import About from './About';
import Projects from './Projects';
import Footer from './components/Footer.js'
import Notfound from './Notfound.js';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
