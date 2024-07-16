import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/router/Routes';
import './App.css';
import Footer from './Components/footer/footer';
import HomePage from './Components/homePage/homePage';
import Toolbar from './Components/toolbar/toolbar';
import GGG from './Components/ggg';
import { UserProvider } from './context/userContext';

function App() {
  const isAuthenticated = false;
  const isAdmin = false;
//   const response = fetch(`https://kostiner-tenders-back.onrender.com`, {
//     headers: {
//         'Content-Type': 'application/json',
        
//     },
// });
// console.log(response+"/////////////////");
  return (
    <BrowserRouter>
      <UserProvider>
        <div style={{ display: "none" }}> <GGG /></div>
        <div id="root">
          <Toolbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
          <div className="content">
            <HomePage />
            <AppRoutes />
          </div>
          <Footer />
        </div>
<<<<<<< HEAD
        
        <Footer />
      </div>
=======
      </UserProvider>
>>>>>>> 646a9ec24290edfb5cf83490051477b09628ef3a
    </BrowserRouter>
  );
}

export default App;


