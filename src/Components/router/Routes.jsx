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
import ProductTender_Step from '../productTender/productTender_step';
import ResultTender from '../resultTender';
import ScrollToTop from '../ScrollToTop';
import ScrollToAnchor from '../scrollToAnchor';
import HomePage from '../homePage/homePage'
const AppRoutes = () => {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/connection" element={<ScrollToAnchor component={<Connection />} anchorId="connection-anchor" key="connection" />} />
          <Route path="/help" element={<ScrollToAnchor component={<Help />} anchorId="help-anchor" key="help" />} />
          <Route path="/controlpanel" element={<ScrollToAnchor component={<ControlPanel />} anchorId="controlpanel-anchor" key="controlpanel" />} />
          <Route path="/usermanagement" element={<ScrollToAnchor component={<UserManagement />} anchorId="usermanagement-anchor" key="usermanagement" />} />
          <Route path="/introduction" element={<ScrollToAnchor component={<Introduction />} anchorId="introduction-anchor" key="introduction" />} />
          <Route path="/about" element={<ScrollToAnchor component={<About />} anchorId="about-anchor" key="about" />} />
          <Route path="/result" element={<ScrollToAnchor component={<ResultTender />} anchorId="result-anchor" key="result" />} />
          <Route path="/subscription" element={<ScrollToAnchor component={<Subscription />} anchorId="subscription-anchor" key="subscription" />} />
          <Route path="/product" element={<Product_Step />} />
          <Route path="/typeProduct" element={<TypeProduct_Step />} />
          <Route path="/tenderSearch" element={<ProductTender_Step />} />
        </Routes>
      </>
    );
  };
  
  export default AppRoutes;