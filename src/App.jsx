import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './Container';
import { ScrollToTop } from './ScrollToTop';
import './App.css'
import './index.css'
import Header from './components/Header';
import Cover from './components/Cover';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import GongchaDetail from './components/GongchaDetail';
import CircleDetail from './components/CircleDetail';
import ProjectPopUp from './components/ProjectPopUp';
import Contact from './components/Contact';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);
  return (
    <div className='App'>
      <Router>
      <ScrollToTop /> 
        <Header/>
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex justify-center items-center">
            <div className="relative w-[80%] max-w-[800px] bg-white p-10 rounded-lg">
              <button
                className="absolute top-4 right-4 text-xl font-bold z-[9999]"
                onClick={closeModal}
              >
                ✕
              </button>
              <ProjectPopUp project={selectedProject} onClose={closeModal} />
            </div>
          </div>
        )}
        <Routes>
        <Route
            path="/"
            element={
              <div>
              <Container><Cover /></Container>
              <Container><About /></Container>
              <Container><Skills /></Container>
              <Container> <Project onSelectProject={setSelectedProject} /> </Container>
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
