import React from 'react';
import './TaskList.css';
import Task from '../../model/task.ts'

interface TaskListProps {
    tasks: Task[];
    checkComplete: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, checkComplete, deleteTask }) => {

    return (
        <div className='tasks-container'>
            {
                tasks.map((task) => (
                    <div key={task.id} className={`card-task ${task.completed ? 'completed' : 'not-completed'}`}>
                        <div className='card-check'>
                            <p>{task.title}</p>
                            <input 
                                type='checkbox'
                                checked={task.completed}
                                onChange={() => checkComplete(task.id)}
                            />
                        </div>
                        <button onClick={() => deleteTask(task.id)} className='button-save'> 
                            Borrar
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList;