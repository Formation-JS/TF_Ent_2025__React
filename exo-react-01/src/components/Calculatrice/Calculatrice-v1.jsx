import { useState } from 'react';
import { useId } from 'react';

const CALCULATRICE_OPERATIONS = [
    { value: 'plus', text: '+' },
    { value: 'minus', text: '-' },
    { value: 'multi', text: 'x' },
    { value: 'div', text: '/' },
];

/**
 * Correction avec des composants controllé (Avec des state)
 * @returns {JSX.Element} Le composant « Calculatrice »
 */
export default function CalculatriceV1() {

    // Identifiant pour l'accessibilité
    const inputId = useId();

    // State (objet) pour la gestion du formulaire
    const [data, setData] = useState({
        nb1: '',
        nb2: '',
        op: '',
        res: ''
    });

    // Méthode pour synchroniser le state et les données du formulaires
    const handleUpdateInput = (event) => {
        // Récuperation de l'attribut "name" et "value" de l'input
        const { name, value } = event.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Méthode pour traiter le submit du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();

        const val1 = parseFloat(data.nb1);
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
                if(val2 === 0) {
                    result = 'Division par zéro !';
                }
                else {
                    result = `${val1} / ${val2} = ${val1 / val2}`;
                }
                break;
            default:
                result = 'Opération non supporté !';
                break;
        }

        setData({
            nb1: '',
            nb2: '',
            op: '',
            res: result
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={inputId + 'nb-1'}>Nb 1 : </label>
                <input id={inputId + 'nb-1'} type='text' name='nb1'  value={data.nb1} onChange={handleUpdateInput} />
            </div>
            <div>
                <label htmlFor={inputId + 'op'}>Opération : </label>
                <select id={inputId + 'op'} name='op' value={data.op} onChange={handleUpdateInput}>
                    <option value='' hidden>Selectionner un opérateur</option>
                    {CALCULATRICE_OPERATIONS.map(op => (
                        <option key={op.value} value={op.value}>{op.text}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor={inputId + 'nb-2'}>Nb 2 : </label>
                <input id={inputId + 'nb-2'} type='text' name='nb2' value={data.nb2} onChange={handleUpdateInput} />
            </div>
            <div>
                <button type="submit">Calculer</button>
                {' '}
                <input id={inputId + 'result'} type="text" aria-label='Resultat' value={data.res} readOnly />
            </div>
        </form>
    )
};