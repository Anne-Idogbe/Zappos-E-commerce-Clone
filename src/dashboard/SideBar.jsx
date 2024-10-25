import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='flex flex-col gap-5 px-4 mt-3'>
      <div className='flex mt-8'>

        <button className='rounded-md bg-black px-2 py-2 text-white'>
          <Link to=''>Dashboard</Link>
        </button>
      </div>

      <div className='text-Black text-xl font-bold'>
        <h1>CREATE PRODUCT & CATEGORY</h1>
      </div>

      <div className='flex flex-col gap-2'>
        <button className='rounded-md bg-black px-2 py-2 text-white'>
          <Link to='/dashboard/add-product'>Add Product</Link>
        </button>

        <button className='rounded-md bg-black px-2 py-2 text-white'>
          <Link to="/dashboard/add-category">Add Category</Link>
        </button>

      </div>

      <div className='text-Black text-xl font-bold'>
        <h1>VIEW</h1>
      </div>


      <div className='flex flex-col gap-2'>
        <button className=' bg-black rounded-md px-2 py-2 text-white'>
          <Link to="/dashboard/product-list">View All Products</Link>
        </button>
        <button className='rounded-md bg-black  px-2 py-2 text-white'>
          <Link to="/dashboard/category-list">View All Categories</Link>
        </button>

        <button className='rounded-md bg-black  px-2 py-2 text-white'>
          <Link to="/dashboard/users-list">View All Users</Link>
        </button>
      </div>

      <div className='flex mt-12'>
        <button className='rounded-md bg-black px-2 py-2 text-white'>
          <Link to="/Merchant-login">Log Out</Link>
        </button>
      </div>

    </div>
  )
}

export default SideBar