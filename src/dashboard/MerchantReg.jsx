import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  // Import Axios

const MerchantReg = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    storeName: "",
    storeDescription: "",
    iconUrl: "",
    bannerUrl: "",
    optionalPhone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // useNavigate hook for redirection

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (formData.mobileNumber.length !== 11) {
      newErrors.mobileNumber = "Mobile Number must be 11 digits";
    }

    if (!formData.storeName.trim()) {
      newErrors.storeName = "Store Name is required";
    }

    if (!formData.storeDescription.trim()) {
      newErrors.storeDescription = "Store Description is required";
    }

    if (!formData.iconUrl.trim()) {
      newErrors.iconUrl = "Icon URL is required";
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.iconUrl)) {
      newErrors.iconUrl = "Invalid URL format";
    }

    if (!formData.bannerUrl.trim()) {
      newErrors.bannerUrl = "Banner URL is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.mobileNumber,
        store_name: formData.storeName,
        descp: formData.storeDescription,
        icon: formData.iconUrl,
        banner: formData.bannerUrl,
        phones: formData.optionalPhone ? [formData.mobileNumber, formData.optionalPhone] : [formData.mobileNumber],
        password: formData.password,
      };

      try {
        const response = await axios.post("http://ecommerce.reworkstaging.name.ng/v2/merchants", payload);
        console.log("Merchant created successfully:", response.data);

        // Redirect to the Merchant Login page after successful registration
        alert("Registration successful!");
        navigate("/Merchant-login");

        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          storeName: "",
          storeDescription: "",
          iconUrl: "",
          bannerUrl: "",
          optionalPhone: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error creating merchant:", error.response?.data || error.message);
        alert("Failed to register. Please try again.");
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
    <div className="flex flex-col items-center gap-4 mt-8 bg-blue-300 min-h-screen p-8">
      <img
        src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
        alt="Logo"
      />
      <h2 className="text-2xl font-bold">Merchant Registration Form</h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="p-4 bg-white shadow-lg rounded-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              className="w-full p-2 border-2 border-gray-300 text-gray-900 rounded-md"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}

            <input
              type="text"
              className="w-full p-2 border-2  border-gray-300 text-gray-900  rounded-md"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}

            <input
              type="email"
              className="w-full p-2 border-2 border-gray-300 text-gray-900 rounded-md"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              name="mobileNumber"
              className="w-full p-2 border-2 border-gray-300  text-gray-900 rounded-md"
              id="mobileNumber"
              placeholder="Enter Mobile Number"
              type="tel"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
            )}

            <input
              name="storeName"
              className="w-full p-2 border-2 border-gray-300 text-gra-900 rounded-md"
              id="storeName"
              placeholder="Enter Store Name"
              value={formData.storeName}
              onChange={handleInputChange}
            />
            {errors.storeName && (
              <p className="text-red-500 text-sm">{errors.storeName}</p>
            )}

            <input
              name="storeDescription"
              className="w-full p-2 border-2 border-gray-300  text-gray-900 rounded-md"
              id="storeDescription"
              placeholder="Enter Store Description"
              value={formData.storeDescription}
              onChange={handleInputChange}
            />
            {errors.storeDescription && (
              <p className="text-red-500 text-sm">{errors.storeDescription}</p>
            )}
          </form>
        </div>

        <div className="p-4 bg-white shadow-lg rounded-md">
          <form onSubmit={handleSubmit} id="RegFormS2" className="space-y-4">
            <input
              name="iconUrl"
              className="w-full p-2 border-2 border-gray-300 text-gray-900  rounded-md"
              id="iconUrl"
              placeholder="Enter Icon URL"
              value={formData.iconUrl}
              onChange={handleInputChange}
            />
            {errors.iconUrl && (
              <p className="text-red-500 text-sm">{errors.iconUrl}</p>
            )}

            <input
              name="bannerUrl"
              className="w-full p-2 border-2 border-gray-300  text-gray-900 rounded-md"
              id="bannerUrl"
              placeholder="Enter Banner URL"
              value={formData.bannerUrl}
              onChange={handleInputChange}
            />
            {errors.bannerUrl && (
              <p className="text-red-500 text-sm">{errors.bannerUrl}</p>
            )}

            <input
              name="optionalPhone"
              className="w-full p-2 border-2 border-gray-300 text-gray-900 rounded-md"
              id="optionalPhone"
              placeholder="Enter Phone Number (optional)"
              type="tel"
              value={formData.optionalPhone}
              onChange={handleInputChange}
            />

            <input
              name="password"
              type="password"
              className="w-full p-2 border-2 border-gray-300 text-gray-900  rounded-md"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <input
              name="confirmPassword"
              type="password"
              className="w-full p-2 border-2 border-gray-300 text-gray-900 rounded-md"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">

            Already have an account? <Link to="/Merchant-login" className="text-blue-600 underline hover:text-red-600">Login</Link>

          </div>


        </div>
      </div>

      {/* <div className="flex flex-row mt-5">
        <h3 className="text-gray-800">Already have an account? </h3>
        <Link to="/Merchant-login" className="text-red-700 pl-3">
          Sign In
        </Link>
      </div> */}
    </div>
  );
};

export default MerchantReg;
