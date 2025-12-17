import { useState } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm_Action';
import TaskList from '../../components/TaskList/TaskList';
import { nanoid } from 'nanoid';

export default function TodoApp() {

    // State pour gérer la liste des taches
    const [tasks, setTasks] = useState([]);

    // Méthode pour ajouter un élément
    const handleNewTask = (task) => {

        const newTask = {
            ...task,
            id: nanoid(),
            isDone: false
        };

        setTasks(prevTask => [newTask, ...prevTask]);
    };

    const handleDeleteTask = (id) => {

        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const handleCompleteTask = (id) => {
        // setTasks(prevTasks => prevTasks.map(task => (task.id !== id) ? task : { ...task, isDone: true }));

        setTasks(prevTasks => {
            const nextTasks = structuredClone(prevTasks);

            const indexTarget = nextTasks.findIndex(task => task.id === id);
            nextTasks[indexTarget].isDone = true;

            return nextTasks;
        });
    };

    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <TaskForm onTaskSubmit={handleNewTask} />

            <h2>Liste des tâches</h2>
            <TaskList tasks={tasks}
                onTaskDelete={handleDeleteTask}
                onTaskComplete={handleCompleteTask} />
        </>
    );
}