import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container-fluid d-flex bg-dark-subtle">
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
      </div>

      <div>
        <div className="bg-dark">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
