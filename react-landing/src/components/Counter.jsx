import Button from './Button';
import Icon from './Icon';
import PropTypes from 'prop-types';

export default function Counter({ quantity, onDecrement, onIncrement }) {
  return (
    <div className="counter w-full p-3 rounded-full bg-red text-white flex justify-between items-center gap-3 text-sm  font-semibold text-center">
      <Button icon onClick={onDecrement}>
        <Icon extraClasses="border border-white rounded-full">
          <img src="/assets/images/icon-decrement-quantity.svg" alt="icon" />
        </Icon>
      </Button>
      <span className="count">{quantity}</span>
      <Button icon onClick={onIncrement}>
        <Icon extraClasses="border border-white rounded-full">
          <img src="/assets/images/icon-increment-quantity.svg" alt="icon" />
        </Icon>
      </Button>
    </div>
  );
}

Counter.propTypes = {
  quantity: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
