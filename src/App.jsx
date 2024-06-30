import './App.css'
import Footer from './Components/footer.jsx'
import HomePage from './Components/homePage.jsx'
import Product  from './Components/product.jsx'
import TypeProduct from './Components/typeProduct.jsx'

function App() {

  return (
    <div id="root">
    <div className="content">

      <HomePage/>    
      <TypeProduct />
      <Product/> 
    </div>
    <Footer />
  </div>
  )
}

export default App