import './App.css';
import ProductDashboard from './components/ProductDashboard';
import { CartContextProvider } from './context/cartContext';

export default function App() {
  return (
    <CartContextProvider>
      <ProductDashboard />
    </CartContextProvider>
  )
}
