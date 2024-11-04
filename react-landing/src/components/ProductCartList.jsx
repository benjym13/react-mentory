import { useMemo } from "react";
import ProductCardItem from "./ProductCardItem";
import PropTypes from "prop-types";


export default function ProductCartList({ products }) {
    /* CREAR UNA VARIABLE O UN COMPONENTE */
    const memoizedProductCardList = useMemo(() => {
        return products.map((product, index) => (
            <ProductCardItem product={product} key={index + 1} />
        ));
    }, [products])
    return (
        <div className="shopping-cart__order-list">{memoizedProductCardList}</div>
    )
}

ProductCartList.propTypes = {
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