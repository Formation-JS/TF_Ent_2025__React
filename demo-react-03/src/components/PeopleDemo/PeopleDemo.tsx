import { useActionState } from 'react';
import type { Person, PersonId } from '../../@types/person';

type PeopleActionState = {
    people: Person[];
};

export default function PeopleDemo() {

    const peopleAction = async (state: PeopleActionState, formData: FormData): Promise<PeopleActionState> => {

        // ↓ Pour la récuperation des données d'un form, utiliser un package de validation (zod)
        const data: Person = {
            id: `demo-${Math.random()}`,
            email: formData.get('email') as string,
            age: parseFloat(formData.get('age') as string)
        };

        // Ajout de la personne dans le state de l'action
        return {
            people: [...state.people, data]
        };
    };

    const [state, handlePeopleSubmit] = useActionState(peopleAction, { people: [] });

    return (
        <>
            <h2>Formulaire et liste en TS</h2>
            <h3>Ajouter un élément</h3>
            <form action={handlePeopleSubmit}>
                <label htmlFor='email'>Email : </label>
                <input id='email' type="email" name='email' />
                <label htmlFor='age'>Age : </label>
                <input id='age' type="number" name='age' />
                <button type="submit">Ajouter</button>
            </form>
            <h3>Liste des éléments</h3>
            <ul>
                {state.people.map(person => (
                    <PeopleDemoListItem {...person} onPersonSelect={console.log} />
                ))}
            </ul>
        </>
    );
}

type PeopleDemoListItemProps = Person & {
    onPersonSelect?: (id: PersonId) => void;
};
function PeopleDemoListItem({ id, email, age, onPersonSelect = () => { } }: PeopleDemoListItemProps) {

    return (
        <li onClick={() => onPersonSelect(id)}>
            {email} - {age} ans
        </li>
    );
}