import { useState } from 'react'
import './App.css'
import Header from './Pages/Header/Header'
import Hero from './Pages/HeroSection/Hero'
import About from './Pages/About/About'
import GetInToch from './Pages/Contact/GetInToch'
import Footer from './Pages/Footer/Footer'
import Worked from './Pages/WorkExperience/Worked'
import Built from './Pages/Built/Built'
import OtherProjects from './Pages/OtherProjects/OtherProjects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full flex flex-col items-center justify-center '>
      <Header />
      <Hero />
      <About />
      <Worked />
      <Built />
      <OtherProjects />
      <GetInToch />
      <Footer />
    </div>
  )
}

export default App
