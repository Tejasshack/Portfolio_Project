import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Banner from '../sections/Banner'
import Experience from '../sections/Experience'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Banner />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
