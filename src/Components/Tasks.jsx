import Task from "./Task.jsx";
const Tasks = (props) => {
   const {tasks,deleteTask} = props;
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
};

export default Tasks;
