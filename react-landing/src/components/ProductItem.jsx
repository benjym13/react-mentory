import PropTypes from "prop-types"
import Button from "./Button"
import Icon from "./Icon"
import { useState } from "react"
import Counter from "./Counter";

export default function ProductItem({product}){
    const [isCounterVisible, setCounterVisible] = useState(false);
    function handleClick() {
        setCounterVisible(true);
    }
    const buttonContent = 
        isCounterVisible ? 
            (
                <Counter />
            ) : (
                <Button type="light" onClick={handleClick}>
                    <Icon>
                        <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                    </Icon>
                    <p>Add to cart</p>
                </Button>
            );

    return (
        <div className="product-item">
            <div className="relative">
                <div className="product-item__img-container flex justify-center overflow-hidden rounded-lg mb-8 ">
                    <img className="w-full aspect-square" src={product.image.desktop} alt="" />
                    <div className="absolute bottom-0 translate-y-2/4 w-full px-10">
                        { buttonContent }
                    </div>
                </div>
            </div>
            <div className="product-item__content flex flex-col gap-1.5 font-semibold">
                <p className="text-sm text-rose-500">{product.category}</p>
                <p className="text-base">{product.name}</p>
                <p className="text-base text-red">${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
ProductItem.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.shape({
            desktop: PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
}