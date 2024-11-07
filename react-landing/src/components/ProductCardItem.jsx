import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import { formatCurrency } from '../lib/formatcurrency';
import { calcProductTotalCost } from '../lib/calcProductTotalCost';

export default function ProductCardItem({ product }) {

  return (
    <div className="cart-item py-4 border-b flex flex-row justify-between items-center">
      <div className="cart-item__content">
        <p className="cart-item__content__name text-sm font-semibold mb-2">
          {product.name}
        </p>
        <div className="cart-item__details text-sm font-regular flex flex-row gap-2">
          <span className="cart-item__details__count text-red  font-semibold">
            x{product.count}
          </span>
          <span className="cart-item__details__price text-rose-300">
            @{formatCurrency(product.price)}
          </span>
          <span className="cart-item__details__total text-rose-400">
            {calcProductTotalCost(product.count, product.price)}
          </span>
        </div>
      </div>
      <div className="cart-item__button">
        <Button icon>
          <Icon extraClasses="border border-rose-300 rounded-full invert-0 hover:invert">
            <img src="/assets/images/icon-remove-item.svg" alt="icon" />
          </Icon>
        </Button>
      </div>
    </div>
  );
}

ProductCardItem.propTypes = {
  product: PropTypes.shape({
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
