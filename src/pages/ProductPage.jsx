import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FaInfoCircle } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaStar, FaRegThumbsUp } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';  // api cotent starts here
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';


const base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const ProductPage = () => {


    const [productDetail, setProductDetail] = useState(null); // Start with null for loading state
    const { id } = useParams();
    const { addCartItem } = useContext(CartContext);
    const navigate = useNavigate(); // Use the useNavigate hook
    // const { products, product, addCart, base_url } = useContext(CartContext);


    // Fetch product details based on the ID
    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const res = await axios.get(`${base_url}/products/${id}`);
                setProductDetail(res.data); // Set the product details from the response
            } catch (error) {
                console.error('Error fetching single product data:', error);
            }
        };
        fetchSingleProduct(); // Call the function to fetch product
    }, [id]);

    // If productDetail is still loading, show a loading state or message
    if (!productDetail) {
        return <div className="text-center">Loading product details...</div>;
    }


    const addedtocart = () => {
        const data = {
            "product_id": id,
            "quantity": 1,
            has_variation: false,
            user_id: JSON.parse(localStorage.getItem("user")).id
        }

        // console.log(data)
        addCartItem(data)
        navigate('/CartPage'); // Navigate to cart page after adding the item
    }




    const photoA = "https://m.media-amazon.com/images/I/61esHDbFiRL._AC_SR768,1024__FMwebp_.jpg"
    const photoB = "https://m.media-amazon.com/images/I/61Hsg2A1aKL._AC_SR768,1024__FMwebp_.jpg"
    const photoC = "https://m.media-amazon.com/images/I/71mLWo3DMhL._AC_SR768,1024__FMwebp_.jpg"
    const photoD = "https://m.media-amazon.com/images/I/810istIcshL._AC_SR768,1024__FMwebp_.jpg"

    return (
        <div>
            <div className="container mx-auto px-8 mt-[80px]">
                {/* Back link */}
                <div className="mb-4 text-sm ">
                    <Link className="text-black underline">
                        &laquo; Back
                    </Link>
                    <span className="text-black"> | Accessories / Scarves / </span>
                    <Link className="text-black text-md underline font-bold">
                        {productDetail.title}
                    </Link>
                </div>

                <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 ">
                    {/* Product Image */}
                    <div className="col-span-2 relative ">
                        {/* Heart Icon */}
                        <div className="absolute top-4 right-4 mr-10">
                            <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                                <FontAwesomeIcon icon={regularHeart} size="lg" />
                            </button>
                        </div>

                        {/* Product Image */}
                        <div className='mt-[70px]'>
                            <img
                                src={productDetail.images}
                                alt=""
                                className="w-[600px] h-[600px] rounded-lg"
                            />
                        </div>


                    </div>

                    {/* Product Details */}
                    <div className='col-span-1 border-b pb-[50px] border-dotted border-gray-700'>
                        <h1 className="text-md font-bold mb-6 underline">{productDetail.title}</h1>
                        <p className="text-3xl text-black  font-bold">{productDetail.descp}</p>
                        <p className="text-md mb-4">SKU 9975269</p>

                        {/* Price */}
                        <div className="text-2xl font-bold">{productDetail.price}</div>

                        {/* Installment Payment Option */}
                        <p className="text-md mb-4">
                            or 4 interest-free payments of $9.50 with{" "}
                            <Link className="text-black underline">
                                afterpay
                            </Link>
                        </p>

                        {/* Ratings */}
                        <div className="flex items-center mb-4">
                            <div className="flex items-center">
                                <span className="text-blue-600 w-[60px]">★★★★★</span>
                                <span className="ml-2 underline text-black">(12)</span>
                            </div>
                        </div>

                        {/* Color and Size Information */}
                        <div className="mb-4">
                            <span className="font-bold">Color:</span><span>{productDetail.descp}</span>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={productDetail.images}
                                    alt="Seashells Color"
                                    className="w-12 h-12 border border-gray-900"
                                />

                            </div>
                        </div>

                        <div className="mb-4">
                            <span className="font-bold">Size:</span><span>One Size</span>

                        </div>

                        {/* Stock Information */}
                        <div className="mb-4 text-red-700 justify-center text-center">
                            {/* <p>{product.stock}</p> */}

                            <p>only 3 left in stock!</p>
                        </div>

                        {/* Add to Bag Button */}
                        <button
                            onClick={() => addedtocart()}
                            className="bg-black text-white py-2 px-4 rounded-lg w-full font-bold hover:bg-blue-700"
                        >
                            Add to Bag
                        </button>
                        {/* <button onClick={() => addCart(product)} className="bg-black text-white py-2 px-4 rounded-lg w-full font-bold hover:bg-blue-700">

                            Add to Bag

                        </button> */}

                        {/* Free Shipping Information */}
                        <div className="mt-4 text-sm text-center mb-6 ">
                            <p className="font-bold">FREE Shipping!</p>
                            <p className="text-gray-500">
                                on orders over $50 or with <Link className="text-black underline">Rewards Membership</Link>
                            </p>
                        </div>

                        {/* Product Information Heading */}
                        <h2 className="text-lg font-bold mb-2">Product Information</h2>

                        {/* Vionic Logo */}
                        <div className="flex mb-2">
                            <h1 className="text-[44px] text-gray-600 font-semibold ">{productDetail.title}</h1>

                        </div>

                        {/* Product Features */}
                        <ul className="list-disc pl-6 text-md mb-4">
                            <li className='mb-2'>Dive into style wearing the <span className="font-semibold">VIONIC®</span> Seashells by the Seashore Scarf.
                                Featuring intricate seaside prints, this scarf effortlessly elevates any
                                outfit. Its open closure design ensures versatile wear, offering you a
                                chic and breezy accessory for any occasion.</li>
                            <li className='mb-2'>100% viscose.</li>
                            <li className='mb-2'>Machine washable.</li>
                            <li className='mb-2'>Imported.</li>
                        </ul>

                        {/* Glossary Link and Report Section */}
                        <div className=" mb-12">
                            <Link className="text-black underline text-lg">
                                View Zappos.com Glossary of Terms
                            </Link>
                            <p className="text-xs text-gray-900 mt-2">
                                Find something wrong in this description? Help us fix it!{" "}
                                <Link className="underline">
                                    Report An Error
                                </Link>
                            </p>
                        </div>







                    </div>
                </div>
            </div>




            {/* STATIC IMAGE CONTENT? */}
            <div className='container mx-auto py-10 px-4'>
                <h2 className="text-2xl font-bold mb-2 ml-4">Customers Who Viewed This Item Also Viewed</h2>
                <div className="col-span-4 grid grid-cols-4 gap-6 p-4">
                    {/* product 1 */}
                    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                        {/* Best Seller Badge */}
                        <div className="absolute top-2 left-2 bg-white border border-yellow-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
                            Best Seller
                        </div>
                        {/* Image Section */}
                        <img className="w-full h-56 object-contain rounded-t-lg" src={photoA} alt="Product 1" />
                        {/* Heart Icon */}
                        <div className="absolute top-2 right-2">
                            <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                                <FontAwesomeIcon icon={regularHeart} size="lg" />
                            </button>
                        </div>
                        {/* Product Details */}
                        <div className="p-4">
                            {/* Product Color Options */}
                            <div className="text-sm text-gray-500 mb-2">3 colors/patterns</div>
                            {/* Product Name */}
                            <h3 className="text-lg font-semibold">Patricia Nash</h3>
                            <p>Scarf</p>
                            {/* Price Section */}
                            <div className="flex items-center mt-2 mb-1">
                                <span className="text-lg font-bold text-blue-700">$25.00</span>
                                <span className="text-sm text-gray-400 line-through ml-2">$35.00</span>

                            </div>
                            {/* Ratings Section */}
                            <span className="text-blue-700">★★★★★</span>
                            <div className="text-sm text-blue-600 font-semibold">4.5 ★ (100 reviews)</div>
                            {/* Stock Info */}
                            <div className="mt-1 text-sm font-semibold text-red-500">Only 5 left in stock!</div>
                        </div>
                    </div>

                    {/* product 2 */}
                    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                        {/* Best Seller Badge */}
                        <div className="absolute top-2 left-2 bg-white border border-yellow-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
                            Best Seller
                        </div>
                        {/* Image Section */}
                        <img className="w-full h-56 object-contain rounded-t-lg" src={photoB} alt="Product 2" />
                        {/* Heart Icon */}
                        <div className="absolute top-2 right-2">
                            <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                                <FontAwesomeIcon icon={regularHeart} size="lg" />
                            </button>
                        </div>
                        {/* Product Details */}
                        <div className="p-4">
                            {/* Product Color Options */}
                            <div className="text-sm text-gray-500 mb-2">4 colors/patterns</div>
                            {/* Product Name */}
                            <h3 className="text-lg font-semibold">Madewell</h3>
                            <p>Cotton Scarf</p>
                            {/* Price Section */}
                            <div className="flex items-center mt-2 mb-1">
                                <span className="text-lg font-bold text-blue-700">$45.00</span>
                                <span className="text-sm text-gray-400 line-through ml-2">$60.00</span>
                            </div>
                            {/* Ratings Section */}
                            <span className="text-blue-700">★★★★★</span>
                            <div className="text-sm text-blue-600 font-semibold">4.0 ★ (50 reviews)</div>
                            {/* Stock Info */}
                            <div className="mt-1 text-sm font-semibold text-red-500">In Stock</div>
                        </div>
                    </div>

                    {/* product 3 */}
                    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                        {/* Best Seller Badge */}
                        <div className="absolute top-2 left-2 bg-white border border-yellow-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
                            Best Seller
                        </div>
                        {/* Image Section */}
                        <img className="w-full h-56 object-contain rounded-t-lg" src={photoC} alt="Product 3" />
                        {/* Heart Icon */}
                        <div className="absolute top-2 right-2">
                            <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                                <FontAwesomeIcon icon={regularHeart} size="lg" />
                            </button>
                        </div>
                        {/* Product Details */}
                        <div className="p-4">
                            {/* Product Color Options */}
                            <div className="text-sm text-gray-500 mb-2">2 colors/patterns</div>
                            {/* Product Name */}
                            <h3 className="text-lg font-semibold">Pendleton</h3>
                            <p>Wool Muffler</p>
                            {/* Price Section */}
                            <div className="flex items-center mt-2 mb-1">
                                <span className="text-lg font-bold text-blue-700">$30.00</span>
                                <span className="text-sm text-gray-400 line-through ml-2">$50.00</span>
                            </div>
                            {/* Ratings Section */}
                            <span className="text-blue-700">★★★★★</span>
                            <div className="text-sm text-blue-600 font-semibold">4.8 ★ (150 reviews)</div>
                            {/* Stock Info */}
                            <div className="mt-1 text-sm font-semibold text-red-500">Limited Stock</div>
                        </div>
                    </div>

                    {/* product 4 */}
                    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                        {/* Best Seller Badge */}
                        <div className="absolute top-2 left-2 bg-white border border-yellow-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
                            Best Seller
                        </div>
                        {/* Image Section */}
                        <img className="w-full h-56 object-contain rounded-t-lg" src={photoD} alt="Product 4" />
                        {/* Heart Icon */}
                        <div className="absolute top-2 right-2">
                            <button className="heart-button h-10 w-10 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition duration-300">
                                <FontAwesomeIcon icon={regularHeart} size="lg" />
                            </button>
                        </div>
                        {/* Product Details */}
                        <div className="p-4">
                            {/* Product Color Options */}
                            <div className="text-sm text-gray-500 mb-2">5 colors/patterns</div>
                            {/* Product Name */}
                            <h3 className="text-lg font-semibold">Roxy</h3>
                            <p>Brushed Muffler</p>
                            {/* Price Section */}
                            <div className="flex items-center mt-2 mb-1">
                                <span className="text-lg font-bold text-blue-700">$40.00</span>
                                <span className="text-sm text-gray-400 line-through ml-2">$55.00</span>
                            </div>
                            {/* Ratings Section */}
                            <span className="text-blue-700">★★★★★</span>
                            <div className="text-sm text-blue-600 font-semibold">3.5 ★ (80 reviews)</div>
                            {/* Stock Info */}
                            <div className="mt-1 text-sm font-semibold text-red-500">Out of Stock</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='container mx-auto py-6 px-4'>
                <h2 className="text-3xl font-bold mb-2 ml-4">Discover More Items</h2>
                <div className="col-span-4 grid grid-cols-4 gap-4 p-4">
                    {/* product 1 */}
                    <div className="max-w-sm bg-white border border-gray-200">
                        <div className="relative">
                            <img className="w-full h-70 mt-6 object-cover  bg-gray-100 rounded-t-lg" src="https://m.media-amazon.com/images/I/71yoe4nPWbL._AC_SX400_SR432,540,1,C_BR-10_FMwebp_.jpg" alt="Sherpa Scarf" />
                            <div className="absolute top-2 left-2 bg-white border rounded-full px-2 py-1 flex gap-2">
                                <span className="text-sm font-semibold">Sponsored</span>
                                <FaInfoCircle size={20} className="bg-white text-gray-500" />
                            </div>

                        </div>
                        <div className="p-4">
                            {/* Color Options */}
                            <div className="flex space-x-2 mb-3">
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-yellow-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-blue-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-slate-600"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-red-900"></button>
                            </div>
                            {/* Product Name and Description */}
                            <h3 className="text-md font-bold">Taos Footwear</h3>
                            <p className="text-gray-500">Star</p>
                            <p className="text-gray-500 text-sm">Women`s</p>
                            <p className="text-xl font-bold">$70.00</p>


                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1">
                                {/* Full Stars */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Half or Empty Star */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Review Count */}
                                <span className="text-gray-500 text-sm">(192)</span>
                            </div>





                        </div>
                    </div>

                    {/* product 2 */}
                    <div className="max-w-sm bg-white border border-gray-200">
                        <div className="relative">
                            <img className="w-full h-70 bg-gray-100 object-cover rounded-t-lg" src="https://m.media-amazon.com/images/I/71vnbJpK12L._AC_SR768,1024__FMwebp_.jpg" alt="Chunky Mitten" />
                            <div className="absolute top-2 left-2 bg-white border rounded-full px-2 py-1 flex gap-2">
                                <span className="text-sm font-semibold">Sponsored</span>
                                <FaInfoCircle size={20} className="bg-white text-gray-500" />
                            </div>

                        </div>
                        <div className="p-4">
                            {/* Color Options */}
                            <div className="flex space-x-2 mb-3">
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-gray-800"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-red-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-blue-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-slate-600"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-yellow-900"></button>
                            </div>
                            {/* Product Name and Description */}
                            <h3 className="text-lg font-bold">New Balance</h3>
                            <p className="text-gray-500">Freshfoam X Vongo V6</p>
                            <p className="text-gray-400 text-sm">Unisex</p>
                            <p className="text-xl font-bold">$164.95</p>


                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1">
                                {/* Full Stars */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Half or Empty Star */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Review Count */}
                                <span className="text-gray-500 text-sm">(16)</span>
                            </div>


                        </div>
                    </div>

                    {/* product 3 */}
                    <div className="max-w-sm bg-white border border-gray-200">
                        <div className="relative">
                            <img className=" w-full h-70 object-cover bg-gray-100 rounded-t-lg" src="https://m.media-amazon.com/images/I/618KRT-trTL._AC_SR768,1024__FMwebp_.jpg" alt="Rib Knit Scarf" />
                            <div className="absolute top-2 left-2 bg-white border rounded-full px-2 py-1 flex gap-2">
                                <span className="text-sm font-semibold">Sponsored</span>
                                <FaInfoCircle size={20} className="bg-white text-gray-500" />
                            </div>

                        </div>
                        <div className="p-4">
                            {/* Color Options */}
                            <div className="flex space-x-2 mb-3">
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-red-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-blue-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-gray-800"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-yellow-900"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-slate-600"></button>
                                <p>+4</p>
                            </div>
                            {/* Product Name and Description */}
                            <h3 className="text-lg font-bold">Altra</h3>
                            <p className="text-gray-500">Escalante 4</p>
                            <p className="text-gray-400 text-sm">Female</p>
                            <p className="text-xl font-bold">$139.99</p>

                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1">
                                {/* Full Stars */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Half or Empty Star */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Review Count */}
                                <span className="text-gray-500 text-sm">(39)</span>
                            </div>


                        </div>
                    </div>

                    {/* product 4 */}
                    <div className="max-w-sm bg-white border border-gray-200">
                        <div className="relative">
                            <img className="w-full h-70 object-cover rounded-t-lg bg-gray-100" src="https://m.media-amazon.com/images/I/71DCZeW6+2L._AC_SR768,1024__FMwebp_.jpg" alt="Cable Knit Beanie" />
                            <div className="absolute top-2 left-2 bg-white border rounded-full px-2 py-1 flex gap-2">
                                <span className="text-sm font-semibold">Sponsored</span>
                                <FaInfoCircle size={20} className="bg-white text-gray-500" />
                            </div>

                        </div>
                        <div className="p-4">
                            {/* Color Options */}
                            <div className="flex space-x-2 mb-3">
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-black"></button>
                                <button className="w-6 h-6 rounded-full border border-gray-300 bg-slate-600"></button>

                            </div>
                            {/* Product Name and Description */}
                            <h3 className="text-lg font-bold">New Balance</h3>
                            <p className="text-gray-500">Plim Soul</p>
                            <p className="text-gray-400 text-sm">Unisex</p>
                            <p className="text-xl font-bold">$129.95</p>

                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1">
                                {/* Full Stars */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Half or Empty Star */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                </svg>
                                {/* Review Count */}
                                <span className="text-gray-500 text-sm">(89)</span>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            {/* last section here */}
            <div className='container mx-auto py-6 px-4'>
                <h2 className="text-2xl font-bold mb-2 ml-4">Similar Items You May Like</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Product 1 */}
                    <Link to="/product/1" state={{ product: { id: 1, name: 'Product 1' } }} className="relative bg-white p-4 rounded-lg shadow-lg">
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full border border-gray-300 hover:bg-blue-500 group">
                            <FaHeart className="text-gray-400 group-hover:text-white" />
                        </button>

                        {/* Product Image */}
                        <img
                            src="https://m.media-amazon.com/images/I/71E-++f3nPL._AC_SR768,1024__FMwebp_.jpg"
                            alt="Product 1"
                            className="w-full h-auto rounded-lg  mb-4 mt-4"
                        />

                        {/* Product Label */}
                        <div className="absolute top-1 left-0 px-4 py-2 rounded-full border-b shadow-lg shadow-yellow-500 border-black text-sm font-semibold bg-white text-black">
                            Best Seller
                        </div>

                        {/* Product Details */}
                        <h3 className="text-lg font-bold">Sherpa Oversized Muffler</h3>
                        <p className="text-gray-700">Warm and stylish winter muffler</p>
                        <div className='mt-4'>
                            <span className="text-black font-bold">$39.99</span>
                            <span className="text-sm text-gray-400 line-through ml-2">$65.00</span>

                        </div>
                        {/* Star Ratings */}
                        <div className="flex items-center space-x-1">
                            {/* Full Stars */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Half or Empty Star */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Review Count */}
                            <span className="text-gray-500 text-sm">(12)</span>
                        </div>





                    </Link>

                    {/* Product 2 */}
                    <Link to="/product/2" state={{ product: { id: 2, name: 'Product 2' } }} className="relative bg-white p-4 rounded-lg shadow-lg">
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full border border-gray-300 hover:bg-blue-500 group">
                            <FaHeart className="text-gray-400 group-hover:text-white" />
                        </button>

                        {/* Product Image */}
                        <img
                            src="https://m.media-amazon.com/images/I/71lFboW4YUL._AC_SR768,1024__FMwebp_.jpg"
                            alt="Product 2"
                            className="w-full h-auto rounded-lg mb-4 mt-4"
                        />

                        {/* Product Label */}
                        {/* <div className="absolute top-1 left-0 px-4 py-2 rounded-full border-b shadow-lg shadow-yellow-500 border-black text-sm font-semibold bg-white text-black">
                            New Arrival
                        </div> */}

                        {/* Product Details */}
                        <h3 className="text-lg font-bold">Beanie Scarf</h3>
                        <p className="text-gray-700">Stylish knit scarf</p>
                        <div className='mt-4'>
                            <span className="text-black font-bold">$29.99</span>
                            <span className="text-sm text-gray-400 line-through ml-2">$43.90</span>
                        </div>

                        {/* Star Ratings */}
                        <div className="flex items-center space-x-1">
                            {/* Full Stars */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Half or Empty Star */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Half or Empty Star */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>

                            {/* Review Count */}
                            <span className="text-gray-500 text-sm">(6)</span>
                        </div>



                    </Link>

                    {/* Product 3 */}
                    <Link to="/product/3" state={{ product: { id: 3, name: 'Product 3' } }} className="relative bg-white p-4 rounded-lg shadow-lg">
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full border border-gray-300 hover:bg-blue-500 group">
                            <FaHeart className="text-gray-400 group-hover:text-white" />
                        </button>

                        {/* Product Image */}
                        <img
                            src="https://m.media-amazon.com/images/I/61xSwdlH1DL._AC_SR768,1024__FMwebp_.jpg"
                            alt="Product 3"
                            className="w-full h-auto rounded-lg mb-4 mt-4"
                        />

                        {/* Product Label */}
                        {/* <div className="absolute top-1 left-0 px-4 py-2 rounded-full border-b shadow-lg shadow-yellow-500 border-black text-sm font-semibold bg-white text-black">
                            Featured
                        </div> */}

                        {/* Product Details */}
                        <h3 className="text-lg font-bold">HUE</h3>
                        <p className="text-gray-700">HUE,Women`s Knit Throw</p>
                        <div className='mt-4'>
                            <span className="text-black font-bold">$23.00</span>
                            <span className="text-sm text-gray-400 line-through ml-2">$36.90</span>
                        </div>

                        {/* Star Ratings */}
                        <div className="flex items-center space-x-1">
                            {/* Full Stars */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Half or Empty Star */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Review Count */}
                            <span className="text-gray-500 text-sm">(20)</span>
                        </div>

                    </Link>

                    {/* Product 4 */}
                    <Link to="/product/4" state={{ product: { id: 4, name: 'Product 4' } }} className="relative bg-white p-4 rounded-lg shadow-lg">
                        {/* Heart Icon */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full border border-gray-300 hover:bg-blue-500 group">
                            <FaHeart className="text-gray-400 group-hover:text-white" />
                        </button>

                        {/* Product Image */}
                        <img
                            src="https://m.media-amazon.com/images/I/71pZRGqHUjL._AC_SR768,1024__FMwebp_.jpg"
                            alt="Product 4"
                            className="w-full h-auto rounded-lg mb-4 mt-4"
                        />

                        {/* Product Label */}
                        <div className="absolute top-1 left-0 px-4 py-2 rounded-full border-b shadow-lg shadow-yellow-500 border-black text-sm font-semibold bg-white text-black">
                            Limited Edition
                        </div>

                        {/* Product Details */}
                        <h3 className="text-lg font-bold">Madewell</h3>
                        <p className="text-gray-700">Stylish Bandana</p>
                        <div className='mt-4'>
                            <span className="text-black font-bold">$49.99</span>
                            <span className="text-sm text-gray-400 line-through ml-2">$62.00</span>
                        </div>


                        {/* Star Ratings */}
                        <div className="flex items-center space-x-1">
                            {/* Full Stars */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Half or Empty Star */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                            </svg>
                            {/* Review Count */}
                            <span className="text-gray-500 text-sm">(16)</span>
                        </div>


                    </Link>
                </div>

            </div>


            {/* customer section here */}
            <div className="container mx-auto px-4 py-8">
                {/* Customer Questions Section */}
                <div className="border-b border-gray-300 pb-4 mb-4">
                    <h2 className="text-2xl font-bold mb-4">Customer Questions</h2>
                    <p className="text-gray-600 mb-4">
                        Please Log In or Create An Account to post a question.
                    </p>
                </div>

                {/* Page Helpfulness Section */}
                <div className="bg-gray-100 p-6 rounded-lg mb-8 items-center justify-center text-center">
                    <h3 className="text-lg font-bold mb-4">Was this page helpful?</h3>
                    <div className="flex items-center justify-center  space-x-4">
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                            <span>Yes</span>
                            <span>😊</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                            <span>😞</span>
                            <span>No</span>

                        </button>
                    </div>
                </div>

                {/* Show Outfit Section */}
                <div className="border-b border-gray-300">
                    <h2 className="text-2xl font-bold mb-4">Show how you wore it!</h2>
                    <p className="text-black mb-6">
                        Be the first to add your Seashells by the Seashore Scarf outfit to this gallery!
                    </p>
                    <button className="px-6 py-1 mb-8 bg-white border font-bold text-md border-black rounded-lg hover:text-blue-700 hover:border-blue-700">
                        Share Your Outfit
                    </button>
                </div>
            </div>

            {/* review section */}
            <div className="container mx-auto px-10">
                {/* Customer Reviews Header */}
                <div className="mb-8">
                    <span className="text-2xl font-bold">Customer Reviews</span>
                    <span className="text-2xl ml-4">VIONIC Seashells by the Seashore Scarf</span>
                    <div className='mt-4'>
                        <button className=" px-4 py-2 border border-black rounded-lg hover:text-blue-700 hover:border-blue-700  font-bold">
                            Write a review
                        </button>
                    </div>
                </div>

                {/* Review Summary */}
                <div className="flex mb-8 border-b border-gray-300">
                    <div className='flex flex-col'>
                        <div className="text-xl font-bold mb-8">12 Total Reviews</div>
                        {/* Image */}
                        <div className="w-16 h-16">
                            <img

                                src="https://m.media-amazon.com/images/I/71sNAQyW-7L._AC_SR768,1024__FMwebp_.jpg"
                                alt="Product Thumbnail"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* Review Stats */}
                    <div className="ml-10 mb-8">

                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <span className="w-16 font-bold text-xl">100%</span>
                                <div className="flex text-blue-700">
                                    {/* Full Stars */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>

                                </div>
                                {/* <span className="text-blue-700">★★★★★</span> */}
                            </div>
                            <div className="flex items-center">
                                <span className="w-16 font-bold text-xl">0%</span>
                                <div className="flex text-blue-700">
                                    {/* Full Stars */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="w-16 font-bold text-xl">0%</span>
                                <div className="flex text-blue-700">
                                    {/* Full Stars */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="w-16 font-bold text-xl">0%</span>
                                <div className="flex text-blue-700">
                                    {/* Full Stars */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>

                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="w-16 font-bold text-xl">0%</span>
                                <div className="flex text-blue-700">
                                    {/* Full Stars */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>

                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>
                                    {/* Half or Empty Star */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="w-6 h-6 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.999 3.75L14.25 9.187l5.127.373-3.877 3.374 1.352 5.064-4.853-2.69-4.853 2.69 1.352-5.064L4.623 9.56l5.127-.373L11.999 3.75z" />
                                    </svg>

                                </div>
                                {/* <span className="text-blue-700">★☆☆☆☆</span> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* review 1 */}


                <div className=" border-b border-gray-300">

                    {/* Sort Options */}
                    <div className="flex items-center mb-6">
                        <span className="mr-4 text-black font-bold">Sort by:</span>
                        <button className="mr-4 text-gray-400 cursor-not-allowed">Most Helpful</button>
                        <button className="text-black underline">Newest</button>
                    </div>
                    {/* Overall Rating */}
                    <div className="flex items-center mb-2">
                        <h2 className="text-lg font-bold mr-2">Overall</h2>
                        <div className="flex text-blue-700">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                    </div>

                    {/* Review Source */}
                    <div className="mb-4">
                        <span className="bg-blue-100 text-black px-2 py-1 text-sm rounded">Reviewed at Patricia Nash Designs</span>
                    </div>

                    {/* Review Content */}
                    <div className="text-gray-700 text-base mb-4">
                        This pattern is perfect for a sea vacation,for those cool beach days
                    </div>

                    {/* Reviewer Info */}
                    <div className="text-black text-sm mb-2">
                        <span className="font-bold">Lori K</span>, August 26, 2024
                    </div>

                    {/* Helpful Section */}
                    <div className="items-center mb-4">
                        <div className='flex'>
                            <FaRegThumbsUp className="text-black mr-2" />
                            <span className="text-black text-sm font-semibold mr-2 cursor-pointer underline">Helpful?</span>
                        </div>
                        <div className='mr-4'>
                            <p className="text-gray-600 text-md">0 found this review helpful.</p>
                        </div>
                    </div>

                </div>


                {/* review 2 */}

                <div className=" border-b border-gray-300">
                    {/* Overall Rating */}
                    <div className="flex items-center mb-2">
                        <h2 className="text-lg font-bold mr-2">Overall</h2>
                        <div className="flex text-blue-700">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>

                    {/* Review Source */}
                    <div className="mb-4">
                        <span className="bg-blue-100 text-black px-2 py-1 text-sm rounded">Reviewed at Patricia Nash Designs</span>
                    </div>

                    {/* Review Content */}
                    <div className="text-gray-700 text-base mb-4">
                        I'm totally in love with the colors in this beautiful scarf (which are a little more muted in person than they appear on my computer screen: the shells have more purple to them, the background is more cream and less yellow). While it is a beautiful shawl/wrap/scarf for summer, the colors mean that it will also transition well into fall and winter, too. The print just makes me happy, especially since beachcombing is one of my favorite pastimes. As with all PN scarves, the quality of the fabric is excellent, with beautiful drape, breathability, and softness. And I'm so excited that this season's scarves were offered in two sizes! I hope that the square scarves continue to be made available!
                    </div>

                    {/* Reviewer Info */}
                    <div className="text-gray-500 text-sm mb-2">
                        <span className="font-semibold">CT</span>, August 17, 2024
                    </div>


                    {/* Helpful Section */}
                    <div className="items-center mb-4">
                        <div className='flex'>
                            <FaRegThumbsUp className="text-black mr-2" />
                            <span className="text-black text-sm font-semibold mr-2 cursor-pointer underline">Helpful?</span>
                        </div>
                        <div className='mr-4'>
                            <p className="text-gray-600 text-md">0 found this review helpful.</p>
                        </div>
                    </div>

                </div>



                {/* review 3 */}

                <div className="mb-14">


                    {/* Overall Rating */}
                    <div className="flex items-center">
                        <h2 className="text-lg font-bold mr-2">Overall</h2>
                        <div className="flex text-blue-700">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>

                    {/* Review Source */}
                    <div className="mb-4">
                        <span className="bg-blue-100 text-black px-2 py-1 text-sm rounded">Reviewed at Patricia Nash Designs</span>
                    </div>

                    {/* Review Content */}
                    <div className="text-gray-700 text-base mb-4">
                        A very pretty print!,Light airy scarf,perfect for spring and fall.
                    </div>

                    {/* Reviewer Info */}
                    <div className="text-black text-sm mb-2">
                        <span className="font-semibold">HN</span>, August 17, 2024
                    </div>

                    {/* Helpful Section */}
                    <div className="items-center mb-4">
                        <div className='flex'>
                            <FaRegThumbsUp className="text-black mr-2" />
                            <span className="text-black text-sm font-semibold mr-2 cursor-pointer underline">Helpful?</span>
                        </div>
                        <div className='mr-4'>
                            <p className="text-gray-600 text-md">0 found this review helpful.</p>
                        </div>
                    </div>
                </div>



                {/* Individual Review */}
                <div className="border-t pt-4 mb-6" >

                    {/* Overall Rating */}
                    <div className="flex items-center mb-2">
                        <h2 className="text-lg font-bold mr-2">Overall</h2>
                        <div className="flex text-blue-700">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>

                    {/* Review Source */}
                    <div className="mb-4">
                        <span className="bg-blue-100 text-black px-2 py-1 text-sm rounded">Reviewed at Patricia Nash Designs</span>
                    </div>


                    <p className="mt-2">
                        This scarf is so pretty with the beautiful shells.This scarf is lightweight and perfect for summer.So many ways to wear them or tie to a bag
                    </p>
                    <div className="text-sm text-black mt-2">HN, September 23, 2024</div>

                    {/* Helpful Section */}
                    <div className="items-center mb-4">
                        <div className='flex'>
                            <FaRegThumbsUp className="text-black mr-2" />
                            <span className="text-black text-sm font-semibold mr-2 cursor-pointer underline">Helpful?</span>
                        </div>
                        <div className='mr-4'>
                            <p className="text-gray-600 text-md">0 found this review helpful.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* free shipping and free returns */}
            <div className="container mx-auto px-4 py-8">
                {/* Read Additional Reviews */}
                <div className="mb-4">
                    <a href="#" className="text-black font-bold underline">
                        Read Additional 7 Customer Reviews
                    </a>
                </div>

                <hr className="mb-6" />

                {/* Customer Photos and Videos */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Customer Photos and Videos</h2>
                    <div className="mb-8 flex gap-5">
                        {/* Replace with actual image URLs */}
                        <img src="https://m.media-amazon.com/images/G/01/zappos/cloudcatalog/reviewugc/images/9975268-c3b666d._SX220_.jpg" alt="Customer Photo 1" className="w-30 h-30 object-contain" />
                        <img src="https://m.media-amazon.com/images/G/01/zappos/cloudcatalog/reviewugc/images/9975268-8813c80._SX220_.jpg" alt="Customer Photo 2" className="w-30 h-30 object-contain" />
                    </div>
                </div>

                {/* <hr className="mb-6" /> */}

                {/* Free Shipping and Free Returns Section */}
                <div className='mt-[100px]'>
                    <h2 className="text-2xl font-bold mb-4">Free Shipping and Free Returns</h2>
                    <p className="mb-4">
                        If, for any reason, you are unsatisfied with your purchase from Zappos.com LLC, you may return it in its
                        original condition within 365 days for a refund. We'll even pay for return shipping!
                    </p>
                    <a href="#" className="hover:text-blue-700 underline text-black">
                        Learn more about our free shipping and free returns policy
                    </a>
                </div>
            </div>


        </div>

    );



}

export default ProductPage
