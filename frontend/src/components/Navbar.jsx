import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';
export default function Navbar() {
 const [authUser] = useAuth();

  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
    if(window.scrollY>0){
      setSticky(true);
    }
    else{
      setSticky(false);
    }

    }
  window.addEventListener('scroll',handleScroll)
  return ()=>{
    window.removeEventListener('scroll',handleScroll);
  }
    
  })




      const navItems = (
    <>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Course</Link>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
    <div className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0   ${sticky?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out z-50":""}`}>
  <div className="navbar-start pl-20  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       

      </ul>
    </div>
    <a className=" text-3xl text-white font-bold cursor-pointer">Bookly</a>
  </div>
  <div className="navbar-end space-x-3">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navItems}
    </ul>
  </div>
  <label className="input  rounded-md outline-none focus:ring-0 focus:border-transparent">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" className="outline-none focus:ring-0 focus:border-transparent " />
</label>
{authUser ? (
  <Logout />
) : (
  <>
    <a
      className="btn rounded-md hover:bg-slate-800 cursor-pointer"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Login
    </a>
    <Login />
  </>
)

}
  </div>
</div>
    </>
  )
}
