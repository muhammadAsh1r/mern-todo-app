import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit({ title, description, isCompleted });
    setTitle("");
    setDescription("");
    setIsCompleted(false);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter title..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          className="form-textarea"
          placeholder="Enter your description here..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="form-group checkbox-group">
        <label htmlFor="completed" className="checkbox-label">
          Completed
        </label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          className="checkbox-input"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
      </div>
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
