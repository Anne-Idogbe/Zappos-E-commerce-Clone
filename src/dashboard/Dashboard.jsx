import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCashRegister, FaThumbsUp, FaBox, FaUser } from 'react-icons/fa'; // Importing specific icons from react-icons

const Dashboard = () => {

  // Modal for merchant info
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Fetching merchant data from local storage
  const merchant = JSON.parse(localStorage.getItem('merchant'));

  // setting the merchantId when the component mounts
  const [merchantId, setMerchantId] = useState("");

  useEffect(() => {
    if (merchant) {
      setMerchantId(merchant.id);
    }
  }, [merchant]);

  return (
    <div className="flex-1 p-4 bg-gray-50">
      <div className='flex justify-between mb-10'>
        <div className='flex gap-5'>
          <div className="flex justify-center">
            <img
              src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
              alt="Logo"
            />
          </div>
          <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        </div>

        {/* Update merchant information */}
        <div className='flex gap-3'>
          <div className='flex flex-col'>
            <h1 className='text-lg text-purple-400 font-bold'>Welcome!</h1>
            <h1 className='font-bold'>{merchant.first_name}</h1>
          </div>
          <img src='https://img.freepik.com/free-photo/african-teenage-girl-portrait-happy-smiling-face_53876-146757.jpg?ga=GA1.1.1223372785.1726203975&semt=ais_hybrid' className='w-20 h-20 rounded-full object-contain' />
          <button onClick={openModal} className="rounded-md px-1 bg-black text-white">Update Admin</button>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5 w-96">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-bold">Merchant Information:</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={closeModal}
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>

                <div className="self-center">
                  <img src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg" alt="Zappos Logo" />
                </div>

                <div>
                  <b>First Name:</b> <span>{merchant.first_name}</span>
                </div>
                <div>
                  <b>Last Name:</b> <span>{merchant.last_name}</span>
                </div>
                <div>
                  <b>Email:</b> <span>{merchant.email}</span>
                </div>
                <div>
                  <b>Store Name:</b> <span>{merchant.store_name}</span>
                </div>
                <div>
                  <b>Description:</b> <span>{merchant.descp}</span>
                </div>

                <div className="flex justify-between mt-10">
                  <Link to="/UpdateMerchant-register">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Edit Info
                    </button>
                  </Link>

                  <Link to="../pass.html">
                    <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                      Change Password
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-[80px]">
        <div className="bg-purple-300 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Sales
            <FaCashRegister className="text-black mt-2" />
          </h3>
          <div className="flex items-center justify-center">
            <b id="d-total-sales">1,350</b>
          </div>
        </div>

        <div className="bg-cyan-200 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Likes
            <FaThumbsUp className="text-black mt-2" />
          </h3>
          <div className="flex items-center justify-center">
            <b id="d-total-likes">2,900</b>
          </div>
        </div>

        <div className="bg-pink-300 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Products
            <FaBox className="text-black mt-2" />
          </h3>
          <div className="flex items-center justify-center">
            <b id="d-total-products">5,600</b>
          </div>
        </div>

        <div className="bg-green-300 p-4 rounded-lg shadow-md">
          <h3 className="flex flex-col text-lg font-bold">
            Total Users
            <FaUser className="text-black mt-2" />
          </h3>
          <div className="flex items-center justify-center">
            <b id="d-total-customers">4200</b>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          {/* Sales Analytics Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Users Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Top Users</h3>
              <ul>
                <li className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/50?img=1"
                      alt="Glenn Holden"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p>Glenn Holden</p>
                      <p className="text-gray-500 text-sm">Nevada</p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Cancel</span>
                  <span className="font-bold">$250.00</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/50?img=2"
                      alt="Lolita Hamill"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p>Lolita Hamill</p>
                      <p className="text-gray-500 text-sm">Texas</p>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Success</span>
                  <span className="font-bold">$110.00</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/50?img=3"
                      alt="Robert Mercer"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p>Robert Mercer</p>
                      <p className="text-gray-500 text-sm">California</p>
                    </div>
                  </div>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
                  <span className="font-bold">$420.00</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/50?img=4"
                      alt="Marie Kim"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p>Marie Kim</p>
                      <p className="text-gray-500 text-sm">Montana</p>
                    </div>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Pending</span>
                  <span className="font-bold">$120.00</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/50?img=1"
                      alt="Glenn Holden"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p>Glenn Holden</p>
                      <p className="text-gray-500 text-sm">Nevada</p>
                    </div>
                  </div>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Cancel</span>
                  <span className="font-bold">$250.00</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center">
                    <img
                      src="https://i.pravatar.cc/50?img=2"
                      alt="Lolita Hamill"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p>Lolita Hamill</p>
                      <p className="text-gray-500 text-sm">Texas</p>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Success</span>
                  <span className="font-bold">$110.00</span>
                </li>
              </ul>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
              <ul>
                <li className="py-2 border-b">
                  <div className="flex justify-between">
                    <p className="text-gray-700">Today 12:20 PM</p>
                    <p className="text-gray-500">Recent</p>
                  </div>
                  <p className="text-gray-600">Andrei Coman posted a new article: Forget UX Rowland</p>
                </li>
                <li className="py-2 border-b">
                  <div className="flex justify-between">
                    <p className="text-gray-700">22 Jul, 2020 12:36 PM</p>
                    <p className="text-gray-500">Recent</p>
                  </div>
                  <p className="text-gray-600">Andrei Coman posted a new article: Designer Alex</p>
                </li>
                <li className="py-2 border-b">
                  <div className="flex justify-between">
                    <p className="text-gray-700">18 Jul, 2020 07:56 AM</p>
                    <p className="text-gray-500">Recent</p>
                  </div>
                  <p className="text-gray-600">Zack Wetass commented on Developer Moreno</p>
                </li>
                <li className="py-2 border-b">
                  <div className="flex justify-between">
                    <p className="text-gray-700">10 Jul, 2020 08:42 PM</p>
                    <p className="text-gray-500">Recent</p>
                  </div>
                  <p className="text-gray-600">Zack Wetass commented on UX Murphy</p>
                </li>
                <li className="py-2 border-b">
                  <div className="flex justify-between">
                    <p className="text-gray-700">Today 12:20 PM</p>
                    <p className="text-gray-500">Recent</p>
                  </div>
                  <p className="text-gray-600">Andrei Coman posted a new article: Forget UX Rowland</p>
                </li>
                <li className="py-2 border-b">
                  <div className="flex justify-between">
                    <p className="text-gray-700">22 Jul, 2020 12:36 PM</p>
                    <p className="text-gray-500">Recent</p>
                  </div>
                  <p className="text-gray-600">Andrei Coman posted a new article: Designer Alex</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
