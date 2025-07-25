import React from 'react'


export default function Banner() {
  return (
    <>
    <div className='pl-20 flex flex-row my-10'>
        <div className='w-full md:w-1/2 mt-32 mr-20'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'> Step Into a World Where Every Page Whispers a <span className='text-primary'>New Beginning!!</span></h1>
        <p className='text-xl'> Dive into the finest collection of books handpicked for curious minds.  
            From timeless classics to modern tales — your next adventure starts </p>
        </div>
        <div className='mt-15'>
        <label className="input validator bg-transparent">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>

</div>
<button className="btn btn-primary mt-6">Sign Up</button>
        </div>
        <div className='w-full md:w-1/2 mr-5'  >
        <img src="/book.jpg" alt="banner" className='w-3xl  mt-25  h-max rounded-4xl ' />
        </div>
    </div>
    </>
  )
}
