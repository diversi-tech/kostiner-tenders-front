import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import ScrollToTop from '../scroll/ScrollToTop';
import ScrollToAnchor from '../scroll/scrollToAnchor';
import Connection from '../connection';
import Help from '../help/help';
import ControlPanel from '../controlpanel';
import UserManagement from '../usermanagement';
import About from '../about/about';
import Subscription from '../subscription';
import ResetPasswordForm from '../resetPasswordForm/resetPasswordorm';
import ItemsList from '../item/items';
import Product_Step from '../product/product_step';
import TypeProduct_Step from '../typeProduct/typeProduct_step';
import ProductTender_Step from '../productTender/productTender_step';
import ManagementTenders from '../admin/managementTenders/managementTenders';
import UploadCSV from '../admin/managementTenders/uploadCSV/uploadCSV';
import ViewTenders from '../admin/managementTenders/viewEditTenders/viewEditTenders';
import CheckTender from '../admin/managementTenders/checkTender/checkTender';
import CreditCard_Step from '../creditCard/credirCard_step';
import FinishPay_Step from '../finnishPay/finishPay_step';
import TenderTable from '../tendersTable/TendersTable';
import Login from '../Login';
import ManagementUser from '../admin/managementUser/managementUser';
import ViewUser from '../admin/managementUser/viewUser/viewUser';
import CategorySelection from '../categorySelection/categorySelection';
import EditUserProfile from '../EditProfile/editUserProfile';
import RequestsStatus from '../requestStatus/requestStatus';
import AdminProfileEdit from '../EditProfile/editAdminProfile';
import AdminDashboard from '../admin/adminDashboard';

const AppRoutes = ({ isAuthenticated, isAdmin }) => {
  const categoriesData = [
    {
      name: 'בניין',
      description: 'קטגוריה עבור בניין ואדריכלות',
    },
    {
      name: 'טכנולוגיה',
      description: 'קטגוריה עבור טכנולוגיה ותוכנה',
    },
    {
      name: 'משתמשים',
      description: 'קטגוריה עבור ניהול משתמשים והרשאות',
    },
  ];

  const items = [
    {
      company: "חברת א",
      nameTender: "מכרז 1234",
      datePublished: "01/01/2023",
      dateSubmission: "01/02/2023",
      category: "בניין",
      winnerDetails: "הזוכה - חברת א",
      offer: "חברה ב, חברה ג",
      winnerData: "חברת א - פרטי הזוכה",
      bidAmount: "1,000,000 ₪",
      id: "1234"
    },
    {
      company: "חברת ב",
      nameTender: "מכרז 5678",
      datePublished: "02/01/2023",
      dateSubmission: "02/02/2023",
      category: "טכנולוגיה",
      winnerDetails: "הזוכה - חברת ב",
      offer: "חברה ד, חברה ה",
      winnerData: "חברת ב - פרטי הזוכה",
      bidAmount: "2,000,000 ₪",
      id: "5678"
    }
  ];

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Existing routes */}
        <Route path="/connection" element={<ScrollToAnchor component={<Connection />} anchorId="connection-anchor" />} />
        <Route path="/help" element={<ScrollToAnchor component={<Help />} anchorId="help-anchor" />} />
        <Route path="/controlpanel" element={<ScrollToAnchor component={<ControlPanel />} anchorId="controlpanel-anchor" />} />
        <Route path="/usermanagement" element={<ScrollToAnchor component={<UserManagement />} anchorId="usermanagement-anchor" />} />
        <Route path="/about" element={<ScrollToAnchor component={<About />} anchorId="about-anchor" />} />
        <Route path="/subscription" element={<ScrollToAnchor component={<Subscription />} anchorId="subscription-anchor" />} />
        <Route path="/resetPasword" element={<ScrollToAnchor component={<ResetPasswordForm />} anchorId="ResetPasswordForm-anchor" />} />
        <Route path="/categoryTender" element={<ScrollToAnchor component={<ItemsList items={items} />} anchorId="categoryTender-anchor" />} />
        <Route path="/exampleResult" element={<ScrollToAnchor component={<ItemsList items={items} />} anchorId="exampleResult-anchor" />} />
        <Route path="/product" element={<Product_Step />} />
        <Route path="/typeProduct" element={isAuthenticated ? <TypeProduct_Step /> : <Navigate to="/login" />} />
        <Route path="/tenderSearch" element={isAuthenticated ? <ProductTender_Step /> : <Navigate to="/login" />} />
        <Route path="/creditCard" element={<CreditCard_Step />} />
        <Route path="/finishPay" element={<FinishPay_Step />} />

        {isAdmin && (
          <>
            <Route path="/dashboardAdmin" element={<ScrollToAnchor component={<AdminDashboard />} anchorId="admin-dashboard-anchor" />} />
            <Route path="/managementUser" element={<ScrollToAnchor component={<ManagementUser />} anchorId="manage-user-anchor" />} />
            <Route path="/manageTenders" element={<ScrollToAnchor component={<ManagementTenders />} anchorId="manage-tenders-anchor" />} />
            <Route path="/upload-csv" element={<ScrollToAnchor component={<UploadCSV />} anchorId="upload-csv-anchor" />} />
            <Route path="/view-tenders" element={<ScrollToAnchor component={<ViewTenders />} anchorId="view-tenders-anchor" />} />
            <Route path="/checkTender" element={<ScrollToAnchor component={<CheckTender />} anchorId="check-tender-anchor" />} />
            <Route path="/viewUser" element={<ScrollToAnchor component={<ViewUser />} anchorId="view-user-anchor" />} />
            <Route path="/editting-tenders" element={<ScrollToAnchor component={<TenderTable />} anchorId="editting-tenders" />} />
          </>
        )}

        {!isAuthenticated && (
          <Route path="/login" element={<ScrollToAnchor component={<Login open={true} />} key="connection" />} />
        )}

        {isAuthenticated && (
          <>
            <Route path="/categotySelect" element={<ScrollToAnchor component={<CategorySelection categories={categoriesData} />} anchorId="categortSelect-anchor" />} />
            <Route path="/user-profile" element={<ScrollToAnchor component={<EditUserProfile />} anchorId="userProfile" key="userProfile" />} />
            <Route path="/status-requests" element={<ScrollToAnchor component={<RequestsStatus />} anchorId="RequestStatus" key="RequestsStatus" />} />
            <Route path="/admin-profile" element={<ScrollToAnchor component={<AdminProfileEdit />} anchorId="adminProfile" key="adminProfile" />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default AppRoutes;
