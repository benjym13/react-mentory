
import Button from "./Button";
import Icon from "./Icon";
import PropTypes from "prop-types";


export default function Counter({value, onDecrement, onIncrement}) {
    
    /* function handleClickDecrement() {
        console.log(value - 1);
        return value - 1;
    } */
    return (
        <div className="counter w-full p-3 rounded-full bg-red text-white flex justify-between items-center gap-3 text-sm  font-semibold text-center">
            <Button icon={true} onClick={onDecrement}>
                <Icon extraClasses="border border-white rounded-full">
                    <img src="/assets/images/icon-decrement-quantity.svg" alt="icon" />
                </Icon>
            </Button>
            <span className="count">{value}</span>
            <Button icon={true} onClick={onIncrement}>
                <Icon extraClasses="border border-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                </Icon>
            </Button>
        </div>
    )
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired
}