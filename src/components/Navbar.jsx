import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const Navbar = () => {

    const {cartItems} = useContext(CartContext)

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navA = "https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GLOBAL-NAV-STEVE-MADDEN-WOMENS-350x350.jpg"
    const navB = "https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/September/GLOBAL-NAV-MMK-WOMENS-350x350.jpg"


    const Zappos = "https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg";

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);

    };


    // Sample slider content
    const sliderContent = [
        {
            text: 'Top Boots & Sneakers for Fall 2024.',
            link: 'Shop Our Favorites',
        },
        {
            text: '10% off $100!+*',
            link: 'Download & Open App To Get Code',
        },
        {
            text: 'Step into endless energy with this new style!',
            link: 'Shop Brooks Glycerin Max',
        }
    ];

    // Handle automatic sliding every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
        }, 3000); // 2 seconds interval

        return () => clearInterval(interval); // Cleanup on unmount
    }, [sliderContent.length]);



    return (
        <header className="text-black w-full border-b border-dotted border-gray-400 text-center">

            {/* pop up content */}

            <div className="w-full h-12 overflow-hidden bg-blue-100 text-center py-2 text-lg text-gray-800">
                {sliderContent.map((item, index) => (
                    <div
                        key={index}
                        className={`transition-transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' : '-translate-x-full'} absolute w-full`}
                    >
                        <span className="text-black">{item.text}</span>
                        <a href="#" className="text-black text-lg font-bold underline ml-2">{item.link}</a>
                    </div>
                ))}
            </div>
            {/* <div className="bg-blue-100 text-center py-2 text-sm text-gray-800">
                <span className="text-black ">Check out to earn Zappos VIP points worth up to <span className="text-black">$1.25</span> in VIP codes. </span>
                <a href="#" className="text-black underline">Sign in to get started!</a>
            </div> */}


            {/* main navigation starts here */}
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                <div className='flex flex-col'>
                    <div className='flex mb-6 mt-4 gap-4'>
                        {/* Logo */}
                        <Link to="/" className="text-xl font-bold">
                            <img src={Zappos} alt="Zappos" />
                        </Link>

                        {/* Search Bar */}
                        <div className="w-full max-w-2xl mx-auto flex items-center bg-gray-100 border border-black rounded-full shadow-md">
                            <FiSearch className="h-8 w-8 text-gray-500 ml-2" />
                            <input
                                type="text"
                                placeholder="Search for shoes, clothes, etc."
                                className="ml-3 w-full bg-transparent focus:outline-none text-gray-700"
                            />
                            <div className='border-l border-gray-900'>
                                <button className="ml-3 px-4 py-1 font-bold text-xl text-black">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='flex'>
                        <nav className="hidden md:flex space-x-8 ml-10">
                            {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sales', 'Gifts'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                                    className="text-gray-800 font-bold text-lg focus:outline-none  py-2 hover:rounded-full hover:bg-gray-200 hover:text-gray-900 "
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Right Section (Search, Sign-in, Cart) */}
                <div className='flex flex-col'>
                    {/* Icons */}
                    <div className="flex space-x-4 items-center">
                        {/* User Icon */}
                        <button
                            className="hover:text-gray-200 flex items-center"
                            onClick={openModal}
                        >
                            <FiUser className="h-6 w-6 mr-1" />
                        </button>

                        {/* Cart Icon */}
                        <button onClick={toggleSidebar} className="hover:text-gray-200 flex items-center relative" >
                            <Link to="/CartPage">
                                <FiShoppingBag className="h-6 w-6 mr-1" />
                                <span className=" absolute top-0 right-0 pl-4 text-blue-600 text-md  rounded-full w-5 h-5 flex font-bold">({cartItems && cartItems.length})</span>
                            </Link>
                            
                        </button>
                    </div>

                    <div>
                        <Link className='flex items-center pt-8 mt-6'>Help & Support</Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMobileMenu} className="md:hidden text-white">
                    {isMobileMenuOpen ? (
                        <FiX className="h-6 w-6" />
                    ) : (
                        <FiMenu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <nav className="bg-blue-800 p-4">
                        {['New Arrivals', 'Men', 'Women', 'Kids', 'Departments'].map((item) => (
                            <Link to={`/${item.toLowerCase().replace(' ', '-')}`} key={item} className="block py-2 text-gray-200">
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            {/* Sidebar Menu */}
            {/* {isSidebarOpen && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-50">
                    <div className="fixed top-0 right-0 bg-blue-800 p-4 w-64 h-full shadow-lg">
                        <button onClick={toggleSidebar} className="text-white">
                            <FiX className="h-6 w-6" />
                        </button>
                        <nav className="mt-6">
                            {['New Arrivals', 'Men', 'Women', 'Kids', 'Departments'].map((item) => (
                                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} key={item} className="block py-2 text-gray-200">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )} */}

            {/* Registration Modal */}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="flex justify-center items-center  bg-gray-200 rounded-2xl shadow-lg">
                        <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl h-[550px]">

                            <div className='flex justify-between items-center mt-4 px-4 border-b border-gray-300'>
                                {/* Title */}
                                <h2 className="text-2xl font-semibold mb-8">Sign-in</h2>

                                {/* Close Button */}
                                <div className="flex mb-8">
                                    <button
                                        className="text-gray-500 hover:text-gray-800 text-xl font-bold rounded-full border border-gray-500 py-2 px-3"
                                        onClick={closeModal} // Add this line to close the modal
                                    >
                                        &#x2715;
                                    </button>
                                </div>
                            </div>




                            {/* Sign-in Options */}
                            <div className="grid grid-cols-1 md:grid-cols-5 px-6 mt-10">
                                <div className="md:col-span-2 flex flex-col px-6">
                                    <button className="w-full p-2 mb-4 border border-gray-900 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 font-bold text-sm">
                                        <img src="https://zappos.com/favicon.ico" alt="Zappos" className="w-4 h-3 mr-2" />
                                        Sign in with Zappos
                                    </button>

                                    <button className="w-full p-2 mb-4 border border-gray-900 rounded-lg flex items-center justify-center hover:border-blue-600  hover:text-blue-600 font-bold text-sm">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="w-10 h-5 mr-2" />
                                        Sign in with Amazon
                                    </button>

                                    <button className="w-full p-2 mb-4 border border-gray-900 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 font-bold text-sm">
                                        <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Google" className="w-10 h-5 mr-2" />
                                        Sign in with Google
                                    </button>

                                    <div className="flex p-2 items-center justify-center mb-4">
                                        <hr className="border-t border-gray-300 flex-grow" />
                                        <span className="mx-2 text-gray-500">or</span>
                                        <hr className="border-t border-gray-300 flex-grow" />
                                    </div>

                                    <button className="w-full py-3 mb-6  rounded-lg border border-gray-900 font-bold hover:border-blue-600 hover:text-blue-600 text-sm">
                                        <Link to="/user-register"
                                            onClick={closeModal} // Close the modal when this link is clicked
                                        >

                                            Create your Zappos Account
                                        </Link>
                                    </button>
                                </div>

                                {/* Info Section */}
                                <div className="md:col-span-3 px-6 bg-gray-50 border-l-2 border-gray-300 flex flex-col text-left justify-between">
                                    <div className="font-bold text-[18px] mb-4">
                                        <p>
                                            By logging in with Amazon, you may be eligible for
                                            additional Prime benefits like FREE Upgraded Shipping.
                                            Then, join Zappos VIP for additional Prime-linked VIP perks:
                                        </p>
                                    </div>


                                    <ul className="text-sm list-disc pl-5 mb-4">
                                        <li className='mb-3'>If you are an Amazon Prime Member, sign in with Amazon to qualify for free upgraded shipping!</li>
                                        <li className='mb-3'>Get FREE Expedited Shipping</li>
                                        <li className='mb-3'>Earn 2 Points for Every $1 Spent</li>
                                        <li className='mb-3'>Receive Bonus Points on Select Brands</li>
                                        <li className='mb-3'>Redeem Points for VIP Codes</li>
                                    </ul>

                                </div>

                            </div>

                            <p className="text-black p-4 text-center">
                                <p className="text-xs">By signing in, you agree to Zappos </p>
                                <span className="text-md underline text-black hover:text-blue-700">Terms and Conditions</span>
                                <span className="text-xs"> and </span>
                                <span className="text-md underline  text-black hover:text-blue-700">Privacy Policy</span>.
                            </p>


                        </div>
                    </div>
                </div>
            )}



            {/* Dropdown */}

            <div>
                {/* Dropdown toggle button */}
                <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="text-black px-4 py-2 rounded-full hover:bg-black hover:text-white hidden"
                >
                    Toggle Dropdown
                </button>

                {/* Dropdown content */}
                {isDropdownOpen && (
                    <div className="absolute left-0 right-0 bg-white text-black border-t mt-9 shadow-lg flex">
                        <div className="max-w-7xl mx-auto py-6 grid grid-cols-6 gap-4 px-4 sm:px-6 lg:px-8">
                            {/* Shoes Column */}
                            <div>
                                <h3 className="font-bold text-lg">Shoes</h3>
                                <ul className="space-y-2 text-lg">
                                    <li>All Women's Shoes</li>
                                    <li>Sneakers & Athletic</li>
                                    <li>Boots & Booties</li>
                                    <li>Loafers</li>
                                    <li>Oxfords</li>
                                    <li>Sandals</li>
                                    <li>Slippers</li>
                                    <li>Hiking</li>
                                    <li>Work & Safety</li>
                                    <li>Work & Duty Boots</li>
                                    <li>Adaptive</li>
                                    <li>Wide</li>
                                </ul>
                            </div>

                            {/* Clothing Column */}
                            <div>
                                <h3 className="font-bold text-lg">Clothing</h3>
                                <ul className="space-y-2 text:lg">
                                    <li>All Men's Clothing</li>
                                    <li>Shirts & Tops</li>
                                    <li>Pants</li>
                                    <li>Coats & Outerwear</li>
                                    <li>Jeans</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Shorts</li>
                                    <li>Big & Tall</li>
                                    <li>Activewear</li>
                                    <li>Work & Duty Apparel</li>
                                    <li>Swimwear</li>
                                </ul>
                            </div>

                            {/* Accessories Column */}
                            <div>
                                <h3 className="font-bold text-lg">Accessories & More</h3>
                                <ul className="space-y-2 text:lg">
                                    <li>All Women's Accessories</li>
                                    <li>Handbags</li>
                                    <li>Backpacks</li>
                                    <li>Wallets</li>
                                    <li>Sunglasses</li>
                                    <li>
                                        <Link
                                            to="/ShoppingPage"
                                            className="text-black px-4 py-2 hover:text-blue-600 hover:underline"
                                            onClick={() => setDropdownOpen(false)} // Close dropdown on link click
                                        >
                                            Scarves
                                        </Link>
                                    </li>
                                    <li>Hats</li>
                                    <li>Belts</li>
                                    <li>Watches</li>
                                    <li>Gloves</li>
                                    <li>Eyewaer</li>
                                    
                                </ul>
                            </div>

                            {/* Activities Column */}
                            <div>
                                <h3 className="font-bold text-lg">Activities</h3>
                                <ul className="space-y-2 text-lg">
                                    <li>Running</li>
                                    <li>Training & Gym</li>
                                    <li>Athleisure</li>
                                    <li>Tennis & Pickleball</li>
                                    <li>Yoga</li>
                                    <li>Hiking</li>
                                    <li>Golf</li>
                                </ul>
                            </div>

                            {/* Trending Brands Column */}
                            <div>
                                <h3 className="font-bold text-lg">Trending Brands</h3>
                                <ul className="space-y-2 text-lg">
                                    <li>Sam Edelman</li>
                                    <li>Birkenstock</li>
                                    <li>Dolce Vita</li>
                                    <li>Madewell</li>
                                    <li>Hoka</li>
                                    <li>ASICS</li>
                                    <li>Brooks</li>
                                    <li>New Balance</li>
                                    <li>Kamik</li>
                                    <li>On</li>
                                    <li className='font-bold'>Shop By</li>
                                    <li>All Mens</li>
                                    <li>Bestsellers</li>
                                    <li>New Arrivals</li>
                                    <li>5-Star-Rated Styles</li>
                                    <li>Sale</li>
                                    <li className='font-bold'>Gift Cards</li>

                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <div className='bg-black'>
                                    <img src={navA} className="w-full h-auto rounded-lg mb-4 mt-4" />
                                    <p className="text-lg font-bold text-white">Shop Women"s</p>
                                    <p className="text-lg font-bold text-white">Steve Madden</p>
                                </div>
                                <div className='bg-black mt-4'>
                                    <img src={navB} className="w-full h-auto rounded-lg mb-4 mt-4" />
                                    <p className="text-lg font-bold text-white">Shop Women"s</p>
                                    <p className="text-lg font-bold text-white">MICHAEL</p>
                                    <p className="text-lg font-bold text-white">Michael Kors</p>
                                </div>


                            </div>

                        </div>
                    </div>
                )}
            </div>

        </header >
    );
};

export default Navbar;
