import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserLog = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        keepSignedIn: false,
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  // Hook to redirect after successful login

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        setErrors({
            ...errors,
            [name]: '', // Reset error when input changes
        });
    };

    const validateForm = () => {
        let isValid = true;
        let tempErrors = { email: '', password: '' };

        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setLoading(true);
                const response = await axios.post('http://ecommerce.reworkstaging.name.ng/v2/users/login', {
                    email: formData.email,
                    password: formData.password
                });

                const userData = response.data;
                console.log('User logged in:', userData);

                // Save user data to local storage if "Keep me signed in" is checked
                if (formData.keepSignedIn) {
                    localStorage.setItem('user', JSON.stringify(userData));
                }

                // Redirect to a dashboard or home page after login
                alert('Login successful!');
                navigate('/');  // Redirect to homepage
            } catch (error) {
                console.error('Login error:', error.response ? error.response.data : error.message);
                setErrors({ ...errors, apiError: 'Login failed. Please check your credentials.' });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <div className='flex justify-center items-center mt-4'>
                <img src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg" alt="Zappos Logo" />
            </div>
            <div className="flex justify-center items-center mt-4">
                <div className="bg-white p-4 rounded-md shadow-lg w-full max-w-sm border border-gray-900">
                    <h2 className="text-[30px] mb-6 font-normal">Sign-In</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=""
                                className="w-full mt-1 pl-2 py-0.5 border-2 border-gray-300 rounded"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
                                <span className="text-gray-900 text-sm ml-2">Forgot password?</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="w-full mt-1 pl-2 py-0.5 border-2 border-gray-300 rounded"
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-1 bg-cyan-900 text-white rounded-md font-semibold"
                                disabled={loading}
                            >
                                {loading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>

                        {/* Keep Me Signed In */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="keepSignedIn"
                                name="keepSignedIn"
                                checked={formData.keepSignedIn}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="keepSignedIn" className="text-sm text-cyan-800">
                                Keep me signed in. <a href="#" className="text-blue-900">Details</a>
                            </label>
                        </div>

                        {errors.apiError && <p className="text-red-500 text-sm mt-2">{errors.apiError}</p>}
                    </form>

                    <div className="my-4 flex items-center justify-center">
                        <span className="border-t border-gray-300 w-[130px]"></span>
                        <span className="text-xs text-gray-700">New to Zappos?</span>
                        <span className="border-t border-gray-300 w-[130px]"></span>
                    </div>

                    <div>
                        <button className="w-full py-1 border-2 border-cyan-800 text-slate-600 rounded font-bold">
                            <Link to="/user-register">
                                Create your Zappos account
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center py-10 mt-10 border-t border-gray-200">
                <div className="text-xs text-gray-900 mb-2">
                    <a href="#" className="mx-2 hover:underline">Terms of Use</a>
                    <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
                    <a href="#" className="mx-2 hover:underline">Customer Service</a>
                </div>
                <div className="text-xs text-gray-900">
                    © 2009–2023 - Zappos.com LLC or its affiliates
                </div>
            </div>
        </div>
    );
};

export default UserLog;
