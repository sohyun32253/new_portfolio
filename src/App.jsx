import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Header from './components/Header';
import Cover from './components/Cover';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project'
import ProjectPopUp from './components/ProjectPopUp';
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
        <Route
            path="/"
            element={
              <>
                <Cover />
                <About />
                <Skills />
                <Project />
                <Contact />
              </>
            }
          />
           <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
