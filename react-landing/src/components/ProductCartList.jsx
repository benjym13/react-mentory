import { useMemo } from "react";
import ProductCardItem from "./ProductCardItem";
import PropTypes from "prop-types";


export default function ProductCartList({ items }) {

    const memoizedProductCardList = useMemo(() => {
        return items.map((product) => (
            <li key={product.id} data-id={product.id}>
                <ProductCardItem product={product} />
            </li>

        ));
    }, [items])
    return (
        <div className="shopping-cart__order-list"><ul>{memoizedProductCardList}</ul></div>
    )
}

ProductCartList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string,
                count: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
            }
        )
    )
}