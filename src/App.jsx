import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Volunteering from './components/Volunteering'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Volunteering />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
