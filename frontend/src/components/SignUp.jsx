import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

export default function SignUp() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
  const navigate = useNavigate();
  const [, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    const userdata = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
         try {
       const res = await axios.post("http://localhost:3000/user/signup", userdata)
       if (res.data) {
         toast.success("Signup Successful");
         localStorage.setItem("User", JSON.stringify(res.data.newUser));
         // Update the authentication context state
         setAuthUser(res.data.newUser);
         navigate("/", { replace: true });
       }
     } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Signup failed");
      }
    }
  }

  return (
    <div className='bg-base-100 shadow-sm flex h-screen items-center justify-center'>
      <div id="my_modal_3">
        <div className='border rounded-2xl px-4 py-4 relative'>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button 
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10" 
              type="button"
              onClick={() => navigate("/")}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Signup!</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder='Enter your full name'
                className='mt-2 w-80 px-3 py-1 border rounded-md outline-none'
                {...register("fullname", { required: true })}
              />
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='mt-2 w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
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
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-primary mt-8 border rounded-md pl-2 pr-2 pt-1 pb-1 font-semibold hover:bg-blue-900'>Sign up</button>
              <p className='mt-10 font-light'>
                Have account?
                <Link to="/" className="underline text-blue-500 ml-1 cursor-pointer">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
