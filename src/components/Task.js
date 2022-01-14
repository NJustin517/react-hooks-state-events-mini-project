import React from "react";

function Task({ text, category, updateTaskList }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => updateTaskList(text)} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
