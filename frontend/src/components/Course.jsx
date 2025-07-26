import React from 'react'
import { useState } from 'react';
import Cards from './Cards';
import { useEffect } from 'react';
import axios from 'axios';
export default function Course() {
  const [book, setBook] = useState([]);
  useEffect(() =>{
   const getBook = async()=>{
        try {
        const res= await  axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
   }
   getBook();
  },[]);
    
  return (
   <>
    <div className='pl-20 flex flex-row my-10 items-center text-center justify-center'>
          <div className='mt-30  '>
            <h1 className='text-2xl font-semibold '>We're delighted to have you <span className='text-primary'>here</span>!</h1>
            <p className='mt-10 mr-10'>Welcome to the Courses section of our digital Bookstore — your gateway to deep learning and immersive reading. Here, you’ll find a curated collection of premium, paid books spanning a wide range of topics including programming, business, self-growth, design, and much more. Each course offers full access to carefully selected eBooks, allowing you to read, learn, and grow from anywhere. Whether you're a student, a professional, or a curious learner, this space is designed to elevate your knowledge through high-quality paid content. Dive in, choose a course, and start reading books that matter.

</p>

           <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 ' >{
               book.map((item)=>(
                <Cards key={item.id} item ={item} />
               ))

               
         }
          </div>

          </div>
        
    </div>
   </>
  )
}
