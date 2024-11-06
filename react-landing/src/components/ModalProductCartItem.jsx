import PropTypes from 'prop-types';
import { calcProductTotalCost } from '../lib/calcProductTotalCost';
import { formatCurrency } from '../lib/formatcurrency';

export default function ModalProductCartItem({ product: { count, name, price, image } }) {

  return (
    <div className="cart-item py-4 border-b flex flex-row justify-start items-start gap-4">
      <div className="cart-item__img-thumbnail overflow-hidden rounded-sm w-12 h-12">
        <img className="w-full aspect-square" src={image.thumbnail} alt="`${name}`" />
      </div>
      <div className="cart-item__content">
        <p className="cart-item__content__name text-sm font-semibold mb-2">
          {name}
        </p>
        <div className="cart-item__details text-sm font-regular flex flex-row gap-2">
          <span className="cart-item__details__count text-red  font-semibold">
            x{count}
          </span>
          <span className="cart-item__details__price text-rose-300">
            @{formatCurrency(price)}
          </span>
        </div>
      </div>
      <span className="cart-item__details__total font-semibold self-center ml-auto">
        {calcProductTotalCost(count, price)}
      </span>
    </div>
  );
}

ModalProductCartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  })
};
