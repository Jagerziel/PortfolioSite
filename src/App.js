//Module Imports
import { Routes, Route } from "react-router-dom";
//Component Imports
import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Portfolio from "./screens/Portfolio.jsx";
import Contact from "./screens/Contact.jsx";

//CSS Import
import './App.css';

function App() {
  return (
    <div className="App">
      TEST
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
