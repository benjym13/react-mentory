import PropTypes from "prop-types";
import { formatCurrency } from "../lib/formatcurrency";


export default function ShoppingCartTotalPrice({ products }) {

    const totalPrice = products.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);

    return (
        <div className="shopping-cart__total flex flex-row justify-between py-5">
            <span className="shopping-cart__total__text text-sm text-gray-500">
                Order Total
            </span>
            <span className="shopping-cart__total__price text-xl font-bold">
                {formatCurrency(totalPrice)}
            </span>
        </div>
    )
}
ShoppingCartTotalPrice.propTypes = {
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
