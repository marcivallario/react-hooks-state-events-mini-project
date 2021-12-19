import React from "react";

function CategoryFilter({categories, selectedCategory, handleSelected}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button 
          key={category}
          onClick={handleSelected}
          className={category === selectedCategory ? "selected" : ""}
          >{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
