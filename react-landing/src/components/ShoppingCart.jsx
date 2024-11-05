import Banner from './Banner';
import Button from './Button';
import Icon from './Icon';
import ProductCartList from './ProductCartList';
import ShoppingCartTotalPrice from './ShoppingCartTotalPrice';
import EmptyShoppingCart from './EmptyShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export default function ShoppingCart() {

  const { cart } = useContext(CartContext);
  return (
    <div className="shopping-cart p-8 bg-white rounded-lg">
      <div className="shopping-cart__container">
        <p className="text-xl font-bold mb-4 text-red">Your Cart({cart.length})</p>
        {cart.length === 0 ?
          <EmptyShoppingCart /> :
          <>
            <ProductCartList items={cart} />
            <ShoppingCartTotalPrice orderItems={cart} />
            <Banner>
              <Icon>
                <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
              </Icon>
              <p className="text-sm">
                This is a <b>carbon-neutral</b> delivery
              </p>
            </Banner>
            <div className="mt-6">
              <Button>Confirm Order</Button>
            </div>
          </>
        }
      </div>
    </div>
  );
}
