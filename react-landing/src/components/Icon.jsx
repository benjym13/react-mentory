import PropTypes from "prop-types"

export default function Icon({children}) {
    return (
        <div className="icon w-5 h-5">
            {children}
        </div>
    )
}

Icon.propTypes = {
    children: PropTypes.node.isRequired
}