import React, { useState } from "react";
import "./Task.css";

const Task = ({ tasks }) => {
  const [filter, setFilter] = useState("all");

  let filteredTasks = tasks;
  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.isCompleted === true);
  } else if (filter === "pending") {
    filteredTasks = tasks.filter((task) => task.isCompleted === false);
  }

  return (
    <div className="task-container">
      <div className="task__filter-options">
        <select
          name="filters"
          id="filters"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <div className="task-info">
                <h2 className="task-title">{task.title}</h2>
                <p className="task-description">{task.description}</p>
              </div>
              <div className="task-checkbox">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={task.isCompleted}
                  readOnly
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
