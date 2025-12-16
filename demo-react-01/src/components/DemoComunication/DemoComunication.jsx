import { useState } from 'react';
import CounterControl from './CounterControl';
import CounterDisplay from './CounterDisplay';

export default function DemoComunication() {

    const [count, setCount] = useState(0); 

    const handleCounterAction = (dir, step) => {
        // setCount(count => (dir === 'incr') ? count + step : count - step);

        if(dir === 'incr') {
            setCount(count => count + step);
        }
        else {
            setCount(count => count - step);
        }
    }

    return (
        <div>
            <CounterDisplay counterValue={count} />
            <CounterControl onCounterAction={handleCounterAction} />
            <CounterControl onCounterAction={handleCounterAction} step={5} />
            <CounterControl onCounterAction={handleCounterAction} step={10} />
        </div>
    )
};