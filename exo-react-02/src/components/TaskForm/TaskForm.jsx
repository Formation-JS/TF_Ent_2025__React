import { useId } from 'react';
import style from './TaskForm.module.css';

export default function TaskForm() {
    const inputId = useId();

    return (
        <form className={style['task-form']}>
            <div className={style['task-form-name']}>
                <label htmlFor={inputId + 'name'}>Nom</label>
                <input id={inputId + 'name'} type='text' />
            </div>
            <div className={style['task-form-desc']}>
                <label htmlFor={inputId + 'desc'}>Description</label>
                <textarea id={inputId + 'desc'} />
            </div>
            <div className={style['task-form-prio']}>
                <label htmlFor={inputId + 'prio'}>Priorité</label>
                <select id={inputId + 'prio'}>
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