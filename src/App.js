import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ShoppingPage from "./pages/ShoppingPage";
import Layout from "./dashboard/Layout";
import Dashboard from "./dashboard/Dashboard";
import AddProduct from "./dashboard/AddProduct";
import ProductList from "./dashboard/ProductList";
import CategoryList from "./dashboard/CategoryList";
import MerchantReg from "./dashboard/MerchantReg";
import MerchantLog from "./dashboard/MerchantLog";
import UpdateMerchReg from "./dashboard/UpdateMerchReg";
import UserReg from "./components/UserReg";
import UserLog from "./components/UserLog";
import AddCategory from "./dashboard/AddCategory";
import UsersList from "./dashboard/UsersList";

const App = () => {
  const location = useLocation();

  // Adjusted path for hiding navbar and footer
  const hideNavFooter = ["/user-register", "/user-login", "/dashboard", "/Merchant-register", "/Merchant-login", "/UpdateMerchant-register"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {!hideNavFooter && <Navbar />} {/* Conditionally render Navbar */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShoppingPage" element={<ShoppingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/user-register" element={<UserReg />} />
          <Route path="/user-login" element={<UserLog />} />

          {/* Merchant Registration and Login Routes */}
          <Route path="/Merchant-register" element={<MerchantReg />} />
          <Route path="/Merchant-login" element={<MerchantLog />} />

          {/* Update Merchant Reg and Password */}
          <Route path="/UpdateMerchant-register" element={<UpdateMerchReg />} />

          {/* Nested routes for dashboard */}
          <Route path="/dashboard/*" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="add-category" element={<AddCategory/>} />
            <Route path="category-list" element={<CategoryList />} />
            <Route path="users-list" element={<UsersList />} />
          </Route>
        </Routes>
      </main>
      {!hideNavFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
