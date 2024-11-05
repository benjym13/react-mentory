import PropTypes from "prop-types";
import { createContext, useState } from "react";

/* 1. Crear contexto */
export const CartContext = createContext();

/* 2. Proveer contexto */
export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

CartContextProvider.propTypes = {
    children: PropTypes.node
}
