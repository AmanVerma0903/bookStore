import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/footer'

export default function Home() {
   return (
      <>
        
          <div className="min-h-screen bg-base-100 text-white">
        <Navbar />
        <Banner />
        <FreeBook />
        <Footer />
        
  
      </div>
        
      </>
   )
}
