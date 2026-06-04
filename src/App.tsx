import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Gradient mesh background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="mesh-blob" style={{ width: 1400, height: 1400, background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 60%)', top: '-25%', right: '-20%', animation: 'blob1 90s ease-in-out infinite' }} />
        <div className="mesh-blob" style={{ width: 1000, height: 1000, background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 60%)', bottom: '-15%', left: '-20%', animation: 'blob2 110s ease-in-out infinite' }} />
        <div className="mesh-blob" style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 60%)', top: '40%', left: '35%', animation: 'blob3 130s ease-in-out infinite' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
