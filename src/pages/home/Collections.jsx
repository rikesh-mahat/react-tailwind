import React from 'react'
import Collection from '/collection-bg.png'
function Collections() {
  return (
    <div className='relative w-full h-72 md:h-[500px] mb-4 flex justify-end'>
            <img src={Collection} alt="here is a collection" className='w-full h-full absolute -z-10'/>
        <div className='z-1 w-2/5 flex flex-col justify-center md:gap-8 gap-4 mb:px-24'>
            <h1 className='text-white md:text-9xl text-7xl'>Zara</h1>
            <p className='text-white/70 sm:text-sm font-semibold capitalize w-4/5'>Lustrous yet Understated. The New Evening wear collection exclusively offered at the reopened giorgio armani
            boutique in los angeles</p>
            <button className='bg-white/90 py-3 w-40 font-semibold text-black/80'>See Collection</button>
        </div>
    </div>
  )
}

export default Collections