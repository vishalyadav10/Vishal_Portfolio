import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import HomePage from './components/Home/HomePage';
import SkillsPage from './components/Skills/SkillsPage';
import ProjectsPage from './components/Projects/ProjectsPage';
import ContactPage from './components/Contact/ContactPage';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <HomePage />
        <About/>
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

export default App