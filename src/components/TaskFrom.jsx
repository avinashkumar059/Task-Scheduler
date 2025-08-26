// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  // Default time - next hour
  const nextHour = new Date();
  nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(nextHour.toISOString().slice(0, 16));
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new task object
    const newTask = {
      id: Date.now(),
      title,
      description,
      time: new Date(time).toISOString(),
      priority
    };
    
    // Add task to the list
    addTask(newTask);
    
    // Reset form
    setTitle('');
    setDescription('');
    setTime(nextHour.toISOString().slice(0, 16));
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="taskTitle">Task Title</label>
        <input 
          type="text" 
          id="taskTitle" 
          placeholder="What needs to be done?" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="taskDescription">Description</label>
        <textarea 
          id="taskDescription" 
          placeholder="Add details about your task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      
      <div className="form-group">
        <label htmlFor="taskTime">Scheduled Time</label>
        <input 
          type="datetime-local" 
          id="taskTime" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required 
        />
      </div>
      
      <div className="form-group">
        <label>Priority</label>
        <div className="priority-options">
          <div 
            className={`priority-option high ${priority === 'high' ? 'selected' : ''}`}
            onClick={() => setPriority('high')}
          >
            High
          </div>
          <div 
            className={`priority-option medium ${priority === 'medium' ? 'selected' : ''}`}
            onClick={() => setPriority('medium')}
          >
            Medium
          </div>
          <div 
            className={`priority-option low ${priority === 'low' ? 'selected' : ''}`}
            onClick={() => setPriority('low')}
          >
            Low
          </div>
        </div>
      </div>
      
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;