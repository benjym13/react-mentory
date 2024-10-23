import PropTypes from "prop-types"
import Icon from "./Icon"

const BUTTON_TYPES = {
    light: 'bg-white text-black border-2 border-rose-300 hover:text-red hover:border-red',
    dark : 'bg-red text-white'
};
export default function Button({children, icon, type = 'dark'}) {
    const commom = 'w-full py-3 rounded-full flex justify-center items-center gap-3 text-sm  font-semibold text-center';
    const buttonType = BUTTON_TYPES[type]
    const styles = `${commom}, ${buttonType} ${icon ? 'bg-transparent' : ''}`.trim();

    return (
        <button className={styles} type="button">
            {
                icon ? (
                    <Icon>
                        <img src={`/assets/images/${icon}.svg`} alt="{`${icon} icon`}" />
                    </Icon>
                ) :              
                children
            }
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['light', 'dark'])
}