import Banner from './Banner';
import Button from './Button';
import Icon from './Icon';
import PropTypes from 'prop-types';
import ProductCartList from './ProductCartList';
import ShoppingCartTotalPrice from './ShoppingCartTotalPrice';
import EmptyShoppingCart from './EmptyShoppingCart';

export default function ShoppingCart({ products }) {

  return (
    <div className="shopping-cart p-8 bg-white rounded-lg">
      <div className="shopping-cart__container">
        <p className="text-xl font-bold mb-4 text-red">Your Cart({products.length})</p>
        {products.length === 0 ?
          <EmptyShoppingCart /> :
          <>
            <ProductCartList items={products} />
            <ShoppingCartTotalPrice orderItems={products} />
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

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(
      {
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }
    )
  )
}