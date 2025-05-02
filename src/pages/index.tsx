import { useState } from 'react';

import { Task } from '@/types/task';

import MainLayout from '@/layouts/MainLayout';

import AddTaskForm from '@/components/AddTaskForm';
import TaskItem from '@/components/TaskItem';

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    return 0;
  };

  const updateTask = (id: string, newTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  return (
    <MainLayout>
      <AddTaskForm onAddTask={addTask}></AddTaskForm>

      {/* TASK LIST */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-state"> No tasks yet. Add your first one! 🎉</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  );
}
