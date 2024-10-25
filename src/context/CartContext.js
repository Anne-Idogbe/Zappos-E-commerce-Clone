import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const base_url = "http://ecommerce.reworkstaging.name.ng/v2";
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // Fetch products into the shopping page
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const merchant = JSON.parse(localStorage.getItem("merchant"));
                const category = JSON.parse(localStorage.getItem("createdCategory"));

                if (!merchant || !category || !category.id) {
                    console.error("Merchant ID or Category ID is not available");
                    return;
                }

                const response = await axios.get(
                    `${base_url}/products?merchant_id=${merchant.id}&limit=20`
                );

                console.log("API Response:", response.data);
                setProducts(response.data.data || []);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, [base_url]);

    // Fetch cart items when the component mounts or when an update happens
    const fetchCartItems = async () => {
        try {
            const user_id = JSON.parse(localStorage.getItem('user')).id;
            const response = await axios.get(`${base_url}/carts?user_id=${user_id}`);
            const items = response.data || []; // Fallback to empty array if no data is present
            setCartItems(items);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [base_url]);

    // Effect to calculate total amount
    useEffect(() => {
        if (Array.isArray(cartItems)) {
            const total = cartItems.reduce((acc, item) => acc + (item.quantity || 0) * (item.price || 0), 0);
            setTotalAmount(total);
        } else {
            setTotalAmount(0);
        }
    }, [cartItems]);

    // Add a new item to the cart
    const addCartItem = async (newItem) => {
        try {
            const response = await axios.post(`${base_url}/carts`, newItem);
            console.log('Product added to cart:', response.data);
            fetchCartItems(); // Fetch updated cart items after adding
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Remove item from cart
    const removeItem = async (id) => {
        try {
            await axios.delete(`${base_url}/carts/${id}`); // Assuming backend supports deleting by item ID
            console.log(`Item with ID ${id} removed from cart`);
            fetchCartItems(); // Fetch updated cart items after deletion
        } catch (error) {
            console.error('Error removing product from cart:', error);
        }
    };

    // Delete cart contents
    
    const deleteCartContents = async () => {
        const userId = JSON.parse(localStorage.getItem("user")).id;

        try {
            const response = await fetch('http://ecommerce.reworkstaging.name.ng/v2/carts', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: userId }),
            });

            if (response.ok) {
                // Clear cart items from state
                setCartItems([]); // This clears the cart items without needing a page reload
                console.log('Cart contents deleted successfully');
            } else {
                console.error('Failed to delete cart contents');
            }
        } catch (error) {
            console.error('Error deleting cart contents:', error);
        }
    };


    const values = {
        products,
        cartItems,
        totalAmount,
        base_url,
        addCartItem,
        removeItem,
        deleteCartContents,
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};
