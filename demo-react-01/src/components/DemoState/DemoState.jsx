import { useState } from "react";

export default function DemoState () {

    const [collec, setCollec] = useState(['test'])
    console.log('Render' , collec.join(', '));
    
    
    const handleAddTruc = () => {
        // Bad pratice ↓
        /*
        setCollec([...prevCollec, 'truc']); ['test', 'truc']
        setCollec([...prevCollec, 'much']); ['test', 'much']
        */

        // Modification du state sur base d'une ancienne valeur de state ↓
        console.log('Avant' , collec.join(', '));
        setCollec(prevCollec => [...prevCollec, 'truc']); ['test', 'truc']
        setCollec(prevCollec => [...prevCollec, 'much']); ['test', 'truc', 'much']
        console.log('Apres' , collec.join(', '));
    };

    const handleReset = () => {
        // Modification du state ↓
        setCollec([]);
    }

    return (
        <div>
            <button onClick={handleAddTruc}>Ajouter un truc</button>
            <button onClick={handleReset}>Tout effacer</button>
            <ul>
                {collec.map((elem, idx) => (
                    <li key={idx}>{elem}</li>
                ))}
            </ul>
        </div>
    );
}