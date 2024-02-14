import React from "react";
import { Link } from "react-router-dom";

const categoryImages = [
  { id: 1, img: "category/image1.png" },
  { id: 2, img: "category/image2.png" },
  { id: 3, img: "category/image3.png" },
  { id: 4, img: "category/image4.png" },
  { id: 5, img: "category/image5.png" },
];

const brandImages = [
  { id: 1, img: "/company/brand1.png" },
  { id: 2, img: "/company/brand2.png" },
  { id: 3, img: "/company/brand3.png" },
  { id: 4, img: "/company/brand4.png" },
  { id: 5, img: "/company/brand5.png" },
];
function Category() {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className="flex justify-around item-center flex-wrap gap-4 py-5">
        {brandImages.map(({ id, img }) => (
          <img key={id} src={img} alt={img.split(".")[0]} />
        ))}
      </div>

      {/* category grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold  md:-rotate-90 uppercase text-center bg-black text-white rounded-sm  md:p-1.5 inline-flex">
          {" "}
          Explore new and popular styles
        </p>
       
          <div>
            <Link to="/" >
              <img src={categoryImages[0].img} alt="" className="w-full hover:scale-105 duration-500" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-2">

            <Link to="/">
              <img src={categoryImages[1].img} alt="" />
            </Link>
            <Link to="/">
              <img src={categoryImages[2].img} alt="" />
            </Link>
            <Link to="/">
              <img src={categoryImages[3].img} alt="" />
            </Link>
            <Link to="/">
              <img src={categoryImages[4].img} alt="" />
            </Link>
     
            </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
