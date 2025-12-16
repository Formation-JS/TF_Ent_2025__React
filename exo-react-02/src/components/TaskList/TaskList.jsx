import style from './TaskList.module.css';

export default function TaskList() {

    const tasks = [
        { id: 1, name: 'Acheter du café', priority: 'urgent', isDone: false, desc: null },
        { id: 2, name: 'Réaliser l\'exercice', priority: 'normal', isDone: false, desc: 'Créer l\'application « Todo List »' },
        { id: 4, name: 'Tâche terminé', priority: 'normal', isDone: true, desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem minus eos nesciunt reiciendis illum esse.' },
    ]

    return (
        <ul className={style['task-list']}>
            {tasks.map(task => (
                <TaskListItem key={task.id} {...task} />
            ))}
        </ul>
    );
}

function TaskListItem({ name, desc, priority, isDone }) {
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
                <button disabled={isDone}>Terminer</button>
                <button>Supprimer</button>
            </div>
        </li>
    );
}