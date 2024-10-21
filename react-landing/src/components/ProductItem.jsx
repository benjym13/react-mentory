import PropTypes from "prop-types"
import Button from "./Button"

export default function ProductItem({product}){
    return (
        <div className="product-item">
            <div className="product-item__img-container overflow-hidden rounded-lg mb-8 relative">
                <img className="w-full aspect-square" src={product.image.desktop} alt="" />
                <div className="absolute bottom-1/2">
                    <Button>
                        Add to cart
                    </Button>
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