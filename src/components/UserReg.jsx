import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate

const  UserReg = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Fixed useNavigate hook for redirection

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear error when input changes
    });
  };

  const validateForm = () => {
    let isValid = true;
    let tempErrors = { first_name: '', last_name: '', email: '', phone: '', password: '', confirmPassword: '' };

    if (!formData.first_name) {
      tempErrors.first_name = 'First name is required';
      isValid = false;
    }

    if (!formData.last_name) {
      tempErrors.last_name = 'Last name is required';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone) {
      tempErrors.phone = "Mobile Number is required";
      isValid = false;
    } else if (formData.phone.length !== 11) {
      tempErrors.phone = "Mobile Number must be 11 digits";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
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
        const response = await axios.post('http://ecommerce.reworkstaging.name.ng/v2/users', {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        });

        console.log('User created:', response.data);
        alert("User account created successfully!");
        navigate("/user-login"); // Redirect to login after successful registration
      } catch (error) {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
        setErrors({ ...errors, apiError: 'Failed to create account. Please try again.' });
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
          {/* Title */}
          <h2 className="text-[30px] mb-6 font-normal">Create account</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name Input */}
            <div>
              <label htmlFor="first_name" className="block text-sm font-bold text-black">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First name"
                className="w-full mt-1 pl-2 border-2 py-1 text-sm text-gray-900 border-gray-300 rounded"
              />
              {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
            </div>

            {/* Last Name Input */}
            <div>
              <label htmlFor="last_name" className="block text-sm font-bold text-black">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full mt-1 pl-2 border-2 py-1 text-sm text-gray-900 border-gray-300 rounded"
              />
              {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-black">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full mt-1 pl-2 border-2 py-1 text-sm text-gray-900 border-gray-300 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 pl-2 border-2 py-1 text-sm text-gray-900 border-gray-300 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                className="w-full mt-1 pl-2 py-1 border-2 text-sm text-gray-900 border-gray-300 rounded"
              />
              <p className="text-xs text-gray-500 mt-1">Passwords must be at least 6 characters.</p>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700">Re-enter Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full mt-1 pl-2 py-1 text-sm text-gray-900 border-2 border-gray-300 rounded"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-1 bg-cyan-900 text-white rounded-md font-semibold"
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create your account'}
              </button>
              {errors.apiError && <p className="text-red-500 mt-2 text-sm">{errors.apiError}</p>}
            </div>
          </form>

          {/* Help Section */}
          <p className="text-xs text-gray-900 mt-4">
            Need additional help? Don't worry! You can reach us via phone, text, or live chat. See <a href="#" className="text-cyan-800 underline">here</a> for contact details.
          </p>

          {/* Sign In Link */}
          <p className="text-sm mt-6 text-center">
            Already have an account? <Link to="/user-login" className="text-cyan-800 underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReg;
