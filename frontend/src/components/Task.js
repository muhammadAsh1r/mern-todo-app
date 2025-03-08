import React from "react";
import "./Task.css";

const Task = ({ tasks }) => {
  return (
    <div className="task-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <div className="task-info">
                <h2 className="task-title">{task.title}</h2>
                <p className="task-description">{task.description}</p>
              </div>
              <div className="task-checkbox">
                <input type="checkbox" className="checkbox-input" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
