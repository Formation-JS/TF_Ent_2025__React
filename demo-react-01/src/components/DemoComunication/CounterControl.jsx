
// NOOP -> No Operation
//         () => {}

export default function CounterControl ({ step = 1, onCounterAction = () => {} }) {

    const handleIncr = () => {
        onCounterAction('incr', step);
    }

    return (
        <div>
            <button onClick={handleIncr}>+ {step}</button>
            {' '}
            <button onClick={() => onCounterAction('decr', step)}>- {step}</button>
        </div>
    );
}