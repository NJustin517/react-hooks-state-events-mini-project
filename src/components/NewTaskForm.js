import React from "react";

function NewTaskForm({
  categories,
  formState,
  textState,
  categoryState,
  handleFormState,
  onTaskFormSubmit,
}) {
  const newCategories = categories
    .filter((item) => {
      if (item === "All") {
        return false;
      }
      return true;
    })
    .map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });

  return (
    <form
      value={formState}
      onSubmit={onTaskFormSubmit}
      className="new-task-form"
    >
      <label>
        Details
        <input
          value={textState}
          onChange={handleFormState}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          value={categoryState}
          onChange={handleFormState}
          name="category"
        >
          {newCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
