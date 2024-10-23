import Button from "./Button";
import Icon from "./Icon";

export default function ProductCardItem() {
    return (
        <div className="cart-item py-4 border-b flex flex-row justify-between items-center">
            <div className="cart-item__content">
                <p className="cart-item__content__name text-sm font-semibold mb-2">Classic Tiramisu</p>
                <div className="cart-item__details text-sm font-regular flex flex-row gap-2">
                    <span className="cart-item__details__count text-red  font-semibold">x1</span>
                    <span className="cart-item__details__price text-rose-300">@$5.50</span>
                    <span className="cart-item__details__total text-rose-400">$5.50</span>
                </div>
            </div>
            <div className="cart-item__button">
                <Button icon={true}>
                    <Icon extraClasses="border border-rose-300 rounded-full invert-0 hover:invert">
                        <img src="/assets/images/icon-remove-item.svg" alt="icon" />
                    </Icon>
                </Button>
            </div>
        </div>
    )
}
