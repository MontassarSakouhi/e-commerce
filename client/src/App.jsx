import { Routes, Route } from "react-router-dom"
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

function App() {

  return (

    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] " >
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </div >
  )
}




export default App
