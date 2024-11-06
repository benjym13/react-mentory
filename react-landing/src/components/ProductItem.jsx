import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import Counter from './Counter';
import AddToCartButton from './AddToCartButton';
import { formatCurrency } from '../lib/formatcurrency';
import { CartContext } from '../context/cartContext';

export default function ProductItem({ product: { id, image, name, category, price } }) {
  /* usamos el contexto */
  /* lo desectructuramos para que sea más legible */
  const { cart, setCart } = useContext(CartContext);

  /* estado para settear si el counter es visible */
  const [isCounterVisible, setCounterVisible] = useState(false)


  /* estado para saber el valor del contador */
  const [count, setCount] = useState(1);


  function initCart() {
    setCart((prevCart) => [...prevCart, {
      id,
      count,
      name,
      price,
      image
    }]);
  }

  function handleClickInitCounter() {
    setCounterVisible(true);
    initCart();
  }

  /* FUNCION UTILITARIA */
  /* Comprobamos si el id ya está en el carrito para reducir el count */
  /* si no está añadimos el producto */
  function decrementItemCart(prevCart, id, increment = 1) {
    return prevCart.map((el) => (
      el.id === id ? { ...el, count: count - increment } : { ...el }
    ))
  }

  /* FUNCTION TO DECREMENT COUNTER */
  function handleDecrement() {
    if (count > 1) {
      setCount((count) => count - 1);
      /* usamos la función de actualización del estado global */
      setCart(prevCart => decrementItemCart(prevCart, id));
    } else {
      setCounterVisible(false);
      setCount(1);
      setCart(cart.filter((el) => (
        el.id !== id
      )))
    }
  }

  /* FUNCION UTILITARIA */
  /* Comprobamos si el id ya está en el carrito para aumentar el count */
  /* si no está añadimos el producto */
  function incrementItemCart(prevCart, id, increment = 1) {
    return prevCart.map((el) => (
      el.id === id ? { ...el, count: count + increment } : { ...el }
    ))
  }

  /* FUNCTION TO INCREMENT COUNTER */
  function handleIncrement() {
    setCount((count) => count + 1);
    /* usamos la función de actualización del estado global */
    setCart(prevCart => incrementItemCart(prevCart, id));
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
