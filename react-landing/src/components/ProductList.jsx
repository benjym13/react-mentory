export default function ProductList() {
    return(
        <div>
            <div className="product-list__container">
                <h1 className="text-4xl font-bold mb-8">Desserts</h1>
                <div className="product-list__list grid grid-cols-6 gap-6">
                    <div className="product-item col-span-2">
                        <div className="product-item__img-container overflow-hidden rounded-lg mb-8">
                            <img className="w-full aspect-square" src="./assets/images/image-waffle-desktop.jpg" alt="" />
                        </div>
                        <div className="product-item__content flex flex-col gap-1.5 font-semibold">
                            <p className="text-sm text-rose-500">Waffle</p>
                            <p className="text-base">Waffle with Berries</p>
                            <p className="text-base text-red">$6,50</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}