import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'



export default function Courses() {
 
  return (
    <>
    <div className='bg-base-100 shadow-sm'>
    <Navbar />
  
        <Course />
    
     
      <Footer />
     
    </div>
    </>
  )
}
