import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "primer tarea", done: false },
    { name: "segunda tarea", done: false },
  ]);
  function createNewTask(taskName) {
    // console.log('creando')
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems]);
  return (
    <div className="App">
      {/* <h1>hello world</h1> */}
      {/* <input type='test' placeholder='Enter new task' onChange={(e) => console.log(e)}/> */}
      {/* <button onClick={() => alert('clicked')}>save task</button> */}
      <TaskCreator createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map(task => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
