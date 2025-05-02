import { React, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Container';
import { ScrollToTop } from './ScrollToTop';
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
  return (
    <div className='App'>
      <Router>
      <ScrollToTop /> 
        <Header/>
        <Routes>
        <Route
            path="/"
            element={
              <div>
              <Container><Cover /></Container>
              <Container><About /></Container>
              <Container><Skills /></Container>
              <Container><Project /></Container>
              <Container><Contact /></Container>
              </div>
            }
          />
           <Route path="/projectDetail/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
