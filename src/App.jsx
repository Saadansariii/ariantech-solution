import './App.css'
import Navbar from './component/Navbar'
import Card  from './component/Card'
import Hero from './component/Hero'
import OurClient from './component/OurClient'
import Member from './component/Member'
import Collegue from './component/Collegue'
import Values from './component/Values'
import Testimonial from './component/Testimonial'
import Heroimg from './component/Heroimg'
import OurProject from './component/OurProject'
import Footer from './component/Footer'


function App() {
 

  return (
    <>
      <Navbar/>
      <Heroimg/>
      <Hero/>
      <Card/>
      <OurClient/>
      <Collegue/>
      <Member/>
      <Values/>
      <Testimonial/>
      <OurProject/>
      <Footer/>
    </>
  )
}



export default App
