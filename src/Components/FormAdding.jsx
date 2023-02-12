import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";
const FormAdding = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    const oneTask = {
      name: taskName,
      id: uuidv4(),
    };
    addTask(oneTask);
  };
  return (
    <div>
      <h1>TasksList</h1>
      <form className={styles.Form} onSubmit={formSubmit}>
        <input
          className={styles.Input}
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button className={styles.Button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormAdding;
