// src/App.js
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PriorityLegend from './components/PriorityLegend';
import TaskForm from './components/TaskFrom';
import TaskList from './components/TaskList';

function App() {
  // Load tasks from localStorage or use initial tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks 
      ? JSON.parse(savedTasks) 
      : [
          
        ];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task with priority handling
  const addTask = (newTask) => {
    setTasks(prevTasks => {
      // Create a new array with the new task
      const updatedTasks = [...prevTasks, newTask];
      
      // Sort tasks by time and priority
      const sortedTasks = sortTasks(updatedTasks);
      
      // Handle time shifting for lower priority tasks
      return shiftTasksForPriority(sortedTasks, newTask);
    });
  };

  // Sort tasks by time and priority
  const sortTasks = (taskList) => {
    return [...taskList].sort((a, b) => {
      // First sort by scheduled time
      if (new Date(a.time) < new Date(b.time)) return -1;
      if (new Date(a.time) > new Date(b.time)) return 1;
      
      // If same time, sort by priority (high first)
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  // Shift lower priority tasks when high priority is added
  const shiftTasksForPriority = (taskList, newTask) => {
    // Find the index of the new task
    const newTaskIndex = taskList.findIndex(task => task.id === newTask.id);
    
    // Only shift if it's high or medium priority
    if (newTask.priority === 'high' || newTask.priority === 'medium') {
      return taskList.map((task, index) => {
        // Skip tasks before the new task
        if (index <= newTaskIndex) return task;
        
        const taskTime = new Date(task.time);
        const newTaskTime = new Date(newTask.time);
        
        // Only shift tasks that are at the same time or later
        if (taskTime >= newTaskTime) {
          // Calculate shift based on new task's priority and target task's priority
          let shiftMinutes = 0;
          
          if (newTask.priority === 'high') {
            // High priority shifts all tasks by 30 minutes
            shiftMinutes = 30;
          } else if (newTask.priority === 'medium' && task.priority === 'low') {
            // Medium priority shifts only low priority tasks by 15 minutes
            shiftMinutes = 15;
          }
          
          // Apply shift if needed
          if (shiftMinutes > 0) {
            taskTime.setMinutes(taskTime.getMinutes() + shiftMinutes);
            return {
              ...task,
              time: taskTime.toISOString()
            };
          }
        }
        
        return task;
      });
    }
    
    return taskList;
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="main-content">
          <div className="form-section">
            <h2>Add New Task</h2>
            <TaskForm addTask={addTask} />
            <PriorityLegend />
          </div>
          
          <div className="tasks-section">
            <h2>Scheduled Tasks</h2>
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;