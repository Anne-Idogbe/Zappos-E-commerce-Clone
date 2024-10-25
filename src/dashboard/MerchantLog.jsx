import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";  // Import Axios

const MerchantLog = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Add useNavigate hook

    // Validation function
    const validate = () => {
        let newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            const payload = {
                email: formData.email,
                password: formData.password,
            };

            try {
                const response = await axios.post("http://ecommerce.reworkstaging.name.ng/v2/merchants/login", payload);
                console.log("Login successful:", response.data);

                // Assume the response contains the newly created merchant object with an ID, email, etc.
                const merchantData = response.data;

                // Store merchant data in localStorage
                localStorage.setItem('merchant', JSON.stringify(merchantData));

                // Redirect to the dashboard after successful login
                alert("Login successful!");
                navigate("/dashboard");

                // Reset form after successful submission
                setFormData({
                    email: "",
                    password: "",
                });
            } catch (error) {
                console.error("Login failed:", error.response?.data || error.message);
                alert("Failed to login. Please check your credentials.");
            }
        } else {
            console.log("Validation failed:", errors);
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-center">
                        <img
                            src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
                            alt="Logo"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-center">Merchant Login</h2>

                    <div>
                        <input
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            id="email"
                            type="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input
                            name="password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        type="submit"
                    >
                        Login
                    </button>

                    <div className="mt-4 text-center">
                        Don't have an account? <Link to="/Merchant-register" className="text-blue-600 underline hover:text-red-600">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MerchantLog;
