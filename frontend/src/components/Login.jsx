import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Login() {
const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit =async (data) => {
      const userdata = {
        
        email: data.email,
        password : data.password
      }
      console.log(userdata);
      await axios.post("https://bookstore-zii3.onrender.com/user/login", userdata)
      .then((res)=>{
    
        if(res.data){
       
      
       
        toast.success("Login Successful");
        setTimeout(()=>{
            localStorage.setItem("User",JSON.stringify(res.data.user));//store user data in local storage so that we can use it later for authentication in frontend ab local storage se kahi bhi use kar skte hai 
          document.getElementById('my_modal_3').close()
          window.location.reload(); //reload the page to reflect the changes
        },1500)
        }
      })
      .catch((err)=>{
        
       if(err.response ) {
        console.log(err);
          toast.error(err.response.data.message);
          
        } 
      }
    )}

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} >
            {/* Close button */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>

            <h3 className="font-bold text-lg">Login!</h3>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='mt-2 w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
               <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Enter your password'
                className='mt-2 w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
               <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-primary mt-8 border rounded-md px-4 py-1 font-semibold hover:bg-blue-900'>
                Login
              </button>
              <p className='mt-10 font-light'>
                Not registered?
                <Link to="/signup" className="underline text-blue-500 ml-1 cursor-pointer">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}
