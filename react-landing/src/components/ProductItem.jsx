import PropTypes from 'prop-types';
import { useState } from 'react';
import Counter from './Counter';
import AddToCartButton from './AddToCartButton';
import { formatCurrency } from '../lib/formatcurrency';

export default function ProductItem({ product }) {
  const [isCounterVisible, setCounterVisible] = useState(false);
  const [count, setCount] = useState(1);

  function handleClickInitCounter() {
    setCounterVisible(true);
  }
  /* FUNCTION TO DECREMENT COUNTER */
  function handleDecrement() {
    if (count > 1) {
      setCount((count) => count - 1);
    } else {
      setCounterVisible(false);
      setCount(1);
    }
  }

  /* FUNCTION TO INCREMENT COUNTER */
  function handleIncrement() {
    setCount((count) => count + 1);
    console.log(count);
  }
  const buttonContent = isCounterVisible ? (
    <Counter
      quantity={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  ) : (
    <AddToCartButton
      onClick={handleClickInitCounter}
    />
  );

  return (
    <div className="product-item">
      <div className="relative">
        <div className="product-item__img-container flex justify-center overflow-hidden rounded-lg mb-8 ">
          <img
            className="w-full aspect-square"
            src={product.image.desktop}
            alt=""
          />
          <div className="absolute bottom-0 translate-y-2/4 w-full px-10">
            {buttonContent}
          </div>
        </div>
      </div>
      <div className="product-item__content flex flex-col gap-1.5 font-semibold">
        <p className="text-sm text-rose-500">{product.category}</p>
        <p className="text-base">{product.name}</p>
        <p className="text-base text-red">{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
