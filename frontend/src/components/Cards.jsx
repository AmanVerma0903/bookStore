import React from 'react'

  export default function Cards({item}) {
    console.log(item);
  return (
    <>
    <div>
    <div className="card bg-base-200 w-96 shadow-sm mt-10 my-3 hover:scale-105 duration-100  rounded-4xl">
  <figure className='h-60 w-full '>
    <img className='w-full  '
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-primary ">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline badge-primary hover:bg-primary duration-100 px-2 py-1 text-white">BUY</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
