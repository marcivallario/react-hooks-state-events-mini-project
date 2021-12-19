import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: 'Code',
  });

  function handleChange(event) {
    const key = event.target.name
    const value = event.target.value

    setFormData({
      ...formData,
      [key]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: 'Code',
    });
  }

  const categoryOptions = categories.filter(cat => cat !== "All");
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categoryOptions.map(category => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
