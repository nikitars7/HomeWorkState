import styles from "./Task.module.css";
const Task = (props) => {
  const { task, deleteTask } = props;
  return (
    <div className={styles.Task}>
      <h3 className={styles.Title}>{task.name}</h3>
      <button className={styles.Button} onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
