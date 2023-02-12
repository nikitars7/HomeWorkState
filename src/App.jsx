import { useState } from "react";
import Form from "./Components/FormAdding";
import Tasks from "./Components/Tasks";
import styles from "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Form addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
