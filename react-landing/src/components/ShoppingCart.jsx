import Banner from "./Banner";
import Button from "./Button";
import Icon from "./Icon";
import ProductCardItem from "./ProductCardItem";


export default function ShoppingCart() {
    return (
        <div className="shopping-cart p-8 bg-white rounded-lg">
            <div className="shopping-cart__container">
                <p className="text-xl font-bold mb-4 text-red">Your Cart(7)</p>
                <div className="shopping-cart__order-list">
                    <ProductCardItem/>
                    <ProductCardItem/>
                    <ProductCardItem/>
                </div>
                <div className="shopping-cart__total flex flex-row justify-between py-5">
                    <span className="shopping-cart__total__text text-sm text-gray-500">Order Total</span>
                    <span className="shopping-cart__total__price text-xl font-bold">$46.50</span>
                </div>
                <Banner>
                    <Icon>
                        <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                    </Icon>
                    <p className="text-sm">This is a <b>carbon-neutral</b> delivery</p>
                </Banner>
                <div className="mt-6">
                    <Button>
                        Confirm Order
                    </Button>
                </div>
            </div>
        </div>
    )
}
