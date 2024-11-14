import PropTypes from "prop-types";
import { createContext, useState } from "react";

/* 1. Crear contexto */
export const CartContext = createContext();

/* 2. Proveer contexto */
export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    /**
     * this function add new items to cart array
     *
     * @function
     * @param {Object} item - new product in cart array
     */
    function addToCart(item) {
        setCart((prev => [...prev, item]));
    }

    /**
     * This function decrement de quantity of the id products if is in the array
     *
     * @function
     * @param {number} count - current count of the product
     * @param {string} id - unique identifier for the product
     * @param {number} [decrement=1] - amount to decrements, default to 1
     */
    function decrementItemCart(count, id, decrement = 1) {
        setCart(prev =>
            prev.map((el) => (
                el.id === id ? { ...el, count: count - decrement } : { ...el }
            ))
        )
    }

    /**
     * This function increment de quantity of the id products if is in the array
     *
     * @function
     * @param {number} count - current count of the product
     * @param {string} id - unique identifier for the product
     * @param {number} [decrement=1] -  amount to increments, default to 1
     */
    function incrementItemCart(count, id, increment = 1) {
        setCart(prev =>
            prev.map((el) => (
                el.id === id ? { ...el, count: count + increment } : { ...el }
            ))
        )
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, incrementItemCart, decrementItemCart }}>
            {children}
        </CartContext.Provider>
    )
}

CartContextProvider.propTypes = {
    children: PropTypes.node
}
