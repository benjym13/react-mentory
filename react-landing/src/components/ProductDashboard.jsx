import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import data from './../data/data.json';

export default function ProductDashboard() {
  return (
    <div className="prototype-container container">
      <div className="py-20 grid grid-cols-12 gap-8">
        <div className="product-list col-span-8">
          <ProductList products={data} />
        </div>
        <div className="shopping-cart__component col-span-4">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
