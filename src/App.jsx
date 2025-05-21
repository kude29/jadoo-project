import React from 'react'
import NavBar from './component/head/NavBar'
import { Home } from 'lucide-react'
import Homepage from './home/homepage'
import BestServices from "./bestServices/bestservice"
import BookingPage from './Booking/BookingPage'
import Testimonials from './Testimonials/Testimonials'
import LogoBar from './Logo/LogoBar'
import Subscribe from '../Subscribe/Subscribe'
import PageB from './PageB/PageB'
import Footer from './Footer/Footer'







function App() {
  return (
    <div className='App'>
      <NavBar />
      <Homepage />
      <BestServices />
      <PageB/>
      <BookingPage />
      <Testimonials />
      <LogoBar/>
      <Subscribe/>
      <Footer/>
      
     

    </div>
  )
}

export default App