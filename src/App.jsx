import React from 'react'
import Background3D from './compunents/Background3D'
import Navbar from './compunents/Navbar'
import Hero from './compunents/Hero'
import About from './compunents/About'
import Skills from './compunents/Skills'
import Projects from './compunents/Projects'
import Education from './compunents/Education'
import Contact from './compunents/Contact'
import Footer from './compunents/Footer'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Ambient 3D Constellation Particle Canvas */}
      <Background3D />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
