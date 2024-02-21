import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
  
  const {id} = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const result = await fetch('/products.json')
        const data = await result.json()
        
        setProduct(p => data.filter(item => item.id == id))
      }catch(err){
        console.log(err.message)
      }
    }

    fetchData()
  }, [id])

 
  const {title, category, price, image, status} = product[0] || {}
  
  
  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-6 sm:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 h-max'>
              <div>
                
                  <img src={image} alt={title} />
                
              </div>

              <div>
                  <h1 className='title text-left'>{title}</h1>
                  <p className='mt-3 sm:mt-4 text-gray-600 text-base leading-6 sm:text-left text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, exercitationem architecto autem molestias repellat praesentium necessitatibus corporis sed sapiente iusto deleniti consequuntur veniam qui deserunt laboriosam et laudantium eaque omnis, velit sequi maxime! Voluptatum, odit numquam consequatur esse ipsam dolorum!</p>
                  
                  <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>

                
              </div>

              <div className='text-left flex flex-col gap-3 w-full mt-9'>
                  <label className='font-semibold'>Quantity</label>
                  <input type="number" name="price" id="price" placeholder='1' min={1} className='border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full
                  outline-none rounded-md m-0 py-3 px-4 focus:border-red-500'/>

                  <div>
                    <button className='text-md font-semibold text-gray-100 bg-red-500 w-full h-14 hover:text-red-500 hover:bg-white hover:border-2 hover:border-red-300 duration-500'>Purchase Item</button>
                  </div>
                </div>

            </div>

            <div className='px-5'>
              <h1 className='title text-left -ml-5'>Features</h1>
              <ol className='list-disc'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim delectus illum quisquam magnam voluptates doloremque earum consectetur cumque. Quibusdam, debitis.</li>
              </ol>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage