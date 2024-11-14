import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "./Icon";

/**
 * Renders an "Add to Cart" button with an icon. The button triggers the provided `onClick` 
 * function when clicked, allowing the product to be added to the cart.
 *
 * @component
 * @example
 * // The onClick function handles the event when the button is clicked
 * function handleAddToCart() {
 *    // Code to add item to cart
 * }
 * 
 * return <AddToCartButton onClick={handleAddToCart} />
 * 
 * @param {Function} props.onClick - Callback function executed on button clic
 * 
 * @returns {JSX.Element} - A styled "Add to Cart" button with an icon.
 */

export default function AddToCartButton({ onClick }) {
    return (
        <Button type="light" onClick={onClick}>
            <Icon>
                <img src="./assets/images/icon-add-to-cart.svg" alt="" />
            </Icon>
            Add to cart
        </Button>
    )
}

AddToCartButton.propTypes = {
    onClick: PropTypes.func.isRequired
}