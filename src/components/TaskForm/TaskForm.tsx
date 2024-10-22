import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
  addTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') {
        setError('El título de la tarea debe contener letras y no puede estar vacío.');
      } else {
        addTask(title);
        setTitle('');
        setError(null);
      }
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar una tarea"
        className='name-task'
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className='add-task'>Agregar</button>
    </form>
  );
};

export default TaskForm;