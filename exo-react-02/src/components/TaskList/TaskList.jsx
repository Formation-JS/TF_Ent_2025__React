import style from './TaskList.module.css';

export default function TaskList({ tasks, onTaskDelete, onTaskComplete }) {

    return (
        <ul className={style['task-list']}>
            {tasks.map(task => (
                <TaskListItem key={task.id} {...task} onDelete={onTaskDelete} onComplete={onTaskComplete}  />
            ))}
        </ul>
    );
}

function TaskListItem({ id, name, desc, priority, isDone, onComplete, onDelete }) {
    return (
        <li className={style['task-list-item'] + ' ' + (isDone ? style['task-done'] : '')}>
            <div>
                <p className={style['task-title']}>
                    {name} {priority === 'urgent' && <span className='urgent'></span>}
                </p>
                {desc && (
                    <p>{desc}</p>
                )}
            </div>
            <div>
                <button onClick={() => onComplete(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
}