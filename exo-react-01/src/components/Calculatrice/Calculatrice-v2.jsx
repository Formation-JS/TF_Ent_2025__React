import { useActionState } from 'react';
import { useId } from 'react';

const CALCULATRICE_OPERATIONS = [
    { value: 'plus', text: '+' },
    { value: 'minus', text: '-' },
    { value: 'multi', text: 'x' },
    { value: 'div', text: '/' },
];


const initialState = {
    result: '',
    formData: null  // Objet JS avec les valeurs du formulaire 
}

/**
 * Correction avec le mecanisme des actions
 * @returns {JSX.Element} Le composant « Calculatrice »
 */
export default function CalculatriceV2() {

    // Identifiant pour l'accessibilité
    const inputId = useId();

    // L'action à réaliser
    const calculationAction = (prevState, formData) => {
        // Récuperation des valeur du formulaire
        /*
        const data = {
            nb1 : formData.get('nb1'),
            nb2 : formData.get('nb2'),
            op : formData.get('op'),
        };
        */
        const data = Object.fromEntries(formData.entries()); 

        if(!CALCULATRICE_OPERATIONS.find(op => data.op == op.value)) {
            return {
                formData: data,
                result: 'Opération non supportée !'
            };
        }

        if(data.op === 'div' && data.nb2 === '0') {
            return {
                formData: data,
                result : 'Division par zéro !'
            };
        }

        const val1 = Number(data.nb1);
        const val2 = Number(data.nb2);

        let result;
        switch (data.op) {
            case 'plus':
                result = `${val1} + ${val2} = ${val1 + val2}`;
                break;
            case 'minus':
                result = `${val1} - ${val2} = ${val1 - val2}`;
                break;
            case 'multi':
                result = `${val1} x ${val2} = ${val1 * val2}`;
                break;
            case 'div':
                result = `${val1} / ${val2} = ${val1 / val2}`;
                break;
        }

        return {
            formData: null,
            result
        };
    }

    // L'utilisation du state via l'action
    const [state, handleActionSubmit] = useActionState(calculationAction, initialState);

    return (
        <form action={handleActionSubmit}>
            <div>
                <label htmlFor={inputId + 'nb-1'}>Nb 1 : </label>
                <input id={inputId + 'nb-1'} type='text' name='nb1' defaultValue={state.formData?.nb1} />
            </div>
            <div>
                <label htmlFor={inputId + 'op'}>Opération : </label>
                <select id={inputId + 'op'} name='op' defaultValue={state.formData?.op} key={'op-'+ state.formData?.op}>
                    <option value='' hidden>Selectionner un opérateur</option>
                    {CALCULATRICE_OPERATIONS.map(op => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor={inputId + 'nb-2'}>Nb 2 : </label>
                <input id={inputId + 'nb-2'} type='text' name='nb2' defaultValue={state.formData?.nb2} />
            </div>
            <div>
                <button type="submit">Calculer</button>
                {' '}
                <input id={inputId + 'result'} type="text" aria-label='Resultat' 
                    value={state.result} readOnly />
            </div>
        </form>
    )
};