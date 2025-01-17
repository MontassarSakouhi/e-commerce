import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Orders from "./pages/Orders"
import Collection from "./pages/Collection"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import NavBar from "./components/navBar/NavBar"
import Footer from "./components/footer/Footer"
import SearchBar from "./components/search/SearchBar"
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/protected/ProtectedRoute"
import AdminDashboard from "./components/admin/AdminDashboard"
import AddProduct from "./components/admin/AddProduct"
import ListProducts from "./components/admin/ListProducts"
import ListOrders from "./components/admin/ListOrders"
import ListUsers from "./components/admin/ListUsers"

function App() {

  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith("/admin");


  return (

    <div className={`${isAdminRoute ? '' : 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'}`} >
      <ToastContainer />
      {!isAdminRoute && <NavBar />}
      {!isAdminRoute && <SearchBar />}
      <Routes>
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
          <Route path="add" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
          <Route path="product" element={<ProtectedRoute><ListProducts /></ProtectedRoute>} />
          <Route path="order" element={<ProtectedRoute> <ListOrders /> </ProtectedRoute>} />
          <Route path="user" element={<ProtectedRoute><ListUsers /></ProtectedRoute>} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  )
}




export default App
