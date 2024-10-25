import React from "react";


const CartPage=()=> {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Bag</h1>

      {/* Cart Item */}
      <div className="flex justify-between items-start border-b pb-4">
        <div className="flex space-x-4">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.img}
              alt=""
              className="w-24 h-32"
            />
            <span className="absolute top-2 left-2 text-red-500 text-sm">
              3 left
            </span>
          </div>
          {/* Product Details */}
          <div>
            <h2 className="text-xl font-bold">VIONIC</h2>
            <p>{product.name}</p>
            <p>
              <span className="font-bold">Color:</span> Seashells by the Seashore
            </p>
            <p>
              <span className="font-bold">Size:</span> One Size
            </p>
          </div>
        </div>

        {/* Quantity and Price */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <button className="border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center">
              -
            </button>
            <span>1</span>
            <button className="border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center">
              +
            </button>
          </div>
          <p className="text-xl font-bold">{product.price}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-4 mt-4">
        <button className="text-gray-600 underline">Remove</button>
        <button className="text-gray-600 underline flex items-center space-x-1">
          <span>Move To</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>

      {/* Order Summary */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg w-full lg:w-1/3">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal (1 item)</span>
          <span>{product.price}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Estimated Tax</span>
          <span>Calculated at Checkout</span>
        </div>
        <div className="border-t pt-2 flex justify-between">
          <span className="font-bold text-xl">Estimated Total</span>
          <span className="font-bold text-xl">{product.price}</span>
        </div>

        {/* Checkout Button */}
        <button className="bg-black text-white w-full py-2 mt-4 rounded-lg">
          Checkout
        </button>
      </div>

      {/* Payment Options */}
      <div className="mt-4">
        <p className="text-sm">Free Shipping and Returns</p>
        <p className="text-sm">365 days to return items for a refund!</p>
        <a href="#" className="text-blue-500 underline">
          Shipping and Return Policy
        </a>

        {/* Payment Icons */}
        <div className="mt-4 flex space-x-2">
          <img src="visa.png" alt="Visa" className="h-6" />
          <img src="mastercard.png" alt="Mastercard" className="h-6" />
          <img src="paypal.png" alt="Paypal" className="h-6" />
          {/* Add more payment icons as needed */}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
