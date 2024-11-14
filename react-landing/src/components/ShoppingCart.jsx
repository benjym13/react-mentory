import { useCart } from '../hooks/useCart';
import Banner from './Banner';
import ConfirmModal from './ConfirmModal';
import EmptyShoppingCart from './EmptyShoppingCart';
import Icon from './Icon';
import ProductCartList from './ProductCartList';
import ShoppingCartTotalPrice from './ShoppingCartTotalPrice';

export default function ShoppingCart() {

  const { cart } = useCart();
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
              <ConfirmModal />
            </div>
          </>
        }
      </div>
    </div>
  );
}
