import React from "react";
import product from "/image-product.png";
import { FaShoppingBag } from "react-icons/fa";
function Banner() {
  return (
    <div className="bg-primaryBg py-12 xl:px-28 px-4">
      <div className="mt-24 flex flex-col items-center justify-evenly md:flex-row-reverse gap-10">

      <div className="md:w-1/2 flex justify-center">
          <img src={product} alt="fancy lady in white dress" />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>

          <button className="bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded flex items-center gap-2"> <FaShoppingBag className="inline-flex" /> Shop Now 
         </button>
        </div>
        
      </div>
    </div>
  );
}

export default Banner;
