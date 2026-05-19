import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Projects from './components/Projects'
import WhoWeHelp from './components/WhoWeHelp'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <WhoWeHelp />
      </main>
      <Footer />
    </div>
  )
}
