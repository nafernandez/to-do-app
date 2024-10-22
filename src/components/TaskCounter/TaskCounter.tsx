import React from "react";
import Task from '../../model/task.ts';
import './TaskCounter.css';

interface TaskCounterProps {
    tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {

    const completedTasks = tasks.filter((task)=> task.completed).length;

    return (
        <div className="counter-container">
            <p>
                Tareas completadas: {completedTasks} de {tasks.length}
            </p>
        </div>
    )
}

export default TaskCounter;