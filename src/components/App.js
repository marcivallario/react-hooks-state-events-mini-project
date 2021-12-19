import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  function removeTask(removedTask) {
    const newArr = taskList.filter(task => (task.text !== removedTask))
    setTaskList(newArr);
  }

  function handleSelected(e) {
    setSelectedCategory(e.target.textContent);
  }
  
  const visibleTasks = taskList.filter(task => selectedCategory === "All" || task.category === selectedCategory
  );

  function onTaskFormSubmit(newTask) {
    const updatedTasks = [...taskList, newTask];
    setTaskList(updatedTasks);
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelected={handleSelected}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
