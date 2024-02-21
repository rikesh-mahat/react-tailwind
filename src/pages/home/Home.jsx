import React from 'react'
import Banner from './Banner.jsx'
import Category from './Category.jsx'
import Products from './Products.jsx'
import Collections from './Collections.jsx'
import BestSellers from './BestSellers.jsx'
function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products/>
      <Collections/>
      <BestSellers />
    </div>
  )
}

export default Home