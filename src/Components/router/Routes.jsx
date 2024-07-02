
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Connection from '../connection';
import Help from '../help';
import ControlPanel from '../controlpanel';
import UserManagement from '../usermanagement';
import Introduction from '../introduction';
import About from '../about';
import Subscription from '../subscription';
import TypeProduct_Step from '../typeProduct/typeProduct_step';
import Product_Step from '../product/product_step';
import ScrollToTop from './scrollToTop'
const AppRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/Connection" element={<Connection />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/Controlpanel" element={<ControlPanel />} />
                <Route path="/Usermanagement" element={<UserManagement />} />
                <Route path="/Introduction" element={<Introduction />} />
                <Route path="/About" element={<About />} />
                <Route path="/Subscription" element={<Subscription />} />
                <Route path="/product" element={<Product_Step />} />
                <Route path="/typeProduct" element={<TypeProduct_Step />} />
            </Routes>
        </>
    );
}

export default AppRoutes;

