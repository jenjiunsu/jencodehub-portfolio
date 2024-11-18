import Girl from "./sections/Girl"
import Navbar from "./sections/Navbar"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from "./sections/Experience"

function App() {
  return (
    <main className='max-w-8xl mx-auto relative'>
      <Navbar />
      <Girl />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
