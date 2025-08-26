// src/components/PriorityLegend.js
import React from 'react';

function PriorityLegend() {
  return (
    <div className="priority-legend">
      <div className="priority-label">
        <div className="priority-color high"></div>
        <span>High Priority - Shifts existing tasks</span>
      </div>
      <div className="priority-label">
        <div className="priority-color medium"></div>
        <span>Medium Priority - May shift low-priority tasks</span>
      </div>
      <div className="priority-label">
        <div className="priority-color low"></div>
        <span>Low Priority - Gets shifted by higher priorities</span>
      </div>
    </div>
  );
}

export default PriorityLegend;