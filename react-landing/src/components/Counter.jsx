import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";


export default function Counter() {
    const [count, setCount] = useState(1);
    function handleClickIncrement() {
        setCount(
            count + 1
        )
    }
    function handleClickDecrement() {
        setCount(
            count - 1
        )
    }
    return (
        <div className="counter w-full p-3 rounded-full bg-red text-white flex justify-between items-center gap-3 text-sm  font-semibold text-center">
            <Button icon={true} onClick={handleClickDecrement}>
                <Icon extraClasses="border border-white rounded-full">
                    <img src="/assets/images/icon-decrement-quantity.svg" alt="icon" />
                </Icon>
            </Button>
            <span className="count">{count}</span>
            <Button icon={true} onClick={handleClickIncrement}>
                <Icon extraClasses="border border-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                </Icon>
            </Button>
        </div>
    )
}
