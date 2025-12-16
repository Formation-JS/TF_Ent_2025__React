import { useState } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
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

        setTasks(prevTask => prevTask.filter(task => task.id !== id));
    };

    const handleCompleteTask = (id) => {

        setTasks(prevTask => prevTask.map(task => task.id !== id ? task : { ...task, isDone: true }));
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