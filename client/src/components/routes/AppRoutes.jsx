import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import About from "../../pages/About"
import Orders from "../../pages/Orders"
import Collection from "../../pages/Collection"
import PlaceOrder from "../../pages/PlaceOrder"
import Product from "../../pages/Product"


import ProtectedRoute from "../protected/ProtectedRoute"
import AdminDashboard from "../admin/AdminDashboard"
import AddProduct from "../admin/AddProduct"
import ListProducts from "../admin/ListProducts"
import ListOrders from "../admin/ListOrders"
import ListUsers from "../admin/ListUsers"
import UserLayout from "../../layouts/UserLayout"
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
                <Route path="add" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
                <Route path="product" element={<ProtectedRoute><ListProducts /></ProtectedRoute>} />
                <Route path="order" element={<ProtectedRoute> <ListOrders /> </ProtectedRoute>} />
                <Route path="user" element={<ProtectedRoute><ListUsers /></ProtectedRoute>} />
            </Route>
            <Route path="/" element={<UserLayout> <Home /></UserLayout>} />
            <Route path="/collection" element={<UserLayout><Collection /></UserLayout>} />
            <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
            <Route path="/orders" element={<UserLayout><Orders /></UserLayout>} />
            <Route path="/place-order" element={<UserLayout><PlaceOrder /></UserLayout>} />
            <Route path="/product/:productId" element={<UserLayout><Product /></UserLayout>} />
            <Route path="/about" element={<UserLayout><About /></UserLayout>} />
        </Routes>
    )
}

export default AppRoutes