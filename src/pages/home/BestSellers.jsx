import React, {useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import Card from "../../components/Card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function BestSellers() {
    const [products, setProducts] = useState([])

    useEffect( () => {
        const fetchProducts = async() => {
            try{
                const result = await fetch('/products.json');
                const data = await result.json()
            
                setProducts(p => data.filter(items => items.status === 'Best Selers'))
            }catch(err){
                console.log(err.message)
            }
        }
        fetchProducts()
    } ,[])

    
    
    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 my-16 text-center'>
        <div>
            <h2 className='title'>Best Sellers</h2>
            <p className='text-black capitalize md:w-2/3 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ab. Sapiente quidem laboriosam non vel aliquid, quas excepturi a assumenda.</p>
        </div>


        {/* swiper js*/}
       
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop = {true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          450: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
     

      
      {
        products.map((product) => (
          <SwiperSlide key={product.id}>
             <div className=' mt-16'>
            <Link to={`/product/${product.id}`}>
                  
                
                  <img src={product.image} alt={product.id} className='w-full mx-auto hover:scale-110 duration-500'/>
              </Link>
              <div className="mt-4 px-4">
                <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
              </div>
              <div className='px-4 flex justify-between mb-2'>
                <p className='text-black/50'>{product.category}</p>
                <p className='font-semibold'>${product.price}</p>
              </div>
              
              </div>
          </SwiperSlide>
        
        ))
      }
       
      </Swiper>
    
        
    </div>
  )
}

export default BestSellers