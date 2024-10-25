import React, { useContext, useEffect, useState } from 'react'; // Ensure React is imported only once
import { Link } from "react-router-dom"; // Only this line for Link import
import { CartContext } from '../context/CartContext'; // Import CartContext



const CartPage = () => {
  const { cartItems, totalAmount, removeItem, deleteCartContents, decrementCart, updateCartQty, products } = useContext(CartContext)
  // if(cartItems.length === 0 ) return <h1 className='text-2xl font-bold text-center mt-10'>Your is Empty</h1>
  console.log(cartItems)
  const [cartTotal, setCartTotal] = useState(0); // State to track total amount

  const findMatchingProducts = (orders, products) => {
    // Ensure orders is an array
    if (!Array.isArray(orders)) {
      console.error('Expected orders to be an array, but got:', orders);
      return [];
    }

    const matchedProducts = [];

    // Loop through orders and their product IDs
    orders.forEach(order => {
      order.products.forEach(orderProduct => {
        // Check if order product matches any product in products array
        const matchingProduct = products.find(product => product.id === orderProduct.id);

        if (matchingProduct) {
          matchedProducts.push({
            ...matchingProduct, // Spread the matched product details
            orderQuantity: orderProduct.quantity, // Include the order quantity
            orderAmount: orderProduct.amount // Include the order amount
          });
        }
      });
    });
    return matchedProducts;
  };

  

  // Get the matched products
  const matchedProducts = findMatchingProducts(cartItems, products);

  console.log(matchedProducts);

  // Calculate total price for all cart items
  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.price); // Ensure price is a number
      return acc + (isNaN(price) ? 0 : price * item.orderQuantity); // Handle NaN case
    }, 0);
    setCartTotal(total);
  };

  // Update quantity and recalculate total
  const handleUpdateQty = (id, newQuantity) => {
    updateCartQty(id, newQuantity); // Update cart context with new quantity
    calculateTotalAmount(matchedProducts); // Recalculate total amount
  };

  useEffect(() => {
    // Recalculate total amount when cartItems or products change
    calculateTotalAmount(matchedProducts);
  }, [cartItems, products]);







  const photoA = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-1B-RUNNING-SHOES-432x540._FMwebp_.jpg"
  const photoB = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-2B-LIFESTYLE-SNEAKERS-432x540_1._FMwebp_.jpg"
  const photoC = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-3B-ANKLE-BOOTIES-432x540._FMwebp_.jpg"
  const photoD = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-4B-KNEE-HIGH-BOOTS-432x540._FMwebp_.jpg"
  const photoE = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-5B-FLATS-432x540._FMwebp_.jpg"
  const photoF = "https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/9.16/TRENDING-CATEGORY-6B-LOAFERS-432x540._FMwebp_.jpg"

  const visa = "https://m.media-amazon.com/images/G/01/zappos/ui/visa._CB1714422960_.svg"
  const master = "https://m.media-amazon.com/images/G/01/zappos/ui/mastercard._CB1714422960_.svg"
  const discover = "https://m.media-amazon.com/images/G/01/zappos/ui/discover._CB1714422960_.svg"
  const express = "https://m.media-amazon.com/images/G/01/zappos/ui/amex._CB1714422960_.svg"
  const amazon = "https://m.media-amazon.com/images/G/01/zappos/ui/amazon._CB556809646_.svg"
  const paypal = "https://m.media-amazon.com/images/G/01/zappos/ui/paypal._CB1714422960_.svg"
  const afterpay = "https://m.media-amazon.com/images/G/01/zappos/ui/afterpay._CB1714422960_.svg"

  
  return (
    <div>

      <div className="container mx-auto p-4">
        <div className="p-4">
          {/* VIP Banner */}
          <div className="bg-blue-100 text-center py-2 text-sm text-gray-800">
            <span className="text-black ">Check out to earn Zappos VIP points worth up to <span className="text-black">$1.25</span> in VIP codes. </span>
            <a href="#" className="text-black underline">Sign in to get started!</a>
          </div>

          {/* Continue Shopping Link */}
          <div className="mt-4">
            <a href="#" className="text-slate-600  text-md underline">
              &larr; Continue Shopping
            </a>
          </div>

          {/* Info Blocks */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Free Shipping and Returns */}
            <div className="bg-gray-100 p-4 rounded-lg flex items-start">
              <div className="flex-shrink-0">
                <span className="block bg-blue-500 p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.116 4.672a2 2 0 001.873 1.494h9.022a2 2 0 001.873-1.494L21 10M5.348 6.948C5.503 6.37 5.992 6 6.616 6H17.384c.624 0 1.113.37 1.268.948l1.352 5.398A2 2 0 0118.073 14H5.927a2 2 0 01-1.931-1.654L2.648 6.948z" />
                  </svg>
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg">Free Shipping and Returns</h3>
                <p className="text-sm text-gray-600">365 days to return items for a refund!</p>
                <a href="#" className="text-slate-600 text-sm underline">Shipping and Return Policy</a>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-gray-100 p-4 rounded-lg flex items-start">
              <div className="flex-shrink-0">
                <span className="block bg-orange-500 p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c-1.104 0-2-.672-2-1.5S10.896 8 12 8s2 .672 2 1.5S13.104 11 12 11zM7 11c-1.104 0-2-.672-2-1.5S5.896 8 7 8s2 .672 2 1.5S8.104 11 7 11z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8.063c.009.296.041.586.094.872l.21.96c.027.126.054.25.081.374a6.003 6.003 0 01-1.55 5.332 6.003 6.003 0 01-4.343 2.343H9a6 6 0 01-5.997-5.558A4.02 4.02 0 004 13a5 5 0 015-5h6a5 5 0 015 5c0 .335-.036.665-.105.989a7.978 7.978 0 00-.605-.926A4.01 4.01 0 0117 8.063z" />
                  </svg>
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg">Privacy Policy</h3>
                <p className="text-sm text-gray-600">We don’t rent or sell your personal information to anyone.</p>
                <a href="#" className=" text-slate-600 underline">Read our Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* main dynamic code div starts here */}

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 mt-4"> My Bag</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 border border-gray-300 p-4">
            <div className="flex justify-between border-b pb-4">
              <div className="container mx-auto p-6 space-y-4">
                {/* Conditional Rendering of Cart Items */}
                {cartItems && cartItems.length === 0 ? (
                  <h1 className='text-2xl font-bold text-center mt-10'>Your cart is empty</h1>
                ) : (
                  <div>
                    {
                      matchedProducts?.map((item) => {
                        const price = parseFloat(item.price); // Ensure price is a number
                        const displayPrice = isNaN(price) ? "N/A" : price.toFixed(2); // Handle NaN case
                        const total = (price * item.orderQuantity).toFixed(2); // Calculate total
                        
                        return (
                          <div key={item.id} className="flex justify-between items-center gap-[20px] mb-4">
                            <img src={item.images[0]} alt={item.title} className='w-20 h-20 object-contain' />
                            <div className="ml-4">
                              <h2 className="text-lg">{item.title}</h2>

                              <div className="ml-4">
                                <h2 className="text-lg font-medium">{item.title}</h2>
                                <p className="mt-2">£{displayPrice}</p>
                                <p className="mt-2">Total: £{total}</p> {/* Individual total */}
                              </div>

                              

                              {/* Quantity dropdown select */}
                              <div className="ml-auto">
                                {/* Quantity dropdown select */}
                                <select
                                  value={item.orderQuantity}
                                  onChange={(e) => handleUpdateQty(item.id, parseInt(e.target.value, 10))} // Parse the value to integer
                                  className="border rounded p-1"
                                >
                                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                    <option key={num} value={num}>
                                      {num}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              
                            </div>

                            {/* Remove button */}
                            <button className='bg-red-500 text-white px-2 rounded' onClick={() => removeItem(item.id)}>
                              Remove
                            </button>
                          </div>
                        );
                      })
                    }

                  </div>
                )}

                
              </div>
            </div>
          </div>



          <div className="col-span-1 border border-gray-300">
            {/* Cart Item */}

            <div className="flex flex-col">
              {/* Order Summary */}
              <div className=" p-4 bg-blue-50 rounded-lg ">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span>Subtotal (1 item)</span>
                  {/* <span>{item.price}</span> */}
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
                  <span className="text-xl mt-6 font-bold">Total: £{cartTotal.toFixed(2)}</span>
                  
                </div>
                {/* clearcart */}
                <button className="bg-black text-white w-full py-2 mt-4 rounded-lg font-bold hover:bg-blue-700" onClick={deleteCartContents}>
                  Clear Cart
                </button>

                {/* Checkout Button */}
                <button className="bg-black text-white w-full py-2 mt-4 rounded-lg font-bold hover:bg-blue-700">Proceed to Checkout</button>
              </div>

              {/* Payment Options */}
              <div className="mt-4">

                {/* Payment Icons */}
                <div className="mt-4 flex space-x-2">
                  <img src={visa} alt="Visa" className="h-6" />
                  <img src={master} alt="Mastercard" className="h-6" />
                  <img src={discover} alt="Discover" className="h-6" />
                  <img src={express} alt="American express" className="h-6" />
                  <img src={amazon} alt="Amazon" className="h-6" />
                  <img src={paypal} alt="Paypal" className="h-6" />
                  <img src={afterpay} alt="Afterpay" className="h-6" />
                </div>

                <div className="mt-8">
                  <p className="text-black font-bold text-xl">Free Shipping and Returns</p>
                  <p className="text-lg text-black">365 days to return items for a refund!</p>
                  <Link className="text-black font-bold text-xl underline">Shipping and Return Policy</Link>
                </div>


                <div className="mt-12 border-t border-dotted border-gray-700">
                  <p className="text-black font-bold text-xl">Free Shipping and Returns</p>
                  <p className="text-lg text-black">365 days to return items for a refund!</p>
                  <Link className="text-black font-bold text-xl underline">Shipping and Return Policy</Link>
                </div>


              </div>
            </div>


          </div>
        </div>

      </div>
      {/* dynamic code div ends here? */}




      {/* static code  div starts here */}
      <div className='container mx-auto  mb-10 w-[95%]'>
        <h1 className='text-5xl font-bold text-black mt-8'>Best Seller</h1>
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



    </div>

  );
};

export default CartPage;
