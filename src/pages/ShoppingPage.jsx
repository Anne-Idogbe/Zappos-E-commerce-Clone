import React from 'react';
import ProductGrid from '../components/ProductGrid';     // Import the ProductGrid component
import ScarfInfo from '../components/ScarfInfo';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import SidebarFilter from '../components/SidebarFilter';    // Import the SidebarFilter component
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa';



const ShoppingPage = () => {
  const [selections, setSelections] = useState(['Accessories', 'Scarves', 'Women']);

  const removeSelection = (item) => {
    setSelections(selections.filter((selection) => selection !== item));
  };

  const clearAllSelections = () => {
    setSelections([]);
  };


  const { products, loading } = useContext(CartContext);  // Use loading from context

  if (loading) {
    return <p>Loading....</p>;  // Display loading while fetching
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>;  // Handle case where no products are found
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    return (
      <span className="text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStars ? "★" : ""}
        {"☆".repeat(5 - fullStars - halfStars)}
      </span>
    );
  };
  console.log(products)

  // const { products } = useContext(CartContext)
  // if (products.lenght === 0) return <p>Loading...</p>


  return (
    <div className="flex">
      {/* Sidebar */}
      <SidebarFilter />  {/* SidebarFilter component is used here */}

      {/* Main Content */}
      <div className='flex flex-col'>
        <div className="flex-1">
          <div className="container mx-auto p-8 ">
            <h2 className="text-3xl font-bold mb-2">Women's Scarves</h2>
            <p className='text-gray-800 text-md'>51 items found</p>

            <div className='flex justify-between'>
              <p className='text-gray-800 text-md underline'>Find what you"re looking for?</p>

              {/* select input tag */}
              <div className="flex ml-10 space-x-2 pr-8">
                <p className="text-gray-800 text-md">Sort By</p>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded leading-tight focus:outline-double focus:border-blue-600"
                    defaultValue="new arrivals"
                  >
                    <option value="new arrivals">Relevance</option>
                    <option value="best sellers">New Arrivals</option>
                    <option value="price low to high">Customer Rating</option>
                    <option value="price high to low">Best Sellers</option>
                    <option value="top rated">Price: Low to High</option>
                    <option value="on sale">Price: High to Low</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* my selections */}

            <div className="flex justify-between mt-[30px] ">
              {/* Left: Your Selections */}
              <div>
                <h2 className="font-semibold text-lg">Your Selections</h2>
                <div className="flex space-x-2 mt-2">
                  {selections.map((item, index) => (
                    <div
                      key={index}
                      className="bg-black text-white rounded-full flex items-center space-x-2 px-3 py-1"
                    >
                      <span>{item}</span>
                      <FaTimes className="cursor-pointer" onClick={() => removeSelection(item)} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Clear All Filters */}
              <div className='p-8'>
                <button
                  onClick={clearAllSelections}
                  className="text-black underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>

            {/* fetching products from API  */}


            <div className="container mx-auto p-6">
              {products && products.length > 0 ? (
                <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products.map((product) => (
                    product && (
                      <Link to={`/product/${product.id}`} state={{ product }} key={product.id} className="relative bg-white p-4 rounded-lg shadow-lg">
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full border border-gray-300 hover:bg-blue-500 group">
                          <FaHeart className="text-gray-400 group-hover:text-white" />
                        </button>

                        {/* Product Image */}
                        <img
                          src={product.images}
                          alt={product.title}
                          className="w-full h-auto rounded-lg mb-4 mt-4"
                        />

                        {/* Product Details */}
                        <h3 className="text-lg font-bold">{product.title}</h3>
                        <p className="text-gray-700">{product.descp}</p>
                        <p className="text-gray-700">${product.price}</p>
                        {/* <span className="text-blue-600">{renderStars(product.rating)}</span> */}
                      </Link>
                    )
                  ))}
                </div>
              ) : (
                <p className="text-center">No products available</p>
              )}

            </div>

            {/* <ProductGrid />  ProductGrid component is used here */}
          </div>
        </div>
        <ScarfInfo />

      </div>

    </div>
  );
};

export default ShoppingPage;

