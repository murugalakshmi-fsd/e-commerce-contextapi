import './App.css'
import Cart from './Cart'
import { CartProvider } from './CartContext'
import Product from './Product'
import ProductList from './ProductList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <CartProvider>
      <div className="container-fluid d-flex justify-content-between align-items-start">
        <div className="flex-grow-1 "> {/* Product List */}
          <ProductList />
        </div>
        <div className="flex-shrink-0"> {/* Cart */}
          <Cart />
        </div>
      </div>
    </CartProvider>
    
  )
}

export default App
