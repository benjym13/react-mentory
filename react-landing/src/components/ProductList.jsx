import PropTypes from "prop-types"

export default function ProductList({children}) {
    return(
        <div>
            <div className="product-list__container">
                <h1 className="text-4xl font-bold mb-8">Desserts</h1>
                <div className="product-list__list grid grid-cols-6 gap-x-6 gap-y-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
ProductList.propTypes = {
    children: PropTypes.node.isRequired, 
};