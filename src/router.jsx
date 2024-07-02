import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/homePage';
import Product from './Components/product';
import AutocompleteModal from './Components/typeProduct';
import Footer from './Components/footer';
import IconStepper from './Components/product/stepPay/stepPay';
import Product_Step from './Components/product_step';
import TypeProduct_Step from './Components/typeProduct_step';
import ScrollToTop from './Components/ScrollToTop';

export default function AppRoutes() {
    return (
        <>
            <ScrollToTop /> {/* הוספת הקומפוננטה ScrollToTop כאן */}
            <Routes>
                {/* <Route path="/" element={<MainLayout/>} /> */}
                {/* <Route path="/product" element={<MainLayout />} /> */}
                <Route path="/product" element={<Product_Step />} />
                <Route path="/typeProduct" element={<TypeProduct_Step />} />
            </Routes>
        </>
    );
}

const MainLayout = () => (
    <div>
        <Product />
        <IconStepper activeStep={0} />
    </div>
);
