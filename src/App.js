//Module Imports
import { Routes, Route } from "react-router-dom";
//Page Component Imports
import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Portfolio from "./screens/Portfolio.jsx";
import Contact from "./screens/Contact.jsx";
//Component Imports
import NavBar from "./components/NavBar.jsx";
import BottomBar from "./components/BottomBar.jsx";
//CSS Import
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BottomBar />
      </div>
    </>
  );
}

export default App;
