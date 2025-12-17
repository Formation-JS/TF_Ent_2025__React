import { useEffect, useState } from 'react';

export default function Horloge() {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        // Fonction avec l'effet à réaliser
        const timerId = setTimeout(() => {
            setNow(new Date());
        }, 200);

        return () => {
            // Fonction avec le cleanup de l'effet
            clearTimeout(timerId);
        }
    }, undefined);

    return (
        <>
            <title>{now.toLocaleTimeString()}</title>
            <p>{now.toLocaleTimeString()}</p>
        </>
    )
}