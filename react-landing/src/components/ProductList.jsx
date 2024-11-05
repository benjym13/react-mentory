import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { v4 as uuidv4 } from 'uuid';
export default function ProductList({ products }) {

  const productsWithIDs = products.map((product) => ({
    ...product,
    id: uuidv4()
  }))

  const productItems = productsWithIDs.map((product) =>
  (
    <li className="col-span-2" key={product.id} data-id={product.id}>
      <ProductItem product={product} />
    </li>
  ))

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