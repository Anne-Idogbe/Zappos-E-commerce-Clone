import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div className='w-full'>

      {/* pre footer */}
      <div className="bg-blue-100 py-8 px-10   mt-[40px] flex  flex-col">
        <div className=" md:mb-0 ">
          <h2 className="text-3xl font-bold mb-2 text-black">Get on the List</h2>
          <p className="text-black text-md">
            Subscribe to Zappos emails for exclusive product launches, early notifications for sales,
          </p>
          <p className="text-black text-md">
            and a few extra-special surprises.
          </p>
        </div>
        <div className="flex space-x-4  mt-3">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 border rounded-md w-full md:w-[40%] text-gray-700  border-gray-500"
          />
          <button className="bg-black text-white text-[18px]  font-bold px-6 py-3 rounded-md hover:bg-blue-500">
            Join the Party
          </button>
        </div>


      </div>


      <div className='container mx-auto w-[95%]'>


        <footer className=" py-8 m">

          <div className="flex gap-3 items-center space-x-6 py-4">
            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
              <FaPinterestP className="h-6 w-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition duration-300">
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>



          <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {/* <!-- Column 1 --> */}
            <div>
              <h1 className="text-black text-lg font-semibold mb-2">About Zappos</h1>
              <ul className='space-y-2'>
                <li><a className="hover:text-white">About</a></li>
                <li><a className="hover:text-white">Zappos ONE</a></li>
                <li><a className="hover:text-white">Zappos for Good</a></li>
                <li><a className="hover:text-white">Zappos at Work</a></li>
                <li><a className="hover:text-white">Get the Zappos Mobile App</a></li>
                <li><a className="hover:text-white">Amazon Prime Benefits</a></li>
                <li><a className="hover:text-white">Zappos VIP Benefits</a></li>
                <li><a className="hover:text-white">Coupon & Sales</a></li>
                <li><a className="hover:text-white">Accessibility Statement</a></li>

              </ul>
            </div>

            {/* <!-- Column 2 --> */}
            <div>
              <h1 className="text-black text-lg font-semibold mb-2">Customer Service</h1>
              <ul className='space-y-2'>
                <li><a className="hover:text-white">FAQs</a></li>
                <li><a className="hover:text-white">Contact Info</a></li>
                <li><a className="hover:text-white">Ayuda en espanol?</a></li>
                <li><a className="hover:text-white">Shipping And Returns Policy</a></li>
                <li><a className="hover:text-white">About Proposition 65</a></li>
              </ul>
            </div>

            {/* <!-- Column 3 --> */}
            <div>
              <h1 className="text-black text-lg font-semibold mb-2">Resources</h1>
              <ul className='space-y-2'>
                <li><a className="hover:text-white">Measurement Guide</a></li>
                <li><a className="hover:text-white">Size Conversion Chart</a></li>
                <li><a className="hover:text-white">Measure Your Bra Size</a></li>
                <li><a className="hover:text-white">Associates Program</a></li>
                <li><a className="hover:text-white">Jobs</a></li>
                <li><a className="hover:text-white">Press Kit & Brand Inquiries</a></li>
                <li><a className="hover:text-white">Site Map</a></li>
                <li><a className="hover:text-white">Take Survey</a></li>

              </ul>
            </div>

            {/* <!-- Column 4 --> */}
            <div>
              <h1 className="text-black text-lg font-semibold mb-2">Explore Zappos</h1>
              <ul className='space-y-2'>
                <li><a className="hover:text-white">Brands</a></li>
                <li><a className="hover:text-white">Clothing</a></li>
                <li><a className="hover:text-white">The Style Room</a></li>
                <li><a className="hover:text-white">Eyewear</a></li>
                <li><a className="hover:text-white">New Arrivals</a></li>
                <li><a className="hover:text-white">Running</a></li>
                <li><a className="hover:text-white">Jackets</a></li>
                <li><a className="hover:text-white">Shoes</a></li>
                <li><a className="hover:text-white">Watches</a></li>
                <li><a className="hover:text-white">Zappos Adaptive</a></li>
                <li><a className="hover:text-white">All Departments</a></li>


              </ul>
            </div>
          </div>


        </footer>


        {/* post footer */}
        <div className="border-t border-dotted border-gray-900 text-center text-gray-500 text-sm mt-6 pt-4">
          <div className='flex justify-between gap-4 mt-5 mb-5'>
            <p className='text-black text-sm'>&copy;2009-2024- Zappos.com LLC or its affiliates</p>
            {/* <p className="hover:underline hover:text-blue-500">Terms of Use / Privacy Policy / Fur Policy / Interest-Based Ads / 24/7 Customer Service(800) 927-7671 </p> */}

            <p className="text-black text-sm ">
              <a className="hover:underline hover:text-blue-500">Terms of Use</a> /
              <a className="hover:underline hover:text-blue-500">Privacy Policy</a> /
              <a className="hover:underline hover:text-blue-500">Fur Policy</a> /
              <a className="hover:underline hover:text-blue-500">Interest-Based Ads</a> /
              <a className="hover:underline hover:text-blue-500">24/7 Customer Service (800) 927-7671</a>
            </p>


          </div>
        </div>


      </div>
    </div>




  )
}

export default Footer
