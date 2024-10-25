import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

// ProductGrid component for displaying the grid of products
const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Madewell',
      description: "Silk Bandana",
      price: '$29.99',
      stock: "6 left in stock",
      // label: 'Best Seller',
      img: 'https://m.media-amazon.com/images/I/61gypnmsxhL._AC_SR768,1024__FMwebp_.jpg',
    },
    
    {
      id: 2,
      name: 'HUE',
      description: "HUE Women Knit Throw",
      price: '$62.00',
      stock: "4 left in stock",
      // label: 'New Arrival',
      img: 'https://m.media-amazon.com/images/I/61xSwdlH1DL._AC_SR768,1024__FMwebp_.jpg  ',
    },
    {
      id: 3,
      name: 'Lauren Ralph Lauren',
      description: "Cashmere Blend Wrap",
      price: '$205.12',
      // label: 'Best Seller',
      img: 'https://m.media-amazon.com/images/I/61HUubOZdHL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 4,
      name: 'Madewell',
      description: "Silk Muffler",
      price: '$24.99',
      stock: "2 left in stock",
      // label: 'New Arrival',
      img: 'https://m.media-amazon.com/images/I/71m0B1VuZpL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 5,
      name: 'Madewell',
      description: "Zebra-Print Scarf",
      price: '$89.99',
      label: 'Best Seller',
      img: 'https://m.media-amazon.com/images/I/61Hsg2A1aKL._AC_SR768,1024__FMwebp_.jpg',
    },
    // {
    //   id: 6,
    //   name: 'Pendleton',
    //   description: "Whisperwool Muffler",
    //   price: '$99.39',
    //   label: 'New Arrival',
    //   stock: "6 left in stock",
    //   img: 'https://m.media-amazon.com/images/I/71cUUIR2aEL._AC_SR768,1024__FMwebp_.jpg',
    // },

    
    // {
    //   id: 7,
    //   name: 'Eileen Fisher',
    //   description: "Scarf",
    //   price: '$24.99',
    //   stock: "3 left in stock",
    //   // label: 'New Arrival',
    //   img: 'https://m.media-amazon.com/images/I/718azFGA7mL._AC_SR768,1024__FMwebp_.jpg',
    // },
    {
      id: 6,
      name: 'Barefoot Dreams',
      description: "CozyChic Shawl",
      price: '$19.99',
      // label: 'Best Seller',
      img: 'https://m.media-amazon.com/images/I/71uc3ASTZNL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 7,
      name: 'Lilly Pulitzer',
      description: "Frosti Scarf and Hart Set",
      price: '$70.56',
      label: 'New Arrival',
      // stock: "8 left in stock",
      img: 'https://m.media-amazon.com/images/I/71235XulVJL._AC_SR768,1024__FMwebp_.jpg',
    },
    
    {
      id: 8,
      name: 'UGG',
      description: "Logo Wrap",
      price: '$41.40',
      stock: "5 left in stock",
      // label: 'New Arrival',
      img: 'https://m.media-amazon.com/images/I/71OLC70RxgL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 9,
      name: 'Pendleton',
      description: "Jacquard Scarf",
      price: '$91.54',
      // label: 'Best Seller',
      img: 'https://m.media-amazon.com/images/I/61dmdY-SnVL._AC_SR768,1024__FMwebp_.jpg ',
    },
    {
      id: 10,
      name: 'UGG',
      description: "Infinity Scarf",
      price: '$25.41',
      // label: 'New Arrival',
      stock: "2 left in stock",
      img: 'https://m.media-amazon.com/images/I/81SsbRGQnDL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 11,
      name: 'Carve Designs',
      description: "Harper Infinity Scarf",
      price: '$33.17',
      stock: "6 left in stock",
      // label: 'New Arrival',
      img: "https://m.media-amazon.com/images/I/81yw9Xdv4BL._AC_SR768,1024__FMwebp_.jpg",
    },
    // {
    //   id: 14,
    //   name: 'Carve Designs',
    //   description: "Wool Scarf",
    //   price: '$19.99',
    //   // label: 'Best Seller',
    //   img: 'https://m.media-amazon.com/images/I/71mrt6OFv4L._AC_SR768,1024__FMwebp_.jpg',
    // },
    {
      id: 12,
      name: 'Pendleton',
      description: "Exclusive Shawl",
      price: '$119.30',
      label: 'New Arrival',
      stock: "6 left in stock",
      img: "https://m.media-amazon.com/images/I/81XmRvFqPPL._AC_SR768,1024__FMwebp_.jpg",
    },
    {
      id: 13,
      name: 'Lauren Ralph Lauren',
      description: "Woven Scarf",
      price: '$24.99',
      label: 'New Arrival',
      img: 'https://m.media-amazon.com/images/I/71a-2U-uk4L._AC_SR768,1024__FMwebp_.jpg',
    },
    // {
    //   id: 16,
    //   name: 'Lauren Ralph Lauren',
    //   description: "Multi Fair  Isle Scarf",
    //   price: '$98.00',
    //   label: 'Best Seller',
    //   img: 'https://m.media-amazon.com/images/I/914opkyZ6vL._AC_SR768,1024__FMwebp_.jpg',
    // },
    // {
    //   id: 16,
    //   name: 'Pendleton',
    //   description: "Silk Bandana",
    //   price: '$19.99',
    //   stock: "1 left in stock",
    //   // label: 'New Arrival',
    //   img: 'https://m.media-amazon.com/images/I/91BF4M5omvL._AC_SR768,1024__FMwebp_.jpg',
    // },
    {
      id: 14,
      name: 'Kate New York',
      description: "wool Scarf",
      price: '$74.50',
      stock: "3 left in stock",
      // label: 'New Arrival',
      img: 'https://m.media-amazon.com/images/I/91n27BW22vL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 15,
      name: 'UGG',
      description: "Valerie Scarf",
      price: '$19.99',
      label: 'Best Seller',
      stock: "6 left in stock",
      img: 'https://m.media-amazon.com/images/I/71xqr9-tpLL._AC_SR768,1024__FMwebp_.jpg',
    },
    // {
    //   id: 21,
    //   name: 'Patricia Nash',
    //   description: "Knitted Muffler",
    //   price: '$38.00',
    //   stock: "4 left in stock",
    //   // label: 'New Arrival',
    //   img: 'https://m.media-amazon.com/images/I/71YBqjOq5KL._AC_SR768,1024__FMwebp_.jpg',
    // },
    {
      id: 16,
      name: 'Patricia Nash',
      description: "wool  Scarf",
      price: '$44.00',
      label: 'New Arrival',
      stock: "2 left in stock",
      img: 'https://m.media-amazon.com/images/I/810istIcshL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 17,
      name: 'Kate New York',
      description: "Party Wool Square",
      price: '$19.99',
      // label: 'Best Seller',
      img: 'https://m.media-amazon.com/images/I/817Nc9ISwxL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 18,
      name: 'Lauren Ralph Lauren',
      description: "Isabella  Scarf",
      price: '$68.00',
      label: 'New Arrival',
      stock: "6 left in stock",
      img: 'https://m.media-amazon.com/images/I/818rbY4kGCL._AC_SR768,1024__FMwebp_.jpg',
    },
    // {
    //   id: 22,
    //   name: 'Lauren Ralph Lauren',
    //   description: "Emma Rope Wrap",
    //   price: '$61.20',
    //   stock: "8 left in stock",
    //   // label: 'New Arrival',
    //   img: "https://m.media-amazon.com/images/I/81RUUMQo0FL._AC_SR768,1024__FMwebp_.jpg"
    // },
    // {
    //   id: 23,
    //   name: 'Patricia Nash',
    //   description: "Coin Scarf",
    //   price: '$69.00',
    //   label: 'Best Seller',
    //   stock: "6 left in stock",
    //   img: 'https://m.media-amazon.com/images/I/91ouC0Hm3vL._AC_SR768,1024__FMwebp_.jpg',
    // },
    {
      id: 19,
      name: 'Patricia Nash',
      description: "Scarf",
      price: '$38.00',
      label: 'New Arrival',
      img: 'https://m.media-amazon.com/images/I/91brKkTXOIL._AC_SR768,1024__FMwebp_.jpg',
    },
    {
      id: 20,
      name: 'Pendeleton',
      description: "Wool Muffler",
      price: '$44.40',
      label: 'New Arrival',
      img: "https://m.media-amazon.com/images/I/81SsbRGQnDL._AC_SR768,1024__FMwebp_.jpg"
    }
  ];

  return (
    <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products?.map((product,) => (
        <Link to={`/product/${product.id}`} state={{ product }} key={product.id} className="relative bg-white p-4 rounded-lg shadow-lg">
          {/* Heart Icon */}
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full border border-gray-300 hover:bg-blue-500 group">
            <FaHeart className="text-gray-400 group-hover:text-white" />
          </button>

          {/* Product Image */}
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto rounded-lg mb-4 mt-4"
          />

          {/* Product Label */}
          {product.label && (
            <div
              className={`absolute top-1 left-0 px-4 py-2 rounded-full border-b shadow-lg shadow-yellow-500 border-black text-sm font-semibold ${product.label === 'Best Seller' ? 'bg-white text-black' : 'bg-white text-black'
                }`}
            >
              {product.label}
            </div>
          )}

          {/* Product stock */}
          {product.stock && (
            <div
              className={` text-red-600 bg-red-200 font-bold text-sm absolute bottom-1 left-0 px-2 py-1.5 mb-[160px]  rounded-full border-b border-black ${product.stock === 'Best Seller' ? 'bg-white text-black' : 'bg-white text-black'
                }`}
            >
              {product.stock}
            </div>
          )}

          {/* Stock Info */}
          {/* <p className=" text-red-600 font-bold text-sm absolute bottom-1 left-0 px-2 py-1.5 mb-[160px]  rounded-full border-b border-black">
            {product.stock}
          </p> */}

          {/* Product Details */}
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-700">{product.price}</p>
          <span className="text-blue-600">★★★★★</span>



        </Link>
      ))}
    </div>

  )


};

export default ProductGrid;
