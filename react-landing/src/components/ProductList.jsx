import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  const productItems = products.map((product, id) =>
  (
    <li className="col-span-2" key={id}>
      <ProductItem product={product} />
    </li>
  )
  )
  return (
    <div>
      <div className="product-list__container">
        <h1 className="text-4xl font-bold mb-8">Desserts</h1>
        <ul className="product-list__list grid grid-cols-6 gap-x-6 gap-y-8">
          {productItems}
        </ul>
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}