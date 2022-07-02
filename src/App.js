import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  function createNewTask(taskName) {
    // console.log('creando')
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }
  useEffect(() => {
    if(localStorage.getItem(tasksItems))
      setTasksItems(JSON.parse(localStorage.getItem(tasksItems)))
  }, [])
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
