import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
  // Fetching merchant data from local storage
  const merchant = JSON.parse(localStorage.getItem('merchant'));

  // State for editing category
  const [editingCategory, setEditingCategory] = useState(null);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");

  // State for fetching categories
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [merchantId, setMerchantId] = useState("");
  const [loading, setLoading] = useState(true);

  // Setting the merchantId when the component mounts
  useEffect(() => {
    if (merchant) {
      setMerchantId(merchant.id);
    }
  }, [merchant]);

  // Function for getting categories
  useEffect(() => {
    const fetchCategories = async () => {
      if (!merchantId) return;

      try {
        const response = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`
        );
        setCategories(response.data); // Adjust based on your actual response structure
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch categories");
        setLoading(false);
      }
    };

    fetchCategories();
  }, [merchantId]);

  // Function for editing category
  const startEditCategory = (category) => {
    setEditingCategory(category.id);
    setEditName(category.name);
    setEditImage(category.image);
  };

  // Function to handle edit category
  const handleEditCategory = async (categoryId) => {
    try {
      await axios.put(
        `http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`,
        { name: editName, image: editImage }
      );

      setCategories(
        categories.map((item) =>
          item.id === categoryId ? { ...item, name: editName, image: editImage } : item
        )
      );

      // Resetting editing state
      setEditingCategory(null);
      setEditName("");
      setEditImage("");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  // Function to handle delete category
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`);
      setCategories(categories.filter((item) => item.id !== categoryId));
      alert("Category deleted successfully!");
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  };

  return (
    <div className="flex-1 p-4 bg-gray-50">
      {/* Categories Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold underline">Category List</h1>

        {loading ? (
          <p className="text-center text-lg">Loading categories...</p>
        ) : error ? (
          <p className="text-center text-lg text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-contain mb-8 rounded-md"
                />
                {editingCategory === item.id ? (
                  <div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Category Name"
                      className="block w-full border mb-2 p-2 rounded"
                    />
                    <input
                      type="text"
                      value={editImage}
                      onChange={(e) => setEditImage(e.target.value)}
                      placeholder="Category Image URL"
                      className="block w-full border mb-2 p-2 rounded"
                    />
                    <button
                      onClick={() => handleEditCategory(item.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingCategory(null)}
                      className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    {/* <p className="text-sm text-red-500">Merchant ID: {merchantId || item.merchant_Id}</p> */}
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => startEditCategory(item)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
