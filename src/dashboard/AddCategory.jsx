import React, { useState, useEffect } from "react";
import axios from "axios";

const AddCategory = () => {
  const [merchantId, setMerchantId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  // Fetch merchant_id from the stored object in local storage
  useEffect(() => {
    const storedMerchant = localStorage.getItem("merchant");
    if (storedMerchant) {
      try {
        const merchantObj = JSON.parse(storedMerchant); // Parse the JSON string
        if (merchantObj && merchantObj.id) {
          setMerchantId(merchantObj.id); // Extract the 'id' field
        } else {
          setMessage("Invalid merchant data in local storage.");
        }
      } catch (error) {
        console.error("Error parsing merchant data:", error);
        setMessage("Invalid merchant data in local storage.");
      }
    } else {
      setMessage("No merchant data found in local storage.");
    }
  }, []);

  const validateCategories = () => {
    // Basic validation to ensure name and image are not empty
    return name.trim() !== "" && image.trim() !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateCategories()) {
      const categoryData = {
        merchant_id: merchantId,
        name: name,
        image: image // Default if empty
      };

      try {
        const response = await axios.post(
          "http://ecommerce.reworkstaging.name.ng/v2/categories",
          categoryData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Check for both status 200 and 201 as successful
        if (response.status === 201 || response.status === 200) {
          setMessage("Category created successfully!");

          // Save the newly created category to local storage
          const createdCategory = {
            id: response.data.id,  // Assuming the category id is in the response
            name: response.data.name,
            image: response.data.image
          };

          // Save only the newly created category data into local storage
          localStorage.setItem("createdCategory", JSON.stringify(createdCategory));

          // Reset form fields
          setName("");
          setImage("");

          // Clear the message after 3 seconds
          setTimeout(() => {
            setMessage("");
          }, 3000);
          
        } else {
          setMessage(`Failed to create category. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error creating category:", error);
        if (error.response) {
          setMessage(`Error: ${error.response.data.message || "Failed to create category."}`);
        } else {
          setMessage("An error occurred while creating the category.");
        }
      }
    } else {
      setMessage("Please fill out all fields.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Create New Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter category name"
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="image">
            Category Image URL
          </label>
          <input
            type="text"
            id="categoryImage"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter image URL"
          />
          {image && (
            <img
              src={image}
              alt="Category"
              className="mt-2 h-20 w-20 object-cover"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md  transition duration-200"
        >
          Create Category
        </button>
      </form>
      {message && (
        <div className={`mt-4 p-2 ${message.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default AddCategory;
