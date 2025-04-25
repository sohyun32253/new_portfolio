import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Header from './components/Header';
import Cover from './components/Cover';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact';

function App() {
  return(
    <div className='App'>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/projectDetail/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </div>
  )
}
export default App;
