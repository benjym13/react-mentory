import PropTypes from "prop-types";
import Button from "./Button";
import Icon from "./Icon";

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