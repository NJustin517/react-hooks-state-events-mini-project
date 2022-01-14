import React from "react";

function CategoryFilter({ categories, selected, handleSelected }) {
  function handleClick(category) {
    handleSelected(category);
  }

  const buttons = categories.map((category) => {
    return (
      <button
        className={category === selected ? "selected" : ""}
        key={category}
        onClick={() => handleClick(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
