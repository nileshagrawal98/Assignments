import { useState } from "react"

function Counter({initial}) {

    const [count, setCount] = useState(initial);

    const changeCount = (value) => {
        setCount(count + value);
    }

    const double = () => {
        setCount(count * 2);
    }

    return <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => changeCount(1)}>Increment</button>
        <button onClick={() => changeCount(-1)}>Decrement</button>
        <button onClick={double}>Double</button>
        {/* <button onClick={() => changeCount(count)}>Double</button>  */}
    </div>
}

export default Counter;