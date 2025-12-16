import { useId } from 'react';
import style from './TaskForm.module.css';
import { useState } from 'react';

export default function TaskForm({ onTaskSubmit }) {

    // L'id pour l'accessibilité
    const inputId = useId();

    // Les state pour le formulaire
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [prio, setPrio] = useState('normal');

    // Traitement au submit du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();

        // Envoyer la nouvelle tache au composant parent
        const data = { name, desc, priority: prio };
        onTaskSubmit(data);

        // Reset du formulaire (Via le state)
        setName('');
        setDesc('');
        setPrio('normal');
    }

    // Le rendu
    return (
        <form className={style['task-form']} onSubmit={handleSubmit}>
            <div className={style['task-form-name']}>
                <label htmlFor={inputId + 'name'}>Nom</label>
                <input id={inputId + 'name'} type='text' 
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={style['task-form-desc']}>
                <label htmlFor={inputId + 'desc'}>Description</label>
                <textarea id={inputId + 'desc'} 
                    value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div className={style['task-form-prio']}>
                <label htmlFor={inputId + 'prio'}>Priorité</label>
                <select id={inputId + 'prio'} value={prio} onChange={(e) => setPrio(e.target.value)} >
                    <option value="low">Basse</option>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                </select>
            </div>
            <div className={style['task-form-btn']}>
                <button type='submit'>Ajouter</button>
            </div>
        </form>
    );
}