import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../lib/formatcurrency';
import AddToCartButton from './AddToCartButton';
import Counter from './Counter';

export default function ProductItem({ product: { id, image, name, category, price } }) {
  /* usamos el contexto */
  /* lo desectructuramos para que sea más legible */
  const { cart, setCart, addToCart, incrementItemCart, decrementItemCart } = useCart();

  /* estado para settear si el counter es visible */
  const [isCounterVisible, setCounterVisible] = useState(false)

  /* estado para saber el valor del contador */
  const [count, setCount] = useState(1);

  function handleClickInitCounter() {
    let product = { id, image, count, name, category, price };
    setCounterVisible(true);
    addToCart(product)
  }

  /* FUNCTION TO DECREMENT COUNTER */
  function handleDecrement() {
    if (count > 1) {
      setCount((count) => count - 1);
      decrementItemCart(count, id);
    } else {
      setCounterVisible(false);
      setCount(1);
      setCart(cart.filter((el) => (
        el.id !== id
      )))
    }
  }

  /* FUNCTION TO INCREMENT COUNTER */
  function handleIncrement() {
    setCount((count) => count + 1);
    incrementItemCart(count, id)
  }

  useEffect(() => {
    const isProductInCart = cart.some((el) => el.id === id);
    if (!isProductInCart) {
      setCounterVisible(false);
      setCount(1);
    }
  }, [cart, id]);

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
    <div className='product-item' >
      <div className="relative">
        <div className={`product-item__img-container flex justify-center overflow-hidden rounded-lg mb-8 ${isCounterVisible ? 'border-2 border-red rounded-lg' : ''}`} >
          <img
            className="w-full aspect-square"
            src={image.desktop}
            alt={`${name}image`}
          />
          <div className="absolute bottom-0 translate-y-2/4 w-full px-10">
            {buttonContent}
          </div>
        </div>
      </div>
      <div className="product-item__content flex flex-col gap-1.5 font-semibold">
        <p className="text-sm text-rose-500">{category}</p>
        <p className="text-base">{name}</p>
        <p className="text-base text-red">{formatCurrency(price)}</p>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
