import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import data from './../data/data.json';

export default function ProductDashboard() {
  /* MOCK DATA DE UNA POSIBLE LISTA DE CARRITO DE COMPRA */
  const initialValue = [
    {
      count: 3,
      name: 'Classic Tiramisu',
      price: 7.0,
    },
    {
      count: 1,
      name: 'Waffle with Berries',
      price: 6.5,
    },
  ];
  return (
    <div className="prototype-container container">
      <div className="py-20 grid grid-cols-12 gap-8">
        <div className="product-list col-span-8">
          <ProductList products={data} />
        </div>
        <div className="shopping-cart__component col-span-4">
          <ShoppingCart products={initialValue} />
        </div>
      </div>
    </div>
  );
}
