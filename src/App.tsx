import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskCounter from './components/TaskCounter/TaskCounter';
import Task from './model/task.ts';

const App : React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task ={
      id: uuidv4(),
      title: title,
      completed: false
    }

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const checkComplete = (id: string) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Aplicacion de Gestion de Tareas</h4>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} checkComplete={checkComplete} deleteTask={deleteTask}/>
      <TaskCounter tasks={tasks}/>
    </div>
  );
}

export default App;
