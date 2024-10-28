import Banner from './Banner';
import Button from './Button';
import Icon from './Icon';
import ProductCardItem from './ProductCardItem';

export default function ShoppingCart() {
  /* MOCK DATA DE UNA POSIBLE LISTA DE CARRITO DE COMPRA */
  const initialValue = [
    {
      count: 3,
      name: 'Classic Tiramisu',
      price: 7.0,
    },
    {
      count: 1,
      name: 'Waffle with Berries',
      price: 6.5,
    },
  ];
  /* CREAR UNA VARIABLE O UN COMPONENTE */
  const productCardList = initialValue.map((product, index) => {
    return <ProductCardItem product={product} key={index + 1} />;
  });
  const totalPrice = initialValue.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <div className="shopping-cart p-8 bg-white rounded-lg">
      <div className="shopping-cart__container">
        <p className="text-xl font-bold mb-4 text-red">Your Cart(7)</p>
        <div className="shopping-cart__order-list">{productCardList}</div>
        <div className="shopping-cart__total flex flex-row justify-between py-5">
          <span className="shopping-cart__total__text text-sm text-gray-500">
            Order Total
          </span>
          <span className="shopping-cart__total__price text-xl font-bold">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <Banner>
          <Icon>
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
          </Icon>
          <p className="text-sm">
            This is a <b>carbon-neutral</b> delivery
          </p>
        </Banner>
        <div className="mt-6">
          <Button>Confirm Order</Button>
        </div>
      </div>
    </div>
  );
}
