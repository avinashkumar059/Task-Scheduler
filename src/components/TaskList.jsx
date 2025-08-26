// src/components/TaskList.js
import React from 'react';

function TaskList({ tasks, deleteTask }) {
  // Format date for display
  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div>📋</div>
        <h3>No Tasks Scheduled</h3>
        <p>Add your first task using the form on the left</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task ${task.priority}`}>
          <div className="task-header">
            <div className="task-title">{task.title}</div>
            <div className="task-priority">
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
            </div>
          </div>
          <div className="task-description">{task.description}</div>
          <div className="task-footer">
            <div>⏰ {formatDateForDisplay(task.time)}</div>
            <div className="task-actions">
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;