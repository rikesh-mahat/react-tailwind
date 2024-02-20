import React from 'react'
import {Link} from 'react-router-dom'
function Card({products}) {

  console.log(products)
  return (
    <div className='max-h-90 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 items-center justify-center gap-4 px-4 shadow-sm outline-none border-none'>{
        products.map((item) => {

          return(
            <div key={item.id} className='border-2'>
                <Link to={`/shop/${item.id}`}>
                  
                
                    <img src={item.image} alt={item.id} className='w-full mx-auto hover:scale-110 duration-500'/>
                </Link>
                <div className="mt-4 px-4">
                  <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
                </div>
                <div className='px-4 flex justify-between mb-2'>
                  <p className='text-black/50'>{item.category}</p>
                  <p className='font-semibold'>${item.price}</p>
                </div>
            </div>
          )
        })
    }</div>
  )
}

export default Card