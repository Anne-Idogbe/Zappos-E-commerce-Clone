import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const ProductCard = () => {
  // Define state to track the hovered image for each product
  const [hovered, setHovered] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-4 gap-4">
        {/* Left side "New Arrivals" card */}
        <div
          className="col-span-1 bg-cover bg-center p-8 text-white flex flex-col justify-center"
          style={{ backgroundImage: 'url("https://via.placeholder.com/400x600")' }}
        >
          <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
          <span className="underline text-lg">Find More Fresh Picks</span>
        </div>

        {/* Right side product cards */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {/* Product 1 */}
          <div
            className="relative flex flex-col items-center bg-white p-4 shadow-md"
            onMouseEnter={() => setHovered(true)} // Set hover to true
            onMouseLeave={() => setHovered(false)} // Set hover to false
          >
            <img
              className="w-full h-64 object-cover mb-4"
              src={
                hovered
                  ? 'https://m.media-amazon.com/images/I/71gE61zxlPL._AC_SR768,1024__FMwebp_.jpg' // Hovered image
                  : 'https://m.media-amazon.com/images/I/615gLv0troL._AC_SR768,1024__FMwebp_.jpg' // Default image
              }
              alt="Product 1"
            />
            <div className="absolute top-2 right-2">
              <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={regularHeart} size="lg" />
              </button>
            </div>
            <div className="flex space-x-2 mb-2">
              {/* Color options */}
              <span className="h-6 w-6 bg-black rounded-full"></span>
              <span className="h-6 w-6 bg-blue-600 rounded-full"></span>
              <span className="h-6 w-6 bg-gray-600 rounded-full"></span>
            </div>
            <p className="font-bold text-lg">Columbia</p>
            <p className="text-gray-600 mb-2">Glennaker Lake II Rain Jacket</p>
            <p className="font-bold">$50.00</p>
          </div>

          {/* You can repeat the same structure for other products */}
          {/* Product 2 */}
          {/* Product 3 */}
        </div>
      </div>
    </div>



  );
};

export default ProductCard;
