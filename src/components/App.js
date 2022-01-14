import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState([...TASKS]);
  const [selected, setSelected] = useState("All");
  const [formState, setFormState] = useState({
    text: "",
    category: "Code",
  });

  function handleSelected(category) {
    setSelected(category);
  }

  function handleFormState(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: formState.text,
      category: formState.category,
    };
    console.log(newTask);

    setTaskList([...taskList, newTask]);
    setFormState({
      text: "",
      category: "",
    });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selected={selected}
        handleSelected={handleSelected}
      />
      <NewTaskForm
        categories={CATEGORIES}
        textState={formState.text}
        categoryState={formState.category}
        formState={formState}
        handleFormState={handleFormState}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList filter={selected} tasks={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
