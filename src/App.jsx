// import './App.css'
// import Footer from './Components/footer.jsx'
// import HomePage from './Components/homePage.jsx'
// import Product from './Components/product.jsx'
// import TypeProduct from './Components/typeProduct.jsx'
// import AppRoutes from './router.jsx'
// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// function App() {

//   return (
//     <div id="root">
//       <div className="content">
//         <AppRoutes />
//         {/* <HomePage /> */}
//         <TypeProduct />
//         <Product />
//       </div>
//       {/* <Footer /> */}
//     </div>

//     //  <Router>

//     //   <Link to="/Product">Product</Link>
//     //   <Link to="/">HomePage</Link>

//     //  </Router>
//   )
// }

// export default App

import './App.css';
import Footer from './Components/footer.jsx';
import AppRoutes from './router.jsx';
import { BrowserRouter } from 'react-router-dom';
import Product from './Components/product.jsx';
import HomePage from './Components/homePage.jsx';
import IconStepper from './Components/stepPay.jsx';

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <div className="content">
          <HomePage/>
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;