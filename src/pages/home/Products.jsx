import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

function Products() {

    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [category, setCategory] = useState('all')
    const [sortOption, setSortOption] = useState('default')

    useEffect(() => {
        const fetchProducts = async() => {
            try{
                const result = await fetch('/products.json');
                const data = await result.json()
                
                setProducts(p => data)
                setFilteredItems(f => data)
            }catch(err){
                console.log(err.message)
            }
        }
        fetchProducts()
      
    }, [])

    // filtering products
    const filterProduct = (category) => {
      const filter = category === "all" ? (products) : products.filter((item) => item.category === category);
      setFilteredItems(f => filter)
      setCategory(c => category)
    }

    // showing all products
    const showAll = () =>{
      setFilteredItems( f => products)
      setCategory(c => 'all')
    }

    // sorting 

    const sortProducts = (value) => {
      setSortOption(s => value)
      let sortedItems = [...filteredItems]
      
      

      switch(sortOption){
        case 'az':

          sortedItems.sort((a,b) => a.title.localeCompare(b.title))
          break

        case 'za':
          sortedItems.sort( (a, b) => b.title.localeCompare(a.title))
          break
        case 'low':
          sortedItems.sort((a,b) => a.price - b.price)
          break

        case 'high':
          sortedItems.sort((a,b) => b.price - a.price)
          break

        default:
          break
      }
        
      setFilteredItems(sortedItems)
        
   

    }
    


    // mf run this hook 
    useEffect(() => {
      sortProducts(sortOption)
    }, [sortOption, category])
    

   
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
        <h2 className="title">Subscribe to the newletter</h2>

        {/* product cards */}

        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-start gap-4">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button className=""  onClick={showAll}>All Products</button>
            <button className=""  onClick={() => filterProduct('Dress')}>Clothing</button>
            <button className="" onClick={() => filterProduct('Shoe')}>Shoes</button>
            <button className="" onClick={() => filterProduct('Glasses')}>Glasses</button>
          </div>

          {/* sorting options */}
          <div className="flex justify-end rounded-sm">
            <div className="bg-black flex items-center">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select className="bg-black text-white px-2 py-1 rounded-sm" value={sortOption} onChange = {(e) => sortProducts(e.target.value)}>
              <option value="default">Filter</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
              <option value="low">Low-High</option>
              <option value="high">High-Low</option>
            </select>
          </div>
        </div>
      </div>

      
      <div className="mb-4 pb-8">
        

        <Card products={filteredItems}/>
      </div>


    </div>

    
  );
}

export default Products;
