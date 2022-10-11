import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/header/header';
import Home from '../components/home';
import ProductMonitoring from '../components/productMonitoring';
import SuppressProduct from '../components/productMonitoring/suppressProduct/suppressProduct';

export const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-monitoring" element={<ProductMonitoring />} />
                <Route path="/suppress-product" element={<SuppressProduct />} />
            </Routes>
        </Router>

    )
}

export default AppRouter;