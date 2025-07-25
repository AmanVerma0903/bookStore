import React from 'react'
import list from '../list.json'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards.jsx"

export default function FreeBook() {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
   const filterData = list.filter((data) => 
    data.category === "Free"
   )
   console.log(filterData);
  return (
    <>
    <div className='pl-20 my-10  mt-15'>
        <div>
                    <h1 className='text-xl  font-semibold pb-2'>Free Offered Courses</h1>
        <p className='font-extralight pt-3 pr-18 mb-10'>Discover a curated collection of high-quality books available completely free of cost. Whether you're looking to upskill, explore new topics, or dive deeper into your passions, these books are handpicked to help you grow without spending a penny. Start learning, growing, and exploring today with no subscriptions and no hidden fees.</p>
        </div>

    
    <div>
         <Slider {...settings}>
        {filterData.map((item)=>{
           return <Cards item = {item} key = {item.id}/>
        })}
      </Slider>

    </div>
    </div>
    </>
  )
}
