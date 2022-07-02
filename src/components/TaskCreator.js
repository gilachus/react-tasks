import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //props
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // props.createNewTask(newTaskName)
    createNewTask(newTaskName);
    // localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="test"
        placeholder="Enter new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>save task</button>
    </form>
  );
};
