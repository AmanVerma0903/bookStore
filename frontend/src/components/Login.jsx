import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
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
