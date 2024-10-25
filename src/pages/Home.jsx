import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FaHeart } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../pages/css/nav.css"
// import PrevArrow from './PrevArrow';
// import NextArrow from './NextArrow';

const Home = () => {
  const ratings ="https://www.zappos.com/marty-assets/star-sprite.69d5b63df89443e8c54a59419ff25a96.svg"

  const products = [
    { id: 1, name: 'Product 1', price: 10, img: 'https://m.media-amazon.com/images/I/715ABUqenhL._AC_SR768,1024__FMwebp_.jpg' },
    { id: 2, name: 'Product 2', price: 10, img: 'https://m.media-amazon.com/images/I/71f4AQWyC+L._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg' },
    { id: 3, name: 'Product 3', price: 10, img: 'https://m.media-amazon.com/images/I/61RwnR+amLL._AC_SR768,1024__FMwebp_.jpg' },
    { id: 4, name: 'Product 4', price: 10, img: 'https://m.media-amazon.com/images/I/61vWCvBVOML._AC_SR768,1024__FMwebp_.jpg' },
    { id: 5, name: 'Product 5', price: 10, img: 'https://m.media-amazon.com/images/I/71KJ6fGHCZL._AC_SR768,1024__FMwebp_.jpg' },
    { id: 6, name: 'Product 6', price: 10, img: 'https://m.media-amazon.com/images/I/71CsP5xfTxL._AC_SR768,1024__FMwebp_.jpg' },
    { id: 7, name: 'Product 7', price: 10, img: 'https://m.media-amazon.com/images/I/71WJ2TFkJ4L._AC_SR768,1024__FMwebp_.jpg' },
    { id: 8, name: 'Product 8', price: 10, img: 'https://m.media-amazon.com/images/I/718VwV4paxL._AC_SR768,1024__FMwebp_.jpg' },
    { id: 9, name: 'Product 9', price: 10, img: 'https://m.media-amazon.com/images/I/810E-Vsxn8L._AC_SR768,1024__FMwebp_.jpg' },
    { id: 10, name: 'Product 10', price: 10, img: 'https://m.media-amazon.com/images/I/714ClJ7tomL._AC_SR768,1024__FMwebp_.jpg' },
    { id: 11, name: "Product 11", price: 10, img: "https://m.media-amazon.com/images/I/81FQ8MiljUL._AC_SR768,1024__FMwebp_.jpg" },
    { id: 12, name: "Product 12", price: 10, img: "https://m.media-amazon.com/images/I/71AB4eBNMnL._AC_SR768,1024__FMwebp_.jpg" },
    { id: 13, name: "Product 13", price: 10, img: "https://m.media-amazon.com/images/I/81XzX48jYiL._AC_SR768,1024__FMwebp_.jpg" },
    { id: 13, name: "Product 14", price: 10, img: "https://m.media-amazon.com/images/I/71wUV1rCRYL._AC_SR768,1024__FMwebp_.jpg" },
  ];

  // Inside your component, use the settings for your slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of images to show at once
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const photoA = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-1B-RUNNING-SHOES-432x540._FMwebp_.jpg"
  const photoB = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-2B-LIFESTYLE-SNEAKERS-432x540_1._FMwebp_.jpg"
  const photoC = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-3B-ANKLE-BOOTIES-432x540._FMwebp_.jpg"
  const photoD = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-4B-KNEE-HIGH-BOOTS-432x540._FMwebp_.jpg"
  const photoE = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-5B-FLATS-432x540._FMwebp_.jpg"
  const photoF = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-6B-LOAFERS-432x540._FMwebp_.jpg"
  const photoG = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/10.07/TRIPTYCH-2-FALL-FLATS-896x896-NEW._FMwebp_.jpg"
  const photoH = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRIPTYCH-1-MADEWELL-896x896._FMwebp_.jpg"
  const photoI = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRIPTYCH-3-BIRKENSTOCK-896x896._FMwebp_.jpg"
  const photoJ = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-ASICS-SEPTOCT2024-TSR-NEW._FMwebp_.jpg"
  const photoK = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-FAVORITEPAIRINGS2-SEPTOCT2024-TSR._FMwebp_.jpg"
  const photoL = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30NEW/W-ZAPPOSHP-SAMEDELMAN-SEPTOCT2024-TSR-NEW._FMwebp_.jpg"


  return (

    <div>
      {/* setion 1 */}
      <div className='Banner h-[400px] mt-6'>

      </div>

      {/* section 2 */}
      <div className='container text-center w-full'>
        <h1 className='text-2xl text-black mt-3 font-bold'>Falling for Sam Edelman</h1>
        <p className='underline mt-1'>Shop Sam Edelman</p>
      </div>

      {/* section 3 */}
      <div className='container mx-auto  w-[95%]'>
        <h1 className='text-2xl font-bold text-black mt-8'>Shop Popular Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-8'>

          <div>
            <img src={photoA} alt='photoA' />
            <p className='underline mt-1'>Running Shoes</p>
          </div>

          <div>
            <img src={photoB} alt='photoB' />
            <p className='underline mt-1'>Lifestyle Sneakers</p>
          </div>

          <div>
            <img src={photoC} alt="photoC" />
            <p className='underline mt-1'>Ankle Booties</p>
          </div>

          <div>
            <img src={photoD} alt="photoD" />
            <p className='underline mt-1'>Knee High Boots</p>
          </div>

          <div>
            <img src={photoE} alt='photoE' />
            <p className='underline mt-1'>Flats</p>
          </div>

          <div>
            <img src={photoF} alt="photoF" />
            <p className='underline mt-1'>Loafers</p>
          </div>


        </div>

      </div>

      {/* section 4 */}

      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold text-black mt-8'>Your New Go-Tos</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-8'>
          <div>
            <img src={photoG} alt="photoG" />
            <h1 className='text-xl text-black mt-4 p-3 text-center'>Styles that make you feel and look your cutest,</h1>
            <p className='underline mt-2 text-center'>Shop Flats & Mary Janes</p>
          </div>

          <div>
            <img src={photoH} alt="photoH" />
            <h1 className='text-xl text-black mt-4 p-3 text-center'>Classic comfort and modern elegance?Say no more,</h1>
            <p className='underline mt-2 text-center'>Shop Madewell</p>
          </div>

          <div>
            <img src={photoI} alt="photoI" />
            <h1 className='text-xl text-black mt-4 p-3 text-center'>Enjoy your favorite season with street-ready styles,</h1>
            <p className='underline mt-2 text-center'>Shop Birkenstock</p>
          </div>

        </div>

      </div>

      {/* section 5 */}
      <div className='photoJ h-[150px] mt-[100px] mb-[100px] '>

      </div>

      {/* section 6 */}

      <div className="grid grid-cols-4 h-[500px]">
        {/* 1fr Column for text */}
        <div className="col-span-1 flex flex-col text-center justify-center bg-gray-100 space-y-3">
          <h2 className="text-2xl font-bold">For All-day,Everyday</h2>
          <h1 className='text-md text-black  text-center'>It doesn"t matter whats in your plans-you should always be comfortable.</h1>
          <p className='underline mt-4 text-center'>Shop Lifestyle Sneakers</p>
        </div>

        {/* 2fr Column for background image */}
        <div
          className="col-span-3 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.23/AOE-LIFESTYLE-SNEAKERS-RETINA-1920x1000._FMwebp_.jpg")' }}
        >
          {/* Optionally, add more content inside */}
        </div>
      </div>

      {/* section 7 */}

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-4 gap-4">
          {/* Left side "New Arrivals" card */}
          <div
            className="col-span-1 bg-cover bg-center p-8 text-white flex flex-col justify-center"
            style={{ backgroundImage: 'url("https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/NEW-ARRIVALS-FEED-658x916_13._FMwebp_.jpg ")' }}
          >
          </div>

          {/* Right side product cards */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {/* Product 1 */}
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md">
              <img
                className="w-full h-64 object-contain mb-4"
                src="https://m.media-amazon.com/images/I/615gLv0troL._AC_SR768,1024__FMwebp_.jpg"
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

            {/* Product 2 */}
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md">
              <img
                className="w-full h-64 object-contain mb-4"
                src="https://m.media-amazon.com/images/I/71fOstbVqQL._AC_SR768,1024__FMwebp_.jpg"
                alt="Product 2"
              />
              <div className="absolute top-2 right-2">
                <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={regularHeart} size="lg" />
                </button>
              </div>
              <div className="flex space-x-2 mb-2">
                {/* Color options */}
                <span className="h-6 w-6 bg-beige rounded-full"></span>
                <span className="h-6 w-6 bg-black rounded-full"></span>
              </div>
              <p className="font-bold text-lg">SOREL</p>
              <p className="text-gray-600 mb-2">ONA™ RMX Chukka Plus</p>
              <p className="font-bold">$144.95</p>
            </div>

            {/* Product 3 */}
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md">
              <img
                className="w-full h-64 object-contain mb-4"
                src="https://m.media-amazon.com/images/I/61Of4qULMOL._AC_SR768,1024__FMwebp_.jpg"
                alt="Product 3"
              />
              <div className="absolute top-2 right-2">
                <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={regularHeart} size="lg" />
                </button>
              </div>
              <div className="flex space-x-2 mb-2">
                {/* Color options */}
                <span className="h-6 w-6 bg-yellow-500 rounded-full"></span>
                <span className="h-6 w-6 bg-pink-500 rounded-full"></span>
              </div>
              <p className="font-bold text-lg">Hey Dude Kids</p>
              <p className="text-gray-600 mb-2">Wally Funk Spongebob</p>
              <p className="font-bold">$54.99</p>
            </div>
          </div>
        </div>
      </div>


      {/* section 8 */}


      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold text-black mt-8'>Your New Go-Tos</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-8'>
          <div>
            <img src={photoJ} alt="photoJ" />
            <h1 className='text-xl text-black mt-4 p-3 text-center'>Flowy dresses with sporty kicks?its a yes!Unexpected pairings are all the rage.</h1>
            <p className='underline font-bold text-lg text-center'>Shop ASICS</p>
          </div>

          <div>
            <img src={photoK} alt="photoK" />
            <h1 className='text-xl text-black mt-4 p-3 text-center'>What happens when go-to pieces find their perfect partners? Style magic.</h1>
            <p className='underline font-bold text-lg text-center'>Shop Favorite Pairings</p>
          </div>

          <div>
            <img src={photoL} alt="photoL" />
            <h1 className='text-xl text-black mt-4 p-3 text-center'>Introduce effortless fall appeal into your wardrobe with our top picks</h1>
            <p className='underline font-bold text-lg text-center'>Shop Sam Edelman</p>
          </div>

        </div>

      </div>


      {/* 10th section slider */}
      {/* Your slider content goes here */}

      <div className="container mx-auto my-8 p-6 mt-[100px]">
        <h2 className="text-3xl font-bold mb-8">Zappos 25th Birthday Exclusives</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4 relative bg-white rounded-lg shadow-lg">
              {/* Heart Button */}
              <div className="absolute top-4 right-4">
                <button className="heart-button h-10 w-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                  <FaHeart size="1.5rem" />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded-lg"
              />

              {/* Product Title */}
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

              {/* Product Price */}
              <p className="text-gray-600 font-bold">{product.price}</p>

              {/* Color Picker */}
              <div className="flex space-x-2 mt-2">
                <span className="h-6 w-6 bg-black rounded-full"></span>
                <span className="h-6 w-6 bg-black rounded-full"></span>
                <span className="h-6 w-6 bg-blue-900 rounded-full"></span>
                <span className="h-6 w-6 bg-red-800 rounded-full"></span>


                {/* {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`h-6 w-6 rounded-full`}
                    style={{ backgroundColor: color }}
                  />
                ))} */}
              </div>

              {/* Ratings */}
              <div className="flex items-center mt-2">
                <img src={ratings} />


                {/* {Array(product.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-500" />
                  ))}
                {Array(5 - product.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <FaStar key={idx} className="text-gray-300" />
                  ))} */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold text-center mb-8">Product Slider</h2>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="p-4">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div> */}



      {/* 11th section */}

      <div className="container mx-auto p-8 mt-[100px]">
        <div className="grid grid-cols-4 gap-4">
          {/* Left side "New Arrivals" card */}
          <div className='flex flex-col justify-center col-span-1'>
            <img
              className="w-full h-85 object-cover mb-2"
              src="https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.30/MELODY-GRID-MMK-658x916-NEW._FMwebp_.jpg"
              alt="Product 1"
            />



            <h1 className="text-2xl font-bold">Shop MICHAEL Michael Kors</h1>
          </div>



          {/* Right side product cards */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {/* Product 1 */}
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md">
              <img
                className="w-full h-64 object-cover mb-4"
                src="https://m.media-amazon.com/images/I/71RXCL31CIL._AC_SR768,1024__FMwebp_.jpg"
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
                <span className="h-6 w-6 bg-red-900 rounded-full"></span>
                <span className="h-6 w-6 bg-black rounded-full"></span>
              </div>
              <p className="font-bold text-lg">MICHAEL Michael Kors</p>
              <p className="text-gray-900 mb-2">Luna Boots</p>
              <p className="font-bold">$275.00</p>
            </div>

            {/* Product 2 */}
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md">
              <img
                className="w-full h-64 object-cover mb-4"
                src="https://m.media-amazon.com/images/I/61aFGPh0XrL._AC_SR768,1024__FMwebp_.jpg"
                alt="Product 2"
              />
              <div className="absolute top-2 right-2">
                <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={regularHeart} size="lg" />
                </button>
              </div>
              <div className="flex space-x-2 mb-2">
                {/* Color options */}
                <span className="h-6 w-6 bg-gray-800 rounded-full"></span>
                <span className="h-6 w-6 bg-red-900 rounded-full"></span>
                <span className="h-6 w-6 bg-gray-800 rounded-full"></span>
              </div>
              <p className="font-bold text-lg">MICHAEL Michael Kors</p>
              <p className="text-gray-900 mb-2">Asher Boots</p>
              <p className="font-bold">$225.00</p>
            </div>

            {/* Product 3 */}
            <div className="relative flex flex-col items-center bg-white p-4 shadow-md">
              <img
                className="w-full h-64 object-cover mb-4"
                src="https://m.media-amazon.com/images/I/51pRpmmGEJL._AC_SR768,1024__FMwebp_.jpg"
                alt="Product 3"
              />
              <div className="absolute top-2 right-2">
                <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                  <FontAwesomeIcon icon={regularHeart} size="lg" />
                </button>
              </div>
              <div className="flex space-x-2 mb-2">
                {/* Color options */}
                <span className="h-6 w-6 bg-black rounded-full"></span>
                <span className="h-6 w-6 bg-gray-900 rounded-full"></span>
              </div>
              <p className="font-bold text-lg">MICHAEL Michael Kors</p>
              <p className="text-gray-900 mb-2 ">Calisle Flat Bootie</p>
              <p className="font-bold">$225.00</p>
            </div>
          </div>
        </div>
      </div>


      {/* LAST SECTION */}

      <div className='container mx-auto w-[95%] mt-[60px]' >

        <h1 className='text-2xl text-black mb-4 font-bold'>Ways to Shop & Save!</h1>


        <div className="grid  grid-cols-1 md:grid-cols-3 h-[130px] gap-3">
          {/* 1fr Column for background image */}
          <div
            className="col-span-1 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-2-VIP-896x300._FMwebp_.png")' }}
          >
            {/* Optionally, add more content inside */}
          </div>

          {/* 1fr Column for background image */}
          <div
            className="col-span-1 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-1-PRIME-896x300._FMwebp_.png")' }}
          >
            {/* Optionally, add more content inside */}
          </div>


          {/* 1fr Column for background image */}
          <div
            className="col-span-1 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://m.media-amazon.com/images/G/01/Zappos/HPVIP/HP-TILES-4-APP-COUPON-896x300._FMwebp_.png")' }}
          >
            {/* Optionally, add more content inside */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
