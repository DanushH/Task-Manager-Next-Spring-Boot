import { useState } from 'react';

import { validateTaskTitle } from '@/utils/validation';

type AddTaskFormProps = {
  onAddTask: (title: string) => void;
};

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTaskTitle(title)) {
      alert('Task must be 1-100 characters long.');
      setTitle('');
      return;
    }
    onAddTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
