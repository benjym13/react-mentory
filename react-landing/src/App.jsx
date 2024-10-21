import './App.css';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import data from './data/data.json';

export default function App() {

  const productGrid = data.map((product, index)=> {
    return (
      <div className="col-span-2" key={index} >
        <ProductItem product={product}/>
      </div>
    )
  });

  return (
    <div className="prototype-container container">
      <div className="py-20 grid grid-cols-12 gap-8">
        <div className="product-list col-span-8">
          <ProductList>
            {productGrid}
          </ProductList>
        </div>
        <div className="shopping-cart__component col-span-4">
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
    </div>
  )
}
