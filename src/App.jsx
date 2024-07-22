import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/router/Routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';
import  GGG  from "./Components/ggg";
import TenderStatus from './Components/statusRequest/statusRequest';
import ItemsList from './Components/item/items';
import ExportExcel from './Components/uploadCSV/uploadCSV';
import ViewEditTenders from './Components/managementTender/managementTender';
import UploadCSV from './Components/uploadCSV/uploadCSV';
function App() {
  // const isAuthenticated = true;
  // const isAdmin = true;
  const isAuthenticated = false;
  const isAdmin = false;
  const items = [
    {
        company: "חברה א",
        nameTender: "מכרז בניה",
        datePublished: "01/01/2023",
        dateSubmission: "01/02/2023",
        category: "בניין",
        winnerDetails: "חברה א",
        offer: "חברה ב, חברה ג",
        winnerData: "פרטי הזוכה",
        bidAmount: "1,000,000 ₪",
        id: "1234"
    },
    {
        company: "חברה ב",
        nameTender: "מכרז תחבורה",
        datePublished: "02/01/2023",
        dateSubmission: "02/02/2023",
        category: "טכנולוגיה",
        winnerDetails: "חברה ב",
        offer: "חברה ד, חברה ה",
        winnerData: "פרטי הזוכה",
        bidAmount: "2,000,000 ₪",
        id: "5678"
    },
    {
        company: "חברה ג",
        nameTender: "מכרז ציוד",
        datePublished: "03/01/2023",
        dateSubmission: "03/02/2023",
        category: "ציוד",
        winnerDetails: "חברה ד",
        offer: "חברה ג, חברה ה",
        winnerData: "פרטי הזוכה",
        bidAmount: "3,000,000 ₪",
        id: "91011"
    },
    {
        company: "חברה ד",
        nameTender: "מכרז שירותים",
        datePublished: "04/01/2023",
        dateSubmission: "04/02/2023",
        category: "שירותים",
        winnerDetails: "חברה ה",
        offer: "חברה ג, חברה ד",
        winnerData: "פרטי הזוכה",
        bidAmount: "4,000,000 ₪",
        id: "121314"
    }
    // ניתן להוסיף עוד פריטים כפי שתרצה
];

  return (
    <BrowserRouter>
    <div style={{display:"none"}}> <GGG /></div>
      <div id="root">
        <Toolbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <div className="content">
          <HomePage />
          <AppRoutes isAdmin={isAdmin} />
          </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

