
export default function EmptyShoppingCart() {
    return (
        <div className="shopping-cart--empty flex flex-col justify-center items-center">
            <img src='./assets/images/illustration-empty-cart.svg' alt="empty-cart-image"></img>
            <p className='mt-4 font-bold text-sm text-rose-400'>Your added items will appear here</p>
        </div>
    )
}
