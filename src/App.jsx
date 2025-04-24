import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Header from './components/Header';
import Cover from './components/Cover';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project'
import Project01 from './components/Project01'
import Project02 from './components/Project02'
import Contact from './components/Contact';

function App() {
  return(
    <div className='App'>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Project01" element={<Project01 />} />
            <Route path="/Project02" element={<Project02 />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
      </Router>
    </div>
  )
}
export default App;
