import PropTypes from "prop-types"
import Button from "./Button"
import Icon from "./Icon"

export default function ProductItem({product}){
    return (
        <div className="product-item">
            <div className="relative">
                <div className="product-item__img-container flex justify-center overflow-hidden rounded-lg mb-8 ">
                    <img className="w-full aspect-square" src={product.image.desktop} alt="" />
                    <div className="absolute bottom-0 translate-y-2/4 w-full px-10">
                        <Button type="light">
                            <Icon>
                                <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                            </Icon>
                            <p>Add to cart</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product-item__content flex flex-col gap-1.5 font-semibold">
                <p className="text-sm text-rose-500">{product.category}</p>
                <p className="text-base">{product.name}</p>
                <p className="text-base text-red">${product.price}</p>
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