import { useState } from "react";

const INITIAL_COUNT = 0;


export default function Compteur({step = 1}) {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = () => {
        setCount(prevCount => prevCount + step);
    }

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={handleIncr}>+ {step}</button>
            {count != INITIAL_COUNT && (
                <button onClick={handleReset}>Reset </button>
            )}
        </div>
    )
}