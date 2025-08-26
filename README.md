# Task-Scheduler
The Task Scheduler is a React-based web application designed to help users organize and manage their daily tasks with a focus on priority handling and time management.

# Key Features
  # 1.Component-Based Architecture
    App – Main container managing state and logic.
    Header – Static header for the application.
    TaskForm – Form to add new tasks (title, description, time, priority).
    TaskList – Displays all tasks.
    TaskItem – Individual task component with delete functionality.
    PriorityLegend – Visual guide for task priority levels.

  # 2.State Management
    - Uses React’s useState for task handling.
    - useEffect ensures persistence with localStorage, so tasks remain available after page reload.
    
  # 3.Priority Handling & Auto-Rescheduling
    High-priority tasks shift all subsequent tasks by 30 minutes.
    Medium-priority tasks shift only low-priority tasks by 15 minutes.
    Ensures important tasks always take precedence.

  # 4.User Experience Enhancements
    - Form validation to ensure meaningful input.
    - Color-coded priorities:
      🔴 High – Red
      🟡 Medium – Yellow
      🟢 Low – Green
    - Smooth animations for task cards.
    - Empty state view when no tasks exist.
    - Persistent storage using localStorage.

  # 5.Responsive UI Design
    Flexbox layout for adaptive structure.
    Card-based design with hover effects.
    Mobile-friendly with media queries.

# Implementation Steps
  - Initialize React project (npx create-react-app task-scheduler).
  - Build the App component with state management and localStorage integration.
  - Create Header and TaskForm components for structure and task input.
  - Implement TaskList and TaskItem for displaying and managing tasks.
  - Add priority shifting logic for automatic rescheduling.
  - Implement delete functionality for task removal.
  - Style components with CSS (inline styles or external file).

# Technology Stack
  - Frontend: React (JSX, useState, useEffect, props)
  - Storage: Browser localStorage
  - Styling: Flexbox, CSS (responsive design, hover effects, card layout)
