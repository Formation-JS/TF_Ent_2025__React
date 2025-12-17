import { useId } from 'react';
import style from './TaskForm.module.css';
import { useActionState } from 'react';

export default function TaskForm_Action({ onTaskSubmit }) {

    // L'id pour l'accessibilité
    const inputId = useId();

    // Traitement via une action du formulaire
    const validationAction = async (state, formData) => {
        // Récuperation des données du formData en objet JS
        const data = Object.fromEntries(formData.entries());

        // Test de garde pour la validation des données
        if (!data.name || !['low', 'normal', 'urgent'].includes(data.priority)) {
            // Envoi d'un state en cas d'erreur
            return {
                errorMessage: 'Le formulaire est invalide !',
                data
            };
        }

        // Envoyer la nouvelle tache au composant parent
        onTaskSubmit(data);

        // Envoi d'un state en cas de réussite
        return {
            errorMessage: null,
            data: null
        };
    };

    // Utilisation de l'action avec un state
    const [state, handleActionSubmit] = useActionState(validationAction, { errorMessage: null, data: null });

    // Le rendu
    return (
        <form className={style['task-form']} action={handleActionSubmit}>
            <div className={style['task-form-name'] + ' ' + (state.errorMessage ? style['task-error'] : '')}>
                <label htmlFor={inputId + 'name'}>Nom</label>
                <input id={inputId + 'name'} type='text' name='name' defaultValue={state.data?.name} />
            </div>
            <div className={style['task-form-desc']}>
                <label htmlFor={inputId + 'desc'}>Description</label>
                <textarea id={inputId + 'desc'} name='desc' defaultValue={state.data?.desc} />
            </div>
            <div className={style['task-form-prio']}>
                <label htmlFor={inputId + 'prio'}>Priorité</label>
                <select id={inputId + 'prio'} name='priority' defaultValue={state.data?.priority} key={'prio-' + state.data?.priority} >
                    <option value="low">Basse</option>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                </select>
            </div>
            <div className={style['task-form-btn']}>
                <button type='submit'>Ajouter</button>
            </div>
            <div className={style['task-form-error-msg']}>
                {state.errorMessage && (<p>Erreur : <span>{state.errorMessage}</span></p>)}
            </div>
        </form>
    );
}