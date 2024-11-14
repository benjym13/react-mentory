import PropTypes from "prop-types";
import { useMemo } from "react";
import ModalProductCartItem from "./ModalProductCartItem";


export default function ModalProductCartList({ items }) {

    const memoizedModalProductCardList = useMemo(() => {
        return items.map((product) => (
            <li key={product.id} data-id={product.id}>
                <ModalProductCartItem product={product} />
            </li>

        ));
    }, [items])
    return (
        <div className="shopping-cart__order-list"><ul>{memoizedModalProductCardList}</ul></div>
    )
}

ModalProductCartList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string,
                count: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                image: PropTypes.shape({
                    desktop: PropTypes.string.isRequired,
                }).isRequired,
            }
        )
    )
}