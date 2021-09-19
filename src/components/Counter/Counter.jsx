import React, { useState } from "react";

import './Counter.scss';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1)
    };

    const decrement = () => {
        setCount(prevState => prevState - 1)
    };
        
    return (
        <div className="counter-box d-flex justify-content-center">
        <button type="button"
            className="btn-outline-primary btn-sm"
            onClick={increment}
        >+</button>
        <span className="count">{count}</span>
        <button type="button"
            className="btn-outline-success btn-sm"
            onClick={decrement}
        >-</button>
        </div>
    )
}

export default Counter;