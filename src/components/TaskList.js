import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, filter, setTaskList }) {
  const filteredTaskList = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }

    return task.category === filter;
  });

  function handleTaskList(text) {
    const updatedList = tasks.filter((task) => {
      return task.text !== text;
    });

    setTaskList(updatedList);
  }

  const displayList = filteredTaskList.map((task) => {
    return (
      <Task
        className="task"
        key={task.text}
        text={task.text}
        category={task.category}
        updateTaskList={handleTaskList}
      />
    );
  });

  return <div className="tasks">{displayList}</div>;
}

export default TaskList;
