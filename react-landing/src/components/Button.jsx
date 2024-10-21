import PropTypes from "prop-types"

export default function Button({children}) {
    return (
        <button className="w-full py-3 rounded-full bg-red text-white text-sm  text-center">
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired
}