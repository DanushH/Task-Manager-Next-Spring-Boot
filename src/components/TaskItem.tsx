import { useState } from 'react';

import { Task } from '@/types/task';

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete, onUpdate }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleUpdate = () => {
    onUpdate(task.id, editedTitle.trim());
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        {isEditing ? (
          <input
            className="task-input"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span className={task.completed ? 'completed' : ''}>{task.title}</span>
        )}
      </div>

      <div className="button-group">
        {isEditing ? (
          <>
            <button className="save-btn" onClick={handleUpdate}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
